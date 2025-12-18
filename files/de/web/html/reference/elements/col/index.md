---
title: "<col>: Das Tabellenspalten-Element"
slug: Web/HTML/Reference/Elements/col
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<col>`** [HTML](/de/docs/Web/HTML) Element definiert eine oder mehrere Spalten in einer Spaltengruppe, die durch ihr übergeordnetes {{HTMLElement("colgroup")}}-Element dargestellt wird. Das `<col>`-Element ist nur als untergeordnetes Element eines {{HTMLElement("colgroup")}}-Elements gültig, das kein [`span`](/de/docs/Web/HTML/Reference/Elements/colgroup#span)-Attribut definiert.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `span`
  - : Gibt die Anzahl der aufeinanderfolgenden Spalten an, die das `<col>`-Element überspannt. Der Wert muss eine positive ganze Zahl größer als null sein. Wenn nicht vorhanden, ist der Standardwert `1`.

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind hier aus Gründen der Referenzierung beim Aktualisieren bestehender Codes und aus historischem Interesse dokumentiert.

- `align` {{deprecated_inline}}
  - : Gibt die horizontale Ausrichtung jeder Tabellenspalte an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `left`, `center`, `right`, `justify` und `char`. Wenn unterstützt, richtet der `char`-Wert den Textinhalt an dem im [`char`](#char)-Attribut definierten Zeichen und dem durch das [`charoff`](#charoff)-Attribut definierten Versatz aus. Beachten Sie, dass dieses Attribut die für sein {{HTMLElement("colgroup")}} übergeordnetes Element angegebene [`align`](/de/docs/Web/HTML/Reference/Elements/colgroup#align) außer Kraft setzt. Verwenden Sie stattdessen die {{cssxref("text-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Die Einstellung von `text-align` auf das `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selector `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { text-align: right; }`, um die Zellen der zweiten Spalte rechts auszurichten.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombination geeigneter CSS-Attribut-Selektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `bgcolor` {{deprecated_inline}}
  - : Definiert die Hintergrundfarbe jeder Tabellenspalte. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), vorangestellt von einem `#`, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS {{cssxref("&lt;color&gt;")}} Werte werden nicht unterstützt. Verwenden Sie die {{cssxref("background-color")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

- `char` {{deprecated_inline}}
  - : Hat keine Wirkung. Es sollte ursprünglich die Ausrichtung des Inhalts an einem Zeichen jeder Tabellenspalte spezifizieren. Typische Werte dafür sind ein Punkt (`.`), wenn versucht wird, Zahlen oder Geldwerte auszurichten. Wenn [`align`](#align) nicht auf `char` gesetzt ist, wird dieses Attribut ignoriert, obwohl es trotzdem die für sein {{HTMLElement("colgroup")}} übergeordnetes Element angegebene [`char`](/de/docs/Web/HTML/Reference/Elements/colgroup#char) außer Kraft setzt.

- `charoff` {{deprecated_inline}}
  - : Hat keine Wirkung. Es sollte ursprünglich die Anzahl der Zeichen angeben, um den Tabellenspalteninhalt vom im [`char`](#char)-Attribut spezifizierten Ausrichtung Zeichen zu versetzen.

- `valign` {{deprecated_inline}}
  - : Gibt die vertikale Ausrichtung jeder Tabellenspalte an. Die möglichen {{Glossary("enumerated", "aufzählbaren")}} Werte sind `baseline`, `bottom`, `middle` und `top`. Beachten Sie, dass dieses Attribut die für sein {{HTMLElement("colgroup")}} übergeordnetes Element angegebene [`valign`](/de/docs/Web/HTML/Reference/Elements/colgroup#valign) außer Kraft setzt. Verwenden Sie die {{cssxref("vertical-align")}} CSS-Eigenschaft auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Die Einstellung von `vertical-align` auf das `<col>`-Element hat keine Wirkung, da `<col>` keine Nachkommen hat und daher keine Elemente davon erben.
    >
    > Wenn die Tabelle kein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, verwenden Sie den CSS-Selector `td:nth-of-type(an+b)`. Setzen Sie `a` auf null und `b` auf die Position der Spalte in der Tabelle, z.B. `td:nth-of-type(2) { vertical-align: middle; }`, um die Zellen der zweiten Spalte vertikal zu zentrieren.
    >
    > Wenn die Tabelle ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut verwendet, kann der Effekt durch Kombination geeigneter CSS-Attribut-Selektoren wie `[colspan=n]` erzielt werden, obwohl dies nicht trivial ist.

- `width` {{deprecated_inline}}
  - : Gibt eine Standardbreite für jede Tabellenspalte an. Zusätzlich zu den Standardpixel- und Prozentwerten kann dieses Attribut die spezielle Form `0*` annehmen, was bedeutet, dass die Breite jeder überspannten Spalte die minimale Breite sein soll, die notwendig ist, um den Inhalt der Spalte aufzunehmen. Auch relative Breiten wie `5*` können verwendet werden. Beachten Sie, dass dieses Attribut die für sein {{HTMLElement("colgroup")}} übergeordnetes Element angegebene [`width`](/de/docs/Web/HTML/Reference/Elements/colgroup#width) außer Kraft setzt. Verwenden Sie die {{cssxref("width")}} CSS-Eigenschaft stattdessen, da dieses Attribut veraltet ist.

## Hinweise zur Verwendung

- Das `<col>`-Element wird innerhalb eines {{HTMLElement("colgroup")}}-Elements verwendet, das kein `span`-Attribut hat.
- Die `<col>`-Elemente gruppieren Spalten nicht strukturell zusammen. Dies ist die Rolle des {{HTMLElement("colgroup")}}-Elements.
- Nur eine begrenzte Anzahl von CSS-Eigenschaften wirken sich auf `<col>` aus:
  - {{cssxref("background")}}: Die verschiedenen `background`-Eigenschaften setzen den Hintergrund für Zellen innerhalb der Spalte. Da die Hintergrundfarbe der Spalte über die Tabelle und die Spaltengruppen ({{HTMLElement("colgroup")}}) gemalt wird, aber hinter Hintergrundfarben, die auf die Zeilengruppen ({{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}), die Zeilen ({{htmlelement("tr")}}) und die einzelnen Zellen ({{htmlelement("th")}} und {{htmlelement("td")}}) angewendet werden, sind die auf Tabellenspalten angewendeten Hintergründe nur sichtbar, wenn jede darauf gemalte Schicht einen transparenten Hintergrund hat.
  - {{cssxref("border")}}: Die verschiedenen `border`-Eigenschaften gelten nur, wenn das `<table>` {{cssxref("border-collapse", "border-collapse: collapse")}} gesetzt hat.
  - {{cssxref("visibility")}}: Der Wert `collapse` für eine Spalte führt dazu, dass alle Zellen dieser Spalte nicht gerendert werden und Zellen, die in andere Spalten hineinreichen, abgeschnitten werden. Der Platz, den diese Spalten eingenommen hätten, wird entfernt. Die Größe anderer Spalten wird jedoch weiterhin berechnet, als ob die Zellen in der gelöschten Spalte(n) vorhanden wären. Andere Werte für `visibility` haben keine Wirkung.
  - {{cssxref("width")}}: Die `width`-Eigenschaft definiert eine Mindestbreite für die Spalte, als ob {{cssxref("min-width")}} gesetzt wäre.

## Beispiel

Siehe {{HTMLElement("table")}} für ein vollständiges Tabellenbeispiel mit allgemeinen Standards und Best Practices.

Dieses Beispiel zeigt eine Acht-Spalten-Tabelle, die in drei `<col>`-Elemente unterteilt ist.

### HTML

Ein {{HTMLElement("colgroup")}}-Element bietet Strukturen für eine grundlegende Tabelle und erstellt eine einzelne implizite Spaltengruppe. Drei `<col>`-Elemente sind innerhalb der `<colgroup>` enthalten und erstellen drei stilisierbare Spalten. Das [`span`](#span)-Attribut gibt an, wie viele Tabellenspalten jedes `<col>` überspannen soll (Standard ist `1` bei Auslassung), wodurch Attribute über die Spalten in jedem `<col>` hinweg geteilt werden können.

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

Wir verwenden CSS statt veralteter HTML-Attribute, um eine Hintergrundfarbe für die Spalten bereitzustellen und den Zellinhalt auszurichten:

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
      <td>Kein; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Nur {{HTMLElement("colgroup")}}, obwohl es implizit definiert werden kann, da sein Start-Tag nicht obligatorisch ist. Das
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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
- {{cssxref("background-color")}}: CSS-Eigenschaft zur Einstellung der Hintergrundfarbe jeder Tabellenspalte
- {{cssxref("border")}}: CSS-Eigenschaft zum Steuern der Ränder von Tabellenspalten
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Inhalts jeder Tabellenspalte
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Inhalts jeder Tabellenspalte
- {{cssxref("visibility")}}: CSS-Eigenschaft zum Ausblenden der Zellen einer Spalte
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Standardbreite für jede Tabellenspalte
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS-Pseudoklassen zur Auswahl der gewünschten Tabellenspaltenzellen
