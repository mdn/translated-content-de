---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die Funktion **`encodeURIComponent()`** kodiert eine {{Glossary("URI", "URI")}}, indem sie bestimmte Zeichen jeweils durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die der {{Glossary("UTF-8", "UTF-8")}}-Kodierung des Zeichens entsprechen. Vier Escape-Sequenzen werden nur für Zeichen verwendet, die aus zwei Surrogatzeichen bestehen. Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, darunter auch solche, die Teil der URI-Syntax sind.

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
  - : Eine Zeichenfolge, die als URI-Komponente (Pfad, Abfragezeichenfolge, Fragment usw.) kodiert werden soll. Andere Werte werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Eine neue Zeichenfolge, die das übergebene `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` ein [isoliertes Surrogatzeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktionseigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Die Funktion maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} maskiert `encodeURIComponent()` eine größere Menge von Zeichen. Verwenden Sie `encodeURIComponent()` für von Benutzern ausgefüllte Formularfelder, die an den Server gesendet werden. Dadurch werden `&`-Zeichen kodiert, die bei der Dateneingabe unbeabsichtigt als Teil von {{Glossary("character_reference", "Zeichenreferenzen")}} oder anderen Zeichen entstehen können, die eine Kodierung oder Dekodierung erfordern. Wenn ein Benutzer beispielsweise `Jack & Jill` eingibt, könnte das kaufmännische Und-Zeichen ohne `encodeURIComponent()` auf dem Server als Beginn eines neuen Feldes interpretiert werden und die Integrität der Daten gefährden.

Bei [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) müssen Leerzeichen durch `+` ersetzt werden. Daher kann es sinnvoll sein, nach der Kodierung mit `encodeURIComponent()` zusätzlich `%20` durch `+` zu ersetzen.

## Beispiele

### Kodierung für Content-Disposition- und Link-Header

Das folgende Beispiel zeigt die spezielle Kodierung, die für Parameter der Serverantwort-Header {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Link")}} mit UTF-8-Inhalten erforderlich ist, beispielsweise für UTF-8-Dateinamen:

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

### Kodierung gemäß RFC3986

Die neuere Spezifikation [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)` und `*`, obwohl diese Zeichen keine formal festgelegte Funktion als URI-Trennzeichen haben. Die folgende Funktion kodiert eine Zeichenfolge im RFC3986-konformen Format für URL-Komponenten. Sie kodiert außerdem `[` und `]`, die Teil der {{Glossary("IPv6", "IPv6")}}-URI-Syntax sind. Eine RFC3986-konforme Implementierung von `encodeURI` sollte diese Zeichen nicht maskieren, wie das [Beispiel zu `encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) zeigt.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Die Kodierung eines isolierten Surrogatzeichens löst einen Fehler aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, ein Surrogatzeichen zu kodieren, das nicht Teil eines High-Low-Paares ist. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone low-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Um diesen Fehler zu vermeiden, können Sie {{jsxref("String.prototype.toWellFormed()")}} verwenden. Diese Methode ersetzt isolierte Surrogatzeichen durch das Unicode-Ersatzzeichen (U+FFFD). Mit {{jsxref("String.prototype.isWellFormed()")}} können Sie außerdem prüfen, ob eine Zeichenfolge isolierte Surrogatzeichen enthält, bevor Sie sie an `encodeURIComponent()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
