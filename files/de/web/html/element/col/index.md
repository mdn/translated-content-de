---
title: "<col>: Das Table Column-Element"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur als Kind eines {{HTMLElement("colgroup")}}-Elements gültig, das kein [`span`](/de/docs/Web/HTML/Element/colgroup#span)-Attribut definiert hat.

{{InteractiveExample("HTML Demo: &lt;col&gt;", "tabbed-taller")}}

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

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`
  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<col>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier nur zur Referenz aufgeführt, wenn vorhandener Code aktualisiert wird, und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumerated")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char` Wert den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und gemäß dem Offset, das durch das [`charoff`](#charoff)-Attribut definiert ist. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element festgelegte [`align`](/de/docs/Web/HTML/Element/colgroup#align)-Ausrichtung überschreibt. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Einstellen von `text-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der durch ein `#` vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Währungswerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch die im übergeordneten {{HTMLElement("colgroup")}}-Element festgelegte [`char`](/de/docs/Web/HTML/Element/colgroup#char)-Ausrichtung überschreibt.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die Spalteninhaltszelle vom durch das [`char`](#char)-Attribut spezifizierten Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element festgelegte [`valign`](/de/docs/Web/HTML/Element/colgroup#valign)-Ausrichtung überschreibt. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Einstellen von `vertical-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal mittig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Zusätzlich zu den standardmäßigen Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die Mindestbreite sein soll, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element festgelegte [`width`](/de/docs/Web/HTML/Element/colgroup#width)-Breite überschreibt. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Rolle des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirkt sich auf `<col>` aus:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für die Zellen innerhalb der Spalte. Da die Spaltenhintergrundfarbe über die Tabelle und Spaltengruppen ({{HTMLElement("colgroup")}}) gemalt wird, aber hinter den auf die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendeten Farben, sind die auf Tabellenkolonnen angewendeten Hintergründe nur sichtbar, wenn jede darauf gemalte Ebene einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} eingestellt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte führt dazu, dass alle Zellen dieser Spalte nicht gerendert werden, und Zellen, die sich in andere Spalten erstrecken, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch immer noch berechnet, als ob die Zellen in der/den zusammengebrochenen Spalte(n) vorhanden wären. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Verfahren einführt.

Dieses Beispiel zeigt eine achtspaltige Tabelle, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen für eine einfache Tabelle und erstellt eine einzelne implizite Spaltengruppe. Drei `<col>`-Elemente sind innerhalb des `<colgroup>` enthalten und erstellen drei stilisierbare Spalten. Das [`span`](#span)-Attribut gibt die Anzahl der Tabellenspalten an, die jedes `<col>` überspannen sollte (dabei wird standardmäßig `1` angenommen, wenn es weggelassen wird) und ermöglicht es, Attribute über die Spalten in jedem `<col>` hinweg zu teilen.

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <tr>
    <th>Period</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>a.m.</th>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
    <th>p.m.</th>
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

Wir verwenden CSS anstelle der veralteten HTML-Attribute, um den Spalten eine Hintergrundfarbe zu geben und den Zellinhalt auszurichten:

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Start-Tag nicht obligatorisch ist. Die {{HTMLElement("colgroup")}} muss kein
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA Rollen</th>
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Rahmen der Spaltenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spalte zu verbergen
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite für jede Spalte zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
