---
title: CSSFontFeatureValuesMap
slug: Web/API/CSSFontFeatureValuesMap
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesMap`**-Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) stellt eine durchlaufbare und schreibgeschützte Menge von [CSSFontFeatureValuesRule](/de/docs/Web/API/CSSFontFeatureValuesRule)-Eigenschaften dar, wie zum Beispiel [`swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash), [`annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation), [`ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments) usw.

Eine Instanz von `CSSFontFeatureValuesMap` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel der benutzerdefinierte Name ist, der verwendet wird, um auf eine Schriftartfunktion zu verweisen, und der entsprechende Wert der Index für die Schriftartfunktion innerhalb der Schriftart ist.

## Instanzeigenschaft

- [`CSSFontFeatureValuesMap.size`](/de/docs/Web/API/CSSFontFeatureValuesMap/size)
  - : Gibt eine positive Ganzzahl zurück, die die Größe des `CSSFontFeatureValuesMap`-Objekts enthält.

## Instanzmethoden

- [`CSSFontFeatureValuesMap.clear()`](/de/docs/Web/API/CSSFontFeatureValuesMap/clear)
  - : Entfernt alle Deklarationen in der `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.delete()`](/de/docs/Web/API/CSSFontFeatureValuesMap/delete)
  - : Entfernt die CSS-Deklaration mit der angegebenen Eigenschaft in der `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.entries()`](/de/docs/Web/API/CSSFontFeatureValuesMap/entries)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[key, value]`-Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge enthält.
- [`CSSFontFeatureValuesMap.forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro Schlüssel/Werte-Paar in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge aus.
- [`CSSFontFeatureValuesMap.get()`](/de/docs/Web/API/CSSFontFeatureValuesMap/get)
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `CSSFontFeatureValuesMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- [`CSSFontFeatureValuesMap.has()`](/de/docs/Web/API/CSSFontFeatureValuesMap/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `CSSFontFeatureValuesMap` existiert oder nicht.
- [`CSSFontFeatureValuesMap.keys()`](/de/docs/Web/API/CSSFontFeatureValuesMap/keys)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `key` für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge enthält.
- [`CSSFontFeatureValuesMap.set()`](/de/docs/Web/API/CSSFontFeatureValuesMap/set)
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `CSSFontFeatureValuesMap` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- [`CSSFontFeatureValuesMap.values()`](/de/docs/Web/API/CSSFontFeatureValuesMap/values)
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `value` für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügereihenfolge enthält.
- [`CSSFontFeatureValuesMap.[Symbol.iterator]()`](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht es, dass Iterator-Objekte auch durchlaufbar sind.

## Beispiele

### Benutzerdefinierte Namen protokollieren

Dieses Beispiel zeigt, wie Sie die benutzerdefinierten Namen (und ihre zugeordneten Indizes) protokollieren können, die in einer `CSSFontFeatureValuesMap` gespeichert sind (für bestimmte `CSSFontFeatureValuesRule`-Eigenschaften).

#### CSS

Zuerst deklarieren wir ein {{cssxref("@font-feature-values")}} für die Schriftfamilie _Font One_.
Dies beinhaltet die Deklaration der Namen "nice-style" und "odd-style", die verwendet werden können, um die `styleset`-alternativen Glyphen für _Font One_ zu repräsentieren und die Indexwerte für diese Alternativen festzulegen.
Es beinhaltet auch die Deklaration des Namens "swishy", der verwendet werden kann, um die `swash`-alternativen Glyphen für _Font One_ zu repräsentieren und den Index für diese Alternative festzulegen.

Die "nice-style" alternativen Glyphen werden dann für jede `.nice-look`-Klasse angewendet, indem die Eigenschaft {{CSSXRef("font-variant-alternates")}} verwendet wird und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset)-Funktion übergeben wird.
Das Gleiche wird für den Namen "swishy" für die `swash`-alternativen Glyphen getan, die dann an die [`swash()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#swash)-Funktion übergeben wird.
Die "odd-style" Glyphen werden nicht verwendet (sie sind nur hinzugefügt, um zu demonstrieren, dass mehrere Werte in der Map definiert werden können).

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

Der folgende Code findet die entsprechende `CSSFontFeatureValuesRule` für die oben hinzugefügte CSS-`@font-feature-values`-At-Regel.
Er iteriert dann die Werte der `styleset`- und `swash`-Eigenschaften, die durch `CSSFontFeatureValuesMap`-Instanzen dargestellt werden, unter Verwendung der [`forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach)-Methode.
Bei jedem Schritt protokolliert er die benutzerdefinierten Namen und Indexwerte.

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
