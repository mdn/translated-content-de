---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`collation`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den [Sortiertyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für diese Locale zurück, der verwendet wird, um Zeichenfolgen gemäß den Regeln der Sprachumgebung zu ordnen.

## Beschreibung

Sortierung ist der Prozess des Ordnens von Zeichenfolgen. Sie wird immer dann verwendet, wenn Zeichenfolgen sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, sei es bei Suchergebnissen oder beim Anordnen von Datensätzen in einer Datenbank. Auch wenn das Sortieren von Zeichenfolgen trivial erscheinen mag, kann das Konzept der Ordnung je nach Region und Sprache variieren. Der Wert der `collation` Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `co`-Schlüssel des Locale-Bezeichners oder durch die `collation`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Sortiertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

Der Setzugriff der `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Untertags kann der Sortiertyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Sortiertyps über den Locale-String

Im [Unicode Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Sortiertypen Locale-Schlüssel "Erweiterungs-Untertages". Diese Untertage fügen zusätzliche Daten über die Locale hinzu und werden durch die Verwendung der `-u` Erweiterung zu Locale-Bezeichnern hinzugefügt. Somit kann der Sortiertyp dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Sortiertyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie dann die `-co` Erweiterung hinzu, um anzuzeigen, dass Sie einen Sortiertyp hinzufügen. Fügen Sie schließlich den Sortiertyp zum String hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Sortiertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen, einschließlich Sortiertypen, enthalten kann. Setzen Sie die `collation` Eigenschaft des Konfigurationsobjekts auf den gewünschten Sortiertyp und übergeben Sie es dann an den Konstruktor.

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
