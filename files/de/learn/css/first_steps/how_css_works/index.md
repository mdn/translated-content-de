---
title: Wie CSS funktioniert
slug: Learn/CSS/First_steps/How_CSS_works
l10n:
  sourceCommit: 4b543d29de01d9a60a24c83fed35fded32ec53ee
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}

Wir haben die Grundlagen von CSS kennengelernt, wofür es gedacht ist und wie man einfache Stylesheets schreibt. In dieser Lektion werfen wir einen Blick darauf, wie ein Browser CSS und HTML nimmt und daraus eine Webseite erstellt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen verstehen, wie CSS und HTML vom Browser geparst werden und was passiert, wenn ein Browser auf CSS trifft, das er nicht versteht.
      </td>
    </tr>
  </tbody>
</table>

## Wie funktioniert CSS eigentlich?

Wenn ein Browser ein Dokument anzeigt, muss er den Inhalt des Dokuments mit seinen Stilinformationen kombinieren. Er verarbeitet das Dokument in mehreren Schritten, die wir unten aufgeführt haben. Beachten Sie, dass dies eine sehr vereinfachte Version dessen ist, was passiert, wenn ein Browser eine Webseite lädt, und dass unterschiedliche Browser den Prozess auf unterschiedliche Weise handhaben. Dennoch ist dies ungefähr das, was passiert.

1. Der Browser lädt das HTML (z. B. empfängt er es aus dem Netzwerk).
2. Er wandelt das [HTML](/de/docs/Glossary/HTML) in ein [DOM](/de/docs/Glossary/DOM) (_Document Object Model_) um. Das DOM repräsentiert das Dokument im Speicher des Computers. Das DOM wird im nächsten Abschnitt etwas genauer erklärt.
3. Der Browser ruft dann die meisten Ressourcen ab, auf die durch das HTML-Dokument verwiesen wird, wie eingebettete Bilder, Videos und sogar verlinktes CSS! JavaScript wird etwas später im Prozess behandelt, und wir werden hier nicht darüber sprechen, um die Dinge einfacher zu halten.
4. Der Browser parst das abgerufene CSS und sortiert die verschiedenen Regeln nach ihren Selektortypen in verschiedene "Eimer", z. B. Element, Klasse, ID und so weiter. Basierend auf den gefundenen Selektoren erarbeitet er, welche Regeln auf welche Knoten im DOM angewendet werden sollen, und fügt ihnen erforderliche Stile hinzu (dieser Zwischenschritt wird als Rendertree bezeichnet).
5. Der Rendertree wird in der Struktur ausgelegt, in der er nach den angewendeten Regeln erscheinen soll.
6. Die visuelle Anzeige der Seite wird auf dem Bildschirm gezeigt (dieser Schritt wird als Malen bezeichnet).

Das folgende Diagramm bietet auch eine einfache Ansicht des Prozesses.

![Übersicht des Rendering-Prozesses](rendering.svg)

## Über das DOM

Ein DOM hat eine baumartige Struktur. Jedes Element, Attribut und Textstück in der Markup-Sprache wird zu einem [DOM-Knoten](/de/docs/Glossary/Node/DOM) in der Baumstruktur. Die Knoten werden durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister.

Das Verständnis des DOM hilft Ihnen, Ihr CSS zu entwerfen, zu debuggen und zu pflegen, da das DOM der Ort ist, an dem Ihr CSS auf den Inhalt des Dokuments trifft. Wenn Sie beginnen, mit den DevTools des Browsers zu arbeiten, werden Sie im DOM navigieren, während Sie Elemente auswählen, um zu sehen, welche Regeln gelten.

## Eine reale DOM-Darstellung

Statt einer langen, langweiligen Erklärung, schauen wir uns ein Beispiel an, um zu sehen, wie ein reales HTML-Snippet in ein DOM umgewandelt wird.

Nehmen Sie den folgenden HTML-Code:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Elternteile, mit Textknoten als ihren Kindern:

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
    └─ "Sheets"
```

So interpretiert ein Browser das vorherige HTML-Snippet — er rendert den obigen DOM-Baum und gibt ihn dann im Browser folgendermaßen aus:

{{EmbedLiveSample('A_real_DOM_representation', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

## Anwendung von CSS auf das DOM

Angenommen, wir fügen unserem Dokument etwas CSS hinzu, um es zu gestalten. Erneut lautet das HTML wie folgt:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Angenommen, wir wenden das folgende CSS darauf an:

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Der Browser parst das HTML und erstellt daraus ein DOM. Als nächstes parst er das CSS. Da die einzige verfügbare Regel im CSS einen `span`-Selektor hat, sortiert der Browser das CSS sehr schnell! Er wendet diese Regel auf jedes der drei `<span>`-Elemente an und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Das aktualisierte Ergebnis ist wie folgt:

{{EmbedLiveSample('Applying_CSS_to_the_DOM', '100%', 90)}}

In unserem Artikel [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) im nächsten Modul werden wir mit den DevTools des Browsers CSS-Probleme debuggen und mehr darüber erfahren, wie der Browser CSS interpretiert.

## Was passiert, wenn ein Browser auf CSS trifft, das er nicht versteht?

Der Abschnitt ["Informationen zur Browser-Kompatibilität" im Artikel "Was ist CSS"](/de/docs/Learn/CSS/First_steps/What_is_CSS#browser_support_information) erwähnte, dass Browser neue CSS-Funktionen nicht unbedingt gleichzeitig implementieren. Außerdem verwenden viele Menschen nicht die neueste Version eines Browsers. Da CSS ständig weiterentwickelt wird und somit der Erkennung durch Browser voraus ist, fragen Sie sich vielleicht, was passiert, wenn ein Browser auf einen CSS-Selektor oder eine CSS-Deklaration trifft, die er nicht erkennt.

Die Antwort ist, dass er nichts tut und einfach mit dem nächsten CSS-Teil weitermacht!

Wenn ein Browser Ihre Regeln parst und auf eine Eigenschaft oder einen Wert trifft, den er nicht versteht, ignoriert er ihn und geht zur nächsten Deklaration über. Das geschieht auch, wenn Sie einen Fehler gemacht haben und eine Eigenschaft oder einen Wert falsch schreiben, oder wenn die Eigenschaft oder der Wert einfach zu neu ist und der Browser sie noch nicht unterstützt.

Ähnlich verhält es sich, wenn ein Browser auf einen Selektor trifft, den er nicht versteht, ignoriert er die gesamte Regel und geht zur nächsten über.

Im folgenden Beispiel habe ich die britische Rechtschreibung für color verwendet, die diese Eigenschaft ungültig macht, da sie nicht erkannt wird. Daher ist mein Absatz nicht blau gefärbt. Alle anderen CSS wurden jedoch angewendet; nur die ungültige Zeile wird ignoriert.

```html
<p>I want this text to be large, bold and blue.</p>
```

```css
p {
  font-weight: bold;
  colour: blue; /* incorrect spelling of the color property */
  font-size: 200%;
}
```

{{EmbedLiveSample('What_happens_if_a_browser_encounters_CSS_it_doesnt_understand', '100%', 200)}}

Dieses Verhalten ist sehr nützlich. Es bedeutet, dass Sie neues CSS als Verbesserung verwenden können, in dem Wissen, dass kein Fehler auftritt, wenn es nicht verstanden wird — der Browser erhält entweder die neue Funktion oder nicht. Dies ermöglicht grundlegendes Fallback-Styling.

Dies funktioniert besonders gut, wenn Sie einen Wert verwenden möchten, der recht neu ist und nicht überall unterstützt wird. Zum Beispiel unterstützen einige ältere Browser `calc()` als Wert nicht. Ich könnte eine Fallback-Breite für ein Feld in Pixeln angeben und dann eine Breite mit einem `calc()`-Wert von `100% - 50px` angeben. Alte Browser verwenden die Pixelversion und ignorieren die Zeile über `calc()`, da sie sie nicht verstehen. Neue Browser interpretieren die Zeile mit Pixeln, überschreiben sie jedoch mit der Zeile, die `calc()` verwendet, da diese Zeile später in der Kaskade erscheint.

```css
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

Wir werden in späteren Lektionen noch viele weitere Möglichkeiten betrachten, um verschiedene Browser zu unterstützen.

## Zusammenfassung

Sie haben dieses Modul fast abgeschlossen – wir haben nur noch eine Aufgabe zu erledigen. Im [Styling einer Biographieseite-Assessment](/de/docs/Learn/CSS/First_steps/Styling_a_biography_page) werden Sie Ihr neues Wissen anwenden, um ein Beispiel neu zu gestalten und dabei einige CSS auszuprobieren.

{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}
