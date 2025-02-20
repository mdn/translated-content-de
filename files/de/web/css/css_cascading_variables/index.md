---
title: CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen
slug: Web/CSS/CSS_cascading_variables
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Das Modul **CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen** fügt Unterstützung für kaskadierende Variablen in CSS-Eigenschaften hinzu und ermöglicht es Ihnen, benutzerdefinierte Eigenschaften zu erstellen, um diese Variablen zu definieren, sowie Mechanismen bereitzustellen, um benutzerdefinierte Eigenschaften als Werte für andere CSS-Eigenschaften zu verwenden.

Wenn Sie mit CSS arbeiten, verwenden Sie oft projektbezogene Werte wieder, wie z. B. Breiten, die gut mit Ihrem Layout funktionieren, oder eine Reihe von Farben für Ihr Farbschema. Eine Möglichkeit, Wiederholungen in Stylesheets zu verwalten, besteht darin, einen Wert einmal zu definieren und ihn an vielen Stellen wiederzuverwenden. Benutzerdefinierte Eigenschaften ermöglichen es Ihnen, benutzerdefinierte Variablen zu erstellen und zu definieren, die wiederverwendet werden können. Dies vereinfacht komplexe oder sich wiederholende Regeln und macht sie leichter lesbar und wartbar. Zum Beispiel sind `--dark-grey-text` und `--dark-background` leichter zu verstehen als hexadezimale Farben wie `#323831`, und der Kontext, wie Sie sie verwenden, ist auch offensichtlicher.

## Benutzerdefinierte Eigenschaften in Aktion

Um zu sehen, wie benutzerdefinierte Eigenschaften verwendet werden können, bewegen Sie den Eingaberegler von links nach rechts.

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

{{EmbedLiveSample("Custom properties in action",600,160)}}

In diesen Farbmustern wird die {{cssxref("background-color")}} mit der {{cssxref("color_value/hsl", "hsl()")}}-{{cssxref("&lt;color&gt;")}}-Funktion als `hsl(var(--hue) 50% 50%)` festgelegt. Jedes Farbmuster erhöht den {{cssxref("hue")}}-Wert um 10 Grad, wie `calc(var(--hue) + 10)`, `calc(var(--hue) + 20)` usw. Wenn der Wert des Schiebereglers von 0 auf 360 geändert wird, wird der Wert der `--hue`-[benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) mit {{cssxref("calc")}} aktualisiert, und die Hintergrundfarbe jeder Box im Raster wird ebenfalls aktualisiert.

## Referenz

### Eigenschaften

- {{cssxref("--*")}}

### Funktionen

- {{cssxref("var")}}

## Leitfäden

- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)

  - : Erklärt, wie benutzerdefinierte Eigenschaften in CSS und JavaScript verwendet werden, mit Tipps zum Umgang mit undefinierten und ungültigen Werten, Fallbacks und Vererbung.

- [Ungültige benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties)
  - : Erklärt, wie Browser mit Eigenschaftswerten umgehen, wenn der Wert einer benutzerdefinierten Eigenschaft ein ungültiger Datentyp für diese Eigenschaft ist.

## Verwandte Konzepte

- [CSS Properties and Values API](/de/docs/Web/CSS/CSS_properties_and_values_API)-Modul
  - [`@property`](/de/docs/Web/CSS/@property)-Regel
  - [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS `env()`](/de/docs/Web/CSS/env)-Funktion
- [CSS `calc()`](/de/docs/Web/CSS/calc)-Funktion
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode
