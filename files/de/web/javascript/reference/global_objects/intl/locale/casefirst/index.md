---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die **`caseFirst`**-Accessor-Property von {{jsxref("Intl.Locale")}}-Instanzen gibt an, ob nach den Sortierregeln dieser Locale Groß- oder Kleinbuchstaben zuerst sortiert werden.

## Beschreibung

Die Sortierregeln einer Locale bestimmen, in welcher Reihenfolge Zeichenfolgen sortiert werden. Bei bestimmten Locales wird die Groß- oder Kleinschreibung eines Zeichens (GROSSBUCHSTABEN oder kleinbuchstaben) bei der Sortierung berücksichtigt. Diese zusätzliche Regel kann in der `caseFirst`-Property eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden. Die `caseFirst`-Property kann einen der drei Werte in der folgenden Tabelle haben.

| Wert    | Beschreibung                                               |
| ------- | ---------------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.        |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.        |
| `false` | Keine besondere Sortierung nach Groß- und Kleinschreibung. |

Der Wert der `caseFirst`-Property wird bei der Erstellung festgelegt: entweder über den `kf`-Schlüssel des Locale-Bezeichners oder über die `caseFirst`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Wenn beide angegeben sind, hat die Option Vorrang. Ist keiner von beiden angegeben, hat die Property den Wert `undefined`.

Der Set-Accessor von `caseFirst` ist `undefined`. Sie können diese Property nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der `caseFirst`-Wert dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Einen caseFirst-Wert über den Locale-String hinzufügen

Gemäß der [Spezifikation für Unicode-Locale-Strings](https://www.unicode.org/reports/tr35/) ist `caseFirst` ein „Extension-Subtag“. Solche Subtags ergänzen zusätzliche Angaben zur Locale und werden Locale-Bezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um dem ursprünglichen Locale-Bezeichner, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird, einen `caseFirst`-Wert hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend `-kf` hinzu, um anzugeben, dass ein Wert für `caseFirst` folgt. Fügen Sie zuletzt den `caseFirst`-Wert hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Einen caseFirst-Wert über das Konfigurationsobjekt hinzufügen

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter `caseFirst`. Setzen Sie die `caseFirst`-Property des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // "lower"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Spezifikation für die Sortierung nach Groß- und Kleinschreibung](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
