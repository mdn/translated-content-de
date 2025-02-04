---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`visibility`**-Eigenschaft von [CSS](/de/docs/Web/CSS) zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einer {{HTMLElement("table")}} ausblenden.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

Um ein Element _sowohl auszublenden als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none`, anstatt `visibility` zu verwenden.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (nicht gezeichnet), beeinflusst das Layout jedoch normal. Nachkommende Elemente werden sichtbar sein, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (wie beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Das `collapse`-Schlüsselwort hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für Zeilen, Spalten, Spaltengruppen und Zeilengruppen einer {{HTMLElement("table")}} sind die Zeile(n) oder Spalte(n) ausgeblendet und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch immer noch so berechnet, als wären die Zellen in den ausgeblendeten Zeilen oder Spalten vorhanden. Dieser Wert ermöglicht die schnelle Entfernung einer Zeile oder Spalte aus einer Tabelle, ohne eine Neuberechnung der Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Zusammengestellte Flex-Elemente und Ruby-Anmerkungen sind ausgeblendet, und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Werts von `hidden` bei einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dadurch werden das Element und alle seine nachfolgenden Elemente nicht mehr von Bildschirmlesetechnologien angekündigt.

## Interpolation

Beim Animieren werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht-sichtbar_ interpoliert. Eines der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, bei dem Werte der Übergangsfunktion zwischen `0` und `1` auf `visible` abgebildet werden und andere Werte der Übergangsfunktion (die nur zu Beginn/Ende des Übergangs oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es kann nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt werden.
- Wenn auf Tabellenzeilen angewendet, enthält die Tabelle Zellen ({{htmlelement("td")}} {{htmlelement("tr")}}-Elemente), die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die überspannende Zelle in einer zusammengeklappten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, werden die Zellinhalte nicht neu angeordnet, jedoch variiert die Darstellung der Zelle selbst je nach Browser. Die meisten Browser verringern die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Dies bedeutet, dass die Inhalte möglicherweise größer sind als die Zelle in der Blockrichtungsrichtung. Je nach Browser werden die überstehenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` eingestellt wäre, während in anderen Browsern die Inhalte in die nachfolgende Zeile hineinbluten, als ob `overflow: visible` eingestellt wäre. In anderen Browsern wird die Zelle gerendert, als ob die Zeile nicht zusammengeklappt wäre, mit allen anderen Zellen in der Zeile verborgen, als ob `visibility: collapse` auf einzelne Zellen angewendet worden wäre und nicht auf die Zeile selbst.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengeklappt sind, es sei denn, `visibility: visible` ist explizit auf verschachtelte Tabellen festgelegt.

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
- SVG {{SVGAttr("visibility")}} Attribut
