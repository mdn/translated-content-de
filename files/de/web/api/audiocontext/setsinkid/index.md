---
title: "AudioContext: setSinkId()-Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle setzt das Ausgabegerät für den `AudioContext`. Wenn keine spezifische Sink-ID gesetzt wird, wird das standardmäßige Audioausgabegerät des Systems verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät zu setzen, benötigt der Entwickler eine Genehmigung zum Zugriff auf Audiogeräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Erlaubnis über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Zusätzlich kann dieses Feature durch eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Audioausgabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die Sink-ID darstellt, abgerufen beispielsweise über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Momentan nimmt dies eine einzelne Eigenschaft, `type`, mit einem Wert von `none` an. Wenn dieser Parameter gesetzt ist, wird das Audio verarbeitet, ohne über ein Audioausgabegerät abgespielt zu werden. Dies ist eine nützliche Option, um den Energieverbrauch zu minimieren, wenn keine Wiedergabe zusammen mit der Verarbeitung benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren bestehenden Wert zu setzen (d.h. den von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) zurückgegebenen), wirft keine Fehler, sondern bricht den Prozess sofort ab.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlgeschlagen ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung zum Zugriff auf Audiogeräte hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` keiner auf dem System gefundenen Audiogerät entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode](https://glitch.com/edit/#!/set-sink-id) an), erstellen wir ein Audiograph, das einen dreisekündigen Schwall von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um die Lautstärke etwas zu reduzieren.

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

Wir bieten dem Benutzer auch ein Dropdown-Menü, um das Audioausgabegerät im laufenden Betrieb zu ändern. Um dies zu tun, führen wir folgende Schritte aus:

1. Wir stellen eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Zuerst rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die Berechtigungsanfrage zu starten, die für die Geräteauflistung erforderlich ist, und verwenden dann [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte zu erhalten. Wir schleifen durch die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "Keine"-Option für den Fall, dass Sie Ihr Audio nicht über eine Ausgabe abspielen möchten.
2. Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum {{htmlelement("select")}}-Element hinzu, um die Sink-ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "Keine" im Dropdown-Menü ausgewählt ist, rufen wir `setSinkId()` mit dem `{ type : 'none' }`-Objektparameter auf, um kein Audiogerät auszuwählen, andernfalls führen wir es mit der im `<select>`-Element enthaltenen Audio-Geräte-ID im `value`-Attribut als Parameter aus.

Das Ausgabegerät kann während der Audiowiedergabe, sowie davor oder zwischen den Wiedergaben geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Ausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
