---
title: overflow-y
slug: Web/CSS/overflow-y
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die oberen und unteren Ränder eines Block-Level-Elements überschreitet. Dies kann nichts sein, eine Scrollleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch mit der [`overflow`](/de/docs/Web/CSS/overflow) Kurzform-Eigenschaft gesetzt werden.

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

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

Die `overflow-y` Eigenschaft wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-x")}} auf `hidden`, `scroll` oder `auto` gesetzt ist und die `overflow-y` Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements an den oberen und unteren Kanten sichtbar sein. Das Element-Box ist kein [scroll container](/de/docs/Glossary/scroll_container).
- `hidden`
  - : Überlaufender Inhalt wird nötigenfalls beschnitten, um vertikal in den Padding-Bereich des Elements zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements beschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn dieser nicht gesetzt ist. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip` Schlüsselwort auch jegliches Scrollen verbietet, einschließlich programmatischem Scrollen. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext herzustellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element-Box ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird nötigenfalls beschnitten, um vertikal innerhalb des Padding-Bereichs des Elements zu passen. Browser zeigen vertikale Scrollleisten an, unabhängig davon, ob ein Inhalt tatsächlich beschnitten wird. (Dies verhindert, dass Scrollleisten beim Ändern des Inhalts erscheinen oder verschwinden.) Drucker können dennoch überlaufende Inhalte drucken.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements beschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft, und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, stellt jedoch dennoch einen neuen Block-Formatierungskontext her.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhalten von overflow-y einstellen

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
- [CSS Bausteine: Überlaufende Inhalte](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
