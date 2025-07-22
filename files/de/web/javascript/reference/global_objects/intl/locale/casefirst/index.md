---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`caseFirst`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt an, ob die Groß-/Kleinschreibung bei den Kollationsregeln dieses Gebietsschemas berücksichtigt wird.

## Beschreibung

Die Kollationsregeln eines Gebietsschemas bestimmen, wie Zeichenfolgen in diesem Gebietsschema geordnet werden. Einige Gebietsschemata verwenden die Groß-/Kleinschreibung eines Zeichens (GROßBUCHSTABEN oder kleinschreibung) im Kollationsprozess. Diese zusätzliche Regel kann in der `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden. Es gibt 3 Werte, die die `caseFirst`-Eigenschaft annehmen kann, die in der folgenden Tabelle aufgeführt sind.

| Wert    | Beschreibung                                      |
| ------- | ------------------------------------------------- |
| `upper` | Großschreibung wird vor Kleinschreibung sortiert. |
| `lower` | Kleinschreibung wird vor Großschreibung sortiert. |
| `false` | Keine spezielle Groß-/Kleinbuchstaben-Sortierung. |

Der Wert der `caseFirst`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `kf`-Schlüssel des Gebietsschema-Identifiers oder durch die `caseFirst`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines von beiden vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `caseFirst` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann der `caseFirst`-Wert dem {{jsxref("Intl.Locale")}}-Objekt über den Gebietsschemastring oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines caseFirst-Werts über den Gebietsschemastring

Im [Unicode locale string spec](https://www.unicode.org/reports/tr35/) ist `caseFirst` ein "Erweiterungs-Subtag". Diese Subtags fügen zusätzliche Daten über das Gebietsschema hinzu und werden zu Gebietsschema-Identifikatoren mithilfe des `-u`-Erweiterungsschlüssels hinzugefügt. Um den `caseFirst`-Wert zum initialen Gebietsschema-Identifier-String hinzuzufügen, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird, fügen Sie zuerst den `-u`-Erweiterungsschlüssel hinzu, wenn dieser nicht vorhanden ist. Fügen Sie anschließend die `-kf`-Erweiterung hinzu, um anzuzeigen, dass Sie einen Wert für `caseFirst` hinzufügen. Fügen Sie schließlich den `caseFirst`-Wert hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Hinzufügen eines caseFirst-Werts über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine beliebige Anzahl von Erweiterungstypen, einschließlich `caseFirst`, enthalten kann. Setzen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert und übergeben Sie es dann an den Konstruktor.

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
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
