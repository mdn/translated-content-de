---
title: "Herausforderung: Mozilla-Splash-Seite"
slug: Learn_web_development/Core/Structuring_content/Mozilla_splash_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung testen wir Ihr Wissen über einige der in den letzten Lektionen besprochenen Techniken, indem wir Sie auffordern, einige Bilder und Videos zu einer originellen Splash-Seite über Mozilla hinzuzufügen!

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, müssen Sie das HTML und alle Bilder aus dem Verzeichnis [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) auf GitHub herunterladen. Speichern Sie den Inhalt von [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei namens `index.html` auf Ihrem lokalen Laufwerk in einem neuen Verzeichnis. Speichern Sie dann [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) im selben Verzeichnis (klicken Sie mit der rechten Maustaste auf das Bild, um die Option zum Speichern zu erhalten).

Greifen Sie auf die verschiedenen Bilder im Verzeichnis [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) zu und speichern Sie sie auf die gleiche Weise; Sie sollten sie fürs Erste in einem anderen Verzeichnis speichern, da Sie einige von ihnen mit einem Grafikeditor bearbeiten müssen, bevor sie verwendet werden können.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Die Beispiel-HTML-Datei enthält ziemlich viel CSS zum Stylen der Seite. Sie müssen das CSS nicht anfassen, nur das HTML im {{htmlelement("body")}}-Element — solange Sie das korrekte Markup einfügen, wird das Styling es korrekt aussehen lassen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

In dieser Bewertung präsentieren wir Ihnen eine fast fertige Mozilla-Splash-Seite, die etwas Nettes und Interessantes darüber aussagen soll, wofür Mozilla steht, und einige Links zu weiteren Ressourcen bereitstellen soll. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite ansprechend und verständlicher zu gestalten. Die folgenden Unterabschnitte beschreiben, was Sie tun müssen:

### Vorbereitung der Bilder

Verwenden Sie Ihren bevorzugten Bildeditor, um 400px breite Versionen von folgenden Bildern zu erstellen:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Zusammen mit `mdn.svg` werden diese Bilder Ihre Symbole zum Verlinken auf weitere Ressourcen im Bereich `further-info` sein. Sie verlinken auch das Firefox-Logo in der Kopfzeile der Seite. Speichern Sie Kopien davon im selben Verzeichnis wie `index.html`.

Erstellen Sie anschließend eine 1200px breite Landschaftsversion von `red-panda.jpg`. Nennen Sie sie sinnvoll, damit Sie sie leicht identifizieren können. Speichern Sie eine Kopie im selben Verzeichnis wie `index.html`.

> [!NOTE]
> Sie sollten Ihre JPG- und PNG-Bilder optimieren, um sie so klein wie möglich zu machen, während sie noch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein großartiger Dienst, um dies einfach zu tun.

### Hinzufügen eines Logos zur Kopfzeile

Fügen Sie im {{htmlelement("header")}}-Element ein {{htmlelement("img")}}-Element hinzu, das die kleine Version des Firefox-Logos in der Kopfzeile einbettet.

### Hinzufügen eines Videos zum Hauptartikelinhalt

Direkt im {{htmlelement("article")}}-Element (direkt unterhalb des öffnenden Tags) betten Sie das YouTube-Video unter <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie die entsprechenden YouTube-Tools zur Codegenerierung nutzen. Das Video sollte 400px breit sein.

> [!NOTE]
> Dies ist ein etwas herausforderndes Ziel, da wir den für das Einbetten von YouTube-Videos erforderlichen Code in unserem Kurs nicht besprochen haben. Versuchen Sie online nachzuschauen, wie man ein YouTube-Video einbettet.

### Hinzufügen von Bildern zu den Links für weitere Informationen

Im {{htmlelement("div")}} mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}}-Elemente — jedes verlinkt zu einer interessanten Mozilla-bezogenen Seite. Um diesen Abschnitt zu vervollständigen, müssen Sie in jedes von ihnen ein {{htmlelement("img")}}-Element einfügen, um das entsprechende Bild einzubetten.

Stellen Sie sicher, dass Sie die richtigen Bilder mit den richtigen Links verknüpfen!

### Hinzufügen des Roten Pandas

Im {{htmlelement("div")}} mit der Klasse `red-panda` möchten wir ein {{htmlelement("img")}}-Element einfügen, das das Bild des Roten Pandas anzeigt.

## Hinweise und Tipps

- Sie können den [W3C Nu HTML-Checker](https://validator.w3.org/nu/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung abzuschließen; Sie benötigen lediglich die bereitgestellte HTML-Datei. Der CSS-Teil ist bereits für Sie erledigt.
- Das bereitgestellte HTML (einschließlich der CSS-Styling) erledigt bereits den größten Teil der Arbeit für Sie, sodass Sie sich nur auf das Einbetten der Medien konzentrieren müssen.

## Beispiel

Die folgenden Screenshots zeigen, wie die Splash-Seite aussehen sollte.

![Eine Weitaufnahme unserer Beispiel-Splash-Seite](wide-shot.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
