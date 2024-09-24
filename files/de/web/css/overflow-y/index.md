---
title: overflow-y
slug: Web/CSS/overflow-y
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die oberen und unteren Kanten eines block-level Elements überläuft. Dies kann nichts sein, eine Scrollleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch durch die Verwendung der [`overflow`](/de/docs/Web/CSS/overflow) Kurzform-Eigenschaft gesetzt werden.

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* Globale Werte */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

Die Eigenschaft `overflow-y` wird als ein einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-x")}} auf `hidden`, `scroll` oder `auto` gesetzt ist und die Eigenschaft `overflow-y` auf `visible` (Standardwert) gesetzt ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstandsrahmens der Kante des Elements sichtbar sein. Das Element wird nicht als {{glossary("scroll container")}} behandelt.
- `hidden`
  - : Überlaufender Inhalt wird abgeschnitten, falls erforderlich, um vertikal in den Innenabstandsrahmen des Elements zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _Overflow-Clip-Kante_ des Elements abgeschnitten, die mit der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) definiert ist. Dadurch überläuft der Inhalt den Innenabstandsrahmen des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn dieser nicht gesetzt ist. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das Schlüsselwort `clip` auch jegliches Scrollen, einschließlich programmgesteuertem Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element wird nicht als Scroll-Container behandelt.
- `scroll`
  - : Überlaufender Inhalt wird, falls erforderlich, abgeschnitten, um vertikal in den Innenabstandsrahmen des Elements zu passen. Browser zeigen in vertikaler Richtung Scrollleisten an, unabhängig davon, ob wirklich Inhalt abgeschnitten wird. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstandsrahmen des Elements abgeschnitten, und überlaufender Inhalt kann sichtbar gemacht werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_, wenn der Inhalt überläuft, und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in den Innenabstandsrahmen des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch dennoch einen neuen Block-Formatierungskontext.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Bei `overlay` werden die Scrollleisten auf dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

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
    <code>overflow-y:hidden</code> — versteckt den Text außerhalb des Feldes
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code> — fügt immer eine Scrollleiste hinzu
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code> — zeigt den Text außerhalb des Feldes an, falls
    nötig
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code> — entspricht in den meisten Browsern <code>scroll</code>
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
- [CSS-Bausteine: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
