---
title: Einführung in das CSS-Layout
short-title: Introduction
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen behandelt haben, wie die verschiedenen {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es wird auch das Konzept des normalen Flusses eingehend behandelt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen der Methoden zur Implementierung moderner Seitenlayouts.</li>
          <li>Verständnis, dass der normale Fluss die Standardmethode ist, mit der ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Wissen, dass Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code> dazu gedacht sind, die Art und Weise zu ändern, wie der Browser Inhalte anordnet.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Techniken zur Layoutgestaltung mit CSS ermöglichen es uns, Elemente auf einer Webseite zu positionieren, in Bezug auf folgende Faktoren: ihre Standardposition im normalen Layoutfluss, die anderen Elemente um sie herum, ihr übergeordnetes Container-Element und das Hauptansichtsfenster/Fenster.

Die im Folgenden erwähnten Seitenlayout-Techniken, die wir im Modul ausführlich behandeln werden, haben ihren Nutzen, ihre Vorteile und Nachteile. Keine Technik ist dafür ausgelegt, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layoutmethode konzipiert ist, sind Sie in einer guten Position zu verstehen, welche Methode für jede Aufgabe am besten geeignet ist.

## Normale Layoutfluss

Elemente auf einer Webseite werden im **normalen Fluss** angeordnet, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Sie können das Verhalten von Elementen ändern, indem Sie entweder ihre Position im normalen Fluss anpassen oder sie ganz daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im normalen Fluss lesbar ist, ist der beste Weg, um jede Webseite zu starten. Es stellt sicher, dass Ihre Inhalte lesbar sind, selbst wenn der Benutzer einen sehr limitierten Browser oder ein Gerät wie einen Bildschirmleser verwendet, der die Inhalte der Seite vorliest. Da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erzeugen, arbeiten Sie auf diese Weise mit dem Dokument, anstatt gegen es, wenn Sie Änderungen am Layout vornehmen.

Bevor wir tiefer in verschiedene Layoutmethoden eintauchen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen in Bezug auf den normalen Dokumentenfluss gelernt haben, zu überdenken.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen einzelner Elemente so angeordnet werden, dass alle vorhandenen Inhalte durch ihre Polsterung, ihren Rahmen oder ihren Rand ergänzt werden. Dies nennen wir das **Boxmodell**.

Standardmäßig füllt der Inhalt eines {{Glossary("Block-level_content", "Block-Elementes")}} den verfügbaren Inline-Bereich des übergeordneten Elements aus und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Elementen")}} entspricht der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} auf einigen Elementen setzen, die einen Standardwert der {{cssxref("display")}}-Eigenschaft von `inline` haben, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt `inline`.

Wenn Sie das `display`-Eigenschaftsverhalten eines Inline-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es wie ein Block-Element verhalten zu lassen (z. B. mit `display: block;` oder `display: inline-block;`, was Merkmale beider mischt).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie sieht es mit der Struktur aus, wenn sie miteinander interagieren? Der normale Layoutfluss (erwähnt im Artikel über die Layout-Einführung) ist das System, mit dem Elemente im Ansichtsfenster des Browsers platziert werden. Standardmäßig werden Block-Elemente in die _Block-Fließrichtung_ gelegt, die auf dem [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem vorherigen, wobei sie durch den spezifizierten Rand getrennt sind. Auf Englisch zum Beispiel (oder einem anderen horizontalen, von oben nach unten Schreibmodus) werden Block-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen sitzen sie alle in derselben Zeile zusammen mit jedem benachbarten (oder umgebrochenen) Textinhalt, solange es Platz dafür innerhalb der Breite des übergeordneten Block-Elements gibt. Wenn kein Platz vorhanden ist, wird der überfließende Inhalt in eine neue Zeile verschoben.

Wenn zwei vertikal benachbarte Elemente beide einen Rand gesetzt haben und ihre Ränder sich berühren, bleibt der größere der beiden Ränder bestehen und der kleinere verschwindet. Dies wird als [**Randkollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet. Kollisionen von Margins sind nur in vertikaler Richtung relevant.

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

Beachten Sie, wie das HTML in genau der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, wobei Block-Elemente übereinander gestapelt sind.

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen, ist sehr wichtig, da Sie dann mit der Anordnung der Dinge, wie sie standardmäßig angeordnet sind, arbeiten können, anstatt dagegen anzukämpfen.

## Übersteuerung des normalen Flusses

Die Methoden, die den normalen Fluss übersteuern und ändern können, wie Elemente in CSS angeordnet werden, die wir in diesem Modul im Detail behandeln werden, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im normalen Fluss ändern, z. B. indem sie ein Block-Element wie ein Inline-Element verhalten lassen (wir haben diese bereits in der Lektion zum [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) behandelt).
- Floats
  - : Das Anwenden eines {{cssxref("float")}}-Werts wie `left` kann dazu führen, dass Block-Elemente entlang einer Seite eines Elements flottieren, ähnlich wie Bilder manchmal in Zeitschriftenlayouts von Text umgeben sind.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen präzise zu steuern. `static` ist die Standardpositionierung im normalen Fluss, aber Sie können Elemente mit anderen Werten unterschiedlich anordnen, z. B. sie mit `position: fixed` am oberen Rand des Browserfensters positionieren.
- Spezifische Layout-Systeme, die über `display` zugänglich sind
  - : Es gibt auch gesamte Layout-Methoden, die über spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide beeinflussen, wie Kindelemente innerhalb ihrer Eltern angeordnet werden.
- Responsives Design
  - : Responsives Design bezieht sich auf die Erstellung von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite dargestellt wird (zum Beispiel Desktops und Mobiltelefone). Responsives Design bietet keine spezifischen Layout-Werkzeuge; seine bedeutendste Komponente ist die {{cssxref("@media")}}-Regel, die es Ihnen ermöglicht, je nach Geräteeigenschaften wie Bildschirmbreite oder -auflösung unterschiedliche Layouts anzuwenden.

### Andere Layout-Techniken

Es gibt andere Layout-Techniken, die weniger häufig verwendet werden und die wir in diesem Modul nicht behandeln werden:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die für das Styling von Teilen einer HTML-Tabelle entworfen wurden, können auf Nicht-Tabellen-Elemente angewendet werden, indem `display: table` und verwandte Eigenschaften verwendet werden.
- [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Die Eigenschaften des Mehrspaltenlayouts können dazu führen, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie Sie es in einer Zeitung sehen könnten.

## Zusammenfassung

Dieser Artikel bietet einen kurzen Überblick über alle Layout-Technologien, die Sie zu diesem Zeitpunkt Ihres Lernens kennen sollten! Lesen Sie weiter für weitere Informationen zu jeder einzelnen Technologie. Als Nächstes schauen wir uns Floats an.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
