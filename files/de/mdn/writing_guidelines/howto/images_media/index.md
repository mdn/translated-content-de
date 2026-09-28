---
title: Bilder, Medien und andere Ressourcen hinzufügen
short-title: Medien hinzufügen
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Diese Seite beschreibt, wie Sie Bilder und Medien zu Dokumentationsseiten auf MDN hinzufügen.

## Medien mit shared-assets speichern und verwenden

Bevor Sie Bilder oder Medien hinzufügen – insbesondere wenn Sie eine Technologie demonstrieren, bei der der Medieninhalt zweitrangig ist –, prüfen Sie, ob im [Repository mdn/shared-assets](https://github.com/mdn/shared-assets) bereits etwas Geeignetes vorhanden ist.
Betrachten Sie dieses Repository als **Medienbibliothek**, in der Sie eine passende Ressource für ein Beispiel auswählen können, ohne sich um Speicherung, Bereitstellung oder Lizenzierung kümmern zu müssen.

Das Repository enthält Audio- und Videodateien, Schriftarten, Bilder wie Fotos, Diagramme und Icons sowie verschiedene Dateien wie PDFs, Untertiteldateien und Farbprofile.
Wenn Sie dort nichts Geeignetes finden, können Sie Ihre Ressourcen zusammen mit den Quelldateien der Medien hinzufügen, die Sie einbinden möchten.
Beispiele finden Sie im [HTTP-Verzeichnis des Repositorys shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Wie Sie Ressourcen aus dem Repository shared-assets auf einer MDN-Seite verwenden, erfahren Sie im Abschnitt [Gemeinsam genutzte Ressourcen in der Dokumentation verwenden](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) der Projekt-README.

## Vektorformate verwenden

Wenn Sie Bilder, insbesondere Diagramme, hinzufügen, sollten Sie aus folgenden Gründen nach Möglichkeit ein Vektorformat wie SVG verwenden:

- **SVG lässt sich direkt bearbeiten** – mit jeder IDE oder mit Online-Tools.
  Um eine .png-Datei zu bearbeiten, muss das Bild meist von Grund auf neu erstellt oder eine Bildbearbeitungssoftware verwendet werden. Dabei können leicht Fehler sowie sichtbare Artefakte oder Kompressionsartefakte entstehen.
- **Git kann Unterschiede zwischen SVG-Dateien anzeigen**. Bei einer geänderten .png-Datei wird dagegen die gesamte Binärdatei als Änderung behandelt. Eine .png-Datei mit 1 MB erhöht somit bei jedem Merge-Commit, der sie ändert, die Größe des Repositorys um 1 MB.
- **Flexible Darstellung**. SVGs sind Vektorformate und wirken daher bei keiner Skalierung unscharf.

## Bilder in Content-Repositorys committen

Wenn das Repository für gemeinsam genutzte Ressourcen für Ihren Anwendungsfall nicht geeignet ist, können Sie Bilder zu einem Content-Repository (`en-US` oder `translated-content`) hinzufügen.
Legen Sie dazu die Bilddatei im Ordner des Dokuments ab und referenzieren Sie sie in der Datei `index.md` des Dokuments mit der [Markdown-Syntax für Bilder](https://github.github.com/gfm/#images) oder dem entsprechenden HTML-Element `<img>`.

Gehen wir ein Beispiel durch:

1. Beginnen Sie mit einem neuen Arbeitsbranch, der den aktuellen Inhalt des Branches `main` des Remotes `mdn` enthält.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to make sure dependencies are up-to-date
   npm install
   git checkout -b my-images
   ```

2. Fügen Sie Ihr Bild zum Dokumentordner hinzu. In diesem Beispiel nehmen wir an, dass Sie ein neues Bild zum Dokument `files/en-us/web/css` hinzufügen.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Führen Sie `filecheck` für jedes Bild aus. Das Tool meldet mögliche Probleme.
   Weitere Informationen finden Sie im Abschnitt [Bilder komprimieren](#bilder_komprimieren).

   ```bash
   npm run filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referenzieren Sie Ihr Bild im Dokument mit der Markdown-Syntax für Bilder. Schreiben Sie zwischen die eckigen Klammern einen [beschreibenden Text für das `alt`-Attribut](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives). Alternativ können Sie in `files/en-us/web/css/index.md` ein {{htmlelement("img")}}-Element mit `alt`-Attribut einfügen:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Fügen Sie alle gelöschten, erstellten und geänderten Dateien zum Commit hinzu, committen Sie sie und pushen Sie Ihren Branch in Ihren Fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Jetzt können Sie Ihren [Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) erstellen.

## Alternativtext zu Bildern hinzufügen

Jedes Bild, ob `![]` oder `<img>`, muss einen `alt`-Text enthalten.
Alt-Attribute sollten kurz sein und alle relevanten Informationen vermitteln, die das Bild enthält.
Überlegen Sie beim Verfassen der Bildbeschreibung, welche wichtigen Informationen das Bild vermittelt und wie Sie diese jemandem beschreiben würden, der den Seiteninhalt lesen, aber die Bilder nicht laden kann.

Achten Sie darauf, den Alternativtext auf den Kontext des Bildes abzustimmen.
Wenn das Foto der Hündin Fluffy als Avatar neben einer Bewertung des Hundefutters Yuckymeat steht, ist `alt="Fluffy"` angemessen.
Ist dasselbe Foto dagegen Teil einer Vermittlungsseite für Fluffy, sind für Interessierte andere Informationen wichtig, etwa `alt="Fluffy, eine dreifarbige Terrierhündin mit sehr kurzem Fell und einem Tennisball im Maul."`.
Größe und Rasse von Fluffy stehen wahrscheinlich bereits im umgebenden Text; sie zusätzlich zu nennen, wäre daher redundant.
Beschreiben Sie das Bild nicht übermäßig detailliert: Für Interessierte ist es nicht wichtig, ob der Hund drinnen oder draußen ist oder ein rotes Halsband und eine blaue Leine trägt.

Beschreiben Sie bei Screenshots, welche Erkenntnis das Bild vermittelt, statt seinen gesamten Inhalt aufzuzählen. Lassen Sie Informationen weg, die Lesende nicht benötigen oder bereits kennen.
Wenn Sie beispielsweise auf einer Seite zum Ändern der Einstellungen in Bing einen Screenshot eines Bing-Suchergebnisses zeigen, müssen Sie weder den Suchbegriff noch die Anzahl der Ergebnisse nennen: Darum geht es bei dem Bild nicht.
Beschränken Sie den Alternativtext auf das Thema, also darauf, wie sich die Einstellungen in Bing ändern lassen.
Der Text könnte lauten: `alt="Das Einstellungssymbol befindet sich in der Navigationsleiste unter dem Suchfeld."`.
Erwähnen Sie weder „Screenshot“ noch „Bing“: Dass es sich um einen Screenshot handelt, ist nicht relevant, und dass es um Bing geht, wissen die Lesenden bereits von der Seite.

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

Rein dekorative Bilder sollten zwar ein leeres `alt`-Attribut haben, Bilder in der MDN-Dokumentation sollten jedoch einen Zweck erfüllen und benötigen daher eine nicht leere Beschreibung.
Hinweise zum Alternativtext finden Sie unter [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/). Dort erfahren Sie, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

## Bilder komprimieren

Wenn Sie Bilder zu einer Seite auf MDN Web Docs hinzufügen, sollten Sie sie so weit wie möglich komprimieren, ohne die Qualität zu beeinträchtigen. Dadurch verringert sich die Datenmenge, die unsere Lesenden herunterladen müssen.
Wenn Sie das nicht tun, schlägt unser CI-Prozess fehl und die Build-Ergebnisse warnen Sie, dass einige Ihrer Bilder zu groß sind.

Am besten verwenden Sie zum Komprimieren das integrierte Tool.
Führen Sie den Befehl `filecheck` mit der Option `--save-compression` aus, um ein Bild angemessen zu komprimieren.
Die Option komprimiert das Bild so weit wie möglich und ersetzt das Original durch die komprimierte Version.
Beispiel:

```bash
npm run filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Videos zu MDN-Seiten hinzufügen

MDN Web Docs ist keine Website, die stark auf Videos setzt. An manchen Stellen ist es jedoch sinnvoll, Videos als Teil eines Artikels zu verwenden.
In diesem Abschnitt erfahren Sie, wann Videos in Artikeln angebracht sind und wie Sie mit begrenzten Mitteln einfache, aber wirkungsvolle Videos erstellen.

Gegen Videos in technischer Dokumentation sprechen mehrere Gründe, insbesondere bei Referenzmaterial und Leitfäden für Fortgeschrittene. Einige davon sind:

- Videos sind linear.
  Menschen lesen Online-Dokumentation normalerweise nicht linear vom Anfang bis zum Ende.
  _Sie überfliegen sie._
  Videos lassen sich nur schwer überfliegen: Sie zwingen Nutzende dazu, den Inhalt von Anfang bis Ende anzusehen.
- Videos enthalten weniger Informationen pro Zeiteinheit als Text.
  Ein Video mit einer Erklärung anzusehen dauert länger, als die entsprechenden Anweisungen zu lesen.
- Videodateien sind groß und daher kostspieliger und weniger performant als Text.
- Videos sind in Bezug auf Barrierefreiheit problematisch: Ihre Erstellung ist generell aufwendiger als die von Texten, insbesondere wenn sie lokalisiert oder für Nutzende von Screenreadern zugänglich gemacht werden sollen.
- Außerdem sind Videos wesentlich schwieriger zu bearbeiten, zu aktualisieren und zu pflegen als Textinhalte.

> [!NOTE]
> Behalten Sie diese Probleme auch dann im Blick, wenn Sie Videos erstellen, damit Sie versuchen können, einige davon abzumildern.

Es gibt viele beliebte Videoplattformen mit zahlreichen Video-Tutorials.
MDN Web Docs ist keine videobasierte Website, aber in bestimmten Kontexten haben Videos dort ihren Platz.

Wir verwenden Videos meist dann, wenn wir eine Abfolge von Anweisungen oder einen mehrstufigen Arbeitsablauf beschreiben, der sich nur schwer knapp in Worte fassen lässt: _„Tun Sie dies, dann das, und anschließend geschieht Folgendes.“_
Besonders hilfreich sind Videos, wenn Prozesse mehrere Anwendungen oder Fenster umfassen und Interaktionen mit grafischen Benutzeroberflächen enthalten, die sich nicht einfach beschreiben lassen: _„Klicken Sie jetzt auf die Schaltfläche oben links, die ein wenig wie eine Ente aussieht.“_

In solchen Fällen ist es oft wirkungsvoller, einfach zu **zeigen**, was gemeint ist.

### Richtlinien für Videoinhalte

Videos für MDN Web Docs sollten folgende Eigenschaften haben:

- **Kurz**: Versuchen Sie, Videos kürzer als 30 Sekunden zu halten, idealerweise kürzer als 20 Sekunden.
  So beanspruchen sie die Aufmerksamkeit der Lesenden nicht zu sehr.
- **Einfach**: Beschränken Sie den Arbeitsablauf möglichst auf 2 bis 4 klar abgegrenzte Schritte.
  Dadurch lässt er sich leichter nachvollziehen.
- **Ohne Ton**: Ton macht Videos zwar ansprechender, ihre Erstellung aber auch deutlich zeitaufwendiger.
  Wenn Sie Ihre Handlungen zusätzlich mündlich erklären müssen, werden die Videos außerdem wesentlich länger und ihre Lokalisierung kostspieliger – sowohl finanziell als auch zeitlich.

Um etwas Komplexeres zu erklären, können Sie kurze Videos und Screenshots mit Text dazwischen kombinieren.
Der Text kann die im Video vermittelten Punkte vertiefen. Nutzende können sich nach Belieben am Text oder am Video orientieren.
Ein gutes Beispiel finden Sie unter [Mit dem Animation Inspector arbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector).

Beachten Sie außerdem die folgenden Tipps:

- Das Video wird vor dem Einbetten auf YouTube hochgeladen.
  Wir empfehlen dafür ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 16:9. So füllt das Video den gesamten Anzeigebereich aus, ohne dass oben und unten oder links und rechts unschöne schwarze Balken erscheinen.
  Sie könnten beispielsweise eine Auflösung von 1024 × 576, 1152 × 648 oder 1280 × 720 wählen.
- Nehmen Sie das Video in HD auf, damit es nach dem Hochladen besser aussieht.
- Für DevTools-Videos ist es häufig sinnvoll, ein Theme zu wählen, das sich deutlich vom Seiteninhalt abhebt. Wählen Sie beispielsweise das dunkle Theme, wenn die Beispielwebseite hell gestaltet ist. So ist leichter zu erkennen, was geschieht und wo die DevTools beginnen und die Seite endet.
- Zoomen Sie bei DevTools-Videos so weit wie möglich in die DevTools hinein, solange alles, was Sie zeigen möchten, sichtbar bleibt und gut aussieht.
- Achten Sie darauf, dass der Mauszeiger nicht verdeckt, was Sie demonstrieren möchten.
- Überlegen Sie, ob es hilfreich wäre, das Bildschirmaufnahme-Tool so einzustellen, dass Mausklicks visuell hervorgehoben werden.

### Video-Tools und Software

Sie benötigen ein Tool, um das Video aufzunehmen.
Solche Tools reichen von kostenlos bis teuer und von einfach bis komplex.
Wenn Sie bereits Erfahrung mit der Erstellung von Videoinhalten haben, umso besser.
Andernfalls empfehlen wir, mit einem einfachen Tool zu beginnen und erst dann zu einem komplexeren zu wechseln, wenn Ihnen die Videoerstellung gefällt und Sie aufwendigere Videos produzieren möchten.

Die folgende Tabelle empfiehlt einige Tools für den Einstieg:

| Tool                      | Betriebssystem        | Kosten    | Funktionen für die Nachbearbeitung? |
| ------------------------- | --------------------- | --------- | ----------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Kostenlos | Ja                                  |
| CamStudio                 | Windows               | Kostenlos | Eingeschränkt                       |
| Camtasia                  | Windows, macOS        | Hoch      | Ja                                  |
| QuickTime Player          | macOS                 | Kostenlos | Nein, nur einfache Aufnahme         |
| ScreenFlow                | macOS                 | Mittel    | Ja                                  |
| Kazam                     | Linux                 | Kostenlos | Minimal                             |

#### Tipps für QuickTime Player

Wenn Sie macOS verwenden, sollte Ihnen QuickTime Player zur Verfügung stehen.
Die Aufnahme ist mit diesem Tool recht einfach:

1. Wählen Sie im Hauptmenü _Ablage_ > _Neue Bildschirmaufnahme_.
2. Klicken Sie im Fenster _Bildschirmaufnahme_ auf die Aufnahmetaste (die runde rote Taste).
3. Ziehen Sie ein Rechteck um den Bildschirmbereich, den Sie aufnehmen möchten.
4. Klicken Sie auf _Aufnahme starten_.
5. Führen Sie die Handlungen aus, die Sie aufnehmen möchten.
6. Klicken Sie auf _Stopp_.
7. Wählen Sie im Hauptmenü _Ablage_ > _Exportieren als ..._ > _1080p_, um das Video in hoher Auflösung zu speichern.

### Arbeitsablauf zum Erstellen von Videos

Die folgenden Abschnitte beschreiben die allgemeinen Schritte, mit denen Sie ein Video erstellen und zu einem Artikel auf MDN Web Docs hinzufügen.

Planen Sie zunächst den Ablauf, den Sie aufnehmen möchten, und überlegen Sie, wo das Video am besten beginnt und endet.
Sorgen Sie für einen aufgeräumten Desktophintergrund und ein bereinigtes Browserprofil.
Planen Sie Größe und Position der Browserfenster, insbesondere wenn Sie mehrere Fenster verwenden.

Überlegen Sie sorgfältig, was Sie tatsächlich aufnehmen möchten, und üben Sie die Schritte vor der Aufnahme einige Male:

- Beginnen Sie ein Video nicht mitten in einem Prozess. Überlegen Sie, ob die Zuschauenden genügend Kontext haben, um Ihre Handlungen zu verstehen.
  Bei einem kurzen DevTools-Video ist es beispielsweise sinnvoll, zunächst die DevTools zu öffnen, damit sich die Zuschauenden orientieren können.
- Überlegen Sie, welche Handlungen Sie ausführen, gehen Sie langsam vor und machen Sie sie deutlich erkennbar.
  Wann immer Sie eine Handlung ausführen – etwa auf ein Icon klicken –, lassen Sie sich Zeit und machen Sie sie deutlich. Zum Beispiel:
  - Bewegen Sie den Mauszeiger über das Icon.
  - Heben Sie es hervor oder zoomen Sie hinein (nicht immer, sondern nur, wenn es nötig erscheint).
  - Halten Sie kurz inne.
  - Klicken Sie auf das Icon.

- Planen Sie die Zoomstufen für die Bereiche der Benutzeroberfläche, die Sie zeigen möchten.
  Nicht alle können Ihr Video in hoher Auflösung ansehen.
  Sie können bestimmte Bereiche in der Nachbearbeitung vergrößern, aber es ist sinnvoll, die Anwendung auch schon vor der Aufnahme entsprechend zu vergrößern.

> [!NOTE]
> Zoomen Sie nicht so weit hinein, dass die gezeigten Benutzeroberflächen ungewohnt oder unansehnlich wirken.

#### Aufnahme

Gehen Sie den Arbeitsablauf, den Sie zeigen möchten, bei der Aufnahme flüssig und gleichmäßig durch.
Halten Sie an wichtigen Stellen ein bis zwei Sekunden inne, beispielsweise bevor Sie auf eine Schaltfläche klicken.
Achten Sie darauf, dass der Mauszeiger keine Icons oder Texte verdeckt, die für Ihre Demonstration wichtig sind.

Halten Sie auch am Ende ein bis zwei Sekunden inne, um das Ergebnis des Arbeitsablaufs zu zeigen.

> [!NOTE]
> Wenn Sie ein sehr einfaches Tool wie QuickTime Player verwenden und eine Nachbearbeitung aus irgendeinem Grund nicht möglich ist, sollten Sie Ihre Fenster in der richtigen Größe anordnen, um den gewünschten Bereich zu zeigen. In den Firefox DevTools können Sie mit dem [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) sicherstellen, dass der Viewport das richtige Seitenverhältnis für die Aufnahme hat.

#### Nachbearbeitung

Bei der Nachbearbeitung können Sie wichtige Momente hervorheben.
Dafür können Sie verschiedene Methoden verwenden und häufig kombinieren, zum Beispiel:

- Bereiche des Bildschirms vergrößern.
- Den Hintergrund abblenden.

Heben Sie wichtige Momente des Arbeitsablaufs hervor, insbesondere wenn Details schwer zu erkennen sind, etwa beim Klicken auf ein bestimmtes Icon oder bei der Eingabe einer bestimmten URL.
Die Hervorhebung sollte etwa 1 bis 2 Sekunden dauern.
Eine kurze Überblendung von 200 bis 300 Millisekunden zu Beginn und am Ende der Hervorhebung ist sinnvoll.

Gehen Sie dabei maßvoll vor: Wenn das Video ständig hinein- und herauszoomt, kann den Zuschauenden schwindelig werden.
Schneiden Sie das Video bei Bedarf auf das gewünschte Seitenverhältnis zu.

#### Videos hochladen und einbetten

Videos müssen derzeit auf YouTube hochgeladen werden, damit sie auf MDN Web Docs angezeigt werden können, beispielsweise auf dem Kanal [mozhacks](https://www.youtube.com/user/mozhacks/videos).
Bitten Sie ein Mitglied des MDN-Web-Docs-Teams, das Video hochzuladen, wenn Sie keinen geeigneten Ort dafür haben.

> [!NOTE]
> Markieren Sie das Video als „nicht gelistet“, wenn es außerhalb des Seitenkontexts nicht sinnvoll ist – bei einem kurzen Video ist das wahrscheinlich der Fall.

### Einbetten

Nach dem Hochladen können Sie das Video mit dem Makro [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs) in die Seite einbetten.
Fügen Sie dazu an der Stelle, an der das Video erscheinen soll, Folgendes ein:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

Das einzige Argument des Makroaufrufs ist die Zeichenfolge am Ende der Video-URL, nicht die vollständige URL.
Wenn die Video-URL beispielsweise `https://www.youtube.com/watch?v=ELS2OOUvxIw` lautet, ist folgender Makroaufruf erforderlich:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Siehe auch

- [SVG-Format statt .png-Bildern verwenden](https://github.com/orgs/mdn/discussions/631): Diskussion auf MDN GitHub
