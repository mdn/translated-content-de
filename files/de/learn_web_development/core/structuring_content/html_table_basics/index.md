---
title: Grundlagen von HTML-Tabellen
short-title: Grundlagen der Tabellen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 457970ed3317a36731f4fa098cfda585a396b3b7
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel vermittelt Ihnen den Einstieg in HTML-Tabellen und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Zusammenfassen von mehreren Spalten und Zeilen und wie Sie alle Zellen einer Spalte für Stilzwecke gruppieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >
        behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — Strukturierung von Tabellendaten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellen-Syntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code> zusammenfassen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturiertes Datenset, das aus Zeilen und Spalten besteht (**Tabellendaten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte zu finden, die eine Verbindung zwischen verschiedenen Datentypen anzeigen, beispielsweise eine Person und ihr Alter oder ein Wochentag oder der Stundenplan für ein örtliches Schwimmbad.

![Ein Beispiel für eine Tabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmstundenplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen werden sehr häufig in der menschlichen Gesellschaft verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich eine Datentabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML eine Methode bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle besteht darin, dass sie starr ist. Informationen werden durch visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften leicht interpretiert. Schauen Sie sich zum Beispiel die folgende Tabelle an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften verknüpfen.

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

Wenn sie korrekt implementiert sind, werden HTML-Tabellen gut von Barrierefreiheitswerkzeugen wie Bildschirmlesern gehandhabt, sodass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Tabellen-Styling

Sie können sich auch das [Live-Planeten-Datenbeispiel](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas lesbarer ist — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, ein minimales Styling hat, während die GitHub-Version mehr bedeutendes CSS hat.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Stilinformationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie werden mehr über das Styling von Tabellen später in unserer Lektion [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) erfahren.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben Ihnen ein minimales CSS-Stylesheet zur Verfügung gestellt, das Ihre Tabellen lesbarer macht als die Standardeinstellung ohne irgendein Styling. Sie können das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) finden und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — zusammen bieten sie einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die in Zeilen und Spalten leicht zu bearbeiten sind) — dafür sind sie gedacht. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu layouten, zum Beispiel eine Zeile, um einen Seitenheader zu enthalten, eine Zeile, um jede Inhalts-Spalte zu enthalten, eine Zeile, um die Fußzeile zu enthalten, usw. Diese Technik wurde in der Vergangenheit verwendet, weil die CSS-Unterstützung über verschiedene Browser hinweg früher wesentlich eingeschränkter war. Moderne Browser haben solide CSS-Unterstützung, daher sind tabellenbasierte Layouts nicht mehr erforderlich. Tabelle-Layouts sind jetzt äußerst selten, aber Sie könnten sie in einigen Ecken des Internets immer noch sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind folgende:

1. **Layout-Tabellen verringern die Zugänglichkeit für sehbehinderte Benutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Personen verwendet werden, interpretieren die Tags, die in einer HTML-Seite existieren, und lesen die Inhalte dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Salat**: Wie oben erwähnt, beinhalten Tabellen-Layouts in der Regel komplexere Markup-Strukturen als ordnungsgemäße Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordnungsgemäße Layout-Container verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% ihres übergeordneten Elements. Tabellen hingegen sind standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um die Tabellenlayout-Styling effektiv auf eine Vielzahl von Geräten anzuwenden.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel eintauchen und Ihnen helfen, eine einfache Tabelle zu erstellen.

1. Erstellen Sie zunächst eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darüber keine Gedanken machen müssen.
2. Der Inhalt jeder Tabelle ist von diesen zwei Tags umschlossen: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese in den Body Ihres HTML-Dokumentes ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ("td" steht für "table data"). Fügen Sie das folgende innerhalb Ihrer Tabellen-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen haben möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, um so auszusehen:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern sie sind automatisch in derselben Zeile nebeneinander ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile wächst und um nachfolgende Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element verwenden ('tr' steht für 'table row'). Schauen wir uns das jetzt genauer an.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt, wo Sie eine Zeile erstellt haben, versuchen Sie ein oder zwei weitere zu erstellen — jede Zeile muss in einem zusätzlichen `<tr>`-Element eingeschlossen sein, wobei jede Zelle in einem `<td>` enthalten ist.

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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie sich auch die live Version an](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Hinzufügen von Kopfzeilen mit \<th>-Elementen

Nun wenden wir uns den Tabellenüberschriften zu — speziellen Zellen, die am Anfang einer Zeile oder Spalte stehen und den Datentyp definieren, den diese Zeile oder Spalte enthält (als Beispiel siehe die "Person" und "Age" Zellen im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Und jetzt die tatsächlich gerenderte Tabelle:

{{EmbedLiveSample("table-headers", "", "250")}}

Das Problem hier ist, dass, obwohl Sie irgendwie erkennen können, was vor sich geht, es nicht so einfach ist, Daten quer zu referenzieren, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorgehoben wären, wäre es viel besser.

### Hinzufügen von Kopfzeilen zur Hundetabelle

Jetzt möchten wir, dass Sie versuchen, das Beispiel der Hundetabelle zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Erstellen Sie zuerst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ("th" steht für "table header"). Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle bezeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

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

Sie können diesen Code auch auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) finden ([sehen Sie sich auch die live Version an](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Warum sind Kopfzeilen nützlich?

Wir haben diese Frage teilweise bereits beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften klar hervorstechen, und das Design sieht im Allgemeinen einfach besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einem gewissen Standard-CSS-Styling — sie sind fett und zentriert, auch wenn Sie Ihrem Tisch kein eigenes Styling hinzufügen, um ihnen zu helfen, sich abzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden) ermöglichen sie es Ihnen, Tabellen barrierefreier zu gestalten, indem Sie jede Überschrift mit allen Daten in derselben Zeile oder Spalte assoziieren. Bildschirmleser sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Ermöglichen, dass Zellen mehrere Zeilen und Spalten überspannen

Manchmal möchten wir, dass Zellen mehrere Zeilen oder Spalten überspannen. Betrachten Sie das folgende einfache Beispiel, das die Namen gewöhnlicher Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Namen des Tieres anzeigen. Manchmal wollen wir das nicht, und in solchen Fällen wollen wir einfach, dass der Tiername die gesamte Tabelle überspannt.

Das initiale Markup sieht so aus:

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

Aber die Ausgabe liefert uns nicht ganz das, was wir wollen:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Korrigieren des Layouts mit `rowspan` und `colspan`

Wir benötigen eine Möglichkeit, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu erstrecken, und "Horse" und "Chicken" vertikal über zwei Zeilen zu erstrecken. Glücklicherweise haben Tabellenüberschriften und -zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen ohne Einheit angegebenen Zahlenwert, der die Anzahl der Zeilen oder Spalten angibt, die überspannt werden sollen. Zum Beispiel macht `colspan="2"` eine Zelle über zwei Spalten hinaus.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstens, erstellen Sie eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als Nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um die Verbesserung zu sehen.

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

Sie können diesen Code auch auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) finden ([sehen Sie sich auch die live Version an](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel schauen wir uns einige weitere Funktionen an, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
