---
title: Wie Sie Bilder, Medien und Assets hinzufügen
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen können.

## Medien mit shared-assets speichern und verwenden

Bevor Sie Bilder oder Medien hinzufügen (insbesondere wenn Sie eine Technologie demonstrieren, bei der der Medieninhalt zweitrangig ist), prüfen Sie, ob es etwas bereits Vorhandenes im [mdn/shared-assets repository](https://github.com/mdn/shared-assets) gibt, das Sie nutzen können. Behandeln Sie dieses Repository als **Medienbibliothek**, die Sie durchsuchen können, um eine geeignete Ressource für ein Beispiel auszuwählen, ohne sich um Speicherung, Bereitstellung oder Lizenzierung zu kümmern.

Das Repository enthält Audio, Video, Schriften, Bilder wie Fotos, Diagramme und Symbole sowie verschiedene Dateien wie PDFs, Untertiteldateien, Farbprofile und so weiter. Wenn im Repository nichts Passendes vorhanden ist, können Sie Ihre Ressourcen zusammen mit allen Quelldateien für die einzubindenden Medien hinzufügen. Sie können Beispiele im [HTTP-Verzeichnis der shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http) Repository finden.

Um Inhalte aus dem shared-assets Repository auf einer MDN-Seite zu verwenden, siehe den Abschnitt [Verwendung von shared-assets in der Dokumentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) der Projekt-README.

## Verwendung von Vektorformaten

Im Allgemeinen, wenn Sie Bilder hinzufügen, insbesondere Diagramme, sollten Sie die Verwendung eines Vektorformats wie SVG in Betracht ziehen, aus folgenden Gründen:

- **Autoren können SVG direkt bearbeiten** mit jedem IDE oder Online-Tool. Die Bearbeitung einer .png erfordert normalerweise die Neuerstellung eines Assets von Grund auf oder die Verwendung einer Bildbearbeitungssoftware, was fehleranfällig ist und visuelle oder Kompressionsartefakte einführen kann.
- **SVG kann von Git diffen werden**. Im Gegensatz dazu wird bei Binärdateien beim Ändern eine ganze Datei als Änderung gedifft, sodass eine .png von 1MB die Repository-Größe bei jedem Merge-Commit um 1MB erhöht, wenn sie geändert wird.
- **Flexible UX**. SVGs sind Vektorformate, daher werden sie bei keiner Skalierung unscharf.

## Bilder in Inhalts-Repositories commiten

Wenn das shared-assets Repository für Ihren Anwendungsfall nicht geeignet ist, können Sie Bilder zu einem Inhalts-Repository (en-US oder übersetzter Inhalt) hinzufügen. Um ein Bild zu einem Dokument hinzuzufügen, fügen Sie Ihre Bilddatei in den Ordner des Dokuments ein und verweisen Sie dann auf das Bild innerhalb der `index.md` Datei des Dokuments unter Verwendung der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder das entsprechende HTML `<img>` Element.

Lassen Sie uns ein Beispiel durchgehen:

1. Beginnen Sie mit einem neuen Arbeitszweig mit dem neuesten Inhalt vom `main`-Zweig des `mdn` Remote.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to make sure dependencies are up-to-date
   npm install
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild in den Dokumentenordner hinzu. Für dieses Beispiel nehmen wir an,
   dass wir ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus, das möglicherweise eine Warnung ausgibt, wenn etwas nicht stimmt.
   Für weitere Details siehe den Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   npm run filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Verweisen Sie in dem Dokument auf Ihr Bild mit der Markdown-Syntax für Bilder und geben Sie [beschreibenden Text für das `alt` Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) zwischen den Klammern an, die das Bild beschreiben, oder fügen Sie ein {{htmlelement("img")}} Element mit `alt` Attribut in `files/en-us/web/css/index.md` ein:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie diese sowie
   pushen Sie Ihren Zweig zu Ihrem Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt sind Sie bereit, Ihren
   [Pull Request](https://docs.github.com/en/pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss `alt` Text enthalten. Alt-Attribute sollten kurz sein und alle relevanten Informationen liefern, die das Bild vermittelt. Beim Verfassen der Bildbeschreibung denken Sie an die wertvollen Informationen des Bildes und wie Sie diese Information jemandem übermitteln würden, der die Inhalte der Seite lesen kann, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext für das Bild auf dessen Kontext basiert. Wenn das Foto von Fluffy, dem Hund, ein Avatar neben einer Rezension über Yuckymeat Hundefutter ist, ist `alt="Fluffy"` angemessen. Wenn dasselbe Foto Teil von Fluffys Tieradoptionsseite ist, sind die im Bild übermittelten Informationen für zukünftige Hundebesitzer relevant, wie `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Haar, mit einem Tennisball im Mund."`. Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, sodass die Aufnahme redundant wäre. Verzichten Sie darauf, das Bild allzu detailliert zu beschreiben: Der potenzielle Hundebesitzer muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

Bei Screenshots schreiben Sie, was Sie aus dem Bild lernen, und verzichten Sie darauf, den Inhalt des Screenshots detailliert zu beschreiben. Lassen Sie Informationen weg, die die Leser nicht benötigen oder bereits kennen. Wenn Sie beispielsweise auf einer Seite sind, die das Ändern von Einstellungen bei Bing behandelt, und Sie einen Screenshot eines Bing-Suchergebnisses haben, schließen Sie nicht den Suchbegriff oder die Anzahl der Ergebnisse ein, da diese nicht der Punkt des Bildes sind. Beschränken Sie das `alt` auf das aktuelle Thema: wie man Einstellungen in Bing ändert. Das `alt` könnte lauten `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfeldes."`. Fügen Sie nicht "Screenshot" oder "Bing" hinzu, da der Benutzer nicht wissen muss, dass es sich um einen Screenshot handelt, und bereits weiß, dass es Bing ist, da er sich auf einer Seite befindet, die das Ändern der Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die zur MDN-Dokumentation hinzugefügt werden, einen Zweck haben und daher eine nicht-leere Zeichenfolgenbeschreibung erfordern. Für Hinweise zum Alt-Text siehe [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu lernen, wie man ein Alt-Attribut für Bilder in verschiedenen Situationen verwendet.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind (ohne die Qualität zu verschlechtern), um die Download-Größe für unsere Leser zu sparen. Tatsächlich wird unser CI-Prozess fehlschlagen und die Build-Ergebnisse warnen Sie, wenn einige Ihrer Bilder zu groß sind.

Der beste Weg, die Bilder zu komprimieren, ist die Verwendung des integrierten Komprimierungstools. Sie können ein Bild angemessen komprimieren, indem Sie den `filecheck` Befehl mit der `--save-compression` Option verwenden. Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
npm run filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine sehr videolastige Seite, aber es gibt bestimmte Bereiche, wo die Verwendung von Videoinhalten als Teil eines Artikels sinnvoll ist. Dieser Artikel diskutiert, wann das Einfügen von Videos in Artikel angemessen ist, und gibt Tipps, wie man einfache, aber effektive Videos mit geringem Budget erstellt.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten für technische Dokumentation, insbesondere für Referenzmaterialien und Leitfäden auf fortgeschrittenem Niveau. Einige davon sind unten aufgeführt:

- Video ist linear. Menschen neigen nicht dazu, online Dokumentation in einer linearen Abfolge zu lesen, beginnend am Anfang und lesend bis zum Ende. _Sie scannen._ Video ist wirklich schwer zu scannen — es zwingt den Benutzer, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text. Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Video ist groß in Bezug auf die Dateigröße und daher teurer und weniger performant als Text.
- Video hat Zugänglichkeitsprobleme: Es ist im Allgemeinen teurer zu produzieren als Text, insbesondere zu lokalisieren oder für Bildschirmleser-Benutzer zugänglich zu machen.
- In Anknüpfung an den letzten Punkt ist Video viel schwieriger zu bearbeiten/aktualisieren/pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme im Hinterkopf zu behalten, auch wenn Sie Videos erstellen, damit Sie versuchen können, einige von ihnen abzumildern.

Es gibt viele beliebte Videoseiten, die viele Video-Tutorials bereitstellen.
MDN Web Docs ist keine videogesteuerte Seite, aber Video hat an bestimmten Stellen auf MDN Web Docs einen Platz.

Wir verwenden Video am häufigsten, wenn wir eine Art von Anleitungssequenz oder mehrstufigen Arbeitsprozess beschreiben, der schwer in Worten prägnant zu beschreiben wäre: _"tun Sie dies, dann tun Sie das, dann wird dies passieren"_.
Es ist besonders nützlich, wenn versucht wird, Prozesse zu beschreiben, die sich über mehrere Anwendungen oder Fenster erstrecken und GUI-Interaktionen beinhalten, die möglicherweise nicht einfach zu beschreiben sind: _"klicken Sie jetzt auf den Button in der Nähe der oberen linken Ecke, der ein wenig wie eine Ente aussieht"_.

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was Sie meinen.

### Richtlinien für Videoinhalte

Videoinhalte für die MDN Web Docs sollten sein:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden.
  Dies ist kurz genug, um keine großen Anforderungen an die Aufmerksamkeitsspanne der Leser zu stellen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu gestalten, 2-4 verschiedene Teile.
  Dies macht es einfacher zu folgen.
- **Still**: Audio macht Videos viel ansprechender, aber sie sind viel zeitaufwändiger zu erstellen.
  Außerdem macht es das Video viel länger und erhöht die Kosten (sowohl finanziell als auch in Bezug auf Zeit) der Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Mischung aus kurzen Videos und Screenshots verwenden, die mit Text durchsetzt sind.
Der Text kann helfen, die im Video aufgeführten Punkte zu verstärken, und der Benutzer kann sich auf den Text oder das Video verlassen, je nachdem, was er bevorzugt.
Siehe [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) für ein gutes Beispiel.

Darüber hinaus sollten Sie die folgenden Tipps in Betracht ziehen:

- Das Video wird am Ende auf YouTube hochgeladen, bevor es eingebettet wird.
  Wir empfehlen ein 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} für diesen Zweck, sodass es den gesamten Anzeigerahmen füllt und Sie nicht mit hässlichen schwarzen Balken oben und unten (oder links und rechts) in Ihrem Video enden.
  Also zum Beispiel könnten Sie eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es besser aussieht, wenn es hochgeladen wird.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastreiches Thema zum Seiteninhalt zu wählen. Zum Beispiel, wählen Sie das dunkle Thema, wenn die Beispielwebseite hell ist. Es ist leichter zu sehen, was passiert, und wo die DevTools beginnen und die Seite endet.
- Für DevTools-Videos zoomen Sie die DevTools so weit wie möglich, während Sie noch alles zeigen, was Sie zeigen möchten, und es anständig aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es nützlich wäre, das Bildschirmaufzeichnungstool so zu konfigurieren, dass es einen visuellen Indikator für Maus-Klicks hinzufügt.

### Video-Tools und Software

Sie benötigen ein Tool zum Aufnehmen des Videos. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Wenn Sie bereits Erfahrung im Erstellen von Videoinhalten haben, großartig. Wenn nicht, empfehlen wir, dass Sie mit einem einfachen Tool beginnen und dann zu etwas Komplexerem übergehen, wenn Sie anfangen, Spaß an der Erstellung von Videoinhalten zu haben und interessantere Produktionen erstellen möchten.

Die folgende Tabelle bietet einige Empfehlungen für gute Einsteiger-Tools:

| Tool                      | OS                    | Kosten    | Post-Produktionsfunktionen verfügbar?   |
| ------------------------- | --------------------- | --------- | --------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                      |
| CamStudio                 | Windows               | Kostenlos | Eingeschränkt                           |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                      |
| QuickTime Player          | macOS                 | Kostenlos | Nein, ermöglicht nur einfache Aufnahmen |
| ScreenFlow                | macOS                 | Mittel    | Ja                                      |
| Kazam                     | Linux                 | Kostenlos | Minimal                                 |

#### QuickTime Player Tipps

Wenn Sie macOS verwenden, sollten Sie QuickTime Player zur Verfügung haben. Die Aufnahmeschritte mit diesem Tool sind ziemlich einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Drücken Sie im _Bildschirmaufnahme_ Fenster den Aufnahmeknopf (den roten runden Knopf).
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Drücken Sie den _Aufnahme starten_ Knopf.
5. Führen Sie die gewünschten Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie den _Stopp_ Knopf.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_ aus dem Hauptmenü, um in hoher Auflösung zu speichern.

### Andere Ressourcen

- [Anleitung: Hinzufügen benutzerdefinierter Callouts zu Screencast-Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Workflow zum Erstellen von Videos

Die folgenden Abschnitte beschreiben die allgemeinen Schritte, die Sie befolgen möchten, um ein Video zu erstellen und es zu einem MDN Web Docs Artikel hinzuzufügen.

Zuerst planen Sie den Fluss, den Sie aufnehmen möchten: überdenken Sie die besten Punkte, um zu beginnen und zu enden. Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browserprofil sauber sind. Planen Sie die Größe und Position der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen werden, und üben Sie die Schritte ein paar Mal, bevor Sie sie aufnehmen:

- Beginnen Sie ein Video nicht mitten in einem Prozess — überlegen Sie, ob der Betrachter genügend Kontext für Ihre Aktionen hat, um sie zu verstehen. In einem kurzen DevTools-Video zum Beispiel ist es eine gute Idee, mit dem Öffnen der DevTools zu beginnen, um dem Betrachter die Orientierung zu erleichtern.
- Überlegen Sie, was Ihre Aktionen sind, machen Sie sie langsamer und offensichtlich. Wann immer Sie eine Aktion durchführen müssen (z.B. ein Symbol anklicken), machen Sie es langsam und offensichtlich. Zum Beispiel:
  - Bewegen Sie die Maus über das Symbol.
  - Hervorheben oder zoomen (nicht immer, je nachdem, ob es nötig erscheint).
  - Eine Sekunde pausieren.
  - Auf das Symbol klicken.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen werden.
  Nicht jeder wird in der Lage sein, Ihr Video in hoher Auflösung anzusehen.
  Sie werden in der Lage sein, bestimmte Teile in der Nachproduktion zu zoomen, aber es ist auch eine gute Idee, die App vorher zu zoomen.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die von Ihnen gezeigten UIs anfangen, unansehnlich oder unverständlich zu wirken.

#### Aufzeichnung

Beim Aufzeichnen des Workflows, den Sie zeigen möchten, gehen Sie den Fluss reibungslos und stetig durch.
Pausieren Sie ein oder zwei Sekunden, wenn Sie an Schlüsselstellen sind — beispielsweise wenn Sie kurz davor sind, einen Button zu klicken.
Stellen Sie sicher, dass der Mauscursor keine Symbole oder Texte verdeckt, die für das Verständnis dessen, was Sie demonstrieren wollen, wichtig sind.

Denken Sie daran, am Ende ein oder zwei Sekunden zu pausieren, um das Ergebnis des Workflows zu zeigen.

> [!NOTE]
> Wenn Sie ein wirklich einfaches Tool wie QuickTime Player verwenden und die Nachproduktion aus irgendeinem Grund keine Option ist, sollten Sie Ihre Fenster auf die richtige Größe einrichten, um den gewünschten Bereich zu zeigen. In den Firefox DevTools können Sie das [Ruler Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass das Viewport das richtige Seitenverhältnis für die Aufnahme hat.

#### Nachbearbeitung

Sie können Schlüsselstellen in der Nachbearbeitung hervorheben. Ein Highlight kann aus ein paar Dingen bestehen, die Sie oft kombinieren werden, wie:

- Auf bestimmte Teile des Bildschirms zoomen.
- Den Hintergrund ausblenden.

Heben Sie Schlüsselstellen des Workflows hervor, insbesondere dort, wo das Detail schwer zu erkennen ist: beispielsweise das Klicken auf ein bestimmtes Symbol oder das Eingeben einer bestimmten URL.
Zielen Sie darauf, dass das Highlight 1-2 Sekunden dauert.
Es ist eine gute Idee, eine kurze Übergangszeit (200-300 Millisekunden) zu Beginn und am Ende der Highlights hinzuzufügen.

Seien Sie hier zurückhaltend: Machen Sie das Video nicht zu einer ständigen Abfolge von Zoomfahrten, sonst wird den Zuschauern schwindelig. Schneiden Sie das Video bei Bedarf auf das gewünschte Seitenverhältnis zu.

#### Hochladen und Einbetten des Videos

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt zu werden, beispielsweise auf den [mozhacks](https://www.youtube.com/user/mozhacks/videos) Kanal. Bitten Sie ein Mitglied des MDN Web Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als "Nicht gelistet", wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (wenn es ein kurzes Video ist, wird es wahrscheinlich nicht).

### Einbetten

Sobald hochgeladen, können Sie das Video auf der Seite unter Verwendung des [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs) Macros einbetten. Dies wird erreicht, indem Sie Folgendes an der Stelle, an der das Video erscheinen soll, auf Ihrer Seite einfügen:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die der Macroaufruf übernimmt, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL. Beispielsweise, wenn die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` lautet, wäre der erforderliche Macroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [Verwendung von SVG-Format statt .png Bilder](https://github.com/orgs/mdn/discussions/631) MDN GitHub-Diskussion
