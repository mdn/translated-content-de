---
title: HTML-Tabellenzugänglichkeit
short-title: Table accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eine der wichtigsten Funktionen angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen – das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Funktionen zur Zugänglichkeit von HTML-Tabellen wie Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, -körper- und -fußbereiche sowie das Festlegen von Spalten- und Zeilenbereichen.

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
          <li>Ein Verständnis der mit Tabellen verbundenen Zugänglichkeitsprobleme.</li>
          <li>Hinzufügen von Bildunterschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußbereich.</li>
          <li>Erstellen weiterer Verbindungen zwischen Headers und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen nutzen. Eine Tabelle kann ein nützliches Werkzeug sein, das uns schnellen Zugriff auf Daten ermöglicht und es uns erlaubt, verschiedene Werte nachzuschlagen. Zum Beispiel braucht es nur einen kurzen Blick auf die folgende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die oben beschriebene lesen? Sehbehinderte Menschen nutzen häufig einen {{Glossary("Screen_reader", "Screenreader")}}, der Informationen auf Webseiten vorliest. Dies ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine ziemliche Herausforderung sein. Trotzdem können wir mit der richtigen Auszeichnung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit einer Sehbehinderung.

### Verwenden von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und nutzen sie, um programmatische Assoziationen zwischen diesen Überschriften und den dazugehörigen Zellen herzustellen. Die Kombination von Spalten- und Zeilenüberschriften hilft dabei, die Daten in jeder Zelle zu identifizieren und zu interpretieren, sodass Screenreader-Nutzer die Tabelle ähnlich wie ein sehender Benutzer interpretieren können.

Wir haben bereits in unserem vorherigen Artikel Überschriften behandelt – siehe [Hinzufügen von Headers mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Bildunterschrift geben, indem Sie sie in ein {{htmlelement("caption")}}-Element einfügen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel ableiten können, sollte die Bildunterschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell entscheiden möchten, ob die Tabelle für sie nützlich ist, insbesondere für blinde Benutzer. Anstatt einen Screenreader zahlreiche Zelleninhalte vorlesen zu lassen, um zu verstehen, worum es in der Tabelle geht, kann ein Benutzer auf eine Bildunterschrift zurückgreifen und dann entscheiden, ob er die Tabelle genauer lesen möchte.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`]-Attribut(/de/docs/Web/HTML/Reference/Elements/table#summary) kann ebenfalls im `<table>`-Element verwendet werden, um eine Beschreibung zu liefern — dies wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Übung zur Tabellenbildunterschrift

An diesem Punkt werden wir Ihnen eine Übung geben, bei der Sie versuchen, einer HTML-Tabelle eine Bildunterschrift hinzuzufügen, anhand einer Beispiel-Lektionsplanung eines Sprachlehrers.

1. Machen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie eine geeignete Bildunterschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html-nolint
<table>
  <caption>
    Florence's weekly lesson timetable
  </caption>
  <colgroup>
    <col span="2" />
    <col style="background-color:#97DB9A;" />
    <col style="width:42px;" />
    <col style="background-color:#97DB9A;" />
    <col style="background-color:#DCC48E; border:4px solid #C1437A;" />
    <col span="2" style="width:42px;" />
  </colgroup>
  <tr>

    <!-- Rest of code omitted for brevity -->

</table>
```

Sie können diesen Code auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Struktur hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, mit denen Sie einen Kopf-, Körper- und Fußbereich für die Tabelle markieren können.

Diese Elemente machen die Tabelle nicht zwingend zugänglicher für Screenreader-Nutzer. Sie führen von sich aus zu keiner visuellen Verbesserung, sind jedoch sehr nützlich für die Anwendung von Stil- und Layoutverbesserungen über CSS, was die Zugänglichkeit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen und den Tabellenkörper auf einer Seite anzeigen lassen, sodass die Inhalte durch Scrollen nach oben und unten verfügbar sind.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist in der Regel die erste Zeile, die die Spaltenüberschriften enthält, jedoch nicht immer. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Kopf oder der Fuß der Tabelle ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile mit Summen der vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` ist in jeder Tabelle enthalten, implizit wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -gestaltung gibt.

### Struktur zu einer Ausgabenaufzeichnungstabelle hinzufügen

Lassen Sie uns diese neuen Elemente in Aktion bringen.

1. Machen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfreihenfolge innerhalb eines `<thead>`-Elements, die "SUM"-Reihenkennung innerhalb eines `<tfoot>`-Elements und den restlichen Inhalt innerhalb eines `<tbody>`-Elements einzufügen.
3. Fügen Sie als Nächstes ein [`colspan`]-Attribut(/de/docs/Web/HTML/Reference/Elements/td#colspan) hinzu, damit die "SUM"-Zelle sich über die ersten vier Spalten erstreckt, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
4. Fügen Sie einige einfache zusätzliche Stile zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für das Anwenden von CSS sind. Im Kopf Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie diesen Zeilen CSS-Code in dieses Element ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

   > [!NOTE]
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit den [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), die einen speziellen Artikel über [Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) beinhalten).

5. Speichern und aktualisieren Sie, und betrachten Sie das Ergebnis. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um die gleiche Gestaltung anzuwenden.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
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
  <tfoot>
    <tr>
      <td colspan="4">SUM</td>
      <td>118</td>
    </tr>
  </tfoot>
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
</table>
```

Sie können den vollständigen Code auf GitHub unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

</details>

## Das `scope`-Attribut

Das [`scope`]-Attribut(/de/docs/Web/HTML/Reference/Elements/th#scope) kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau mitzuteilen, für welche Zellen der Header ein Header ist — ist es ein Header für die Zeile, in der es sich befindet, oder für die Spalte, zum Beispiel? Wenn wir auf unser Ausgabenaufzeichnungsbeispiel von früher zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, so:

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

Und jede Zeile könnte einen Header wie diesen definiert haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzugefügt hätten):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader werden diese Markup-Struktur erkennen und es ihren Benutzern ermöglichen, beispielsweise die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen sitzen. Wenn Sie auf die "Verkaufte Artikel August 2016"-Tabelle am Anfang dieses Artikels zurückblicken, werden Sie sehen, dass die "Kleidung"-Zelle über den "Hosen", "Röcken" und "Kleidern"-Zellen sitzt. Alle diese Zellen sollten als Headers (`<th>`) markiert werden, aber "Kleidung" ist ein Header, der über den anderen drei Unterüberschriften sitzt. "Kleidung" sollte daher ein `scope="colgroup"`-Attribut erhalten, während die anderen ein `scope="col"`-Attribut erhalten würden:

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

Das Gleiche gilt für Header von mehreren gruppierten Zeilen. Sehen Sie sich noch einmal die "Verkaufte Artikel August 2016"-Tabelle an und konzentrieren Sie sich diesmal auf die Zeilen mit den "Amsterdam"- und "Utrecht"-Headers (`<th>`). Sie werden bemerken, dass der "Die Niederlande"-Header, ebenfalls als `<th>`-Element markiert, beide Zeilen überspannt, da er die Überschrift für die anderen beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Headerzelle angegeben werden, um Screenreader dabei zu helfen, die richtigen Assoziationen herzustellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung von [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attributen, um Assoziationen zwischen Datenzellen und Headerzellen zu erstellen.

Ein `<th>`-Element kann entweder eine Überschrift für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Headerzelle (`<th>`) bereitstellen. Dies ermöglicht es Ihnen, geschichtete oder gruppierte Überschriften zu erstellen, bei denen eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Headerzellen zu verknüpfen. Es akzeptiert eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}}; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle verknüpft ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Headers für die Spalte und die Zeile, zu denen sie gehört, ähnlich wie bei einer Tabelle in einer Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Lassen Sie uns einen Teil des "Verkaufte Artikel August 2016"-Beispiels betrachten, um zu sehen, wie die `id`- und `headers`-Attribute verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Headerzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, also einer Headerzelle mit einer weiteren Überschrift darüber. Der Wert ist die `id` der hochwertigen Überschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugeordneten `<th>`-Elemente als durch Leerzeichen getrennte Liste an. Sie können fortfahren, wie Sie es in einer Tabelle in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle, dann finden Sie die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s ist nicht wichtig, aber eine konsistente Reihenfolge hilft dabei, sie organisiert zu halten und die Lesbarkeit des Codes zu verbessern.

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

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"`, um sowohl `"Antwerpen"` als auch `"Gent"` zu umfassen.
- Die Städte-Headerzellen (`"Antwerpen"` und `"Gent"`) nutzen das `headers`-Attribut, um auf `"belgium"` zu verweisen und zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jedes `<td>` enthält ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerpen` oder `gent`), Gruppe (`clothes`) und den spezifischen Kleidungsartikel (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erstellt sehr genaue Assoziationen zwischen Headers und Datenzellen, erfordert jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Spielen mit Scope und Headers

Für diese letzte Übung lassen wir Sie versuchen, `scope` und `headers` auf der Beispieltabelle zu verwenden, die wir oben eingeführt haben.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Ausgangsdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle diesmal zugänglicher, indem Sie präzise und explizite Assoziationen mithilfe der `id`- und `headers`-Attribute erstellen.

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
      <th scope="row">Gent</th>
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
      <th id="gent" headers="belgium">Gent</th>
      <td headers="gent belgium clothes trousers">46</td>
      <td headers="gent belgium clothes skirts">18</td>
      <td headers="gent belgium clothes dresses">50</td>
      <td headers="gent belgium accessories bracelets">61</td>
      <td headers="gent belgium accessories rings">15</td>
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

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie auch das Live-Beispiel](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie auch das Live-Beispiel](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als nächstes können Sie sich selbst mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
