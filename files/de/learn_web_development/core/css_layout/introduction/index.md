---
title: Einführung in das CSS-Layout
short-title: Introduction
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir in früheren Modulen bereits angesprochen haben, wie z.B. verschiedene {{cssxref("display")}}-Werte, und stellt einige der Konzepte vor, die wir in diesem Modul behandeln werden. Sie behandelt auch eingehend das Konzept des normalen Flusses.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen der Methoden zur Implementierung moderner Seitenlayouts.</li>
          <li>Verstehen, dass normaler Fluss die Standardmethode ist, wie ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Erkennen, dass Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code> dazu gedacht sind, die Art und Weise zu ändern, wie der Browser Inhalte anordnet.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayout-Techniken ermöglichen es uns, Elemente auf einer Webseite zu positionieren, relativ zu den folgenden Faktoren: ihrer Standardposition im normalen Layoutfluss, den anderen sie umgebenden Elementen, ihrem übergeordneten Container und dem Hauptsichtfeld/Fenster.

Die unten erwähnten und im Detail im Modul behandelten Seitenlayout-Techniken haben jeweils ihre speziellen Anwendungsbereiche, Vorteile und Nachteile. Keine Technik ist dazu gedacht, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layout-Methode gedacht ist, sind Sie in der Lage, die für jede Aufgabe am besten geeignete Methode zu bestimmen.

## Normaler Layoutfluss

Elemente auf einer Webseite ordnen sich im **normalen Fluss**, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Sie können ändern, wie sich Elemente verhalten, entweder indem Sie ihre Position im normalen Fluss anpassen oder sie vollständig daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im normalen Fluss gut lesbar ist, ist der beste Weg, um jede Webseite zu starten. Es stellt sicher, dass Ihre Inhalte lesbar sind, selbst wenn der Nutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Da der normale Fluss so gestaltet ist, dass er ein lesbares Dokument erzeugt, arbeiten Sie, indem Sie auf diese Weise beginnen, _mit_ dem Dokument und kämpfen nicht _gegen_ es, wenn Sie Änderungen am Layout vornehmen.

Bevor wir uns eingehender mit verschiedenen Layout-Methoden beschäftigen, lohnt es sich, einige der Dinge erneut anzusprechen, die Sie in früheren Modulen bezüglich des normalen Dokumentenflusses studiert haben.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen der einzelnen Elemente so angeordnet werden, dass eventuelle Abstände, Rand oder Ränder ihrem Inhalt hinzugefügt werden. Dies nennen wir das **Box-Modell**.

Standardmäßig füllt der Inhalt eines {{Glossary("Block-level_content", "Block-Levels Elements")}} den verfügbaren Inline-Bereich des übergeordneten Elements aus, das ihn enthält, und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Level-Elementen")}} entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} auf einigen Elementen festlegen, die einen Standardwert für die {{cssxref("display")}}-Eigenschaft von `inline` haben, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt trotzdem `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Level-Elements auf diese Weise kontrollieren möchten, verwenden Sie CSS, um es so festzulegen, dass es sich wie ein Block-Level-Element verhält (z.B. mit `display: block;` oder `display: inline-block;`, das Merkmale von beiden Mischungen enthält).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie sieht es aus, wenn sie miteinander interagieren? Der normale Layoutfluss (im Layout-Einführungsartikel erwähnt) ist das System, durch das Elemente innerhalb des Viewports des Browsers platziert werden. Standardmäßig werden Block-Level-Elemente in der _Blockflussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem vorhergehenden, wobei jedes Element mit dem angegebenen Rand voneinander getrennt ist. In Englisch zum Beispiel (oder jedem anderen horizontalen, von oben nach unten verlaufenden Schreibmodus) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen befinden sie sich alle in derselben Zeile zusammen mit jeglichem benachbarten (oder umbrochenen) Textinhalt, solange Platz dafür innerhalb der Breite des übergeordneten Block-Level-Elements vorhanden ist. Wenn nicht genug Platz zur Verfügung steht, wandert der überfließende Inhalt auf eine neue Zeile.

Wenn zwei vertikal angrenzende Elemente beide einen festgelegten Rand haben und ihre Ränder sich berühren, bleibt der größere der beiden Ränder bestehen und der kleinere verschwindet. Dies ist als [**Randüberlappung**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bekannt.
Randüberlappung ist nur in der **vertikalen Richtung** relevant.

### Beispiel für normalen Fluss

Sehen wir uns ein einfaches Beispiel an, das all dies erklärt:

```html
<h1>Basic document flow</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p>
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the size of one of our margins, not both.
</p>

<p>
  Inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line along with adjacent text nodes, if there is space on the same
  line. Overflowing inline elements will
  <span>wrap onto a new line if possible (like this one containing text)</span>,
  or just go on to a new line if not, much like this image will do:
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('How_are_elements_laid_out_by_default', '100%', 600) }}

Beachten Sie, wie das HTML genau in der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, mit Block-Elementen, die übereinander gestapelt sind.

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erzeugen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Ein gut strukturiertes HTML-Dokument ist sehr wichtig, da Sie dann mit der Standardanordnung der Elemente arbeiten können, anstatt dagegen anzukämpfen.

## Überschreiben des normalen Flusses

Die Methoden, die den normalen Fluss überschreiben und ändern können, wie Elemente in CSS angeordnet werden, die wir in diesem Modul im Detail behandeln werden, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können ändern, wie sich Elemente im normalen Fluss verhalten, indem sie zum Beispiel ein Block-Level-Element wie ein Inline-Level-Element verhalten lassen (wir haben diese im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) behandelt).
- Floats
  - : Das Anwenden eines {{cssxref("float")}}-Wertes wie `left` kann dazu führen, dass Block-Level-Elemente entlang einer Seite eines Elements umfließen, ähnlich wie Bilder manchmal von Text in Magazinlayouts umgeben sind.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen präzise zu kontrollieren. `static`-Positionierung ist der Standard im normalen Fluss, aber Sie können Elemente unterschiedlich anordnen, indem Sie andere Werte verwenden, z.B. sie oben im Browser-Viewport mit `position: fixed` fixieren.
- Spezifische Layout-Systeme, die über `display` zugänglich sind
  - : Wir haben auch ganze Layout-Methoden, die durch spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS-Raster](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide ändern, wie untergeordnete Elemente innerhalb ihrer Eltern angeordnet sind.
- Responsives Design
  - : Responsives Design bezieht sich auf die Erstellung von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite angezeigt wird (z.B. Desktops und Mobiltelefone). Responsives Design bietet keine spezifischen Layout-Tools, sein bedeutendster Bestandteil ist die {{cssxref("@media")}}-Regel, die es Ihnen ermöglicht, je nach Geräteattributen wie Bildschirmbreite oder Auflösung verschiedene Layouts anzuwenden.

### Andere Layout-Techniken

Es gibt andere, weniger häufig verwendete Layout-Techniken, die wir in diesem Modul nicht behandeln werden:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die zur Stilgestaltung von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elemente mit `display: table` und zugehörigen Eigenschaften angewendet werden.
- [Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Mehrspaltige Layout-Eigenschaften können dazu führen, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie man sie in einer Zeitung sehen könnte.

## Zusammenfassung

Dieser Artikel hat eine kurze Zusammenfassung all der Layout-Technologien gegeben, die Sie zu diesem Zeitpunkt Ihres Lernens kennen sollten! Lesen Sie weiter, um mehr über jede einzelne Technologie zu erfahren. Als nächstes werden wir uns Floats anschauen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
