---
title: Mozilla-Startseite
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken. Sie sollen einige Bilder und Videos auf einer originellen Startseite über Mozilla hinzufügen!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Testen des Wissens über das Einbetten von Bildern und Videos in Webseiten,
        Frames, und HTML-Techniken für responsive Bilder.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle verfügbaren Bilder im [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub abrufen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrem lokalen Laufwerk, in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (Rechtsklick auf das Bild, um eine Option zum Speichern zu erhalten).

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern Sie diese auf die gleiche Weise; Sie sollten sie zunächst in ein anderes Verzeichnis speichern, da Sie einige davon mit einem Grafikeditor bearbeiten müssen, bevor sie verwendet werden können.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine Menge CSS, um die Seite zu gestalten. Sie müssen das CSS nicht ändern, nur das HTML innerhalb des {{htmlelement("body")}} Elements — solange Sie das korrekte Markup einfügen, wird das Styling korrekt aussehen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektübersicht

In dieser Bewertung präsentieren wir Ihnen eine fast fertige Mozilla-Startseite, die etwas Nettes und Interessantes darüber aussagen soll, wofür Mozilla steht, und einige Links zu weiteren Ressourcen bieten soll. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite ansprechend und verständlicher zu machen. In den folgenden Unterabschnitten wird beschrieben, was Sie tun müssen:

### Bilder vorbereiten

Erstellen Sie mit Ihrem bevorzugten Bildeditor 400px breite und 120px breite Versionen von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Nennen Sie sie etwas Sinnvolles, z.B. `firefoxlogo400.png` und `firefoxlogo120.png`.

Zusammen mit `mdn.svg` werden diese Bilder Ihre Icons sein, um auf weitere Ressourcen im Bereich `further-info` zu verlinken. Sie verlinken auch auf das Firefox-Logo in der Seitenkopfzeile. Speichern Sie Kopien aller dieser Dateien im selben Verzeichnis wie `index.html`.

Erstellen Sie als Nächstes eine 1200px breite Landschaftsversion von `red-panda.jpg` und eine 600px breite Porträtversion, die den Panda in einer Nahaufnahme zeigt. Nennen Sie sie erneut sinnvoll, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie beider Dateien im selben Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu gestalten, während sie dennoch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu tun.

### Ein Logo zur Kopfzeile hinzufügen

Fügen Sie innerhalb des {{htmlelement("header")}} Elements ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos in der Kopfzeile einbettet.

### Ein Video zum Hauptartikelinhalt hinzufügen

Direkt innerhalb des {{htmlelement("article")}} Elements (direkt unterhalb des öffnenden Tags) betten Sie das YouTube-Video unter <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools zur Erzeugung des Codes verwenden. Das Video sollte 400px breit sein.

### Responsive Bilder zu den Links im Bereich "Weiterführende Informationen" hinzufügen

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente — jedes verlinkt auf eine interessante, Mozilla-bezogene Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}} Element in jedem von ihnen einfügen, das über geeignete [`src`](/de/docs/Web/HTML/Element/img#src), [`alt`](/de/docs/Web/HTML/Element/img#alt), [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute verfügt.

In jedem Fall (außer einem — welches ist von Natur aus responsiv?) möchten wir, dass der Browser die 120px breite Version liefert, wenn die Viewport-Breite 500px oder weniger beträgt, oder die 400px breite Version ansonsten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links kombinieren!

> [!NOTE]
> Um die `srcset`/`sizes` Beispiele richtig zu testen, müssen Sie Ihre Seite auf einen Server hochladen (die Verwendung von [GitHub Pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ist eine einfache und kostenlose Lösung), damit Sie von dort aus testen können, ob sie ordnungsgemäß funktionieren, indem Sie Browser-Entwicklertools wie den Firefox [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) verwenden.

### Ein kunstvoll gestalteter roter Panda

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("picture")}} Element einfügen, das das kleine Porträt des Panda-Bildes liefert, wenn die Viewport-Breite 600px oder weniger beträgt, und das große Landschaftsbild ansonsten.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu erkennen.
- Sie müssen kein CSS kennen, um diese Bewertung zu machen; Sie brauchen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich der CSS-Styling) erledigt bereits den Großteil der Arbeit für Sie, sodass Sie sich einfach auf die Medieneinbettung konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Startseite nach korrekter Markierung auf einem breiten und schmalen Bildschirm aussehen sollte.

![Ein breites Bild unserer Beispiel-Startseite](wide-shot.png)

![Ein schmales Bild unserer Beispiel-Startseite](narrow-shot.png)

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
