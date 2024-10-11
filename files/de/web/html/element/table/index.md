---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten – also Informationen, die in einer zweidimensionalen Tabelle dargestellt sind, bestehend aus Zeilen und Spalten mit Zellen, die Daten enthalten.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht mehr verwendet werden. Sie sind hier nur zur Referenz bei der Aktualisierung vorhandenen Codes und aus historischen Gründen dokumentiert.

- `align` {{deprecated_inline}}

  - : Gibt die horizontale Ausrichtung der Tabelle innerhalb ihres übergeordneten Elements an. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbenschlüsselwort](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background-color")}}, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert, als nicht-negative Ganzzahl (in Pixeln), die Größe des Rahmens, der die Tabelle umgibt. Wenn auf `0` gesetzt, wird das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie die CSS-Eigenschaft {{cssxref("border")}} stattdessen, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist veraltet: Anstatt es zu verwenden, wenden Sie die CSS-Eigenschaft {{cssxref("padding")}} auf die Elemente {{HTMLElement("th")}} und {{HTMLElement("td")}} an.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist veraltet: Anstatt es zu verwenden, setzen Sie die CSS-Eigenschaft {{cssxref("border-spacing")}} auf das `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die CSS-Eigenschaft {{cssxref("border-collapse")}} des `<table>`-Elements auf `collapse` eingestellt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens, der die Tabelle umgibt, angezeigt werden soll. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref("border-style")}} und {{cssxref("border-width")}}, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien), und `all` (Rahmen um jede Zelle). Verwenden Sie die CSS-Eigenschaft {{cssxref("border")}} auf die entsprechenden tabellenbezogenen Elemente, ebenso wie auf das `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen alternativen Text, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie das {{htmlelement("caption")}} Element stattdessen, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Gibt die Breite der Tabelle an. Verwenden Sie die CSS-Eigenschaft {{cssxref("width")}} stattdessen, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Während keine HTML-Spezifikation `height` als ein `<table>`-Attribut enthält, unterstützen einige Browser eine nicht-standardmäßige Interpretation von `height`. Der wertlose Wert legt eine absolute Mindesthöhe in Pixeln fest. Wird er als Prozentwert gesetzt, bezieht sich die minimale Tabellenhöhe auf die Höhe des übergeordneten Containers. Verwenden Sie die CSS-Eigenschaft {{cssxref("min-height")}} stattdessen, da dieses Attribut veraltet ist.

## Visuelles Layout der Tabelleninhalte

Die folgenden Elemente sind Teil der Tabellenstruktur:

- {{HTMLElement("caption")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("col")}}
- {{HTMLElement("th")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("td")}}
- {{HTMLElement("tfoot")}}

Der `<table>`-Block stellt einen Tabellenformatierungskontext her. Die Elemente innerhalb der `<table>` erzeugen rechteckige Blöcke. Jeder Block nimmt eine Anzahl von Tabellenzellen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox beansprucht eine Zeile von Zellen.
2. Eine Zeilengruppe beansprucht eine oder mehrere Zeilenboxen.
3. Spaltenboxen werden in der Reihenfolge des Quellcodes nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir) Attributs werden die Spalten von links nach rechts oder von rechts nach links angeordnet. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppe beansprucht eine oder mehrere Spaltenboxen.
5. Eine Zellenbox kann sich über mehrere Zeilen und Spalten erstrecken. Benutzeragenten schneiden Zellen, um in die verfügbaren Zeilen und Spalten zu passen.

Die Tabellenzellen haben Polster. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenebenen und Transparenz

Für Stylingzwecke können die Tabellenelemente als auf sechs übereinander liegenden Ebenen angeordnet betrachtet werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf ein Element in einer Ebene gesetzt wurde, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird so dargestellt, als ob eine anonyme Tabellenzellen-Box diesen Platz eingenommen hätte.

## Barrierefreiheit

### Beschriftungen

Durch die Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert klar und prägnant den Zweck der Tabelle beschreibt, hilft es den Menschen, zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollen.

Dies hilft Menschen, die sich mit Hilfe von unterstützender Technologie wie Bildschirmlesegeräten fortbewegen, Menschen, die unter eingeschränkten Sehvermögen leiden, und Menschen mit kognitiven Bedenken.

- [MDN Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>](/de/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Zeilen und Spalten abgrenzen

Das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut auf Kopfzellen ({{HTMLElement("th")}} Elemente) ist in einfachen Kontexten redundant, da der Scope abgeleitet wird. Einige assistive Technologien können jedoch Schwierigkeiten haben, korrekte Rückschlüsse zu ziehen, daher kann die Angabe des Kopfbereichs die Benutzererfahrung verbessern. In komplexen Tabellen kann der [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die Zellen, die zu einem Kopf gehören, bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit zwei Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwendung des scope-Attributs, um Headerzellen und Datenzellen in Datentabellen zuzuordnen | W3C Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Assistive Technologien wie Bildschirmlesegeräte haben möglicherweise Schwierigkeiten, Tabellen zu analysieren, die so komplex sind, dass Headerzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Methoden in Betracht ziehen, um den Inhalt der Tabelle darzustellen, einschließlich der Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Zusätzlich dazu, dass Menschen, die assistive Technologien verwenden, den Inhalt der Tabelle verstehen, kann dies auch Personen mit kognitiven Bedenken zugutekommen, die möglicherweise Schwierigkeiten haben, die durch das Tabellenlayout beschriebenen Beziehungen zu verstehen.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination der Attribute [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers), um programmgesteuert jede Tabellenzelle mit den Headern ({{HTMLElement("th")}}-Elementen) zu verknüpfen, mit denen die Zelle verbunden ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Headern • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwendung von id- und headers-Attributen zur Zuordnung von Datenzellen zu Headerzellen in Datentabellen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die nachstehenden Beispiele umfassen Tabellen mit zunehmend zunehmender Komplexität. Für weitere Beispiele, einschließlich eines ausführlichen Tutorials, siehe die [HTML-Tabellen](/de/docs/Learn/HTML/Tables) Serie im Bereich [Webentwicklung lernen](/de/docs/Learn), in denen Sie lernen, wie Sie die Tabellenelemente und deren Attribute verwenden, um Ihre tabellarischen Daten korrekt zu strukturieren. Ein [Tabellen-Styling](/de/docs/Learn/CSS/Building_blocks/Styling_tables) Leitfaden bietet Informationen zum Styling von Tabellen, einschließlich geläufiger, nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen erfordert, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und gängigen Standards abdeckt. Weitere und detailliertere Informationen finden Sie auf den entsprechend verlinkten Seiten.

Diese Tabellenbeispiele demonstrieren, wie Sie eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellen, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestylt ist.

Aufgrund der Strukturierung von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell wachsen. Aus diesem Grund ist es wichtig, den Zweck und das endgültige Erscheinungsbild der Tabelle klar zu definieren, um die geeignete Struktur zu erstellen. Eine strukturierte und mit {{Glossary("semantics", "semantischem")}} Markup entwickelte logische Struktur ist nicht nur leichter zu stylen, sondern ermöglicht auch nützliche und zugängliche Tabellen, die von jedem, einschließlich Suchmaschinen und Nutzern assistiver Technologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, wobei die nachfolgenden Beispiele in der Komplexität zunehmen. Zuerst entwickeln wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle. Die ersten zwei Beispiele enthalten keine Tabellensektionierungsgruppen wie einen definierten Kopf, Hauptteil oder Fuß, und beinhalten kein Zellenspan oder explizit definierte Zellbeziehungen. Selbst eine Beschriftung wird nicht bereitgestellt. Während wir durch die Beispiele arbeiten, werden sie schrittweise erweitert, um alle Tabellenmerkmale zu umfassen, die eine komplexe Datentabelle besitzen sollte.

### Grundlegende Tabelle

Dieses Beispiel enthält eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Browser-Tabellenstile zu demonstrieren, wurde in diesem Beispiel kein CSS verwendet.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten werden mit Tabellenkopf- und Datenelementen innerhalb dieser definiert. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenüberschriften für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es gibt kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#author_stylesheets), das auf diese Tabelle angewendet wird. Das Styling-Ergebnis resultiert rein aus dem [Benutzer-Agent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzeilen

Dieses Beispiel erweitert die [grundlegende Tabelle](#grundlegende_tabelle), indem es den Inhalt erweitert und grundlegende CSS-Stile hinzufügt.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen) mit jeweils vier Spalten. Die erste Zeile ist eine Zeile mit Kopfzellen (die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Die nachfolgenden Zeilen enthalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste Kindelemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionierungselemente verwendet werden, definiert der Browser automatisch die Inhaltsgruppierungsstruktur, d. h., alle Zeilen befinden sich im Hauptteil der Tabelle, der vom impliziten {{HTMLElement("tbody")}}-Element umschlossen ist.

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

Mit CSS stellen wir das grundlegende Styling bereit, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt einen soliden Rahmen um die `<table>` und um jede der Tabellenzellen hinzu, einschließlich der durch {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente spezifizierten, um jede Kopf- und Datenzelle abzugrenzen.

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

Bevor wir die Tabelle auf erweiterte Weise erweitern, empfiehlt es sich, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen den Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}} Elemente) definiert werden.

#### HTML

Dies wird erreicht, indem das [`scope`](/de/docs/Web/HTML/Element/th#scope) Attribut auf den {{HTMLElement("th")}} Elementen eingeführt und die Werte entsprechend auf `col` (Spalte) oder `row` (Zeile) gesetzt werden.

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

Das CSS und das visuelle Ergebnis bleiben unverändert – die Anpassung bietet wertvolle kontextuelle Informationen für assistive Technologien wie Bildschirmlesegeräte, um zu helfen, welche Zellen zu welchen Überschriften gehören.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, kann die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers) Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen die Barrierefreiheit verbessern und unterstützenden Technologien helfen, die Beziehungen zwischen Zellen zu identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizite Angabe von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Spezifizieren von Zellbeziehungen](#spezifizieren_von_tabellenzellenbeziehungen) kann die {{Glossary("semantics", "Semantik")}} der Tabelle verbessert werden, indem Tabellensektionsgruppen eingeführt werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}} Element) nur Spalten-Kopfzellen enthält und die Kopfzeile für den Rest der Tabelleninhalte bereitstellt, kann sie im {{HTMLElement("thead")}} Element eingeschlossen werden, um diese Zeile explizit als Kopfteil der Tabelle anzugeben. Außerdem kann, was automatisch vom Browser erledigt wird, explizit definiert werden – der Hauptteil der Tabelle, der die Hauptdaten der Tabelle enthält, wird festgelegt, indem die entsprechenden Zeilen im {{HTMLElement("tbody")}} Element eingeschlossen werden. Die explizite Verwendung des {{HTMLElement("tbody")}} Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen, um unerwünschte Ergebnisse zu vermeiden.

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

Wieder einmal bleiben das CSS und das visuelle Ergebnis unverändert – das Spezifizieren solcher Tabellensektionsgruppen bietet wertvolle kontextuelle Informationen für assistive Technologien, einschließlich Bildschirmlesegeräte und Suchmaschinen, ebenso wie für das Styling im CSS, das in einem späteren Beispiel gezeigt wird.

### Spalten- und Zeilenspan

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und eine mehrzeilige Kopfsektion einführen.

#### HTML

Aufbauend auf der bisher erstellten Tabelle wird in jeder Zeile des Hauptteils mit dem {{HTMLElement("td")}}-Element eine neue Spalte für ein "Mitgliedschafts-Enddatum" hinzugefügt. Eine zusätzliche Zeile ({{HTMLElement("tr")}}-Element) wird ebenfalls im Kopfteil ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschafts-Daten"-Kopfzeile als Überschrift für die "Beigetreten" und "Gekündigt" Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile erfolgt durch Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen den richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Kopfzeilen ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschafts-Daten" und "Balance", und eine "Mitgliedschafts-Daten" Kopfzeile mit zwei Unterkopfzellen in einer zweiten Zeile: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die Spalten "Name", "ID" und "Balance" in der ersten Zeile der Kopfzeilen erstrecken sich über beide Tabellenkopfzeilen mittels des `rowspan`-Attributs und sind somit zwei Zeilen hoch.
- Die "Mitgliedschafts-Daten"-Kopfzelle der ersten Zeile erstreckt sich über zwei Spalten durch das `colspan`-Attribut und ist somit zwei Spalten breit.
- Die zweite Zeile enthält nur die beiden Kopfzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten mit den Zellen in der ersten Zeile, die sich über zwei Zeilen erstrecken, verbunden sind. Die zwei Kopfzellen sind korrekt unter dem "Mitgliedschafts-Daten"-Header positioniert.

### Tabellenüberschrift und Spaltenzusammenfassung

Es ist eine gebräuchliche und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, die es den Benutzern ermöglicht, schnell zu bestimmen, ob die Tabelle relevant ist. Darüber hinaus wird die Spalte "Balance" durch die Anzeige der Summe der Salden der einzelnen Mitglieder zusammengefasst.

#### HTML

Eine Tabellenzusammenfassung wird durch die Verwendung eines Tabellen[fehlers](#beschriftungen) ({{HTMLElement("caption")}}-Elements) als erstes Kindelement der `<table>` hinzugefügt. Diese gibt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Zuletzt wird ein Tabellenfußteil ({{HTMLElement("tfoot")}}-Element) unterhalb des Hauptteils hinzugefügt, mit einer Zeile, die die "Balance"-Spalte zusammenfasst, indem sie eine Summe anzeigt. Die vorher eingeführten Elemente und Attribute werden angewendet.

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

### Grundlegendes Tabellenstyling

Lassen Sie uns ein grundlegendes Styling auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} für die Kopf- und Fußzeilen hinzuzufügen. Dieses Mal bleibt das HTML unverändert, daher lasst uns direkt in das CSS eintauchen.

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

Obwohl hier ein {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element hinzugefügt wird, um eine optisch ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, je nach persönlicher Meinung) festzulegen, ist der interessante Teil der zweite Stil, in dem die {{HTMLElement("tr")}}-Elemente, die sich innerhalb von {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, gestylt werden, indem eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine schnelle Möglichkeit, einer bestimmten Sektion gleichzeitig eine Hintergrundfarbe zuzuweisen.

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

### Fortgeschrittenes Tabellenstyling

Jetzt geben wir alles, mit Stilen auf Zeilen sowohl in den Kopf- als auch in den Hauptbereichen, einschließlich alternierender Zeilenfarben, Zellen mit unterschiedlichen Farben, je nach Position innerhalb einer Zeile, und so weiter. Lassen Sie uns diesmal zuerst auf das Ergebnis schauen.

#### Ergebnis

So wird die endgültige Tabelle aussehen:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt keine Änderungen am HTML wieder. Sehen Sie, was eine ordentliche Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel umfangreicher. Es ist nicht kompliziert, aber es passiert einiges. Lassen Sie es uns aufschlüsseln.

Hier werden die Eigenschaften {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} hinzugefügt, um den Abstand zwischen den Zellen zu eliminieren und aneinandergrenzende Ränder zusammenzulegen, sodass diese nicht als doppelte Ränder, sondern als ein einzelner Rand angezeigt werden. Zudem wird das {{HTMLElement("caption")}} durch die Eigenschaft {{CSSxRef("caption-side")}} am `bottom` der Tabelle platziert:

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

Anschließend wird die Eigenschaft {{CSSxRef("padding")}} verwendet, um allen Tabellenelementen Raum um deren Inhalt zu geben. Die Eigenschaft {{CSSxRef("vertical-align")}} richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was an den Zellen im Kopf zu sehen ist, die sich über zwei Zeilen erstrecken:

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

Die nächste CSS-Regel setzt den {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Tabellenkopf, wie mit {{HTMLElement("thead")}} angegeben. Dann wird die untere Grenze des Kopfs auf eine zwei Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}} selektor verwenden, um die Eigenschaft {{CSSxRef("border-bottom")}} auf die _zweite_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen überspannt werden. Das bedeutet, dass tatsächlich zwei Zeilen vorhanden sind; das Anwenden des Stils auf die erste Zeile würde uns nicht das erwartete Ergebnis liefern:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grün und rot tönen, um das "Gute" eines neuen Mitglieds und das "Einfache" einer gekündigten Mitgliedschaft zu repräsentieren. Hier graben wir uns in die letzte Zeile im Kopfbereich der Tabelle erklärt und geben der ersten Kopfzelle darin (die "Beigetreten" Kopfzeile) eine grünliche Farbe und der zweiten Kopfzeile darin (die "Gekündigt" Kopfzeile) einen rötlichen Farbton:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da die erste Spalte ebenfalls hervorstechen sollte, fügen wir auch hier ein benutzerdefiniertes Styling hinzu. Diese CSS-Regel styled die erste Kopfzelle in jeder Reihe des Tabellenkörpers, indem die Eigenschaft {{CSSxRef("text-align")}} verwendet wird, um die Mitgliedernamen linksbündig auszurichten, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist eine gängige Praxis, die Lesbarkeit von Tabellendaten durch alternierende Zeilenfarben zu verbessern – dies wird manchmal als "Zebra-Streifen" bezeichnet. Lassen Sie uns ein wenig {{cssxref("background-color")}} zu jeder geraden Zeile hinzufügen:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es üblich ist, Währungswerte in Tabellen rechtsbündig auszurichten, tun wir das hier auch. Dies setzt einfach die Eigenschaft {{CSSxRef("text-align")}} für die letzte {{HTMLElement("td")}} in jeder Zeile des Körpers auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Schließlich wird ein ähnliches Styling wie für den Kopf auf den Fußbereich der Tabelle angewendet, um diesen ebenfalls hervorzuheben:

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

Ein häufiges Problem bei Tabellen im Web ist, dass sie auf kleinen Bildschirmen bei einer großen Menge an Inhalten nicht besonders gut funktionieren und der Weg, sie scrollbar zu machen, nicht offensichtlich ist, insbesondere wenn das Markup möglicherweise aus einem CMS kommt und nicht mit einem Wrapper geändert werden kann.

Dieses Beispiel bietet eine Möglichkeit, Tabellen in kleinen Räumen anzuzeigen. Wir haben die HTML-Inhalte versteckt, da sie sehr groß sind und nichts Bemerkenswertes darin ist. Das CSS ist in diesem Beispiel nützlicher zu inspizieren.

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

Beim Betrachten dieser Styles werden Sie feststellen, dass die {{cssxref("display")}} Eigenschaft der Tabelle auf `block` gesetzt wurde. Dies ermöglicht zwar das Scrollen, die Tabelle verliert jedoch einen Teil ihrer Integrität, und Tabellenzellen versuchen, so klein wie möglich zu werden. Um dieses Problem zu mildern, haben wir {{cssxref("white-space")}} auf `nowrap` auf das {{HTMLElement("tbody")}} gesetzt. Wir tun dies jedoch nicht für das {{HTMLElement("thead")}}, um lange Titel zu vermeiden, die Spalten breiter machen, als sie für die Anzeige der Daten sein müssten.

Um die Tabellenköpfe auf der Seite zu halten, während nach unten gescrollt wird, haben wir {{cssxref("position")}} auf sticky auf den {{HTMLElement("th")}} Elementen gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, denn wenn wir dies tun, kann der Kopf nicht korrekt von dem Rest der Tabelle getrennt werden.

Angesichts der Tatsache, dass die `<table>` eine feste Größe hat, ist das {{cssxref("overflow")}} auf `auto` gesetzte hier der wichtige Teil, da es die Tabelle scrollbar macht.

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
          >Flussinhalt</a
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
            entweder eines der folgenden:
            <ul>
              <li>null oder mehr {{HTMLElement("tbody")}} Elemente</li>
              <li>eins oder mehr {{HTMLElement("tr")}} Elemente</li>
            </ul>
          </li>
          <li>ein optionales {{HTMLElement("tfoot")}} Element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Flussinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/table_role"
            >table</a
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

- [Lernen: HTML-Tabellen](/de/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Erscheinungsbilds von Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und zum Festlegen des Abstands auf Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zur horizontalen Ausrichtung des Tabellenzellinhalts
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zur vertikalen Ausrichtung des Tabellenzellinhalts
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
