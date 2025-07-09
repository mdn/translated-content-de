---
title: "<colgroup>: Das Table Column Group-Element"
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<colgroup>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

{{InteractiveExample("HTML Demo: &lt;colgroup&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <tr>
    <td></td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts, strong</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `span`
  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<colgroup>`-Element umfasst. Der Wert muss eine positive ganze Zahl größer als Null sein. Wenn nicht vorhanden, ist sein Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht zulässig, wenn es ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` gibt.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind nur als Referenz für die Aktualisierung bestehenden Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Zellengruppe an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf das im [`char`](#char)-Attribut definierte Zeichen und den im [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass die Nachkommen-{{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`align`](/de/docs/Web/HTML/Reference/Elements/col#align)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft für die {{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor pro Spalte, wobei `a` die Gesamtanzahl der Spalten in der Tabelle und `b` die Ordnungsposition der Spalte in der Tabelle ist, z. B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Zellengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich dafür gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Zellengruppe anzugeben. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für die [`align`](/de/docs/Web/HTML/Reference/Elements/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}
  - : Hat keine Wirkung. Es war ursprünglich dafür gedacht, die Anzahl der Zeichen anzugeben, um die der Zellengruppeninhalt vom im [`char`](#char)-Attribut spezifizierten Zeichen aus versetzt werden soll.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Zellengruppe an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die Nachkommen-{{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`valign`](/de/docs/Web/HTML/Reference/Elements/col#valign)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type)-CSS-Selektor pro Spalte, z. B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}
  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standardpixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die minimale Breite ist, die notwendig ist, um den Inhalt der Spalte aufzunehmen. Auch relative Breiten wie `5*` können verwendet werden. Beachten Sie, dass die Nachkommen-{{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`width`](/de/docs/Web/HTML/Reference/Elements/col#width)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<colgroup>` sollte innerhalb einer {{HTMLElement("table")}} erscheinen, nach einem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor allen {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirken sich auf `<colgroup>` aus:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe über der Tabelle, jedoch hinter den auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}), und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendet wird, sind Hintergründe, die auf Spaltengruppen von Tabellen angewendet werden, nur sichtbar, wenn jede Schicht, die darauf gemalt wird, einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert und in andere Spalten übergreifende Zellen abgeschnitten werden. Der Platz, den diese Spalten in der Spaltengruppe eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch weiterhin berechnet, als ob die Zellen in den zusammengebrochenen Spalten in der Spaltengruppe vorhanden wären. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das gängige Standards und bewährte Verfahren vorstellt.

Dieses Beispiel zeigt eine Tabelle mit sieben Spalten, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine Basistabelle durch die Erstellung von Spaltengruppen zu strukturieren. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut angegeben.

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <tr>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
    <td>Yoga</td>
    <td>Chess Club</td>
    <td>Meet friends</td>
    <td>Gymnastics</td>
    <td>Birthday party</td>
    <td>Fishing trip</td>
    <td>Free time</td>
  </tr>
</table>
```

### CSS

Gruppierte Spalten können verwendet werden, um die Struktur visuell mit CSS hervorzuheben:

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Ergebnis

{{EmbedLiveSample('Example', 650, 170)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das <a href="#span"><code>span</code></a>-Attribut vorhanden ist:
        keiner.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr
        {{HTMLElement("col")}}-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassen</th>
      <td>
        Der Start-Tag kann weggelassen werden, wenn er ein
        {{HTMLElement("col")}}-Element als sein erstes Kind hat und ihm kein
        <code>&lt;colgroup&gt;</code> vorangeht, dessen End-Tag weggelassen
        wurde.<br />Der End-Tag kann weggelassen werden, wenn ihm kein Leerzeichen oder ein Kommentar folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Der <code>&lt;colgroup&gt;</code>
        muss nach jedem {{HTMLElement("caption")}}-Element, aber vor jedem
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Element
        erscheinen.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Grundlagen von HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Festlegung der Hintergrundfarbe jeder Zellengruppe
- {{cssxref("border")}}: CSS-Eigenschaft, um die Rahmen der Zellengruppen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Zellengruppe
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Zellengruppe
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Zellengruppe auszublenden (oder anzuzeigen)
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite jeder Spalte in einer Spaltengruppe
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
