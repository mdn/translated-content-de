---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Zugriffseigenschaft **`caseFirst`** von {{jsxref("Intl.Locale")}}-Instanzen gibt an, ob bei den Kollationsregeln dieser Locale Groß- und Kleinschreibung berücksichtigt wird.

## Beschreibung

Die Kollationsregeln einer Locale werden verwendet, um festzulegen, wie Zeichenketten in dieser Locale sortiert werden. In bestimmten Locales wird die Groß- oder Kleinschreibung eines Zeichens bei der Kollation berücksichtigt. Diese zusätzliche Regel kann in der `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden.

Es gibt 3 Werte, die die `caseFirst`-Eigenschaft annehmen kann, aufgeführt in der untenstehenden Tabelle.

### `caseFirst`-Werte

| Wert    | Beschreibung                                      |
| ------- | ------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert. |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert. |
| `false` | Keine spezielle Groß-/Kleinschreibungsreihenfolge. |

## Beispiele

### Einstellung des caseFirst-Wertes über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `caseFirst` repräsentiert, dem Schlüssel `kf`. `kf` wird als Locale-String-"Erweiterungs-Subtag" behandelt. Diese Subtags fügen zusätzliche Informationen über die Locale hinzu und werden zu Locale-Identifikatoren hinzugefügt, indem der `-u`-Erweiterungsschlüssel verwendet wird. So kann der `caseFirst`-Wert dem anfänglichen Locale-Identifikator-String hinzugefügt werden, der an den `Locale`-Konstruktor übergeben wird. Um den `caseFirst`-Wert hinzuzufügen, fügen Sie zuerst den `-u`-Erweiterungsschlüssel zum String hinzu. Fügen Sie anschließend den `-kf`-Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `caseFirst` hinzufügen. Schließlich fügen Sie den `caseFirst`-Wert zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### Einstellung des caseFirst-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert und übergeben Sie es dann dem Konstruktor.

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
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
