---
title: visibility
slug: Web/CSS/visibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeigt oder versteckt ein Element, ohne das Layout eines Dokuments zu verändern. Die Eigenschaft kann auch Zeilen oder Spalten in einem {{HTMLElement("table")}} verbergen.

{{EmbedInteractiveExample("pages/css/visibility.html")}}

Um ein Element _zu verstecken und gleichzeitig aus dem Dokumentenlayout zu entfernen_, setzen Sie die {{cssxref("display")}}-Eigenschaft auf `none` anstatt `visibility` zu verwenden.

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

Die `visibility`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte spezifiziert.

### Werte

- `visible`
  - : Das Elementfeld ist sichtbar.
- `hidden`
  - : Das Elementfeld ist unsichtbar (nicht gezeichnet), beeinflusst jedoch das Layout wie gewohnt. Nachfahren des Elements sind sichtbar, wenn ihre `visibility` auf `visible` gesetzt ist. Das Element kann keinen Fokus erhalten (z. B. beim Navigieren durch [Tab-Indizes](/de/docs/Web/HTML/Global_attributes/tabindex)).
- `collapse`

  - : Das `collapse`-Schlüsselwort hat unterschiedliche Auswirkungen auf verschiedene Elemente:

    - Für {{HTMLElement("table")}}-Zeilen, -Spalten, -Spaltengruppen und -Zeilengruppen werden die Zeile(n) oder Spalte(n) versteckt und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{Cssxref("display")}}: none` auf die Spalte/Zeile der Tabelle angewendet worden wäre). Die Größe anderer Zeilen und Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengebrochenen(n) Zeile oder Spalte vorhanden wären. Dieser Wert ermöglicht die schnelle Entfernung einer Zeile oder Spalte aus einer Tabelle, ohne die Neuberechnung von Breiten und Höhen für die gesamte Tabelle erzwingen zu müssen.
    - Zusammengebrochene Flex-Elemente und Ruby-Anmerkungen sind versteckt und der Platz, den sie eingenommen hätten, wird entfernt.
    - Für andere Elemente wird `collapse` wie `hidden` behandelt.

## Barrierefreiheit

Die Verwendung eines `visibility`-Wertes von `hidden` bei einem Element entfernt es aus dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Dies wird dazu führen, dass das Element und alle seine nachfolgenden Elemente nicht mehr von Bildschirmlesetechnologien angesagt werden.

## Interpolation

Wenn animiert, werden Sichtbarkeitswerte zwischen _sichtbar_ und _nicht sichtbar_ interpoliert. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine {{Glossary("interpolation", "Interpolation")}} stattfinden kann. Der Wert wird als diskreter Schritt interpoliert, wobei Werte der Übergangsfunktion zwischen `0` und `1` zu `visible` und andere Werte der Übergangsfunktion (die nur am Anfang/Ende des Übergangs auftreten oder als Ergebnis von `cubic-bezier()`-Funktionen mit y-Werten außerhalb von \[0, 1]) zum näheren Endpunkt abgebildet werden.

## Hinweise

- Die Unterstützung für `visibility: collapse` fehlt oder ist in einigen modernen Browsern teilweise falsch. Es kann nicht korrekt wie `visibility: hidden` bei anderen Elementen als Tabellenzeilen und -spalten behandelt werden.
- Wenn es auf Tabellenzeilen angewendet wird, kann eine Zelle ({{htmlelement("td")}} {{htmlelement("tr")}} Elemente), die sowohl sichtbare als auch zusammengebrochene Zeilen überspannt, auf unerwartete Weise gerendert werden. Wenn sich die überspannende Zelle in einer zusammengebrochenen Zeile befindet, rendern Browser die Tabellenzelle nicht, als ob die Zellen in den nachfolgenden Zeilen vorhanden wären, bei denen `visibility: collapse` angewendet wird. Wenn die Zelle in einer sichtbaren Zeile definiert ist und eine zusammengebrochene Zeile überspannt, werden die Zellinhalte nicht neu angeordnet, aber die Darstellung der Zelle selbst variiert je nach Browser. Die meisten Browser reduzieren die Blockgröße der Zelle um die Blockgröße der versteckten Zeile. Dies bedeutet, dass die Inhalte größer als die Zelle in der Block-Richtung sein können. Abhängig vom Browser werden die überlaufenden Inhalte entweder abgeschnitten, als ob `overflow: hidden` gesetzt wäre, während in anderen Browsern der Inhalt in die nachfolgende Zeile übergeht, als ob `overflow: visible` gesetzt wäre. In anderen Browsern wird die Zelle dargestellt, als ob die Zeile nicht zusammengebrochen wäre, wobei alle anderen Zellen in der Zeile versteckt sind, als ob `visibility: collapse` auf einzelne Zellen anstelle der Zeile selbst angewendet worden wäre.
- `visibility: collapse` kann das Layout einer Tabelle ändern, wenn die Tabelle verschachtelte Tabellen innerhalb der Zellen enthält, die zusammengebrochen sind, es sei denn, `visibility: visible` wird explizit auf verschachtelte Tabellen angewendet.

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
