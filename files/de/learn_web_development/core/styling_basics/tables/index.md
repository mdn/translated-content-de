---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle sie erledigen. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet und hebt einige spezielle Techniken zum Tabellenstyling hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >HTML-Tabellen</a
        >, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> sowie <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich Rahmen-Zusammenführung.</li>
          <li>Klar hervorgehobene verschiedene Tabellensegmente, einschließlich Überschriften, Beschriftung, Kopfzeile, Textkörper und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Lassen Sie uns mit einer typischen HTML-Tabelle beginnen. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele sind über Schuhe, das Wetter oder Mitarbeiter; wir haben uns entschieden, die Dinge interessanter zu gestalten, indem wir sie über berühmte Punkbands aus Großbritannien machen. Das Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stylbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht sie nicht so toll aus. Mit nur dem Standard-Browserstyling sieht sie gedrängt, schwer lesbar und ein wenig langweilig aus:

{{embedlivesample("unstyled")}}

Wir müssen etwas CSS anwenden, um das zu korrigieren. Sie können eine Tabelle auf jede gewünschte Weise mit CSS stylen. Zum Beispiel haben wir dieses ziemlich "punkige" Design erstellt:

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
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("styled", "", "500")}}

Allerdings ist dieses Design ziemlich grell. In diesem Artikel werden wir Ihnen beibringen, wie man mit einigen Best Practices für Tabellendesign markiert, wie sie in [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben sind.

## Erste Schritte mit dem Styling unserer Tabelle

Lassen Sie uns gemeinsam das Styling unseres Tabellenbeispiels durcharbeiten.

1. Erstellen Sie zuerst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html) und speichern Sie es in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei mit dem Namen `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihr {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Laden Sie Ihr HTML in einen Browser, um zu sehen, wie es standardmäßig aussieht.

## Schriftart aktualisieren

Dies ist ein kleiner Punkt und nicht direkt relevant für das Tabellenstyling, aber wir fanden, dass die Standardschriftart für eine Tabelle über Punkbands ein wenig zu förmlich aussah. Beginnen Sie Ihr CSS, indem Sie die folgende Regel hinzufügen:

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abstände

Das Erste, was wir an unserer Tabelle ändern müssen, sind die Abstände — das Standard-Tabellenstyling ist so gedrängt! Fügen Sie am Ende Ihrer `style.css` Datei das folgende CSS hinzu:

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

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist generell eine gute Idee, da es das Verhalten der Tabelle etwas vorhersehbarer macht. Normalerweise neigen die Tabellenspalten dazu, entsprechend der Menge an Inhalten, die sie enthalten, dimensioniert zu werden, was zu einigen seltsamen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten entsprechend der Breite ihrer Überschriften dimensionieren und dann den Inhalt nach Bedarf anpassen. Chris Coyier erklärt diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Wir haben das feste Layout mit einer {{cssxref("width")}} von `80%`, einer {{cssxref("min-width")}} von `1000px` und einem {{cssxref("margin")}} von `0 auto` kombiniert. Diese Einstellungen bedeuten, dass die Tabelle größtenteils einen breiteren Anzeigebereich ausfüllt und horizontal zentriert ist, während sie auf schmalen Anzeigebereichen eine lesbare Breite beibehält und über den Bildschirm hinausgeht. Mobile Benutzer können dann beispielsweise scrollen, um die gesamte Tabelle zu lesen. Dies ist vorzuziehen, als die Tabelle auf die Breite eines schmalen Bildschirms zu strecken und gedrängt und unlesbar zu machen.

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist der Standard für jede Styling-Bemühung bei Tabellen. Standardmäßig, wenn Sie Rahmen auf Tabellenelementen setzen, werden sie alle Abstand zwischen sich haben, wie das unten stehende Bild zeigt: ![eine 2 mal 2 Tabelle mit Standardabstand zwischen den Rändern ohne Rahmen-Zusammenführung](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es das Aussehen sein könnte, das Sie wollen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, kollabieren die Ränder zu einem, was viel besser aussieht: ![eine 2 mal 2 Tabelle mit der Eigenschaft border-collapse auf collapse gesetzt, sodass die Ränder zu einem kollabieren](border-collapse.png)
- Wir haben etwas {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — das gibt den Datenpunkten etwas Platz zum Atmen, wodurch die Tabelle viel lesbarer aussieht.

Speichern Sie Ihren Code und aktualisieren Sie Ihren Browser, um die Ergebnisse zu sehen.

## Ausrichtung

Als Nächstes kümmern wir uns um die Ausrichtung der verschiedenen Datentypen in ihren Zellen. Best Practices diktieren, dass Sie Text links und Zahlen rechts ausrichten sollten; das folgende CSS wird dies erreichen, also fügen Sie es jetzt am Ende Ihrer CSS-Datei hinzu.

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

Wir haben hier die {{cssxref(":nth-child")}} Pseudoklasse verwendet; ein nützlicher Selektor, der es Ihnen ermöglicht, ein bestimmtes nummeriertes Kind eines Elements oder eine bestimmte Sequenz auszuwählen. Hier verwenden wir ihn, um bestimmte `<td>` Elemente innerhalb der `<th>` Elemente auszuwählen.

Beachten Sie, wie wir auch spezifische Breiten auf die Tabellenzeilen gesetzt haben, wobei die Zeilen mit Text viel breiter sind als die Zeilen mit Zahlen. Das ist eine gute Idee — die Zeilen mit mehr Inhalt benötigen mehr Platz, um ihren Inhalt ausgerichtet auf einer Linie unterzubringen. Die Zeilen mit weniger Inhalt benötigen nicht so viel Platz, und wenn Sie ihnen viel Platz geben, geht der Inhalt in diesem Raum verloren und wird daher schwerer lesbar.

Wir sollten auch sicherstellen, dass unsere Datenpunkte oben in ihren Zellen ausgerichtet sind, anstatt in der Mitte. Um dies zu erreichen, können wir die {{cssxref("vertical-align")}} Eigenschaft verwenden. Aktualisieren Sie Ihre bestehende `th, td` Regel auf die folgende:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Speichern Sie erneut und aktualisieren Sie, um die Wirkung Ihrer neuesten CSS-Updates zu sehen.

## Hinzufügen von Rahmen

Die Tabelle sieht jetzt schon viel besser aus, aber wir sollten ein paar Rahmen hinzufügen, um die visuelle Trennung zwischen der Tabellenbeschriftung, den Daten und der Summenzeile am unteren Rand zu gewährleisten. Um dies zu tun, fügen Sie die folgenden Regeln zu Ihrem CSS hinzu:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Aktualisieren Sie als Nächstes Ihre bestehende `table` Regel auf die folgende:

```css
table {
  table-layout: fixed;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Speichern und aktualisieren; Ihre Tabelle sollte jetzt schon recht gut lesbar aussehen!

## Zebra-Streifen

Wir wollten einen separaten Abschnitt zeigen, wie Sie **Zebra-Streifen** implementieren — wechselnde Reihen von Farben, die die verschiedenen Datenreihen in Ihrer Tabelle leichter lesbar machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Früher haben Sie den {{cssxref(":nth-child")}} Selektor gesehen, der verwendet wurde, um spezifische Kindelemente auszuwählen. Er kann auch eine Formel als Parameter erhalten, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeradzahligen Kinder auswählen (1, 3, 5, etc.) und die Formel `2n` würde alle geradzahligen Kinder auswählen (2, 4, 6, etc.) Wir haben das `odd` Schlüsselwort in unserem Code verwendet, das eine Abkürzung für die `2n+1` Formel ist (`even` ist eine Abkürzung für `2n`).

Vergessen Sie nicht, zu speichern und zu aktualisieren, um das Ergebnis zu sehen.

## Das Caption stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — das Caption stylen. Fügen Sie dazu das Folgende am Ende Ihrer `style.css` Datei hinzu:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Hier gibt es nichts Außergewöhnliches, außer der {{cssxref("caption-side")}} Eigenschaft, die den Wert `bottom` erhalten hat. Dadurch wird das Caption am unteren Rand der Tabelle positioniert.

## Schnelle Tipps zum Tabellenstyling

Bevor wir weitermachen, dachten wir, wir geben Ihnen eine schnelle Liste der nützlichsten Punkte, die oben illustriert wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten leicht durch Setzen von {{cssxref("width")}} auf ihre Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Rahmen der Tabellenelemente ineinander kollabieren zu lassen, was zu einem ordentlicheren und besser zu kontrollierenden Aussehen führt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche CSS-Anwendungspunkte zu erhalten, damit es einfacher ist, bei Bedarf Stile übereinanderzulegen.
- Verwenden Sie Zebra-Streifen, um alternative Reihen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihre {{htmlelement("th")}} und {{htmlelement("td")}} Texte auszurichten, damit alles ordentlicher und einfacher zu verfolgen ist.

## Zusammenfassung

Mit dem Styling von Tabellen ist nun abgeschlossen, wir müssen uns mit etwas anderem beschäftigen. Der nächste Artikel befasst sich mit dem Debuggen von CSS — wie man Probleme löst, wie z.B. Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn man denkt, dass sie sollten. Dies beinhaltet Informationen über die Verwendung der DevTools des Browsers, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
