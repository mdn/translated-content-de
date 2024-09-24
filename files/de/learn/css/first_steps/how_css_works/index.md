---
title: Wie CSS funktioniert
slug: Learn/CSS/First_steps/How_CSS_works
l10n:
  sourceCommit: 4b543d29de01d9a60a24c83fed35fded32ec53ee
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}

Wir haben die Grundlagen von CSS kennengelernt, wofür es da ist und wie man einfache Stylesheets schreibt. In dieser Lektion werden wir uns ansehen, wie ein Browser CSS und HTML nimmt und daraus eine Webseite erstellt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundwissen im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der Grundlagen, wie CSS und HTML vom Browser geparst werden und was passiert, wenn ein Browser auf CSS trifft, das er nicht versteht.
      </td>
    </tr>
  </tbody>
</table>

## Wie funktioniert CSS eigentlich?

Wenn ein Browser ein Dokument anzeigt, muss er den Inhalt des Dokuments mit seinen Stilinformationen kombinieren. Er verarbeitet das Dokument in mehreren Phasen, die wir unten aufgelistet haben. Beachten Sie, dass dies eine stark vereinfachte Version dessen ist, was passiert, wenn ein Browser eine Webseite lädt, und dass verschiedene Browser den Prozess unterschiedlich handhaben. Aber das ist ungefähr das, was passiert.

1. Der Browser lädt das HTML (z.B. erhält es aus dem Netzwerk).
2. Er konvertiert das {{Glossary("HTML")}} in ein {{Glossary("DOM")}} (_Document Object Model_). Das DOM stellt das Dokument im Speicher des Computers dar. Das DOM wird im nächsten Abschnitt etwas detaillierter erklärt.
3. Der Browser ruft dann die meisten der im HTML-Dokument verlinkten Ressourcen ab, wie eingebettete Bilder, Videos und sogar verlinktes CSS! JavaScript wird etwas später im Prozess behandelt, und wir werden es hier nicht besprechen, um die Dinge einfacher zu halten.
4. Der Browser parst das abgerufene CSS und sortiert die verschiedenen Regeln nach ihren Selektortypen in verschiedene "Buckets", z.B. Element, Klasse, ID usw. Basierend auf den gefundenen Selektoren ermittelt er, welche Regeln auf welche Knoten im DOM angewendet werden sollen, und fügt ihnen die erforderlichen Stile hinzu (dieser Zwischenschritt wird als Renderbaum bezeichnet).
5. Der Renderbaum wird in der Struktur angeordnet, in der er nach Anwendung der Regeln erscheinen soll.
6. Die visuelle Darstellung der Seite wird auf dem Bildschirm angezeigt (dieser Schritt wird als Painting bezeichnet).

Das folgende Diagramm bietet ebenfalls eine einfache Ansicht des Prozesses.

![Überblick über den Rendering-Prozess](rendering.svg)

## Über das DOM

Ein DOM hat eine baumartige Struktur. Jedes Element, Attribut und Textstück in der Auszeichnungssprache wird zu einem {{Glossary("Node/DOM","DOM node")}} in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister.

Das Verstehen des DOM hilft Ihnen beim Entwerfen, Debuggen und Warten Ihres CSS, da das DOM der Ort ist, an dem Ihr CSS und der Inhalt des Dokuments zusammenkommen. Wenn Sie mit den DevTools des Browsers arbeiten, navigieren Sie im DOM, indem Sie Elemente auswählen, um zu sehen, welche Regeln gelten.

## Eine echte DOM-Darstellung

Anstelle einer langen, langweiligen Erklärung sehen wir uns ein Beispiel an, um zu sehen, wie ein realer HTML-Ausschnitt in ein DOM konvertiert wird.

Nehmen wir den folgenden HTML-Code:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind auch Eltern, mit Textknoten als ihren Kindern:

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

So interpretiert ein Browser den vorherigen HTML-Ausschnitt — er rendert den obigen DOM-Baum und gibt ihn dann im Browser so aus:

{{EmbedLiveSample('A_real_DOM_representation', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

## CSS auf das DOM anwenden

Angenommen, wir fügen unserem Dokument etwas CSS hinzu, um es zu gestalten. Der HTML-Code ist erneut wie folgt:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Nehmen wir an, wir wenden das folgende CSS darauf an:

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Der Browser parst das HTML und erstellt daraus ein DOM. Als nächstes parst er das CSS. Da die einzige verfügbare Regel im CSS einen `span`-Selektor hat, sortiert der Browser das CSS sehr schnell! Er wendet diese Regel auf jedes der drei `<span>`s an und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe sieht wie folgt aus:

{{EmbedLiveSample('Applying_CSS_to_the_DOM', '100%', 90)}}

In unserem [Debuggen von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)-Artikel im nächsten Modul werden wir die DevTools des Browsers verwenden, um CSS-Probleme zu debuggen, und mehr darüber erfahren, wie der Browser CSS interpretiert.

## Was passiert, wenn ein Browser auf CSS trifft, das er nicht versteht?

Der ["Browser-Support-Informationen"-Abschnitt im Artikel "Was ist CSS"](/de/docs/Learn/CSS/First_steps/What_is_CSS#browser_support_information) erwähnte bereits, dass Browser neue CSS-Features nicht unbedingt gleichzeitig implementieren. Außerdem verwenden viele Menschen nicht die neueste Version eines Browsers. Angesichts der Tatsache, dass CSS ständig weiterentwickelt wird und daher den Browsern voraus ist, stellt sich die Frage, was passiert, wenn ein Browser auf einen CSS-Selektor oder eine Deklaration trifft, die er nicht erkennt.

Die Antwort ist, dass er nichts tut und einfach zum nächsten CSS-Teil übergeht!

Wenn ein Browser Ihre Regeln parst und auf eine Eigenschaft oder einen Wert stößt, den er nicht versteht, ignoriert er diese und fährt mit der nächsten Erklärung fort. Dies wird er tun, wenn Sie einen Fehler gemacht und eine Eigenschaft oder einen Wert falsch geschrieben haben oder wenn die Eigenschaft oder der Wert einfach zu neu ist und der Browser sie noch nicht unterstützt.

Ebenso, wenn ein Browser einen Selektor trifft, den er nicht versteht, ignoriert er einfach die gesamte Regel und fährt mit der nächsten fort.

Im Beispiel unten habe ich die britische Schreibweise für Color verwendet, was diese Eigenschaft ungültig macht, da sie nicht erkannt wird. Daher wurde mein Absatz nicht blau gefärbt. Alle anderen CSS wurden jedoch angewendet; nur die ungültige Zeile wird ignoriert.

```html
<p>I want this text to be large, bold and blue.</p>
```

```css
p {
  font-weight: bold;
  colour: blue; /* falsche Schreibweise der color-Eigenschaft */
  font-size: 200%;
}
```

{{EmbedLiveSample('What_happens_if_a_browser_encounters_CSS_it_doesnt_understand', '100%', 200)}}

Dieses Verhalten ist sehr nützlich. Es bedeutet, dass Sie neues CSS als Verbesserung nutzen können, im Wissen, dass kein Fehler auftritt, wenn es nicht verstanden wird — der Browser erhält entweder das neue Feature oder nicht. Dies ermöglicht grundlegendes Fallback-Styling.

Dies funktioniert besonders gut, wenn Sie einen Wert verwenden möchten, der ziemlich neu ist und nicht überall unterstützt wird. Einige ältere Browser unterstützen beispielsweise `calc()` als Wert nicht. Ich könnte eine Fallback-Breite für ein Kästchen in Pixel angeben und dann eine Breite mit einem `calc()`-Wert von `100% - 50px` angeben. Alte Browser verwenden die Pixel-Version und ignorieren die Zeile über `calc()`, da sie sie nicht verstehen. Neue Browser interpretieren die Zeile mit Pixeln, überschreiben sie jedoch mit der Zeile, die `calc()` verwendet, da diese Zeile später in der Kaskade erscheint.

```css
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

Wir werden uns in späteren Lektionen viele weitere Möglichkeiten ansehen, um verschiedene Browser zu unterstützen.

## Zusammenfassung

Sie haben dieses Modul fast abgeschlossen — wir haben nur noch eine Sache zu tun. In der [Styling eine Biographie-Seite Bewertung](/de/docs/Learn/CSS/First_steps/Styling_a_biography_page) werden Sie Ihr neues Wissen nutzen, um ein Beispiel neu zu gestalten und dabei einige CSS auszuprobieren.

{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Styling_a_biography_page", "Learn/CSS/First_steps")}}
