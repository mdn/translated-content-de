---
title: "AudioContext: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`** Methode der [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle setzt das Ausgabe-Audiogerät für den `AudioContext`. Wenn keine Sink-ID explizit gesetzt wird, wird das standardmäßige System-Audioausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät zu setzen, benötigt der Entwickler die Berechtigung zum Zugriff auf Audio-Geräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die benötigte Berechtigung über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Außerdem kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Audioausgabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die Sink-ID darstellt, die beispielsweise über die `deviceId` Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekte abgerufen wurde, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit hat es eine einzige Eigenschaft, `type`, mit dem Wert `none`. Wenn dieser Parameter gesetzt wird, wird das Audio verarbeitet, ohne über ein Audioausgabegerät abgespielt zu werden. Dies ist eine nützliche Option, um den Energieverbrauch zu minimieren, wenn Sie keine Wiedergabe zusammen mit der Verarbeitung benötigen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren bestehenden Wert zu setzen (z.B. zurückgegeben von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)), wirft keine Fehler, beendet aber den Prozess sofort.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlgeschlagen ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung zum Zugriff auf Audiogeräte hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` keinem auf dem System gefundenen Audiogerät entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (schauen Sie sich den [Quellcode](https://glitch.com/edit/#!/set-sink-id) an), erstellen wir einen Audiografen, der eine dreisekündige Wellen von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um die Lautstärke etwas zu senken.

```js
mediaDeviceBtn.addEventListener("click", async () => {
  if ("setSinkId" in AudioContext.prototype) {
    selectDiv.textContent = "";

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const devices = await navigator.mediaDevices.enumerateDevices();

    // Most of the DOM scripting to generate the dropdown cut out for brevity

    const audioOutputs = devices.filter(
      (device) =>
        device.kind === "audiooutput" && device.deviceId !== "default",
    );

    audioOutputs.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.textContent = device.label;
      select.appendChild(option);
    });

    const option = document.createElement("option");
    option.value = "none";
    option.textContent = "None";
    select.appendChild(option);

    select.addEventListener("change", async () => {
      if (select.value === "none") {
        await audioCtx.setSinkId({ type: "none" });
      } else {
        await audioCtx.setSinkId(select.value);
      }
    });
  }
});
```

Wir bieten dem Benutzer auch ein Dropdown-Menü, damit er das Audioausgabegerät spontan ändern kann. Dafür:

1. Stellen wir eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Wir rufen zuerst [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die benötigten Berechtigungen zu aktivieren, die wir für die Geräteliste benötigen. Dann verwenden wir [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte abzurufen. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}} Element verfügbar. Wir erstellen auch eine "Keine"-Option für den Fall, dass Sie Ihr Audio in keinem Ausgang wiedergeben möchten.
2. Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener zum {{htmlelement("select")}} Element hinzu, um die Sink-ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "Keine" im Dropdown gewählt wird, rufen wir `setSinkId()` mit dem Objektparameter `{ type : 'none' }` auf, um kein Audiogerät auszuwählen, andernfalls führen wir es mit der Audio-Geräte-ID aus, die im `value` Attribut des `<select>` Elements als Parameter enthalten ist.

Das Ausgabegerät kann während der Audiowiedergabe geändert werden, ebenso wie davor oder zwischen den Wiedergaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Zielausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
