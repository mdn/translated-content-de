---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURIComponent()`** kodiert eine [URI](/de/docs/Glossary/URI), indem jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt wird, die die [UTF-8](/de/docs/Glossary/UTF-8)-Kodierung des Zeichens darstellen (es gibt nur vier Escape-Sequenzen für Zeichen, die aus zwei Ersatzzeichen bestehen). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich derjenigen, die Teil der URI-Syntax sind.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html", "shorter")}}

## Syntax

```js-nolint
encodeURIComponent(uriComponent)
```

### Parameter

- `uriComponent`
  - : Ein String, der als URI-Komponente kodiert werden soll (ein Pfad, eine Abfragezeichenkette, ein Fragment usw.). Andere Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Ein neuer String, der die bereitgestellte `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` einen [einzelnen Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktionseigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es entzieht sich allen Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} entzieht sich `encodeURIComponent()` einer größeren Anzahl von Zeichen. Verwenden Sie `encodeURIComponent()` bei von Benutzern eingegebenen Feldern aus Formularen, die {{HTTPMethod("POST")}} an den Server gesendet werden — dies wird `&`-Symbole kodieren, die unbeabsichtigt während der Dateneingabe für [Zeichencodes](/de/docs/Glossary/character_reference) oder andere Zeichen generiert werden können, die eine Kodierung/Dekodierung erfordern. Beispielsweise, wenn ein Benutzer `Jack & Jill` schreibt, könnte das kaufmännische Und ohne `encodeURIComponent()` auf dem Server als Beginn eines neuen Feldes interpretiert und die Integrität der Daten gefährdet werden.

Für [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) müssen Leerzeichen durch `+` ersetzt werden, daher könnte man nach einer `encodeURIComponent()`-Ersetzung zusätzlich `%20` durch `+` ersetzen wollen.

## Beispiele

### Kodierung für Content-Disposition- und Link-Header

Das folgende Beispiel bietet die spezielle Kodierung, die innerhalb der UTF-8 {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Link")}} Server-Antwort-Header-Parameter benötigt wird (z. B. UTF-8-Dateinamen):

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName,
)}`;

console.log(header);
// "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // The following creates the sequences %27 %28 %29 %2A (Note that
      // the valid encoding of "*" is %2A, which necessitates calling
      // toUpperCase() to properly encode). Although RFC3986 reserves "!",
      // RFC5987 does not, so we do not need to escape it.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Kodierung für RFC3986

Das neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)`, und `*`, obwohl diese Zeichen keine formalisierten URI-Gliederungsverwendungen haben. Die folgende Funktion kodiert einen String für das RFC3986-kompatible URL-Komponentenformat. Es kodiert auch `[` und `]`, die Teil der [IPv6](/de/docs/Glossary/IPv6) URI-Syntax sind. Eine RFC3986-kompatible `encodeURI`-Implementierung sollte sie nicht entziehen, was im [`encodeURI()`-Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines einzelnen Surrogats wirft einen Fehler

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, einen Surrogat zu kodieren, der nicht Teil eines High-Low-Paares ist. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einzelne Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einzelne Surrogate enthält, bevor er an `encodeURIComponent()` übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
