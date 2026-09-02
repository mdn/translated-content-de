---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: 7d4628c5144f459ddb081a3e58d0e56f0c2db673
---

Die Funktion **`encodeURI()`** kodiert einen {{Glossary("URI", "URI")}}, indem sie jede Instanz bestimmter Zeichen durch ein, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens darstellen (wobei nur für Zeichen, die aus zwei Surrogat-Zeichen bestehen, vier Escape-Sequenzen verwendet werden). Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen, wobei sie diejenigen beibehält, die Teil der URI-Syntax sind.

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

Ein neuer String, der den bereitgestellten String als URI kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uri` eine [einzelne Surrogatstelle](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `encodeURI()` entgeht Zeichen durch UTF-8-Codeeinheiten, wobei jedes Oktett im Format `%XX` kodiert wird, gegebenenfalls links mit 0 aufgefüllt. Da einzelne Surrogate in UTF-16 kein gültiges Unicode-Zeichen kodieren, führen sie dazu, dass `encodeURI()` einen {{jsxref("URIError")}} auslöst.

`encodeURI()` entgeht allen Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile sind Zeichen, die Teil der URI-Syntax sein können, und werden nur von `encodeURIComponent()` entgangen. Sowohl `encodeURI()` als auch `encodeURIComponent()` kodieren nicht die Zeichen `-.!~*'()`, die als "nicht reservierte Zeichen" bekannt sind, die keinen reservierten Zweck haben, aber in einem URI "as is" erlaubt sind. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die Funktion `encodeURI()` kodiert keine Zeichen, die eine spezielle Bedeutung (reservierte Zeichen) für einen URI haben. Das folgende Beispiel zeigt alle Teile, die ein URI möglicherweise enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um eine spezielle Bedeutung zu signalisieren:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

Wie der Name schon sagt, wird `encodeURI` dazu verwendet, eine URL als Ganzes zu kodieren, vorausgesetzt, sie ist bereits gut geformt. Wenn Sie Zeichenfolgen dynamisch zu einer URL zusammenstellen möchten, sollten Sie wahrscheinlich {{jsxref("encodeURIComponent()")}} auf jedem dynamischen Segment verwenden, um zu vermeiden, dass URL-Syntaxzeichen an unerwünschten Stellen erscheinen.

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

### encodeURI() vs. encodeURIComponent()

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

### Kodierung eines einzelnen Surrogatstellen löst Ausnahme aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Tief-Paares ist. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einzelne Surrogate mit dem Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einzelne Surrogate enthält, bevor Sie ihn an `encodeURI()` übergeben.

### Kodierung für RFC3986

Die neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert eckige Klammern (für {{Glossary("IPv6", "IPv6")}}) und kodiert sie deshalb nicht, wenn etwas gebildet wird, das Teil einer URL sein könnte (wie z.B. ein Host). Es reserviert auch !, ', (, ), und \*, obwohl diese Zeichen keine formalisierte URI-Abgrenzungsverwendung haben. Die folgende Funktion kodiert einen String für das RFC3986-konforme URL-Format.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("decodeURIComponent()")}}
