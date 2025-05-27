---
title: "Element: checkVisibility() Methode"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("DOM")}}

Die **`checkVisibility()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface prüft, ob das Element sichtbar ist.

Die Methode gibt in einer der folgenden Situationen `false` zurück:

- Das Element hat keine zugeordnete Box, zum Beispiel weil die CSS-Eigenschaft {{cssxref("display")}} auf [`none`](/de/docs/Web/CSS/display#none) oder [`contents`](/de/docs/Web/CSS/display#contents) gesetzt ist.
- Das Element wird nicht gerendert, weil das Element oder ein übergeordnetes Element die {{cssxref("content-visibility")}} Eigenschaft auf [`hidden`](/de/docs/Web/CSS/content-visibility#hidden) setzt.

Der optionale Parameter ermöglicht zusätzliche Prüfungen, um andere Interpretationen von "sichtbar" zu testen.
Zum Beispiel kann zusätzlich geprüft werden, ob ein Element eine Deckkraft von `0` hat, ob der Wert der Eigenschaft [`visibility`](/de/docs/Web/CSS/visibility) des Elements es unsichtbar macht oder ob die Eigenschaft {{cssxref("content-visibility")}} des Elements den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat und das Rendering derzeit übersprungen wird.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das zusätzliche Prüfungen angibt.
    Die möglichen Optionen sind:

    - `contentVisibilityAuto`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("content-visibility")}} des Elements den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat (oder erbt) und das Rendering aktuell übersprungen wird.
        Standardmäßig `false`.
    - `opacityProperty`
      - : `true`, um zu prüfen, ob die Eigenschaft {{cssxref("opacity")}} des Elements den Wert `0` hat (oder erbt).
        Standardmäßig `false`.
    - `visibilityProperty`

      - : `true`, um zu prüfen, ob das Element aufgrund des Werts seiner {{cssxref("visibility")}} Eigenschaft unsichtbar ist.
        Standardmäßig `false`.

        > [!NOTE]
        > Unsichtbare Elemente schließen jene ein, die die Eigenschaft [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden) haben, und einige Elementtypen, die [`visibility: collapse`](/de/docs/Web/CSS/visibility#collapse) haben.

    - `checkOpacity`
      - : Ein historisches Alias für [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Ein historisches Alias für [`visibilityProperty`](#visibilityproperty).

### Rückgabewert

`false`, wenn eine der folgenden Bedingungen erfüllt ist, ansonsten `true`:

- Das Element hat keine zugeordnete Box.
- Die Eigenschaft {{cssxref("content-visibility")}} des Elements hat (oder erbt) den Wert [`hidden`](/de/docs/Web/CSS/visibility#hidden).
- `opacityProperty` (oder `checkOpacity`) ist `true` und die Eigenschaft {{cssxref("opacity")}} des Elements hat (oder erbt) den Wert `0`.
- `visibilityProperty` (oder `checkVisibilityCSS`) ist `true` und das Element ist aufgrund des Wertes seiner {{cssxref("visibility")}} Eigenschaft unsichtbar.
- `contentVisibilityAuto` ist `true`, die {{cssxref("content-visibility")}} Eigenschaft hat (oder erbt) den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto), und das Rendering des Elements wird übersprungen.

## Beispiele

### Testen von checkVisibility() mit unterschiedlichen CSS

Das folgende Beispiel ermöglicht es Ihnen zu testen, wie sich das Ergebnis von `checkVisibility()` mit unterschiedlichen Werten für die CSS-Eigenschaften `display`, `content-visibility`, `visibility` und `opacity` ändern kann.

#### HTML

Das HTML definiert ein `<select>` Element für die CSS-Eigenschaften, die die Ergebnisse von `checkVisibility()` beeinflussen.
Die ersten (standardmäßig ausgewählten) Werte sollten dazu führen, dass `checkVisibility()` `true` zurückgibt, wenn sie auf ein Element angewendet werden, während die anderen Werte die Sichtbarkeit beeinflussen.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="content">display: content</option>
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

Danach haben wir ein `<pre>`, das verwendet wird, um das Ergebnis des `checkVisibility()` Checks auszugeben, wenn keine Optionen im Parameter übergeben werden, und für jeden separaten Optionswert.
Am Ende haben wir das Element, das getestet wird (auf das wir die ausgewählten CSS-Eigenschaftenwerte anwenden werden).

```html
<pre id="output_result"></pre>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

Das CSS hebt lediglich das zu testende Element hervor.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

Der untenstehende Code erfasst jedes der `<select>` Elemente.
Die `updateCSS()` Methode wird beim Start und immer dann aufgerufen, wenn sich die Auswahl der Elemente ändert, um das ausgewählte CSS auf das Ziel-Element anzuwenden.

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

Die Ergebnisse werden unten angezeigt.
Wenn Sie die Auswahl ändern, werden die Ergebnisse auf das Test-Element (blauer Umriss) angewendet und die Ergebnisse des `checkVisibility()` für jede Einstellung sollten angezeigt werden.
Wenn Sie zum Beispiel `opacity: 0` einstellen, sollte dieser Test (nur) `false` angeben.
Wenn Sie jedoch `display: none` einstellen, sollten alle Tests `false` zurückgeben.

{{ EmbedLiveSample('Test checkVisibility() mit verschiedenen CSS', "100%", "200" ) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
