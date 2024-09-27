---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

Die **`collation`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den [Kollationstyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für dieses Locale zurück, der verwendet wird, um Zeichenfolgen gemäß den Regeln des Locale zu ordnen.

## Beschreibung

Kollation ist der Prozess der Ordnung von Zeichenfolgen. Sie wird immer dann verwendet, wenn Zeichenfolgen sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, von Suchanfragen bis hin zur Sortierung von Datensätzen in einer Datenbank. Obwohl die Idee, Zeichenfolgen in eine Reihenfolge zu bringen, trivial erscheinen mag, kann die Vorstellung von Ordnung von Region zu Region und von Sprache zu Sprache variieren. Der Wert der `collation`-Eigenschaft wird zur Konstruktion festgelegt, entweder durch den `co` Schlüssel des Locale-Bezeichners oder durch die `collation`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Priorität, wenn beide vorhanden sind; und wenn keine vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kollationstypen siehe [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types).

Der set-Accessor von `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Kollationstyp über den Locale-String oder ein Konfigurationsobjekt-Argument dem {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen eines Kollationstyps über den Locale-String

Im [Unicode Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kollationstypen Locale-Schlüssel "Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über das Locale hinzu und werden durch die Verwendung der `-u` Erweiterung zu Locale-Bezeichnern hinzugefügt. Somit kann der Kollationstyp dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Kollationstyp hinzuzufügen, fügen Sie zunächst die `-u` Erweiterung zum String hinzu. Fügen Sie als Nächstes die `-co` Erweiterung hinzu, um anzugeben, dass Sie einen Kollationstyp hinzufügen. Fügen Sie schließlich den Kollationstyp zum String hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Kollationstyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eines von mehreren Erweiterungstypen enthalten kann, einschließlich Kollationstypen. Setzen Sie die `collation`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Kollationstyp und übergeben Sie ihn dann in den Konstruktor.

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations)
