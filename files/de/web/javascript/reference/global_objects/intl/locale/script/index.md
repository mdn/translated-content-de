---
title: Intl.Locale.prototype.script
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`script`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das Schriftsystem zurück, das in dieser Locale verwendet wird, um die bestimmte Sprache zu schreiben.

## Beschreibung

Ein Schriftsystem, manchmal auch als Schreibsystem bezeichnet, ist eines der Kerneigenschaften einer Locale. Es gibt die Menge von Symbolen oder Glyphen an, die verwendet werden, um eine bestimmte Sprache zu schreiben. Zum Beispiel ist das mit Englisch assoziierte Schriftsystem Latein, während das typischerweise mit Koreanisch assoziierte Schriftsystem Hangul ist. In vielen Fällen ist es nicht unbedingt notwendig, ein Schriftsystem anzugeben, da die Sprache (welche notwendig ist) nur in einem einzigen Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel und es ist wichtig, das Schriftsystem anzugeben, wenn mehrere Schriftsysteme anwendbar sind. Der Wert der `script` Eigenschaft wird zur Konstruktionszeit festgelegt, entweder durch den `script` Subtag (zweiter Teil, falls vorhanden) des Locale-Identifiers oder durch die `script` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Zugriff von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann das Schriftsystem über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen eines Schriftsystems über den Locale-String

Das Schriftsystem, falls vorhanden, ist der zweite Teil eines gültigen Unicode-Sprachkennzeichner-Strings und kann zu dem anfänglichen Locale-Kennzeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass das Schriftsystem kein erforderlicher Teil eines Locale-Kennzeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Prints "Latn"
```

### Hinzufügen eines Schriftsystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script` Eigenschaft des Konfigurationsobjekts auf Ihr gewünschtes Schriftsystem und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // Prints "Latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode script subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode Locale Data Markup Language Spezifikation
