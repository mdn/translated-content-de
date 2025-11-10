---
title: tabs.captureVisibleTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt eine Daten-URL, die das Bild eines Bereichs des aktiven Tabs im angegebenen Fenster kodiert. Sie müssen die Berechtigung `<all_urls>` oder `activeTab` besitzen [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

> [!NOTE]
> In Firefox 125 und früher war diese Methode nur mit der Berechtigung `<all_urls>` verfügbar.

Zusätzlich zu den Sites, auf die Erweiterungen normalerweise zugreifen können, erlaubt diese Methode Erweiterungen, sensible Sites zu erfassen, die ansonsten eingeschränkt sind, einschließlich der Benutzeroberflächenseiten des Browsers und Seiten anderer Erweiterungen. Diese sensiblen Sites können nur mit der Berechtigung `activeTab` erfasst werden. Chrome erlaubt auch, dass Dateilinks erfasst werden, wenn der Erweiterung Dateizugriff gewährt wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let capturing = browser.tabs.captureVisibleTab(
  windowId,               // optional integer
  options                 // optional extensionTypes.ImageDetails
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Das Ziel-Fenster. Standardmäßig das aktuelle Fenster.
- `options` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Daten-URL erfüllt wird, die das erfasste Bild kodiert. Es kann der 'src'-Eigenschaft eines HTML-Bildelements zur Anzeige zugewiesen werden. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Ein Bild des aktiven Tabs im aktuellen Fenster mit Standardeinstellungseinstellungen erfassen:

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let capturing = browser.tabs.captureVisibleTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-captureVisibleTab) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verteilung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen zulässig:
//
//    * Weiterverteilungen von Quellcode müssen obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Weiterverteilungen in Binärform müssen obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, wiedergeben.
//    * Weder der Name von Google Inc. noch die Namen der
// Mitwirkenden dürfen zur Unterstützung oder Förderung von Produkten,
// die von dieser Software abgeleitet sind, ohne spezifische vorherige
// schriftliche Genehmigung verwendet werden.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER
// STILLSCHWEIGENDEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SIND DIE RECHTSINHABER ODER BEITRAGLEISTENDEN HAFTBAR FÜR JEGLICHE
// DIREKTEN, INDIREKTEN, BEILÄUFIGEN, BESONDEREN, EXEMPLARISCHEN ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL;
// DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH
// IMMER VERURSACHT UND AUF JEDER HAFTUNGSTHEORIE, SEI ES IN VERTRAG,
// STRENGER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER VERWENDUNG DIESER
// SOFTWARE ENTSTEHT, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
