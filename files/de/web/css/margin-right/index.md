---
title: margin-right
slug: Web/CSS/margin-right
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`margin-right`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der rechten Seite eines Elements fest. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher rückt.

{{EmbedInteractiveExample("pages/css/margin-right.html")}}

Die vertikalen Ränder von zwei benachbarten Boxen können verschmelzen. Dies wird als [_margin collapsing_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet.

## Syntax

```css
/* <length> values */
margin-right: 20px; /* An absolute length */
margin-right: 1em; /* relative to the text size */
margin-right: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-right: auto;

/* Global values */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: revert-layer;
margin-right: unset;
```

Die `margin-right` Eigenschaft wird als das Schlüsselwort `auto`, oder eine `<length>`, oder ein `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randes als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`

  - : Der rechte Rand erhält einen Anteil des nicht genutzten horizontalen Raums, der hauptsächlich durch den verwendeten Layout-Modus bestimmt wird. Wenn sowohl `margin-left` als auch `margin-right` auf `auto` gesetzt sind, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem
            Fall wird der Wert so gesetzt, dass das Element innerhalb seines
            übergeordneten Elements zentriert wird.
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
            Interne <code>table-*</code> Elemente haben keine Ränder, verwenden Sie
            {{ cssxref("border-spacing") }} stattdessen
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
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem
            Fall wird der Wert so gesetzt, dass der Randbereich innerhalb der
            verfügbaren <code>width</code> zentriert wird, wenn festgelegt.
          </td>
          <td>Absolut positionierter Layout-Modus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>beliebig</em></th>
          <th><em>beliebig</em></th>
          <td>
            <code>0</code>, außer wenn horizontaler freier Raum vorhanden ist.
            In diesem Fall wird er gleichmäßig auf alle horizontalen
            <code>auto</code> Ränder verteilt.
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

### Rechten Rand mit Pixeln und Prozentsätzen festlegen

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
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
