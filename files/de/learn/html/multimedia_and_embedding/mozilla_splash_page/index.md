---
title: Mozilla Startseite
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

In dieser Bewertung prüfen wir Ihr Wissen über einige der in den Artikeln dieses Moduls besprochenen Techniken. Sie sollen einige Bilder und Videos zu einer modernen Startseite hinzufügen, die sich ganz um Mozilla dreht!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Test des Wissens über das Einbetten von Bildern und Videos in Webseiten, Frames und HTML-Techniken für responsive Bilder.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle Bilder aus dem [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub holen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrer lokalen Festplatte, in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (klicken Sie mit der rechten Maustaste auf das Bild, um eine Option zum Speichern zu erhalten.)

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern Sie sie auf die gleiche Weise; Sie sollten sie vorerst in einem anderen Verzeichnis speichern, da Sie einige von ihnen mit einem Grafikeditor bearbeiten müssen, bevor sie einsatzbereit sind.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält ziemlich viel CSS, um die Seite zu gestalten. Sie müssen das CSS nicht anfassen, sondern nur das HTML innerhalb des {{htmlelement("body")}} Elements — solange Sie die richtige Markierung einfügen, sorgt das Styling dafür, dass es korrekt aussieht.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

In dieser Bewertung präsentieren wir Ihnen eine fast fertige Mozilla-Startseite, die etwas Schönes und Interessantes über das, wofür Mozilla steht, aussagen soll und einige Links zu weiteren Ressourcen bietet. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihr Job! Sie müssen einige Medien hinzufügen, um die Seite ansprechend zu gestalten und verständlicher zu machen. Die folgenden Unterabschnitte erläutern, was Sie tun müssen:

### Bilder vorbereiten

Erstellen Sie mit Ihrem bevorzugten Bildbearbeitungsprogramm eine Version mit 400px Breite und eine mit 120px Breite von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Nennen Sie sie sinnvoll, z.B. `firefoxlogo400.png` und `firefoxlogo120.png`.

Zusammen mit `mdn.svg` werden diese Bilder Ihre Symbole sein, um zu weiteren Ressourcen im Bereich `further-info` zu verlinken. Sie werden auch das Firefox-Logo in der Kopfzeile der Seite verlinken. Speichern Sie Kopien von allen im selben Verzeichnis wie `index.html`.

Erstellen Sie dann eine 1200px breite Landschaftsversion von `red-panda.jpg` und eine 600px breite Porträtversion, die den Panda in einer Nahaufnahme zeigt. Nennen Sie sie wieder sinnvoll, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie von beiden im selben Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie dennoch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Service, um dies einfach zu tun.

### Ein Logo in die Kopfzeile hinzufügen

Fügen Sie innerhalb des {{htmlelement("header")}} Elements ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos in die Kopfzeile einbettet.

### Ein Video zum Hauptartikelinhalt hinzufügen

Betten Sie direkt innerhalb des {{htmlelement("article")}} Elements (direkt unter dem öffnenden Tag) das YouTube-Video von <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools nutzen, um den Code zu generieren. Das Video sollte 400px breit sein.

### Responsive Bilder zu den weiterführenden Links hinzufügen

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente — jedes verlinkt auf eine interessante Mozilla-bezogene Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}} Element in jedes einfügen, das geeignete [`src`](/de/docs/Web/HTML/Element/img#src), [`alt`](/de/docs/Web/HTML/Element/img#alt), [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute enthält.

In jedem Fall (außer einem — welcher ist inhärent responsive?) möchten wir, dass der Browser die 120px breite Version liefert, wenn die Viewport-Breite 500px oder weniger beträgt, oder die 400px breite Version andernfalls.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links kombinieren!

> [!NOTE]
> Um die `srcset`/`sizes` Beispiele ordnungsgemäß zu testen, müssen Sie Ihre Seite auf einen Server hochladen (die Verwendung von [GitHub Pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ist eine einfache und kostenlose Lösung), und dann können Sie von dort aus mit Browser-Entwicklertools wie dem Firefox [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) testen, ob sie richtig funktionieren.

### Ein kunstvoll gestalteter roter Panda

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("picture")}} Element einfügen, das das kleine Porträtbild des Pandas serviert, wenn der Viewport 600px breit oder weniger ist, und das große Landschaftsbild andernfalls.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung abzuschließen; Sie brauchen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich des CSS-Stylings) erledigt bereits den Großteil der Arbeit für Sie, sodass Sie sich nur auf die Medien-Einbettung konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Startseite aussehen sollte, nachdem sie korrekt markiert wurde, auf einem breiten und einem schmalen Bildschirm.

![Ein weites Bild unserer Beispiel-Startseite](wide-shot.png)

![Ein schmales Bild unserer Beispiel-Startseite](narrow-shot.png)

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
