---
title: Umgang mit Dateien
slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte richtig aussehen lassen, bevor Sie sie schließlich [auf einen Server hochladen](/de/docs/Learn/Getting_started_with_the_web/Publishing_your_website). _Umgang mit Dateien_ behandelt einige Probleme, derer Sie sich bewusst sein sollten, um eine sinnvolle Datei-Struktur für Ihre Website einzurichten.

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie lokal auf Ihrem Computer an einer Website arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner aufbewahren, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann sich an beliebiger Stelle befinden, aber Sie sollten ihn an einem Ort ablegen, an dem Sie ihn leicht finden können, möglicherweise auf Ihrem Desktop, in Ihrem Home-Verzeichnis oder am Stammverzeichnis Ihrer Festplatte.

1. Wählen Sie einen Ort, um Ihre Website-Projekte zu speichern. Erstellen Sie innerhalb des gewählten Ortes einen neuen Ordner namens `web-projects` (oder ähnlich). Hier werden alle Ihre Website-Projekte gespeichert.
2. Erstellen Sie in diesem ersten Ordner einen weiteren Ordner, um Ihre erste Website zu speichern. Nennen Sie ihn `test-site` (oder etwas fantasievolleres).

## Ein Exkurs über Groß- und Kleinschreibung und Abstände

Sie werden bemerken, dass wir Sie in diesem Artikel bitten, Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen zu benennen. Das liegt daran:

1. Viele Computer, insbesondere Webserver, sind case-sensitive. Wenn Sie zum Beispiel ein Bild auf Ihrer Website unter `test-site/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, das Bild als `test-site/myimage.jpg` aufzurufen, funktioniert es möglicherweise nicht.
2. Es gibt viele Möglichkeiten, wie Leerzeichen in Dateinamen Probleme verursachen:
   - Wenn Sie im Terminal Befehle ausführen, müssen Sie Dateinamen mit Leerzeichen in Anführungszeichen setzen, sonst wird der Pfad als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (z. B. Python) funktionieren nicht gut mit Leerzeichen in Dateinamen, wenn diese Dateien Module sind, die importiert werden sollen.

Dateinamen werden auch auf URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my_file.html` im Stammverzeichnis Ihres vom Server bereitgestellten Verzeichnisses haben, ist sie im Allgemeinen unter `https://example.com/my_file.html` zugänglich, gemäß dem Standardverhalten der meisten Webserver. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen durch "%20" (den Zeichencode für Leerzeichen in URLs), was subtile Fehler bei einigen serverseitigen Logiken verursachen kann, wenn davon ausgegangen wird, dass Dateinamen und URLs perfekt übereinstimmen.

Es ist auch ratsam, Wörter mit Bindestrichen statt mit Unterstrichen zu trennen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrenner, betrachtet einen Unterstrich jedoch nicht als solchen](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann durch die Konfiguration Ihres Servers, Unterstriche durch Bindestriche zu ersetzen, behoben werden, aber das ist zusätzlicher Aufwand und fehleranfälliger bei abweichenden Dateinamen und URLs.

Aus diesen Gründen ist es am besten, sich daran zu gewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie weniger Probleme haben.

## Welche Struktur sollte Ihre Website haben?

Betrachten wir als Nächstes, welche Struktur unsere Testseite haben sollte. Die häufigsten Dinge, die wir bei jedem Website-Projekt haben werden, sind eine index HTML-Datei und Ordner für Bilder, Stil-Dateien und Skript-Dateien. Lassen Sie uns diese jetzt erstellen:

1. **`index.html`**: Diese Datei wird im Allgemeinen Ihren Homepage-Inhalt enthalten, das heißt, den Text und die Bilder, die die Leute sehen, wenn sie zuerst auf Ihre Seite kommen. Erstellen Sie mit Ihrem Texteditor eine neue Datei namens `index.html` und speichern Sie sie direkt in Ihrem `test-site` Ordner.
2. **`images` Ordner**: Dieser Ordner wird alle Bilder enthalten, die Sie auf Ihrer Seite verwenden. Erstellen Sie einen Ordner namens `images`, in Ihrem `test-site` Ordner.
3. **`styles` Ordner**: Dieser Ordner wird den CSS-Code enthalten, der verwendet wird, um Ihren Inhalt zu stylen (zum Beispiel das Festlegen von Text- und Hintergrundfarben). Erstellen Sie einen Ordner namens `styles`, in Ihrem `test-site` Ordner.
4. **`scripts` Ordner**: Dieser Ordner wird den gesamten JavaScript-Code enthalten, der verwendet wird, um interaktive Funktionalitäten zu Ihrer Seite hinzuzufügen (zum Beispiel Schaltflächen, die Daten laden, wenn sie angeklickt werden). Erstellen Sie einen Ordner namens `scripts`, in Ihrem `test-site` Ordner.

> [!NOTE]
> Auf Windows-Computern könnte es Ihnen schwerfallen, die Dateinamen zu sehen, denn Windows hat eine Option namens **Erweiterungen bei bekannten Dateitypen ausblenden** standardmäßig aktiviert. Allgemein können Sie diese Option deaktivieren, indem Sie im Windows Explorer die Option **Ordneroptionen…** auswählen, die Option **Erweiterungen bei bekannten Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

## Dateipfade

Um Dateien miteinander kommunizieren zu lassen, müssen Sie einen Dateipfad zwischen ihnen bereitstellen - im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Um dies zu demonstrieren, werden wir ein wenig HTML in unsere `index.html` Datei einfügen und es das Bild anzeigen lassen, das Sie im Artikel ["Wie wird Ihre Website aussehen?"](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) gewählt haben. Alternativ können Sie ein vorhandenes Bild aus Ihrem eigenen Bestand auf Ihrem Computer oder aus dem Web auswählen und es im folgenden Schritt verwenden:

1. Kopieren Sie das zuvor gewählte Bild in Ihren `images` Ordner.
2. Öffnen Sie Ihre `index.html` Datei und fügen Sie den folgenden Code genau wie gezeigt in die Datei ein. Machen Sie sich keine Sorgen darüber, was das alles bedeutet - wir werden uns die Strukturen später in der Serie genauer ansehen.

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

3. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_ Verzeichnis, das sich im selben Verzeichnis wie `index.html` befindet. Um vom `index.html` zu unserem Bild zu gelangen, benötigen wir den Dateipfad `images/your-image-filename`. Unser Bild heißt beispielsweise `firefox-icon.png`, also ist der Dateipfad `images/firefox-icon.png`.
4. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen des `src=""` Codes ein.
5. Ändern Sie den Inhalt des `alt` Attributs zu einer [Beschreibung des Bildes](/de/docs/Web/HTML/Element/img#authoring_meaningful_alternate_descriptions), das Sie einfügen. In diesem Fall `alt="Firefox logo: flaming fox wrapping the world"`.
6. Speichern Sie Ihre HTML-Datei und laden Sie sie anschließend in Ihrem Webbrowser (Doppelklick auf die Datei). Sie sollten Ihre neue Webseite mit Ihrem Bild sehen!

![Ein Screenshot unserer grundlegenden Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umschließt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um auf eine Zieldatei im gleichen Verzeichnis wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z. B. `my-image.jpg`.
- Um auf eine Datei in einem Unterverzeichnis zu verweisen, schreiben Sie den Verzeichnisnamen vor dem Pfad, plus einen Schrägstrich, z. B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` zum Beispiel innerhalb eines Unterordners von `test-site` liegt und `my-image.jpg` in `test-site` liegt, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können dies beliebig kombinieren, z. B. `../subdirectory/another-subdirectory/my-image.jpg`.

Für den Moment ist dies alles, was Sie wissen müssen.

> [!NOTE]
> Das Windows-Dateisystem neigt dazu, umgekehrte Schrägstriche zu verwenden, nicht Schrägstriche, z. B. `C:\Windows`. Dies spielt im HTML jedoch keine Rolle - selbst wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code weiterhin Schrägstriche verwenden.

## Was sollte noch getan werden?

Das war's fürs Erste. Ihre Ordnerstruktur sollte ungefähr so aussehen:

![Eine Dateistruktur im macOS Finder zeigt einen Bilder-Ordner mit einem Bild, leere Skript- und Stil-Ordner und eine index.html Datei](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
