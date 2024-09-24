---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Number")}} Werten gibt eine zeichenkettensensitive Darstellung dieser Zahl zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) ruft diese Methode einfach `Intl.NumberFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenketten durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}} Objekt zu erstellen und dessen Methode {{jsxref("Intl/NumberFormat/format", "format()")}} zu verwenden, da ein `NumberFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe eine eingeschränktere Suche durchführen können.

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungsregeln verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.NumberFormat` werden aufgefordert, beide Parameter zu ignorieren, wodurch das verwendete Gebietsschema und die Form der zurückgegebenen Zeichenkette vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP 47 Sprachentag oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert und in der Regel das Lokalisierungsgebiet des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die die gegebene Zahl gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` ist dies gleichwertig zu `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Es kann jedoch zwischen Implementierungen variieren, selbst innerhalb desselben Gebietsschemas - Variationen im Output sind beabsichtigt und gemäß der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Beispielsweise könnte die Zeichenkette Nicht-Trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundsätzliche Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette im Standardgebietsschema und mit Standardeinstellungen zurück.

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500" im U.S. Englisch Gebietsschema
```

### Überprüfen der Unterstützung für die Parameter locales und options

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht die erforderlichen Daten haben. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` immer das lokale Gebietsschema des Systems, was möglicherweise nicht das gewünschte ist. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz auf Unterstützung überprüfen:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem `locales` Argument angeben:

```js
const number = 123456.789;

// Deutsch verwendet das Komma als Dezimaltrennzeichen und den Punkt für Tausende
console.log(number.toLocaleString("de-DE"));
// 123.456,789

// Arabisch in den meisten arabischsprachigen Ländern verwendet östliche arabische Ziffern
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// Indien verwendet Tausend/Lakh/Crore-Trennzeichen
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// der nu Erweiterungsschlüssel fordert ein Nummerierungssystem an, z.B. chinesische Dezimalzahlen
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// beim Anfordern einer Sprache, die möglicherweise nicht unterstützt wird, wie Balinesisch, geben Sie eine Ausweichsprache an, in diesem Fall Indonesisch
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### Verwendung von options

Die von `toLocaleString()` bereitgestellten Ergebnisse können durch den `options` Parameter angepasst werden:

```js
const number = 123456.789;

// eine Währungsformatierung anfordern
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// der japanische Yen verwendet keine Untereinheit
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// auf drei signifikante Ziffern begrenzen
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// Verwenden der Standardsprache des Hosts mit Formatierungsoptionen
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65" wenn Englisch die Standardsprache ist, oder
// "30.000,65" wenn Deutsch die Standardsprache ist, oder
// "30 000,65" wenn Französisch die Standardsprache ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
