---
title: DeprecationReport
slug: Web/API/DeprecationReport
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `DeprecationReport` Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Veraltet-Bericht.

Ein Veraltet-Bericht kann generiert werden, wenn ein veraltetes Feature (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird.
Beachten Sie, dass das Empfangen nützlicher Veraltet-Berichte davon abhängt, dass Browseranbieter diese Warnungen für veraltete Features hinzufügen.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann zum Standard-[Berichtsserverendpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Inhalt des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `id` {{experimental_inline}}
      - : Ein String, der das Feature oder die API darstellt, das/die veraltet ist, zum Beispiel `NavigatorGetUserMedia`.
        Dies kann verwendet werden, um Berichte nach veraltetem Feature zu gruppieren.
    - `anticipatedRemoval` {{Experimental_Inline}}
      - : Ein {{jsxref("Date")}} Objekt (als String gerendert), das das Datum darstellt, an dem das Feature voraussichtlich aus dem aktuellen Browser entfernt wird.
        Wenn das Datum nicht bekannt ist, wird diese Eigenschaft `null` zurückgeben.
        Dieser Wert kann verwendet werden, um Warnungen zu priorisieren.
        Wenn diese Eigenschaft `null` zurückgibt, weil das Datum unbekannt ist, sollte die Veraltung als niedrigprioritär betrachtet werden.
    - `message` {{experimental_inline}}
      - : Ein String, der eine menschenlesbare Beschreibung der Veraltung enthält, einschließlich Informationen darüber, welches neuere Feature es gegebenenfalls ersetzt hat.
        Dies stimmt typischerweise mit der Nachricht überein, die ein Browser in seiner DevTools-Konsole anzeigt, wenn ein veraltetes Feature verwendet wird, falls verfügbar.
    - `sourceFile` {{experimental_inline}}
      - : Ein String, der den Pfad zur Quelldatei enthält, in der das veraltete Feature verwendet wurde, falls bekannt, oder `null` andernfalls.
    - `lineNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeile in der Quelldatei darstellt, in der das veraltete Feature verwendet wurde, falls bekannt, oder `null` andernfalls.
    - `columnNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeichenposition in der Zeile der Quelldatei darstellt, in der das veraltete Feature erstmals verwendet wurde, falls bekannt, oder `null` andernfalls.

- `type`
  - : Der String `"deprecation"`, der anzeigt, dass dies ein Veraltet-Bericht ist.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

## Beschreibung

Ein Veraltet-Bericht kann generiert werden, wenn ein veraltetes Feature (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird.

Sie können innerhalb der Seite, in der sie ausgelöst werden, Veraltet-Berichte überwachen, indem Sie die [Reporting API](/de/docs/Web/API/Reporting_API) nutzen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, um Berichte zu empfangen, indem Sie eine Rückruffunktion übergeben und optional eine `options`-Eigenschaft angeben, die die Arten von Berichten spezifiziert, die Sie beobachten möchten.
Die Rückruffunktion wird dann mit Berichten der angeforderten Typen aufgerufen, indem ein Bericht-Objekt übergeben wird.
Für Veraltet-Berichte ist das Objekt eine `DeprecationReport`-Instanz (die die [`type`](#type) Eigenschaft mit dem Wert `"deprecation"` hat).

Ein typischer Veraltet-Bericht ist unten gezeigt.
Beachten Sie, dass `url` die ursprüngliche Seite darstellt, die geladen wurde, während `body.sourceFile`, `body.lineNumber` und `body.columnNumber` den spezifischen Ort des API-Aufrufs angeben, der die Intervention ausgelöst hat (in diesem Beispiel sind sie dieselbe Datei).

```json
{
  "type": "deprecation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```

Veraltet-Berichte werden auch als JSON-Objekt in einem {{httpmethod("POST")}}-Anfrage an den [Berichtsserverendpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens `"default"` gesendet, wenn dieser definiert ist.
Der Berichtsserverendpunkt und seine Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}} Header gesetzt.

Die Struktur des Serverberichts ist fast genau dieselbe wie `DeprecationReport`, außer dass sie zusätzlich die Felder `age` und `user_agent` umfasst.

```json
{
  "type": "deprecation",
  "age": 27,
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```

## Beispiele

### Verwendung der `ReportingObserver` Schnittstelle

Dieses Beispiel zeigt, wie `"deprecation"` Berichte innerhalb einer Seite beobachtet werden, die sie auslöst.

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

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, um Berichte vom Typ `"deprecation"` zu empfangen, indem eine Rückruffunktion übergeben wird, die die Berichte empfängt und protokolliert.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    //console.log(report);
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

Dann rufen wir den folgenden Code auf, der synchrones XHR verwendet (veraltete API).
Beachten Sie, dass dies nach dem Beobachter definiert ist und ihn auslöst, sobald der Beobachter läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Veraltet-Berichte unterstützen, sollte unten ein Bericht angezeigt werden.
Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

### Senden eines Berichts an einen Berichts-Endpunkt

Um eine Webseite zu konfigurieren, die einen Veraltet-Bericht sendet, müssen Sie mit dem {{httpheader("Reporting-Endpoints")}} Header einen [Berichtsserverendpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens "default" festlegen.
Unten setzen wir den `default` Endpunkt auf `https://example.com/deprecation`:

Der Bericht wird dann als JSON-Objekt in einem {{httpmethod("POST")}} Antrag an den Endpunkt gesendet, wann immer eine veraltete API verwendet wird.
Er hat die gleiche Struktur wie `DeprecationReport`, außer dem Zusatz der Eigenschaften `age` und `user_agent`.

```json
[
  {
    "type": "deprecation",
    "age": 27,
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
    "body": {
      "sourceFile": "https://example.com/",
      "lineNumber": 54,
      "columnNumber": 11,
      "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
      "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
      "anticipatedRemoval": null
    }
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
