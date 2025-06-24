---
title: Wie man Bilder, Medien und Assets hinzufügt
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen.

## Speichern und Verwenden von Medien mit shared-assets

Bevor Sie irgendwelche Bilder oder Medien hinzufügen (insbesondere wenn Sie eine Technologie demonstrieren, bei der der Medieninhalt zweitrangig ist), prüfen Sie, ob es etwas gibt, das Sie bereits im [mdn/shared-assets repository](https://github.com/mdn/shared-assets) verwenden können. Behandeln Sie dieses Repository als **Medienbibliothek**, die Sie durchsuchen können, um eine geeignete Ressource für ein Beispiel auszuwählen, ohne sich Gedanken über Speicherplatz, Bereitstellung oder Lizenzierung machen zu müssen.

Das Repository enthält Audio, Video, Schriftarten, Bilder wie Fotos, Diagramme und Symbole sowie verschiedene Dateien wie PDFs, Untertiteldateien, Farbprofile und so weiter. Falls das Repository nichts Passendes enthält, können Sie Ihre Ressourcen zusammen mit den Quelldateien für die Medien, die Sie einbinden möchten, hinzufügen. Beispiele finden Sie im [HTTP-Verzeichnis des shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http) Repository.

Um etwas aus dem shared-assets Repository in einer MDN-Seite zu verwenden, siehe den Abschnitt [Using shared assets in documentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) des Projekt-READMEs.

## Verwendung von Vektorformaten

Im Allgemeinen sollten Sie, wenn Sie Bilder hinzufügen, insbesondere Diagramme, die Verwendung eines Vektorformats wie SVG in Betracht ziehen, aus den folgenden Gründen:

- **Autoren können SVG direkt bearbeiten** mit jedem IDE oder Online-Tools. Die Bearbeitung einer .png erfordert in der Regel die Neuerstellung eines Assets von Grund auf oder die Verwendung von Bildbearbeitungssoftware, was fehleranfällig ist und visuelle- oder Kompressionsartefakte einführen kann.
- **SVG kann von Git verglichen werden**. Im Gegensatz dazu wird eine gesamte Datei bei einer Änderung der Binärdateien als Änderung betrachtet, sodass eine .png, die 1MB groß ist, jedes Mal, wenn sie geändert wurde, die Repository-Größe um 1MB bei jedem Merge-Commit erhöht.
- **Flexibles Benutzererlebnis**. SVGs sind Vektorformate, sodass sie bei jeder Skalierung nicht verschwommen erscheinen.

## Bilder in Inhaltsrepositories einfügen

Wenn das shared-assets Repository nicht für Ihren Anwendungsfall geeignet ist, können Sie Bilder zu einem Inhalts- (en-US oder translated-content) Repository hinzufügen. Um ein Bild zu einem Dokument hinzuzufügen, platzieren Sie Ihre Bilddatei im Verzeichnis des Dokuments und referenzieren Sie dann das Bild innerhalb der `index.md` Datei des Dokuments unter Verwendung der [Markdown Bildsyntax](https://github.github.com/gfm/#images) oder dem entsprechenden HTML `<img>` Element.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem frischen Arbeitszweig mit dem neuesten Inhalt vom `main` Zweig des `mdn` Remote.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" to make sure dependencies are up-to-date
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild dem Dokumentenordner hinzu. Für dieses Beispiel nehmen wir an, dass wir ein neues Bild zum `files/en-us/web/css` Dokument hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus, das möglicherweise Beschwerden auslöst, wenn etwas falsch ist. Für weitere Details siehe den Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument, indem Sie die Markdown-Syntax für Bilder verwenden und zwischen den Klammern [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) angeben, der das Bild beschreibt, oder fügen Sie ein {{htmlelement("img")}} Element mit `alt` Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu, commiten Sie diese und pushen Sie Ihren Branch zu Ihrem Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihren [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss `alt`-Text enthalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen enthalten, die das Bild vermittelt. Beim Verfassen der Bildbeschreibung sollten Sie darüber nachdenken, welche wertvollen Informationen das Bild vermittelt und wie Sie diese Informationen an jemanden weitergeben würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext für das Bild auf dessen Kontext basiert. Wenn das Foto von Fluffy, dem Hund, ein Avatar neben einer Bewertung von Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Ist dasselbe Foto Teil von Fluffys Tieradoptionsseite, sind die im Bild enthaltenen Informationen für potenzielle Hundebesitzer relevant, z.B. `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text bezieht wahrscheinlich Fluffys Größe und Rasse ein, sodass es überflüssig wäre, diese zu erwähnen. Vermeiden Sie es, das Bild zu detailliert zu beschreiben: Der potenzielle Besitzer muss nicht wissen, ob der Hund drinnen oder draußen ist oder ob er ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots beschreiben Sie, was Sie aus dem Bild erfahren, aber detaillieren Sie nicht den Inhalt des Screenshots, und lassen Sie Informationen weg, die die Leser nicht benötigen oder bereits wissen. Wenn Sie sich beispielsweise auf einer Seite über das Ändern von Einstellungen auf Bing befinden und einen Screenshot eines Bing-Suchergebnisses haben, sollten Sie den Suchbegriff oder die Anzahl der Ergebnisse nicht einschließen, da diese nicht das Thema des Bildes sind. Begrenzen Sie das `alt` auf das aktuelle Thema: wie man die Einstellung in Bing ändert. Der `alt` könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Nutzer nicht wissen muss, dass es ein Screenshot ist und bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite befindet, die das Ändern der Bing-Einstellungen erklärt.

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

Während reine Dekoelemente ein leeres `alt` haben sollten, sollten Bilder, die zur MDN-Dokumentation hinzugefügt werden, einen Zweck erfüllen und daher eine nicht-leere Beschreibung erfordern. Für Hinweise zum Alt-Text siehe [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein `alt` Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne die Qualität zu beeinträchtigen), um die Downloadgröße für unsere Leser zu sparen. Tatsächlich wird unser CI-Prozess fehlschlagen und die Bauresultate werden Sie warnen, dass einige Ihrer Bilder zu groß sind, wenn Sie dies nicht tun.

Der beste Weg, um die Bilder zu komprimieren, ist die Verwendung des eingebauten Komprimierungstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der `--save-compression` Option verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original mit der komprimierten Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine sehr stark video-basierte Seite, aber es gibt bestimmte Stellen, an denen Videoinhalte sinnvoll als Teil eines Artikels verwendet werden können. Dieser Artikel erörtert, wann das Hinzufügen von Videos in Artikeln angemessen ist und bietet Tipps, wie man einfache, aber effektive Videos mit geringem Budget erstellen kann.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterial und Leitfäden für fortgeschrittene Ebenen. Einige dieser Argumente sind unten aufgeführt:

- Video ist linear. Leute lesen Online-Dokumentationen in der Regel nicht von Anfang bis Ende. _Sie überfliegen sie._ Video ist wirklich schwer zu überfliegen – es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, sich ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist bezüglich der Dateigröße groß und somit teurer und weniger leistungsfähig als Text.
- Video hat Barrierefreiheitsprobleme: Es ist im Allgemeinen teurer zu produzieren als Text, insbesondere, um es zu lokalisieren oder für Screenreader-Nutzer zugänglich zu machen.
- Im Anschluss an den letzten Punkt ist Video viel schwieriger zu bearbeiten, zu aktualisieren und zu pflegen als Text.

> [!NOTE]
> Es ist ratsam, diese Probleme im Hinterkopf zu behalten, selbst wenn man Videos erstellt, um einige von ihnen zu mildern.

Es gibt viele beliebte Videoseiten, die zahlreiche Video-Tutorials bieten. MDN Web Docs ist keine video-gesteuerte Seite, aber Video hat in bestimmten Kontexten seinen Platz auf MDN Web Docs.

Wir verwenden Videos am häufigsten, wenn wir eine Art Handlungskette oder mehrstufigen Arbeitsablauf beschreiben, die schwer in Worten knapp zu beschreiben wäre: _"machen Sie dies, dann machen Sie das, dann passiert das"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die mehrere Anwendungen oder Fenster umfassen und die GUI-Interaktionen beinhalten, die nicht einfach zu beschreiben sind: _"jetzt klicken Sie auf die Schaltfläche oben links, die ein wenig wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was man meint.

### Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden. Dies ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Arbeitsablauf einfach zu gestalten, 2-4 unterschiedliche Teile. Dies macht es einfacher zu folgen.
- **Still**: Audio macht Videos viel ansprechender, aber es ist mit wesentlich mehr Zeitaufwand verbunden, um sie zu erstellen. Auch das Erklären, was Sie tun, macht die Videos viel länger und erhöht die Kosten (sowohl finanziell als auch zeitlich) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, die mit Text durchsetzt sind. Der Text kann die im Video gemachten Punkte verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, wie er möchte. Siehe [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Darüber hinaus sollten Sie die folgenden Tipps in Betracht ziehen:

- Das Video wird letztendlich auf YouTube hochgeladen, bevor es eingebettet wird. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diese Verwendung, damit es den gesamten Betrachtungsrahmen ausfüllt und Sie keine hässlichen schwarzen Balken oben und unten (oder links und rechts) des Videos haben. Zum Beispiel könnten Sie eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Zeichnen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zum Seiteninhalt zu wählen. Zum Beispiel das dunkle Thema, wenn die Beispielswebseite hell gestaltet ist. Es ist einfacher zu sehen, was passiert und wo die DevTools beginnen und die Seite endet.
- Für DevTools-Videos zoomen Sie die DevTools so weit wie möglich, während Sie weiterhin alles zeigen, was Sie zeigen möchten und dass es immer noch gut aussieht.
- Achten Sie darauf, dass das, was Sie demonstrieren möchten, nicht vom Mauszeiger verdeckt wird.
- Erwägen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass es einen visuellen Indikator für Mausklicks hinzufügt.

### Video-Tools und Software

Sie benötigen ein Tool zum Aufzeichnen des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung in der Erstellung von Videoinhalten haben, großartig. Wenn nicht, würden wir empfehlen, dass Sie mit einem einfachen Tool beginnen und dann zu etwas Komplexerem übergehen, wenn Sie anfangen, Freude an der Erstellung von Videoinhalten zu finden und interessantere Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Starter-Tools:

| Tool                      | Betriebssystem        | Kosten    | Nachbearbeitungsfunktionen verfügbar?  |
| ------------------------- | --------------------- | --------- | -------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                     |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                               |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                     |
| QuickTime Player          | macOS                 | Kostenlos | Nein, ermöglicht nur einfache Aufnahme |
| ScreenFlow                | macOS                 | Mittel    | Ja                                     |
| Kazam                     | Linux                 | Kostenlos | Minimal                                |

#### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahme mit diesem Tool ist ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Klicken Sie im _Screen Recording_ Fenster auf den Aufnahmebutton (der runde rote Knopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie den _Aufnahme starten_ Button.
5. Führen Sie die Aktionen aus, die Sie aufzeichnen möchten.
6. Drücken Sie den _Stopp_ Button.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um in HD zu speichern.

### Weitere Ressourcen

- [How to Add Custom Callouts to Screencast Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Arbeitsablauf zur Erstellung von Videos

Die folgenden Abschnitte beschreiben die allgemeinen Schritte, die Sie befolgen müssen, um ein Video zu erstellen und es einem Artikel auf MDN Web Docs hinzuzufügen.

Zuerst planen Sie den Ablauf, den Sie aufzeichnen möchten: Überlegen Sie, was die besten Start- und Endpunkte sind. Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufzeichnen möchten und üben Sie die Schritte ein paar Mal, bevor Sie sie aufnehmen:

- Beginnen Sie ein Video nicht mitten in einem Prozess – überlegen Sie, ob der Betrachter genügend Kontext für Ihre Aktionen hat, um sie zu verstehen. In einem kurzen DevTools Video ist es beispielsweise eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit der Betrachter sich orientieren kann.
- Überlegen Sie, welche Aktionen Sie ausführen, verlangsamen Sie und machen Sie sie offensichtlich. Immer wenn Sie eine Aktion ausführen müssen (z.B. auf ein Symbol klicken), seien Sie langsam und machen Sie es offensichtlich. So, zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Hervorheben oder zoomen (nicht immer, je nachdem, ob es notwendig erscheint).
  - Halten Sie kurz inne.
  - Klicken Sie auf das Symbol.

- Planen Sie Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen wollen. Nicht jeder wird in der Lage sein, Ihr Video in HD zu betrachten. Sie werden in der Lage sein, bestimmte Teile in der Nachbearbeitung zu zoomen, aber es ist eine gute Idee, die App zuvor ebenfalls zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, unkenntlich oder unschön aussehen.

#### Aufnahme

Wenn Sie den gewünschten Arbeitsablauf aufzeichnen, gehen Sie den Ablauf gleichmäßig und stetig durch. Halten Sie für eine Sekunde oder zwei an, wenn Sie an entscheidenden Momenten sind – zum Beispiel, wenn Sie im Begriff sind, auf eine Schaltfläche zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das Demonstrieren des Ablaufs wichtig sind.

Denken Sie daran, am Ende eine Sekunde oder zwei innezuhalten, um das Ergebnis des Prozesses zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Werkzeug wie QuickTime Player verwenden und Nachbearbeitung aus irgendeinem Grund nicht möglich ist, sollten Sie Ihre Fenster in der richtigen Größe einrichten, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster das richtige Seitenverhältnis für die Aufnahme hat.

#### Nachbearbeitung

In der Nachproduktion können Sie entscheidende Momente hervorheben. Ein Highlight kann aus einigen Dingen bestehen, die man oft kombiniert, wie:

- Zoomen Sie auf Teile des Bildschirms.
- Blenden Sie den Hintergrund aus.

Heben Sie die entscheidenden Momente des Arbeitsablaufs hervor, besonders dort, wo das Detail schwer zu sehen ist: zum Beispiel beim Klicken auf ein bestimmtes Symbol oder beim Eingeben einer bestimmten URL. Ziel ist es, dass das Highlight 1-2 Sekunden dauert. Es ist eine gute Idee, einen kurzen Übergang (200-300 Millisekunden) am Anfang und Ende der Highlights hinzuzufügen.

Verwenden Sie hier etwas Zurückhaltung: Machen Sie das Video nicht zu einer ständigen Abfolge von Herein- und Herauszoomen, da die Zuschauer sonst seekrank werden. Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

#### Hochladen und Einbetten von Videos

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, beispielsweise auf den [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs Teams, das Video hochzuladen, falls Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontextes der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, dann tut es das wahrscheinlich nicht).

### Einbetten

Nach dem Hochladen können Sie das Video auf der Seite unter Verwendung des [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs) Makros einbetten. Dazu müssen Sie Folgendes an der Stelle in Ihrer Seite einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die der Makroaufruf erfordert, ist die Zeichenfolge am Ende der Video-URL, nicht die ganze URL. Wenn die Video-URL beispielsweise `https://www.youtube.com/watch?v=ELS2OOUvxIw` lautet, wäre der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [Using SVG format instead of .png images](https://github.com/orgs/mdn/discussions/631) MDN GitHub-Diskussion
