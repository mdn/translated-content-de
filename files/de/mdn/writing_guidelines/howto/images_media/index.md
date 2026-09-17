---
title: Anleitung zum Hinzufügen von Bildern, Medien und Assets
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen.

## Medien mit shared-assets speichern und verwenden

Bevor Sie Bilder oder Medien hinzufügen (insbesondere wenn Sie eine Technologie demonstrieren, bei der der Medieninhalt zweitrangig ist), prüfen Sie, ob bereits etwas vorhanden ist, das Sie im [Repository mdn/shared-assets](https://github.com/mdn/shared-assets) verwenden können.
Behandeln Sie dieses Repository als **Medienbibliothek**, die Sie durchsuchen können, um eine geeignete Ressource für ein Beispiel auszuwählen, ohne sich um Speicherung, Bereitstellung oder Lizenzierung kümmern zu müssen.

Das Repository enthält Audio, Video, Schriftarten, Bilder wie Fotos, Diagramme und Symbole sowie verschiedene Dateien wie PDFs, Untertiteldateien, Farbprofile usw.
Falls das Repository nichts Geeignetes enthält, können Sie Ihre Ressourcen zusammen mit allen Quelldateien für die Medien hinzufügen, die Sie einbinden möchten.
Beispiele finden Sie im [HTTP-Verzeichnis des shared-assets-Repositorys](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Informationen zur Verwendung von Inhalten aus dem shared-assets-Repository auf einer MDN-Seite finden Sie im Abschnitt [Using shared assets in documentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) der Projekt-README.

## Vektorformate verwenden

Wenn Sie Bilder hinzufügen, insbesondere Diagramme, sollten Sie im Allgemeinen die Verwendung eines Vektorformats wie SVG aus folgenden Gründen in Betracht ziehen:

- **Autorinnen und Autoren können SVG direkt bearbeiten**, indem sie eine beliebige IDE oder Online-Tools verwenden.
  Die Bearbeitung einer .png-Datei erfordert normalerweise, ein Asset von Grund auf neu zu erstellen oder Bildbearbeitungssoftware zu verwenden, was fehleranfällig ist und visuelle oder Komprimierungsartefakte verursachen kann.
- **SVG kann von Git verglichen werden**. Im Gegensatz dazu wird bei einer Änderung die gesamte Datei als Änderung in Binärdaten verglichen. Eine .png-Datei mit 1 MB erhöht daher bei jedem Merge-Commit, bei dem sie geändert wurde, die Repository-Größe um 1 MB.
- **Flexible UX**. SVGs sind Vektorformate und erscheinen daher bei keiner Skalierung unscharf.

## Bilder in Content-Repositories committen

Wenn das Repository für gemeinsame Assets für Ihren Anwendungsfall nicht geeignet ist, können Sie Bilder zu einem Content-Repository (en-US oder translated-content) hinzufügen.
Um einem Dokument ein Bild hinzuzufügen, fügen Sie die Bilddatei zum Ordner des Dokuments hinzu und referenzieren Sie das Bild dann aus der Datei `index.md` des Dokuments mithilfe der [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder des entsprechenden HTML-Elements `<img>`.

Gehen wir ein Beispiel durch:

1. Beginnen Sie mit einem neuen Arbeits-Branch, der die neuesten Inhalte aus dem Branch `main` des Remote `mdn` enthält.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to make sure dependencies are up-to-date
   npm install
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild zum Dokumentordner hinzu. In diesem Beispiel nehmen wir an,
   dass wir dem Dokument `files/en-us/web/css` ein neues Bild hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie für jedes Bild `filecheck` aus; das Programm kann eine Meldung ausgeben, wenn etwas nicht stimmt.
   Weitere Details finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   npm run filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument mithilfe der Markdown-Syntax für Bilder und geben Sie zwischen den Klammern [beschreibenden Text für das Attribut `alt`](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) an, der das Bild beschreibt. Alternativ können Sie ein {{htmlelement("img")}}-Element mit dem Attribut `alt` in `files/en-us/web/css/index.md` einfügen:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie sie. Anschließend pushen Sie Ihren Branch in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Nun können Sie Ihren [Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) erstellen.

## Alternativtexte zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss einen `alt`-Text enthalten.
Alt-Attribute sollten kurz sein und alle relevanten Informationen vermitteln, die das Bild überträgt.
Denken Sie beim Schreiben der Bildbeschreibung an die wertvollen Informationen im Bild und daran, wie Sie diese Informationen jemandem vermitteln würden, der den Inhalt der Seite lesen, aber keine Bilder laden kann.

Stellen Sie sicher, dass der Alternativtext für das Bild auf seinem Kontext basiert.
Wenn das Foto des Hundes Fluffy ein Avatar neben einer Rezension für Yuckymeat-Hundefutter ist, ist `alt="Fluffy"` angemessen.
Wenn dasselbe Foto Teil von Fluffys Adoptionsseite einer Tierrettung ist, sind die durch das Bild vermittelten Informationen für potenzielle Hundehaltende relevant, etwa `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Fell und einem Tennisball im Maul."`.
Der umgebende Text enthält wahrscheinlich Fluffys Größe und Rasse, sodass es redundant wäre, diese aufzunehmen.
Vermeiden Sie es, das Bild zu detailliert zu beschreiben: Die potenziell adoptierende Person muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

Beschreiben Sie bei Screenshots, was Sie aus dem Bild erfahren, anstatt den Inhalt des Screenshots detailliert aufzuzählen, und lassen Sie Informationen weg, die Lesende nicht benötigen oder bereits kennen.
Wenn Sie beispielsweise auf einer Seite über das Ändern von Einstellungen in Bing einen Screenshot eines Bing-Suchergebnisses haben, nehmen Sie den Suchbegriff oder die Anzahl der Ergebnisse usw. nicht auf, da diese nicht der Zweck des Bildes sind.
Beschränken Sie den Alternativtext auf das betreffende Thema: das Ändern von Einstellungen in Bing.
Der Alternativtext könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unter dem Suchfeld."` lauten.
Nehmen Sie weder „Screenshot“ noch „Bing“ auf, da Nutzende nicht wissen müssen, dass es sich um einen Screenshot handelt, und bereits wissen, dass es Bing ist, da sie sich auf einer Seite befinden, die das Ändern der Bing-Einstellungen erklärt.

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

Während rein dekorative Bilder ein leeres `alt` haben sollten, sollten Bilder, die der MDN-Dokumentation hinzugefügt werden, einen Zweck erfüllen und benötigen daher eine Beschreibung, die kein leerer String ist.
Hinweise zu Alternativtexten finden Sie unter [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/). Dort erfahren Sie, wie Sie ein `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie so weit wie möglich komprimiert sind, ohne die Qualität zu beeinträchtigen, um die Downloadgröße für unsere Lesenden zu reduzieren.
Andernfalls schlägt unser CI-Prozess fehl und die Build-Ergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind.

Bilder lassen sich am besten mit dem integrierten Komprimierungswerkzeug komprimieren.
Sie können ein Bild passend komprimieren, indem Sie den Befehl `filecheck` mit der Option `--save-compression` verwenden.
Diese Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version.
Zum Beispiel:

```bash
npm run filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine besonders videolastige Website, aber es gibt bestimmte Stellen, an denen Videoinhalte als Teil eines Artikels sinnvoll sind.
Dieser Artikel erläutert, wann das Einbinden von Videos in Artikeln angemessen ist, und bietet Tipps zum Erstellen einfacher, aber effektiver Videos mit begrenztem Budget.

Es gibt mehrere Argumente gegen die Verwendung von Videoinhalten in technischer Dokumentation, insbesondere für Referenzmaterial und Leitfäden für fortgeschrittene Nutzende. Einige davon sind unten aufgeführt:

- Video ist linear.
  Menschen lesen Online-Dokumentation üblicherweise nicht linear, indem sie am Anfang beginnen und bis zum Ende weiterlesen.
  _Sie überfliegen sie._
  Videos sind sehr schwer zu überfliegen — sie zwingen Nutzende dazu, den Inhalt von Anfang bis Ende zu konsumieren.
- Video ist weniger informationsdicht als Text.
  Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Anweisungen zu lesen.
- Videos sind in Bezug auf die Dateigröße groß und daher teurer und weniger performant als Text.
- Videos haben Probleme mit der Barrierefreiheit: Sie sind im Allgemeinen teurer zu produzieren als Text, insbesondere aber zu lokalisieren oder für Screenreader-Nutzende nutzbar zu machen.
- Anknüpfend an den letzten Punkt: Videos sind wesentlich schwieriger zu bearbeiten, zu aktualisieren und zu pflegen als Textinhalte.

> [!NOTE]
> Es lohnt sich, diese Probleme auch bei der Erstellung von Videos im Hinterkopf zu behalten, damit Sie versuchen können, einige davon zu entschärfen.

Es gibt viele beliebte Video-Websites, die zahlreiche Video-Tutorials anbieten.
MDN Web Docs ist keine videogesteuerte Website, aber Videos haben in bestimmten Kontexten einen Platz auf MDN Web Docs.

Wir verwenden Videos am häufigsten bei der Beschreibung einer Art von Anweisungssequenz oder mehrstufigem Workflow, die bzw. der sich nur schwer prägnant mit Worten beschreiben lässt: _„Tun Sie dies, dann das, und dann passiert Folgendes.“_
Dies ist besonders nützlich bei der Beschreibung von Prozessen, die mehrere Anwendungen oder Fenster übergreifen und GUI-Interaktionen beinhalten, die sich möglicherweise nicht einfach beschreiben lassen: _„Klicken Sie nun auf die Schaltfläche oben links, die ein wenig wie eine Ente aussieht.“_

In solchen Fällen ist es oft effektiver, einfach **zu zeigen**, was Sie meinen.

### Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten folgende Eigenschaften haben:

- **Kurz**: Versuchen Sie, Videos unter 30 Sekunden zu halten, idealerweise unter 20 Sekunden.
  Das ist kurz genug, um die Aufmerksamkeitsspanne der Lesenden nicht stark zu beanspruchen.
- **Einfach**: Versuchen Sie, den Workflow einfach zu gestalten, mit 2 bis 4 klar abgegrenzten Schritten.
  Dadurch sind sie leichter nachzuvollziehen.
- **Stumm**: Audio macht Videos deutlich ansprechender, aber ihre Erstellung ist wesentlich zeitaufwändiger.
  Außerdem macht die Erklärung dessen, was Sie tun, die Videos wesentlich länger und erhöht die Kosten der Lokalisierung — sowohl finanziell als auch zeitlich.

Um etwas Komplexeres zu erklären, können Sie kurze Videos und Screenshots mit Text abwechseln.
Der Text kann die im Video vermittelten Punkte verstärken, und Nutzende können je nach Wunsch den Text oder das Video verwenden.
Ein gutes Beispiel finden Sie unter [Working with the Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector).

Darüber hinaus sollten Sie die folgenden Tipps berücksichtigen:

- Das Video wird vor dem Einbetten auf YouTube hochgeladen.
  Wir empfehlen für diesen Anwendungsfall ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 16:9, damit es den gesamten Anzeigebereich ausfüllt und keine unschönen schwarzen Balken oben und unten (oder links und rechts) im Video entstehen.
  Sie könnten beispielsweise eine Auflösung von 1024×576, 1152×648 oder 1280×720 wählen.
- Nehmen Sie das Video in HD auf, damit es nach dem Hochladen besser aussieht.
- Für DevTools-Videos ist es oft sinnvoll, ein zum Seiteninhalt kontrastierendes Theme zu wählen. Wählen Sie beispielsweise das dunkle Theme, wenn die Beispiel-Webseite ein helles Theme verwendet. Dadurch ist leichter zu erkennen, was passiert und wo die DevTools beginnen und die Seite endet.
- Zoomen Sie bei DevTools-Videos so weit wie möglich in die DevTools hinein, während Sie weiterhin alles zeigen, was Sie zeigen möchten, und es noch gut aussieht.
- Stellen Sie sicher, dass das, was Sie demonstrieren möchten, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es sinnvoll wäre, das Bildschirmaufzeichnungswerkzeug so zu konfigurieren, dass es einen visuellen Indikator für Mausklicks hinzufügt.

### Video-Tools und Software

Sie benötigen ein Werkzeug, um das Video aufzunehmen.
Diese reichen von kostenlos bis teuer und von einfach bis komplex.
Wenn Sie bereits Erfahrung im Erstellen von Videoinhalten haben, umso besser.
Andernfalls empfehlen wir, mit einem einfachen Werkzeug zu beginnen und anschließend zu etwas Komplexerem überzugehen, falls Ihnen die Erstellung von Videoinhalten Spaß macht und Sie interessantere Produktionen erstellen möchten.

Die folgende Tabelle enthält einige Empfehlungen für gute Einsteigerwerkzeuge:

| Werkzeug                  | Betriebssystem        | Kosten    | Funktionen für die Nachbearbeitung verfügbar? |
| ------------------------- | --------------------- | --------- | --------------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                            |
| CamStudio                 | Windows               | Kostenlos | Eingeschränkt                                 |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                            |
| QuickTime Player          | macOS                 | Kostenlos | Nein, ermöglicht nur einfache Aufnahmen       |
| ScreenFlow                | macOS                 | Mittel    | Ja                                            |
| Kazam                     | Linux                 | Kostenlos | Minimal                                       |

#### Tipps für QuickTime Player

Wenn Sie macOS verwenden, sollte QuickTime Player verfügbar sein.
Die Aufnahmeschritte mit diesem Werkzeug sind recht einfach:

1. Wählen Sie im Hauptmenü _File_ > _New Screen Recording_.
2. Klicken Sie im Feld _Screen Recording_ auf die Aufnahmeschaltfläche, die rote runde Schaltfläche.
3. Ziehen Sie ein Rechteck um den Bereich des Bildschirms, den Sie aufnehmen möchten.
4. Klicken Sie auf die Schaltfläche _Start Recording_.
5. Führen Sie die Aktionen aus, die Sie aufnehmen möchten.
6. Klicken Sie auf die Schaltfläche _Stop_.
7. Wählen Sie im Hauptmenü _File_ > _Export As..._ > _1080p_, um in hoher Auflösung zu speichern.

### Weitere Ressourcen

- [How to Add Custom Callouts to Screencast Videos in ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Workflow zum Erstellen von Videos

In den folgenden Abschnitten werden die allgemeinen Schritte beschrieben, die Sie zum Erstellen eines Videos und zum Hinzufügen zu einem MDN-Web-Docs-Artikel ausführen sollten.

Planen Sie zunächst den Ablauf, den Sie aufnehmen möchten: Überlegen Sie, welche Start- und Endpunkte am besten geeignet sind.
Stellen Sie sicher, dass der Desktop-Hintergrund und Ihr Browserprofil aufgeräumt sind.
Planen Sie Größe und Positionierung der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden werden.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen werden, und üben Sie die Schritte einige Male, bevor Sie sie aufnehmen:

- Beginnen Sie ein Video nicht mitten in einem Prozess — überlegen Sie, ob Zuschauende genügend Kontext haben werden, damit Ihre Aktionen für sie verständlich sind.
  Bei einem kurzen DevTools-Video ist es beispielsweise sinnvoll, zunächst die DevTools zu öffnen, damit sich Zuschauende orientieren können.
- Überlegen Sie, welche Aktionen Sie ausführen, verlangsamen Sie sie und machen Sie sie deutlich.
  Wenn Sie eine Aktion ausführen müssen, etwa auf ein Symbol klicken, gehen Sie langsam vor und machen Sie es offensichtlich. Zum Beispiel:
  - Bewegen Sie die Maus über das Symbol.
  - Heben Sie es hervor oder zoomen Sie hinein — nicht immer, je nachdem, ob es erforderlich erscheint.
  - Halten Sie kurz inne.
  - Klicken Sie auf das Symbol.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen werden.
  Nicht alle werden Ihr Video in hoher Auflösung ansehen können.
  Sie können bestimmte Teile in der Nachbearbeitung vergrößern, aber es ist auch sinnvoll, die Anwendung vorher zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so weit, dass die von Ihnen gezeigten Benutzeroberflächen ungewohnt oder unschön aussehen.

#### Aufnahme

Führen Sie beim Aufnehmen des Workflows, den Sie zeigen möchten, den Ablauf gleichmäßig und ruhig aus.
Halten Sie an Schlüsselmomenten ein oder zwei Sekunden inne — beispielsweise, wenn Sie eine Schaltfläche anklicken möchten.
Stellen Sie sicher, dass der Mauszeiger keine Symbole oder Texte verdeckt, die für das, was Sie demonstrieren möchten, wichtig sind.

Denken Sie daran, am Ende ein oder zwei Sekunden innezuhalten, um das Ergebnis des Ablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein sehr einfaches Werkzeug wie QuickTime Player verwenden und eine Nachbearbeitung aus irgendeinem Grund nicht möglich ist, sollten Sie Ihre Fenster in der richtigen Größe einrichten, um den Bereich zu zeigen, den Sie zeigen möchten. In den Firefox DevTools können Sie das [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass der Viewport das richtige Seitenverhältnis für die Aufnahme hat.

#### Nachbearbeitung

In der Nachbearbeitung können Sie Schlüsselmomente hervorheben.
Eine Hervorhebung kann aus mehreren Dingen bestehen, die Sie häufig kombinieren werden, zum Beispiel:

- In Teile des Bildschirms hineinzoomen.
- Den Hintergrund ausblenden.

Heben Sie Schlüsselmomente des Workflows hervor, insbesondere dort, wo Details schwer zu erkennen sind: etwa beim Klicken auf ein bestimmtes Symbol oder beim Eingeben einer bestimmten URL.
Die Hervorhebung sollte 1–2 Sekunden dauern.
Es ist sinnvoll, am Anfang und Ende der Hervorhebungen einen kurzen Übergang von 200–300 Millisekunden hinzuzufügen.

Gehen Sie hierbei sparsam vor: Machen Sie das Video nicht zu einer ununterbrochenen Abfolge aus Hinein- und Herauszoomen, da Zuschauenden sonst schlecht werden kann.
Schneiden Sie das Video bei Bedarf auf das gewünschte Seitenverhältnis zu.

#### Hochladen und Einbetten von Videos

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt werden zu können, beispielsweise auf den Kanal [mozhacks](https://www.youtube.com/user/mozhacks/videos).
Bitten Sie ein Mitglied des MDN-Web-Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als „nicht gelistet“, wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt. Wenn es ein kurzes Video ist, trifft dies wahrscheinlich zu.

### Einbetten

Nach dem Hochladen können Sie das Video mithilfe des Makros [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs) in die Seite einbetten.
Fügen Sie dazu an der Stelle Ihrer Seite, an der das Video erscheinen soll, Folgendes ein:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Die einzige Eigenschaft, die der Makroaufruf akzeptiert, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL.
Wenn die Video-URL beispielsweise `https://www.youtube.com/watch?v=ELS2OOUvxIw` lautet, ist der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [Using SVG format instead of .png images](https://github.com/orgs/mdn/discussions/631) MDN-GitHub-Diskussion
