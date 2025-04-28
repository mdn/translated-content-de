---
title: Anleitung zur Erstellung, Bearbeitung, Verschiebung oder Löschung von Seiten
short-title: Erstellung, Bearbeitung, Verschiebung oder Löschung von Seiten
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In all diesen Fällen ist es eine gute Idee, unsere Richtlinien für [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und es mit dem Team in einem der MDN Web Docs [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) zu besprechen, bevor Sie fortfahren.

## Erstellung von Seiten

Alle Seiten auf MDN Web Docs werden im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen einzigartigen Verzeichnis gespeichert wird. Der Verzeichnisname steht für den Namen der Seite. Wenn `align-content` beispielsweise eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie im Verzeichnis `en-us/web/css` einen Ordner namens `align-content` erstellen und darin eine Datei mit dem Namen `index.md` erstellen.

> [!NOTE]
> Der Verzeichnisname unterscheidet sich geringfügig vom Slug der Seite. Besonders hervorzuheben ist, dass der Slug der Satzschreibung folgt.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitenvorlagen, die Sie kopieren können, um zu beginnen.

Eine `index.md`-Datei eines Dokuments muss mit den Front Matter-Daten beginnen, die `title`, `slug` und `page-type` definieren. Alle diese Front Matter-Informationen finden Sie in den oben genannten Seitenvorlagen. Alternativ kann es hilfreich sein, sich auf das Front Matter innerhalb eines ähnlichen Dokuments `index.md` zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zur Erstellung einer Seite wäre:

1. Starten Sie einen neuen, aktualisierten Branch, um darin zu arbeiten.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-add
   ```

2. Erstellen Sie ein oder mehrere neue Dokumentenverzeichnisse, jedes mit seiner eigenen `index.md`-Datei.

3. Fügen Sie Ihre neuen Dateien hinzu und committen Sie diese sowie pushen Sie Ihren neuen Branch zu Ihrem Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihren Pull-Request.

## Verschiebung von Seiten

Das Verschieben von einem oder mehreren Dokumenten oder einem gesamten Dokumentenbaum ist einfach, da wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen lediglich den Slug des vorhandenen Dokuments angeben, das Sie verschieben möchten (z.B. `Web/HTTP/Guides/Authentication`), sowie den Slug des neuen Standorts (z.B. `Web/HTTP/Guides/Auth`), optional gefolgt von der Locale des bestehenden Dokuments (Standard ist `en-US`).

Wenn das bestehende Dokument, das Sie verschieben möchten, Kinddokumente hat (d.h. es stellt einen Dokumentenbaum dar), verschiebt der Befehl `yarn content move` den gesamten Baum.

Wenn Sie beispielsweise den gesamten Baum `/en-US/Web/HTTP/Guides/Authentication` nach `/en-US/Web/HTTP/Guides/Auth` verschieben möchten, würden Sie die folgenden Schritte ausführen:

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

2. Führen Sie die Verschiebung durch (diese wird vorhandene Dateien löschen und ändern sowie neue Dateien erstellen).

   ```bash
   yarn content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Sobald Dateien verschoben sind, müssen wir die Referenzen zu diesen Dateien in den anderen Inhaltsdateien ebenfalls aktualisieren. Verwenden Sie den folgenden Befehl, um alle Referenzen automatisch in einem Rutsch zu aktualisieren:

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
> Der Befehl `yarn content move` fügt benötigte Weiterleitungen in der Datei `_redirects.txt` hinzu, damit der alte Standort auf den neuen umleitet. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler können sich leicht einschleichen, wenn Sie dies tun. Wenn Sie eine Weiterleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie darüber mit dem MDN Web Docs Team in den [MDN Web Docs Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels).

## Löschung von Seiten

Dokumente sollten nur unter besonderen Umständen von MDN Web Docs entfernt werden. Wenn Sie über das Löschen von Seiten nachdenken, besprechen Sie dies bitte zuerst mit dem MDN Web Docs Team in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen von einem oder mehreren Dokumenten oder einem gesamten Dokumentenbaum ist einfach, genau wie das Verschieben von Seiten, da wir einen speziellen Befehl erstellt haben, der die Details für Sie übernimmt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den Befehl `yarn content delete` verwenden, um Seiten von MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repo. Der Befehl `yarn content delete` behandelt auch andere notwendige Änderungen wie die Aktualisierung der Datei `_wikihistory.json`.

Sie müssen lediglich den Slug des vorhandenen Dokuments angeben, das Sie löschen möchten (z.B. `Web/HTTP/Guides/Authentication`), optional gefolgt von der Locale des bestehenden Dokuments (Standard ist `en-US`).

Wenn das bestehende Dokument, das Sie löschen möchten, Kinddokumente hat (d.h. es stellt einen Dokumentenbaum dar), müssen Sie auch die Option `-r, --recursive` angeben, andernfalls schlägt der Befehl fehl.

Wenn Sie beispielsweise den gesamten Baum `/en-US/Web/HTTP/Guides/Authentication` löschen möchten, würden Sie die folgenden Schritte ausführen:

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

2. Führen Sie die Löschung durch.

   ```bash
   yarn content delete Web/HTTP/Guides/Authentication --recursive
   ```

3. Fügen Sie eine Weiterleitung hinzu. Die Zielseite kann eine externe URL oder eine andere Seite auf MDN Web Docs sein.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Fügen Sie alle gelöschten Dateien hinzu und committen Sie diese sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihren Pull-Request.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, schließen Sie ihn in Anführungszeichen ein, so:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus MDN Web Docs wird unvermeidlich auch die Aktualisierung bestehender Inhalte zur Folge haben. Da viele Artikel auf andere verweisen, wird der entfernte Inhalt wahrscheinlich an anderer Stelle referenziert. Das Hinzufügen der Weiterleitung wird die Auswirkungen der Entfernung mildern; es ist jedoch best practice, den Inhalt zu bearbeiten, um die Änderung widerzuspiegeln und die Inhaltsbearbeitungen zusammen mit der Entferungspullrequest einzuschließen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [content](https://github.com/mdn/content) Repository finden. Der einfachste Weg, sie zu finden, besteht darin, zu der Seite zu navigieren, die Sie bearbeiten möchten, ans Ende der Seite zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Änderungen anzeigen

Wenn Sie die Seite lokal bearbeiten, können Sie, um zu sehen, wie Ihre Änderungen aussehen, in den Content-Repo-Ordner gehen, den CLI-Befehl `yarn start` ausführen, zu `localhost:5042` in Ihrem Browser navigieren und dann zu der Seite navigieren und sie anzeigen. Geben Sie den Titel in das Suchfeld ein, um ihn leicht zu finden. Die Vorschauseite wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie diese einfach in dasselbe Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}}-Element.
