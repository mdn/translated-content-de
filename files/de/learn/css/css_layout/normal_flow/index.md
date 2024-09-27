---
title: Normalfluss
slug: Learn/CSS/CSS_layout/Normal_Flow
l10n:
  sourceCommit: c841fb26641736ead1324b193f51aef5625d97fa
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Dieser Artikel erklärt den Normalfluss, also die Art und Weise, wie sich Elemente einer Webseite anordnen, wenn deren Layout nicht verändert wurde.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu erklären, wie Browser Webseiten standardmäßig anordnen, bevor wir
        beginnen, Änderungen vorzunehmen.
      </td>
    </tr>
  </tbody>
</table>

Wie im letzten Teil zur Einführung in das Layout detailliert beschrieben, werden Elemente auf einer Webseite im Normalfluss angeordnet, wenn Sie kein CSS angewendet haben, um ihr Verhalten zu ändern. Und wie wir angefangen haben zu entdecken, können Sie das Verhalten von Elementen ändern, indem Sie entweder ihre Position im Normalfluss anpassen oder sie vollständig daraus entfernen. Mit einem soliden, gut strukturierten Dokument zu beginnen, das im Normalfluss lesbar ist, ist der beste Weg, um jede Webseite zu starten. Dies stellt sicher, dass Ihr Inhalt lesbar ist, selbst wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Darüber hinaus, da der Normalfluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie, indem Sie auf diese Weise beginnen, _mit_ dem Dokument, anstatt gegen es zu kämpfen, während Sie Änderungen am Layout vornehmen.

Bevor Sie sich eingehender mit verschiedenen Layoutmethoden befassen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen in Bezug auf den normalen Dokumentfluss gelernt haben, noch einmal zu betrachten.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt damit, dass die Boxen der einzelnen Elemente auf eine Weise angeordnet werden, dass eventuell vorhandenes Padding, Ränder oder Abstände zu ihrem Inhalt hinzugefügt werden. Das nennen wir das **Box-Modell**.

Standardmäßig füllt der Inhalt eines [Block-Elementes](/de/docs/Glossary/Block-level_content) den verfügbaren Inline-Raum des übergeordneten Elements, das es enthält, und wächst entlang der Block-Dimension, um seinen Inhalt aufzunehmen. Die Größe von [Inline-Elementen](/de/docs/Glossary/Inline-level_content) entspricht nur der Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} für einige Elemente festlegen, die einen Standardwert für die {{cssxref("display")}}-Eigenschaft von `inline` haben, wie {{HTMLElement("img")}}, aber der `display`-Wert bleibt trotzdem `inline`.

Wenn Sie die `display`-Eigenschaft eines Inline-Elements auf diese Weise steuern möchten, verwenden Sie CSS, um es so einzustellen, dass es sich wie ein Block-Element verhält (z. B. mit `display: block;` oder `display: inline-block;`, was Eigenschaften von beidem mischt).

Das erklärt, wie Elemente individuell strukturiert sind, aber wie sieht es mit der Struktur aus, wenn sie miteinander interagieren? Der normale Layoutfluss (im Layout-Einführungsartikel erwähnt) ist das System, durch das Elemente innerhalb des Ansichtsfensters des Browsers platziert werden. Standardmäßig werden Block-Elemente in der _Block-Flussrichtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unter dem letzten, wobei jedes durch den festgelegten Abstand getrennt wird. Im Englischen zum Beispiel (oder in jedem anderen horizontalen, von oben nach unten Schreibmodus) werden Block-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen sitzen sie alle in derselben Zeile zusammen mit angrenzendem (oder umgebrochenem) Textinhalt, solange Platz innerhalb der Breite des übergeordneten Blockelements vorhanden ist. Wenn kein Platz mehr ist, wird der überlaufende Inhalt auf eine neue Zeile verschoben.

Wenn zwei vertikal benachbarte Elemente beide einen Abstand aufweisen und sich ihre Abstände berühren, bleibt der größere der beiden Abstände bestehen und der kleinere verschwindet. Dies ist als [**zusammenfallende Ränder**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) bekannt.
Zusammenfallende Ränder sind nur in der **vertikalen Richtung** relevant.

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

In dieser Lektion haben Sie die Grundlagen des Normalflusses gelernt — das Standardlayout für CSS-Elemente. Indem Sie verstehen, wie Inline-Elemente, Block-Elemente und Abstände standardmäßig funktionieren, wird es einfacher, ihr Verhalten in Zukunft anzupassen.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, indem wir CSS-Elemente mit [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) ändern.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
