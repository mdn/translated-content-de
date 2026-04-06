---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das `ReportingObserver`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht es Ihnen, Berichte zu sammeln und zuzugreifen.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue `ReportingObserver`-Objektinstanz, die verwendet werden kann, um Berichte zu sammeln und auf sie zuzugreifen.

## Instanz-Eigenschaften

_Dieses Interface hat keine definierten Eigenschaften._

## Instanz-Methoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Stoppt einen Reporting Observer, der zuvor mit dem Sammeln von Berichten begonnen hatte.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Weist einen Reporting Observer an, mit dem Sammeln von Berichten in seiner Berichtswarteschlange zu beginnen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste von Berichten in der Berichtswarteschlange des Observers zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface hat keine Ereignisse, die darauf ausgeführt werden._

## Beispiele

### Anzeigen von Veraltungsberichten

Dieses Beispiel zeigt, wie man `"deprecation"`-Berichte mithilfe eines `ReportingObserver` beobachtet.

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

Zuerst konstruieren wir ein neues `ReportingObserver`-Objekt, um Berichte mit dem Typ `"deprecation"` zu empfangen, und übergeben einen Callback, der die Berichte empfängt und protokolliert.

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

Wir rufen dann den folgenden Code auf, der synchrones XHR (veraltete API) verwendet.
Beachten Sie, dass dies nach dem Observer definiert ist, den es auslöst, sobald der Observer läuft.

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
