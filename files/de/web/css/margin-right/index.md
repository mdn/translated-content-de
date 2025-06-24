---
title: margin-right
slug: Web/CSS/margin-right
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`margin-right`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den [Margin-Bereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der rechten Seite eines Elements fest. Ein positiver Wert platziert ihn weiter von seinen Nachbarn entfernt, während ein negativer Wert ihn näher hinrückt.

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
  background-color: rgba(229, 232, 252, 0.6);
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffc129;
  background-color: rgba(255, 244, 219, 0.6);
}
```

Die vertikalen Ränder von zwei benachbarten Boxen können verschmelzen. Dies wird als [_Margin-Kollaps_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet.

## Syntax

```css
/* <length> values */
margin-right: 20px; /* An absolute length */
margin-right: 1em; /* relative to the text size */
margin-right: 5%; /* relative to the nearest block container's width */
margin-right: anchor-size(self-block);
margin-right: calc(anchor-size(--myAnchor height, 20px) / 4);

/* Keyword values */
margin-right: auto;

/* Global values */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: revert-layer;
margin-right: unset;
```

Die `margin-right`-Eigenschaft wird als das Schlüsselwort `auto`, oder eine `<length>`, oder ein `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Die Größe des Margins als fester Wert.
    - Für _ankerpositionierte Elemente_ löst sich die {{cssxref("anchor-size()")}}-Funktion auf einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ auf (siehe [Festlegen des Element-Margins basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Margins als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`

  - : Der rechte Margin erhält einen Anteil des ungenutzten Horizontalraums, der hauptsächlich durch den verwendeten Layoutmodus bestimmt wird. Sind sowohl `margin-left` als auch `margin-right` auf `auto` gesetzt, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall wird er auf den Wert gesetzt, der das Element innerhalb seines Elternteils zentriert.
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
            <em>beliebig </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>beliebig</em></th>
          <th><em>beliebig</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code>-Elemente haben keine Margins, verwenden Sie stattdessen
            {{ cssxref("border-spacing") }}
          </td>
        </tr>
        <tr>
          <th>
            <em>beliebig, außer <code>flex</code>,</em> <code>inline-flex</code
            ><em>, oder </em><code>table-*</code>
          </th>
          <th><em>beliebig</em></th>
          <th>
            <em><code>fixed</code></em> oder <code>absolute</code>
          </th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall wird er auf den Wert gesetzt, der den Randbereich innerhalb der verfügbaren
            <code>width</code> zentriert, falls fixiert.
          </td>
          <td>Absolut positionierter Layout-Modus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>beliebig</em></th>
          <th><em>beliebig</em></th>
          <td>
            <code>0</code>, außer es gibt ungenutzten positiven horizontalen Raum.
            In diesem Fall wird er gleichmäßig auf alle horizontalen
            <code>auto</code>-Margins verteilt.
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

### Rechter Margin mit Pixeln und Prozentsätzen festlegen

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

- {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin")}} Kurzform
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzformen
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
