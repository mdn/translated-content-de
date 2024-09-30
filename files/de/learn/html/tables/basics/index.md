---
title: HTML Table Grundlagen
slug: Learn/HTML/Tables/Basics
l10n:
  sourceCommit: 7e0a11ac5698ffccb0c8fc883da3b345c417bebc
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Dieser Artikel bringt Sie mit HTML-Tabellen in Gang und behandelt die grundlegenden Aspekte wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen, sowie das Gruppieren aller Zellen in einer Spalte für Stilzwecke.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundkenntnisse über HTML-Tabellen erwerben.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist ein strukturiertes Datenset, das aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte zu finden, die eine Verbindung zwischen verschiedenen Arten von Daten aufzeigen, zum Beispiel eine Person und ihr Alter, einen Wochentag oder den Stundenplan eines örtlichen Schwimmbades.

![Eine Mustertabelle, die Namen und Alter einiger Personen zeigt - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmplan, der eine Beispiel-Datentabelle zeigt](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon seit langer Zeit, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt deutlich, dass eine Datentabelle verwendet wird.](1800-census.jpg)

Es ist daher nicht verwunderlich, dass die Ersteller von HTML eine Möglichkeit vorgesehen haben, tabellarische Daten im Web zu strukturieren und darzustellen.

### Wie funktioniert eine Tabelle?

Der Zweck einer Tabelle besteht darin, dass sie starr ist. Informationen werden leicht interpretiert, indem visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften hergestellt werden. Sehen Sie sich die folgende Tabelle an und finden Sie einen jovianischen Gasriesen mit 62 Monden. Sie können die Antwort finden, indem Sie die relevanten Zeilen- und Spaltenüberschriften assoziieren.

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

Wenn HTML-Tabellen korrekt implementiert sind, werden sie gut von Hilfsmitteln wie Bildschirmlesern behandelt, so dass eine erfolgreiche HTML-Tabelle das Erlebnis sowohl für sehende als auch für sehbehinderte Nutzer verbessert.

### Tabellen-Styling

Sie können sich auch [das Live-Beispiel ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas besser lesbar aussieht — das liegt daran, dass die Tabelle, die Sie oben auf dieser Seite sehen, minimal gestylt ist, während die GitHub-Version eine bedeutendere CSS-Anwendung hat.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Styling-Informationen mit [CSS](/de/docs/Learn/CSS) bereitstellen sowie eine gute solide Struktur mit HTML. In diesem Modul konzentrieren wir uns auf den HTML-Teil; um mehr über den CSS-Teil zu erfahren, sollten Sie unseren Artikel [Styling tables](/de/docs/Learn/CSS/Building_blocks/Styling_tables) besuchen, nachdem Sie hier fertig sind.

Wir konzentrieren uns in diesem Modul nicht auf CSS, aber wir haben ein minimales CSS-Stylesheet bereitgestellt, das Sie verwenden können, um Ihre Tabellen lesbarer zu machen als das, was Sie standardmäßig ohne Styling erhalten. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) und auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html), die das Stylesheet anwendet — diese zusammen geben Ihnen einen guten Ausgangspunkt für Experimente mit HTML-Tabellen.

### Wann sollten Sie HTML-Tabellen NICHT verwenden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden — dafür sind sie konzipiert. Leider haben viele Menschen früher HTML-Tabellen verwendet, um Webseiten zu layouten, z.B. eine Zeile für den Header, eine Zeile für die Inhaltsspalten, eine Zeile für den Footer, etc. Weitere Details und ein Beispiel finden Sie unter [Page Layouts](/de/docs/Learn/Accessibility/HTML#page_layouts) in unserem [Accessibility Learning Module](/de/docs/Learn/Accessibility). Dies wurde häufig verwendet, weil die CSS-Unterstützung in den Browsern früher sehr schlecht war; Tabellenlayouts sind heutzutage viel weniger verbreitet, aber Sie könnten sie immer noch in einigen Ecken des Webs finden.

Kurz gesagt, die Verwendung von Tabellen für Layout ist im Vergleich zu [CSS-Layout-Techniken](/de/docs/Learn/CSS/CSS_layout) eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layout-Tabellen reduzieren die Zugänglichkeit für sehbehinderte Benutzer**: [Screenreader](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers), die von Blinden verwendet werden, interpretieren die Tags, die in einer HTML-Seite vorhanden sind, und lesen dem Benutzer den Inhalt vor. Da Tabellen nicht das richtige Werkzeug für das Layout sind und das Markup komplexer ist als bei CSS-Layout-Techniken, wird die Ausgabe der Screenreader verwirrend für ihre Benutzer sein.
2. **Tabellen erzeugen einen Tag-Salat**: Wie oben erwähnt, umfassen Tabellenlayouts im Allgemeinen komplexere Markup-Strukturen als ordentliche Layout-Techniken. Dies kann dazu führen, dass der Code schwerer zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie ordentliche Layout-Container (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, oder {{htmlelement("div")}}) verwenden, ist ihre Breite standardmäßig 100% des übergeordneten Elements. Tabellen hingegen werden standardmäßig entsprechend ihrem Inhalt dimensioniert, so dass zusätzliche Maßnahmen erforderlich sind, um das Tabellenlayout effektiv auf einer Vielzahl von Geräten zu verwenden.

## Aktives Lernen: Ihre erste Tabelle erstellen

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel eintauchen und eine einfache Tabelle aufbauen.

1. Erstellen Sie zunächst eine lokale Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Der Inhalt jeder Tabelle wird durch diese beiden Tags eingeschlossen: **[`<table></table>`](/de/docs/Web/HTML/Element/table)**. Fügen Sie diese in den Body Ihres HTMLs ein.
3. Der kleinste Container in einer Tabelle ist eine Tabellenzelle, die durch ein **[`<td>`](/de/docs/Web/HTML/Element/td)**-Element erstellt wird (steht für 'table data'). Fügen Sie folgendes innerhalb Ihrer Tabellentags ein:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen haben möchten, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie den Inhalt Ihrer Tabelle wie folgt:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, sind die Zellen nicht untereinander platziert, sondern werden automatisch in der gleichen Zeile ausgerichtet. Jede `<td>`-Element erstellt eine einzelne Zelle und zusammen bilden sie die erste Zeile. Jede Zelle, die wir hinzufügen, lässt die Zeile länger werden.

Um diese Zeile vom Wachsen abzuhalten und nachfolgende Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Element/tr)**-Element verwenden (steht für 'table row'). Untersuchen wir dies nun.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, in `<tr>`-Tags, wie folgt:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nachdem Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in ein zusätzliches `<tr>`-Element eingeschlossen sein, wobei jede Zelle in einem `<td>` enthalten sein muss.

### Ergebnis

Das sollte zu einer Tabelle führen, die ungefähr wie folgt aussieht:

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
> Sie können dies auch auf GitHub als [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Hinzufügen von Überschriften mit \<th>-Elementen

Lassen Sie uns nun unsere Aufmerksamkeit auf Tabellenüberschriften richten — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und den in dieser Zeile oder Spalte enthaltenen Datentyp definieren (als Beispiel siehe die Zellen "Person" und "Alter" im ersten Beispiel, das in diesem Artikel gezeigt wird). Um zu veranschaulichen, warum sie nützlich sind, schauen Sie sich das folgende Tabellenbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass, obwohl Sie irgendwie herausfinden können, was vor sich geht, es nicht so einfach ist, Daten zu überkreuzen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften in irgendeiner Weise hervorstehen würden, wäre es viel besser.

### Aktives Lernen: Tabellenüberschriften

Lassen Sie uns versuchen, diese Tabelle zu verbessern.

1. Machen Sie zunächst eine lokale Kopie unserer [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Hunde-Beispiel wie oben gesehen.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Element/th)**-Element verwenden (steht für 'table header'). Dies funktioniert genau wie ein `<td>`, außer dass es eine Überschrift und keine normale Zelle kennzeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente um die Tabellenüberschriften in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

> [!NOTE]
> Sie können unser fertiges Beispiel bei [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Warum sind Überschriften nützlich?

Wir haben diese Frage bereits teilweise beantwortet — es ist einfacher, die gesuchten Daten zu finden, wenn die Überschriften deutlich hervorstechen, und das Design sieht einfach allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften kommen mit etwas voreingestelltem Styling — sie sind fett und zentriert selbst wenn Sie kein eigenes Styling zur Tabelle hinzufügen, um sie hervorzuheben.

Tabellenüberschriften haben auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (über das wir im nächsten Artikel mehr lernen werden), ermöglichen sie es, Tabellen zugänglicher zu machen, indem jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpft wird. Bildschirmleser können dann eine ganze Zeile oder Spalte von Daten auf einmal vorlesen, was ziemlich nützlich ist.

## Zellen über mehrere Zeilen und Spalten spannen lassen

Manchmal möchten wir Zellen über mehrere Zeilen oder Spalten spannen lassen. Nehmen Sie das folgende einfache Beispiel, das die Namen von häufigen Tieren zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal nicht, und in solchen Fällen möchten wir, dass der Tiername die ganze Tabelle überspannt.

Das Anfangsmarkup sieht so aus:

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

Wir brauchen eine Möglichkeit, "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen, und "Horse" und "Chicken" über zwei Zeilen nach unten zu spannen. Zum Glück haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns ermöglichen, genau diese Dinge zu tun. Beide akzeptieren einen zahlosen Wert, der die Anzahl der Zeilen oder Spalten angibt, die Sie spannen möchten. Zum Beispiel, `colspan="2"` lässt eine Zelle zwei Spalten überspannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie zunächst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel wie oben gesehen.
2. Verwenden Sie als nächstes `colspan`, um "Animals", "Hippopotamus" und "Crocodile" über zwei Spalten zu spannen.
3. Verwenden Sie schließlich `rowspan`, um "Horse" und "Chicken" über zwei Zeilen zu spannen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

> [!NOTE]
> Sie können unser fertiges Beispiel bei [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Gemeinsames Styling für Spalten bereitstellen

### Styling ohne \<col>

Es gibt eine letzte Funktion, über die wir Sie in diesem Artikel informieren wollen, bevor wir weitermachen. HTML bietet eine Methode, um Stylinginformationen für eine ganze Datenkolonne an einem Ort zu definieren — die **[`<col>`](/de/docs/Web/HTML/Element/col)**- und **[`<colgroup>`](/de/docs/Web/HTML/Element/colgroup)**-Elemente. Diese existieren, weil es ein bisschen ärgerlich und ineffizient sein kann, Styling auf Spalten zu spezifizieren — im Allgemeinen müssen Sie Ihre Stylinginformationen auf _jeder_ `<td>` oder `<th>` in der Spalte angeben, oder einen komplexen Selektor wie {{cssxref(":nth-child")}} verwenden.

> [!NOTE]
> Das Styling von Spalten ist [nur auf wenige Eigenschaften beschränkt](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](/de/docs/Web/CSS/border), [`background`](/de/docs/Web/CSS/background), [`width`](/de/docs/Web/CSS/width) und [`visibility`](/de/docs/Web/CSS/visibility). Um andere Eigenschaften festzulegen, müssen Sie entweder jede `<td>` oder `<th>` in der Spalte stylen, oder einen komplexen Selektor wie {{cssxref(":nth-child")}} verwenden.

Nehmen Sie das folgende einfache Beispiel:

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
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

Was uns das folgende Ergebnis gibt:

{{EmbedLiveSample("Styling_without_col", "", "200")}}

Das ist nicht ideal, da wir die Stylinginformationen über alle drei Zellen in der Spalte wiederholen müssen (wir würden wahrscheinlich eine `class` auf alle drei in einem echten Projekt setzen und das Styling in einem separaten Stylesheet angeben).

### Styling mit \<col>

Stattdessen können wir die Informationen einmalig auf einem `<col>`-Element spezifizieren. `<col>`-Elemente werden innerhalb eines `<colgroup>`-Containers direkt unter dem öffnenden `<table>`-Tag angegeben. Wir könnten denselben Effekt wie oben gesehen erzielen, indem wir unsere Tabelle wie folgt angeben:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

Im Wesentlichen definieren wir zwei "Stil-Spalten", die Stylinginformationen für jede Spalte angeben. Wir stylen die erste Spalte nicht, aber wir müssen trotzdem ein leeres `<col>`-Element einfügen — wenn wir dies nicht tun würden, würde das Styling einfach auf die erste Spalte angewendet.

Wenn wir die Stylinginformationen auf beide Spalten anwenden wollten, könnten wir einfach ein `<col>`-Element mit einem span-Attribut darauf einschließen, wie dies:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Genau wie `colspan` und `rowspan` nimmt `span` einen zahlosen Wert an, der die Anzahl der Spalten angibt, die Sie das Styling anwenden möchten.

> [!NOTE]
> Wenn die Tabelle, eine Spalte und Tabellenzellen in dieser Spalte alle separat gestylt werden, dann werden Styles, die auf die Zellen angewendet werden, über den Spaltenstyles aufgetragen, die über der Tabelle aufgetragen werden. Das liegt daran, dass die Tischschicht zuerst gerendert wird, dann die Spaltenschicht gerendert wird, mit der [Zellenschicht, die über allen anderen Tabellenschichten gerendert wird](/de/docs/Web/HTML/Element/table#table_layers_and_transparency).

### Aktives Lernen: colgroup und col

Jetzt ist es Zeit, sich selbst auszuprobieren.

Unten sehen Sie den Stundenplan einer Sprachlehrerin. Am Freitag hat sie eine neue Klasse, die den ganzen Tag Niederländisch unterrichtet, aber sie unterrichtet auch einige Stunden Deutsch am Dienstag und Donnerstag. Sie möchte die Spalten hervorheben, die die Tage enthalten, an denen sie unterrichtet.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 350)}}

Erstellen Sie die Tabelle nach den folgenden Schritten nach.

1. Erstellen Sie zunächst eine lokale Kopie unserer [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html) Datei in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dieselbe Tabelle, die Sie oben gesehen haben, abzüglich der Spaltenstylinginformationen.
2. Fügen Sie ein `<colgroup>`-Element oben in die Tabelle ein, direkt unter dem `<table>`-Tag, in dem Sie Ihre `<col>`-Elemente hinzufügen können (siehe die folgenden Schritte unten).
3. Die ersten beiden Spalten müssen ungestylt bleiben.
4. Fügen Sie eine Hintergrundfarbe zur dritten Spalte hinzu. Der Wert für Ihr `style` Attribut ist `background-color:#97DB9A;`
5. Setzen Sie eine separate Breite auf die vierte Spalte. Der Wert für Ihr `style` Attribut ist `width: 100px;`
6. Fügen Sie eine Hintergrundfarbe zur fünften Spalte hinzu. Der Wert für Ihr `style` Attribut ist `background-color: #97DB9A;`
7. Fügen Sie eine andere Hintergrundfarbe plus einen Rahmen zur sechsten Spalte hinzu, um zu kennzeichnen, dass dies ein besonderer Tag ist und sie eine neue Klasse unterrichtet. Die Werte für Ihr `style` Attribut sind `background-color:#DCC48E; border:4px solid #C1437A;`
8. Die letzten beiden Tage sind freie Tage, also setzen Sie sie einfach ohne Hintergrundfarbe, aber mit einer festen Breite; der Wert für das `style` Attribut ist `width: 100px;`

Schauen Sie, wie Sie mit dem Beispiel zurechtkommen. Wenn Sie feststecken oder Ihre Arbeit überprüfen möchten, können Sie unsere Version auf GitHub als [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html)).

## Zusammenfassung

Das war es im Wesentlichen zu den Grundlagen von HTML-Tabellen. Im nächsten Artikel werden wir einige der etwas [fortgeschritteneren Tabelleneigenschaften](/de/docs/Learn/HTML/Tables/Advanced) betrachten und beginnen, darüber nachzudenken, wie zugänglich sie für sehbehinderte Personen sind.

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
