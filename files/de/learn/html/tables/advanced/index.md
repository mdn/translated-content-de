---
title: Erweiterte Funktionen von HTML-Tabellen und Barrierefreiheit
slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

Im zweiten Artikel in diesem Modul betrachten wir einige erweiterte Funktionen von HTML-Tabellen – wie z.B. Beschriftungen/Zusammenfassungen und die Gruppierung Ihrer Zeilen in Tabellenkopf-, -körper- und -fußbereiche – sowie die Barrierefreiheit von Tabellen für sehbehinderte Nutzer.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen erweiterter HTML-Tabellenfunktionen und Barrierefreiheit
        von Tabellen.
      </td>
    </tr>
  </tbody>
</table>

## Hinzufügen einer Beschriftung zu Ihrer Tabelle mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung hinzufügen, indem Sie das {{htmlelement("caption")}}-Element verwenden und es in das {{htmlelement("table")}}-Element einfügen. Sie sollten es direkt unterhalb des öffnenden `<table>`-Tags platzieren.

```html
<table>
  <caption>
    Dinosaurier in der Jurazeit
  </caption>

  …
</table>
```

Wie Sie aus dem obigen kurzen Beispiel ersehen können, soll die Beschriftung eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die einen schnellen Überblick darüber bekommen möchten, ob die Tabelle für sie nützlich ist, insbesondere jedoch für blinde Nutzer. Anstatt dass ein Bildschirmleser den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle genauer lesen möchte oder nicht.

Eine Beschriftung wird direkt unterhalb des `<table>`-Tags platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen – dies wird ebenfalls von Bildschirmlesern vorgelesen. Wir empfehlen jedoch, das `<caption>`-Element zu verwenden, da `summary` veraltet ist und nicht von sehenden Nutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktives Lernen: Eine Beschriftung hinzufügen

Lassen Sie uns dies ausprobieren, indem wir ein Beispiel erneut aufgreifen, das wir bereits im vorherigen Artikel kennengelernt haben.

1. Öffnen Sie den Stundenplan Ihres Sprachlehrers vom Ende der [HTML-Tabellengrundlagen](/de/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col), oder erstellen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) Datei.
2. Fügen Sie eine passende Beschriftung für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um das Ergebnis zu sehen.

> [!NOTE]
> Sie können unsere Version auf GitHub finden – siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer werden, ist es nützlich, ihnen eine klarere Struktur zu geben. Dies kann durch die Verwendung von {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} erreicht werden, die es Ihnen ermöglichen, einen Kopf-, Körper- und Fußbereich für die Tabelle zu markieren.

Diese Elemente machen die Tabelle nicht zugänglicher für Bildschirmleser und bewirken auch keine sichtbare Verbesserung für sich allein. Sie sind jedoch sehr nützlich für das Styling und Layout – sie fungieren als nützliche Ankerpunkte für das Hinzufügen von CSS zu Ihrer Tabelle. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen nach oben und unten verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge eingefügt werden:

- Das `<thead>`-Element muss den Teil der Tabelle umfassen, der der Kopfbereich ist – dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, aber dies ist nicht unbedingt immer der Fall. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umfassen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umfassen, der der Fußbereich ist – dies könnte beispielsweise eine letzte Zeile sein, in der die vorherigen Zeilen summiert werden.

> **Hinweis:** `<tbody>` ist in jeder Tabelle immer enthalten, implizit, wenn Sie es nicht in Ihren Code einfügen. Um dies zu überprüfen, öffnen Sie ein früheres Beispiel, das kein `<tbody>` enthält, und schauen Sie sich den HTML-Code in Ihren [Entwickler-Werkzeugen Ihres Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) an – Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie sich überhaupt die Mühe machen sollten, es einzufügen – Sie sollten es tun, da es Ihnen mehr Kontrolle über die Struktur und das Styling Ihrer Tabelle gibt.

### Aktives Lernen: Tabellenstruktur hinzufügen

Lassen Sie uns diese neuen Elemente in Aktion setzen.

1. Erstellen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Öffnen Sie es in einem Browser – Sie werden sehen, dass es in Ordnung aussieht, aber es könnte verbessert werden. Die "SUMME"-Zeile, die eine Summe der ausgegebenen Beträge enthält, scheint an der falschen Stelle zu sein, und es fehlen einige Details im Code.
3. Platzieren Sie die offensichtliche Kopfzeile in einem `<thead>`-Element, die "SUMME"-Zeile in einem `<tfoot>`-Element, und den Rest des Inhalts in einem `<tbody>`-Element.
4. Speichern Sie und aktualisieren Sie, und Sie werden sehen, dass das Hinzufügen des `<tfoot>`-Elements dazu geführt hat, dass die "SUMME"-Zeile an das Ende der Tabelle verschoben wurde.
5. Fügen Sie nun ein [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut hinzu, um die "SUMME"-Zelle über die ersten vier Spalten zu spannen, sodass die tatsächliche Zahl am Ende der "Kosten"-Spalte erscheint.
6. Fügen Sie etwas einfaches zusätzliches Styling zur Tabelle hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente für die Anwendung von CSS sind. Im Kopfbereich Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element folgende CSS-Zeilen ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Speichern und aktualisieren, und schauen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um das gleiche Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([Einführung in CSS](/de/docs/Learn/CSS/First_steps) ist ein guter Anfang; wir haben auch einen Artikel speziell über [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)).

Ihre fertige Tabelle sollte etwa so aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden.

## Verschachtelte Tabellen

Es ist möglich, eine Tabelle in eine andere Tabelle zu verschachteln, solange Sie die vollständige Struktur inklusive des `<table>`-Elements einfügen. Dies wird generell nicht wirklich empfohlen, da es das Markup verwirrender und weniger zugänglich für Bildschirmleser macht, und in vielen Fällen könnten Sie ebenso gut einfach zusätzliche Zellen/Zeilen/Spalten in die bestehende Tabelle einfügen. Es ist jedoch manchmal notwendig, zum Beispiel, wenn Sie Inhalte leicht aus anderen Quellen importieren möchten.

Der folgende Markup zeigt eine einfache verschachtelte Tabelle:

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

Das Ergebnis sieht in etwa so aus:

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("Nesting_Tables")}}

## Tabellen für sehbehinderte Nutzer

Fassen wir kurz zusammen, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, um uns schnellen Zugriff auf Daten zu geben und uns die Möglichkeit zu bieten, verschiedene Werte nachzuschlagen. Beispiel: Es dauert nur einen kurzen Blick auf die untenstehende Tabelle, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um ihre Informationen zu verstehen, stellen wir visuelle Assoziationen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften her.

<table>
  <caption>Artikelverkauf August 2016</caption>
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

Aber was, wenn Sie diese visuelle Assoziationen nicht machen können? Wie können Sie dann eine Tabelle wie die obige lesen? Sehbehinderte Menschen nutzen oft einen Bildschirmleser, der Informationen auf Webseiten vorliest. Dies ist kein Problem, wenn Sie einfachen Text lesen, aber das Interpretieren einer Tabelle kann für eine blinde Person eine ziemliche Herausforderung sein. Nichtsdestotrotz können wir mit dem richtigen Markup visuelle Assoziationen durch programmatische ersetzen.

> [!NOTE]
> Laut [WHO-Daten von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) leben weltweit rund 253 Millionen Menschen mit Sehverlust.

In diesem Abschnitt des Artikels werden weitere Techniken vorgestellt, um Tabellen so barrierefrei wie möglich zu machen.

### Verwendung von Spalten- und Zeilenüberschriften

Bildschirmleser werden alle Überschriften identifizieren und sie verwenden, um programmatische Verknüpfungen zwischen diesen Überschriften und den Zellen herzustellen, auf die sie sich beziehen. Die Kombination aus Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Bildschirmleser-Nutzer die Tabelle ähnlich interpretieren können wie ein sehender Nutzer.

Wir haben Überschriften bereits in unserem vorherigen Artikel behandelt — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements).

### Das scope-Attribut

Ein neues Thema für diesen Artikel ist das [`scope`](/de/docs/Web/HTML/Element/th#scope)-Attribut, das dem `<th>`-Element hinzugefügt werden kann, um Bildschirmlesern genau zu sagen, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Zeile, in der sie steht, oder für die Spalte, zum Beispiel? Basierend auf unserem früheren Ausgabebeispiel könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, wie folgt:

```html
<thead>
  <tr>
    <th scope="col">Einkauf</th>
    <th scope="col">Ort</th>
    <th scope="col">Datum</th>
    <th scope="col">Bewertung</th>
    <th scope="col">Kosten (€)</th>
  </tr>
</thead>
```

Und jede Zeile könnte eine Überschrift wie folgt definiert haben (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzufügen würden):

```html
<tr>
  <th scope="row">Haarschnitt</th>
  <td>Friseur</td>
  <td>12/09</td>
  <td>Tolle Idee</td>
  <td>30</td>
</tr>
```

Bildschirmleser erkennen so strukturiertes Markup und ermöglichen ihren Nutzern beispielsweise das Vorlesen der gesamten Spalte oder Zeile auf einmal.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die sich über mehrere Spalten oder Zeilen erstrecken. Wenn Sie sich die "Artikelverkauf August 2016"-Tabelle am Anfang dieses Artikels erneut ansehen, werden Sie feststellen, dass sich die "Kleidung"-Zelle über den "Hosen"-, "Röcke"- und "Kleider"-Zellen befindet. All diese Zellen sollten als Überschriften (`<th>`) gekennzeichnet werden, aber "Kleidung" ist eine Überschrift, die über ihnen sitzt und die drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut von `scope="colgroup"` erhalten, während die anderen ein Attribut von `scope="col"` erhalten:

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Kleidung</th>
  </tr>
  <tr>
    <th scope="col">Hosen</th>
    <th scope="col">Röcke</th>
    <th scope="col">Kleider</th>
  </tr>
</thead>
```

Das Gleiche gilt für Überschriften für mehrere Gruppenzeilen. Betrachten Sie die "Artikelverkauf August 2016"-Tabelle erneut, diesmal mit Fokus auf die Zeilen mit den "Amsterdam"- und "Utrecht"-Überschriften (`<th>`). Sie werden feststellen, dass sich die "Niederlande"-Überschrift, ebenfalls als `<th>`-Element gekennzeichnet, über beide Zeilen erstreckt und die Überschrift für die beiden anderen Unterüberschriften ist. Deshalb sollte `scope="rowgroup"` auf diese Überschrift gesetzt werden, um Bildschirmlesern zu helfen, die richtigen Verknüpfungen zu erstellen:

```html
<tr>
  <th rowspan="2" scope="rowgroup">Niederlande</th>
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

### Die id- und headers-Attribute

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Global_attributes#id) und [`headers`](/de/docs/Web/HTML/Element/td#headers) Attribute, um Verknüpfungen zwischen Überschriften und Zellen herzustellen.

Das `headers`-Attribut nimmt eine Liste von ungeordneten, durch Leerzeichen getrennten {{Glossary("string", "strings")}} an, die jeweils der eindeutigen `id` der `<th>`-Elemente entsprechen, die Überschriften entweder für eine Datenzelle (`<td>`-Element) oder eine andere Überschriftzelle (`<th>`-Element) bereitstellen.

Dies gibt Ihrer HTML-Tabelle eine explizite Definition der Position jeder Zelle in der Tabelle, definiert durch die Überschrift(en) für jede Spalte und Reihe, der sie angehört, ähnlich wie in einer Tabellenkalkulation. Damit es gut funktioniert, benötigt die Tabelle wirklich sowohl Spalten- als auch Zeilenüberschriften.

Zurück zu unserem Beispiel "Artikelverkauf August 2016", können wir die `id`- und `headers`-Attribute folgendermaßen verwenden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, d. h., eine Überschrift darüber hat, ein `headers`-Attribut hinzu. Der Wert ist die `id` der Überschrift, die darüber sitzt und die Unterüberschriften definiert, was in unserem Beispiel `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Zeilenüberschrift ist.
3. Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und geben Sie die `id`s der zugehörigen `<th>`-Elemente in Form einer durch Leerzeichen getrennten Liste an. Sie können vorgehen, als ob Sie ein Tabellenblatt bearbeiten würden: Finden Sie die Datenzelle und suchen Sie nach den entsprechenden Überschriften für die Zeile und Spalte. Die Reihenfolge der angegebenen `id`s ist egal, aber Sie sollten konsistent bleiben, um die Organisation zu erleichtern.

```html
<thead>
  <tr>
    <th id="kleidung" colspan="3">Kleidung</th>
  </tr>
  <tr>
    <th id="hosen" headers="kleidung">Hosen</th>
    <th id="roecke" headers="kleidung">Röcke</th>
    <th id="kleider" headers="kleidung">Kleider</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgien" rowspan="3">Belgien</th>
    <th id="antwerpen" headers="belgien">Antwerpen</th>
    <td headers="antwerpen belgien kleidung hosen">56</td>
    <td headers="antwerpen belgien kleidung roecke">22</td>
    <td headers="antwerpen belgien kleidung kleider">43</td>
  </tr>
</tbody>
```

> [!NOTE]
> Diese Methode erzeugt sehr präzise Verknüpfungen zwischen Überschriften und Datenzellen, verwendet aber **viel** mehr Markup und lässt keinen Spielraum für Fehler. Der `scope`-Ansatz ist in der Regel für die meisten Tabellen ausreichend.

### Aktives Lernen: Spielen mit scope und headers

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die geeigneten `scope`-Attribute hinzuzufügen, um diese Tabelle barrierefreier zu machen.
3. Schließlich versuchen Sie, eine weitere Kopie der Startdateien zu erstellen, und machen diesmal die Tabelle barrierefreier, indem Sie präzise und explizite Verknüpfungen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch einige andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als nächstes können Sie sich mit unserer [HTML-Tabellenbewertung](/de/docs/Learn/HTML/Tables/Structuring_planet_data) testen. Viel Spaß!

Wenn Sie bereits CSS lernen und die Bewertung gut bestanden haben, können Sie weitergehen und lernen, wie man HTML-Tabellen stylt – siehe [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

Wenn Sie mit dem Erlernen von CSS beginnen möchten, schauen Sie sich den [CSS Learning Area](/de/docs/Learn/CSS) an!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
