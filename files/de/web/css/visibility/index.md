---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Diese Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} ausblenden.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

Um ein Element _sowohl zu verstecken als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}} Eigenschaft auf `none`, anstatt `visibility` zu verwenden.

## Syntax

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

Die `visibility` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Das Elementfenster ist sichtbar.
- `hidden`
  - : Das Elementfenster ist unsichtbar (nicht gezeichnet), beeinflusst aber weiterhin das Layout wie gewohnt. Nachfolgende Elemente sind sichtbar, wenn ihre `visibility` auf `visible` gesetzt ist. Das Element kann keinen Fokus erhalten (z.B. beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Effekte für verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet wurde). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in den zusammengeklappten Zeilen oder Spalten vorhanden sind. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne eine Neuberechnung der Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Zusammengeklappte Flex-Elemente und Ruby-Anmerkungen werden versteckt, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility` Wertes von `hidden` auf einem Element entfernt es aus dem [Barrierefreiheit-Baum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dadurch wird das Element und alle seine nachfolgenden Elemente nicht mehr von Bildschirmlesetechnologien angekündigt.

## Interpolation

Wenn animiert, werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, oder es kann keine [Interpolation](/de/docs/Glossary/interpolation) stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` auf `visible` abbilden und andere Werte der Übergangsfunktion (die nur am Anfang/Ende der Transition oder als Ergebnis von `cubic-bezier()` Funktionen mit y-Werten außerhalb des Bereichs \[0, 1] auftreten) auf den näheren Endpunkt abbilden.

## Anmerkungen

- Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise unkorrekt. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei Elementen außer Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird, enthält die Tabelle Zellen ({{htmlelement("td")}} {{htmlelement("tr")}} Elemente), die sowohl sichtbare als auch zusammengeklappte Zeilen umfassen, so kann die Zelle auf unerwartete Weise gerendert werden. Wenn die umfassende Zelle in einer zusammengeklappten Zeile definiert ist, wird die Tabellenzelle von Browsern nicht angezeigt, als ob die Zellen in den folgenden Zeilen mit `visibility: collapse` anwesend wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile umfasst, wird der Inhalt der Zelle nicht erneut geflossen, aber die Darstellung selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Dies bedeutet, dass der Inhalt möglicherweise größer als die Zelle in der Block-Richtung ist. Abhängig vom Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die folgende Zeile ausläuft, wie es bei `overflow: visible` der Fall wäre. In anderen Browsern wird die Zelle gerendert, als wäre die Zeile nicht zusammengeklappt, wobei alle anderen Zellen in der Zeile versteckt sind, als ob `visibility: collapse` auf einzelne Zellen statt auf die Zeile selbst gesetzt wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen hat, die zusammengeklappt sind, es sei denn, `visibility: visible` wird explizit auf verschachtelten Tabellen angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p class="visible">The first paragraph is visible.</p>
<p class="not-visible">The second paragraph is NOT visible.</p>
<p class="visible">
  The third paragraph is visible. Notice the second paragraph is still occupying
  space.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('Basic_example')}}

### Tabellenbeispiel

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('Table_example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("display")}}
