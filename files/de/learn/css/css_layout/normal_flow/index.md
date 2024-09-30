---
title: Normaler Fluss
slug: Learn/CSS/CSS_layout/Normal_Flow
l10n:
  sourceCommit: c841fb26641736ead1324b193f51aef5625d97fa
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Dieser Artikel erklärt den normalen Fluss oder die Art und Weise, wie sich Webseiten-Elemente anordnen, wenn Sie deren Layout nicht geändert haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu erklären, wie Browser Webseiten standardmäßig layouten, bevor wir beginnen,
        Änderungen vorzunehmen.
      </td>
    </tr>
  </tbody>
</table>

Wie im letzten einführenden Artikel zum Layout beschrieben, ordnen sich Elemente auf einer Webseite im normalen Fluss an, falls Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Und wie wir begonnen haben herauszufinden, können Sie das Verhalten von Elementen ändern, indem Sie entweder ihre Position im normalen Fluss anpassen oder sie ganz daraus entfernen. Ein solides, gut strukturiertes Dokument, das im normalen Fluss lesbar ist, ist der beste Ausgangspunkt für jede Webseite. Dies stellt sicher, dass Ihr Inhalt lesbar ist, selbst wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erzeugen, arbeiten Sie auf diese Weise _mit_ dem Dokument zusammen, anstatt _gegen_ es zu kämpfen, während Sie Änderungen am Layout vornehmen.

Bevor Sie tiefer in verschiedene Layout-Methoden eintauchen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen im Hinblick auf den normalen Dokumentenfluss studiert haben, erneut zu betrachten.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen der einzelnen Elemente so angeordnet werden, dass jeder Padding, Rand oder jede Margin, die sie möglicherweise haben, zu ihrem Inhalt hinzugefügt wird. Dies nennen wir das **Box-Modell**.

Standardmäßig füllt der Inhalt eines [Block-Level-Elements](/de/docs/Glossary/Block-level_content) den verfügbaren Inline-Raum des übergeordneten Elements, das es enthält, aus und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von [Inline-Level-Elementen](/de/docs/Glossary/Inline-level_content) entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} für einige Elemente festlegen, die einen Standard-{{cssxref("display")}}-Eigenschaftswert von `inline` haben, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt weiterhin `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Level-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es so einzustellen, dass es sich wie ein Block-Level-Element verhält (z. B. mit `display: block;` oder `display: inline-block;`, das Eigenschaften von beiden mischt).

Das erklärt, wie Elemente einzeln strukturiert sind, aber wie sieht es mit der Art und Weise aus, wie sie miteinander interagieren? Der normale Layout-Fluss (erwähnt im einführenden Artikel zum Layout) ist das System, mit dem Elemente im Ansichtsfenster des Browsers platziert werden. Standardmäßig werden Block-Level-Elemente in der _Blockflussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des Elternteils basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem letzten, wobei jedes durch den spezifizierten Rand getrennt ist. Auf Englisch zum Beispiel (oder in jedem anderen horizontalen, von oben nach unten geschriebenen Modus) werden Block-Level-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen sitzen sie alle in derselben Zeile zusammen mit jedem angrenzenden (oder umgebrochenen) Textinhalt, solange es dafür im Bereich des übergeordneten Block-Levels Platz gibt. Wenn kein Platz vorhanden ist, wandert der überfließende Inhalt in eine neue Zeile.

Wenn zwei vertikal benachbarte Elemente beide eine gesetzte Margin haben und ihre Margins sich berühren, bleibt die größere der beiden Margin und die kleinere verschwindet. Dies ist als [**Margin-Kollaps**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bekannt. Der Kollaps von Margins ist nur in der **vertikalen Richtung** relevant.

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

## Zusammenfassung

In dieser Lektion haben Sie die Grundlagen des normalen Flusses gelernt — das Standardlayout für CSS-Elemente. Indem Sie verstehen, wie Inline-Elemente, Block-Elemente und Margins standardmäßig funktionieren, wird es einfacher werden, ihr Verhalten in der Zukunft anzupassen.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, indem wir Änderungen an CSS-Elementen mit [flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) vornehmen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
