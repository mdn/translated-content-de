---
title: Tabellen stylen
slug: Learn/CSS/Building_blocks/Styling_tables
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}

Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe auf der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel bietet einen Leitfaden, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Techniken zum Tabellendesign.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Wissen über
        <a href="/de/docs/Learn/HTML/Tables">HTML-Tabellen</a> und eine Vorstellung davon,
        wie CSS funktioniert (studieren Sie CSS erste Schritte).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die effektive Gestaltung von HTML-Tabellen zu erlernen.</td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, es interessanter zu gestalten, indem wir sie über berühmte Punkbands aus dem Vereinigten Königreich machen. Das Markup sieht folgendermaßen aus:

```html
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

    <!-- several other great bands -->

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

Die Tabelle ist schön markiert, einfach gestaltbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Leider sieht sie beim Rendern auf dem Bildschirm nicht gut aus (sehen Sie sich das live an unter [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle mit einer Übersicht über berühmte Punkbands aus dem Vereinigten Königreich](table-unstyled.png)

Mit nur dem Standard-Browser-Design sieht sie gedrängt, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um dies zu beheben.

## Unser Tabelle gestalten

Arbeiten wir gemeinsam das Styling unseres Tabellenbeispiels durch.

1. Zu Beginn, machen Sie eine lokale Kopie des [Beispielmarkups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)) herunter und legen Sie die drei resultierenden Dateien in ein Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende Zeile HTML in Ihr {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

### Abstände und Layout

Das Erste, was wir tun müssen, ist die Abstände/Layout zu klären — das Standard-Tabellenstyling ist so beengt! Fügen Sie hierzu das folgende CSS in Ihre Datei `style.css` ein:

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
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
```

Die wichtigsten Punkte sind wie folgt:

- Ein {{cssxref("table-layout")}}-Wert von `fixed` ist im Allgemeinen eine gute Idee, auf Ihrer Tabelle zu setzen, da er dafür sorgt, dass sich die Tabelle standardmäßig etwas vorhersehbarer verhält. Normalerweise neigen Tabellen dazu, die Spalten basierend darauf zu dimensionieren, wie viel Inhalt sie enthalten, was zu einigen merkwürdigen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten gemäß der Breite ihrer Überschriften dimensionieren und dann ihren Inhalt nach Bedarf behandeln. Deshalb haben wir die vier verschiedenen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ("Wählen Sie das n-te Kind aus, das ein {{htmlelement("th")}} Element in einer Sequenz innerhalb eines {{htmlelement("thead")}} Elements ist") ausgewählt und ihnen festgelegte prozentuale Breiten gegeben. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Möglichkeit bietet, Ihre Tabellenspalten zu dimensionieren. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% kombiniert, was bedeutet, dass die Tabelle jeden Container ausfüllt, in den sie gesetzt wird, und ansprechend aussieht (obwohl sie immer noch ein wenig Arbeit benötigt, um auf schmalen Bildschirmbreiten gut auszusehen).

- Ein {{cssxref("border-collapse")}}-Wert von `collapse` ist Standard-Best-Practice für jedes Tabellendesign. Standardmäßig, wenn Sie Ränder auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie das untenstehende Bild illustriert: ![eine 2-mal-2 Tabelle mit Standard-Abständen zwischen den Rändern ohne Zusammenschluss der Ränder](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` setzen sich die Ränder zu einem zusammen, was viel besser aussieht: ![eine 2-mal-2 Tabelle mit gesetzter border-collapse-Eigenschaft zu collapse zeigt, wie die Ränder zu einem zusammengefasst werden](border-collapse.png)
- Wir haben einen {{cssxref("border")}} um die gesamte Tabelle gesetzt, was notwendig ist, weil wir später einige Ränder um die Tabellenüberschrift und den Fuß setzen werden — es sieht wirklich merkwürdig und unzusammenhängend aus, wenn Sie keinen Rand um das gesamte Äußere der Tabelle haben und Lücken entstehen.
- Wir haben etwas {{cssxref("padding")}} auf die {{htmlelement("th")}}- und {{htmlelement("td")}}-Elemente gesetzt — dies gibt den Daten Elementen etwas Raum zum Atmen, was die Tabelle viel lesbarer erscheinen lässt.

An diesem Punkt sieht unsere Tabelle schon viel besser aus:

![eine halbgestylte Tabelle mit Abständen, um die Daten lesbarer zu machen und eine Übersicht über berühmte Punkbands aus dem Vereinigten Königreich zeigt](table-with-spacing.png)

### Einfache Typografie

Jetzt werden wir unser Text etwas ordnen.

Zuerst haben wir ein Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punkbands geeignet ist. Sie können dort hingehen und eine andere finden, wenn Sie möchten; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}}-Element und die benutzerdefinierte {{cssxref("font-family")}}-Deklaration mit denen ersetzen, die Google Fonts Ihnen gibt.

Fügen Sie zuerst das folgende {{htmlelement("link")}}-Element in Ihren HTML-Kopf ein, direkt über Ihr bestehendes `<link>` Element:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun das folgende CSS in Ihre Datei `style.css` ein, unter der vorherigen Ergänzung:

```css
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
```

Es gibt nichts wirklich Spezifisches zu Tabellen hier; wir passen allgemein das Schriftstiling an, um die Lesbarkeit zu verbessern:

- Wir haben einen globalen sans-serif Schriftstapel gesetzt; dies ist rein eine stilistische Wahl. Wir haben auch unsere benutzerdefinierte Schriftart auf den Überschriften innerhalb der {{htmlelement("thead")}}- und {{htmlelement("tfoot")}}-Elemente gesetzt, für einen schönen rauen, punkigen Look.
- Wir haben etwas {{cssxref("letter-spacing")}} auf den Überschriften und Zellen gesetzt, da wir fühlen, dass es die Lesbarkeit unterstützt. Auch hier hauptsächlich eine stilistische Wahl.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert, damit sie sich mit den Überschriften ausrichten. Standardmäßig erhalten Zellen einen {{cssxref("text-align")}}-Wert von `left`, und Überschriften erhalten einen Wert von `center`, aber im Allgemeinen sieht es besser aus, wenn die Ausrichtungen für beide gleich gesetzt sind. Das Standard-Schriftgewicht auf den Überschriften ist genug, um ihr Aussehen zu unterscheiden.
- Wir haben die Überschrift im {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, damit sie besser optisch mit ihrem Datenpunkt assoziiert ist.

Das Ergebnis sieht etwas ordentlicher aus:

![eine gestylte Tabelle mit einem globalen sans-serif Schriftstapel und guten Abständen, um die Daten lesbarer zu machen und eine Übersicht über berühmte Punkbands aus dem Vereinigten Königreich zeigt](table-with-typography.png)

### Grafiken und Farben

Nun zu Grafiken und Farben! Da die Tabelle voll ist mit Punk und Attitüde, müssen wir ihr ein helles, imposantes Styling verleihen, das dazu passt. Keine Sorge, Sie müssen Ihre Tabellen nicht so laut gestalten — Sie können sich für etwas Dezenteres und Geschmackvolleres entscheiden.

Beginnen Sie, indem Sie folgendes CSS in Ihre Datei `style.css` einfügen, erneut am Ende:

```css
/* graphics and colors */

thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 50%));
  border: 3px solid purple;
}
```

Auch hier gibt es nichts Spezifisches für Tabellen, aber es lohnt sich, ein paar Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} zu {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Textes im Header und Footer auf weiß geändert (und ihm einen {{cssxref("text-shadow")}} gegeben), damit er lesbar ist. Sie sollten immer sicherstellen, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, damit er lesbar ist.

Wir haben auch einen linearen Verlauf zu den {{htmlelement("th")}}- und {{htmlelement("td")}}-Elementen im Header und Footer hinzugefügt, für eine schöne Texturnote, sowie diesen Elementen einen hellen lila Rand gegeben. Es ist nützlich, mehrere geschachtelte Elemente zur Verfügung zu haben, damit Sie Stile übereinander legen können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}}- und {{htmlelement("tfoot")}}-Elementen unter Verwendung mehrerer Hintergrundbilder platzieren können, aber wir haben uns entschieden, es separat zu tun, zum Vorteil älterer Browser, die mehrere Hintergrundbilder oder lineare Verläufe nicht unterstützen.

#### Zebra-Stripes

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie man **Zebra-Streifen** implementiert — abwechselnde Farbzeilen, die die verschiedenen Datenzeilen in Ihrer Tabelle einfacher lesbar und nachvollziehbar machen. Fügen Sie das folgende CSS am Ende Ihrer Datei `style.css` hinzu:

```css
/* zebra striping */

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- Früher haben Sie den {{cssxref(":nth-child")}}-Selektor gesehen, der verwendet wird, um bestimmte Kind-Elemente auszuwählen. Er kann auch mit einer Formel als Parameter angegeben werden, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder auswählen (1, 3, 5, usw.) und die Formel `2n` würde alle geraden Kinder auswählen (2, 4, 6, usw.) Wir haben die Schlüsselwörter `odd` und `even` in unserem Code verwendet, die genau dasselbe wie die oben genannten Formeln tun. In diesem Fall geben wir den ungeraden und geraden Zeilen unterschiedliche (kräftige) Farben.
- Wir haben auch eine sich wiederholende Hintergrundkachel zu allen Körperzeilen hinzugefügt, die nur ein wenig Rauschen ist (ein halbtransparentes `.png` mit ein wenig visueller Verzerrung darauf), um ein bisschen Textur zu bieten.
- Zuletzt haben wir der gesamten Tabelle eine feste Hintergrundfarbe gegeben, damit Browser, die den `:nth-child`-Selektor nicht unterstützen, immer noch einen Hintergrund für ihre Körperzeilen haben.

Diese Farbexplosion führt zu folgendem Look:

![eine gut gestylte Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und die gesamte Tabelle mit festem Hintergrund, um die Daten, die eine Übersicht über berühmte Punkbands aus dem Vereinigten Königreich zeigen, ansprechender zu machen](table-with-color.png)

Nun, das mag etwas übertrieben sein und nicht Ihrem Geschmack entsprechen, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

### Die Caption stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Caption stylen. Um dies zu tun, fügen Sie das Folgende am Ende Ihrer Datei `style.css` hinzu:

```css
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

Es gibt hier nichts Bemerkenswertes, außer für die {{cssxref("caption-side")}} Eigenschaft, die auf den Wert `bottom` gesetzt wurde. Dies führt dazu, dass die Caption am unteren Ende der Tabelle positioniert wird, was zusammen mit den anderen Deklarationen uns diesen endgültigen Look gibt (sehen Sie es live unter [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unterhalb der gestylten Tabelle mit einer Caption, die beschreibt, worum es in der Tabelle geht. "eine Übersicht über berühmte Punkbands aus dem Vereinigten Königreich" in diesem Fall](table-with-caption.png)

## Schnelle Tipps zum Tabellendesign

Bevor Sie weitermachen, dachten wir, wir würden Ihnen eine schnelle Liste der nützlichsten oben illustrierten Punkte zur Verfügung stellen:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie Dinge flexibel, z. B. durch die Verwendung von Prozentangaben, sodass das Design reaktionsfähiger ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu schaffen, das es Ihnen ermöglicht, die Spaltenbreiten leicht zu setzen, indem Sie {{cssxref("width")}} auf ihre Überschriften ({{htmlelement("th")}}) setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente ineinander zusammenfallen zu lassen und ein ordentlicheres und leichter zu kontrollierendes Aussehen zu erzeugen.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Teile zu unterbrechen und zusätzliche Orte zum Anwenden von CSS bereitzustellen, sodass es einfacher ist, Stile übereinander zu legen, wenn erforderlich.
- Verwenden Sie Zebra-Stripes, um alternative Zeilen einfacher lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihren {{htmlelement("th")}}- und {{htmlelement("td")}}-Text auszurichten, um Dinge ordentlicher und einfacher nachvollziehbar zu machen.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Tabellen](/de/docs/Learn/CSS/Building_blocks/Tables_tasks).

## Zusammenfassung

Nachdem wir das Stylen von Tabellen nun hinter uns gebracht haben, brauchen wir etwas anderes, um unsere Zeit zu beschäftigen. Der nächste Artikel untersucht [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) — wie man Probleme löst, wie zum Beispiel Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie sollten. Dies beinhaltet Informationen zur Verwendung von Browser-DevTools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}
