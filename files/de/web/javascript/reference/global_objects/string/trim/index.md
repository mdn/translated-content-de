---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`trim()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen von beiden Enden dieser Zeichenkette und gibt eine neue Zeichenkette zurück, ohne die ursprüngliche Zeichenkette zu ändern.

Um eine neue Zeichenkette mit Leerzeichen entfernt von nur einem Ende zurückzugeben, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Syntax

```js-nolint
trim()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenkette, die `str` darstellt, bei der die Leerzeichen von beiden Enden entfernt wurden. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Selbst wenn weder der Anfang noch das Ende von `str` Leerzeichen aufweist, wird eine neue Zeichenkette zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beispiele

### Verwendung von trim()

Das folgende Beispiel entfernt Leerzeichen von beiden Enden von `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
