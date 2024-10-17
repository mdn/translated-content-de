---
title: Anleitung zum Hinzufügen von Bildern und Medien
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, platzieren Sie die Bilddatei im Ordner des Dokuments und referenzieren Sie das Bild dann aus der `index.md`-Datei des Dokuments, indem Sie die [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder das entsprechende HTML `<img>` Element verwenden.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem neuen Arbeitszweig mit dem neuesten Inhalt aus dem `main`-Zweig des `mdn`-Remote.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild dem Dokumentenordner hinzu. In diesem Beispiel nehmen wir an, dass wir ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus, es könnte sich beschweren, wenn etwas nicht stimmt. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#komprimieren_von_bildern).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument mit der Markdown-Syntax für Bilder und geben Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn/Accessibility/HTML#text_alternatives) zwischen den Klammern an, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und modifizierten Dateien hinzu und committen Sie sie, sowie pushen Sie Ihren Zweig auf Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, eine [Pull-Anfrage](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Hinzufügen alternativer Texte zu Bildern

Jedes Bild, `![]` und `<img>`, muss einen `alt`-Text beinhalten. Alternative Attribute sollten kurz sein und alle relevanten Informationen, die das Bild vermittelt, liefern. Denken Sie beim Schreiben der Bildbeschreibung darüber nach, welche wertvollen Informationen das Bild enthält und wie Sie diese Informationen an jemanden weitergeben würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der alternative Text für das Bild auf seinem Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil von Fluffys Tieradoptionsseite ist, sind die Informationen, die das Bild vermittelt, für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich die Größe und Rasse von Fluffy, daher wäre es redundant, das zu inkludieren. Verzichten Sie darauf, das Bild in zu vielen Details zu beschreiben: der potenzielle Besitzer braucht nicht zu wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots sollten Sie beschreiben, was Sie aus dem Bild lernen, und nicht die Inhalte des Screenshots detailliert angeben, wobei Informationen weggelassen werden sollten, die Leser nicht benötigen oder bereits kennen. Zum Beispiel, wenn Sie sich auf einer Seite über das Ändern von Einstellungen auf Bing befinden und Sie einen Screenshot eines Suchergebnisses von Bing haben, sollten Sie den Suchbegriff oder die Anzahl der Ergebnisse nicht einfügen, da diese nicht der Punkt des Bildes sind. Beschränken Sie das `alt` auf das aktuelle Thema: wie man Einstellungen in Bing ändert. Das `alt` könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unter dem Suchfeld."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es ein Screenshot ist und bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite befindet, die das Ändern von Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die der MDN-Dokumentation hinzugefügt werden, einen Zweck haben und daher eine Beschreibung mit nicht-leerem String erfordern.

## Komprimieren von Bildern

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne Qualitätsverlust), um die Download-Größe für unsere Leser zu reduzieren. Wenn Sie dies nicht tun, wird unser CI-Prozess fehlschlagen und die Build-Ergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind.

Der beste Weg, Bilder zu komprimieren, ist die Verwendung des integrierten Komprimierungstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der Option `--save-compression` verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Hinzufügen von Videos

Die MDN Web Docs sind keine sehr videointensive Seite, aber es gibt bestimmte Stellen, an denen Videoinhalte sinnvoll als Teil eines Artikels verwendet werden können. Dieser Artikel diskutiert, wann das Einfügen von Videos in Artikeln angemessen ist und gibt Tipps, wie man einfache, aber effektive Videos mit einem begrenzten Budget erstellen kann.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterial und fortgeschrittene Leitfäden. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentationen linear zu lesen, beginnend am Anfang und bis zum Ende. _Sie überfliegen._ Video ist wirklich schwer zu überfliegen – es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video, das etwas erklärt, zu konsumieren, als die entsprechenden Anweisungen zu lesen.
- Video ist in Bezug auf Dateigröße groß und daher teurer und weniger leistungsfähig als Text.
- Video hat Zugänglichkeitsprobleme: es ist in der Regel teurer zu produzieren als Text, besonders aber um es zu lokalisieren oder für Benutzer von Bildschirmlesern nutzbar zu machen.
- In Anbetracht des letzten Punktes ist Video viel schwieriger zu bearbeiten/aktualisieren/pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, selbst wenn Sie Videos erstellen, um einige davon zu lindern.

Es gibt viele beliebte Videoseiten, die viele Videotutorials anbieten. MDN Web Docs sind keine videoorientierte Seite, aber Videos haben in bestimmten Kontexten ihren Platz auf MDN Web Docs.

Wir neigen am häufigsten dazu, Videos zu verwenden, wenn wir eine Art von Anweisungssequenz oder mehrstufigen Workflow beschreiben, der schwer in Worte zu fassen wäre: _"mach dies, dann mach das, dann passiert das"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die über mehrere Anwendungen oder Fenster hinweg verlaufen und GUI-Interaktionen beinhalten, die möglicherweise nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf die Schaltfläche oben links, die ein wenig wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

<!-- Wir verwenden Videos am häufigsten, um Funktionen der [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) zu erklären.-->

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten:

- **Kurz** sein: Versuchen Sie, Videos unter 30 Sekunden zu halten, vorzugsweise unter 20 Sekunden. Dies ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach** sein: Versuchen Sie, den Arbeitsablauf einfach zu gestalten, 2-4 verschiedene Teile. Dies macht sie leichter nachvollziehbar.
- **Stumm** sein: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwändiger zu erstellen. Außerdem macht die Notwendigkeit zu erklären, was Sie tun, die Videos viel länger und erhöht die Kosten (sowohl finanziell als auch zeitlich) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, durchsetzt mit Text. Der Text kann die im Video gemachten Punkte verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, wie er es wählt. Siehe [Arbeiten mit dem Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Darüber hinaus sollten Sie die folgenden Tipps berücksichtigen:

- Das Video wird letztendlich vor dem Einbetten auf YouTube hochgeladen. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diese Verwendung, damit es den gesamten Anzeigerahmen ausfüllt und Sie keine hässlichen schwarzen Balken oben und unten (oder links und rechts) in Ihrem Video haben. Verwenden Sie beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720.
- Zeichnen Sie das Video in HD auf, damit es beim Hochladen besser aussieht.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastreiches Thema zum Seiteninhalt zu wählen. Beispielsweise wählen Sie das dunkle Thema, wenn die Beispielwebseite ein helles Thema hat. So kann man besser sehen, was passiert und wo die DevTools beginnen und die Seite endet.
- Für DevTools-Videos zoomen Sie so viel wie möglich in die DevTools hinein, solange alles, was Sie zeigen möchten, gezeigt wird und es gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

## Richtlinien für Videotools

Sie benötigen ein Werkzeug zur Aufnahme des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung mit der Erstellung von Videoinhalten haben, großartig. Wenn nicht, empfehlen wir, dass Sie mit einem einfachen Tool beginnen und dann zu etwas Komplexerem übergehen, wenn Sie anfangen, es zu genießen, Videoinhalte zu erstellen und interessantere Produktionen produzieren möchten.

Die folgende Tabelle gibt einige Empfehlungen für gute Einsteigerwerkzeuge:

| Werkzeug                  | OS                    | Kosten    | Post-Produktions-Features verfügbar?   |
| ------------------------- | --------------------- | --------- | -------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                     |
| CamStudio                 | Windows               | Kostenlos | Eingeschränkt                          |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                     |
| QuickTime Player          | macOS                 | Kostenlos | Nein, ermöglicht nur einfache Aufnahme |
| ScreenFlow                | macOS                 | Mittel    | Ja                                     |
| Kazam                     | Linux                 | Kostenlos | Minimal                                |

### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahme mit diesem Tool ist ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Klicken Sie im _Screen Recording_-Fenster auf die Aufnahmetaste (der rote runde Button).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufnahme starten_ Taste.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stopp_ Taste.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um in hoher Auflösung zu speichern.

### Andere Ressourcen

- [Wie man benutzerdefinierte Callouts zu Screencast-Videos in ScreenFlow hinzufügt](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Workflow zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen sollten, um ein Video zu erstellen und es zu einem Artikel auf MDN Web Docs hinzuzufügen.

### Vorbereitung

Planen Sie zuerst den Ablauf, den Sie erfassen möchten: Überlegen Sie sich die besten Punkte zum Starten und Beenden.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browserprofil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen möchten, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufnehmen:

- Starten Sie kein Video in der Mitte eines Prozesses – überlegen Sie, ob der Betrachter genug Kontext für Ihre Aktionen hat, um sie verstehen zu können. In einem kurzen DevTools-Video ist es zum Beispiel eine gute Idee, die DevTools zu öffnen, damit der Betrachter sich orientieren kann.
- Überlegen Sie, welche Ihre Aktionen sind, verlangsamen Sie sich und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z.B. ein Symbol anklicken), nehmen Sie es langsam und machen Sie es offensichtlich. Beispielsweise:

  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie hervor oder zoomen Sie (nicht immer, je nachdem, ob es notwendig erscheint).
  - Halten Sie für einen Moment an.
  - Klicken Sie auf das Symbol.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen werden. Nicht jeder wird in der Lage sein, Ihr Video in hoher Auflösung zu sehen. Sie werden in der Lage sein, bestimmte Teile in der Nachbearbeitung zu zoomen, aber es ist auch eine gute Idee, die App im Voraus zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, unkenntlich oder hässlich aussehen.

### Aufnahme

Wenn Sie den Arbeitsablauf, den Sie zeigen möchten, aufnehmen, arbeiten Sie diesen reibungslos und stetig durch. Halten Sie für ein oder zwei Sekunden inne, wenn Sie an wichtigen Punkten sind - zum Beispiel, wenn Sie kurz davor sind, auf einen Button zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das, was Sie demonstrieren möchten, wichtig sind.

Denken Sie daran, am Ende ein oder zwei Sekunden zu pausieren, um das Ergebnis des Arbeitsablaufs anzuzeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und eine Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster in der richtigen Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Viewport das richtige Seitenverhältnis für die Aufnahme hat.

### Nachbearbeitung

Sie werden in der Lage sein, Schlüsselstellen in der Nachbearbeitung hervorzuheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren, wie:

- Zoomen auf Teile des Bildschirms.
- Den Hintergrund verblassen lassen.

Heben Sie Schlüsselstellen des Arbeitsablaufs hervor, insbesondere dort, wo die Details schwer zu erkennen sind: auf ein bestimmtes Symbol klicken oder eine bestimmte URL eingeben, zum Beispiel. Ziel ist es, dass das Highlight 1-2 Sekunden dauert. Es ist eine gute Idee, am Anfang und Ende der Highlights eine kurze Übergangszeit (200-300 Millisekunden) hinzuzufügen.

Üben Sie Zurückhaltung: machen Sie das Video nicht zu einer ständigen Prozession von Hinein- und Herauszoomen, sonst wird den Zuschauern schlecht.

Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

### Hochladen

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, beispielsweise auf den [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort haben, um es zu platzieren.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, ist dies wahrscheinlich der Fall).

### Einbetten

Sobald es hochgeladen ist, können Sie das Video auf der Seite mit dem [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) Makro einbetten. Dies wird verwendet, indem Sie den folgenden Code an der Stelle in Ihre Seite einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die der Makro-Aufruf benötigt, ist die Zeichenfolge von Buchstaben am Ende der Video-URL, nicht die gesamte URL. Zum Beispiel, wenn die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, wird der erforderliche Makro-Aufruf so aussehen:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
