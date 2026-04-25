---
title: "`overflow-y` CSS property"
short-title: overflow-y
slug: Web/CSS/Reference/Properties/overflow-y
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overflow-y`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die oberen und unteren Ränder eines Block-Elements überläuft. Dies kann nichts, ein Scrollbalken oder der Überlaufinhalt sein. Diese Eigenschaft kann auch durch die Verwendung der {{cssxref("overflow")}} Kurzschreibweise festgelegt werden.

{{InteractiveExample("CSS Demo: overflow-y")}}

```css interactive-example-choice
overflow-y: visible;
```

```css interactive-example-choice
overflow-y: hidden;
```

```css interactive-example-choice
overflow-y: clip;
```

```css interactive-example-choice
overflow-y: scroll;
```

```css interactive-example-choice
overflow-y: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* Global values */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

Die `overflow-y`-Eigenschaft wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-x")}} auf `hidden`, `scroll` oder `auto` gesetzt ist und die `overflow-y`-Eigenschaft auf `visible` (Standard) gesetzt ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Polsterungsbereichs des Elements an den oberen und unteren Rändern sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "scroll container")}}.
- `hidden`
  - : Überlaufender Inhalt wird, wenn nötig, vertikal in den Polsterungsbereich des Elements abgeschnitten. Es werden keine Scrollbalken bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, der mit der {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Polsterungsbereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip` Schlüsselwort jegliches Scrollen, einschließlich programmatischem Scrollen, verbietet. Es wird kein neues Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird, wenn nötig, vertikal in den Polsterungsbereich des Elements abgeschnitten. Browser zeigen Scrollbalken in der vertikalen Richtung an, unabhängig davon, ob Inhalte tatsächlich abgeschnitten werden. (Dies verhindert, dass Scrollbalken erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können weiterhin überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Polsterungsbereich des Elements abgeschnitten, und überlaufender Inhalt kann in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollbalken _nur wenn_ der Inhalt überläuft, standardmäßig werden keine Scrollbalken angezeigt. Wenn der Inhalt in den Polsterungsbereich des Elements passt, sieht es aus wie mit `visible`, aber es wird dennoch ein neuer Block-Formatierungskontext erstellt.

> [!NOTE]
> Das Schlüsselwort `overlay` ist ein veralteter Wert alias für `auto`. Mit `overlay` werden Scrollbalken über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhalten von overflow-y festlegen

#### HTML

```html
<ul>
  <li>
    <code>overflow-y:hidden</code> — hides the text outside the box
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code> — always adds a scrollbar
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code> — displays the text outside the box if
    needed
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code> — equivalent to <code>scroll</code>
    on most browsers
    <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_overflow-y_behavior", "100%", "780")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
