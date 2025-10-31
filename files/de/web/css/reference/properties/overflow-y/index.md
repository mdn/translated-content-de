---
title: overflow-y
slug: Web/CSS/Reference/Properties/overflow-y
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overflow-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die oberen und unteren Kanten eines Block-Elements überläuft. Dies kann nichts sein, eine Bildlaufleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch durch die Verwendung der [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow) Kurzschreibweise gesetzt werden.

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

Die Eigenschaft `overflow-y` wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-x")}} `hidden`, `scroll` oder `auto` ist und die Eigenschaft `overflow-y` `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements an den oberen und unteren Kanten sichtbar sein. Das Element ist keine {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird bei Bedarf so abgeschnitten, dass er vertikal in den Innenabstand des Elements passt. Es werden keine Bildlaufleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, das mithilfe der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) definiert ist. Infolgedessen überfließt der Inhalt die Innenabstands-Box des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` ist, dass das Schlüsselwort `clip` auch alle Bildläufe, einschließlich programmatischen Bildlauf, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird bei Bedarf so abgeschnitten, dass er vertikal in den Innenabstand des Elements passt. Browser zeigen Bildlaufleisten in vertikaler Richtung an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird. (Dies verhindert, dass Bildlaufleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können jedoch weiterhin überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird an der Innenabstands-Box des Elements abgeschnitten, und der überlaufende Inhalt kann in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Bildlaufleisten _nur an_, wenn der Inhalt überläuft, und blenden die Bildlaufleisten standardmäßig aus. Wenn der Inhalt in die Innenabstands-Box des Elements passt, sieht es aus wie bei `visible`, aber es wird trotzdem ein neuer Blockformatierungskontext erstellt.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wert alias für `auto`. Mit `overlay` werden die Bildlaufleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [Lernen: Überquellender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
