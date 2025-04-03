---
title: "AudioContext: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`** Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces legt das Ausgabegerät für das `AudioContext` fest. Wenn keine sink ID explizit gesetzt wird, wird das standardmäßige Systemsoundausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät einzustellen, benötigt der Entwickler die Berechtigung, auf Audiogeräte zuzugreifen. Falls erforderlich, kann der Benutzer aufgefordert werden, die benötigte Berechtigung über einen [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Aufruf zu erteilen.

Darüber hinaus kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die sink ID des Geräts, das Sie als Audioausgabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die sink ID darstellt, zum Beispiel abgerufen über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das unterschiedliche Optionen für eine sink ID darstellt. Derzeit hat es eine einzelne Eigenschaft, `type`, mit einem Wert von `none`. Das Festlegen dieses Parameters bewirkt, dass das Audio verarbeitet wird, ohne über ein Audiogerät ausgegeben zu werden. Diese Option ist nützlich, um den Stromverbrauch zu minimieren, wenn Sie die Wiedergabe zusammen mit der Verarbeitung nicht benötigen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die sink ID auf ihren bestehenden Wert (d.h. zurückgegeben von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) zu setzen, führt zu keinem Fehler, bricht jedoch sofort den Prozess ab.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlschlägt.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung hat, auf Audiogeräte zuzugreifen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` zu keinem auf dem System gefundenen Audiogerät passt.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode](https://glitch.com/edit/#!/set-sink-id) an) erstellen wir einen Audiobaum, der einen dreisekündigen Burst von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) generiert, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um den Ton etwas abzuschwächen.

Wir stellen dem Benutzer auch ein Dropdown-Menü zur Verfügung, mit dem er das Audioausgabegerät im laufenden Betrieb ändern kann. Dazu:

1. Stellen wir eine Schaltfläche bereit, um das Dropdown-Menü zu füllen. Zuerst rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die Berechtigungseingabeaufforderung zu aktivieren, die wir zur Gerätenenumeration benötigen. Dann verwenden wir [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte zu erhalten. Wir durchlaufen die unterschiedlichen Geräte und machen jedes als Option in einem {{htmlelement("select")}} Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass das Audio auf keinem Ausgabegerät wiedergegeben werden soll.

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

2. Fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum {{htmlelement("select")}} Element hinzu, um die sink ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "None" im Dropdown ausgewählt ist, rufen wir `setSinkId()` mit dem `{ type : 'none' }` Objektparameter auf, um kein Audiogerät auszuwählen. Andernfalls führen wir es mit der im `<select>` Element-`value`-Attribut enthaltenen Audio-Geräte-ID als Parameter aus.

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

Das Ausgabegerät kann während der Audiowiedergabe, sowie davor oder zwischen Wiedergaben geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Ausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
