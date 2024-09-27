---
title: "AudioContext: setSinkId()-Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces legt das Ausgabegerät für den `AudioContext` fest. Wenn keine Sink-ID explizit festgelegt wird, wird das standardmäßige System-Audioausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das standardmäßige Gerät einzustellen, benötigt der Entwickler die Berechtigung zum Zugriff auf Audiogeräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Berechtigung über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Darüber hinaus kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Ausgabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die Sink-ID darstellt, die zum Beispiel über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden, abgerufen wird.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzige Eigenschaft, `type`, mit einem Wert von `none` an. Durch Setzen dieses Parameters wird das Audio verarbeitet, ohne über ein Audioausgabegerät wiedergegeben zu werden. Dies ist eine nützliche Option, um den Energieverbrauch zu minimieren, wenn Sie neben der Verarbeitung keine Wiedergabe benötigen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren bestehenden Wert einzustellen (d. h. zurückgegeben durch [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)), führt zu keinen Fehlern, bricht jedoch den Vorgang sofort ab.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlgeschlagen ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung hat, auf Audiogeräte zuzugreifen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` keinem auf dem System gefundenen Audiogerät entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode](https://glitch.com/edit/#!/set-sink-id) an), erstellen wir ein Audiograf, das einen dreisekündigen Stoß von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um die Lautstärke etwas zu reduzieren.

Wir stellen dem Benutzer auch ein Dropdown-Menü zur Verfügung, damit er das Audioausgabegerät spontan ändern kann. Dazu:

1. Stellen wir eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Wir rufen zuerst [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die Berechtigungsaufforderung auszulösen, die wir benötigen, um die Gerätezählung zu ermöglichen, und verwenden dann [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte abzurufen. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass Sie Ihr Audio in keinem Ausgang wiedergeben möchten.

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

2. Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum {{htmlelement("select")}}-Element hinzu, um die Sink-ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "None" im Dropdown-Menü ausgewählt ist, rufen wir `setSinkId()` mit dem `{ type : 'none' }`-Objektparameter auf, um kein Audiogerät auszuwählen, ansonsten führen wir es mit der im `value`-Attribut des `<select>`-Elements enthaltenen Audiogeräte-ID als Parameter aus.

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

Das Ausgabegerät kann während der Audiowiedergabe, sowie davor oder zwischen den Wiedergaben geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
