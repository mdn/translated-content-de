---
title: Intl.PluralRules.prototype.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
l10n:
  sourceCommit: b444aa7e061430cb0b0c330cc4e9fe113d352162
---

{{JSRef}}

Die **`select()`**-Methode von {{jsxref("Intl.PluralRules")}}-Instanzen gibt einen String zurück, der angibt, welche Pluralregel für die lokaalspezifische Formatierung einer Zahl verwendet werden soll.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-select.html")}}

## Syntax

```js-nolint
select(number)
```

### Parameter

- `number`
  - : Die Zahl, für die eine Pluralregel ermittelt werden soll.

### Rückgabewert

Ein String, der die Pluralisierungskategorie der `number` darstellt.
Dies kann eine der folgenden sein: `zero`, `one`, `two`, `few`, `many` oder `other`.

## Beschreibung

Diese Funktion wählt eine Pluralisierungskategorie gemäß den Locale- und Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}}-Objekts.
Diese Optionen werden im Konstruktor von [`Intl.PluralRules()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) festgelegt.

## Beispiele

### Verwendung von select()

Zuerst erstellen Sie ein `Intl.PluralRules`-Objekt und übergeben die entsprechenden `locales`- und `options`-Parameter.
Hier erstellen wir ein Pluralregel-Objekt für Arabisch im ägyptischen Dialekt.
Da der `type` nicht angegeben ist, bietet das Regelobjekt eine Formatierung für Kardinalzahlen (die Standardeinstellung).

```js
const pr = new Intl.PluralRules("ar-EG");
```

Rufen Sie anschließend `select()` auf dem Regelobjekt auf und geben Sie die Zahl an, für die die Pluralform erforderlich ist.
Beachten Sie, dass Arabisch 5 Formen für Kardinalzahlen hat, wie gezeigt wird.

```js
pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
