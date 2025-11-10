---
title: CSS-Custom Properties für kaskadierende Variablen
short-title: Custom Properties für kaskadierende Variablen
slug: Web/CSS/Guides/Cascading_variables
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Custom Properties-Modul für kaskadierende Variablen** fügt Unterstützung für kaskadierende Variablen in CSS-Eigenschaften hinzu und ermöglicht es, benutzerdefinierte Eigenschaften zu erstellen, um diese Variablen zusammen mit den Mechanismen zur Verwendung benutzerdefinierter Eigenschaften als Werte für andere CSS-Eigenschaften zu definieren.

Bei der Arbeit mit CSS verwenden Sie oft wiederkehrende, projektspezifische Werte, wie Breiten, die gut zu Ihrem Layout passen, oder eine Reihe von Farben für Ihr Farbschema.
Eine Möglichkeit, Wiederholungen in Stylesheets zu verwalten, besteht darin, einen Wert einmal zu definieren und ihn an vielen anderen Stellen zu verwenden.
Custom Properties ermöglichen es Ihnen, benutzerdefinierte Variablen zu erstellen und zu definieren, die wiederverwendet werden können, wodurch komplexe oder sich wiederholende Regeln vereinfacht und leichter lesbar und wartbar werden.
Zum Beispiel sind `--dark-grey-text` und `--dark-background` leichter zu verstehen als Hexadezimalfarben wie `#323831`, und der Kontext, in dem Sie sie verwenden, ist ebenfalls offensichtlicher.

## Custom Properties in Aktion

Um zu sehen, wie Custom Properties verwendet werden können, bewegen Sie den Eingaberegler von links nach rechts.

```html hidden
<div class="container">
  <div id="color-1">--hue</div>
  <div id="color-2">--hue + 10</div>
  <div id="color-3">--hue + 20</div>
  <div id="color-4">--hue + 30</div>
  <div id="color-5">--hue + 40</div>
  <div id="color-6">--hue + 50</div>
  <div id="color-7">--hue + 60</div>
  <div id="color-8">--hue + 70</div>
</div>
<input type="range" min="0" max="360" value="0" step="0.1" id="hue" />
```

```js hidden
const hue = document.querySelector("#hue");

const updateHue = () => {
  document.documentElement.style.setProperty("--hue", hue.value);
};

hue.addEventListener("input", updateHue);
```

```css hidden
.container {
  display: grid;
  font-family: sans-serif;
  color: white;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1rem;
}
.container div {
  border-radius: 0.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  margin: 0;
}

:root {
  --hue: 0;
}

#color-1 {
  background-color: hsl(var(--hue) 50% 50%);
}
#color-2 {
  background-color: hsl(calc(var(--hue) + 10) 50% 50%);
}
#color-3 {
  background-color: hsl(calc(var(--hue) + 20) 50% 50%);
}
#color-4 {
  background-color: hsl(calc(var(--hue) + 30) 50% 50%);
}
#color-5 {
  background-color: hsl(calc(var(--hue) + 40) 50% 50%);
}
#color-6 {
  background-color: hsl(calc(var(--hue) + 50) 50% 50%);
}
#color-7 {
  background-color: hsl(calc(var(--hue) + 60) 50% 50%);
}
#color-8 {
  background-color: hsl(calc(var(--hue) + 70) 50% 50%);
}
```

{{EmbedLiveSample("Custom Properties in Aktion",600,160)}}

Bei diesen Farbfeldern ist die {{cssxref("background-color")}} mithilfe der {{cssxref("color_value/hsl", "hsl()")}}-{{cssxref("&lt;color&gt;")}}-Funktion als `hsl(var(--hue) 50% 50%)` gesetzt.
Jedes Farbfeld erhöht den {{cssxref("hue")}}-Wert um 10 Grad, wie `calc(var(--hue) + 10)`, `calc(var(--hue) + 20)` usw.
Wenn sich der Reglerwert von 0 bis 360 ändert, wird der Wert der `--hue` [Custom Property](/de/docs/Web/CSS/Reference/Properties/--*) mithilfe von {{cssxref("calc")}} aktualisiert, und die Hintergrundfarbe jedes Kästchens im Raster wird ebenfalls aktualisiert.

## Referenz

### Eigenschaften

- {{cssxref("--*")}}

### Funktionen

- {{cssxref("var")}}

## Leitfäden

- [CSS-Custom Properties (Variablen) verwenden](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
  - : Erklärt, wie man Custom Properties in CSS und JavaScript verwendet, mit Hinweisen zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.

- [Ungültige Custom Properties](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties)
  - : Erklärt, wie Browser mit Eigenschaftswerten umgehen, wenn der Wert einer benutzerdefinierten Eigenschaft ein ungültiger Datentyp für diese Eigenschaft ist.

## Verwandte Konzepte

- [CSS Properties und Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
  - [`@property`](/de/docs/Web/CSS/Reference/At-rules/@property) At-Regel
  - [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS `env()`](/de/docs/Web/CSS/Reference/Values/env) Funktion
- [CSS `calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) Methode
