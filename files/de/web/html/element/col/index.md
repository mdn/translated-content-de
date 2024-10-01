---
title: "<col>: Das Table Column Element"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr Eltern-{{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur gültig als Kind eines {{HTMLElement("colgroup")}}-Elements, das kein definiertes [`span`](/de/docs/Web/HTML/Element/colgroup#span) Attribut hat.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`
  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<col>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier nur zu Referenzzwecken bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den textuellen Inhalt an dem durch das [`char`](#char) Attribut definierten Zeichen und an dem durch das [`charoff`](#charoff) Attribut definierten Versatz aus. Beachten Sie, dass dieses Attribut die im Eltern-{{HTMLElement("colgroup")}}-Element angegebene [`align`](/de/docs/Web/HTML/Element/colgroup#align) Überschreibung ist. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<col>`-Element zeigt keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [sechsstelliger Hexadezimal-RGB-Code](/de/docs/Web/CSS/hex-color), mit `#` vorangestellt, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle anzugeben. Typische Werte hierfür umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch die im Eltern-{{HTMLElement("colgroup")}}-Element angegebene [`char`](/de/docs/Web/HTML/Element/colgroup#char) Überschreibung ist.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um die der Inhalt der Spaltenzelle von dem Zeichen, das im [`char`](#char) Attribut angegeben wurde, auszurichten.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle`, und `top`. Beachten Sie, dass dieses Attribut die im Eltern-{{HTMLElement("colgroup")}}-Element angegebene [`valign`](/de/docs/Web/HTML/Element/colgroup#valign) Überschreibung ist. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<col>`-Element zeigt keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zentriert auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan) Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Zusätzliche zu den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimale Breite sein soll, die notwendig ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die im Eltern-{{HTMLElement("colgroup")}}-Element angegebene [`width`](/de/docs/Web/HTML/Element/colgroup#width) Überschreibung ist. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Rolle des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<col>`:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Spaltenhintergrundfarbe über der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}) gemalt, aber hinter den Hintergrundfarben, die den Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), den Zeilen ({{htmlelement("tr")}}), und den einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) aufgetragen werden, gemalt wird, sind Hintergründe, die auf Tabellenspalten angewendet werden, nur sichtbar, wenn jede Schicht, die darüber gemalt wird, einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur, wenn der `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte führt dazu, dass alle Zellen dieser Spalte nicht gerendert werden, und Zellen, die in andere Spalten hineinreichen, werden abgeschnitten. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch immer noch berechnet, als ob die Zellen in der zusammengeklappten Spalte(n) vorhanden wären. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width` Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Praktiken vorstellt.

Dieses Beispiel zeigt eine Tabelle mit acht Spalten, die in drei `<col>`-Elemente unterteilt sind.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen zu einer Basistabelle, indem es eine einzige implizite Spaltengruppe erstellt. Drei `<col>`-Elemente sind innerhalb des `<colgroup>` enthalten und erstellen drei stilisierbare Spalten. Das [`span`](#span) Attribut gibt die Anzahl der Tabellenkolonnen an, die jedes `<col>` überspannen soll (standardmäßig `1`, wenn weggelassen), wodurch Attribute über die Spalten in jedem `<col>` geteilt werden können.

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

Wir verwenden CSS anstelle von veralteten HTML-Attributen, um eine Hintergrundfarbe für die Spalten bereitzustellen und den Zellinhalt auszurichten:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden
        kann, da sein Start-Tag nicht obligatorisch ist. Das
        {{HTMLElement("colgroup")}} darf kein
        <a href="/de/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> Attribut haben.
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Spaltenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung von Rändern der Spaltenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Spaltenzelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Spaltenzelle
- {{cssxref("visibility")}}: CSS-Eigenschaft zum Ausblenden von Zellen einer Spalte
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite jeder Spalte
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Spaltenzellen
