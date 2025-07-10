---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`caseFirst`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt zurück, ob Groß- und Kleinschreibung in den Kollationsregeln dieser Lokalisierung berücksichtigt wird.

## Beschreibung

Die Kollationsregeln einer Lokalisierung werden verwendet, um zu bestimmen, wie Zeichenfolgen in dieser Lokalisierung angeordnet werden. Bestimmte Lokalisierungen verwenden die Groß- oder Kleinschreibung eines Zeichens (GROßBUCHSTABEN oder kleinschreibung) im Kollationsprozess. Diese zusätzliche Regel kann in der `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}} Objekts ausgedrückt werden.

Es gibt 3 Werte, die die `caseFirst`-Eigenschaft haben kann, wie in der folgenden Tabelle dargestellt.

### `caseFirst` Werte

| Wert    | Beschreibung                                            |
| ------- | ------------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.     |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.     |
| `false` | Keine spezielle Sortierung durch Groß-/Kleinschreibung. |

## Beispiele

### Festlegen des caseFirst-Wertes über den Lokalisierungs-String

In der [Spezifikation für Unicode-Lokalisierungs-Strings](https://www.unicode.org/reports/tr35/), entsprechen die Werte, die `caseFirst` repräsentiert, dem Schlüssel `kf`. `kf` wird als "Erweiterungs-Untertag" des Lokalisierungs-Strings behandelt. Diese Untertags fügen zusätzliche Daten über die Lokalisierung hinzu und werden zu Lokalisierungsbezeichnern hinzugefügt, indem der `-u` Erweiterungs-Schlüssel verwendet wird. Somit kann der `caseFirst` Wert dem anfänglichen Lokalisierungsbezeichner-String hinzugefügt werden, der in den `Locale`-Konstruktor übergeben wird. Um den `caseFirst` Wert hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungs-Schlüssel zum String hinzu. Fügen Sie dann den `-kf` Erweiterungs-Schlüssel hinzu, um anzugeben, dass Sie einen Wert für `caseFirst` hinzufügen. Fügen Sie schließlich den `caseFirst` Wert zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### Festlegen des caseFirst-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `caseFirst` Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten `caseFirst` Wert und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // Prints "lower"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Spezifikation für caseFirst-Kollation](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
