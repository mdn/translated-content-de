---
title: "CSSFontFeatureValuesMap: set() Methode"
short-title: set()
slug: Web/API/CSSFontFeatureValuesMap/set
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`set()`** Methode von [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Instanzen fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `CSSFontFeatureValuesMap` hinzu, oder aktualisiert einen bestehenden Eintrag, wenn der Schlüssel bereits existiert.

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Eintrags, der in das `CSSFontFeatureValuesMap`-Objekt hinzugefügt oder geändert werden soll. Kann einen beliebigen Wert haben.
- `value`
  - : Der Wert des Eintrags, der in das `CSSFontFeatureValuesMap`-Objekt hinzugefügt oder geändert werden soll. Muss eine ganze Zahl sein, die dem `index` des alternativen Schriftmerkmals entspricht.

### Rückgabewert

Das `CSSFontFeatureValuesMap`-Objekt.

## Beispiele

### Grundlegende Nutzung

Im folgenden Beispiel wird der Wert für `swashy` aktualisiert und eine dritte Deklaration hinzugefügt. Dieses Beispiel verwendet `@swash`, funktioniert aber auch mit anderen [Feature-Werte-Blöcken](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

#### JavaScript

```js
function logSwashes(value, key) {
  console.log(`('${key}') = ${value}`);
}
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
// log current swashes
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swashy') = 2"

// update swash with the key swashy
myRule.swash.set("swashy", 3);
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swashy') = 3"

// add new swash with the key swooshy
myRule.swash.set("swooshy", 2);
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swooshy') = 2", "('swashy') = 3"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Map.prototype.keys()](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
