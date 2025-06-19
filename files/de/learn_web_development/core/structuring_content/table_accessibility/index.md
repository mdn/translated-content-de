---
title: Zugänglichkeit von HTML-Tabellen
short-title: Table accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir eines der wichtigsten Merkmale zur Zugänglichkeit von HTML-Tabellen für sehbehinderte Benutzer betrachtet — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Funktionen der Zugänglichkeit von HTML-Tabellen, wie z. B. Bildunterschriften/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf-, Körper- und Fußbereiche sowie das Scopen von Spalten und Zeilen.

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
          <li>Hinzufügen von Bildunterschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fuß.</li>
          <li>Erstellen einer weiteren Zuordnung zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns zu ermöglichen, verschiedene Werte nachzuschlagen. Beispielsweise genügt ein kurzer Blick auf die Tabelle unten, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Verbindungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Verbindungen nicht herstellen können? Wie können Sie dann eine Tabelle wie die oben lesen? Sehbehinderte Menschen verwenden oft einen {{Glossary("Screen_reader", "Screenreader")}}, der die Informationen auf Webseiten für sie vorliest. Dies ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung darstellen. Nichtsdestotrotz können wir mit der richtigen Auszeichnung visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut Angaben der [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben weltweit rund 253 Millionen Menschen mit einer Sehbehinderung.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen, mit denen sie in Beziehung stehen, herzustellen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Nutzer von Screenreadern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt – siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Eine Bildunterschrift zu Ihrer Tabelle mit \<caption> hinzufügen

Sie können Ihrer Tabelle eine Bildunterschrift hinzufügen, indem Sie diese in ein {{htmlelement("caption")}}-Element einfügen und dieses im {{htmlelement("table")}}-Element verschachteln. Es sollte direkt unter dem öffnenden `<table>`-Tag platziert werden.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen obigen Beispiel ableiten können, ist die Bildunterschrift dazu gedacht, eine Beschreibung der Tabelleninhalte zu enthalten. Dies ist nützlich für alle Leser, die sich schnell einen Überblick verschaffen möchten, ob die Tabelle für sie nützlich ist, wenn sie die Seite durchblättern, insbesondere jedoch für blinde Benutzer. Statt dass ein Screenreader die Inhalte vieler Zellen vorlesen muss, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Bildunterschrift verlassen und dann entscheiden, ob er die Tabelle genauer lesen möchte.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann auch im `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — es wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Praxis zu Tabellenbeschriftungen

An diesem Punkt werden wir Sie dazu bringen, das Hinzufügen einer Beschriftung zu einer HTML-Tabelle auszuprobieren, indem wir den Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Machen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie eine geeignete Bildunterschrift für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

Den Code finden Sie auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([Siehe auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Hinzufügen von Struktur mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen in der Struktur etwas komplexer werden, ist es nützlich, ihnen eine strukturelle Definition zu geben. Ein klarer Weg, dies zu tun, ist die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle für Benutzer von Screenreadern nicht unbedingt zugänglicher. Sie führen selbst nicht zu einer visuellen Verbesserung, sind jedoch sehr nützlich, um Stil- und Layoutverbesserungen über CSS anzuwenden, was die Zugänglichkeit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen nach oben und unten verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist in der Regel die erste Zeile, die die Spaltenüberschriften enthält, aber dies muss nicht unbedingt immer der Fall sein. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter stehen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile mit summierten Elementen aus den vorhergehenden Zeilen sein.

> **Hinweis:** `<tbody>` ist in jeder Tabelle immer implizit enthalten, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und schauen Sie sich den HTML-Code in Ihren [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, da es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -gestaltung gibt.

### Strukturierung einer Ausgabenaufzeichnungstabelle

Lassen Sie uns, dass Sie diese neuen Elemente in Aktion setzen.

1. Machen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUMME"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUMME"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Zahl am unteren Rand der "Kosten"-Spalte erscheint.
4. Fügen Sie dem Tabelle einige einfache zusätzliche Stile hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Innerhalb des Kopfs Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden CSS-Codezeilen ein:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie lernen mehr darüber, wenn Sie unsere CSS-Module durchgehen (beginnend mit [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell zum [Stil von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

5. Speichern und aktualisieren Sie, und werfen Sie einen Blick auf das Ergebnis. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie deutlich kompliziertere Selektoren/Regeln erstellen, um das gleiche Styling anzuwenden.

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

Den vollständigen Code finden Sie auf GitHub unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) ([Siehe auch die Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

</details>

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — handelt es sich um eine Überschrift für die Zeile, in der sie sich befindet, oder die Spalte, zum Beispiel? Wenn wir auf unser ausgabenaufzeichnetes Beispiel von früher zurückblicken, könnten Sie die Spaltenüberschriften so als Spaltenüberschriften eindeutig definieren:

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

Und jede Zeile könnte eine definierte Überschrift haben, wie dies (wenn wir Zeilenüberschriften neben Spaltenüberschriften hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader werden eine so strukturierte Auszeichnung erkennen und ihren Benutzern beispielsweise ermöglichen, die gesamte Spalte oder Reihe auf einmal vorlesen zu lassen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die sich über mehrere Spalten oder Zeilen erstrecken. Wenn Sie sich die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Artikels ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" steht. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet sein, aber "Kleidung" ist eine Überschrift, die darüber sitzt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte also ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

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

Das Gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Verkaufte Artikel im August 2016", diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden bemerken, dass die Überschrift "Niederlande", ebenfalls als `<th>`-Element markiert, beide Zeilen spannt und die Überschrift für die beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Überschriftenzelle angegeben werden, um Screenreadern zu helfen, die richtigen Assoziationen zu schaffen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute, um Verbindungen zwischen Datenzellen und Überschriftenzellen zu erstellen.

Ein `<th>`-Element kann entweder eine Überschrift für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Überschriftenzelle (`<th>`) bereitstellen. Dadurch können Sie geschichtete oder gruppierte Überschriften erstellen, wobei eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Überschriftenzellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Zeichenfolgen")}} an; die Reihenfolge der Zeichenfolgen spielt keine Rolle. Jede Zeichenfolge muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle verbunden ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich wie eine Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Sehen wir uns einen Abschnitt des Beispiels "Verkaufte Artikel im August 2016" an, um zu verstehen, wie die Attribute `id` und `headers` verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, d.h. eine Überschrift mit einer anderen Überschrift darüber. Der Wert ist die `id` der übergeordneten Überschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und eine durch Leerzeichen getrennte Liste der `id`s der zugehörigen `<th>`-Elemente. Gehen Sie vor, wie Sie es in einer Tabellenkalkulation tun würden: Finden Sie die Datenzelle, dann lokalisieren Sie die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber sie konsistent zu halten, hilft, sie organisiert zu halten und verbessert die Lesbarkeit des Codes.

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

- Das `<th>` für `"Belgien"` verwendet `rowspan="2"`, um sich über `"Antwerpen"` und `"Gent"` zu erstrecken.
- Die Stadtüberschriftenzellen (`"Antwerpen"` und `"Gent"`) verwenden das `headers`-Attribut, um auf `"belgium"` zu verweisen und zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jede `<td>` beinhaltet ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerp` oder `ghent`), Gruppe (`clothes`) und das spezifische Kleidungsstück (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode schafft sehr präzise Verbindungen zwischen Überschriften und Datenzellen, sie verwendet jedoch **sehr viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

## Spielereien mit Scope und Headers

Für diese letzte Übung werden wir Sie dazu bringen, mit scope und headers auf der Beispielstabelle zu arbeiten, die wir oben eingeführt haben.

1. Erstellen Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Erstellen Sie eine weitere Kopie der Ausgangsdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle diesmal zugänglicher, indem Sie präzise und explizite Verbindungen mit den Attributen `id` und `headers` herstellen.

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

Die fertigen Beispiele finden Sie auch auf GitHub:

- Für das erste Beispiel siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([Siehe diese auch Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([Siehe diese auch Live-Version](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich mit unserer HTML-Tabellen-Herausforderung selbst testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
