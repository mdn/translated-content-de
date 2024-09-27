---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{jsSidebar("Objects")}}

Die Funktion **`encodeURIComponent()`** enkodiert einen [URI](/de/docs/Glossary/URI), indem sie jede Instanz bestimmter Zeichen durch eine, zwei, drei oder vier Escape-Sequenzen ersetzt, die die [UTF-8](/de/docs/Glossary/UTF-8)-Kodierung des Zeichens repräsentieren (es werden nur vier Escape-Sequenzen für Zeichen sein, die aus zwei Surrogat-Zeichen bestehen). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich derjenigen, die Teil der URI-Syntax sind.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html", "shorter")}}

## Syntax

```js-nolint
encodeURIComponent(uriComponent)
```

### Parameter

- `uriComponent`
  - : Ein zu kodierender Zeichenfolgenwert als URI-Komponente (ein Pfad, eine Abfragezeichenfolge, ein Fragment usw.). Andere Werte werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Eine neue Zeichenfolge, die die bereitgestellte `uriComponent` als URI-Komponente kodiert repräsentiert.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` einen [einsamen Surrogat](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktions-Eigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es maskiert alle Zeichen **außer**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} maskiert `encodeURIComponent()` eine größere Menge von Zeichen. Verwenden Sie `encodeURIComponent()` bei benutzerdefinierten Eingabefeldern von Formularen, die {{HTTPMethod("POST")}} zum Server gesendet werden — dies kodiert `&`-Symbole, die möglicherweise während der Dateneingabe versehentlich für [Zeichenreferenzen](/de/docs/Glossary/character_reference) oder andere Zeichen erstellt werden, die eine Kodierung/Decodierung erfordern. Beispielsweise könnte ohne `encodeURIComponent()` das Ampersand in `Jack & Jill` auf dem Server als Beginn eines neuen Feldes interpretiert werden und die Datenintegrität gefährden.

Für [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) sollen Leerzeichen durch `+` ersetzt werden. Daher könnte es sinnvoll sein, nach einer `encodeURIComponent()`-Ersetzung eine zusätzliche Ersetzung von `%20` durch `+` vorzunehmen.

## Beispiele

### Kodierung für Content-Disposition und Link-Header

Das folgende Beispiel bietet die spezielle Kodierung, die innerhalb der UTF-8 {{HTTPHeader("Content-Disposition")}}- und {{HTTPHeader("Link")}}-Serverantwort-Header-Parameter erforderlich ist (z.B. UTF-8-Dateinamen):

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

Das neuere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)`, und `*`, obwohl diese Zeichen keine formalisierte URI-Abgrenzungsverwendung haben. Die folgende Funktion kodiert eine Zeichenfolge für das mit RFC3986 konforme URL-Komponentenformat. Sie kodiert auch `[` und `]`, die Teil der [IPv6](/de/docs/Glossary/IPv6)-URI-Syntax sind. Eine RFC3986-konforme `encodeURI`-Implementierung sollte diese nicht maskieren, was im [`encodeURI()`-Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines einsamen Surrogats wirft einen Fehler

Ein {{jsxref("URIError")}} wird ausgelöst, wenn versucht wird, einen Surrogat zu kodieren, der nicht Teil eines High-Low-Paars ist. Zum Beispiel:

```js
// High-low pair OK
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uD800");

// Lone high-surrogate code unit throws "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, welches einsame Surrogate durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob eine Zeichenfolge einsame Surrogate enthält, bevor sie an `encodeURIComponent()` übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
