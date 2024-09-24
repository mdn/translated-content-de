---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`FencedFrameConfig`**-Schnittstelle repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d. h., welchen Inhalt es anzeigen wird.

`FencedFrameConfig`-Objekte können nicht manuell über JavaScript erstellt werden. Sie werden aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) bereitgestellt und als Wert von {{domxref("HTMLFencedFrameElement.config")}} gesetzt.

Ein `FencedFrameConfig`-Objektinstanz verfügt über eine freigelegte Methode, jedoch wird es auch auf interne Konfigurationsinformationen abgebildet, die undurchsichtige Eigenschaften enthalten, die nicht über JavaScript zugänglich sind. Dazu gehören Informationen wie die Quelle des geladenen Inhalts und Interessengruppen zu Werbezwecken. Es ist entscheidend dafür, wie fenced frames helfen, wesentliche Anwendungsfälle unter Einhaltung der Privatsphäre der Nutzer zu implementieren.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} {{experimental_inline}}
  - : Überträgt Daten aus dem einbettenden Dokument in den `<fencedframe>` Shared Storage.

## Beispiele

### Grundlegende Nutzung

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein `FencedFrameConfig`-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Werbeauktion der Protected Audience API, welches dann verwendet wird, um die gewonnene Werbung in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von fenced frames mit kontextuellen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettenden an Shared Storage Worklets zu übergeben, die durch die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame in [shared storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine Beispiel-Ereignis-ID als Shared Storage-Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Daten vom Einbettenden, die Sie an das Shared Storage Worklet übergeben möchten
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Im Inneren des fenced frames fügen wir das Worklet-Modul mit {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}} hinzu und senden die Ereignisdaten an das Shared Storage Worklet mit {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (dies ist nicht mit den kontextuellen Daten aus dem einbettenden Dokument verbunden):

```js
const frameData = {
  // Daten, die nur innerhalb des fenced frame verfügbar sind
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignisdaten des frames aus dem Datenobjekt und berichten sie durch [Private Aggregation](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation):

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Daten vom Einbettenden
    const eventId = sharedStorage.context;

    // Daten vom fenced frame
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

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) on developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com
