---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel hilft Ihnen beim Einstieg in HTML-Tabellen und behandelt die grundlegenden Themen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Stilisierungszwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — zum Strukturieren von tabellarischen Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definierung von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Datenmenge, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel zwischen einer Person und ihrem Alter, einem Wochentag oder dem Stundenplan eines örtlichen Schwimmbads.

![Eine Beispieltabelle, die Namen und Alter von einigen Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der Gesellschaft verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument von 1800 belegt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML ein Mittel bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Punkt bei einer Tabelle ist, dass sie starr ist. Informationen werden leichter interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Sehen Sie sich zum Beispiel die folgende Tabelle an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften zuordnen.

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

Bei korrekter Implementierung werden HTML-Tabellen gut von Barrierefreiheits-Tools wie Screenreadern verarbeitet, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessert.

### Tabellenstilisierung

Sie können auch ein [Beispiel live auf GitHub ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort ein wenig lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie auf dieser Seite sehen, ein minimales Styling hat, während die GitHub-Version mehr CSS-Anpassungen enthält.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Stilisierungsinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen und eine solide Struktur mit HTML gewährleisten. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; mehr über die Stilisierung von Tabellen erfahren Sie später in unserer [Stilisierung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) Lektion.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet vorbereitet, das Sie verwenden können, damit Ihre Tabellen lesbarer sind als das, was Sie ohne jegliches Styling erhalten. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — diese zusammen bieten einen guten Ausgangspunkt zum Experimentieren mit HTML-Tabellen.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten (Informationen, die leicht in Zeilen und Spalten bearbeitet werden können) verwendet werden — dafür sind sie konzipiert. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu gestalten, zum Beispiel eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhalts-Spalte, eine Zeile für die Fußzeile usw. Diese Technik wurde verwendet, weil die Unterstützung von CSS in Browsern früher weitaus eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, sodass Layouts auf Basis von Tabellen heute sehr selten sind, aber Sie könnten sie noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für das Layout anstelle von [CSS-Layoutechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layouttabellen verringern die Zugänglichkeit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Personen verwendet werden, interpretieren die Tags, die in einer HTML-Seite existieren und lesen den Inhalt dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layoutechniken, wird die Ausgabe der Screenreader verwirrend für die Benutzer sein.
2. **Tabellen erzeugen Tag-Salat**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layoutcontainer verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen sind standardmäßig nach ihrem Inhalt bemessen, daher sind zusätzliche Maßnahmen erforderlich, um ein Tabellenlayout über eine Vielzahl von Geräten effektiv zu gestalten.

## Aktives Lernen: Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, daher tauchen wir in ein praktisches Beispiel ein und erstellen eine einfache Tabelle.

1. Machen Sie zuerst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des Körpers Ihres HTML ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende innerhalb Ihrer Table-Tags hinzu:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wünschen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er so aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht übereinander platziert, sondern automatisch auf derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzige Zelle und zusammen bilden sie die erste Zeile. Jede von uns hinzugefügte Zelle verlängert die Zeile.

Um zu verhindern, dass diese Zeile wächst, und um weitere Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element ('tr' steht für 'table row') verwenden. Untersuchen wir dies jetzt.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt, da Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in einem zusätzlichen `<tr>`-Element eingeschlossen werden, mit jeder Zelle in einem `<td>`.

### Ergebnis

Dies sollte zu einer Tabelle führen, die ungefähr so aussieht:

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
> Sie finden dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th> Elementen

Nun wenden wir uns den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art von Daten definieren, die diese Zeile oder Spalte enthält (zum Beispiel die "Person" und "Alter" Zellen im ersten in diesem Artikel gezeigten Beispiel). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Nun die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("Adding_headers_with_th_elements", "", "250")}}

Das Problem hier ist, dass, obwohl Sie irgendwie erkennen können, was vor sich geht, es nicht so einfach ist, Daten zu überkreuzen, wie es sein könnte. Wenn sich die Spalten- und Zeilenüberschriften in irgendeiner Weise abheben würden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Versuchen wir, diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ('th' steht für 'table header'). Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift darstellt, nicht eine normale Zelle. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel bei [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist leichter, die Daten zu finden, die Sie suchen, wenn die Überschriften deutlich hervortreten, und das Design sieht allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einer Standardformatierung — sie sind fett und zentriert, selbst wenn Sie der Tabelle keine eigene Formatierung hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr erfahren), ermöglichen sie es Ihnen, Tabellen besser zugänglich zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte assoziiert wird. Screenreader können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen lassen

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten gespannt werden. Nehmen Sie das folgende einfache Beispiel, das die Namen gängiger Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen möchten wir, dass der Tiername über die gesamte Tabelle spannt.

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

Aber die Ausgabe ergibt nicht ganz das, was wir wollen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen, und "Pferd" und "Huhn" auf zwei Zeilen nach unten zu spannen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen einheitslosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie überbrücken möchten. Zum Beispiel, `colspan="2"` lässt eine Zelle über zwei Spalten spannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten zu spannen.
3. Schließlich verwenden Sie `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel bei [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Das umreißt die Grundlagen von HTML-Tabellen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Personen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
