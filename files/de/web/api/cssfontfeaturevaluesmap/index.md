---
title: CSSFontFeatureValuesMap
slug: Web/API/CSSFontFeatureValuesMap
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSFontFeatureValuesMap`** Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine iterierbare und schreibgeschützte Menge von [CSSFontFeatureValuesRule](/de/docs/Web/API/CSSFontFeatureValuesRule) Eigenschaften, wie zum Beispiel [`swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash), [`annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation), [`ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments) und andere.

Eine `CSSFontFeatureValuesMap` Instanz ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel der benutzerdefinierte Name ist, der verwendet wird, um auf eine Schrifteigenschaft zu verweisen, und der entsprechende Wert ist der Index für die Schrifteigenschaft innerhalb der Schriftart.

## Instanz-Eigenschaften

- [`CSSFontFeatureValuesMap.size`](/de/docs/Web/API/CSSFontFeatureValuesMap/size) {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Größe des `CSSFontFeatureValuesMap` Objekts enthält.

## Instanz-Methoden

- [`CSSFontFeatureValuesMap.clear()`](/de/docs/Web/API/CSSFontFeatureValuesMap/clear) {{experimental_inline}}
  - : Entfernt alle Deklarationen in der `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.delete()`](/de/docs/Web/API/CSSFontFeatureValuesMap/delete) {{experimental_inline}}
  - : Entfernt die CSS-Deklaration mit der angegebenen Eigenschaft in der `CSSFontFeatureValuesMap`.
- [`CSSFontFeatureValuesMap.entries()`](/de/docs/Web/API/CSSFontFeatureValuesMap/entries) {{experimental_inline}}
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das die `[key, value]` Paare für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügungsreihenfolge enthält.
- [`CSSFontFeatureValuesMap.forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach) {{experimental_inline}}
  - : Führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser `CSSFontFeatureValuesMap` in Einfügungsreihenfolge aus.
- [`CSSFontFeatureValuesMap.get()`](/de/docs/Web/API/CSSFontFeatureValuesMap/get) {{experimental_inline}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `CSSFontFeatureValuesMap` entspricht, oder `undefined`, wenn keiner vorhanden ist.
- [`CSSFontFeatureValuesMap.has()`](/de/docs/Web/API/CSSFontFeatureValuesMap/has) {{experimental_inline}}
  - : Gibt einen boolean zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `CSSFontFeatureValuesMap` existiert oder nicht.
- [`CSSFontFeatureValuesMap.keys()`](/de/docs/Web/API/CSSFontFeatureValuesMap/keys) {{experimental_inline}}
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `key` für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügungsreihenfolge enthält.
- [`CSSFontFeatureValuesMap.set()`](/de/docs/Web/API/CSSFontFeatureValuesMap/set) {{experimental_inline}}
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `CSSFontFeatureValuesMap` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- [`CSSFontFeatureValuesMap.values()`](/de/docs/Web/API/CSSFontFeatureValuesMap/values) {{experimental_inline}}
  - : Gibt ein neues [Map-Iterator-Objekt](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) zurück, das den `value` für jede Deklaration in dieser `CSSFontFeatureValuesMap` in Einfügungsreihenfolge enthält.
- [`CSSFontFeatureValuesMap.[Symbol.iterator]()`](/de/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)
  - : Gibt das Iterator-Objekt selbst zurück. Dies ermöglicht, dass auch Iterator-Objekte iterierbar sind.

## Beispiele

### Benutzerdefinierte Namen protokollieren

Dieses Beispiel zeigt, wie Sie die benutzerdefinierten Namen (und deren zugeordneten Index) protokollieren können, die in einer `CSSFontFeatureValuesMap` gespeichert sind (für bestimmte `CSSFontFeatureValuesRule` Eigenschaften).

#### CSS

Zuerst deklarieren wir ein {{cssxref("@font-feature-values")}} für die Schriftfamilie _Font One_.
Dies umfasst die Deklaration der Namen "nice-style" und "odd-style", die verwendet werden können, um die `styleset`-alternativen Glyphen für _Font One_ zu repräsentieren und die Indexwerte für diese Alternativen anzugeben.
Es umfasst auch die Deklaration des Namens "swishy", der verwendet werden kann, um die alternativen `swash` Glyphen für _Font One_ zu repräsentieren und den Index für diese Alternative anzugeben.

Die "nice-style" alternativen Glyphen werden dann für jede `.nice-look` Klasse angewendet, indem die Eigenschaft {{CSSXRef("font-variant-alternates")}} verwendet und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset) Funktion übergeben wird.
Das gleiche wird für den Namen "swishy" für die alternativen `swash` Glyphen getan, die dann an die [`swash()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#swash) Funktion übergeben werden.
Die "odd-style" Glyphen werden nicht verwendet (sie werden nur hinzugefügt, um zu zeigen, dass mehrere Werte in der Karte definiert werden können).

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

Der untenstehende Code findet die entsprechende `CSSFontFeatureValuesRule` für die oben hinzugefügte CSS `@font-feature-values` At-Regel.
Anschließend iteriert er über die Werte der Eigenschaften `styleset` und `swash`, die durch `CSSFontFeatureValuesMap` Instanzen repräsentiert werden, unter Verwendung der [`forEach()`](/de/docs/Web/API/CSSFontFeatureValuesMap/forEach) Methode.
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

{{EmbedLiveSample("Benutzerdefinierte Namen protokollieren", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-feature-values")}}
