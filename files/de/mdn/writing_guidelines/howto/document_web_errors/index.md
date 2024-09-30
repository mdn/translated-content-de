---
title: Anleitung zur Dokumentation von Webfehlern
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Der [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) auf den MDN Web Docs ist ein Projekt, das Webentwicklern bei Fehlern hilft, die in der [Entwicklerkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) auftreten. Für dieses Projekt müssen wir mehr Fehlerdokumentationen auf den MDN Web Docs erstellen, damit wir mehr Links zu den Werkzeugen hinzufügen können, wo die Nachrichten ausgegeben werden. In diesem Artikel wird erklärt, wie Sie die Webfehler dokumentieren können.

JavaScript-Fehler enthalten einen "Mehr erfahren"-Link, der Sie zur JavaScript-Fehlerreferenz führt, die zusätzliche Ratschläge zur Behebung von Problemen bietet. Um die Webfehler dokumentieren zu können, sollten Sie über [JavaScript](/de/docs/Web/JavaScript) Bescheid wissen oder sich in das Thema einarbeiten können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden Fehler

- Fehlernachrichten von Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Fehlernachrichten von Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Schritt 2 – Überprüfen der bestehenden Fehlerdokumentation

- Schauen Sie sich die bestehende [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) an und sehen Sie, wie Fehler dokumentiert werden.
- Je nachdem, über welchen Fehlertyp Sie schreiben möchten, können Sie sich diese Seiten genauer ansehen.
- Möglicherweise möchten Sie den Inhalt einer bestehenden Seite kopieren, um Ihre neue Seite zu starten.

## Schritt 3 – Erstellen Sie die neue Fehlerseite

- Alle Fehlerseiten befinden sich unter diesem Baum: [/docs/Web/JavaScript/Reference/Errors](/de/docs/Web/JavaScript/Reference/Errors)
- Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Leitfaden zur Seitenerstellung](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

## Schritt 4 – Dokumentieren Sie den Fehler

- Verwenden Sie entweder eine kopierte Struktur von einem der vorhandenen Fehlerdokumente oder beginnen Sie von Grund auf neu. Ihre Wahl!
- Sie sollten mindestens folgendes haben:

  - Einen Syntaxkasten, der die Nachricht so enthält, wie sie in verschiedenen Browsern ausgegeben wird.
  - Den Fehlertyp.
  - Einen Text, der erklärt, warum dieser Fehler aufgetreten ist und welche Folgen er hat. Gehen Sie über die ausgegebene Nachricht hinaus.
  - Beispiele, die den Fehler (es kann mehr als eines geben!) und ein Beispiel zeigen, wie der Code behoben werden kann.
  - Hinweise auf anderes Referenzmaterial auf den MDN Web Docs.

## Schritt 5 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Fehlerseite erstellt haben, reichen Sie sie als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
