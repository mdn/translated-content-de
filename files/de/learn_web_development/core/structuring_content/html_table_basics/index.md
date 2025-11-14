---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: c5ba239166ba459fed1e80bdeda878401a8204f2
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die grundlegenden Konzepte wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppieren aller Zellen in einer Spalte zu Styling-Zwecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>
        behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — Strukturierung tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>etwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturiertes Datenset, bestehend aus Zeilen und Spalten (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art von Verbindung zwischen verschiedenen Arten von Daten anzeigen, zum Beispiel eine Person und ihr Alter, ein Wochentag oder der Zeitplan eines lokalen Schwimmbads.

![Eine Beispielstabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der menschlichen Gesellschaft genutzt und das schon seit langer Zeit, wie dieses Dokument der US-Volkszählung von 1800 belegt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich, dass eine Datentabelle verwendet wird.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Möglichkeit bereitstellten, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Punkt einer Tabelle ist, dass sie starr ist. Informationen können leicht interpretiert werden, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich zum Beispiel die folgende Tabelle an und suchen Sie nach einem jupiterähnlichen Gasriesen mit 62 Monden. Sie finden die Antwort, indem Sie die entsprechenden Zeilen- und Spaltenüberschriften miteinander verknüpfen.

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

Wenn HTML-Tabellen richtig implementiert werden, werden sie auch von Barrierefreiheitswerkzeugen wie Bildschirmlesern gut verarbeitet. Eine erfolgreiche HTML-Tabelle sollte daher die Benutzererfahrung sowohl für sehende als auch für sehbehinderte Nutzer verbessern.

### Tabellen-Styling

Sie können sich auch das [Live-Planeten-Datenbeispiel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Ein Punkt, den Sie bemerken werden, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version eine umfangreichere CSS-Anwendung hat.

Seien Sie sich darüber im Klaren: Damit Tabellen im Web effektiv sind, müssen Sie einige Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, ebenso wie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie erfahren später in unserer Lektion über das [Stylen von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) mehr über das Styling von Tabellen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als das Standardaussehen ohne jegliches Styling. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — diese zusammen bieten Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die leicht in Zeilen und Spalten verarbeitbar sind) — dafür sind sie gemacht. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten-Layouts zu erstellen, zum Beispiel eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhalts-Spalte, eine Zeile für die Fußzeile usw. Diese Technik wurde in der Vergangenheit verwendet, weil die Unterstützung von CSS in den Browsern früher viel eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, sodass table-basierte Layouts nicht mehr nötig sind. Tabelle-Layouts sind mittlerweile extrem selten, aber man könnte sie dennoch in einigen Ecken des Webs finden.

Zusammenfassend lässt sich sagen, dass die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) eine schlechte Idee ist. Die Hauptgründe dafür sind:

1. **Layout-Tabellen verringern die Zugänglichkeit für sehbehinderte Nutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen dem Benutzer den Inhalt vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird das Ausgabeergebnis der Screenreader für ihre Nutzer verwirrend sein.
2. **Tabellen erzeugen "Tag-Suppe"**: Wie bereits erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als ordnungsgemäße Layout-Techniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}) verwenden, passt sich ihre Breite standardmäßig zu 100% an das übergeordnete Element an. Tabellen hingegen werden standardmäßig gemäß ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um die Layout-Stilisierung der Tabelle effektiv über verschiedene Geräte hinweg zum Laufen zu bringen.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel eintauchen und Sie dazu bringen, eine einfache Tabelle zu erstellen.

1. Machen Sie zunächst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrer lokalen Maschine. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darum keine Sorgen machen müssen.
2. Der Inhalt jeder Tabelle wird von diesen beiden Tags umschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des `body`-Elements Ihres HTML-Dokuments ein.
3. Der kleinste Container in einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element ("td" steht für "table data") erstellt wird. Fügen Sie das Folgende innerhalb Ihrer Table-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er wie folgt aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht übereinander platziert, sondern automatisch in derselben Zeile nebeneinander ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle, und zusammen bilden sie die erste Zeile. Jede weitere Zelle, die wir hinzufügen, verlängert die Zeile.

Um zu verhindern, dass diese Zeile weiter wächst, und um die nachfolgenden Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element ("tr" steht für "table row") verwenden. Lassen Sie uns dies nun untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nun, da Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss mit einem zusätzlichen `<tr>`-Element umschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

```html
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

Sie können diesen Code auch auf GitHub finden unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Hinzufügen von Überschriften mit den \<th>-Elementen

Jetzt wenden wir uns den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (als Beispiel siehe die "Person"- und "Alter"-Zellen im ersten in diesem Artikel gezeigten Beispiel). Um zu verdeutlichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zunächst der Quellcode:

```html live-sample___table-headers
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

```css hidden live-sample___table-headers
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

{{EmbedLiveSample("table-headers", "", "250")}}

Das Problem hier ist, dass, obwohl Sie ungefähr nachvollziehen können, was vor sich geht, es nicht so einfach ist, Daten zu überkreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Nun möchten wir, dass Sie versuchen, das Hundetabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine.
2. Um die Tabellenüberschriften als solche sowohl visuell als auch semantisch zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ("th" steht für "table header"). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle kennzeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Breed</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Owner</th>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <th>Eating Habits</th>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

Sie können diesen Code auch auf GitHub finden unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die Daten zu finden, die Sie suchen, wenn die Überschriften klar hervortreten, und das Design sieht einfach besser aus.

> [!NOTE]
> Tabellenüberschriften haben ein gewisses Standardstyling — sie sind fettgedruckt und zentriert, auch wenn Sie kein eigenes Styling zur Tabelle hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen weiteren Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel sprechen werden) ermöglichen sie es Ihnen, Tabellen zugänglicher zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Bildschirmlesegeräte sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten reichen. Nehmen Sie das folgende einfache Beispiel, das die Namen von häufigen Tieren zeigt. In einigen Fällen wollen wir die Namen der Männchen und Weibchen neben den Tiernamen anzeigen. Manchmal wollen wir es nicht, und in solchen Fällen soll der Tiername über die gesamte Tabelle gespannt werden.

Das ursprüngliche Markup sieht so aus:

```html live-sample___multiple-rows-columns
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

```css hidden live-sample___multiple-rows-columns
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

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Das Layout mit `rowspan` und `colspan` korrigieren

Wir brauchen eine Möglichkeit, damit "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten reichen, und "Horse" und "Chicken" vertikal über zwei Zeilen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns erlauben, genau das zu tun. Beide akzeptieren einen einheitenlosen Zahlenwert, der der Anzahl der Reihen oder Spalten entspricht, die Sie spannen wollen. Zum Beispiel macht `colspan="2"` eine Zelle über zwei Spalten.

Verwenden wir `colspan` und `rowspan`, um diese Tabelle zu verbessern.

1. Machen Sie zuerst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine. Das HTML enthält das gleiche Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten reichen zu lassen.
3. Zum Schluss verwenden Sie `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

```html
<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

Sie können diesen Code auch auf GitHub finden unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als eine einzelne Einheit zu adressieren, zum Beispiel beim Anwenden von Stilen auf eine Tabelle (was Sie später im [Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) erfahren werden). Mit zunehmender Erfahrung im Erstellen von HTML-Tabellen werden Sie feststellen, dass es schwerer ist, zum Beispiel eine Hintergrundfarbe auf jede Zelle in einer einzigen Spalte anzuwenden, als Sie denken. Die Elemente {{htmlelement("colgroup")}} und {{htmlelement("col")}} bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als untergeordnetes Element der Tabelle enthalten sein, direkt nach dem öffnenden `<table>`-Element. Innerhalb des `<colgroup>`-Elements können Sie eines oder mehrere `<col>`-Elemente einfügen, die Gruppen von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Stilen anvisieren möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript mit einem Klassennamen anvisieren möchten) enthalten. Die `<col>`-Elemente repräsentieren die Tabellenspalten vom Anfang der Spalten an, zum Beispiel von der linken Seite einer Tabelle, die in einer von links nach rechts ausgerichteten Sprache wie Englisch geschrieben ist.

Sehen wir uns ein Beispiel an, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Stundenplan:

```html live-sample___colgroup-col
<h1>School language timetable</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

In dieser Tabelle gibt es acht Spalten. Schauen wir uns die `<colgroup>`- und `<col>`-Struktur genauer an, um zu zeigen, wie sie diese betrifft:

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

Ein Blick auf die `<col>`-Elemente:

- Das erste hat `span="2"` gesetzt, also repräsentiert es die erste _und_ zweite Spalte von links der Tabelle. Wir zielen diese Spalten nicht mit irgendwelchen Stilen an, aber wir müssen es einfügen, damit wir nachfolgende Spalten anvisieren können.
- Die zweiten und vierten haben kein `span`-Attribut gesetzt, also repräsentieren sie eine einzelne Spalte, die dritte und fünfte Spalte in diesen Fällen. Sie haben eine `class` von `column-background` angewendet.
- Das dritte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die vierte Spalte.
- Das fünfte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-background-border` angewendet. Es repräsentiert die sechste Spalte.
- Das sechste hat `span="2"` gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die siebte und achte Spalte.

Wir haben den größten Teil des CSS für dieses Beispiel versteckt, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente mit den `column-background`, `column-fixed-width` und `column-background-border`-Klassen anwenden:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 10px 20px;
}

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- Die `<col>`-Elemente mit einer `column-background`-Klasse haben eine durchgehende Hintergrundfarbe auf sie angewendet.
- Die `<col>`-Elemente mit einer `column-fixed-width`-Klasse haben eine schmale feste Breite auf sie angewendet.
- Das `<col>`-Element mit einer `column-background-border`-Klasse hat eine durchgehende Hintergrundfarbe und einen dicken Rahmen.

Sie müssen sich jetzt nicht darum kümmern, wie das CSS funktioniert; Sie werden es im Detail später in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)-Modul lernen.

Schauen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen spezifizierten Stile erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie eine HTML-Funktion, daher haben wir sie hier besprochen und nicht in unseren CSS-Modulen. Es ist auch fair zu sagen, dass sie eine _begrenzte_ Funktion sind — wie auf der [`<colgroup>` Reference Seite](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt wird, kann nur eine begrenzte Anzahl von Stilen auf ein `<col>`-Element angewendet werden, und die meisten der anderen Einstellungen, die historisch verfügbar waren, wurden abgeschafft (entfernt oder zur Entfernung vorgesehen).

## Zusammenfassung

Damit schließen wir die Grundlagen von HTML-Tabellen ab. Im nächsten Artikel werden wir uns einige weitere Funktionen ansehen, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
