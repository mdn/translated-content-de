---
title: Anleitung zur Dokumentation von Webfehlern
short-title: Fehler dokumentieren
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Der [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) auf MDN Web Docs ist ein Projekt, das Webentwicklern bei Fehlern hilft, die in der [Entwicklerkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) auftreten. Für dieses Projekt müssen wir mehr Fehlerdokumentation auf MDN Web Docs verfassen, damit wir mehr Links zu den Tools hinzufügen können, in denen die Nachrichten ausgegeben werden. Dieser Artikel erklärt, wie man Webfehler dokumentiert.

JavaScript-Fehler enthalten einen "Mehr erfahren"-Link, der Sie zur JavaScript-Fehlerreferenz führt, die zusätzliche Ratschläge zur Behebung von Problemen enthält. Um die Webfehler dokumentieren zu können, müssen Sie mit etwas [JavaScript](/de/docs/Web/JavaScript) vertraut sein oder sich darin vertiefen können.

## Schritt 1 – Bestimmen Sie den zu dokumentierenden Fehler

- Fehlermeldungen von Firefox/Gecko: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Fehlermeldungen von Chrome/v8: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Schritt 2 – Überprüfen Sie die vorhandene Fehlerdokumentation

- Schauen Sie sich die vorhandene [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) an und sehen Sie, wie Fehler dokumentiert sind.
- Je nachdem, über welche Art von Fehler Sie schreiben möchten, können Sie einen genaueren Blick auf diese Seiten werfen.
- Sie können den Inhalt einer bestehenden Seite kopieren, um Ihre neue Seite zu starten.

## Schritt 3 – Erstellen Sie die neue Fehlerseite

- Alle Fehlerseiten befinden sich unter folgendem Verzeichnis: [/docs/Web/JavaScript/Reference/Errors](/de/docs/Web/JavaScript/Reference/Errors)
- Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [Leitfaden zur Seitenerstellung](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Schritt 4 – Dokumentieren Sie den Fehler

- Verwenden Sie entweder eine kopierte Struktur von einem der bestehenden Fehlerdokumente oder beginnen Sie von Grund auf neu. Ihre Wahl!
- Sie sollten mindestens Folgendes haben:

  - Eine Syntaxbox, die die in verschiedenen Browsern ausgegebene Nachricht enthält.
  - Den Fehlertyp.
  - Einen Text, der erklärt, warum dieser Fehler aufgetreten ist und welche Konsequenzen er hat. Gehen Sie über die angezeigte Nachricht hinaus.
  - Beispiele, die den Fehler veranschaulichen (es kann mehr als eines geben!) und ein Beispiel, das zeigt, wie man den Code beheben kann.
  - Verweise auf anderes Referenzmaterial auf MDN Web Docs.

## Schritt 5 – Lassen Sie den Inhalt überprüfen

Nachdem Sie die Fehlerseite erstellt haben, reichen Sie diese als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
