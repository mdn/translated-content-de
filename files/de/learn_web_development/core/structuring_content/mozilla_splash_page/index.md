---
title: "Herausforderung: Mozilla Splash-Seite"
slug: Learn_web_development/Core/Structuring_content/Mozilla_splash_page
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung testen wir Ihr Wissen über einige der Techniken, die in den letzten Lektionen besprochen wurden, indem Sie Bilder und Videos zu einer ausgefallenen Splash-Seite hinzufügen, die sich ganz um Mozilla dreht!

## Startpunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle Bilder aus dem [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) Verzeichnis auf GitHub abrufen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrer lokalen Festplatte, in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im gleichen Verzeichnis (klicken Sie mit der rechten Maustaste auf das Bild, um eine Option zum Speichern zu erhalten.)

Greifen Sie auf die verschiedenen Bilder im [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) Verzeichnis zu und speichern Sie sie auf die gleiche Weise; Sie sollten sie vorerst in einem anderen Verzeichnis speichern, da Sie einige von ihnen mit einem Grafikeditor bearbeiten müssen, bevor sie einsatzbereit sind.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält eine Menge CSS, um die Seite zu gestalten. Sie müssen das CSS nicht ändern, nur das HTML innerhalb des {{htmlelement("body")}} Elements - solange Sie das korrekte Markup einfügen, wird das Styling es korrekt darstellen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

In dieser Bewertung präsentieren wir Ihnen eine überwiegend fertige Mozilla-Splash-Seite, die etwas Schönes und Interessantes darüber sagt, wofür Mozilla steht, und einige Links zu weiteren Ressourcen bietet. Leider wurden noch keine Bilder oder Videos hinzugefügt - das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite schön aussehen zu lassen und sie verständlicher zu machen. Die folgenden Unterabschnitte beschreiben, was Sie tun müssen:

### Vorbereitung der Bilder

Verwenden Sie Ihren bevorzugten Bildeditor, um 400px breite Versionen von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

zusammen mit `mdn.svg` zu erstellen. Diese Bilder sind Ihre Symbole, die zu weiteren Ressourcen innerhalb des `further-info` Bereichs verlinken. Sie werden auch auf das Firefox-Logo in der Kopfzeile verlinken. Speichern Sie Kopien davon im gleichen Verzeichnis wie `index.html`.

Erstellen Sie als nächstes eine 1200px breite Landschaftsversion von `red-panda.jpg`. Geben Sie ihr einen sinnvollen Namen, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie im gleichen Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie noch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu tun.

### Hinzufügen eines Logos zur Kopfzeile

Fügen Sie innerhalb des {{htmlelement("header")}} Elements ein {{htmlelement("img")}} Element hinzu, das die kleine Version des Firefox-Logos in der Kopfzeile einbindet.

### Hinzufügen eines Videos zum Hauptartikelinhalt

Binden Sie direkt innerhalb des {{htmlelement("article")}} Elements (direkt unter dem öffnenden Tag) das YouTube-Video von <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools verwenden, um den Code zu erzeugen. Das Video sollte 400px breit sein.

> [!NOTE]
> Dies ist eine Art Erweiterungsziel, da wir den Code zum Einbetten von YouTube-Videos in unserem Kurs nicht besprochen haben. Versuchen Sie, online zu recherchieren, wie man ein YouTube-Video einbettet.

### Hinzufügen von Bildern zu den Links im Bereich "Weitere Infos"

Innerhalb des {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}} Elemente – jedes verlinkt auf eine interessante, Mozilla-bezogene Seite. Um diesen Abschnitt abzuschließen, müssen Sie ein {{htmlelement("img")}} Element in jedes einfügen, um das entsprechende Bild einzubetten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links abgleichen!

### Hinzufügen des Roten Pandas

Innerhalb des {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("img")}} Element einfügen, das das Bild des Roten Pandas anzeigt.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung durchzuführen; Sie benötigen nur die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich der CSS-Stilgestaltung) erledigt bereits den Großteil der Arbeit für Sie, sodass Sie sich nur auf das Einbetten der Medien konzentrieren müssen.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite aussehen sollte.

![Ein Weitwinkelbild unserer Beispiel-Splash-Seite](wide-shot.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
