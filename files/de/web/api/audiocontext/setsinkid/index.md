---
title: "AudioContext: setSinkId()-Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle legt das Ausgabe-Audiogerät für das `AudioContext` fest. Wenn keine `sink ID` explizit festgelegt wird, wird das Standard-Audioausgabegerät des Systems verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät einzustellen, benötigt der Entwickler die Berechtigung, auf Audiogeräte zuzugreifen. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Genehmigung über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erteilen.

Darüber hinaus kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die `sink ID` des Geräts, das Sie als Audiowiedergabegerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die `sink ID` darstellt, zum Beispiel abgerufen über die `deviceId`-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine `sink ID` darstellt. Derzeit nimmt dieses eine einzelne Eigenschaft, `type`, mit dem Wert `none` an. Das Festlegen dieses Parameters führt dazu, dass das Audio verarbeitet wird, ohne über ein Audiowiedergabegerät abgespielt zu werden. Dies ist eine nützliche Option, um den Energieverbrauch zu minimieren, wenn keine Wiedergabe zusammen mit der Verarbeitung benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die `sink ID` auf ihren bestehenden Wert (d. h. zurückgegeben von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) zu setzen, erzeugt keine Fehler, bricht jedoch den Prozess sofort ab.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audiowiedergabegerät fehlgeschlagen ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Berechtigung hat, auf Audiogeräte zuzugreifen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die übergebene `sinkId` mit keinem auf dem System gefundenen Audiogerät übereinstimmt.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode an](https://glitch.com/edit/#!/set-sink-id)), erstellen wir einen Audio-Graphen, der einen dreisekündigen Abbruch von weißem Rauschen über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erzeugt, den wir auch durch einen [`GainNode`](/de/docs/Web/API/GainNode) laufen lassen, um die Lautstärke etwas zu reduzieren.

Wir bieten dem Benutzer auch ein Dropdown-Menü an, das ihnen erlaubt, das Audiowiedergabegerät spontan zu ändern. Dazu:

1. Bieten wir einen Button an, um das Dropdown-Menü zu füllen. Wir rufen zuerst [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um die erforderliche Berechtigungsaufforderung auszulösen, die wir benötigen, um die Geräteeinzugserlaubnis zu erhalten, und verwenden dann [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), um alle verfügbaren Geräte abzurufen. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass Sie Ihr Audio nicht in irgendeiner Ausgabe abspielen möchten.

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

2. Fügen wir ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum {{htmlelement("select")}}-Element hinzu, um die `sink ID` und damit das Audiowiedergabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "None" im Dropdown ausgewählt wird, rufen wir `setSinkId()` mit dem `{ type : 'none' }`-Objektparameter auf, um kein Audiogerät auszuwählen, andernfalls verwenden wir die `value`-Attribut des `<select>`-Elements als Parameter mit der Audiogeräte-ID.

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
