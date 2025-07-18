---
title: browserAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getPopup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Holt das HTML-Dokument, das als Popup für diese Browser-Aktion festgelegt ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPopup = browser.browserAction.getPopup(
  details               // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Die Registerkarte, deren Popup abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, dessen Popup abgerufen werden soll.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Popup zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der die URL für das Popup-Dokument enthält. Dies wird eine vollständig qualifizierte URL sein, wie zum Beispiel `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.html`.

## Beispiele

Holen Sie die URL des Popups:

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

let gettingPopup = browser.browserAction.getPopup({});
gettingPopup.then(gotPopup);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getPopup) API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Vervielfältigung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitung des Quellcodes muss den obigen Urheberrechtshinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitung in binärer Form muss den obigen Urheberrechtshinweis,
// diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderem Begleitmaterial enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen zur Unterstützung oder Bewerbung von aus
// dieser Software abgeleiteten Produkten ohne vorherige schriftliche Erlaubnis verwendet werden.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-BESITZERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZITE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZITEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE COPYRIGHT-INHABER ODER MITWIRKENDE FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL; DATENVERLUST; ODER GEWINNVERLUST; GESCHÄFTSUNTERBRECHUNG) HAFTBAR, WIE AUCH IMMER VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IM VERTRAG, IN DER STRIKTEN HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
