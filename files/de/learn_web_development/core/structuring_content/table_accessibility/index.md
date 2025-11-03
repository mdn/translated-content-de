---
title: Barrierefreiheit bei HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir eines der wichtigsten Merkmale besprochen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort, indem wir weitere Funktionen zur Barrierefreiheit von HTML-Tabellen untersuchen, wie z.B. Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenköpfe, Körper- und Fußbereiche sowie das Festlegen von Geltungsbereichen für Spalten und Zeilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Barrierefreiheitsprobleme im Zusammenhang mit Tabellen.</li>
          <li>Hinzufügen von Bildunterschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fuß.</li>
          <li>Erstellen weiterer Verknüpfungen zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um schnell auf Daten zuzugreifen und unterschiedliche Werte nachzuschlagen. Zum Beispiel braucht es nur einen kurzen Blick auf die nachstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, stellen wir visuelle Verknüpfungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Verkaufte Artikel im August 2016</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Kleidung</th>
      <th colspan="2" scope="colgroup">Accessoires</th>
    </tr>
    <tr>
      <th scope="col">Hosen</th>
      <th scope="col">Röcke</th>
      <th scope="col">Kleider</th>
      <th scope="col">Armbänder</th>
      <th scope="col">Ringe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgien</th>
      <th scope="row">Antwerpen</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brüssel</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Niederlande</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

Aber was, wenn Sie diese visuellen Verknüpfungen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen {{Glossary("Screen_reader", "Screenreader")}}, der ihnen Informationen auf Webseiten vorliest. Dies ist kein Problem, wenn man einfachen Text liest, aber das Interpretieren einer Tabelle kann für blinde Personen eine Herausforderung sein. Dennoch können wir mit dem richtigen Markup visuelle Verknüpfungen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben weltweit etwa 253 Millionen Menschen mit visueller Beeinträchtigung.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader erkennen alle Kopfzeilen und verwenden sie, um programmatische Verknüpfungen zwischen diesen Kopfzeilen und den zugehörigen Zellen herzustellen. Die Kombination von Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Benutzer eines Screenreaders die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Kopfzeilen bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Kopfzeilen mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Bildunterschrift hinzufügen, indem Sie sie in ein {{htmlelement("caption")}}-Element einfügen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>
  <!-- … -->
</table>
```

Wie Sie aus dem kurzen Beispiel oben ablesen können, soll die Bildunterschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist für alle Leser nützlich, die beim Durchsuchen der Seite schnell entscheiden möchten, ob die Tabelle für sie nützlich ist, insbesondere für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, um was es in der Tabelle geht, kann sich der Benutzer auf eine Bildunterschrift verlassen und dann entscheiden, ob er die Tabelle genauer lesen möchte.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das Attribut [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) kann ebenfalls auf das `<table>`-Element angewendet werden, um eine Beschreibung bereitzustellen — dies wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch, stattdessen das `<caption>`-Element zu verwenden, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Übung zur Tabellenbildunterschrift

An diesem Punkt werden wir Sie dazu bringen, das Hinzufügen einer Bildunterschrift zu einer HTML-Tabelle auszuprobieren, wobei der Stundenplan eines Sprachlehrers als Beispiel dient.

1. Erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie eine passende Bildunterschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<table>
  <caption>
    Florence's weekly lesson timetable
  </caption>
  <colgroup>
    <col span="2" />
    <col style="background-color: #97DB9A;" />
    <col style="width: 42px;" />
    <col style="background-color: #97DB9A;" />
    <col style="background-color: #DCC48E; border: 4px solid #C1437A;" />
    <col span="2" style="width: 42px;" />
  </colgroup>
  <tr>
    <!-- Rest of code omitted for brevity -->
  </tr>
</table>
```

Sie können diesen Code auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Struktur der Tabelle mit \<thead>, \<tbody>, und \<tfoot> hinzufügen

Da Ihre Tabellen in der Struktur etwas komplexer werden, ist es hilfreich, ihnen eine klarere strukturelle Definition zu geben. Ein eindeutiger Weg, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Screenreader-Benutzer. Sie führen nicht zu einer visuellen Verbesserung von selbst, sind jedoch sehr nützlich für Styling- und Layouterweiterungen über CSS, die die Barrierefreiheit verbessern können. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und Fuß auf jeder gedruckten Seite wiederholen lassen, und den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen nach oben und unten verfügbar machen.

Um sie zu verwenden, sollten sie in folgender Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopfbereich ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber das muss nicht immer der Fall sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabellinhalts umschließen, der nicht der Tabellenkopf oder der Fuß ist, und sollte nach dem `<thead>` kommen.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fußbereich ist — dies könnte eine Abschlusszeile mit den in den vorherigen Zeilen summierten Artikeln sein. Das `<tfoot>` sollte nach dem `<tbody>` kommen.

> [!NOTE]
> `<tbody>` wird immer implizit in jede Tabelle eingefügt, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser diesen Tag für Sie hinzugefügt hat. Sie mögen sich fragen, warum Sie es überhaupt angeben sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und das Styling gibt.

### Struktur zu einer Ausgabentabelle hinzufügen

Lassen Sie uns Ihnen zeigen, wie Sie diese neuen Elemente in Aktion setzen.

1. Erstellen Sie zunächst eine neue HTML-Datei namens `spending-record.html` und fügen Sie den folgenden HTML-Code in den `<body>` ein:

   ```html
   <h1>My spending record</h1>

   <table>
     <caption>
       How I chose to spend my money
     </caption>
     <tr>
       <th>Purchase</th>
       <th>Location</th>
       <th>Date</th>
       <th>Evaluation</th>
       <th>Cost (€)</th>
     </tr>
     <tr>
       <td>Haircut</td>
       <td>Hairdresser</td>
       <td>12/09</td>
       <td>Great idea</td>
       <td>30</td>
     </tr>
     <tr>
       <td>Lasagna</td>
       <td>Restaurant</td>
       <td>12/09</td>
       <td>Regrets</td>
       <td>18</td>
     </tr>
     <tr>
       <td>Shoes</td>
       <td>Shoe shop</td>
       <td>13/09</td>
       <td>Big regrets</td>
       <td>65</td>
     </tr>
     <tr>
       <td>Toothpaste</td>
       <td>Supermarket</td>
       <td>13/09</td>
       <td>Good</td>
       <td>5</td>
     </tr>
     <tr>
       <td>SUM</td>
       <td>118</td>
     </tr>
   </table>
   ```

2. Erstellen Sie als nächstes eine CSS-Datei namens `minimal-table.css` im gleichen Verzeichnis wie Ihre HTML-Datei und füllen Sie es mit folgendem Inhalt:

   ```css live-sample___finished-table-structure
   html {
     font-family: sans-serif;
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

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }
   ```

3. Fügen Sie ein `<link>`-Element in Ihren HTML-`<head>` ein, um das CSS auf das HTML anzuwenden (siehe [CSS- und JavaScript-Anwendung auf HTML](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) für Hilfe hierzu).

4. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element zu setzen, die "SUM"-Zeile in ein `<tfoot>`-Element und den restlichen Inhalt in ein `<tbody>`-Element.
5. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu spannen, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
6. Fügen Sie etwas einfaches zusätzliches Styling zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente zur Anwendung von CSS sind. Fügen Sie das Folgende zu Ihrer CSS-Datei hinzu:

   ```css live-sample___finished-table-structure
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

   > [!NOTE]
   > Wir erwarten nicht, dass Sie das CSS derzeit vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit [CSS-Grundlagen zur Stilisierung](/de/docs/Learn_web_development/Core/Styling_basics), welches einen speziellen Artikel zum [Stil von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

7. Speichern und aktualisieren Sie, und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

Das fertige Beispiel sollte so aussehen:

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html live-sample___finished-table-structure
<table>
  <caption>
    How I chose to spend my money
  </caption>
  <thead>
    <tr>
      <th>Purchase</th>
      <th>Location</th>
      <th>Date</th>
      <th>Evaluation</th>
      <th>Cost (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Haircut</td>
      <td>Hairdresser</td>
      <td>12/09</td>
      <td>Great idea</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Lasagna</td>
      <td>Restaurant</td>
      <td>12/09</td>
      <td>Regrets</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Shoes</td>
      <td>Shoe shop</td>
      <td>13/09</td>
      <td>Big regrets</td>
      <td>65</td>
    </tr>
    <tr>
      <td>Toothpaste</td>
      <td>Supermarket</td>
      <td>13/09</td>
      <td>Good</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">SUM</td>
      <td>118</td>
    </tr>
  </tfoot>
</table>
```

</details>

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Kopfzeile eine Kopfzeile ist — ist es eine Kopfzeile für die Zeile, in der sie sich befindet, oder die Spalte, zum Beispiel? Wenn wir zu unserem Ausgabenrekord-Beispiel von vorher zurückblicken, könnten Sie die Spaltenüberschriften unmissverständlich als Spaltenüberschriften definieren, so:

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

Und jede Zeile könnte eine Kopfzeile wie folgt definiert haben (wenn wir sowohl Zeilen- als auch Spaltenüberschriften hinzugefügt hätten):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader werden ein so strukturiertes Markup erkennen und ihren Benutzern erlauben, zum Beispiel die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen liegen. Wenn Sie sich die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Artikelabschnitts ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" liegt. Alle diese Zellen sollten als Kopfzeilen (`<th>`) formatiert werden, aber "Kleidung" ist eine Überschrift, die oben darüber liegt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Clothes</th>
  </tr>
  <tr>
    <th scope="col">Trousers</th>
    <th scope="col">Skirts</th>
    <th scope="col">Dresses</th>
  </tr>
</thead>
```

Das Gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Blicken Sie noch einmal auf die Tabelle "Verkaufte Artikel im August 2016", diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden bemerken, dass die Überschrift "Niederlande", ebenfalls als `<th>`-Element formatiert, beide Reihen überspannt, die als Überschrift für die beiden Unterüberschriften dient. Daher sollte auf dieser Kopfzeile das Attribut `scope="rowgroup"` angegeben werden, um Screenreadern zu helfen, die richtigen Verknüpfungen zu erstellen:

```html
<tr>
  <th rowspan="2" scope="rowgroup">The Netherlands</th>
  <th scope="row">Amsterdam</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">Utrecht</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

## Die `id`- und `headers`-Attribute

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute, um Verknüpfungen zwischen Datentabelle-Zellen und Kopfzeilen-Zellen zu erstellen.

Ein `<th>`-Element kann entweder eine Überschrift für eine Datentabelle-Zelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Kopfzeile-Zelle (`<th>`) bereitstellen. Dies ermöglicht es, geschichtete oder gruppierte Kopfzeilen zu erstellen, bei denen eine Kopfzeile mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Kopfzeilen-Zellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}} an; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss der eindeutigen `id` eines `<th>`-Elements entsprechen, mit dem die Zelle verknüpft ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Kopfzeilen für die Spalte und die Zeile, zu der sie gehört, ähnlich wie bei einer Kalkulationstabelle. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Lassen Sie uns einen Teil des Beispiels "Verkaufte Artikel im August 2016" ansehen, um zu verstehen, wie man die `id`- und `headers`-Attribute verwendet:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzeilen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, das bedeutet, einer Kopfzelle mit einer anderen Kopfzeile darüber, ein `headers`-Attribut hinzu. Der Wert ist die `id` der oberen Kopfzeile. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste an. Sie können vorgehen, als wären Sie in einer Kalkulationstabelle: Finden Sie die Datenzelle, dann finden Sie die Zeilen- und Spaltenkopfzeilen, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber die Konsistenz trägt dazu bei, es organisiert zu halten und die Lesbarkeit des Codes zu verbessern.

```html
<thead>
  <tr>
    <th></th>
    <th></th>
    <th id="clothes" colspan="3">Clothes</th>
  </tr>
  <tr>
    <th></th>
    <th></th>
    <th id="trousers" headers="clothes">Trousers</th>
    <th id="skirts" headers="clothes">Skirts</th>
    <th id="dresses" headers="clothes">Dresses</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="2">Belgium</th>
    <th id="antwerp" headers="belgium">Antwerp</th>
    <td headers="belgium antwerp clothes trousers">56</td>
    <td headers="belgium antwerp clothes skirts">22</td>
    <td headers="belgium antwerp clothes dresses">43</td>
  </tr>
  <tr>
    <th id="ghent" headers="belgium">Ghent</th>
    <td headers="belgium ghent clothes trousers">41</td>
    <td headers="belgium ghent clothes skirts">17</td>
    <td headers="belgium ghent clothes dresses">35</td>
  </tr>
</tbody>
```

In diesem Beispiel:

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"` um sowohl `"Antwerpen"` als auch `"Gent"` zu überspannen.
- Die städtischen Kopfzeilen (`"Antwerpen"` und `"Gent"`) verwenden das `headers`-Attribut, um auf `"belgium"` zu verweisen, um zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jede `<td>` enthält ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerp` oder `ghent`), Gruppe (`clothes`) und das spezifische Kleidungsstück (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Verknüpfungen zwischen Kopfzeilen- und Datenzellen, verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Spielen mit `scope` und `headers`

Für diese abschließende Übung werden wir Sie dazu bringen, die Verwendung von `scope` und `headers` an der Beispielstabelle auszuprobieren, die wir oben eingeführt haben.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css), in einem neuen Verzeichnis.
2. Versuchen Sie, die geeigneten `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Startdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie dieses Mal die Tabelle zugänglicher, indem Sie präzise und explizite Assoziationen mit den `id`- und `headers`-Attributen erstellen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das erste fertige HTML-Beispiel sollte in etwa so aussehen:

```html
<table>
  <caption>
    Items Sold August 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Clothes</th>
      <th colspan="2" scope="colgroup">Accessories</th>
    </tr>
    <tr>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgium</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Ghent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">The Netherlands</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
```

Während das zweite so aussehen sollte:

```html
<table>
  <caption>
    Items Sold August 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" id="clothes">Clothes</th>
      <th colspan="2" id="accessories">Accessories</th>
    </tr>
    <tr>
      <th id="trousers" headers="clothes">Trousers</th>
      <th id="skirts" headers="clothes">Skirts</th>
      <th id="dresses" headers="clothes">Dresses</th>
      <th id="bracelets" headers="accessories">Bracelets</th>
      <th id="rings" headers="accessories">Rings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" id="belgium">Belgium</th>
      <th id="antwerp" headers="belgium">Antwerp</th>
      <td headers="antwerp belgium clothes trousers">56</td>
      <td headers="antwerp belgium clothes skirts">22</td>
      <td headers="antwerp belgium clothes dresses">43</td>
      <td headers="antwerp belgium accessories bracelets">72</td>
      <td headers="antwerp belgium accessories rings">23</td>
    </tr>
    <tr>
      <th id="ghent" headers="belgium">Ghent</th>
      <td headers="ghent belgium clothes trousers">46</td>
      <td headers="ghent belgium clothes skirts">18</td>
      <td headers="ghent belgium clothes dresses">50</td>
      <td headers="ghent belgium accessories bracelets">61</td>
      <td headers="ghent belgium accessories rings">15</td>
    </tr>
    <tr>
      <th id="brussels" headers="belgium">Brussels</th>
      <td headers="brussels belgium clothes trousers">51</td>
      <td headers="brussels belgium clothes skirts">27</td>
      <td headers="brussels belgium clothes dresses">38</td>
      <td headers="brussels belgium accessories bracelets">69</td>
      <td headers="brussels belgium accessories rings">28</td>
    </tr>
    <tr>
      <th rowspan="2" id="netherlands">The Netherlands</th>
      <th id="amsterdam" headers="netherlands">Amsterdam</th>
      <td headers="amsterdam netherlands clothes trousers">89</td>
      <td headers="amsterdam netherlands clothes skirts">34</td>
      <td headers="amsterdam netherlands clothes dresses">69</td>
      <td headers="amsterdam netherlands accessories bracelets">85</td>
      <td headers="amsterdam netherlands accessories rings">38</td>
    </tr>
    <tr>
      <th id="utrecht" headers="netherlands">Utrecht</th>
      <td headers="utrecht netherlands clothes trousers">80</td>
      <td headers="utrecht netherlands clothes skirts">12</td>
      <td headers="utrecht netherlands clothes dresses">43</td>
      <td headers="utrecht netherlands accessories bracelets">36</td>
      <td headers="utrecht netherlands accessories rings">19</td>
    </tr>
  </tbody>
</table>
```

Sie können auch die fertigen Beispiele auf GitHub finden:

- Für das erste Beispiel, siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel, siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar weitere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie für den Moment wissen müssen. Als nächstes können Sie sich mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
