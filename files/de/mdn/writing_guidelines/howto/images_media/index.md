---
title: Anleitung zum Hinzufügen von Bildern, Medien und Ressourcen
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen.

## Medien mit shared-assets speichern und verwenden

Bevor Sie Bilder oder Medien hinzufügen (insbesondere bei der Demonstration einer Technologie, bei der der Medieninhalt zweitrangig ist), prüfen Sie, ob es etwas gibt, das Sie bereits im [mdn/shared-assets Repository](https://github.com/mdn/shared-assets) verwenden können. Behandeln Sie dieses Repository als **Mediathek**, die Sie durchstöbern können, um eine geeignete Ressource für ein Beispiel auszuwählen, ohne sich um Speicherung, Bereitstellung oder Lizenzierung kümmern zu müssen.

Das Repository enthält Audios, Videos, Schriftarten, Bilder wie Fotos, Diagramme und Symbole sowie verschiedene Dateien wie PDFs, Untertiteldateien, Farbprofile usw. Wenn im Repository nichts Passendes vorhanden ist, können Sie Ihre Ressourcen zusammen mit Quell-Dateien für die Medien, die Sie einfügen möchten, hinzufügen. Sie finden Beispiele im [HTTP-Verzeichnis der shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Um etwas aus dem shared-assets Repository auf einer MDN-Seite zu verwenden, siehe den Abschnitt [Verwendung von geteilten Assets in der Dokumentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) im Projekt-README.

## Verwendung von Vektorformaten

Im Allgemeinen, wenn Sie Bilder hinzufügen, insbesondere Diagramme, sollten Sie erwägen, ein Vektorformat wie SVG aus den folgenden Gründen zu verwenden:

- **Autoren können SVG direkt bearbeiten**, indem sie beliebige IDEs oder Online-Tools verwenden. Das Bearbeiten einer .png enthält in der Regel die Neuerstellung eines Assets von Grund auf oder die Verwendung von Bildbearbeitungssoftware, was fehleranfällig ist und visuelle oder Kompressionsartefakte einführen kann.
- **SVG kann von Git differenziert werden**. Im Gegensatz dazu wird eine gesamte Datei bei Änderungen an Binärdateien als Änderung differenziert, sodass eine .png von 1 MB die Repository-Größe bei jedem Merge-Commit um 1 MB erhöht, wenn sie geändert wurde.
- **Flexibles UX**. SVG-Dateien sind Vektorformate und erscheinen daher nicht unscharf bei jeder Skalierung.

## Bilder in Inhalts-Repositories commiten

Wenn das shared-assets Repository für Ihren Anwendungsfall nicht geeignet ist, können Sie Bilder zu einem Inhalts-Repository (en-US oder translated-content) hinzufügen. Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei zum Dokumentordner hinzu und referenzieren Sie das Bild dann aus der `index.md`-Datei des Dokuments mit [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder dem entsprechenden HTML-`<img>`-Element.

Gehen wir ein Beispiel durch:

1. Starten Sie mit einem neuen Arbeitsbranch mit den neuesten Inhalten vom `main` Branch des `mdn` remotes.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to make sure dependencies are up-to-date
   npm install
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild zum Dokumentordner hinzu. Für dieses Beispiel nehmen wir an, dass wir ein neues Bild zum `files/en-us/web/css` Dokument hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` auf jedem Bild aus, das möglicherweise klagen kann, wenn etwas nicht stimmt. Für weitere Details siehe den Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   npm run filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument mit der Markdown-Syntax für Bilder, und bieten Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) zwischen den Klammern, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut innerhalb `files/en-us/web/css/index.md` hinzu:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu, committen Sie sie und pushen Sie Ihren Branch zu Ihrem Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Nun sind Sie bereit, Ihren [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss `alt`-Text enthalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen enthalten, die das Bild vermittelt. Wenn Sie die Bildbeschreibung schreiben, denken Sie an die wertvollen Informationen des Bildes und wie Sie diese Informationen an jemanden weitergeben würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext des Bildes auf seinem Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil von Fluffy's Tierrettungs-Adoptionsseite ist, sind die Informationen, die im Bild vermittelt werden, für zukünftige Hundeeltern relevant, wie z.B. `alt="Fluffy, ein dreifarbiges Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, also wäre es überflüssig, dies einzuschließen. Verzichten Sie darauf, das Bild zu genau zu beschreiben: Der potenzielle Halter muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, nicht die Inhalte des Screenshots im Detail und lassen Sie Informationen aus, die Leser nicht benötigen oder bereits kennen. Wenn Sie zum Beispiel auf einer Seite über das Ändern von Einstellungen bei Bing sind, wenn Sie einen Screenshot von einem Bing-Suchergebnis haben, schließen Sie nicht den Suchbegriff oder die Anzahl der Ergebnisse usw. ein, da dies nicht der Punkt des Bildes ist. Beschränken Sie den alt auf das Thema: wie man Einstellungen in Bing ändert. Der alt könnte `alt="Das Einstellungs-Symbol befindet sich in der Navigationsleiste unterhalb des Suchfeldes."` sein. Schließen Sie nicht "Screenshot" oder "Bing" ein, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite befindet, die das Ändern von Bingeinstellungen erklärt.

Die Syntax in Markdown und HTML:

```md-nolint
![<alt-text>](<url-of-image>)
<img alt="<alt-text>" src="<url-of-image>">
```

Beispiele:

```md
![OpenWebDocs Logo: Carle the book worm](carle.png)
<img alt="OpenWebDocs Logo: Carle the book worm" src="carle.png" />
```

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die der MDN-Dokumentation hinzugefügt werden, einen Zweck haben und daher eine Beschreibung mit nicht-leerem String erfordern. Für Hinweise zum Alt-Text siehe [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf den MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne Qualitätsverlust), um die Download-Größe für unsere Leser zu sparen. Tatsächlich, wenn Sie das nicht tun, wird unser CI-Prozess fehlschlagen und die Bau-Ergebnisse werden Sie warnen, dass einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, ist die Verwendung des eingebauten Kompressionstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der Option `--save-compression` verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt die Originalversion mit der komprimierten Version. Zum Beispiel:

```bash
npm run filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine sehr video-lastige Seite, aber es gibt bestimmte Stellen, an denen Videoinhalte als Teil eines Artikels Sinn machen. Dieser Artikel diskutiert, wann das Einfügen von Videos in Artikel angebracht ist, und bietet Tipps, wie man einfache, aber effektive Videos mit kleinem Budget erstellt.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterial und Anleitungen auf fortgeschrittenem Niveau. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentation linear zu lesen, indem sie am Anfang anfangen und bis zum Ende lesen. _Sie scannen._ Video ist wirklich schwer zu scannen — es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video zu konsumieren, das etwas erklärt, als die entsprechenden Anleitungen zu lesen.
- Video ist groß in Bezug auf die Dateigröße und daher teurer und weniger leistungsfähig als Text.
- Video hat Zugänglichkeitsprobleme: Es ist im Allgemeinen teurer zu produzieren als Text, insbesondere zu lokalisieren oder für Screenreader-Benutzer nutzbar zu machen.
- Anknüpfend an den letzten Punkt ist Video viel schwieriger zu bearbeiten/aktualisieren/zu pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, sogar wenn Sie Videos machen, damit Sie versuchen können, einige davon zu lindern.

Es gibt viele beliebte Videoseiten, die viele Video-Tutorials bieten. MDN Web Docs ist keine video-gesteuerte Seite, aber Video hat seinen Platz auf MDN Web Docs in bestimmten Kontexten.

Wir neigen dazu, Video am häufigsten zu verwenden, wenn eine Art von Anleitungssequenz oder ein mehrstufiger Workflow beschrieben wird, der schwer in Worten zusammenzufassen wäre: _"machen Sie das, dann machen Sie das, dann wird das passieren"_. Es ist besonders nützlich, wenn Prozesse beschrieben werden sollen, die sich über mehrere Anwendungen oder Fenster erstrecken und die GUI-Interaktionen beinhalten, die vielleicht nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf die Schaltfläche oben links, die ein bisschen wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

### Richtlinien für Videoinhalte

Videoinhalt für MDN Web Docs sollte:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden, idealerweise unter 20 Sekunden zu halten. Das ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu halten, 2-4 unterschiedliche Teile. Das macht sie einfacher zu folgen.
- **Stumm**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwendiger zu machen. Außerdem macht es das Erklären von Dingen nötig, was die Videos viel länger macht und zu den Kosten (sowohl finanziell als auch zeitlich) der Lokalisierung beiträgt.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, unterbrochen von Text. Der Text kann die im Video gemachten Punkte verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, je nach Wahl. Siehe [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Zusätzlich sollten Sie die folgenden Tipps in Betracht ziehen:

- Das Video wird letztendlich vor dem Einbetten auf YouTube hochgeladen. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} dafür, so dass es den gesamten Betrachtungsrahmen ausfüllt und Sie nicht mit hässlichen schwarzen Balken oben und unten (oder links und rechts) in Ihrem Video enden. Beispielsweise könnten Sie eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, so dass es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zum Seiteninhalt zu wählen. Beispielsweise wählen Sie das dunkle Thema, wenn die Beispielwebseite ein helles Thema hat. Es ist einfacher zu sehen, was passiert und wo die DevTools anfangen und das Seitenende ist.
- Für DevTools-Videos zoomen Sie die DevTools, so viel wie möglich, während Sie immer noch alles zeigen, was Sie zeigen möchten, und es gut aussehen lassen.
- Stellen Sie sicher, dass das, was Sie zu demonstrieren versuchen, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Screen-Recording-Tool so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

### Video-Tools und Software

Sie benötigen ein Werkzeug, um das Video aufzunehmen. Diese reichen von kostenlosen bis zu teuren und von einfachen bis zu komplexen. Wenn Sie bereits Erfahrung in der Erstellung von Videoinhalten haben, dann großartig. Falls nicht, dann empfehlen wir Ihnen, mit einem einfachen Tool zu beginnen und dann zu etwas Komplexerem überzugehen, wenn Sie anfangen, Freude am Erstellen von Videoinhalten zu finden und mehr interessante Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Anfänger-Tools:

| Tool                      | OS                    | Kosten | Nachbearbeitungsfunktionen verfügbar? |
| ------------------------- | --------------------- | ------ | ------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Frei   | Ja                                    |
| CamStudio                 | Windows               | Frei   | Begrenzt                              |
| Camtasia                  | Windows, macOS        | Hoch   | Ja                                    |
| QuickTime Player          | macOS                 | Frei   | Nein, nur einfaches Aufnehmen         |
| ScreenFlow                | macOS                 | Mittel | Ja                                    |
| Kazam                     | Linux                 | Frei   | Minimal                               |

#### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie im Hauptmenü _Datei_ > _Neue Bildschirmaufnahme_.
2. In der _Bildschirmaufnahme_-Box drücken Sie die Aufnahme-Taste (die runde rote Taste).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufzeichnung starten_ Taste.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stop_ Taste.
7. Wählen Sie im Hauptmenü _Datei_ > _Exportieren als..._ > _1080p_ aus, um es in hoher Definition zu speichern.

### Weitere Ressourcen

- [Anleitung zum Hinzufügen benutzerdefinierter Callouts zu Screencast-Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Workflow zur Erstellung von Videos

Die folgenden Abschnitte beschreiben die allgemeinen Schritte, die Sie befolgen möchten, um ein Video zu erstellen und es zu einem MDN Web Docs Artikel hinzuzufügen.

Planen Sie zunächst den Ablauf, den Sie einfangen möchten: Überlegen Sie sich die besten Punkte zum Starten und Beenden. Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browserprofil sauber sind. Planen Sie die Größe und Positionierung von Browserfenstern, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen werden, und üben Sie die Schritte ein paar Mal vor der Aufzeichnung:

- Beginnen Sie kein Video mitten in einem Prozess — überlegen Sie sich, ob der Betrachter genug Kontext für Ihre Aktionen haben wird, um sie zu verstehen. In einem kurzen DevTools-Video ist es zum Beispiel eine gute Idee, mit dem Öffnen der DevTools zu beginnen, um dem Betrachter Orientierung zu geben.
- Überlegen Sie sich, was Ihre Aktionen sind, verlangsamen Sie und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z.B. ein Symbol anklicken), verlangsamen Sie und machen Sie es offensichtlich. Also zum Beispiel:
  - Bewegen Sie die Maus über das Symbol.
  - Hervorheben oder heranzoomen (nicht immer, je nachdem, ob es nötig erscheint).
  - Halten Sie eine kurze Pause.
  - Klicken Sie auf das Symbol.

- Planen Sie Zoom-Stufen für die Teile der Benutzeroberfläche, die Sie zeigen werden. Nicht jeder wird Ihr Video in hoher Auflösung anschauen können. Sie werden in der Lage sein, bestimmte Teile in der Nachbearbeitung zu vergrößern, aber es ist eine gute Idee, die App vorher ebenfalls zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, unkenntlich oder hässlich aussehen.

#### Aufnahme

Wenn Sie den Workflow aufnehmen, den Sie zeigen möchten, gehen Sie den Ablauf reibungslos und stetig durch. Halten Sie für ein oder zwei Sekunden inne, wenn Sie an Schlüsselstellen sind — zum Beispiel, wenn Sie dabei sind, auf einen Button zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das, was Sie demonstrieren möchten, wichtig sind.

Denken Sie daran, für ein oder zwei Sekunden am Ende zu pausieren, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster in der richtigen Größe einrichten, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Viewport das richtige Aspect Ratio für die Aufnahme hat.

#### Nachbearbeitung

Sie werden in der Lage sein, Schlüsselstellen in der Nachbearbeitung hervorzuheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren werden, wie zum Beispiel:

- Vergrößern Sie Teile des Bildschirms.
- Blenden Sie den Hintergrund aus.

Heben Sie die Schlüsselmomente des Workflows hervor, insbesondere dort, wo das Detail schwer zu sehen ist: auf ein bestimmtes Symbol klicken oder eine bestimmte URL eingeben, zum Beispiel. Das Highlight sollte 1-2 Sekunden dauern. Es ist eine gute Idee, einen kurzen Übergang (200-300 Millisekunden) am Anfang und Ende der Highlights hinzuzufügen.

Verwenden Sie hier etwas Zurückhaltung: Machen Sie das Video nicht zu einem ständigen Zug von Vergrößerungen, sonst bekommen Zuschauer Seekrankheit. Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

#### Hochladen und Einbetten von Videos

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, zum Beispiel auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie selbst keinen geeigneten Ort haben, um es hochzuladen.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, dann tut es das wahrscheinlich nicht).

### Einbetten

Sobald es hochgeladen ist, können Sie das Video auf der Seite mit dem [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs) Makro einbetten. Dies wird verwendet, indem Sie das folgende in Ihrer Seite an der Position einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die vom Makroaufruf übernommen wird, ist die Zeichenkette am Ende der Video-URL, nicht die gesamte URL. Zum Beispiel, wenn die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, wird der erforderliche Makroaufruf lauten:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [Verwendung von SVG-Format anstelle von .png-Bildern](https://github.com/orgs/mdn/discussions/631) MDN GitHub Diskussion
