---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 041cf35a6932dfc59c00df24eebe381ea252cd29
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURIComponent()`** kodiert eine {{Glossary("URI", "URI")}}, indem sie jede Instanz bestimmter Zeichen durch ein, zwei, drei oder vier Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens darstellen (es wird nur vier Escape-Sequenzen für Zeichen geben, die aus zwei Surrogat-Zeichen bestehen). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich solcher, die Teil der URI-Syntax sind.

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
  - : Ein String, der als URI-Komponente (ein Pfad, Abfragezeichenfolge, Fragment usw.) kodiert werden soll. Andere Werte werden in [Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Ein neuer String, der die bereitgestellte `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` ein [alleinstehendes Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es ersetzt alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} ersetzt `encodeURIComponent()` eine größere Menge von Zeichen. Verwenden Sie `encodeURIComponent()` für benutzereingetragene Felder in Formularen, die an den Server gesendet werden — dies kodiert `&`-Symbole, die während der Dateneingabe versehentlich für {{Glossary("character_reference", "Zeichenreferenzen")}} oder andere Zeichen generiert werden können, die eine Kodierung/Dekodierung erfordern. Zum Beispiel könnte, wenn ein Benutzer `Jack & Jill` eingibt, ohne `encodeURIComponent()` das Ampersand auf dem Server als Beginn eines neuen Feldes interpretiert werden und die Integrität der Daten gefährden.

Für [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) sollen Leerzeichen durch `+` ersetzt werden, daher könnte es sinnvoll sein, nach einem `encodeURIComponent()` ein zusätzliches Ersetzen von `%20` durch `+` durchzuführen.

## Beispiele

### Kodierung für Content-Disposition- und Link-Header

Das folgende Beispiel bietet die spezielle Kodierung, die in den UTF-8-{{HTTPHeader("Content-Disposition")}}- und {{HTTPHeader("Link")}}-Server-Antwort-Header-Parametern erforderlich ist (z. B. UTF-8-Dateinamen):

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

Das neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)`, und `*`, obwohl diese Zeichen keine formalisierten URI-Abgrenzungszwecke haben. Die folgende Funktion kodiert einen String für das RFC3986-konforme URL-Komponentenformat. Sie kodiert auch `[` und `]`, die Teil der {{Glossary("IPv6", "IPv6")}}-URI-Syntax sind. Eine RFC3986-konforme `encodeURI`-Implementierung sollte sie nicht kodieren, was im [`encodeURI()` Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines alleinstehenden Surrogats wirft einen Fehler

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogat zu kodieren, das nicht Teil eines Hoch-Tief-Paares ist. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das alleinstehende Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String alleinstehende Surrogate enthält, bevor Sie ihn an `encodeURIComponent()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
