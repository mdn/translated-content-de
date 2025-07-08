---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`encodeURI()`**-Funktion kodiert eine {{Glossary("URI", "URI")}}, indem jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt wird, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens darstellen (vier Escape-Sequenzen nur für Zeichen, die aus zwei Ersatzzeichen bestehen). Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und erhält jene, die Teil der URI-Syntax sind.

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
  - : Ein zu kodierender String als URI.

### Rückgabewert

Ein neuer String, der den bereitgestellten String als URI kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uri` einen [einsamen Ersatz](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die `encodeURI()`-Funktion maskiert Zeichen durch UTF-8-Code-Einheiten, wobei jedes Oktett im Format `%XX` kodiert wird, bei Bedarf mit 0 aufgefüllt. Da einsame Ersatzzeichen in UTF-16 keinen gültigen Unicode-Charakter kodieren, führt ihre Verwendung zu einem {{jsxref("URIError")}} mit `encodeURI()`.

`encodeURI()` maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile sind Zeichen, die Teil der URI-Syntax sein können und werden nur von `encodeURIComponent()` maskiert. Sowohl `encodeURI()` als auch `encodeURIComponent()` kodieren nicht die Zeichen `-.!~*'()`, bekannt als "unreservierte Marken", die keinen reservierten Zweck haben, aber in einer URI "wie sie sind" erlaubt sind. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die `encodeURI()`-Funktion kodiert keine Zeichen, die eine spezielle Bedeutung (reservierte Zeichen) für eine URI haben. Das folgende Beispiel zeigt alle Teile, die eine URI möglicherweise enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um spezielle Bedeutungen anzuzeigen:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI`, wie der Name schon sagt, wird verwendet, um eine URL als Ganzes zu kodieren, vorausgesetzt, sie ist bereits gut geformt. Wenn Sie Zeichenfolgenwerte dynamisch zu einer URL zusammensetzen möchten, sollten Sie wahrscheinlich {{jsxref("encodeURIComponent()")}} für jedes dynamische Segment verwenden, um URL-Syntaxzeichen an unerwünschten Stellen zu vermeiden.

```js
const name = "Ben & Jerry's";

// This is bad:
const link = encodeURI(`https://example.com/?choice=${name}`); // "https://example.com/?choice=Ben%20&%20Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', 'Ben '], [" Jerry's", '']

// Instead:
const link = encodeURI(
  `https://example.com/?choice=${encodeURIComponent(name)}`,
);
// "https://example.com/?choice=Ben%2520%2526%2520Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', "Ben%20%26%20Jerry's"]]
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

### Kodierung eines einsamen Ersatzes führt zu Fehler

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, einen Ersatz zu kodieren, der nicht Teil eines High-Low-Paars ist. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, welches einsame Ersatzzeichen durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einsame Ersatzzeichen enthält, bevor Sie ihn an `encodeURI()` übergeben.

### Kodierung für RFC3986

Der neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) macht eckige Klammern für {{Glossary("IPv6", "IPv6")}} reserviert und lässt sie daher nicht kodieren, wenn etwas gebildet wird, das Teil einer URL sein könnte (wie zum Beispiel ein Host). Er reserviert auch !, ', (, ), und \*, obwohl diese Zeichen keine formalisierten URI-abgrenzenden Verwendungen haben. Die folgende Funktion kodiert einen String für das RFC3986-konforme URL-Format.

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
