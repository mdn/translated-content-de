---
title: "Window: btoa() Methode"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

Die **`btoa()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle erstellt einen {{Glossary("Base64", "Base64")}}-codierten {{Glossary("ASCII", "ASCII")}} Zeichenfolge aus einem _Binärstring_ (d.h. ein String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die ansonsten Kommunikationsprobleme verursachen könnten, sie zu übertragen und dann die [`Window.atob()`](/de/docs/Web/API/Window/atob) Methode nutzen, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte von 0 bis 31 kodieren.

Sie sollten auch die {{jsxref("Uint8Array.prototype.toBase64()")}} Methode in Betracht ziehen, wenn Ihre Daten in einem `Uint8Array` Objekt vorliegen, um zu vermeiden, dass ein String erstellt wird, der rohe Bytes enthält.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der zu kodierende _Binärstring_. Strings in JavaScript sind als {{Glossary("UTF-16", "UTF-16")}} kodiert, was bedeutet, dass jeder Charakter einen Codepunkt unter 256 haben muss, der ein Byte Daten repräsentiert.

### Rückgabewert

Eine ASCII-Zeichenfolge, die die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Siehe "Unicode-Zeichenfolgen" unten für mehr Details.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

### Unicode-Zeichenfolgen

Base64 erwartet von Haus aus Binärdaten als Eingabe. In Bezug auf JavaScript-Strings bedeutet dies, dass Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie also einen String in `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als Binärdaten angesehen wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Da `btoa` die Codepunkte seines Eingabestrings als Bytewerte interpretiert, wird ein "Character Out Of Range"-Ausnahme ausgelöst, wenn der Codepunkt eines Zeichens `0xff` überschreitet. Für Anwendungsfälle, bei denen Sie beliebigen Unicode-Text kodieren müssen, ist es notwendig, den String zuerst in seine Bestandteile in {{Glossary("UTF-8", "UTF-8")}} zu konvertieren und dann die Bytes zu kodieren.

Die einfachste Lösung besteht darin, `TextEncoder` und `TextDecoder` zu verwenden, um zwischen UTF-8 und einbyteigen Darstellungen des Strings zu konvertieren:

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

### Konvertierung beliebiger Binärdaten

Die Funktionen `bytesToBase64` und `base64ToBytes` aus dem vorherigen Abschnitt können direkt genutzt werden, um zwischen Base64-Strings und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s zu konvertieren.

Für eine bessere Leistung ist eine asynchrone Konvertierung zwischen base64-Daten-URLs nativ innerhalb der Webplattform über die [`FileReader`](/de/docs/Web/API/FileReader) und [`fetch`](/de/docs/Web/API/Fetch_API) APIs möglich:

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
> Für unterstützte Umgebungen ziehen Sie auch die nativen Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} in Betracht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa): dieselbe Methode, jedoch in Worker-Kontexten.
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
