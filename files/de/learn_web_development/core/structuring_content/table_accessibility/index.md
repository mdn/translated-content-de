---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir eines der wichtigsten Merkmale betrachtet, um HTML-Tabellen für sehbehinderte Nutzer zugänglich zu machen: das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale zur Barrierefreiheit von HTML-Tabellen, wie z.B. Überschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, Körper- und Fußbereich sowie das Abgrenzen von Spalten und Zeilen.

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
          <li>Ein Verständnis der Barrierefreiheitsprobleme, die mit Tabellen verbunden sind.</li>
          <li>Hinzufügen von Überschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußbereich.</li>
          <li>Erstellung weiterer Assoziationen zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Nutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen nutzen. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugang zu Daten zu verschaffen und es uns zu ermöglichen, verschiedene Werte nachzuschlagen. Zum Beispiel genügt ein kurzer Blick auf die nachstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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
      <th rowspan="2" scope="rowgroup">Die Niederlande</th>
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

Aber was ist, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden oft einen {{Glossary("Screen_reader", "Screenreader")}}, der ihnen Informationen auf Webseiten vorliest. Beim Lesen von einfachem Text stellt dies kein Problem dar, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung darstellen. Dennoch können wir mit der richtigen Markierung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben weltweit etwa 253 Millionen Menschen mit einer Sehminderung.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und nutzen sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, zu erstellen. Die Kombination aus Spalten- und Zeilenüberschriften ermöglicht es, die Daten in jeder Zelle zu identifizieren und zu interpretieren, damit Screenreader-Nutzer die Tabelle ähnlich wie sehende Nutzer wahrnehmen können.

Wir haben in unserem vorherigen Artikel bereits Überschriften behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Überschrift geben, indem Sie sie in ein {{htmlelement("caption")}}-Element und dieses wiederum in das {{htmlelement("table")}}-Element einfügen. Die Überschrift sollte direkt unter dem öffnenden `<table>`-Tag platziert werden.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>
  <!-- … -->
</table>
```

Wie Sie aus dem kurzen Beispiel oben ersehen können, soll die Überschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell erfassen möchten, ob die Tabelle für sie von Nutzen ist, besonders jedoch für blinde Nutzer. Anstatt dass ein Screenreader die Inhalte vieler Zellen vorlesen muss, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Nutzer auf eine Überschrift verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte.

Eine Überschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das Attribut [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) kann ebenfalls auf dem `<table>`-Element verwendet werden, um eine Beschreibung anzugeben — diese wird ebenfalls von Screenreadern vorgelesen. Wir würden jedoch empfehlen, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und nicht von sehenden Nutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Übung zur Tabellenüberschrift

An dieser Stelle möchten wir Sie dazu bringen, das Hinzufügen einer Überschrift zu einer HTML-Tabelle auszuprobieren, mit dem Stundenplan, den Sie im vorherigen Artikel kennengelernt haben.

1. Kopieren Sie den ersten HTML-Block im Abschnitt [Gruppieren von Spalten mit `<colgroup>` und `<col>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#grouping_columns_with_colgroup_and_col) in eine HTML-Datei auf Ihrem Computer oder einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSBin](https://jsbin.com/).
2. Fügen Sie der Tabelle eine passende Überschrift hinzu.
3. Speichern Sie Ihren Code und sehen Sie nach, wie es aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<table>
  <caption>
    St. Winnifred's weekly language lesson timetable
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>

  <!-- Rest of code omitted for brevity -->
</table>
```

</details>

## Strukturierung mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es sinnvoll, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu erreichen, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, mit denen Sie einen Kopf-, Körper- und Fußbereich für die Tabelle markieren können.

Diese Elemente machen die Tabelle nicht unbedingt für Screenreader-Nutzer zugänglicher. Sie führen selbst zu keiner visuellen Verbesserung, sind jedoch sehr nützlich, um durch CSS Stil- und Layout-Verbesserungen anzuwenden, was die Barrierefreiheit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzelnen Seite anzeigen und den Inhalt durch Hoch- und Herunterscrollen verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist in der Regel die erste Zeile mit den Spaltenüberschriften, aber das muss nicht zwingend der Fall sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter sitzen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist und sollte nach dem `<thead>` kommen.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte eine letzte Zeile mit Summen der vorherigen Zeilen sein, beispielsweise. Das `<tfoot>` sollte nach dem `<tbody>` kommen.

> [!NOTE]
> `<tbody>` wird immer implizit in jede Tabelle eingefügt, wenn Sie es nicht in Ihrem Code spezifizieren. Um dies zu überprüfen, öffnen Sie ein vorheriges Beispiel, das kein `<tbody>` enthält, und schauen Sie sich den HTML-Code in Ihren [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — es gibt Ihnen die Kontrolle über die Struktur und das Styling Ihrer Tabelle.

### Hinzufügen von Struktur zu einer Tabelleneintragstabelle

Lassen Sie uns diese neuen Elemente in die Tat umsetzen.

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

2. Erstellen Sie als nächstes eine CSS-Datei namens `minimal-table.css` im selben Verzeichnis wie Ihre HTML-Datei und füllen Sie sie mit folgendem Inhalt:

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

3. Fügen Sie in Ihr HTML-`<head>`-Element ein `<link>`-Element ein, um das CSS auf das HTML anzuwenden (siehe [Anwenden von CSS und JavaScript auf HTML](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) für Hilfe dazu).

4. Versuchen Sie, die offensichtliche Kopfzeilenreihe in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den restlichen Inhalt in ein `<tbody>`-Element einzufügen.
5. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, damit die "SUM"-Zelle über die ersten vier Spalten reicht, sodass die tatsächliche Nummer am unteren Ende der "Kosten"-Spalte erscheint.
6. Fügen Sie Ihrem CSS eine einfache zusätzliche Stildefinition für die Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Fügen Sie Folgendes zu Ihrer CSS-Datei hinzu:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), welches einen Artikel speziell über [das Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

7. Speichern und aktualisieren Sie die Seite und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

Das fertige Beispiel sollte folgendermaßen aussehen:

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

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

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen der Header ein Header ist — handelt es sich beispielsweise um einen Header für die Zeile, in der er sich befindet, oder für die Spalte? Wenn wir zu unserem früheren Beispiel der Tabelleneintragstabelle zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren:

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

Und jede Zeile könnte einen definierten Header haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzugefügt haben):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine solche Markierung und ermöglichen ihren Nutzern, die gesamte Spalte oder Zeile auf einmal vorlesen zu lassen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen liegen. Wenn Sie sich die Tabelle "Verkaufte Artikel August 2016" am Anfang dieses Abschnitts des Artikels erneut ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die oben sitzt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Das gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Verkaufte Artikel August 2016", diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Die Niederlande", die ebenfalls als `<th>`-Element ausgezeichnet ist, sich über beide Zeilen erstreckt, die Überschrift für die beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Header-Zelle angegeben werden, um Screenreader bei der Erstellung der richtigen Assoziationen zu unterstützen:

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

## Die Attribute `id` und `headers`

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um Assoziationen zwischen Datenzellen und Kopfzellen zu erstellen.

Ein `<th>`-Element kann eine Überschrift entweder für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Kopfzelle (`<th>`) bereitstellen. Dadurch können Sie geschichtete oder gruppierte Überschriften erstellen, bei denen eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Kopfzellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}}; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle assoziiert ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich wie in einer Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Schauen wir uns einen Teil des Beispiels "Verkaufte Artikel August 2016" an, um zu sehen, wie die Attribute `id` und `headers` verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, das heißt, eine Kopfzelle mit einer weiteren Überschrift darüber, ein `headers`-Attribut hinzu. Der Wert ist die `id` der übergeordneten Überschrift. In unserem Beispiel ist das `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste hinzu. Sie können vorgehen, als würden Sie eine Tabellenkalkulation verwenden: Finden Sie die Datenzelle, dann die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber eine konsistente Reihenfolge hilft, den Code organisiert zu halten und die Lesbarkeit zu verbessern.

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

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"`, um sowohl `"Antwerpen"` als auch `"Gent"` abzudecken.
- Die Stadtkopfzellen (`"Antwerpen"` und `"Gent"`) verwenden das `headers`-Attribut, um auf `"belgien"` zu verweisen, um zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jeder `<td>` enthält ein `headers`-Attribut für das Land (`belgien`), die Stadt (`antwerpen` oder `gent`), die Gruppe (`kleidung`) und den spezifischen Kleidungseinzelartikel (`hosen`, `röcke` oder `kleider`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Kopf- und Datenzellen, aber sie benötigt **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel ausreichend für die meisten Tabellen.

## Arbeiten mit `scope` und `headers`

Für diese abschließende Übung möchten wir, dass Sie versuchen, `scope` und `headers` in der oben eingeführten Beispielstabelle zu verwenden.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Ausgangsdateien in einem anderen lokalen Verzeichnis
4. Machen Sie die Tabelle diesmal zugänglicher, indem Sie genaue und explizite Assoziationen mit den Attributen `id` und `headers` erstellen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das erste fertige HTML-Beispiel sollte ungefähr so aussehen:

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

Die fertigen Beispiele finden Sie auch auf GitHub:

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([siehe auch live dieses Beispiel](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([siehe auch live dieses Beispiel](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie jetzt wissen müssen. Als nächstes können Sie sich selbst mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
