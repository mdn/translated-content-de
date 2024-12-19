---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte usw. Wenn Sie eine Website erstellen, müssen Sie diese Dateien auf Ihrem lokalen Computer in eine sinnvolle Struktur zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte korrekt darstellen, bevor Sie diese schließlich [auf einen Server hochladen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website). Dieser Artikel behandelt einige Themen, die Sie im Zusammenhang mit Dateisystemen beachten sollten, damit Sie eine sinnvolle Dateistruktur für Ihre Website einrichten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis Ihres Computerbetriebssystems und der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Nutzung des Explorers/Finders.</li>
          <li>Standard-Ordnerstruktur.</li>
          <li>Best Practices für die Benennung von Dateien im Web — keine Leerzeichen, Kleinbuchstaben, Auswahl eines angemessenen Trennzeichens wie Bindestrich oder Unterstrich.</li>
          <li>Grundlegende Best Practices für die Datei-Organisation.</li>
          <li>Erstellen, Verschieben und Löschen von Dateien und Ordnern mit dem Explorer/Finder.</li>
          <li>Suchen nach Dateien und Ordnern.</li>
          <li>Umgang mit Dateierweiterungen (z.B. Deaktivierung von "Erweiterungen bei bekannten Dateitypen ausblenden" in Windows, Anzeige von Dot-Dateien (.env etc.)).</li>
          <li>Erlernen, wie Dateitypen mit Anwendungen verknüpft sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo sollte Ihre Website auf Ihrem Computer gespeichert werden?

Wenn Sie lokal auf Ihrem Computer an einer Website arbeiten, sollten Sie alle zugehörigen Dateien in einem einzigen Ordner speichern, der die Dateistruktur der veröffentlichten Website auf dem Server widerspiegelt. Dieser Ordner kann überall abgelegt werden, aber Sie sollten ihn an einem Ort platzieren, an dem Sie ihn leicht finden können, vielleicht auf Ihrem Desktop, in Ihrem Home-Ordner oder im Stammverzeichnis Ihrer Festplatte.

Im Allgemeinen sollten Sie:

1. Einen Speicherort für Ihre Projekte wählen. Hier werden alle Ihre Website-Projekte leben.
2. In diesem ersten Ordner weitere Ordner erstellen, um jedes Projekt zu speichern. Sie könnten Ihr erstes Projekt beispielsweise `test-site` (oder etwas Phantasievolleres) nennen.

Wählen Sie jetzt einen Ort zum Speichern Ihrer Projekte. Erstellen Sie innerhalb des gewählten Verzeichnisses einen neuen Ordner namens `web-projects`.

## Eine Anmerkung zu Groß- und Kleinschreibung und Leerzeichen

Sie werden bemerken, dass wir auf MDN darauf bestehen, Ordnernamen und Dateinamen vollständig in Kleinbuchstaben und ohne Leerzeichen zu verwenden. Das liegt daran:

1. Viele Computer, insbesondere Webserver, sind case-sensitive. Wenn Sie also ein Bild auf Ihrer Website bei `test-site/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, das Bild mit `test-site/myimage.jpg` zu referenzieren, funktioniert es möglicherweise nicht.
2. Es gibt viele Probleme, die durch die Verwendung von Leerzeichen in Dateinamen entstehen:
   - Wenn Sie Befehle in der Kommandozeile aufrufen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen oder der Pfad wird als zwei separate Elemente interpretiert.
   - Einige Programmiersprachen (z.B. Python) funktionieren in bestimmten Situationen nicht gut mit Leerzeichen in Dateinamen (z.B. wenn diese Dateien Module sind, die importiert werden sollen).

Dateinamen werden auch auf URLs abgebildet. Wenn Sie zum Beispiel eine Datei namens `my_file.html` im Stammverzeichnis Ihres server-bereitgestellten Verzeichnisses haben, ist sie im Allgemeinen unter `https://example.com/my_file.html` erreichbar, entsprechend dem Standardverhalten der meisten Webserver. Einige Server ersetzen die Leerzeichen in Ihren Dateinamen durch "%20" (den Zeichencode für Leerzeichen in URLs), was subtile Fehler mit einigen serverseitigen Logiken hervorrufen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Anstelle von Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) oder einen Unterstrich (`_`). Es ist ratsam, Wörter mit Bindestrichen statt mit Unterstrichen zu trennen: `my-file.html` vs. `my_file.html`. Die [Google-Suchmaschine behandelt einen Bindestrich als Worttrenner, ignoriert jedoch einen Unterstrich](https://developers.google.com/search/docs/crawling-indexing/url-structure). Dies kann behoben werden, indem Ihr Server so konfiguriert wird, dass er Unterstriche durch Bindestriche ersetzt, aber das ist zusätzliche Arbeit und fehleranfälliger mit unterschiedlichen Dateinamen und URLs.

Es ist am besten, sich daran zu gewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie genau wissen, was Sie tun. Auf diese Weise treten weniger Probleme auf.

## Welche Struktur sollte eine Website haben?

Betrachten wir als Nächstes, welche Strukturen Websites im Allgemeinen haben. Die häufigsten Elemente, die wir in jedem von uns erstellten Website-Projekt haben werden, sind eine Index-HTML-Datei und Ordner zur Speicherung von Bildern, Stil-Dateien und Skript-Dateien:

1. **`index.html`**: Diese Datei enthält im Allgemeinen Ihre Homepage-Inhalte, also den Text und die Bilder, die angezeigt werden, wenn Besucher erstmals auf Ihre Seite gehen.
2. **`images` Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden.
3. **`styles` Ordner**: Dieser Ordner enthält den CSS-Code, der zur Gestaltung Ihrer Inhalte verwendet wird (zum Beispiel um Text- und Hintergrundfarben festzulegen).
4. **`scripts` Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der zur Hinzufügung interaktiver Funktionalitäten zu Ihrer Website verwendet wird (z.B. Schaltflächen, die beim Anklicken Daten laden).

![Eine Dateistruktur in macOS Finder, die einen Bilder-Ordner mit einem Bild, leere Skript- und Stil-Ordner und eine index.html-Datei zeigt](file-structure.png)

> [!NOTE]
> Auf Windows-Computern haben Sie möglicherweise Schwierigkeiten, die Dateinamen zu sehen, da Windows standardmäßig eine Option aktiviert hat, die **Erweiterungen bei bekannten Dateitypen ausblenden** heißt. Sie können dies im Allgemeinen deaktivieren, indem Sie zu Windows Explorer gehen, die **Ordneroptionen...**-Option auswählen, das Kontrollkästchen **Erweiterungen bei bekannten Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet suchen.

## Dateipfade

Um eine Datei von einer anderen Datei aus zu referenzieren, müssen Sie einen Dateipfad angeben — im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Wenn Sie zum Beispiel eine Webseite mit einem Bild erstellen, muss Ihr Webseitencode einen Dateipfad enthalten, der den Speicherort des anzuzeigenden Bildes angibt. Lassen Sie uns ein einfaches Beispiel dafür erstellen. Sie müssen jetzt vielleicht nicht alles verstehen, was das bedeutet, aber das ist in Ordnung.

1. Erstellen Sie in Ihrem `web-projects` Ordner einen neuen Ordner namens `path-example`.
2. Besuchen Sie [Google Images](https://www.google.com/imghp), wählen Sie ein Bild aus, das Ihnen gefällt, und laden Sie es herunter.
3. Erstellen Sie in Ihrem `path-example` Ordner einen neuen Ordner namens `images`. Legen Sie Ihr heruntergeladenes Bild in diesem Ordner ab.
4. Erstellen Sie eine neue Datei namens `index.html`, und fügen Sie den folgenden Code genau so ein, wie gezeigt:

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

5. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML mitteilen, wo das Bild ist. Das Bild befindet sich im _images_-Verzeichnis, das sich im selben Verzeichnis wie `index.html` befindet. Um in der Dateistruktur von `index.html` zu unserem Bild zu navigieren, würde der erforderliche Dateipfad `images/your-image-filename` lauten. Wenn unser Bild beispielsweise `firefox-icon.png` hieße, wäre der Dateipfad `images/firefox-icon.png`.
6. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen den Anführungszeichen des `src=""`-Codes ein.
7. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser (zum Beispiel durch Doppelklick auf die Datei). Sie sollten Ihre neue Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Webseite, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umwickelt](website-screenshot.png)

Einige allgemeine Regeln für Dateipfade:

- Um auf eine Zieldatei im selben Verzeichnis wie die ausführende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um eine Datei in einem Unterverzeichnis zu referenzieren, schreiben Sie den Verzeichnisnamen vor den Pfad, plus einen Schrägstrich nach vorne, z.B. `subdirectory/my-image.jpg`.
- Um auf eine Zieldatei im Verzeichnis **oberhalb** der ausführenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` also in einem Unterordner von `test-site` wäre und `my-image.jpg` in `test-site`, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können diese beliebig kombinieren, z.B. `../subdirectory/another-subdirectory/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet in der Regel Rückwärtsschrägstriche, nicht Schrägstriche nach vorne, z.B. `C:\Windows`. Das spielt in HTML keine Rolle — auch wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code dennoch Schrägstriche nach vorne verwenden.

Für den Moment ist das alles, was Sie wissen müssen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
