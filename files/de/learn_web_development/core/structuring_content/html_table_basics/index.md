---
title: Grundlagen von HTML-Tabellen
short-title: Table basics
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: f39795639d5e4cce0640c18ad09566de11227be0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Überspannen mehrerer Spalten und Zeilen durch Zellen sowie das Gestalten aller Zellen in einer Spalte als einzelne Einheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — zum Strukturieren tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — für Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Überspannen mehrerer Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Datenmenge, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Verbindung zwischen verschiedenen Datentypen anzeigen, beispielsweise einer Person und ihrem Alter, einem Wochentag oder dem Fahrplan eines örtlichen Schwimmbads.

![Eine Beispieltabelle mit Namen und Alter einiger Personen – Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmbadfahrplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig und schon seit langer Zeit verwendet, wie dieses Dokument der US-Volkszählung aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich die Verwendung einer Datentabelle.](1800-census.jpg)

Es ist daher nicht verwunderlich, dass die Ersteller von HTML eine Möglichkeit bereitstellten, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Tabellen sind starr. Informationen werden durch visuelle Verknüpfungen zwischen Zeilen- und Spaltenüberschriften interpretiert. Sehen Sie sich beispielsweise die folgende Tabelle an und suchen Sie einen jupiterähnlichen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften miteinander verknüpfen.

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

Bei korrekter Implementierung werden Tabellen von Hilfstechnologien wie Screenreadern gut verarbeitet. Eine erfolgreiche HTML-Tabelle sollte daher sowohl das Erlebnis sehender als auch sehbehinderter Nutzer verbessern.

### Tabellengestaltung

Sie können sich auch das [Live-Beispiel der Planetendaten](https://mdn.github.io/learning-area/html/tables/planets-data/) auf GitHub ansehen! Sie werden feststellen, dass die Tabelle dort besser lesbar ist — die weiter oben auf dieser Seite gezeigte Tabelle verfügt über minimale Gestaltung, während auf der GitHub-Version umfangreicheres CSS angewendet wird.

Machen Sie sich keine Illusionen: Damit Tabellen im Web effektiv sind, müssen Sie neben einer guten, soliden Struktur mit HTML auch Gestaltungsinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; über die Gestaltung von Tabellen erfahren Sie später mehr, in unserer Lektion [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Ihre Tabellen besser lesbar macht als die Standarddarstellung ohne Gestaltung. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) sowie eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), welche das Stylesheet anwendet — zusammen bieten diese einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sind nur für tabellarische Daten gedacht, also Informationen, mit denen sich leicht in Zeilen und Spalten arbeiten lässt — dafür wurden sie entwickelt. Leider verwendeten Menschen früher HTML-Tabellen, um Webseiten zu layouten, beispielsweise eine Zeile für einen Seitenkopf, eine weitere Zeile für jede Inhaltsspalte, eine Zeile für die Fußzeile usw. Diese Technik wurde in der Vergangenheit eingesetzt, weil die CSS-Unterstützung in Browsern deutlich eingeschränkter war. Moderne Browser bieten eine solide CSS-Unterstützung, weshalb tabellenbasierte Layouts nicht mehr erforderlich sind. Tabellenlayouts sind heute äußerst selten, aber möglicherweise sehen Sie sie noch in einigen Bereichen des Webs.

Kurz gesagt: Tabellen für Layout statt [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) zu verwenden, ist keine gute Idee. Die wichtigsten Gründe sind:

1. **Layouttabellen verringern die Barrierefreiheit für sehbehinderte Nutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags auf einer HTML-Seite und lesen deren Inhalte dem Nutzer vor. Da Tabellen nicht für Layouts entwickelt wurden und zu komplexerem Markup führen, wird die Ausgabe des Screenreaders verwirrend sein.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als geeignete Layouttechniken. Dadurch wird der Code schwieriger zu schreiben, zu warten und zu debuggen.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie geeignete Layout-Container verwenden, etwa {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}, beträgt ihre Breite standardmäßig 100 % ihres Elternelements. Tabellen werden standardmäßig anhand ihres Inhalts dimensioniert und benötigen daher zusätzliche Arbeit, um auf einer Vielzahl von Geräten effektiv dargestellt zu werden.

## Ihre erste Tabelle erstellen

Wir haben genug über die Theorie von Tabellen gesprochen, also tauchen wir in ein praktisches Beispiel ein. Hier erstellen Sie eine einfache Tabelle.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem lokalen Rechner eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css). Die HTML-Vorlage enthält bereits ein `<link>`-Element zum Anwenden des CSS, darum müssen Sie sich also nicht kümmern.
2. Jede Tabelle wird von **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**-Tags umschlossen. Fügen Sie diese in den Body Ihres HTML ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird („td“ steht für „table data“). Fügen Sie Folgendes innerhalb Ihrer Tabellen-Tags hinzu:

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

Die Zellen werden nicht untereinander platziert; stattdessen werden sie automatisch in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle, und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um nachfolgende Zellen in einer zweiten Zeile zu platzieren, müssen wir das Element [`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr) verwenden („tr“ steht für „table row“). Sehen wir uns das jetzt an.

1. Platzieren Sie die vier bereits erstellten Zellen wie folgt innerhalb von `<tr>`-Tags:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt. Versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss von einem zusätzlichen `<tr>`-Element umschlossen sein, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

</details>

## Überschriften mit \<th>-Elementen hinzufügen

Nun richten wir unsere Aufmerksamkeit auf Tabellenüberschriften — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (siehe beispielsweise die Zellen „Person“ und „Age“ im ersten in diesem Artikel gezeigten Beispiel). Um zu sehen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zuerst der Quellcode:

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

Das Problem hier ist, dass Sie zwar erkennen können, was vor sich geht, es aber nicht so einfach ist, Daten miteinander zu vergleichen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften hervorstechen würden, wäre es einfacher.

### Überschriften zur Hundetabelle hinzufügen

Verbessern wir das Beispiel der Hundetabelle durch das Hinzufügen einiger Überschriften.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem lokalen Rechner eine weitere Kopie unserer Dateien [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css).
2. Fügen Sie den folgenden Code innerhalb von `<body>` Ihres HTML hinzu:

   ```html
   <h1>Dogs Table</h1>
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

3. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das Element [`<th>`](/de/docs/Web/HTML/Reference/Elements/th) verwenden („th“ steht für „table header“). Dies funktioniert genauso wie ein `<td>`, kennzeichnet jedoch eine Überschrift statt einer normalen Zelle. Öffnen Sie Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
4. Speichern Sie Ihr HTML und laden Sie es in einem Browser. Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — die gesuchten Daten lassen sich einfacher finden, wenn die Überschriften deutlich hervorstechen, und die Gestaltung sieht allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften verfügen über einige Standardstile — sie sind fett und zentriert, auch wenn Sie keine eigene Gestaltung auf die Tabelle anwenden, damit sie hervorstechen.

Tabellenüberschriften haben einen weiteren Vorteil: Zusammen mit dem Attribut `scope` (das wir im nächsten Artikel behandeln werden) machen sie Tabellen barrierefreier, indem sie jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpfen. Screenreader können dann eine ganze Datenzeile oder -spalte auf einmal vorlesen, was sehr nützlich ist.

## Zellen über mehrere Zeilen und Spalten erstrecken

Manchmal möchten wir, dass Zellen sich über mehrere Zeilen oder Spalten erstrecken. Betrachten Sie das folgende einfache Beispiel, das die Namen häufiger Tiere zeigt. In einigen Fällen möchten wir die Namen der männlichen und weiblichen Tiere neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen soll sich der Tiername einfach über die gesamte Tabelle erstrecken.

Das anfängliche Markup sieht wie folgt aus:

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

Die Ausgabe liefert jedoch nicht ganz das Gewünschte:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Das Layout mit `rowspan` und `colspan` korrigieren

Wir benötigen eine Möglichkeit, damit „Animals“, „Hippopotamus“ und „Crocodile“ sich über zwei Spalten erstrecken und „Horse“ und „Chicken“ sich über zwei Zeilen erstrecken. Glücklicherweise bieten HTML-Tabellen die Attribute `colspan` und `rowspan`, um dies zu erreichen. Beide akzeptieren einen einheitenlosen Zahlenwert, der der Anzahl der zu überspannenden Zeilen oder Spalten entspricht. Beispielsweise sorgt `colspan="2"` dafür, dass eine Zelle zwei Spalten überspannt.

Verwenden wir `colspan` und `rowspan`, um diese Tabelle zu verbessern.

1. Erstellen Sie in einem neuen Verzeichnis auf Ihrem lokalen Rechner eine weitere lokale Kopie unserer Dateien [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css).
2. Fügen Sie Folgendes in `<body>` Ihres HTML ein:

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

3. Verwenden Sie als Nächstes `colspan`, damit „Animals“, „Hippopotamus“ und „Crocodile“ sich über zwei Spalten erstrecken.
4. Verwenden Sie abschließend `rowspan`, damit „Horse“ und „Chicken“ sich über zwei Zeilen erstrecken.
5. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

</details>

## Spalten mit `<colgroup>` und `<col>` gruppieren

Es gibt eine Möglichkeit, ganze Tabellenspalten als einzelne Einheit anzusprechen, beispielsweise beim Anwenden von Stilen auf eine Tabelle (was Sie später unter [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables) lernen werden). Mit zunehmender Erfahrung beim Erstellen von HTML-Tabellen werden Sie feststellen, dass es beispielsweise schwieriger ist, als Sie vielleicht denken, jeder Zelle in einer einzelnen Spalte eine Hintergrundfarbe zuzuweisen. Die Elemente {{htmlelement("colgroup")}} und {{htmlelement("col")}} bieten eine Lösung für dieses Problem.

Das Element `<colgroup>` wird als Kindelement der Tabelle direkt nach dem öffnenden `<table>`-Element eingefügt. Innerhalb des Elements `<colgroup>` können Sie ein oder mehrere `<col>`-Elemente einfügen, die Spaltengruppen darstellen. Das Element `<col>` kann ein Attribut `span` enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` enthalten (um die Gruppe mit Inline-Stilen anzusprechen) oder `class` (um die Gruppe mit CSS oder JavaScript über einen Klassennamen anzusprechen). Die `<col>`-Elemente repräsentieren die Tabellenspalten vom Anfang der Spalten an, beispielsweise von der linken Seite einer Tabelle, die in einer von links nach rechts geschriebenen Sprache wie Englisch verfasst ist.

Sehen wir uns ein Beispiel an, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Schulstundenplan:

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

Diese Tabelle hat acht Spalten. Sehen wir uns die Struktur von `<colgroup>` und `<col>` genauer an, um zu zeigen, wie sie diese beeinflusst:

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

Betrachten wir die `<col>`-Elemente:

- Beim ersten ist `span="2"` gesetzt, daher repräsentiert es die erste _und_ zweite Spalte von links in der Tabelle. Wir sprechen diese Spalten mit keinen Stilen an; dies ermöglicht es uns, nachfolgende Spalten anzusprechen.
- Beim zweiten und vierten ist kein Attribut `span` gesetzt, daher repräsentieren sie jeweils eine einzelne Spalte — in diesen Fällen die dritte und fünfte Spalte. Auf sie wird die `class` `column-background` angewendet.
- Beim dritten ist kein Attribut `span` gesetzt und die `class` `column-fixed-width` wird angewendet. Es repräsentiert die vierte Spalte.
- Beim fünften ist kein Attribut `span` gesetzt und die `class` `column-background-border` wird angewendet. Es repräsentiert die sechste Spalte.
- Beim sechsten ist `span="2"` gesetzt und die `class` `column-fixed-width` wird angewendet. Es repräsentiert die siebte und achte Spalte.

Den größten Teil des CSS für dieses Beispiel haben wir ausgeblendet, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente anwenden, bei denen die Klassen `column-background`, `column-fixed-width` und `column-background-border` gesetzt sind:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200 200 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190 190 190);
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

- Die `<col>`-Elemente mit einer Klasse `column-background` erhalten eine einfarbige Hintergrundfarbe.
- Die `<col>`-Elemente mit einer Klasse `column-fixed-width` erhalten eine schmale feste Breite.
- Das `<col>`-Element mit einer Klasse `column-background-border` erhält eine einfarbige Hintergrundfarbe und einen dicken Rahmen.

Sie müssen sich vorerst nicht darum kümmern, wie das CSS funktioniert; darüber lernen Sie später in unserem Modul [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) ausführlich mehr.

Sehen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Stile erhalten.

> [!NOTE]
> Obwohl `<colgroup>` und `<col>` hauptsächlich die Gestaltung erleichtern, sind sie eine HTML-Funktion. Daher behandeln wir sie hier statt in unseren CSS-Modulen. Sie sind eine _eingeschränkte_ Funktion — wie auf der [Referenzseite zu `<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann nur eine begrenzte Teilmenge von Stilen auf ein `<col>`-Element angewendet werden. Die meisten anderen Stile, die historisch verfügbar waren, wurden als veraltet markiert (entfernt oder zur Entfernung vorgesehen).

### Stehen `<col>`-Stile mit anderen Tabellenstilen in Konflikt?

Die Antwort lautet „ja“. Auf Tabellen festgelegte Stile werden in der Reihenfolge der auf `<table>`, dann `<col>`, dann `<tr>`, dann `<th>` und `<td>` festgelegten Stile gezeichnet. Das bedeutet, dass auf Tabellenzeilen, Überschriften und Zellen festgelegte Stile Spaltenstile überschreiben.

Probieren Sie dies aus, indem Sie dem [Vorlagenbeispiel](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#creating_your_first_table), an dem Sie weiter oben im Artikel gearbeitet haben, Spaltenstile hinzufügen. Wenn Sie Folgendes im HTML oberhalb des ersten `<tr>`-Tags hinzufügen:

```html
<colgroup>
  <col span="2" style="border: 2px solid black; background-color: red" />
</colgroup>
```

sehen Sie, dass die ersten beiden Spalten der Tabelle einen `2px`-`black`-Rahmen erhalten, aber keine `red`-Hintergrundfarbe. Das liegt daran, dass für die Tabellenüberschriften und -zeilen in `minimal-table.css` die folgenden Stile festgelegt sind, welche die Spaltenstile überschreiben:

```css
th {
  background-color: rgb(235 235 235);
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(220 220 220);
}
```

Entfernen Sie diese `background-color`-Stile, um die `red`-Hintergrundfarbe zu sehen.

## Interaktive Wiederholung der Tabellenkonzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion, die die meisten in diesem Artikel behandelten Techniken zusammenfasst. Sehen Sie sie sich an, um die wichtigsten Punkte zu wiederholen und zusätzliche Übungen zu machen.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML-Tabellen"></mdn-scrim-inline>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel sehen wir uns einige weitere Funktionen an, mit denen HTML-Tabellen für sehbehinderte Menschen barrierefreier gestaltet werden können.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
