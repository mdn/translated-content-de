---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt einen Eintrag in den Browser-Verlauf eines Besuchs der angegebenen URL hinzu. Die Zeit des Besuchs wird als die Zeit des Aufrufs aufgezeichnet, und der {{WebExtAPIRef("history.TransitionType", "TransitionType")}} wird als "link" aufgezeichnet.

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
      - : string: Der Titel der Seite. Wenn dies nicht angegeben ist, wird der Titel als `null` aufgezeichnet.
    - `transition` {{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Beschreibt, wie der Browser bei dieser Gelegenheit zur Seite navigierte. Wenn dies nicht angegeben ist, wird ein Transition-Typ von "link" aufgezeichnet.
    - `visitTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit der Epoche. Setzt die Besuchszeit auf diesen Wert. Wenn dies nicht angegeben ist, wird die aktuelle Zeit aufgezeichnet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn das Element hinzugefügt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Eintrag eines Besuchs zu "https://example.org/" hinzu und überprüfen Sie dann, dass der neue Besuch aufgezeichnet wurde, indem Sie den Verlauf nach dem neuesten Element durchsuchen und es protokollieren:

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

Fügen Sie einen Eintrag eines Besuchs zu "https://example.org" hinzu, geben Sie ihm aber eine `visitTime` von 24 Stunden in der Vergangenheit und einen `transition` von "typed":

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

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-addUrl)-API von Chromium. Diese Dokumentation leitet sich von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code ab.
