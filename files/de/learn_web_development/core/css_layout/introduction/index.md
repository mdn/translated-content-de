---
title: Einführung in CSS-Layout
short-title: Introduction
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen angesprochen haben, wie beispielsweise verschiedene {{cssxref("display")}}-Werte, und stellt einige der Konzepte vor, die wir in diesem Modul behandeln werden. Zudem wird das Konzept des normalen Flusses ausführlich behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturieren von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen der Methoden zur Implementierung moderner Seitenlayouts.</li>
          <li>Verstehen, dass der normale Fluss die Standardanzahlung ist, wie ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Kennen, dass Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code> darauf abzielen, die Anordnung von Inhalten im Browser zu ändern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayouttechniken ermöglichen es uns, Elemente in einer Webseite zu positionieren und zu kontrollieren, wo sie sich in Bezug auf die folgenden Faktoren befinden: ihre Standardposition im normalen Layoutfluss, die anderen Elemente um sie herum, ihr übergeordnetes Container-Element und das Hauptsichtfenster/Fenster.

Die im Folgenden erwähnten Layouttechniken, die wir im Laufe des Moduls ausführlich behandeln werden, haben ihre Verwendung, Vorteile und Nachteile. Keine Technik ist dafür vorgesehen, isoliert verwendet zu werden. Indem Sie verstehen, für welchen Zweck jede Layoutmethode entwickelt wurde, sind Sie in einer guten Position, um zu verstehen, welche Methode für jede Aufgabe am besten geeignet ist.

## Normaler Layoutfluss

Elemente auf einer Webseite werden im **normalen Fluss** angeordnet, wenn Sie kein CSS angewendet haben, um deren Verhalten zu ändern. Sie können das Verhalten von Elementen entweder anpassen, indem Sie ihre Position im normalen Fluss ändern oder sie ganz daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im normalen Fluss lesbar ist, ist der beste Weg, um jede Webseite zu beginnen. Es stellt sicher, dass Ihre Inhalte lesbar sind, selbst wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Bildschirmleser verwendet, das den Inhalt der Seite vorliest. Da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie, indem Sie so beginnen, _mit_ dem Dokument anstatt _gegen_ es, während Sie das Layout ändern.

Bevor Sie tiefer in verschiedene Layoutmethoden eintauchen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen in Bezug auf den normalen Dokumentenfluss gelernt haben, noch einmal zu überdenken.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt, da die Boxen einzelner Elemente so angeordnet werden, dass jeglicher Innenabstand, Rand oder Rahmen, den sie möglicherweise haben, zu ihrem Inhalt hinzugefügt wird. Dies ist das, was wir das **Box-Modell** nennen.

Standardmäßig füllt ein {{Glossary("Block-level_content", "Block-Level-Element")}} den verfügbaren Inline-Bereich des übergeordneten Elements, das es enthält, und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Level-Elementen")}} entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} auf einigen Elementen mit einem Standardwert der {{cssxref("display")}}-Eigenschaft, der `inline` ist, wie {{HTMLElement("img")}}, festlegen, aber der `display`-Wert bleibt dennoch `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Level-Elements auf diese Weise kontrollieren möchten, verwenden Sie CSS, um es so einzustellen, dass es sich wie ein Block-Level-Element verhält (z. B. mit `display: block;` oder `display: inline-block;`, was Eigenschaften aus beiden kombiniert).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie sieht es mit der Art aus, wie sie interagieren, wenn sie zusammenarbeiten? Der normale Layoutfluss (erwähnt im Layout-Einführungsartikel) ist das System, durch das Elemente im Sichtfenster des Browsers platziert werden. Standardmäßig werden Block-Level-Elemente in der _Block-Flussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint auf einer neuen Linie unter dem letzten, und jedes wird durch den angegebenen Abstand voneinander getrennt. Auf Englisch zum Beispiel (oder in jedem anderen horizontalen Schreibmodus von oben nach unten) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht auf neuen Linien; stattdessen befinden sie sich alle auf derselben Linie zusammen mit jedem angrenzenden (oder umgebenden) Textinhalt, solange Platz dafür innerhalb der Breite des übergeordneten Block-Level-Elements vorhanden ist. Wenn nicht genügend Platz vorhanden ist, bewegt sich der überfließende Inhalt auf eine neue Linie.

Wenn zwei vertikal angrenzende Elemente beide einen Rand festgelegt haben und ihre Ränder sich berühren, bleibt der größere der beiden Ränder bestehen und der kleinere verschwindet. Dies wird als [**Margin-Kollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet. Margin-Kollaps ist nur in der **vertikalen Richtung** relevant.

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

Beachten Sie, wie das HTML in genau der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, mit Block-Elementen, die aufeinander gestapelt sind.

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Ein gut strukturiertes HTML-Dokument zu beginnen, ist sehr wichtig, da Sie dann mit der Art und Weise arbeiten können, wie Dinge standardmäßig angeordnet sind, anstatt dagegen zu kämpfen.

## Übersteuerung des normalen Flusses

Die Methoden, die den normalen Fluss übersteuern und ändern können, wie Elemente in CSS angeordnet werden, welche wir in diesem Modul im Detail behandeln werden, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im normalen Fluss ändern, zum Beispiel, indem ein Block-Level-Element so verhält wie ein Inline-Level-Element (wir haben diese im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes)-Lektion behandelt).
- Floats
  - : Durch Anwenden eines {{cssxref("float")}}-Wertes wie `left` können Block-Level-Elemente um eine Seite eines Elements herum angeordnet werden, wie zum Beispiel bei Bildern in Magazinen, die von Text umflossen werden.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen genau zu steuern. `static`-Positionierung ist die Standardeinstellung im normalen Fluss, aber Sie können Elemente anders anordnen, indem Sie andere Werte verwenden, beispielsweise indem Sie sie mit `position: fixed` oben im Browser-Sichtfenster fixieren.
- Spezifische Layoutsysteme, die über `display` zugänglich sind
  - : Wir haben auch vollständige Layoutmethoden, die durch spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS-Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide beeinflussen, wie untergeordnete Elemente innerhalb ihrer übergeordneten Elemente angeordnet werden.
- Responsives Design
  - : Responsives Design bezieht sich auf das Erstellen von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite gerendert wird (zum Beispiel Desktop-Computer und Mobiltelefone). Responsives Design liefert keine spezifischen eigenen Layout-Werkzeuge; das bedeutendste Element ist die {{cssxref("@media")}}-At-Regel, die es Ihnen ermöglicht, je nach Geräteattributen wie Bildschirmbreite oder -auflösung unterschiedliche Layouts anzuwenden.

### Andere Layouttechniken

Es gibt andere Layouttechniken, die seltener verwendet werden und die wir in diesem Modul nicht behandeln werden:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die zum Stylen von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elemente mithilfe von `display: table` und zugehörigen Eigenschaften angewendet werden.
- [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Die Mehrspaltenlayout-Eigenschaften können dazu führen, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie man es in einer Zeitung sehen könnte.

## Zusammenfassung

Dieser Artikel hat eine kurze Zusammenfassung aller Layout-Technologien bereitgestellt, die Sie an diesem Punkt Ihres Lernprozesses kennen sollten! Lesen Sie weiter für weitere Informationen zu jeder einzelnen Technologie. Als nächstes werden wir uns mit Floats beschäftigen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
