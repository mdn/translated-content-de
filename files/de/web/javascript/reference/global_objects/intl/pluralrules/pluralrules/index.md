---
title: Intl.PluralRules()-Konstruktor
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Der Konstruktor **`Intl.PluralRules()`** erstellt {{jsxref("Intl.PluralRules")}}-Objekte.

## Syntax

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, den Konstruktor ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschemabezeichner. Wird `undefined` übergeben oder wird keiner der angegebenen Gebietsschemabezeichner unterstützt, wird das Standardgebietsschema der Laufzeitumgebung verwendet. Zur allgemeinen Form und Interpretation des Arguments `locales` siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus für den Abgleich von Gebietsschemata. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Gebietsschemaidentifizierung und -aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Der zu verwendende Typ. Mögliche Werte sind:
        - `"cardinal"` (Standardwert)
          - : Für Kardinalzahlen (die eine Anzahl von Dingen angeben).
        - `"ordinal"`
          - : Für Ordinalzahlen (die eine Reihenfolge oder Rangfolge angeben, z. B. „1st“, „2nd“, „3rd“ im Englischen).

    `Intl.PluralRules()` unterstützt mehrere Optionen von `Intl.NumberFormat()`. Sie stellen sicher, dass eine mit `NumberFormat` formatierte Zahl und das anhand dieser Zahl ausgewählte Wort in der passenden Pluralform zu einer grammatikalisch korrekten Wortgruppe verbunden werden können.

    Die folgenden Optionen haben dieselbe Bedeutung wie die [Notationsoptionen von `Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#other_options):
    - `notation`
      - : Die Formatierung, in der die Zahl angezeigt werden soll. Mögliche Werte sind:
        - `"standard"` (Standardwert)
          - : Einfache Zahlenformatierung.
        - `"scientific"`
          - : Gibt die formatierte Zahl in wissenschaftlicher Schreibweise aus.
        - `"engineering"`
          - : Gibt die formatierte Zahl mit einem durch drei teilbaren Zehnerexponenten aus.
        - `"compact"`
          - : Kompakte Darstellung der Zahl; standardmäßig wird die Kurzform verwendet.
    - `compactDisplay`
      - : Wird nur verwendet, wenn `notation` den Wert `"compact"` hat. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.

    Die folgenden Optionen haben dieselbe Bedeutung wie die [Ziffernoptionen von `Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options):
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`
    - `trailingZeroDisplay`

    Für die Option `style` von `Intl.NumberFormat` wird immer `"decimal"` angenommen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `roundingIncrement` nicht `1` ist und entweder mit einer Rundung auf signifikante Stellen oder mit einem anderen Wert für `roundingPriority` als `"auto"` kombiniert wird.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Gebietsschemas gibt `select()` mit den Standardoptionen eine Pluralkategorie für das Standardgebietsschema zurück.
Damit lassen sich Singular- und Pluralformen unterscheiden, etwa „dog“ und „dogs“.

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' if in US English locale

pr.select(1); // 'one' if in US English locale

pr.select(2); // 'other' if in US English locale
```

### Formatierung von Ordinalzahlen

Die Ergebnisse lassen sich über das Argument `options` anpassen. Dessen Eigenschaft `type` können Sie auf `ordinal` setzen. So lässt sich die Ordinalendung bestimmen, etwa für „1st“, „2nd“, „3rd“, „4th“, „42nd“ und so weiter.

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

### Verwendung von notation

Die Option `notation` beeinflusst die verwendete Pluralform, da sich durch sie die Formulierung im jeweiligen Kontext ändern kann. Bei der Angabe einer Menge auf Französisch sind folgende Formen möglich:

- `{value} croissant` – ein Croissant im Singular (`one`)
- `{value} croissants` – Croissants im Plural (`other`)
- `{value} de croissants` – Croissants im Plural mit einem Mengenwort, ähnlich dem englischen „a bag of croissants“ (`many`)

Wenn Sie `notation` nicht angeben, geht `PluralRules` davon aus, dass Sie die Zahl stets mit `notation: "standard"` formatieren, wobei Zahlen vollständig ausgegeben werden:

```js
const pr = new Intl.PluralRules("fr-FR");
const nf = new Intl.NumberFormat("fr-FR");
const formats = new Map([
  ["one", "croissant"],
  ["other", "croissants"],
  ["many", "de croissants"],
]);

function getLabel(value) {
  return `${nf.format(value)} ${formats.get(pr.select(value))}`;
}

console.log(getLabel(1)); // 1 croissant
console.log(getLabel(10)); // 10 croissants
console.log(getLabel(1000000)); // 1 000 000 de croissants (pronounced "un million de croissants")
console.log(getLabel(1100000)); // 1 100 000 croissants (pronounced "un million cent mille croissants")
```

Wenn Sie 1100000 stattdessen als „1,1 million“ formatieren möchten (mit `notation: "compact"`), entsteht ein Problem: „1,1 million croissants“ ist im Französischen grammatikalisch falsch. Es muss „1,1 million _de_ croissants“ heißen, da „million“ ebenfalls ein Mengenwort ist. Sie müssen `PluralRules` daher mitteilen, dass Sie die Zahl auf diese Weise formatieren:

```js
const sharedOptions = { notation: "compact", compactDisplay: "long" };
const pr = new Intl.PluralRules("fr-FR", sharedOptions);
const nf = new Intl.NumberFormat("fr-FR", sharedOptions);
const formats = new Map([
  ["one", "croissant"],
  ["other", "croissants"],
  ["many", "de croissants"],
]);

function getLabel(value) {
  return `${nf.format(value)} ${formats.get(pr.select(value))}`;
}

console.log(getLabel(1)); // 1 croissant
console.log(getLabel(10)); // 10 croissants
console.log(getLabel(1000000)); // 1 million de croissants
console.log(getLabel(1100000)); // 1,1 million de croissants
```

> [!NOTE]
> Es ist kein Fall bekannt, in dem `compactDisplay` die Auswahl der Pluralform beeinflusst. Dennoch sollten Sie die an `NumberFormat` und `PluralRules` übergebenen Optionen wie oben gezeigt aufeinander abstimmen.

Dasselbe gilt, wenn `notation` auf `"scientific"` oder `"engineering"` gesetzt ist. Mit `notation: "scientific"` erhalten Sie beispielsweise entsprechend „1E0 croissant“, „1E1 croissants“, „1E6 de croissants“ und „1,1E6 de croissants“.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl")}}
