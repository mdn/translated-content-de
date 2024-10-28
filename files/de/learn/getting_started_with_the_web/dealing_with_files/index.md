---
title: Umgang mit Dateien
slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer organisieren, sicherstellen, dass sie miteinander kommunizieren können, und all Ihre Inhalte richtig gestalten, bevor Sie sie schließlich [auf einen Server hochladen](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website). _Umgang mit Dateien_ behandelt einige Aspekte, die Sie beachten sollten, um eine sinnvolle Dateistruktur für Ihre Website zu erstellen.

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie an einer Website lokal auf Ihrem Computer arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner aufbewahren, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann überall dort abgelegt werden, wo Sie ihn leicht wiederfinden, beispielsweise auf Ihrem Desktop, in Ihrem Home-Verzeichnis oder im Stammverzeichnis Ihrer Festplatte.

1. Wählen Sie einen Ort zur Speicherung Ihrer Website-Projekte. Erstellen Sie in Ihrem gewählten Verzeichnis einen neuen Ordner namens `web-projects` (oder ähnliches). Hier wohnen alle Ihre Website-Projekte.
2. Erstellen Sie in diesem ersten Ordner einen weiteren Ordner zur Speicherung Ihrer ersten Website. Nennen Sie ihn `test-site` (oder etwas einfallsreicher).

## Ein Exkurs über Groß- und Kleinschreibung und Leerzeichen

Sie werden feststellen, dass wir in diesem Artikel durchgängig dazu raten, Ordner- und Dateinamen komplett in Kleinbuchstaben und ohne Leerzeichen zu gestalten. Das liegt daran:

1. Viele Computer, insbesondere Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie also beispielsweise ein Bild auf Ihrer Website unter `test-site/My_Image.jpg` speichern und dann versuchen, das Bild in einer anderen Datei als `test-site/my_image.jpg` aufzurufen, funktioniert es möglicherweise nicht.
2. Es gibt viele Möglichkeiten, bei denen Leerzeichen in Dateinamen Probleme verursachen:
   - Wenn Sie Befehle im Terminal ausführen, müssen Sie Dateinamen mit Leerzeichen in Anführungszeichen setzen, sonst wird der Pfad als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (z.B. Python) kommen nicht gut mit Leerzeichen in Dateinamen klar, wenn diese Dateien Module sind, die importiert werden sollen.

Dateinamen werden auch auf URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my_file.html` im Stammverzeichnis Ihres serverbedienten Ordners haben, ist sie im Allgemeinen unter `https://example.com/my_file.html` zugänglich, was dem Standardverhalten der meisten Webserver entspricht. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen durch "%20" (den Zeichencode für Leerzeichen in URLs), was subtile Fehler in serverseitiger Logik verursachen kann, wenn davon ausgegangen wird, dass Dateinamen und URLs perfekt übereinstimmen.

Es ist auch ratsam, Wörter mit Bindestrichen anstelle von Unterstrichen zu trennen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrennzeichen, erkennt jedoch einen Unterstrich nicht auf diese Weise](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann durch die Konfiguration Ihres Servers behoben werden, um Unterstriche durch Bindestriche zu ersetzen, aber das ist zusätzlicher Aufwand und fehleranfälliger bei abweichenden Dateinamen und URLs.

Aus diesen Gründen ist es am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen getrennten Wörtern zu schreiben, zumindest bis Sie genau wissen, was Sie tun. So werden Sie später auf weniger Probleme stoßen.

## Welche Struktur sollte Ihre Website haben?

Als nächstes schauen wir uns an, welche Struktur unsere Test-Website haben sollte. Die häufigsten Elemente, die wir bei jedem Website-Projekt haben werden, sind eine Index-HTML-Datei und Ordner zur Ablage von Bildern, Style-Dateien und Script-Dateien. Erstellen wir diese jetzt:

1. **`index.html`**: Diese Datei wird im Allgemeinen Ihren Homepage-Inhalt enthalten, also der Text und die Bilder, die Personen sehen, wenn sie zuerst auf Ihre Website gehen. Verwenden Sie Ihren Texteditor, um eine neue Datei namens `index.html` zu erstellen, und speichern Sie sie direkt im Ordner `test-site`.
2. **Ordner `images`**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden. Erstellen Sie einen Ordner namens `images` in Ihrem Ordner `test-site`.
3. **Ordner `styles`**: Dieser Ordner enthält den CSS-Code, der für die Gestaltung Ihrer Inhalte verwendet wird (z.B. Einstellung von Text- und Hintergrundfarben). Erstellen Sie einen Ordner namens `styles` in Ihrem Ordner `test-site`.
4. **Ordner `scripts`**: Dieser Ordner enthält den gesamten JavaScript-Code, der für interaktive Funktionen auf Ihrer Website verwendet wird (z.B. Schaltflächen, die Daten laden, wenn sie angeklickt werden). Erstellen Sie einen Ordner namens `scripts` in Ihrem Ordner `test-site`.

> [!NOTE]
> Auf Windows-Computern könnten Sie Probleme haben, die Dateinamen zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen bei bekannten Dateitypen ausblenden** aktiviert hat. Sie können dies im Allgemeinen deaktivieren, indem Sie Windows Explorer öffnen, **Ordneroptionen...** auswählen, das Kontrollkästchen **Erweiterungen bei bekannten Dateitypen ausblenden** deaktivieren und **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

## Dateipfade

Um Dateien miteinander sprechen zu lassen, müssen Sie einen Dateipfad zwischen ihnen bereitstellen – im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Um dies zu demonstrieren, fügen wir ein kleines bisschen HTML in unsere `index.html`-Datei ein und lassen sie das Bild anzeigen, das Sie im Artikel ["Was wird Ihre Website aussehen?"](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) ausgewählt haben. Alternativ können Sie ein vorhandenes Bild verwenden, das Ihnen zur Verfügung steht, auf Ihrem Computer oder aus dem Internet, und es in den folgenden Schritten verwenden:

1. Kopieren Sie das zuvor gewählte Bild in Ihren Ordner `images`.
2. Öffnen Sie Ihre Datei `index.html`, und fügen Sie den folgenden Code genau so ein, wie er gezeigt wird. Machen Sie sich jetzt keine Sorgen darüber, was das alles bedeutet – wir werden uns die Strukturen später in der Serie genauer ansehen.

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

3. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild auf der Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Verzeichnis, das im gleichen Verzeichnis wie `index.html` ist. Um in der Dateistruktur von `index.html` zu unserem Bild zu wechseln, benötigen wir den Dateipfad `images/your-image-filename`. Unser Bild heißt zum Beispiel `firefox-icon.png`, daher ist der Dateipfad `images/firefox-icon.png`.
4. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen den Anführungszeichen des `src=""`-Codes ein.
5. Ändern Sie den Inhalt des `alt`-Attributs in eine [Beschreibung des Bildes](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), das Sie einfügen. In diesem Fall `alt="Firefox-Logo: Flammander Fuchs umwickelt die Welt"`.
6. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser (doppelklicken Sie auf die Datei). Sie sollten Ihre neue Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer grundlegenden Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umwickelt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um auf eine Zieldatei im gleichen Verzeichnis wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um auf eine Datei in einem Unterverzeichnis zu verweisen, schreiben Sie den Verzeichnisnamen vor dem Pfad mit einem Schrägstrich, z.B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` in einem Unterordner von `test-site` und `my-image.jpg` in `test-site` wäre, könnten Sie von `index.html` auf `my-image.jpg` mit `../my-image.jpg` verweisen.
- Sie können dies beliebig kombinieren, z.B. `../subdirectory/another-subdirectory/my-image.jpg`.

Für den Moment ist das alles, was Sie wissen müssen.

> [!NOTE]
> Das Windows-Dateisystem verwendet tendenziell Rückwärtsschrägstriche, nicht Vorwärtsschrägstriche, z.B. `C:\Windows`. Dies ist im HTML unerheblich – auch wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code Vorwärtsschrägstriche verwenden.

## Was sollte noch getan werden?

Das ist es fürs Erste. Ihre Ordnerstruktur sollte ungefähr so aussehen:

![Eine Dateistruktur im macOS Finder, die einen Ordner mit Bildern samt einem Bild, leere Skript- und Styles-Ordner und eine index.html-Datei zeigt](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
