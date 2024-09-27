---
title: Bilder, Medien und Formularelemente
slug: Learn/CSS/Building_blocks/Images_media_form_elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

In dieser Lektion betrachten wir, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als normale Boxen hinsichtlich der Möglichkeit, sie mit CSS zu stylen. Zu verstehen, was möglich ist und was nicht, kann etwas Frustration ersparen. Diese Lektion wird einige der Hauptpunkte beleuchten, die Sie wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie einige Elemente sich ungewöhnlich verhalten, wenn sie mit CSS gestylt werden.
      </td>
    </tr>
  </tbody>
</table>

## Ersetzte Elemente

Bilder und Videos werden als **[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)** beschrieben. Das bedeutet, dass CSS das interne Layout dieser Elemente nicht beeinflussen kann – nur ihre Position auf der Seite zwischen anderen Elementen. Wie wir jedoch sehen werden, gibt es verschiedene Dinge, die CSS mit einem Bild machen kann.

Bestimmte ersetzte Elemente, wie Bilder und Videos, werden auch als solche mit einem **[Seitenverhältnis](/de/docs/Glossary/aspect_ratio)** beschrieben. Dies bedeutet, dass sie sowohl in horizontaler (x) als auch in vertikaler (y) Richtung eine Größe haben und standardmäßig mit den intrinsischen Abmessungen der Datei angezeigt werden.

## Bildergröße

Wie Sie bereits durch diese Lektionen wissen, erzeugt alles in CSS eine Box. Wenn Sie ein Bild in eine Box einfügen, die kleiner oder größer ist als die intrinsischen Dimensionen der Bilddatei, erscheint es entweder kleiner als die Box oder läuft über die Box hinaus. Sie müssen entscheiden, was mit dem Überlaufen geschieht.

Im folgenden Beispiel haben wir zwei Boxen, beide mit einer Größe von 200 Pixeln:

- Eine enthält ein Bild, das kleiner als 200 Pixel ist – es ist kleiner als die Box und dehnt sich nicht aus, um sie zu füllen.
- Die andere ist größer als 200 Pixel und läuft über die Box hinaus.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

Was können wir also gegen das Überlaufproblem tun?

Wie wir in [unserer vorherigen Lektion](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) gelernt haben, ist eine häufige Technik, die {{cssxref("max-width")}} eines Bildes auf 100% zu setzen. Dies ermöglicht es dem Bild, kleiner als die Box zu werden, aber nicht größer. Diese Technik funktioniert auch bei anderen ersetzten Elementen wie [`<video>`](/de/docs/Web/HTML/Element/video)s oder [`<iframe>`](/de/docs/Web/HTML/Element/iframe)s.

**Versuchen Sie, `max-width: 100%` zum `<img>`-Element im obigen Beispiel hinzuzufügen. Sie werden sehen, dass das kleinere Bild unverändert bleibt, aber das größere wird kleiner, um in die Box zu passen.**

Sie können andere Entscheidungen über Bilder innerhalb von Containern treffen. Zum Beispiel möchten Sie vielleicht ein Bild so skalieren, dass es eine Box vollständig abdeckt.

Die {{cssxref("object-fit")}}-Eigenschaft kann Ihnen hier helfen. Wenn Sie `object-fit` verwenden, kann das ersetzte Element auf verschiedene Weisen an eine Box angepasst werden.

Im Folgenden haben wir den Wert `cover` verwendet, der das Bild verkleinert und das Seitenverhältnis beibehält, sodass es die Box sauber ausfüllt. Da das Seitenverhältnis beibehalten wird, werden einige Teile des Bildes von der Box abgeschnitten.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

Wenn wir `contain` als Wert verwenden, wird das Bild verkleinert, bis es klein genug ist, um in die Box zu passen. Dies führt zu "Letterboxing", wenn es nicht das gleiche Seitenverhältnis wie die Box hat.

Sie könnten auch den Wert `fill` ausprobieren, der die Box füllt, ohne das Seitenverhältnis beizubehalten.

## Ersetzte Elemente im Layout

Wenn Sie verschiedene CSS-Layouttechniken bei ersetzten Elementen anwenden, werden Sie möglicherweise feststellen, dass sie sich leicht anders verhalten als andere Elemente. In einer Rasterlayout beispielsweise werden Elemente standardmäßig gestreckt, um ihre gesamten [Gridbereiche](/de/docs/Glossary/Grid_Areas) auszufüllen. Bilder werden nicht gestreckt; stattdessen werden sie am Anfang ihrer Gridbereiche ausgerichtet.

Sie können dies im folgenden Beispiel sehen, wo wir einen zweispaltigen, zweizeiligen Rastercontainer haben, der vier Elemente enthält. Alle `<div>`-Elemente haben eine Hintergrundfarbe und strecken sich, um die Zeile und Spalte auszufüllen. Das Bild hingegen streckt sich nicht.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

Wenn Sie diesen Lektionen in der Reihenfolge folgen, haben Sie sich möglicherweise noch nicht mit dem Layout befasst. Beachten Sie einfach, dass ersetzte Elemente, wenn sie Teil eines Grid- oder Flex-Layouts werden, unterschiedliche Standardverhalten haben, um zu vermeiden, dass sie durch das Layout seltsam gestreckt werden.

Um das Bild zu zwingen, sich zu strecken und die Gridzelle zu füllen, müssten Sie etwas wie das Folgende tun:

```css
img {
  width: 100%;
  height: 100%;
}
```

Dies würde jedoch das Bild strecken, was wahrscheinlich nicht das ist, was Sie tun möchten.

## Formularelemente

Formularelemente sind unter Umständen ein kniffliges Thema, wenn es darum geht, sie mit CSS zu stylen. Das [Modul Web-Formulare](/de/docs/Learn/Forms) enthält detaillierte Leitfäden zu den kniffligeren Aspekten des Stylings dieser Elemente, die ich hier nicht vollständig wiedergeben werde. Es gibt jedoch einige wesentliche Grundlagen, die es hervorzuheben gilt.

Viele Formularsteuerungen werden über das [`<input>`](/de/docs/Web/HTML/Element/input)-Element zu Ihrer Seite hinzugefügt – dies definiert einfache Formularfelder wie Texteingaben bis hin zu komplexeren Feldern wie Farb- und Datumsauswahlen. Es gibt einige zusätzliche Elemente, wie [`<textarea>`](/de/docs/Web/HTML/Element/textarea) für mehrzeilige Texteingaben sowie Elemente, die zur Gruppierung und Beschriftung von Formteilen wie [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) und [`<legend>`](/de/docs/Web/HTML/Element/legend) verwendet werden.

HTML enthält auch Attribute, die es Webentwicklern ermöglichen, anzugeben, welche Felder erforderlich sind und sogar, welche Art von Inhalt eingegeben werden muss. Gibt der Benutzer etwas Unerwartetes ein oder lässt ein erforderliches Feld leer, kann der Browser eine Fehlermeldung anzeigen. Verschiedene Browser unterscheiden sich darin, wie viel Styling und Anpassung sie bei solchen Elemente zulassen.

### Text-Eingabeelemente stylen

Elemente, die Texteingaben ermöglichen, wie `<input type="text">` und die spezifischeren `<input type="email">` und `<textarea>` sind relativ einfach zu stylen und verhalten sich tendenziell wie andere Boxen auf Ihrer Seite. Die Standardstile dieser Elemente unterscheiden sich jedoch je nach Betriebssystem und Browser, den Ihr Benutzer für den Webseitenbesuch verwendet.

Im folgenden Beispiel haben wir einige Texteingaben mit CSS gestylt – Sie können sehen, dass Dinge wie Rahmen, Ränder und Abstände wie erwartet angewendet werden. Wir verwenden Attributselektoren, um die verschiedenen Eingabetypen anzusprechen. Versuchen Sie, das Aussehen dieses Formulars zu ändern, indem Sie die Randlinien anpassen, Hintergrundfarben zu den Feldern hinzufügen und Schriftarten sowie Abstände ändern.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> [!WARNING]
> Beim Ändern des Stils von Formularelementen sollte darauf geachtet werden, dass es für den Benutzer immer noch offensichtlich ist, dass es sich um Formularelemente handelt. Sie könnten ein Formulareingabefeld ohne Rahmen und Hintergrund erstellen, das fast ununterscheidbar von der umgebenden Seite ist, was es jedoch sehr schwer erkennbar und ausfüllbar macht.

Wie in den Lektionen zum [Styling von Web-Formularen](/de/docs/Learn/Forms/Styling_web_forms) erklärt, werden viele der komplexeren Eingabetypen vom Betriebssystem gerendert und sind für das Styling nicht zugänglich. Sie sollten daher immer davon ausgehen, dass Formulare für verschiedene Besucher unterschiedlich aussehen werden und komplexe Formulare in einer Vielzahl von Browsern testen.

### Vererbung und Formularelemente

In einigen Browsern erben Formularelemente standardmäßig keine Schriftart-Stile. Wenn Sie also sicherstellen möchten, dass Ihre Formularfelder die im Body oder einem übergeordneten Element definierte Schriftart verwenden, sollten Sie diese Regel zu Ihrem CSS hinzufügen.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Formularelemente und Box-Sizing

In verschiedenen Browsern verwenden Formularelemente unterschiedliche Box-Sizing-Regeln für verschiedene Widgets. Sie haben die `box-sizing`-Eigenschaft in [unserer Box-Modell-Lektion](/de/docs/Learn/CSS/Building_blocks/The_box_model) kennengelernt und können dieses Wissen nutzen, um beim Stylen von Formularen eine konsistente Erfahrung zu gewährleisten, wenn Sie Breiten und Höhen auf Formelementen festlegen.

Für Konsistenz ist es eine gute Idee, die Ränder und Abstände auf allen Elementen auf `0` zu setzen und diese dann beim Stylen bestimmter Steuerelemente wieder hinzuzufügen:

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Andere nützliche Einstellungen

Zusätzlich zu den oben genannten Regeln sollten Sie auch `overflow: auto` auf `<textarea>`s setzen, um zu verhindern, dass in IE eine Scrollleiste angezeigt wird, wenn keine erforderlich ist:

```css
textarea {
  overflow: auto;
}
```

### Alles zu einem "Reset" zusammenfassen

Als finalen Schritt können wir die verschiedenen oben diskutierten Eigenschaften in den folgenden "Formular-Reset" verpacken, um von einer konsistenten Basis zu starten. Dies umfasst alle in den letzten drei Abschnitten erwähnten Punkte:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> [!NOTE]
> Normalisierte Stylesheets werden von vielen Entwicklern verwendet, um ein Set von Grundstilen für alle Projekte zu erstellen. Typischerweise tun sie ähnliche Dinge wie die oben beschriebenen, indem sie sicherstellen, dass alles, was über verschiedene Browser hinweg unterschiedlich ist, auf einen konsistenten Standard gesetzt wird, bevor Sie Ihre eigene Arbeit am CSS durchführen. Sie sind nicht mehr so wichtig wie früher, da Browser heutzutage in der Regel konsistenter sind. Wenn Sie jedoch ein Beispiel ansehen möchten, schauen Sie sich [Normalize.css](https://necolas.github.io/normalize.css/) an, ein sehr beliebtes Stylesheet, das als Basis von vielen Projekten verwendet wird.

Für weitere Informationen zum Stylen von Formularen werfen Sie einen Blick auf die beiden Artikel im HTML-Bereich dieser Leitfäden.

- [Styling von Web-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Fortgeschrittenes Styling von Formularen](/de/docs/Learn/Forms/Advanced_form_styling)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Bilder und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_tasks).

## Zusammenfassung

Diese Lektion hat einige der Unterschiede hervorgehoben, auf die Sie stoßen werden, wenn Sie mit Bildern, Medien und anderen ungewöhnlichen Elementen in CSS arbeiten.

Im nächsten Artikel lernen wir, wie man [HTML-Tabellen stylt](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
