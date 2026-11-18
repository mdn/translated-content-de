---
title: Intl.Locale.prototype.variants
short-title: variants
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die **`variants`**-Accessor-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt die diesem Locale zugeordneten Varianten als Zeichenfolge von durch Bindestriche (`-`) getrennten Bezeichnern in der ursprünglich angegebenen Reihenfolge zurück.

## Beschreibung

Varianten sind Teil der primären Sprachkennung. Sie kennzeichnen Varianten einer Sprache, die sich durch die Kombination aus Sprache, Region und Schrift nicht unterscheiden lassen. Üblicherweise stehen sie für dieselbe Sprache in verschiedenen Epochen oder mit unterschiedlichen Rechtschreibungen. Für das Deutsche gibt es beispielsweise die Rechtschreibvarianten `1901` und `1996`, die als `de-1901` und `de-1996` geschrieben werden. Die Variante „Frühneuenglisch (1500–1700)“ wird als `en-emodeng` geschrieben. Der Subtag kann mehrere durch Bindestriche (`-`) getrennte Bezeichner enthalten. Diese Bezeichner haben technisch gesehen keine feste Reihenfolge, bilden in der Praxis aber oft eine inhaltliche Hierarchie: Der Resian-Dialekt des Slowenischen wird beispielsweise als `sl-rozaj` geschrieben, der San-Giorgio/Bila-Dialekt des Resian dagegen als `sl-rozaj-biske`.

Der Wert der Eigenschaft `variants` wird bei der Erstellung festgelegt: entweder über den Teil der Locale-Kennung nach `region` oder über die Option `variants` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Sind beide vorhanden, hat die Option Vorrang. Ist keiner von beiden vorhanden, hat die Eigenschaft den Wert `undefined`.

Der Setter-Accessor von `variants` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags können auch Varianten dem {{jsxref("Intl.Locale")}}-Objekt über die Locale-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Varianten über die Locale-Zeichenfolge hinzufügen

Varianten stehen, sofern vorhanden, am Ende einer gültigen Unicode-Sprachkennung. Sie können der ursprünglichen Locale-Kennung hinzugefügt werden, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird. Beachten Sie, dass Varianten kein erforderlicher Bestandteil einer Locale-Kennung sind.

```js
const locale = new Intl.Locale("sl-rozaj-biske");
console.log(locale.variants); // "rozaj-biske"
```

### Varianten über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert ein optionales Konfigurationsobjekt als Argument. Setzen Sie dessen Eigenschaft `variants` auf die gewünschten Varianten und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("sl", { variants: "rozaj-biske" });
console.log(locale.variants); // "rozaj-biske"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Variant-Subtag](https://www.unicode.org/reports/tr35/#unicode_variant_subtag_validity) in der Spezifikation der Unicode Locale Data Markup Language
- [IANA-Register der Sprach-Subtags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
