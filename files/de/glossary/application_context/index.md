---
title: Anwendungs-Kontext
slug: Glossary/Application_context
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Anwendungs-Kontext** ist ein oberster [Browsing-Kontext](/de/docs/Glossary/browsing_context), auf den ein [Manifest](/de/docs/Web/Manifest) angewendet wird.

Wenn ein Anwendungs-Kontext aufgrund der Aufforderung des Benutzeragents erstellt wird, zu einem Deep-Link zu navigieren, muss der Benutzeragent sofort mit aktivierter Ersetzung zu diesem Deep-Link navigieren. Andernfalls muss der Benutzeragent bei Erstellung des Anwendungs-Kontexts sofort zur Start-URL mit aktivierter Ersetzung navigieren.

Bitte beachten Sie, dass die Start-URL nicht unbedingt der Wert des start_url-Mitglieds ist: Der Benutzer oder der Benutzeragent könnte sie geändert haben, als die Anwendung zum Startbildschirm hinzugefügt oder anderweitig als Lesezeichen gesetzt wurde.

## Siehe auch

- [Progressive Web Apps (PWA)](/de/docs/Web/Progressive_web_apps)
- [`scope`](/de/docs/Web/Manifest/scope)
