---
title: "<table>: Das Table-Element"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<table>`** [HTML](/de/docs/Web/HTML) Element repräsentiert tabellarische Daten – also Informationen, die in einer zweidimensionalen Tabelle dargestellt werden, bestehend aus Zeilen und Spalten von Zellen, die Daten enthalten.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-taller")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

### Veraltete Attribute

Die folgenden Attribute sind veraltet und sollten nicht verwendet werden. Sie sind unten dokumentiert, um beim Aktualisieren existierender Codes zu helfen und aus historischem Interesse.

- `align` {{deprecated_inline}}

  - : Legt die horizontale Ausrichtung der Tabelle innerhalb des übergeordneten Elements fest. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `left`, `center` und `right`. Verwenden Sie stattdessen die {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `bgcolor` {{deprecated_inline}}

  - : Definiert die Hintergrundfarbe der Tabelle. Der Wert ist eine HTML-Farbe; entweder ein [6-stelliger hexadezimaler RGB-Code](/de/docs/Web/CSS/hex-color), der mit einem `#` beginnt, oder ein [Farbskript](/de/docs/Web/CSS/named-color). Andere CSS {{cssxref("color_value", "&lt;color&gt")}} Werte werden nicht unterstützt. Verwenden Sie stattdessen die {{cssxref("background-color")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `border` {{deprecated_inline}}

  - : Definiert, als nicht-negativer Ganzzahlwert (in Pixeln), die Größe des Rahmens um die Tabelle. Wenn sie auf `0` gesetzt wird, ist das [`frame`](#frame) Attribut auf void gesetzt. Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

- `cellpadding` {{deprecated_inline}}

  - : Definiert den Abstand zwischen dem Inhalt einer Zelle und ihrem Rand. Dieses Attribut ist obsolet: Verwenden Sie stattdessen die {{cssxref("padding")}} CSS-Eigenschaft auf den {{HTMLElement("th")}} und {{HTMLElement("td")}} Elementen.

- `cellspacing` {{deprecated_inline}}

  - : Definiert die Größe des Abstands zwischen zwei Zellen. Dieses Attribut ist obsolet: Verwenden Sie stattdessen die {{cssxref("border-spacing")}} CSS-Eigenschaft auf dem `<table>`-Element. Beachten Sie, dass dies keine Wirkung hat, wenn die {{cssxref("border-collapse")}} CSS-Eigenschaft des `<table>`-Elements auf `collapse` gesetzt ist.

- `frame` {{deprecated_inline}}

  - : Definiert, welche Seite des Rahmens um die Tabelle angezeigt werden muss. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `void`, `above`, `below`, `hsides`, `vsides`, `lhs`, `rhs`, `box` und `border`. Verwenden Sie stattdessen die {{cssxref("border-style")}} und {{cssxref("border-width")}} CSS-Eigenschaften, da dieses Attribut veraltet ist.

- `rules` {{deprecated_inline}}

  - : Definiert, wo Regeln (Rahmen) in der Tabelle angezeigt werden. Die möglichen {{Glossary("enumerated", "enumerierten")}} Werte sind `none` (Standardwert), `groups` ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, und {{HTMLElement("tfoot")}} Elemente), `rows` (horizontale Linien), `cols` (vertikale Linien) und `all` (Rahmen um jede Zelle). Verwenden Sie stattdessen die {{cssxref("border")}} CSS-Eigenschaft auf den entsprechenden tabellenbezogenen Elementen sowie auf dem `<table>` selbst, da dieses Attribut veraltet ist.

- `summary` {{deprecated_inline}}

  - : Definiert einen Alternativtext, der den Inhalt der Tabelle zusammenfasst. Verwenden Sie stattdessen das {{htmlelement("caption")}}-Element, da dieses Attribut veraltet ist.

- `width` {{deprecated_inline}}

  - : Bestimmt die Breite der Tabelle. Verwenden Sie stattdessen die {{cssxref("width")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

    > [!NOTE]
    > Obwohl keine HTML-Spezifikation `height` als Attribut eines `<table>` enthält, unterstützen einige Browser eine nicht standardisierte Interpretation von `height`. Der wertlose Wert setzt eine minimale absolute Höhe in Pixeln. Wenn er als Prozentwert gesetzt ist, ist die minimale Tabellenhöhe relativ zur Höhe des übergeordneten Containers. Verwenden Sie stattdessen die {{cssxref("min-height")}} CSS-Eigenschaft, da dieses Attribut veraltet ist.

## Visuelles Layout der Tabelleninhalte

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

Das `<table>`-Box stellt einen Tabellenformatierungskontext her. Elemente innerhalb des `<table>` erzeugen rechteckige Boxen. Jede Box nimmt eine Anzahl von Tabellenspalten und -zeilen gemäß den folgenden Regeln ein:

1. Die Zeilenboxen füllen die Tabelle in der Reihenfolge des Quellcodes von oben nach unten. Jede Zeilenbox belegt eine Zeile von Zellen.
2. Eine Zeilengruppenbox nimmt eine oder mehrere Zeilenboxen ein.
3. Spaltenboxen werden in Quellcode-Reihenfolge nebeneinander platziert. Abhängig vom Wert des [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attributs werden die Spalten in Links-nach-Rechts- oder Rechts-nach-Links-Richtung gelegt. Eine Spaltenbox belegt eine oder mehrere Spalten von Tabellenzellen.
4. Eine Spaltengruppenbox nimmt eine oder mehrere Spaltenboxen ein.
5. Eine Zellbox kann über mehrere Zeilen und Spalten verteilt werden. Nutzeragenturen schneiden Zellen zu, um in die verfügbare Anzahl von Zeilen und Spalten zu passen.

Tabellenzellen haben eine Polsterung. Boxen, die eine Tabelle bilden, haben keine Ränder.

### Tabellenebenen und Transparenz

Zum Zweck der Gestaltung können die Tabellenelemente als auf sechs übereinanderliegenden Ebenen betrachtet werden:

![Table element layers](table_element_layers.png)

Der Hintergrund, der auf einem Element in einer Ebene festgelegt ist, ist nur sichtbar, wenn die darüber liegenden Ebenen einen transparenten Hintergrund haben. Eine fehlende Zelle wird gerendert, als ob an dieser Stelle eine anonyme Tabellenzellenbox stünde.

## Barrierefreiheit

### Überschriften

Durch die Bereitstellung eines {{HTMLElement("caption")}}-Elements, dessen Wert den Zweck der Tabelle klar und prägnant beschreibt, hilft es den Menschen, zu entscheiden, ob sie den Rest des Tabelleninhalts überprüfen oder überspringen sollten.

Dies hilft Menschen, die mit Unterstützungstechnologien wie Bildschirmlesegeräten navigieren, Menschen mit Sehbehinderungen und Menschen mit kognitiven Vorteilen.

- [MDN Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#adding_a_caption_to_your_table_with_caption)
- [Überschrift & Zusammenfassung • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Abgrenzung von Zeilen und Spalten

Das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut auf Kopfzellen ({{HTMLElement("th")}}-Elemente) ist in einfachen Kontexte redundant, da der Bereich abgeleitet wird. Einige unterstützende Technologien können jedoch möglicherweise keine korrekten Ableitungen ziehen, sodass die Angabe des Kopfbereichs die Benutzererfahrung verbessern kann. In komplexen Tabellen kann [`scope`](/de/docs/Web/HTML/Element/th#scope) angegeben werden, um notwendige Informationen über die mit einem Kopf verbundenen Zellen bereitzustellen.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit zwei Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabellen mit unregelmäßigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Verwenden des scope-Attributs, um Kopfzellen und Datenzellen in Datentabellen zuzuordnen | W3C-Techniken für WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Komplexe Tabellen

Hilfstechnologien wie Bildschirmlesegeräte können Schwierigkeiten haben, Tabellen zu interpretieren, die so komplex sind, dass Kopfzellen nicht streng horizontal oder vertikal zugeordnet werden können. Dies wird typischerweise durch das Vorhandensein der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angezeigt.

Idealerweise sollten Sie alternative Methoden in Betracht ziehen, den Tabelleninhalt darzustellen, einschließlich dessen Aufteilung in eine Sammlung kleinerer, verwandter Tabellen, die nicht auf die Verwendung der Attribute [`colspan`](/de/docs/Web/HTML/Element/td#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) angewiesen sind. Neben der Unterstützung von Menschen, die unterstützende Technologien verwenden, um den Tabelleninhalt zu verstehen, kann dies auch Menschen mit kognitiven Bedenken zugutekommen, die Schwierigkeiten beim Verständnis der in der Tabellenanordnung beschriebenen Zuordnungen haben.

Wenn die Tabelle nicht aufgeteilt werden kann, verwenden Sie eine Kombination von [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attributen, um programmgesteuert jede Tabellenzelle mit den Kopf-Elementen ({{HTMLElement("th")}}) zu verknüpfen, denen die Zelle zugeordnet ist.

- [MDN Tabellen für sehbehinderte Benutzer](/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility#tables_for_visually_impaired_users)
- [Tabellen mit mehrstufigen Überschriften • Tabellen • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Verwenden von ID- und headers-Attributen, um Datenzellen mit Kopfzellen in Datentabellen zuzuordnen | Techniken für W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Beispiele

Die folgenden Beispiele enthalten Tabellen von zunehmender Komplexität. Siehe auch unseren Anfänger-[Styling-Leitfaden für Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) für Stilinformationen zu Tabellen, einschließlich gängiger und nützlicher Techniken.

Da die Struktur einer `<table>` die Verwendung mehrerer tabellenbezogener HTML-Elemente zusammen mit verschiedenen zugehörigen Attributen beinhaltet, sollen die folgenden Beispiele eine vereinfachte Erklärung bieten, die die Grundlagen und üblichen Standards abdeckt. Zusätzliche und detailliertere Informationen finden Sie auf den entsprechenden verlinkten Seiten.

Diese Tabellenbeispiele zeigen, wie man eine {{Glossary("accessibility", "zugängliche")}} Tabelle erstellt, die mit HTML strukturiert und mit [CSS](/de/docs/Web/CSS) gestaltet wird.

Aufgrund der Struktur von HTML-Tabellen kann das {{Glossary("markup", "Markup")}} schnell anwachsen. Aus diesem Grund ist es wichtig, den Zweck und die endgültige Darstellung der Tabelle klar zu definieren, um die entsprechende Struktur zu erstellen. Eine logisch entwickelte Struktur mit {{Glossary("semantics", "semantischem")}} Markup ist nicht nur einfacher zu gestalten, sondern ermöglicht nützliche und zugängliche Tabellen, die von jedermann, einschließlich Suchmaschinen und Benutzern von assistiven Technologien, verstanden und navigiert werden können.

Das erste Beispiel ist einfach, die folgenden Beispiele nehmen an Komplexität zu. Zuerst werden wir eine sehr einfache HTML-Tabellenstruktur für die Tabelle entwickeln. Die ersten beiden Beispiele enthalten keine Tabellengruppierungen wie ein definiertes Kopf-, Körper- oder Fußteil und beinhalten keinen Zellenspannung oder explizit definierte Zellbeziehungen. Nicht einmal eine Überschrift wird bereitgestellt. Während wir die Beispiele durchgehen, werden diese schrittweise erweitert, um alle Tabelleneigenschaften einzubeziehen, die eine komplexe Datentabelle besitzen sollte.

### Einfache Tabelle

Dieses Beispiel enthält eine _sehr_ einfache Tabelle mit drei Zeilen und zwei Spalten. Um die Standard-Tabelle-Stile des Browsers zu demonstrieren, wurde in diesem Beispiel kein CSS aufgenommen.

#### HTML

Die Tabellenzeilen werden mit {{HTMLElement("tr")}}-Elementen definiert, und die Spalten mit Tabellenkopf- und Datenzellen innerhalb dieser. Die erste Zeile enthält die Kopfzellen ({{HTMLElement("th")}}-Elemente), die als Spaltenköpfe für die Datenzellen ({{HTMLElement("td")}}-Elemente) dienen. Jedes Element ({{HTMLElement("th")}} oder {{HTMLElement("td")}}) pro Zeile befindet sich in seiner jeweiligen Spalte – das heißt, das erste Element einer Zeile befindet sich in der ersten Spalte, und das zweite Element dieser Zeile befindet sich in der zweiten Spalte.

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

Es wird kein benutzerdefiniertes [CSS](/de/docs/Web/CSS) oder [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#author_stylesheets) auf diese Tabelle angewendet. Das Styling resultiert ausschließlich aus dem [user-agent Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets).

{{EmbedLiveSample('Basic_table', 650, 80)}}

### Erweiterte Tabelle mit Kopfzellen

Dieses Beispiel erweitert die [einfache Tabelle](#einfache_tabelle), indem es den Inhalt ausweitet und grundlegende CSS-Stile hinzufügt.

#### HTML

Die Tabelle besteht jetzt aus vier Zeilen ({{HTMLElement("tr")}}-Elementen) mit jeweils vier Spalten. Die erste Zeile ist eine Zeile von Kopfzellen (Die erste Zeile enthält nur {{HTMLElement("th")}}-Elemente). Nachfolgende Zeilen beinhalten eine Kopfspalte ({{HTMLElement("th")}}-Elemente als erste untergeordnete Elemente jeder Zeile) und drei Datenspalten ({{HTMLElement("td")}}-Elemente). Da keine Tabellensektionselemente verwendet werden, definiert der Browser die Inhaltsgruppenstruktur automatisch, d. h., alle Zeilen sind innerhalb des Körpers der Tabelle, eines der impliziten {{HTMLElement("tbody")}}-Elemente, eingeschlossen.

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

Mit CSS bieten wir das grundlegende Styling, um Linien um die Komponenten der Tabelle zu erstellen, um die Datenstruktur klarer zu machen. Das CSS fügt eine solide Umrandung um die `<table>` und jeder der Tabellenspalten ein, einschließlich derer, die sowohl mit {{HTMLElement("th")}} als auch mit {{HTMLElement("td")}}-Elementen spezifiziert sind, und kennzeichnet jede Kopf- und Datenzelle.

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

### Festlegen von Zellbeziehungen in der Tabelle

Bevor die Tabelle auf fortgeschrittenere Weise erweitert wird, ist es ratsam, die {{Glossary("accessibility", "Barrierefreiheit")}} zu verbessern, indem Beziehungen zwischen Kopf- und Datenzellen ({{HTMLElement("th")}} und {{HTMLElement("td")}}-Elemente) definiert werden.

#### HTML

Dies wird durch das Einführen des [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attributs auf den {{HTMLElement("th")}}-Elementen erreicht und die Werte auf die entsprechenden `col` (Spalte) oder `row` (Zeile) Werte gesetzt.

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

Das CSS und das visuelle Ergebnis sind unverändert – die Anpassung bietet wertvolle kontextuelle Informationen für assistive Technologien wie Bildschirmlesegeräte, um zu helfen, welche Zellen mit den Köpfen verwandt sind.

> [!NOTE]
> Wenn die Tabellenstruktur noch komplexer ist, könnte die (zusätzliche) Verwendung des [`headers`](/de/docs/Web/HTML/Element/th#headers)-Attributs auf den {{HTMLElement("th")}} und {{HTMLElement("td")}}-Elementen die Barrierefreiheit verbessern und helfen, dass assistive Technologien die Beziehungen zwischen Zellen identifizieren; siehe [Komplexe Tabellen](#komplexe_tabellen).

### Explizites Festlegen von Tabellensektionsgruppen

Zusätzlich zur Verbesserung der Barrierefreiheit durch [Definieren von Zellbeziehungen](#festlegen_von_zellbeziehungen_in_der_tabelle) kann die {{Glossary("semantics", "Semantik")}} der Tabelle durch die Einführung von Tabellensektionsgruppen verbessert werden.

#### HTML

Da die erste Zeile ({{HTMLElement("tr")}}-Element) nur Spaltenkopfzellen enthält und den Kopf für den Rest der Tabellendaten bereitstellt, kann sie in das {{HTMLElement("thead")}}-Element eingeschlossen werden, um diese Zeile explizit als Kopfabteilung der Tabelle zu spezifizieren. Darüber hinaus kann das, was automatisch vom Browser gehandhabt wird, auch explizit festgelegt werden – der Körperabschnitt der Tabelle, der die Hauptdaten der Tabelle enthält, wird durch das Einschließen der entsprechenden Zeilen im {{HTMLElement("tbody")}}-Element spezifiziert. Die explizite Verwendung des {{HTMLElement("tbody")}}-Elements hilft dem Browser, die beabsichtigte Tabellenstruktur zu erstellen und unerwünschte Ergebnisse zu vermeiden.

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

Wieder einmal sind das CSS und das visuelle Ergebnis unverändert — das Spezifizieren solcher Tabellensektionsgruppen bietet wertvolle kontextuelle Informationen für Hilfstechnologien, einschließlich Bildschirmlesegeräten und Suchmaschinen, sowie für Styles in CSS, die später in einem Beispiel dargestellt werden.

### Spalten- und Zeilen-Spannung

In diesem Beispiel erweitern wir die Tabelle noch weiter, indem wir eine Spalte hinzufügen und einen Kopfbereich über mehrere Zeilen einführen.

#### HTML

Basierend auf der bisher erstellten Tabelle wird eine neue Spalte für ein "Mitgliedschafts-Enddatum" in jeder Körperzeile mit dem {{HTMLElement("td")}}-Element hinzugefügt. Eine weitere Zeile ({{HTMLElement("tr")}}-Element) wird ebenfalls innerhalb des Kopfabschnitts ({{HTMLElement("thead")}}-Element) hinzugefügt, um eine "Mitgliedschaftsdaten"-Überschrift als Überschrift für die "Beigetreten" und "Gekündigt" Spalten einzuführen.

Die Erstellung der zweiten Kopfzeile umfasst das Hinzufügen der Attribute [`colspan`](/de/docs/Web/HTML/Element/th#colspan) und [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan) zu den {{HTMLElement("th")}}-Elementen, um die Kopfzellen auf die richtigen Spalten und Zeilen zuzuordnen.

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

Der Kopfbereich hat jetzt zwei Zeilen, eine mit den Überschriften ({{HTMLElement("th")}}-Elemente) "Name", "ID", "Mitgliedschaftsdaten" und "Kontostand", und eine "Mitgliedschaftsdaten"-Überschrift mit zwei Unterüberschriften, die in einer zweiten Zeile sind: "Beigetreten" und "Gekündigt". Dies wird erreicht durch:

- Die Kopfzellen "Name", "ID" und "Kontostand" der ersten Zeile erstrecken sich über beide Tabellenkopfzeilen, indem das [`rowspan`](/de/docs/Web/HTML/Element/th#rowspan)-Attribut verwendet wird, wodurch sie jeweils zwei Zeilen hoch sind.
- Die Kopfzelle "Mitgliedschaftsdaten" der ersten Zeile erstreckt sich über zwei Spalten mit dem [`colspan`](/de/docs/Web/HTML/Element/th#colspan)-Attribut, wodurch sie zwei Spalten breit ist.
- Die zweite Zeile enthält nur die zwei Kopfzellen "Beigetreten" und "Gekündigt", da die anderen drei Spalten mit den Zellen der ersten Zeile zusammengelegt sind, die sich über zwei Zeilen erstrecken. Die beiden Kopfzellen sind korrekt unter dem "Mitgliedschaftsdaten" -Header positioniert.

### Tabellenüberschrift und Spaltensammlung

Es ist eine gängige und empfehlenswerte Praxis, eine Zusammenfassung für den Tabelleninhalt bereitzustellen, die den Benutzern ermöglicht, schnell die Relevanz der Tabelle zu bestimmen. Außerdem wird die "Kontostand"-Spalte zusammengefasst, indem die Summe der Kontostände der einzelnen Mitglieder angezeigt wird.

#### HTML

Eine Tabellenüberschrift wird durch das Verwenden einer Tabellenüberschrift ({{HTMLElement("caption")}}-Element) als erstes untergeordnetes Element der `<table>` hinzugefügt. Die Überschrift liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Tabelle.

Schließlich wird ein Tabellenfußabschnitt ({{HTMLElement("tfoot")}}-Element) unterhalb des Körpers hinzugefügt, mit einer Zeile, die die "Kontostand"-Spalte zusammenfasst, indem eine Summe angezeigt wird. Die zuvor eingeführten Elemente und Attribute werden angewendet.

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

Lassen Sie uns einen grundlegenden Stil auf die Tabelle anwenden, um die Schriftart anzupassen und eine {{cssxref("background-color")}} zu den Kopf- und Fußzeilen hinzuzufügen. Der HTML-Code bleibt dieses Mal unverändert, also schauen wir direkt in das CSS.

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

Während hier eine {{cssxref("font")}}-Eigenschaft auf das `<table>`-Element angewendet wird, um eine optisch ansprechendere Schriftart (oder eine abscheuliche serifenlose Schriftart, abhängig von Ihrer persönlichen Meinung) festzulegen, ist der interessante Teil der zweite Stil, bei dem {{HTMLElement("tr")}}-Elemente, die sich innerhalb von {{HTMLElement("thead")}} und {{HTMLElement("tfoot")}} befinden, gestylt werden, indem ihnen eine hellblaue {{cssxref("background-color")}} hinzugefügt wird. Dies ist eine Möglichkeit, schnell eine Hintergrundfarbe auf alle Zellen in bestimmten Abschnitten gleichzeitig anzuwenden.

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

### Erweitertes Tabellenstyling

Jetzt werden wir völlige Freiheit mit Stilen auf Zeilen im Kopf- und Körperbereich, einschließlich abwechselnder Zeilenfarben, Zellen mit unterschiedlichen Farben je nach Position innerhalb einer Zeile und so weiter, zulassen. Schauen wir uns zuerst das Ergebnis an.

#### Ergebnis

So sieht die endgültige Tabelle aus:

{{EmbedLiveSample("Advanced_table_styling", 650, 210)}}

Es gibt erneut keine Änderung am HTML. Sehen Sie, was eine ordnungsgemäße Vorbereitung der HTML-Struktur bewirken kann?

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

Das CSS ist diesmal viel aufwendiger. Es ist nicht kompliziert, aber es passiert viel. Lassen Sie uns das aufschlüsseln.

Hier werden die {{CSSxRef("border-collapse")}} und {{CSSxRef("border-spacing")}} Eigenschaften hinzugefügt, um den Abstand zwischen den Zellen zu beseitigen und angrenzende Rahmen zusammenzulegen, so dass sie ein einzelner Rahmen anstelle von doppelten Rahmen sind. Außerdem wird die {{HTMLElement("caption")}} mit der {{CSSxRef("caption-side")}}-Eigenschaft an die `bottom`-Seite der Tabelle platziert:

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

Als nächstes wird die {{CSSxRef("padding")}}-Eigenschaft verwendet, um allen Tabellenspalten um ihren Inhalt herum Platz zu geben. Die {{CSSxRef("vertical-align")}}-Eigenschaft richtet den Inhalt der Kopfzellen am `bottom` der Zelle aus, was an den Zellen im Kopf zu sehen ist, die sich über zwei Reihen erstrecken:

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

Die nächste CSS-Regel setzt die {{cssxref("background-color")}} aller {{HTMLElement("tr")}}-Elemente im Kopf der Tabelle (wie durch {{HTMLElement("thead")}} spezifiziert). Dann wird die untere Grenze des Kopfes auf eine zwei-Pixel breite Linie gesetzt. Beachten Sie jedoch, dass wir den {{CSSxRef(":nth-of-type")}}-Selektor verwenden, um die Eigentum {{CSSxRef("border-bottom")}}-Eigenschaft auf die _zweiten_ Zeile im Kopf anzuwenden. Warum? Weil der Kopf aus zwei Zeilen besteht, die von einigen der Zellen umspannt werden. Das bedeutet, dass sich dort tatsächlich zwei Zeilen befinden; das Anwenden des Stils auf die erste Zeile würde uns nicht das erwartete Ergebnis geben:

```css
thead > tr {
  background-color: rgb(228 240 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid rgb(140 140 140);
}
```

Lassen Sie uns die beiden Kopfzellen "Beigetreten" und "Gekündigt" mit grünen und roten Farbtönen stylen, um das "Gute" eines neuen Mitglieds und das "Bedauerliche" eines gekündigten Mitglieds darzustellen. Hier bohren wir uns in die letzte Zeile des Kopfbereichs der Tabelle mit dem {{CSSxRef(":last-of-type")}}-Selektor und geben der ersten Kopfzeile darin (der "Beigetreten"-Kopf) eine grünliche Farbe, und der zweiten Kopfzeile darin (dem "Gekündigt"-Kopf) eine rötliche Tönung:

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225 255 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255 225 225);
}
```

Da auch die erste Spalte hervorgehoben werden soll, wird hier ebenfalls ein benutzerdefinierter Stil hinzugefügt. Diese CSS-Regel stylt die erste Kopfzeile in jeder Zeile der Tabellenkörper mit der {{CSSxRef("text-align")}}-Eigenschaft, um die Mitgliedsnamen links zu rechtfertigen, und mit einer etwas anderen {{cssxref("background-color")}}:

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225 229 244);
}
```

Es ist üblich, die Lesbarkeit von Tabellendaten zu verbessern, indem abwechselnde Zeilenfarben verwendet werden – dies wird manchmal als "Zebrastreifen" bezeichnet. Fügen wir etwas {{cssxref("background-color")}} zu jeder geraden Zeile hinzu:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
```

Da es Standardpraxis ist, Währungswerte in Tabellen rechtsbündig auszurichten, werden wir das hier tun. Dies setzt einfach die {{CSSxRef("text-align")}}-Eigenschaft für das letzte {{HTMLElement("td")}} in jeder Körperzeile auf `right`:

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

Zum Schluss wird im Fußbereich der Tabelle ein ähnlicher Stil wie im Kopf angewendet, um sie hervorzuheben:

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

### Große Tabellen auf kleinem Raum anzeigen

Ein häufiges Problem bei Tabellen im Web ist, dass sie nativ nicht sehr gut auf kleinen Bildschirmen funktionieren, wenn die Menge an Inhalten groß ist, und die Art, wie man sie scrollen kann, ist nicht offensichtlich, insbesondere wenn das Markup möglicherweise von einem CMS stammt und nicht modifiziert werden kann, um einen Wrapper zu haben.

Dieses Beispiel bietet eine Möglichkeit, Tabellen auf kleinem Raum anzuzeigen. Wir haben den HTML-Inhalt ausgeblendet, da er sehr groß ist und nichts Bemerkenswertes enthält. Das CSS ist in diesem Beispiel nützlicher, um es zu inspizieren.

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

Wenn Sie sich diese Stile ansehen, werden Sie feststellen, dass bei der Tabelle die {{cssxref("display")}}-Eigenschaft auf `block` gesetzt wurde. Obwohl dies das Scrollen ermöglicht, verliert die Tabelle einen Teil ihrer Integrität, und Zellen versuchen, so klein wie möglich zu werden. Um dieses Problem abzumildern, haben wir {{cssxref("white-space")}} auf `nowrap` beim {{HTMLElement("tbody")}} gesetzt. Wir haben dies jedoch nicht beim {{HTMLElement("thead")}} getan, um zu vermeiden, dass lange Titel Spalten zwingen, breiter zu sein, als sie zum Anzeigen der Daten sein müssen.

Um die Tabellenköpfe auf der Seite zu behalten, während nach unten gescrollt wird, haben wir {{cssxref("position")}} bei den {{HTMLElement("th")}}-Elementen auf sticky gesetzt. Beachten Sie, dass wir **nicht** {{cssxref("border-collapse")}} auf `collapse` gesetzt haben, da, wenn wir dies tun, der Kopf nicht korrekt vom Rest der Tabelle getrennt werden kann.

Da das `<table>` eine feste Größe hat, ist das hier auf `auto` gesetzte {{cssxref("overflow")}} der wichtige Teil, da es die Tabelle scrollbar macht.

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
          >Fließinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        In dieser Reihenfolge:
        <ol>
          <li>ein optionales {{HTMLElement("caption")}}-Element,</li>
          <li>null oder mehr {{HTMLElement("colgroup")}}-Elemente,</li>
          <li>ein optionales {{HTMLElement("thead")}}-Element,</li>
          <li>
            eine der folgenden Optionen:
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Fließinhalt akzeptiert</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <td>Jede</td>
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

- [Lernen: HTML-Grundlagen für Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Andere tabellenbezogene Elemente
- {{cssxref("background-color")}}: CSS-Eigenschaft, um die Hintergrundfarbe der Tabelle festzulegen
- {{cssxref("border")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: CSS-Eigenschaften zur Steuerung des Aspekts der Zellrahmen, Regeln und Rahmen
- {{cssxref("margin")}}, {{cssxref("padding")}}: CSS-Eigenschaften zum Ausrichten der Tabelle und Festlegen von Abständen beim Zellinhalt
- {{cssxref("text-align")}}: CSS-Eigenschaft zum horizontalen Ausrichten des Inhalts von Tabellenzellen
- {{cssxref("vertical-align")}}: CSS-Eigenschaft zum vertikalen Ausrichten des Inhalts von Tabellenzellen
- {{cssxref("width")}}: CSS-Eigenschaft zur Steuerung der Breite der Tabelle
