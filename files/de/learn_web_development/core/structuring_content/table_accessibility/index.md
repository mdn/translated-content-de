---
title: Barrierefreiheit von HTML-Tabellen
short-title: Barrierefreiheit von Tabellen
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 73c2e226085c7902dd200f7d6c3a6730beb6d941
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir uns eines der wichtigsten Merkmale angesehen, um HTML-Tabellen für sehbehinderte Benutzer zugänglich zu machen — das {{htmlelement("th")}}-Element. In diesem Artikel setzen wir diesen Weg fort und betrachten weitere Merkmale der Barrierefreiheit von HTML-Tabellen, wie z.B. Beschriftungen/Summaries, die Gruppierung Ihrer Zeilen in Kopf-, Körper- und Fußbereiche der Tabelle sowie die Zuordnung von Spalten und Zeilen.

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
          <li>Hinzufügen von Beschriftungen zu Tabellen.</li>
          <li>Bessere Tabellenstrukturierung mit Kopf, Körper und Fuß.</li>
          <li>Erstellen weiterer Zuordnungen zwischen Überschriften und Zellen mit den Attributen <code>scope</code>, <code>id</code> und <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick: Tabellen für sehbehinderte Benutzer

Lassen Sie uns kurz rekapitulieren, wie wir Datentabellen verwenden. Eine Tabelle kann ein praktisches Werkzeug sein, das uns schnellen Zugriff auf Daten ermöglicht und es uns erlaubt, verschiedene Werte nachzuschlagen. Zum Beispiel genügt ein kurzer Blick auf die Tabelle unten, um herauszufinden, wie viele Ringe im August 2016 in Gent verkauft wurden. Um die Informationen zu verstehen, machen wir visuelle Zuordnungen zwischen den Daten in dieser Tabelle und ihren Spalten- und/oder Zeilenüberschriften.

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

Aber was, wenn Sie diese visuellen Zuordnungen nicht machen können? Wie können Sie dann eine Tabelle wie die oben beschriebene lesen? Sehbehinderte Menschen verwenden oft einen Screenreader, der Informationen auf Webseiten für sie vorliest. Das ist kein Problem, wenn man normalen Text liest, aber das Interpretieren einer Tabelle kann für eine blinde Person eine echte Herausforderung sein. Dennoch können wir mit der richtigen Auszeichnung visuelle Zuordnungen durch programmatische ersetzen.

> [!NOTE]
> Laut [Daten der WHO von 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment) gibt es etwa 253 Millionen Menschen, die mit einer Sehbehinderung leben.

Dieser Abschnitt des Artikels bietet weitere Techniken, um Tabellen so barrierefrei wie möglich zu gestalten.

### Verwendung von Spalten- und Zeilenüberschriften

Screenreader erkennen alle Überschriften und verwenden sie, um programmatische Assoziationen zwischen diesen Überschriften und den Zellen herzustellen, auf die sie sich beziehen. Die Kombination von Spalten- und Zeilenüberschriften identifiziert und interpretiert die Daten in jeder Zelle, sodass Screenreader-Benutzer die Tabelle ähnlich wie ein sehender Benutzer interpretieren können.

Wir haben bereits im vorherigen Artikel über Überschriften gesprochen — siehe [Hinzufügen von Überschriften mit \<th>-Elementen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#adding_headers_with_th_elements).

## Hinzufügen einer Beschriftung mit \<caption>

Sie können Ihrer Tabelle eine Beschriftung geben, indem Sie sie in ein {{htmlelement("caption")}}-Element setzen und dieses innerhalb des {{htmlelement("table")}}-Elements verschachteln. Sie sollten es direkt unter dem öffnenden `<table>`-Tag platzieren.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

Wie Sie aus dem kurzen Beispiel oben entnehmen können, soll die Beschriftung eine Beschreibung des Tabelleninhalts enthalten. Dies ist nützlich für alle Leser, die schnell herausfinden möchten, ob die Tabelle für sie von Nutzen ist, während sie die Seite durchgehen, aber insbesondere für blinde Benutzer. Anstatt dass ein Screenreader den Inhalt vieler Zellen vorliest, nur um herauszufinden, worum es in der Tabelle geht, kann sich der Benutzer auf eine Beschriftung verlassen und dann entscheiden, ob er die Tabelle detaillierter lesen möchte.

Eine Beschriftung wird direkt unter dem `<table>`-Tag platziert.

> [!NOTE]
> Das [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut kann auch auf dem `<table>`-Element verwendet werden, um eine Beschreibung bereitzustellen — dies wird ebenfalls von Screenreadern vorgelesen. Wir empfehlen jedoch die Verwendung des `<caption>`-Elements, da `summary` veraltet ist und nicht von sehenden Benutzern gelesen werden kann (es erscheint nicht auf der Seite).

### Aktive Lernübung: Hinzufügen einer Beschriftung

Probieren Sie es aus, indem Sie den Stundenplan eines Sprachlehrers als Beispiel verwenden.

1. Machen Sie eine lokale Kopie unserer [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)-Datei.
2. Fügen Sie eine geeignete Beschriftung für die Tabelle hinzu.
3. Speichern Sie Ihren Code und öffnen Sie ihn in einem Browser, um zu sehen, wie er aussieht.

> [!NOTE]
> Sie können unsere Version auf GitHub finden — siehe [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Struktur Hinzufügen mit \<thead>, \<tbody> und \<tfoot>

Wenn Ihre Tabellen etwas komplexer in der Struktur werden, ist es nützlich, ihnen mehr strukturelle Definition zu geben. Eine klare Möglichkeit, dies zu tun, besteht darin, {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}} zu verwenden, mit denen Sie einen Kopf-, Körper- und Fußbereich für die Tabelle markieren können.

Diese Elemente machen die Tabelle nicht unbedingt zugänglicher für Screenreader-Benutzer. Sie resultieren nicht in einer visuellen Verbesserung an sich, allerdings sind sie sehr nützlich, um Styling und Layout-Verbesserungen durch CSS anzuwenden, was die Zugänglichkeit verbessern kann. Um Ihnen einige interessante Beispiele zu geben: Im Falle einer langen Tabelle könnten Sie den Tabellenkopf und -fuß auf jeder gedruckten Seite wiederholen lassen, und Sie könnten den Tabellenkörper auf einer einzigen Seite anzeigen und den Inhalt durch Scrollen nach oben und unten verfügbar machen.

Um sie zu verwenden, sollten sie in der folgenden Reihenfolge enthalten sein:

- Das `<thead>`-Element muss den Teil der Tabelle umschließen, der der Kopf ist — dies ist normalerweise die erste Zeile, die die Spaltenüberschriften enthält, was aber nicht immer der Fall sein muss. Wenn Sie {{htmlelement("col")}}/{{htmlelement("colgroup")}}-Elemente verwenden, sollte der Tabellenkopf direkt darunter kommen.
- Das `<tbody>`-Element muss den Hauptteil des Tabelleninhalts umschließen, der nicht der Tabellenkopf oder -fuß ist.
- Das `<tfoot>`-Element muss den Teil der Tabelle umschließen, der der Fuß ist — dies könnte z.B. eine Abschlusszeile mit zusammengefassten Elementen aus den vorherigen Zeilen sein.

> **Hinweis:** `<tbody>` ist in jeder Tabelle immer enthalten, implizit, wenn Sie es nicht in Ihrem Code spezifizieren. Um dies zu überprüfen, öffnen Sie eines Ihrer vorherigen Beispiele, das `<tbody>` nicht enthält, und sehen Sie sich den HTML-Code in Ihren [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) an — Sie werden sehen, dass der Browser dieses Tag für Sie hinzugefügt hat. Sie könnten sich fragen, warum Sie es überhaupt einfügen sollten — Sie sollten es tun, weil es Ihnen mehr Kontrolle über Ihre Tabellenstruktur und Ihr Styling gibt.

### Aktives Lernen: Hinzufügen von Tabellenstruktur

Setzen wir diese neuen Elemente in die Praxis um.

1. Machen Sie zunächst eine lokale Kopie von [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Ordner.
2. Versuchen Sie, die offensichtliche Überschriftenzeile in ein `<thead>`-Element, die "SUM"-Zeile in ein `<tfoot>`-Element und den Rest des Inhalts in ein `<tbody>`-Element zu setzen.
3. Fügen Sie als Nächstes ein [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut hinzu, um die "SUM"-Zelle über die ersten vier Spalten zu erstrecken, sodass die tatsächliche Nummer am unteren Rand der "Kosten"-Spalte erscheint.
4. Fügen Sie der Tabelle etwas einfaches zusätzliches Styling hinzu, um Ihnen eine Vorstellung davon zu geben, wie nützlich diese Elemente zum Anwenden von CSS sind. Innerhalb des Kopfbereichs Ihres HTML-Dokuments sehen Sie ein leeres {{htmlelement("style")}}-Element. Fügen Sie in dieses Element die folgenden CSS-Codezeilen ein:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

5. Speichern und aktualisieren Sie, und sehen Sie sich das Ergebnis an. Wenn die `<tbody>`- und `<tfoot>`-Elemente nicht vorhanden wären, müssten Sie viel kompliziertere Selektoren/Regeln schreiben, um dasselbe Styling anzuwenden.

> [!NOTE]
> Wir erwarten nicht, dass Sie das CSS jetzt vollständig verstehen. Sie werden mehr darüber lernen, wenn Sie unsere CSS-Module durchgehen ([Grundlagen von CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics) ist ein guter Ausgangspunkt; wir haben auch einen Artikel speziell über [Tabellenstyling](/de/docs/Learn_web_development/Core/Styling_basics/Tables)).

Ihre fertige Tabelle sollte in etwa wie folgt aussehen:

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> Sie können es auch auf GitHub als [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html) finden ([sehen Sie es hier live](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

## Das `scope`-Attribut

Das [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope)-Attribut kann dem `<th>`-Element hinzugefügt werden, um Screenreadern genau anzugeben, für welche Zellen die Überschrift eine Überschrift ist — ist es eine Überschrift für die Reihe, in der es sich befindet, oder die Spalte, zum Beispiel? Wenn wir auf unser früheres Beispiel für das Ausgabeprotokoll zurückblicken, könnten Sie die Spaltenüberschriften eindeutig als Spaltenüberschriften definieren, so:

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

Und jede Zeile könnte eine definierte Überschrift wie diese (wenn wir Zeilenüberschriften sowie Spaltenüberschriften hinzufügen würden) haben:

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

Screenreader erkennen eine solche Struktur und ermöglichen es ihren Benutzern, zum Beispiel die gesamte Spalte oder Zeile auf einmal vorzulesen.

`scope` hat zwei weitere mögliche Werte — `colgroup` und `rowgroup`. Diese werden für Überschriften verwendet, die über mehreren Spalten oder Zeilen stehen. Wenn Sie sich die Tabelle "Verkaufte Artikel August 2016" am Anfang dieses Abschnitts des Artikels ansehen, werden Sie feststellen, dass die "Kleidung"-Zelle über den "Hosen"-, "Röcke"- und "Kleider"-Zellen steht. Alle diese Zellen sollten als Überschriften (`<th>`) ausgezeichnet werden, aber "Kleidung" ist eine Überschrift, die oben sitzt und die anderen drei Unterüberschriften definiert. "Kleidung" sollte daher ein Attribut `scope="colgroup"` erhalten, während die anderen ein Attribut `scope="col"` erhalten würden:

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

Dasselbe gilt für Überschriften für mehrere gruppierte Zeilen. Schauen Sie sich die "Verkaufte Artikel August 2016"-Tabelle noch einmal an, diesmal mit Fokus auf die Zeilen mit den Überschriften "Amsterdam" und "Utrecht" (`<th>`). Sie werden feststellen, dass die Überschrift "Die Niederlande", die ebenfalls als `<th>`-Element ausgezeichnet ist, beide Zeilen überspannt und die Überschrift für die anderen beiden Unterüberschriften darstellt. Daher sollte `scope="rowgroup"` für diese Überschriftenzelle angegeben werden, um Screenreadern zu helfen, die richtigen Zuordnungen herzustellen:

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

Eine Alternative zur Verwendung des `scope`-Attributs ist die Verwendung der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- und [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers)-Attribute, um Assoziationen zwischen Datenzellen und Überschriftenzellen zu erstellen.

Ein `<th>`-Element kann eine Überschrift für entweder eine Datenzelle (`<td>`) oder, in komplexeren Tabellen, für eine andere Überschriftenzelle (`<th>`) bereitstellen. Dies ermöglicht es, gestaffelte oder gruppierte Überschriften zu erstellen, bei denen eine Überschrift mehrere andere beschreibt.

Das `headers`-Attribut wird verwendet, um eine Zelle `<td>` oder `<th>` mit einer oder mehreren Überschriftenzellen zu verknüpfen. Es nimmt eine durch Leerzeichen getrennte Liste von {{Glossary("string", "Strings")}} auf; die Reihenfolge der Strings spielt keine Rolle. Jeder String muss mit der eindeutigen `id` eines `<th>`-Elements übereinstimmen, mit dem die Zelle in Verbindung steht.

Diese Methode gibt Ihrer HTML-Tabelle eine explizitere Definition der Position jeder Zelle, basierend auf den Überschriften für die Spalte und die Zeile, zu der sie gehört, ähnlich einer Tabellenkalkulation. Damit dies gut funktioniert, sollte Ihre Tabelle sowohl Spalten- als auch Zeilenüberschriften enthalten.

Sehen wir uns einen Teil des Beispiels "Verkaufte Artikel August 2016" an, um zu sehen, wie die `id`- und `headers`-Attribute verwendet werden:

1. Fügen Sie jedem `<th>`-Element in der Tabelle eine eindeutige `id` hinzu.
2. Für die Überschriftenzellen: Fügen Sie jedem `<th>`-Element, das als Unterüberschrift fungiert, also einer Überschriftenzelle mit einer anderen Überschrift darüber, ein `headers`-Attribut hinzu. Der Wert ist die `id` der hochrangigen Überschrift. In unserem Beispiel ist das `"kleidung"` für die Spaltenüberschriften und `"belgien"` für die Zeilenüberschrift.
3. Für die Datenzellen: Fügen Sie jedem `<td>`-Element ein `headers`-Attribut hinzu und fügen Sie die `id`s der zugehörigen `<th>`-Elemente als durch Leerzeichen getrennte Liste hinzu. Sie können vorgehen wie in einer Tabellenkalkulation: Finden Sie die Datenzelle, dann die Zeilen- und Spaltenüberschriften, die sie beschreiben. Die Reihenfolge der angegebenen `id`s spielt keine Rolle, aber das Einhalten einer einheitlichen Ordnung sorgt für Übersichtlichkeit und verbessert die Lesbarkeit des Codes.

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

- Das `<th>` für "Belgien" verwendet `rowspan="2"`, um sowohl "Antwerpen" als auch "Gent" abzudecken.
- Die Stadtkopfzellen ("Antwerpen" und "Gent") verwenden das `headers`-Attribut, um auf "belgien" zu verweisen und zu zeigen, dass sie zur Belgien-Gruppe gehören.
- Jede `<td>` enthält ein `headers`-Attribut für Land (`belgien`), Stadt (`antwerpen` oder `gent`), Gruppe (`kleidung`) und das spezifische Kleidungsstück (`hosen`, `röcke` oder `kleider`).

> [!NOTE]
> Diese Methode erstellt sehr präzise Zuordnungen zwischen Überschriften- und Datenzellen, verwendet jedoch **viel** mehr Markup und lässt keinen Raum für Fehler. Der `scope`-Ansatz ist für die meisten Tabellen in der Regel ausreichend.

## Aktives Lernen: Spielen mit `scope` und `headers`

1. Für diese letzte Übung möchten wir, dass Sie zuerst lokale Kopien von [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) und [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) in einem neuen Verzeichnis erstellen.
2. Versuchen Sie nun, die entsprechenden `scope`-Attribute hinzuzufügen, um diese Tabelle barrierefreier zu gestalten.
3. Versuchen Sie schließlich, eine weitere Kopie der Startdateien zu machen und die Tabelle diesmal barrierefreier zu gestalten, indem Sie präzise und explizite Assoziationen mit `id`- und `headers`-Attributen erstellen.

> [!NOTE]
> Sie können Ihre Arbeit mit unseren fertigen Beispielen vergleichen — siehe [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([auch live ansehen](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) und [items-sold-Headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([sehen Sie es hier live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Zusammenfassung

Es gibt noch ein paar andere Dinge, die Sie über Tabellen in HTML lernen könnten, aber das ist alles, was Sie im Moment wissen müssen. Als Nächstes können Sie sich mit unserer HTML-Tabellen-Challenge testen. Viel Spaß!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
