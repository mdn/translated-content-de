---
title: action.disable()
slug: Mozilla/Add-ons/WebExtensions/API/action/disable
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.disable(
  tabId // optional integer
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, für den Sie die Browser-Aktion deaktivieren möchten.

## Beispiele

Deaktivieren Sie die Browser-Aktion beim Klicken und aktivieren Sie sie erneut, jedes Mal wenn ein neuer Tab geöffnet wird:

```js
browser.tabs.onCreated.addListener(() => {
  browser.action.enable();
});

browser.action.onClicked.addListener(() => {
  browser.action.disable();
});
```

Deaktivieren Sie die Browser-Aktion nur für den aktiven Tab:

```js
browser.action.onClicked.addListener((tab) => {
  browser.action.disable(tab.id);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-disable). Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in nicht-veränderter oder
// veränderter Form, mit oder ohne Modifikationen, sind unter den
// folgenden Bedingungen gestattet:
//
//    * Weiterverbreitung von Quellcode muss das obige Urheberrecht
// den Bedingungen und den folgenden Disclaimer enthalten.
//    * Weiterverbreitung in binärer Form muss das obige Urheberrecht
// den Bedingungen und den folgenden Disclaimer in der Dokumentation
// und/oder anderen Materialien enthalten, die mit der
// Weiterverbreitung zur Verfügung gestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragszahler dürfen benutzt werden, um Produkte, die von
// dieser Software abgeleitet wurden, ohne spezifische vorherige
// schriftliche Erlaubnis zu unterstützen oder zu promoten.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND
// BEITRAGSLEISTERN "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE
// AUSDRÜCKLICHEN ODER IMPLIZITEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER
// BEITRAGSLEISTER VERANTWORTLICH FÜR JEGLICHE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATENVERLUST ODER ENTGANGENER GEWINN ODER
// UNTERBRECHUNG VON GESCHÄFTSTÄTIGKEITEN) WIE AUCH IMMER VERURSACHT
// UND UNTER JEGLICHER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER VERWENDUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
