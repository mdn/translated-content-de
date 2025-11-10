---
title: "<col>: Das Tabellenspalten-Element"
slug: Web/HTML/Reference/Elements/col
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<col>`** [HTML](/de/docs/Web/HTML)-Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch das übergeordnete {{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur als untergeordnetes Element eines {{HTMLElement("colgroup")}}-Elements gültig, das kein [`span`](/de/docs/Web/HTML/Reference/Elements/colgroup#span)-Attribut definiert hat.

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
  <thead>
    <tr>
      <td></td>
      <th scope="col">Batman</th>
      <th scope="col">Robin</th>
      <th scope="col">The Flash</th>
      <th scope="col">Kid Flash</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Skill</th>
      <td>Smarts, strong</td>
      <td>Dex, acrobat</td>
      <td>Super speed</td>
      <td>Super speed</td>
    </tr>
  </tbody>
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
  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<col>`-Element umfasst. Der Wert muss eine positive ganze Zahl größer als Null sein. Wenn dieses Attribut nicht vorhanden ist, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier zur Referenz bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung der Zellen jeder Spalte an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass dieses Attribut die im {{HTMLElement("colgroup")}} übergeordneten Element angegebene [`align`](/de/docs/Web/HTML/Reference/Elements/colgroup#align) überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` beim `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }`, um die zweite Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombinieren geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe der Zellen jeder Spalte. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), der durch ein `#` vorangestellt wird, oder ein [Farbwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle zu spezifizieren. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldbeträge auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, es wird jedoch immer noch das angegebene [`char`](/de/docs/Web/HTML/Reference/Elements/colgroup#char) seines {{HTMLElement("colgroup")}} übergeordneten Elements überschreiben.

- `charoff` {{deprecated_inline}}
  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um den Inhalt der Spaltenzelle von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung der Zellen jeder Spalte an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die im {{HTMLElement("colgroup")}} übergeordneten Element angegebene [`valign`](/de/docs/Web/HTML/Reference/Elements/colgroup#valign) überschreibt. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` beim `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zentriert auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombinieren geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}
  - : Gibt eine Standardbreite für jede Spalte an. Neben den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die minimale Breite sein sollte, die erforderlich ist, um den Inhalt der Spalte zu halten. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die im {{HTMLElement("colgroup")}} übergeordneten Element angegebene [`width`](/de/docs/Web/HTML/Reference/Elements/colgroup#width) überschreibt. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren die Spalten nicht strukturell. Dies ist die Rolle des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirkt sich auf `<col>` aus:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Spaltenhintergrundfarbe über der Tabelle und Spaltengruppen ({{HTMLElement("colgroup")}}) gezeichnet wird, aber hinter den auf die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendeten Hintergrundfarben liegt, sind die auf die Tabellenspalten angewendeten Hintergründe nur sichtbar, wenn jede darüber gezeichnete Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn die `<table>`-Eigenschaft {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt ist.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte bewirkt, dass alle Zellen dieser Spalte nicht angezeigt werden und Zellen, die in andere Spalten hineinragen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der zusammengeklappten Spalte(n) vorhanden wären. Andere Werte für `visibility` haben keine Auswirkungen.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

Dieses Beispiel zeigt eine Tabelle mit acht Spalten, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen für eine Basistabelle und erstellt eine einzelne implizite Spaltengruppe. Innerhalb des `<colgroup>` sind drei `<col>`-Elemente enthalten, die drei stilisierbare Spalten erstellen. Das [`span`](#span)-Attribut gibt an, wie viele Tabellenspalten jedes `<col>` umfassen soll (standardmäßig `1`, wenn weggelassen), wodurch Attribute über die Spalten in jedem `<col>` hinweg geteilt werden können.

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
  <thead>
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
  </thead>
  <tbody>
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
  </tbody>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, kann jedoch implizit definiert werden, da sein Start-Tag nicht obligatorisch ist. Das
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltenzelle zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder von Spaltenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spalte auszublenden
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Spalte
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Spaltenzellen
