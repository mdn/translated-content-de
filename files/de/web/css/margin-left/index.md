---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`margin-left`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der linken Seite eines Elements fest. Ein positiver Wert entfernt es weiter von seinen Nachbarn, während ein negativer Wert es näher rückt.

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

Die vertikalen Ränder von zwei angrenzenden Boxen können verschmelzen. Dies wird als [_margin collapsing_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet.

In seltenen Fällen, in denen die Breite überbeschränkt ist (d.h. wenn alle `width`, `margin-left`, `border`, `padding`, der Inhaltsbereich und `margin-right` definiert sind), wird `margin-left` ignoriert und erhält denselben berechneten Wert, als wäre der Wert `auto` angegeben.

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

Die `margin-left`-Eigenschaft wird als das Schlüsselwort `auto` oder als `<length>` oder `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randes als fester Wert.
    - Für _ankerpositionierte Elemente_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ aufgelöst (siehe [Festlegen des Elementrands basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentsatz relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der linke Rand erhält einen Anteil des ungenutzten horizontalen Raumes, was hauptsächlich durch den verwendeten Layoutmodus bestimmt wird. Wenn `margin-left` und `margin-right` beide `auto` sind, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
          <td>Inline-Layout-Modus</td>
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
            wird es auf den Wert gesetzt, der das Element innerhalb seines Elternteils zentriert.
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
            <em>irgendein </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>irgendein</em></th>
          <th><em>irgendein</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code>-Elemente haben keine Ränder, stattdessen
            {{ cssxref("border-spacing") }} verwenden
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
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird es auf den Wert gesetzt, der den Randbereich innerhalb der verfügbaren
            <code>width</code> zentriert, falls festgelegt.
          </td>
          <td>Absolut positionierter Layout-Modus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>irgendein</em></th>
          <th><em>irgendein</em></th>
          <td>
            <code>0</code>, außer wenn es irgendeinen positiven horizontalen freien Raum gibt.
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

### margin-left als Prozentsatz setzen

Prozentuale Werte für `margin-left` sind relativ zur Inline-Größe des Containers.

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
