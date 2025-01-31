---
title: Anleitung zum Erstellen, Bearbeiten, Verschieben oder Löschen von Seiten
short-title: Seiten erstellen, bearbeiten, verschieben oder löschen
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In all diesen Fällen ist es eine gute Idee, unsere Richtlinien zu [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und es vorab mit dem Team in einem der MDN Web Docs [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) zu besprechen.

## Seiten erstellen

Alle Seiten auf MDN Web Docs werden im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen, eindeutigen Verzeichnis gespeichert wird. Der Verzeichnisname repräsentiert den Namen der Seite. Zum Beispiel, wenn `align-content` eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie im Verzeichnis `en-us/web/css` einen Ordner namens `align-content` erstellen und darin eine Datei namens `index.md` anlegen.

> [!NOTE]
> Der Verzeichnisname unterscheidet sich geringfügig vom Slug der Seite. Am deutlichsten wird dies durch die Großschreibung des Satzanfangs im Slug.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitentemplates, die Sie als Startpunkt kopieren können.

Eine `index.md`-Datei eines Dokuments muss mit einem Kopfteil beginnen, das `title`, `slug` und `page-type` definiert. Alle diese Informationen im Kopfteil können in den oben genannten Seitentemplates gefunden werden. Alternativ finden Sie es möglicherweise hilfreich, das Kopfteil einer ähnlichen Dokumentation in deren `index.md` zu konsultieren.

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

2. Erstellen Sie ein oder mehrere neue Dokumentverzeichnisse, jedes mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu, committen Sie sie und pushen Sie Ihren neuen Branch in Ihren Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihre Pull-Anfrage.

## Seiten verschieben

Das Verschieben von einem oder mehreren Dokumenten oder eines gesamten Dokumentbaumes ist einfach, da wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen lediglich den Slug des bestehenden Dokuments, das Sie verschieben möchten, angeben (z.B. `Web/HTTP/Authentication`) sowie den Slug seines neuen Standorts (z.B. `Web/HTTP/Auth`), gefolgt von der Lokalisierung des bestehenden Dokuments, falls erforderlich (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie verschieben möchten, untergeordnete Dokumente hat (d.h., es repräsentiert einen Dokumentbaum), wird der Befehl `yarn content move` den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten Baum `/en-US/Web/HTTP/Authentication` nach `/en-US/Web/HTTP/Auth` verschieben möchten, würden Sie folgende Schritte ausführen:

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

2. Führen Sie das Verschieben aus (dies wird vorhandene Dateien löschen und modifizieren sowie neue Dateien erstellen).

   ```bash
   yarn content move Web/HTTP/Authentication Web/HTTP/Auth
   ```

3. Sobald Dateien verschoben sind, müssen wir Verweise auf diese Dateien in den anderen Inhaltsdateien ebenfalls aktualisieren. Verwenden Sie den folgenden Befehl, um alle Verweise automatisch in einem Schritt zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und modifizierten Dateien hinzu und committen Sie diese, sowie pushen Sie Ihren Branch in Ihren Fork.

   ```bash
   git add .
   git commit -m "Move Web/HTTP/Authentication to Web/HTTP/Auth"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> [!NOTE]
> Der Befehl `yarn content move` fügt erforderliche Umleitungen in der Datei `_redirects.txt` hinzu, sodass der alte Standort auf den neuen umleitet. Bearbeiten Sie die Datei `_redirects.txt` nicht manuell! Fehler können leicht einschleichen, wenn Sie dies tun. Wenn Sie eine Umleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie mit dem MDN Web Docs-Team in den [Kommunikationskanälen von MDN Web Docs](/de/docs/MDN/Community/Communication_channels) darüber.

## Seiten löschen

Dokumente sollten nur unter besonderen Umständen von den MDN Web Docs entfernt werden. Wenn Sie über das Löschen von Seiten nachdenken, besprechen Sie dies bitte zuerst mit dem MDN Web Docs-Team in den [Chat-Räumen von MDN Web Docs](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen von einem oder mehreren Dokumenten oder eines gesamten Dokumentbaumes ist einfach, ähnlich wie das Verschieben von Seiten, da wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den Befehl `yarn content delete` verwenden, um Seiten von den MDN Web Docs zu löschen. Löschen Sie nicht einfach deren Verzeichnisse aus dem Repo. Der Befehl `yarn content delete` kümmert sich auch um andere notwendige Änderungen wie das Aktualisieren der Datei `_wikihistory.json`.

Sie müssen lediglich den Slug des bestehenden Dokuments, das Sie löschen möchten, angeben (z.B. `Web/HTTP/Authentication`), gefolgt von der Lokalisierung des bestehenden Dokuments, falls erforderlich (standardmäßig `en-US`).

Wenn das bestehende Dokument, das Sie löschen möchten, untergeordnete Dokumente hat (d.h., es repräsentiert einen Dokumentbaum), müssen Sie auch die Option `-r, --recursive` angeben, andernfalls schlägt der Befehl fehl.

Zum Beispiel, wenn Sie den gesamten Baum `/en-US/Web/HTTP/Authentication` löschen möchten, würden Sie folgende Schritte ausführen:

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

2. Führen Sie das Löschen aus.

   ```bash
   yarn content delete Web/HTTP/Authentication --recursive
   ```

3. Fügen Sie eine Umleitung hinzu. Die Zielseite kann eine externe URL oder eine andere Seite auf den MDN Web Docs sein.

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Fügen Sie alle gelöschten Dateien hinzu und committen Sie diese, sowie pushen Sie Ihren Branch in Ihren Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, schließen Sie ihn in Anführungszeichen ein, wie folgt:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus den MDN Web Docs führt unweigerlich auch zu einer Aktualisierung der bestehenden Inhalte. Da viele Artikel auf andere verlinken, werden die entfernten Inhalte wahrscheinlich an anderer Stelle referenziert. Das Hinzufügen der Umleitung wird die Auswirkungen der Entfernung von Inhalten mildern; dennoch ist es am besten, den Inhalt zu bearbeiten, um die Änderung zu spiegeln, und die Inhaltsbearbeitungen zusammen mit der Pull-Anfrage zur Entfernung einzuschließen.

## Bearbeiten bestehender Seiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [content](https://github.com/mdn/content) Repository finden. Der einfachste Weg, um sie zu finden, ist zur Seite zu navigieren, die Sie bearbeiten möchten, zum Seitenende zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Änderungen Vorschau anzeigen

Wenn Sie die Seite lokal bearbeiten, können Sie, um zu sehen, wie Ihre Änderungen aussehen, in das Inhalts-Repo-Verzeichnis gehen, den CLI-Befehl `yarn start` ausführen, im Browser zu `localhost:5042` gehen und zur Seite navigieren, um sie anzusehen. Geben Sie den Titel in das Suchfeld ein, um sie leicht zu finden. Die Vorschauseite wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei an Ihren Artikel anzuhängen, müssen Sie sie nur im gleichen Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihrer Seite ein, typischerweise über ein {{htmlelement("a")}} Element.
