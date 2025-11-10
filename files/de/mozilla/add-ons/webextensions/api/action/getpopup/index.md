---
title: action.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/getPopup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft das als Popup für diese Browser-Aktion festgelegte HTML-Dokument ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPopup = browser.action.getPopup(
  details               // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Der Tab, dessen Popup abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, dessen Popup abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Popup zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String gefüllt wird, der die URL für das Dokument des Popups enthält. Dies wird eine vollständig qualifizierte URL sein, wie zum Beispiel `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.html`.

## Beispiele

Holen Sie die URL des Popups:

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

let gettingPopup = browser.action.getPopup({});
gettingPopup.then(gotPopup);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getPopup) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quellen- und Binärformen, mit oder ohne
// Modifikation, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitung von Quellcode muss den obigen Copyright-Hinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitung in Binärform muss den obigen Copyright-Hinweis,
// diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT. JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZITE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// IMPLIZITEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE
// COPYRIGHT-INHABER ODER MITWIRKENDEN HAFTBAR FÜR DIREKTE,
// INDIREKTE, ZUFÄLLIGE, BESONDERE, BEISPIELSHAFTE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUSTE ODER
// GEWINN) WIE AUCH IMMER VERURSACHT UND UNTER JEDER THEORIE DER HAFTUNG,
// OB IN VERTRAGSRECHT, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE
// AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHT, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
