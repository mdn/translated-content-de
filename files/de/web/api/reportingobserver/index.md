---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Mit der `ReportingObserver`-Schnittstelle der [Reporting API](/de/docs/Web/API/Reporting_API) können Sie Berichte erfassen und darauf zugreifen.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue `ReportingObserver`-Objektinstanz, mit der Sie Berichte erfassen und darauf zugreifen können.

## Instanzeigenschaften

_Für diese Schnittstelle sind keine Eigenschaften definiert._

## Instanzmethoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Verhindert, dass ein zuvor gestarteter Reporting Observer weitere Berichte erfasst.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Weist einen Reporting Observer an, Berichte in seiner Berichtswarteschlange zu erfassen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste der Berichte in der Berichtswarteschlange des Observers zurück und leert die Warteschlange.

## Ereignisse

_Diese Schnittstelle löst keine Ereignisse aus._

## Beispiele

### Deprecation-Berichte anzeigen

Dieses Beispiel zeigt, wie Sie mit einem `ReportingObserver` Berichte des Typs `"deprecation"` erfassen.

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

Zunächst erstellen wir ein neues `ReportingObserver`-Objekt, das auf Berichte des Typs `"deprecation"` wartet. Dabei übergeben wir eine Callback-Funktion, die die Berichte empfängt und protokolliert.

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

Anschließend führen wir den folgenden Code aus, der synchrones XHR verwendet (eine veraltete API).
Beachten Sie, dass dieser Code erst nach dem Observer definiert wird, den er auslöst, sobald der Observer aktiv ist.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Deprecation-Berichte unterstützen, sollte unten ein Bericht angezeigt werden.
Beachten Sie, dass `type` den Wert `"deprecation"` hat.

{{EmbedLiveSample("displaying_deprecation_reports", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
