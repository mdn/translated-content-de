---
title: Einführung in CSS-Layout
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: 179872e1c21ddaba37d4ef9d1187ee5995e0aa45
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion wiederholt einige der CSS-Layout-Funktionen, die wir bereits in vorherigen Modulen besprochen haben, wie verschiedene {{cssxref("display")}}-Werte. Außerdem führt sie einige der Konzepte ein, die wir in diesem Modul behandeln werden. Dabei wird auch das Konzept des Normalflusses ausführlich erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen der Methoden, die für die Umsetzung moderner Seitenlayouts verwendet werden.</li>
          <li>Verstehen, dass der Normalfluss die Standardweise ist, wie ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Kennenlernen von Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code>, die darauf abzielen, die Layoutweise des Browsers zu ändern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayout-Techniken ermöglichen es uns, Elemente in einer Webseite relativ zu den folgenden Faktoren zu positionieren: ihrer Standardposition im Normalfluss, den anderen Elementen um sie herum, ihrem übergeordneten Container und dem Hauptansichtsfenster/Fenster.

Die unten erwähnten und im Detail im Modul behandelten Layout-Techniken haben jeweils ihre Verwendungszwecke, Vorteile und Nachteile. Keine Technik ist dazu gedacht, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layoutmethode entwickelt wurde, können Sie besser beurteilen, welche Methode für jede Aufgabe am geeignetsten ist.

## Normaler Layoutfluss

Elemente auf einer Webseite werden im **Normalfluss** angeordnet, wenn kein CSS angewendet wurde, um ihr Verhalten zu ändern. Sie können das Verhalten von Elementen ändern, indem Sie ihre Position im Normalfluss anpassen oder sie vollständig aus dem Normalfluss entfernen. Ein solides, gut strukturiertes Dokument, das im Normalfluss lesbar ist, ist die beste Grundlage für jede Webseite. Es stellt sicher, dass Ihr Inhalt lesbar ist, auch wenn der Benutzer einen stark eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Seiteninhalt vorliest. Zudem arbeitet der Normalfluss darauf hin, ein lesbares Dokument zu erstellen. Wenn Sie auf diese Weise beginnen, arbeiten Sie _mit_ dem Dokument, anstatt _dagegen_, während Sie Änderungen am Layout vornehmen.

Bevor wir verschiedene Layoutmethoden genauer betrachten, lohnt es sich, einige der in den vorherigen Modulen behandelten Punkte bezüglich des normalen Dokumentenflusses erneut zu betrachten.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen einzelner Elemente so angeordnet werden, dass jeglicher `padding`, `border` oder `margin`, den sie aufweisen, zu ihrem Inhalt hinzugefügt wird. Dies nennen wir das **Boxmodell**.

Standardmäßig füllt der Inhalt eines {{Glossary("Block-level_content", "Block-Levels-Elements")}} den verfügbaren Inline-Space des übergeordneten Elements, das es enthält, und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Elementen")}} entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} auf einige Elemente einstellen, die einen Standard-{{cssxref("display")}}-Wert von `inline` haben, wie z. B. {{HTMLElement("img")}}, jedoch bleibt der `display`-Wert dennoch `inline`.

Falls Sie das `display`-Attribut eines Inline-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es wie ein Block-Level-Element zu behandeln (z. B. mit `display: block;` oder `display: inline-block;`, welches Merkmale von beiden kombiniert).

Das erklärt, wie Elemente einzeln strukturiert werden, aber wie sieht es mit der Struktur aus, wenn sie miteinander interagieren? Der normale Layoutfluss (im Layout-Einführungsartikel erwähnt) ist das System, nach dem Elemente innerhalb des Viewports des Browsers platziert werden. Standardmäßig werden Block-Level-Elemente in der _Block-Fluss-Richtung_ angeordnet, welche auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) der Eltern basiert (_Initialwert_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem vorherigen, wobei jedes durch den festgelegten `margin` getrennt ist. Auf Englisch beispielsweise (oder in anderen horizontalen, von oben nach unten geschriebenen Schreibmodi) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen, sondern sitzen alle in einer einzigen Zeile zusammen mit jeglichem angrenzenden (oder umgebrochenem) Textinhalt, sofern innerhalb der Breite des übergeordneten Block-Levels-Elements Platz dafür vorhanden ist. Falls nicht, wird der überfließende Inhalt in eine neue Zeile verschoben.

Wenn zwei vertikal angrenzende Elemente beide einen `margin`-Wert haben und sich ihre Ränder überschneiden, bleibt der größere der beiden `margin`-Werte erhalten und der kleinere verschwindet. Dies wird als [**Margin-Kollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet. Margin-Kollaps ist nur in der **vertikalen Richtung** relevant.

### Beispiel für den Normalfluss

Schauen wir uns ein einfaches Beispiel an, das alles erklärt:

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

Beachten Sie, dass das HTML genau in der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, mit Block-Elementen, die übereinander gestapelt sind.

Für viele der Elemente auf Ihrer Seite wird der Normalfluss genau das Layout erzeugen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit den in CSS verfügbaren Tools ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen, ist sehr wichtig, da Sie dann mit der Standardanordnung arbeiten können, anstatt dagegen anzukämpfen.

## Normalfluss überschreiben

Die Methoden, die den Normalfluss überschreiben und die Anordnung von Elementen in CSS ändern können und die wir in diesem Modul im Detail behandeln, sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im Normalfluss ändern, z. B. indem ein Block-Level-Element wie ein Inline-Level-Element behandelt wird (wie wir im [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) behandelt haben).
- Floats
  - : Durch Anwenden eines {{cssxref("float")}}-Wertes wie `left` können Block-Level-Elemente um ein Element herumfließen, ähnlich wie Bilder in Magazinlayouts, um die herum Text schwebt.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft erlaubt es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen präzise zu kontrollieren. `static`-Positionierung ist der Standard im Normalfluss, aber Sie können Elemente durch andere Werte wie `position: fixed` anders platzieren, indem Sie sie beispielsweise an den oberen Bereich des Browser-Viewports fixieren.
- Spezifische Layoutsysteme über `display`
  - : Es gibt auch komplette Layoutmethoden, die über spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS-Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide ändern, wie Kind-Elemente innerhalb ihrer Eltern angeordnet werden.
- Responsives Design
  - : Responsives Design bezieht sich auf die Erstellung von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite angezeigt wird (z. B. Desktops und Mobiltelefone). Responsives Design bietet keine spezifischen eigenen Layout-Tools; sein bedeutendstes Element ist die {{cssxref("@media")}}-At-Regel, mit der verschiedene Layouts je nach Geräteattributen wie Bildschirmbreite oder Auflösung angewendet werden können.

### Weitere Layout-Techniken

Es gibt weitere Layout-Techniken, die weniger häufig verwendet werden und die wir in diesem Modul nicht behandeln:

- [Tabellenlayout](/de/docs/Web/CSS/CSS_table)
  - : Funktionen, die für die Gestaltung von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elemente unter Verwendung von `display: table` und zugehörigen Eigenschaften angewendet werden.
- [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Die Mehrspaltenlayout-Eigenschaften können dazu führen, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie Sie es in einer Zeitung sehen könnten.

## Zusammenfassung

Dieser Artikel hat eine kurze Zusammenfassung aller Layout-Technologien geliefert, die Sie bis zu diesem Punkt Ihres Lernens kennen sollten! Lesen Sie weiter, um mehr Informationen zu jeder einzelnen Technologie zu erhalten. Als Nächstes beschäftigen wir uns mit Floats.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
