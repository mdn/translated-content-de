---
title: Umgang mit Dateien
slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in eine sinnvolle Struktur auf Ihrem lokalen Computer zusammenfügen, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte richtig aussehen lassen, bevor Sie sie schließlich [auf einen Server hochladen](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website). _Umgang mit Dateien_ behandelt einige Aspekte, derer Sie sich bewusst sein sollten, damit Sie eine sinnvolle Dateistruktur für Ihre Website einrichten können.

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie lokal an einer Website auf Ihrem Computer arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner aufbewahren, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann überall sein, wo Sie möchten, aber er sollte an einem Ort sein, an dem Sie ihn leicht finden können, vielleicht auf Ihrem Desktop, in Ihrem persönlichen Ordner oder im Root-Verzeichnis Ihrer Festplatte.

1. Wählen Sie einen Ort, um Ihre Website-Projekte zu speichern. Erstellen Sie an dem gewählten Ort einen neuen Ordner namens `web-projects` (oder ähnlich). Hier werden alle Ihre Website-Projekte gespeichert.
2. Erstellen Sie in diesem ersten Ordner einen weiteren Ordner, um Ihre erste Website zu speichern. Nennen Sie ihn `test-site` (oder etwas einfallsreicher).

## Ein Exkurs über Groß- und Kleinschreibung sowie Abstände

Sie werden bemerken, dass wir Sie in diesem Artikel dazu auffordern, Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen zu benennen. Dies liegt daran, dass:

1. Viele Computer, insbesondere Webserver, zwischen Groß- und Kleinschreibung unterscheiden. Wenn Sie beispielsweise ein Bild auf Ihrer Website unter `test-site/MyImage.jpg` ablegen und versuchen, das Bild in einer anderen Datei als `test-site/myimage.jpg` aufzurufen, funktioniert es möglicherweise nicht.
2. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Dateinamen Probleme verursachen kann:
   - Wenn Sie Befehle im Terminal ausführen, müssen Sie Dateinamen mit Leerzeichen in Anführungszeichen setzen, sonst wird der Pfad als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (z. B. Python) funktionieren nicht gut mit Leerzeichen in Dateinamen, wenn diese Dateien als Module importiert werden sollen.

Dateinamen werden auch auf URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my_file.html` im Root-Verzeichnis Ihres server-bereitgestellten Verzeichnisses haben, wird sie im Allgemeinen unter `https://example.com/my_file.html` zugänglich sein, basierend auf dem Standardverhalten der meisten Webserver. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen durch "%20" (den Zeichencode für Leerzeichen in URLs), was subtile Fehler mit einiger serverseitiger Logik verursachen kann, wenn davon ausgegangen wird, dass Dateinamen und URLs perfekt übereinstimmen.

Es ist auch ratsam, Wörter mit Bindestrichen zu trennen statt mit Unterstrichen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrennzeichen, jedoch nicht einen Unterstrich](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann behoben werden, indem Sie Ihren Server so konfigurieren, dass er Unterstriche durch Bindestriche ersetzt, aber das ist zusätzliche Arbeit und anfälliger für Fehler mit abweichenden Dateinamen und URLs.

Aus diesen Gründen ist es am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben, ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie weniger Probleme haben.

## Welche Struktur sollte Ihre Website haben?

Schauen wir uns als Nächstes an, welche Struktur unsere Testseite haben sollte. Die häufigsten Elemente, die wir bei jedem Website-Projekt haben werden, sind eine Index-HTML-Datei und Ordner, um Bilder, Style-Dateien und Skript-Dateien zu enthalten. Lassen Sie uns diese jetzt erstellen:

1. **`index.html`**: Diese Datei enthält im Allgemeinen den Inhalt Ihrer Startseite, also den Text und die Bilder, die Personen sehen, wenn sie zuerst auf Ihre Seite kommen. Erstellen Sie mit Ihrem Texteditor eine neue Datei namens `index.html` und speichern Sie sie direkt in Ihrem Ordner `test-site`.
2. **`images` Ordner**: In diesem Ordner werden alle Bilder gespeichert, die Sie auf Ihrer Webseite verwenden. Erstellen Sie einen Ordner namens `images` in Ihrem Ordner `test-site`.
3. **`styles` Ordner**: Dieser Ordner wird den CSS-Code enthalten, der zum Stylen Ihrer Inhalte verwendet wird (z. B. Festlegen von Text- und Hintergrundfarben). Erstellen Sie einen Ordner namens `styles` in Ihrem Ordner `test-site`.
4. **`scripts` Ordner**: In diesem Ordner wird der gesamte JavaScript-Code gespeichert, der verwendet wird, um Ihrer Website interaktive Funktionen hinzuzufügen (z. B. Schaltflächen, die Daten laden, wenn sie angeklickt werden). Erstellen Sie einen Ordner namens `scripts` in Ihrem Ordner `test-site`.

> [!NOTE]
> Auf Windows-Computern kann es sein, dass Sie die Dateinamen nicht sehen, weil Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. In der Regel können Sie diese deaktivieren, indem Sie den Windows Explorer öffnen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann **OK** klicken. Für spezifische Informationen zu Ihrer Windows-Version können Sie im Web suchen.

## Dateipfade

Um Dateien miteinander kommunizieren zu lassen, müssen Sie einen Dateipfad zwischen ihnen angeben — im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Um dies zu demonstrieren, werden wir ein wenig HTML in unsere `index.html`-Datei einfügen und das Bild, das Sie im Artikel ["What will your website look like?"](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) ausgewählt haben, anzeigen lassen. Alternativ können Sie ein vorhandenes Bild, das Ihnen zur Verfügung steht, auf Ihrem Computer oder aus dem Web auswählen und es in den folgenden Schritten verwenden:

1. Kopieren Sie das zuvor ausgewählte Bild in Ihren `images` Ordner.
2. Öffnen Sie Ihre `index.html` Datei und fügen Sie den folgenden Code genau so ein wie gezeigt. Machen Sie sich keine Sorgen darüber, was das alles bedeutet — wir werden die Strukturen später in der Serie genauer untersuchen.

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

3. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_ Verzeichnis, das sich im selben Verzeichnis wie `index.html` befindet. Um von `index.html` zu unserem Bild im Datei-Verzeichnis zu gelangen, benötigen wir den Dateipfad `images/Ihr-Bilddateiname`. In unserem Beispiel heißt das Bild `firefox-icon.png`, also lautet der Dateipfad `images/firefox-icon.png`.
4. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen des `src=""`-Attributs ein.
5. Ändern Sie den Inhalt des `alt`-Attributs in eine [Beschreibung des Bildes](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), das Sie einfügen. In diesem Fall `alt="Firefox-Logo: ein flammender Fuchs umwickelt die Welt"`.
6. Speichern Sie Ihre HTML-Datei und laden Sie sie in Ihrem Webbrowser (doppelklicken Sie auf die Datei). Sie sollten Ihre neue Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs umwickelt die Welt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um auf eine Zieldatei im selben Verzeichnis wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um auf eine Datei in einem Unterverzeichnis zu verweisen, schreiben Sie den Verzeichnisnamen vor den Pfad, gefolgt von einem Schrägstrich, z.B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **oberhalb** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` beispielsweise in einem Unterordner von `test-site` und `my-image.jpg` in `test-site` wäre, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können diese so oft kombinieren, wie Sie möchten, z.B. `../subdirectory/another-subdirectory/my-image.jpg`.

Für den Moment ist das alles, was Sie wissen müssen.

> [!NOTE]
> Das Windows-Dateisystem verwendet in der Regel Backslashes statt Schrägstrichen, z.B. `C:\Windows`. Das spielt im HTML keine Rolle — auch wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code Schrägstriche verwenden.

## Was sollte sonst noch getan werden?

Das war es für den Moment. Ihre Ordnerstruktur sollte in etwa so aussehen:

![Eine Dateistruktur im macOS Finder, die einen images Ordner mit einem Bild darin, leere scripts und styles Ordner und eine index.html Datei zeigt](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
