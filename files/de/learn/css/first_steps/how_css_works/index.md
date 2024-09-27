---
title: Wie CSS funktioniert
slug: Learn/CSS/First_steps/How_CSS_works
l10n:
  sourceCommit: 4b543d29de01d9a60a24c83fed35fded32ec53ee
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}

Wir haben die Grundlagen von CSS gelernt, wofür es verwendet wird und wie man einfache Stylesheets schreibt. In dieser Lektion werden wir uns ansehen, wie ein Browser CSS und HTML nimmt und daraus eine Webseite erstellt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundkenntnisse im Umgang mit
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Dateien</a> und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Parse-Vorgangs von CSS und HTML durch den Browser zu verstehen und was passiert, wenn ein Browser CSS begegnet, das er nicht versteht.
      </td>
    </tr>
  </tbody>
</table>

## Wie funktioniert CSS eigentlich?

Wenn ein Browser ein Dokument anzeigt, muss er den Inhalt des Dokuments mit seinen Stilinformationen kombinieren. Es verarbeitet das Dokument in mehreren Phasen, die wir unten aufgelistet haben. Beachten Sie, dass dies eine sehr vereinfachte Version dessen ist, was passiert, wenn ein Browser eine Webseite lädt, und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben. Aber ungefähr so läuft es ab.

1. Der Browser lädt das HTML (z.B. empfängt es aus dem Netzwerk).
2. Er konvertiert das [HTML](/de/docs/Glossary/HTML) in ein [DOM](/de/docs/Glossary/DOM) (_Document Object Model_). Das DOM stellt das Dokument im Speicher des Computers dar. Das DOM wird im nächsten Abschnitt etwas ausführlicher erklärt.
3. Der Browser holt dann die meisten Ressourcen, die durch das HTML-Dokument verlinkt sind, wie eingebettete Bilder, Videos und sogar verlinktes CSS! JavaScript wird später im Prozess behandelt, und wir sprechen hier nicht darüber, um die Dinge einfacher zu halten.
4. Der Browser parst das abgerufene CSS und sortiert die verschiedenen Regeln nach ihren Selektortypen in verschiedene „Buckets“, z. B. Element, Klasse, ID und so weiter. Basierend auf den gefundenen Selektoren arbeitet er heraus, welche Regeln auf welche Knoten im DOM angewendet werden sollten, und fügt den Stil bei Bedarf hinzu (dieser Zwischenschritt wird als Render-Baum bezeichnet).
5. Der Render-Baum wird in der Struktur angelegt, die er nach der Anwendung der Regeln erscheinen soll.
6. Die visuelle Darstellung der Seite wird auf dem Bildschirm angezeigt (dieser Schritt wird als Painting bezeichnet).

Das folgende Diagramm bietet ebenfalls eine einfache Übersicht des Prozesses.

![Überblick über den Rendering-Prozess](rendering.svg)

## Über das DOM

Ein DOM hat eine baumartige Struktur. Jedes Element, Attribut und Textstück in der Auszeichnungssprache wird zu einem [DOM-Knoten](/de/docs/Glossary/Node/DOM) in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister.

Das Verständnis des DOM hilft Ihnen bei der Gestaltung, Fehlerbehebung und Wartung Ihres CSS, da das DOM den Ort darstellt, an dem Ihr CSS auf den Dokumenteninhalt trifft. Wenn Sie mit den Entwicklerwerkzeugen des Browsers zu arbeiten beginnen, werden Sie das DOM durchsuchen, während Sie Elemente auswählen, um zu sehen, welche Regeln gelten.

## Eine echte DOM-Darstellung

Anstatt einer langen, langweiligen Erklärung wollen wir uns ein Beispiel ansehen, um zu sehen, wie ein echtes HTML-Snippet in ein DOM umgewandelt wird.

Nehmen Sie den folgenden HTML-Code:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Im DOM ist der Knoten, der unserem `<p>` Element entspricht, ein Elternknoten. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>` Elementen entsprechen. Die `SPAN` Knoten sind ebenfalls Eltern, die Textknoten als Kinder haben:

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

So interpretiert ein Browser das vorherige HTML-Snippet — er rendert den oben gezeigten DOM-Baum und gibt ihn im Browser wie folgt aus:

{{EmbedLiveSample('A_real_DOM_representation', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

## Anwenden von CSS auf das DOM

Angenommen, wir fügen unserem Dokument etwas CSS hinzu, um es zu gestalten. Der HTML-Code sieht wie folgt aus:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Angenommen, wir wenden folgendes CSS darauf an:

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Der Browser parst das HTML und erstellt ein DOM daraus. Dann parst er das CSS. Da die einzige Regel im CSS einen `span`-Selektor hat, sortiert der Browser das CSS sehr schnell! Er wendet diese Regel auf jeden der drei `<span>`s an und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe ist wie folgt:

{{EmbedLiveSample('Applying_CSS_to_the_DOM', '100%', 90)}}

In unserem [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) Artikel im nächsten Modul werden wir die Entwicklerwerkzeuge des Browsers verwenden, um CSS-Probleme zu beheben und mehr darüber zu erfahren, wie der Browser CSS interpretiert.

## Was passiert, wenn ein Browser auf CSS trifft, das er nicht versteht?

Der Abschnitt ["Browserunterstützungsinformationen" im Artikel "Was ist CSS"](/de/docs/Learn/CSS/First_steps/What_is_CSS#browser_support_information) erwähnt, dass Browser neue CSS-Funktionen nicht unbedingt zur gleichen Zeit implementieren. Außerdem verwenden viele Menschen nicht die neueste Version eines Browsers. Da CSS ständig weiterentwickelt wird und somit dem voraus ist, was Browser erkennen können, fragen Sie sich vielleicht, was passiert, wenn ein Browser auf einen CSS-Selektor oder eine Deklaration trifft, die er nicht erkennt.

Die Antwort ist, dass er nichts tut und einfach mit dem nächsten Teil von CSS fortfährt!

Wenn ein Browser Ihre Regeln parst und auf eine Eigenschaft oder einen Wert stößt, den er nicht versteht, ignoriert er ihn und setzt mit der nächsten Deklaration fort. Dies geschieht, wenn Sie einen Fehler gemacht haben und eine Eigenschaft oder einen Wert falsch geschrieben haben oder wenn die Eigenschaft oder der Wert einfach zu neu ist und der Browser sie noch nicht unterstützt.

Ähnlich verhält es sich, wenn ein Browser auf einen Selektor trifft, den er nicht versteht: er ignoriert einfach die gesamte Regel und fährt mit der nächsten fort.

Im folgenden Beispiel habe ich die britische Schreibweise für Color verwendet, was diese Eigenschaft ungültig macht, da sie nicht erkannt wird. Daher wurde mein Absatz nicht blau gefärbt. Alle anderen CSS wurden jedoch angewendet; nur die ungültige Zeile wird ignoriert.

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

Dieses Verhalten ist sehr nützlich. Es bedeutet, dass Sie neues CSS als Verbesserung verwenden können, da kein Fehler auftritt, wenn es nicht verstanden wird — der Browser wird entweder das neue Feature erhalten oder nicht. Dies ermöglicht grundlegendes Fallback-Styling.

Dies funktioniert besonders gut, wenn Sie einen Wert verwenden möchten, der relativ neu ist und nicht überall unterstützt wird. Beispielsweise unterstützen einige ältere Browser `calc()` als Wert nicht. Ich könnte eine Fallback-Breite für ein Kästchen in Pixel angeben und dann eine Breite mit einem `calc()`-Wert von `100% - 50px` festlegen. Alte Browser verwenden die Pixel-Version und ignorieren die Zeile über `calc()`, da sie diese nicht verstehen. Neue Browser interpretieren die Zeile mit Pixeln, überschreiben sie aber dann mit der Linie, die `calc()` verwendet, da diese Zeile später in der Kaskade erscheint.

```css
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

Wir werden in späteren Lektionen viele weitere Möglichkeiten zum Unterstützen verschiedener Browser besprechen.

## Zusammenfassung

Sie haben dieses Modul fast abgeschlossen — wir haben nur noch eine letzte Sache zu tun. In der [Stilprüfung einer Biographieseite](/de/docs/Learn/CSS/First_steps/Styling_a_biography_page) werden Sie Ihr neues Wissen nutzen, um ein Beispiel neu zu gestalten und dabei einige CSS zu testen.

{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}
