---
title: Senden und Empfangen von Binärdaten
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 51cf0853149ac97de0c0ba4b044f7757fcd4c87e
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

## Empfangen von Binärdaten

Die Eigenschaft `responseType` des XMLHttpRequest-Objekts kann gesetzt werden, um den erwarteten Antworttyp vom Server zu ändern. Mögliche Werte sind der leere String (Standard), `"arraybuffer"`, `"blob"`, `"document"`, `"json"` und `"text"`. Die Eigenschaft `response` enthält den Entitätskörper entsprechend dem `responseType`, als `ArrayBuffer`, `Blob`, `Document`, `JSON` oder String. Dies ist `null`, wenn die Anfrage nicht abgeschlossen oder nicht erfolgreich war.

Dieses Beispiel liest ein Bild als Binärdatei und erstellt ein 8-Bit-Unsigned-Integer-Array aus den Rohdaten. Beachten Sie, dass dies das Bild nicht dekodiert und die Pixel nicht liest. Dies kann mit der [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Schnittstelle durchgeführt werden.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "arraybuffer";

req.onload = (event) => {
  const arrayBuffer = req.response; // Note: not req.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    byteArray.forEach((element, index) => {
      // do something with each byte in the array
    });
  }
};

req.send(null);
```

Sie können eine Binärdatei auch als [`Blob`](/de/docs/Web/API/Blob) lesen, indem Sie den String `"blob"` in die Eigenschaft `responseType` setzen.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "blob";

req.onload = (event) => {
  const blob = req.response;
  // ...
};

req.send();
```

## Senden von Binärdaten

Die Methode `send` des XMLHttpRequest wurde erweitert, um die einfache Übertragung von Binärdaten zu ermöglichen, indem sie ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File)-Objekt akzeptiert.

Das folgende Beispiel erstellt eine Textdatei "on-the-fly" und verwendet die `POST`-Methode, um die "Datei" an den Server zu senden. Dieses Beispiel verwendet Klartext, aber Sie können sich vorstellen, dass die Daten stattdessen eine Binärdatei sind.

```js
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.onload = (event) => {
  // Uploaded
};

const blob = new Blob(["abc123"], { type: "text/plain" });

req.send(blob);
```

## Senden von typisierten Arrays als Binärdaten

Sie können JavaScript-typisierte Arrays auch als Binärdaten senden.

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

Hierbei wird ein 512-Byte-Array von 8-Bit-Integern aufgebaut und gesendet; Sie können natürlich beliebige Binärdaten verwenden.

## Formulare einreichen und Dateien hochladen

Siehe [`FormData`](/de/docs/Web/API/FormData).
