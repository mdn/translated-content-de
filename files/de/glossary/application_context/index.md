---
title: Anwendungs-Kontext
slug: Glossary/Application_context
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Anwendungs-Kontext** ist ein oberster {{glossary("browsing context")}}, dem ein [Manifest](/de/docs/Web/Manifest) zugewiesen wurde.

Wenn ein Anwendungs-Kontext als Ergebnis einer Anfrage des Benutzer-Agents zum Navigieren zu einem Deep-Link erstellt wird, muss der Benutzer-Agent sofort zum Deep-Link mit aktivierter Ersetzung navigieren. Andernfalls muss der Benutzer-Agent bei der Erstellung des Anwendungs-Kontexts sofort zur Start-URL mit aktivierter Ersetzung navigieren.

Bitte beachten Sie, dass die Start-URL nicht unbedingt der Wert des start_url-Mitglieds ist: der Benutzer oder Benutzer-Agent könnte sie geändert haben, als die Anwendung zum Home-Bildschirm hinzugefügt oder anderweitig als Lesezeichen gespeichert wurde.

## Siehe auch

- [Progressive Web Apps (PWA)](/de/docs/Web/Progressive_web_apps)
- [`scope`](/de/docs/Web/Manifest/scope)
