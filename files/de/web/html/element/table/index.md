---
title: "<table>: Das Tabellenelement"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten, d.h. Informationen, die in einer zweidimensionalen Tabelle aus Zeilen und Spalten von Zellen mit Daten präsentiert werden.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um bestehenden Code zu aktualisieren und aus historischen Gründen.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres Elternelements an. Die möglichen {{Glossary("enumerated", "aufgeführten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe, entweder ein [6-stelliges hexadezimales RGB-Kürzel](/de/docs/Web/CSS/hex-color), das mit einem `#` beginnt, oder ein [Farbname](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert als nicht-negative Ganzzahl (in Pixel) die Größe des Rahmens, der die Tabelle umgibt. Wird `0` gesetzt, wird das Attribut [`frame`](#frame) auf void gesetzt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die {{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>` Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>` Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle herum angezeigt werden muss. Die möglichen {{Glossary("enumerated", "aufgeführten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo in der Tabelle die Begrenzungen (Rahmen) angezeigt werden. Die möglichen {{Glossary("enumerated", "aufgeführten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} auf den entsprechenden tabellenbezogenen Elementen und auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}} Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als ein `<table>` Attribut einschließt, unterstützen einige Browser eine nicht standardkonforme Interpretation von `height`. Der einheitenlose Wert legt eine minimale absolute Höhe in Pixel fest. Wenn es als Prozentwert gesetzt ist, wird die minimale Tabellengröße relativ zur Höhe des Elternelements sein. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("min-height")}}, da dieses Attribut veraltet ist.

## Visuelle Anordnung der Tabelleninhalte

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

Das `<table>` Element schafft einen Tabellen-Formatierungskontext. Elemente innerhalb des `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenzellen entsprechend den folgenden Regeln ein:

1. Die Zeilen-Boxen füllen die Tabelle in der Quellenreihenfolge von oben nach unten. Jede Zeilen-Box nimmt eine Zeile von Zellen ein.
2. Eine Zeilengruppen-Box nimmt eine oder mehrere Zeilen-Boxen ein.
3. Spalten-Boxen werden nebeneinander in Quellenreihenfolge platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir) Attributs werden die Spalten von links nach rechts oder von rechts nach links angeordnet. Eine Spalten-Box nimmt eine oder mehrere Spalten von Tabellenzellen ein.
4. Eine Spaltengruppe-Box nimmt eine oder mehrere Spalten-Boxen ein.
5. Eine Zellen-Box kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten kürzen Zellen, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben eine Auffüllung (Padding). Boxen, die eine Tabelle bilden, haben keine Ränder (Margins).

### Tabellenschichten und Transparenz

Zu Stilisierungszwecken können die Tabellenelemente als auf sechs übereinanderliegenden Schichten gedacht werden:

![Tabellenelemente-Schichten](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Schicht gesetzt wird, ist nur sichtbar, wenn die darüber liegenden Schichten einen transparenten Hintergrund haben. Eine fehlende Zelle wird so gerendert, als ob eine anonyme Tabellenzellen-Box diesen Platz einnimmt.

## Barrierefreiheit

### Beschriftungen

Durch das Bereitstellen eines {{HTMLElement("caption")}} Elements, dessen Wert Zweck der Tabelle klar und prägnant beschreibt, hilft es den Menschen zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollten.

Dies hilft Menschen, die mit assistiver Technologie wie einem Bildschirmlesegerät navigieren, Menschen mit Sehbeeinträchtigungen und Menschen mit kognitiven Beeinträchtigungen.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Abgrenzung von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut auf Kopfzellen ({{HTMLElement("th")}} Elemente) ist in einfachen Kontexten redundant, da der Geltungsbereich abgeleitet wird. Einige assistive Technologien könnten jedoch fehlschlagen, korrekte Schlussfolgerungen zu ziehen, daher kann das Festlegen des Geltungsbereichs der Kopfzelle die Benutzererfahrung verbessern. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die mit einer Kopfzeile verbundenen Zellen bereitzustellen.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope Attributs zur Zuordnung von Kopf- und Datenzellen in Datentabellen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplizierte Tabellen

Assistive Technologien wie Bildschirmlesegeräte können Schwierigkeiten haben, Tabellen zu analysieren, die so komplex sind, dass Kopfzellen nicht strikt horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch die Anwesenheit der [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribute angezeigt.

Idealerweise sollten Sie alternative Möglichkeiten in Betracht ziehen, den Inhalt der Tabelle zu präsentieren, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attribute angewiesen sind. Dies hilft nicht nur Nutzern assistiver Technologien, den Tabelleninhalt zu verstehen, sondern kann auch Personen mit kognitiven Beeinträchtigungen zugutekommen, die möglicherweise Schwierigkeiten haben, die durch das Tabellenlayout beschriebenen Zusammenhänge zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers) Attribute, um jede Tabellenzelle programmatisch mit den Kopfzeilen ({{HTMLElement("th")}} Elemente) zu verknüpfen, mit denen die Zelle verbunden ist.

- [MDN Leitfaden zur Barrierefreiheit von Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden der id und headers Attribute zur Zuordnung von Datenzellen zu Kopfzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die unten aufgeführte Beispiele umfassen Tabellen mit wachsender Komplexität. Siehe auch unser Anfänger- [Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für stilbezogene Informationen über Tabellen, einschließlich gebräuchlicher, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen umfasst, sind die folgenden Beispiele so konzipiert, dass sie eine vereinfachte Erklärung bieten, die die Grundlagen und häufigen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "barrierefreie")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet ist.

Aufgrund der Struktur von HTML-Tabellen kann der {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu schaffen. Eine logische Struktur, die mit {{Glossary("semantics", "semantischem")}} Markup entwickelt wird, ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und barrierefreie Tabellen, die von allen verstanden und navigiert werden können, einschließlich Suchmaschinen und Benutzern assistiver Technologien.

Das erste Beispiel ist einfach, die nachfolgenden Beispiele werden komplexer. Zuerst entwickeln wir eine sehr einfache HTML-Struktur für die Tabelle. Die ersten beiden Beispiele enthalten keine Tabellensektionsgruppen wie einen definierten Kopf, Körper oder Fuß und beinhalten keine Zellenspannung oder explizit definierte Zellbeziehungen. Nicht einmal eine Beschriftung wird bereitgestellt. Während wir durch die Beispiele arbeiten, werden sie schrittweise verbessert, um alle Funktionalitäten zu umfassen, die eine komplexe Datentabelle besitzen sollte.

### Einfache Tabelle

Dieses Beispiel umfasst eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS einbezogen.

#### HTML

Die Zeilen der Tabelle werden mit {{HTMLElement("tr")}} Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenzellen innerhalb dieser definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}} Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}} Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzerstylesheets](/de/docs/Web/CSS/CSS_cascade/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling resultiert lediglich aus dem [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [einfache Tabelle](#einfache_tabelle), indem der Inhalt erweitert und grundlegende CSS-Stile hinzugefügt werden.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}} Elementen), jeweils mit vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}} Elemente). Nachfolgende Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}} Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}} Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppenstruktur, d.h. alle Zeilen werden im Hauptteil der Tabelle eines impliziten {{HTMLElement("tbody")}} Elements eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle herum zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um das `<table>` und um jede der Tabellenzellen, einschließlich der Zellen, die sowohl mit {{HTMLElement("th")}} als auch {{HTMLElement("td")}} Elementen angegeben sind, hinzu. Es markiert jede Kopf- und Datentelle.

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

### Angeben von Tabellenzellen-Beziehungen

Bevor Sie die Tabelle auf fortgeschrittenere Weise erweitern, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut an den {{HTMLElement("th")}} Elementen eingeführt und die Werte den entsprechenden `col` (Spalte) oder `row` (Zeile) Wert gesetzt werden.

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

Das CSS und das visuelle Ergebnis sind unverändert - die Anpassung bietet wertvolle Kontextinformationen für assistive Technologien wie Bildschirmleser, um zu helfen zu identifizieren, welche Zellen zu den Köpfen gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers) Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen die Barrierefreiheit verbessern und assistiven Technologien helfen, die Beziehungen zwischen den Zellen zu identifizieren; siehe [Komplizierte Tabellen](#komplizierte_tabellen).

### Explizites Angeben von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [das Angeben von Zellenbeziehungen](#angeben_von_tabellenzellen-beziehungen) können die {{Glossary("semantics", "Semantiken")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}} Element) nur Spaltenkopfzellen enthält und als Kopfzeile für den Rest der Tabelleninhalte fungiert, kann sie im {{HTMLElement("thead")}} Element eingeschlossen werden, um diese Zeile explizit als Kopfsektion der Tabelle anzugeben. Darüber hinaus kann explizit das schon vom Browser automatisch Geschaffene definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}} Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}} Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Wieder einmal sind das CSS und das visuelle Ergebnis unverändert — die Angabe solcher Tabellensektionsgruppen bieten wertvolle Kontextinformationen für assistive Technologien, einschließlich Bildschirmleser und Suchmaschinen, sowie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenüberspannung

In diesem Beispiel erweitern wir die Tabelle noch mehr, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird eine neue Spalte für ein "Mitgliedschaftsende Datum" in jeder Körperreihe mit dem {{HTMLElement("td")}} Element hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}} Element) wird auch innerhalb der Kopfsektion ({{HTMLElement("thead")}} Element) hinzugefügt, um eine "Mitgliedsdaten" Kopfzeile als Überschrift für die "Beigetreten" und "Gekündigt" Spalten hinzuzufügen.

Die Erstellung der zweiten Kopfzeile erfordert das Hinzufügen der [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) Attribute zu den {{HTMLElement("th")}} Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Die Kopfsektion hat jetzt zwei Zeilen, eine mit den Kopfzellen ({{HTMLElement("th")}} Elementen) "Name", "ID", "Mitgliedsdaten" und "Guthaben", und eine "Mitgliedsdaten" Kopfzelle mit zwei Sub-Headdern, die sich in einer zweiten Zeile befinden: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die erste Zeile der "Name", "ID" und "Guthaben" Kopfzellen überspannt beide Tabellenkopfzeilen mithilfe des [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) Attributs, wodurch sie jeweils zwei Zeilen hoch gemacht werden.
- Die Kopfzelle der ersten Zeilen "Mitgliedsdaten" überspannt zwei Spalten mit dem [`colspan`](/de/docs/Web/HTML/Element/th#colspan) Attribut, was dazu führt, dass sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten mit den Zellen in der ersten Zeile verschmelzen, die zwei Zeilen überspannen. Die zwei Kopfzellen sind korrekt unter der "Mitgliedsdaten" Kopfzeile positioniert.

### Tabellenbeschriftung und Spaltensumme

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung des Inhalts der Tabelle bereitzustellen, die es den Nutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Darüber hinaus wird die "Guthaben" Spalte durch die Anzeige der Summe der Guthaben der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird hinzugefügt, indem eine Tabellen-[Beschriftung](#beschriftungen) ({{HTMLElement("caption")}} Element) als erstes Kindelement von `<table>` verwendet wird. Die Beschriftung bietet die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Tabelle.

Abschließend wird eine Tabellenfußsektion ({{HTMLElement("tfoot")}} Element) unterhalb des Körpers eingefügt, mit einer Zeile, die die "Guthaben" Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegende Tabellenstile

Lassen Sie uns ein grundlegendes Styling auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Diesmal wird das HTML nicht geändert, also gehen wir direkt in das CSS.

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

Während hier eine {{cssxref("font")}} Eigenschaft auf das `<table>` Element hinzugefügt wird, um eine optisch ansprechendere Schriftart festzulegen (oder eine abstoßende serifenlose Schriftart, je nach persönlichem Urteil), ist der interessante Teil der zweite Stil, in dem die {{HTMLElement("tr")}} Elemente, die innerhalb der {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, gestylt werden, indem eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

```css
table {
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
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

### Fortgeschrittene Tabellenstile

Nun gehen wir aufs Ganze, mit Stilen auf Zeilen im Kopf- und Körperbereich beide, einschließlich alternierender Zeilenfarben, Zellen mit unterschiedlichen Farben abhängig von der Position innerhalb einer Zeile und so weiter. Lassen Sie uns diesmal zuerst das Ergebnis anschauen.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt wieder keine Änderungen im HTML. Sehen Sie, was eine ordentliche Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel detaillierter. Es ist nicht kompliziert, aber es passiert eine Menge. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} Eigenschaften hinzugefügt, um den Abstand zwischen Zellen zu eliminieren und angrenzende Rahmen zusammenzuführen, sodass sie eine einzige Grenze bilden, anstatt mit doppelten Begrenzungen zu enden. Zusätzlich wird {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}} Eigenschaft am `bottom` der Tabelle platziert:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid rgb(140 140 140);
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}
```

Als nächstes wird die {{CSSxRef("padding")}} Eigenschaft verwendet, um allen Tabellenzellen Raum um ihren Inhalt zu geben. Die {{CSSxRef("vertical-align")}} Eigenschaft richtet den Inhalt der Kopfzellen unten in der Zelle aus, was an den Zellen im Kopf gesehen werden kann, die zwei Zeilen umfassen:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}} Elemente im Tabellenkopf (wie durch {{HTMLElement("thead")}} angegeben). Dann wird die untere Grenze des Kopfes auf eine Linie von zwei Pixel Breite gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}} Selektor verwenden, um die {{CSSxRef("border-bottom")}} Eigenschaft auf die zweite Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen umspannt werden. Das bedeutet, dass tatsächlich zwei Zeilen vorhanden sind; das Anwenden des Stils auf die erste Zeile würde nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die zwei Kopfzellen "Beigetreten" und "Gekündigt" mit grünen und roten Tönen stylen, um das "Positive" eines neuen Mitglieds und das "Ärgernis" einer gekündigten Mitgliedschaft darzustellen. Hier graben wir uns in die letzte Zeile des Kopfbereichs der Tabelle mithilfe des {{CSSxRef(":last-of-type")}} Selektors und geben der ersten Kopfzelle darin (die "Beigetreten" Kopfzelle) eine grünliche Farbe und der zweiten Kopfzelle (die "Gekündigt" Kopfzelle) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte auffallen sollte, wird hier ebenfalls ein benutzerdefiniertes Styling hinzugefügt. Diese CSS-Regel stylt die erste Kopfzelle in jeder Zeile des Tabellenkörpers mit der {{CSSxRef("text-align")}} Eigenschaft, um die Namen der Mitglieder linksbündig auszurichten und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem Zeilenfarben alterniert werden. Dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns ein bisschen {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, lassen Sie uns das hier tun. Dies setzt einfach die {{CSSxRef("text-align")}} Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperreihe auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird dem Fußbereich der Tabelle ein ähnliches Styling wie dem Kopfbereich hinzugefügt, um ihn auch hervorzuheben:

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

### Große Tabellen in kleinen Räumen anzeigen

Ein häufiges Problem mit Tabellen im Web ist, dass sie auf kleinen Bildschirmen bei großem Inhalt nicht gut funktionieren und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise von einem CMS stammt und nicht geändert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben den HTML-Inhalt verborgen, da er sehr umfangreich ist und nichts Bemerkenswertes an ihm ist. Das CSS ist in diesem Beispiel nützlicher zu untersuchen.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:
      <th>2<sup>3</sup> equals:
      <th>3<sup>3</sup> equals:
      <th>4<sup>3</sup> equals:
      <th>5<sup>3</sup> equals:
      <th>6<sup>3</sup> equals:
      <th>7<sup>3</sup> equals:
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

#### CSS

Beim Betrachten dieser Stile werden Sie feststellen, dass die {{cssxref("display")}} Eigenschaft der Tabelle auf `block` gesetzt wurde. Während dies das Scrollen ermöglicht, verliert die Tabelle einen Teil ihrer Integrität, und die Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem abzumildern, haben wir {{cssxref("white-space")}} auf `nowrap` am {{HTMLElement("tbody")}} gesetzt. Wir machen dies jedoch nicht für das {{HTMLElement("thead")}}, um zu verhindern, dass lange Titel die Spalten breiter machen, als sie zum Anzeigen der Daten sein müssen.

Um die Tabellenköpfe auf der Seite zu belassen, während man nach unten scrollt, haben wir {{cssxref("position")}} sticky auf die {{HTMLElement("th")}} Elemente gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da dies verhindert, dass der Kopf korrekt vom Rest der Tabelle getrennt wird.

Da das `<table>` eine feste Größe hat, ist das {{cssxref("overflow")}} mit dem Wert `auto` hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
  background: #fff;
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}} Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}} Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}} Element,</li>
          <li>
            entweder einer der folgenden:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}} Elemente</li>
              <li>ein oder mehr {{HTMLElement("tr")}} Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}} Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Fluss-Inhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/table_role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Jegliche</td>
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

- [Lernen: HTML Tabellen Grundlagen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften, um das Erscheinungsbild von Zellgrenzen, Regeln und Rahmen zu steuern
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften, um die Tabelle auszurichten und den Zellinhalt zu vergrößern
- {{cssxref("text-align")}}: CSS-Eigenschaft, um den Tabellenzelleninhalt horizontal auszurichten
- {{cssxref("vertical-align")}}: CSS-Eigenschaft, um den Tabellenzelleninhalt vertikal auszurichten
- {{cssxref("width")}}: CSS-Eigenschaft, um die Breite der Tabelle zu steuern
