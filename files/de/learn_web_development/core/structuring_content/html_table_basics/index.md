---
title: Grundlagen der HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Vergrößern von Zellen über mehrere Spalten und Zeilen hinweg sowie das Zusammenfassen aller Zellen in einer Spalte zu Stylingzwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>
        behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen geeignet sind — Strukturierung von tabellarischen Daten.</li>
          <li>Wofür Tabellen nicht geeignet sind — Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Tabellenüberschriften mit <code>&lt;th&gt;</code> definieren.</li>
          <li>Über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code> spannen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturierter Satz von Daten, der aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter, einen Wochentag oder den Stundenplan eines örtlichen Schwimmbads.

![Eine Beispieltabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan, der eine Beispiel-Datentabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der menschlichen Gesellschaft verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt klar eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitstellten, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Punkt einer Tabelle ist, dass sie starr ist. Informationen werden leicht verständlich, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich zum Beispiel die unten stehende Tabelle an und finden Sie ein jovianisches Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften miteinander in Verbindung bringen.

```html hidden
<table>
  <caption>
    Data about the planets of our solar system (Source:
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Name</th>
      <th scope="col">Mass (10<sup>24</sup>kg)</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Density (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravity (m/s<sup>2</sup>)</th>
      <th scope="col">Length of day (hours)</th>
      <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
      <th scope="col">Mean temperature (°C)</th>
      <th scope="col">Number of moons</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Terrestrial planets</th>
      <th scope="row">Mercury</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Closest to the Sun</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Our world</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>The red planet</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Jovian planets</th>
      <th rowspan="2" scope="rowgroup">Gas giants</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>The largest planet</td>
    </tr>
    <tr>
      <th scope="row">Saturn</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Ice giants</th>
      <th scope="row">Uranus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Dwarf planets</th>
      <th scope="row">Pluto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Declassified as a planet in 2006, but this
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >remains controversial</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("How_does_a_table_work", 100, 560)}}

Wenn HTML-Tabellen korrekt implementiert sind, werden sie von Barrierefreiheitswerkzeugen wie Screenreadern gut verarbeitet, so dass eine erfolgreiche HTML-Tabelle die Erfahrung sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Tabellengestaltung

Sie können sich auch das [Live-Beispiel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eines, das Ihnen auffallen wird, ist, dass die Tabelle dort ein wenig lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, nur minimal gestaltet ist, während die GitHub-Version mehr CSS enthält.

Seien Sie ohne Illusion; damit Tabellen im Web effektiv sind, müssen Sie einige Stylinginformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, zusätzlich zu einer guten soliden Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie erfahren später mehr über das Styling von Tabellen in unserer [Leitfaden zum Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben eine minimale CSS-Stylesheet bereitgestellt, die Sie verwenden können, damit Ihre Tabellen lesbarer sind als das Standardlayout ohne Styling. Das [Stylesheet finden Sie hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese beiden zusammen geben Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, mit denen man in Zeilen und Spalten leicht arbeiten kann) — dafür sind sie konzipiert. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu gestalten, zum Beispiel eine Zeile für einen Seitenkopf, eine Zeile für jede Inhaltskolumne, eine Zeile für die Fußzeile usw. Diese Technik wurde verwendet, weil die CSS-Unterstützung in den Browsern früher viel begrenzter war. Moderne Browser haben eine solide CSS-Unterstützung, daher sind tabellenbasierte Layouts heutzutage extrem selten, aber Sie könnten sie immer noch in einigen Ecken des Webs finden.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind folgende:

1. **Layout-Tabellen verringern die Barrierefreiheit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von Blinden verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen die Inhalte dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layouttechniken, ist die Ausgabe der Screenreader verwirrend für ihre Benutzer.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als ordentliche Layouttechniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), entspricht ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen sind standardmäßig nach ihrem Inhalt dimensioniert, so dass zusätzliche Maßnahmen erforderlich sind, um das Tablelayout-Styling über eine Vielzahl von Geräten effektiv arbeiten zu lassen.

## Aktives Lernen: Ihre erste Tabelle erstellen

Wir haben genug über Tabellentheorie gesprochen, also stürzen wir uns in ein praktisches Beispiel und bauen eine einfache Tabelle auf.

1. Machen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle ist von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese innerhalb des Körpers Ihres HTMLs ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende innerhalb Ihrer Table-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wünschen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, damit er wie folgt aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern automatisch nebeneinander in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um zu verhindern, dass diese Zeile länger wird und weitere Zellen in einer zweiten Zeile platziert werden, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element ('tr' steht für 'table row') verwenden. Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingewickelt sein, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte zu einer Tabelle führen, die ungefähr wie folgt aussieht:

```html hidden
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("Result")}}

> [!NOTE]
> Sie können dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie es auch live an](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Nun wenden wir uns den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den die Zeile oder Spalte enthält (als Beispiel siehe die Zellen "Person" und "Alter" im ersten in diesem Artikel gezeigten Beispiel). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zuerst der Quellcode:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Jetzt die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("Adding_headers_with_th_elements", "", "250")}}

Das Problem hier ist, dass man zwar irgendwie verstehen kann, was vor sich geht, aber es nicht so einfach ist, die Daten zu überkreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften sich in irgendeiner Weise abheben würden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Versuchen wir, diese Tabelle zu verbessern.

1. Machen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hundebeispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element verwenden ('th' steht für 'table header'). Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle darstellt. Ändern Sie in Ihrem HTML alle `<td>`-Elemente, die die Tabellenüberschriften umfassen, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel bei [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub ([sehen Sie es auch live an](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die Daten zu finden, die Sie suchen, wenn die Überschriften klar hervorstechen, und das Design sieht einfach allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einigen Standardstilen — sie sind fett und zentriert, selbst wenn Sie Ihrer Tabelle keinen eigenen Stil hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr erfahren werden) ermöglichen sie es Ihnen, Tabellen durch die Zuordnung jeder Überschrift mit allen Daten in derselben Zeile oder Spalte zugänglicher zu machen. Screenreader können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen erlauben, sich über mehrere Zeilen und Spalten zu erstrecken

Manchmal möchten wir, dass sich Zellen über mehrere Zeilen oder Spalten erstrecken. Nehmen Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen von Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen möchten wir, dass sich der Tiername über die ganze Tabelle erstreckt.

Das anfängliche Markup sieht folgendermaßen aus:

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Aber die Ausgabe gibt uns nicht ganz das, was wir wollen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten, und "Pferd" und "Huhn" nach unten über zwei Zeilen hinweg zu spannen. Zum Glück haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen einheitlichen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, über die Sie spannen möchten. Beispielsweise lässt `colspan="2"` eine Zelle über zwei Spalten spannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie finden unser fertiges Beispiel bei [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub ([sehen Sie es auch live an](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Damit sind die Grundlagen der HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, mit denen HTML-Tabellen für sehbehinderte Menschen zugänglicher gemacht werden können.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
