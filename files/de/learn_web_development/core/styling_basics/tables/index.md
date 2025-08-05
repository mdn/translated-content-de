---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir es einfach tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet, wobei einige spezifische Techniken für das Styling von Tabellen hervorgehoben werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a
        >, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich Rand-Zusammenführung.</li>
          <li>Deutliche Hervorhebung verschiedener Tabellenregionen wie Überschriften, Beschriftung, Kopfzeile, Hauptteil und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun ja, ich sage typisch - die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, die Sache interessanter zu gestalten, indem wir sie über berühmte Punkbands aus dem UK machen. Das Markup sieht folgendermaßen aus:

```html live-sample___unstyled live-sample___styled
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If The Kids Are United</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

Die Tabelle ist schön strukturiert, einfach zu stylen und zugänglich, dank Features wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht so gut aus. Mit nur dem standardmäßigen Browser-Styling wirkt sie gedrängt, schwer lesbar und ein wenig langweilig:

{{embedlivesample("unstyled")}}

Wir müssen etwas CSS verwenden, um dies zu beheben. Sie können eine Tabelle nach Belieben mit CSS stylen. Zum Beispiel haben wir dieses eher "punkige" Design erstellt:

```css hidden live-sample___styled
/* font import */
@import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";

/* spacing */
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th {
  line-height: 1.5;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}

/* typography */
html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

/* graphics */
thead,
tfoot {
  background: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg");
  color: white;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.5));
  border: 3px solid purple;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png");
}

table {
  background-color: #ff33cc;
}

/* caption */
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("styled", "", "500")}}

Allerdings ist dieses Design recht grell. In diesem Artikel zeigen wir Ihnen, wie Sie es mit einigen bewährten Praktiken für das Tabellen-Design gestalten können – wie im [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Erste Schritte beim Stylen unserer Tabelle

Lassen Sie uns gemeinsam das Styling unseres Tabellenbeispiels durchgehen.

1. Machen Sie zuerst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html) und speichern Sie es in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verbinden Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisieren der Schriftart

Dies ist ein kleiner Punkt und nicht direkt relevant für das Stylen von Tabellen, aber wir fanden, dass die Standardschriftart für eine Tabelle über Punkbands ein wenig zu formell aussah. Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das erste, was wir mit unserer Tabelle tun müssen, ist die Abstände sortieren – das Standard-Tabellenstyling ist so beengt! Um dies zu tun, fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
table {
  table-layout: fixed;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Die wichtigsten Punkte hierbei sind:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist generell eine gute Idee, um auf Ihrer Tabelle zu setzen, da dies das Verhalten der Tabelle standardmäßig etwas vorhersehbarer macht. Normalerweise tendieren Tabellenspalten dazu, nach dem Inhalt, den sie enthalten, bemessen zu werden, was einige merkwürdige Ergebnisse liefert. Mit `table-layout: fixed` können Sie Ihre Spalten gemäß der Breite ihrer Überschriften bemessen und dann den Inhalt entsprechend behandeln. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `80%`, einer {{cssxref("min-width")}} von `1000px` und einem {{cssxref("margin")}} von `0 auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle hauptsächlich ein breiteres Viewport ausfüllt und horizontal zentriert wird, während auf schmalen Viewports die Tabelle in einer lesbaren Breite bleibt und über den Bildschirm hinausgeht. Mobile Nutzer können dann beispielsweise scrollen, um die ganze Tabelle zu lesen. Dies ist vorzuziehen, als die Tabelle sich die Breite eines schmalen Bildschirms erstrecken und beengt und unleserlich wirken zu lassen.

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist praxisbewährte Vorgehensweise für jedes Tabellenstyling. Standardmäßig, wenn Sie Rahmen auf Tabellenelementen setzen, werden sie alle Zwischenräume dazwischen haben, wie das unten stehende Bild veranschaulicht: ![eine 2x2-Tabelle mit Standarträumen zwischen den Rändern ohne Rahmen-Zusammenführung](no-border-collapse.png) Dies sieht nicht sehr ansprechend aus (obwohl es das Aussehen sein könnte, das Sie möchten, wer weiß?). Mit `border-collapse: collapse;` gesetzt, kollabieren die Ränder zu einem, was viel besser aussieht: ![eine 2x2-Tabelle mit gesetzter border-collapse Eigenschaft, die zeigt, dass die Ränder zu einem kollabieren](border-collapse.png)
- Wir haben einige {{cssxref("padding")}} auf die {{htmlelement("th")}}- und {{htmlelement("td")}}-Elemente gesetzt – dies gibt den Datenelementen Raum zum Atmen und lässt die Tabelle viel lesbarer aussehen.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als nächstes werden wir uns mit der Ausrichtung der verschiedenen Datentypen innerhalb ihrer Zellen befassen. Die beste Vorgehensweise besagt, dass Text linksbündig und Zahlen rechtsbündig ausgerichtet sein sollten; das folgende CSS wird dies erreichen, also fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

```css
tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

Wir haben hier die {{cssxref(":nth-child")}}-Pseudoklasse verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein bestimmtes nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir es, um bestimmte `<td>`-Elemente in den <th>-Elementen auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tischreihen gesetzt haben, wobei die Reihen, die Text enthalten, viel breiter als die Reihen, die Zahlen enthalten, gesetzt werden. Dies ist eine gute Idee – die Reihen mit mehr Inhalt benötigen mehr Platz, um ihnen die beste Chance zu geben, ihren Inhalt in einer Zeile zu halten. Die Reihen mit weniger Inhalt benötigen nicht so viel Platz, um ihre Daten anzuzeigen, und in der Tat, wenn Sie ihnen viel Platz geben, gehen die Daten in dem Raum verloren und sind daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenelemente an der Oberseite ihrer Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td`-Regel auf die folgende:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um die Wirkung Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Ränder hinzufügen, um eine visuelle Trennung zwischen der Tabellen-`<caption>`, den Daten und der Summenzeile am unteren Rand zu schaffen. Um dies zu tun, fügen Sie die folgenden Regeln zu Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999;
}
```

Aktualisieren Sie dann Ihre bestehende `table`-Regel auf die folgende:

```css
table {
  table-layout: fixed;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
```

Speichern und aktualisieren; Ihre Tabelle sollte jetzt ziemlich gut lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie **Zebra-Streifen** implementiert werden – abwechselnde Farbzeilen, die die verschiedenen Datenzeilen in Ihrer Tabelle leichter zu durchsuchen und zu lesen machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eee;
}
```

Früher haben Sie gesehen, dass der {{cssxref(":nth-child")}}-Selektor verwendet wurde, um spezifische Kindelemente auszuwählen. Er kann auch eine Formel als Parameter haben, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden nummerierten Kinder auswählen (1, 3, 5 usw.) und die Formel `2n` würde alle geraden nummerierten Kinder auswählen (2, 4, 6 usw.). Wir haben das `odd`-Schlüsselwort in unserem Code verwendet, was eine Abkürzung für die `2n+1`-Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Die Beschriftung stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen – die Beschriftung stylen. Fügen Sie hierzu das folgende zu Ihrer `style.css`-Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier ist nichts Besonderes außer der {{cssxref("caption-side")}}-Eigenschaft, die den Wert `bottom` erhalten hat. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle positioniert wird.

## Schnelle Tipps zum Tabellendesign

Bevor wir weitermachen, dachten wir uns, dass wir Ihnen eine schnelle Liste der nützlichsten oben illustrierten Punkte geben:

- Gestalten Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbares Tabellenlayout zu schaffen, das es Ihnen ermöglicht, die Spaltenbreiten einfach durch Setzen der {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente in einander kollabieren zu lassen, was ein ordentliches und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Bereiche zu schaffen, auf die CSS angewendet werden kann, sodass es einfacher ist, bei Bedarf Styleschichten übereinander zu legen.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihren {{htmlelement("th")}}- und {{htmlelement("td")}}-Text auszurichten, um die Dinge ordentlicher und leichter nachvollziehbar zu gestalten.

## Zusammenfassung

Da das Thema Tabellenstyling nun hinter uns liegt, brauchen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel befasst sich mit dem Debugging von CSS – wie man Probleme wie Layouts, die nicht so aussehen wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn sie es Ihrer Meinung nach sollten, löst. Dies beinhaltet Informationen zur Verwendung der Entwicklerwerkzeuge (DevTools) des Browsers, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
