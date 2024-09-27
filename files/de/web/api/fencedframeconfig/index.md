---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`FencedFrameConfig`**-Interface repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h., welche Inhalte darin angezeigt werden.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript konstruiert werden. Sie werden über eine Quelle wie die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) bereitgestellt und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine Instanz eines `FencedFrameConfig`-Objekts hat eine exponierte Methode, weist aber auch interne Konfigurationsinformationen zu, die undurchsichtige Eigenschaften enthalten, die von JavaScript nicht zugänglich sind. Dazu gehören Informationen wie die Quelle des geladenen Inhalts und Interessengruppen für Werbezwecke. Dies ist entscheidend dafür, wie fenced frames helfen, wichtige Anwendungsfälle unter Wahrung der Privatsphäre der Benutzer umzusetzen.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Überträgt Daten vom einbettenden Dokument in den `<fencedframe>`-Speicher.

## Beispiele

### Grundlegende Nutzung

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn dies nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Kontextbezogene Daten mittels `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten auf Ebene der fenced frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsdokument an Shared-Storage-Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame im [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite werden wir eine simulierte Ereignis-ID als Shared-Storage-Kontext mit `setSharedStorageContext()` festlegen:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frames fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Einzelinformationen in das Shared-Storage-Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies steht nicht im Zusammenhang mit den kontextbezogenen Daten des einbettenden Dokuments):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des Einbettungsdokuments von `sharedStorage.context` und die ereignisbezogenen Daten des Frames aus dem Datenobjekt und berichten darüber durch [Private Aggregation](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation):

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
