---
title: Intl.Locale.prototype.script
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`script`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das Schriftsystem zurück, das für das Schreiben der jeweiligen Sprache in diesem Gebietsschema verwendet wird.

## Beschreibung

Das Schriftsystem, manchmal auch als Schreibsystem bezeichnet, ist eines der Kernelemente eines Gebietsschemas. Es gibt die Menge von Symbolen oder Glyphen an, die zum Schreiben einer bestimmten Sprache verwendet werden. Zum Beispiel ist das mit Englisch verbundene Schriftsystem Latein, während das mit Koreanisch typischerweise verbundene Schriftsystem Hangul ist. In vielen Fällen ist es nicht unbedingt erforderlich, ein Schriftsystem anzugeben, da die Sprache (die erforderlich ist) nur in einem einzigen Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel, und es ist wichtig, das Schriftsystem anzugeben, wenn mehrere Schriftsysteme anwendbar sind. Der Wert der `script` Eigenschaft wird zur Konstruktion festgelegt, entweder durch den `script` Subtag (zweiter Teil, falls vorhanden) des Gebietsschema-Identifikators oder durch die `script` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keins vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der set Zugriff von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann das Schriftsystem über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument dem {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen eines Schriftsystems über den Gebietsschema-String

Das Schriftsystem, falls vorhanden, ist der zweite Teil eines gültigen Unicode-Sprachidentifikator-Strings und kann dem anfänglichen Gebietsschema-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass das Schriftsystem kein erforderlicher Bestandteil eines Gebietsschema-Identifikators ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Prints "Latn"
```

### Hinzufügen eines Schriftsystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script` Eigenschaft des Konfigurationsobjekts auf das gewünschte Schriftsystem und übergeben Sie es dann in den Konstruktor.

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
- [Unicode Script Subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode-Gebietsschema-Daten-Markup-Sprachenspezifikation
