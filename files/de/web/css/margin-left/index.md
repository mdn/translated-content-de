---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{CSSRef}}

Die **`margin-left`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Außenabstand](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der linken Seite eines Elements fest. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher platziert.

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

Die vertikalen Ränder von zwei benachbarten Boxen können verschmelzen. Dies wird als [_Ränder-Verschmelzung_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet.

In den seltenen Fällen, in denen die Breite überbeschränkt ist (d.h., wenn alle `width`, `margin-left`, `border`, `padding`, der Inhaltsbereich und `margin-right` definiert sind), wird `margin-left` ignoriert und hat denselben berechneten Wert, als wäre der Wert `auto` angegeben.

## Syntax

```css
/* <length> Werte */
margin-left: 10px; /* Eine absolute Länge */
margin-left: 1em; /* relativ zur Textgröße */
margin-left: 5%; /* relativ zur Breite des nächsten Blockcontainers */

/* Schlüsselwortwerte */
margin-left: auto;

/* Globale Werte */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

Die `margin-left` Eigenschaft wird als das Schlüsselwort `auto`, oder ein `<length>`, oder ein `<percentage>` angegeben. Sein Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Außenabstands als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Außenabstands als Prozentsatz, relativ zur Inline-Größe (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`

  - : Der linke Außenabstand erhält einen Anteil des ungenutzten horizontalen Raums, der hauptsächlich durch den verwendeten Layoutmodus bestimmt wird. Wenn die Werte von `margin-left` und `margin-right` beide `auto` sind, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
          <th><em>jede</em></th>
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
          <th><em>jede</em></th>
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
            <em>jede </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>jede</em></th>
          <th><em>jede</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code> Elemente haben keine Außenabstände, verwenden
            Sie stattdessen {{ cssxref("border-spacing") }}
          </td>
        </tr>
        <tr>
          <th>
            <em>jede, außer <code>flex</code>,</em> <code>inline-flex</code
            ><em>, oder </em><code>table-*</code>
          </th>
          <th><em>jede</em></th>
          <th>
            <em><code>fixed</code></em> oder <code>absolute</code>
          </th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem
            Fall ist es auf den Wert gesetzt, der den Randbereich innerhalb der
            verfügbaren <code>width</code> zentriert, falls festgelegt.
          </td>
          <td>Absolut positionierter Layout-Modus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>jede</em></th>
          <th><em>jede</em></th>
          <td>
            <code>0</code>, außer wenn es positiven horizontalen freien Raum gibt.
            In diesem Fall wird es gleichmäßig auf alle horizontalen
            <code>auto</code> Außenabstände verteilt.
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

### Festlegen von margin-left als Prozentwert

Prozentwerte für `margin-left` beziehen sich auf die Inline-Größe des Containers.

#### HTML

```html
<p>
  Ein großer Rosenbaum stand nahe beim Eingang des Gartens: die Rosen, die darauf
  wuchsen, waren weiß, aber es waren drei Gärtner damit beschäftigt, sie rot zu
  malen.
</p>
<p class="example">
  Alice fand dies eine sehr merkwürdige Sache, und sie ging näher, um ihnen
  zuzusehen, und als sie zu ihnen kam, hörte sie einen von ihnen sagen: "Pass
  auf jetzt, Fünf! Spritz mir nicht so Farbe über!"
</p>
<p>
  "Ich konnte nicht anders," sagte Fünf in einem mürrischen Ton; "Sieben hat mir
  den Ellbogen gestoßen."
</p>
```

#### CSS

```css
.example {
  margin-left: 50%;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting margin-left as a percentage","","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, und {{cssxref("margin-bottom")}} und der {{cssxref("margin")}} Kurzbefehl
- Die zugeordneten logischen Eigenschaften: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} und die Kurzbefehle {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
