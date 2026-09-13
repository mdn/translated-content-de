---
title: "`margin-right` CSS property"
short-title: margin-right
slug: Web/CSS/Reference/Properties/margin-right
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`margin-right`** legt den [Randbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) auf der rechten Seite eines Elements fest. Ein positiver Wert platziert ihn weiter von seinen Nachbarn entfernt, während ein negativer Wert ihn näher platziert.

Die vertikalen Ränder zweier angrenzender Boxen können zusammenfallen. Dies wird als [_margin collapsing_](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) bezeichnet.

{{InteractiveExample("CSS Demo: margin-right")}}

```css interactive-example-choice
margin-right: 1em;
```

```css interactive-example-choice
margin-right: 10%;
```

```css interactive-example-choice
margin-right: 10px;
```

```css interactive-example-choice
margin-right: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col"></div>
    <div class="col transition-all" id="example-element"></div>
    <div class="col"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #5b6dcd 10px;
  background-color: rgb(229 232 252 / 0.6);
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffc129;
  background-color: rgb(255 244 219 / 0.6);
}
```

## Syntax

```css
/* <length> values */
margin-right: 20px; /* An absolute length */
margin-right: 1em; /* relative to the text size */
margin-right: 5%; /* relative to the nearest block container's width */
margin-right: anchor-size(self-block);
margin-right: calc(anchor-size(--my-anchor height, 20px) / 4);

/* Keyword values */
margin-right: auto;

/* Global values */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: revert-layer;
margin-right: unset;
```

Die Eigenschaft `margin-right` wird als Schlüsselwort `auto`, als `<length>` oder als `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Rands als fester Wert.
    - Für _anchor-positioned elements_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _anchor element_ aufgelöst (siehe [Elementrand basierend auf der Anchor-Größe festlegen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Rands als Prozentsatz relativ zur Inline-Größe (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der rechte Rand erhält einen Anteil des ungenutzten horizontalen Platzes, der hauptsächlich durch den verwendeten Layout-Modus bestimmt wird. Wenn die Werte von `margin-left` und `margin-right` beide `auto` sind, wird der berechnete Platz gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert von {{cssxref("display")}}</th>
          <th scope="col">Wert von {{cssxref("float")}}</th>
          <th scope="col">Wert von {{cssxref("position")}}</th>
          <th scope="col">Berechneter Wert von <code>auto</code></th>
          <th scope="col">Kommentar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>inline</code>, <code>inline-block</code>,
            <code>inline-table</code>
          </th>
          <th><em>beliebig</em></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td><code>0</code></td>
          <td>Inline-Layout-Modus</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><em>beliebig</em></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird er auf den Wert gesetzt, der das Element innerhalb seines übergeordneten Elements zentriert.
          </td>
          <td>Block-Layout-Modus</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><code>left</code> oder <code>right</code></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td><code>0</code></td>
          <td>Block-Layout-Modus (schwebendes Element)</td>
        </tr>
        <tr>
          <th>
            <em>beliebiges </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>beliebig</em></th>
          <th><em>beliebig</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code>-Elemente haben keine Ränder; verwenden Sie stattdessen
            {{ cssxref("border-spacing") }}
          </td>
        </tr>
        <tr>
          <th>
            <em>beliebig, außer <code>flex</code>,</em> <code>inline-flex</code
            ><em> oder </em><code>table-*</code>
          </th>
          <th><em>beliebig</em></th>
          <th>
            <em><code>fixed</code></em> oder <code>absolute</code>
          </th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird er auf den Wert gesetzt, der den Randbereich innerhalb der verfügbaren
            <code>width</code> zentriert, falls diese festgelegt ist.
          </td>
          <td>Layout-Modus für absolut positionierte Elemente</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>beliebig</em></th>
          <th><em>beliebig</em></th>
          <td>
            <code>0</code>, außer wenn positiver horizontaler freier Platz vorhanden ist.
            In diesem Fall wird er gleichmäßig auf alle horizontalen
            <code>auto</code>-Ränder verteilt.
          </td>
          <td>Flexbox-Layout-Modus</td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rechten Rand mithilfe von Pixeln und Prozentangaben festlegen

```css
.content {
  margin-right: 5%;
}
.side-box {
  margin-right: 10px;
}
.logo {
  margin-right: -5px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}
- Kurzform von {{cssxref("margin")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}
- Kurzformen von {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model)-Modul
