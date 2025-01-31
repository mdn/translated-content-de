---
title: Anwendungskontext
slug: Glossary/Application_context
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{GlossarySidebar}}

Der **Anwendungskontext** bezieht sich auf den obersten {{Glossary("browsing_context", "Browsing-Kontext")}} einer [Webanwendung](/de/docs/Web/Progressive_web_apps).
Er bestimmt, wie der Browsing-Kontext einer App, wie etwa ein Tab oder ein Fenster, dargestellt wird und sich verhält.

Webentwickler definieren den Anwendungskontext in der [Manifestdatei der Web-App](/de/docs/Web/Manifest).
Sie verwenden das [`scope`](/de/docs/Web/Manifest/Reference/scope) Element im Manifest, um die Menge an URLs zu spezifizieren, die als Teil des Anwendungskontexts betrachtet werden und auf die das Manifest angewendet wird.

Das Manifest wird angewendet, nachdem der Anwendungskontext erstellt wurde, aber bevor die Navigation zu einer Start-URL oder einem Deep-Link beginnt.
Eine **Start-URL** ist die Anfangsseite der Web-App.
Ein **Deep-Link** ist eine URL, die Benutzer direkt zu einer bestimmten Seite innerhalb der Web-App führt und die Startseite umgeht.
Der Anwendungskontext stellt sicher, dass das definierte Verhalten und die Darstellung der App innerhalb seines Bereichs beibehalten werden.

Wenn ein Anwendungskontext erstellt wird, müssen Browser sofort zu einer Start-URL oder einem Deep-Link navigieren.
Diese Navigation ersetzt den aktuellen Eintrag im Verlauf des Browsers.
Wenn der Anwendungskontext erstellt wird, um zu einem Deep-Link zu navigieren, navigiert der Browser direkt zu diesem Deep-Link; andernfalls navigiert er zur Start-URL.

Beachten Sie, dass die Start-URL nicht unbedingt der Wert des [`start_url`](/de/docs/Web/Manifest/Reference/start_url) Elements im Manifest ist. Browser können die angegebene `start_url` ignorieren oder es Benutzern erlauben, ihren Wert zu ändern, wenn sie die Web-App zum Startbildschirm ihres Geräts hinzufügen oder sie als Lesezeichen speichern.

## Siehe auch

- [`scope`](/de/docs/Web/Manifest/Reference/scope)
- [Manifestdateien für Web-Apps](/de/docs/Web/Manifest)
- [Progressive Web-Apps (PWA)](/de/docs/Web/Progressive_web_apps)
