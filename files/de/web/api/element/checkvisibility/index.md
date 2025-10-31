---
title: "Element: checkVisibility() Methode"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("DOM")}}

Die **`checkVisibility()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle überprüft, ob das Element sichtbar ist.

Die Methode gibt `false` in einer der folgenden Situationen zurück:

- Das Element hat keinen zugehörigen Kasten, zum Beispiel weil die CSS-Eigenschaft {{cssxref("display")}} auf [`none`](/de/docs/Web/CSS/Reference/Properties/display#none) oder [`contents`](/de/docs/Web/CSS/Reference/Properties/display#contents) gesetzt ist.
- Das Element wird nicht gerendert, weil das Element oder ein übergeordnetes Element die {{cssxref("content-visibility")}} Eigenschaft auf [`hidden`](/de/docs/Web/CSS/Reference/Properties/content-visibility#hidden) gesetzt hat.

Der optionale Parameter ermöglicht zusätzliche Prüfungen, um andere Interpretationen dessen, was "sichtbar" bedeutet, zu testen. Zum Beispiel können Sie weiter prüfen, ob ein Element eine Opazität von `0` hat, ob der Wert der [`visibility`](/de/docs/Web/CSS/Reference/Properties/visibility) Eigenschaft des Elements es unsichtbar macht oder ob die {{cssxref("content-visibility")}} Eigenschaft des Elements einen Wert von [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto) hat und das Rendern derzeit übersprungen wird.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzliche Prüfungen angibt, die ausgeführt werden sollen. Die möglichen Optionen sind:
    - `contentVisibilityAuto`
      - : `true`, um zu prüfen, ob die {{cssxref("content-visibility")}} Eigenschaft des Elements den Wert [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto) hat (oder erbt) und derzeit das Rendern übersprungen wird.
        Standardmäßig `false`.
    - `opacityProperty`
      - : `true`, um zu prüfen, ob die {{cssxref("opacity")}} Eigenschaft des Elements den Wert `0` hat (oder erbt).
        Standardmäßig `false`.
    - `visibilityProperty`
      - : `true`, um zu prüfen, ob das Element aufgrund des Wertes seiner {{cssxref("visibility")}} Eigenschaft unsichtbar ist.
        Standardmäßig `false`.

        > [!NOTE]
        > Unsichtbare Elemente schließen solche ein, die [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden) haben, sowie einige Elementtypen, die [`visibility: collapse`](/de/docs/Web/CSS/Reference/Properties/visibility#collapse) haben.

    - `checkOpacity`
      - : Ein historisches Alias für [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Ein historisches Alias für [`visibilityProperty`](#visibilityproperty).

### Rückgabewert

`false`, wenn eine der folgenden Bedingungen zutrifft, andernfalls `true`:

- Das Element hat keinen zugehörigen Kasten.
- Die {{cssxref("content-visibility")}} Eigenschaft des Elements hat (oder erbt) einen Wert von [`hidden`](/de/docs/Web/CSS/Reference/Properties/visibility#hidden).
- `opacityProperty` (oder `checkOpacity`) ist `true` und die {{cssxref("opacity")}} Eigenschaft des Elements hat (oder erbt) einen Wert von `0`.
- `visibilityProperty` (oder `checkVisibilityCSS`) ist `true` und das Element ist unsichtbar aufgrund des Wertes seiner {{cssxref("visibility")}} Eigenschaft.
- `contentVisibilityAuto` ist `true`, die {{cssxref("content-visibility")}} Eigenschaft hat (oder erbt) einen Wert von [`auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility#auto), und das Rendern des Elements wird übersprungen.

## Beispiele

### Testen der checkVisibility() mit unterschiedlichen CSS

Das folgende Beispiel erlaubt Ihnen zu testen, wie sich das Ergebnis von `checkVisibility()` mit unterschiedlichen Werten für die CSS-Eigenschaften `display`, `content-visibility`, `visibility` und `opacity` ändert.

#### HTML

Das HTML definiert ein `<select>` Element für die CSS-Eigenschaften, die die Ergebnisse von `checkVisibility()` beeinflussen. Die ersten (standardmäßig ausgewählten) Werte sollten dazu führen, dass `checkVisibility()` `true` zurückgibt, wenn sie auf ein Element angewendet werden, während die anderen Werte die Sichtbarkeit beeinflussen.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="contents">display: contents</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

Als nächstes haben wir ein `<pre>`, das verwendet wird, um das Ergebnis der `checkVisibility()` Überprüfung auszugeben, wenn keine Optionen im Parameter übergeben werden, und für jede separate Optionswert. Am Ende haben wir das zu testende Element, auf das wir die ausgewählten CSS-Eigenschaftswerte anwenden werden.

```html
<pre id="output_result"></pre>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

Das CSS hebt nur das zu testende Element hervor.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

Der untenstehende Code erhält jeweils die `<select>` Elemente. Die Methode `updateCSS()` wird beim Start und bei jeder Änderung der Auswahl-Elemente aufgerufen, um das ausgewählte CSS auf das Ziel-Element anzuwenden.

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const outputResult = document.getElementById("output_result");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // Apply selected CSS properties to target element
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // Call checkVisibility() on element using default and each of options
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // Output the results of the tests
  outputResult.innerText = `Checks on element below (may be hidden):
- Result of checkVisibility(): ${defaultVisibilityCheck}
- Result of checkVisibility({opacityProperty: true}): ${opacityVisibilityCheck}
- Result of checkVisibility({visibilityProperty: true}): ${cssVisibilityCheck}
- Result of checkVisibility({contentVisibilityAuto: true}): ${contentVisibilityAutoCheck}`;
}
```

#### Ergebnis

Die Ergebnisse werden unten angezeigt. Wenn Sie die Auswahl ändern, werden die Ergebnisse auf das Testelement (blauer Umriss) angewendet und die Ergebnisse der `checkVisibility()` für jede Einstellung sollten angezeigt werden. Wenn Sie zum Beispiel `opacity: 0` einstellen, sollte dieser Test (nur) `false` anzeigen. Wenn Sie jedoch `display: none` einstellen, sollten alle Tests `false` zurückgeben.

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
