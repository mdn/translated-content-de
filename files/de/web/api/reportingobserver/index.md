---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das `ReportingObserver`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht es Ihnen, Berichte zu sammeln und darauf zuzugreifen.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue `ReportingObserver`-Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Instanzeigenschaften

_Dieses Interface hat keine definierten Eigenschaften._

## Instanzmethoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Stoppt einen Reporting Observer, der zuvor mit der Beobachtung begonnen hat, damit er keine Berichte mehr sammelt.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Anweisung an einen Reporting Observer, mit dem Sammeln von Berichten in seiner Berichts-Warteschlange zu beginnen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste der Berichte in der Warteschlange des Beobachters zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface hat keine Ereignisse, die darauf ausgelöst werden._

## Beispiele

### Anzeigen von Veraltungsberichten

Dieses Beispiel zeigt, wie man `"deprecation"`-Berichte mit einem `ReportingObserver` beobachtet.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  margin: 10px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte vom Typ `"deprecation"` zu empfangen, und übergeben eine Rückruffunktion, die die Berichte empfängt und protokolliert.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    // console.log(report);
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

Anschließend wird der folgende Code ausgeführt, der synchrones XHR (veraltete API) verwendet.
Beachten Sie, dass dies nach dem Beobachter definiert ist und ausgelöst wird, sobald der Beobachter läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Veraltungsberichte unterstützen, sollte unten ein Bericht angezeigt werden.
Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
