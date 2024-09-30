---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`FencedFrameConfig`**-Schnittstelle repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welchen Inhalt es anzeigen wird.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript konstruiert werden. Sie werden von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine Instanz eines `FencedFrameConfig`-Objekts hat eine zugängliche Methode, sie entspricht jedoch auch internen Konfigurationsinformationen, die undurchsichtige Eigenschaften enthalten, die nicht von JavaScript aus zugänglich sind. Dies schließt Informationen wie die Quelle des geladenen Inhalts und Interessengruppen für Werbezwecke ein. Dies ist der Schlüssel, wie `fenced frames` helfen, wichtige Anwendungsfälle zu implementieren und gleichzeitig die Privatsphäre der Benutzer zu respektieren.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Überträgt Daten aus dem einbettenden Dokument in den `<fencedframe>`-Gemeinsamen Speicher.

## Beispiele

### Grundlegende Verwendung

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisebenen-Daten innerhalb von `fenced frames` mit kontextuellen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettungsprogramm an gemeinsam genutzte Speicher-Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der Einbettungsseite als auch vom `fenced frame` im [Gemeinsamen Speicher](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der Einbettungsseite setzen wir eine simulierte Ereignis-ID als Kontext des gemeinsamen Speichers mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des `fenced frame` fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignissebenen-Daten in das gemeinsame Speicher-Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht verwandt mit den kontextuellen Daten aus dem einbettenden Dokument):

```js
const frameData = {
  // Data available only inside the fenced frame
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die ereignisbezogenen Daten des Frames aus dem Datenobjekt und berichten sie dann durch [Private Aggregation](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation):

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload)
    });
  }
}

register('send-report', ReportingOperation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
