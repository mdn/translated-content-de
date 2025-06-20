---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`collation`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den [Kollationstyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für diese Locale zurück, welcher verwendet wird, um Zeichenfolgen gemäß den Regeln der Locale zu ordnen.

## Beschreibung

Kollation ist der Prozess des Ordnens von Zeichenfolgen. Es wird immer dann verwendet, wenn Zeichenfolgen sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, von Suchanfrageergebnissen bis hin zur Anordnung von Datensätzen in einer Datenbank. Während die Idee, Zeichenfolgen in eine Ordnung zu bringen, trivial erscheinen mag, kann der Begriff der Reihenfolge von Region zu Region und Sprache zu Sprache variieren. Der Wert der `collation`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder über den `co`-Schlüssel des Locale-Identifiers oder über die `collation`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

Der Set-Accessor von `collation` ist `undefined`. Diese Eigenschaft kann nicht direkt geändert werden.

## Beispiele

Wie andere Locale-Subtags kann der Kollationstyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Kollationstyps über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kollationstypen Locale-Schlüssel "Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über die Locale hinzu und werden durch die Verwendung der `-u` Erweiterung zu Locale-Identifikatoren hinzugefügt. Somit kann der Kollationstyp dem initialen Locale-Identifier-String hinzugefügt werden, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Kollationstyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie dann die `-co` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kollationstyp hinzufügen. Schließlich fügen Sie den Kollationstyp zum String hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Kollationstyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine beliebige Anzahl von Erweiterungstypen enthalten kann, einschließlich Kollationstypen. Setzen Sie die `collation`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Kollationstyp und übergeben Sie es dann an den Konstruktor.

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
