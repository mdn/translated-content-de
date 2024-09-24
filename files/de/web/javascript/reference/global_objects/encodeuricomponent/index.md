---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{jsSidebar("Objects")}}

Die **`encodeURIComponent()`** Funktion kodiert ein {{Glossary("URI")}}, indem sie jedes Vorkommen bestimmter Zeichen durch eine oder mehrere Escape-Sequenzen ersetzt, die die {{Glossary("UTF-8")}}-Kodierung des Zeichens darstellen (es werden nur bei Zeichen, die aus zwei Ersatzzeichen bestehen, vier Escape-Sequenzen sein). Im Vergleich zu {{jsxref("encodeURI()")}} kodiert diese Funktion mehr Zeichen, einschließlich solcher, die Teil der URI-Syntax sind.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html", "shorter")}}

## Syntax

```js-nolint
encodeURIComponent(uriComponent)
```

### Parameter

- `uriComponent`
  - : Ein String, der als ein URI-Komponente kodiert werden soll (ein Pfad, eine Abfragezeichenkette, ein Fragment, etc.). Andere Werte werden [in Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Rückgabewert

Ein neuer String, der die bereitgestellte `uriComponent` als URI-Komponente kodiert darstellt.

### Ausnahmen

- {{jsxref("URIError")}}
  - : Wird ausgelöst, wenn `uriComponent` ein [einsames Ersatzzeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Beschreibung

`encodeURIComponent()` ist eine Funktionseigenschaft des globalen Objekts.

`encodeURIComponent()` verwendet denselben Kodierungsalgorithmus wie in {{jsxref("encodeURI()")}} beschrieben. Es werden alle Zeichen außer folgenden maskiert:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Im Vergleich zu {{jsxref("encodeURI()")}} maskiert `encodeURIComponent()` einen größeren Satz von Zeichen. Verwenden Sie `encodeURIComponent()` bei Benutzerfeldern aus Formularen, die mit {{HTTPMethod("POST")}} an den Server gesendet werden — dies wird `&`-Symbole kodieren, die möglicherweise während der Dateneingabe für {{glossary("character reference", "Zeichenreferenzen")}} oder andere Zeichen, die eine Kodierung/Decodierung erfordern, generiert werden. Zum Beispiel, wenn ein Benutzer `Jack & Jill` schreibt, könnte das kaufmännische Und-Zeichen ohne `encodeURIComponent()` auf dem Server als Beginn eines neuen Feldes interpretiert werden und die Integrität der Daten gefährden.

Für [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) sollen Leerzeichen durch `+` ersetzt werden, daher möchte man vielleicht die `encodeURIComponent()`-Ersetzung mit einer zusätzlichen Ersetzung von `%20` zu `+` ergänzen.

## Beispiele

### Kodierung für Content-Disposition und Link-Header

Das folgende Beispiel zeigt die spezielle Kodierung, die innerhalb der UTF-8 {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Link")}} Server-Antwortheader-Parameter erforderlich ist (z.B. UTF-8 Dateinamen):

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
      // Die folgenden erstellen die Sequenzen %27 %28 %29 %2A (Beachten Sie,
      // dass die gültige Kodierung von "*" %2A ist, was das Aufrufen von
      // toUpperCase() zur korrekten Kodierung erfordert). Obwohl RFC3986 "!"
      // reserviert, tut dies RFC5987 nicht, daher müssen wir es nicht maskieren.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // Die folgenden sind gemäß RFC5987 nicht erforderlich für percent-encoding,
      // daher können wir eine etwas bessere Lesbarkeit über die Leitung erlauben: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Kodierung für RFC3986

Der jüngere [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) reserviert `!`, `'`, `(`, `)` und `*`, obwohl diese Zeichen keine formalisierte URI-Abgrenzungsnutzung haben. Die folgende Funktion kodiert einen String für RFC3986-konforme URL-Komponenten-Formate. Sie kodiert auch `[` und `]`, die Teil der {{Glossary("IPv6")}} URI-Syntax sind. Eine RFC3986-konforme `encodeURI`-Implementierung sollte sie nicht maskieren, was im [`encodeURI()` Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986) demonstriert wird.

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Kodierung eines einzelnen Ersatzzeichens löst einen Fehler aus

Ein {{jsxref("URIError")}} wird ausgelöst, wenn man versucht, ein Ersatzzeichen zu kodieren, das nicht Teil eines Hoch-Tief-Paares ist. Zum Beispiel:

```js
// Hoch-Tief-Paar ist in Ordnung
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Einzelnes Hoch-Ersatzzeichen löst "URIError: malformed URI sequence" aus
encodeURIComponent("\uD800");

// Einzelnes Hoch-Ersatzzeichen löst "URIError: malformed URI sequence" aus
encodeURIComponent("\uDFFF");
```

Sie können {{jsxref("String.prototype.toWellFormed()")}} verwenden, das einzelne Ersatzzeichen durch das Unicode-Ersatzzeichen (U+FFFD) ersetzt, um diesen Fehler zu vermeiden. Sie können auch {{jsxref("String.prototype.isWellFormed()")}} verwenden, um zu überprüfen, ob ein String einzelne Ersatzzeichen enthält, bevor Sie ihn an `encodeURIComponent()` übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
