---
title: Gestaltung von Tabellen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Die Gestaltung einer HTML-Tabelle ist vielleicht nicht die aufregendste Aufgabe der Welt, aber manchmal müssen wir alle sie erledigen. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestalten kann, mit einigen spezifischen Techniken zur Tabellengestaltung.

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
          <li>Umgang mit Abständen in Tabellen, einschließlich Rahmenüberlappung.</li>
          <li>Klare Hervorhebung verschiedener Tabellenbereiche wie Überschriften, Beschriftung, Kopfzeile, Körper und Fußzeile.</li>
          <li>Wie man Zebra-Streifen umsetzt und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Naja, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Angestellten; wir entschieden uns, die Dinge interessanter zu machen, indem wir sie über berühmte Punkbands aus dem Vereinigten Königreich gestalten. Das Markup sieht folgendermaßen aus:

```html live-sample___unstyled live-sample___punk-style live-sample___best-practice-style
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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht sie nicht besonders toll aus. Mit nur der Standard-Browser-Stilierung wirkt sie gedrängt, schwer lesbar und ein wenig langweilig:

{{embedlivesample("unstyled", "", "200")}}

Wir müssen etwas CSS verwenden, um dies zu verbessern. Sie können eine Tabelle mit CSS auf jede gewünschte Weise gestalten. Zum Beispiel haben wir dieses ziemlich "punkige" Design erstellt:

```css hidden live-sample___punk-style
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
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("punk-style", "", "500")}}

Allerdings ist dieses Design ziemlich grell. In diesem Artikel werden wir Ihnen zeigen, wie Sie es mit einigen bewährten Praktiken zur Tabellengestaltung markieren können — wie im Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben.

## Einstieg in die Gestaltung unserer Tabelle

Lassen Sie uns gemeinsam durch die Gestaltung unseres Tabellenbeispiels arbeiten.

1. Beginnen Sie damit, eine lokale Kopie des [früher gezeigten](#eine_typische_html-tabelle) Beispiel-Markups zu erstellen und irgendwo auf Ihrem lokalen Computer in einem Arbeitsverzeichnis zu speichern.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile in Ihrem {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Aktualisierung der Schriftart

Dies ist ein kleiner Punkt und nicht streng genommen relevant für die Tabellenstilierung, aber wir fanden, dass die Standardschriftart für eine Tabelle über Punkbands ein wenig zu formell aussieht. Beginnen Sie Ihr CSS mit der folgenden Regel:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das Erste, was wir an unserer Tabelle ändern müssen, ist das Sortieren der Abstände – die Standard-Tabellenstilierung ist so gedrängt! Um dies zu tun, fügen Sie folgendes CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Die wichtigsten Punkte, die zu beachten sind, sind folgende:

- Ein Wert von `fixed` für {{cssxref("table-layout")}} ist im Allgemeinen eine gute Idee, da er die Tabelle standardmäßig etwas vorhersehbarer macht. Normalerweise tendieren die Tabellenspalten dazu, je nach dem enthaltenen Inhalt dimensioniert zu werden, was einige seltsame Ergebnisse produziert. Mit `table-layout: fixed` können Sie Ihre Spalten nach der Breite ihrer Überschriften dimensionieren und dann deren Inhalt entsprechend behandeln. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `90%` und einem {{cssxref("margin")}} von `10px auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle größtenteils den Ansichtsbereich ausfüllen und horizontal zentriert sein wird.

- Ein Wert von `collapse` für {{cssxref("border-collapse")}} ist der Standard, wenn es um die Gestaltung von Tabellen geht. Standardmäßig, wenn Sie Rahmen auf Tabellenelemente setzen, haben sie alle Abstände zwischen ihnen, wie das unten gezeigte Bild veranschaulicht: ![eine 2 bei 2 Tabelle mit Standardabstand zwischen den Rändern, die keine Rahmenüberlappung zeigt](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es das Aussehen sein könnte, das Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, kollabieren die Rahmen zu einem, das sieht viel besser aus: ![eine 2 bei 2 Tabelle mit gesetzter Rahmenkollaps-Eigenschaft, die zeigt, wie die Rahmen in einem zusammenfallen](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}}-Elementen gesetzt — das gibt den Datenelementen etwas Raum zum Atmen, was die Tabelle viel lesbarer macht.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als Nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen innerhalb ihrer Zellen. Best Practices legen nahe, dass Sie Text linksbündig und Zahlen rechtsbündig ausrichten sollten; das folgende CSS wird dies erreichen, also fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben hier die {{cssxref(":nth-child")}} Pseudo-Klasse verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein bestimmtes nummeriertes Kind eines Elements oder eine spezielle Sequenz auszuwählen. Hier verwenden wir es, um spezifische `<td>`-Elemente innerhalb der `<th>`-Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf den Tabellenzeilen gesetzt haben, wobei die Zeilen mit Text viel breiter sind als die Zeilen mit Zahlen. Dies ist eine gute Idee — die Zeilen mit mehr Inhalt benötigen mehr Platz, um ihnen so viel wie möglich die Chance zu geben, ihren Inhalt in einer Zeile zu haben. Die Zeilen mit weniger Inhalt benötigen nicht so viel Platz, um ihre Daten anzuzeigen, und tatsächlich kann bei viel Platz die Daten in dem Raum verloren gehen und sind daher schwerer zu lesen.

Wir sollten auch sicherstellen, dass unsere Datenelemente am oberen Rand ihrer Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td`-Regel zu folgendem:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um den Effekt Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rahmen

Die Tabelle sieht schon viel besser aus, aber wir sollten einige Rahmen hinzufügen, um die visuelle Trennung zwischen der Tabelle `<caption>`, den Daten und der Summenzeile unten deutlich zu machen. Fügen Sie dazu die folgenden Regeln in Ihr CSS ein:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als Nächstes Ihre bestehende `table`-Regel zu folgendem:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Speichern und aktualisieren; Ihre Tabelle sollte jetzt ziemlich lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie man **Zebrabstreifen** umsetzt — abwechselnde Reihen von Farben, die die unterschiedlichen Datenzeilen in Ihrer Tabelle leichter durchsuchbar und lesbar machen. Fügen Sie folgendes CSS am Ende Ihrer `style.css`-Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Vorhin haben Sie den {{cssxref(":nth-child")}}-Selektor gesehen, wie er verwendet wurde, um bestimmte Kindelemente auszuwählen. Er kann auch eine Formel als Parameter erhalten, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, etc.) auswählen und die Formel `2n` würde alle geraden Kinder (2, 4, 6, etc.) auswählen. Wir haben das `odd`-Schlüsselwort in unserem Code verwendet, das eine Abkürzung für die `2n+1`-Formel ist (`even` ist Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Styling der Beschriftung

Es gibt noch eine letzte Sache, die wir an unserer Tabelle tun müssen — das Styling der Beschriftung. Um dies zu tun, fügen Sie folgendes am Ende Ihrer `style.css`-Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}}-Eigenschaft, die auf einen Wert von `bottom` gesetzt wurde. Dies bewirkt, dass die Beschriftung am unteren Rand des Tisches positioniert wird.

## Fertige Tabelle

Ihr fertiges Tabellendesign sollte folgendermaßen aussehen:

```css hidden live-sample___best-practice-style
html {
  font-family: Arial, Helvetica, sans-serif;
}

table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

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

tfoot {
  border-top: 1px solid #999999;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

{{embedlivesample("best-practice-style", "", "520")}}

## Schnelle Tipps zur Tabellengestaltung

Bevor wir weitergehen, dachten wir, wir liefern Ihnen eine kurze Liste der nützlichsten Punkte, die oben erläutert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie Dinge flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen erlaubt, Spaltenbreiten einfach durch Festlegen der {{cssxref("width")}} auf ihre Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente ineinander übergehen zu lassen, was ein ordentlicheres und leichter kontrollierbares Aussehen schafft.
- Nutzen Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Teile zu gliedern und zusätzliche Punkte anzubieten, um CSS darauf anzuwenden, sodass es einfacher ist, wenn nötig Stile übereinanderzulegen.
- Verwenden Sie Zebra-Streifen, um alternative Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}}- und {{htmlelement("td")}}-Texte auszurichten, um die Dinge ordentlicher und leichter nachvollziehbar zu gestalten.

## Zusammenfassung

Mit der Gestaltung von Tabellen jetzt hinter uns benötigen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel untersucht das Debugging von CSS — wie man Probleme löst, z. B. dass Layouts nicht so aussehen, wie sie sollten, oder dass Eigenschaften nicht angewendet werden, wenn Sie denken, dass sie es sollten. Dies beinhaltet Informationen über die Verwendung von Browser-Entwicklertools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
