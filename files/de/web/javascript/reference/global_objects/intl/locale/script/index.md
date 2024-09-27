---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`script`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das Skript zurück, das für das Schreiben der bestimmten Sprache in diesem Gebietsschema verwendet wird.

## Beschreibung

Das Skript, manchmal auch Schriftsystem genannt, ist eines der Kernattribute eines Gebietsschemas. Es gibt das Set von Symbolen oder Glyphen an, die verwendet werden, um eine bestimmte Sprache zu schreiben. Beispielsweise ist das mit Englisch assoziierte Skript Latein, während das typischerweise mit Koreanisch assoziierte Skript Hangul ist. In vielen Fällen ist es nicht zwingend notwendig, ein Skript anzugeben, da die Sprache (was notwendig ist) nur in einem einzigen Skript geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel, und es ist wichtig, das Skript anzugeben, wenn mehrere Skripte anwendbar sind. Der Wert der `script`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `script`-Subtag (zweiter Teil, falls vorhanden) des Gebietsschema-Identifikators oder durch die `script`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie bei anderen Gebietsschema-Subtags kann das Skript zum {{jsxref("Intl.Locale")}}-Objekt über den Gebietsschemastring oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Skripts über den Gebietsschemastring

Das Skript, falls vorhanden, ist der zweite Teil eines gültigen Unicode-Sprachbezeichner-Strings und kann dem anfänglichen Gebietsschema-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Beachten Sie, dass das Skript kein erforderlicher Teil eines Gebietsschema-Bezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Prints "Latn"
```

### Hinzufügen eines Skripts über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor verfügt über ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script`-Eigenschaft des Konfigurationsobjekts auf Ihr gewünschtes Skript und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Script-Subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode-Gebietsschema-Datenmarkup-Sprache Spec
