---
title: Anleitung zum Erstellen, Bearbeiten, Verschieben oder Löschen von Seiten
short-title: Erstellen, Bearbeiten, Verschieben oder Löschen von Seiten
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Dieser Artikel beschreibt, wie man eine Seite erstellt, verschiebt, löscht oder bearbeitet. In all diesen Fällen ist es eine gute Idee, unsere Richtlinien für [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und dies mit dem Team in einem der MDN Web Docs [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) zu besprechen, bevor Sie fortfahren.

## Erstellen von Seiten

Alle Seiten auf MDN Web Docs werden im Markdown-Format erstellt. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen Verzeichnis gespeichert wird. Der Name des Verzeichnisses repräsentiert den Namen der Seite. Zum Beispiel, wenn `align-content` eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie einen Ordner in `en-us/web/css` mit dem Namen `align-content` erstellen und eine Datei namens `index.md` darin anlegen.

> [!NOTE]
> Der Name des Verzeichnisses unterscheidet sich leicht vom Slug der Seite. Der Slug folgt insbesondere der Satzschreibung.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitentemplates, die Sie kopieren können, um loszulegen.

Eine `index.md`-Datei eines Dokuments muss mit Front Matter beginnen, das den `title`, `slug` und `page-type` definiert. Alle diese Front Matter-Informationen finden Sie in den zuvor genannten Seitentemplates. Alternativ kann es hilfreich sein, sich auf die Front Matter innerhalb eines ähnlichen Dokuments der `index.md` zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zum Erstellen einer Seite wäre:

1. Starten Sie einen neuen, aktuellen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to ensure dependencies are up to date.
   npm install
   git checkout -b my-add
   ```

2. Erstellen Sie ein oder mehrere neue Dokumentordner, jeweils mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu und committen Sie diese sowie pushen Sie Ihren neuen Branch zu Ihrem Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihren Pull Request.

## Verschieben von Seiten

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist einfach, da wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
npm run content move <from-slug> <to-slug> [locale]
```

Sie müssen lediglich den Slug des vorhandenen Dokuments angeben, das Sie verschieben möchten (z.B. `Web/HTTP/Guides/Authentication`), sowie den Slug des neuen Standorts (z.B. `Web/HTTP/Guides/Auth`), optional gefolgt von der lokalen Sprache des vorhandenen Dokuments (Standard ist `en-US`).

Wenn das vorhandene Dokument, das Sie verschieben möchten, Kinddokumente hat (d.h. es stellt einen Dokumentbaum dar), wird der Befehl `npm run content move` den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten `/en-US/Web/HTTP/Guides/Authentication` Baum nach `/en-US/Web/HTTP/Guides/Auth` verschieben möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen neuen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" again to ensure dependencies are up to date.
   npm install
   git checkout -b my-move
   ```

2. Führen Sie das Verschieben aus (was vorhandene Dateien löschen und ändern sowie neue Dateien erstellen wird).

   ```bash
   npm run content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Sobald Dateien verschoben sind, müssen wir auch Referenzen auf diese Dateien in den anderen Inhaltsdateien aktualisieren. Verwenden Sie den folgenden Befehl, um alle Referenzen automatisch in einem Rutsch zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie diese sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Guides/Authentication to Web/HTTP/Guides/Auth"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihren Pull Request.

> [!NOTE]
> Der Befehl `npm run content move` fügt die erforderlichen Weiterleitungen in die Datei `_redirects.txt` ein, sodass der alte Standort auf den neuen umgeleitet wird. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler können leicht auftreten, wenn Sie dies tun. Wenn Sie eine Weiterleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie darüber mit dem MDN Web Docs Team in den [MDN Web Docs Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels).

## Löschen von Seiten

Dokumente sollten nur unter besonderen Umständen aus den MDN Web Docs entfernt werden. Wenn Sie darüber nachdenken, Seiten zu löschen, besprechen Sie dies zuerst mit dem MDN Web Docs-Team in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

> [!NOTE]
> Dieser Abschnitt behandelt das Löschen einzelner Seiten oder Seitengruppen. Wenn Sie einen gesamten Abschnitt von MDN-Inhalten zurückziehen müssen, konsultieren Sie den [Leitfaden zum Zurückziehen von Inhalten](/de/docs/MDN/Writing_guidelines/Howto/Retiring_content).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist ebenso einfach wie das Verschieben von Seiten, da wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
npm run content delete <document-slug> [locale] -- --redirect <redirect-slug-or-url>
```

Wenn Sie umleiten, kann die Zielseite eine externe URL oder eine andere Seite auf MDN Web Docs sein.

> [!NOTE]
> Sie müssen den Befehl `npm run content delete` verwenden, um Seiten von den MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repo. Der Befehl `npm run content delete` kümmert sich auch um andere notwendige Änderungen wie das Aktualisieren der Datei `_wikihistory.json`.

Sie müssen lediglich den Slug des vorhandenen Dokuments angeben, das Sie löschen möchten (z.B. `Web/HTTP/Guides/Authentication`), optional gefolgt von der lokalen Sprache des vorhandenen Dokuments (Standard ist `en-US`).

Wenn das vorhandene Dokument, das Sie löschen möchten, Kinddokumente hat (d.h. es stellt einen Dokumentbaum dar), müssen Sie auch die Option `-r, --recursive` angeben, andernfalls wird der Befehl fehlschlagen.

Zum Beispiel, wenn Sie den gesamten `/en-US/Web/HTTP/Guides/Authentication` Baum löschen möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen neuen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" again to ensure dependencies are up to date.
   npm install
   git checkout -b my-delete
   ```

2. Führen Sie das Löschen mit einer Weiterleitung aus.

   ```bash
   npm run content delete Web/HTTP/Guides/Authentication --recursive -- --redirect /en-US/path/of/target/page
   ```

3. Fügen Sie alle gelöschten Dateien hinzu und committen Sie diese sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

4. Erstellen Sie Ihren Pull Request.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, schließen Sie ihn in Anführungszeichen ein, wie folgt:
>
> ```bash
> npm run content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)" -- --redirect <redirect-slug-or-url>
> ```

Das Entfernen von Inhalten aus den MDN Web Docs wird zwangsläufig zu einer Aktualisierung der bestehenden Inhalte führen. Da viele Artikel auf andere verlinken, wird der entfernte Inhalt wahrscheinlich an anderer Stelle referenziert. Das Hinzufügen der Weiterleitung wird die Auswirkungen der Entfernung von Inhalten abmildern; es ist jedoch gute Praxis, Inhalte zu bearbeiten, um die Änderung zu reflektieren und die Inhaltsbearbeitungen zusammen mit dem Lösch-Pull-Request einzuschließen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [Content](https://github.com/mdn/content) Repository finden. Der einfachste Weg, sie zu finden, besteht darin, zu der Seite zu navigieren, die Sie bearbeiten möchten, an das Ende der Seite zu gehen und auf den "View the source on GitHub"-Link zu klicken.

### Änderungen vorschauen

Wenn Sie die Seite lokal bearbeiten, um zu sehen, wie Ihre Änderungen aussehen, können Sie in das Inhalts-Repo-Verzeichnis gehen, den CLI-Befehl `npm start` ausführen, zu `localhost:5042` in Ihrem Browser navigieren und die Seite ansehen. Geben Sie den Titel in das Suchfeld ein, um sie leicht zu finden. Die Vorschau der Seite wird im Browser aktualisiert, während Sie den Quellcode bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie sie nur im selben Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}}-Element.
