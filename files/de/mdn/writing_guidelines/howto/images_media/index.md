---
title: Wie Sie Bilder, Medien und Ressourcen hinzufügen
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen können.

## Medien mit shared-assets speichern und verwenden

Bevor Sie Bilder oder Medien hinzufügen (insbesondere, wenn Sie eine Technologie demonstrieren, bei der die Medieninhalte sekundär sind), prüfen Sie, ob etwas Passendes bereits im [mdn/shared-assets-Repository](https://github.com/mdn/shared-assets) existiert. Behandeln Sie dieses Repository wie eine **Medienbibliothek**, die Sie durchsuchen können, um eine geeignete Ressource für ein Beispiel auszuwählen, ohne sich um Speicherplatz, Bereitstellung oder Lizenzierung sorgen zu müssen.

Das Repository enthält Audio-, Video-, Schriftdateien, Bilder wie Fotos, Diagramme und Icons sowie verschiedene Dateien wie PDFs, Untertitel, Farbprofile usw. Falls im Repository nichts Passendes vorhanden ist, können Sie Ihre eigenen Ressourcen zusammen mit den Quelldateien für die Medien, die Sie einfügen möchten, hinzufügen. Beispiele finden Sie im [HTTP-Verzeichnis des shared-assets-Repositorys](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Um etwas aus dem shared-assets-Repository auf einer MDN-Seite zu verwenden, lesen Sie den Abschnitt [Using shared assets in documentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) in der Projekt-README.

## Verwendung von Vektorformaten

Im Allgemeinen sollten Sie, wenn Sie Bilder hinzufügen, insbesondere Diagramme, ein Vektorformat wie SVG verwenden. Dies aus den folgenden Gründen:

- **Autoren können SVG direkt bearbeiten** mit jeder IDE oder Online-Tools. Das Bearbeiten einer `.png`-Datei erfordert oft die Neuerstellung eines Assets oder die Verwendung von Bildbearbeitungssoftware, was fehleranfällig ist und visuelle oder Komprimierungsartefakte einfügen kann.
- **SVG kann von Git differenziert werden**. Im Gegensatz dazu wird bei einer Änderung einer Binärdatei die gesamte Datei als geändert betrachtet, sodass eine `.png`-Datei von 1 MB bei jeder Änderung die Repository-Größe um 1 MB erhöht.
- **Flexibles UX**. SVGs sind Vektorformate, weshalb sie bei jeder Skalierung nicht verschwommen erscheinen.

## Bilder in Inhalts-Repositories übernehmen

Falls das shared-assets-Repository für Ihren Anwendungsfall nicht geeignet ist, können Sie Bilder in einem Inhaltsrepository (en-US oder translated-content) hinzufügen. Um ein Bild zu einem Dokument hinzuzufügen, legen Sie die Bilddatei im Ordner des Dokuments ab und referenzieren Sie sie anschließend in der Datei `index.md` des Dokuments entweder mit [Markdown-Bildsyntax](https://github.github.com/gfm/#images) oder dem entsprechenden HTML-`<img>`-Element.

Gehen wir ein Beispiel durch:

1. Beginnen Sie mit einem neuen Arbeitsbranch, der den aktuellsten Inhalt des `main`-Branches des `mdn`-Remote enthält.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" to make sure dependencies are up-to-date
   yarn
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild dem Dokumentordner hinzu. Nehmen wir für dieses Beispiel an, wir fügen dem Dokument `files/en-us/web/css` ein neues Bild hinzu.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` bei jedem Bild aus. Es wird möglicherweise warnen, wenn etwas nicht stimmt. Weitere Informationen finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   yarn filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument unter Verwendung der Markdown-Syntax für Bilder und geben Sie [einen beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) zwischen den Klammern ein, der das Bild beschreibt. Alternativ können Sie ein {{htmlelement("img")}}-Element mit `alt`-Attribut im Dokument `files/en-us/web/css/index.md` hinzufügen:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie diese. Anschließend pushen Sie Ihren Branch in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Nun sind Sie bereit, eine [Pull-Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) zu erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, `![]` und `<img>`, muss einen `alt`-Text enthalten. Alt-Attribute sollten kurz und dennoch so aussagekräftig sein, dass sie die relevanten Informationen des Bildes vermitteln. Beim Schreiben der Bildbeschreibung sollten Sie an die wertvollen Informationen des Bildes denken und überlegen, wie Sie diese Informationen jemandem mitteilen würden, der die Seiteninhalte lesen, aber keine Bilder laden kann.

Lesen Sie den Alternativtext im Kontext des Bildes. Wenn ein Foto von Fluffy, dem Hund, als Avatar neben einer Bewertung für Yuckymeat-Hundefutter angezeigt wird, wäre `alt="Fluffy"` angebracht. Ist dasselbe Foto jedoch Teil von Fluffys Adoption-Seite eines Tierheims, sind die Informationen, die das Bild vermittelt, für potenzielle Hundebesitzer relevant, zum Beispiel `alt="Fluffy, ein dreifarbiger Terrier mit sehr kurzem Fell, hält einen Tennisball im Maul."`. Der umliegende Text enthält wahrscheinlich schon Angaben zu Fluffys Größe und Rasse, deshalb wäre es redundant, diese zu wiederholen.

Verzichten Sie auf zu detaillierte Beschreibungen des Bildes: Der potenzielle Tierelternteil muss nicht wissen, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

In Bezug auf Screenshots schreiben Sie, was Sie aus dem Bild lernen können, ohne die Inhalte des Screenshots im Detail zu beschreiben. Lassen Sie Informationen aus, die die Leser nicht benötigen oder bereits wissen. Zum Beispiel, wenn Sie sich auf einer Seite über das Ändern von Einstellungen bei Bing befinden und ein Screenshot eines Bing-Suchergebnisses zeigen, sollten Sie keine Suchbegriffe oder die Anzahl der Ergebnisse einfügen, da diese für das Bild nicht relevant sind. Begrenzen Sie den Alternativtext auf das jeweilige Thema: Wie man Einstellungen bei Bing ändert. Der Alternativtext könnte `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unterhalb des Suchfelds."` lauten. Vermeiden Sie es, "Screenshot" oder "Bing" zu erwähnen, da der Nutzer weiß, dass es sich um Bing handelt und auf einer entsprechenden Seite ist.

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

Rein dekorative Bilder sollten ein leeres `alt` haben. Bilder, die zur MDN-Dokumentation hinzugefügt werden, sollten jedoch eine Funktion haben und daher eine nicht leere Beschreibungszeichenfolge erfordern. Für Hinweise zum Alternativtext siehe [Ein alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) und lernen Sie, wie Sie das `alt`-Attribut für Bilder in verschiedenen Situationen verwenden.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite bei den MDN Web Docs hinzufügen, sollten Sie sicherstellen, dass sie möglichst stark komprimiert sind (ohne Qualitätsverlust), um die Download-Größe für unsere Leser zu minimieren. Falls das nicht der Fall ist, schlägt unser CI-Prozess fehl, und die Build-Ergebnisse warnen vor zu großen Bildern.

Die beste Methode, um Bilder zu komprimieren, besteht in der Verwendung des integrierten Komprimierungstools. Mit dem `filecheck`-Kommando und der Option `--save-compression` können Sie ein Bild entsprechend komprimieren. Diese Option komprimiert das Bild maximal und ersetzt das Original durch die komprimierte Version. Zum Beispiel:

```bash
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine seitenübergreifend videointensive Seite, aber es gibt bestimmte Situationen, in denen Videos sinnvoll als Bestandteil eines Artikels verwendet werden können. Dieser Artikel behandelt, wann Videos in Artikeln passend sind, und bietet Tipps, wie man einfache, aber effektive Videos mit wenig Budget erstellt.

Es gibt verschiedene Argumente gegen die Verwendung von Videoinhalten für technische Dokumentationen, besonders im Bereich von Referenzmaterial und fortgeschrittenen Leitfäden. Einige davon sind:

- **Video ist linear.** Menschen neigen dazu, Online-Dokumentationen nicht linear zu lesen — sie scannen. Videos hingegen sind schwer zu scannen und zwingen den Nutzer, den gesamten Inhalt anzusehen.
- **Video ist weniger informationsdicht als Text.** Es dauert länger, ein Video anzusehen, das etwas erklärt, als die entsprechenden Textanleitungen zu lesen.
- **Video ist speicherintensiv und damit teurer und weniger performant als Text.**
- **Video hat Barrierefreiheitsprobleme.** Es ist generell teurer in der Produktion als Text, insbesondere beim Übersetzen oder Anpassen für Screenreader-Nutzer.
- **Videos sind schwerer zu bearbeiten/aktualisieren/pflegen als Textinhalte.**

> [!NOTE]
> Behalten Sie diese Probleme im Hinterkopf, selbst wenn Sie Videos erstellen, damit Sie versuchen können, einige dieser Probleme zu mildern.

Es gibt viele populäre Videoseiten, die zahlreiche Tutorials bieten. MDN Web Docs ist keine videogesteuerte Plattform, aber Videos haben in bestimmten Kontexten ihren Platz.

Wir verwenden Videos am häufigsten, um eine Art von Anleitungssequenz oder mehrstufigen Workflow zu beschreiben, die schwer prägnant in Worte zu fassen ist: _"Machen Sie dies, dann jenes, und dann passiert Folgendes"_. Besonders nützlich ist es, wenn Prozesse beschrieben werden sollen, die mehrere Anwendungen oder Fenster umfassen und GUI-Interaktionen beinhalten, die nicht leicht beschreibbar sind: _"Klicken Sie jetzt auf die Schaltfläche in der oberen linken Ecke, die wie eine Ente aussieht."_

In solchen Fällen ist es oft effektiver, einfach zu **zeigen**, was gemeint ist.

### Richtlinien für Videoinhalte

Videoinhalte für MDN Web Docs sollten sein:

- **Kurz:** Versuchen Sie, Videos unter 30 Sekunden, idealerweise unter 20 Sekunden zu halten. Dies ist kurz genug, um die Aufmerksamkeitsspanne der Leser nicht übermäßig zu beanspruchen.
- **Einfach:** Machen Sie den Workflow einfach, mit 2–4 deutlichen Schritten. Dies macht ihn leichter nachzuvollziehen.
- **Still:** Audio macht Videos zwar ansprechender, aber auch zeitaufwendiger in der Erstellung. Zudem verlängert das Erklären das Video und erhöht die Kosten (sowohl finanziell als auch zeitlich) für die Lokalisierung.

Um etwas Komplexeres zu erklären, können Sie eine Kombination aus kurzen Videos und Screenshots verwenden, ergänzt durch Text. Der Text kann die im Video erläuterten Punkte verstärken, und die Nutzer können sich wahlweise auf den Text oder das Video verlassen. Ein gutes Beispiel finden Sie unter [Arbeiten mit dem Animationsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector).

In Betracht zu ziehen sind außerdem folgende Tipps:

- Das Video wird letztendlich vor dem Einbetten auf YouTube hochgeladen. Ein {{Glossary("aspect_ratio", "16:9-Bildverhältnis")}} wird hierfür empfohlen, um den gesamten Betrachtungsrahmen auszufüllen und unschöne schwarze Balken oben und unten (oder links und rechts) zu vermeiden. Geeignete Auflösungen sind z. B. 1024×576, 1152×648 oder 1280×720.
- Nehmen Sie das Video in HD auf, damit es hochgeladen besser aussieht.
- Für DevTools-Videos ist es oft eine gute Idee, ein kontrastierendes Thema zur Webseiten-Farbgebung zu wählen. Beispielsweise könnte das dunkle Thema gewählt werden, wenn die Beispielwebseite hell gestaltet ist. So ist besser sichtbar, was passiert, und was DevTools angehört und was zur Seite gehört.
- Zoomen Sie in DevTools-Videos so weit hinein, dass alles, was Sie zeigen möchten, sichtbar ist und dennoch gut aussieht.
- Achten Sie darauf, dass das, was Sie demonstrieren möchten, nicht vom Mauszeiger verdeckt wird.
- Überlegen Sie, ob es hilfreich wäre, im Bildschirmaufnahmewerkzeug eine visuelle Anzeige der Mausklicks zu aktivieren.

### Videotools und Software

Für die Aufnahme benötigen Sie ein Werkzeug. Diese reichen von kostenlos bis teuer und von einfach bis komplex. Falls Sie bereits Erfahrung im Erstellen von Video-Inhalten haben, hervorragend. Falls nicht, beginnen Sie mit einem einfachen Werkzeug und steigern Sie sich erst bei Interesse an komplexeren Produktionen.

Die folgende Tabelle gibt Empfehlungen für gute Einsteiger-Werkzeuge:

| Werkzeug                  | OS                    | Kosten    | Funktionen für Nachbearbeitung? |
| ------------------------- | --------------------- | --------- | ------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                              |
| CamStudio                 | Windows               | Kostenlos | Begrenzt                        |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                              |
| QuickTime Player          | macOS                 | Kostenlos | Nein, nur einfache Aufnahme     |
| ScreenFlow                | macOS                 | Mittel    | Ja                              |
| Kazam                     | Linux                 | Kostenlos | Minimal                         |

#### Tipps für QuickTime Player

Falls Sie macOS verwenden, sollte QuickTime Player verfügbar sein. Die Schritte zur Aufnahme mit diesem Programm sind recht einfach:

1. Wählen Sie _Datei_ > _Neue Bildschirmaufnahme_ aus dem Hauptmenü.
2. Klicken Sie im Fenster _Bildschirmaufnahme_ auf die Aufnahmetaste (den roten runden Button).
3. Ziehen Sie ein Rechteck um den Bildschirmbereich, den Sie aufnehmen möchten.
4. Drücken Sie die Taste _Aufnahme starten_.
5. Führen Sie die gewünschten Aktionen aus, die Sie aufnehmen möchten.
6. Drücken Sie die Taste _Stopp_.
7. Wählen Sie _Datei_ > _Exportieren als..._ > _1080p_, um die Aufnahme in HD zu speichern.

### Weitere Ressourcen

- [Anleitung: Wie man benutzerdefinierte Callouts zu Screencast-Videos in ScreenFlow hinzufügt](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Workflow zur Videoerstellung

Die folgenden Abschnitte beschreiben die allgemeinen Schritte, die Sie befolgen sollten, um ein Video zu erstellen und zu einem Artikel der MDN Web Docs hinzuzufügen.

Planen Sie zunächst den Ablauf, den Sie einfangen möchten: Überlegen Sie die besten Punkte zum Starten und Beenden. Achten Sie darauf, dass der Desktop-Hintergrund und Ihr Browserprofil aufgeräumt sind. Planen Sie die Größe und Position der Browserfenster, besonders wenn Sie mehrere Fenster verwenden möchten.

Planen Sie sorgfältig, was Sie tatsächlich aufnehmen möchten, und üben Sie die Schritte vor der Aufnahme ein paar Mal:

- Starten Sie Videos nicht mitten in einem Prozess — überlegen Sie, ob die Zuschauer genügend Kontext haben, um Ihre Aktionen zu verstehen. In einem kurzen DevTools-Video ist es beispielsweise eine gute Idee, mit dem Öffnen der DevTools zu beginnen, damit der Zuschauer sich orientieren kann.
- Überlegen Sie Ihre Aktionen, verlangsamen Sie diese und machen Sie sie offensichtlich. Wann immer Sie eine Aktion (z. B. das Klicken auf ein Symbol) durchführen müssen, gehen Sie langsam vor und machen Sie es deutlich. Zum Beispiel:

  - Bewegen Sie die Maus über das Symbol.
  - Markieren oder zoomen Sie heran (nicht immer nötig, je nach Bedarf).
  - Halten Sie für einen Moment inne.
  - Klicken Sie auf das Symbol.

- Planen Sie die Zoomstufen für die Teile der Benutzeroberfläche, die Sie zeigen möchten. Nicht jeder kann Ihr Video in HD ansehen. Sie können bestimmte Teile in der Nachbearbeitung heranzoomen, aber es ist auch eine gute Idee, die Anwendung vorab zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so stark, dass die Benutzeroberflächen, die Sie zeigen, unkenntlich oder unattraktiv wirken.

#### Aufnahme

Während der Aufnahme des Workflows, den Sie demonstrieren möchten, gehen Sie den Ablauf ruhig und gleichmäßig durch. Halten Sie an wichtigen Momenten — z. B. bevor Sie eine Schaltfläche anklicken — für ein bis zwei Sekunden inne. Achten Sie darauf, dass der Mauszeiger keine wichtigen Symbole oder Texte verdeckt, die Sie zeigen möchten.

Denken Sie daran, am Ende ein oder zwei Sekunden zu pausieren, damit das Ergebnis des Workflows zu sehen ist.

> [!NOTE]
> Wenn Sie ein sehr einfaches Werkzeug wie QuickTime Player verwenden und eine Nachbearbeitung aus irgendeinem Grund nicht möglich ist, sollten Sie Ihre Fenster in der richtigen Größe einrichten, um den gewünschten Bereich zu zeigen. In den Firefox DevTools können Sie das [Linealwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) verwenden, um sicherzustellen, dass der Ansichtsbereich die richtige Seitenverhältnisgröße für die Aufnahme hat.

#### Nachbearbeitung

In der Nachbearbeitung können Sie wichtige Momente hervorheben. Ein Highlight kann aus verschiedenen Dingen bestehen, die Sie oft kombinieren, wie:

- Vergrößern bestimmter Bildschirmteile.
- Den Hintergrund verblassen lassen.

Heben Sie wichtige Momente des Workflows hervor, besonders dort, wo die Details schwer zu erkennen sind, z. B. beim Anklicken eines bestimmten Symbols oder Eingeben einer bestimmten URL. Ziel ist, dass das Highlight für 1-2 Sekunden sichtbar ist. Eine kurze Übergangszeit (200-300 Millisekunden) am Anfang und Ende der Highlights ist empfehlenswert.

Zeigen Sie Zurückhaltung hierbei: Vermeiden Sie ein konstantes Ein- und Auszoomen, da dies Sehstörungen beim Zuschauer verursacht. Schneiden Sie das Video bei Bedarf auf das gewünschte Seitenverhältnis zurecht.

#### Hochladen und Einbetten von Videos

Videos müssen derzeit auf YouTube hochgeladen werden, um auf MDN Web Docs angezeigt werden zu können, beispielsweise im [mozhacks](https://www.youtube.com/user/mozhacks/videos)-Kanal. Bitten Sie ein Mitglied des MDN-Web-Docs-Teams, das Video hochzuladen, falls Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als „Nicht gelistet“, wenn es außerhalb des Kontexts der Seite keinen Sinn ergibt (bei kurzen Videos ist dies wahrscheinlich der Fall).

### Einbetten

Nachdem das Video hochgeladen wurde, können Sie es mithilfe des [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs)-Makros einbetten. Dies wird erreicht, indem Sie Folgendes an der gewünschten Position in Ihrer Seite einfügen:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Das einzige Argument, das der Makroaufruf benötigt, ist die Zeichenfolge am Ende der Video-URL, nicht die gesamte URL. Wenn z. B. die Video-URL `https://www.youtube.com/watch?v=ELS2OOUvxIw` lautet, ist der erforderliche Makroaufruf:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [Verwendung von SVG-Format anstelle von .png-Bildern](https://github.com/orgs/mdn/discussions/631) MDN GitHub-Diskussion
