---
title: tabs.ZoomSettingsScope
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Definiert, ob Änderungen der Zoomstufe für den Ursprung der Seite beibehalten oder nur in diesem Tab wirksam werden. Standardmäßig ist dies auf `per-origin` eingestellt, wenn {{WebExtAPIRef("tabs.zoomSettingsMode")}} auf "automatic" steht, und ist ansonsten immer `per-tab`.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "per-origin"
  - : Alle anderen Tabs mit demselben Ursprung wie dieser Tab erhalten die Zoomänderungen. Dieser Bereich ist nur verfügbar, wenn {{WebExtAPIRef("tabs.zoomSettingsMode")}} auf "automatic" steht.
- "per-tab"
  - : Änderungen der Zoomstufe sind nur in diesem Tab wirksam, und Änderungen der Zoomstufe in anderen Tabs beeinflussen die Zoomstufe dieses Tabs nicht. Außerdem:
    - in Firefox bleibt der Zoomlevel über das Neuladen der Seite und die Navigation innerhalb des Tabs hinweg bestehen.
    - in Chrome-basierten Browsern werden Zoomänderungen bei der Navigation zurückgesetzt; eine Tab-Navigation lädt Seiten immer mit ihren per-Origin-Zoomfaktoren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsScope) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Vervielfältigung und Verwendung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter folgenden Bedingungen gestattet:
//
//    * Bei der Weiterverbreitung des Quellcodes müssen der obige Copyright-
// Hinweis, diese Liste von Bedingungen und der folgende Haftungsausschluss
// enthalten sein.
//    * Bei der Weiterverbreitung in binärer Form müssen der oben genannte
// Copyright-Hinweis, diese Liste von Bedingungen und der folgende
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien,
// die mit der Verteilung bereitgestellt werden, enthalten sein.
//    * Weder der Name von Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte zu unterstützen oder
// zu fördern, die von dieser Software abgeleitet sind, ohne vorherige
// ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// KONKLUDENTEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE
// COPYRIGHTINHABER ODER MITWIRKENDEN HAFTBAR FÜR DIREKTE, INDIREKTE,
// BEILÄUFIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSAUSFÄLLE, DATENVERLUST ODER ENTGANGENER
// GEWINN; ODER GESCHÄFTSUNTERBRECHUNGEN), WIE AUCH IMMER VERURSACHT UND
// UNTER JEDER HAFTUNGSTHEORIE, SEI ES AUS VERTRAGS-, STRIKTER HAFTUNG ODER
// UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERE),
// DIE SICH IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE ERGEBEN,
// AUCH WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
