---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`FencedFrameConfig`**-Interface repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welchen Inhalt es anzeigen wird.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript konstruiert werden. Sie werden aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine `FencedFrameConfig`-Objektinstanz hat eine sichtbare Methode, ist jedoch auch mit internen Konfigurationsinformationen verbunden, die undurchsichtige Eigenschaften enthalten, die nicht über JavaScript zugänglich sind. Dies umfasst Informationen wie die Quelle des geladenen Inhalts und Interessengruppen für Werbezwecke. Dies ist entscheidend dafür, wie Fenced Frames helfen, wichtige Anwendungsfälle zu implementieren und gleichzeitig die Privatsphäre der Benutzer zu respektieren.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Übergibt Daten aus dem einbettenden Dokument an den `<fencedframe>` gemeinsamen Speicher.

## Beispiele

### Grundlegende Nutzung

Um festzulegen, welcher Inhalt in einem `<fencedframe>` gezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Ad-Auktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} in eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Übertragung von kontextuellen Daten über `setSharedStorageContext()`

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignislevel-Daten innerhalb von Fenced Frames mit kontextuellen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettungsdokument an geteilte Speicher-Worklets zu übergeben, die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch dem Fenced Frame im [gemeinsamen Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als gemeinsamen Speicher-Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des Fenced Frames fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignislevel-Daten in das gemeinsame Speicher-Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht mit den kontextuellen Daten des einbettenden Dokuments verbunden):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignislevel-Daten des Frames aus dem Datenobjekt, dann berichten wir sie über [Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation):

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) {
    // …
  }
  convertEventPayloadToValue(info) {
    // …
  }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload),
    });
  }
}

register("send-report", ReportingOperation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
