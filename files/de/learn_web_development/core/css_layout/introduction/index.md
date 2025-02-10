---
title: Einführung in CSS-Layout
slug: Learn_web_development/Core/CSS_layout/Introduction
l10n:
  sourceCommit: bd008ed318e89c7debfbcd5549a8171fd98b239d
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}

Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen angerissen haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Außerdem wird das Konzept des normalen Flusses ausführlich besprochen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen der Methoden, die zur Implementierung moderner Seitenlayouts verwendet werden.</li>
          <li>Verstehen, dass der normale Fluss die Standardmethode ist, mit der ein Browser Block- und Inline-Inhalte anordnet.</li>
          <li>Kennen der Eigenschaften wie <code>display</code>, <code>float</code> und <code>position</code>, die die Art und Weise verändern sollen, wie der Browser Inhalte anordnet.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

CSS-Layout-Techniken erlauben es uns, Elemente einer Webseite zu platzieren und zu steuern, wo sie sich in Bezug auf die folgenden Faktoren befinden: ihre Standardposition im normalen Layout-Fluss, die anderen Elemente um sie herum, ihr übergeordnetes Container-Element und den Hauptbetrachterbereich/das Fenster.

Die unten aufgeführten Layout-Techniken, die wir im Modul im Detail behandeln werden, haben jeweils ihre Vor- und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layoutmethode gedacht ist, sind Sie in einer guten Position, um zu entscheiden, welche Methode für jede Aufgabe am besten geeignet ist.

## Normaler Layout-Fluss

Elemente auf einer Webseite werden im **normalen Fluss** angeordnet, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Sie können das Verhalten von Elementen ändern, entweder indem Sie ihre Position im normalen Fluss anpassen oder indem Sie sie ganz daraus entfernen. Ein solides, gut strukturiertes Dokument zu erstellen, das im normalen Fluss lesbar ist, ist der beste Weg, jede Webseite zu beginnen. Dies stellt sicher, dass Ihre Inhalte lesbar sind, auch wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Da der normale Fluss dafür ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie auf diese Weise _mit_ dem Dokument, anstatt _gegen_ es zu kämpfen, während Sie das Layout verändern.

Bevor wir tiefer in verschiedene Layout-Methoden eintauchen, lohnt es sich, einige der Dinge zu wiederholen, die Sie in früheren Modulen im Hinblick auf den normalen Dokumentenfluss gelernt haben.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen einzelner Elemente so angeordnet werden, dass beliebige padding-, border- oder margin-Werte ihrem Inhalt hinzugefügt werden. Dies wird als **Box-Modell** bezeichnet.

Standardmäßig füllen die Inhalte eines {{Glossary("Block-level_content", "Block-Elementes")}} den verfügbaren Inline-Bereich des übergeordneten Elements aus, das sie enthält, und wachsen in der Blockrichtung, um ihren Inhalt aufzunehmen. Die Größe von {{Glossary("Inline-level_content", "Inline-Elementen")}} entspricht lediglich der Größe ihres Inhalts. Sie können {{cssxref("width")}}- oder {{cssxref("height")}}-Werte für einige Elemente festlegen, deren Standardwert für die {{cssxref("display")}}-Eigenschaft `inline` ist, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt dennoch `inline`.

Wenn Sie das Verhalten der `display`-Eigenschaft eines Inline-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es wie ein Block-Element zu behandeln (z. B. mit `display: block;` oder `display: inline-block;`, was Merkmale beider vereint).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie ist es mit der Art und Weise, wie sie miteinander interagieren? Der normale Layout-Fluss (erwähnt im Einführungsartikel zum Layout) ist das System, mit dem Elemente im Ansichtsfenster des Browsers angeordnet werden. Standardmäßig werden Block-Elemente in der _Blockflussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem vorherigen, voneinander getrennt durch den jeweils festgelegten margin-Wert. In Englisch beispielsweise (oder bei anderen horizontalen, von oben nach unten verlaufenden Schreibmodi) werden Block-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen, sondern befinden sich alle in derselben Zeile zusammen mit angrenzendem (oder umgebrochenem) Textinhalt, solange innerhalb der Breite des übergeordneten Block-Elements Platz dafür vorhanden ist. Ist dies nicht der Fall, wird der überfließende Inhalt in eine neue Zeile umbrochen.

Wenn zwei vertikal benachbarte Elemente beide einen margin-Wert haben und diese Berührungspunkte aufweisen, bleibt der größere der beiden margin-Werte erhalten und der kleinere verschwindet. Dies wird als [**Margin-Kollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bezeichnet. Der Margin-Kollaps ist nur in der **vertikalen Richtung** relevant.

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

Für viele der Elemente auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Bei komplexeren Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Tools ändern, die Ihnen in CSS zur Verfügung stehen. Ein gut strukturiertes HTML-Dokument zu erstellen, ist sehr wichtig, denn so können Sie mit der Standard-Anordnung arbeiten, anstatt dagegen zu kämpfen.

## Normalen Fluss überschreiben

Die Methoden, die den normalen Fluss überschreiben und ändern können, wie Elemente in CSS angeordnet werden (die wir in diesem Modul ausführlich behandeln werden), sind:

- Die {{cssxref("display")}}-Eigenschaft
  - : Standardwerte wie `block`, `inline` oder `inline-block` können Elemente im normalen Fluss beeinflussen, z. B. indem ein Block-Element wie ein Inline-Element verhält (wie in der Lektion zum [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#block_and_inline_boxes) besprochen).
- Floats
  - : Wenn ein {{cssxref("float")}}-Wert wie `left` angewendet wird, können Block-Elemente sich an einer Seite eines anderen Elements anordnen, ähnlich wie Bilder in Magazinlayouts von Text umflossen werden.
- Positionierung
  - : Die {{cssxref("position")}}-Eigenschaft ermöglicht es, die Platzierung von Boxen in anderen Boxen präzise zu steuern. `static` ist die Standardpositionierung im normalen Fluss, aber durch andere Werte, wie `position: fixed`, können Elemente anders platziert werden, beispielsweise am oberen Rand des Browserfensters.
- Spezifische Layout-Systeme, die über `display` aktiviert werden
  - : Es gibt auch vollständige Layout-Methoden, die über spezifische `display`-Werte aktiviert werden. Die wichtigsten, die Sie kennen sollten, sind [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), die beide beeinflussen, wie Kinder-Elemente innerhalb ihrer Eltern angeordnet werden.
- Responsive Design
  - : Responsive Design bezieht sich auf die Erstellung von Layouts, die sich an verschiedene Geräte anpassen, auf denen die Webseite angezeigt wird (z. B. Desktops und Mobiltelefone). Responsive Design bietet keine spezifischen Layout-Tools, sein bedeutendstes Element ist jedoch die {{cssxref("@media")}}-Regel, die es ermöglicht, je nach Geräteattributen wie Bildschirmbreite oder Auflösung unterschiedliche Layouts anzuwenden.

### Weitere Layout-Techniken

Es gibt andere Layout-Techniken, die weniger häufig verwendet werden und die wir in diesem Modul nicht behandeln werden:

- [Tabellen-Layout](/de/docs/Web/CSS/CSS_table)
  - : Features, die für das Styling von Teilen einer HTML-Tabelle entwickelt wurden, können bei Nicht-Tabellen-Elementen mit `display: table` und zugehörigen Eigenschaften verwendet werden.
- [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
  - : Durch die Eigenschaften des Mehrspalten-Layouts kann der Inhalt eines Blocks in Spalten angeordnet werden, ähnlich wie Sie es in einer Zeitung sehen würden.

## Zusammenfassung

Dieser Artikel bietet eine kurze Zusammenfassung aller Layout-Technologien, die Sie an diesem Punkt Ihres Lernprozesses kennen sollten! Lesen Sie weiter, um mehr Informationen zu jeder einzelnen Technologie zu erhalten. Als Nächstes werden wir uns mit Floats befassen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout")}}
