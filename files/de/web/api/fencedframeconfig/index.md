---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`FencedFrameConfig`**-Schnittstelle repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte darin angezeigt werden.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript erstellt werden. Sie werden von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine `FencedFrameConfig`-Objektinstanz hat eine exponierte Methode, sie entspricht jedoch auch internen Konfigurationsinformationen, die undurchsichtige Eigenschaften enthalten, die von JavaScript nicht zugänglich sind. Dazu gehören Informationen wie die Quelle des geladenen Inhalts und Interessengruppen für Werbezwecke. Sie ist entscheidend dafür, wie fenced frames helfen, wichtige Anwendungsfälle zu verwirklichen und gleichzeitig die Privatsphäre der Benutzer zu respektieren.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Überträgt Daten aus dem einbettenden Dokument in den `<fencedframe>`'s gemeinsamen Speicher.

## Beispiele

### Grundlegende Nutzung

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird aus einer Anzeigenauktion der Protected Audience API ein `FencedFrameConfig` abgerufen, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` darzustellen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn dies nicht festgelegt ist, wird das resultierende {{jsxref("Promise")}} auf einen URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Übergabe von Kontextdaten über `setSharedStorageContext()`

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von fenced frames mit Kontextdaten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um Kontextdaten vom Einbettungsdokument auf gemeinsame Speicher-Worklets weiterzugeben, die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame im [gemeinsamen Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite werden wir eine simulierte Ereignis-ID als gemeinsamen Speicher-Kontext mit `setSharedStorageContext()` setzen:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frame fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden die Ereignisdatenebene mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) in das gemeinsame Speicher-Worklet (dies steht in keinem Zusammenhang mit den Kontextdaten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments von `sharedStorage.context` und die Ereignisdatenebene des Frames aus dem Datenobjekt, und berichten sie dann durch [Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation):

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
