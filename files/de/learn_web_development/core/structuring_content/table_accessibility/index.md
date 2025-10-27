---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir eines der wichtigsten Merkmale kennengelernt, um HTML-Tabellen für sehbehinderte Nutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale zur Barrierefreiheit von HTML-Tabellen, wie z.B. Beschriftungen/Zusammenfassungen, das Gruppieren von Zeilen in Tabellenkopf-, Körper- und Fußbereiche sowie das Festlegen des Geltungsbereichs von Spalten und Zeilen.

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
          <li>Verständnis der mit Tabellen verbundenen Barrierefreiheitsprobleme.</li>
          <li>Hinzufügen von Beschriftungen zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußbereich.</li>
          <li>Weitere Assoziationen zwischen Überschriften und Zellen schaffen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Nutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugang zu Daten zu verschaffen und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel benötigt man nur einen kurzen Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Verkaufte Artikel August 2016</caption>
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

Aber was ist, wenn Sie diese visuellen Assoziationen nicht machen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen nutzen häufig einen {{Glossary("Screen_reader", "Screenreader")}}, der ihnen Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie normalen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine Herausforderung darstellen. Dennoch können wir mit der richtigen Auszeichnung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Gemäß [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben rund 253 Millionen Menschen weltweit mit einer Sehbehinderung.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, herzustellen. Die Kombination von Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Screenreader-Nutzer die Tabelle ähnlich interpretieren können wie ein sehender Nutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung hinzufügen, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements platzieren. Sie sollten es direkt unterhalb des öffnenden `<table>`-Tags platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel ersehen können, soll die Beschriftung eine Beschreibung der Tabelleninhalte enthalten. Dies ist nützlich für alle Leser, die sich schnell einen Überblick verschaffen möchten, ob die Tabelle für sie nützlich ist, während sie die Seite durchsehen, aber besonders für blinde Nutzer. Statt dass ein Screenreader die Inhalte vieler Zellen vorliest, nur um zu erfahren, worum es in der Tabelle geht, kann sich der Nutzer auf die Beschriftung verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte oder nicht.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das Attribut [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch, stattdessen das `<caption>`-Element zu verwenden, da `summary` veraltet ist und von sehenden Nutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Übung zur Tabellenbeschriftung

An diesem Punkt empfehlen wir Ihnen, das Hinzufügen einer Beschriftung zu einer HTML-Tabelle zu üben, indem Sie den Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Erstellen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine geeignete Beschriftung zur Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte in etwa so aussehen:

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

Sie finden diesen Code auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([siehe ihn auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Strukturhinzufügen mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es nützlich, ihnen eine klarere Struktur zu geben. Eine deutliche Möglichkeit, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopfbereich, einen Hauptteil und einen Fußbereich für die Tabelle zu kennzeichnen.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Screenreader-Nutzer. Sie führen auch nicht zu einer visuellen Verbesserung von selbst, sind jedoch sehr nützlich, um Styling- und Layoutverbesserungen über CSS anzuwenden, die die Barrierefreiheit verbessern können. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und die Inhalte durch Scrollen nach oben und unten verfügbar machen lassen.

Sie sollten in folgender Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopfbereich ist — dies ist in der Regel die erste Zeile mit den Spaltenüberschriften, aber dies ist nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil der Tabelleninhalte, der nicht der Tabellenkopf oder -fuß ist, umschließen und sollte nach dem `<thead>` folgen.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fußbereich ist — dies könnte beispielsweise eine letzte Zeile mit in den vorherigen Zeilen summierten Elementen sein. Das `<tfoot>` sollte nach dem `<tbody>` folgen.

> [!NOTE]
> `<tbody>` wird immer implizit in jede Tabelle aufgenommen, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und schauen Sie sich den HTML-Code in Ihren [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser diesen Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und Ihr Styling gibt.

### Strukturhinzufügen zu einer Ausgabenaufzeichnungstabelle

Lassen Sie uns diese neuen Elemente in die Praxis umsetzen.

1. Erstellen Sie zunächst eine neue HTML-Datei mit dem Namen `spending-record.html` und fügen Sie folgenden HTML-Code in den `<body>` ein:

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

2. Erstellen Sie dann eine CSS-Datei mit dem Namen `minimal-table.css` im selben Verzeichnis wie Ihre HTML-Datei und füllen Sie sie mit folgendem Inhalt:

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

3. Fügen Sie ein `<link>`-Element in Ihren HTML-`<head>` ein, um das CSS auf das HTML anzuwenden (siehe [Anwenden von CSS und JavaScript auf HTML](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) für Hilfe dazu).

4. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest der Inhalte in ein `<tbody>`-Element zu setzen.
5. Fügen Sie dann ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, damit die tatsächliche Zahl am Ende der "Kosten"-Spalte erscheint.
6. Fügen Sie Ihrem CSS einige einfache zusätzliche Stilanpassungen hinzu, um Ihnen eine Idee zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Fügen Sie dies Ihrem CSS hinzu:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell über das Styling von Tabellen enthält).

7. Speichern und aktualisieren Sie die Ansicht und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um denselben Stil anzuwenden.

Das fertige Beispiel sollte so aussehen:

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte in etwa so aussehen:

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

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau anzugeben, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der sie sich befindet, oder für die Spalte? Schauen wir uns das Beispiel der Ausgabenaufzeichnung von vorhin an, könnten Sie die Spaltenüberschriften unmissverständlich so als Spaltenüberschriften definieren:

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

Und jede Zeile könnte eine als Zeilenüberschrift definierte Kopfzeile haben (wenn wir zusätzlich zu den Spaltenüberschriften auch Zeilenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine so strukturierte Auszeichnung und ermöglichen es ihren Nutzern, z.B. die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat noch zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die Tabelle "Verkaufte Artikel August 2016" am Anfang dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, jedoch ist "Kleidung" eine Überschrift, die oben steht und die anderen drei Unterüberschriften definiert. Daher sollte "Kleidung" ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten sollten:

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

Dasselbe gilt für Überschriften für mehrere gruppierte Zeilen. Schauen Sie sich die Tabelle "Verkaufte Artikel August 2016" erneut an und konzentrieren Sie sich diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Ihnen wird auffallen, dass die Überschrift "Niederlande", ebenfalls als `<th>`-Element ausgezeichnet, beide Zeilen überspannt, da sie die Überschrift für die anderen beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` in dieser Kopfzelle angegeben werden, um Screenreadern zu helfen, die richtigen Assoziationen zu erstellen:

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

## Die Funktionen der Attribute `id` und `headers`

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um Assoziationen zwischen Datenzellen und Kopfzellen zu erstellen.

Ein `<th>`-Element kann eine Überschrift sowohl für eine Datenzelle (`<td>`) als auch, in komplizierteren Tabellen, für eine andere Kopfzelle (`<th>`) bieten. Dies ermöglicht es, geschichtete oder gruppierte Überschriften zu erstellen, bei denen eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut dient dazu, eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Kopfzellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}} an; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle verbunden ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich einem Tabellenkalkulationsblatt. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Schauen wir uns einen Teil des Beispiels "Verkaufte Artikel August 2016" an, um zu sehen, wie die Attribute `id` und `headers` verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, also einer Kopfzelle mit einer anderen Überschrift darüber. Der Wert ist die `id` der Überschrift auf höchster Ebene. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste hinzu. Sie können vorgehen, wie Sie es in einem Tabellenkalkulationsblatt tun würden: Finden Sie die Datenzelle, suchen Sie dann die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt zwar keine Rolle, aber es ist hilfreicher für die Organisation und Lesbarkeit des Codes, sie konsistent zu halten.

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

- Das `<th>`-Element für "Belgien" verwendet `rowspan="2"`, um sowohl "Antwerpen" als auch "Gent" zu umfassen.
- Die Stadt-Überschriftenzellen ("Antwerpen" und "Gent") verwenden das `headers`-Attribut, um "belgium" zu referenzieren und zu zeigen, dass sie zur Gruppe Belgien gehören.
- Jedes `<td>`-Element enthält ein `headers`-Attribut für das Land (`belgium`), die Stadt (`antwerp` oder `ghent`), die Gruppe (`clothes`) und das spezifische Kleidungsstück (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode schafft sehr präzise Assoziationen zwischen Überschriften und Datenzellen, erfordert jedoch **viel** mehr Auszeichnung und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Mit `scope` und `headers` experimentieren

In dieser letzten Übung möchten wir Sie dazu auffordern, `scope` und `headers` an der oben eingeführten Beispiel-Tabelle auszuprobieren.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Startdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle dieses Mal zugänglicher, indem Sie genaue und explizite Assoziationen mit den Attributen `id` und `headers` erstellen.

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

Das zweite sollte so aussehen:

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

Sie können die fertigen Beispiele auch auf GitHub finden:

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([siehe dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([siehe dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch einige weitere Dinge, die Sie über Tabellen in HTML lernen könnten, aber dies ist alles, was Sie für den Moment wissen müssen. Als Nächstes können Sie sich mit unserer Herausforderung zu HTML-Tabellen testen. Viel Spaß dabei!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
