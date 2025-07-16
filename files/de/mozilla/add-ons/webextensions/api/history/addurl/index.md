---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügt der Browser-Historie einen Eintrag eines Besuchs der angegebenen URL hinzu. Die Besuchszeit wird als Zeit des Aufrufs erfasst, und der {{WebExtAPIRef("history.TransitionType", "TransitionType")}} wird als "link" erfasst.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let addingUrl = browser.history.addUrl(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Objekt, das die hinzuzufügende URL enthält.
    - `url`
      - : `string`. Die hinzuzufügende URL.
    - `title` {{optional_inline}}
      - : string: Der Titel der Seite. Falls nicht angegeben, wird der Titel als `null` erfasst.
    - `transition` {{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Beschreibt, wie der Browser in diesem Fall zur Seite navigierte. Wenn dies nicht angegeben wird, wird ein Übergangstyp von "link" erfasst.
    - `visitTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch. Setzt die Besuchszeit auf diesen Wert. Wird nichts angegeben, wird die aktuelle Zeit erfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn das Element hinzugefügt wurde.

## Beispiele

Fügen Sie einen Eintrag eines Besuchs auf "https\://example.org/" hinzu und überprüfen Sie dann, dass der neue Besuch verzeichnet wurde, indem Sie den Verlauf nach dem aktuellsten Eintrag durchsuchen und diesen protokollieren:

```js
function onGot(results) {
  if (results.length) {
    console.log(results[0].url);
    console.log(new Date(results[0].lastVisitTime));
  }
}

browser.history
  .addUrl({ url: "https://example.org/" })
  .then(() =>
    browser.history.search({
      text: "https://example.org/",
      startTime: 0,
      maxResults: 1,
    }),
  )
  .then(onGot);
```

Fügen Sie einen Eintrag eines Besuchs auf "https\://example.org" hinzu, geben Sie jedoch eine `visitTime` an, die 24 Stunden in der Vergangenheit liegt, und einen `transition` von "typed":

```js
const DAY = 24 * 60 * 60 * 1000;

function oneDayAgo() {
  return Date.now() - DAY;
}

function onGot(visits) {
  for (const visit of visits) {
    console.log(new Date(visit.visitTime));
    console.log(visit.transition);
  }
}

browser.history
  .addUrl({
    url: "https://example.org/",
    visitTime: oneDayAgo(),
    transition: "typed",
  })
  .then(() =>
    browser.history.getVisits({
      url: "https://example.org/",
    }),
  )
  .then(onGot);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-addUrl) API. Diese Dokumentation basiert auf [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
