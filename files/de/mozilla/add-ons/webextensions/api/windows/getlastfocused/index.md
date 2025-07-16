---
title: windows.getLastFocused()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Liefert das Fenster, das zuletzt den Fokus hatte – typischerweise das Fenster „oben“.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingWindow = browser.windows.getLastFocused(
  getInfo               // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}
  - : `object`.
    - `populate` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das {{WebExtAPIRef('windows.Window')}}-Objekt eine `tabs`-Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, welche die Tabs im Fenster darstellen. Die `Tab`-Objekte enthalten nur die Eigenschaften `url`, `title` und `favIconUrl`, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die zur URL des Tabs passen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}}-Objekten. Wenn gesetzt, wird das zurückgegebene {{WebExtAPIRef('windows.Window')}} basierend auf seinem Typ gefiltert. Wenn nicht gesetzt, wird der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'`-Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

> [!NOTE]
> Wenn angegeben, wird die `windowTypes`-Komponente von `getInfo` ignoriert. Die Verwendung von `windowTypes` wurde seit Firefox 62 als veraltet markiert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des zuletzt fokussierten Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Rufen Sie das zuletzt fokussierte Fenster ab und protokollieren Sie die darin enthaltenen Tabs. Beachten Sie, dass Sie die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.getLastFocused({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getLastFocused) API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen zulässig:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderem Material, das mit der Verteilung geliefert wird,
// enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Beitragsleistenden dürfen benutzt werden, um Produkte, die aus
// dieser Software abgeleitet sind, zu unterstützen oder zu bewerben ohne
// vorherige ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// COPYRIGHT-INHABER ODER BEITRAGENDEN FÜR IRGENDWELCHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER ENTGANGENE GEWINNE; ODER
// GESCHÄFTSUNTERBRECHUNG) JEDER ART UND AUF JEDER HAFTUNGSGRUNDLAGE,
// OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE
// WEISE AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN
// AUF DIE MÖGLICHKEIT EINES SOLCHEN SCHADENS HINGEWIESEN WURDE.
-->
