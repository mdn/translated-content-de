---
title: Einführung in CSS-Layout
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen behandelt haben, wie zum Beispiel verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es behandelt auch das Konzept des normalen Flusses im Detail.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
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
          <li>Verstehen, dass normaler Fluss die Standardweise ist, wie ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Wissen, dass Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code> dazu gedacht sind, die Anordnung von Inhalten im Browser zu ändern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayout-Techniken erlauben uns, Elemente auf einer Webseite zu platzieren und zu kontrollieren, wo sie in Bezug auf die folgenden Faktoren positioniert werden: ihre Standardposition im normalen Layoutfluss, die anderen Elemente um sie herum, ihr übergeordnetes Container-Element und das Hauptanzeigefenster/-fenster.

Die unten erwähnten Seitenlayout-Techniken, die wir im Modul im Detail behandeln, haben ihre Anwendungen, Vorteile und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Indem Sie verstehen, für was jede Layoutmethode entworfen wurde, sind Sie in einer guten Position zu verstehen, welche Methode für jede Aufgabe am geeignetsten ist.

## Normaler Layoutfluss

Elemente auf einer Webseite ordnen sich im **normalen Fluss**, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Sie können das Verhalten von Elementen entweder anpassen, indem Sie ihre Position im normalen Fluss verändern oder sie vollständig daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im normalen Fluss lesbar ist, ist der beste Weg, eine Webseite zu beginnen. Es stellt sicher, dass Ihre Inhalte lesbar sind, auch wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der die Inhalte der Seite vorliest. Da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie, indem Sie auf diese Weise beginnen, _mit_ dem Dokument zusammen, anstatt _gegen_ es, während Sie Änderungen am Layout vornehmen.

Bevor wir tiefer in verschiedene Layoutmethoden einsteigen, ist es wert, einige der Dinge erneut zu betrachten, die Sie in vorherigen Modulen in Bezug auf normalen Dokumentenfluss studiert haben.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen individueller Elemente so angeordnet werden, dass ein beliebiges Padding, ein Rand oder ein Abstand, den sie möglicherweise haben, zu ihrem Inhalt hinzugefügt wird. Dies nennen wir das **Box-Modell**.

Standardmäßig füllt ein {{Glossary("Block-level_content", "Block-Level-Element")}} den verfügbaren Inline-Bereich des übergeordneten Elements, das es enthält, auf und wächst in der Blockdimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Level-Elementen")}} ist genau die Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} für einige Elemente festlegen, die einen Standardwert der Eigenschaft {{cssxref("display")}} von `inline` haben, wie etwa {{HTMLElement("img")}}, aber der `display`-Wert bleibt `inline`.

Wenn Sie das `display`-Eigenschaft eines Inline-Level-Elements auf diese Weise kontrollieren möchten, verwenden Sie CSS, um es so einzustellen, dass es wie ein Block-Level-Element funktioniert (z.B. mit `display: block;` oder `display: inline-block;`, was Merkmale von beiden mischt).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie ist es mit der Art, wie sie strukturiert sind, wenn sie miteinander interagieren? Der normale Layoutfluss (erwähnt im Artikel über die Einführung in das Layout) ist das System, das die Platzierung von Elementen innerhalb des Anzeigefensters des Browsers festlegt. Standardmäßig werden Block-Level-Elemente in der _Blockflussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) der Eltern basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter der letzten, wobei jede durch den festgelegten Rand getrennt wird. Im Englischen zum Beispiel (oder jedem anderen horizontalen, von oben nach unten gerichteten Schreibmodus) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen sitzen sie alle in derselben Zeile neben jedem benachbarten (oder umbrochenen) Textinhalt, solange dafür Platz innerhalb der Breite des übergeordneten Block-Level-Elements vorhanden ist. Wenn nicht genug Platz vorhanden ist, wird der überlaufende Inhalt auf eine neue Zeile verschoben.

Wenn zwei vertikal angrenzende Elemente beide einen Rand haben und ihre Ränder sich berühren, bleibt der größere der beiden Ränder bestehen und der kleinere verschwindet. Dies ist bekannt als [**Rand-Kollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Der Randkollaps ist nur in der **vertikalen Richtung** relevant.

### Beispiel für normalen Fluss

Schauen wir uns ein einfaches Beispiel an, das all dies erklärt:

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
  <img src="long.jpg" alt="snippet of cloth" />
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

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der in CSS verfügbaren Werkzeuge ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen, ist sehr wichtig, da Sie dann mit der standardmäßigen Anordnung der Dinge arbeiten können, anstatt dagegen zu kämpfen.

## Überschreiben des normalen Flusses

Die Methoden, die den normalen Fluss überschreiben und ändern können, wie Elemente in CSS angeordnet werden, welche wir in diesem Modul im Detail behandeln werden, sind:

- Die Eigenschaft {{cssxref("display")}}
  - : Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im normalen Fluss ändern, z.B. indem ein Block-Level-Element wie ein Inline-Level-Element funktioniert (wir haben diese bereits in der [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) Lektion behandelt).
- Floats
  - : Durch Anwenden eines {{cssxref("float")}}-Wertes wie `left` können Block-Level-Elemente entlang einer Seite eines Elements umbrochen werden, ähnlich wie Bilder manchmal mit umfließendem Text in Zeitschriftenlayouts erscheinen.
- Positionierung
  - : Die Eigenschaft {{cssxref("position")}} ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen genau zu steuern. `static`-Positionierung ist der Standard im normalen Fluss, aber Sie können Elemente anders anordnen, indem Sie andere Werte verwenden, z.B. indem Sie sie mit `position: fixed` an der Oberseite des Browser-Anzeigefensters fixieren.
- Spezifische Layoutsysteme, die über `display` zugänglich sind
  - : Wir haben auch vollständige Layoutmethoden, die durch spezifische `display`-Werte aktiviert werden. Die wichtigsten, über die Sie Bescheid wissen sollten, sind [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide beeinflussen, wie Elemente innerhalb ihrer übergeordneten Elemente angeordnet werden.
- Responsives Design
  - : Responsives Design bezieht sich auf das Erstellen von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite gerendert wird (z.B. Desktops und Mobiltelefone). Responsives Design bietet keine eigenen spezifischen Layoutwerkzeuge; seine bedeutendste Komponente ist die {{cssxref("@media")}}-Regel, die es Ihnen ermöglicht, unterschiedliche Layouts abhängig von Geräteeigenschaften wie Bildschirmbreite oder -auflösung anzuwenden.

### Andere Layout-Techniken

Es gibt andere Layout-Techniken, die weniger häufig verwendet werden und die wir in diesem Modul nicht behandeln werden:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die für das Styling von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elementen verwendet werden, indem `display: table` und zugehörige Eigenschaften angewendet werden.
- [Multi-Spalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Die Multi-Spalten-Layout-Eigenschaften können bewirken, dass der Inhalt eines Blocks in Spalten geordnet wird, wie Sie es möglicherweise in einer Zeitung sehen.

## Zusammenfassung

Dieser Artikel hat eine kurze Zusammenfassung aller Layouttechnologien gegeben, die Sie an diesem Punkt Ihres Lernens kennen sollten! Lesen Sie weiter, um mehr Informationen zu jeder einzelnen Technologie zu erhalten. Als Nächstes werden wir uns mit Floats beschäftigen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
