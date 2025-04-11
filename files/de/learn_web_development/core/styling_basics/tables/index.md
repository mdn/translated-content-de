---
title: Styling tables
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Die Gestaltung einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal muss man ihn eben machen. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt und hebt dabei einige spezielle Techniken zur Tabellengestaltung hervor.

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
          <li>Umgang mit Abständen in Tabellen, einschließlich des Zusammenfallens von Rändern.</li>
          <li>Eindeutiges Hervorheben verschiedener Tabellenbereiche einschließlich Überschriften, Titel, Kopf, Körper und Fußzeile.</li>
          <li>Wie man Zebra-Streifen implementiert und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Starten wir mit einem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele drehen sich um Schuhe, das Wetter oder Mitarbeiter; wir haben entschieden, es interessanter zu machen und sie über berühmte Punkbands aus dem Vereinigten Königreich zu gestalten. Der Markup sieht folgendermaßen aus:

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

Die Tabelle ist schön markiert, leicht stilisierbar und zugänglich, dank Features wie [`scope`](/de/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}} usw. Leider sieht sie nicht gut aus, wenn sie auf dem Bildschirm gerendert wird (siehe live unter [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle, die eine Zusammenfassung berühmter britischer Punkbands zeigt](table-unstyled.png)

Mit nur dem Standard-Browser-Design sieht sie gedrängt, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um das zu beheben.

## Erste Schritte mit der Gestaltung unserer Tabelle

Lassen Sie uns gemeinsam die Gestaltung unseres Tabellenbeispiels durchgehen.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder herunter ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)) und speichern Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis auf Ihrem lokalen Computer.
2. Erstellen Sie als Nächstes eine neue Datei mit dem Namen `style.css` und speichern Sie sie im selben Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile innerhalb Ihres {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

## Abstände und Layout

Das Erste, was wir tun müssen, sind die Abstände/das Layout — das Standard-Tabellen-Design ist so gedrängt! Um das zu erreichen, fügen Sie die folgende CSS zu Ihrer `style.css` Datei hinzu:

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

Die wichtigsten Punkte, die beachtet werden sollten, sind wie folgt:

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist generell eine gute Idee für Ihre Tabelle, da es die Tabelle standardmäßig ein wenig vorhersehbarer macht. Normalerweise neigen die Tabellenspalten dazu, nach dem Inhalt, den sie enthalten, dimensioniert zu werden, was zu einigen seltsamen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten nach der Breite ihrer Überschriften dimensionieren und dann ihren Inhalt entsprechend bearbeiten. Aus diesem Grund haben wir die vier verschiedenen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ausgewählt ("Wählen Sie das n-te Kind, das ein {{htmlelement("th")}}-Element in einer Sequenz innerhalb eines {{htmlelement("thead")}}-Elements ist") und ihnen feste prozentuale Breiten zugewiesen. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Möglichkeit ist, Ihre Tabellenspalten zu dimensionieren. Chris Coyier diskutiert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% gekoppelt, was bedeutet, dass die Tabelle jeden Container, in den sie gestellt wird, ausfüllt und schön responsive ist (obwohl sie noch etwas mehr Arbeit benötigen würde, um auf schmalen Bildschirmen gut auszusehen).

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist Standard-Best-Practice für jede Tabellen-Gestaltungsbemühung. Standardmäßig, wenn Sie Ränder auf Tabellenelementen setzen, werden alle Abstände zwischen ihnen bestehen, wie das folgende Bild zeigt: ![eine 2x2 Tabelle mit Standard-Abständen zwischen den Rändern ohne Rand-Zusammenfall](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es vielleicht der Look ist, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` eingestellt, fallen die Ränder zu einem zusammen, was viel besser aussieht: ![eine 2x2 Tabelle mit der Eigenschaft border-collapse auf collapse gesetzt, zeigt Ränder, die zu einem zusammenfallen](border-collapse.png)
- Wir haben einen {{cssxref("border")}} um die gesamte Tabelle gesetzt, was notwendig ist, da wir später einige Ränder um die Tabellenüberschrift und Fußzeile setzen werden — es sieht wirklich seltsam und unzusammenhängend aus, wenn Sie keinen Rand um die gesamte Außenseite der Tabelle haben und Lücken entstehen.
- Wir haben einige {{cssxref("padding")}} auf die {{htmlelement("th")}} und {{htmlelement("td")}}-Elemente gesetzt — das gibt den Datenobjekten etwas Raum zum Atmen und macht die Tabelle viel leserlicher.

An diesem Punkt sieht unsere Tabelle bereits viel besser aus:

![eine halbgestylte Tabelle mit Abständen, um die Daten lesbarer zu machen und eine Zusammenfassung berühmter britischer Punkbands zu zeigen](table-with-spacing.png)

## Einfache Typografie

Nun bringen wir unseren Text ein wenig in Ordnung.

Zuerst haben wir eine Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punkbands geeignet ist. Sie können dort hingehen und eine andere finden, wenn Sie möchten; Sie müssen nur unser bereitgestelltes {{htmlelement("link")}}-Element und die benutzerdefinierte {{cssxref("font-family")}}-Deklaration durch die von Google Fonts bereitgestellten ersetzen.

Fügen Sie zunächst das folgende {{htmlelement("link")}}-Element in Ihren HTML-Head ein, direkt oberhalb Ihres vorhandenen `<link>`-Elements:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun das folgende CSS in Ihre `style.css` Datei ein, unterhalb der vorherigen Ergänzung:

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

Hier gibt es nichts wirklich spezifisches für Tabellen; wir passen die Schriftgestaltung allgemein an, um die Lesbarkeit zu verbessern:

- Wir haben einen globalen Sans-Serif-Schriftstapel gesetzt; dies ist rein eine stilistische Wahl. Wir haben auch unsere benutzerdefinierte Schrift auf die Überschriften innerhalb der {{htmlelement("thead")}} und {{htmlelement("tfoot")}}-Elemente gesetzt, für einen schönen grungy, punkigen Look.
- Wir haben einige {{cssxref("letter-spacing")}} auf die Überschriften und Zellen gesetzt, da wir glauben, dass es die Lesbarkeit unterstützt. Erneut größtenteils eine stilistische Entscheidung.
- Wir haben den Text in den Tabellenspalten innerhalb des {{htmlelement("tbody")}} zentriert ausgerichtet, damit sie mit den Überschriften in Einklang stehen. Standardmäßig wird Zellen ein {{cssxref("text-align")}}-Wert von `links` zugewiesen, und Überschriften werden mit einem Wert von `center` versehen, aber generell sieht es besser aus, wenn die Ausrichtungen für beide gleich eingestellt sind. Das standardmäßige fettgedruckte Gewicht auf den Schriftarten der Überschriften reicht aus, um ihr Aussehen zu unterscheiden.
- Wir haben die Überschrift innerhalb des {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, sodass sie optisch besser mit ihrem Datenpunkt verbunden ist.

Das Ergebnis sieht ein wenig ordentlicher aus:

![eine gestaltete Tabelle mit einem globalen Sans-Serif-Schriftstapel und gutem Abstand, um die Daten lesbarer zu machen und eine Zusammenfassung berühmter britischer Punkbands zu zeigen](table-with-typography.png)

## Grafiken und Farben

Nun zu Grafiken und Farben! Da die Tabelle voller Punk und Attitüde ist, müssen wir ihr ein helles, eindrucksvolles Styling verleihen, um ihr gerecht zu werden. Keine Sorge, Sie müssen Ihre Tabellen nicht so laut gestalten — Sie können sich für etwas subtileres und geschmackvolleres entscheiden.

Fügen Sie die folgende CSS an das Ende Ihrer `style.css` Datei hinzu:

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

Erneut gibt es hier nichts spezifisches für Tabellen, aber es lohnt sich, einige Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} zu {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt und die {{cssxref("color")}} des gesamten Textes innerhalb der Kopf- und Fußzeile auf Weiß geändert (und ihm einen {{cssxref("text-shadow")}} gegeben), damit er lesbar ist. Sie sollten immer darauf achten, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, damit er lesbar ist.

Wir haben auch einen linearen Verlauf zu {{htmlelement("th")}} und {{htmlelement("td")}}-Elementen innerhalb der Kopf- und Fußzeile hinzugefügt, um ein wenig Textur hinzuzufügen, sowie diesen Elementen einen hellen lila Rand gegeben. Es ist nützlich, mehrere verschachtelte Elemente zur Verfügung zu haben, damit Sie Stile aufeinander schichten können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf den {{htmlelement("thead")}} und {{htmlelement("tfoot")}}-Elementen mit mehreren Hintergrundbildern anbringen können, aber wir haben uns entschieden, es separat zu tun, zum Nutzen älterer Browser, die keine mehreren Hintergrundbilder oder lineare Verläufe unterstützen.

### Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie man **Zebra-Streifen** implementiert — abwechselnde Farbzeilen, die die verschiedenen Datenzeilen in Ihrer Tabelle leichter verständlich und lesbar machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

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

- Zuvor haben Sie gesehen, wie der {{cssxref(":nth-child")}}-Selektor verwendet wurde, um bestimmte Kindelemente auszuwählen. Er kann auch mit einer Formel als Parameter versehen werden, sodass er eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder auswählen (1, 3, 5 usw.) und die Formel `2n` würde alle geraden Kinder auswählen (2, 4, 6 usw.). Wir haben in unserem Code die Schlüsselwörter `odd` und `even` verwendet, die genau dasselbe wie die erwähnten Formeln tun. In diesem Fall geben wir den ungeraden und geraden Zeilen unterschiedliche (grelle) Farben.
- Wir haben auch eine sich wiederholende Hintergrundfliese zu allen Zellkörperzeilen hinzugefügt, die nur ein bisschen Rauschen ist (eine halbtransparente `.png` mit ein wenig visueller Verzerrung darauf), um etwas Textur hinzuzufügen.
- Schließlich haben wir der gesamten Tabelle eine solide Hintergrundfarbe gegeben, damit Browser, die den `:nth-child`-Selektor nicht unterstützen, immer noch einen Hintergrund für ihre Zellkörperzeilen haben.

Diese Farbkexplosion führt zu folgendem Look:

![eine gut gestaltete Tabelle mit einem sich wiederholenden Hintergrund in den Körperzeilen und der gesamten Tabelle mit einem soliden Hintergrund, um die Daten, die eine Zusammenfassung berühmter britischer Punkbands zeigen, ansprechender zu machen](table-with-color.png)

Nun, dies mag ein bisschen übertrieben und nicht nach Ihrem Geschmack sein, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

## Die Überschrift gestalten

Es gibt noch eine letzte Sache, die wir mit unserer Tabelle machen müssen — die Überschrift gestalten. Fügen Sie dazu das Folgende am Ende Ihrer `style.css` Datei hinzu:

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

Es gibt hier nichts Bemerkenswertes, außer der Eigenschaft {{cssxref("caption-side")}}, die auf den Wert `bottom` gesetzt wurde. Dadurch wird die Überschrift am unteren Rand der Tabelle positioniert, was zusammen mit den anderen Deklarationen den endgültigen Look erzeugt (siehe live unter [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unterhalb der gestalteten Tabelle mit einer Überschrift, was die Tabelle betrifft, "eine Zusammenfassung berühmter britischer Punkbands" in diesem Fall](table-with-caption.png)

## Schnelle Tipps zur Tabellengestaltung

Bevor wir weitermachen, dachten wir, wir würden Ihnen eine kurze Liste der hilfreichsten Punkte bereitstellen, die oben veranschaulicht wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie die Dinge flexibel, z.B. durch die Verwendung von Prozentwerten, sodass das Design reaktionsfähiger ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersehbareres Tabellenlayout zu schaffen, das es Ihnen ermöglicht, die Spaltenbreiten leicht einzustellen, indem Sie {{cssxref("width")}} auf deren Überschriften ({{htmlelement("th")}}) setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder der Tabellenelemente in sich selbst zusammenfallen zu lassen, was zu einem ordentlicheren und leichter zu kontrollierenden Aussehen führt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}} und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Orte bereitzustellen, an denen CSS angewendet werden kann, sodass es einfacher ist, Stile aufeinander zu schichten, falls erforderlich.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen leichter lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihr {{htmlelement("th")}}- und {{htmlelement("td")}}-Text auszurichten, um die Dinge ordentlicher und leichter zu verfolgen zu machen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Tables).

## Zusammenfassung

Mit der Gestaltung von Tabellen, die nun hinter uns liegt, benötigen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel befasst sich mit dem Debugging von CSS — wie man Probleme löst, wie Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie es denken würden. Dies beinhaltet Informationen dazu, wie Sie Browser-DevTools verwenden, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
