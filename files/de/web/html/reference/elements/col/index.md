---
title: "<col>: Das Table Column Element"
slug: Web/HTML/Reference/Elements/col
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}}-Element repräsentiert wird. Das `<col>`-Element ist nur als Kind eines {{HTMLElement("colgroup")}}-Elements gültig, das kein [`span`](/de/docs/Web/HTML/Reference/Elements/colgroup#span)-Attribut definiert hat.

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
  - : Gibt die Anzahl der aufeinander folgenden Spalten an, die das `<col>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn es nicht vorhanden ist, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden nachfolgend zur Bezugnahme beim Aktualisieren vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumuerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem durch das [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`align`](/de/docs/Web/HTML/Reference/Elements/colgroup#align)-Richtung überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farb-Stichwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Wirkung. Es war ursprünglich dafür vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle anzugeben. Typische Werte hierfür umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`char`](/de/docs/Web/HTML/Reference/Elements/colgroup#char)-Richtung überschreiben wird.

- `charoff` {{deprecated_inline}}
  - : Hat keine Wirkung. Es war ursprünglich dafür vorgesehen, die Anzahl der Zeichen anzugeben, um die der Inhalt der Spaltenzelle vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen abgesetzt werden soll.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumuerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`valign`](/de/docs/Web/HTML/Reference/Elements/colgroup#valign)-Richtung überschreibt. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}
  - : Gibt eine Standardbreite für jede Spalte an. Zusätzlich zu den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die Mindestbreite sein soll, die nötig ist, um den Inhalt der Spalte zu halten. Auch relative Breiten wie `5*` können verwendet werden. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`width`](/de/docs/Web/HTML/Reference/Elements/colgroup#width)-Breite überschreibt. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren keine Spalten zu einer strukturellen Einheit zusammen. Diese Rolle übernimmt das {{HTMLElement("colgroup")}}-Element.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirkt auf `<col>`:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Hintergrundfarbe der Spalten über der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}) gemalt wird, jedoch hinter den Hintergrundfarben der Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), den Zeilen ({{htmlelement("tr")}}) und den einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}), sind die auf Tabellenspalten angewendeten Hintergründe nur sichtbar, wenn jede darüber liegende Ebene einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften sind anwendbar, jedoch nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` bei einer Spalte bewirkt, dass alle Zellen dieser Spalte nicht gerendert werden und Zellen, die sich in andere Spalten erstrecken, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe der anderen Spalten wird jedoch weiterhin so berechnet, als wären die Zellen in der zusammengebrochenen(n) Spalte(n) vorhanden. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das allgemeine Standards und bewährte Praktiken einführt.

Dieses Beispiel zeigt eine achtspaltige Tabelle, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen für eine Grundtabelle und erstellt eine einzige implizite Spaltengruppe. Drei `<col>`-Elemente sind innerhalb des `<colgroup>` enthalten, sodass drei stilisierbare Spalten erstellt werden. Das [`span`](#span)-Attribut gibt die Anzahl der Tabellenspalten an, die jedes `<col>` überspannen soll (standardmäßig `1` bei Auslassung), wodurch Attribute über die Spalten in jedem `<col>` geteilt werden können.

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

Wir verwenden CSS anstelle veralteter HTML-Attribute, um den Spalten eine Hintergrundfarbe zu verleihen und den Zelleninhalt auszurichten:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Start-Tag nicht obligatorisch ist. Das
        {{HTMLElement("colgroup")}} darf kein
        <a href="/de/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a>-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Spaltenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Umrandung von Spaltenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Spaltenzelleninhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Spaltenzelleninhalts
- {{cssxref("visibility")}}: CSS-Eigenschaft zum Ausblenden von Zellen einer Spalte
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Spalte
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudo-Klassen zur Auswahl der gewünschten Spaltenzellen
