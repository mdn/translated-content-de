---
title: "<colgroup>: Das Table Column Group-Element"
slug: Web/HTML/Element/colgroup
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<colgroup>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`

  - : Gibt die Anzahl der aufeinander folgenden Spalten an, die das `<colgroup>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht erlaubt, wenn ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz beim Aktualisieren vorhandenen Codes und für historisches Interesse dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltengruppenzelle an. Die möglichen {{Glossary("enumerated")}}-Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert die Textinhalte auf das durch das [`char`](#char)-Attribut definierte Zeichen und den durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`align`](/de/docs/Web/HTML/Element/col#align)-Attribut überschreiben können. Verwenden Sie die {{cssxref("text-align")}}-CSS-Eigenschaft bei den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)`-CSS-Selektor pro Spalte, wobei `a` die Gesamtzahl der Spalten in der Tabelle und `b` die Position der Spalte in der Tabelle ist, z.B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltengruppenzelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger, hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), dem ein '`#`' vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS-{{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Wirkung. Es war ursprünglich vorgesehen, die Ausrichtung des Inhalts auf ein Zeichen jeder Spaltengruppenzelle zu spezifizieren. Typische Werte hierfür umfassen einen Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es weiterhin als Standardwert für das [`align`](/de/docs/Web/HTML/Element/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}

  - : Hat keine Wirkung. Es war ursprünglich vorgesehen, die Anzahl der Zeichen anzugeben, um den Spaltenzelleninhalt vom Ausrichtungszeichen, das durch das [`char`](#char)-Attribut angegeben ist, zu verschieben.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltengruppenzelle an. Die möglichen {{Glossary("enumerated")}}-Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`valign`](/de/docs/Web/HTML/Element/col#valign)-Attribut überschreiben können. Verwenden Sie die {{cssxref("vertical-align")}}-CSS-Eigenschaft auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf dem `<colgroup>`-Element hat keine Wirkung, da {{HTMLElement("td")}}- und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type)-CSS-Selektor pro Spalte, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zentriert auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination geeigneter CSS-Attributselektoren wie `[colspan=n]` erreicht werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Neben den Standardwerten in Pixeln und Prozentsätzen kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder über spannten Spalte die minimale Breite sein soll, die erforderlich ist, um den Inhalt der Spalte zu halten. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`width`](/de/docs/Web/HTML/Element/col#width)-Attribut überschreiben können. Verwenden Sie die {{cssxref("width")}}-CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<colgroup>` sollte innerhalb eines {{HTMLElement("table")}}-Elements erscheinen, nach einem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor allen {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<colgroup>`:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe auf der Tabelle, aber hinter den Hintergrundfarben, die auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendet werden, gemalt wird, sind Hintergründe, die auf Spaltengruppen angewendet werden, nur sichtbar, wenn jede darüber gemalte Ebene einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur, wenn die `<table>`-Eigenschaft auf {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt ist.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden, und Zellen, die in andere Spalten hineinragen, abgeschnitten werden. Der Platz, den diese Spalten in der Spaltengruppe gehabt hätten, wird entfernt. Die Größe anderer Spalten wird jedoch immer noch berechnet, als wären die Zellen in der zusammengeklappten Spalte(n) in der Spaltengruppe vorhanden. Andere `visibility`-Werte haben keine Auswirkungen.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel, das gängige Standards und Best Practices vorstellt.

Dieses Beispiel zeigt eine Tabelle mit sieben Spalten, die in zwei `<colgroup>`-Elemente unterteilt sind, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine grundlegende Tabelle durch Erstellen von Spaltengruppen zu strukturieren. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut angegeben.

```html
<table>
  <caption>
    Persönliche wöchentliche Aktivitäten
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
    <td>Zimmer reinigen</td>
    <td>Fußballtraining</td>
    <td>Tanzkurs</td>
    <td>Geschichtsunterricht</td>
    <td>Getränke kaufen</td>
    <td>Studienstunde</td>
    <td>Freizeit</td>
  </tr>
  <tr>
    <td>Yoga</td>
    <td>Schachclub</td>
    <td>Freunde treffen</td>
    <td>Turnen</td>
    <td>Geburtstagsfeier</td>
    <td>Angelausflug</td>
    <td>Freizeit</td>
  </tr>
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das <a href="#span"><code>span</code></a>-Attribut vorhanden
        ist: keine.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag darf ausgelassen werden, wenn es ein
        {{HTMLElement("col")}}-Element als erstes Kind hat und wenn es nicht
        von einem <code>&lt;colgroup&gt;</code> vorangegangen ist, dessen
        Abschluss-Tag ausgelassen wurde.<br />Das
        Abschluss-Tag darf ausgelassen werden, wenn es nicht von einem Leerzeichen
        oder einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;colgroup&gt;</code> muss nach jedem
        {{HTMLElement("caption")}}-Element erscheinen, aber vor jedem
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} und
        {{HTMLElement("tr")}}-Element.
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft zum Setzen der Hintergrundfarbe jeder Spaltengruppenzelle
- {{cssxref("border")}}: CSS-Eigenschaft zur Kontrolle der Rahmen von Spaltengruppenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung jedes Spaltengruppenzellinhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung jedes Spaltengruppenzellinhalts
- {{cssxref("visibility")}}: CSS-Eigenschaft, um Zellen einer Spaltengruppe zu verstecken (oder anzuzeigen)
- {{cssxref("width")}}: CSS-Eigenschaft zur Kontrolle der Standardbreite für jede Spalte in einer Spaltengruppe
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zum Auswählen der gewünschten Spaltenzellen
