---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`caseFirst`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt zurück, ob bei den Kollationsregeln für dieses Locale die Groß- und Kleinschreibung berücksichtigt wird.

## Beschreibung

Die Kollationsregeln eines Locales werden verwendet, um zu bestimmen, wie Zeichenfolgen in diesem Locale angeordnet werden. In bestimmten Locales wird die Groß- oder Kleinschreibung eines Zeichens (GROßBUCHSTABEN oder Kleinbuchstaben) im Kollationsprozess berücksichtigt. Diese zusätzliche Regel kann im `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden.

Die `caseFirst`-Eigenschaft kann drei Werte annehmen, die in der folgenden Tabelle aufgeführt sind.

### `caseFirst` Werte

| Wert    | Beschreibung                                              |
| ------- | --------------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.       |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.       |
| `false` | Keine spezielle Groß-/Kleinschreibungsreihenfolge.       |

## Beispiele

### Festlegen des caseFirst-Wertes über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `caseFirst` darstellt, dem Schlüssel `kf`. `kf` wird als "Erweiterungs-Unterschild" des Locale-Strings behandelt. Diese Unterschildmarker fügen zusätzliche Daten zum Locale hinzu und werden zu Locale-Identifikatoren hinzugefügt, indem der `-u` Erweiterungsschlüssel verwendet wird. Somit kann der `caseFirst`-Wert dem anfänglichen Locale-Bezeichner hinzugefügt werden, der in den `Locale`-Konstruktor übergeben wird. Um den `caseFirst`-Wert hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zur Zeichenfolge hinzu. Fügen Sie anschließend den `-kf` Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `caseFirst` hinzufügen. Fügen Sie schließlich den `caseFirst`-Wert zur Zeichenfolge hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Gibt "upper" aus
```

### Festlegen des caseFirst-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert und übergeben Sie ihn dann dem Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // Gibt "lower" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
