---
title: "Window: btoa()-Methode"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("HTML DOM")}}

Die **`btoa()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt einen {{Glossary("Base64", "Base64")}}-codierten {{Glossary("ASCII", "ASCII")}}-String aus einem _binären String_ (d.h. einem String, in dem jedes Zeichen als Byte binärer Daten behandelt wird).

Sie können diese Methode verwenden, um Daten zu codieren, die ansonsten Kommunikationsprobleme verursachen könnten, diese zu übertragen und anschließend mit der [`Window.atob()`](/de/docs/Web/API/Window/atob)-Methode wieder zu decodieren. Beispielsweise können Sie Steuerzeichen wie ASCII-Werte von 0 bis 31 codieren.

Erwägen Sie auch die Nutzung der {{jsxref("Uint8Array.prototype.toBase64()")}}-Methode, wenn Ihre Daten in einem `Uint8Array`-Objekt vorliegen, um zu vermeiden, dass ein String mit Rohdatenbytes erstellt wird.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der _binäre String_, der codiert werden soll.

### Rückgabewert

Ein ASCII-String, der die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Siehe "Unicode-Strings" unten für weitere Details.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

### Unicode-Strings

Base64 erwartet von Haus aus Binärdaten als Eingabe. Im Kontext von JavaScript-Strings bedeutet dies Strings, bei denen jeder Codepunkt eines Zeichens nur ein Byte belegt. Wenn Sie jedoch einen String an `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Da `btoa` die Codepunkte seines Eingabestrings als Byte-Werte interpretiert, führt ein Aufruf von `btoa` auf einem String zu einer "Character Out Of Range"-Ausnahme, wenn der Codepunkt eines Zeichens `0xff` übersteigt. Für Anwendungsfälle, in denen beliebiger Unicode-Text codiert werden muss, ist es notwendig, den String zuerst in seine Bestandteile in {{Glossary("UTF-8", "UTF-8")}} zu konvertieren und dann die Bytes zu codieren.

Die einfachste Lösung ist die Verwendung von `TextEncoder` und `TextDecoder`, um zwischen den UTF-8- und einbyteigen Darstellungen des Strings zu konvertieren:

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

Die `bytesToBase64`- und `base64ToBytes`-Funktionen aus dem vorherigen Abschnitt können direkt verwendet werden, um zwischen Base64-Strings und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s zu konvertieren.

Für bessere Leistung ist die asynchrone Konvertierung zwischen Base64-Daten-URLs nativ innerhalb der Webplattform über die [`FileReader`](/de/docs/Web/API/FileReader)- und [`fetch`](/de/docs/Web/API/Fetch_API)-APIs möglich:

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
> Für unterstützende Umgebungen sollten Sie auch die nativen Methoden {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
- [`data` URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa): dieselbe Methode, jedoch in Worker-Scopes.
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
