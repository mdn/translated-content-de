---
title: Einführung in das CSS-Layout
short-title: Introduction
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen behandelt haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul abdecken werden. Außerdem wird das Konzept des normalen Flusses ausführlich behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen Sie die Methoden zur Implementierung moderner Seitenlayouts.</li>
          <li>Verstehen Sie, dass der normale Fluss die Standardmethode ist, mit der ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Kennen Sie Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code>, die dazu gedacht sind, die Art und Weise zu ändern, wie der Browser Inhalte anordnet.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Layout-Techniken ermöglichen es uns, Elemente auf einer Webseite zu nehmen und ihre Position relativ zu den folgenden Faktoren zu kontrollieren: ihrer Standardposition im normalen Layout-Fluss, den anderen sie umgebenden Elementen, ihrem übergeordneten Container und dem Haupt-Viewport/Fenster.

Die nachfolgend erwähnten Seitenlayout-Techniken, die wir detailliert im Modul behandeln, haben ihre Anwendungsgebiete, Vorteile und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Indem Sie verstehen, wofür jede Layout-Methode entworfen wurde, sind Sie in einer guten Position zu verstehen, welche Methode für jede Aufgabe am besten geeignet ist.

## Normaler Layout-Fluss

Elemente auf einer Webseite werden im **normalen Fluss** angeordnet, wenn Sie kein CSS angewendet haben, um deren Verhalten zu ändern. Sie können das Verhalten von Elementen entweder durch Anpassen ihrer Position im normalen Fluss ändern oder indem Sie sie ganz daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im normalen Fluss lesbar ist, ist der beste Weg, um eine Webseite zu starten. Es stellt sicher, dass Ihre Inhalte lesbar sind, selbst wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Darüber hinaus, da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie, indem Sie auf diese Weise beginnen, mit dem Dokument anstatt gegen es, während Sie Änderungen am Layout vornehmen.

Bevor wir uns näher mit verschiedenen Layout-Methoden befassen, lohnt es sich, einige der Dinge, die Sie in vorherigen Modulen im Hinblick auf den normalen Dokumentenfluss studiert haben, noch einmal zu überdenken.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Kästen der einzelnen Elemente so angeordnet sind, dass jeglicher Puffer, Rand oder Spacing, den sie möglicherweise haben, zu ihrem Inhalt hinzugefügt wird. Dies nennen wir das **Boxmodell**.

Standardmäßig füllt der Inhalt eines {{Glossary("Block-level_content", "Block-Level-Elements")}} den verfügbaren Inline-Raum des ihn enthaltenden übergeordneten Elements aus und wächst in der Block-Dimension, um seinen Inhalt zu berücksichtigen. Die Größe von {{Glossary("Inline-level_content", "Inline-Level-Elementen")}} entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} für einige Elemente festlegen, die standardmäßig den {{cssxref("display")}}-Wert `inline` haben, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt trotzdem `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Level-Elements auf diese Weise kontrollieren möchten, verwenden Sie CSS, um es wie ein Block-Level-Element zu verhalten (z.B. mit `display: block;` oder `display: inline-block;`, das Eigenschaften von beiden mischt).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie steht es um die Art, wie sie strukturiert sind, wenn sie miteinander interagieren? Der normale Layout-Fluss (erwähnt im Layout-Einführungsartikel) ist das System, durch das Elemente im Viewport des Browsers platziert werden. Standardmäßig werden Block-Level-Elemente in der _Blockflussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint auf einer neuen Linie unter dem letzten, wobei jedes durch den festgelegten Margin-Abstand getrennt ist. Im Englischen zum Beispiel (oder jedem anderen horizontalen, von oben nach unten verlaufenden Schreibmodus) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht auf neuen Zeilen; stattdessen sitzen sie alle auf derselben Linie zusammen mit allen angrenzenden (oder umbrochenen) Textinhalten, solange dort Platz für sie in der Breite des übergeordneten Block-Level-Elements vorhanden ist. Wenn kein Platz ist, wird der Überlaufinhalt auf eine neue Zeile verschoben.

Wenn zwei vertikal aneinander grenzende Elemente beide einen Rand aufweisen und ihre Ränder sich berühren, bleibt der größere der beiden Ränder bestehen und der kleinere verschwindet. Dies wird als [**Margenkollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet. Der Margenkollaps ist nur in vertikaler Richtung relevant.

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

Beachten Sie, wie das HTML in genau der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, wobei Block-Elemente übereinander gestapelt werden.

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der in CSS verfügbaren Werkzeuge ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen ist sehr wichtig, da Sie dann mit der Standardanordnung arbeiten können, anstatt dagegen anzukämpfen.

## Überschreiben des normalen Flusses

Die Methoden, die den normalen Fluss überschreiben und ändern können, wie Elemente in CSS angeordnet werden, die wir in diesem Modul ausführlich behandeln werden, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im normalen Fluss ändern, z.B. indem ein Block-Level-Element wie ein Inline-Level-Element handelt (wir haben diese bereits im [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes)-Unterricht behandelt).
- Floats
  - : Das Anwenden eines {{cssxref("float")}}-Wertes wie `left` kann dazu führen, dass Block-Level-Elemente entlang einer Seite eines Elements umbrochen werden, ähnlich wie bei Bildern, die in Magazinen fließend von Text umgeben werden.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es Ihnen, die Platzierung von Kästen innerhalb anderer Kästen präzise zu steuern. `static` ist die Standardposition im normalen Fluss, aber Sie können Elemente mit anderen Werten anders angeordnet werden lassen, z.B. sie oben im Browseransichtsfenster fest zu machen mit `position: fixed`.
- Spezifische Layout-Systeme über `display` zugänglich
  - : Wir haben auch ganze Layout-Methoden, die über spezifische `display`-Werte aktiviert werden. Die wichtigsten, über die Sie Bescheid wissen sollten, sind [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide ändern, wie Kind-Elemente innerhalb ihrer Eltern angeordnet werden.
- Responsives Design
  - : Responsives Design bezieht sich auf das Erstellen von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite angezeigt wird (z.B. Desktops und Mobiltelefone). Responsives Design bietet keine spezifischen Layout-Werkzeuge; seine bedeutendste Komponente ist die {{cssxref("@media")}}-At-Regel, die es Ihnen ermöglicht, je nach Geräteattributen wie Bildschirmbreite oder Auflösung verschiedene Layouts anzuwenden.

### Andere Layout-Techniken

Es gibt andere weniger häufig verwendete Layout-Techniken, die wir in diesem Modul nicht behandeln werden:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die dafür entworfen sind, Teile einer HTML-Tabelle zu gestalten, können auf Nicht-Tabellen-Elemente mit `display: table` und zugehörigen Eigenschaften angewendet werden.
- [Multi-Spalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Die Multi-Spalten-Layout-Eigenschaften können den Inhalt eines Blocks in Spalten anordnen, wie Sie es möglicherweise in einer Zeitung sehen.

## Zusammenfassung

Dieser Artikel bietet eine kurze Zusammenfassung aller Layout-Technologien, über die Sie zu diesem Zeitpunkt in Ihrem Lernprozess Bescheid wissen sollten! Lesen Sie weiter, um mehr über jede einzelne Technologie zu erfahren. Als nächstes werden wir uns Floats ansehen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
