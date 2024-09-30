---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`script`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt das Skript zurück, das für das Schreiben der spezifischen Sprache in dieser Lokalisierung verwendet wird.

## Beschreibung

Das Skript, manchmal auch Schriftsystem genannt, ist eines der Kernattribute einer Lokalisierung. Es gibt die Symbol- oder Glyphengruppe an, die verwendet wird, um eine bestimmte Sprache zu schreiben. Beispielsweise ist das mit dem Englischen assoziierte Skript Latein, während das typischerweise mit Koreanisch assoziierte Skript Hangul ist. In vielen Fällen ist es nicht unbedingt erforderlich, ein Skript anzugeben, da die Sprache (die notwendig ist) nur in einem einzigen Skript geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel, und es ist wichtig, das Skript anzugeben, wenn mehrere Skripte anwendbar sind. Der Wert der `script`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `script`-Subtag (zweiter Teil, falls vorhanden) des Lokalisierungsbezeichners oder durch die `script`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keine vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Lokalisierungs-Subtags kann das Skript über den Lokalisierungs-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen eines Skripts über den Lokalisierungs-String

Das Skript, falls vorhanden, ist der zweite Teil eines gültigen Unicode-Sprachbezeichner-Strings und kann dem anfänglichen Lokalisierungsbezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Beachten Sie, dass das Skript kein erforderlicher Bestandteil eines Lokalisierungsbezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Prints "Latn"
```

### Hinzufügen eines Skripts über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `script`-Eigenschaft des Konfigurationsobjekts auf das gewünschte Skript und übergeben Sie es dann dem Konstruktor.

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
- [Unicode script subtag](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Unicode-Lokalisierungsdaten-Markup-Sprache-Spezifikation
