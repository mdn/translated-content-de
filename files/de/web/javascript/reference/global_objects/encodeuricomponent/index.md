---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURIComponent()`** kodiert eine {{Glossary("URI", "URI")}}, indem sie jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens darstellen (es werden nur vier Escape-Sequenzen für Zeichen verwendet, die aus zwei Surrogat-Zeichen bestehen). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich solcher, die Teil der URI-Syntax sind.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - encodeURIComponent()", "shorter")}}

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
  - : Eine Zeichenkette, die als URI-Komponente (ein Pfad, Abfragezeichenfolge, Fragment usw.) kodiert werden soll. Andere Werte werden in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Eine neue Zeichenkette, die den bereitgestellten `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` ein [einsames Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} maskiert `encodeURIComponent()` eine größere Anzahl Zeichen. Verwenden Sie `encodeURIComponent()` für von Benutzern ausgefüllte Formularfelder, die mit {{HTTPMethod("POST")}} an den Server gesendet werden. Dies kodiert beispielsweise `&`-Symbole, die während der Dateneingabe unbeabsichtigt generiert werden könnten, z. B. bei der Eingabe von {{Glossary("character_reference", "Zeichenreferenzen")}} oder anderen Zeichen, die eine Kodierung/Decodierung erfordern. Zum Beispiel, wenn ein Benutzer `Jack & Jill` eingibt, könnte das kaufmännische Und-Zeichen ohne `encodeURIComponent()` vom Server als Beginn eines neuen Feldes interpretiert werden und die Datenintegrität gefährden.

Für die Kodierung von [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) sollten Leerzeichen durch `+` ersetzt werden. Daher könnte es sinnvoll sein, nach einem `encodeURIComponent()`-Aufruf ` ` durch `+` zu ersetzen.

## Beispiele

### Kodierung für Content-Disposition- und Link-Header

Das folgende Beispiel zeigt die spezielle Kodierung, die innerhalb der UTF-8-Parameter von {{HTTPHeader("Content-Disposition")}}- und {{HTTPHeader("Link")}}-Serverantwort-Headern erforderlich ist (z. B. UTF-8-Dateinamen):

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

Die neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)`, und `*`, obwohl diese Zeichen keine formalisierte Verwendung als URI-Delimitierungszeichen haben. Die folgende Funktion kodiert eine Zeichenkette in ein URI-kompatibles Format gemäß RFC3986. Sie kodiert auch `[` und `]`, die Teil der {{Glossary("IPv6", "IPv6")}}-URI-Syntax sind. Eine RFC3986-konforme Implementierung von `encodeURI` sollte diese Zeichen nicht maskieren, was im Beispiel von [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines einsamen Surrogats löst Fehler aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn Sie versuchen, ein Surrogat, das kein Teil eines High-Low-Paares ist, zu kodieren. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einsame Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob eine Zeichenkette einsame Surrogate enthält, bevor sie an `encodeURIComponent()` übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
