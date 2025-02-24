---
title: "<colgroup>: Das Tabellen-Spaltengruppen-Element"
slug: Web/HTML/Element/colgroup
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`

  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<colgroup>`-Element überspannt. Der Wert muss eine positive Ganzzahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht erlaubt, wenn innerhalb des `<colgroup>` ein oder mehrere {{HTMLElement("col")}}-Elemente vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier nur zur Referenz für das Aktualisieren vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zelle der Spaltengruppe an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am Zeichen aus, das im [`char`](#char)-Attribut definiert ist, und der Verschiebung, die durch das [`charoff`](#charoff)-Attribut festgelegt ist. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`align`](/de/docs/Web/HTML/Element/col#align)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf das `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor für jede Spalte, wobei `a` die Gesamtanzahl der Spalten in der Tabelle ist und `b` die Ordnungszahl der Spalte in der Tabelle ist, z. B. `td:nth-of-type(7n+2) { text-align: right; }` um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle tatsächlich ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zelle der Spaltengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Zelle der Spaltengruppe zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für das [`align`](/de/docs/Web/HTML/Element/col#align) der {{HTMLElement("col")}}-Elemente dient, die Teil dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, die der Zellinhalt der Spaltengruppe vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen entfernt ist.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zelle der Spaltengruppe an. Die möglichen {{Glossary("enumerated", "Aufzählungswerte")}} sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`valign`](/de/docs/Web/HTML/Element/col#valign)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf das `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type) CSS-Selektor für jede Spalte, z. B. `td:nth-of-type(2) { vertical-align: middle; }` um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle tatsächlich ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standardpixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überbrückten Spalte die Mindestbreite sein sollte, die erforderlich ist, um den Inhalt der Spalte zu halten. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`width`](/de/docs/Web/HTML/Element/col#width)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<colgroup>` sollte innerhalb eines {{HTMLElement("table")}} erscheinen, nach jedem {{HTMLElement("caption")}}, falls verwendet, aber vor jedem {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, und {{HTMLElement("tr")}}.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirkt sich auf `<colgroup>` aus:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe auf der Tabelle, aber hinter den auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}), und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendeten Hintergrundfarben gezeichnet wird, sind auf Spaltengruppen angewendete Hintergründe nur sichtbar, wenn jede darüber gezeichnete Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn das `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden, und Zellen, die in andere Spalten reichen, abgeschnitten werden. Der Platz, den diese Spalten in der Spaltengruppe eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengefallenen Spalte(n) in der Spaltengruppe vorhanden sind. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenschau-Beispiel, das allgemeine Standards und Best Practices einführt.

Dieses Beispiel zeigt eine Tabelle mit sieben Spalten, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten überspannen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine grundlegende Tabelle durch Erstellung von Spaltengruppen zu strukturieren. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut festgelegt.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das <a href="#span"><code>span</code></a>-Attribut
        vorhanden ist: keine.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Element
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann ausgelassen werden, wenn es ein {{HTMLElement("col")}}
        Element als sein erstes Kind hat und wenn es nicht von einem
        <code>&lt;colgroup&gt;</code> gefolgt wird, dessen End-Tag ausgelassen wurde.<br />Das
        End-Tag kann weggelassen werden, wenn es nicht von einem Leerzeichen oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;colgroup&gt;</code> muss nach jedem
        {{HTMLElement("caption")}}-Element erscheinen, aber vor jedem
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, und
        {{HTMLElement("tr")}}-Element.
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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

- [Learn: HTML table basics](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zelle der Spaltengruppe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um Ränder von Zellen der Spaltengruppe zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zelle der Spaltengruppe horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zelle der Spaltengruppe vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spaltengruppe zu verbergen (oder anzuzeigen)
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite für jede Spalte in einer Spaltengruppe zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
