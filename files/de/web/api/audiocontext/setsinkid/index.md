---
title: "AudioContext: setSinkId()-Methode"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setSinkId()`**-Methode des {{domxref("AudioContext")}}-Interfaces legt das Ausgabe-Audiogerät für den `AudioContext` fest. Wenn keine Sink-ID explizit festgelegt wird, wird das standardmäßige System-Audioausgabegerät verwendet.

Um das Audiogerät auf ein anderes als das Standardgerät zu setzen, benötigt der Entwickler die Berechtigung zum Zugriff auf Audiogeräte. Falls erforderlich, kann der Benutzer aufgefordert werden, die erforderliche Berechtigung über einen {{domxref("MediaDevices.getUserMedia()")}}-Aufruf zu erteilen.

Zusätzlich kann diese Funktion durch eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die Sink-ID des Geräts, das Sie als Ausgabe-Audiogerät festlegen möchten. Dies kann einen der folgenden Wertetypen annehmen:
    - String
      - : Ein String, der die Sink-ID darstellt, z.B. abgerufen über die `deviceId`-Eigenschaft der {{domxref("MediaDeviceInfo")}}-Objekte, die von {{domxref("MediaDevices.enumerateDevices()")}} zurückgegeben werden.
    - `AudioSinkOptions`
      - : Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzige Eigenschaft, `type`, mit dem Wert `none` an. Das Setzen dieses Parameters bewirkt, dass das Audio verarbeitet wird, ohne über ein Audioausgabegerät abgespielt zu werden. Dies ist eine nützliche Option, um den Stromverbrauch zu minimieren, wenn keine Wiedergabe zusammen mit der Verarbeitung benötigt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Wert von `undefined` erfüllt wird.

Der Versuch, die Sink-ID auf ihren bestehenden Wert zu setzen (z.B. zurückgegeben durch {{domxref("AudioContext.sinkId")}}), führt zu keinem Fehler, sondern bricht den Prozess sofort ab.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Zugriff auf das ausgewählte Audioausgabegerät fehlgeschlagen ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Browser keine Berechtigung hat, auf Audiogeräte zuzugreifen.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die übergebene `sinkId` keinem auf dem System gefundenen Audiogerät entspricht.

## Beispiele

In unserem [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) (sehen Sie sich den [Quellcode an](https://glitch.com/edit/#!/set-sink-id)), erstellen wir einen Audiographen, der einen dreisekündigen Burst von weißem Rauschen über einen {{domxref("AudioBufferSourceNode")}} erzeugt, den wir auch durch einen {{domxref("GainNode")}} laufen lassen, um die Lautstärke etwas zu reduzieren.

Wir stellen dem Benutzer auch ein Dropdown-Menü zur Verfügung, mit dem er das Audioausgabegerät im laufenden Betrieb ändern kann. Dazu:

1. Bieten wir einen Button an, um das Dropdown-Menü zu füllen. Wir rufen zuerst {{domxref("MediaDevices.getUserMedia()")}} auf, um die Berechtigungsaufforderung auszulösen, die wir für die Geräteeinschätzung benötigen, und verwenden dann {{domxref("MediaDevices.enumerateDevices()")}}, um alle verfügbaren Geräte zu erhalten. Wir durchlaufen die verschiedenen Geräte und machen jedes als Option in einem {{htmlelement("select")}}-Element verfügbar. Wir erstellen auch eine "None"-Option für den Fall, dass Sie Ihr Audio nicht über ein Ausgabegerät abspielen möchten.

   ```js
   mediaDeviceBtn.addEventListener('click', async () => {
     if ("setSinkId" in AudioContext.prototype) {
       selectDiv.textContent = "";

       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       const devices = await navigator.mediaDevices.enumerateDevices();

       // Ein Großteil des DOM-Skripts zur Generierung des Dropdowns wurde aus Gründen der Kürze weggelassen

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

2. Fügen Sie einem {{domxref("HTMLElement/change_event", "change")}}-Ereignislistener am {{htmlelement("select")}}-Element hinzu, um die Sink-ID und damit das Audioausgabegerät zu ändern, wenn ein neuer Wert ausgewählt wird. Wenn "None" im Dropdown ausgewählt ist, rufen wir `setSinkId()` mit dem Objektparameter `{ type : 'none' }` auf, um kein Audiogerät auszuwählen, andernfalls führen wir es mit der Audio-Geräte-ID aus, die im `value`-Attribut des `<select>`-Elements als Parameter enthalten ist.

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
- [Ändern des Ausgabegeräts im Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
