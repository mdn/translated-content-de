---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`caseFirst`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt zurück, ob die Groß- und Kleinschreibung bei den Kollationsregeln dieses Gebietsschemas berücksichtigt wird.

## Beschreibung

Die Kollationsregeln eines Gebietsschemas bestimmen, wie Zeichenfolgen in diesem Gebietsschema geordnet werden. In bestimmten Gebietsschemas wird die Groß- oder Kleinschreibung (GROSSBUCHSTABEN oder kleinschrift) im Kollationsprozess verwendet. Diese zusätzliche Regel kann durch die `caseFirst`-Eigenschaft eines {{jsxref("Intl.Locale")}}-Objekts ausgedrückt werden. Es gibt drei Werte, die die `caseFirst`-Eigenschaft haben kann, wie in der folgenden Tabelle dargestellt.

| Wert    | Beschreibung                                        |
| ------- | --------------------------------------------------- |
| `upper` | Großbuchstaben werden vor Kleinbuchstaben sortiert. |
| `lower` | Kleinbuchstaben werden vor Großbuchstaben sortiert. |
| `false` | Keine spezielle Groß-/Kleinschreibungsordnung.      |

Der Wert der `caseFirst`-Eigenschaft wird zur Erstellungszeit gesetzt, entweder durch den `kf`-Schlüssel des Gebietsschema-Identifiers oder durch die `caseFirst`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner von beiden vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Setz-Accessor von `caseFirst` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann der `caseFirst`-Wert dem {{jsxref("Intl.Locale")}}-Objekt über die Gebietsschema-Zeichenfolge oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines caseFirst-Werts über die Gebietsschema-Zeichenfolge

Im [Unicode-Gebietsschema-Zeichenfolgen-Spezifikation](https://www.unicode.org/reports/tr35/) ist `caseFirst` ein "Erweiterungs-Subtag". Diese Subtags fügen zusätzliche Daten über das Gebietsschema hinzu und werden mithilfe des `-u`-Erweiterungsschlüssels zu Gebietsschema-Identifikatoren hinzugefügt. Um den `caseFirst`-Wert zur initialen Gebietsschema-Identifikatoren-Zeichenfolge hinzuzufügen, die an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird, fügen Sie zunächst den `-u`-Erweiterungsschlüssel hinzu, wenn er nicht vorhanden ist. Fügen Sie als nächstes die `-kf`-Erweiterung hinzu, um anzugeben, dass Sie einen Wert für `caseFirst` hinzufügen. Fügen Sie schließlich den `caseFirst`-Wert hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Hinzufügen eines caseFirst-Werts über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das einen von mehreren Erweiterungstypen enthalten kann, einschließlich `caseFirst`. Legen Sie die `caseFirst`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `caseFirst`-Wert fest und übergeben Sie es dann an den Konstruktor.

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
