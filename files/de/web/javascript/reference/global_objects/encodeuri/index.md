---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fbc9980c0718c3ead40863b20a74fc8535ebcc85
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURI()`** kodiert ein {{Glossary("URI", "URI")}}, indem sie jedes Vorkommen bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens darstellen (es sind nur vier Escape-Sequenzen für Zeichen, die aus zwei Surrogatzeichen bestehen). Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und bewahrt diejenigen, die Teil der URI-Syntax sind.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## Syntax

```js-nolint
encodeURI(uri)
```

### Parameter

- `uri`
  - : Eine Zeichenkette, die als URI kodiert werden soll.

### Rückgabewert

Eine neue Zeichenkette, die die bereitgestellte Zeichenkette als URI kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Ausgelöst, wenn `uri` ein [einsames Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die Funktion `encodeURI()` maskiert Zeichen nach UTF-8-Codeeinheiten, wobei jedes Oktett im Format `%XX` kodiert wird, bei Bedarf links mit 0 aufgefüllt. Da einsame Surrogate in UTF-16 kein gültiges Unicode-Zeichen kodieren, führen sie dazu, dass `encodeURI()` einen {{jsxref("URIError")}} auslöst.

`encodeURI()` maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile sind Zeichen, die Teil der URI-Syntax sein können und nur von `encodeURIComponent()` maskiert werden. Sowohl `encodeURI()` als auch `encodeURIComponent()` kodieren die Zeichen `-.!~*'()`, bekannt als "unreserved marks", nicht, die keinen reservierten Zweck haben, aber in einem URI "as is" erlaubt sind. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die Funktion `encodeURI()` kodiert keine Zeichen, die für ein URI eine besondere Bedeutung haben (reservierte Zeichen). Das folgende Beispiel zeigt alle Teile, die ein URI möglicherweise enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um eine besondere Bedeutung zu signalisieren:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI`, wie der Name schon sagt, wird verwendet, um eine URL als Ganzes zu kodieren, vorausgesetzt, sie ist bereits korrekt gestaltet. Wenn Sie Zeichenkettenwerte dynamisch zu einer URL zusammenstellen möchten, sollten Sie möglicherweise {{jsxref("encodeURIComponent()")}} für jedes dynamische Segment verwenden, um URL-Syntaxzeichen an ungewollten Stellen zu vermeiden.

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

### Kodierung eines einsamen Surrogats löst einen Fehler aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Tief-Paares ist. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einsame Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob eine Zeichenkette einsame Surrogate enthält, bevor Sie sie an `encodeURI()` übergeben.

### Kodierung für RFC3986

Das neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) macht eckige Klammern für {{Glossary("IPv6", "IPv6")}} reserviert und werden daher nicht kodiert, wenn etwas gebildet wird, das Teil einer URL sein könnte (wie ein Host). Es reserviert auch !, ', (, ), und \*, obwohl diese Zeichen keine formalisierte URI-Trennzeichen-Funktion haben. Die folgende Funktion kodiert eine Zeichenkette für das RFC3986-konforme URL-Format.

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
