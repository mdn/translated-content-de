---
title: Einführung in CSS-Layout
short-title: Introduction
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir in früheren Modulen bereits angesprochen haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es behandelt auch ausführlich das Konzept des normalen Flusses.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">
          Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen Sie die Methoden, die zur Implementierung moderner Seitenlayouts verwendet werden.</li>
          <li>Verstehen Sie, dass der normale Fluss die Standardmethode ist, mit der ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Kennen Sie Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code>, die dazu gedacht sind, zu ändern, wie der Browser Inhalte anordnet.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayout-Techniken ermöglichen es uns, Elemente auf einer Webseite zu positionieren, relativ zu folgenden Faktoren: ihrer Standardposition im normalen Layoutfluss, den anderen Elementen um sie herum, ihrem übergeordneten Container und dem Hauptanzeigebereich/Fenster.

Die im Folgenden genannten und im Modul detailliert behandelten Seitenlayout-Techniken haben ihre Anwendungsbereiche, Vorteile und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Indem Sie verstehen, wofür jede Layout-Methode entwickelt wurde, können Sie besser erkennen, welche Methode für jede Aufgabe am geeignetsten ist.

## Normaler Layoutfluss

Elemente auf einer Webseite werden im **normalen Fluss** angeordnet, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Sie können das Verhalten von Elementen ändern, indem Sie entweder ihre Position im normalen Fluss anpassen oder sie vollständig daraus entfernen. Ein solider, gut strukturierter Dokumentenanfang, der im normalen Fluss lesbar ist, ist der beste Weg, um jede Webseite zu beginnen. Es stellt sicher, dass Ihre Inhalte lesbar sind, selbst wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Seiteninhalt vorliest. Da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie, indem Sie so anfangen, _mit_ dem Dokument, anstatt _gegen_ es zu kämpfen, wenn Sie Änderungen am Layout vornehmen.

Bevor wir uns tiefer mit verschiedenen Layoutmethoden befassen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen im Hinblick auf den normalen Dokumentenfluss gelernt haben, noch einmal zu betrachten.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen der einzelnen Elemente so angeordnet werden, dass jedes Polster, jeder Rand oder jede Marge, die sie zufällig haben, zu ihrem Inhalt hinzugefügt wird. Dies ist, was wir als **Box-Modell** bezeichnen.

Standardmäßig füllt der Inhalt eines {{Glossary("Block-level_content", "Block-Elementes")}} den verfügbaren Inline-Bereich des übergeordneten Elements, das es enthält, aus und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Elementen")}} ist nur die Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} auf einigen Elementen festlegen, die einen Standardwert der {{cssxref("display")}}-Eigenschaft von `inline` haben, wie zum Beispiel {{HTMLElement("img")}}, aber der `display`-Wert bleibt dennoch `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es so einzustellen, dass es sich wie ein Block-Element verhält (z.B. mit `display: block;` oder `display: inline-block;`, das Merkmale von beiden mischt).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie sieht es mit der Art aus, wie sie strukturiert sind, wenn sie miteinander interagieren? Der normale Layoutfluss (im Layout-Einführungsartikel erwähnt) ist das System, durch das Elemente innerhalb des Anzeigebereichs des Browsers platziert werden. Standardmäßig werden Block-Elemente in der _Block-Flussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint auf einer neuen Linie unter dem letzten, wobei jedes durch die angegebene Marge getrennt ist. In Englisch zum Beispiel (oder jedem anderen horizontalen, von oben nach unten verlaufenden Schreibmodus) werden Block-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht auf neuen Linien; stattdessen sitzen sie alle in der gleichen Linie zusammen mit jedem benachbarten (oder umgebenden) Textinhalt, solange dafür Platz innerhalb der Breite des übergeordneten Block-Elements vorhanden ist. Wenn kein Platz vorhanden ist, wird der überlaufende Inhalt auf eine neue Linie verschoben.

Wenn zwei vertikal angrenzende Elemente beide eine Marge haben und ihre Margen sich berühren, bleibt die größere der beiden Margen bestehen und die kleinere verschwindet. Dies ist bekannt als [**Marge-Zusammenbruch**](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing). Der Margenzusammenbruch ist nur in der **vertikalen Richtung** relevant.

### Beispiel für normalen Flow

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

Beachten Sie, wie das HTML in der exakten Reihenfolge angezeigt wird, die im Quellcode erscheint, mit Block-Elementen, die übereinander gestapelt sind.

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie dieses Standardverhalten jedoch mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Ein gut strukturiertes HTML-Dokument zu beginnen, ist sehr wichtig, da Sie auf diese Weise mit der Art und Weise arbeiten können, wie Dinge standardmäßig angeordnet sind, anstatt dagegen zu kämpfen.

## Normalen Fluss überschreiben

Die Methoden, die den normalen Fluss überschreiben und ändern können, wie Elemente in CSS angeordnet werden, die wir in diesem Modul im Detail behandeln werden, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können ändern, wie Elemente sich im normalen Fluss verhalten, indem ein Block-Element beispielsweise wie ein Inline-Element agiert (wir haben diese im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) Lektion behandelt).
- Floats
  - : Das Anwenden eines {{cssxref("float")}}-Werts wie `left` kann dazu führen, dass Block-Elemente sich an einer Seite eines Elements entlang wickeln, wie bei Bildern, um die manchmal Text in Magazinlayouts fließt.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen genau zu kontrollieren. `static` Positionierung ist der Standard im normalen Fluss, aber Sie können Elemente mithilfe anderer Werte anders anordnen lassen, zum Beispiel indem Sie sie mithilfe von `position: fixed` oben im Browser-Anzeigebereich fixieren.
- Spezifische Layout-Systeme, die über `display` aufgerufen werden
  - : Wir haben auch gesamte Layout-Methoden, die über spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS-Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide ändern, wie untergeordnete Elemente innerhalb ihrer Eltern angeordnet werden.
- Responsives Design
  - : Responsives Design bedeutet, Layouts zu erstellen, die sich an verschiedene Geräte anpassen, auf denen die Webseite gerendert wird (zum Beispiel Desktops und Mobiltelefone). Responsives Design bietet keine spezifischen Layout-Werkzeuge; sein wesentlicher Bestandteil ist die {{cssxref("@media")}}-At-Regel, die es Ihnen ermöglicht, je nach Geräteattributen wie Bildschirmbreite oder Auflösung unterschiedliche Layouts anzuwenden.

### Andere Layout-Techniken

Es gibt andere Layout-Techniken, die weniger häufig verwendet werden, die wir in diesem Modul nicht abdecken:

- [Table-Layout](/de/docs/Web/CSS/Guides/Table)
  - : Funktionen, die entwickelt wurden, um Teile einer HTML-Tabelle zu gestalten, können auf Nicht-Tabellen-Elemente angewendet werden, indem `display: table` und zugehörige Eigenschaften verwendet werden.
- [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)
  - : Die Mehrspalten-Layout-Eigenschaften können bewirken, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie Sie es in einer Zeitung sehen könnten.

## Zusammenfassung

Dieser Artikel bietet eine kurze Übersicht über alle Layout-Technologien, die Sie an diesem Punkt Ihres Lernprozesses kennen sollten! Lesen Sie weiter, um mehr über jede einzelne Technologie zu erfahren. Als Nächstes werden wir uns mit Floats befassen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
