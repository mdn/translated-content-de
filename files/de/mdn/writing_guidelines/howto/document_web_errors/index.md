---
title: Wie man Web-Fehler dokumentiert
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Der [JavaScript Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) auf den MDN Web Docs ist ein Projekt, das Webentwickler bei Fehlern unterstützt, die in der [Entwicklerkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) auftreten. Für dieses Projekt müssen wir mehr Fehlerdokumentationen auf den MDN Web Docs verfassen, damit wir mehr Links zu den Werkzeugen hinzufügen können, bei denen die Nachrichten ausgegeben werden. Dieser Artikel erklärt, wie man die Web-Fehler dokumentiert.

JavaScript-Fehler enthalten einen "Mehr erfahren"-Link, der Sie zur JavaScript-Fehlerreferenz führt, wo Sie zusätzliche Ratschläge zum Beheben der Probleme finden. Um in der Lage zu sein, die Web-Fehler zu dokumentieren, sollten Sie mit [JavaScript](/de/docs/Web/JavaScript) vertraut sein oder sich damit auseinandersetzen können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden Fehler

- Fehlermeldungen von Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Fehlermeldungen von Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Schritt 2 – Überprüfen Sie die bestehende Fehlerdokumentation

- Schauen Sie sich die bestehende [JavaScript Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) an und sehen Sie, wie Fehler dokumentiert werden.
- Abhängig von der Art des Fehlers, über den Sie schreiben möchten, können Sie sich diese Seiten genauer ansehen.
- Vielleicht möchten Sie den Inhalt einer bestehenden Seite kopieren, um Ihre neue Seite zu starten.

## Schritt 3 – Erstellen Sie die neue Fehlerseite

- Alle Fehlerseiten befinden sich unter folgendem Pfad: [/docs/Web/JavaScript/Reference/Errors](/de/docs/Web/JavaScript/Reference/Errors)
- Um eine neue Seite zu erstellen, siehe die Anweisungen in unserem Leitfaden [wie man eine Seite erstellt](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Dokumentieren Sie den Fehler

- Verwenden Sie entweder eine kopierte Struktur von einem der bestehenden Fehlerdokumente oder beginnen Sie ganz von vorne. Ihre Wahl!
- Sie sollten mindestens Folgendes haben:

  - Ein Syntaxkasten, der die Nachricht zeigt, wie sie in verschiedenen Browsern ausgegeben wird.
  - Den Fehlertyp.
  - Einen Text, der erklärt, warum dieser Fehler aufgetreten ist und welche Konsequenzen er hat. Gehen Sie über die ausgegebene Nachricht hinaus.
  - Beispiele, die den Fehler veranschaulichen (es könnten mehrere sein!) und ein Beispiel, das zeigt, wie der Code repariert werden kann.
  - Hinweise auf anderes Referenzmaterial in den MDN Web Docs.

## Schritt 5 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Fehlerseite erstellt haben, reichen Sie sie als Pull Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
