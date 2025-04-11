---
title: Tabellen stylen
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Das Stylen einer HTML-Tabelle ist vielleicht nicht der glamouröseste Job der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet und hebt einige spezielle Techniken zum Tabellenstyling hervor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics">HTML Tabellen</a>, CSS <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Werte und Einheiten</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenanpassungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Umgang mit Abständen in Tabellen, einschließlich der Rahmenkollaps.</li>
          <li>Deutliches Hervorheben verschiedener Tabellenbereiche einschließlich Überschriften, Beschriftung, Kopfzeile, Körper und Fußzeile.</li>
          <li>Wie man das Zebramuster implementiert und warum es nützlich ist.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit dem Blick auf eine typische HTML-Tabelle. Nun ja, typisch - die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Angestellten; wir haben beschlossen, es interessanter zu gestalten, indem wir es über berühmte Punkbands aus dem UK machen. Das Markup sieht folgendermaßen aus:

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

Die Tabelle ist gut markiert, leicht zu stylen und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}} usw. Leider sieht sie nicht gut aus, wenn sie auf dem Bildschirm gerendert wird (siehe live bei [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle mit einer Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-unstyled.png)

Mit nur dem standardmäßigen Browser-Styling sieht sie gedrängt, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um dies zu beheben.

## Erste Schritte mit dem Stylen unserer Tabelle

Arbeiten wir gemeinsam das Stylen unseres Tabellenbeispiels durch.

1. Erstellen Sie zu Beginn eine lokale Kopie des [Beispielmarkups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder herunter ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)), und speichern Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis irgendwo auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei namens `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile in Ihr {{htmlelement("head")}} einfügen:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

## Abstände und Layout

Das Erste, was wir tun müssen, ist, die Abstände/Layout zu sortieren — das Standard-Tabellenstyling ist so gedrängt! Fügen Sie dazu das folgende CSS zu Ihrer `style.css` Datei hinzu:

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

Die wichtigsten Punkte, die zu beachten sind, sind wie folgt:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, ihn auf Ihrer Tabelle zu setzen, da er die Tabelle von Haus aus etwas vorhersehbarer macht. Normalerweise neigen die Tabellenspalten dazu, entsprechend der Menge des Inhalts, den sie enthalten, dimensioniert zu werden, was einige seltsame Ergebnisse produziert. Mit `table-layout: fixed`, können Sie Ihre Spalten entsprechend der Breite ihrer Überschriften dimensionieren und dann mit ihrem Inhalt entsprechend umgehen. Aus diesem Grund haben wir die vier verschiedenen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ausgewählt ("Wählen Sie das n-te Kind, das ein {{htmlelement("th")}} Element in einer Sequenz ist, innerhalb eines {{htmlelement("thead")}} Elements") und ihnen festgelegte prozentuale Breiten gegeben. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Methode ist, um Ihre Tabellenspalten zu dimensionieren. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% gekoppelt, was bedeutet, dass die Tabelle jeden Behälter füllt, in den sie eingesetzt wird, und schön responsiv ist (obwohl sie noch etwas mehr Arbeit benötigen würde, um auch bei schmalen Bildschirmbreiten gut auszusehen).

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist Standard-Best-Practice für jeden Tabellestyling-Versuch. Standardmäßig, wenn Sie Grenzen auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie das untenstehende Bild illustriert: ![eine 2x2 Tabelle mit Standardabständen zwischen den Grenzen, die keinen Rahmenkollaps zeigt](no-border-collapse.png) Dies sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, kollabieren die Grenzen zu einem, was viel besser aussieht: ![eine 2x2 Tabelle mit eingestellter border-collapse-Eigenschaft auf collapse, die zeigt, dass die Grenzen zu einem kollabieren](border-collapse.png)
- Wir haben eine {{cssxref("border")}} um die gesamte Tabelle gesetzt, was benötigt wird, da wir später einige Grenzen um die Tabellenüberschrift und -fußzeile setzen werden — es sieht wirklich seltsam und zusammenhangslos aus, wenn Sie keine Grenze um die gesamte Außenseite der Tabelle haben und mit Lücken enden.
- Wir haben einige {{cssxref("padding")}} auf den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen gesetzt — dies gibt den Datenelementen etwas Raum zum Atmen und macht die Tabelle viel besser lesbar.

Zu diesem Zeitpunkt sieht unsere Tabelle bereits viel besser aus:

![eine halb gestylte Tabelle mit Abständen, um die Daten besser lesbar zu machen und zeigt eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-with-spacing.png)

## Einfache Typografie

Jetzt kümmern wir uns ein wenig um unser Textstyling.

Zunächst haben wir eine Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die sich für eine Tabelle über Punkbands eignet. Sie können dort hingehen und eine andere finden, wenn Sie möchten; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}} Element und die benutzerdefinierte {{cssxref("font-family")}} Deklaration mit denen ersetzen, die Google Fonts Ihnen gibt.

Fügen Sie zunächst das folgende {{htmlelement("link")}} Element in Ihren HTML-Kopf ein, direkt über Ihrem vorhandenen `<link>` Element:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun folgendes CSS in Ihre `style.css` Datei ein, unterhalb der vorherigen Ergänzung:

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

Hier gibt es nichts wirklich Spezielles für Tabellen zu beachten; wir passen allgemein das Schriftstil an, um die Lesbarkeit zu erleichtern:

- Wir haben einen globalen sans-serif-Schriftstapel gesetzt; dies ist rein eine stilistische Entscheidung. Wir haben auch unsere benutzerdefinierte Schriftart auf die Überschriften innerhalb der {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elemente gesetzt, für einen netten, grungigen, punkigen Look.
- Wir haben etwas {{cssxref("letter-spacing")}} auf den Überschriften und Zellen gesetzt, da wir denken, dass es die Lesbarkeit unterstützt. Wiederum, hauptsächlich eine stilistische Wahl.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert, sodass sie mit den Überschriften ausgerichtet sind. Standardmäßig erhalten Zellen einen {{cssxref("text-align")}} Wert von `left`, und Überschriften erhalten einen Wert von `center`, aber im Allgemeinen sieht es besser aus, die Ausrichtungen gleich zu setzen. Das standardmäßige fette Gewicht auf den Überschriftsschriften reicht aus, um ihr Erscheinungsbild zu differenzieren.
- Wir haben die Überschrift innerhalb des {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, sodass sie visuell besser mit ihrem Datenpunkt verbunden ist.

Das Ergebnis sieht ein bisschen ordentlicher aus:

![eine gestylte Tabelle mit einem globalen sans-serif-Schriftstapel und guten Abständen, um die Daten besser lesbar zu machen und zeigt eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-with-typography.png)

## Grafiken und Farben

Jetzt zu Grafiken und Farben! Da die Tabelle voller Punk und Attitüde ist, müssen wir ihr ein auffälliges und imposantes Styling verleihen. Keine Sorge, Sie müssen Ihre Tabellen nicht so laut machen — Sie können sich für etwas Subtileres und Geschmackvolleres entscheiden.

Fügen Sie zuerst das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

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

Auch hier gibt es nichts Spezifisches für Tabellen, aber es ist lohnenswert, einige Punkte zu beachten.

Wir haben ein {{cssxref("background-image")}} zum {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Textes in der Kopf- und Fußzeile auf Weiß geändert (und ihm einen {{cssxref("text-shadow")}} gegeben), damit er lesbar ist. Sie sollten immer sicherstellen, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, damit er lesbar ist.

Wir haben auch einen linearen Verlauf zu den {{htmlelement("th")}} und {{htmlelement("td")}} Elementen innerhalb der Kopf- und Fußzeile hinzugefügt, für eine schöne Textur, sowie diesen Elementen eine helle lila Grenze gegeben. Es ist nützlich, mehrere verschachtelte Elemente zur Verfügung zu haben, um Stile übereinander zu legen. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elementen mit mehreren Hintergrundbildern platzieren können, aber wir haben uns entschieden, es separat zu tun, zum Vorteil älterer Browser, die mehrere Hintergrundbilder oder lineare Verläufe nicht unterstützen.

### Zebra-Muster

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie Sie **Zebra-Streifen** implementieren — abwechselnde Farbzeilen, die die verschiedenen Datenzeilen in Ihrer Tabelle leichter lesbar machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

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

- Früher haben Sie gesehen, wie der {{cssxref(":nth-child")}} Selektor verwendet wurde, um spezifische Kind-Elemente auszuwählen. Es kann auch eine Formel als Parameter gegeben werden, sodass es eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5 usw.) und die Formel `2n` würde alle geraden Kinder (2, 4, 6 usw.) auswählen. Wir haben die `odd` (ungerade) und `even` (gerade) Schlüsselworte im Code verwendet, die genau dasselbe tun wie die zuvor genannten Formeln. In diesem Fall geben wir den ungeraden und geraden Zeilen unterschiedliche (grelle) Farben.
- Wir haben auch ein sich wiederholendes Hintergrundmuster auf allen Körperzeilen hinzugefügt, das nur ein bisschen Rauschen (ein halbtransparentes `.png` mit etwas visueller Verzerrung darauf) ist, um etwas Textur zu bieten.
- Schließlich haben wir der gesamten Tabelle eine feste Hintergrundfarbe gegeben, damit Browser, die den `:nth-child` Selektor nicht unterstützen, immer noch einen Hintergrund für ihre Körperzeilen haben.

Diese Farbsensation ergibt den folgenden Look:

![eine gut gestaltete Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und die gesamte Tabelle mit einem soliden Hintergrund, um die Daten ansprechender zu machen, und zeigt eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich](table-with-color.png)

Nun, das mag etwas übertrieben sein und nicht Ihrem Geschmack entsprechen, aber der Punkt, den wir hier machen möchten, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

## Die Beschriftung stylen

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle machen müssen — die Beschriftung stylen. Um dies zu tun, fügen Sie das Folgende am Ende Ihrer `style.css` Datei hinzu:

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

Hier gibt es nichts Bemerkenswertes, außer der {{cssxref("caption-side")}} Eigenschaft, die einen Wert von `bottom` erhalten hat. Dies bewirkt, dass die Beschriftung am unteren Rand der Tabelle platziert wird, was zusammen mit den anderen Deklarationen diesen endgültigen Look ergibt (sehen Sie es live bei [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unterhalb der gestylten Tabelle mit einer Beschriftung darüber, worum es bei der Tabelle geht. "eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich" in diesem Fall](table-with-caption.png)

## Schnelltipps zum Tabellenstyling

Bevor wir weitermachen, dachten wir, wir geben Ihnen eine kurze Liste der nützlichsten Punkte, die oben illustriert wurden:

- Machen Sie Ihr Tabellenmarkup so einfach wie möglich und halten Sie die Dinge flexibel, z.B. indem Sie Prozentsätze verwenden, damit das Design responsiver ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, die Spaltenbreiten einfach durch Setzen von {{cssxref("width")}} auf ihre Überschriften ({{htmlelement("th")}}) festzulegen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Grenzen der Tabellenelemente ineinander übergehen zu lassen, was ein ordentlicheres und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Orte zu bieten, an denen CSS angewendet werden kann, damit es einfacher ist, Stile übereinander zu legen, wenn erforderlich.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihren {{htmlelement("th")}} und {{htmlelement("td")}} Text auszurichten, damit es ordentlicher und leichter zu folgen ist.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables_tasks).

## Zusammenfassung

Mit dem Tabellenstyling nun hinter uns, benötigen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel untersucht das Debuggen von CSS — wie man Probleme löst, wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie es erwarten. Dies beinhaltet Informationen zur Verwendung von Browser-DevTools, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
