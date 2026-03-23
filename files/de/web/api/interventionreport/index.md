---
title: InterventionReport
slug: Web/API/InterventionReport
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `InterventionReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Interventionsbericht.

Ein Interventionsbericht kann generiert werden, wenn die Nutzung einer Funktion in einem Webdokument vom Browser aus Gründen wie Sicherheit, Leistung oder Benutzerbelästigung blockiert wurde. Berichte dieser Art können innerhalb einer Seite mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Hauptteil des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `columnNumber` {{experimental_inline}}
      - : Ein String, der die Zeichenposition in der Quelldateizeile darstellt, in der die Intervention stattfand, falls bekannt, oder `null` andernfalls.

    - `id` {{experimental_inline}}
      - : Ein String, der die Intervention repräsentiert, die den Bericht generiert hat.
        Dies kann verwendet werden, um Berichte zu gruppieren.

    - `lineNumber` {{experimental_inline}}
      - : Ein String, der die Zeile in der Quelldatei darstellt, in der die Intervention stattfand, falls bekannt, oder `null` andernfalls.

    - `message` {{experimental_inline}}
      - : Ein String, der eine für Menschen lesbare Beschreibung der Intervention enthält, einschließlich Informationen, wie die Intervention vermieden werden könnte.
        Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention erfolgt, falls verfügbar.

    - `sourceFile` {{experimental_inline}}
      - : Ein String, der den Pfad zur Quelldatei enthält, die zuerst die angegebene API verwendet hat (und die die Intervention verursacht hat), falls bekannt, oder `null` andernfalls.

- `type`
  - : Der String `"intervention"`, der angibt, dass dies ein Interventionsbericht ist.

- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

## Beschreibung

Ein Interventionsbericht kann generiert werden, wenn die Nutzung einer Funktion in einem Webdokument vom Browser aus Gründen wie Sicherheit, Leistung oder Benutzerbelästigung blockiert wurde. Zum Beispiel kann eine Werbung eine [Heavy Ad Intervention](https://developer.chrome.com/docs/web-platform/heavy-ads-intervention) (developer.chrome.com) auslösen, wenn sie die Responsivität der Seite verlangsamt oder anderweitig die Benutzererfahrung beeinflusst.

Sie können Interventionsberichte innerhalb der Seite überwachen, in der sie ausgelöst werden, mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API). Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte zu empfangen, und übergeben eine Callback-Methode sowie eine (optionale) Options-Eigenschaft, die die Arten von Berichten spezifiziert, über die Sie informiert werden möchten. Die Callback-Methode wird dann mit Berichten der gewünschten Typen aufgerufen, wobei ein Berichtobjekt übergeben wird. Für Interventionsberichte ist das Objekt eine Instanz von `InterventionReport` (welches die [`type`](#type)-Eigenschaft auf `"intervention"` gesetzt hat).

Ein typischer Interventionsbericht wird unten gezeigt (aus der Spezifikation kopiert). Beachten Sie, dass `url` die ursprünglich geladene Seite darstellt, während `body.sourceFile`, `body.lineNumber` und `body.columnNumber` die genaue Position des API-Aufrufs angeben, der die Intervention ausgelöst hat.

```json
{
  "type": "intervention",
  "url": "https://example.com/",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

Interventionsberichte werden auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) mit dem Namen `"default"` gesendet, wenn dieser definiert ist. Der Reporting-Server-Endpunkt und seine Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header festgelegt.

Die Struktur des Serverberichts ist fast identisch mit `InterventionReport`, außer dass zusätzlich die Felder `age` und `user_agent` enthalten sind.

```json
{
  "type": "intervention",
  "age": 27,
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

## Beispiele

### Verwendung des `ReportingObserver`-Interfaces

Um Interventionsberichte innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte des Typs `"intervention"` zu empfangen, und übergeben eine Callback-Methode, die die Berichte empfängt und protokolliert. Dieser Code muss vor dem Skript geladen werden, das die Verletzung verursacht:

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    console.log(report);
    console.log(JSON.stringify(report));
  });
}, options);

// Start the observer
observer.observe();
```

Die zeichenkettig transformierte Version des Berichts könnte dem unten gezeigten Objekt ähneln. Beachten Sie, dass der `type` `"intervention"` ist.

```json
{
  "type": "intervention",
  "url": "https://example.com/",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

### Senden eines Berichts an einen Reporting-Endpunkt

Um eine Webseite zu konfigurieren, die einen Interventionsbericht senden soll, müssen Sie einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) mit dem Namen "default" mithilfe des {{httpheader("Reporting-Endpoints")}}-Headers festlegen. Unten setzen wir den `default`-Endpunkt auf `https://example.com/intervention`:

Der Bericht wird dann als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den Endpunkt gesendet, sobald eine Intervention erfolgt. Er hat dieselbe Struktur wie `InterventionReport`, mit Ausnahme der zusätzlichen Eigenschaften `age` und `user_agent`.

```json
[
  {
    "type": "intervention",
    "age": 27,
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
    "body": {
      "id": "audio-no-gesture",
      "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
      "sourceFile": "https://example.com/index.js",
      "lineNumber": 1234,
      "columnNumber": 42
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
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
