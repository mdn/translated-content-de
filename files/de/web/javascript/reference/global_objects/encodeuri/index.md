---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fbc9980c0718c3ead40863b20a74fc8535ebcc85
---

{{jsSidebar("Objects")}}

Die **`encodeURI()`** Funktion kodiert eine [URI](/de/docs/Glossary/URI), indem sie jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die [UTF-8](/de/docs/Glossary/UTF-8) Kodierung des Zeichens repräsentieren (vier Escape-Sequenzen nur für Zeichen, die aus zwei Ersatzzeichen bestehen). Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und bewahrt diejenigen, die Teil der URI-Syntax sind.

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
  - : Wird ausgelöst, wenn `uri` ein [einsames Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktions-Eigenschaft des globalen Objekts.

Die Funktion `encodeURI()` ersetzt Zeichen durch UTF-8 Code-Einheiten, wobei jedes Oktett im Format `%XX` kodiert wird, falls erforderlich mit führendem Null versehen. Da einzelne Surrogate in UTF-16 keinen gültigen Unicode-Charakter kodieren, verursachen sie, dass `encodeURI()` einen {{jsxref("URIError")}} auslöst.

`encodeURI()` kodiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile sind Zeichen, die Teil der URI-Syntax sein können und nur von `encodeURIComponent()` kodiert werden. Sowohl `encodeURI()` als auch `encodeURIComponent()` kodieren nicht die Zeichen `-.!~*'()`, bekannt als "unreservierte Markierungen", die keinen reservierten Zweck haben, aber in einer URI "wie sie sind" erlaubt sind. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die `encodeURI()` Funktion kodiert keine Zeichen, die eine spezielle Bedeutung (reservierte Zeichen) für eine URI haben. Das folgende Beispiel zeigt alle Teile, die eine URI möglicherweise enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um eine besondere Bedeutung zu signalisieren:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI`, wie der Name schon sagt, wird verwendet, um eine URL als Ganzes zu kodieren, vorausgesetzt, sie ist bereits gut geformt. Wenn Sie Zeichenfolgenwerte dynamisch zu einer URL zusammenfügen möchten, sollten Sie wahrscheinlich {{jsxref("encodeURIComponent()")}} für jedes dynamische Segment verwenden, um zu vermeiden, dass URL-Syntaxzeichen an unerwünschten Stellen auftauchen.

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

### Kodierung eines einsamen Surrogats löst Fehler aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Niedrig-Paars ist. Zum Beispiel:

```js
// High-low pair OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, welches einzelne Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu prüfen, ob eine Zeichenkette einzelne Surrogate enthält, bevor sie an `encodeURI()` übergeben wird.

### Kodierung für RFC3986

Die neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) macht eckige Klammern reserviert (für [IPv6](/de/docs/Glossary/IPv6)) und daher werden sie nicht kodiert, wenn sie Teil einer URL sein könnten (wie ein Host). Außerdem reserviert sie !, ', (, ), und \*, auch wenn diese Zeichen keine formalisierten URI-Abgrenzungsverwendungen haben. Die folgende Funktion kodiert eine Zeichenkette im RFC3986-konformen URL-Format.

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
