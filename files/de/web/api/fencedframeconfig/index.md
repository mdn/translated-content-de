---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`FencedFrameConfig`**-Schnittstelle repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welches Inhalt darin angezeigt wird.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript erstellt werden. Sie werden aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine Instanz eines `FencedFrameConfig`-Objekts hat eine sichtbare Methode, wird jedoch auch auf interne Konfigurationsinformationen abgebildet, die undurchsichtige Eigenschaften enthalten, die von JavaScript nicht zugänglich sind. Dies umfasst Informationen wie die Quelle des geladenen Inhalts und Interessensgruppen für Werbezwecke. Es ist entscheidend dafür, wie Fenced Frames helfen, wichtige Anwendungsfälle zu implementieren und dabei die Privatsphäre der Nutzer zu respektieren.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Überträgt Daten aus dem einbettenden Dokument in den `<fencedframe>`-Shared Storage.

## Beispiele

### Grundlegende Verwendung

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie zum Beispiel [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert für die `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API abgerufen, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE] > `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf aufgenommen werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wird es nicht gesetzt, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Ebene-Daten innerhalb von Fenced Frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsdokument zu Shared-Storage-Arbeitsmodulen, die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden, zu übergeben.

Im folgenden Beispiel speichern wir sowohl Daten von der einbettenden Seite als auch vom Fenced Frame in [shared storage](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Shared Storage-Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Im Fenced Frame fügen wir das Arbeitsmodul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Ebene-Daten in das Shared-Storage-Arbeitsmodul mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht mit den kontextbezogenen Daten des einbettenden Dokuments verbunden):

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

Im `reporting-worklet.js`-Arbeitsmodul lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignis-Ebene-Daten des Frames aus dem Datenobjekt und berichten sie dann über [Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation):

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
