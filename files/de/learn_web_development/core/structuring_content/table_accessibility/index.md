---
title: HTML-Tabellen-Barrierefreiheit
short-title: Barrierefreiheit bei Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: c37a7ff76e883b569c1cfbaec4f279f94c73dbc7
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und untersuchen weitere Funktionen zur Barrierefreiheit von HTML-Tabellen, wie z. B. Beschriftungen/Summen, das Gruppieren Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle sowie die Verwendung von Spalten- und Zeileneinschränkungen.

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
          <li>Bessere Strukturierung von Tabellen mit Kopf, Körper und Fuß.</li>
          <li>Erstellen weiterer Assoziationen zwischen Kopfzellen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz darauf eingehen, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugriff auf Daten zu ermöglichen und uns verschiedene Werte nachzuschlagen. So genügt beispielsweise ein kurzer Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe in Gent im August 2016 verkauft wurden. Um die Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Im August 2016 verkaufte Artikel</caption>
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

Aber was ist, wenn Sie diese visuellen Assoziationen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen verwenden häufig einen {{Glossary("Screen_reader", "Screenreader")}}, der die Informationen auf Webseiten für sie vorliest. Das ist kein Problem, wenn Sie nur einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung sein. Dennoch können wir mit der richtigen Markierung visuelle Assoziationen durch programmatische Assoziationen ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben etwa 253 Millionen Menschen mit Sehbehinderungen.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader identifizieren alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den zugehörigen Zellen zu erstellen. Die Kombination aus Spalten- und Zeilenüberschriften wird die Daten in jeder Zelle identifizieren und interpretieren, sodass Benutzer von Screenreadern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie sie in ein {{htmlelement("caption")}}-Element einschließen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Es sollte direkt unter dem öffnenden `<table>`-Tag platziert werden.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel schließen können, soll die Beschriftung eine Beschreibung der Tabelleninhalte enthalten. Dies ist nützlich für alle Leser, die gerne schnell herausfinden möchten, ob die Tabelle für sie nützlich ist, während sie die Seite scannen, insbesondere jedoch für blinde Benutzer. Anstatt einen Screenreader den Inhalt vieler Zellen vorlesen zu lassen, nur um herauszufinden, worum es in der Tabelle geht, kann der Benutzer sich auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle detaillierter lesen möchte oder nicht.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das Attribut [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) kann auch auf das `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird ebenfalls von Screenreadern vorgelesen. Wir würden jedoch empfehlen, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und von sehenden Benutzern nicht gelesen werden kann (es erscheint nicht auf der Seite).

### Übung zur Tabellenbeschriftung

An dieser Stelle möchten wir, dass Sie ausprobieren, wie Sie eine Beschriftung zu einer HTML-Tabelle hinzufügen, als Beispiel verwenden wir den Stundenplan eines Sprachlehrers.

1. Erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) Datei.
2. Fügen Sie eine geeignete Beschriftung für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

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

Sie können diesen Code auf GitHub unter [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

</details>

## Struktur hinzufügen mit \<thead>, \<tbody>, und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es sinnvoll, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, mit denen Sie einen Kopf-, Körper- und Fußbereich für die Tabelle markieren können.

Diese Elemente machen die Tabelle für Benutzer von Screenreadern nicht unbedingt zugänglicher. Sie führen von selbst zu keiner optischen Verbesserung, sind jedoch sehr nützlich für das Anwenden von Stil- und Layoutverbesserungen über CSS, die die Barrierefreiheit verbessern können. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen lassen und die Inhalte nach oben und unten scrollen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle einwickeln, der der Kopf ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber das ist nicht immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt unter diesen kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabellinhalts einwickeln, der nicht der Tabellenkopf oder -fuß ist, und sollte nach dem `<thead>` kommen.
- Das `<tfoot>`-Element muss den Teil der Tabelle einwickeln, der der Fuß ist — dies könnte zum Beispiel eine Abschlussreihe mit den Summen der vorherigen Zeilen sein. Das `<tfoot>` sollte nach dem `<tbody>` kommen.

> [!NOTE]
> `<tbody>` ist immer implizit in jeder Tabelle enthalten, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt einschließen sollten — Sie sollten, weil es Ihnen mehr Kontrolle über die Struktur und das Styling Ihrer Tabelle gibt.

### Strukturen einer Ausgabenaufzeichnungstabelle hinzufügen

Lassen Sie uns diese neuen Elemente in die Praxis umsetzen.

1. Erstellen Sie zuerst eine neue HTML-Datei namens `spending-record.html` und geben Sie den folgenden HTML-Code in den `<body>`-Bereich ein:

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
       <td>Shoeshop</td>
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

2. Erstellen Sie dann eine CSS-Datei namens `minimal-table.css` im selben Verzeichnis wie Ihre HTML-Datei und füllen Sie sie mit folgendem Inhalt:

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

3. Fügen Sie ein `<link>`-Element in Ihrem HTML-`<head>` hinzu, um das CSS auf das HTML anzuwenden (siehe [CSS und JavaScript auf HTML anwenden](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#applying_css_and_javascript_to_html) für Unterstützung dabei).

4. Versuchen Sie, die offensichtliche Kopfzeile in einem `<thead>`-Element, die "SUM"-Zeile in einem `<tfoot>`-Element und den Rest des Inhalts in einem `<tbody>`-Element zu platzieren.
5. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erweitern, sodass die tatsächliche Zahl am Ende der "Kosten"-Spalte erscheint.
6. Lassen Sie uns der Tabelle einige einfache zusätzliche Stile hinzuzufügen, um Ihnen einen Eindruck davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Fügen Sie dies zu Ihrer CSS-Datei hinzu:

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
   > Wir erwarten nicht, dass Sie das CSS schon jetzt vollständig verstehen. Sie werden mehr darüber erfahren, wenn Sie unsere CSS-Module durchgehen (beginnend mit [Grundlagen der CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell über [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

7. Speichern und aktualisieren Sie, und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

Das fertige Beispiel sollte folgendermaßen aussehen:

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau zu sagen, für welche Zellen die Kopfzelle eine Kopfzelle ist — ist es eine Kopfzelle für die Zeile, in der sie steht, oder für die Spalte, zum Beispiel? Wenn Sie sich unser Beispiel zur Ausgabenaufzeichnung von früher ansehen, können Sie die Spaltenüberschriften unmissverständlich als Spaltenüberschriften definieren:

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

Und jede Zeile könnte eine Kopfzelle so definiert haben (wenn wir auch Zeilenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen Markup, das so strukturiert ist, und ermöglichen ihren Benutzern, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen liegen. Wenn Sie sich die Tabelle "Im August 2016 verkaufte Artikel" am Anfang dieses Abschnitts des Artikels ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" liegt. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die über den anderen drei Unterüberschriften liegt. "Kleidung" sollte daher mit einem Attribut `scope="colgroup"` versehen werden, während die anderen ein Attribut `scope="col"` erhalten:

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

Das Gleiche gilt für Überschriften für mehrere gruppierte Zeilen. Werfen Sie einen weiteren Blick auf die Tabelle "Im August 2016 verkaufte Artikel", wobei Sie sich diesmal auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`) konzentrieren. Ihnen wird auffallen, dass die Überschrift "Niederlande", die ebenfalls als `<th>`-Element ausgezeichnet ist, beide Zeilen überspannt und die Überschrift für die beiden anderen Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Kopfzelle angegeben werden, um Screenreadern zu helfen, die richtigen Zuordnungen zu erstellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs besteht darin, die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute zu verwenden, um Assoziationen zwischen Datenzellen und Kopfzellen zu erstellen.

Ein `<th>`-Element kann eine Überschrift entweder für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Kopfzelle (`<th>`) bereitstellen. Dies ermöglicht es Ihnen, geschichtete oder gruppierte Überschriften zu erstellen, bei denen eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle, `<td>` oder `<th>`, mit einer oder mehreren Kopfzellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}}; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss der eindeutigen `id` eines `<th>`-Elements entsprechen, mit dem die Zelle assoziiert ist.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich wie bei einer Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Lassen Sie uns einen Teil des Beispiels "Im August 2016 verkaufte Artikel" ansehen, um zu sehen, wie die Verwendung der `id`- und `headers`-Attribute funktioniert:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, also einer Kopfzelle mit einer weiteren Überschrift darüber. Der Wert ist die `id` der Oberüberschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Element(e) als durch Leerzeichen getrennte Liste an. Sie können vorgehen, als ob Sie es mit einer Tabellenkalkulation zu tun hätten: Finden Sie die Datenzelle, dann suchen Sie die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber eine konsistente Beibehaltung hilft dabei, es organisiert zu halten und die Lesbarkeit des Codes zu verbessern.

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

- Das `<th>` für "Belgien" verwendet `rowspan="2"`, um sowohl "Antwerpen" als auch "Gent" einzuschließen.
- Die Stadtüberschriftenzellen ("Antwerpen" und "Gent") verwenden das `headers`-Attribut, um auf `"belgium"` zu verweisen, um zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jedes `<td>` enthält ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerp` oder `ghent`), Gruppe (`clothes`) und den spezifischen Kleidungsartikel (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Kopfzellen und Datenzellen, aber sie verwendet **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist in der Regel ausreichend für die meisten Tabellen.

## Spielen mit scope und headers

Für diese abschließende Übung werden wir Sie dazu bringen, scope und headers an der Beispieltafel auszuprobieren, die wir zuvor vorgestellt haben.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Machen Sie eine weitere Kopie der Startdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle dieses Mal zugänglicher, indem Sie präzise und explizite Assoziationen mit `id`- und `headers`-Attributen erstellen.

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

Sie können die fertigen Beispiele auch auf GitHub finden:

- Für das erste Beispiel, siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([siehe dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel, siehe [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([siehe dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen können, aber das ist alles, was Sie im Moment wissen müssen. Als nächstes können Sie sich mit unserer HTML-Tabelle-Herausforderung selbst testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
