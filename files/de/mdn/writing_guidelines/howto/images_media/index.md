---
title: Anleitung zum Hinzufügen von Bildern und Medien
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

## Bilder hinzufügen

Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei in den Ordner des Dokuments ein und verweisen Sie dann im `index.md`-Dokument mit der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder dem entsprechenden HTML-`<img>`-Element auf das Bild.

Gehen wir ein Beispiel durch:

1. Beginnen Sie mit einem frischen Arbeitszweig, der den neuesten Inhalt des `main`-Zweigs des `mdn`-Remotes enthält.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild in den Dokumentenordner ein. Für dieses Beispiel nehmen wir an, dass wir ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus, was meckern könnte, wenn etwas nicht stimmt. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie auf Ihr Bild im Dokument mit der Markdown-Syntax für Bilder und geben Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) in den Klammern an, der das Bild beschreibt, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie sie, und pushen Sie Ihren Zweig in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihre [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternative Texte zu Bildern hinzufügen

Jedem Bild, `![]` und `<img>`, muss ein `alt`-Text hinzugefügt werden. Alt-Attribute sollten kurz sein und alle relevanten Informationen enthalten, die das Bild vermittelt. Beim Schreiben der Bildbeschreibung sollten Sie an die wesentlichen Informationen des Bildes denken und daran, wie Sie diese Informationen jemandem vermitteln würden, der die Seiteninhalte lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der alternative Text des Bildes auf dessen Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` passend. Wenn dasselbe Foto Teil von Fluffys Tieradoptionsseite ist, sind die im Bild vermittelten Informationen für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Fell, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, daher wäre es redundant, dies hinzuzufügen. Verzichten Sie darauf, das Bild zu detailreich zu beschreiben: Der künftige Besitzer muss nicht wissen, ob der Hund drin oder draußen ist oder ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, beschreiben nicht den Inhalt des Screenshots und lassen Informationen weg, die Leser nicht benötigen oder bereits wissen. Zum Beispiel, wenn Sie auf einer Seite über das Ändern von Einstellungen in Bing sind und einen Screenshot eines Bing-Suchergebnisses haben, sollten Sie den Suchbegriff oder die Anzahl der Ergebnisse usw. nicht einschließen, da diese nicht der Punkt des Bildes sind. Begrenzen Sie das `alt` auf das aktuelle Thema: wie man Einstellungen in Bing ändert. Das `alt` könnte `alt="Das Einstellungen-Symbol befindet sich in der Navigationsleiste unterhalb des Suchfeldes."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite zum Ändern der Bing-Einstellungen befindet.

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

Während rein dekorative Bilder ein leeres `alt`-Attribut haben sollten, sollten die zu MDN-Dokumentationen hinzugefügten Bilder einen Zweck haben und daher eine Beschreibung mit einem Nicht-Null-String erfordern. Weitere Hinweise zum `alt`-Text finden Sie im [Entscheidungsbaum für Alt-Text](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein `alt`-Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf den MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich (ohne Qualitätsverlust) komprimiert sind, um die Downloadgröße für unsere Leser zu verringern. In der Tat, wenn Sie dies nicht tun, wird unser CI-Prozess fehlschlagen und die Bauergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, ist die Verwendung des integrierten Komprimierungstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der Option `--save-compression` verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos hinzufügen

MDN Web Docs ist keine sehr videolastige Seite, aber es gibt bestimmte Stellen, an denen Videoinhalte sinnvoll sind, um sie als Teil eines Artikels zu verwenden. Dieser Artikel bespricht, wann das Einfügen von Videos in Artikel angebracht ist und gibt Tipps, wie man einfache aber effektive Videos mit einem Budget erstellt.

Es gibt mehrere Argumente gegen den Einsatz von Videoinhalten in technischer Dokumentation, insbesondere für Referenzmaterialien und fortgeschrittene Leitfäden. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentation linear zu lesen, d.h. von Anfang bis Ende. _Sie überfliegen._ Video ist wirklich schwer zu überfliegen — es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist groß, was die Dateigröße betrifft, und daher teurer und weniger performant als Text.
- Video hat Zugänglichkeitsprobleme: Es ist generell teurer zu produzieren als Text, insbesondere um es zu lokalisieren oder für Benutzer von Bildschirmlesegeräten nutzbar zu machen.
- Infolge des letzten Punkts ist Video viel schwieriger zu bearbeiten/aktualisieren/warten als Textinhalt.

> [!NOTE]
> Es lohnt sich, diese Probleme im Kopf zu behalten, selbst wenn Sie Videos erstellen, damit Sie versuchen können, einige davon zu lindern.

Es gibt viele beliebte Videoseiten, die viele Video-Tutorials anbieten. MDN Web Docs ist keine videobetreibene Seite, aber Video hat in bestimmten Kontexten einen Platz auf MDN Web Docs.

Wir verwenden Videos am häufigsten, wenn wir eine Art von Anweisungssequenz oder einen mehrstufigen Workflow beschreiben, der nur schwer prägnant in Worten zu beschreiben ist: _"tun Sie dies, dann das, dann passiert das"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die über mehrere Anwendungen oder Fenster hinweg gehen und GUI-Interaktionen beinhalten, die nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf den Knopf oben links, der ein bisschen wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

<!-- Wir verwenden Videos am häufigsten, wenn wir Funktionen der [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) erklären.-->

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden, idealerweise unter 20 Sekunden zu halten. Dies ist kurz genug, um die Aufmerksamkeitsspanne der Leser nicht zu stark zu beanspruchen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu halten, bestehend aus 2-4 klar unterscheidbaren Teilen. Dadurch wird es einfacher, ihnen zu folgen.
- **Stumm**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwändiger in der Herstellung. Es zu erklären, was Sie tun, macht die Videos auch viel länger und erhöht die Kosten (sowohl finanziell als auch in Bezug auf die Zeit) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, durchsetzt mit Text. Der Text kann helfen, die im Video gemachten Punkte zu verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, je nachdem, was ihm besser gefällt. Siehe [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Zusätzlich sollten Sie die folgenden Tipps beachten:

- Das Video wird letztendlich vor dem Einbetten auf YouTube hochgeladen. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diesen Gebrauch, damit es den gesamten Anzeigebereich ausfüllt und Sie keine unschönen schwarzen Balken oben und unten (oder links und rechts) auf Ihrem Video haben. Sie könnten beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Zeichnen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zur Seiteninhaltsfarbe zu wählen. Wählen Sie zum Beispiel das dunkle Thema, wenn die Beispielwebseite hell gestaltet ist. Es ist einfacher zu sehen, was passiert und wo die DevTools beginnen und die Seite endet.
- Zoomen Sie bei DevTools-Videos die DevTools so weit wie möglich, während Sie alles zeigen, was Sie zeigen möchten, und es soll in Ordnung aussehen.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht durch den Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

## Richtlinien für Videotools

Sie benötigen ein Tool zur Aufzeichnung des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung im Erstellen von Videoinhalten haben, großartig. Wenn nicht, empfehlen wir Ihnen, mit einem einfachen Tool zu beginnen und dann zu etwas Komplexerem überzugehen, wenn Sie anfangen, Freude am Erstellen von Videoinhalten zu haben und interessantere Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Startertools:

| Tool                      | OS                    | Kosten    | Funktionen zur Nachbearbeitung verfügbar? |
| ------------------------- | --------------------- | --------- | ----------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                        |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                                  |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                        |
| QuickTime Player          | macOS                 | Kostenlos | Nein, nur zur einfachen Aufnahme          |
| ScreenFlow                | macOS                 | Mittel    | Ja                                        |
| Kazam                     | Linux                 | Kostenlos | Minimal                                   |

### Tipps für QuickTime Player

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahmeschritte mit diesem Tool sind recht einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. In dem _Bildschirmaufnahme_-Fenster drücken Sie die Aufnahmetaste (den roten Rundknopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufnahme starten_-Taste.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stopp_-Taste.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um es in hoher Auflösung zu speichern.

### Weitere Ressourcen

- [Anleitung zur Hinzufügung von benutzerdefinierten Callouts zu Screencast-Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Ablauf zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen möchten, um ein Video zu erstellen und es in einen Artikel von MDN Web Docs einzufügen.

### Vorbereitung

Planen Sie zunächst den Ablauf, den Sie aufnehmen möchten: Überlegen Sie sich die besten Start- und Endpunkte.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen werden, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufzeichnen:

- Beginnen Sie ein Video nicht mitten in einem Prozess — überlegen Sie, ob der Betrachter genug Kontext für Ihre Aktionen hat, um sie nachvollziehen zu können. In einem kurzen DevTools-Video ist es zum Beispiel eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit sich der Betrachter orientieren kann.
- Überlegen Sie sich, was Ihre Aktionen sind, verlangsamen Sie und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z.B. ein Symbol anklicken), nehmen Sie sich Zeit und machen Sie sie offensichtlich. Zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Hervorheben oder Hineinzoomen (nicht immer, je nachdem, ob es nötig erscheint).
  - Eine kurze Pause einlegen.
  - Auf das Symbol klicken.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen werden. Nicht jeder kann Ihr Video in hoher Qualität ansehen. Sie werden in der Lage sein, bestimmte Teile in der Nachbearbeitung zu vergrößern, aber es ist eine gute Idee, die App auch vorher zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, ungewohnt oder hässlich aussehen.

### Aufzeichnung

Wenn Sie den Workflow, den Sie zeigen möchten, aufnehmen, gehen Sie den Ablauf reibungslos und stetig durch. Machen Sie eine Pause für ein oder zwei Sekunden, wenn Sie an wichtigen Momenten sind — zum Beispiel, wenn Sie kurz davor sind, eine Schaltfläche zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die wichtig sind für das, was Sie demonstrieren möchten.

Denken Sie daran, am Ende eine Pause von ein oder zwei Sekunden einzulegen, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und aus irgendeinem Grund eine Nachbearbeitung nicht möglich ist, sollten Sie Ihre Fenster auf die richtige Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster das richtige Seitenverhältnis für die Aufzeichnung hat.

### Nachbearbeitung

Sie können Schlüsselmomente in der Nachbearbeitung hervorheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren werden, wie:

- Vergrößern eines Teils des Bildschirms.
- Ausblenden des Hintergrunds.

Heben Sie Schlüsselmomente des Workflows hervor, insbesondere dort, wo die Details schwer zu erkennen sind: das Klicken auf ein bestimmtes Symbol oder das Eingeben einer bestimmten URL beispielsweise. Versuchen Sie, das Highlight 1-2 Sekunden lang andauern zu lassen. Es ist eine gute Idee, am Anfang und am Ende der Highlights eine kurze Übergangszeit (200-300 Millisekunden) hinzuzufügen.

Gebrauchen Sie hier etwas Zurückhaltung: Machen Sie das Video nicht zu einer ständigen Abfolge von Zoom-Ins und -Outs, sonst wird den Betrachtern schwindelig.

Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

### Hochladen

Zurzeit müssen Videos auf YouTube hochgeladen werden, um auf den MDN Web Docs angezeigt zu werden, zum Beispiel auf den [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Fragen Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, dann tut es das wahrscheinlich nicht).

### Einbetten

Sobald es hochgeladen ist, können Sie das Video auf der Seite mit dem [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs)-Makro einbetten. Dies wird verwendet, indem folgendes auf Ihrer Seite an der Stelle eingefügt wird, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die vom Makroaufruf genommen wird, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL. Wenn die Video-URL beispielsweise `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, lautet der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
