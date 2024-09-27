---
title: "<colgroup>: Das Table Column Group Element"
slug: Web/HTML/Element/colgroup
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<colgroup>`** [HTML](/de/docs/Web/HTML) Element definiert eine Gruppe von Spalten innerhalb einer Tabelle.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `span`

  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<colgroup>`-Element umspannt. Der Wert muss eine positive Ganzzahl sein, die größer als null ist. Wenn nicht vorhanden, ist der Standardwert `1`.

    > [!NOTE]
    > Das `span`-Attribut ist nicht erlaubt, wenn ein oder mehrere {{HTMLElement("col")}}-Elemente innerhalb des `<colgroup>` vorhanden sind.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten zur Referenz beim Aktualisieren des vorhandenen Codes und aus historischen Gründen dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung jeder Spaltengruppezelle an. Die möglichen [aufzählbaren](/de/docs/Glossary/enumerated) Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt auf dem durch das [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass die abgeleiteten {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`align`](/de/docs/Web/HTML/Element/col#align)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `text-align` auf das `<colgroup>`-Element hat keinen Effekt, da {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den `td:nth-of-type(an+b)` CSS-Selektor pro Spalte, wobei `a` die Gesamtzahl der Spalten in der Tabelle und `b` die Ordnungsposition der Spalte in der Tabelle ist, z.B. `td:nth-of-type(7n+2) { text-align: right; }`, um die Zellen der zweiten Spalte rechtsbündig auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt erreicht werden, indem geeignete CSS-Attributselektoren wie `[colspan=n]` kombiniert werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe jeder Spaltengruppezelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/hex-color), das mit einem `#` vorangestellt ist, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Ausrichtung des Inhalts an einem Zeichen jeder Spaltengruppezelle festzulegen. Typische Werte hierfür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es immer noch als Standardwert für das [`align`](/de/docs/Web/HTML/Element/col#align) der {{HTMLElement("col")}}-Elemente verwendet wird, die Mitglieder dieser Spaltengruppe sind.

- `charoff` {{deprecated_inline}}

  - : Hat keine Funktion. Es war ursprünglich dazu gedacht, die Anzahl der Zeichen anzugeben, um den Inhalt der Spaltengruppezelle von dem durch das [`char`](#char)-Attribut angegebenen Ausrichtungszeichen zu versetzen.

- `valign` {{deprecated_inline}}

  - : Gibt die vertikale Ausrichtung jeder Spaltengruppezelle an. Die möglichen [aufzählbaren](/de/docs/Glossary/enumerated) Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass die abgeleiteten {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`valign`](/de/docs/Web/HTML/Element/col#valign)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}}-Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Das Setzen von `vertical-align` auf das `<colgroup>`-Element hat keinen Effekt, da {{HTMLElement("td")}} und {{HTMLElement("th")}}-Elemente keine Nachkommen des `<colgroup>`-Elements sind und daher nicht von ihm erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, verwenden Sie den [`td:nth-of-type()`](/de/docs/Web/CSS/:nth-of-type) CSS-Selektor pro Spalte, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut verwendet, kann der Effekt erreicht werden, indem geeignete CSS-Attributselektoren wie `[colspan=n]` kombiniert werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}

  - : Gibt eine Standardbreite für jede Spalte in der aktuellen Spaltengruppe an. Zusätzlich zu den Standardwerten in Pixel und Prozentsätzen kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder gespannten Spalte die minimale Breite ist, die erforderlich ist, um den Inhalt der Spalte aufzunehmen. Relative Breiten wie `5*` können ebenfalls verwendet werden. Beachten Sie, dass die abgeleiteten {{HTMLElement("col")}}-Elemente diesen Wert mit ihrem eigenen [`width`](/de/docs/Web/HTML/Element/col#width)-Attribut überschreiben können. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Verwendungshinweise

- Das `<colgroup>` sollte innerhalb einer {{HTMLElement("table")}} erscheinen, nach einem {{HTMLElement("caption")}} (falls verwendet), aber vor jedem {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tr")}}.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirken sich auf `<colgroup>` aus:
  - {{cssxref("background")}} : Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spaltengruppe. Da die Hintergrundfarbe der Spaltengruppe auf dem Tisch, aber hinter Hintergrundfarben auf den Spalten ({{HTMLElement("col")}}), den Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}), den Zeilen ({{htmlelement("tr")}}), und den einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) gemalt wird, werden auf Tabellenspalten angewendete Hintergrundfarben nur sichtbar, wenn jede auf ihnen gemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten, jedoch nur, wenn die `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spaltengruppe führt dazu, dass alle Zellen der Spalten in dieser Spaltengruppe nicht gerendert werden und in andere Spalten gespannte Zellen abgeschnitten werden. Der Raum, den diese Spalten in der Spaltengruppe eingenommen hätten, wird entfernt. Allerdings wird die Größe anderer Spalten immer noch berechnet, als wären die Zellen in den kollabierten Spalten in der Spaltengruppe vorhanden. Andere Werte für `visibility` haben keinen Effekt.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalten innerhalb der Spaltengruppe, so als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein komplettes Tabellensbeispiel, das gängige Standards und Best Practices einführt.

Dieses Beispiel demonstriert eine sieben-spaltige Tabelle, aufgeteilt in zwei `<colgroup>` Elemente, die mehrere Spalten umfassen.

### HTML

Zwei `<colgroup>`-Elemente werden verwendet, um eine grundlegende Tabelle durch Erstellen von Spaltengruppen zu strukturieren. Die Anzahl der Spalten in jeder Spaltengruppe wird durch das [`span`](#span)-Attribut angegeben.

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

Gruppierte Spalten können verwendet werden, um die Struktur visuell durch CSS hervorzuheben:

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
        Wenn das <a href="#span"><code>span</code></a>-Attribut
        vorhanden ist: keine.<br />Wenn
        das Attribut nicht vorhanden ist: null oder mehr {{HTMLElement("col")}}
        Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Starttag kann weggelassen werden, wenn er ein {{HTMLElement("col")}}
        Element als erstes Kind hat und wenn ihm nicht ein
        <code>&lt;colgroup&gt;</code> vorausgeht, dessen Endtag weggelassen
        wurde.<br />Der
        Endtag kann weggelassen werden, wenn ihm kein Leerzeichen oder Kommentar
        folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [Lernen: HTML Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe jeder Spaltengruppezelle festzulegen
- {{cssxref("border")}}: CSS-Eigenschaft zur Steuerung der Rahmen von Spaltengruppenzellen
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Spaltengruppezelle
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Spaltengruppezelle
- {{cssxref("visibility")}}: CSS-Eigenschaft zum Verstecken (oder Anzeigen) von Zellen einer Spaltengruppe
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Spalte in einer Spaltengruppe
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen, um die gewünschten Spaltenzellen auszuwählen
