---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 3f73b31adea45123c1ac8cc84d570fc472315b30
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale der Barrierefreiheit von HTML-Tabellen, wie z.B. Bildunterschriften/Zusammenfassungen, das Gruppieren von Zeilen in Tabellenkopf-, Haupt- und Fußbereiche sowie das Zuordnen von Spalten und Zeilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ein Verständnis der Barrierefreiheitsprobleme im Zusammenhang mit Tabellen.</li>
          <li>Hinzufügen von Bildunterschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf- und Fußzeilen sowie Hauptteil.</li>
          <li>Schaffung weiterer Assoziationen zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um schnellen Zugriff auf Daten zu erhalten und verschiedene Werte nachschlagen zu können. Zum Beispiel reicht ein kurzer Blick auf die unten stehende Tabelle aus, um herauszufinden, wie viele Ringe in Gent im August 2016 verkauft wurden. Um ihre Informationen zu verstehen, machen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften.

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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie oben lesen? Sehbehinderte Menschen nutzen oft einen {{Glossary("Screen_reader", "Screenreader")}}, der ihnen Informationen auf Webseiten vorliest. Das ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung sein. Nichtsdestotrotz können wir mit der richtigen Markierung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben weltweit etwa 253 Millionen Menschen mit Sehbehinderung.

### Verwenden von Spalten- und Zeilenüberschriften

Screenreader werden alle Überschriften identifizieren und diese verwenden, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen, die sie betreffen, herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Screenreader-Nutzer die Tabelle ähnlich wie ein sehender Benutzer interpretieren können.

Wir hatten Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Bildunterschrift geben, indem Sie sie in ein {{htmlelement("caption")}}-Element einfügen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter das öffnende `<table>`-Tag setzen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>
  <!-- … -->
</table>
```

Wie Sie aus dem kurzen obigen Beispiel ableiten können, soll die Bildunterschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell feststellen möchten, ob die Tabelle für sie von Nutzen ist, während sie die Seite durchsuchen, insbesondere für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorlesen muss, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Bildunterschrift verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (erscheint nicht auf der Seite).

### Übung: Bildunterschrift zur Tabelle hinzufügen

An diesem Punkt werden wir Sie dazu bringen, eine Bildunterschrift zu einer HTML-Tabelle hinzuzufügen, mit dem Schulstundenplan, den Sie im vorherigen Artikel kennengelernt haben.

1. Kopieren Sie den ersten HTML-Block im Abschnitt [Spalten gruppieren mit `<colgroup>` und `<col>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#grouping_columns_with_colgroup_and_col) in eine HTML-Datei auf Ihrem Computer oder in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSBin](https://jsbin.com/?html,output).
2. Fügen Sie der Tabelle eine geeignete Bildunterschrift hinzu.
3. Speichern Sie Ihren Code und sehen Sie sich an, wie er aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

## Struktur hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es sinnvoll, ihnen mehr Strukturdefinition zu geben. Ein klarer Weg, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopfbereich, Hauptteil und Fußbereich der Tabelle zu kennzeichnen.

Diese Elemente machen die Tabelle für Screenreader-Benutzer nicht unbedingt zugänglicher. Sie führen selbst nicht zu einer visuellen Verbesserung, sind jedoch sehr nützlich für das Anwenden von Stil- und Layout-Verbesserungen über CSS, die die Barrierefreiheit verbessern können. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopfbereich ist – das ist in der Regel die erste Zeile mit den Spaltenüberschriften, aber das muss nicht immer so sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist, und sollte nach dem `<thead>` kommen.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fußbereich ist – dies könnte zum Beispiel eine Schlusszeile mit addierten Elementen aus den vorherigen Zeilen sein. Das `<tfoot>` sollte nach dem `<tbody>` kommen.

> [!NOTE]
> `<tbody>` ist immer implizit in jeder Tabelle enthalten, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das kein `<tbody>` enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie mögen sich fragen, warum Sie es überhaupt einfügen sollten – Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -stile gibt.

### Struktur zu einer Datenschutztabelle hinzufügen

Lassen Sie uns dazu bringen, diese neuen Elemente in Aktion zu setzen.

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

2. Erstellen Sie als Nächstes eine CSS-Datei namens `minimal-table.css` im gleichen Verzeichnis wie Ihre HTML-Datei und füllen Sie sie mit dem folgenden Inhalt:

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

4. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
5. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu spannen, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
6. Fügen Sie Ihrem CSS einige einfache zusätzliche Stile hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Fügen Sie das Folgende zu Ihrer CSS-Datei hinzu:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchlaufen (beginnend mit [CSS Styling basics](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell über das Styling von Tabellen enthält).

7. Speichern und aktualisieren Sie die Seite und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um die gleichen Stile anzuwenden.

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

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Überschrift gilt – ist es eine Überschrift für die Zeile, in der es sich befindet, oder für die Spalte? Wenn wir auf unser Beispiel der Datenschutztabelle von früher zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, so:

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

Und jede Zeile könnte eine definierte Überschrift haben, so (wenn wir Zeilenüberschriften zusätzlich zu Spaltenüberschriften hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader werden eine solche strukturierte Markup erkennen und ihren Benutzern erlauben, beispielsweise eine ganze Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die "Verkaufte Artikel August 2016"-Tabelle am Anfang dieses Abschnitts des Artikels ansehen, werden Sie feststellen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften markiert werden (`<th>`), aber "Kleidung" ist eine Überschrift, die über der anderen sitzt und die drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Das Gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die "Verkaufte Artikel August 2016"-Tabelle, diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden bemerken, dass die Überschrift "Niederlande", ebenfalls als `<th>`-Element markiert, beide Zeilen überspannt und die Überschrift der beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf diesem Header-Element angegeben werden, um Screenreadern dabei zu helfen, die richtigen Assoziationen zu erstellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute, um Assoziationen zwischen Datenzellen und Kopfzeilen zu erstellen.

Ein `<th>`-Element kann entweder eine Überschrift für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Überschriftenzelle (`<th>`) bereitstellen. Dies ermöglicht es Ihnen, geschichtete oder gruppierte Überschriften zu erstellen, wobei eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Kopfzeilen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von [Strings](/de/docs/Glossary/String) an; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle verbunden ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich wie ein Tabellenkalkulationsblatt. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Werfen wir einen Blick auf einen Teil des "Verkaufte Artikel August 2016"-Beispiels, um zu sehen, wie man die `id`- und `headers`-Attribute verwendet:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzeilen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, d.h. eine Überschrift mit einer anderen Überschrift darüber. Der Wert ist die `id` der übergeordneten Überschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste an. Sie können so vorgehen, wie Sie es in einem Tabellenkalkulationsblatt tun würden: Finden Sie die Datenzelle, suchen Sie dann die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber eine konsistente Angabe hilft, organisiert zu bleiben und die Lesbarkeit des Codes zu verbessern.

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

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"`, um sowohl `"Antwerpen"` als auch `"Gent"` zu überspannen.
- Die Stadtüberschriften (`"Antwerpen"` und `"Gent"`) verwenden das `headers`-Attribut, um auf `"belgium"` zu verweisen und zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jedes `<td>` enthält ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerp` oder `ghent`), Gruppe (`clothes`) und das spezifische Kleidungsstück (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erzeugt sehr präzise Assoziationen zwischen Kopfzeilen und Datenzellen, verwendet aber **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Spielen mit `scope` und `headers`

Für diese letzte Übung werden wir Ihnen zeigen, wie Sie `scope` und `headers` in der Beispieltabelle verwenden können, die wir oben eingeführt haben.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Anfangsdateien in einem anderen lokalen Verzeichnis.
4. Dieses Mal machen Sie die Tabelle zugänglicher, indem Sie präzise und explizite Assoziationen mithilfe von `id`- und `headers`-Attributen erstellen.

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

Während das zweite Beispiel so aussehen sollte:

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

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich mit unserer Herausforderung zu HTML-Tabellen selbst testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
