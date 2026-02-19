---
title: CSSFontFeatureValuesMap
slug: Web/API/CSSFontFeatureValuesMap
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("CSSOM")}}

Das **`CSSFontFeatureValuesMap`**-Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) stellt eine durchlaufbare und schreibgeschützte Menge der [CSSFontFeatureValuesRule](/de/docs/Web/API/CSSFontFeatureValuesRule)-Eigenschaften dar, wie z.B. [`swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash), [`annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation), [`ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments), usw.

Eine Instanz von `CSSFontFeatureValuesMap` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel der benutzerdefinierte Name ist, der verwendet wird, um ein Schriftmerkmal zu referenzieren, und der entsprechende Wert der Index für das Schriftmerkmal innerhalb der Schriftart ist.

## Instanz-Eigenschaften

- [`CSSFontFeatureValuesMap.size`](/de/docs/Web/API/CSSFontFeatureValuesMap/size)
  - : Gibt eine positive ganze Zahl zurück, die die Größe des `CSSFontFeatureValuesMap`-Objekts enthält.

## Instanz-Methoden

- [`CSSFontFeatureValuesMap.clear()`](/de/docs/Web/API/CSSFontFeatureValuesMap/clear)
  - : Entfernt alle Deklarationen im `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.delete()`](/de/docs/Web/API/CSSFontFeatureValuesMap/delete)
  - : Entfernt die CSS-Deklaration mit der angegebenen Eigenschaft im `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.entries()`](/de/docs/Web/API/CSSFontFeatureValuesMap/entries)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[Schlüssel, Wert]`-Paare für jede Deklaration in diesem `CSSFontFeatureValuesMap` in Einfüge-Reihenfolge enthält.
- [`CSSFontFeatureValuesMap.forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in diesem `CSSFontFeatureValuesMap` in Einfüge-Reihenfolge aus.
- [`CSSFontFeatureValuesMap.get()`](/de/docs/Web/API/CSSFontFeatureValuesMap/get)
  - : Gibt den Wert zurück, der dem Schlüssel in diesem `CSSFontFeatureValuesMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- [`CSSFontFeatureValuesMap.has()`](/de/docs/Web/API/CSSFontFeatureValuesMap/has)
  - : Gibt einen Boolean zurück, der anzeigt, ob ein Eintrag mit dem angegebenen Schlüssel in diesem `CSSFontFeatureValuesMap` existiert oder nicht.
- [`CSSFontFeatureValuesMap.keys()`](/de/docs/Web/API/CSSFontFeatureValuesMap/keys)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `Schlüssel` für jede Deklaration in diesem `CSSFontFeatureValuesMap` in Einfüge-Reihenfolge enthält.
- [`CSSFontFeatureValuesMap.set()`](/de/docs/Web/API/CSSFontFeatureValuesMap/set)
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu diesem `CSSFontFeatureValuesMap` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- [`CSSFontFeatureValuesMap.values()`](/de/docs/Web/API/CSSFontFeatureValuesMap/values)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `Wert` für jede Deklaration in diesem `CSSFontFeatureValuesMap` in Einfüge-Reihenfolge enthält.
- [`CSSFontFeatureValuesMap.[Symbol.iterator]()`](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies erlaubt es, dass Iterator-Objekte auch durchlaufbar sind.

## Beispiele

### Benutzerdefinierte Namen protokollieren

Dieses Beispiel zeigt, wie Sie die benutzerdefinierten Namen (und deren zugeordnete Indizes), die in einem `CSSFontFeatureValuesMap` gespeichert sind, protokollieren können (für bestimmte `CSSFontFeatureValuesRule`-Eigenschaften).

#### CSS

Zuerst deklarieren wir ein {{cssxref("@font-feature-values")}} für die Schriftfamilie _Font One_.
Dies beinhaltet die Deklaration der Namen "nice-style" und "odd-style", die verwendet werden können, um die `styleset`-alternativen Glyphen für _Font One_ zu repräsentieren und die Indexwerte für diese Alternativen zu spezifizieren.
Es beinhaltet auch die Deklaration des Namens "swishy", der verwendet werden kann, um die `swash`-alternativen Glyphen für _Font One_ zu repräsentieren und den Index für diese Alternative zu spezifizieren.

Die "nice-style"-alternativen Glyphen werden dann für jede `.nice-look`-Klasse angewendet, indem die {{CSSXRef("font-variant-alternates")}}-Eigenschaft verwendet wird und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset)-Funktion übergeben wird.
Dieselbe Vorgehensweise gilt für den Namen "swishy" für die `swash`-alternativen Glyphen, die dann an die [`swash()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#swash)-Funktion übergeben wird.
Die "odd-style"-Glyphen werden nicht verwendet (sie werden nur hinzugefügt, um zu demonstrieren, dass mehrere Werte in der Karte definiert sein können).

```css
/* At-rule for "nice-style", "odd-style", and "swishy" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12; /* name used to represent the alternate set of glyphs at index 12 */
    odd-style: 10; /* name used to represent the alternate set of glyphs at index 10 */
  }
  @swash {
    swishy: 1; /* name used to represent the alternate set of glyphs at index 1 */
  }
}

/* Apply the at-rules to the appropriate selectors */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
.swoosh {
  font-variant-alternates: swash(swishy);
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der untenstehende Code findet die entsprechende `CSSFontFeatureValuesRule` für die oben hinzugefügte CSS-`@font-feature-values`-Regel.
Dann iteriert er die Werte der `styleset`- und `swash`-Eigenschaften, die durch `CSSFontFeatureValuesMap`-Instanzen repräsentiert werden, unter Verwendung der [`forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach)-Methode.
In jedem Schritt protokolliert er die benutzerdefinierten Namen und Indexwerte.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const rules = document.querySelector("#css-output").sheet.cssRules;
const fontOne = rules[0]; // A CSSFontFeatureValuesRule
if (fontOne.styleset) {
  // styleset property is supported
  log(
    "The user has defined the following name(s)/index(s) for CSSFontFeatureValuesRule.styleset:",
  );
  fontOne.styleset.forEach((value, key) => log(` ${key} : ${value}`));
} else {
  log("Browser does not support CSSFontFeatureValuesMap.styleset property.");
}

if (fontOne.swash) {
  log(
    "The user has defined the following name(s)/index(s) for CSSFontFeatureValuesRule.swash:",
  );
  fontOne.swash.forEach((value, key) => log(` ${key} : ${value}`));
} else {
  log("Browser does not support CSSFontFeatureValuesMap.swash property.");
}
```

#### Ergebnis

{{EmbedLiveSample("Logging user-defined names", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-feature-values")}}
