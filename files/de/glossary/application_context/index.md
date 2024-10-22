---
title: Anwendungskontext
slug: Glossary/Application_context
l10n:
  sourceCommit: 5d4cc96f432d408b898dbdc8f39f1cab36d3af59
---

{{GlossarySidebar}}

**Anwendungskontext** bezieht sich auf den obersten {{Glossary("browsing_context", "Browsing-Kontext")}} einer [Webanwendung](/de/docs/Web/Progressive_web_apps).
Er bestimmt, wie der Browsing-Kontext einer App, wie z. B. ein Tab oder ein Fenster, dargestellt und sich verhält.

Webentwickler definieren den Anwendungskontext in der [Manifestdatei der Web-App](/de/docs/Web/Manifest).
Sie verwenden das [`scope`](/de/docs/Web/Manifest/scope)-Mitglied im Manifest, um die Menge der URLs anzugeben, die als Teil des Anwendungskontexts betrachtet werden und auf die das Manifest angewendet wird.

Das Manifest wird angewendet, nachdem der Anwendungskontext erstellt wurde, aber bevor die Navigation zu einer Start-URL oder einem Deep-Link beginnt.
Eine **Start-URL** ist die Anfangsseite der Web-App.
Ein **Deep-Link** ist eine URL, die Benutzer direkt zu einer bestimmten Seite innerhalb der Web-App führt, ohne die Startseite zu passieren.
Der Anwendungskontext stellt sicher, dass das definierte Verhalten und die Präsentation der App innerhalb seines Geltungsbereichs beibehalten werden.

Wenn ein Anwendungskontext erstellt wird, müssen Browser sofort zu einer Start-URL oder zu einem Deep-Link navigieren.
Diese Navigation ersetzt den aktuellen Eintrag im Browserverlauf.
Wenn der Anwendungskontext erstellt wird, um zu einem Deep-Link zu navigieren, navigiert der Browser direkt zu diesem Deep-Link; andernfalls navigiert er zur Start-URL.

Beachten Sie, dass die Start-URL nicht unbedingt den Wert des [`start_url`](/de/docs/Web/Manifest/start_url)-Mitglieds im Manifest darstellt. Browser können die angegebene `start_url` ignorieren oder Benutzern erlauben, deren Wert zu ändern, wenn sie die Web-App zum Home-Bildschirm ihres Geräts hinzufügen oder sie als Lesezeichen speichern.

## Siehe auch

- [`scope`](/de/docs/Web/Manifest/scope)
- [Web-App-Manifeste](/de/docs/Web/Manifest)
- [Progressive Web Apps (PWA)](/de/docs/Web/Progressive_web_apps)
