---
title: Grundlagen zu HTML-Tabellen
short-title: Table basics
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel führt Sie in HTML-Tabellen ein und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Übergreifen von Zellen über mehrere Spalten und Zeilen sowie das Gestalten aller Zellen in einer Spalte als einzelne Einheit.

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
          <li>Wofür Tabellen nicht gedacht sind — für Layouts oder <em>alles andere</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Übergreifen mehrerer Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Menge von Daten, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Beziehung zwischen verschiedenen Datentypen angeben, zum Beispiel einer Person und ihrem Alter, einem Wochentag oder dem Fahrplan eines örtlichen Schwimmbads.

![Eine Beispieltabelle mit Namen und Alter einiger Personen – Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmbadfahrplan mit einer Beispieldatentabelle](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig und schon seit langer Zeit verwendet, wie dieses Dokument der US-Volkszählung aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht gut lesbar, aber es zeigt deutlich die Verwendung einer Datentabelle.](1800-census.jpg)

Es ist daher nicht verwunderlich, dass die Ersteller von HTML eine Möglichkeit bereitstellten, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Tabellen sind starr. Informationen werden interpretiert, indem visuelle Beziehungen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Sehen Sie sich beispielsweise die folgende Tabelle an und suchen Sie einen jovianischen Gasriesen mit 62 Monden. Sie finden die Antwort, indem Sie die relevanten Zeilen- und Spaltenüberschriften miteinander verknüpfen.

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

Bei korrekter Implementierung können Barrierefreiheitswerkzeuge wie Screenreader gut mit Tabellen umgehen. Eine erfolgreiche HTML-Tabelle sollte daher sowohl die Erfahrung sehender als auch sehbehinderter Benutzer verbessern.

### Tabellengestaltung

Sie können sich auch das [Live-Beispiel der Planetendaten](https://mdn.github.io/learning-area/html/tables/planets-data/) auf GitHub ansehen! Sie werden feststellen, dass die Tabelle dort besser lesbar ist — die Tabelle weiter oben auf dieser Seite hat nur minimales Styling, während auf die GitHub-Version umfangreicheres CSS angewendet wurde.

Machen Sie sich nichts vor: Damit Tabellen im Web effektiv sind, müssen Sie neben einer guten, soliden Struktur mit HTML auch einige Gestaltungsinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; über das Gestalten von Tabellen lernen Sie später in unserer Lektion [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables).

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Ihre Tabellen lesbarer macht als die Standarddarstellung ohne Styling. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) sowie eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — zusammen bieten sie Ihnen einen guten Ausgangspunkt zum Experimentieren mit HTML-Tabellen.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sind nur für tabellarische Daten gedacht (Informationen, die sich leicht in Zeilen und Spalten darstellen lassen) — dafür wurden sie entwickelt. Leider verwendeten Menschen früher HTML-Tabellen zum Layouten von Webseiten; beispielsweise enthielt eine Zeile einen Seitenkopf, eine weitere Zeile jede Inhaltsspalte und eine Zeile die Fußzeile. Diese Technik wurde früher verwendet, weil die CSS-Unterstützung in Browsern wesentlich eingeschränkter war. Moderne Browser bieten eine solide CSS-Unterstützung, daher werden tabellenbasierte Layouts nicht mehr benötigt. Tabellenlayouts sind heute äußerst selten, aber Sie können ihnen in einigen Bereichen des Webs noch begegnen.

Kurz gesagt ist die Verwendung von Tabellen für Layouts statt [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) eine schlechte Idee. Die wichtigsten Gründe sind:

1. **Layouttabellen verringern die Barrierefreiheit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die in einer HTML-Seite vorhandenen Tags und lesen dem Benutzer die Inhalte vor. Da Tabellen nicht für Layouts konzipiert sind und zu komplexerem Markup führen, ist die resultierende Ausgabe des Screenreaders verwirrend.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, umfassen Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als geeignete Layouttechniken, wodurch der Code schwieriger zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie geeignete Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt deren Breite standardmäßig 100 % ihres Elternelements. Tabellen werden standardmäßig an ihren Inhalt angepasst und erfordern daher zusätzlichen Aufwand, um auf verschiedenen Geräten effektiv dargestellt zu werden.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über die Theorie von Tabellen gesprochen, also gehen wir zu einem praktischen Beispiel über. Hier erstellen Sie eine einfache Tabelle.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem lokalen Computer eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css). Die HTML-Vorlage enthält bereits ein `<link>`-Element zum Anwenden des CSS, sodass Sie sich darum nicht kümmern müssen.
2. Jede Tabelle wird von **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**-Tags umschlossen. Fügen Sie diese innerhalb des `body` Ihres HTML ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird („td“ steht für „table data“). Fügen Sie Folgendes innerhalb Ihrer Tabellen-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle so, dass er wie folgt aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Die Zellen werden nicht untereinander platziert, sondern automatisch in derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle, und zusammen bilden sie die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um weitere Zellen in einer zweiten Zeile zu platzieren, müssen wir das [`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)-Element verwenden („tr“ steht für „table row“). Sehen wir uns das jetzt an.

1. Platzieren Sie die vier bereits erstellten Zellen innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nun haben Sie eine Zeile erstellt. Versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

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

</details>

## Überschriften mit \<th>-Elementen hinzufügen

Wenden wir uns nun Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (siehe beispielsweise die Zellen „Person“ und „Age“ im ersten Beispiel dieses Artikels). Um zu sehen, warum sie nützlich sind, betrachten Sie das folgende Tabellenbeispiel. Zuerst der Quellcode:

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

Das Problem besteht darin, dass Sie zwar erkennen können, was vor sich geht, die Daten aber nicht so einfach miteinander vergleichen können, wie es möglich wäre. Wenn die Spalten- und Zeilenüberschriften hervorstechen würden, wäre es einfacher.

### Überschriften zur Hundetabelle hinzufügen

Verbessern wir das Beispiel der Hundetabelle, indem wir einige Überschriften hinzufügen.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem lokalen Computer eine weitere Kopie unserer Dateien [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css).
2. Fügen Sie den folgenden Code innerhalb des `<body>` Ihres HTML ein:

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

3. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das [`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Element verwenden („th“ steht für „table header“). Es funktioniert genauso wie ein `<td>`, kennzeichnet jedoch eine Überschrift statt einer normalen Zelle. Öffnen Sie Ihr HTML und ändern Sie alle `<td>`-Elemente, die Tabellenüberschriften umschließen, in `<th>`-Elemente.
4. Speichern Sie Ihr HTML und laden Sie es in einem Browser. Sie sollten sehen, dass die Überschriften nun wie Überschriften aussehen.

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

</details>

### Warum sind Überschriften nützlich?

Diese Frage haben wir bereits teilweise beantwortet — die gesuchten Daten lassen sich leichter finden, wenn Überschriften deutlich hervorstechen, und das Design sieht im Allgemeinen besser aus.

> [!NOTE]
> Tabellenüberschriften verfügen über ein Standard-Styling — sie sind fett und zentriert, selbst wenn Sie der Tabelle kein eigenes Styling hinzufügen, damit sie hervorstechen.

Tabellenüberschriften haben einen weiteren Vorteil — zusammen mit dem Attribut `scope` (das wir im nächsten Artikel kennenlernen) machen sie Tabellen barrierefreier, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Screenreader können dann eine ganze Datenzeile oder -spalte auf einmal vorlesen, was sehr nützlich ist.

## Zellen über mehrere Zeilen und Spalten erstrecken lassen

Manchmal möchten wir, dass Zellen sich über mehrere Zeilen oder Spalten erstrecken. Betrachten Sie das folgende einfache Beispiel, das die Namen häufiger Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen soll der Tiername einfach die gesamte Tabelle überspannen.

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

Die Ausgabe liefert jedoch nicht ganz das gewünschte Ergebnis:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Das Layout mit `rowspan` und `colspan` korrigieren

Wir benötigen eine Möglichkeit, „Animals“, „Hippopotamus“ und „Crocodile“ über zwei Spalten sowie „Horse“ und „Chicken“ über zwei Zeilen erstrecken zu lassen. Glücklicherweise bieten HTML-Tabellen die Attribute `colspan` und `rowspan`, um dies zu erreichen. Beide akzeptieren einen einheitenlosen Zahlenwert, der der Anzahl der zu überspannenden Zeilen oder Spalten entspricht. Beispielsweise lässt `colspan="2"` eine Zelle zwei Spalten überspannen.

Verwenden wir `colspan` und `rowspan`, um diese Tabelle zu verbessern.

1. Erstellen Sie in einem neuen Verzeichnis auf Ihrem lokalen Computer eine weitere lokale Kopie unserer Dateien [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css).
2. Fügen Sie Folgendes in den `<body>` Ihres HTML ein:

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

3. Verwenden Sie als Nächstes `colspan`, damit „Animals“, „Hippopotamus“ und „Crocodile“ zwei Spalten überspannen.
4. Verwenden Sie abschließend `rowspan`, damit „Horse“ und „Chicken“ zwei Zeilen überspannen.
5. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

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

</details>

## Spalten mit `<colgroup>` und `<col>` gruppieren

Es gibt eine Möglichkeit, ganze Tabellenspalten als einzelne Einheit anzusprechen, beispielsweise beim Anwenden von Styles auf eine Tabelle (was Sie später unter [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables) lernen werden). Mit zunehmender Erfahrung beim Erstellen von HTML-Tabellen werden Sie feststellen, dass es schwieriger sein kann, als Sie vielleicht denken, beispielsweise auf jede Zelle einer einzelnen Spalte eine Hintergrundfarbe anzuwenden. Die Elemente {{htmlelement("colgroup")}} und {{htmlelement("col")}} bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element wird als Kind der Tabelle direkt nach dem öffnenden `<table>`-Element eingefügt. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente einfügen, die Gruppen von Spalten repräsentieren. Das `<col>`-Element kann ein Attribut `span` enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` enthalten (um die Gruppe mit Inline-Styles anzusprechen) oder `class` (um die Gruppe mit CSS oder JavaScript über einen Klassennamen anzusprechen). Die `<col>`-Elemente repräsentieren die Tabellenspalten vom Beginn der Spalten an, beispielsweise von der linken Seite einer Tabelle, die in einer von links nach rechts geschriebenen Sprache wie Englisch verfasst ist.

Sehen wir uns ein Beispiel an, um zu zeigen, was damit gemeint ist. Die folgende Tabelle zeigt einen Schulstundenplan:

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

- Für das erste ist `span="2"` festgelegt, daher repräsentiert es die erste _und_ zweite Spalte von links in der Tabelle. Diese Spalten werden nicht mit Styles angesprochen; dies ermöglicht uns, nachfolgende Spalten anzusprechen.
- Für das zweite und vierte Element ist kein Attribut `span` festgelegt, daher repräsentieren sie jeweils eine einzelne Spalte — in diesen Fällen die dritte und fünfte Spalte. Auf sie wird eine `class` von `column-background` angewendet.
- Für das dritte Element ist kein Attribut `span` festgelegt, und es wird eine `class` von `column-fixed-width` angewendet. Es repräsentiert die vierte Spalte.
- Für das fünfte Element ist kein Attribut `span` festgelegt, und es wird eine `class` von `column-background-border` angewendet. Es repräsentiert die sechste Spalte.
- Für das sechste Element ist `span="2"` festgelegt, und es wird eine `class` von `column-fixed-width` angewendet. Es repräsentiert die siebte und achte Spalte.

Den größten Teil des CSS für dieses Beispiel haben wir ausgeblendet, aber wir zeigen Ihnen die Regeln, die Styles auf die `<col>`-Elemente anwenden, für die die Klassen `column-background`, `column-fixed-width` und `column-background-border` festgelegt wurden:

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

- Für die `<col>`-Elemente mit einer Klasse `column-background` wird eine einfarbige Hintergrundfarbe festgelegt.
- Für die `<col>`-Elemente mit einer Klasse `column-fixed-width` wird eine schmale feste Breite festgelegt.
- Für das `<col>`-Element mit einer Klasse `column-background-border` werden eine einfarbige Hintergrundfarbe und ein dicker Rahmen festgelegt.

Sie müssen sich jetzt noch nicht darum kümmern, wie das CSS funktioniert; Sie werden später in unserem Modul [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) ausführlich darüber lernen.

Sehen wir uns an, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Styles erhalten.

> [!NOTE]
> Obwohl `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie eine HTML-Funktion. Deshalb behandeln wir sie hier und nicht in unseren CSS-Modulen. Sie sind eine _eingeschränkte_ Funktion — wie auf der [Referenzseite zu `<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann nur eine eingeschränkte Teilmenge von Styles auf ein `<col>`-Element angewendet werden. Die meisten anderen, historisch verfügbaren Styles wurden als veraltet markiert (entfernt oder zur Entfernung vorgesehen).

### Stehen `<col>`-Styles im Konflikt mit anderen Tabellen-Styles?

Die Antwort lautet „ja“. Auf Tabellen festgelegte Styles werden in der Reihenfolge der auf `<table>`, dann `<col>`, dann `<tr>`, dann `<th>` und `<td>` festgelegten Styles gezeichnet. Das bedeutet, dass Styles, die auf Tabellenzeilen, Überschriften und Zellen festgelegt sind, Spalten-Styles überschreiben.

Probieren Sie dies aus, indem Sie dem [Vorlagenbeispiel](#erstellen_ihrer_ersten_tabelle), an dem Sie zuvor im Artikel gearbeitet haben, Spalten-Styles hinzufügen. Wenn Sie Folgendes im HTML über dem ersten `<tr>`-Tag hinzufügen:

```html
<colgroup>
  <col span="2" style="border: 2px solid black; background-color: red" />
</colgroup>
```

sehen Sie, dass die ersten beiden Spalten der Tabelle einen `2px` breiten `black`-Rahmen erhalten, aber keine `red`-Hintergrundfarbe. Dies liegt daran, dass für die Tabellenüberschriften und -zeilen innerhalb von `minimal-table.css` die folgenden Styles festgelegt sind, die die Spalten-Styles überschreiben:

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

Entfernen Sie diese `background-color`-Styles, um die `red`-Hintergrundfarbe zu sehen.

## Interaktive Wiederholung von Tabellenkonzepten

Die folgenden eingebetteten Inhalte von Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bieten eine interaktive Lektion, die die meisten der in diesem Artikel behandelten Techniken zusammenfasst. Sehen Sie sie sich an, um die wichtigsten Punkte zu wiederholen und zusätzliche Übung zu erhalten.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></mdn-scrim-inline>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel betrachten wir einige weitere Funktionen, mit denen HTML-Tabellen für sehbehinderte Menschen barrierefreier gestaltet werden können.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
