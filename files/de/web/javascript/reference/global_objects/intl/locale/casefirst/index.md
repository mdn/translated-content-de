---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`caseFirst`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt zurück, ob bei den Sortierregeln dieser Locale die Groß- und Kleinschreibung berücksichtigt wird.

## Beschreibung

Die Sortierregeln einer Locale werden verwendet, um zu bestimmen, wie Zeichenfolgen in dieser Locale angeordnet werden. In bestimmten Locales wird die Groß- oder Kleinschreibung eines Zeichens (GROSSBUCHSTABEN oder kleinschrift) im Sortierungsprozess berücksichtigt. Diese zusätzliche Regel kann in der `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden.

Die `caseFirst`-Eigenschaft kann drei Werte annehmen, die in der untenstehenden Tabelle aufgeführt sind.

### `caseFirst` Werte

| Wert    | Beschreibung                                           |
| ------- | ------------------------------------------------------ |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.    |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.    |
| `false` | Keine spezielle Groß- und Kleinschreibungsreihenfolge. |

## Beispiele

### Festlegen des Wertes von caseFirst über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `caseFirst` darstellt, dem Schlüssel `kf`. `kf` wird als "Erweiterungssubtag" des Locale-Strings behandelt. Diese Subtags fügen zusätzliche Daten zur Locale hinzu und werden den Locale-Bezeichnern durch die Verwendung des `-u` Erweiterungsschlüssels hinzugefügt. So kann der `caseFirst`-Wert der initialen Locale-Bezeichnerkette hinzugefügt werden, die an den `Locale`-Konstruktor übergeben wird. Um den `caseFirst`-Wert hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zur Kette hinzu. Als nächstes fügen Sie den `-kf` Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `caseFirst` hinzufügen. Schließlich fügen Sie den `caseFirst`-Wert zur Kette hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### Festlegen des Wertes von caseFirst über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert, und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Groß-/Kleinschreibungssortierungs-Spezifikation](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
