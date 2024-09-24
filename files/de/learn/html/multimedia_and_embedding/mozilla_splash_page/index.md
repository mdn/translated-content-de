---
title: Mozilla-Splash-Seite
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken, indem wir Sie dazu bringen, einige Bilder und Videos zu einer funky Splash-Seite hinzuzufügen, die sich ganz um Mozilla dreht!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diesen Test versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Test des Wissens über das Einbetten von Bildern und Videos in Webseiten, Frames und HTML responsive Bildtechniken.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um diese Bewertung zu beginnen, müssen Sie das HTML und alle Bilder im [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start)-Verzeichnis auf GitHub abrufen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei mit dem Namen `index.html` auf Ihrem lokalen Laufwerk in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (Rechtsklick auf das Bild, um eine Option zum Speichern zu erhalten).

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals)-Verzeichnis zu und speichern Sie diese auf dieselbe Weise; Sie möchten sie vorerst in einem anderen Verzeichnis speichern, da Sie einige von ihnen mit einem Grafikeditor bearbeiten müssen, bevor sie verwendet werden können.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine Menge CSS, um die Seite zu gestalten. Sie müssen das CSS nicht anfassen, sondern nur das HTML innerhalb des {{htmlelement("body")}}-Elements — solange Sie das korrekte Markup einfügen, sorgt das Styling dafür, dass es richtig aussieht.
>
> Wenn Sie stecken bleiben, können Sie sich an einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

In dieser Bewertung präsentieren wir Ihnen eine größtenteils fertige Mozilla-Splash-Seite, die etwas Nettes und Interessantes darüber sagen soll, wofür Mozilla steht, und einige Links zu weiteren Ressourcen bieten soll. Leider wurden bisher keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite ansprechend zu gestalten und verständlicher zu machen. Die folgenden Unterabschnitte erläutern, was Sie tun müssen:

### Bilder vorbereiten

Verwenden Sie Ihren bevorzugten Bildeditor, um Versionen mit 400px Breite und 120px Breite von folgenden Bildern zu erstellen:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Geben Sie ihnen einen sinnvollen Namen, z.B. `firefoxlogo400.png` und `firefoxlogo120.png`.

Zusammen mit `mdn.svg` werden diese Bilder Ihre Symbole sein, um im Bereich `further-info` zu weiteren Ressourcen zu verlinken. Sie werden auch zum Firefox-Logo im Seitenkopf verlinken. Speichern Sie Kopien aller dieser Dateien im selben Verzeichnis wie `index.html`.

Erstellen Sie als Nächstes eine 1200px breite Landschaftsversion von `red-panda.jpg` und eine 600px breite Porträtversion, die den Panda in einer Nahaufnahme zeigt. Geben Sie ihnen wieder einen sinnvollen Namen, damit Sie sie leicht identifizieren können. Speichern Sie Kopien von beiden ebenfalls im gleichen Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie trotzdem gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu tun.

### Ein Logo zum Header hinzufügen

Fügen Sie innerhalb des {{htmlelement("header")}}-Elements ein {{htmlelement("img")}}-Element hinzu, das die kleine Version des Firefox-Logos im Header einbettet.

### Ein Video zum Hauptartikelinhalt hinzufügen

Fügen Sie direkt innerhalb des {{htmlelement("article")}}-Elements (direkt unter dem öffnenden Tag) das YouTube-Video von <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools verwenden, um den Code zu generieren. Das Video sollte 400px breit sein.

### Responsive Bilder zu den weiteren Informationen hinzufügen

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}}-Elemente — jedes mit einem Link zu einer interessanten Mozilla-bezogenen Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}}-Element in jedes einfügen, das geeignete [`src`](/de/docs/Web/HTML/Element/img#src), [`alt`](/de/docs/Web/HTML/Element/img#alt), [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute enthält.

In jedem Fall (außer einem — welches ist von Natur aus responsiv?) möchten wir, dass der Browser die 120px breite Version liefert, wenn die Viewport-Breite 500px oder weniger beträgt, oder die 400px breite Version andernfalls.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links verknüpfen!

> [!NOTE]
> Um die `srcset`/`sizes`-Beispiele ordnungsgemäß zu testen, müssen Sie Ihre Seite auf einen Server hochladen (die Verwendung von [GitHub pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ist eine einfache und kostenlose Lösung), von dort aus können Sie testen, ob sie ordnungsgemäß funktionieren, indem Sie Entwicklerwerkzeuge des Browsers wie den Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) verwenden.

### Ein künstlerisch gelenkter roter Panda

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda`, möchten wir ein {{htmlelement("picture")}}-Element einfügen, das das kleine Porträt-Pandabild liefert, wenn der Viewport 600px oder weniger breit ist, und das große Landschaftsbild andernfalls.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu entdecken.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen; Sie benötigen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich des CSS-Stylings) erledigt den Großteil der Arbeit für Sie, sodass Sie sich nur auf das Medieneinbettung konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite aussehen sollte, nachdem sie korrekt ausgezeichnet wurde, auf einem breiten und einem schmalen Bildschirmdisplay.

![Eine weite Aufnahme unserer Beispiel-Splash-Seite](wide-shot.png)

![Eine schmale Aufnahme unserer Beispiel-Splash-Seite](narrow-shot.png)

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
