---
title: Intl.NumberFormat.prototype.formatRangeToParts()
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 5206afe08e91add1b39cdeaa47d95a5da347a065
---

{{JSRef}}

Die **`formatRangeToParts()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, die die lokalisierten Token enthalten, aus denen benutzerdefinierte Strings erstellt werden können, während die lokalspezifischen Teile erhalten bleiben. Dadurch ist es möglich, lokalbewusste benutzerdefinierte Formatierungsbereiche von Zahlen-Strings bereitzustellen.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatRangeToParts()` den exakten Wert verwendet, den der String darstellt, um Präzisionsverluste während der impliziten Konvertierung in eine Zahl zu vermeiden.
- `endRange`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die den formatierten Bereich in Teilen enthalten. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, die jeweils einen String enthalten. Die String-Konkatenation von `value`, in der angegebenen Reihenfolge, ergibt denselben String wie {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte haben wie {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}}, oder den zusätzlichen Wert `"approximatelySign"` (siehe unten). Die `source` kann einer der folgenden sein:

- `startRange`
  - : Das Token ist ein Teil der Startnummer.
- `endRange`
  - : Das Token ist ein Teil der Endnummer.
- `shared`
  - : Das Token wird zwischen Start- und Endnummer geteilt; zum Beispiel das Währungssymbol. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `"–"` Separator, werden ebenfalls als `shared` markiert.

Wenn die Start- und Endnummern zum selben String formatiert werden, hat die Ausgabe dieselbe Liste von Token wie beim Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} auf der Startnummer, wobei alle Token als `source: "shared"` markiert sind. Zusätzlich kann das erste Token ein "ungefähres Gleichheitszeichen"-Symbol (z.B. "~") mit `type: "approximatelySign"` sein. Die Einfügung dieses Symbols hängt nur von den Lokaleinstellungen ab und wird eingefügt, selbst wenn `startRange === endRange` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` `NaN` oder ein unverarbeitbarer String ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn entweder `startRange` oder `endRange` undefiniert ist.

## Beispiele

### Verwendung von formatRangeToParts()

Die `formatRange()` Methode gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00–9.500,00 €"
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise die Formatierung dieses Strings anpassen oder ihn mit anderen Texten verarbeiten. Die `formatRangeToParts()` Methode liefert die gleiche Information in Teilen:

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// return value:
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "–", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
