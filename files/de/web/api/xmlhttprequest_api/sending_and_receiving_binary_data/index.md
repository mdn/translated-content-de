---
title: Senden und Empfangen von Binärdaten
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

## Empfangen von Binärdaten

Die Eigenschaft `responseType` des `XMLHttpRequest`-Objekts kann gesetzt werden, um den erwarteten Antworttyp vom Server zu ändern. Mögliche Werte sind der leere String (Standard), `"arraybuffer"`, `"blob"`, `"document"`, `"json"` und `"text"`. Die Eigenschaft `response` enthält den Entitätskörper entsprechend `responseType`, als `ArrayBuffer`, `Blob`, `Document`, `JSON` oder String. Dies ist `null`, wenn die Anfrage nicht abgeschlossen oder nicht erfolgreich war.

In diesem Beispiel wird ein Bild als Binärdatei gelesen und ein 8-Bit-Unsigned-Integer-Array aus den Rohbytes erstellt. Beachten Sie, dass hierbei das Bild nicht dekodiert und die Pixel nicht gelesen werden. Dies kann mit dem [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interface erfolgen.

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

Sie können eine Binärdatei auch als [`Blob`](/de/docs/Web/API/Blob) lesen, indem Sie die Zeichenkette `"blob"` auf die Eigenschaft `responseType` setzen.

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "blob";

req.onload = (event) => {
  const blob = req.response;
  // …
};

req.send();
```

## Senden von Binärdaten

Die `send`-Methode des `XMLHttpRequest` wurde erweitert, um die einfache Übertragung von Binärdaten zu ermöglichen, indem sie ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File)-Objekt akzeptiert.

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

Sie können auch JavaScript-Typ-Arrays als Binärdaten senden.

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

Dies erstellt ein 512-Byte-Array von 8-Bit-Integern und sendet es; selbstverständlich können Sie beliebige Binärdaten verwenden.

## Absenden von Formularen und Hochladen von Dateien

Siehe [`FormData`](/de/docs/Web/API/FormData).
