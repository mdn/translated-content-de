---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`FencedFrameConfig`** Schnittstelle repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welchen Inhalt es anzeigen wird.

`FencedFrameConfig` Objekte können nicht manuell über JavaScript erstellt werden. Sie werden aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.

Eine Instanz eines `FencedFrameConfig` Objekts hat eine verfügbare Methode, wird jedoch auch auf interne Konfigurationsinformationen abgebildet, die undurchsichtige Eigenschaften enthalten, die von JavaScript aus nicht zugänglich sind. Dazu gehören Informationen wie die Quelle des geladenen Inhalts und Interessengruppen zu Werbezwecken. Dies ist entscheidend dafür, wie fenced frames Schlüsselanwendungsfälle umsetzen, während die Privatsphäre der Nutzer respektiert wird.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) {{experimental_inline}}
  - : Überträgt Daten aus dem einbettenden Dokument in den `<fencedframe>` gemeinsamen Speicher.

## Beispiele

### Grundlegende Verwendung

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein `FencedFrameConfig` Objekt, das dann als Wert der `config` Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel verwendet ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann genutzt wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig` Objekt zu erhalten. Wenn dies nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Kontextbezogene Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Daten innerhalb von fenced frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann genutzt werden, um kontextbezogene Daten vom Einbettungsdokument an Shared Storage Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame im [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine Scheinereignis-ID als den Shared Storage Kontext mithilfe von `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frames fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Daten über [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) in das Shared Storage Worklet (dies hat keinen Bezug zu den kontextbezogenen Daten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignisdaten des Frames aus dem Datenobjekt und geben sie dann über [Private Aggregation](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) aus:

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

- [Fenced Frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
