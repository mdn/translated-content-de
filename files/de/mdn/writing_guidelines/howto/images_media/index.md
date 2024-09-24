---
title: Wie man Bilder und Medien hinzufügt
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei zum Ordner des Dokuments hinzu und referenzieren Sie dann das Bild innerhalb der `index.md`-Datei des Dokuments mithilfe der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder des entsprechenden HTML-`<img>`-Elements.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem neuen Arbeitszweig mit dem neuesten Inhalt aus dem `main`-Zweig des `mdn`-Remote.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Führen Sie "yarn" erneut aus, um sicherzustellen, dass Sie
   # die neuesten Yari-Abhängigkeiten installiert haben.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild dem Dokumentenordner hinzu. Angenommen, wir fügen ein neues Bild zum Dokument `files/en-us/web/css` hinzu.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` auf jedem Bild aus, das möglicherweise Beschwerden hervorruft, wenn etwas nicht stimmt. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument mit der Markdown-Syntax für Bilder, indem Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn/Accessibility/HTML#text_alternatives) zwischen den Klammern angeben, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut innerhalb von `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie sie. Drücken Sie dann Ihren Zweig in Ihr Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihre [Pull-Anfrage](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Hinzufügen von Alternativtext zu Bildern

Jedes Bild, `![]` und `<img>`, muss `alt`-Text enthalten. Die Alt-Attribute sollten kurz sein und alle relevanten Informationen liefern, die das Bild vermittelt. Beim Schreiben der Bildbeschreibung sollten Sie den wertvollen Informationsgehalt des Bildes bedenken und darüber nachdenken, wie Sie diese Information jemandem vermitteln würden, der die Inhalte der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext für das Bild auf seinem Kontext basiert. Wenn das Foto von Fluffy, dem Hund, als Avatar neben einer Bewertung für Yuckymeat-Hundefutter erscheint, ist `alt="Fluffy"` angebracht. Wenn dasselbe Foto Teil von Fluffys Tieradoptionsseite ist, sind die Informationen, die das Bild vermittelt, für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbigter Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, sodass es redundant wäre, diese hinzuzufügen. Verzichten Sie darauf, das Bild zu detailliert zu beschreiben: Der potenzielle Besitzer muss nicht wissen, ob der Hund sich im Innen- oder Außenbereich befindet oder ein rotes Halsband und eine blaue Leine trägt.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, und beschreiben nicht den Inhalt des Screenshots im Detail. Lassen Sie Informationen aus, die Leser nicht benötigen oder bereits kennen. Wenn Sie sich beispielsweise auf einer Seite zum Ändern der Einstellungen auf Bing befinden, und Sie haben einen Screenshot eines Bing-Suchergebnisses, sollten Sie den Suchbegriff oder die Anzahl der Ergebnisse nicht einbeziehen, da diese nicht der Zweck des Bildes sind. Begrenzen Sie das `alt` auf das Thema: wie man Einstellungen in Bing ändert. Das `alt` könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite befindet, die die Änderungen der Bing-Einstellungen erklärt.

Die Syntax in Markdown und HTML:

```md-nolint
![<alt-text>](<url-of-image>)
<img alt="<alt-text>" src="<url-of-image>">
```

Beispiele:

```md
![OpenWebDocs Logo: Carle der Bücherwurm](carle.png)
<img alt="OpenWebDocs Logo: Carle der Bücherwurm" src="carle.png" />
```

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollte jedes Bild, das zur MDN-Dokumentation hinzugefügt wird, einen Zweck haben und daher eine nicht-leere Zeichenfolgenbeschreibung erfordern.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie darauf achten, dass sie so weit wie möglich komprimiert werden (ohne Qualitätsverlust), um die Downloadgröße für unsere Leser zu reduzieren. Wenn Sie dies nicht tun, schlägt unser CI-Prozess fehl und die Bauergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, besteht darin, das integrierte Komprimierungstool zu verwenden. Sie können ein Bild angemessen komprimieren, indem Sie den Befehl `filecheck` mit der Option `--save-compression` verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Hinzufügen von Videos

MDN Web Docs ist keine sehr videoorientierte Seite, aber es gibt bestimmte Stellen, an denen Video-Inhalte sinnvoll sind, um sie als Teil eines Artikels zu verwenden. Dieser Artikel diskutiert, wann das Einfügen von Videos in Artikel angemessen ist und gibt Tipps, wie man mit kleinem Budget einfache, aber effektive Videos erstellt.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterialien und fortgeschrittene Anleitungen. Einige davon sind unten aufgeführt:

- Video ist linear. Es ist wirklich schwierig, Videos zu überblicken, da es den Benutzer zwingt, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video zu schauen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video hat eine große Dateigröße, ist daher teurer und weniger performant als Text.
- Video hat Zugänglichkeitsprobleme: Es ist in der Regel teurer zu produzieren als Text, insbesondere um es zu lokalisieren oder für Bildschirmleserbenutzer zugänglich zu machen.
- Video ist viel schwieriger zu bearbeiten/aktualisieren/warten als Textinhalt.

> [!NOTE]
> Es lohnt sich, diese Probleme im Kopf zu behalten, auch wenn Sie Videos erstellen, um einige von ihnen zu mildern.

Es gibt viele beliebte Video-Websites, die zahlreiche Video-Tutorials anbieten. MDN Web Docs ist keine videoorientierte Seite, aber Video hat seinen Platz auf MDN Web Docs in bestimmten Zusammenhängen.

Wir neigen dazu, Videos am häufigsten zu verwenden, wenn wir eine Art von Anweisungssequenz oder mehrstufigen Workflow beschreiben, der schwer in Worten knapp zu beschreiben ist: _"tu das, dann tu das, dann wird dies passieren"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die mehrere Anwendungen oder Fenster überschreiten und GUI-Interaktionen enthalten, die nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf die Schaltfläche oben links, die ein bisschen wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden, idealerweise unter 20 Sekunden zu halten. Das ist kurz genug, um keine hohen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu halten, mit 2-4 unterschiedlichen Teilen. Dies macht es einfacher zu folgen.
- **Still**: Audio macht Videos viel ansprechender, sie sind jedoch viel zeitaufwändiger zu erstellen. Außerdem macht das Erklären dessen, was Sie tun, die Videos viel länger und erhöht die Kosten (sowohl finanziell als auch in Bezug auf die Zeit) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, die mit Text durchsetzt sind. Der Text kann die im Video gemachten Punkte verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, wie er möchte. Sehen Sie sich [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) als ein gutes Beispiel an.

Darüber hinaus sollten Sie die folgenden Tipps berücksichtigen:

- Das Video wird vor dem Einbetten auf YouTube hochgeladen. Wir empfehlen ein 16:9 {{glossary("aspect ratio")}} für diesen Zweck, damit es den gesamten Betrachtungsrahmen ausfüllt und Sie keine unschönen schwarzen Balken oben und unten (oder links und rechts) in Ihrem Video haben. So könnten Sie beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein zum Seiteninhalt kontrastierendes Thema zu wählen. Wählen Sie beispielsweise das dunkle Thema, wenn die Beispielwebseite hell ist. Es ist einfacher zu sehen, was passiert und wo die DevTools beginnen und die Seite endet.
- Zoomen Sie für DevTools-Videos in die DevTools, so weit Sie können, während Sie immer noch alles zeigen, was Sie zeigen möchten, und es gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht von der Mauszeigerspitze verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass visuelle Anzeigen von Mausklicks hinzugefügt werden.

## Richtlinien für Videotools

Sie benötigen ein Tool, um das Video aufzunehmen. Diese reichen von kostenlos bis teuer und einfach bis komplex. Wenn Sie bereits Erfahrung mit der Erstellung von Videoinhalten haben, dann großartig. Wenn nicht, empfehlen wir, mit einem einfachen Tool zu beginnen und dann zu etwas Komplexerem überzugehen, wenn Sie anfangen, Freude an der Erstellung von Videoinhalten zu haben und interessantere Produktionen erstellen möchten.

Die folgende Tabelle gibt einige Empfehlungen für gute Starter-Tools:

| Tool                      | OS                    | Kosten   | Postproduktions-Funktionen verfügbar? |
| ------------------------- | --------------------- | -------- | ------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos| Ja                                    |
| CamStudio                 | Windows               | Kostenlos| Begrenzt                              |
| Camtasia                  | Windows, macOS        | Hoch     | Ja                                    |
| QuickTime Player          | macOS                 | Kostenlos| Nein, nur einfache Aufnahmen möglich  |
| ScreenFlow                | macOS                 | Mittel   | Ja                                    |
| Kazam                     | Linux                 | Kostenlos| Minimal                               |

### Tipps für QuickTime Player

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Klicken Sie im Fenster _Bildschirmaufnahme_ auf die Aufnahmetaste (den roten runden Knopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die Schaltfläche _Aufnahme starten_.
5. Führen Sie die Aktionen aus, die Sie aufzeichnen möchten.
6. Drücken Sie die _Stopp_ Taste.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um als hochauflösend zu speichern.

### Andere Ressourcen

- [Wie man benutzerdefinierte Callouts zu Screencast-Videos in Screenflow hinzufügt](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Arbeitsablauf zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen sollten, um ein Video zu erstellen und es einem Artikel auf MDN Web Docs hinzuzufügen.

### Vorbereitung

Planen Sie zuerst den Ablauf, den Sie erfassen möchten: Überlegen Sie sich die besten Punkte zum Starten und Beenden.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, besonders wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufzeichnen möchten, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufzeichnen:

- Beginnen Sie kein Video mitten in einem Prozess — Überlegen Sie, ob der Betrachter genügend Kontext für Ihre Aktionen hat, um diese zu verstehen. In einem kurzen DevTools-Video ist es beispielsweise eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit sich der Betrachter orientieren kann.
- Überlegen Sie, was Ihre Aktionen sind, verlangsamen Sie sich, und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z. B. auf ein Symbol klicken), machen Sie es langsam und offensichtlich. Zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie hervor oder zoomen Sie (nicht immer, je nachdem, ob es notwendig erscheint).
  - Machen Sie eine kurze Pause.
  - Klicken Sie auf das Symbol.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen werden. Nicht jeder wird Ihr Video in hoher Auflösung ansehen können. Sie können bestimmte Teile in der Nachbearbeitung zoomen, aber es ist eine gute Idee, die App vorher auch zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, unkenntlich oder hässlich aussehen.

### Aufnahme

Wenn Sie den Arbeitsablauf aufnehmen, den Sie zeigen möchten, gehen Sie den Ablauf reibungslos und gleichmäßig durch. Halten Sie für eine Sekunde oder zwei inne, wenn Sie an Schlüsselpunkten sind — z. B., wenn Sie dabei sind, auf eine Schaltfläche zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das, was Sie demonstrieren möchten, wichtig sind.

Denken Sie daran, am Ende eine oder zwei Sekunden zu pausieren, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster auf die richtige Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Ruler-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster das richtige Seitenverhältnis für die Aufnahme hat.

### Nachbearbeitung

Sie werden in der Lage sein, Schlüssel-Momente in der Nachbearbeitung hervorzuheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren, wie:

- Zoom auf Teile des Bildschirms.
- Hintergrund verblassen.

Heben Sie Schlüssel-Momente des Arbeitsablaufs hervor, besonders dort, wo das Detail schwer zu sehen ist: Klicken auf ein bestimmtes Symbol oder Eingeben einer bestimmten URL, zum Beispiel. Streben Sie an, dass das Highlight 1-2 Sekunden dauert. Es ist eine gute Idee, einen kurzen Übergang (200-300 Millisekunden) am Anfang und Ende der Highlights hinzuzufügen.

Seien Sie hier zurückhaltend: Machen Sie das Video nicht zu einem ständigen Wechsel von Ein- und Auszoomen, sonst wird den Zuschauern schlecht.

Schneiden Sie das Video, falls erforderlich, auf das gewünschte Seitenverhältnis zu.

### Hochladen

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, zum Beispiel auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, ergibt es wahrscheinlich keinen Sinn).

### Einbetten

Sobald das Video hochgeladen wurde, können Sie es auf der Seite mithilfe des [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) Makros einbetten. Dies geschieht, indem Sie das Folgende an der Stelle in Ihre Seite einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die vom Makroaufruf benötigt wird, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL. Wenn die Video-URL beispielsweise `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, lautet der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
