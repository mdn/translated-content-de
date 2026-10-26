---
title: "Window: btoa()-Methode"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

Die Methode **`btoa()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) erzeugt aus einer _binären Zeichenkette_ eine {{Glossary("Base64", "Base64")}}-codierte {{Glossary("ASCII", "ASCII")}}-Zeichenkette. Dabei wird jedes Zeichen der Eingabe als ein Byte binärer Daten behandelt.

Mit dieser Methode können Sie Daten codieren, die andernfalls bei der Übertragung Probleme verursachen könnten. Nach der Übertragung können Sie die Daten mit der Methode [`Window.atob()`](/de/docs/Web/API/Window/atob) wieder decodieren. So lassen sich beispielsweise Steuerzeichen wie die ASCII-Werte 0 bis 31 codieren.

Wenn Ihre Daten in einem `Uint8Array`-Objekt vorliegen, sollten Sie auch die Methode {{jsxref("Uint8Array.prototype.toBase64()")}} in Betracht ziehen. Damit vermeiden Sie, eine Zeichenkette mit unverarbeiteten Bytes zu erstellen.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Die zu codierende _binäre Zeichenkette_. Zeichenketten in JavaScript sind als {{Glossary("UTF-16", "UTF-16")}} codiert. Daher muss jedes Zeichen einen Codepunkt unter 256 haben und damit ein Byte Daten repräsentieren.

### Rückgabewert

Eine ASCII-Zeichenkette, die die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Zeichenkette enthält ein Zeichen, das nicht in ein einzelnes Byte passt. Weitere Informationen finden Sie unten unter „Unicode-Zeichenketten“.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

### Unicode-Zeichenketten

Base64 erwartet binäre Daten als Eingabe. Bei JavaScript-Zeichenketten bedeutet das, dass der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie `btoa()` eine Zeichenkette übergeben, die Zeichen mit Codepunkten enthält, die mehr als ein Byte benötigen, erhalten Sie einen Fehler: Eine solche Zeichenkette gilt nicht als binäre Daten.

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Da `btoa` die Codepunkte der Eingabezeichenkette als Bytewerte interpretiert, führt der Aufruf von `btoa` mit einer Zeichenkette zu einer „Character Out Of Range“-Ausnahme, wenn der Codepunkt eines Zeichens `0xff` überschreitet. Wenn Sie beliebigen Unicode-Text codieren möchten, müssen Sie die Zeichenkette zuerst in ihre {{Glossary("UTF-8", "UTF-8")}}-Bytes umwandeln und anschließend diese Bytes codieren.

Am einfachsten verwenden Sie `TextEncoder` und `TextDecoder`, um zwischen UTF-8 und Ein-Byte-Darstellungen der Zeichenkette zu konvertieren:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### Beliebige binäre Daten konvertieren

Die Funktionen `bytesToBase64` und `base64ToBytes` aus dem vorherigen Abschnitt können Sie direkt verwenden, um zwischen Base64-Zeichenketten und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)-Objekten zu konvertieren.

Für eine bessere Leistung können Sie Base64-Daten-URLs auf der Webplattform nativ und asynchron über die APIs [`FileReader`](/de/docs/Web/API/FileReader) und [`fetch`](/de/docs/Web/API/Fetch_API) konvertieren:

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Usage
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

> [!NOTE]
> In Umgebungen, die diese Methoden unterstützen, sollten Sie auch die nativen Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `btoa`](https://core-js.io/docs/features/web-standards/atob-btoa) ist in [`core-js`](https://core-js.io/) verfügbar
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa): dieselbe Methode, jedoch in Worker-Geltungsbereichen.
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
