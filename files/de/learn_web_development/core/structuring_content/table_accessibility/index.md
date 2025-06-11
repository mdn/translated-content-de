---
title: HTML-Tabelle Barrierefreiheit
short-title: Table accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 8a71d8ca02984703200e9d34395f1f729b7f9c5b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere HTML-Tabellenzugänglichkeitselemente wie Untertitel/Zusammenfassungen, das Gruppieren Ihrer Zeilen in Tabellenkopf, -körper und -fuß sowie das Festlegen von Bereichen für Spalten und Zeilen.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verständnis der mit Tabellen verbundenen Zugänglichkeitsprobleme.</li>
          <li>Hinzufügen von Bildunterschriften zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fuß.</li>
          <li>Erstellen weiterer Verknüpfungen zwischen Kopfzeilen und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz darauf zurückkommen, wie wir Datentabellen verwenden. Eine Tabelle kann ein nützliches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und es uns zu ermöglichen, unterschiedliche Werte abzurufen. Zum Beispiel genügt ein kurzer Blick auf die folgende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Verbindungen zwischen den Daten in dieser Tabelle und ihren Spalten- oder Zeilenüberschriften her.

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

Aber was, wenn Sie diese visuellen Verbindungen nicht herstellen können? Wie können Sie dann eine Tabelle wie die obenstehende lesen? Sehbehinderte Menschen verwenden häufig einen {{Glossary("Screen_reader", "Bildschirmleser")}}, der ihnen Informationen auf Webseiten vorliest. Dies stellt bei der Wiedergabe von einfachem Text kein Problem dar, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung sein. Dennoch können wir mit der richtigen Markierung visuelle Verbindungen durch programmatische ersetzen.

> [!NOTE]
> Es gibt etwa 253 Millionen Menschen, die laut [WHO-Daten aus dem Jahr 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) mit einer Sehbehinderung leben.

### Verwendung von Spalten- und Zeilenüberschriften

Bildschirmleser erkennen alle Überschriften und nutzen sie, um programmatische Verknüpfungen zwischen diesen Überschriften und den Zellen, auf die sie sich beziehen, zu erstellen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Benutzer von Bildschirmlesern die Tabelle ähnlich interpretieren können wie ein sehender Benutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Bildunterschrift zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Bildunterschrift hinzufügen, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel entnehmen können, soll die Bildunterschrift eine Beschreibung der Tabelleninhalte enthalten. Dies ist nützlich für alle Leser, die sich schnell einen Überblick darüber verschaffen möchten, ob die Tabelle für sie von Nutzen ist, wenn sie die Seite durchsehen, insbesondere aber für blinde Benutzer. Anstatt dass ein Bildschirmleser den Inhalt vieler Zellen vorlesen muss, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Bildunterschrift verlassen und dann entscheiden, ob er die Tabelle genauer lesen möchte.

Eine Bildunterschrift wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann ebenfalls auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — auch dies wird von Bildschirmlesern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es wird nicht auf der Seite angezeigt).

### Praxisbeispiel für Table Caption

An diesem Punkt werden wir Sie dazu bringen, das Hinzufügen einer Bildunterschrift zu einer HTML-Tabelle auszuprobieren, unter Verwendung des Stundenplans eines Sprachlehrers als Beispiel.

1. Erstellen Sie eine lokale Kopie unserer Datei [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html).
2. Fügen Sie der Tabelle eine passende Bildunterschrift hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie es aussieht.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr abgeschlossenes HTML sollte in etwa so aussehen:

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

## Hinzufügen einer Struktur mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es nützlich, ihnen eine klarere Strukturdefinition zu geben. Eine eindeutige Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, mit denen Sie einen Kopf-, Körper- und Fußbereich für die Tabelle markieren können.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Benutzer von Bildschirmlesern. Sie führen allein zu keiner visuellen Verbesserung, sind jedoch sehr nützlich zum Anwenden von Stil- und Layoutverbesserungen über CSS, was die Zugänglichkeit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Fall einer langen Tabelle könnten Sie den Tabellenkopf und den -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt verfügbar haben, indem Sie auf- und abwärts scrollen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, dies ist jedoch nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}-/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte beispielsweise eine letzte Zeile mit den in den vorherigen Zeilen zusammengefassten Elementen sein.

> **Hinweis:** `<tbody>` ist immer in jeder Tabelle enthalten, implizit, wenn Sie es nicht in Ihrem Code angeben. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das kein `<tbody>` enthält, und schauen Sie sich den HTML-Code in Ihren [Browserentwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie fragen sich vielleicht, warum Sie es überhaupt einbinden sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und -stile gibt.

### Hinzufügen von Struktur zu einer Ausgabenzählungstabelle

Lassen Sie uns diese neuen Elemente in die Tat umsetzen.

1. Erstellen Sie zuerst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Kopfzeile in ein `<thead>`-Element, die "SUMME"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUMME"-Zelle über die ersten vier Spalten zu spannen, sodass die eigentliche Zahl unten in der "Kosten"-Spalte erscheint.
4. Lassen Sie uns einige einfache zusätzliche Stile zur Tabelle hinzufügen, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente zur Anwendung von CSS sind. Innerhalb des Kopfbereichs Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden Zeilen CSS-Code ein:

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
   > Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen (beginnend mit [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), das einen Artikel speziell über [das Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) enthält).

5. Speichern und aktualisieren Sie und werfen Sie einen Blick auf das Ergebnis. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr endgültiges HTML sollte etwa so aussehen:

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
  </tbody>
</table>
```

Den vollständigen Code finden Sie auf GitHub unter [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

</details>

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann zum `<th>`-Element hinzugefügt werden, um Bildschirmleser genau wissen zu lassen, für welche Zellen die Kopfzeile eine Kopfzeile ist — ist es eine Kopfzeile für die Zeile, in der es sich befindet, oder die Spalte? Wenn Sie sich unser früheres Ausgabenzählerbeispiel ansehen, könnten Sie die Spaltenüberschriften unmissverständlich als Spaltenüberschriften definieren, wie folgt:

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

Und jede Zeile könnte eine Kopfzeile wie diese definiert haben (wenn wir sowohl Zeilen- als auch Spaltenköpfe hinzufügen):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Bildschirmleser erkennen ein so strukturiertes Markup und ermöglichen ihren Benutzern beispielsweise, die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen sitzen. Wenn Sie sich die Tabelle "Verkaufte Artikel im August 2016" am Anfang dieses Artikelsektion ansehen, werden Sie sehen, dass die Zelle "Kleidung" über den Zellen "Hosen", "Röcke" und "Kleider" liegt. Alle diese Zellen sollten als Kopfzeilen (`<th>`) markiert werden, aber "Kleidung" ist eine Kopfzeile, die darüber liegt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

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

Dasselbe gilt für Kopfzeilen für mehrere gruppierte Zeilen. Betrachten Sie die Tabelle "Verkaufte Artikel im August 2016" erneut, diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Kopfzeile "Niederlande", ebenfalls als `<th>`-Element markiert, beide Zeilen überspannt und die Kopfzeile für die beiden Unterüberschriften ist. Daher sollte `scope="rowgroup"` auf dieser Kopfzeile spezifiziert werden, um Bildschirmlesern die richtigen Verknüpfungen zu ermöglichen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der Attribute [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers), um Verknüpfungen zwischen Datenzellen und Kopfzeilen zu erstellen.

Ein `<th>`-Element kann entweder eine Kopfzeile für eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Kopfzeile (`<th>`) bereitstellen. Dadurch können Sie geschichtete oder gruppierte Überschriften erstellen, bei denen eine Kopfzeile mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Verknüpfung von einer Zelle, `<td>` oder `<th>`, zu einer oder mehreren Kopfzeilen herzustellen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}}; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines zugeordneten `<th>`-Elements übereinstimmen.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Kopfzeilen für die Spalte und die Zeile, zu der sie gehört, ähnlich wie bei einer Tabelle in einem Tabellendokument. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenköpfe einschließen.

Sehen wir uns einen Teil des Beispiels "Verkaufte Artikel im August 2016" an, um zu sehen, wie die `id`- und `headers`-Attribute verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Kopfzeilen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, ein `headers`-Attribut hinzu, also eine Kopfzelle mit einer weiteren Kopfzeile darüber. Der Wert ist die `id` der höheren Überschrift. In unserem Beispiel ist das `"clothes"` für die Spaltenüberschriften und `"belgium"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugeordneten `<th>`-Elemente als durch Leerzeichen getrennte Liste hinzu. Sie können so vorgehen, wie Sie es in einem Tabellendokument tun würden: Finden Sie die Datenzelle, dann lokalisieren Sie die Zeilen- und Spaltenköpfe, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber sie konsistent zu halten, hilft, den Code organisiert zu halten und die Lesbarkeit zu verbessern.

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

- Das `<th>` für "Belgien" verwendet `rowspan="2"`, um sowohl "Antwerpen" als auch "Gent" zu umfassen.
- Die Kopfzellen der Städte ("Antwerpen" und "Gent") verwenden das `headers`-Attribut, um auf "belgien" zu verweisen, um zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jedes `<td>` beinhaltet ein `headers`-Attribut für Land (`belgium`), Stadt (`antwerpen` oder `gent`), Gruppe (`clothes`) und den spezifischen Kleidungsartikel (`trousers`, `skirts` oder `dresses`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Assoziationen zwischen Kopfzeilen und Datenzellen, sie verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

## Spielen mit Scope und Headers

Für diese letzte Übung werden wir Sie versuchen lassen, Scope und Headers in der Beispiel-Tabelle, die oben eingeführt wurde, zu verwenden.

1. Erstellen Sie zunächst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis.
2. Versuchen Sie, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle zugänglicher zu machen.
3. Machen Sie eine weitere Kopie der Starterdateien in einem anderen lokalen Verzeichnis.
4. Machen Sie die Tabelle dieses Mal zugänglicher, indem Sie präzise und explizite Assoziationen mit `id`- und `headers`-Attributen erstellen.

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Das erste abgeschlossene HTML-Beispiel sollte etwa so aussehen:

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

Sie können die abgeschlossenen Beispiele auch auf GitHub finden:

- Für das erste Beispiel sehen Sie [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([sehen Sie dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Für das zweite Beispiel sehen Sie [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie dies auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie vorerst wissen müssen. Als Nächstes können Sie sich mit unserer Herausforderung zu HTML-Tabellen testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
