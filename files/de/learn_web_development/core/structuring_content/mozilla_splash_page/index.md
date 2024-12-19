---
title: "Herausforderung: Mozilla Splash-Seite"
slug: Learn_web_development/Core/Structuring_content/Mozilla_splash_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung prüfen wir Ihr Wissen über einige der Techniken, die in den letzten Lektionen besprochen wurden. Sie sollen einige Bilder und Videos zu einer originellen Splash-Seite über Mozilla hinzufügen!

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle Bilder aus dem [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub abrufen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrem lokalen Laufwerk, in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im gleichen Verzeichnis (klicken Sie mit der rechten Maustaste auf das Bild, um eine Option zum Speichern zu erhalten).

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern Sie sie auf die gleiche Weise; Sie sollten sie vorerst in einem anderen Verzeichnis speichern, da Sie einige davon mit einem Grafikeditor bearbeiten müssen, bevor sie verwendet werden können.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine Menge CSS, um die Seite zu gestalten. Sie müssen das CSS nicht anfassen, sondern nur das HTML innerhalb des {{htmlelement("body")}} Elements — solange Sie das korrekte Markup einfügen, wird das Styling dafür sorgen, dass es korrekt aussieht.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektübersicht

In dieser Bewertung präsentieren wir Ihnen eine fast fertiggestellte Mozilla Splash-Seite, die etwas Nettes und Interessantes darüber, wofür Mozilla steht, erzählen und einige Links zu weiteren Ressourcen bieten soll. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite ansehnlicher zu machen und mehr Sinn zu bekommen. Die folgenden Unterabschnitte erläutern, was Sie tun müssen:

### Bilder vorbereiten

Verwenden Sie Ihren bevorzugten Bildeditor, um 400px breite Versionen von folgenden Bildern zu erstellen:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Zusammen mit `mdn.svg` werden diese Bilder Ihre Symbole sein, um zu weiteren Ressourcen im Bereich `further-info` zu verlinken. Sie werden auch auf das Firefox-Logo im Seitenkopf verlinken. Speichern Sie Kopien all dieser Bilder im gleichen Verzeichnis wie `index.html`.

Erstellen Sie als Nächstes eine 1200px breite Landschaftsversion von `red-panda.jpg`, benennen Sie sie sinnvoll, damit Sie sie leicht erkennen können. Speichern Sie eine Kopie im gleichen Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie immer noch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies auf einfache Weise zu tun.

### Hinzufügen eines Logos zum Header

Fügen Sie im {{htmlelement("header")}} Element ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos im Header einbettet.

### Hinzufügen eines Videos zum Hauptartikelinhalt

Direkt innerhalb des {{htmlelement("article")}} Elements (direkt unter dem öffnenden Tag) betten Sie das YouTube-Video von <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools zur Codegenerierung verwenden. Das Video sollte 400px breit sein.

> [!NOTE]
> Dies ist ein kleines Stretch-Ziel, da wir den erforderlichen Code zum Einbetten von YouTube-Videos in unserem Kurs nicht besprochen haben. Versuchen Sie online nachzuschlagen, wie man ein YouTube-Video einbettet.

### Hinzufügen von Bildern zu den weiteren Info-Links

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente — jedes verlinkt auf eine interessante, mit Mozilla zusammenhängende Seite. Um diesen Abschnitt zu vervollständigen, müssen Sie ein {{htmlelement("img")}} Element in jedes einfügen, um das entsprechende Bild einzubetten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links abgleichen!

### Hinzufügen des Roten Pandas

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("img")}} Element einfügen, das das Bild des Roten Pandas anzeigt.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung zu machen; Sie benötigen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Die bereitgestellte HTML-Datei (einschließlich des CSS-Stylings) macht bereits den größten Teil der Arbeit für Sie, sodass Sie sich nur auf die Medien-Einbettung konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite aussehen sollte.

![Ein Weitwinkelbild unserer Beispiel-Splash-Seite](wide-shot.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
