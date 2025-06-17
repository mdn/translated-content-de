---
title: Tabellen stilisieren
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, und hebt einige spezifische Techniken für das Styling von Tabellen hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a
        >, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich des Zusammenfassens von Rahmen.</li>
          <li>Deutliche Hervorhebung verschiedener Tabellenbereiche einschließlich Überschriften, Beschriftung, Header, Body und Footer.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, es interessanter zu gestalten, indem wir es über berühmte Punkbands aus dem Vereinigten Königreich machen. Der Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie nicht besonders gut aus. Mit dem nur standardmäßigen Browser-Styling sieht sie beengt, schwer lesbar und etwas langweilig aus:

{{embedlivesample("unstyled")}}

Wir müssen etwas CSS verwenden, um dies zu verbessern. Sie können eine Tabelle mit CSS beliebig gestalten. Zum Beispiel haben wir dieses ziemlich "punkige" Design erstellt:

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
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
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

Dieses Design ist jedoch ziemlich grell. In diesem Artikel werden wir Sie dazu bringen, es mit einigen Best Practices für das Tabellendesign zu gestalten — wie im [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Einstieg in das Styling unserer Tabelle

Arbeiten wir zusammen das Styling unseres Tabellenelements durch.

1. Erstellen Sie zuerst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html) und speichern Sie es in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie diese im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Dies ist ein kleiner Punkt und nicht strikt relevant für das Styling von Tabellen, aber wir fanden, dass die Standardschriftart etwas zu formell für eine Tabelle über Punkbands aussah. Beginnen Sie Ihr CSS mit der folgenden Regel:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das erste, was wir an unserer Tabelle ändern müssen, sind die Abstände — das Standard-Tabellenstyling ist so beengt! Um das zu tun, fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

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

Die wichtigsten Teile, die zu beachten sind:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee für Ihre Tabelle, da es die Tabelle standardmäßig etwas vorhersehbarer macht. Normalerweise neigen Tabellen-Spalten dazu, entsprechend dem Inhalt, den sie enthalten, dimensioniert zu werden, was seltsame Ergebnisse erzeugt. Mit `table-layout: fixed` können Sie Ihre Spalten entsprechend der Breite ihrer Überschriften dimensionieren und dann den Inhalt entsprechend handhaben. Chris Coyier behandelt diese Technik detaillierter in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `80%`, einer {{cssxref("min-width")}} von `1000px` und einem {{cssxref("margin")}} von `0 auto` gekoppelt. Diese Einstellungen bedeuten, dass die Tabelle größtenteils einen breiteren Viewport ausfüllt und horizontal zentriert wird, während sie auf schmalen Viewports bei einer lesbaren Breite bleibt und über den Bildschirm hinaus ragt. Mobile Benutzer können dann beispielsweise scrollen, um die gesamte Tabelle zu lesen. Dies ist besser, als die Tabelle auf die Breite eines schmalen Bildschirms zu strecken und sie beengt und unlesbar zu machen.

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist Standard bei jedem Table-Styling-Versuch. Standardmäßig, wenn Sie Rahmen auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie das folgende Bild veranschaulicht: ![eine 2x2 Tabelle mit Standardabstand zwischen den Rändern, die keine Randzusammenführung zeigt](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, kollabieren die Ränder zu einem, was viel besser aussieht: ![eine 2x2 Tabelle mit der Einstellung zur Randzusammenführung, die Ränder in einem zeigt](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}}-Elementen gesetzt — dies gibt den Dateneinträgen etwas Raum zum Atmen, wodurch die Tabelle viel lesbarer aussieht.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als nächstes befassen wir uns mit der Ausrichtung der verschiedenen Datentypen innerhalb ihrer Zellen. Die besten Praktiken diktieren, dass Sie Text nach links und Zahlen nach rechts ausrichten sollten; das folgende CSS erreicht das, fügen Sie es also jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben die {{cssxref(":nth-child")}}-Pseudoklasse hier verwendet; ein nützlicher Selektor, der es ermöglicht, ein spezifisches nummeriertes Kind eines Elements oder eine spezifische Sequenz auszuwählen. Hier verwenden wir es, um bestimmte `<td>`-Elemente innerhalb der `<th>`-Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tabellenzeilen gesetzt haben, wobei die Zeilen, die Text enthalten, viel breiter gesetzt sind als die Zeilen, die Zahlen enthalten. Dies ist eine gute Idee — die Zeilen, die mehr Inhalt enthalten, brauchen mehr Platz, um ihnen so viel Chance wie möglich zu geben, ihren Inhalt in einer Zeile zu haben. Die Zeilen, die weniger Inhalt enthalten, brauchen nicht so viel Platz, um ihre Daten anzuzeigen, und tatsächlich, wenn Sie ihnen viel Platz geben, geht der Inhalt in dem Raum verloren und ist daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenelemente an der Oberseite ihrer Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Aktualisieren Sie Ihre vorhandene `th, td`-Regel zu der folgenden:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um den Effekt Ihrer letzten CSS-Updates zu sehen.

## Hinzufügen von Rändern

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Ränder hinzufügen, um eine visuelle Trennung zwischen der Tabellen-`<caption>`, den Daten und der Gesamtzeile am unteren Rand zu bieten. Um dies zu tun, fügen Sie die folgenden Regeln zu Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999;
}
```

Aktualisieren Sie als Nächstes Ihre vorhandene `table`-Regel zu der folgenden:

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

Speichern und aktualisieren Sie; Ihre Tabelle sollte nun ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt darauf verwenden, Ihnen zu zeigen, wie man **Zebra-Streifen** implementiert — abwechselnde Zeilen mit Farbe, die die verschiedenen Datenzeilen in Ihrer Tabelle leichter zu parsen und lesen machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eee;
}
```

Früher sahen Sie den {{cssxref(":nth-child")}}-Selektor, der verwendet wird, um spezifische Kindelemente auszuwählen. Ihm kann auch eine Formel als Parameter gegeben werden, sodass eine Sequenz von Elementen ausgewählt wird. Die Formel `2n+1` würde alle ungeradzahligen Kinder (1, 3, 5, usw.) auswählen, und die Formel `2n` würde alle geradzahligen Kinder (2, 4, 6, usw.) auswählen. Wir haben das Schlüsselwort `odd` in unserem Code verwendet, das eine Abkürzung für die Formel `2n+1` ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Die Beschriftung stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Beschriftung stylen. Um dies zu tun, fügen Sie das folgende am Ende Ihrer `style.css`-Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die mit einem Wert von `bottom` versehen wurde. Dadurch wird die Beschriftung am unteren Rand der Tabelle positioniert.

## Schnelle Tipps zum Tabellenstyling

Bevor wir weitergehen, dachten wir, wir geben Ihnen eine schnelle Liste der nützlichsten oben illustrierten Punkte:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie es flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten einfach festzulegen, indem Sie {{cssxref("width")}} auf ihren Überschriften ({{htmlelement("th")}}) festlegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, damit die Ränder der Tabellenelemente ineinander zusammenfallen, was ein ordentlicheres und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Teile zu gliedern und zusätzliche CSS-Zugriffspunkte zu bieten, sodass es einfacher ist, falls erforderlich, Stilarten übereinander zu legen.
- Verwenden Sie Zebra-Streifen, um alternative Zeilen lesbarer zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}} und {{htmlelement("td")}}-Texte auszurichten, um Dinge ordentlicher und leichter nachvollziehbar zu machen.

## Zusammenfassung

Da das Styling von Tabellen jetzt hinter uns liegt, brauchen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel befasst sich mit Fehlersuche in CSS — wie man Probleme löst, wie zum Beispiel Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, sie sollten es. Dies beinhaltet Informationen zur Verwendung von Browser-Entwicklerwerkzeugen, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
