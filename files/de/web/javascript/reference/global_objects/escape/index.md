---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> `escape()` ist eine nicht standardisierte Funktion, die von Browsern implementiert wurde und nur zum Zwecke der Kompatibilität zwischen verschiedenen Engines standardisiert wurde. Es ist nicht erforderlich, dass alle JavaScript-Engines diese implementieren, und sie funktioniert möglicherweise nicht überall. Verwenden Sie nach Möglichkeit {{jsxref("encodeURIComponent()")}} oder {{jsxref("encodeURI()")}}.

Die **`escape()`**-Funktion erzeugt einen neuen String, in dem bestimmte Zeichen durch hexadezimale Escape-Sequenzen ersetzt wurden.

## Syntax

```js-nolint
escape(str)
```

### Parameter

- `str`
  - : Ein zu kodierender String.

### Rückgabewert

Ein neuer String, in dem bestimmte Zeichen maskiert wurden.

## Beschreibung

`escape()` ist eine Funktionseigenschaft des globalen Objekts.

Die `escape()`-Funktion ersetzt alle Zeichen durch Escape-Sequenzen, mit Ausnahme von {{Glossary("ASCII", "ASCII")}}-Wortzeichen (A–Z, a–z, 0–9, \_) und `@\*_+-./`. Zeichen werden gemäß ihren UTF-16-Codierungseinheiten maskiert. Ist der Wert der Codierungseinheit kleiner als 256, wird er durch eine zweistellige hexadezimale Zahl im Format `%XX` dargestellt, falls nötig, mit 0 aufgefüllt. Andernfalls wird er durch eine vierstellige hexadezimale Zahl im Format `%uXXXX` dargestellt, ebenfalls mit 0 aufgefüllt, falls nötig.

> [!NOTE]
> Diese Funktion wurde hauptsächlich für das {{Glossary("Percent-encoding", "Prozent-Codierung")}} verwendet und basiert teilweise auf dem Escape-Format in {{rfc(1738)}}. Das Escape-Format ist _nicht_ eine [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in Zeichenketten-Literalen. Sie können `%XX` mit `\xXX` und `%uXXXX` mit `\uXXXX` ersetzen, um einen String mit tatsächlichen Zeichenfolgenliteral-Escape-Sequenzen zu erhalten.

## Beispiele

### Verwendung von escape()

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `escape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
