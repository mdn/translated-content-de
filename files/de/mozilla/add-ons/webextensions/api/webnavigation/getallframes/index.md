---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Gibt, basierend auf einer Tab-ID, Informationen über alle darin enthaltenen Frames zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über den Tab, von dem alle Frames abgerufen werden sollen.

    - `tabId`
      - : `integer`. Die ID des Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, von denen jedes die folgenden Eigenschaften hat:

- `errorOccurred`
  - : `boolean`. Wahr, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das Ereignis {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} ausgelöst wurde.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der das Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Die ID des Frames. Wenn dies der Hauptframe ist, dann ist `frameId` null.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Dies ist -1, wenn es keinen übergeordneten Frame gibt: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.
- `url`
  - : `string`. Die URL, die derzeit mit diesem Frame verbunden ist.

Wenn der Tab verworfen wird, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn der angegebene Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert die URLs aller Frames im aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
function logFrameInfo(framesInfo) {
  for (const frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function logAllFrames(tabs) {
  browser.webNavigation
    .getAllFrames({
      tabId: tabs[0].id,
    })
    .then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getAllFrames) API. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen das oben stehende Urheberrecht
// und diesen Bedingungen entsprechenderweise beibehalten.
//    * Weiterverbreitungen in Binärform müssen das oben stehende
// Urheberrecht und diese Bedingungen in der Dokumentation und/oder anderen
// Materialien enthalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet sind, zu fördern oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "AS IS" BEREITGESTELLT, UND JEGLICHE DIREKTE ODER INDIREKTE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE EIGENTÜMER ODER MITWIRKENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; VERLUST VON NUTZUNG, DATEN ODER GEWINNEN; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER THEORIE DER HAFTUNG, SEI ES AUFGRUND EINES VERTRAGS, STRENGHAFTIGKEIT ODER DELIKT (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERER UNREGELMÄßIGKEITEN) AUS ODER IN VERBINDUNG MIT DEM GEBRAUCH DIESER SOFTWARE, SELBST WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN BESTEHEN SOLLTE.
-->
