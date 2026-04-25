---
title: DeprecationReport
slug: Web/API/DeprecationReport
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("Reporting API")}}

Das `DeprecationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Veraltungsbericht.

Ein Veraltungsbericht kann erstellt werden, wenn ein veraltetes Feature (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird.
Beachten Sie, dass das Erhalten nützlicher Veraltungsberichte davon abhängt, dass Browser-Anbieter diese Warnungen für veraltete Funktionen hinzufügen.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an den standardmäßigen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Hauptteil des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `id` {{experimental_inline}}
      - : Ein String, der das Feature oder die API repräsentiert, das veraltet ist, zum Beispiel `NavigatorGetUserMedia`.
        Dies kann verwendet werden, um Berichte nach veraltetem Feature zu gruppieren.
    - `anticipatedRemoval` {{Experimental_Inline}}
      - : Ein {{jsxref("Date")}}-Objekt (als String dargestellt), das das Datum angibt, an dem das Feature voraussichtlich aus dem aktuellen Browser entfernt wird.
        Wenn das Datum nicht bekannt ist, wird diese Eigenschaft `null` zurückgeben.
        Dieser Wert kann verwendet werden, um Warnungen zu priorisieren.
        Wenn diese Eigenschaft `null` zurückgibt, weil das Datum unbekannt ist, sollte die Veraltung als niedrige Priorität angesehen werden.
    - `message` {{experimental_inline}}
      - : Ein String, der eine für Menschen lesbare Beschreibung der Veraltung enthält, einschließlich Informationen wie welches neuere Feature es gegebenenfalls ersetzt hat.
        Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn ein veraltetes Feature verwendet wird, sofern eine vorhanden ist.
    - `sourceFile` {{experimental_inline}}
      - : Ein String, der den Pfad zur Quelldatei enthält, in der das veraltete Feature verwendet wurde, falls bekannt, oder andernfalls `null`.
    - `lineNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeile in der Quelldatei darstellt, in der das veraltete Feature verwendet wurde, falls bekannt, oder andernfalls `null`.
    - `columnNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeichenposition in der Zeile der Quelldatei darstellt, in der das veraltete Feature erstmals verwendet wurde, falls bekannt, oder andernfalls `null`.

- `type`
  - : Der String `"deprecation"`, der angibt, dass dies ein Veraltungsbericht ist.
- `url`
  - : Ein String, der die URL des Dokuments repräsentiert, das den Bericht erzeugt hat.

## Beschreibung

Ein Veraltungsbericht kann erstellt werden, wenn ein veraltetes Feature (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird.

Sie können innerhalb der Seite, in der sie ausgelöst werden, auf Veraltungsberichte überwachen, indem Sie die [Reporting API](/de/docs/Web/API/Reporting_API) verwenden.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu lauschen, indem Sie eine Callback-Methode und optional eine `options`-Eigenschaft übergeben, die die Arten von Berichten spezifiziert, die Sie berichten möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen, wobei ein Berichtsobjekt übergeben wird.
Für Veraltungsberichte wird das Objekt eine `DeprecationReport`-Instanz sein (welche die [`type`](#type)-Eigenschaft auf `"deprecation"` gesetzt hat).

Ein typischer Veraltungsbericht wird unten gezeigt.
Beachten Sie, dass `url` die ursprüngliche Seite darstellt, die geladen wurde, während `body.sourceFile`, `body.lineNumber` und `body.columnNumber` den spezifischen Ort des API-Aufrufs anzeigen, der das Eingreifen ausgelöst hat (in diesem Beispiel ist es die gleiche Datei).

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

Veraltungsberichte werden auch als JSON-Objekte in einer {{httpmethod("POST")}}-Anfrage an den [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens `"default"` gesendet, falls dieser definiert ist.
Der Reporting-Server-Endpunkt und dessen Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header festgelegt.

Die Struktur des Serverberichts ist fast genau die gleiche wie `DeprecationReport`, mit Ausnahme, dass er zusätzlich die Felder `age` und `user_agent` umfasst.

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

### Verwendung der `ReportingObserver`-Schnittstelle

Dieses Beispiel zeigt, wie `"deprecation"`-Berichte innerhalb einer Seite beobachtet werden können, die sie auslöst.

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

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte mit dem Typ `"deprecation"` zu lauschen, indem wir einen Callback übergeben, der die Berichte empfängt und protokolliert.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

Wir rufen dann den folgenden Code auf, der synchrone XHR verwendet (veraltete API).
Beachten Sie, dass dies nach dem Beobachter definiert ist, er wird ausgelöst, sobald der Beobachter läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Veraltungsberichte unterstützen, sollte unten ein Bericht angezeigt werden.
Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Verwendung der `ReportingObserver`-Schnittstelle", "100%", "280px")}}

### Senden eines Berichts an einen Reporting-Endpunkt

Die Konfiguration einer Webseite zum Senden eines Veraltungsberichts erfordert, dass Sie einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens "default" mit dem {{httpheader("Reporting-Endpoints")}}-Header festlegen.
Unten setzen wir den `default`-Endpunkt auf `https://example.com/deprecation`:

Der Bericht wird dann als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den Endpunkt gesendet, wann immer eine veraltete API verwendet wird.
Es hat die gleiche Struktur wie `DeprecationReport`, mit Ausnahme der hinzufügen `age`- und `user_agent`-Eigenschaften.

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
