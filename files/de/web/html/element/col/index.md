---
title: "<col>: Das Tabellenspalten-Element"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch das übergeordnete {{HTMLElement("colgroup")}} Element repräsentiert wird. Das `<col>` Element ist nur gültig als Kind eines {{HTMLElement("colgroup")}} Elements, das kein [`span`](/de/docs/Web/HTML/Element/colgroup#span) Attribut definiert hat.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`
  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<col>` Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn es nicht vorhanden ist, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten aus Gründen der Referenzierung beim Aktualisieren von vorhandenem Code und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen [aufgezählten](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem im [`char`](#char) Attribut definierten Zeichen und an dem durch das [`charoff`](#charoff) Attribut definierten Offset aus. Beachten Sie, dass dieses Attribut die im {{HTMLElement("colgroup")}} übergeordneten Element angegebene [`align`](/de/docs/Web/HTML/Element/colgroup#align) überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft an den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf das `<col>` Element hat keinen Effekt, da `<col>` keine Nachfahren hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }` um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination von geeigneten CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB code](/de/docs/Web/CSS/hex-color), mit einem `#` prefix, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch das spezifizierte [`char`](/de/docs/Web/HTML/Element/colgroup#char) des übergeordneten {{HTMLElement("colgroup")}} Elements überschreiben wird.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Spaltenzelle von dem durch das [`char`](#char) Attribut spezifizierten Ausrichtungszeichen versetzt werden sollte.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die möglichen [aufgezählten](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die im {{HTMLElement("colgroup")}} übergeordneten Element angegebene [`valign`](/de/docs/Web/HTML/Element/colgroup#valign) überschreibt. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft an den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf das `<col>` Element hat keinen Effekt, da `<col>` keine Nachfahren hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }` um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination von geeigneten CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Zusätzlich zu standardmäßigen Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimal nötige Breite sein sollte, um die Inhalte der Spalte zu halten. Relative Breiten wie `5*` können auch verwendet werden. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}} Element angegebene [`width`](/de/docs/Web/HTML/Element/colgroup#width) überschreibt. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<col>` Element wird innerhalb eines {{HTMLElement("colgroup")}} Elements verwendet, das kein `span` Attribut hat.
- Die `<col>` Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Rolle des {{HTMLElement("colgroup")}} Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<col>`:
  - {{cssxref("background")}} : Die verschiedenen `background` Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Spaltenhintergrundfarbe oben auf der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}), aber hinter den Hintergrundfarben der Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), den Zeilen ({{htmlelement("tr")}}), und den einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) gemalt wird, sind die auf Tabellenspalten angewendeten Hintergründe nur sichtbar, wenn jede darauf gemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border` Eigenschaften gelten, aber nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte führt dazu, dass alle Zellen dieser Spalte nicht gerendert werden und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Allerdings wird die Größe anderer Spalten weiterhin berechnet, als wären die Zellen in der zusammengebrochenen(n) Spalte(n) vorhanden. Andere Werte für `visibility` haben keinen Effekt.
  - {{cssxref("width")}}: Die `width` Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken einführt.

Dieses Beispiel demonstriert eine achtspaltige Tabelle, unterteilt in drei `<col>` Elemente.

### HTML

Ein {{HTMLElement("colgroup")}} Element bietet Strukturen zu einer grundlegenden Tabelle und erstellt eine einzelne implizite Spaltengruppe. Drei `<col>` Elemente sind innerhalb des `<colgroup>` enthalten und erstellen drei stilisierbare Spalten. Das [`span`](#span) Attribut gibt an, wie viele Tabellenspalten jedes `<col>` überspannen soll (standardmäßig auf `1` bei Weglassen), sodass Attribute über die Spalten in jedem `<col>` geteilt werden können.

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

Wir verwenden CSS anstelle von veralteten HTML-Attributen, um den Spalten eine Hintergrundfarbe zu geben und den Zellinhalt auszurichten:

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
          >Kategorie des Inhalts</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keine; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Start-Tag nicht zwingend ist. Das
        {{HTMLElement("colgroup")}} darf kein
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> Attribut haben.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Spaltenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spalte zu verbergen
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite jeder Spalte zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
