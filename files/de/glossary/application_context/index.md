---
title: Application Context
slug: Glossary/Application_context
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Application Context** ist ein oberster {{Glossary("browsing_context", "Browsing-Kontext")}}, dem ein [Manifest](/de/docs/Web/Manifest) zugewiesen wurde.

Wird ein Application Context erstellt, weil der User-Agent aufgefordert wurde, zu einem tiefen Link zu navigieren, muss der User-Agent sofort mit aktivierter Ersetzung zu diesem tiefen Link navigieren. Andernfalls muss der User-Agent sofort mit aktivierter Ersetzung zur Start-URL navigieren, wenn der Application Context erstellt wird.

Bitte beachten Sie, dass die Start-URL nicht unbedingt der Wert des Start_url-Mitglieds ist: Der Benutzer oder User-Agent könnte sie geändert haben, als die Anwendung zum Startbildschirm hinzugefügt oder anderweitig als Lesezeichen gesetzt wurde.

## Siehe auch

- [Progressive Web-Apps (PWA)](/de/docs/Web/Progressive_web_apps)
- [`scope`](/de/docs/Web/Manifest/scope)
