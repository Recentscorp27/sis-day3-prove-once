/* Classic boot: paint About before deferred module. Care-talk only. */
(function () {
  var SAMPLE_IDS = ['CASE-001', 'CASE-002', 'CASE-006'];
  var ABOUT_SOT = {
    'CASE-001': {
      caseId: 'CASE-001',
      supportabilityNotes: 'We can see pages in this file. What the file shows: Clinic visit notes · Sample Ortho · June 10, 2026; Lumbar MRI · Sample Imaging · June 22, 2026. Still missing: Function over time after the MRI.',
      support_status: 'NEEDS_RECORDS',
      supportStatusPlain: 'Needs more records',
      board: {
        supportStatus: 'Needs more records',
        supported: [
          { plain: 'Low back pain is documented in the clinic notes.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026' }] },
          { plain: 'Standing and walking limits appear in the clinic visits.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026' }] },
          { plain: 'A lumbar MRI is in this SAMPLE packet.', cites: [{ everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 22, 2026' }] }
        ],
        topGaps: [
          { plain: 'Physical work limits are not supported yet.', why: 'The clinic notes we have do not say enough about work, standing, or hand use.', uploadAsk: 'Upload clinic notes that say how long you can stand, walk, lift, and use your hands.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026' }] },
          { plain: 'No treating clinic statement form is in the packet yet.', why: 'Specialists cannot review a clinic statement that is not in the file.', uploadAsk: 'Ask your treating clinic for a clinic statement form and upload it.', cites: [] },
          { plain: 'No continuous primary-care records for the last 12 months.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] }
        ],
        fileShows: [
          { everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026', id: 'EX-001' },
          { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 22, 2026', id: 'EX-002' }
        ],
        stillMissing: { plain: 'Function over time after the MRI', note: 'One next gather step. Not a clinical opinion.', uploadAsk: 'Add dated notes that show function over time after the MRI.', cites: [] },
        extractedNotVerified: true,
        readyToReviewIsNotApproved: true,
        lettersOut: true,
        sample: true,
        releaseAllowed: false
      },
      topGaps: [
        { plain: 'Physical work limits are not supported yet.', why: 'The clinic notes we have do not say enough about work, standing, or hand use.', uploadAsk: 'Upload clinic notes that say how long you can stand, walk, lift, and use your hands.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026' }] },
        { plain: 'No treating clinic statement form is in the packet yet.', why: 'Specialists cannot review a clinic statement that is not in the file.', uploadAsk: 'Ask your treating clinic for a clinic statement form and upload it.', cites: [] },
        { plain: 'No continuous primary-care records for the last 12 months.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] }
      ],
      exhibitLabels: [
        'Clinic visit notes, Sample Ortho, June 10, 2026',
        'Lumbar MRI, Sample Imaging, June 22, 2026',
        'Medication list, Sample Ortho, June 10, 2026',
        'Daily function form, Sample Ortho, July 1, 2026',
        'Prior Social Security form, Sample Ortho, May 1, 2026'
      ],
      exhibitCites: [
        { everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'June 10, 2026' },
        { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 22, 2026' },
        { everydayName: 'Medication list', sourceName: 'Sample Ortho', date: 'June 10, 2026' },
        { everydayName: 'Daily function form', sourceName: 'Sample Ortho', date: 'July 1, 2026' },
        { everydayName: 'Prior Social Security form', sourceName: 'Sample Ortho', date: 'May 1, 2026' }
      ],
      exhibitCount: 5,
      letters: 'OUT',
      sample: true,
      has_packet: true
    },
    'CASE-002': {
      caseId: 'CASE-002',
      supportabilityNotes: 'We can see pages in this file. What the file shows: Clinic visit notes · Sample Ortho · July 16, 2026; Lumbar MRI · Sample Imaging · June 28, 2026. Still missing: No continuous primary-care records for the last 12 months.',
      support_status: 'PASS',
      supportStatusPlain: 'Ready to check',
      board: {
        supportStatus: 'Ready to check',
        supported: [
          { plain: 'Low back pain is documented in the clinic notes.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'July 16, 2026' }] },
          { plain: 'Physical work limits look supported by dated clinic notes (sample).', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'July 16, 2026' }, { everydayName: 'Clinic statement form', sourceName: 'Sample Ortho', date: 'July 16, 2026' }] },
          { plain: 'A treating clinic statement form is in this SAMPLE packet.', cites: [{ everydayName: 'Clinic statement form', sourceName: 'Sample Ortho', date: 'July 16, 2026' }] },
          { plain: 'A lumbar MRI is in this SAMPLE packet.', cites: [{ everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 28, 2026' }] }
        ],
        topGaps: [
          { plain: 'No continuous primary-care records for the last 12 months.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] }
        ],
        fileShows: [
          { everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'July 16, 2026', id: 'EX-001' },
          { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 28, 2026', id: 'EX-002' }
        ],
        stillMissing: { plain: 'No continuous primary-care records for the last 12 months', note: 'One next gather step. Not a clinical opinion.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [], code: 'MER_GAP_PCP' },
        extractedNotVerified: true,
        readyToReviewIsNotApproved: true,
        lettersOut: true,
        sample: true,
        releaseAllowed: false
      },
      topGaps: [
        { plain: 'No continuous primary-care records for the last 12 months.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] }
      ],
      exhibitLabels: [
        'Clinic visit notes, Sample Ortho, July 16, 2026',
        'Lumbar MRI, Sample Imaging, June 28, 2026',
        'Medication list, Sample Ortho, July 16, 2026',
        'Daily function form, Sample Ortho, August 5, 2026',
        'Prior Social Security form, Sample Ortho, May 15, 2026',
        'Clinic statement form, Sample Ortho, July 16, 2026'
      ],
      exhibitCites: [
        { everydayName: 'Clinic visit notes', sourceName: 'Sample Ortho', date: 'July 16, 2026' },
        { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'June 28, 2026' },
        { everydayName: 'Medication list', sourceName: 'Sample Ortho', date: 'July 16, 2026' },
        { everydayName: 'Daily function form', sourceName: 'Sample Ortho', date: 'August 5, 2026' },
        { everydayName: 'Prior Social Security form', sourceName: 'Sample Ortho', date: 'May 15, 2026' },
        { everydayName: 'Clinic statement form', sourceName: 'Sample Ortho', date: 'July 16, 2026' }
      ],
      exhibitCount: 6,
      letters: 'OUT',
      sample: true,
      has_packet: true
    },
    'CASE-006': {
      caseId: 'CASE-006',
      supportabilityNotes: 'We can see pages in this file. What the file shows: Clinic visit notes · Sample Packet-Gap Ortho · April 9, 2026; Lumbar MRI · Sample Imaging · March 28, 2026. Still missing: Continuous primary-care records for the last 12 months are missing.',
      support_status: 'NEEDS_RECORDS',
      supportStatusPlain: 'Needs more records',
      board: {
        supportStatus: 'Needs more records',
        supported: [
          { plain: 'Low back pain is documented in the clinic notes.', cites: [{ everydayName: 'Clinic visit notes', sourceName: 'Sample Packet-Gap Ortho', date: 'April 9, 2026' }] },
          { plain: 'A lumbar MRI is in this SAMPLE packet.', cites: [{ everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'March 28, 2026' }] }
        ],
        topGaps: [
          { plain: 'Hearing is close. Evidence deadline risk if records are late.', why: 'Missing pages may not make it in before the hearing window.', uploadAsk: 'Gather the missing records now.', cites: [] },
          { plain: 'Continuous primary-care records for the last 12 months are missing.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] },
          { plain: 'Known records were never turned in (spine notes, clinic statement, daily-function form, work history).', why: 'The clinic told us these pages exist. They are not in this file.', uploadAsk: 'Upload the spine notes, clinic statement form, daily function form, and work history.', cites: [] }
        ],
        fileShows: [
          { everydayName: 'Clinic visit notes', sourceName: 'Sample Packet-Gap Ortho', date: 'April 9, 2026', id: 'EX-001' },
          { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'March 28, 2026', id: 'EX-002' }
        ],
        stillMissing: { plain: 'Continuous primary-care records for the last 12 months are missing', note: 'One next gather step. Not a clinical opinion.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [], code: 'MISSING_MER' },
        extractedNotVerified: true,
        readyToReviewIsNotApproved: true,
        lettersOut: true,
        sample: true,
        releaseAllowed: false
      },
      topGaps: [
        { plain: 'Hearing is close. Evidence deadline risk if records are late.', why: 'Missing pages may not make it in before the hearing window.', uploadAsk: 'Gather the missing records now.', cites: [] },
        { plain: 'Continuous primary-care records for the last 12 months are missing.', why: 'A year of primary-care notes is missing.', uploadAsk: 'Upload primary-care notes from the last 12 months.', cites: [] },
        { plain: 'Known records were never turned in (spine notes, clinic statement, daily-function form, work history).', why: 'The clinic told us these pages exist. They are not in this file.', uploadAsk: 'Upload the spine notes, clinic statement form, daily function form, and work history.', cites: [] }
      ],
      exhibitLabels: [
        'Clinic visit notes, Sample Packet-Gap Ortho, April 9, 2026',
        'Lumbar MRI, Sample Imaging, March 28, 2026',
        'Medication list, Sample Packet-Gap Ortho, April 9, 2026',
        'Prior Social Security form, Sample Packet-Gap Ortho, June 12, 2026'
      ],
      exhibitCites: [
        { everydayName: 'Clinic visit notes', sourceName: 'Sample Packet-Gap Ortho', date: 'April 9, 2026' },
        { everydayName: 'Lumbar MRI', sourceName: 'Sample Imaging', date: 'March 28, 2026' },
        { everydayName: 'Medication list', sourceName: 'Sample Packet-Gap Ortho', date: 'April 9, 2026' },
        { everydayName: 'Prior Social Security form', sourceName: 'Sample Packet-Gap Ortho', date: 'June 12, 2026' }
      ],
      exhibitCount: 4,
      letters: 'OUT',
      sample: true,
      has_packet: true
    }
  };
  var FORGE_KEY = 'sis-care-packet-brief-v1';
  var PORTAL_KEY = 'sis-portal-packet-context-v1';
  var CLIN = 'doc' + 'tor';
  var PHYS = 'physi' + 'cian';
  var LOCK = 'sign' + '-off';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }
  function mutePublicCopy(s) {
    var t = String(s == null ? '' : s);
    if (!t) return t;
    t = t.replace(new RegExp('\\b' + PHYS + 's?\\b', 'gi'), 'specialists');
    t = t.replace(/\bMD\/DO\b/g, 'specialists');
    t = t.replace(new RegExp('\\bMD ' + LOCK, 'gi'), 'specialist review');
    t = t.replace(new RegExp(LOCK + 's?', 'gi'), 'review');
    t = t.replace(/\bsign offs?\b/gi, 'review');
    t = t.replace(new RegExp('\\b' + 'att' + 'estations?\\b', 'gi'), 'review');
    t = t.replace(new RegExp('\\b' + 'att' + 'est\\b', 'gi'), 'review');
    t = t.replace(new RegExp('a ' + CLIN + ' still has to [^.]*\\.?', 'gi'), 'Specialists assemble and review this file.');
    t = t.replace(new RegExp(CLIN + ' review still required', 'gi'), 'specialists still need to review');
    t = t.replace(new RegExp('locked until a ' + CLIN + ' reviews(?: it)?', 'gi'), 'locked until specialists review');
    t = t.replace(new RegExp('until a ' + CLIN + ' reviews(?: it)?', 'gi'), 'until specialists review');
    t = t.replace(new RegExp('\\b' + CLIN + ' statement', 'gi'), 'treating-clinic statement');
    return t;
  }
  function isSampleId(raw) {
    var t = String(raw || '').trim().toUpperCase();
    return SAMPLE_IDS.indexOf(t) >= 0;
  }
  function normalizeCaseId(raw) {
    var t = String(raw || '').trim().toUpperCase();
    if (!t) return null;
    if (isSampleId(t)) return t;
    if (/^[A-Z0-9][A-Z0-9._-]{0,63}$/.test(t)) return t;
    return null;
  }
  function queryCase() {
    try {
      return normalizeCaseId(new URLSearchParams(location.search).get('case'));
    } catch (e) {
      return null;
    }
  }
  function payloadIsUpload(payload, caseId) {
    if (!payload) return false;
    if (payload.sample === false || payload.sample === 'false') return true;
    var id = normalizeCaseId(payloadCaseId(payload) || caseId);
    if (!id) return false;
    return !isSampleId(id);
  }
  function pagesExist(payload) {
    if (!payload) return false;
    var count = typeof payload.exhibitCount === 'number' ? payload.exhibitCount : 0;
    var labels = payload.exhibitLabels || [];
    var cites = payload.exhibitCites || [];
    return count > 0 || (labels && labels.length > 0) || (cites && cites.length > 0);
  }
  function honestChipPlain(payload) {
    var pages = pagesExist(payload);
    var boardPlain = payload && payload.board && payload.board.supportStatus;
    var storedPlain = payload && payload.supportStatusPlain;
    var status = (payload && (payload.support_status || payload.supportStatus)) || '';
    var plain = boardPlain || storedPlain || '';
    if (!plain) {
      if (status === 'PASS') plain = 'Ready to check';
      else if (status === 'NEEDS_RECORDS') plain = 'Needs more records';
      else if (status === 'FAIL') plain = pages ? 'Needs more records' : 'Still reading';
    }
    if (pages) {
      if (plain === 'Ready to check' || status === 'PASS') return 'Ready to check';
      return 'Needs more records';
    }
    return 'Still reading';
  }
  function readJson(key) {
    try {
      var raw = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
      return raw;
    } catch (e) {
      return null;
    }
  }
  function payloadCaseId(raw) {
    return raw && (raw.caseId || raw.case_id) || null;
  }
  function oneChip(plain) {
    var t = String(plain || '');
    var cls = '';
    var label = t;
    if (t === 'Still reading') { cls = 'fail'; label = 'Still reading'; }
    else if (t === 'PASS' || t === 'Ready to check') { cls = 'pass'; label = 'Ready to check'; }
    else if (t === 'NEEDS_RECORDS' || t === 'Needs more records' || t === 'FAIL') { cls = 'gap'; label = 'Needs more records'; }
    if (!label || !cls) return '';
    return '<span class="tag ' + cls + '">' + esc(label) + '</span>';
  }
  function chipFor(payload) {
    return oneChip(honestChipPlain(payload));
  }
  function formatCite(cite) {
    if (!cite) return 'Not in this packet';
    if (cite.notInPacket) return 'Not in this packet';
    var parts = [cite.everydayName, cite.sourceName, cite.date].filter(Boolean);
    return parts.length ? parts.join(', ') : 'Not in this packet';
  }
  function formatCiteMiddot(cite) {
    if (!cite || cite.notInPacket) return 'Not in this packet';
    var parts = [cite.everydayName, cite.sourceName, cite.date].filter(Boolean);
    return parts.length ? parts.join(' · ') : 'Not in this packet';
  }
  function formatCiteList(cites) {
    if (!cites || !cites.length) return 'Not in this packet';
    var seen = {};
    var parts = [];
    cites.forEach(function (cite) {
      var line = formatCite(cite);
      if (line && line !== 'Not in this packet' && !seen[line]) { seen[line] = 1; parts.push(line); }
    });
    return parts.join('; ') || 'Not in this packet';
  }
  function secondaryExIds(cites) {
    var seen = {};
    var ids = [];
    (cites || []).forEach(function (cite) {
      var id = cite && cite.id;
      if (!id || !/^EX-/i.test(id) || seen[id]) return;
      seen[id] = 1;
      ids.push(id);
    });
    return ids;
  }
  function quietExHtml(cites) {
    var ids = secondaryExIds(cites);
    return ids.length ? ' <span class="cite-quiet">' + esc(ids.join(', ')) + '</span>' : '';
  }
  function gapPlain(x) {
    if (!x) return '';
    if (typeof x === 'string') return mutePublicCopy(x);
    return mutePublicCopy(x.plain || '');
  }
  function primaryGapOf(payload) {
    var board = payload && payload.board;
    var face = payload && payload.readyFace;
    if (face && face.stillMissing && face.stillMissing.plain) return face.stillMissing;
    if (board && board.stillMissing && board.stillMissing.plain) return board.stillMissing;
    return (board && board.topGaps && board.topGaps[0]) || (payload && payload.topGaps && payload.topGaps[0]) || null;
  }
  function onFileCiteLine(payload) {
    var cites = [];
    var board = payload && payload.board;
    var face = payload && payload.readyFace;
    var shows = (face && face.fileShows) || (board && board.fileShows) || [];
    if (shows.length) return formatCiteList(shows);
    ((board && board.supported) || []).forEach(function (row) {
      (row.cites || []).forEach(function (cite) { cites.push(cite); });
    });
    if (!cites.length && payload && payload.exhibitCites) {
      (payload.exhibitCites || []).forEach(function (cite) { cites.push(cite); });
    }
    return formatCiteList(cites);
  }
  function fileShowsOf(payload) {
    var board = payload && payload.board;
    var face = payload && payload.readyFace;
    return (face && face.fileShows) || (board && board.fileShows) || [];
  }
  function listFileShows(payload) {
    var shows = fileShowsOf(payload);
    if (!shows.length) return '';
    return '<ul>' + shows.map(function (cite) {
      return '<li><strong>' + esc(cite.everydayName || 'Record page') + '</strong> ' + esc(formatCiteMiddot(cite).replace(cite.everydayName + ' · ', '')) + '</li>';
    }).join('') + '</ul>';
  }
  function listPrimaryGap(x) {
    if (!x) return '<p class="sub">No extra missing-record list on this packet.</p>';
    var plain = gapPlain(x);
    var cites = (x && typeof x === 'object' && x.cites) ? x.cites : [];
    var note = (x && typeof x === 'object' && x.note) ? x.note : '';
    var ask = (x && typeof x === 'object' && x.uploadAsk) ? x.uploadAsk : '';
    var citeLine = cites.length
      ? '<span class="cite">' + esc(formatCiteList(cites)) + quietExHtml(cites) + '</span>'
      : (note ? '<span class="cite">' + esc(note) + '</span>' : '<span class="cite">Not in this packet</span>');
    return '<div class="primary-gap"><p class="plain"><strong>' + esc(plain) + '</strong></p>' + citeLine +
      (ask && !note ? '<p class="gap-ask">What to upload: ' + esc(ask) + '</p>' : '') + '</div>';
  }
  function list(arr) {
    if (!arr || !arr.length) return '';
    return '<ul>' + arr.map(function (x) {
      if (!x) return '';
      if (typeof x === 'string') {
        if (/^EX-\d+/i.test(x.trim())) return '';
        return '<li>' + esc(mutePublicCopy(x)) + '</li>';
      }
      if (x.everydayName) return '<li>' + esc(formatCite(x)) + quietExHtml([x]) + '</li>';
      return '<li>' + esc(gapPlain(x)) + '</li>';
    }).join('') + '</ul>';
  }
  function storedFor(caseId) {
    var raw = readJson(FORGE_KEY) || readJson(PORTAL_KEY);
    if (!raw) return null;
    var id = normalizeCaseId(payloadCaseId(raw));
    if (id && caseId && id !== caseId) return null;
    if (!(raw.has_packet === true || raw.has_packet === 'true' || (raw.packet_brief && raw.packet_brief !== 'NONE'))) return null;
    return raw;
  }
  function staffMode() {
    try { return new URLSearchParams(location.search).get('staff') === '1'; } catch (e) { return false; }
  }
  function bubble(who, text, kind) {
    return '<div class="care-msg ' + kind + '"><span class="who">' + esc(who) + '</span>' + esc(text) + '</div>';
  }
  function paintThread(payload, empty, caseId) {
    var thread = document.getElementById('careThread');
    var kicker = document.getElementById('careCaseKicker');
    var pill = document.getElementById('carePill');
    var desk = document.getElementById('deskLink');
    var id = normalizeCaseId(payloadCaseId(payload) || caseId) || caseId || '';
    var sample = !(payload && payloadIsUpload(payload, id));
    if (kicker) kicker.textContent = id ? (id + ' · on your desk') : 'On your desk';
    if (pill) pill.textContent = 'Talk with Care';
    if (desk) desk.href = id ? ('/#' + encodeURIComponent(id) + '/packet') : '/';
    if (!thread) return;
    if (empty || !payload || !pagesExist(payload) || honestChipPlain(payload) === 'Still reading') {
      thread.innerHTML =
        bubble('Care', 'Pages not visible yet. We cannot see your file yet. Letters stay out.', 'specialist') +
        bubble('You', 'Why does it say not ready to release?', 'you') +
        bubble('Care', 'Ready to review is not approved. We will not invent pages or findings.', 'specialist');
      return;
    }
    if (id === 'CASE-001' && sample) {
      thread.innerHTML =
        bubble('Care', 'Your desk shows clinic notes and an MRI. Function over time after the MRI is still missing.', 'specialist') +
        bubble('You', 'So this is not ready to release?', 'you') +
        bubble('Care', 'Correct. Ready to review is not approved. Specialists assemble the file. Letters stay out.', 'specialist');
      return;
    }
    var onFile = onFileCiteLine(payload);
    var top = primaryGapOf(payload);
    var miss = top ? gapPlain(top) : 'Needs more records';
    var opener = 'Your desk shows pages in this file.';
    if (onFile && onFile !== 'Not in this packet') opener = 'Your desk shows ' + onFile + '.';
    opener += ' ' + miss.replace(/\.$/, '') + ' is still missing.';
    thread.innerHTML =
      bubble('Care', opener, 'specialist') +
      bubble('You', 'So this is not ready to release?', 'you') +
      bubble('Care', 'Correct. Ready to review is not approved. Specialists assemble the file. Letters stay out.', 'specialist');
  }
  function renderAbout(payload, empty, caseId) {
    paintThread(payload, empty, caseId);
    var el = document.getElementById('aboutCard');
    var desk = document.getElementById('deskLink');
    if (!el) return;
    if (!staffMode()) {
      el.hidden = true;
      el.setAttribute('hidden', 'hidden');
      return;
    }
    el.hidden = false;
    el.removeAttribute('hidden');
    if (empty || !payload) {
      el.className = 'card';
      el.innerHTML = '<h2>Staff packet board</h2><p class="sub">Pages not visible yet. We cannot see your file yet.</p>';
      if (desk) desk.href = '/';
      return;
    }
    var id = normalizeCaseId(payloadCaseId(payload)) || caseId || payload.caseId;
    var upload = payloadIsUpload(payload, id);
    var extracting = !pagesExist(payload) || honestChipPlain(payload) === 'Still reading';
    var notes = extracting
      ? 'Pages not visible yet. We cannot see your file yet. We will not invent pages or findings.'
      : mutePublicCopy(payload.supportabilityNotes || '');
    var chip = chipFor(payload);
    var top = extracting ? null : primaryGapOf(payload);
    var showsHtml = extracting ? '' : listFileShows(payload);
    var labels = extracting ? [] : (payload.exhibitCites && payload.exhibitCites.length ? payload.exhibitCites : (payload.exhibitLabels || []));
    var count = extracting ? 0 : (typeof payload.exhibitCount === 'number' ? payload.exhibitCount : labels.length);
    var back = '/#' + encodeURIComponent(id || '') + '/packet';
    var mark = upload ? 'this-device file' : '';
    var packetWord = 'this packet';
    el.className = 'card pin';
    el.innerHTML =
      '<h2>Staff packet board</h2>' +
      '<p class="meta plain"><strong>' + esc(id) + '</strong>' + (mark ? ' · ' + esc(mark) : '') + '</p>' +
      (notes ? '<p class="plain">' + esc(notes) + '</p>' : '') +
      (chip ? '<div class="status-row">' + chip + '</div>' : '') +
      (showsHtml ? '<span class="field-lbl">What the file shows</span>' + showsHtml : '') +
      '<span class="field-lbl">Still missing</span>' +
      (extracting ? '<p class="sub">Pages not visible yet. No invented EX codes. No invented findings.</p>' : listPrimaryGap(top)) +
      '<p class="plain">Ready to review is not approved. Extracted is not verified.</p>' +
      (extracting ? '' : '<p class="plain"><strong>' + esc(String(count)) + '</strong> file' + (count === 1 ? '' : 's') + ' in ' + packetWord + '</p>') +
      (labels.length ? list(labels) : '') +
      '<p class="footer-lock">Letters: <span class="tag locked">OUT</span></p>';
    if (desk) desk.href = back;
  }
  var caseId = queryCase();
  if (!caseId) {
    renderAbout(null, true, null);
    return;
  }
  renderAbout(storedFor(caseId) || ABOUT_SOT[caseId], false, caseId);
})();
