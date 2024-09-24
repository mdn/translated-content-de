---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
l10n:
  sourceCommit: fbc9980c0718c3ead40863b20a74fc8535ebcc85
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURI()`** kodiert ein {{Glossary("URI")}}, indem sie jedes Vorkommen bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8")}}-Kodierung des Zeichens repräsentieren (es werden nur dann vier Escape-Sequenzen sein, wenn Zeichen aus zwei Surrogat-Zeichen bestehen). Im Vergleich zu {{jsxref("encodeURIComponent()")}} kodiert diese Funktion weniger Zeichen und erhält diejenigen, die Teil der URI-Syntax sind.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

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
  - : Wird ausgelöst, wenn `uri` ein [einsames Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURI()` ist eine Funktionseigenschaft des globalen Objekts.

Die Funktion `encodeURI()` ersetzt Zeichen durch UTF-8-Codeeinheiten, wobei jedes Oktett im Format `%XX` kodiert wird, falls erforderlich mit 0 aufgefüllt. Da einzelne Surrogate in UTF-16 kein gültiges Unicode-Zeichen kodieren, führen sie dazu, dass `encodeURI()` einen {{jsxref("URIError")}} auslöst.

`encodeURI()` kodiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )

; / ? : @ & = + $ , #
```

Die Zeichen in der zweiten Zeile sind Zeichen, die Teil der URI-Syntax sein können, und werden nur von `encodeURIComponent()` kodiert. Sowohl `encodeURI()` als auch `encodeURIComponent()` kodieren nicht die Zeichen `-.!~*'()`, bekannt als "unreserved marks", die keinen reservierten Zweck haben, aber in einer URI "wie sie sind" erlaubt sind. (Siehe [RFC2396](https://datatracker.ietf.org/doc/html/rfc2396))

Die Funktion `encodeURI()` kodiert keine Zeichen, die eine spezielle Bedeutung (reservierte Zeichen) für eine URI haben. Das folgende Beispiel zeigt alle Teile, die eine URI möglicherweise enthalten kann. Beachten Sie, wie bestimmte Zeichen verwendet werden, um spezielle Bedeutungen anzuzeigen:

```url
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI`, wie der Name schon sagt, wird verwendet, um eine URL als Ganzes zu kodieren, unter der Annahme, dass sie bereits gut geformt ist. Wenn Sie Zeichenfolgenwerte dynamisch zu einer URL zusammenstellen möchten, sollten Sie stattdessen {{jsxref("encodeURIComponent()")}} für jedes dynamische Segment verwenden, um zu vermeiden, dass URL-Syntaxzeichen an unerwünschten Stellen vorkommen.

```js
const name = "Ben & Jerry's";

// Dies ist schlecht:
const link = encodeURI(`https://example.com/?choice=${name}`); // "https://example.com/?choice=Ben%20&%20Jerry's"
console.log([...new URL(link).searchParams]); // [['choice', 'Ben '], [" Jerry's", '']

// Stattdessen:
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
const set1 = ";/?:@&=+$,#"; // Reservierte Zeichen
const set2 = "-.!~*'()"; // Nicht reservierte Zeichen
const set3 = "ABC abc 123"; // Alphanumerische Zeichen + Leerzeichen

console.log(encodeURI(set1)); // ;/?:@&=+$,#
console.log(encodeURI(set2)); // -.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (das Leerzeichen wird als %20 kodiert)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (das Leerzeichen wird als %20 kodiert)
```

### Kodierung eines einsamen Surrogats wirft eine Ausnahme

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Niedrig-Paares ist. Zum Beispiel:

```js
// Hoch-Niedrig-Paar OK
encodeURI("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Einzelne Hoch-Surrogat-Codeeinheit wirft "URIError: malformed URI sequence"
encodeURI("\uD800");

// Einzelne Niedrig-Surrogat-Codeeinheit wirft "URIError: malformed URI sequence"
encodeURI("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einzelne Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einzelne Surrogate enthält, bevor er an `encodeURI()` übergeben wird.

### Kodierung für RFC3986

Der neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) macht eckige Klammern reserviert (für {{Glossary("IPv6")}}) und werden daher beim Erstellen von etwas, das Teil einer URL sein könnte (wie ein Host), nicht kodiert. Es reserviert auch !, ', (, ) und \*, obwohl diese Zeichen keine formalisierte Verwendung als URI-Trennzeichen haben. Die folgende Funktion kodiert einen String für ein RFC3986-konformes URL-Format.

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
