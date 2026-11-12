---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die Funktion **`encodeURI()`** kodiert einen {{Glossary("URI", "URI")}}, indem sie bestimmte Zeichen jeweils durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die der {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens entsprechen. Vier Escape-Sequenzen werden nur für Zeichen verwendet, die aus zwei Surrogatzeichen bestehen. Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und lässt Zeichen unverändert, die Teil der URI-Syntax sind.

{{InteractiveExample("JavaScript Demo: encodeURI()")}}

```js interactive-example
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}
```

## Syntax

```js-nolint
encodeURI(uri)
```

### Parameter

- `uri`
  - : Ein String, der als URI kodiert werden soll.

### Rückgabewert

Ein neuer String, der den übergebenen String in URI-kodierter Form darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uri` einen [einzelstehenden Surrogatcodepunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `encodeURI()` kodiert Zeichen anhand ihrer UTF-8-Codeeinheiten. Jedes Oktett wird im Format `%XX` dargestellt und bei Bedarf links mit einer 0 aufgefüllt. Da einzelstehende Surrogatcodepunkte in UTF-16 keinem gültigen Unicode-Zeichen entsprechen, lösen sie bei `encodeURI()` einen {{jsxref("URIError")}} aus.

`encodeURI()` kodiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile können Teil der URI-Syntax sein und werden nur von `encodeURIComponent()` kodiert. Weder `encodeURI()` noch `encodeURIComponent()` kodieren die Zeichen `-.!~*'()`. Diese werden als „unreserved marks“ bezeichnet: Sie haben keine reservierte Bedeutung, dürfen aber in einem URI unverändert vorkommen. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die Funktion `encodeURI()` kodiert keine Zeichen, die für einen URI eine besondere Bedeutung haben (reservierte Zeichen). Das folgende Beispiel zeigt alle Bestandteile, die ein URI enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um eine besondere Bedeutung zu kennzeichnen:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

Wie der Name schon sagt, wird `encodeURI` verwendet, um eine URL als Ganzes zu kodieren, sofern sie bereits wohlgeformt ist. Wenn Sie Stringwerte dynamisch zu einer URL zusammensetzen möchten, sollten Sie stattdessen wahrscheinlich {{jsxref("encodeURIComponent()")}} auf jedes dynamische Segment anwenden. So vermeiden Sie Zeichen der URL-Syntax an unerwünschten Stellen.

```js
const name = "Ben & Jerry's";

// This is bad:
const badLink = encodeURI(`https://example.com/?choice=${name}`); // "https://example.com/?choice=Ben%20&%20Jerry's"
console.log([...new URL(badLink).searchParams]); // [['choice', 'Ben '], [" Jerry's", '']]

// Instead:
const goodLink = `https://example.com/?choice=${encodeURIComponent(name)}`;
// "https://example.com/?choice=Ben%20%26%20Jerry's"
console.log([...new URL(goodLink).searchParams]); // [['choice', "Ben & Jerry's"]]
```

## Beispiele

### encodeURI() im Vergleich zu encodeURIComponent()

`encodeURI()` unterscheidet sich von {{jsxref("encodeURIComponent()")}} wie folgt:

```js
const set1 = ";/?:@&=+$,#"; // Reserved Characters
const set2 = "-.!~*'()"; // Unreserved Marks
const set3 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;/?:@&=+$,#
console.log(encodeURI(set2)); // -.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (the space gets encoded as %20)
```

### Kodierung gemäß RFC3986

Der neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert eckige Klammern (für {{Glossary("IPv6", "IPv6")}}). Sie werden daher nicht kodiert, wenn etwas gebildet wird, das Teil einer URL sein könnte, beispielsweise ein Host. Außerdem reserviert er !, ', (, ) und \*, obwohl diese Zeichen keine formal festgelegte Funktion als URI-Trennzeichen haben. Die folgende Funktion kodiert einen String für ein RFC3986-konformes URL-Format.

```js
function encodeRFC3986URI(str) {
  return encodeURI(str)
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
}
```

### Das Kodieren eines einzelstehenden Surrogatcodepunkts löst einen Fehler aus

Wenn Sie versuchen, einen Surrogatcodepunkt zu kodieren, der nicht Teil eines Paars aus einem High- und einem Low-Surrogat ist, wird ein {{jsxref("URIError")}} ausgelöst. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Um diesen Fehler zu vermeiden, können Sie {{jsxref("String.prototype.toWellFormed()")}} verwenden. Diese Methode ersetzt einzelstehende Surrogatcodepunkte durch das Unicode-Ersatzzeichen (U+FFFD). Mit {{jsxref("String.prototype.isWellFormed()")}} können Sie außerdem prüfen, ob ein String einzelstehende Surrogatcodepunkte enthält, bevor Sie ihn an `encodeURI()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("decodeURIComponent()")}}
