---
title: Anleitung zur Dokumentation von Web-Fehlern
short-title: Dokumentieren von Fehlern
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) auf MDN Web Docs ist ein Projekt, um Webentwicklern bei Fehlern zu helfen, die in der [Entwicklerkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) auftreten. Für dieses Projekt müssen wir mehr Fehlerdokumentation auf MDN Web Docs schreiben, damit wir mehr Links zu den Tools hinzufügen können, in denen die Nachrichten ausgelöst werden. Dieser Artikel erklärt, wie Sie die Web-Fehler dokumentieren.

JavaScript-Fehler enthalten einen "Mehr erfahren"-Link, der Sie zur JavaScript-Fehlerreferenz führt, in der zusätzliche Ratschläge zur Behebung von Problemen enthalten sind. Um die Web-Fehler dokumentieren zu können, müssen Sie einige [JavaScript](/de/docs/Web/JavaScript) kennen oder sich darin vertiefen können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden Fehler

- Fehlermeldungen von Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Fehlermeldungen von Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Schritt 2 – Überprüfen Sie die vorhandene Fehlerdokumentation

- Werfen Sie einen Blick auf die vorhandene [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) und sehen Sie, wie Fehler dokumentiert sind.
- Je nachdem, über welchen Fehlertyp Sie schreiben möchten, können Sie sich diese Seiten genauer ansehen.
- Vielleicht möchten Sie den Inhalt einer bestehenden Seite kopieren, um Ihre neue Seite zu starten.

## Schritt 3 – Erstellen Sie die neue Fehlerseite

- Alle Fehlerseiten befinden sich unter diesem Baum: [/docs/Web/JavaScript/Reference/Errors](/de/docs/Web/JavaScript/Reference/Errors)
- Um eine neue Seite zu erstellen, beachten Sie die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Dokumentieren Sie den Fehler

- Entweder verwenden Sie eine kopierte Struktur aus einem der bestehenden Fehlerdokumente oder beginnen von Grund auf neu. Ihre Wahl!
- Sie sollten mindestens folgendes haben:
  - Eine Syntaxbox, die die in verschiedenen Browsern ausgelösten Nachrichten enthält.
  - Den Fehlertyp.
  - Einen Text, der erklärt, warum dieser Fehler aufgetreten ist und welche Konsequenzen er hat. Gehen Sie über die ausgelöste Nachricht hinaus.
  - Beispiele, die den Fehler veranschaulichen (es kann mehr als eins geben!) und ein Beispiel, wie man den Code repariert.
  - Hinweise auf anderes Referenzmaterial auf MDN Web Docs.

## Schritt 5 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Fehlerseite erstellt haben, reichen Sie sie als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
