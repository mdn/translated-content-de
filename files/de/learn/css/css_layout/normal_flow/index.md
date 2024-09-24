---
title: Normaler Fluss
slug: Learn/CSS/CSS_layout/Normal_Flow
l10n:
  sourceCommit: c841fb26641736ead1324b193f51aef5625d97fa
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Dieser Artikel erklärt den normalen Fluss, also die Art und Weise, wie sich Webseiten-Elemente anordnen, wenn Sie deren Layout nicht geändert haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu erklären, wie Browser Webseiten standardmäßig layouten, bevor wir damit beginnen,
        Änderungen vorzunehmen.
      </td>
    </tr>
  </tbody>
</table>

Wie im letzten Abschnitt zur Einführung ins Layout ausführlich beschrieben, ordnen sich Elemente auf einer Webseite im normalen Fluss an, wenn Sie kein CSS angewendet haben, um deren Verhalten zu ändern. Und wie wir begonnen haben zu entdecken, können Sie das Verhalten von Elementen ändern, entweder indem Sie ihre Position im normalen Fluss anpassen oder indem Sie sie vollständig daraus entfernen. Mit einem soliden, gut strukturierten und im normalen Fluss lesbaren Dokument zu beginnen, ist der beste Weg, jede Webseite zu starten. Es stellt sicher, dass Ihr Inhalt auch dann lesbar ist, wenn der Benutzer einen sehr eingeschränkten Browser oder ein Gerät wie einen Screenreader verwendet, der den Inhalt der Seite vorliest. Darüber hinaus, da der normale Fluss darauf ausgelegt ist, ein lesbares Dokument zu erstellen, arbeiten Sie mit dem Dokument, anstatt gegen es, wenn Sie das Layout ändern.

Bevor wir tiefer in verschiedene Layout-Methoden eintauchen, lohnt es sich, einige der Dinge, die Sie in früheren Modulen mit Bezug auf den normalen Dokumentenfluss studiert haben, noch einmal zu betrachten.

## Wie werden Elemente standardmäßig angeordnet?

Der Prozess beginnt, indem die Boxen einzelner Elemente so angeordnet werden, dass jeglicher padding, border oder margin, den sie zufällig haben, zu ihrem Inhalt hinzugefügt wird. Dies nennen wir das **Box-Modell**.

Standardmäßig füllt der Inhalt eines [Block-Elementes](/de/docs/Glossary/Block-level_content) den verfügbaren Inline-Space des übergeordneten Elements, das es enthält, und wächst entlang der Blockdimension, um seinen Inhalt aufzunehmen. Die Größe von [Inline-Elementen](/de/docs/Glossary/Inline-level_content) ist einfach die Größe ihres Inhalts. Sie können {{cssxref("width")}} oder {{cssxref("height")}} für einige Elemente festlegen, die standardmäßig den {{cssxref("display")}}-Wert `inline` haben, wie z.B. {{HTMLElement("img")}}, aber der `display`-Wert bleibt weiterhin `inline`.

Wenn Sie das `display`-Eigenschaftsverhalten eines Inline-Elementes auf diese Weise steuern möchten, verwenden Sie CSS, um es so einzustellen, dass es sich wie ein Block-Element verhält (z.B. mit `display: block;` oder `display: inline-block;`, was Eigenschaften beider Elemente mischt).

Das erklärt, wie Elemente individuell strukturiert werden, aber wie ist es mit der Art und Weise, wie sie strukturiert werden, wenn sie miteinander interagieren? Der normale Layoutfluss (erwähnt im Artikel zur Layout-Einführung) ist das System, durch das Elemente im Browser-Viewport platziert werden. Standardmäßig werden Block-Elemente in der _Blockfluss-Richtung_ angeordnet, die auf dem [Schreibmodus](/de/docs/Web/CSS/writing-mode) des übergeordneten Elements basiert (_initial_: horizontal-tb). Jedes Element erscheint in einer neuen Zeile unterhalb des vorhergehenden, wobei jedes durch den spezifizierten margin getrennt ist. Im Englischen zum Beispiel (oder einem anderen horizontalen von oben nach unten Schreibmodus) werden Block-Elemente vertikal angeordnet.

Inline-Elemente verhalten sich anders. Sie erscheinen nicht in neuen Zeilen; stattdessen sitzen sie alle in derselben Zeile zusammen mit jedem angrenzenden (oder umbrochenen) Textinhalt, solange es Platz dafür innerhalb der Breite des übergeordneten Block-Elementes gibt. Wenn kein Platz vorhanden ist, wird der überfließende Inhalt in eine neue Zeile verschoben.

Wenn zwei vertikal benachbarte Elemente beide einen margin aufweisen und sich ihre margins berühren, bleibt der größere der beiden margins bestehen und der kleinere verschwindet. Dies ist bekannt als [**margin collapsing**](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Zusammenfallen von margins ist nur in der **vertikalen Richtung** relevant.

Schauen wir uns ein einfaches Beispiel an, das all dies erklärt:

```html
<h1>Grundlegender Dokumentenfluss</h1>

<p>
  Ich bin ein grundlegendes Block-Element. Meine angrenzenden Block-Elemente
  sitzen in neuen Zeilen unter mir.
</p>

<p>
  Standardmäßig spannen wir uns über 100% der Breite unseres übergeordneten
  Elements und sind so hoch wie unser Kindinhalt. Unsere Gesamtbreite und Höhe
  ist unser Inhalt + padding + Rand-Breite/Höhe.
</p>

<p>
  Wir sind durch unsere margins getrennt. Aufgrund des Zusammenfallens von
  margins sind wir durch die Größe eines unserer margins getrennt, nicht durch beide.
</p>

<p>
  Inline-Elemente <span>wie dieses</span> und <span>dieses</span> sitzen in
  derselben Zeile zusammen mit angrenzenden Textknoten, wenn in derselben Zeile
  Platz ist. Überlaufende Inline-Elemente werden
  <span>wenn möglich in eine neue Zeile umgebrochen (wie dieses mit Text)</span>,
  oder gehen einfach in eine neue Zeile über, wenn nicht, so wie dieses Bild es
  tun wird:
  <img src="long.jpg" alt="Ausschnitt eines Stoffes" />
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

In dieser Lektion haben Sie die Grundlagen des normalen Flusses gelernt — das Standardlayout für CSS-Elemente. Indem Sie verstehen, wie Inline-Elemente, Block-Elemente und margins standardmäßig funktionieren, wird es in Zukunft einfacher sein, deren Verhalten zu ändern.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, indem wir mit [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) Änderungen an CSS-Elementen vornehmen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
