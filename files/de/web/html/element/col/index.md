---
title: "<col>: Das Tabellenspalten-Element"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<col>`** [HTML](/de/docs/Web/HTML)-Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur als Kind eines {{HTMLElement("colgroup")}}-Elements gültig, das kein [`span`](/de/docs/Web/HTML/Element/colgroup#span)-Attribut definiert hat.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`
  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<col>`-Element umfasst. Der Wert muss eine positive ganze Zahl größer als null sein. Ist dieses Attribut nicht vorhanden, beträgt der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier aus Gründen der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt am durch das [`char`](#char)-Attribut definierten Zeichen und am durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`align`](/de/docs/Web/HTML/Element/colgroup#align) überschreibt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`char`](/de/docs/Web/HTML/Element/colgroup#char) dennoch überschreibt.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich gedacht, die Anzahl der Zeichen zum Versetzen des Spaltenzelleninhalts vom durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu spezifizieren.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`valign`](/de/docs/Web/HTML/Element/colgroup#valign) überschreibt. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z. B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte an. Neben den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die minimale Breite sein sollte, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass dieses Attribut die im übergeordneten {{HTMLElement("colgroup")}}-Element angegebene [`width`](/de/docs/Web/HTML/Element/colgroup#width) überschreibt. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Aufgabe des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<col>`:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Spaltenhintergrundfarbe über der Tabelle und den Spaltengruppen ({{HTMLElement("colgroup")}}) gemalt wird, aber hinter Hintergrundfarben, die auf die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendet werden, sind Hintergründe, die auf Tabellenspalten angewendet werden, nur sichtbar, wenn jede Schicht, die auf ihnen gemalt wird, einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften greifen, aber nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte hat zur Folge, dass alle Zellen dieser Spalte nicht dargestellt werden und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Allerdings wird die Größe anderer Spalten immer noch berechnet, als wären die Zellen in den zusammengebrochenen Spalten vorhanden. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

Dieses Beispiel zeigt eine achtspaltige Tabelle, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen zu einer einfachen Tabelle und erstellt eine einzige implizite Spaltengruppe. Drei `<col>`-Elemente sind innerhalb des `<colgroup>` enthalten und erstellen drei stilisierbare Spalten. Das [`span`](#span)-Attribut gibt die Anzahl der Tabellenspalten an, die jedes `<col>` umfassen soll (standardmäßig `1`, wenn es weggelassen wird), wodurch Attribute über die Spalten in jedem `<col>` hinweg geteilt werden können.

```html
<table>
  <caption>
    Wöchentliche persönliche Aktivitäten
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <tr>
    <th>Periode</th>
    <th>Mo</th>
    <th>Di</th>
    <th>Mi</th>
    <th>Do</th>
    <th>Fr</th>
    <th>Sa</th>
    <th>So</th>
  </tr>
  <tr>
    <th>Vormittag</th>
    <td>Zimmer aufräumen</td>
    <td>Fußballtraining</td>
    <td>Tanzkurs</td>
    <td>Geschichtsunterricht</td>
    <td>Getränke kaufen</td>
    <td>Lernstunde</td>
    <td>Freizeit</td>
  </tr>
  <tr>
    <th>Nachmittag</th>
    <td>Yoga</td>
    <td>Schachclub</td>
    <td>Freunde treffen</td>
    <td>Gymnastik</td>
    <td>Geburtstagsparty</td>
    <td>Angelausflug</td>
    <td>Freizeit</td>
  </tr>
</table>
```

### CSS

Wir verwenden CSS, anstatt veraltete HTML-Attribute, um den Spalten einen Hintergrund zu geben und den Zellinhalt auszurichten:

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140, 140, 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
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
      <td>Keine; es ist ein {{Glossary("void element", "leer-Elemen")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
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
      <td>{{domxref("HTMLTableColElement")}}</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltenzelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Spaltenzellen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltenzelle vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spalte zu verbergen
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite jeder Spalte zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
