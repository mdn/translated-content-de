---
title: "<col>: Das Tabellen-Spaltenelement"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}} Element dargestellt wird. Das `<col>` Element ist nur als Kind eines {{HTMLElement("colgroup")}} Elements gültig, das kein [`span`](/de/docs/Web/HTML/Element/colgroup#span) Attribut definiert hat.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`
  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<col>` Element umfasst. Der Wert muss eine positive ganze Zahl größer als Null sein. Falls nicht vorhanden, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier nur zur Referenz beim Aktualisieren vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltentabelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char` Wert den Textinhalt an dem Zeichen aus, das im [`char`](#char) Attribut und dem Offset definiert ist, der durch das [`charoff`](#charoff) Attribut definiert ist. Beachten Sie, dass dieses Attribut die angegebene [`align`](/de/docs/Web/HTML/Element/colgroup#align) des übergeordneten {{HTMLElement("colgroup")}} Elements überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<col>` Element hat keinen Effekt, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, nutzen Sie den `td:nth-of-type(an+b)` CSS Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltentabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), vorangestellt von einem `#`, oder ein [Farbbegriff](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich gedacht, die Ausrichtung des Inhalts auf ein Zeichen jeder Spaltentabelle anzugeben. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch die spezifizierte [`char`](/de/docs/Web/HTML/Element/colgroup#char) seines übergeordneten {{HTMLElement("colgroup")}} Elements überschreibt.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich gedacht, die Anzahl der Zeichen anzugeben, um den Spaltentabelleninhalt von dem im [`char`](#char) Attribut spezifizierten Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltentabelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die angegebene [`valign`](/de/docs/Web/HTML/Element/colgroup#valign) des übergeordneten {{HTMLElement("colgroup")}} Elements überschreibt. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<col>` Element hat keinen Effekt, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, nutzen Sie den `td:nth-of-type(an+b)` CSS Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zentriert anzuordnen.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Zusätzlich zu den Standardwerten für Pixel und Prozent kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die minimale Breite sein sollte, die notwendig ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die angegebene [`width`](/de/docs/Web/HTML/Element/colgroup#width) seines übergeordneten {{HTMLElement("colgroup")}} Elements überschreibt. Verwenden Sie stattdessen die {{cssxref("width")}} CSS Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<col>` Element wird innerhalb eines {{HTMLElement("colgroup")}} Elements verwendet, das kein `span` Attribut hat.
- Die `<col>` Elemente gruppieren Spalten nicht strukturell. Dies ist die Rolle des {{HTMLElement("colgroup")}} Elements.
- Nur eine begrenzte Anzahl an CSS-Eigenschaften beeinflusst `<col>`:
  - {{cssxref("background")}}: Die verschiedenen `background` Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Hintergrundfarbe der Spalte über der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}), aber hinter den Hintergrundfarben der Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), den Zeilen ({{htmlelement("tr")}}), und den einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) liegt, sind auf Spaltentabellen angewendete Hintergründe nur sichtbar, wenn jede Schicht, die darüber gemalt wird, einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border` Eigenschaften gelten, aber nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte bedeutet, dass alle Zellen dieser Spalte nicht gerendert werden, und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe der anderen Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der eingeklappten Spalte(n) vorhanden sind. Andere Werte für `visibility` haben keinen Effekt.
  - {{cssxref("width")}}: Die `width` Eigenschaft definiert eine Mindestbreite für die Spalte, als wäre {{cssxref("min-width")}} gesetzt.

## Beispiel

Sehen Sie {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

Dieses Beispiel zeigt eine achtspaltige Tabelle, die in drei `<col>` Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}} Element bietet Strukturen für eine grundlegende Tabelle und erstellt eine einzige implizite Spaltengruppe. Drei `<col>` Elemente sind innerhalb des `<colgroup>` enthalten, was drei stilisierbare Spalten erstellt. Das [`span`](#span) Attribut gibt die Anzahl der Tabellenspalten an, die jeder `<col>` umfassen soll (standardmäßig `1`, wenn nicht angegeben), wobei Attribute über die Spalten hinweg in jedem `<col>` geteilt werden können.

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
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Starttag nicht zwingend ist. Das
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
- {{cssxref("background-color")}}: CSS Eigenschaft, um die Hintergrundfarbe jeder Spaltentabelle festzulegen
- {{cssxref("border")}}: CSS Eigenschaft zur Steuerung der Rahmen von Spaltentabellen
- {{cssxref("text-align")}}: CSS Eigenschaft, um den Inhalt jeder Spaltentabelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS Eigenschaft, um den Inhalt jeder Spaltentabelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS Eigenschaft, um die Zellen einer Spalte zu verbergen
- {{cssxref("width")}}: CSS Eigenschaft, um die Standardbreite für jede Spalte zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS Pseudoklassen, um die gewünschten Spaltentabellen auszuwählen
