---
title: Styling von Tabellen
slug: Learn/CSS/Building_blocks/Styling_tables
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}

Das Styling einer HTML-Tabelle ist vielleicht nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir sie einfach erledigen. Dieser Artikel bietet eine Anleitung, um HTML-Tabellen ansprechend zu gestalten, mit einigen spezifischen Techniken zum Styling von Tabellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Kenntnisse über
        <a href="/de/docs/Learn/HTML/Tables">HTML-Tabellen</a> und eine Vorstellung davon, wie CSS funktioniert (studieren Sie zuerst die CSS-Erste Schritte).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man HTML-Tabellen effektiv stylt.</td>
    </tr>
  </tbody>
</table>

## Eine typische HTML-Tabelle

Beginnen wir mit einem Blick auf eine typische HTML-Tabelle. Nun, ich sage typisch — die meisten HTML-Tabellenbeispiele handeln von Schuhen, dem Wetter oder Mitarbeitern; wir haben uns entschieden, es etwas interessanter zu machen, indem wir uns auf berühmte Punkbands aus dem Vereinigten Königreich konzentrieren. Das Markup sieht folgendermaßen aus:

```html
<table>
  <caption>
    Eine Zusammenstellung der berühmtesten Punkbands aus dem Vereinigten Königreich
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Gründungsjahr</th>
      <th scope="col">Anzahl der Alben</th>
      <th scope="col">Berühmtester Song</th>
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

    <!-- mehrere andere großartige Bands -->

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total Alben</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

Die Tabelle ist sauber markiert, leicht stilisierbar und zugänglich, dank Funktionen wie [`scope`](/de/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, usw. Leider sieht sie beim Rendern auf dem Bildschirm nicht gut aus (siehe sie live unter [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![eine ungestylte Tabelle, die eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich zeigt](table-unstyled.png)

Mit nur dem Standard-Browser-Styling sieht sie beengt, schwer lesbar und langweilig aus. Wir müssen etwas CSS verwenden, um das zu beheben.

## Unsere Tabelle stylen

Gehen wir das Styling unseres Tabellenbeispiels gemeinsam durch.

1. Erstellen Sie zunächst eine lokale Kopie des [Beispiel-Markups](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html), laden Sie beide Bilder ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) und [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)) herunter und legen Sie die drei resultierenden Dateien in einem Arbeitsverzeichnis auf Ihrem lokalen Computer ab.
2. Erstellen Sie dann eine neue Datei namens `style.css` und speichern Sie sie im gleichen Verzeichnis wie Ihre anderen Dateien.
3. Verknüpfen Sie das CSS mit dem HTML, indem Sie die folgende HTML-Zeile in Ihrem {{htmlelement("head")}} platzieren:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

### Abstände und Layout

Das Erste, was wir tun müssen, ist, die Abstände/Layouts zu sortieren — das Standard-Tabellen-Styling ist so beengt! Fügen Sie dazu das folgende CSS zu Ihrer `style.css` Datei hinzu:

```css
/* Abstände */

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

- Ein {{cssxref("table-layout")}} Wert von `fixed` ist im Allgemeinen eine gute Idee, um in Ihrer Tabelle zu setzen, da es die Tabelle standardmäßig ein wenig vorhersagbarer macht. Normalerweise neigen Tabellenspalten dazu, basierend auf dem Inhalt dimensioniert zu werden, den sie enthalten, was zu einigen seltsamen Ergebnissen führt. Mit `table-layout: fixed` können Sie Ihre Spalten basierend auf der Breite ihrer Überschriften dimensionieren und dann mit deren Inhalt entsprechend umgehen. Deshalb haben wir die vier unterschiedlichen Überschriften mit dem `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) Selektor ("Wähle das n-te Kind, das ein {{htmlelement("th")}} Element in einer Sequenz ist, innerhalb eines {{htmlelement("thead")}} Elements") ausgewählt und ihnen festgelegte Prozentbreiten gegeben. Die gesamte Spaltenbreite folgt der Breite ihrer Überschrift, was eine schöne Möglichkeit darstellt, Ihre Tabellenspalten zu dimensionieren. Chris Coyier erläutert diese Technik ausführlicher in [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

  Wir haben dies mit einer {{cssxref("width")}} von 100% gekoppelt, was bedeutet, dass die Tabelle jeden Container füllt, in den sie eingesetzt wird, und schön responsiv ist (obwohl sie noch etwas mehr Arbeit benötigen würde, um auf engen Bildschirmbreiten gut auszusehen).

- Ein {{cssxref("border-collapse")}} Wert von `collapse` ist die Standardbest Practice für jeden Styling-Versuch einer Tabelle. Standardmäßig, wenn Sie Begrenzungen auf Tabellenelementen setzen, haben sie alle Abstände zwischen ihnen, wie das folgende Bild zeigt: ![eine 2x2 Tabelle mit Standardabständen zwischen den Begrenzungen, die keinen Begrenzungseinbruch zeigen](no-border-collapse.png) Das sieht nicht sehr schön aus (obwohl es der Look sein könnte, den Sie wollen, wer weiß?). Mit `border-collapse: collapse;` gesetzt, kollabieren die Begrenzungen zu einer, was viel besser aussieht: ![eine 2x2 Tabelle mit der Eigenschaft border-collapse, die auf collapse gesetzt ist, und die das Kollabieren der Begrenzungen in eine zeigt](border-collapse.png)
- Wir haben eine {{cssxref("border")}} um die ganze Tabelle gelegt, was nötig ist, da wir später einige Ränder um den Tabellenkopf und die Fußzeile legen werden — es sieht wirklich seltsam und unzusammenhängend aus, wenn Sie keinen Rand um das ganze Äußere der Tabelle haben und Lücken entstehen.
- Wir haben ein {{cssxref("padding")}} auf die {{htmlelement("th")}} und {{htmlelement("td")}} Elemente gesetzt — das gibt den Datenpunkten etwas Freiraum, wodurch die Tabelle viel leserlicher aussieht.

An diesem Punkt sieht unsere Tabelle bereits viel besser aus:

![eine halb gestylte Tabelle mit Abständen, um die Daten leserlicher zu machen, und die eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich zeigt](table-with-spacing.png)

### Einfache Typografie

Nun werden wir unseren Text ein wenig organisieren.

Zunächst haben wir eine Schriftart auf [Google Fonts](https://fonts.google.com/) gefunden, die für eine Tabelle über Punkbands geeignet ist. Sie können dort hingehen und eine andere finden, wenn Sie möchten; Sie müssen lediglich unser bereitgestelltes {{htmlelement("link")}} Element und die benutzerdefinierte {{cssxref("font-family")}}-Deklaration durch die von Google Fonts bereitgestellten ersetzen.

Zuerst fügen Sie das folgende {{htmlelement("link")}} Element in Ihren HTML-Kopf ein, direkt über Ihrem vorhandenen `<link>` Element:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Fügen Sie nun das folgende CSS in Ihre `style.css` Datei ein, unterhalb der vorherigen Ergänzung:

```css
/* Typografie */

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

Hier gibt es nichts, was speziell für Tabellen ist; wir passen im Allgemeinen die Schriftstilgestaltung an, um die Lesbarkeit zu verbessern:

- Wir haben einen globalen sans-serif-Schriftstapel gesetzt; dies ist rein eine stilistische Wahl. Wir haben auch unsere benutzerdefinierte Schrift auf die Überschriften innerhalb der {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elemente gesetzt, für einen schönen grungy, punkigen Look.
- Wir haben etwas {{cssxref("letter-spacing")}} auf die Überschriften und Zellen gesetzt, da wir der Meinung sind, dass dies die Lesbarkeit unterstützt. Wiederum, meistens eine stilistische Wahl.
- Wir haben den Text in den Tabellenzellen innerhalb des {{htmlelement("tbody")}} zentriert ausgerichtet, sodass sie mit den Überschriften übereinstimmen. Standardmäßig werden Zellen mit einem {{cssxref("text-align")}} Wert von `left` versehen, und Überschriften erhalten den Wert `center`, aber im Allgemeinen sieht es besser aus, wenn die Ausrichtungen für beide gleich eingestellt sind. Der standardmäßig fett gedruckte Schriftstil auf den Überschriften reicht aus, um ihren Look zu differenzieren.
- Wir haben die Überschrift innerhalb des {{htmlelement("tfoot")}} rechtsbündig ausgerichtet, sodass sie visuell besser mit ihrem Datenpunkt verbunden ist.

Das Ergebnis sieht ein wenig ordentlicher aus:

![eine stilisierte Tabelle mit einem globalen sans-serif-Schriftstapel und guten Abständen, um die Daten leserlicher zu machen, und die eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich zeigt](table-with-typography.png)

### Grafiken und Farben

Nun zu Grafiken und Farben! Da die Tabelle voll von Punk und Attitüde ist, müssen wir ihr ein helles imposantes Styling geben, das dazu passt. Keine Sorge, Sie müssen Ihre Tabellen nicht so auffällig gestalten — Sie können auch etwas Dezenteres und Geschmackvolleres wählen.

Beginnen Sie damit, das folgende CSS zu Ihrer `style.css` Datei hinzuzufügen, wieder am Ende:

```css
/* Grafiken und Farben */

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

Auch hier gibt es nichts spezifisches für Tabellen, aber es ist lohnenswert, ein paar Dinge zu beachten.

Wir haben ein {{cssxref("background-image")}} zum {{htmlelement("thead")}} und {{htmlelement("tfoot")}} hinzugefügt, und die {{cssxref("color")}} des gesamten Textes innerhalb der Kopf- und Fußzeile auf Weiß geändert (und ihm einen {{cssxref("text-shadow")}} hinzugefügt), damit er lesbar ist. Sie sollten immer sicherstellen, dass Ihr Text gut mit Ihrem Hintergrund kontrastiert, damit er lesbar ist.

Wir haben auch einen linearen Verlauf auf die {{htmlelement("th")}} und {{htmlelement("td")}} Elemente innerhalb der Kopf- und Fußzeile für ein schönes bisschen Textur hinzugefügt und diesen Elementen einen hellen lila Rand gegeben. Es ist nützlich, mehrere verschachtelte Elemente zur Verfügung zu haben, damit Sie Stile übereinander legen können. Ja, wir hätten sowohl das Hintergrundbild als auch den linearen Verlauf auf die {{htmlelement("thead")}} und {{htmlelement("tfoot")}} Elemente mit mehreren Hintergrundbildern legen können, aber wir haben uns entschieden, es separat zu tun, um älteren Browsern zu entsprechen, die keine Unterstützung für mehrere Hintergrundbilder oder lineare Verläufe haben.

#### Zebra-Streifen

Wir wollten einen separaten Abschnitt widmen, um Ihnen zu zeigen, wie Sie **Zebra-Streifen** implementieren — abwechselnde Reihen von Farben, die die unterschiedlichen Datenzeilen in Ihrer Tabelle einfacher zu erfassen und zu lesen machen. Fügen Sie das folgende CSS am Ende Ihrer `style.css` Datei hinzu:

```css
/* Zebra-Streifen */

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

- Früher haben Sie den {{cssxref(":nth-child")}} Selektor gesehen, der verwendet wurde, um bestimmte Kindelemente auszuwählen. Es kann auch mit einer Formel als Parameter versehen werden, sodass es eine Sequenz von Elementen auswählt. Die Formel `2n+1` würde alle ungeraden Kinder (1, 3, 5, usw.) auswählen, und die Formel `2n` würde alle geraden Kinder (2, 4, 6, usw.) auswählen. Wir haben die Schlüsselwörter `odd` und `even` in unserem Code verwendet, die genau das gleiche tun wie die oben genannten Formeln. In diesem Fall geben wir den ungeraden und geraden Zeilen unterschiedliche (knallige) Farben.
- Wir haben auch ein sich wiederholendes Hintergrundmuster auf alle Zeilen des Haupttexts hinzugefügt, das lediglich ein wenig Rauschen ist (ein halbtransparentes `.png` mit ein wenig visueller Verzerrung), um etwas Textur zu bieten.
- Zuletzt haben wir der gesamten Tabelle eine feste Hintergrundfarbe gegeben, damit Browser, die den `:nth-child` Selektor nicht unterstützen, trotzdem einen Hintergrund für ihre Körperzeilen haben.

Diese Farbexplosion ergibt folgendes Aussehen:

![eine gut stilisierte Tabelle mit einem wiederholten Hintergrund in den Körperzeilen und die gesamte Tabelle eine feste Hintergrund zu machen, um die Daten darzustellen und eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich schmeichelnder zu machen](table-with-color.png)

Nun, das mag ein wenig übertrieben und nicht nach Ihrem Geschmack sein, aber der Punkt, den wir hier machen wollen, ist, dass Tabellen nicht langweilig und akademisch sein müssen.

### Styling der Beschriftung

Es gibt eine letzte Sache, die wir mit unserer Tabelle tun müssen — die Beschriftung zu stylen. Um dies zu tun, fügen Sie das Folgende am Ende Ihrer `style.css` Datei hinzu:

```css
/* Beschriftung */

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

Hier ist nichts außergewöhnliches, außer der {{cssxref("caption-side")}} Eigenschaft, die auf `bottom` gesetzt wurde. Dies bewirkt, dass die Beschriftung unten an der Tabelle positioniert wird, was zusammen mit den anderen Deklarationen diesen endgültigen Look ergibt (siehe es live unter [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![ein weißer Hintergrund unter der stilisierten Tabelle mit einer Beschriftung darüber, worum es in der Tabelle geht. "eine Zusammenfassung der berühmten Punkbands aus dem Vereinigten Königreich" in diesem Fall](table-with-caption.png)

## Schnelle Tipps zum Styling von Tabellen

Bevor wir weitermachen, dachten wir, wir würden Sie mit einer schnellen Liste der nützlichsten Punkte versorgen, die oben veranschaulicht wurden:

- Machen Sie Ihr Tabellen-Markup so einfach wie möglich und halten Sie es flexibel, z.B. durch die Verwendung von Prozentangaben, damit das Design reaktionsfreudiger ist.
- Verwenden Sie {{cssxref("table-layout", "table-layout: fixed")}}, um ein vorhersagbareres Tabellenlayout zu erstellen, das es Ihnen ermöglicht, Spaltenbreiten einfach durch Einstellen von {{cssxref("width")}} auf deren Überschriften ({{htmlelement("th")}}) zu setzen.
- Verwenden Sie {{cssxref("border-collapse", "border-collapse: collapse")}}, um die Ränder von Tabellenelementen ineinander kollabieren zu lassen, was ein ordentlicheres und leichter zu kontrollierendes Aussehen erzeugt.
- Verwenden Sie {{htmlelement("thead")}}, {{htmlelement("tbody")}}, und {{htmlelement("tfoot")}}, um Ihre Tabelle in logische Abschnitte zu unterteilen und zusätzliche Stellen zur Anwendung von CSS zu bieten, sodass es einfacher ist, Stile übereinander zu legen, wenn nötig.
- Verwenden Sie Zebra-Streifen, um abwechselnde Zeilen einfacher lesbar zu machen.
- Verwenden Sie {{cssxref("text-align")}}, um Ihr {{htmlelement("th")}} und {{htmlelement("td")}} Text auszurichten, um ein ordentlicheres und leichter zu verfolgendes Aussehen zu erhalten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Tabellen](/de/docs/Learn/CSS/Building_blocks/Tables_tasks).

## Zusammenfassung

Nachdem wir nun das Styling von Tabellen hinter uns gelassen haben, brauchen wir etwas anderes, um unsere Zeit zu füllen. Der nächste Artikel behandelt das Thema [CSS-Debugging](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) — wie man Probleme löst, wie z.B. Layouts, die nicht so aussehen, wie sie sollten, oder Eigenschaften, die nicht angewendet werden, wenn Sie denken, dass sie angewendet werden sollten. Dies schließt Informationen zur Verwendung von Browser-Entwicklertools ein, um Lösungen für Ihre Probleme zu finden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Advanced_styling_effects", "Learn/CSS/Building_blocks")}}
