---
title: Sichtbarkeit
slug: Web/CSS/visibility
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder verbirgt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

Um ein Element sowohl zu verbergen _als auch aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none` anstelle von `visibility`.

## Syntax

```css
/* Schlüsselwortwerte */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Globale Werte */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

Die `visibility`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (nicht gezeichnet), beeinflusst aber dennoch das Layout wie gewohnt. Nachfahren des Elements sind sichtbar, wenn sie `visibility` auf `visible` gesetzt haben. Das Element kann keinen Fokus erhalten (zum Beispiel, wenn Sie durch [Tab-Indizes](/de/docs/Web/HTML/Global_attributes/tabindex) navigieren).
- `collapse`

  - : Das Schlüsselwort `collapse` hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Reihengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Raum, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als wären die Zellen in den zusammengebrochenen Zeilen oder Spalten vorhanden. Dieser Wert ermöglicht das schnelle Entfernen einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung der Breiten und Höhen der gesamten Tabelle zu erzwingen.
    - Zusammengebrochene Flex-Items und Ruby-Anmerkungen werden versteckt und der Raum, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Wenn Sie einen `visibility`-Wert von `hidden` auf ein Element anwenden, wird es aus dem [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) entfernt. Dies führt dazu, dass das Element und alle seine Nachfahrenelemente nicht mehr von Bildschirmlesetechnologien angesagt werden.

## Interpolation

Wenn animiert, werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht-sichtbar_ interpoliert. Eines der Anfangs- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Zeitablauffunktion zwischen `0` und `1` auf `visible` und andere Werte der Zeitablauffunktion (die nur am Anfang/Ende der Übergangsphase oder aufgrund von `cubic-bezier()`-Funktionen mit y-Werten außerhalb des Bereichs \[0, 1] auftreten) auf den näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise fehlerhaft. Es wird möglicherweise nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt.
- Wenn es auf Tabellenzeilen angewendet wird und die Tabelle Zellen ({{htmlelement("td")}} {{htmlelement("tr")}} Elemente) enthält, die sowohl in sichtbare als auch in zusammengebrochene Zeilen reichen, kann die Zelle auf unerwartete Weise gerendert werden. Wenn die umspannende Zelle in einer zusammengebrochenen Zeile definiert ist, rendern Browser die Tabellenzelle nicht, als ob die Zellen in nachfolgenden Zeilen mit `visibility: collapse` angewendet vorhanden wären. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengebrochene Zeile überspannt, wird der Inhalt der Zelle nicht neu umbrochen, aber die Präsentation der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der verborgenen Zeile. Dies bedeutet, dass der Inhalt größer als die Zelle in Blockrichtung sein kann. Abhängig vom Browser wird der überlaufende Inhalt entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während in anderen Browsern der Inhalt in die nachfolgende Zeile übergeht, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle gerendert, als wäre die Zeile nicht zusammengebrochen, wobei alle anderen Zellen in der Zeile versteckt sind, als ob `visibility: collapse` auf einzelne Zellen und nicht auf die Zeile selbst angewendet würde.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen hat, die zusammengebrochen sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angewendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p class="visible">Der erste Absatz ist sichtbar.</p>
<p class="not-visible">Der zweite Absatz ist NICHT sichtbar.</p>
<p class="visible">
  Der dritte Absatz ist sichtbar. Beachten Sie, dass der zweite Absatz immer
  noch Platz einnimmt.
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
