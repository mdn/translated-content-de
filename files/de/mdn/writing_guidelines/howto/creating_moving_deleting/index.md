---
title: Wie man Seiten erstellt, verschiebt, löscht und bearbeitet
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt, wie man eine Seite erstellt, verschiebt, löscht oder bearbeitet. In all diesen Fällen ist es eine gute Idee, unsere Richtlinien zu [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und es mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu besprechen, bevor Sie fortfahren.

## Erstellen von Seiten

Alle Seiten auf MDN Web Docs werden im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen Verzeichnis gespeichert wird. Der Verzeichnisname stellt den Namen der Seite dar. Beispielsweise, wenn `align-content` eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie einen Ordner in `en-us/web/css` namens `align-content` erstellen und darin eine Datei namens `index.md` erstellen.

> [!NOTE]
> Der Name des Verzeichnisses unterscheidet sich geringfügig vom Slug der Seite. Am bemerkenswertesten ist, dass der Slug der Satzschreibung folgt.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitentemplates, die Sie kopieren können, um loszulegen.

Die `index.md`-Datei eines Dokuments muss mit der Frontmatter beginnen, die den `title`, den `slug` und den `page-type` definiert. All diese Frontmatter-Informationen finden Sie in den zuvor genannten Seitentemplates. Alternativ kann es hilfreich sein, sich auf die Frontmatter innerhalb eines ähnlichen Dokuments zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zum Erstellen einer Seite wäre:

1. Starten Sie einen neuen, aktuellen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-add
   ```

2. Erstellen Sie ein oder mehrere neue Dokumentverzeichnisse, jeweils mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu und committen Sie sie und pushen Sie Ihren neuen Branch in Ihren Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihre Pull-Anfrage.

## Verschieben von Seiten

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Baums von Dokumenten ist einfach, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen lediglich den Slug des bestehenden Dokuments angeben, das Sie verschieben möchten (z.B. `Learn/Accessibility`) sowie den Slug des neuen Standorts (z.B. `Learn/A11y`), optional gefolgt von der Sprache des bestehenden Dokuments (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie verschieben möchten, untergeordnete Dokumente hat (d.h. es stellt einen Dokumentbaum dar), wird der Befehl `yarn content move` den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten `/en-US/Learn/Accessibility` Baum nach `/en-US/Learn/A11y` verschieben möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen neuen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-move
   ```

2. Führen Sie die Verschiebung durch (was bestehende Dateien löscht und modifiziert sowie neue Dateien erstellt).

   ```bash
   yarn content move Learn/Accessibility Learn/A11y
   ```

3. Sobald Dateien verschoben worden sind, müssen wir die Verweise auf diese Dateien in den anderen Inhaltsdateien ebenfalls aktualisieren. Verwenden Sie den folgenden Befehl, um alle Verweise automatisch in einem Rutsch zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und modifizierten Dateien hinzu und committen Sie sie und pushen Sie Ihren Branch in Ihren Fork.

   ```bash
   git add .
   git commit -m "Move Learn/Accessibility to Learn/A11y"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> **Hinweis:** `yarn content move` fügt automatisch die nötige Umleitungsinformation zur Datei `_redirects.txt` hinzu, sodass der alte Standort zur neuen weiterleitet. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler schleichen sich leicht ein, wenn Sie dies tun. Wenn Sie eine Umleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie darüber mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

## Löschen von Seiten

Dokumente sollten nur unter besonderen Umständen von MDN Web Docs entfernt werden. Wenn Sie darüber nachdenken, Seiten zu löschen, besprechen Sie dies bitte zuerst mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Baums von Dokumenten ist einfach, genau wie das Verschieben von Seiten, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den Befehl `yarn content delete` verwenden, um Seiten von MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repository. Der Befehl `yarn content delete` übernimmt auch andere notwendige Änderungen wie die Aktualisierung der Datei `_wikihistory.json`.

Sie müssen lediglich den Slug des bestehenden Dokuments angeben, das Sie löschen möchten (z.B. `Learn/Accessibility`), optional gefolgt von der Sprache des bestehenden Dokuments (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie löschen möchten, untergeordnete Dokumente hat (d.h., es stellt einen Dokumentbaum dar), müssen Sie auch die Option `-r, --recursive` angeben, ansonsten wird der Befehl fehlschlagen.

Zum Beispiel, wenn Sie den gesamten `/en-US/Learn/Accessibility` Baum löschen möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen neuen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-delete
   ```

2. Führen Sie das Löschen durch.

   ```bash
   yarn content delete Learn/Accessibility --recursive
   ```

3. Fügen Sie eine Umleitung hinzu. Die Zielseite kann eine externe URL oder eine andere Seite auf MDN Web Docs sein.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Fügen Sie alle gelöschten Dateien hinzu und committen Sie sie und pushen Sie Ihren Branch in Ihren Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, fügen Sie ihn in Anführungszeichen ein, wie folgt:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus MDN Web Docs wird unweigerlich auch zu einer Aktualisierung der bestehenden Inhalte führen. Da viele Artikel auf andere verlinken, wird der entfernte Inhalt wahrscheinlich an anderer Stelle referenziert werden. Das Hinzufügen der Umleitung wird die Auswirkungen des Entfernens von Inhalten abschwächen; es ist jedoch am besten, Inhalte zu bearbeiten, um die Änderung widerzuspiegeln und die Inhaltsbearbeitungen zusammen mit der Löschanforderung einzureichen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [content](https://github.com/mdn/content) Repository finden. Der einfachste Weg, sie zu finden, ist, zur Seite zu navigieren, die Sie bearbeiten möchten, zum Seitenende zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Änderungen anzeigen

Wenn Sie die Seite lokal bearbeiten, können Sie, um zu sehen, wie Ihre Änderungen aussehen, zum Ordner des Inhalts-Repos gehen, den CLI-Befehl `yarn start` ausführen, zu `localhost:5042` in Ihrem Browser gehen und zur Seite navigieren, um sie anzusehen. Geben Sie den Titel in das Suchfeld ein, um sie leicht zu finden. Die Vorschauseite wird im Browser aktualisiert, wenn Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie sie lediglich im selben Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}} Element.
