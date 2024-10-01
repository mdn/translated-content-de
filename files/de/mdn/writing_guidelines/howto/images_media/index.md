---
title: Wie man Bilder und Medien hinzufügt
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

## Hinzufügen von Bildern

Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei in den Ordner des Dokuments ein und verweisen dann innerhalb der Datei `index.md` des Dokuments mit der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder dem entsprechenden HTML-`<img>`-Element auf das Bild.

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

2. Fügen Sie Ihr Bild dem Dokumentordner hinzu. Für dieses Beispiel nehmen wir an,
   dass wir ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` auf jedem Bild aus, das meldet sich möglicherweise, wenn etwas falsch ist.
   Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie im Dokument auf Ihr Bild mit der Markdown-Syntax für Bilder und geben Sie [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn/Accessibility/HTML#text_alternatives) in den Klammern an, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie sie,
   und pushen Sie Ihren Zweig zu Ihrem Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihren
   [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Hinzufügen von alternativem Text zu Bildern

Jedes Bild, `![]` und `<img>`, muss einen `alt`-Text enthalten.
Alt-Attribute sollten kurz sein und alle relevanten Informationen enthalten, die das Bild vermittelt.
Wenn Sie die Bildbeschreibung schreiben, denken Sie über die wertvollen Informationen des Bildes nach und wie Sie diese Informationen jemandem übermitteln würden, der den Inhalt der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der alternative Text für das Bild auf dessen Kontext basiert.
Wenn das Foto von Fluffy dem Hund ein Avatar neben einer Bewertung für Hundefutter von Yuckymeat ist, ist `alt="Fluffy"` angemessen.
Wenn dasselbe Foto Teil von Fluffys Tierrettungs-Adoptionsseite ist, sind die im Bild vermittelten Informationen für potenzielle Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."`.
Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, daher wäre es redundant, diese einzuschließen.
Vermeiden Sie es, das Bild zu detailliert zu beschreiben: Ein potenzieller Besitzer muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, und nicht den Inhalt des Screenshots im Detail, und lassen Sie Informationen weg, die Leser nicht benötigen oder bereits wissen.
Wenn Sie sich zum Beispiel auf einer Seite über das Ändern von Einstellungen bei Bing befinden und einen Screenshot eines Bing-Suchergebnisses haben, sollten Sie nicht den Suchbegriff oder die Anzahl der Ergebnisse usw. aufnehmen, da dies nicht der Punkt des Bildes ist.
Begrenzen Sie den `alt` auf das Thema: wie man Einstellungen bei Bing ändert.
Der `alt`-Text könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` lauten.
Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt, und bereits weiß, dass es Bing ist, da er sich auf einer Seite befindet, die das Ändern von Bing-Einstellungen erklärt.

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

Obwohl rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die der MDN-Dokumentation hinzugefügt werden, einen Zweck haben und daher eine nicht-leere Beschreibungszeichenfolge erfordern.

## Bilder komprimieren

Wenn Sie Bildern zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich (ohne Qualitätsverlust) komprimiert sind, um die Downloadgröße für unsere Leser zu sparen.
Tatsächlich wird unser CI-Prozess fehlschlagen und die Build-Ergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind, wenn Sie dies nicht tun.

Der beste Weg, die Bilder zu komprimieren, ist die Verwendung des integrierten Komprimierungswerkzeugs.
Sie können ein Bild angemessen komprimieren, indem Sie den Befehl `filecheck` mit der Option `--save-compression` verwenden.
Diese Option komprimiert das Bild so weit wie möglich und ersetzt die Originalversion durch die komprimierte Version.
Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos hinzufügen

MDN Web Docs ist keine sehr video-lastige Seite, aber es gibt bestimmte Stellen, an denen es sinnvoll ist, Videoinhalte als Teil eines Artikels zu verwenden.
Dieser Artikel behandelt, wann es angebracht ist, Videos in Artikeln zu integrieren, und gibt Tipps, wie Sie einfache, aber effektive Videos mit kleinem Budget erstellen können.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, insbesondere für Referenzmaterialien und fortgeschrittene Leitfäden. Einige davon sind unten aufgeführt:

- Video ist linear.
  Menschen tendieren nicht dazu, Online-Dokumentationen linear zu lesen, von Anfang bis Ende.
  _Sie scannen._
  Video ist wirklich schwer zu scannen - es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text.
  Es dauert länger, ein Video zu konsumieren, das etwas erklärt, als die gleichwertigen Anweisungen zu lesen.
- Video ist in Bezug auf Dateigröße groß und daher teurer und weniger performant als Text.
- Video hat Zugänglichkeitsprobleme: Es ist in der Regel teurer zu produzieren als Text, aber besonders in der Lokalisierung oder Nutzbarkeit für Bildschirmleserbenutzer.
- Ausgehend vom letzten Punkt ist Video viel schwieriger zu bearbeiten/aktualisieren/warten als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, selbst wenn Sie Videos erstellen, damit Sie versuchen können, einige von ihnen zu mildern.

Es gibt viele beliebte Video-Websites, die viele Video-Tutorials anbieten.
MDN Web Docs ist keine video-getriebene Seite, aber Video hat in bestimmten Kontexten seinen Platz auf MDN Web Docs.

Wir verwenden Videos oft, wenn eine Art von Anleitungssequenz oder ein mehrstufiger Workflow beschrieben wird, der schwer in Worten zusammenzufassen wäre: _"tun Sie dies, dann tun Sie das, dann passiert das"_.
Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die mehrere Anwendungen oder Fenster überschreiten und GUI-Interaktionen beinhalten, die möglicherweise nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf die Schaltfläche oben links, die ein bisschen wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

## Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden.
  Dies ist kurz genug, um nicht zu große Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu halten, 2-4 verschiedene Teile.
  Dadurch sind sie leichter zu folgen.
- **Still**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwändiger zu erstellen.
  Außerdem verlängert das Erklären dessen, was Sie tun, die Videos erheblich und erhöht die Kosten (sowohl finanziell als auch im Hinblick auf die Zeit) für die Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, die mit Text durchsetzt sind.
Der Text kann die im Video gemachten Punkte verstärken, und der Benutzer kann sich je nach Wunsch auf den Text oder das Video stützen.
Ein gutes Beispiel finden Sie unter [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector).

Darüber hinaus sollten Sie die folgenden Tipps in Betracht ziehen:

- Das Video wird vor dem Einbetten bei YouTube hochgeladen.
  Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diese Verwendung, damit es den gesamten Betrachtungsrahmen ausfüllt und Sie keine unschönen schwarzen Balken oben und unten (oder links und rechts) in Ihrem Video haben.
  Sie können beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastreiches Thema zum Seiteninhalt zu wählen. Wählen Sie beispielsweise das dunkle Thema, wenn die Beispielwebseite hell ist. Es ist einfacher zu sehen, was passiert und wo die DevTools beginnen und die Seite endet.
- Zoomen Sie bei DevTools-Videos die DevTools so weit wie möglich, während Sie alles zeigen, was Sie zeigen möchten, und es gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren wollen, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufnahme-Tool so zu konfigurieren, dass ein visueller Indikator für Mausklicks hinzugefügt wird.

## Richtlinien für Videotools

Sie benötigen ein Tool zur Aufnahme des Videos.
Diese reichen von kostenlos bis teuer und einfach bis komplex.
Wenn Sie bereits Erfahrung in der Erstellung von Videoinhalten haben, großartig.
Falls nicht, empfehlen wir, mit einem einfachen Tool zu beginnen und sich dann zu etwas Komplexerem zu steigern, wenn Sie Freude an der Erstellung von Videoinhalten entwickeln und interessantere Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Starter-Tools:

| Tool                      | OS                    | Kosten    | Post-Produktionsmerkmale verfügbar?  |
| ------------------------- | --------------------- | --------- | ------------------------------------ |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                   |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                             |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                   |
| QuickTime Player          | macOS                 | Kostenlos | Nein, erlaubt nur einfache Aufnahmen |
| ScreenFlow                | macOS                 | Mittel    | Ja                                   |
| Kazam                     | Linux                 | Kostenlos | Minimal                              |

### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben.
Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. In dem _Bildschirmaufnahme_-Feld klicken Sie auf die Aufnahme-Schaltfläche (die runde rote Schaltfläche).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie die _Aufnahme starten_-Schaltfläche.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die _Stopp_-Schaltfläche.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um als HD zu speichern.

### Weitere Ressourcen

- [Wie Sie benutzerdefinierte Callouts zu Screencast-Videos in Screenflow hinzufügen](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Arbeitsablauf zur Erstellung von Videos

Die folgenden Unterabschnitte beschreiben die allgemeinen Schritte, die Sie befolgen möchten, um ein Video zu erstellen und es zu einem MDN-Web-Docs-Artikel hinzuzufügen.

### Vorbereitung

Planen Sie zunächst den Ablauf, den Sie festhalten möchten: Überlegen Sie, wo die besten Start- und Endpunkte sind.

Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browser-Profil sauber sind.
Planen Sie die Größe und Positionierung der Browserfenster, besonders wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen möchten, und üben Sie die Schritte einige Male, bevor Sie sie aufnehmen:

- Starten Sie kein Video mitten in einem Prozess — überlegen Sie, ob der Betrachter genügend Kontext für Ihre Aktionen hat, um sie zu verstehen.
  In einem kurzen DevTools-Video ist es zum Beispiel eine gute Idee, mit dem Öffnen der DevTools zu beginnen, um dem Betrachter Orientierung zu geben.
- Überlegen Sie, was Ihre Aktionen sind, verlangsamen Sie sich und machen Sie sie offensichtlich.
  Wann immer Sie eine Aktion durchführen müssen (z. B. auf ein Symbol klicken), tun Sie dies langsam und machen Sie es offensichtlich. Zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Markieren oder zoomen (nicht immer, je nachdem, ob es nötig erscheint).
  - Halten Sie für einen Moment inne.
  - Klicken Sie auf das Symbol.

- Planen Sie Zoomstufen für die Teile der Benutzeroberfläche ein, die Sie zeigen möchten.
  Nicht jeder wird in der Lage sein, Ihr Video in hoher Auflösung zu sehen.
  Sie können bestimmte Teile in der Nachbearbeitung vergrößern, aber es ist auch eine gute Idee, die App vorher zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die Benutzeroberflächen, die Sie zeigen, anfangen, unkenntlich oder hässlich auszusehen.

### Aufnahme

Wenn Sie den Workflow, den Sie zeigen möchten, aufnehmen, gehen Sie den Ablauf reibungslos und stetig durch.
Halten Sie an wichtigen Stellen – beispielsweise wenn Sie kurz davor sind, auf eine Schaltfläche zu klicken – ein oder zwei Sekunden inne.
Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die wichtig sind für das, was Sie demonstrieren möchten.

Denken Sie daran, am Ende eine Sekunde oder zwei zu pausieren, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachbearbeitung aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster in der richtigen Größe einrichten, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Ansichtsfenster das richtige Seitenverhältnis für die Aufnahme hat.

### Nachbearbeitung

In der Nachbearbeitung können Sie Schlüsselstellen hervorheben.
Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren, wie:

- Vergrößern Sie Teile des Bildschirms.
- Faden Sie den Hintergrund aus.

Heben Sie Schlüsselstellen des Workflows hervor, besonders dort, wo die Details schwer zu erkennen sind: Auf ein bestimmtes Symbol klicken oder eine bestimmte URL eingeben, zum Beispiel.
Zielen Sie darauf ab, dass das Highlight 1-2 Sekunden dauert.
Es ist eine gute Idee, am Anfang und Ende der Hervorhebungen eine kurze Überblendung (200-300 Millisekunden) hinzuzufügen.

Seien Sie hier zurückhaltend: Machen Sie das Video nicht zu einem ständigen Prozession des Ein- und Auszoomens, sonst wird den Zuschauern schwindelig.

Schneiden Sie das Video auf das gewünschte Seitenverhältnis zu, falls erforderlich.

### Hochladen

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, zum Beispiel auf dem [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal.
Fragen Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Platz dafür haben.

> [!NOTE]
> Markieren Sie das Video als "nicht gelistet", wenn es außerhalb des Kontextes der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, tut es dies wahrscheinlich nicht).

### Einbetten

Sobald das Video hochgeladen ist, können Sie es in die Seite einbetten, indem Sie das [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) Makro verwenden.
Dies erfolgt durch das Einfügen des folgenden Codes auf Ihrer Seite an der Stelle, an der Sie das Video erscheinen lassen möchten:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die durch den Makroaufruf genommen wird, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL.
Zum Beispiel, wenn die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` ist, wird der erforderliche Makroaufruf sein:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
