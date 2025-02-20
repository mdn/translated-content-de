---
title: margin-right
slug: Web/CSS/margin-right
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`margin-right`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt den [Abstandsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf der rechten Seite eines Elements fest. Ein positiver Wert vergrößert den Abstand zu benachbarten Elementen, während ein negativer Wert den Abstand verringert.

{{EmbedInteractiveExample("pages/css/margin-right.html")}}

Die vertikalen Ränder zweier benachbarter Boxen können verschmelzen. Dies wird als [_Margin Collapsing_](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet.

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

Die Eigenschaft `margin-right` wird als das Schlüsselwort `auto`, oder eine `<length>`, oder `<percentage>` angegeben. Der Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Die Größe des Abstandsbereichs als fester Wert.

    - Für _ankergepositionierte Elemente_ löst die Funktion {{cssxref("anchor-size()")}} sich in einen {{cssxref("&lt;length&gt;")}}-Wert auf, der relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ ist (siehe [Festlegen des Randes eines Elements basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstandsbereichs als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`

  - : Der rechte Abstand erhält einen Teil des nicht genutzten horizontalen Raums, der hauptsächlich durch den verwendeten Layout-Modus bestimmt wird. Wenn die Werte von `margin-left` und `margin-right` beide auf `auto` gesetzt sind, wird der berechnete Raum gleichmäßig verteilt. Diese Tabelle fasst die verschiedenen Fälle zusammen:

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
          <th><em>any</em></th>
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
          <th><em>any</em></th>
          <th><code>static</code> oder <code>relative</code></th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird der Wert gesetzt, der das Element innerhalb seines Eltern-Elements
            zentriert.
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
          <td>Block-Layout-Modus (fließendes Element)</td>
        </tr>
        <tr>
          <th>
            <em>any </em><code>table-*</code><em>, außer </em
            ><code>table-caption</code>
          </th>
          <th><em>any</em></th>
          <th><em>any</em></th>
          <td><code>0</code></td>
          <td>
            Interne <code>table-*</code>-Elemente haben keine Abstandsbereiche, nutzen
            Sie stattdessen {{ cssxref("border-spacing") }}.
          </td>
        </tr>
        <tr>
          <th>
            <em>any, außer <code>flex</code>,</em> <code>inline-flex</code
            ><em>, oder </em><code>table-*</code>
          </th>
          <th><em>any</em></th>
          <th>
            <em><code>fixed</code></em> oder <code>absolute</code>
          </th>
          <td>
            <code>0</code>, außer wenn sowohl <code>margin-left</code> als auch
            <code>margin-right</code> auf <code>auto</code> gesetzt sind. In diesem Fall
            wird der Wert gesetzt, der den Randbereich innerhalb der verfügbaren
            <code>width</code> zentriert, falls fixiert.
          </td>
          <td>Absolut positionierter Layout-Modus</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>any</em></th>
          <th><em>any</em></th>
          <td>
            <code>0</code>, außer wenn ein positiver horizontaler Freiraum
            vorhanden ist. In diesem Fall wird dieser gleichmäßig auf alle horizontalen
            <code>auto</code>-Abstände verteilt.
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

### Festlegen des rechten Abstandsbereichs mit Pixeln und Prozentsätzen

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
- {{cssxref("margin")}} Kurzschreibweise
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzschreibweisen
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
