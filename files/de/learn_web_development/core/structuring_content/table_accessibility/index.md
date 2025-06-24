---
title: HTML-Tabellenzugänglichkeit
short-title: Table accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 2acf41ff2b7c6b89cf072ecf8195c9a354a76570
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale der Barrierefreiheit von HTML-Tabellen, wie Überschriften/Beschreibungen, das Gruppieren Ihrer Zeilen in Tabellenkopf, -körper und -fußzeilen sowie das Zuordnen von Spalten und Zeilen.

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
          <li>Ein Verständnis der Zugänglichkeitsprobleme im Zusammenhang mit Tabellen.</li>
          <li>Hinzufügen von Überschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf-, Körper- und Fußzeile.</li>
          <li>Erstellen weiterer Assoziationen zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz zusammenfassen, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns zu ermöglichen, verschiedene Werte abzurufen. Zum Beispiel benötigt es nur einen kurzen Blick auf die folgende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine solche Tabelle lesen? Sehbehinderte Menschen nutzen oft einen {{Glossary("Screen_reader", "Screenreader")}}, der Informationen auf Webseiten vorliest. Dies ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann eine Herausforderung für eine blinde Person sein. Dennoch können wir mit der richtigen Auszeichnung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten aus 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben rund 253 Millionen Menschen mit Sehbehinderung.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den zugehörigen Zellen herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Screenreader-Benutzer die Tabelle auf ähnliche Weise interpretieren können wie sehende Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Überschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Überschrift geben, indem Sie sie in ein {{htmlelement("caption")}}-Element packen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter das öffnende `<table>`-Tag setzen.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel ableiten können, soll die Überschrift eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die sich schnell einen Überblick darüber verschaffen möchten, ob die Tabelle für sie nützlich ist, insbesondere aber für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorließen muss, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Überschrift verlassen und dann entscheiden, ob er die Tabelle im Detail lesen möchte.

Eine Überschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann auch auf das `<table>`-Element angewendet werden, um eine Beschreibung bereitzustellen — dies wird auch von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es wird nicht auf der Seite angezeigt).

### Übung zur Tabellenüberschrift

An diesem Punkt möchten wir, dass Sie versuchen, einer HTML-Tabelle eine Überschrift hinzuzufügen, und zwar anhand des Stundenplans einer Sprachlehrerin.

1. Erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) Datei.
2. Fügen Sie eine passende Überschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

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

Sie können diesen Code auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) finden ([sehen Sie auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Hinzufügen von Struktur mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Ein klarer Weg, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Screenreader-Benutzer. Sie führen selbst zu keiner visuellen Verbesserung, sind jedoch sehr nützlich, um Stil- und Layoutverbesserungen über CSS anzuwenden, was die Zugänglichkeit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und die Fußzeile auf jeder Seite des Ausdrucks wiederholen und den Tabellenkörper auf einer einzigen Seite anzeigen lassen, wobei der Inhalt durch Scrollen auf und ab verfügbar ist.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umfassen, der der Kopf ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber das ist nicht notwendigerweise immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen erscheinen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umfassen, der nicht zum Tabellenkopf oder zur Fußzeile gehört.
- Das `<tfoot>`-Element muss den Teil der Tabelle umfassen, der die Fußzeile ist — dies könnte eine Abschlusszeile mit den Summen der vorherigen Zeilen sein, zum Beispiel.

> [!NOTE] > `<tbody>` ist in jeder Tabelle immer enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, die `<tbody>` nicht enthalten, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, da es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und das Styling gibt.

### Hinzufügen von Struktur zu einer Ausgabenaufzeichnungstabelle

Lassen Sie uns Sie dazu bringen, diese neuen Elemente in die Tat umzusetzen.

1. Erstellen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in einem `<thead>`-Element, die "SUM"-Zeile in einem `<tfoot>`-Element und den Rest des Inhalts in einem `<tbody>`-Element zu platzieren.
3. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl am unteren Rand der "Cost"-Spalte erscheint.
4. Fügen wir zusätzlich etwas einfaches Styling zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Fügen Sie im Kopf Ihres HTML-Dokuments, innerhalb des leeren {{htmlelement("style")}}-Elements, die folgenden Zeilen CSS-Code hinzu:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell über [Tabellen stilisieren](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

5. Speichern Sie und aktualisieren Sie, und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

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

Sie können den vollständigen Code auf GitHub unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden ([sehen Sie auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

</details>

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann zum `<th>`-Element hinzugefügt werden, um Screenreadern genau mitzuteilen, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der es sich befindet, oder für die Spalte, zum Beispiel? Wenn man sich unser vorheriges Beispiel der Ausgabenaufzeichnung noch einmal ansieht, könnte man die Spaltenüberschriften eindeutig als Spaltenüberschriften wie folgt definieren:

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

Und jede Zeile könnte eine Überschrift wie folgt definiert haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine solche strukturierte Markup und ermöglichen es ihren Benutzern, zum Beispiel die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen sitzen. Wenn Sie sich die "Verkaufte Artikel im August 2016"-Tabelle am Anfang dieses Abschnitts des Artikels noch einmal ansehen, werden Sie feststellen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" sitzt. Alle diese Zellen sollten als Überschriften (`<th>`) gekennzeichnet werden, aber "Kleidung" ist eine Überschrift, die über den anderen drei Unterüberschriften sitzt und sie definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten würden:

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

Dasselbe gilt für Überschriften für mehrere gruppierte Zeilen. Schauen Sie sich die "Verkaufte Artikel im August 2016"-Tabelle an und konzentrieren Sie sich auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Die Niederlande", ebenfalls als `<th>`-Element gekennzeichnet, beide Zeilen überspannt, da sie die Überschrift für die beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Kopfzelle angegeben werden, um Screenreader bei der Erstellung der richtigen Assoziationen zu unterstützen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute, um Assoziationen zwischen Datenzellen und Überschriftenzellen zu erstellen.

Ein `<th>`-Element kann eine Überschrift entweder für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Kopfzeile (`<th>`) bereitstellen. Dadurch können Sie geschachtelte oder gruppierte Überschriften erstellen, bei denen eine Kopfzeile mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle (`<td>` oder `<th>`) mit einer oder mehreren Überschriftenzellen zu verknüpfen. Es akzeptiert eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}}; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss der eindeutigen `id` eines `<th>`-Elements entsprechen, mit dem die Zelle verknüpft ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich wie in einer Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Schauen wir uns einen Teil des Beispiels "Verkaufte Artikel im August 2016" an, um zu sehen, wie die Verwendung der `id`- und `headers`-Attribute funktioniert:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, also einer Kopfzeile, die eine andere Überschrift über sich hat. Der Wert ist die `id` der hochrangigen Überschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste an. Sie können vorgehen, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle, suchen Sie dann die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber das Beibehalten einer konsistenten Reihenfolge hilft dabei, den Code organisiert und lesbar zu halten.

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

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"`, um sowohl `"Antwerp"` als auch `"Ghent"` zu umfassen.
- Die Stadtüberschriftzellen (`"Antwerp"` und `"Ghent"`) verwenden das `headers`-Attribut, um auf `"belgium"` zu verweisen und zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jedes `<td>` enthält ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerp` oder `ghent`), Gruppe (`clothes`) und den spezifischen Bekleidungsartikel (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Kopfzeilen und Datenzellen, verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Die `scope`-Methode ist in der Regel für die meisten Tabellen ausreichend.

## Spielen mit Scope und Headers

Für diese letzte Übung lassen wir Sie die Verwendung von Scope und Headers an der Beispieltabelle ausprobieren, die wir oben eingeführt haben.

1. Erstellen Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, damit diese Tabelle zugänglicher wird.
3. Erstellen Sie eine weitere Kopie der Starterdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle dieses Mal zugänglicher, indem Sie genaue und explizite Zuordnungen mit `id`- und `headers`-Attributen erstellen.

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

Sie finden die fertigen Beispiele auch auf GitHub:

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich mit unserer HTML-Tabellen-Herausforderung testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
