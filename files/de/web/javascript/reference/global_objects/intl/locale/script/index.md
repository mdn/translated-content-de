---
title: Intl.Locale.prototype.script
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`script`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das Schriftsystem zurück, das zur Darstellung der besonderen Sprache in diesem Gebietsschema verwendet wird.

## Beschreibung

Schrift, manchmal auch als Schriftsystem bezeichnet, ist eines der Kernelemente eines Gebietsschemas. Es gibt den Satz von Symbolen oder Glyphen an, die verwendet werden, um eine bestimmte Sprache zu schreiben. Zum Beispiel ist das mit Englisch assoziierte Schriftsystem Latein, während das üblicherweise mit Koreanisch assoziierte Schriftsystem Hangul ist. In vielen Fällen ist es nicht unbedingt notwendig, ein Schriftsystem zu benennen, da die Sprache (die erforderlich ist) nur in einem einzigen Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel, und es ist wichtig, das Schriftsystem zu benennen, wenn mehrere Schriftsysteme anwendbar sind.

Der Wert der `script`-Eigenschaft wird zur Bauzeit festgelegt, entweder durch den Teil des Gebietsschema-Identifiers nach `language` oder durch die `script`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keine vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann das Schriftsystem über den Gebietsschema-String oder ein Konfigurationsobjekt als Argument dem {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen eines Schriftsystems über den Gebietsschema-String

Das Schriftsystem, sofern vorhanden, ist der zweite Teil eines gültigen Unicode-Sprach-Identifier-Strings und kann dem ursprünglichen Gebietsschema.Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass das Schriftsystem kein erforderlicher Teil eines Gebietsschema-Identifiers ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // "Latn"
```

### Hinzufügen eines Schriftsystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script`-Eigenschaft des Konfigurationsobjekts auf Ihr gewünschtes Schriftsystem und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // "Latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode script subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode locale data markup language Spezifikation
