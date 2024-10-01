---
title: "<colgroup>: Das Table Column Group-Element"
slug: Web/HTML/Element/colgroup
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<colgroup>`** [HTML](/de/docs/Web/HTML)-Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`

  - : Gibt die Anzahl aufeinanderfolgender Spalten an, die das `<colgroup>`-Element umfasst. Der Wert muss eine positive ganze Zahl größer als Null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribute ist nicht zulässig, wenn ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie werden hier dokumentiert für Referenzzwecke beim Aktualisieren bestehender Codes und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Bestimmt die horizontale Ausrichtung jeder Spaltengruppe. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem Zeichen aus, das im [`char`](#char)-Attribut und dem Versatz definiert wurde, der durch das [`charoff`](#charoff)-Attribut definiert ist. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihren eigenen [`align`](/de/docs/Web/HTML/Element/col#align) Attributen überschreiben können. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Festlegen von `text-align` auf dem `<colgroup>`-Element hat keinen Effekt, da {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente keine Nachfolger des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor pro Spalte, wobei `a` die Gesamtanzahl der Spalten in der Tabelle und `b` die Ordnungsposition der Spalte in der Tabelle ist, z.B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination von geeigneten CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Bestimmt die Hintergrundfarbe jeder Spaltengruppe. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der von einem `#` eingeleitet wird, oder ein [Farb-Schlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}}-Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltengruppe zu bestimmen. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es weiterhin als Standardwert für die [`align`](/de/docs/Web/HTML/Element/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen festzulegen, um den Inhalt der Spaltengruppe von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Bestimmt die vertikale Ausrichtung jeder Spaltengruppe. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihren eigenen [`valign`](/de/docs/Web/HTML/Element/col#valign) Attributen überschreiben können. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Festlegen von `vertical-align` auf dem `<colgroup>`-Element hat keinen Effekt, da {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente keine Nachfolger des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type) CSS-Selektor pro Spalte, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt durch die Kombination von geeigneten CSS-Attributselektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standard-Pixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimale Breite ist, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die nachfolgenden {{HTMLElement("col")}}-Elemente diesen Wert mit ihren eigenen [`width`](/de/docs/Web/HTML/Element/col#width) Attributen überschreiben können. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Anwendungshinweise

- Das `<colgroup>` sollte innerhalb einer {{HTMLElement("table")}} erscheinen, nach einem {{HTMLElement("caption")}}-Element (falls verwendet), aber vor allen {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}-Elementen.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften beeinflusst `<colgroup>`:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe über der Tabelle, aber hinter Hintergrundfarben, die auf die Spalten ({{HTMLElement("col")}}), die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}), und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewandt werden, gemalt wird, sind Hintergründe, die auf Tabellenspalten-groups angewandt werden, nur sichtbar, wenn jede Schicht, die über ihnen gemalt wird, einen transparenten Hintergrund aufweist.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, aber nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} setzt.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Raum, den diese Spalten in der Spaltengruppe besetzt hätten, wird entfernt. Allerdings wird die Größe anderer Spalten weiterhin berechnet, als wären die Zellen in der eingeklappten Spalte(n) in der Spaltengruppe vorhanden. Andere Werte für `visibility` haben keinen Effekt.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Sehen Sie sich {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel an, das gängige Standards und Best Practices einführt.

Dieses Beispiel zeigt eine Tabelle mit sieben Spalten, die in zwei `<colgroup>`-Elemente unterteilt ist, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine grundlegende Tabelle zu strukturieren, indem Spaltengruppen erstellt werden. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut angegeben.

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

Gruppierte Spalten können verwendet werden, um die Struktur visuell hervorzuheben, indem CSS verwendet wird:

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
        Wenn das <a href="#span"><code>span</code></a> Attribut
        vorhanden ist: keiner.<br />Wenn nicht vorhanden: null oder mehr {{HTMLElement("col")}}-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn es ein {{HTMLElement("col")}}-Element als erstes Kind hat und wenn es nicht von einem
        <code>&lt;colgroup&gt;</code> gefolgt wird, dessen End-Tag weggelassen wurde.<br />Das
        End-Tag kann weggelassen werden, wenn darauf kein Leerzeichen oder Kommentar folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("table")}}-Element. Das
        <code>&lt;colgroup&gt;</code> muss nach einem
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Weitere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltengruppe festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Ränder der Spaltengruppe
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Spaltengruppe
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Spaltengruppe
- {{cssxref("visibility")}}: CSS-Eigenschaft, um die Zellen einer Spaltengruppe zu verstecken (oder zu zeigen)
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Spalte in einer Spaltengruppe
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Spaltenzellen
