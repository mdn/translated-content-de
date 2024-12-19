---
title: Anleitung zum Hinzufügen von Bildern und Medien
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei in den Ordner des Dokuments ein und verweisen Sie dann im `index.md`-Dokument auf das Bild, entweder unter Verwendung der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder des entsprechenden HTML `<img>`-Elements.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem neuen Arbeitsbranch mit dem neuesten Inhalt aus dem `main` Branch des `mdn` Repositorys.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild in den Dokumentenordner ein. In diesem Beispiel nehmen wir an, dass wir ein neues Bild zum `files/en-us/web/css` Dokument hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` auf jedem Bild aus. Dies könnte Ihnen Fehler anzeigen, falls etwas nicht stimmt. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie in dem Dokument mit der Markdown-Syntax für Bilder auf Ihr Bild und geben Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) zwischen den Klammern an, die das Bild beschreiben, oder verwenden Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut in `files/en-us/web/css/index.md`:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie diese. Pushen Sie anschließend Ihren Branch in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihren [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Hinzufügen von alternativem Text zu Bildern

Jedes Bild, `![]` und `<img>`, muss einen `alt`-Text enthalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen enthalten, die das Bild vermittelt. Wenn Sie die Bildbeschreibung schreiben, denken Sie an die wertvollen Informationen des Bildes und wie Sie diese Informationen jemandem übermitteln würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der alternative Text für das Bild auf seinem Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat Hundefutter ist, dann ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil von Fluffys Adoptionsseite auf der Tierrettung ist, ist die im Bild vermittelte Information für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, daher wäre es redundant, dies einzuschließen. Vermeiden Sie es, das Bild zu detailliert zu beschreiben: Der potenzielle Hundebesitzer muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine hat.

Bei Screenshots schreiben Sie, was Sie vom Bild lernen, detaillieren aber nicht den Inhalt des Screenshots und lassen Informationen weg, die die Leser nicht brauchen oder bereits kennen. Wenn Sie beispielsweise auf einer Seite zum Ändern von Bing-Einstellungen sind und einen Screenshot von einem Bing-Suchergebnis haben, schließen Sie nicht den Suchbegriff oder die Anzahl der Ergebnisse usw. ein, da diese nicht der Punkt des Bildes sind. Beschränken Sie das `alt` auf das Thema: wie man Einstellungen in Bing ändert. Das `alt` könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` sein. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und er bereits weiß, dass es sich um Bing handelt, da er sich auf einer Seite befindet, die das Ändern der Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die zur MDN-Dokumentation hinzugefügt werden, einen Zweck haben und erfordern daher eine Beschreibung mit einem nicht leeren String. Weitere Hinweise zu alt-Texten finden Sie im [Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf den MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne Qualitätseinbußen), um die Downloadgröße für unsere Leser zu minimieren. Tatsächlich wird unser CI-Prozess fehlschlagen und die Build-Ergebnisse werden Sie warnen, dass einige Ihrer Bilder zu groß sind, wenn Sie dies nicht tun.

Der beste Weg, um die Bilder zu komprimieren, ist die Verwendung des integrierten Komprimierungswerkzeugs. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der `--save-compression`-Option verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos hinzufügen

MDN Web Docs ist keine sehr videolastige Seite, aber es gibt bestimmte Bereiche, in denen es sinnvoll ist, Videoinhalte als Teil eines Artikels zu verwenden. Dieser Artikel erörtert, wann es angebracht ist, Videos in Artikeln zu verwenden, und bietet Tipps, wie man einfache, aber effektive Videos mit geringem Budget erstellt.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterial und Leitfäden auf fortgeschrittenem Niveau. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentationen in linearer Weise zu lesen, d. h., sie beginnen am Anfang und lesen bis zum Ende. _Sie scannen._ Video ist sehr schwer zu scannen — es zwingt den Nutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist in Bezug auf Dateigröße groß und daher teurer und weniger leistungsfähig als Text.
- Video hat Zugänglichkeitsprobleme: Es ist generell teurer zu produzieren als Text, insbesondere wenn es lokalisiert oder für die Benutzer von Bildschirmlesegeräten nutzbar gemacht werden soll.
- Im Anschluss an den letzten Punkt: Video ist viel schwerer zu bearbeiten/aktualisieren/pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, selbst wenn Sie Videos erstellen, damit Sie versuchen können, einige von ihnen zu lindern.

Es gibt viele beliebte Videoseiten, die eine Menge Video-Tutorials bieten. MDN Web Docs ist keine videobasierte Seite, aber Video hat seinen Platz auf den MDN Web Docs in bestimmten Kontexten.

Wir tendieren dazu, Videos am häufigsten zu verwenden, wenn wir eine Art von Anleitungssequenz oder mehrstufigen Workflow beschreiben, der schwer in Worten prägnant zu beschreiben wäre: _"tun Sie dies, dann tun Sie das, dann wird dies passieren"_. Besonders nützlich ist es, wenn versucht wird, Prozesse zu beschreiben, die mehrere Anwendungen oder Fenster übergreifen und GUI-Interaktionen beinhalten, die möglicherweise nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf den Button oben links, der ein wenig wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

<!-- Am häufigsten verwenden wir Videos, wenn wir Funktionen der [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) erklären.-->

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden. Dies ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Arbeitsablauf einfach zu halten, mit 2-4 verschiedenen Teilen. Dadurch werden sie leichter zu folgen.
- **Stumm**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwändiger zu erstellen. Außerdem macht das Erklären dessen, was Sie tun, die Videos viel länger und erhöht die Kosten (sowohl finanziell als auch im Hinblick auf die Zeit) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, durchsetzt mit Text. Der Text kann die Punkte im Video verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, je nach Belieben. Ein gutes Beispiel dafür finden Sie unter [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector).

Zudem sollten Sie die folgenden Tipps berücksichtigen:

- Das Video wird letztendlich vor dem Einbetten auf YouTube hochgeladen. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diesen Zweck, damit es den gesamten Anzeigerahmen füllt und Sie keine hässlichen schwarzen Balken an der Ober- und Unterseite (oder links und rechts) Ihres Videos haben. Beispielsweise könnten Sie eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zur Seiteninhalt auszuwählen. Wählen Sie beispielsweise das dunkle Thema, wenn die Beispiel-Webseite hell ist. Es ist einfacher zu erkennen, was passiert und wo die DevTools enden und die Seite beginnt.
- Zoomen Sie für DevTools-Videos in die DevTools, soweit es geht, während Sie immer noch alles zeigen, was Sie zeigen möchten, und es gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren wollen, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass es einen visuellen Indikator für Mausklicks hinzufügt.

## Richtlinien für Videotools

Sie benötigen ein Tool zur Aufnahme des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung im Erstellen von Videoinhalten haben, großartig. Wenn nicht, empfehlen wir, mit einem einfachen Tool zu beginnen und sich dann zu etwas Komplexerem zu entwickeln, wenn Sie anfangen, Spaß am Erstellen von Videoinhalten zu haben und interessantere Produktionen erstellen möchten.

Die folgende Tabelle enthält einige Empfehlungen für gute Starter-Tools:

| Tool                      | OS                    | Kosten | Sind nachträgliche Bearbeitungsfunktionen verfügbar? |
| ------------------------- | --------------------- | ------ | -------------------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                               |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                                         |
| Camtasia                  | Windows, macOS        | Hoch     | Ja                                               |
| QuickTime Player          | macOS                 | Kostenlos | Nein, ermöglicht nur einfache Aufnahmen          |
| ScreenFlow                | macOS                 | Mittel   | Ja                                               |
| Kazam                     | Linux                 | Kostenlos | Minimal                                         |

### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player verfügbar haben. Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Drücken Sie im _Bildschirmaufnahme_-Fenster auf die Aufnahmetaste (den roten runden Knopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufnahme starten_ Taste.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stopp_-Taste.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um in hoher Definition zu speichern.

### Weitere Ressourcen

- [Anleitung zum Hinzufügen benutzerdefinierter Callouts zu Screencast-Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Arbeitsablauf zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen sollten, um ein Video zu erstellen und es einem MDN Web Docs-Artikel hinzuzufügen.

### Vorbereitung

Planen Sie zunächst den Ablauf, den Sie aufnehmen möchten: Überlegen Sie, welche Punkte am besten als Start- und Endpunkte geeignet sind.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind. Planen Sie die Größe und Positionierung von Browserfenstern, besonders wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufzeichnen möchten, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufzeichnen:

- Beginnen Sie kein Video mitten in einem Prozess — überlegen Sie, ob der Zuschauer genügend Kontext für Ihre Aktionen hat, damit sie verständlich sind. In einem kurzen DevTools-Video ist es beispielsweise eine gute Idee, mit dem Öffnen der DevTools zu beginnen, um dem Betrachter Orientierung zu geben.
- Überlegen Sie, was Ihre Aktionen sind, verlangsamen Sie und machen Sie sie offensichtlich. Wann immer Sie eine Aktion ausführen müssen (z.B. ein Symbol anklicken), gehen Sie es langsam an und machen Sie es offensichtlich. Zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie es hervor oder zoomen Sie darauf (nicht immer, je nachdem, ob es nötig erscheint).
  - Halten Sie kurz inne.
  - Klicken Sie auf das Symbol.

- Planen Sie Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen möchten. Nicht jeder wird in der Lage sein, Ihr Video in hoher Auflösung anzusehen. Sie können bestimmte Teile in der Nachbearbeitung zoomen, aber es ist auch eine gute Idee, die App im Voraus zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, ungewohnt oder hässlich aussehen.

### Aufnehmen

Beim Aufnehmen des gewünschten Workflows gehen Sie den Ablauf reibungslos und gleichmäßig durch. Halten Sie für ein oder zwei Sekunden an, wenn Sie sich an wichtigen Momenten befinden – zum Beispiel, wenn Sie im Begriff sind, auf eine Schaltfläche zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die wichtig sind, um das, was Sie demonstrieren möchten, zu zeigen.

Denken Sie daran, am Ende kurz zu pausieren, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachbearbeitung aus irgendeinem Grund nicht möglich ist, sollten Sie Ihre Fenster auf die richtige Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Viewport das richtige Seitenverhältnis für die Aufnahme hat.

### Nachbearbeitung

Sie können wichtige Momente in der Nachbearbeitung hervorheben. Eine Hervorhebung kann aus ein paar Dingen bestehen, die Sie oft kombinieren werden, wie:

- Zoom auf Teile des Bildschirms.
- Ausblenden des Hintergrunds.

Heben Sie wichtige Momente des Workflows hervor, besonders dort, wo es schwer zu erkennen ist: z.B. das Klicken auf ein bestimmtes Symbol oder das Eingeben einer bestimmten URL. Streben Sie an, dass die Hervorhebung 1-2 Sekunden dauert. Es ist eine gute Idee, am Anfang und Ende der Hervorhebungen eine kurze Übergangszeit (200-300 Millisekunden) hinzuzufügen.

Verwenden Sie etwas Zurückhaltung hier: Machen Sie das Video nicht zu einer ständigen Abfolge von Vor- und Zurückzoomen, sonst wird den Zuschauern schlecht.

Schneiden Sie das Video bei Bedarf auf das gewünschte Seitenverhältnis zu.

### Hochladen

Videos müssen derzeit auf YouTube hochgeladen werden, um auf den MDN Web Docs angezeigt zu werden, z.B. auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort haben, um es hochzuladen.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es ohne den Kontext der Seite keinen Sinn macht (wenn es ein kurzes Video ist, macht es wahrscheinlich keinen Sinn).

### Einbetten

Nachdem es hochgeladen wurde, können Sie das Video auf der Seite mit dem [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) Makro einbetten. Dieses wird verwendet, indem Sie das Folgende an der Stelle auf Ihrer Seite einfügen, an der das Video erscheinen soll:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die beim Makroaufruf übergeben wird, ist die Zeichenfolge am Ende der Video-URL, nicht die ganze URL. Wenn die Video-URL zum Beispiel `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, lautet der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
