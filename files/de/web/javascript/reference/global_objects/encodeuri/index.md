---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die Funktion **`encodeURI()`** kodiert einen {{Glossary("URI", "URI")}}, indem sie bestimmte Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die der {{Glossary("UTF-8", "UTF-8")}}-Kodierung des jeweiligen Zeichens entsprechen. Vier Escape-Sequenzen werden nur für Zeichen verwendet, die aus zwei Surrogatzeichen bestehen. Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und lässt Zeichen unverändert, die Teil der URI-Syntax sind.

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
  - : Eine Zeichenfolge, die als URI kodiert werden soll.

### Rückgabewert

Eine neue Zeichenfolge, die die bereitgestellte Zeichenfolge als URI kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uri` einen [isolierten Surrogatcodepunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `encodeURI()` maskiert Zeichen anhand ihrer UTF-8-Codeeinheiten. Jedes Oktett wird im Format `%XX` kodiert und bei Bedarf links mit einer 0 aufgefüllt. Da isolierte Surrogatcodepunkte in UTF-16 kein gültiges Unicode-Zeichen kodieren, löst `encodeURI()` bei ihnen einen {{jsxref("URIError")}} aus.

`encodeURI()` maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile können Teil der URI-Syntax sein und werden nur von `encodeURIComponent()` maskiert. Weder `encodeURI()` noch `encodeURIComponent()` kodiert die Zeichen `-.!~*'()`. Diese werden als „unreserved marks“ bezeichnet: Sie haben keinen reservierten Zweck, dürfen aber unverändert in einem URI vorkommen. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396).)

Die Funktion `encodeURI()` kodiert keine Zeichen, die für einen URI eine besondere Bedeutung haben (reservierte Zeichen). Das folgende Beispiel zeigt alle möglichen Bestandteile eines URI. Beachten Sie, wie bestimmte Zeichen verwendet werden, um eine besondere Bedeutung auszudrücken:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

Wie der Name nahelegt, wird `encodeURI` verwendet, um eine URL als Ganzes zu kodieren, sofern sie bereits korrekt aufgebaut ist. Wenn Sie Zeichenfolgenwerte dynamisch zu einer URL zusammensetzen möchten, sollten Sie stattdessen wahrscheinlich {{jsxref("encodeURIComponent()")}} auf jedes dynamische Segment anwenden. So vermeiden Sie URL-Syntaxzeichen an unerwünschten Stellen.

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

console.log(encodeURIComponent(set1)); // %3B%2F%3F%3A%40%26%3D%2B%24%2C%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (the space gets encoded as %20)
```

### Kodierung gemäß RFC3986

Der neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert eckige Klammern (für {{Glossary("IPv6", "IPv6")}}). Sie werden daher nicht kodiert, wenn etwas gebildet wird, das Teil einer URL sein könnte, etwa ein Host. Er reserviert außerdem !, ', (, ) und \*, obwohl diese Zeichen keine formal festgelegte Funktion als URI-Trennzeichen haben. Die folgende Funktion kodiert eine Zeichenfolge für ein RFC3986-konformes URL-Format.

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

### Das Kodieren eines isolierten Surrogatcodepunkts löst einen Fehler aus

Beim Versuch, einen Surrogatcodepunkt zu kodieren, der nicht Teil eines High-Low-Paares ist, wird ein {{jsxref("URIError")}} ausgelöst. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, um isolierte Surrogatcodepunkte durch das Unicode-Ersatzzeichen (U+FFFD) zu ersetzen und so diesen Fehler zu vermeiden. Mit {{jsxref("String.prototype.isWellFormed()")}} können Sie außerdem prüfen, ob eine Zeichenfolge isolierte Surrogatcodepunkte enthält, bevor Sie sie an `encodeURI()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("decodeURIComponent()")}}
