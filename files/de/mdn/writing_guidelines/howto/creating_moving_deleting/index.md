---
title: Wie man Seiten erstellt, verschiebt, löscht und bearbeitet
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt, wie Sie eine Seite erstellen, verschieben, löschen oder bearbeiten können. In allen diesen Fällen ist es eine gute Idee, unsere Richtlinien für [Was wir schreiben](/de/docs/MDN/Writing_guidelines/What_we_write) zu überprüfen, um zu bestätigen, ob eine dieser Aktionen durchgeführt werden sollte, und es mit dem MDN Web Docs-Team in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu besprechen, bevor Sie fortfahren.

## Seiten erstellen

Alle Seiten auf MDN Web Docs werden im Markdown-Format verfasst. Der Inhalt wird in einer Datei namens `index.md` geschrieben, die in einem eigenen Verzeichnis gespeichert wird. Der Verzeichnisname stellt den Namen der Seite dar. Zum Beispiel, wenn `align-content` eine neue CSS-Eigenschaft ist, für die Sie eine neue Referenzseite erstellen möchten, würden Sie einen Ordner in `en-us/web/css` namens `align-content` erstellen und eine Datei namens `index.md` darin anlegen.

> [!NOTE]
> Der Verzeichnisname unterscheidet sich leicht vom Slug der Seite. Besonders auffällig ist, dass der Slug der Satzschrift folgt.

Es gibt viele verschiedene [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) mit bestimmten Strukturen und unterstützenden Seitenvorlagen, die Sie kopieren können, um loszulegen.

Die `index.md`-Datei eines Dokuments muss mit Front Matter beginnen, die `title`, `slug` und `page-type` definiert. Alle diese Informationen zum Front Matter finden Sie in den oben erwähnten Seitenvorlagen. Alternativ könnten Sie es hilfreich finden, sich auf das Front Matter innerhalb eines ähnlichen Dokuments in der `index.md` zu beziehen.

Der allgemeine Schritt-für-Schritt-Prozess zur Erstellung einer Seite wäre:

1. Starten Sie einen neuen, aktuellen Branch, in dem Sie arbeiten können.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Führen Sie "yarn" erneut aus, um sicherzustellen,
   # dass Sie die neueste Yari-Abhängigkeit installiert haben.
   yarn
   git checkout -b my-add
   ```

2. Erstellen Sie einen oder mehrere neue Dokumentordner, jeder mit eigenen `index.md`-Dateien.

3. Fügen Sie Ihre neuen Dateien hinzu und committen Sie sie, sowie pushen Sie Ihren neuen Branch in Ihren Fork.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Erstellen Sie Ihre Pull-Anfrage.

## Seiten verschieben

Das Verschieben eines oder mehrerer Dokumente oder eines gesamten Dokumentbaums ist einfach, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
yarn content move <from-slug> <to-slug> [locale]
```

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie verschieben möchten (z.B. `Learn/Accessibility`), sowie den Slug des neuen Standorts (z.B. `Learn/A11y`), optional gefolgt von der Sprache des vorhandenen Dokuments (standardmäßig `en-US`).

Wenn das vorhandene Dokument, das Sie verschieben möchten, untergeordnete Dokumente hat (d.h., es stellt einen Dokumentbaum dar), wird der `yarn content move`-Befehl den gesamten Baum verschieben.

Zum Beispiel, wenn Sie den gesamten `/en-US/Learn/Accessibility`-Baum zu `/en-US/Learn/A11y` verschieben möchten, würden Sie folgende Schritte ausführen:

1. Sie starten einen neuen Branch, in dem Sie arbeiten können.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Führen Sie "yarn" erneut aus, um sicherzustellen,
   # dass Sie die neueste Yari-Abhängigkeit installiert haben.
   yarn
   git checkout -b my-move
   ```

2. Führen Sie die Verschiebung durch (wodurch vorhandene Dateien gelöscht und modifiziert sowie neue Dateien erstellt werden).

   ```bash
   yarn content move Learn/Accessibility Learn/A11y
   ```

3. Sobald die Dateien verschoben sind, müssen wir die Verweise auf diese Dateien in den anderen Inhaltsdateien aktualisieren. Verwenden Sie den folgenden Befehl, um alle Verweise automatisch in einem Zug zu aktualisieren:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Fügen Sie alle gelöschten, erstellten und modifizierten Dateien hinzu und committen Sie sie sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git add .
   git commit -m "Move Learn/Accessibility to Learn/A11y"
   git push -u origin my-move
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> **Hinweis:** `yarn content move` fügt automatisch die erforderlichen Weiterleitungsinformationen zur `_redirects.txt`-Datei hinzu, damit der alte Standort zum neuen umgeleitet wird. Bearbeiten Sie die `_redirects.txt`-Datei nicht manuell! Fehler können sich leicht einschleichen, wenn Sie dies tun. Wenn Sie eine Weiterleitung hinzufügen müssen, ohne eine Datei zu verschieben, sprechen Sie mit dem MDN Web Docs-Team in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) darüber.

## Seiten löschen

Dokumente sollten nur unter besonderen Umständen aus den MDN Web Docs entfernt werden. Wenn Sie darüber nachdenken, Seiten zu löschen, besprechen Sie es bitte zuerst mit dem MDN Web Docs-Team in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).

Das Löschen eines oder mehrerer Dokumente oder eines gesamten Dokumentbaums ist einfach, genau wie das Verschieben von Seiten, weil wir einen speziellen Befehl erstellt haben, der die Details für Sie erledigt:

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> Sie müssen den Befehl `yarn content delete` verwenden, um Seiten von den MDN Web Docs zu löschen. Löschen Sie nicht einfach ihre Verzeichnisse aus dem Repo. Der Befehl `yarn content delete` kümmert sich auch um andere notwendige Änderungen wie die Aktualisierung der `_wikihistory.json`-Datei.

Sie müssen nur den Slug des vorhandenen Dokuments angeben, das Sie löschen möchten (z.B. `Learn/Accessibility`), optional gefolgt von der Sprache des vorhandenen Dokuments (standardmäßig `en-US`).

Wenn das vorhandene Dokument, das Sie löschen möchten, untergeordnete Dokumente hat (d.h., es stellt einen Dokumentbaum dar), müssen Sie auch die Option `-r, --recursive` angeben, ansonsten wird der Befehl fehlschlagen.

Zum Beispiel, wenn Sie den gesamten `/en-US/Learn/Accessibility`-Baum löschen möchten, würden Sie folgende Schritte ausführen:

1. Sie starten einen neuen Branch, in dem Sie arbeiten können.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Führen Sie "yarn" erneut aus, um sicherzustellen,
   # dass Sie die neueste Yari-Abhängigkeit installiert haben.
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

4. Fügen Sie alle gelöschten Dateien hinzu und committen sowie pushen Sie Ihren Branch zu Ihrem Fork.

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. Erstellen Sie Ihre Pull-Anfrage.

> [!NOTE]
> Wenn der Slug der Seite, die Sie löschen möchten, Sonderzeichen enthält, geben Sie ihn in Anführungszeichen an, wie folgt:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Das Entfernen von Inhalten aus den MDN Web Docs wird zwangsläufig auch zur Aktualisierung der vorhandenen Inhalte führen. Da viele Artikel auf andere verlinken, werden die entfernten Inhalte wahrscheinlich anderswo referenziert. Das Hinzufügen der Umleitung wird die Auswirkungen der Entfernung von Inhalten mildern; es ist jedoch am besten, die Inhalte zu bearbeiten, um die Änderung zu reflektieren und die Inhaltsbearbeitungen zusammen mit der Entfernungs-Pull-Anfrage einzuschließen.

## Bestehende Seiten bearbeiten

Um eine Seite zu bearbeiten, müssen Sie die Seitenquelle in unserem [Content](https://github.com/mdn/content)-Repository finden. Der einfachste Weg, sie zu finden, besteht darin, zu der Seite zu navigieren, die Sie bearbeiten möchten, zum unteren Ende der Seite zu gehen und auf den Link "View the source on GitHub" zu klicken.

### Änderungen in der Vorschau anzeigen

Wenn Sie die Seite lokal bearbeiten, um zu sehen, wie Ihre Änderungen aussehen, können Sie zum Content-Repo-Ordner gehen, den CLI-Befehl `yarn start` ausführen, zu `localhost:5042` in Ihrem Browser gehen und die Seite finden und anzeigen. Geben Sie den Titel in das Suchfeld ein, um ihn leicht zu finden. Die Vorschauseite wird im Browser aktualisiert, während Sie die Quelle bearbeiten.

### Dateien anhängen

Um eine Datei zu Ihrem Artikel hinzuzufügen, müssen Sie sie nur im gleichen Verzeichnis wie die `index.md`-Datei des Artikels einfügen. Fügen Sie die Datei in Ihre Seite ein, typischerweise über ein {{htmlelement("a")}}-Element.
