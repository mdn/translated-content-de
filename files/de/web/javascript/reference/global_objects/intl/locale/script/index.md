---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`script`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das Schriftsystem zurück, das für das Schreiben der bestimmten Sprache in dieser Locale verwendet wird.

## Beschreibung

Das Schriftsystem, manchmal auch als Schreibsystem bezeichnet, ist eines der Kernattribute einer Locale. Es gibt das Set von Symbolen oder Glyphen an, die verwendet werden, um eine bestimmte Sprache zu schreiben. Beispielsweise ist das mit Englisch assoziierte Schriftsystem Latein, während das typischerweise mit Koreanisch assoziierte Schriftsystem Hangul ist. In vielen Fällen ist es nicht unbedingt notwendig, ein Schriftsystem anzugeben, da die Sprache (die notwendig ist) nur in einem einzigen Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel, und es ist wichtig, das Schriftsystem anzugeben, wenn mehrere Schriftsysteme anwendbar sind. Der Wert der `script` Eigenschaft wird zur Zeit der Konstruktion festgelegt, entweder durch den `script` Subtag (zweiter Teil, falls vorhanden) des Locale-Bezeichners oder durch die `script` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann das Schriftsystem dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Schriftsystems über den Locale-String

Das Schriftsystem ist, falls vorhanden, der zweite Teil eines gültigen Unicode-Sprachbezeichner-Strings und kann dem initialen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass das Schriftsystem kein erforderlicher Bestandteil eines Locale-Bezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Gibt "Latn" aus
```

### Hinzufügen eines Schriftsystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script` Eigenschaft des Konfigurationsobjekts auf Ihr gewünschtes Schriftsystem und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // Gibt "Latn" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode script subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode Locale Data Markup Language Spezifikation
