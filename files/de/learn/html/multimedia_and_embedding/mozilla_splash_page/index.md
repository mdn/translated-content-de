---
title: Mozilla Splash-Seite
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

In dieser Bewertung testen wir Ihr Wissen über einige der in den Artikeln dieses Moduls diskutierten Techniken und bringen Sie dazu, einige Bilder und Videos zu einer funky Splash-Seite über Mozilla hinzuzufügen!

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
        Test des Wissens über das Einbetten von Bildern und Videos in Webseiten, Frames und HTML-Responsive-Bildtechniken.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle verfügbaren Bilder im [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub abrufen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrem lokalen Laufwerk, in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (Klicken Sie mit der rechten Maustaste auf das Bild, um eine Option zum Speichern zu erhalten.)

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern Sie sie auf die gleiche Weise; Sie werden sie vorerst in einem anderen Verzeichnis speichern wollen, da Sie (einige von) ihnen mithilfe eines Grafikeditors bearbeiten müssen, bevor sie einsatzbereit sind.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine ganze Menge CSS, um die Seite zu stylen. Sie müssen das CSS nicht anfassen, nur das HTML innerhalb des {{htmlelement("body")}} Elements — solange Sie das korrekte Markup einfügen, wird das Styling es korrekt aussehen lassen.
>
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektauftrag

In dieser Bewertung präsentieren wir Ihnen eine größtenteils fertige Mozilla Splash-Seite, die darauf abzielt, etwas Nettes und Interessantes darüber zu sagen, wofür Mozilla steht, und einige Links zu weiteren Ressourcen bereitzustellen. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite schön aussehen zu lassen und mehr Sinn zu geben. Die folgenden Unterabschnitte beschreiben, was Sie tun müssen:

### Bilder vorbereiten

Erstellen Sie mit Ihrem bevorzugten Bildbearbeitungsprogramm eine 400px breite und eine 120px breite Version von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Nennen Sie sie sinnvoll, z.B. `firefox-logo400.png` und `firefox-logo120.png`.

Zusammen mit `mdn.svg` werden diese Bilder Ihre Symbole sein, um zu weiteren Ressourcen im Bereich `further-info` zu verlinken. Sie werden auch das Firefox-Logo in die Kopfzeile der Website verlinken. Speichern Sie Kopien aller dieser Dateien im gleichen Verzeichnis wie `index.html`.

Erstellen Sie als Nächstes eine 1200px breite Landschaftsversion von `red-panda.jpg` und eine 600px breite Porträtversion, die den Panda in einer Nahaufnahme zeigt. Nennen Sie auch diese sinnvoll, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie von beiden im gleichen Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie noch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu erledigen.

### Einfügen eines Logos in die Kopfzeile

Fügen Sie innerhalb des {{htmlelement("header")}} Elements ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos in der Kopfzeile einbettet.

### Hinzufügen eines Videos zum Hauptartikelinhalt

Fügen Sie direkt innerhalb des {{htmlelement("article")}} Elements (direkt unter dem öffnenden Tag) das auf YouTube verfügbare Video unter <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools verwenden, um den Code zu generieren. Das Video sollte 400px breit sein.

### Hinzufügen von responsiven Bildern zu den weiteren Informationslinks

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente — jedes verlinkt auf eine interessante Mozilla-bezogene Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}} Element in jedes einfügen, das geeignete [`src`](/de/docs/Web/HTML/Element/img#src), [`alt`](/de/docs/Web/HTML/Element/img#alt), [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute enthält.

In jedem Fall (außer einem — welches ist von Natur aus responsiv?) möchten wir, dass der Browser die 120px breite Version bereitstellt, wenn die Viewport-Breite 500px oder weniger beträgt, oder die 400px breite Version ansonsten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links abgleichen!

> [!NOTE]
> Um die `srcset`/`sizes`-Beispiele ordnungsgemäß zu testen, müssen Sie Ihre Website auf einen Server hochladen (die Verwendung von [GitHub pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ist eine einfache und kostenlose Lösung), dann können Sie von dort aus testen, ob sie ordnungsgemäß funktionieren, indem Sie Browser-Entwicklertools wie den Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) verwenden.

### Ein kunstvoll inszenierter roter Panda

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("picture")}} Element einfügen, das das kleine Porträtbild des Pandas bereitstellt, wenn der Viewport 600px oder weniger breit ist, und das große Landschaftsbild ansonsten.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung zu absolvieren; Sie benötigen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich der CSS-Styling) erledigt bereits den Großteil der Arbeit für Sie, sodass Sie sich nur auf das Einbetten von Medien konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite nach korrektem Markup auf einem breiten und einem schmalen Bildschirm aussehen sollte.

![Ein weites Bild unserer Beispiel-Splash-Seite](wide-shot.png)

![Ein schmales Bild unserer Beispiel-Splash-Seite](narrow-shot.png)

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
