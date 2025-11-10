---
title: Anwendungs-Kontext
slug: Glossary/Application_context
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Anwendungs-Kontext** bezieht sich auf den obersten {{Glossary("browsing_context", "Browsing-Kontext")}} einer [Webanwendung](/de/docs/Web/Progressive_web_apps).
Er bestimmt, wie der Browsing-Kontext einer App, wie z.B. ein Tab oder ein Fenster, dargestellt und betrieben wird.

Webentwickler definieren den Anwendungs-Kontext in der [Manifestdatei der Web-App](/de/docs/Web/Progressive_web_apps/Manifest).
Sie verwenden das [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglied im Manifest, um die Menge von URLs festzulegen, die als Teil des Anwendungs-Kontextes angesehen werden und auf die sich das Manifest bezieht.

Das Manifest wird angewendet, nachdem der Anwendungs-Kontext erstellt wurde, jedoch bevor die Navigation zu einer Start-URL oder einem Deep-Link beginnt.
Eine **Start-URL** ist die anfängliche Seite der Web-App.
Ein **Deep-Link** ist eine URL, die Benutzer direkt zu einer bestimmten Seite innerhalb der Web-App führt und die Startseite umgeht.
Der Anwendungs-Kontext stellt sicher, dass das definierte Verhalten und die Darstellung der App innerhalb seines Bereichs beibehalten werden.

Wenn ein Anwendungs-Kontext erstellt wird, müssen Browser sofort zu einer Start-URL oder einem Deep-Link navigieren.
Diese Navigation ersetzt den aktuellen Eintrag im Browserverlauf.
Falls der Anwendungs-Kontext erstellt wird, um zu einem Deep-Link zu navigieren, navigiert der Browser direkt zu diesem Deep-Link; andernfalls wird zur Start-URL navigiert.

Beachten Sie, dass die Start-URL nicht unbedingt der Wert des [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglieds im Manifest ist. Browser können die angegebene `start_url` ignorieren oder den Benutzern erlauben, ihren Wert zu ändern, wenn sie die Web-App dem Startbildschirm ihres Geräts hinzufügen oder als Lesezeichen speichern.

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [Web-App-Manifestdateien](/de/docs/Web/Progressive_web_apps/Manifest)
- [Progressive Web Apps (PWA)](/de/docs/Web/Progressive_web_apps)
