---
title: "Element: checkVisibility()-Methode"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`checkVisibility()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces prüft, ob das Element sichtbar ist.

Die Methode gibt `false` in einem der folgenden Fälle zurück:

- Das Element hat keinen zugeordneten Box, zum Beispiel weil die CSS-Eigenschaft {{cssxref("display")}} auf [`none`](/de/docs/Web/CSS/display#none) oder [`contents`](/de/docs/Web/CSS/display#contents) gesetzt ist.
- Das Element wird nicht gerendert, weil dieses Element oder ein übergeordnetes Element die Eigenschaft {{cssxref("content-visibility")}} auf [`hidden`](/de/docs/Web/CSS/content-visibility#hidden) setzt.

Der optionale Parameter ermöglicht zusätzliche Überprüfungen, um andere Definitionen von "sichtbar" zu testen.
Zum Beispiel kann weiter geprüft werden, ob ein Element eine Opazität von `0` hat, ob der Wert der [`visibility`](/de/docs/Web/CSS/visibility)-Eigenschaft des Elements es unsichtbar macht oder ob die Eigenschaft {{cssxref("content-visibility")}} des Elements den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat und das Rendering derzeit übersprungen wird.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das zusätzliche Prüfungen angibt.
    Die möglichen Optionen sind:

    - `contentVisibilityAuto`
      - : `true`, um zu prüfen, ob die {{cssxref("content-visibility")}}-Eigenschaft des Elements den Wert [`auto`](/de/docs/Web/CSS/content-visibility#auto) hat (oder erbt) und das Rendering derzeit überspringt.
        Standardmäßig `false`.
    - `opacityProperty`
      - : `true`, um zu prüfen, ob die {{cssxref("opacity")}}-Eigenschaft des Elements (oder erbt) einen Wert von `0` hat.
        Standardmäßig `false`.
    - `visibilityProperty`

      - : `true`, um zu prüfen, ob das Element aufgrund der {{cssxref("visibility")}}-Eigenschaft unsichtbar ist.
        Standardmäßig `false`.

        > [!NOTE]
        > Unsichtbare Elemente schließen solche ein, die [`visibility: hidden`](/de/docs/Web/CSS/visibility#hidden) haben, und einige Elementtypen, die [`visibility: collapse`](/de/docs/Web/CSS/visibility#collapse) haben.

    - `checkOpacity`
      - : Ein historisches Alias für [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Ein historisches Alias für [`visibilityProperty`](#visibilityproperty).

### Rückgabewert

`false`, wenn eine der folgenden Bedingungen erfüllt ist, andernfalls `true`:

- Das Element hat keinen zugeordneten Box.
- Die {{cssxref("content-visibility")}}-Eigenschaft des Elements hat (oder erbt) einen Wert von [`hidden`](/de/docs/Web/CSS/visibility#hidden).
- `opacityProperty` (oder `checkOpacity`) ist `true` und die {{cssxref("opacity")}}-Eigenschaft des Elements hat (oder erbt) einen Wert von `0`.
- `visibilityProperty` (oder `checkVisibilityCSS`) ist `true` und das Element ist aufgrund der {{cssxref("visibility")}}-Eigenschaft unsichtbar.
- `contentVisibilityAuto` ist `true`, die {{cssxref("content-visibility")}}-Eigenschaft hat (oder erbt) einen Wert von [`auto`](/de/docs/Web/CSS/content-visibility#auto), und das Rendering des Elements wird übersprungen.

## Beispiele

### Prüfung von checkVisibility() mit unterschiedlichen CSS

Das folgende Beispiel ermöglicht es Ihnen zu testen, wie sich das Ergebnis von `checkVisibility()` mit unterschiedlichen Werten für die CSS-Eigenschaften `display`, `content-visibility`, `visibility` und `opacity` ändern könnte.

#### HTML

Das HTML definiert ein `<select>`-Element für die CSS-Eigenschaften, die die Ergebnisse von `checkVisibility()` beeinflussen.
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

Danach haben wir ein `<pre>`, das verwendet wird, um das Ergebnis der `checkVisibility()`-Prüfung auszugeben, wenn keine Optionen im Parameter übergeben werden, und für jeden einzelnen Optionswert.
Am Ende haben wir das Element, das getestet wird (auf das wir die ausgewählten CSS-Eigenschaftswerte anwenden).

```html
<pre id="output_result"></pre>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

Das CSS hebt einfach das zu testende Element hervor.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

Der Code unten ruft jedes der `<select>`-Elemente ab.
Die `updateCSS()`-Methode wird beim Start und immer dann aufgerufen, wenn die Auswahl der Elemente sich ändert, um das ausgewählte CSS auf das Ziel-Element anzuwenden.

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
Wenn Sie die Auswahl ändern, werden die Ergebnisse auf das Testelement (blauer Umriss) angewendet und die Ergebnisse der `checkVisibility()`-Prüfung für jede Einstellung sollten angezeigt werden.
Zum Beispiel, wenn Sie `opacity: 0` einstellen, sollte dieser Test (nur) `false` anzeigen.
Wenn Sie jedoch `display: none` einstellen, sollten alle Tests `false` zurückgeben.

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
