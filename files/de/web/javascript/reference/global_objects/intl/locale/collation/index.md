---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`collation`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den [Sortiertyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für diese Locale zurück, der verwendet wird, um Zeichenfolgen gemäß den Regeln der Locale zu ordnen.

## Beschreibung

Die Sortierung ist der Prozess des Ordnens von Zeichenfolgen. Sie wird immer dann verwendet, wenn Zeichenfolgen sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, von Suchabfrageergebnissen bis hin zum Ordnen von Datensätzen in einer Datenbank. Auch wenn die Idee, Zeichenfolgen in Ordnung zu bringen, trivial erscheinen mag, kann sich die Vorstellung von Ordnung von Region zu Region und von Sprache zu Sprache unterscheiden. Der Wert der `collation`-Eigenschaft wird beim Erstellen festgelegt, entweder durch den `co`-Schlüssel des Locale-Kenners oder durch die `collation`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Sortiertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

Der Set-Accessor von `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Sortiertyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjektargument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Sortiertyps über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Sortiertypen Lokalschlüssel-„Erweiterungssubtags“. Diese Subtags fügen dem Locale zusätzliche Daten hinzu und werden zu Locale-Identifikatoren hinzugefügt, indem die `-u`-Erweiterung verwendet wird. Somit kann der Sortiertyp dem anfänglichen Locale-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Sortiertyp hinzuzufügen, fügen Sie zuerst die `-u`-Erweiterung zum String hinzu. Fügen Sie als Nächstes die `-co`-Erweiterung hinzu, um anzuzeigen, dass Sie einen Sortiertyp hinzufügen. Schließlich fügen Sie den Sortiertyp zum String hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Sortiertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine von mehreren Erweiterungsarten enthalten kann, einschließlich Sortiertypen. Setzen Sie die `collation`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Sortiertyp und übergeben Sie es dann dem Konstruktor.

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
