---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 5508b2b65452cc8a57c3b54eec9518d5e73082f4
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalten usw. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte richtig aussehen lassen, bevor Sie sie schließlich [auf einen Server hochladen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website). Dieser Artikel behandelt einige Themen, die Sie in Bezug auf Dateisysteme beachten sollten, damit Sie eine sinnvolle Datenstruktur für Ihre Website einrichten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem und die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Verwendung von Explorer/Finder.</li>
          <li>Standard-Ordnerstruktur.</li>
          <li>Beste Praktiken zur Benennung von Dateien für das Web — keine Leerzeichen, Kleinbuchstaben, Wahl eines vernünftigen Trennzeichens wie Bindestrich oder Unterstrich.</li>
          <li>Grundlegende Best Practices zur Dateiorganisation.</li>
          <li>Erstellen, Verschieben und Löschen von Dateien und Ordnern mit Explorer/Finder.</li>
          <li>Suche nach Dateien und Ordnern.</li>
          <li>Umgang mit Dateierweiterungen (z.B. Deaktivieren von "Erweiterungen für bekannte Dateitypen ausblenden" in Windows, Anzeigen von Punkt-Dateien (.env usw.)).</li>
          <li>Lernen, wie Dateitypen mit Anwendungen verknüpft sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie lokal auf Ihrem Computer an einer Website arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner aufbewahren, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann überall aufbewahrt werden, wo es Ihnen gefällt, aber Sie sollten ihn dort platzieren, wo Sie ihn leicht finden können, vielleicht auf Ihrem Desktop, in Ihrem Home-Ordner oder im Stammverzeichnis Ihrer Festplatte.

Im Allgemeinen sollten Sie:

1. Einen Ort wählen, um Ihre Projekte zu speichern. Hier werden alle Ihre Website-Projekte gespeichert.
2. In diesem ersten Ordner andere Ordner erstellen, um jedes Projekt darin zu speichern. Zum Beispiel könnten Sie Ihr erstes Projekt `test-site` nennen (oder etwas einfallsreicher).

Wählen Sie jetzt einen Ort, um Ihre Projekte zu speichern. Erstellen Sie an Ihrem gewählten Ort einen neuen Ordner namens `web-projects`.

## Eine Randbemerkung zu Groß- und Kleinschreibung und Leerzeichen

Sie werden bemerken, dass wir Sie auf MDN immer darum bitten, Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen zu benennen. Der Grund dafür ist:

1. Viele Computer, insbesondere Web-Server, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie beispielsweise ein Bild auf Ihrer Website unter `test-site/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, auf das Bild mit `test-site/myimage.jpg` zu verweisen, funktioniert es möglicherweise nicht.
2. Es gibt viele Möglichkeiten, wie das Verwenden von Leerzeichen in Dateinamen Probleme verursachen kann:
   - Wenn Sie Befehle in der Befehlszeile aufrufen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, sonst wird der Pfad als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (zum Beispiel Python) funktionieren in bestimmten Fällen nicht gut mit Leerzeichen in Dateinamen (zum Beispiel, wenn diese Dateien als Module importiert werden).

Dateinamen entsprechen auch URLs. Wenn Sie beispielsweise eine Datei namens `my_file.html` im Stammverzeichnis des serverbedienten Verzeichnisses haben, ist sie allgemein unter `https://example.com/my_file.html` zugänglich, entsprechend dem Standardverhalten der meisten Webserver. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen mit "%20" (dem Zeichen für Leerzeichen in URLs), was subtile Fehler mit einigen serverseitigen Logiken verursachen kann, falls angenommen wird, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) oder Unterstrich (`_`). Es ist ratsam, Wörter mit Bindestrichen statt Unterstrichen zu trennen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrennzeichen, einen Unterstrich jedoch nicht](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann durch Konfiguration des Servers, Unterstriche durch Bindestriche zu ersetzen, behoben werden, was jedoch zusätzliche Arbeit ist und bei abweichenden Dateinamen und URLs fehleranfällig ist.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen zwischen den Wörtern zu schreiben, zumindest, bis Sie wissen, was Sie tun. So werden Sie weniger Probleme in der Zukunft haben.

## Welche Struktur sollte eine Website haben?

Schauen wir uns als nächstes an, welche Strukturen Websites im Allgemeinen haben. Die häufigsten Dinge, die wir bei jedem Website-Projekt erstellen, sind eine Index-HTML-Datei und Ordner, die Bilder, Styles-Dateien und Skript-Dateien enthalten:

1. **`index.html`**: Diese Datei enthält im Allgemeinen Ihren Homepage-Inhalt, also den Text und die Bilder, die Besucher sehen, wenn sie zuerst auf Ihre Seite gehen.
2. **`images` Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Seite verwenden.
3. **`styles` Ordner**: Dieser Ordner enthält den CSS-Code, der verwendet wird, um Ihre Inhalte zu stylen (z.B. Festlegung von Text- und Hintergrundfarben).
4. **`scripts` Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um interaktive Funktionalitäten zu Ihrer Seite hinzuzufügen (z.B. Schaltflächen, die Daten laden, wenn sie angeklickt werden).

![Eine Dateistruktur im macOS Finder, die einen Ordner mit Bildern, einen leeren Skript- und Style-Ordner und eine index.html-Datei zeigt](file-structure.png)

> [!NOTE]
> Auf Windows-Computern haben Sie möglicherweise Schwierigkeiten, die Dateinamen zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. In der Regel können Sie dies deaktivieren, indem Sie den Windows Explorer öffnen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet suchen.

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben – im Wesentlichen eine Route, damit eine Datei weiß, wo sich eine andere befindet. Wenn Sie beispielsweise eine Webseite erstellen, die ein Bild enthält, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Speicherort des Bildes angibt, das Sie anzeigen möchten. Lassen Sie uns ein einfaches Beispiel dafür erstellen. Möglicherweise verstehen Sie jetzt noch nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Erstellen Sie in Ihrem `web-projects` Ordner einen neuen Ordner namens `path-example`.
2. Gehen Sie zu [Google Bilder](https://www.google.com/imghp), wählen Sie ein Bild aus, das Ihnen gefällt, und laden Sie es herunter.
3. Erstellen Sie in Ihrem `path-example` Ordner einen neuen Ordner namens `images`. Legen Sie Ihr heruntergeladenes Bild in diesem Ordner ab.
4. Erstellen Sie eine neue Datei namens `index.html` und fügen Sie den folgenden Code genau wie gezeigt in die Datei ein:

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

5. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo sich das Bild befindet. Das Bild befindet sich im _images_ Verzeichnis, das sich im selben Verzeichnis wie `index.html` befindet. Um von `index.html` zu unserem Bild im Dateisystem zu navigieren, lautet der erforderliche Dateipfad `images/your-image-filename`. Wenn unser Bild beispielsweise `firefox-icon.png` hieße, wäre der Dateipfad `images/firefox-icon.png`.
6. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen des `src=""` Codes ein.
7. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser (zum Beispiel durch Doppelklicken auf die Datei). Sie sollten Ihre neue Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, der nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umschließt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um eine Zieldatei im gleichen Verzeichnis wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um auf eine Datei in einem Unterverzeichnis zu verweisen, schreiben Sie den Verzeichnisnamen vor den Pfad, plus einen Schrägstrich nach vorne, z.B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` beispielsweise in einem Unterordner von `test-site` und `my-image.jpg` in `test-site` wäre, könnten Sie von `index.html` auf `my-image.jpg` mit `../my-image.jpg` verweisen.
- Sie können dies so oft kombinieren, wie Sie möchten, zum Beispiel `../subdirectory/another-subdirectory/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet normalerweise Rückwärtsschrägstriche, nicht Vorwärtsschrägstriche, z.B. `C:\Windows`. Dies spielt in HTML keine Rolle – auch wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code Vorwärtsschrägstriche verwenden.

Für den Moment ist das alles, was Sie wissen müssen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
