---
title: "<colgroup>: Das Table-Column-Group-Element"
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
---

{{HTMLSidebar}}

Das **`<colgroup>`** [HTML](/de/docs/Web/HTML) Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

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

  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<colgroup>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als Null sein. Wenn das Attribut nicht vorhanden ist, beträgt der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht zulässig, wenn innerhalb des `<colgroup>`-Elements ein oder mehrere {{HTMLElement("col")}}-Elemente vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltengruppe an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der Wert `char` den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem im [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass die {{HTMLElement("col")}}-Elemente der Nachkommen diesen Wert mit ihrem eigenen [`align`](/de/docs/Web/HTML/Reference/Elements/col#align)-Attribut überschreiben können. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}} auf den {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}} und {{HTMLElement("th")}} keine Nachkommen des `<colgroup>`-Elements sind und daher nicht davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie pro Spalte den CSS-Selektor `td:nth-of-type(an+b)`, wobei `a` die Gesamtanzahl der Spalten in der Tabelle und `b` die Position der Spalte in der Tabelle ist, z.B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt erzielt werden, indem geeignete CSS-Attribut-Selektoren wie `[colspan=n]` kombiniert werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB](/de/docs/Web/HTML/Reference/Elements/colgroup#bgcolor)-Code, vorangestellt mit einem `#`, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts an einem Zeichen jedes Spalten-Group-Zelle zu spezifizieren. Typische Werte hierfür sind einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für das [`align`](/de/docs/Web/HTML/Reference/Elements/col#align) der zu dieser Spaltengruppe gehörenden {{HTMLElement("col")}}-Elemente verwendet wird.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um den Inhalt der Spaltengruppe von dem von [`char`](#char)-Attribut angegebenen Zeichen auszurichten.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltengruppe an. Die möglichen {{Glossary("enumerated", "aufgezählten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die {{HTMLElement("col")}}-Elemente der Nachkommen diesen Wert mit ihrem eigenen [`valign`](/de/docs/Web/HTML/Reference/Elements/col#valign)-Attribut überschreiben können. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}} auf den {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}} und {{HTMLElement("th")}} keine Nachkommen des `<colgroup>`-Elements sind und daher nicht davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selektor [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type) pro Spalte, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt erzielt werden, indem geeignete CSS-Attribut-Selektoren wie `[colspan=n]` kombiniert werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standardwerten für Pixel und Prozentsätze kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimale Breite ist, die notwendig ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die {{HTMLElement("col")}}-Elemente der Nachkommen diesen Wert mit ihrem eigenen [`width`](/de/docs/Web/HTML/Reference/Elements/col#width)-Attribut überschreiben können. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<colgroup>` sollte innerhalb eines {{HTMLElement("table")}} erscheinen, nach jedem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor allen {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirkt sich auf `<colgroup>` aus:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Spaltengruppe-Hintergrundfarbe über dem Tisch, aber hinter den auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppe ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}), die Zeilen ({{HTMLElement("tr")}}) und die einzelnen Zellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}) angewendeten Hintergrundfarben gemalt wird, sind auf Tabellen-Spalten-Gruppen angewendete Hintergrundfarben nur sichtbar, wenn jede darüber gemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur wenn das `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden, und in andere Spalten übergreifende Zellen beschnitten werden. Der von diesen Spalten in der Spaltengruppe belegte Platz wird entfernt. Die Größe anderer Spalten wird jedoch berechnet, als ob die Zellen in den zusammengebrochenen Spalte(n) in der Spaltengruppe vorhanden wären. Andere `visibility`-Werte haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und bewährte Verfahren einführt.

Dieses Beispiel zeigt eine sieben Spalten umfassende Tabelle, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>` Elemente werden verwendet, um eine grundlegende Tabelle zu strukturieren, indem Spaltengruppen erstellt werden. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut angegeben.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Wenn das <a href="#span"><code>span</code></a>-Attribut
        vorhanden ist: keine.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag kann ausgelassen werden, wenn es ein {{HTMLElement("col")}}
        Element als erstes Kind hat und nicht von einem
        <code>&lt;colgroup&gt;</code> gefolgt wird, dessen End-Tag ausgelassen wurde.<br />Der
        End-Tag kann ausgelassen werden, wenn er nicht von einem Leerzeichen oder einem Kommentar gefolgt wird.
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
      <th scope="row">Implizierte ARIA Rolle</th>
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

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabelenverwandte Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spalten-Gruppe zu setzen
- {{cssxref("border")}}: CSS-Eigenschaft, um die Ränder von Spaltengruppen zu steuern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltengruppe horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Inhalt jeder Spaltengruppe vertikal auszurichten
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spaltengruppe auszublenden (oder anzuzeigen)
- {{cssxref("width")}}: CSS-Eigenschaft, um die Standardbreite für jede Spalte in einer Spaltengruppe zu steuern
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudo-Klassen, um die gewünschten Spaltenzellen auszuwählen
