import hashlib
import pathlib
import sys

MAGIC = bytes.fromhex("89504e470d0a1a0a")
WANT = {
    "portal-pr23-sample-out-5f84300/01-ready-phone-no-sample.png": "de2240dec2939107d235384385d677c68d363e44099143bb9a09ed862aef6017",
    "portal-pr23-sample-out-5f84300/02-care-talk-no-sample.png": "64334918059a66d5252478fba43dee5221fbb7ae84d4011a99e5fea6e3d5be14",
    "portal-pr23-sample-out-5f84300/03-desk-ready-no-sample.png": "b0622a8dbb29c8e04c03a7d19be74a79add9fcd539a396ce5a5601fec690d036",
}
for path, expect in WANT.items():
    data = pathlib.Path(path).read_bytes()
    if data[:8] != MAGIC:
        sys.exit(f"not a PNG: {path}")
    got = hashlib.sha256(data).hexdigest()
    if got != expect:
        sys.exit(f"hash mismatch {path} got={got} want={expect}")
    print(path, "ok", got)
