---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`encodeURIComponent()`**-Funktion kodiert eine {{Glossary("URI", "URI")}}, indem sie jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens repräsentieren (wird nur vier Escape-Sequenzen für Zeichen setzen, die aus zwei Surrogat-Zeichen bestehen). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich solcher, die Teil der URI-Syntax sind.

{{InteractiveExample("JavaScript Demo: encodeURIComponent()", "shorter")}}

```js interactive-example
// Encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?")}`);
// Expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// Expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## Syntax

```js-nolint
encodeURIComponent(uriComponent)
```

### Parameter

- `uriComponent`
  - : Ein String, der als URI-Komponente (ein Pfad, Abfragezeichenfolge, Fragment usw.) kodiert werden soll. Andere Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Ein neuer String, der die bereitgestellte `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Ausgelöst, wenn `uriComponent` ein [einzelnes Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es entzieht alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}}, entzieht `encodeURIComponent()` eine größere Reihe von Zeichen. Verwenden Sie `encodeURIComponent()` für von Benutzern eingegebene Felder aus Formularen, die an den Server gesendet werden — dies kodiert `&`-Symbole, die möglicherweise versehentlich während der Dateneingabe für {{Glossary("character_reference", "Zeichenreferenzen")}} oder andere Zeichen erzeugt werden, die eine Kodierung/Decodierung erfordern. Beispielsweise könnte ohne `encodeURIComponent()` das `&`-Zeichen als Anfang eines neuen Feldes auf dem Server interpretiert werden und die Datenintegrität gefährden, wenn ein Benutzer `Jack & Jill` schreibt.

Für [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) sollen Leerzeichen durch `+` ersetzt werden, daher möchte man möglicherweise eine `encodeURIComponent()`-Ersetzung mit einer zusätzlichen Ersetzung von `%20` durch `+` ergänzen.

## Beispiele

### Kodierung für Content-Disposition und Link-Header

Das folgende Beispiel bietet die spezielle Kodierung, die innerhalb von UTF-8 {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Link")}} Serverantwort-Header-Parametern erforderlich ist (z.B. UTF-8 Dateinamen):

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

Die neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)` und `*`, obwohl diese Zeichen keine formellen URI-Begrenzungsverwendungen haben. Die folgende Funktion kodiert einen String für das RFC3986-konforme URL-Komponenten-Format. Sie kodiert auch `[` und `]`, die Teil der {{Glossary("IPv6", "IPv6")}} URI-Syntax sind. Eine RFC3986-konforme `encodeURI`-Implementierung sollte diese nicht entziehen, was im [`encodeURI()` Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines einzelnen Surrogats löst eine Ausnahme aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn man versucht, ein Surrogat zu kodieren, das kein Teil eines Hoch-Tief-Paars ist. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einzelne Surrogate mit dem Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einzelne Surrogate enthält, bevor Sie ihn an `encodeURIComponent()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
