---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Reference/Elements/table
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<table>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert tabellarische Daten, das heißt, Informationen, die in einer zweidimensionalen Tabelle mit Zeilen und Spalten von Zellen, die Daten enthalten, dargestellt werden.

{{InteractiveExample("HTML Demo: &lt;table&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
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
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
```

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie werden hier nur zu Referenzzwecken dokumentiert, um bestehenden Code zu aktualisieren und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres übergeordneten Elements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliges hexadezimales RGB-Code](/de/docs/Web/CSS/Reference/Values/hex-color), vorangestellt durch ein `#`, oder ein [Farbbegriff](/de/docs/Web/CSS/Reference/Values/named-color). Andere CSS-Werte {{cssxref("color_value", "&lt;color&gt;")}} werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert in nicht-negativen Ganzzahlen (in Pixeln) die Größe des Rahmens um die Tabelle. Wenn auf `0` gesetzt, wird das [`frame`](#frame)-Attribut auf `void` gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("padding")}} für die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}}.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Stattdessen sollte die CSS-Eigenschaft {{cssxref("border-spacing")}} auf dem `<table>`-Element gesetzt werden. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden soll. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo in der Tabelle Regeln (Ränder) angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rand um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen sowie auf der `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>`-Attribut einschließt, unterstützen einige Browser eine nicht-standardisierte Interpretation von `height`. Der wertlose Wert legt eine minimale absolute Höhe in Pixeln fest. Wird er als Prozentwert festgelegt, wird die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelles Layout von Tabelleninhalten

Folgende Elemente sind Teil der Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Der `<table>`-Box etabliert einen Tabellenformatierungskontext. Elemente innerhalb der `<table>` generieren rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen entsprechend den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Quellcode-Reihenfolge von oben nach unten. Jede Zeilenbox belegt eine Reihe von Zellen.
2. Eine Zeilengruppenbox belegt eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden in Quellcode-Reihenfolge nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attributs werden die Spalten in Links-nach-Rechts- oder Rechts-nach-Links-Richtung angeordnet. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppenbox belegt eine oder mehrere Spaltenboxen.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um in die verfügbaren Zeilen und Spalten zu passen.

Tabellenzellen haben eine Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tischschichten und Transparenz

Zu Stilisierungszwecken können die Tabellenelemente als auf sechs überlagerte Schichten gelegt betrachtet werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf einem Element in einer Schicht gesetzt wird, wird nur sichtbar sein, wenn die darüberliegenden Schichten einen transparenten Hintergrund haben. Eine fehlende Zelle wird dargestellt, als ob eine anonyme Tabellenzellenbox diesen Platz einnehmen würde.

## Barrierefreiheit

### Bildunterschriften

Durch das Bereitstellen eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, wird den Menschen geholfen, zu entscheiden, ob sie den Rest des Tabelleninhaltes überprüfen oder diesen überspringen sollten.

Dies hilft Personen, die mit Hilfe unterstützender Technologien wie einem Bildschirmleser navigieren, Personen mit Sehschwäche und Personen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Bildunterschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Reihen und Spalten abgrenzen

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf Headerzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexten redundant, da der Bezug erkannt wird. Jedoch könnten einige assistive Technologien es versäumen, korrekte Schlüsse zu ziehen, daher kann das Angeben von Header-Bezügen das Benutzererlebnis verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope) spezifiziert werden, um notwendige Informationen über die mit einem Header verbundenen Zellen bereitzustellen.

- [MDN Leitfaden zur Zugänglichkeit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributs zur Verknüpfung von Kopfzellen und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Technologien wie Bildschirmleser können Schwierigkeiten haben, Tabellen zu interpretieren, die so komplex sind, dass Kopfzellen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird üblicherweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angezeigt.

Idealerweise sollten alternative Möglichkeiten in Betracht gezogen werden, den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) angewiesen sind. Zusätzlich zur Unterstützung von Menschen, die assistive Technologien nutzen, um den Inhalt der Tabelle zu verstehen, könnte dies auch Personen mit kognitiven Bedenken zugute kommen, die Schwierigkeiten haben, die durch das Tabellenlayout beschriebenen Verknüpfungen zu verstehen.

Kann die Tabelle nicht aufgeteilt werden, müssen Sie eine Kombination aus dem Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und dem Attribut [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) verwenden, um jede Tabellenzelle programmatisch mit den Header(s) ({{HTMLElement("th")}}-Elemente) zu verknüpfen, mit denen die Zelle verbunden ist.

- [MDN Leitfaden zur Zugänglichkeit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der Attribute id und headers, um Datenzellen mit Kopfzellen in Datentabellen zu verbinden | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die unten stehenden Beispiele umfassen Tabellen mit zunehmender Komplexität. Siehe auch unseren Anfängerleitfaden [Styling tables](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Informationen zur Tabellenstilisierung einschließlich gängiger, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente sowie verschiedener damit verbundener Attribute erfordert, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie Sie eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellen, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die richtige Struktur zu erstellen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wurde, ist nicht nur einfacher zu gestalten, sondern ermöglicht auch nützliche und barrierefreie Tabellen, die von jedem verstanden und navigiert werden können, einschließlich Suchmaschinen und Nutzern assistiver Technologien.

Das erste Beispiel ist einfach, die nachfolgenden Beispiele sind komplexer. Zuerst entwickeln wir eine sehr einfache HTML-Tabellenstruktur. Die ersten beiden Beispiele enthalten keine Tabellensektionselemente wie einen definierten Kopf, Körper oder Fuß und beinhalten kein Zellübergreifen oder ausdrücklich definierte Zellbeziehungen. Nicht einmal eine Bildunterschrift wird bereitgestellt. Beim Durcharbeiten der Beispiele werden sie schrittweise erweitert, um alle Funktionen einer komplexen Datentabelle zu umfassen.

### Einfache Tabelle

Dieses Beispiel beinhaltet eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Tischstile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS einbezogen.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden innerhalb dieser durch Tabellenkopf- und Datenelemente definiert. Die erste Zeile enthält die Kopfzeilen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenelemente ({{HTMLElement("td")}}-Elemente) fungieren. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte - das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte und das zweite Element der Zeile befindet sich in der zweiten Spalte.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Maria Sanchez</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Michael Johnson</td>
    <td>34</td>
  </tr>
</table>
```

#### Ergebnis

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets), das auf diese Tabelle angewendet wird. Die Stilisierung ergibt sich ausschließlich aus dem [Benutzeragent-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [einfache Tabelle](#einfache_tabelle), indem es den Inhalt erweitert und grundlegende CSS-Stile hinzufügt.

#### HTML

Die Tabelle umfasst jetzt vier Reihen ({{HTMLElement("tr")}}-Elemente) mit jeweils vier Spalten. Die erste Reihe ist eine Reihe von Kopfzellen (die erste Reihe enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Reihen umfassen eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Reihe) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Reihen sind im Hauptbereich der Tabelle innerhalb eines impliziten {{HTMLElement("tbody")}}-Elements eingeschlossen.

```html
<table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Member Since</th>
    <th>Balance</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

#### CSS

Mit CSS bieten wir die grundlegende Stilisierung, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um `<table>` und um jede der Tabellenzellen herum hinzu, einschließlich der mit {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen spezifizierten, wodurch jede Kopf- und Datenelement abgegrenzt wird.

```css
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Expanded_table_with_header_cells", 650, 110)}}

### Spezifizieren von Tabellenzellenbeziehungen

Bevor wir zur Erweiterung der Tabelle auf komplexere Weisen übergehen, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut auf den {{HTMLElement("th")}}-Elementen eingeführt und die Werte auf die entsprechenden `col` (Spalte) oder `row` Werte gesetzt werden.

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">ID</th>
    <th scope="col">Member Since</th>
    <th scope="col">Balance</th>
  </tr>
  <tr>
    <th scope="row">Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <th scope="row">Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th scope="row">Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

Das CSS und das visuelle Ergebnis bleiben unverändert - die Anpassung liefert wertvolle kontextuelle Informationen für assistive Technologien wie Bildschirmleser, um zu helfen, zu identifizieren, auf welche Zellen die Überschriften sich beziehen.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, könnte die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Reference/Elements/th#headers)-Attributs auf den {{HTMLElement("th")}}- und {{HTMLElement("td")}}-Elementen die Zugänglichkeit verbessern und assistierende Technologien bei der Identifizierung der Beziehungen zwischen Zellen unterstützen; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizites Spezifizieren von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Zugänglichkeit durch [Spezifizieren von Zellenbeziehungen](#spezifizieren_von_tabellenzellenbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und die Kopfzeile für den Rest der Tabelleninhalte bereitstellt, kann sie im {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als den Kopfbereich der Tabelle zu spezifizieren. Darüber hinaus kann das, was automatisch vom Browser erreicht wird, auch explizit definiert werden - der Hauptbereich der Tabelle, der die Hauptdaten der Tabelle enthält, wird spezifiziert, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser dabei, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">Member Since</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

Wieder einmal bleiben das CSS und das visuelle Ergebnis unverändert - das Spezifizieren solcher Tabellensektionsgruppen liefert wertvolle kontextuelle Informationen für assistive Technologien, einschließlich Bildschirmleser und Suchmaschinen, sowie für die Stilisierung im CSS, die in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenüberspannung

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird in jedem Körperabschnitt eine neue Spalte für ein "Mitgliedschaft Enddatum" mit dem {{HTMLElement("td")}}-Element hinzugefügt. Darüber hinaus wird eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) in der Kopfsektion ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdatum"-Kopfzeile als Überschrift für die "Beigetreten" und "Gekündigt"-Spalten einzuführen.

Die Erstellung der zweiten Kopfzeilenreihe erfolgt durch Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Reihen zuzuordnen.

```html
<table>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Column_and_row_spanning", 650, 130)}}

Der Kopfbereich hat jetzt zwei Reihen, eine mit den Überschriften ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedsschaftsdatum" und "Saldo" und eine "Mitgliedsschaftsdatum"-Kopfzeile mit zwei Unterüberschriften, die in einer zweiten Zeile stehen: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die Kopfzelle der ersten Reihe "Name", "ID" und "Saldo" spannt sich über beide Tabellenkopfreihen, indem das Attribut [`rowspan`](/de/docs/Web/HTML/Reference/Elements/th#rowspan) verwendet wird, wodurch jede von ihnen zwei Zeilen hoch ist.
- Die Kopfzelle der ersten Reihe "Mitgliedsschaftsdatum" spannt sich mithilfe des [`colspan`](/de/docs/Web/HTML/Reference/Elements/th#colspan)-Attributs über zwei Spalten, wodurch sie zwei Spalten breit ist.
- Die zweite Reihe enthält nur die beiden Kopfzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten in den Zellen der ersten Reihe zusammengefügt werden, die sich über zwei Reihen erstrecken. Die beiden Kopfzellen sind korrekt unter der "Mitgliedsschaftsdatum"-Überschrift positioniert.

### Tabellenüberschrift und Spaltensumme

Es ist eine gängige und empfohlene Praxis, eine Zusammenfassung für den Inhalt der Tabelle bereitzustellen, damit Benutzende schnell die Relevanz der Tabelle bestimmen können. Darüber hinaus wird die "Saldo"-Spalte zusammengefasst, indem die Summe der Salden der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabelle [caption](#bildunterschriften) ({{HTMLElement("caption")}}-Element) als erstes Kindelement der `<table>` eingefügt wird. Die Bildunterschrift bietet den {{Glossary("accessible_name", "accessible name")}} oder {{Glossary("accessible_description", "accessible description")}} der Tabelle.

Schließlich wird ein Tabellefußbereich ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Saldo"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die früher eingeführten Elemente und Attribute werden angewendet.

```html
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

```css hidden
table {
  border: 2px solid rgb(140 140 140);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Table_caption_and_column_summary", 650, 180)}}

### Grundlegende Tabellenstilisierung

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und dem Kopf- und Fußbereich eine {{cssxref("background-color")}} hinzuzufügen. Der HTML-Teil bleibt dieses Mal unverändert, daher gehen wir direkt in das CSS über.

```html hidden
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Während eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element hier hinzugefügt wird, um eine ästhetisch ansprechendere Schriftart festzulegen (oder eine abscheuliche sans-serif-Schriftart, abhängig von Ihrer persönlichen Meinung), ist der interessante Teil der zweite Stil, bei dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb des {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, durch Hinzufügen einer hellblauen {{cssxref("background-color")}} gestylt werden. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe für alle Zellen in spezifischen Abschnitten gleichzeitig anzuwenden.

```css
table {
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}

thead > tr,
tfoot > tr {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_table_styling", 650, 180)}}

### Erweiterte Tabellenstilisierung

Jetzt legen wir los, mit Stilen sowohl in den Kopf- als auch in den Körperbereichen, einschließlich alternierender Zeilenfarben, Zellen mit unterschiedlichen Farben abhängig von ihrer Position innerhalb einer Zeile und so weiter. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt wieder keine Änderung im HTML. Sehen Sie, was richtige Vorbereitung der HTML-Struktur bewirken kann?

```html hidden
<table>
  <caption>
    Status of the club members 2021
  </caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Name</th>
      <th scope="col" rowspan="2">ID</th>
      <th scope="col" colspan="2">Membership Dates</th>
      <th scope="col" rowspan="2">Balance</th>
    </tr>
    <tr>
      <th scope="col">Joined</th>
      <th scope="col">Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="4">Total balance</th>
      <td>52.00</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

Das CSS ist diesmal viel umfangreicher. Es ist nicht kompliziert, aber es ist viel los. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}}- und {{CSSxRef("border-spacing")}}-Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und die Ränder, die sich berühren, zu einer einzigen Grenze zusammenzufassen, anstatt mit doppelten Rahmen zu enden. Zusätzlich wird das {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft am `bottom` der Tabelle platziert:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}
```

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenelementen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was auf den Zellen im Kopfbereich zu sehen ist, die zwei Zeilen umfassen:

```css
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 6px;
}

th {
  vertical-align: bottom;
}
```

Die nächste CSS-Regel legt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im `thead` der Tabelle fest. Dann wird der untere Rand des Kopfbereiches auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selector verwenden, um die Eigenschaft {{CSSxRef("border-bottom")}} auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überlappt werden. Das bedeutet, dass dort tatsächlich zwei Zeilen sind; wenn die Stilisierung auf die erste Zeile angewandt würde, würde dies nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Gestalten wir die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grünen und roten Farbtönen, um das "Gute" eines neuen Mitglieds und das "Bedauerliche" einer gekündigten Mitgliedschaft darzustellen. Hier greifen wir in die letzte Zeile des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selector ein und geben der ersten Kopfzelle darin (der "Beigetreten"-Kopfzeile) eine grünliche Farbe und der zweiten Kopfzelle darin (der "Gekündigt"-Kopfzeile) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da sich die erste Spalte auch abheben sollte, wird hier ebenfalls eine individuelle Stilisierung hinzugefügt. Diese CSS-Regel malt die erste Kopfzelle in jeder Reihe des Tabellenkörpers mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen linksbündig anzuordnen, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem Zeilenfarben abwechseln—dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns jeder geraden Zeile etwas {{cssxref("background-color")}} hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig anzuordnen, machen wir das hier ebenfalls. Dies legt einfach die {{CSSxRef("text-align")}}-Eigenschaft für die letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right` fest:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird eine ähnliche Stilistik wie beim Kopfbereich auch auf den Fußbereich der Tabelle angewendet, um diesen ebenfalls hervorzuheben:

```css
tfoot > tr {
  border-top: 2px dashed rgb(140 140 140);
  background-color: rgb(228 240 245);
}

tfoot th,
tfoot td {
  text-align: right;
  font-weight: bold;
}
```

### Anzeige großer Tabellen in kleinen Räumen

Ein häufiges Problem mit Tabellen im Web ist, dass sie bei großem Inhalt nicht nativ gut auf kleinen Bildschirmen funktionieren und die Möglichkeit, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup von einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu enthalten.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt verborgen, da er sehr groß ist und nichts Bemerkenswertes aufweist. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:</th>
      <th>2<sup>3</sup> equals:</th>
      <th>3<sup>3</sup> equals:</th>
      <th>4<sup>3</sup> equals:</th>
      <th>5<sup>3</sup> equals:</th>
      <th>6<sup>3</sup> equals:</th>
      <th>7<sup>3</sup> equals:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>row 1: 1</td>
      <td>row 1: 8</td>
      <td>row 1: 27</td>
      <td>row 1: 64</td>
      <td>row 1: 125</td>
      <td>row 1: 216</td>
      <td>row 1: 343</td>
    </tr>
    <tr>
      <td>row 2: 1</td>
      <td>row 2: 8</td>
      <td>row 2: 27</td>
      <td>row 2: 64</td>
      <td>row 2: 125</td>
      <td>row 2: 216</td>
      <td>row 2: 343</td>
    </tr>
    <tr>
      <td>row 3: 1</td>
      <td>row 3: 8</td>
      <td>row 3: 27</td>
      <td>row 3: 64</td>
      <td>row 3: 125</td>
      <td>row 3: 216</td>
      <td>row 3: 343</td>
    </tr>
    <tr>
      <td>row 4: 1</td>
      <td>row 4: 8</td>
      <td>row 4: 27</td>
      <td>row 4: 64</td>
      <td>row 4: 125</td>
      <td>row 4: 216</td>
      <td>row 4: 343</td>
    </tr>
    <tr>
      <td>row 5: 1</td>
      <td>row 5: 8</td>
      <td>row 5: 27</td>
      <td>row 5: 64</td>
      <td>row 5: 125</td>
      <td>row 5: 216</td>
      <td>row 5: 343</td>
    </tr>
    <tr>
      <td>row 6: 1</td>
      <td>row 6: 8</td>
      <td>row 6: 27</td>
      <td>row 6: 64</td>
      <td>row 6: 125</td>
      <td>row 6: 216</td>
      <td>row 6: 343</td>
    </tr>
    <tr>
      <td>row 7: 1</td>
      <td>row 7: 8</td>
      <td>row 7: 27</td>
      <td>row 7: 64</td>
      <td>row 7: 125</td>
      <td>row 7: 216</td>
      <td>row 7: 343</td>
    </tr>
    <tr>
      <td>row 8: 1</td>
      <td>row 8: 8</td>
      <td>row 8: 27</td>
      <td>row 8: 64</td>
      <td>row 8: 125</td>
      <td>row 8: 216</td>
      <td>row 8: 343</td>
    </tr>
    <tr>
      <td>row 9: 1</td>
      <td>row 9: 8</td>
      <td>row 9: 27</td>
      <td>row 9: 64</td>
      <td>row 9: 125</td>
      <td>row 9: 216</td>
      <td>row 9: 343</td>
    </tr>
    <tr>
      <td>row 10: 1</td>
      <td>row 10: 8</td>
      <td>row 10: 27</td>
      <td>row 10: 64</td>
      <td>row 10: 125</td>
      <td>row 10: 216</td>
      <td>row 10: 343</td>
    </tr>
    <tr>
      <td>row 11: 1</td>
      <td>row 11: 8</td>
      <td>row 11: 27</td>
      <td>row 11: 64</td>
      <td>row 11: 125</td>
      <td>row 11: 216</td>
      <td>row 11: 343</td>
    </tr>
    <tr>
      <td>row 12: 1</td>
      <td>row 12: 8</td>
      <td>row 12: 27</td>
      <td>row 12: 64</td>
      <td>row 12: 125</td>
      <td>row 12: 216</td>
      <td>row 12: 343</td>
    </tr>
    <tr>
      <td>row 13: 1</td>
      <td>row 13: 8</td>
      <td>row 13: 27</td>
      <td>row 13: 64</td>
      <td>row 13: 125</td>
      <td>row 13: 216</td>
      <td>row 13: 343</td>
    </tr>
    <tr>
      <td>row 14: 1</td>
      <td>row 14: 8</td>
      <td>row 14: 27</td>
      <td>row 14: 64</td>
      <td>row 14: 125</td>
      <td>row 14: 216</td>
      <td>row 14: 343</td>
    </tr>
    <tr>
      <td>row 15: 1</td>
      <td>row 15: 8</td>
      <td>row 15: 27</td>
      <td>row 15: 64</td>
      <td>row 15: 125</td>
      <td>row 15: 216</td>
      <td>row 15: 343</td>
    </tr>
    <tr>
      <td>row 16: 1</td>
      <td>row 16: 8</td>
      <td>row 16: 27</td>
      <td>row 16: 64</td>
      <td>row 16: 125</td>
      <td>row 16: 216</td>
      <td>row 16: 343</td>
    </tr>
    <tr>
      <td>row 17: 1</td>
      <td>row 17: 8</td>
      <td>row 17: 27</td>
      <td>row 17: 64</td>
      <td>row 17: 125</td>
      <td>row 17: 216</td>
      <td>row 17: 343</td>
    </tr>
    <tr>
      <td>row 18: 1</td>
      <td>row 18: 8</td>
      <td>row 18: 27</td>
      <td>row 18: 64</td>
      <td>row 18: 125</td>
      <td>row 18: 216</td>
      <td>row 18: 343</td>
    </tr>
    <tr>
      <td>row 19: 1</td>
      <td>row 19: 8</td>
      <td>row 19: 27</td>
      <td>row 19: 64</td>
      <td>row 19: 125</td>
      <td>row 19: 216</td>
      <td>row 19: 343</td>
    </tr>
    <tr>
      <td>row 20: 1</td>
      <td>row 20: 8</td>
      <td>row 20: 27</td>
      <td>row 20: 64</td>
      <td>row 20: 125</td>
      <td>row 20: 216</td>
      <td>row 20: 343</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}}-Eigenschaft der Tabelle auf `block` gesetzt wurde. Zwar ermöglicht dies das Scrollen, jedoch verliert die Tabelle einen Teil ihrer Integrität und Tabellenelemente versuchen, so klein wie möglich zu werden. Um dieses Problem zu mindern, haben wir auf dem {{HTMLElement("tbody")}} die {{cssxref("white-space")}}-Eigenschaft auf `nowrap` gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel Spalten breiter machen, als sie für die Datendarstellung tatsächlich sein müssen.

Um die Tabellenkopfzeilen auf der Seite zu halten, während nach unten gescrollt wird, haben wir die {{cssxref("position")}} auf `sticky` für die {{HTMLElement("th")}}-Elemente gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da sonst der Kopf nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da die `<table>` eine feste Größe hat, ist das auf `auto` gesetzte {{cssxref("overflow")}} hier der wichtige Teil, da es die Tabelle scrollbar macht.

```css
table,
th,
td {
  border: 1px solid black;
}

table {
  overflow: auto;
  width: 100%;
  max-width: 400px;
  height: 240px;
  display: block;
  margin: 0 auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: white;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Displaying_large_tables_in_small_spaces', '100%', 240)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            entweder eines der folgenden:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}}-Elemente</li>
              <li>eins oder mehr {{HTMLElement("tr")}}-Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}}-Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implicite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >Table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Grundlagen der HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Aussehen von Zellrahmen, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Abstand zum Zellinhalt einzustellen
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Zellinhalt horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Zellinhalt vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
