---
title: declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/GETMATCHEDRULES_QUOTA_INTERVAL
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Das Zeitintervall, innerhalb dessen Anrufe an {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} gemacht werden können, angegeben in Minuten. Zusätzliche Anrufe scheitern sofort und führen zu einer Ablehnung des Versprechens. Anrufe, die mit einer Benutzeraktion verbunden sind, sind von der Quote ausgenommen.

Der Wert ist `10`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
