---
title: Umgang mit Dateien
slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer organisieren, sicherstellen, dass sie miteinander kommunizieren können und dass alle Inhalte richtig aussehen, bevor Sie sie schließlich [auf einen Server hochladen](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website). _Umgang mit Dateien_ behandelt einige Fragen, derer Sie sich bewusst sein sollten, damit Sie eine sinnvolle Dateistruktur für Ihre Website einrichten können.

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie lokal auf Ihrem Computer an einer Website arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner aufbewahren, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann an einem beliebigen Ort liegen, aber Sie sollten ihn an einem Ort ablegen, wo Sie ihn leicht finden können, vielleicht auf Ihrem Desktop, in Ihrem Home-Ordner oder im Stammverzeichnis Ihrer Festplatte.

1. Wählen Sie einen Ort, um Ihre Website-Projekte zu speichern. Erstellen Sie in diesem gewählten Ort einen neuen Ordner namens `web-projects` (oder ähnlich). Hier werden alle Ihre Website-Projekte gespeichert.
2. Erstellen Sie in diesem ersten Ordner einen weiteren Ordner, um Ihre erste Website darin zu speichern. Nennen Sie ihn `test-site` (oder etwas phantasievolleres).

## Eine Zwischenbemerkung zu Groß-/Kleinschreibung und Abständen

Sie werden bemerken, dass wir Sie in diesem Artikel auffordern, Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen zu benennen. Der Grund dafür ist:

1. Viele Computer, insbesondere Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie also ein Bild auf Ihrer Website unter `test-site/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, das Bild als `test-site/myimage.jpg` aufzurufen, funktioniert es möglicherweise nicht.
2. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Dateinamen Probleme verursachen kann:
   - Wenn Sie Befehle im Terminal ausführen, müssen Sie Dateinamen mit Leerzeichen in Anführungszeichen setzen, oder der Pfad wird als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (z.B. Python) funktionieren nicht gut mit Leerzeichen in Dateinamen, wenn diese Dateien Module sind, die importiert werden sollen.

Dateinamen werden auch auf URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my_file.html` im Stammverzeichnis Ihres serverseitig bereitgestellten Verzeichnisses haben, ist sie im Allgemeinen über `https://example.com/my_file.html` zugänglich, gemäß dem Standardverhalten der meisten Webserver. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen durch "%20" (den Zeichencode für Leerzeichen in URLs), was subtile Fehler mit serverseitiger Logik verursachen kann, wenn angenommen wird, dass Dateinamen und URLs perfekt übereinstimmen.

Es ist auch ratsam, Wörter mit Bindestrichen zu trennen, statt mit Unterstrichen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrennzeichen, nicht jedoch einen Unterstrich](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann behoben werden, indem Sie Ihren Server so konfigurieren, dass Unterstriche durch Bindestriche ersetzt werden, aber das erfordert zusätzlichen Aufwand und ist fehleranfälliger, wenn Dateinamen und URLs voneinander abweichen.

Aus diesen Gründen ist es am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben zu schreiben, ohne Leerzeichen und mit Bindestrichen getrennten Wörtern, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie auf weniger Probleme stoßen.

## Welche Struktur sollte Ihre Website haben?

Schauen wir uns als nächstes an, welche Struktur unser Test-Site haben sollte. Die häufigsten Elemente, die wir bei jedem Website-Projekt haben werden, sind eine Index-HTML-Datei und Ordner, um Bilder, Stildateien und Skriptdateien zu enthalten. Lass uns diese jetzt erstellen:

1. **`index.html`**: Diese Datei wird im Allgemeinen Ihre Homepage-Inhalte enthalten, also die Texte und Bilder, die Menschen sehen, wenn sie zuerst auf Ihre Seite gelangen. Verwenden Sie Ihren Texteditor, um eine neue Datei mit dem Namen `index.html` zu erstellen, und speichern Sie sie einfach in Ihrem `test-site` Ordner.
2. **`images` Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden. Erstellen Sie einen Ordner mit dem Namen `images`, innerhalb Ihres `test-site` Ordners.
3. **`styles` Ordner**: Dieser Ordner enthält den CSS-Code, der verwendet wird, um Ihre Inhalte zu stylen, z.B. um Text- und Hintergrundfarben einzustellen. Erstellen Sie einen Ordner mit dem Namen `styles`, innerhalb Ihres `test-site` Ordners.
4. **`scripts` Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, um interaktive Funktionalitäten auf Ihrer Website hinzuzufügen (z.B. Schaltflächen, die Daten bei Klick laden). Erstellen Sie einen Ordner mit dem Namen `scripts`, innerhalb Ihres `test-site` Ordners.

> [!NOTE]
> Auf Windows-Computern können Sie Probleme haben, die Dateinamen zu sehen, da Windows eine Option namens **Erweiterungen bei bekannten Dateitypen ausblenden** standardmäßig aktiviert hat. Im Allgemeinen können Sie dies deaktivieren, indem Sie zum Windows Explorer gehen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen bei bekannten Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für detaillierte Informationen für Ihre Windows-Version können Sie im Web suchen.

## Dateipfade

Um Dateien miteinander sprechen zu lassen, müssen Sie einen Dateipfad zwischen ihnen angeben - im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Um dies zu demonstrieren, werden wir ein kleines bisschen HTML in unsere `index.html` Datei einfügen und das Bild anzeigen, das Sie im Artikel ["Wie wird Ihre Website aussehen?"](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) gewählt haben. Alternativ können Sie ein vorhandenes Bild nutzen, das Ihnen zur Verfügung steht, auf Ihrem Computer oder aus dem Web, und es in den folgenden Schritten verwenden:

1. Kopieren Sie das zuvor ausgewählte Bild in Ihren `images` Ordner.
2. Öffnen Sie Ihre `index.html` Datei und fügen Sie den folgenden Code genau so, wie er gezeigt wird, in die Datei ein. Machen Sie sich keine Sorgen darüber, was das alles bedeutet - wir werden die Strukturen später in der Serie detaillierter betrachten.

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

3. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild auf der Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_ Verzeichnis, das im selben Verzeichnis wie `index.html` liegt. Um von `index.html` zu unserem Bild zu gelangen, benötigen wir den Dateipfad `images/your-image-filename`. Unser Bild heißt zum Beispiel `firefox-icon.png`, daher ist der Dateipfad `images/firefox-icon.png`.
4. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen des `src=""` Codes ein.
5. Ändern Sie den Inhalt des `alt` Attributs in eine [Beschreibung des Bildes](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), das Sie einfügen möchten. In diesem Fall `alt="Firefox logo: flaming fox wrapping the world"`.
6. Speichern Sie Ihre HTML-Datei und laden Sie sie in Ihrem Webbrowser (doppelklicken Sie auf die Datei). Sie sollten Ihre neue Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umgibt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um auf eine Zieldatei im selben Verzeichnis wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um auf eine Datei in einem Unterverzeichnis zu verweisen, schreiben Sie den Verzeichnisnamen vor den Pfad, plus einen Schrägstrich, z.B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn beispielsweise `index.html` innerhalb eines Unterordners von `test-site` wäre und `my-image.jpg` sich in `test-site` befände, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können dies nach Belieben kombinieren, z.B. `../subdirectory/another-subdirectory/my-image.jpg`.

Zum jetzigen Zeitpunkt ist dies alles, was Sie wissen müssen.

> [!NOTE]
> Das Windows-Dateisystem verwendet tendenziell Backslashes, nicht Schrägstriche, z.B. `C:\Windows`. Das spielt in HTML keine Rolle - selbst wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code Schrägstriche verwenden.

## Was sollte noch getan werden?

Das war es im Wesentlichen für jetzt. Ihre Ordnerstruktur sollte ungefähr so aussehen:

![Eine Dateistruktur im macOS Finder, die einen Bilder-Ordner mit einem Bild darin, leere Scripts und Styles-Ordner und eine index.html Datei zeigt](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
