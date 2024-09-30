---
title: Anleitung zur Erstellung, Verschiebung, Löschung und Bearbeitung von Seiten
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In allen diesen Fällen ist es eine gute Idee, unsere Richtlinien für [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und es mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu besprechen, bevor Sie fortfahren.

## Erstellen von Seiten

Alle Seiten auf den MDN Web Docs werden im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in ihrem eigenen einzigartigen Verzeichnis gespeichert ist. Der Verzeichnisname stellt den Namen der Seite dar. Zum Beispiel, wenn `align-content` eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie einen Ordner in `en-us/web/css` mit dem Namen `align-content` erstellen und darin eine Datei namens `index.md` anlegen.

> [!NOTE]
> Der Name des Verzeichnisses unterscheidet sich leicht vom Slug der Seite. Bemerkenswert ist, dass der Slug die Satzkonstruktion befolgt.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitentemplates, die Sie kopieren können, um loszulegen.

Die `index.md`-Datei eines Dokuments muss mit Frontmatter beginnen, das den `title`, `slug` und `page-type` definiert. Alle diese Frontmatter-Informationen finden Sie in den zuvor erwähnten Seitentemplates. Alternativ könnte es hilfreich sein, das Frontmatter innerhalb einer ähnlichen Dokument-`index.md` zu konsultieren.

Der allgemeine Schritt-für-Schritt-Prozess zur Erstellung einer Seite wäre:

1. Starten Sie einen neuen, aktuellen Branch, in dem Sie arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-add
   ```

2. Erstellen Sie ein oder mehrere neue Dokumentverzeichnisse, jedes mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu, committen Sie sie und pushen Sie Ihren neuen Branch zu Ihrem Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihren Pull Request.

## Verschieben von Seiten

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist einfach, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie verschieben möchten (z.B. `Learn/Accessibility`), sowie den Slug des neuen Speicherorts (z.B. `Learn/A11y`), optional gefolgt von der Sprachversion des vorhandenen Dokuments (Standard ist `en-US`).

Wenn das vorhandene Dokument, das Sie verschieben möchten, untergeordnete Dokumente hat (d.h. es stellt einen Dokumentenbaum dar), wird der Befehl `yarn content move` den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten Baum `/en-US/Learn/Accessibility` nach `/en-US/Learn/A11y` verschieben möchten, führen Sie die folgenden Schritte aus:

1. Sie starten einen neuen Branch, in dem Sie arbeiten.

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

3. Sobald Dateien verschoben sind, müssen wir Verweise auf diese Dateien in den anderen Inhaltsdateien ebenfalls aktualisieren. Verwenden Sie den folgenden Befehl, um alle Verweise automatisch auf einmal zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie sie, und pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git add .
   git commit -m "Move Learn/Accessibility to Learn/A11y"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihren Pull Request.

> **Hinweis:** `yarn content move` fügt automatisch die notwendigen Umleitungsinformationen zur Datei `_redirects.txt` hinzu, damit der alte Speicherort zur neuen weiterleitet. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler können sich leicht einschleichen, wenn Sie dies tun. Wenn Sie eine Umleitung hinzufügen müssen, ohne eine Datei zu verschieben, besprechen Sie dies mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

## Löschen von Seiten

Dokumente sollten nur unter besonderen Umständen von den MDN Web Docs entfernt werden. Wenn Sie daran denken, Seiten zu löschen, besprechen Sie dies bitte zuerst mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist einfach, genau wie das Verschieben von Seiten, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den Befehl `yarn content delete` verwenden, um Seiten von den MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repo. Der Befehl `yarn content delete` übernimmt auch andere notwendige Änderungen wie das Aktualisieren der Datei `_wikihistory.json`.

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie löschen möchten (z.B. `Learn/Accessibility`), optional gefolgt von der Sprachversion des vorhandenen Dokuments (Standard ist `en-US`).

Wenn das vorhandene Dokument, das Sie löschen möchten, untergeordnete Dokumente hat (d.h. es stellt einen Dokumentenbaum dar), müssen Sie auch die Option `-r, --recursive` angeben, andernfalls wird der Befehl fehlschlagen.

Zum Beispiel, wenn Sie den gesamten Baum `/en-US/Learn/Accessibility` löschen möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen neuen Branch, in dem Sie arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-delete
   ```

2. Führen Sie die Löschung durch.

   ```bash
   yarn content delete Learn/Accessibility --recursive
   ```

3. Fügen Sie eine Umleitung hinzu. Die Zielseite kann eine externe URL oder eine andere Seite auf den MDN Web Docs sein.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Fügen Sie alle gelöschten Dateien hinzu und committen Sie sie, und pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihren Pull Request.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, geben Sie ihn in Anführungszeichen ein, so:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus den MDN Web Docs wird zwangsläufig auch zur Aktualisierung des vorhandenen Inhalts führen. Da viele Artikel auf andere verlinken, wird der entfernte Inhalt wahrscheinlich anderswo referenziert. Das Hinzufügen der Umleitung wird die Auswirkungen des Entfernens von Inhalten mildern; es ist jedoch am besten, den Inhalt so zu bearbeiten, dass er die Änderung widerspiegelt, und die Inhaltsbearbeitungen zusammen mit dem Entfernungspull-Request einzureichen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Quellseite in unserem [content](https://github.com/mdn/content)-Repository finden. Der einfachste Weg, sie zu finden, besteht darin, zur Seite zu navigieren, die Sie bearbeiten möchten, zum Seitenende zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Änderungen Vorschau

Wenn Sie die Seite lokal bearbeiten, um zu sehen, wie Ihre Änderungen aussehen, können Sie in den Content-Repo-Ordner wechseln, den CLI-Befehl `yarn start` ausführen, zu `localhost:5042` in Ihrem Browser navigieren und die Seite aufrufen und anzeigen. Geben Sie den Titel in das Suchfeld ein, um sie leicht zu finden. Die Vorschauseite wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anfügen

Um eine Datei zu Ihrem Artikel hinzuzufügen, müssen Sie sie nur im gleichen Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}}-Element.
