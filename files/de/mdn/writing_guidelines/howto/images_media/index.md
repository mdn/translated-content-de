---
title: Anleitung zur Hinzufügung von Bildern und Medien
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei in den Ordner des Dokuments ein und verweisen Sie dann aus der `index.md`-Datei des Dokuments darauf, indem Sie [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder das entsprechende HTML-`<img>`-Element verwenden.

Gehen wir ein Beispiel durch:

1. Beginnen Sie mit einem frischen Arbeitszweig mit dem neuesten Inhalt aus dem `main`-Branch des `mdn`-Remote.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild zum Dokumentordner hinzu. Für dieses Beispiel nehmen wir an, dass wir ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` auf jedem Bild aus. Es könnte zu Beschwerden kommen, wenn etwas nicht in Ordnung ist. Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie in Ihrem Dokument auf Ihr Bild, indem Sie die Markdown-Syntax für Bilder verwenden und zwischen den Klammern [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn/Accessibility/HTML#text_alternatives) bereitstellen, die das Bild beschreibt, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut innerhalb von `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und bearbeiteten Dateien hinzu und übertragen Sie Ihren Zweig in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihre [Pull-Anfrage](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Hinzufügen von alternativem Text zu Bildern

Jedes Bild, `![]` und `<img>`, muss `alt`-Text beinhalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen vermitteln, die das Bild enthält. Denken Sie bei der Bildbeschreibung daran, welche wertvollen Informationen das Bild liefert und wie Sie diese Informationen jemandem übermitteln würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der alternative Text des Bildes auf seinem Kontext basiert. Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil der Tierschutz-Adoptionsseite von Fluffy ist, sind die im Bild vermittelten Informationen für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Maul."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, weshalb dies nicht redundant wäre. Verzichten Sie darauf, das Bild zu detailliert zu beschreiben: Der potenzielle Elternteil muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

Bei Screenshots beschreiben Sie, was Sie aus dem Bild lernen, ohne den Screenshot-Inhalt im Detail zu beschreiben, und lassen Sie Informationen aus, die Leser nicht benötigen oder bereits wissen. Wenn Sie zum Beispiel auf einer Seite über das Ändern von Einstellungen auf Bing sind und einen Screenshot eines Bing-Suchergebnisses haben, sollten Sie den Suchbegriff oder die Anzahl der Ergebnisse usw. nicht einbeziehen, da dies nicht der Punkt des Bildes ist. Begrenzen Sie das Alt-Attribut auf das Thema: wie man Einstellungen in Bing ändert. Das Alt könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unter dem Suchfeld."` sein. Schließen Sie nicht "Screenshot" oder "Bing" ein, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt und da er bereits weiß, dass es Bing ist, da er sich auf einer Seite befindet, die die Änderung von Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die zur MDN-Dokumentation hinzugefügt werden, einen Zweck haben und daher eine Beschreibung mit Nicht-leerzeichen erfordern. Für Hinweise zum Alt-Text siehe [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein alt-Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite der MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass diese so weit wie möglich komprimiert werden (ohne die Qualität zu mindern), um die Downloadgröße für unsere Leser zu reduzieren. Wenn Sie dies nicht tun, wird unser CI-Prozess fehlschlagen und das Bau-Ergebnis wird Sie warnen, dass einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, ist die Verwendung des eingebauten Komprimierungstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck`-Befehl mit der `--save-compression`-Option verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos hinzufügen

MDN Web Docs ist keine sehr video-lastige Seite, aber es gibt bestimmte Bereiche, wo Video-Inhalte als Teil eines Artikels sinnvoll sein können. Dieser Artikel erläutert, wann es angemessen ist, Videos in Artikeln zu verwenden, und bietet Tipps, wie man einfach aber effektiv auf einem Budget Videos erstellen kann.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten in technischer Dokumentation, insbesondere für Referenzmaterialien und ausführliche Leitfäden. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, Online-Dokumentation in linearer Weise zu lesen, beginnend am Anfang und bis zum Ende. _Sie scannen._ Video ist wirklich schwer zu scannen — es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video zu konsumieren, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist in Bezug auf Dateigröße groß und deshalb teurer und weniger performant als Text.
- Video hat Zugänglichkeitsprobleme: Es ist aufwendiger zu produzieren als Text, besonders bei der Lokalisierung oder der Benutzbarkeit durch Bildschirmleser.
- In Anlehnung an den letzten Punkt ist Video viel schwieriger zu bearbeiten/aktualisieren/pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Kopf zu behalten, selbst wenn Sie Videos machen, damit Sie versuchen können, einige davon zu lindern.

Es gibt viele beliebte Videoseiten, die eine Menge Video-Tutorials bereitstellen. MDN Web Docs ist keine videobasierte Seite, aber Video hat in bestimmten Kontexten einen Platz auf den MDN Web Docs.

Wir neigen dazu, Video am häufigsten zu verwenden, wenn wir eine Art von Anweisungssequenz oder Mehr-Schritt-Arbeitsablauf beschreiben, der schwer in Worten zusammenzufassen ist: _"tun Sie dies, dann das, dann wird dies passieren"_. Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die über mehrere Anwendungen oder Fenster gehen und die GUI-Interaktionen beinhalten, die vielleicht nicht einfach zu beschreiben sind: _"jetzt klicken Sie auf den Button nahe der oberen linken Ecke, der wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

<!-- Wir verwenden Videos am häufigsten, wenn wir Funktionen der [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) erklären.-->

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden. Das ist kurz genug, um die Aufmerksamkeit der Leser nicht zu sehr in Anspruch zu nehmen.
- **Einfach**: Versuchen Sie, den Arbeitsablauf einfach zu gestalten, 2-4 unterschiedliche Stücke. Das macht sie leichter zu folgen.
- **Stumm**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwendiger zu erstellen. Außerdem verlängert die Erklärung dessen, was Sie tun, die Videos erheblich und erhöht die Kosten (sowohl finanziell als auch zeitlich) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, die mit Text durchsetzt sind. Der Text kann die im Video gemachten Punkte verstärken und der Benutzer kann sich je nach Wunsch entweder auf den Text oder das Video stützen. Siehe [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Zusätzlich sollten Sie folgende Tipps berücksichtigen:

- Das Video wird letztlich auf YouTube hochgeladen, bevor es eingebettet wird. Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diese Verwendung, damit es den gesamten Betrachtungsrahmen ausfüllt und Sie am oberen und unteren (oder linken und rechten) Rand Ihres Videos keine unschönen schwarzen Balken haben. So könnten Sie zum Beispiel eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zum Seiteninhalt zu wählen. Wählen Sie beispielsweise das dunkle Thema, wenn die Beispielwebseite ein helles Thema hat. Es ist einfacher zu sehen, was los ist und wo die DevTools beginnen und die Seite endet.
- Für DevTools-Videos zoomen Sie so weit wie möglich in die DevTools hinein, während Sie alles zeigen, was Sie zeigen möchten und es gleichzeitig gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht von dem Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Screen-Recording-Tool so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

## Richtlinien für Videotools

Sie benötigen ein Tool für die Videoaufnahme. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung im Erstellen von Videoinhalten haben, großartig. Wenn nicht, empfehlen wir, dass Sie mit einem einfachen Tool beginnen und sich dann zu etwas Komplexerem vorarbeiten, wenn Sie anfangen, Spaß am Erstellen von Videoinhalten zu entwickeln und interessantere Produktionen erstellen möchten.

Die folgende Tabelle enthält einige Empfehlungen für gute Starter-Tools:

| Tool                      | Betriebssystem        | Kosten    | Post-Produktionsfunktionen verfügbar? |
| ------------------------- | --------------------- | --------- | ------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                    |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                              |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                    |
| QuickTime Player          | macOS                 | Kostenlos | Nein, erlaubt nur einfache Aufnahme   |
| ScreenFlow                | macOS                 | Mittel    | Ja                                    |
| Kazam                     | Linux                 | Kostenlos | Minimal                               |

### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player verfügbar haben. Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie _File_ > _New Screen Recording_ aus dem Hauptmenü.
2. In der _Screen Recording_-Box drücken Sie den Aufnahmebutton (den roten runden Button).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie den _Start Recording_ Button.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie den _Stop_ Button.
7. Wählen Sie _File_ > _Export As..._ > _1080p_ aus dem Hauptmenü, um als High Definition zu speichern.

### Weitere Ressourcen

- [Wie fügt man benutzerdefinierte Callouts zu Screencast-Videos in ScreenFlow hinzu](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Workflow zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen möchten, um ein Video zu erstellen und es zu einem MDN Web Docs Artikel hinzuzufügen.

### Vorbereitung

Planen Sie zuerst den Ablauf, den Sie einfangen möchten: Überlegen Sie, wo der beste Start- und Endpunkt liegt.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind. Planen Sie die Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen möchten, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufnehmen:

- Beginnen Sie kein Video mitten in einem Prozess — überlegen Sie, ob der Betrachter genug Kontext für Ihre Aktionen hat, um sie zu verstehen. In einem kurzen DevTools-Video ist es beispielsweise eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit sich der Betrachter orientieren kann.
- Überlegen Sie, welche Aktionen Sie durchführen, verlangsamen Sie sich und machen Sie sie offensichtlich. Wann immer Sie eine Aktion durchführen müssen (sagen wir, ein Symbol anklicken), nehmen Sie es langsam und machen Sie es offensichtlich. Also, zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie es hervor oder zoomen Sie es (nicht immer, je nachdem, ob es als nötig empfunden wird).
  - Halten Sie für einen Moment inne.
  - Klicken Sie auf das Symbol.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen möchten. Nicht jeder wird Ihr Video in High-Definition ansehen können. Sie werden in der Lage sein, bestimmte Teile in der Nachbearbeitung zu zoomen, aber es ist auch eine gute Idee, die App vorher zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, unbekannt oder hässlich aussehen.

### Aufnahme

Wenn Sie den Workflow aufzeichnen, den Sie zeigen möchten, gehen Sie den Ablauf reibungslos und stetig durch. Halten Sie für ein bis zwei Sekunden an, wenn Sie sich in entscheidenden Momenten befinden – beispielsweise, wenn Sie gerade dabei sind, auf einen Button zu klicken. Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das, was Sie demonstrieren möchten, wichtig sind.

Denken Sie daran, am Ende für ein paar Sekunden zu pausieren, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster in der richtigen Größe einstellen, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster für die Aufnahme das richtige Seitenverhältnis hat.

### Nachbearbeitung

In der Nachbearbeitung können Sie wichtige Momente hervorheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren werden, wie:

- Auf Teile des Bildschirms zoomen.
- Den Hintergrund verblassen.

Heben Sie wichtige Momente des Workflows hervor, besonders dort, wo die Details schwer zu erkennen sind: beispielsweise das Klicken auf ein bestimmtes Symbol oder das Eingeben einer bestimmten URL. Zielen Sie darauf ab, dass das Highlight 1-2 Sekunden dauert. Es ist eine gute Idee, am Anfang und Ende der Highlights einen kurzen Übergang (200-300 Millisekunden) hinzuzufügen.

Verwenden Sie hierbei etwas Zurückhaltung: Machen Sie das Video nicht zu einem ständigen Wechsel von Zooms hinein und hinaus, sonst wird den Zuschauern schlecht.

Schneiden Sie das Video auf das gewünschte Seitenverhältnis, falls erforderlich.

### Hochladen

Derzeit müssen Videos auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, beispielsweise auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort zum Hochladen haben.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, dann tut es das wahrscheinlich nicht).

### Einbetten

Sobald es hochgeladen ist, können Sie das Video auf der Seite mit dem [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs)-Makro einbetten. Dies wird durch Einfügen des folgenden an der Stelle auf Ihrer Seite, an der das Video erscheinen soll, erreicht:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Der einzige Parameter des Makroaufrufs ist die Zeichensequenz am Ende der Video-URL, nicht die gesamte URL. Wenn zum Beispiel die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, wäre der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
