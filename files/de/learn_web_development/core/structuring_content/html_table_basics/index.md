---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabelle
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel vermittelt Ihnen einen Einstieg in HTML-Tabellen und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Erweitern von Zellen über mehrere Spalten und Reihen hinweg und wie man alle Zellen in einer Spalte zu Stilezwecken gruppieren kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        >-Artikel behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen sind — Strukturierung von Tabellendaten.</li>
          <li>Wofür Tabellen nicht sind — Layout oder <em>alles andere</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Reihen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturiertes Satz von Daten, bestehend aus Reihen und Spalten (**Tabellendaten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter oder ein Wochentag oder der Zeitplan für ein lokales Schwimmbad.

![Ein Beispiel für eine Tabelle mit Namen und Alter einiger Personen - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmbad-Zeitplan, der eine Beispiel-Datentabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon seit langer Zeit, wie dieses US-Zensusdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine verwendete Datentabelle.](1800-census.jpg)

Es ist daher nicht verwunderlich, dass die Ersteller von HTML ein Mittel vorgesehen haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Sinn einer Tabelle besteht darin, dass sie starr ist. Informationen werden leicht verständlich, indem visuelle Verknüpfungen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Schauen Sie sich die folgende Tabelle an und finden Sie einen Jupiter-Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften verknüpfen.

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

Wenn sie korrekt implementiert sind, werden HTML-Tabellen von Barrierefreiheitstools wie Screen Readern gut verarbeitet, sodass eine erfolgreiche HTML-Tabelle sowohl das Erlebnis für sehende als auch für sehbehinderte Nutzer verbessern sollte.

### Tabellengestaltung

Sie können auch ein [Look at the live planets data example](https://mdn.github.io/learning-area/html/tables/planets-data/) auf GitHub werfen! Eine Sache, die Sie bemerken werden, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestaltet ist, während die GitHub-Version mit bedeutenderem CSS versehen ist.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Stilinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, ebenso wie eine solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie werden später in unserer Lektion über [Gestaltung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) mehr über das Stylen von Tabellen erfahren.

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen besser lesbar zu machen als das Standardlayout ohne jegliches Styling. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — zusammen ergeben diese einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die sich leicht in Reihen und Spalten verarbeiten lassen) — dafür sind sie konzipiert. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu gestalten, zum Beispiel eine Zeile, um einen Seitenkopf zu enthalten, eine Zeile für jede Inhalts-Spalte, eine Zeile für die Fußzeile, usw. Diese Technik wurde in der Vergangenheit verwendet, weil der CSS-Support über verschiedene Browser hinweg viel eingeschränkter war. Moderne Browser haben einen soliden CSS-Support, sodass tabellenbasierte Layouts nicht mehr benötigt werden. Tabellenlayouts sind jetzt äußerst selten, können aber immer noch in einigen Ecken des Webs gesehen werden.

Kurz gesagt, die Verwendung von Tabellen für Layout anstelle von [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist keine gute Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Barrierefreiheit für sehbehinderte Nutzer**: [Screen Reader](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite existieren, und lesen die Inhalte für den Nutzer vor. Da Tabellen nicht das richtige Werkzeug für Layout sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Screen Reader für ihre Nutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Salat**: Wie oben erwähnt, beinhalten Tabellengestaltungen im Allgemeinen komplexere Markup-Strukturen als ordnungsgemäße Gestaltungstechniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), ist deren Breite standardmäßig auf 100% des Elternelements eingestellt. Tabellen hingegen sind standardmäßig gemäß ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um das Styling von Tabellenlayouts für eine Vielzahl von Geräten effektiv zu gestalten.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über die Theorie der Tabellen gesprochen, also lassen Sie uns ein praktisches Beispiel durchgehen und Sie dazu bringen, eine einfache Tabelle aufzubauen.

1. Machen Sie zunächst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darüber keine Gedanken machen müssen.
2. Der Inhalt jeder Tabelle ist zwischen diesen beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des Körpers Ihres HTML-Dokuments hinzu.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ("td" steht für "table data"). Fügen Sie das Folgende innerhalb Ihrer Tabellentags hinzu:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wünschen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, sodass er folgendermaßen aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht übereinander platziert, sondern sie werden automatisch auf der gleichen Reihe ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Reihe. Jede hinzugefügte Zelle lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile wächst, und die nachfolgenden Zellen in einer zweiten Zeile zu platzieren, müssen wir das [`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)-Element verwenden ("tr" steht für "table row"). Sehen wir uns das nun an.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb der `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt, da Sie eine Reihe erstellt haben, versuchen Sie, eine oder zwei weitere zu erstellen — jede Reihe muss in ein zusätzliches `<tr>`-Element eingebettet werden, wobei jede Zelle in einem `<td>` enthalten sein muss.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

## Hinzufügen von Überschriften mit \<th>-Elementen

Wenden wir uns nun den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Reihe oder Spalte stehen und den Datentyp definieren, den diese Reihe oder Spalte enthält (als Beispiel siehe die Zellen "Person" und "Alter" im ersten Beispiel dieses Artikels). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zunächst der Quellcode:

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

Das Problem hier ist, dass man zwar einigermaßen erkennen kann, was vor sich geht, aber es nicht so leicht ist, Daten zu kreuzreferenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben würden, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Nun möchten wir, dass Sie versuchen, das Hundetabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zunächst eine weitere Kopie unserer [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Fügen Sie den folgenden Code in den `<body>` Ihres HTML-Dokuments ein:

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

3. Um die Tabellenüberschriften sowohl visuell als auch semantisch als solche zu erkennen, können Sie das [`<th>`](/de/docs/Web/HTML/Reference/Elements/th)-Element verwenden ("th" steht für "table header"). Dies funktioniert genau wie ein `<td>`, mit dem Unterschied, dass es sich um eine Überschrift handelt, nicht um eine normale Zelle. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
4. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften deutlich hervorstechen, und das Design sieht generell besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einem gewissen Standard-Styling — sie sind fett und zentriert, auch wenn Sie Ihrer Tabelle kein eigenes Styling hinzufügen, um ihnen zu helfen, herauszustechen.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel lernen werden) ermöglichen sie es, Tabellen durch die Zuordnung jeder Überschrift zu allen Daten in derselben Reihe oder Spalte zugänglicher zu machen. Screen Reader sind dann in der Lage, eine ganze Reihe oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Erlauben, dass Zellen über mehrere Reihen und Spalten reichen

Manchmal möchten wir, dass Zellen über mehrere Reihen oder Spalten reichen. Nehmen Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal möchten wir das nicht, und in solchen Fällen soll der Tiername die ganze Tabelle überspannen.

Das anfängliche Markup sieht folgendermaßen aus:

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

### Korrigieren des Layouts mit `rowspan` und `colspan`

Wir brauchen eine Möglichkeit, "Animals", "Hippopotamus" und "Crocodile" so zu erweitern, dass sie sich über zwei Spalten erstrecken, und "Horse" und "Chicken" so, dass sie sich über zwei Reihen erstrecken. Glücklicherweise haben Tabellenspalten und -zellen die Attribute `colspan` und `rowspan`, mit denen wir genau das tun können. Beide nehmen einen zahlungsfreien Zahlenwert an, der der Anzahl der Reihen oder Spalten entspricht, die Sie zusammenfassen möchten. Zum Beispiel lässt `colspan="2"` eine Zelle zwei Spalten überspannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie eine weitere lokale Kopie unserer [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Fügen Sie das folgende in den `<body>` Ihres HTML ein:

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

3. Verwenden Sie als nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" zu über zwei Spalten zu erweitern.
4. Verwenden Sie abschließend `rowspan`, um "Horse" und "Chicken" über zwei Reihen zu erstrecken.
5. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als einzelne Einheit zu erfassen, zum Beispiel beim Anwenden von Stilen auf eine Tabelle (worüber Sie später in [Gestaltung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) mehr erfahren werden). Mit zunehmender Erfahrung im Erstellen von HTML-Tabellen werden Sie feststellen, dass es schwieriger ist, beispielsweise einer einzelnen Spalte eine Hintergrundfarbe zuzuweisen, als Sie vielleicht denken. Die {{htmlelement("colgroup")}} und {{htmlelement("col")}} Elemente bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als Kind der Tabelle direkt nach dem öffnenden `<table>`-Element enthalten sein. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente einfügen, die Gruppen von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Stilen anvisieren möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript mit einem Klassennamen anvisieren möchten) enthalten. Die `<col>`-Elemente stellen die Tabellenspalten vom Beginn der Spalten dar, beispielsweise von der linken Seite einer Tabelle, die in einer von links nach rechts geschriebenen Sprache wie Englisch verfasst ist.

Lassen Sie uns ein Beispiel betrachten, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Schulstundenplan:

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

In dieser Tabelle gibt es acht Spalten. Lassen Sie uns die Struktur von `<colgroup>` und `<col>` genauer betrachten, um zu zeigen, wie sie sich darauf auswirkt:

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

Wenn wir uns die `<col>`-Elemente anschauen:

- Das erste hat `span="2"` eingestellt, daher stellt es die erste _und_ zweite Spalte von links in der Tabelle dar. Wir zielen diese Spalten mit keinem Stil an, aber wir müssen es einfügen, damit wir nachfolgende Spalten anvisieren können.
- Das zweite und vierte haben kein `span`-Attribut eingestellt, daher werden sie eine einzelne Spalte darstellen — die dritte und fünfte Spalte in diesen Fällen. Sie haben eine `class` von `column-background` zugewiesen bekommen.
- Das dritte hat kein `span`-Attribut eingestellt, und hat eine `class` von `column-fixed-width` zugewiesen bekommen. Es stellt die vierte Spalte dar.
- Das fünfte hat kein `span`-Attribut eingestellt, und hat eine `class` von `column-background-border` zugewiesen bekommen. Es stellt die sechste Spalte dar.
- Das sechste hat `span="2"` eingestellt, und hat eine `class` von `column-fixed-width` zugewiesen bekommen. Es stellt die siebte und achte Spalte dar.

Wir haben das meiste CSS für dieses Beispiel ausgeblendet, aber wir zeigen Ihnen die Regeln, die Stile auf die `<col>`-Elemente mit den `column-background`, `column-fixed-width` und `column-background-border` Klassen anwenden:

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

- Die `<col>`-Elemente mit einer `column-background`-Klasse haben eine solide Hintergrundfarbe eingestellt.
- Die `<col>`-Elemente mit einer `column-fixed-width`-Klasse haben eine schmale feste Breite eingestellt.
- Das `<col>`-Element mit einer `column-background-border`-Klasse hat eine solide Hintergrundfarbe und eine dicke Umrandung eingestellt.

Sie müssen sich jetzt keine Sorgen darüber machen, wie das CSS funktioniert; Sie werden später in unserem Modul [CSS styling basics](/de/docs/Learn_web_development/Core/Styling_basics) ausführlich darüber lernen.

Lassen Sie uns sehen, wie der obenstehende Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen angegebenen Stile erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich das Styling erleichtern, sind sie ein HTML-Feature, daher haben wir sie hier behandelt und nicht in unseren CSS-Modulen. Es ist auch fair, zu sagen, dass sie ein _begrenztes_ Feature sind — wie auf der Referenzseite von [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, kann eine begrenzte Anzahl von Stilen auf ein `<col>`-Element angewendet werden, und die meisten der anderen Einstellungen, die historisch verfügbar waren, wurden veraltet (entfernt oder zur Entfernung vorgesehen).

## Interaktiver Rückblick auf Tabellenkonzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion, die die meisten der in diesem Artikel behandelten Techniken zusammenfasst. Sehen Sie es sich für eine Zusammenfassung der wichtigsten Punkte und einige zusätzliche Übungen an.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></mdn-scrim-inline>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir einige weitere Funktionen betrachten, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
