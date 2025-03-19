---
title: HTML-Tabelle Grundlagen
short-title: Table basics
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel gibt Ihnen einen Einstieg in HTML-Tabellen und deckt die absoluten Grundlagen ab, wie Zeilen, Zellen, Überschriften, das Überlappen von Zellen über mehrere Spalten und Zeilen hinweg und wie Sie alle Zellen in einer Spalte für Styling-Zwecke gruppieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wofür Tabellen gedacht sind — zum Strukturieren tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht gedacht sind — Layout oder <em>irgendetwas anderes</em>.</li>
          <li>Grundlegende Tabellensyntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Das Überlappen mehrerer Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Datenmenge, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht Ihnen, schnell und einfach Werte abzufragen, die eine Art Verbindung zwischen verschiedenen Arten von Daten anzeigen, zum Beispiel eine Person und ihr Alter, einen Wochentag oder den Zeitplan eines örtlichen Schwimmbades.

![Ein Beispiel für eine Tabelle mit Namen und Alter einiger Personen - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmzeitplan, der eine Beispieldatentabelle zeigt](swimming-timetable.png)

Tabellen sind in der menschlichen Gesellschaft sehr häufig und werden schon seit langem verwendet, wie dieses US-Zensusdokument von 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich, dass eine Datentabelle verwendet wird.](1800-census.jpg)

Es ist daher kein Wunder, dass die Ersteller von HTML ein Mittel bereitgestellt haben, um tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Sinn einer Tabelle ist, dass sie starr ist. Informationen werden leicht interpretiert, indem visuelle Verbindungen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Betrachten Sie die folgende Tabelle, um beispielsweise einen Jupiter-Gasriesen mit 62 Monden zu finden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften assoziieren.

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

Wenn HTML-Tabellen korrekt implementiert werden, werden sie von Barrierefreiheits-Tools wie Bildschirmlesegeräten gut gehandhabt, sodass eine erfolgreiche HTML-Tabelle die Erfahrung sowohl für sehende als auch für sehbehinderte Benutzer verbessern sollte.

### Tabellen-Styling

Sie können sich auch das [Live-Beispiel auf GitHub ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)! Ihnen wird auffallen, dass die Tabelle dort etwas besser lesbar aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version mehr CSS aufweist.

Seien Sie sich sicher; damit Tabellen im Web effektiv sind, müssen Sie einige Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, sowie eine gute solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; Sie erfahren später in unserer Lektion [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) mehr über das Styling von Tabellen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben eine minimale CSS-Stylesheet bereitgestellt, die Ihre Tabellen lesbarer macht als die Standardeinstellung ohne jegliches Styling. Sie finden das [Stylesheet hier](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch ein [HTML-Template](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, das das Stylesheet anwendet — zusammen geben Ihnen diese einen guten Ausgangspunkt zum Experimentieren mit HTML-Tabellen.

### Wann sollten Sie HTML-Tabellen NICHT verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — dafür sind sie konzipiert. Leider haben viele Leute früher HTML-Tabellen verwendet, um Webseiten zu gestalten, z.B. eine Zeile für die Kopfzeile, eine Zeile für die Inhaltsspalten, eine Zeile für die Fußzeile, etc. Sie können mehr Details und ein Beispiel unter [Seitenlayouts](/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts) in unserem [Barrierefreiheits-Lernmodul](/de/docs/Learn_web_development/Core/Accessibility) finden. Dies war früher häufig der Fall, weil die CSS-Unterstützung über Browser hinweg schrecklich war; Tabellenlayouts sind heutzutage viel seltener, aber Sie könnten sie noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layouttechniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Barrierefreiheit für sehbehinderte Benutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), die von blinden Menschen verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen den Inhalt dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend sein.
2. **Tabellen produzieren Tagsalat**: Wie oben erwähnt, umfassen Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu warten und zu debuggen ist.
3. **Tabellen sind nicht automatisch reaktionsfähig**: Wenn Sie richtige Layoutcontainer verwenden (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}), beträgt ihre Breite standardmäßig 100% ihres Elternelements. Tabellen hingegen werden standardmäßig nach ihrem Inhalt bemessen, also sind zusätzliche Maßnahmen erforderlich, um das Styling von Tabellendesigns effektiv auf verschiedenen Geräten zu gewährleisten.

## Aktives Lernen: Erstellen Sie Ihre erste Tabelle

Wir haben genug über Tabellentheorie gesprochen, also tauchen wir in ein praktisches Beispiel ein und bauen eine einfache Tabelle auf.

1. Machen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle ist von diesen beiden Tags umschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese innerhalb des Body Ihrer HTML ein.
3. Der kleinste Container in einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element erstellt wird ('td' steht für 'table data'). Fügen Sie das folgende innerhalb Ihrer Table-Tags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle, um so auszusehen:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht übereinander platziert, sondern automatisch in der gleichen Zeile miteinander ausgerichtet. Jedes `<td>`-Element erzeugt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um zu verhindern, dass diese Zeile wächst und um weitere Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element verwenden ('tr' steht für 'table row'). Lassen Sie uns dies jetzt untersuchen.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Jetzt haben Sie eine Zeile erstellt, versuchen Sie, eine oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingeschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

### Ergebnis

Dies sollte zu einer Tabelle führen, die in etwa wie folgt aussieht:

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
> Sie können dies auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Wenden wir uns nun den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und die Art der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel siehe die "Person" und "Alter"-Zellen im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu veranschaulichen, warum sie nützlich sind, werfen Sie einen Blick auf das folgende Tabellenbeispiel. Zuerst der Quellcode:

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

Das Problem hier ist, dass, obwohl man irgendwie erahnen kann, was los ist, es nicht so einfach ist, Daten zu überkreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf eine gewisse Weise herausstünden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Versuchen wir, diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hunde-Beispiel, das Sie oben gesehen haben.
2. Um die Tabellenüberschriften als Überschriften zu erkennen, sowohl visuell als auch semantisch, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element ('th' steht für 'table header') verwenden. Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle kennzeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften deutlich hervorstechen, und das Design sieht einfach generell besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit einem gewissen Standardstyling — sie sind fett und zentriert, selbst wenn Sie kein eigenes Styling zur Tabelle hinzufügen, um sie hervorzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr erfahren werden) ermöglichen sie es Ihnen, Tabellen zugänglicher zu machen, indem jede Überschrift mit allen Daten derselben Zeile oder Spalte assoziiert wird. Bildschirmlesegeräte sind dann in der Lage, eine ganze Zeile oder Spalte von Daten auf einmal vorzulesen, was ziemlich nützlich ist.

## Erlauben, dass Zellen mehrere Zeilen und Spalten überlappen

Manchmal wollen wir, dass Zellen mehrere Zeilen oder Spalten überlappen. Nehmen Sie das folgende einfache Beispiel, das die Namen von gewöhnlichen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. In solchen Fällen möchten wir nicht, dass der Tiername die gesamte Tabelle überspannt.

Das anfängliche Markup sieht so aus:

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

Aber die Ausgabe gibt uns nicht genau das, was wir wollen:

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

Wir brauchen eine Möglichkeit, "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten und "Pferd" und "Huhn" über zwei Zeilen hinweg zu spannen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau das zu tun. Beide akzeptieren einen einheitslosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, die Sie überlappen möchten. Zum Beispiel macht `colspan="2"` eine Zelle über zwei Spalten hinweg.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Erstellen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie als nächstes `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten hinweg zu spanen.
3. Verwenden Sie schließlich `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen hinweg zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Zusammenfassung

Damit sind die Grundlagen von HTML-Tabellen abgeschlossen. Im nächsten Artikel werden wir uns einige weitere Funktionen ansehen, mit denen HTML-Tabellen für sehbehinderte Menschen zugänglicher gemacht werden können.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
