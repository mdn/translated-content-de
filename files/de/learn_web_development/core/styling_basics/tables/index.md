---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Styling einer HTML-Tabelle ist vielleicht nicht die glamouröseste Aufgabe der Welt, aber manchmal muss es sein. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet und hebt dabei einige spezifische Techniken zur Tabellenstilgestaltung hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics">HTML-Tabellen</a>, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich des Zusammenfallens von Rändern.</li>
          <li>Deutliche Hervorhebung unterschiedlicher Tabellensegmente wie Überschriften, Beschriftungen, Header, Body und Footer.</li>
          <li>Wie man Zebra-Streifen umsetzt und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun ja, typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir entschieden uns, es interessanter zu machen, indem wir berühmte Punkbands aus Großbritannien behandeln. Das Markup sieht so aus:

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Merkmalen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht sehr ansprechend aus. Mit nur dem Standard-Browser-Styling wirkt sie beengt, schwer lesbar und ein wenig langweilig:

{{embedlivesample("unstyled")}}

Wir müssen etwas CSS verwenden, um das zu beheben. Sie können eine Tabelle nach Belieben mit CSS stylen. Zum Beispiel haben wir dieses recht "punkige" Design erstellt:

```css hidden live-sample___styled
/* font import */
@import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");

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
  background: url(https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg);
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
  background-image: url(https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png);
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

Dieses Design ist jedoch ziemlich grell. In diesem Artikel werden wir Ihnen helfen, es nach einigen Best Practices für das Tabellen-Design zu markieren — wie im Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Einstieg in das Styling unserer Tabelle

Arbeiten wir gemeinsam am Styling unseres Tabellenbeispiels.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html) und speichern Sie sie in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Dies ist ein kleiner Punkt und nicht unbedingt relevant für das Styling von Tabellen, aber wir fanden, dass die Standardschriftart etwas zu förmlich für eine Tabelle über Punkbands aussah. Beginnen Sie Ihr CSS mit der Hinzufügung der folgenden Regel:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das Erste, was wir an unserer Tabelle ändern müssen, sind die Abstände — das Standard-Tabellenstyling ist so beengt! Fügen Sie dazu das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

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

Die wichtigsten Punkte sind wie folgt:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee, um ihn auf Ihrer Tabelle zu setzen, da er das Verhalten der Tabelle von Haus aus etwas vorhersehbarer macht. Normalerweise werden Tabellenspalten aufgrund ihres Inhalts dimensioniert, was manchmal zu seltsamen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten gemäß der Breite ihrer Überschriften dimensionieren und sich dann entsprechend um den Inhalt kümmern. Chris Coyier beschreibt diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `80%`, einer {{cssxref("min-width")}} von `1000px` und einem {{cssxref("margin")}} von `0 auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle einen breiteren Anzeigebereich größtenteils ausfüllt und horizontal zentriert ist, während sie in schmalen Anzeigebereichen bei einer lesbaren Breite bleibt und sich über den Bildschirm hinaus erstreckt. Mobile Benutzer können zum Beispiel dann scrollen, um die gesamte Tabelle zu lesen. Dies ist vorzuziehen, als die Tabelle die Breite eines schmalen Bildschirms ausdehnen zu lassen, was beengt und unleserlich ist.

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist in jedem Versuch, Tabellen zu stylen, Standardpraxis. Standardmäßig, wenn Sie Grenzen auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie im unteren Bild dargestellt: ![eine 2x2-Tabelle mit Standardabständen zwischen den Grenzen, die keinen Grenzzusammenfall zeigt](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, fallen die Ränder zu einem zusammen, was viel besser aussieht: ![eine 2x2-Tabelle mit der Eigenschaft border-collapse: collapse, die zeigt, dass die Grenzen zusammenfallen](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}}- und {{htmlelement("td")}}-Elementen gesetzt — dies gibt den Daten ein wenig Platz zum Atmen, wodurch die Tabelle viel lesbarer aussieht.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Die beste Praxis besagt, dass Sie Text linksbündig und Zahlen rechtsbündig ausrichten sollten; das folgende CSS wird dies erreichen, also fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben hier die {{cssxref(":nth-child")}}-Pseudoklasse verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein spezifisch nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir ihn, um spezifische `<td>`-Elemente innerhalb der <th>-Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tabellenreihen gesetzt haben, wobei die Reihen mit Text viel breiter als die Reihen mit Zahlen gesetzt sind. Das ist eine gute Idee — die Reihen mit mehr Inhalt benötigen mehr Platz, um ihnen möglichst eine Chance zu geben, ihren Inhalt in einer Zeile zu haben. Die Reihen mit weniger Inhalt brauchen nicht viel Platz, um ihre Daten darzustellen, und in der Tat, wenn Sie ihnen viel Platz geben, gehen die Daten etwas im Raum verloren und sind daher schwerer lesbar.

Wir sollten auch sicherstellen, dass unsere Datenelemente an der Oberseite ihrer Zellen ausgerichtet sind statt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td`-Regel auf die folgende:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um die Wirkung Ihrer letzten CSS-Aktualisierungen zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht bereits viel besser aus, aber wir sollten einige Ränder hinzufügen, um eine visuelle Trennung zwischen der Tabellen-<caption>, den Daten und der Gesamtzeile am unteren Rand zu schaffen. Um dies zu tun, fügen Sie die folgenden Regeln zu Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999;
}
```

Nehmen Sie als Nächstes ein Update Ihrer existierenden `table`-Regel auf die folgende vor:

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

Speichern und aktualisieren Sie; Ihre Tabelle sollte jetzt anfangen, ziemlich lesbar zu wirken!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um zu zeigen, wie man **Zebra-Streifen** implementiert — alternierende Farbzeilen, die das Parsen und Lesen der unterschiedlichen Datenzeilen in Ihrer Tabelle erleichtern. Fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eee;
}
```

Früher sahen Sie den {{cssxref(":nth-child")}}-Selektor, der verwendet wurde, um spezifische Kind-Elemente auszuwählen. Er kann auch eine Formel als Parameter erhalten, damit er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, usw.) auswählen, und die Formel `2n` würde alle geraden Kinder (2, 4, 6, usw.) auswählen. Wir haben das `odd`-Schlüsselwort in unserem Code verwendet, das eine Abkürzung für die `2n+1`-Formel ist (`even` ist Abkürzung für `2n`).

Vergessen Sie wieder nicht zu speichern und aktualisieren, um das Ergebnis zu sehen.

## Stylen der Beschriftung

Es gibt eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Beschriftung stylen. Um dies zu tun, fügen Sie das folgende an das Ende Ihrer `style.css`-Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier ist nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die auf `bottom` gesetzt wurde. Dadurch wird die Beschriftung am unteren Rand der Tabelle positioniert.

## Schnelle Tipps zum Tabellen-Styling

Bevor wir fortfahren, dachten wir, wir geben Ihnen eine schnelle Liste der nützlichsten Punkte, die oben illustriert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie es flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, die Spaltenbreiten einfach durch das Setzen von {{cssxref("width")}} auf die Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente ineinander fallen zu lassen, was ein ordentlicheres und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Orte zu bieten, um CSS anzuwenden, damit es einfacher ist, Stile übereinander zu schichten, falls erforderlich.
- Verwenden Sie Zebra-Streifen, um alternative Reihen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}} zur Ausrichtung Ihres {{htmlelement("th")}} und {{htmlelement("td")}}-Texts, um die Übersichtlichkeit und Nachverfolgbarkeit zu verbessern.

## Zusammenfassung

Mit dem Styling von Tabellen ist das nächste Thema an der Reihe. Der nächste Artikel behandelt das Debuggen von CSS — wie man Probleme löst, z. B. dass Layouts nicht wie erwartet aussehen oder Eigenschaften nicht angewendet werden, wenn man denkt, dass sie es sollten. Dies schließt Informationen zur Verwendung von Browser-DevTools zur Lösung Ihrer Probleme ein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
