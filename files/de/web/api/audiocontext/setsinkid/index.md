---
title: "AudioContext: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces legt das Ausgabegerät für den `AudioContext` fest. Wenn keine Sink-ID explizit gesetzt ist, wird das standardmäßige System-Audioausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät zu setzen, benötigt der Entwickler die Berechtigung zum Zugriff auf Audiogeräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Berechtigung über einen Anruf bei [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Darüber hinaus kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesperrt werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Audioausgabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die Sink-ID darstellt, z. B. über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Zurzeit nimmt dies eine einzelne Eigenschaft, `type`, mit dem Wert `none` an. Durch das Setzen dieses Parameters wird das Audio verarbeitet, ohne dass es über ein Audioausgabegerät abgespielt wird. Dies ist eine nützliche Option, um den Stromverbrauch zu minimieren, wenn Sie keine Wiedergabe zusammen mit der Verarbeitung benötigen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren bestehenden Wert (d.h. zurückgegeben von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) zu setzen, wirft keine Fehler, aber der Prozess wird sofort abgebrochen.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlgeschlagen ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung zum Zugriff auf Audiogeräte hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` keinem auf dem System gefundenen Audiogerät entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode](https://glitch.com/edit/#!/set-sink-id) an) erstellen wir einen Audiographen, der einen dreisekündigen Ausbruch von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um die Lautstärke etwas zu reduzieren.

Wir bieten dem Benutzer auch ein Dropdown-Menü, um das Audioausgabegerät spontan ändern zu können. Dazu:

1. Stellen wir eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Wir rufen zuerst [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die Berechtigungsabfrage zu aktivieren, die wir zum Aufzählen der Geräte benötigen, und verwenden dann [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte zu erhalten. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass Sie Ihr Audio in keiner Ausgabe abspielen möchten.

   ```js
   mediaDeviceBtn.addEventListener('click', async () => {
     if ("setSinkId" in AudioContext.prototype) {
       selectDiv.textContent = "";

       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       const devices = await navigator.mediaDevices.enumerateDevices();

       // Most of the DOM scripting to generate the dropdown cut out for brevity

       const audioOutputs = devices.filter(
          (device) => device.kind === 'audiooutput' && device.deviceId !== 'default'
       );

       audioOutputs.forEach((device) => {
         const option = document.createElement('option')
         option.value = device.deviceId;
         option.textContent = device.label;
         select.appendChild(option);
       });

       const option = document.createElement('option')
       option.value = 'none';
       option.textContent = 'None';
       select.appendChild(option);

       //...
   ```

2. Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zu dem {{htmlelement("select")}}-Element hinzu, um die Sink-ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "None" im Dropdown-Menü ausgewählt ist, rufen wir `setSinkId()` mit dem Objektparameter `{ type : 'none' }` auf, um kein Audiogerät auszuwählen. Andernfalls verwenden wir es mit der im `<select>`-Element-Wertattribut enthaltenen Audio-Geräte-ID als Parameter.

   ```js
       // ...

       select.addEventListener('change', async () => {
         if(select.value === 'none') {
           await audioCtx.setSinkId({ type : 'none' });
         } else {
           await audioCtx.setSinkId(select.value);
         }
       })
     }
   });
   ```

Das Ausgabegerät kann während der Audiowiedergabe sowie davor oder zwischen den Wiedergaben geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Zielausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
