---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`margin-left`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Abstandsbereich (margin)](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der linken Seite eines Elements fest. Ein positiver Wert vergrößert den Abstand zu den Nachbarn, während ein negativer Wert den Abstand verringert.

{{InteractiveExample("CSS Demo: margin-left")}}

```css interactive-example-choice
margin-left: 1em;
```

```css interactive-example-choice
margin-left: 10%;
```

```css interactive-example-choice
margin-left: 10px;
```

```css interactive-example-choice
margin-left: 0;
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

Die vertikalen Abstände von zwei angrenzenden Boxen können verschmelzen. Dies wird [_margin collapsing_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) genannt.

In den seltenen Fällen, in denen die Breite überbeschränkt ist (d.h. wenn alle `width`, `margin-left`, `border`, `padding`, der Inhaltsbereich und `margin-right` definiert sind), wird `margin-left` ignoriert und hat denselben berechneten Wert, als ob der Wert `auto` angegeben wäre.

## Syntax

```css
/* <length> values */
margin-left: 10px; /* An absolute length */
margin-left: 1em; /* relative to the text size */
margin-left: 5%; /* relative to the nearest block container's width */
margin-left: anchor-size(self-inline);
margin-left: calc(anchor-size(--myAnchor width, 20px) / 4);

/* Keyword values */
margin-left: auto;

/* Global values */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

Die Eigenschaft `margin-left` wird entweder als Schlüsselwort `auto`, oder als `<length>`, oder als `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.
    - Für _ankerpositionierte Elemente_ löst die Funktion {{cssxref("anchor-size()")}} einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ auf (siehe [Festlegen des Elementabstands basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der linke Abstand erhält einen Anteil des unbenutzten horizontalen Raumes, der hauptsächlich durch den verwendeten Layoutmodus bestimmt wird. Wenn die Werte von `margin-left` und `margin-right` beide `auto` sind, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
          <th><em>irgendein</em></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td><code>0</code></td>
          <td>Inline-Layoutmodus</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><em>irgendein</em></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird der Wert so gesetzt, dass das Element innerhalb seines Elternteils zentriert wird.
          </td>
          <td>Block-Layoutmodus</td>
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
          <td>Block-Layoutmodus (schwebendes Element)</td>
        </tr>
        <tr>
          <th>
            <em>irgendein </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>irgendein</em></th>
          <th><em>irgendein</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code> Elemente haben keine Abstände, verwenden Sie
            stattdessen {{ cssxref("border-spacing") }}
          </td>
        </tr>
        <tr>
          <th>
            <em>irgendein, außer <code>flex</code>,</em> <code>inline-flex</code
            ><em>, oder </em><code>table-*</code>
          </th>
          <th><em>irgendein</em></th>
          <th>
            <em><code>fixed</code></em> oder <code>absolute</code>
          </th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall wird der Wert so gesetzt, dass das Randgebiet innerhalb der verfügbaren <code>width</code> zentriert wird, wenn fixiert.
          </td>
          <td>Absolut positionierter Layoutmodus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>irgendein</em></th>
          <th><em>irgendein</em></th>
          <td>
            <code>0</code>, außer wenn es positiven horizontalen freien Raum gibt.
            In diesem Fall wird er gleichmäßig auf alle horizontalen
            <code>auto</code>-Abstände verteilt.
          </td>
          <td>Flexbox-Layoutmodus</td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von margin-left als Prozentsatz

Prozentwerte für `margin-left` sind relativ zur Inline-Größe des Containers.

#### HTML

```html
<p>
  A large rose-tree stood near the entrance of the garden: the roses growing on
  it were white, but there were three gardeners at it, busily painting them red.
</p>
<p class="example">
  Alice thought this a very curious thing, and she went nearer to watch them,
  and just as she came up to them she heard one of them say, "Look out now,
  Five! Don't go splashing paint over me like that!"
</p>
<p>
  "I couldn't help it," said Five, in a sulky tone; "Seven jogged my elbow."
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

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, und {{cssxref("margin-bottom")}}
- {{cssxref("margin")}} Kurzform
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzformen
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
