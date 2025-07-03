---
title: "AudioContext: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: 29d7119ff6b46801a0e5a2ce69b734b668812035
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces legt das Ausgabe-Audiogerät für den `AudioContext` fest. Wenn keine Sink-ID explizit festgelegt wird, wird das standardmäßige System-Audioausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät zu setzen, benötigt der Entwickler die Berechtigung zum Zugriff auf Audiogeräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Berechtigung über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Außerdem kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Ausgabe-Audiogerät festlegen möchten. Dies kann einer der folgenden Wertetypen sein:
    - String
      - : Ein String, der die Sink-ID repräsentiert, z. B. über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzelne Eigenschaft, `type`, mit dem Wert `none` an. Wenn dieser Parameter gesetzt wird, wird das Audio verarbeitet, ohne dass es über ein Audiogerät abgespielt wird. Dies ist eine nützliche Option, um den Stromverbrauch zu minimieren, wenn keine Wiedergabe zusammen mit der Verarbeitung benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren vorhandenen Wert zu setzen (d.h. zurückgegeben von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)), wirft keine Fehler, sondern bricht den Vorgang sofort ab.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlschlägt.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung zum Zugriff auf Audiogeräte hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` keinem der auf dem System gefundenen Audiogeräte entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an), erstellen wir einen Audiografen, der einen dreisekündigen Burst von Weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) leiten, um die Lautstärke etwas zu senken.

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

Wir bieten dem Benutzer auch ein Dropdown-Menü, um das Audioausgabegerät dynamisch zu ändern. Dazu:

1. Stellen wir eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Wir rufen zuerst [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die erforderliche Berechtigungsaufforderung auszulösen, die wir für die Geräteliste benötigen, und verwenden dann [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte zu erhalten. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass Sie Ihr Audio in keinem Ausgabegerät abspielen möchten.
2. Fügen wir dem {{htmlelement("select")}}-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener hinzu, um die Sink-ID und damit das Audioausgabegerät zu wechseln, wenn ein neuer Wert ausgewählt wird. Wenn im Dropdown-Menü "None" ausgewählt wird, rufen wir `setSinkId()` mit dem `{ type : 'none' }`-Objektparameter auf, um kein Audiogerät auszuwählen, andernfalls führen wir es mit der im `<select>`-Element enthaltenen Audio-Geräte-ID im `value`-Attribut als Parameter aus.

Das Ausgabegerät kann während der Audiowiedergabe, sowie davor oder zwischen Wiedergaben geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
