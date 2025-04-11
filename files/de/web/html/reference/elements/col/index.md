---
title: "<col>: Das Tabellenspalten-Element"
slug: Web/HTML/Reference/Elements/col
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML)-Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur als Kind eines {{HTMLElement("colgroup")}}-Elements zulässig, das kein [`span`](/de/docs/Web/HTML/Reference/Elements/colgroup#span)-Attribut definiert hat.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `span`
  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<col>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Sollte es nicht vorhanden sein, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um bestehende Codes zu aktualisieren und aus historischen Gründen.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am im [`char`](/de/docs/Web/HTML/Reference/Elements/colgroup#char)-Attribut definierten Zeichen und am im [`charoff`](/de/docs/Web/HTML/Reference/Elements/colgroup#charoff)-Attribut definierten Offset aus. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`align`](/de/docs/Web/HTML/Reference/Elements/colgroup#align)-Zuordnung überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}}-CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf das `<col>`-Element hat keine Wirkung, da `<col>` keine Nachfolger hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)`-CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht einfach ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbkeyword](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts auf ein Zeichen jeder Spaltenzelle zu spezifizieren. Typische Werte hierfür umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es dennoch das im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`char`](/de/docs/Web/HTML/Reference/Elements/colgroup#char) überschreibt.

- `charoff` {{deprecated_inline}}

  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Spaltenzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt werden soll.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die mög<裔®›傳roty】lićtle`bottom都 `middle`, und `top`. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`valign`](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/colgroup#valign)-Zuordnung überschreibt. Verwenden Sie stattdessen die {{cssxref("vertical-align")}}-CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf das `<col>`-Element hat keine Wirkung, da `<col>` keine Nachfolger hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)`-CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht einfach ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Zusätzlich zu den Standardpixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimale Breite sein sollte, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`width`](/de/docs/Web/HTML/Reference/Elements/colgroup#width) überschreibt. Verwenden Sie stattdessen die {{cssxref("width")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anwendungsnotizen

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Rolle des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<col>`:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Hintergrundfarbe der Spalte über der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}), aber hinter den Hintergrundfarben, die auf die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewandt werden, bemalt wird, sind auf Tabellenspalten angewandte Hintergründe nur dann sichtbar, wenn jede über ihnen bemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn die `<table>` das {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte führt dazu, dass alle Zellen dieser Spalte nicht gerendert werden und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch immer noch so berechnet, als ob die Zellen in den zusammengebrochenen Spalten präsent wären. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit gängigen Standards und Best Practices.

Dieses Beispiel zeigt eine Tabelle mit acht Spalten, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen zu einer Basistabelle und erstellt eine einzelne implizite Spaltengruppe. Drei `<col>`-Elemente sind innerhalb des `<colgroup>` enthalten, wodurch drei stilisierbare Spalten erstellt werden. Das [`span`](#span)-Attribut gibt die Anzahl der Tabellenspalten an, die jedes `<col>` umfassen sollte (standardmäßig `1`, wenn es weggelassen wird), sodass Attribute über die Spalten in jedem `<col>` hinweg geteilt werden können.

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

Wir verwenden CSS anstelle veralteter HTML-Attribute, um den Spalten eine Hintergrundfarbe zu geben und den Zellinhalt auszurichten:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein öffnendes Tag haben und darf kein schließendes Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein öffnendes Tag nicht obligatorisch ist. Das
        {{HTMLElement("colgroup")}} darf kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Spaltenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spalte auszublenden
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite für jede Spalte zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
