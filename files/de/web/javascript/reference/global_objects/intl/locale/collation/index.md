---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`collation`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den [Sortierungstyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für diese Locale zurück. Er wird verwendet, um Zeichenfolgen nach den Regeln der Locale zu ordnen.

## Beschreibung

Bei der Sortierung werden Zeichenfolgen in eine bestimmte Reihenfolge gebracht. Dies ist immer dann erforderlich, wenn Zeichenfolgen sortiert werden müssen – von Suchergebnissen bis hin zu Datensätzen in einer Datenbank. Auch wenn das Ordnen von Zeichenfolgen einfach erscheinen mag, kann sich die Reihenfolge je nach Region und Sprache unterscheiden. Eine Liste der unterstützten Sortierungstypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

Der Wert der Eigenschaft `collation` wird beim Erstellen der Instanz festgelegt: entweder über den Schlüssel `co` des Locale-Bezeichners oder über die Option `collation` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beide angegeben sind, hat die Option Vorrang. Ist keiner von beiden angegeben, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Sortierungstyp dem {{jsxref("Intl.Locale")}}-Objekt über die Locale-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Sortierungstyp über die Locale-Zeichenfolge hinzufügen

In der [Spezifikation für Unicode-Locale-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `collation` ein „Erweiterungs-Subtag“. Solche Subtags enthalten zusätzliche Informationen zur Locale und werden Locale-Bezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um der ursprünglichen Locale-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen Sortierungstyp hinzuzufügen, fügen Sie zuerst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie dann die Erweiterung `-co` hinzu, um anzugeben, dass ein Sortierungstyp folgt. Fügen Sie schließlich den Sortierungstyp hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Sortierungstyp über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter Sortierungstypen. Setzen Sie die Eigenschaft `collation` des Konfigurationsobjekts auf den gewünschten Sortierungstyp und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations)
