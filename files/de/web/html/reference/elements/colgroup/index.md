---
title: "<colgroup>: Das Table Column Group Element"
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<colgroup>`**-[HTML](/de/docs/Web/HTML)-Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `span`
  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<colgroup>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als Null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht erlaubt, wenn ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind lediglich zu Referenzzwecken für die Aktualisierung vorhandenen Codes und für historisches Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Spaltengruppenzelle an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt am im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass die Nachkommen {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`align`](/de/docs/Web/HTML/Reference/Elements/col#align)-Attribut überschreiben können. Verwenden Sie die {{cssxref("text-align")}} CSS-Eigenschaft für die {{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Festlegen von `text-align` auf dem `<colgroup>`-Element hat keine Wirkung, da die {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor pro Spalte, wobei `a` die Gesamtanzahl der Spalten in der Tabelle und `b` die Ordnungsposition der Spalte in der Tabelle ist, z.B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombinieren geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Zelle der Spaltengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), vorangestellt mit einem `#`, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltengruppenzelle zu spezifizieren. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für die [`align`](/de/docs/Web/HTML/Reference/Elements/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}
  - : Macht nichts. Es war ursprünglich dazu gedacht, die Anzahl von Zeichen anzugeben, um die der Inhalt der Spaltengruppenzelle vom im [`char`](#char)-Attribut angegebenen Ausrichtungszeichen versetzt ist.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Zelle der Spaltengruppe an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die Nachkommen {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`valign`](/de/docs/Web/HTML/Reference/Elements/col#valign)-Attribut überschreiben können. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft für die {{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Festlegen von `vertical-align` auf dem `<colgroup>`-Element hat keine Wirkung, da die {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/Reference/Selectors/:nth-of-type) CSS-Selektor pro Spalte, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombinieren geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}
  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Neben den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder Spalte die minimale Breite sein sollte, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die Nachkommen {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`width`](/de/docs/Web/HTML/Reference/Elements/col#width)-Attribut überschreiben können. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<colgroup>` sollte innerhalb eines {{HTMLElement("table")}} erscheinen, nach jedem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor jedem {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Element.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<colgroup>`:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe über der Tabelle, aber hinter den auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}), und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendeten Hintergrundfarben gemalt wird, sind auf Tabellenspalten angewendete Hintergründe nur sichtbar, wenn jede darüber liegende Ebene einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert und in andere Spalten hineinreichende Zellen abgeschnitten werden. Der Raum, den diese Spalten in der Spaltengruppe eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch weiterhin so berechnet, als wären die Zellen in der zusammengebrochenen Spalte(n) in der Spaltengruppe vorhanden. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine minimale Breite für die Spalten in der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit Einführung in die gängigen Standards und besten Praktiken.

Dieses Beispiel zeigt eine Tabelle mit sieben Spalten, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten überspannen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine einfache Tabelle durch die Erstellung von Spaltengruppen zu strukturieren. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut festgelegt.

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <thead>
    <tr>
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
  </tbody>
</table>
```

### CSS

Gruppierte Spalten können verwendet werden, um die Struktur mit CSS visuell hervorzuheben:

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
        vorhanden ist: keiner.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tags weglassen</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn es als erstes Kind ein
        {{HTMLElement("col")}}-Element hat und wenn es nicht von einem
        <code>&lt;colgroup&gt;</code> gefolgt ist, dessen End-Tag
        weggelassen wurde.<br />Das
        End-Tag kann weggelassen werden, wenn es nicht von einem Leerzeichen
        oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;colgroup&gt;</code> muss nach jedem
        {{HTMLElement("caption")}}-Element, aber vor jedem
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und
        {{HTMLElement("tr")}}-Element erscheinen.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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

- [Lernen: HTML-Tabellen-Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Zelle der Spaltengruppe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Spaltengruppenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten des Inhalts jeder Zelle der Spaltengruppe
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten des Inhalts jeder Zelle der Spaltengruppe
- {{cssxref("visibility")}}: CSS-Eigenschaft zum Ausblenden (oder Anzeigen) von Zellen einer Spaltengruppe
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Spalte in einer Spaltengruppe
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Spaltenzellen
