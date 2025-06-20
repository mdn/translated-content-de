---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`caseFirst`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt an, ob bei den Kollationsregeln dieser Sprachumgebung die Groß- und Kleinschreibung berücksichtigt wird.

## Beschreibung

Die Kollationsregeln einer Sprachumgebung bestimmen, wie Zeichenfolgen in dieser Umgebung geordnet werden. Bestimmte Sprachumgebungen verwenden den Fall eines Zeichens (GROSSBUCHSTABEN oder kleinbuchstaben) im Kollationsprozess. Diese zusätzliche Regel kann in der `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden.

Es gibt 3 Werte, die die `caseFirst`-Eigenschaft annehmen kann, wie in der folgenden Tabelle dargestellt.

### `caseFirst`-Werte

| Wert    | Beschreibung                                                    |
| ------- | --------------------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.             |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.             |
| `false` | Keine spezielle Berücksichtigung der Groß- und Kleinschreibung. |

## Beispiele

### Setzen des caseFirst-Wertes über den Sprachumgebungs-String

In der [Unicode Locale String Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `caseFirst` darstellt, dem Schlüssel `kf`. `kf` wird als "Erweiterungs-Subtag" im Sprachumgebungs-String behandelt. Diese Subtags fügen zusätzliche Daten über die Sprachumgebung hinzu und werden durch den `-u` Erweiterungsschlüssel zu Sprachumgebungskennungen hinzugefügt. Der `caseFirst`-Wert kann somit dem initialen Sprachumgebungs-Identifikator-String hinzugefügt werden, der an den `Locale`-Konstruktor übergeben wird. Um den `caseFirst`-Wert hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Als Nächstes fügen Sie den `-kf` Erweiterungsschlüssel hinzu, um anzugeben, dass Sie einen Wert für `caseFirst` hinzufügen. Schließlich fügen Sie den `caseFirst`-Wert zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### Festlegen des caseFirst-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das zum Übergeben von Erweiterungstypen verwendet werden kann. Setzen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert und übergeben Sie diesen dann an den Konstruktor.

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
- [Unicode Spezifikation zur Berücksichtigung der Groß- und Kleinschreibung bei der Sortierung](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
