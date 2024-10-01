---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`visibility`**-[CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu ändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verstecken.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

Um ein Element sowohl zu verstecken _als auch aus dem Dokumentlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none` anstelle von `visibility`.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Der Elementkasten ist sichtbar.
- `hidden`
  - : Der Elementkasten ist unsichtbar (nicht gezeichnet), beeinflusst aber das Layout wie gewohnt. Nachkommen des Elements werden sichtbar sein, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann nicht fokussiert werden (wie bei der Navigation durch [Tab-Indizes](/de/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet würde). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengeklappten Zeile(n) oder Spalte(n) vorhanden wären. Dieser Wert ermöglicht die schnelle Entfernung einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen für die gesamte Tabelle zu erzwingen.
    - Zusammengeklappte Flex-Items und Ruby-Annotationen sind versteckt, und der Raum, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Werts von `hidden` auf einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Dies führt dazu, dass das Element und alle seine Unterelemente nicht mehr von Bildschirmlesetechnologien angesagt werden.

## Interpolation

Bei der Animation werden `visibility`-Werte zwischen _visible_ und _not-visible_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, sonst kann keine {{Glossary("interpolation", "Interpolation")}} stattfinden. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Beschleunigungsfunktion zwischen `0` und `1` zu `visible` und andere Werte der Funktion (die nur am Anfang/Ende der Transition oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1]) zu dem näheren Endpunkt abgebildet werden.

## Anmerkungen

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise inkorrekt. Es wird möglicherweise nicht korrekt wie `visibility: hidden` auf andere Elemente als Tabellenzeilen und -spalten angewendet.
- Wenn sie auf Tabellenzeilen angewendet wird, enthält die Tabelle Zellen ({{htmlelement("td")}} {{htmlelement("tr")}}-Elemente), die sowohl sichtbare als auch zusammengeklappte Zeilen überspannen, kann die Zelle auf unerwartete Weise dargestellt werden. Wenn die überspannende Zelle in einer zusammengeklappten Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengeklappte Zeile überspannt, werden die Inhalte der Zelle nicht umgebrochen, aber die Präsentation der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Das bedeutet, dass die Inhalte in der Blockrichtgröße größer als die Zelle sein können. Abhängig vom Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während der Inhalt in die nachfolgende Zeile hineinläuft, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle so gerendert, als ob die Zeile nicht zusammengeklappt wäre, wobei alle anderen Zellen der Zeile versteckt sind, als ob `visibility: collapse` auf einzelne Zellen statt auf die Zeile selbst angewendet wurde.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengeklappt sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angewendet.

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
