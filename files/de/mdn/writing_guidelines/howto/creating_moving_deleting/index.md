---
title: Anleitung zum Erstellen, Verschieben, Löschen und Bearbeiten von Seiten
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In all diesen Fällen ist es ratsam, unsere Richtlinien für [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchzuführen ist. Besprechen Sie dies mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms), bevor Sie fortfahren.

## Erstellen von Seiten

Alle Seiten auf MDN Web Docs werden im Markdown-Format erstellt. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen eindeutigen Verzeichnis gespeichert ist. Der Verzeichnisname repräsentiert den Namen der Seite. Wenn `align-content` beispielsweise eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie im Verzeichnis `en-us/web/css` einen Ordner namens `align-content` erstellen und darin eine Datei namens `index.md` erstellen.

> [!NOTE]
> Der Name des Verzeichnisses unterscheidet sich leicht vom Slug der Seite. Am auffälligsten folgt der Slug der Satzschreibung.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitentemplates, die Sie kopieren können, um zu beginnen.

Eine `index.md`-Datei eines Dokuments muss mit einem Front Matter beginnen, das den `title`, `slug` und `page-type` definiert. Alle diese Front Matter-Informationen finden Sie in den oben genannten Seitentemplates. Alternativ können Sie es hilfreich finden, sich auf das Front Matter in der `index.md` eines ähnlichen Dokuments zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zum Erstellen einer Seite wäre:

1. Beginnen Sie mit einem neuen, aktuellen Branch, um daran zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-add
   ```

2. Erstellen Sie einen oder mehrere neue Dokumenten-Ordner, jeweils mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu, committen Sie diese und pushen Sie Ihren neuen Branch zu Ihrem Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihren Pull-Request.

## Verschieben von Seiten

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Dokumentbaums ist einfach, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie verschieben möchten (z.B. `Learn_web_development/Core/Accessibility`) sowie den Slug des neuen Speicherorts (z.B. `Learn/A11y`), optional gefolgt von der Sprache des bestehenden Dokuments (Standard ist `en-US`).

Wenn das bestehende Dokument, das Sie verschieben möchten, untergeordnete Dokumente hat (d.h., es repräsentiert einen Dokumentbaum), verschiebt der `yarn content move`-Befehl den gesamten Baum.

Angenommen, Sie möchten den gesamten `/en-US/Learn_web_development/Core/Accessibility`-Baum nach `/en-US/Learn_web_development/A11y` verschieben, würden Sie die folgenden Schritte ausführen:

1. Sie starten mit einem neuen Branch, um daran zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-move
   ```

2. Führen Sie das Verschieben durch (was bestehende Dateien löscht und ändert sowie neue Dateien erstellt).

   ```bash
   yarn content move Learn_web_development/Core/Accessibility Learn_web_development/A11y
   ```

3. Sobald die Dateien verschoben sind, müssen wir Referenzen zu diesen Dateien in den anderen Inhaltsdateien aktualisieren. Verwenden Sie den folgenden Befehl, um alle Referenzen automatisch auf einmal zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu, committen Sie diese und pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git add .
   git commit -m "Move Learn_web_development/Core/Accessibility to Learn_web_development/A11y"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihren Pull-Request.

> **Hinweis:** `yarn content move` fügt automatisch die erforderlichen Weiterleitungsinformationen zur Datei `_redirects.txt` hinzu, sodass der alte Speicherort zur neuen Adresse weiterleitet. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler können leicht auftreten, wenn Sie dies tun. Wenn Sie eine Weiterleitung ohne Verschiebung einer Datei hinzufügen müssen, besprechen Sie dies mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

## Löschen von Seiten

Dokumente sollten nur unter besonderen Umständen von MDN Web Docs entfernt werden. Wenn Sie darüber nachdenken, Seiten zu löschen, besprechen Sie dies bitte zuerst mit dem MDN Web Docs-Team in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Dokumentbaums ist einfach, genau wie beim Verschieben von Seiten, da wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den `yarn content delete`-Befehl verwenden, um Seiten von MDN Web Docs zu löschen. Löschen Sie nicht einfach ihre Verzeichnisse aus dem Repository. Der `yarn content delete`-Befehl kümmert sich auch um andere notwendige Änderungen, wie das Aktualisieren der Datei `_wikihistory.json`.

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie löschen möchten (z.B. `Learn_web_development/Core/Accessibility`), optional gefolgt von der Sprache des bestehenden Dokuments (Standard ist `en-US`).

Wenn das bestehende Dokument, das Sie löschen möchten, untergeordnete Dokumente hat (d.h., es repräsentiert einen Dokumentbaum), müssen Sie auch die Option `-r, --recursive` angeben, sonst schlägt der Befehl fehl.

Wenn Sie beispielsweise den gesamten `/en-US/Learn_web_development/Core/Accessibility`-Baum löschen möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten mit einem neuen Branch, um daran zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-delete
   ```

2. Führen Sie das Löschen aus.

   ```bash
   yarn content delete Learn_web_development/Core/Accessibility --recursive
   ```

3. Fügen Sie eine Weiterleitung hinzu. Die Zielseite kann eine externe URL oder eine andere Seite auf MDN Web Docs sein.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Fügen Sie alle gelöschten Dateien hinzu, committen Sie diese und pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihren Pull-Request.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, geben Sie ihn in Anführungszeichen an, wie zum Beispiel:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus MDN Web Docs wird unweigerlich dazu führen, dass vorhandene Inhalte ebenfalls aktualisiert werden müssen. Da viele Artikel auf andere verlinken, werden die entfernten Inhalte wahrscheinlich anderswo referenziert. Das Hinzufügen der Weiterleitung wird die Auswirkungen des Entfernens von Inhalten abmildern; es ist jedoch am besten, Inhalte zu bearbeiten, um die Änderung widerzuspiegeln und die Inhaltsänderungen zusammen mit dem Entfernungs-Pull-Request einzuschließen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [content](https://github.com/mdn/content)-Repository finden. Der einfachste Weg, es zu finden, besteht darin, zur Seite zu navigieren, die Sie bearbeiten möchten, zum Ende der Seite zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Vorschau der Änderungen

Wenn Sie die Seite lokal bearbeiten, können Sie, um zu sehen, wie Ihre Änderungen aussehen, zum Inhalts-Repo-Ordner gehen, den CLI-Befehl `yarn start` ausführen, zu `localhost:5042` in Ihrem Browser gehen und die Seite aufrufen und ansehen. Geben Sie den Titel in das Suchfeld ein, um ihn leicht zu finden. Die Seite in der Vorschau wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie sie nur im selben Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Binden Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}}-Element.
