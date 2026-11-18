---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`caseFirst`** von {{jsxref("Intl.Locale")}}-Instanzen gibt an, ob nach den Sortierregeln dieser Locale Groß- oder Kleinbuchstaben zuerst sortiert werden.

## Beschreibung

Die Sortierregeln einer Locale bestimmen, in welcher Reihenfolge Zeichenfolgen angeordnet werden. In manchen Locales wird bei der Sortierung die Groß- und Kleinschreibung eines Zeichens berücksichtigt. Diese zusätzliche Regel kann durch die Eigenschaft `caseFirst` eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden. Die Eigenschaft `caseFirst` kann die drei in der folgenden Tabelle aufgeführten Werte haben.

| Wert    | Beschreibung                                               |
| ------- | ---------------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert.        |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert.        |
| `false` | Keine besondere Sortierung nach Groß- und Kleinschreibung. |

Der Wert der Eigenschaft `caseFirst` wird beim Erstellen des Objekts festgelegt, entweder über den Schlüssel `kf` im Locale-Bezeichner oder über die Option `caseFirst` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Sind beide vorhanden, hat die Option des Konstruktors Vorrang. Ist keiner von beiden vorhanden, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `caseFirst` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Wert für `caseFirst` dem {{jsxref("Intl.Locale")}}-Objekt über die Locale-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Einen caseFirst-Wert über die Locale-Zeichenfolge hinzufügen

Gemäß der [Spezifikation für Unicode-Locale-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `caseFirst` ein „Erweiterungs-Subtag“. Solche Subtags liefern zusätzliche Daten zur Locale und werden Locale-Bezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um der ursprünglichen Locale-Bezeichner-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen Wert für `caseFirst` hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-kf` hinzu, um anzugeben, dass Sie einen Wert für `caseFirst` hinzufügen. Fügen Sie zuletzt den Wert für `caseFirst` hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Einen caseFirst-Wert über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter `caseFirst`. Setzen Sie die Eigenschaft `caseFirst` des Konfigurationsobjekts auf den gewünschten Wert für `caseFirst` und übergeben Sie das Objekt anschließend an den Konstruktor.

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
- [Unicode-Spezifikation zur Sortierung nach Groß- und Kleinschreibung](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
