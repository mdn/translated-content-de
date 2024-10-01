---
title: overflow-y
slug: Web/CSS/overflow-y
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die oberen und unteren Ränder eines Block-Elementes überläuft. Dies kann nichts sein, eine Scrollleiste oder der Überlaufinhalt. Diese Eigenschaft kann auch mithilfe der [`overflow`](/de/docs/Web/CSS/overflow)-Kurzform-Eigenschaft festgelegt werden.

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

Die Eigenschaft `overflow-y` wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-x")}} auf `hidden`, `scroll` oder `auto` eingestellt ist und die Eigenschaft `overflow-y` `visible` (Standardwert) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufinhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements an den oberen und unteren Rändern sichtbar sein. Das Element ist keine {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufinhalt wird abgeschnitten, wenn erforderlich, um vertikal in den Padding-Bereich der Elemente zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufinhalt wird am _Überlauf-Ausschnittsrand_ des Elements abgeschnitten, der mithilfe der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Dadurch überschreitet der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip`-Schlüsselwort alle Arten des Scrollens, einschließlich des programmatischen Scrollens, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufinhalt wird abgeschnitten, wenn erforderlich, um vertikal im Padding-Bereich des Elements zu passen. Browser zeigen Scrollleisten in der vertikalen Richtung unabhängig davon an, ob Inhalt tatsächlich abgeschnitten wird oder nicht. (Dies verhindert, dass Scrollleisten beim Ändern des Inhalts ein- oder ausgeblendet werden.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufinhalt wird im Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft, wodurch Scrollleisten standardmäßig ausgeblendet werden. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es wie `visible` aus, jedoch wird dennoch ein neuer Block-Formatierungskontext erstellt.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Festlegen des overflow-y-Verhaltens

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
- [CSS-Grundlagen: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
