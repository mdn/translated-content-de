---
title: Anleitung zum Erstellen, Bearbeiten, Verschieben oder Löschen von Seiten
short-title: Erstellen, Bearbeiten, Verschieben oder Löschen von Seiten
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In all diesen Fällen empfiehlt es sich, unsere Richtlinien für das [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Maßnahmen ergriffen werden sollte, und dies mit dem Team in einem der MDN Web Docs [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) zu besprechen, bevor Sie fortfahren.

## Erstellen von Seiten

Alle Seiten auf den MDN Web Docs sind im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen eindeutigen Verzeichnis gespeichert ist. Der Verzeichnisname repräsentiert den Namen der Seite. Wenn `align-content` zum Beispiel eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie einen Ordner in `en-us/web/css` mit dem Namen `align-content` erstellen und darin eine Datei namens `index.md` anlegen.

> [!NOTE]
> Der Name des Verzeichnisses unterscheidet sich leicht von der Slug der Seite. Am auffälligsten ist, dass die Slug der Satzschreibung folgt.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitenschablonen, die Sie kopieren können, um den Anfang zu erleichtern.

Die `index.md`-Datei eines Dokuments muss mit den Metadaten beginnen, die den `title`, `slug` und `page-type` definieren. Alle diese Metadateninformationen finden Sie in den genannten Seitenschablonen. Alternativ könnte es hilfreich sein, sich auf die Metadaten eines ähnlichen Dokuments in dessen `index.md` zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zur Erstellung einer Seite wäre:

1. Starten Sie einen frischen, aktuellen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" to ensure dependencies are up to date.
   npm install
   git checkout -b my-add
   ```

2. Erstellen Sie ein oder mehrere neue Dokumentverzeichnisse, jedes mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu und committen Sie diese sowie pushen Sie Ihren neuen Branch zu Ihrem Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihren Pull-Request.

## Verschieben von Seiten

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist einfach, da wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
npm run content move <from-slug> <to-slug> [locale]
```

Sie müssen lediglich die Slug des bestehenden Dokuments angeben, das Sie verschieben möchten (z.B. `Web/HTTP/Guides/Authentication`), sowie die Slug des neuen Speicherorts (z.B. `Web/HTTP/Guides/Auth`), optional gefolgt von der Sprache des bestehenden Dokuments (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie verschieben möchten, Kinddokumente hat (d.h. es repräsentiert einen Dokumentbaum), wird der Befehl `npm run content move` den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten
`/en-US/Web/HTTP/Guides/Authentication`-Baum nach `/en-US/Web/HTTP/Guides/Auth` verschieben möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen frischen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" again to ensure dependencies are up to date.
   npm install
   git checkout -b my-move
   ```

2. Führen Sie den Verschiebevorgang durch (der vorhandene Dateien löscht und ändert sowie neue Dateien erstellt).

   ```bash
   npm run content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Sobald Dateien verschoben sind, müssen wir auch die Verweise auf diese Dateien in den anderen Inhaltsdateien aktualisieren. Verwenden Sie den folgenden Befehl, um alle Verweise automatisch in einem Durchgang zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und geänderten Dateien hinzu und committen Sie diese sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Guides/Authentication to Web/HTTP/Guides/Auth"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihren Pull-Request.

> [!NOTE]
> Der Befehl `npm run content move` fügt im `_redirects.txt`-Datei die erforderlichen Weiterleitungen hinzu, damit der alte Speicherort auf den neuen umleitet. Bearbeiten Sie die `_redirects.txt`-Datei nicht manuell! Fehler können sich leicht einschleichen, wenn Sie dies tun. Wenn Sie eine Weiterleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie darüber mit dem MDN Web Docs Team über die [MDN Web Docs Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels).

## Löschen von Seiten

Dokumente sollten nur unter besonderen Umständen aus den MDN Web Docs entfernt werden. Wenn Sie darüber nachdenken, Seiten zu löschen, besprechen Sie dies bitte zuerst mit dem MDN Web Docs Team in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Dokumentenbaums ist ebenso einfach wie das Verschieben von Seiten, da wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
npm run content delete <document-slug> [locale] -- --redirect <redirect-slug-or-url>
```

Beim Umleiten kann die Zielseite eine externe URL oder eine andere Seite auf den MDN Web Docs sein.

> [!NOTE]
> Sie müssen den Befehl `npm run content delete` verwenden, um Seiten aus den MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repository. Der Befehl `npm run content delete` kümmert sich auch um andere notwendige Änderungen wie die Aktualisierung der `_wikihistory.json`-Datei.

Sie müssen lediglich die Slug des bestehenden Dokuments angeben, das Sie löschen möchten (z.B. `Web/HTTP/Guides/Authentication`), optional gefolgt von der Sprache des bestehenden Dokuments (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie löschen möchten, Kinddokumente hat (d.h. es repräsentiert einen Dokumentbaum), müssen Sie auch die Option `-r, --recursive` angeben, andernfalls wird der Befehl fehlschlagen.

Zum Beispiel, wenn Sie den gesamten
`/en-US/Web/HTTP/Guides/Authentication`-Baum löschen möchten, würden Sie die folgenden Schritte ausführen:

1. Sie starten einen frischen Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "npm install" again to ensure dependencies are up to date.
   npm install
   git checkout -b my-delete
   ```

2. Führen Sie das Löschen mit einer Weiterleitung durch.

   ```bash
   npm run content delete Web/HTTP/Guides/Authentication --recursive -- --redirect /en-US/path/of/target/page
   ```

3. Fügen Sie alle gelöschten Dateien hinzu und committen Sie diese sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

4. Erstellen Sie Ihren Pull-Request.

> [!NOTE]
> Wenn die Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, setzen Sie sie in Anführungszeichen, so:
>
> ```bash
> npm run content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)" -- --redirect <redirect-slug-or-url>
> ```

Das Entfernen von Inhalten aus den MDN Web Docs wird zwangsläufig auch darin resultieren, den bestehenden Inhalt zu aktualisieren. Da viele Artikel auf andere verlinken, wird der entfernte Inhalt wahrscheinlich anderswo referenziert. Das Hinzufügen der Weiterleitung wird die Auswirkungen des Entfernens von Inhalten mildern; es ist jedoch am besten, den Inhalt zu bearbeiten, um die Änderung widerzuspiegeln, und die Inhaltsbearbeitungen zusammen mit dem Entfernungs-Pull-Request einzubeziehen.

## Bearbeiten vorhandener Seiten

Um eine Seite zu bearbeiten, müssen Sie den Seitenquelltext in unserem [Inhalts-Repository](https://github.com/mdn/content) finden. Der einfachste Weg, ihn zu finden, ist, zur Seite zu navigieren, die Sie bearbeiten möchten, gehen Sie zum Ende der Seite und klicken Sie auf den Link "View the source on GitHub".

### Änderungen in der Vorschau anzeigen

Wenn Sie die Seite lokal bearbeiten, um zu sehen, wie Ihre Änderungen aussehen, können Sie zum Inhalts-Repository-Ordner gehen, den CLI-Befehl `npm start` ausführen, zu `localhost:5042` in Ihrem Browser gehen, zur Seite navigieren und sie anzeigen. Geben Sie den Titel in das Suchfeld ein, um ihn einfach zu finden. Die Vorschau-Seite wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie sie nur im selben Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei auf Ihrer Seite typischerweise über ein {{htmlelement("a")}}-Element ein.
