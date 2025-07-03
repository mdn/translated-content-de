---
title: "Herausforderung: Mozilla Splash-Seite"
slug: Learn_web_development/Core/Structuring_content/Mozilla_splash_page
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung werden wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken testen, indem Sie Bilder und Videos zu einer ausgefallenen Splash-Seite über Mozilla hinzufügen!

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle Bilder aus dem [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub herunterladen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrem lokalen Laufwerk in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (klicken Sie mit der rechten Maustaste auf das Bild, um eine Option zum Speichern zu erhalten).

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern diese auf die gleiche Weise; Sie sollten sie vorerst in einem anderen Verzeichnis speichern, da Sie einige von ihnen mit einem Grafikeditor bearbeiten müssen, bevor sie einsatzbereit sind.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine Menge CSS, um die Seite zu gestalten. Sie müssen das CSS nicht anfassen, sondern nur das HTML innerhalb des {{htmlelement("body")}} Elements ändern — solange Sie das richtige Markup einfügen, wird das Styling es korrekt aussehen lassen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

In dieser Bewertung präsentieren wir Ihnen eine fast fertige Mozilla-Splash-Seite, die etwas Nettes und Interessantes über das, wofür Mozilla steht, aussagen soll und einige Links zu weiteren Ressourcen bieten soll. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite ansprechend zu gestalten und sinnvoll zu machen. Die folgenden Unterabschnitte beschreiben, was Sie tun müssen:

### Bilder vorbereiten

Erstellen Sie mit Ihrem bevorzugten Bildbearbeitungsprogramm 400px breite Versionen von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Diese Bilder werden zusammen mit `mdn.svg` Ihre Symbole sein, um zu weiteren Ressourcen innerhalb des `further-info` Bereichs zu verlinken. Sie werden auch das Firefox-Logo im Seitenkopf verlinken. Speichern Sie Kopien aller dieser Dateien im selben Verzeichnis wie `index.html`.

Erstellen Sie anschließend eine 1200px breite Landschafts-Version von `red-panda.jpg`, Benennen Sie sie etwas Sinnvolles, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie im selben Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie immer noch ansehnlich sind. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu tun.

### Ein Logo im Header hinzufügen

Fügen Sie im {{htmlelement("header")}} Element ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos im Header einbettet.

### Ein Video zum Hauptartikel-Inhalt hinzufügen

Fügen Sie unmittelbar innerhalb des {{htmlelement("article")}} Elements (direkt unter dem öffnenden Tag) das YouTube-Video unter <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die geeigneten YouTube-Tools verwenden, um den Code zu generieren. Das Video sollte 400px breit sein.

> [!NOTE]
> Dies ist ein bisschen ein erweitertes Ziel, da wir den erforderlichen Code zum Einbetten von YouTube-Videos in unserem Kurs nicht behandelt haben. Versuchen Sie, online nachzuschlagen, wie man ein YouTube-Video einbettet.

### Bilder zu den weiteren Info-Links hinzufügen

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente — jedes verlinkt auf eine interessante, mit Mozilla zusammenhängende Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}} Element in jedes einfügen, um das passende Bild einzubetten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links verbinden!

### Den Roten Panda hinzufügen

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("img")}} Element einfügen, das das Bild des Roten Pandas anzeigt.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS für diese Bewertung kennen; Sie brauchen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich der CSS-Styling) erledigt bereits den Großteil der Arbeit für Sie, sodass Sie sich nur auf das Einbetten von Medien konzentrieren können.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite aussehen sollte.

![Eine weite Aufnahme unserer Beispiel-Splash-Seite](wide-shot.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
