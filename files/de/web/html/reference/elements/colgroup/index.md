---
title: "<colgroup>: Das Tabellen-Spaltengruppen-Element"
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `span`

  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<colgroup>`-Element umspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht erlaubt, wenn ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier nur zu Referenzzwecken bei der Aktualisierung vorhandenen Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Zelle der Spaltengruppe an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem Zeichen aus, das im [`char`](#char)-Attribut und im Versatz definiert ist, der durch das [`charoff`](#charoff)-Attribut angegeben wird. Beachten Sie, dass die Nachfahren-{{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`align`](/de/docs/Web/HTML/Reference/Elements/col#align)-Attribut überschreiben können. Verwenden Sie die {{cssxref("text-align")}}-CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf das `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor `td:nth-of-type(an+b)` pro Spalte, wobei `a` die Gesamtzahl der Spalten in der Tabelle und `b` die ordinale Position der Spalte in der Tabelle ist, z. B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch das Kombinieren angemessener CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Zelle der Spaltengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein `#` vorangestellt ist, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts auf ein Zeichen jeder Zelle der Spaltengruppe zu spezifizieren. Typische Werte dafür beinhalten einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für die [`align`](/de/docs/Web/HTML/Reference/Elements/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}

  - : Tut nichts. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen zu spezifizieren, um die der Spaltengruppeninhalt von dem Zeichen auszurichten, das durch das [`char`](#char)-Attribut spezifiziert wird.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Zelle der Spaltengruppe an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die Nachfahren-{{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`valign`](/de/docs/Web/HTML/Reference/Elements/col#valign)-Attribut überschreiben können. Verwenden Sie die {{cssxref("vertical-align")}}-CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf das `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type)-CSS-Selektor pro Spalte, z. B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch das Kombinieren angemessener CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Neben den Standardwerten für Pixel und Prozentsätze kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder umspannten Spalte die Mindestbreite ist, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten, wie `5*`, können auch verwendet werden. Beachten Sie, dass die Nachfahren-{{HTMLElement("col")}}-Elemente diesen Wert durch ihr eigenes [`width`](/de/docs/Web/HTML/Reference/Elements/col#width)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("width")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Nutzungshinweise

- Das `<colgroup>` sollte innerhalb eines {{HTMLElement("table")}} erscheinen, nach jedem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor jedem {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Element.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<colgroup>`:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe über der Tabelle, aber hinter Hintergrundfarben angewendet auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}), die Reihen ({{htmlelement("tr")}}), und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) gemalt wird, sind Hintergründe, die auf Tabellen-Spaltengruppen angewendet werden, nur sichtbar, wenn jede darüber gemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur wenn das `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe bewirkt, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden, und Zellen, die in andere Spalten hinein übergreifen, abgeschnitten werden. Der Platz, den diese Spalten in der Spaltengruppe eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch immer noch so berechnet, als ob die Zellen in den kollabierten Spalten in der Spaltengruppe vorhanden sind. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices einführt.

Dieses Beispiel demonstriert eine sieben-spaltige Tabelle, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine grundlegende Tabelle zu strukturieren, indem Spaltengruppen erstellt werden. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut spezifiziert.

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
        Wenn das <a href="#span"><code>span</code></a>-Attribut
        vorhanden ist: keiner.<br />Wenn das
        Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn es ein {{HTMLElement("col")}}
        Element als erstes Kind hat und wenn es nicht von einer
        <code>&lt;colgroup&gt;</code> gefolgt ist, dessen End-Tag ausgelassen wurde.<br />Das
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

- [Lernen: Grundlagen HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zellengruppe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder der Zellgruppe zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellgruppe horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Zellgruppe vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Zellengruppe zu verbergen (oder anzuzeigen)
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite für jede Spalte in einer Spaltengruppe zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudo-Klassen, um die gewünschten Zellspalten auszuwählen
