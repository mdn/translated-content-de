---
title: Wie man Bilder und Medien hinzufügt
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, legen Sie Ihre Bilddatei in den Dokumentordner und referenzieren Sie dann das Bild innerhalb der `index.md` Datei des Dokuments mithilfe der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder des entsprechenden HTML `<img>` Elements.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem neuen Arbeitszweig mit dem neuesten Inhalt aus dem `main` Zweig des `mdn` Remotes.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild zum Dokumentordner hinzu. Für dieses Beispiel nehmen wir an, dass wir ein neues Bild zum `files/en-us/web/css` Dokument hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus, was möglicherweise Beanstandungen bringen könnte, wenn etwas nicht stimmt. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie im Dokument auf Ihr Bild unter Verwendung der Markdown-Syntax für Bilder und stellen Sie [beschreibenden Text für das `alt` Attribut](/de/docs/Learn/Accessibility/HTML#text_alternatives) in den Klammern bereit, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}} Element mit `alt` Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und führen Sie einen Commit aus, sowie schieben Sie Ihren Zweig auf Ihr Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Nun sind Sie bereit, Ihren [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss einen `alt` Text enthalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen, die das Bild vermittelt, bereitstellen. Wenn Sie die Bildbeschreibung schreiben, überlegen Sie, welche wertvollen Informationen das Bild enthält und wie Sie diese Informationen an jemanden weitergeben würden, der den Seiteninhalt lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext des Bildes auf seinem Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat Hundeessen ist, ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil von Fluffys Tieradoptionsseite ist, sind die im Bild vermittelten Informationen relevant für potenzielle Hundebesitzer, wie `alt="Fluffy, ein dreifarbiges Terrier mit sehr kurzem Fell, mit einem Tennisball im Maul."`. Der umgebende Text hat wahrscheinlich Fluffys Größe und Rasse, daher wäre es redundant, dies zu wiederholen. Vermeiden Sie es, das Bild zu detailliert zu beschreiben: Der potenzielle Besitzer muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, und geben Sie nicht die Inhalte des Screenshots im Detail wieder, und lassen Sie Informationen weg, die die Leser nicht benötigen oder bereits wissen. Zum Beispiel, wenn Sie auf einer Seite über das Ändern von Einstellungen auf Bing sind und einen Screenshot eines Bing-Suchergebnisses haben, geben Sie nicht den Suchbegriff oder die Anzahl der Ergebnisse an, usw., da dies nicht der Punkt des Bildes ist. Begrenzen Sie den `alt` auf das Thema: wie man Einstellungen auf Bing ändert. Der `alt` könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und bereits weiß, dass es Bing ist, da er sich auf einer Seite befindet, die das Ändern von Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die zu MDN-Dokumentationen hinzugefügt werden, einen Zweck haben und daher eine Nicht-Leer-Zeichenfolge-Beschreibung erfordern.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf den MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne Qualitätsverlust), um die Download-Größe für unsere Leser zu reduzieren. Tatsächlich wird unser CI-Prozess fehlschlagen und die Build-Ergebnisse werden Sie warnen, wenn einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, ist das eingebaute Komprimierungstool zu verwenden. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck` Befehl mit der `--save-compression` Option verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos hinzufügen

MDN Web Docs ist keine sehr videointensive Seite, aber es gibt bestimmte Stellen, an denen Videoinhalte sinnvoll als Teil eines Artikels verwendet werden können. Dieser Artikel diskutiert, wann es angebracht ist, Videos in Artikel aufzunehmen, und gibt Tipps, wie man einfache, aber effektive Videos mit kleinem Budget erstellt.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterial und Leitfäden auf fortgeschrittenem Niveau. Einige dieser Argumente sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentationen in linearer Weise zu lesen, beginnend am Anfang und weiterlesend bis zum Ende. _Sie scannen._ Video ist wirklich schwierig zu scannen — es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsreich als Text. Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist in Bezug auf Dateigröße groß und daher teurer und weniger leistungsfähig als Text.
- Video hat Zugänglichkeitsprobleme: Es ist teurer zu produzieren als Text, insbesondere aber zu lokalisieren oder benutzbar für Screenreader-Benutzer zu machen.
- Im Anschluss an den letzten Punkt ist Video viel schwieriger zu bearbeiten/aktualisieren/warten als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, auch wenn Sie Videos erstellen, um zu versuchen, einige von ihnen zu lindern.

Es gibt viele beliebte Videoseiten, die viele Video-Tutorials bieten. MDN Web Docs ist keine videobasierte Seite, aber Video hat in bestimmten Kontexten seinen Platz auf MDN Web Docs.

Wir nutzen am häufigsten Videos, wenn es darum geht, eine Art von Anleitungsfolge oder einen mehrstufigen Arbeitsablauf zu beschreiben, der schwer in Worten prägnant zu beschreiben wäre: _"tun Sie dies, dann tun Sie das, dann wird dies geschehen"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die über mehrere Anwendungen oder Fenster hinweggehen und GUI-Interaktionen beinhalten, die möglicherweise nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf den Knopf in der Nähe der oberen linken Ecke, der ein bisschen wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

<!-- Wir verwenden Videos am häufigsten zum Erklären von Funktionen der [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).-->

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten:

- **Kurz** sein: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden. Dies ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach** sein: Versuchen Sie, den Arbeitsablauf einfach zu gestalten, 2-4 verschiedene Teile. Dies macht sie einfacher zu folgen.
- **Stumm** sein: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwendiger zu erstellen. Außerdem macht das Erklären dessen, was Sie tun, die Videos viel länger und erhöht die Kosten (sowohl finanziell als auch zeitlich) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, unterbrochen von Text. Der Text kann dazu beitragen, die im Video gemachten Punkte zu verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, je nachdem, was er bevorzugt. Siehe [Arbeiten mit dem Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Darüber hinaus sollten Sie die folgenden Tipps beachten:

- Das Video wird schließlich auf YouTube hochgeladen, bevor es eingebettet wird. Wir empfehlen ein 16:9 [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) dafür zu verwenden, damit es den gesamten Ansichtsrahmen ausfüllt und keine unschönen schwarzen Balken oben und unten (oder links und rechts) auf Ihrem Video entstehen. So könnten Sie beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Bei DevTools-Videos ist es oft eine gute Idee, ein kontrastreiches Thema zum Seiteninhalt auszuwählen. Beispielsweise wählen Sie das dunkle Thema, wenn die Beispielwebseite hell gestaltet ist. Es ist einfacher zu sehen, was vor sich geht und wo die DevTools beginnen und die Seite endet.
- Bei DevTools-Videos zoom Sie die DevTools so weit hinein, wie möglich, während Sie immer noch alles zeigen, was Sie zeigen wollen, und es gut aussehen zu lassen.
- Stellen Sie sicher, dass das, was Sie demonstrieren wollen, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahmewerkzeug so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

## Richtlinien für Videowerkzeuge

Sie benötigen ein Werkzeug zur Aufnahme des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung in der Erstellung von Videoinhalten haben, dann großartig. Wenn nicht, dann empfehlen wir, dass Sie mit einem einfachen Werkzeug beginnen und dann zu etwas Komplexerem übergehen, wenn Sie anfangen, Spaß am Erstellen von Videoinhalten zu haben und interessantere Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Starterwerkzeuge:

| Werkzeug                  | Betriebssystem        | Kosten    | Post-Produktionsfunktionen verfügbar? |
| ------------------------- | --------------------- | --------- | ------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                    |
| CamStudio                 | Windows               | Kostenlos | Eingeschränkt                         |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                    |
| QuickTime Player          | macOS                 | Kostenlos | Nein, nur einfaches Aufnehmen möglich |
| ScreenFlow                | macOS                 | Mittel    | Ja                                    |
| Kazam                     | Linux                 | Kostenlos | Minimal                               |

### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Schritte zur Aufnahme mit diesem Werkzeug sind ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Im _Bildschirmaufnahme_ Fenster drücken Sie die Aufnahmetaste (der rote runde Knopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufnahme starten_ Taste.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stopp_ Taste.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um es in hoher Auflösung zu speichern.

### Weitere Ressourcen

- [How to Add Custom Callouts to Screencast Videos in Screenflow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Workflow zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen sollten, um ein Video zu erstellen und es zu einem Artikel der MDN Web Docs hinzuzufügen.

### Vorbereitung

Planen Sie zunächst den Ablauf, den Sie aufnehmen möchten: Überlegen Sie, welche Start- und Endpunkte am besten sind.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browserprofil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen werden, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufnehmen:

- Beginnen Sie ein Video nicht mitten in einem Prozess — überlegen Sie, ob der Betrachter genug Kontext für Ihre Aktionen hat, um sie zu verstehen. In einem kurzen DevTools-Video ist es zum Beispiel eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit der Betrachter sich orientieren kann.
- Überlegen Sie, was Ihre Handlungen sind, verlangsamen Sie und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z. B. ein Symbol anklicken), gehen Sie langsam vor und machen Sie es offensichtlich. Also zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie es hervor oder zoomen Sie (nicht immer, je nach Bedarf).
  - Halten Sie inne für einen Moment.
  - Klicken Sie auf das Symbol.

- Planen Sie Zoomstufen für die Teile der Benutzeroberfläsche, die Sie zeigen werden. Nicht jeder wird in der Lage sein, Ihr Video in hoher Auflösung zu sehen. Sie können bestimmte Teile in der Nachbearbeitung vergrößern, aber es ist auch eine gute Idee, die App vorher zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, vertraut oder hässlich aussehen.

### Aufnahme

Wenn Sie den Workflow aufnehmen, den Sie zeigen möchten, gehen Sie reibungslos und stetig durch den Ablauf. Halten Sie für ein oder zwei Sekunden inne, wenn Sie an wichtigen Momenten sind — zum Beispiel, wenn Sie dabei sind, auf eine Schaltfläche zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die wichtig für das sind, was Sie demonstrieren möchten.

Denken Sie daran, am Ende für ein oder zwei Sekunden innezuhalten, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Werkzeug wie QuickTime Player verwenden und Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster auf die richtige Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Linealwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster das richtige Seitenverhältnis für die Aufnahme hat.

### Nachbearbeitung

Sie können in der Nachbearbeitung wichtige Momente hervorheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren, wie:

- Heranzoomen an Teile des Bildschirms.
- Hintergrund verblassen.

Heben Sie wichtige Momente des Workflows hervor, besonders dort, wo die Details schwer zu sehen sind: zum Beispiel das Klicken auf ein bestimmtes Symbol oder das Eingeben einer bestimmten URL. Ziel ist es, dass das Highlight 1-2 Sekunden dauert. Es ist eine gute Idee, eine kurze Übergangszeit (200-300 Millisekunden) am Anfang und Ende der Highlights hinzuzufügen.

Seien Sie zurückhaltend: Machen Sie das Video nicht zu einem ständigen Hin- und Herzoomen, sonst wird den Zuschauern schlecht.

Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

### Hochladen

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, zum Beispiel auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Fragen Sie ein Mitglied des MDN Web Docs Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort haben, um es zu platzieren.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontextes der Seite keinen Sinn ergibt (wenn es sich um ein kurzes Video handelt, dann wahrscheinlich nicht).

### Einbetten

Sobald das Video hochgeladen wurde, können Sie es auf der Seite mithilfe des [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) Makros einbetten. Dies erfolgt, indem Sie das folgende in Ihre Seite an der Stelle einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die vom Makroaufruf benötigt wird, ist die Zeichenfolge am Ende der Video-URL, nicht die ganze URL. Wenn die Video-URL zum Beispiel `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, lautet der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
