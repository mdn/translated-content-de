---
title: Senden und Empfangen von Binärdaten
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Die Eigenschaft `responseType` des `XMLHttpRequest`-Objekts kann so eingestellt werden, dass der erwartete Antworttyp vom Server geändert wird. Mögliche Werte sind der leere String (Standard), `"arraybuffer"`, `"blob"`, `"document"`, `"json"` und `"text"`. Die Eigenschaft `response` enthält den Entitätskörper gemäß `responseType`, als `ArrayBuffer`, `Blob`, `Document`, `JSON` oder String. Dies ist `null`, wenn die Anfrage nicht vollständig oder nicht erfolgreich war.

Dieses Beispiel liest ein Bild als Binärdatei und erstellt ein 8-Bit-Integer-Array aus den Rohdaten. Beachten Sie, dass dies das Bild nicht dekodieren und die Pixel lesen wird. Dazu benötigen Sie eine [PNG-Dekodierungsbibliothek](https://github.com/foliojs/png.js).

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

Sie können eine Binärdatei auch als [`Blob`](/de/docs/Web/API/Blob) lesen, indem Sie den String `"blob"` der Eigenschaft `responseType` zuweisen.

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

## Empfang von Binärdaten in älteren Browsern

Die unten gezeigte Funktion `loadBinaryResource()` lädt Binärdaten von der angegebenen URL und gibt sie an den Aufrufer zurück.

```js
function loadBinaryResource(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);

  // XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  return req.status === 200 ? req.responseText : "";
}
```

Die Magie geschieht in der Funktion `overrideMimeType`, die den Browser zwingt, dies als einfachen Text mit einer benutzerdefinierten Zeichenkodierung zu behandeln. Dies weist den Browser an, es nicht zu parsen und die Bytes unverarbeitet durchzulassen.

```js
const filestream = loadBinaryResource(url);
const abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

Das obige Beispiel holt das Byte an der Offset-Position `x` innerhalb der geladenen Binärdaten. Der gültige Bereich für `x` liegt zwischen 0 und `filestream.length-1`.

Siehe [Herunterladen von Binärströmen mit XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) für eine ausführliche Erklärung.

## Senden von Binärdaten

Die `send`-Methode des XMLHttpRequest wurde erweitert, um die einfache Übertragung von Binärdaten zu erleichtern, indem sie ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) Objekt akzeptiert.

Das folgende Beispiel erstellt eine Textdatei im Handumdrehen und verwendet die `POST`-Methode, um die "Datei" an den Server zu senden. Dieses Beispiel verwendet einfachen Text, aber Sie können sich vorstellen, dass die Daten eine Binärdatei sind.

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

Sie können auch JavaScript-typisierte Arrays als Binärdaten senden.

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

Dies erstellt ein Array von 512 Bytes mit 8-Bit-Integern und sendet es; natürlich können Sie beliebige Binärdaten verwenden.

## Formulare einreichen und Dateien hochladen

Siehe [`FormData`](/de/docs/Web/API/FormData).
