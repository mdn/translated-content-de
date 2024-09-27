---
title: Wie man Webfehler dokumentiert
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Das [JavaScript-Fehlerverzeichnis](/de/docs/Web/JavaScript/Reference/Errors) auf den MDN Web Docs ist ein Projekt, um Webentwickler mit Fehlern zu unterstützen, die in der [Entwicklerkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) auftreten. Für dieses Projekt müssen wir mehr Fehlerdokumentation auf den MDN Web Docs schreiben, damit wir mehr Links zu den Werkzeugen hinzufügen können, in denen die Nachrichten angezeigt werden. Dieser Artikel erklärt, wie Sie die Webfehler dokumentieren können.

JavaScript-Fehler enthalten einen "Mehr erfahren"-Link, der Sie zu dem JavaScript-Fehlerverzeichnis führt, das zusätzliche Tipps zur Behebung von Problemen bietet. Um die Webfehler dokumentieren zu können, müssen Sie entweder JavaScript kennen oder in der Lage sein, sich in [JavaScript](/de/docs/Web/JavaScript) einzuarbeiten.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden Fehler

- Fehlernachrichten von Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Fehlernachrichten von Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Schritt 2 – Überprüfen Sie die vorhandene Fehlerdokumentation

- Sehen Sie sich das bestehende [JavaScript-Fehlerverzeichnis](/de/docs/Web/JavaScript/Reference/Errors) an und prüfen Sie, wie die Fehler dokumentiert sind.
- Je nach Art des Fehlers, über den Sie schreiben möchten, können Sie sich diese Seiten genauer anschauen.
- Möglicherweise möchten Sie den Inhalt einer vorhandenen Seite kopieren, um Ihre neue Seite zu beginnen.

## Schritt 3 – Erstellen Sie die neue Fehlerseite

- Alle Fehlerseiten befinden sich unter diesem Verzeichnis: [/docs/Web/JavaScript/Reference/Errors](/de/docs/Web/JavaScript/Reference/Errors)
- Um eine neue Seite zu erstellen, sehen Sie bitte die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Schritt 4 – Dokumentieren Sie den Fehler

- Verwenden Sie entweder eine kopierte Struktur von einem der bestehenden Fehlerdokumente oder beginnen Sie von Grund auf neu. Ihre Entscheidung!
- Sie sollten mindestens folgendes haben:

  - Eine Syntaxbox, die die in verschiedenen Browsern angezeigte Nachricht enthält.
  - Den Fehlertyp.
  - Einen Text, der erklärt, warum dieser Fehler aufgetreten ist und welche Konsequenzen er hat. Gehen Sie über die angezeigte Nachricht hinaus.
  - Beispiele, die den Fehler veranschaulichen (es könnte mehr als eines vorhanden sein!) und ein Beispiel, wie man den Code repariert.
  - Hinweise auf andere Referenzmaterialien auf den MDN Web Docs.

## Schritt 5 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Fehlerseite erstellt haben, reichen Sie sie als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
