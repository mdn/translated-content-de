---
title: Intl.Locale.prototype.firstDayOfWeek
short-title: firstDayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`firstDayOfWeek`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den ersten Wochentag für diese Locale als Zeichenfolge zurück.

## Beschreibung

Je nach Region und Kultur gelten unterschiedliche Regeln dafür, an welchem Tag die Woche beginnt. Dies wirkt sich unter anderem auf die Kalenderdarstellung und die Buchhaltung aus. Der Wert von `firstDayOfWeek` ist `"mon"`, `"tue"`, `"wed"`, `"thu"`, `"fri"`, `"sat"` oder `"sun"`.

Der Wert der Eigenschaft `firstDayOfWeek` wird bei der Erstellung festgelegt: entweder über den Schlüssel `fw` im Locale-Bezeichner oder über die Option `firstDayOfWeek` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beide angegeben sind, hat die Option Vorrang. Ist keiner von beiden angegeben, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `firstDayOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann auch der erste Wochentag über die Locale-Zeichenfolge oder ein Konfigurationsobjekt als Argument des Konstruktors zum {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Den ersten Wochentag über die Locale-Zeichenfolge hinzufügen

In der [Spezifikation für Unicode-Locale-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `firstDayOfWeek` ein „Extension-Subtag“. Solche Subtags liefern zusätzliche Informationen zur Locale und werden Locale-Bezeichnern mithilfe des Extension-Schlüssels `-u` hinzugefügt. Um der ursprünglichen Locale-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, den ersten Wochentag hinzuzufügen, fügen Sie zunächst den Extension-Schlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-fw` hinzu, um den ersten Wochentag anzugeben. Fügen Sie zuletzt den Namen des Tages hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-fw-thu");
console.log(locale.firstDayOfWeek); // "thu"
```

### Den ersten Wochentag über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungen enthalten, darunter `firstDayOfWeek`. Setzen Sie die Eigenschaft `firstDayOfWeek` des Konfigurationsobjekts auf den gewünschten Tag und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { firstDayOfWeek: "thu" });
console.log(locale.firstDayOfWeek); // "thu"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getWeekInfo()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo)
