---
title: DeprecationReport
slug: Web/API/DeprecationReport
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Reporting API")}}

Das `DeprecationReport` Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Abschreibungsbericht.

Ein Abschreibungsbericht kann generiert werden, wenn ein veraltetes Merkmal (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird. Beachten Sie, dass nützliche Abschreibungsberichte davon abhängen, dass Browser-Anbieter diese Warnungen für veraltete Merkmale hinzufügen.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an den Standard-[Berichtserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Körper des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `id` {{experimental_inline}}
      - : Ein String, der das Merkmal oder die API repräsentiert, das veraltet ist, zum Beispiel `NavigatorGetUserMedia`.
        Dies kann verwendet werden, um Berichte nach veraltetem Merkmal zu gruppieren.
    - `anticipatedRemoval` {{Experimental_Inline}}
      - : Ein {{jsxref("Date")}}-Objekt (als String dargestellt), das das Datum repräsentiert, an dem das Merkmal voraussichtlich aus dem aktuellen Browser entfernt wird.
        Wenn das Datum nicht bekannt ist, gibt diese Eigenschaft `null` zurück.
        Dieser Wert kann verwendet werden, um Warnungen zu priorisieren.
        Wenn diese Eigenschaft `null` zurückgibt, weil das Datum unbekannt ist, dann sollte die Abschreibung als von geringer Priorität betrachtet werden.
    - `message` {{experimental_inline}}
      - : Ein String, der eine menschenlesbare Beschreibung der Abschreibung enthält, einschließlich Informationen darüber, welches neuere Merkmal es gegebenenfalls ersetzt hat.
        Dies entspricht in der Regel der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn ein veraltetes Merkmal verwendet wird, sofern eine vorhanden ist.
    - `sourceFile` {{experimental_inline}}
      - : Ein String, der den Pfad zur Quelldatei enthält, in der das veraltete Merkmal verwendet wurde, falls bekannt, oder andernfalls `null`.
    - `lineNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeile in der Quelldatei repräsentiert, in der das veraltete Merkmal verwendet wurde, falls bekannt, oder andernfalls `null`.
    - `columnNumber` {{experimental_inline}}
      - : Eine Zahl, die die Zeichnungsposition in der Zeile der Quelldatei repräsentiert, in der das veraltete Merkmal erstmals verwendet wurde, falls bekannt, oder andernfalls `null`.

- `type`
  - : Der String `"deprecation"` zeigt an, dass dies ein Abschreibungsbericht ist.
- `url`
  - : Ein String, der die URL des Dokuments repräsentiert, das den Bericht generiert hat.

## Beschreibung

Ein Abschreibungsbericht kann generiert werden, wenn ein veraltetes Merkmal (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird.

Sie können innerhalb der Seite, in der sie ausgelöst werden, auf Abschreibungsberichte mit der [Reporting API](/de/docs/Web/API/Reporting_API) überwachen. Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu lauschen. Sie übergeben eine Callback-Methode und optional eine `options`-Eigenschaft, die die Arten von Berichten angibt, über die Sie berichten möchten. Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen und übergibt ein Berichtsobjekt.
Für Abschreibungsberichte wird das Objekt eine `DeprecationReport` Instanz (die die [`type`](#type) Eigenschaft auf `"deprecation"` gesetzt hat).

Ein typischer Abschreibungsbericht wird unten gezeigt.
Beachten Sie, dass `url` die ursprünglich geladene Seite darstellt, während `body.sourceFile`, `body.lineNumber` und `body.columnNumber` den spezifischen Ort des API-Aufrufs kennzeichnen, der die Maßnahme ausgelöst hat (in diesem Beispiel ist es die gleiche Datei).

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

Abschreibungsberichte werden auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den [Berichtserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens "default" gesendet, falls dieser definiert ist. Der Berichtserver-Endpunkt und seine Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}} Header festgelegt.

Der Aufbau des Serverberichts ist fast genau der gleiche wie `DeprecationReport`, mit Ausnahme der zusätzlichen Felder `age` und `user_agent`.

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

Dieses Beispiel zeigt, wie Sie "`deprecation`"-Berichte innerhalb einer Seite beobachten können, die sie auslöst.

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

Zuerst erzeugen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte mit dem Typ "`deprecation`" zu hören, und übergeben einen Callback, der die Berichte empfangen und protokollieren wird.

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

Dann rufen wir den folgenden Code auf, der synchrones XHR (veraltete API) verwendet. Beachten Sie, dass dies nach dem Beobachter definiert ist, den es auslöst, sobald der Beobachter läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Abschreibungsberichte unterstützen, sollte ein Bericht unten angezeigt werden.
Beachten Sie, dass der `type` "`deprecation`" ist.

{{EmbedLiveSample("Verwendung der `ReportingObserver`-Schnittstelle", "100%", "280px")}}

### Senden eines Berichts an einen Berichtsendpunkt

Um eine Webseite zu konfigurieren, um einen Abschreibungsbericht zu senden, müssen Sie einen [Berichtserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) namens "default" mit dem {{httpheader("Reporting-Endpoints")}} Header festlegen.
Unten setzen wir den `default` Endpunkt auf `https://example.com/deprecation`:

Der Bericht wird dann als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den Endpunkt gesendet, wann immer eine veraltete API verwendet wird.
Er hat die gleiche Struktur wie `DeprecationReport`, mit Ausnahme der zusätzlichen Eigenschaften `age` und `user_agent`.

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
