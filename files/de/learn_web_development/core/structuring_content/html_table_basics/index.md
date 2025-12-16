---
title: HTML-Tabellengrundlagen
short-title: Grundlagen von Tabellen
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Dieser Artikel gibt Ihnen einen Einstieg in HTML-Tabellen und behandelt die Grundlagen wie Zeilen, Zellen, Überschriften, das Spannen von Zellen über mehrere Spalten und Zeilen sowie das Gruppen aller Zellen in einer Spalte zu Styling-Zwecken.

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
          <li>Wofür Tabellen da sind — Strukturierung tabellarischer Daten.</li>
          <li>Wofür Tabellen nicht da sind — Layout oder <em>sonst irgendetwas anderes</em>.</li>
          <li>Grundsyntax von Tabellen — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code>.</li>
          <li>Definieren von Tabellenüberschriften mit <code>&lt;th&gt;</code>.</li>
          <li>Spannen über mehrere Spalten und Zeilen mit <code>colspan</code> und <code>rowspan</code>.</li>
          <li>Gruppieren von Spalten mit <code>&lt;colgroup&gt;</code> und <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Tabelle?

Eine Tabelle ist eine strukturierte Anordnung von Daten, die aus Zeilen und Spalten besteht (**tabellarische Daten**). Eine Tabelle ermöglicht es Ihnen, schnell und einfach Werte nachzuschlagen, die eine Art Verbindung zwischen verschiedenen Datentypen anzeigen, zum Beispiel eine Person und ihr Alter oder ein Wochentag oder der Zeitplan eines örtlichen Schwimmbads.

![Ein Beispiel für eine Tabelle mit Namen und Alter von einigen Personen - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Ein Schwimmplan zeigt eine Beispieltabellendaten](swimming-timetable.png)

Tabellen werden in der menschlichen Gesellschaft sehr häufig verwendet und das schon seit langem, wie dieses US-Volkszählungsdokument aus dem Jahr 1800 zeigt:

![Ein sehr altes Pergamentdokument; die Daten sind nicht leicht lesbar, aber es zeigt klar eine Tabelle.](1800-census.jpg)

Es ist daher kein Wunder, dass die Erfinder von HTML eine Möglichkeit bereitgestellt haben, um tabellarische Daten im Web darzustellen und zu strukturieren.

### Wie funktioniert eine Tabelle?

Der Punkt an einer Tabelle ist, dass sie starr ist. Informationen werden durch visuelle Assoziationen zwischen Zeilen- und Spaltenüberschriften leicht interpretierbar gemacht. Sehen Sie sich das folgende Beispiel einer Tabelle an und finden Sie einen Jovianischen Gasriesen mit 62 Monden. Sie finden die Antwort, indem Sie die relevanten Zeilen- und Spaltenüberschriften verknüpfen.

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

Wenn korrekt umgesetzt, werden HTML-Tabellen gut von Barrierefreiheitswerkzeugen wie Bildschirmlesern verarbeitet, so dass eine gut gestaltete HTML-Tabelle die Erfahrung sowohl von sehenden als auch von sehbehinderten Benutzern verbessert.

### Tabellenstyling

Sie können sich auch das [Live-Beispiel der Planeten-Daten](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) auf GitHub ansehen! Eine Sache, die Ihnen auffallen wird, ist, dass die Tabelle dort etwas lesbarer aussieht — das liegt daran, dass die Tabelle, die Sie hier oben auf dieser Seite sehen, minimales Styling hat, während die GitHub-Version mit bedeutenderem CSS gestylt wurde.

Täuschen Sie sich nicht; damit Tabellen im Web effektiv sind, müssen Sie einige Styling-Informationen mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) bereitstellen, sowie eine solide Struktur mit HTML. In dieser Lektion konzentrieren wir uns auf den HTML-Teil; über die Stilgebung von Tabellen werden Sie später in unserer [Stilgebung von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)-Lektionen lernen.

Wir werden uns in diesem Modul nicht auf CSS konzentrieren, aber wir haben ein minimales CSS-Stylesheet für Sie bereitgestellt, das Ihre Tabellen lesbarer macht als das, was Sie standardmäßig ohne Styling erhalten. Sie können das [Stylesheet hier finden](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), und Sie können auch eine [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) finden, die das Stylesheet anwendet — diese beiden zusammen bieten Ihnen einen guten Ausgangspunkt, um mit HTML-Tabellen zu experimentieren.

### Wann sollten Sie HTML-Tabellen vermeiden?

HTML-Tabellen sollten für tabellarische Daten verwendet werden (Informationen, die sich leicht in Reihen und Spalten verarbeiten lassen) — dafür sind sie konzipiert. Leider haben in der Vergangenheit viele Menschen HTML-Tabellen verwendet, um Webseiten zu layouten, zum Beispiel eine Zeile, um einen Seitenkopf einzufügen, eine Zeile für jede Inhaltskolonne, eine Zeile für die Fußzeile usw. Diese Technik wurde in der Vergangenheit verwendet, weil CSS-Unterstützung über verschiedene Browser hinweg früher viel eingeschränkter war. Moderne Browser haben eine solide CSS-Unterstützung, sodass tabellenbasierte Layouts nicht mehr benötigt werden. Tabellenlayouts sind heutzutage extrem selten, aber Sie könnten sie noch in einigen Ecken des Webs sehen.

Kurz gesagt, die Verwendung von Tabellen für Layouts anstelle von [CSS-Layout-Techniken](/de/docs/Learn_web_development/Core/CSS_layout) ist eine schlechte Idee. Die Hauptgründe sind wie folgt:

1. **Layouttabellen reduzieren die Barrierefreiheit für sehbehinderte Benutzer**: [Bildschirmleser](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) werden von Blinden verwendet und interpretieren die Tags, die auf einer HTML-Seite vorhanden sind, und lesen die Inhalte dem Benutzer vor. Da Tabellen nicht das richtige Werkzeug für Layouts sind und das Markup komplexer ist als bei CSS-Layouttechniken, wird die Ausgabe der Bildschirmleser für ihre Benutzer verwirrend sein.
2. **Tabellen erzeugen Tag-Suppe**: Wie oben erwähnt, beinhalten Tabellenlayouts im Allgemeinen komplexere Markupstrukturen als richtige Layouttechniken. Dies kann dazu führen, dass der Code schwieriger zu schreiben, zu pflegen und zu debuggen ist.
3. **Tabellen sind nicht automatisch responsiv**: Wenn Sie richtige Layout-Container (wie {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} oder {{htmlelement("div")}}) verwenden, beträgt ihre Breite standardmäßig 100% ihrer Elternelemente. Tabellen hingegen werden standardmäßig nach ihrem Inhalt dimensioniert, sodass zusätzliche Maßnahmen erforderlich sind, um das Tabellendesign über eine Vielzahl von Geräten hinweg effektiv zu gestalten.

## Erstellen Ihrer ersten Tabelle

Wir haben genug über Tabellentheorie gesprochen, also lassen Sie uns in ein praktisches Beispiel einsteigen und Sie eine einfache Tabelle aufbauen lassen.

1. Zuerst einmal machen Sie eine Kopie von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Die HTML-Vorlage enthält bereits ein `<link>`-Element, um das CSS auf das HTML anzuwenden, sodass Sie sich darum nicht kümmern müssen.
2. Der Inhalt jeder Tabelle liegt zwischen diesen beiden Tags: **[`<table></table>`](/de/docs/Web/HTML/Reference/Elements/table)**. Fügen Sie diese innerhalb des Bodys Ihres HTML-Dokuments ein.
3. Der kleinste Container innerhalb einer Tabelle ist eine Tabellenzelle, die mit einem **[`<td>`](/de/docs/Web/HTML/Reference/Elements/td)**-Element erstellt wird ("td" steht für "table data"). Fügen Sie das folgende innerhalb Ihrer Tabellentags hinzu:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Wenn wir eine Zeile mit vier Zellen wollen, müssen wir diese Tags dreimal kopieren. Aktualisieren Sie Ihre Tabelle, damit sie so aussieht:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Wie Sie sehen werden, werden die Zellen nicht untereinander platziert, sondern sie sind alle automatisch auf derselben Zeile ausgerichtet. Jedes `<td>`-Element erstellt eine einzelne Zelle, und zusammen bilden diese die erste Zeile. Jede hinzugefügte Zelle verlängert die Zeile.

Um zu verhindern, dass diese Zeile länger wird, und um nächste Zellen in einer zweiten Zeile zu platzieren, müssen wir das **[`<tr>`](/de/docs/Web/HTML/Reference/Elements/tr)**-Element verwenden ('tr' steht für 'table row'). Schauen wir uns das nun an.

1. Platzieren Sie die vier Zellen, die Sie bereits erstellt haben, innerhalb von `<tr>`-Tags, so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Nun, da Sie eine Zeile erstellt haben, versuchen Sie, ein oder zwei weitere zu erstellen — jede Zeile muss in einem zusätzlichen `<tr>`-Element umschlossen werden, wobei jede Zelle in einem `<td>` enthalten ist.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

Sie können diesen Code auch auf GitHub unter [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Hinzufügen von Überschriften mit \<th>-Elementen

Jetzt wenden wir uns den Tabellenüberschriften zu — spezielle Zellen, die am Anfang einer Zeile oder Spalte stehen und den Typ der Daten definieren, die diese Zeile oder Spalte enthält (als Beispiel siehe die "Person"- und "Alter"-Zellen im ersten in diesem Artikel gezeigten Beispiel). Um zu veranschaulichen, warum sie nützlich sind, sehen Sie sich das folgende Tabellbeispiel an. Zuerst der Quellcode:

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

Das Problem hier ist, dass man zwar erahnen kann, was passiert, aber es ist nicht so einfach, die Daten miteinander zu vergleichen, wie es sein könnte. Wenn die Spalten- und Zeilenüberschriften auf irgendeine Weise hervorstechen würden, wäre es viel besser.

### Hinzufügen von Überschriften zur Hundetabelle

Jetzt möchten wir, dass Sie versuchen, das Hundetabellenbeispiel zu verbessern, indem Sie einige Überschriften hinzufügen.

1. Machen Sie zuerst eine lokale Kopie unseres [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Um die Tabellenüberschriften sowohl visuell als auch semantisch als Überschriften zu erkennen, können Sie das **[`<th>`](/de/docs/Web/HTML/Reference/Elements/th)**-Element verwenden ("th" steht für "table header"). Dies funktioniert genauso wie ein `<td>`, außer dass es eine Überschrift und nicht eine normale Zelle kennzeichnet. Gehen Sie in Ihr HTML und ändern Sie alle `<td>`-Elemente, die die Tabellenüberschriften umgeben, in `<th>`-Elemente.
3. Speichern Sie Ihr HTML und laden Sie es in einem Browser, und Sie sollten sehen, dass die Überschriften jetzt wie Überschriften aussehen.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

Sie können diesen Code auch auf GitHub unter [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Warum sind Überschriften nützlich?

Wir haben diese Frage schon teilweise beantwortet — es ist leichter, die Daten zu finden, die Sie suchen, wenn die Überschriften klar abgehoben sind, und das Design sieht einfach allgemein besser aus.

> [!NOTE]
> Tabellenüberschriften haben ein Standard-Styling — sie sind fett und zentriert, selbst wenn Sie kein eigenes Styling zur Tabelle hinzufügen, um ihnen zu helfen, hervorzuheben.

Tabellenüberschriften bieten auch einen zusätzlichen Vorteil — zusammen mit dem `scope`-Attribut (das wir im nächsten Artikel kennenlernen werden) ermöglichen sie es, Tabellen barrierefreier zu machen, indem sie jede Überschrift mit allen Daten in derselben Zeile oder Spalte verknüpfen. Bildschirmleser können dann eine ganze Zeile oder Spalte von Daten auf einmal auslesen, was ziemlich nützlich ist.

## Lassen von Zellen über mehrere Zeilen und Spalten spannen

Manchmal möchten wir, dass Zellen über mehrere Zeilen oder Spalten spannen. Nehmen Sie das folgende einfache Beispiel, das die Namen häufiger Tiere zeigt. In einigen Fällen möchten wir die Namen der Männchen und Weibchen neben dem Tiernamen anzeigen. Manchmal wollen wir das nicht, und in solchen Fällen möchten wir nur, dass der Tiername über die gesamte Tabelle spannt.

Das anfängliche Markup sieht so aus:

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

Wir brauchen einen Weg, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten hinweg spannen zu lassen und "Pferd" und "Huhn" nach unten über zwei Zeilen. Glücklicherweise haben Tabellenüberschriften und Zellen die Attribute `colspan` und `rowspan`, die es uns erlauben, genau das zu tun. Beide akzeptieren einen einheitslosen Zahlenwert, der der Anzahl der Zeilen oder Spalten entspricht, über die Sie spannen möchten. Zum Beispiel lässt `colspan="2"` eine Zelle über zwei Spalten spannen.

Lassen Sie uns `colspan` und `rowspan` verwenden, um diese Tabelle zu verbessern.

1. Machen Sie zuerst eine lokale Kopie unserer [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)-Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner. Das HTML enthält dasselbe Tierbeispiel, das Sie oben gesehen haben.
2. Verwenden Sie dann `colspan`, um "Tiere", "Nilpferd" und "Krokodil" über zwei Spalten spannen zu lassen.
3. Schließlich verwenden Sie `rowspan`, um "Pferd" und "Huhn" über zwei Zeilen spannen zu lassen.
4. Speichern und öffnen Sie Ihren Code in einem Browser, um die Verbesserung zu sehen.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

Sie können diesen Code auch auf GitHub unter [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Gruppieren von Spalten mit `<colgroup>` und `<col>`

Es gibt eine Möglichkeit, ganze Tabellenspalten als eine einzige Einheit zu adressieren, zum Beispiel beim Anwenden von Styles auf eine Tabelle (darüber wird später in [Stiling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) gelernt). Wenn Sie mehr Erfahrung im Erstellen von HTML-Tabellen sammeln, werden Sie feststellen, dass das Anwenden einer Hintergrundfarbe auf jede Zelle in einer einzigen Spalte schwieriger ist, als Sie vielleicht denken. Die {{htmlelement("colgroup")}} und {{htmlelement("col")}}-Elemente bieten eine Lösung für dieses Problem.

Das `<colgroup>`-Element sollte als Kind der Tabelle, direkt nach dem öffnenden `<table>`-Element eingefügt werden. Innerhalb des `<colgroup>`-Elements können Sie ein oder mehrere `<col>`-Elemente einfügen, die Gruppen von Spalten darstellen. Das `<col>`-Element kann ein `span`-Attribut enthalten, das die Anzahl der Spalten in dieser Gruppe angibt. Es kann auch globale Attribute wie `style` (wenn Sie die Gruppe mit Inline-Stilen adressieren möchten) oder `class` (wenn Sie diese Gruppe mit CSS oder JavaScript mittels eines Klassennamens adressieren möchten) enthalten. Die `<col>`-Elemente repräsentieren die Tabellenspalten vom Anfang der Spalten, zum Beispiel von der linken Seite einer Tabelle, die in einer von links nach rechts geschriebenen Sprache wie Englisch verfasst ist.

Schauen wir uns ein Beispiel an, um zu zeigen, was wir meinen. Die folgende Tabelle zeigt einen Stundenplan einer Schule:

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

In dieser Tabelle gibt es acht Spalten. Lassen Sie uns die Struktur von `<colgroup>` und `<col>` genauer betrachten, um zu zeigen, wie sie wirkt:

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

Wenn wir uns die `<col>`-Elemente ansehen:

- Das erste hat `span="2"` gesetzt, daher repräsentiert es die erste _und_ zweite Spalte von links der Tabelle. Wir adressern diese Spalten nicht mit irgendwelchen Styles, aber wir müssen sie einfügen, damit wir die folgenden Spalten adressieren können.
- Das zweite und vierte haben kein `span`-Attribut gesetzt, so dass sie eine Einzelspalte repräsentieren — die dritte und fünfte Spalte in diesen Fällen. Sie haben eine `class` von `column-background` angewendet.
- Das dritte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-fixed-width` angewendet. Es repräsentiert die vierte Spalte.
- Die fünfte hat kein `span`-Attribut gesetzt und hat eine `class` von `column-background-border` angewendet. Es repräsentiert die sechste Spalte.
- Das sechste hat `span="2"` gesetzt und eine `class` von `column-fixed-width` angewendet. Es repräsentiert die siebte und achte Spalte.

Wir haben die meisten der CSS für dieses Beispiel verborgen, aber wir zeigen Ihnen die Regeln, die Styles auf die `<col>`-Elemente mit den Klassen `column-background`, `column-fixed-width` und `column-background-border` setzen:

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

- Die `<col>`-Elemente mit einer `column-background`-Klasse haben eine feste Hintergrundfarbe darauf gesetzt.
- Die `<col>`-Elemente mit einer `column-fixed-width`-Klasse haben eine schmale feste Breite darauf gesetzt.
- Das `<col>`-Element mit einer `column-background-border`-Klasse hat eine feste Hintergrundfarbe und einen dicken Rahmen darauf gesetzt.

Sie müssen sich jetzt nicht darum kümmern, wie das CSS funktioniert; das werden Sie im Detail später in unserem [CSS großartigem Modul](/de/docs/Learn_web_development/Core/Styling_basics) lernen.

Lassen Sie uns ansehen, wie der obige Code gerendert wird:

{{embedlivesample("colgroup-col", "100%", 400)}}

Beachten Sie, wie die verschiedenen Spalten die in den Klassen festgelegten Stile erhalten.

> [!NOTE]
> Auch wenn `<colgroup>` und `<col>` hauptsächlich das Stylen erleichtern, sind sie ein HTML-Feature, daher haben wir sie hier behandelt und nicht in unseren CSS-Modulen. Ist es auch fair zu sagen, dass sie ein _begrenztes_ Feature sind — wie auf der [`<colgroup>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/colgroup#usage_notes) gezeigt, können nur eine begrenzte Anzahl von Stilen auf ein `<col>`-Element angewendet werden, und die meisten der anderen Einstellungen, die historisch verfügbar waren, wurden abgelehnt (entfernt oder für die Entfernung gekennzeichnet).

## Interaktive Zusammenfassung der Tabellenkonzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion, die die meisten der in diesem Artikel behandelten Techniken zusammenfasst. Sehen Sie sich das für eine Zusammenfassung der wichtigsten Punkte und einige zusätzliche Übungen an.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML Tabellen"></mdn-scrim-inline>

## Zusammenfassung

Das fasst die Grundlagen von HTML-Tabellen zusammen. Im nächsten Artikel werden wir uns einige weitere Funktionen ansehen, die verwendet werden können, um HTML-Tabellen für sehbehinderte Menschen zugänglicher zu machen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
