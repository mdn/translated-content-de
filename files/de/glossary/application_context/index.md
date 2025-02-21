---
title: Anwendungskontext
slug: Glossary/Application_context
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{GlossarySidebar}}

Der **Anwendungskontext** bezieht sich auf den obersten {{Glossary("browsing_context", "Browsing-Kontext")}} einer [Webanwendung](/de/docs/Web/Progressive_web_apps). Er bestimmt, wie der Browsing-Kontext einer App, wie z. B. ein Tab oder ein Fenster, dargestellt wird und sich verhält.

Webentwickler definieren den Anwendungskontext in der [Manifestdatei der Web-App](/de/docs/Web/Progressive_web_apps/Manifest). Sie verwenden das [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Mitglied im Manifest, um die Menge der URLs anzugeben, die als Teil des Anwendungskontexts betrachtet werden und auf die das Manifest angewendet wird.

Das Manifest wird angewendet, nachdem der Anwendungskontext erstellt wurde, aber bevor die Navigation entweder zu einer Start-URL oder einem Deep Link beginnt. Eine **Start-URL** ist die anfängliche Seite der Web-App. Ein **Deep Link** ist eine URL, die Benutzer zu einer bestimmten Seite innerhalb der Web-App leitet und die Startseite umgeht. Der Anwendungskontext stellt sicher, dass das definierte Verhalten und die Präsentation der App innerhalb seines Geltungsbereichs beibehalten werden.

Wenn ein Anwendungskontext erstellt wird, müssen Browser sofort zu einer Start-URL oder einem Deep Link navigieren. Diese Navigation ersetzt den aktuellen Eintrag im Browserverlauf. Wenn der Anwendungskontext erstellt wird, um zu einem Deep Link zu navigieren, navigiert der Browser direkt zu diesem Deep Link; andernfalls navigiert er zur Start-URL.

Beachten Sie, dass die Start-URL nicht unbedingt der Wert des [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Mitglieds im Manifest ist. Browser können die angegebene `start_url` ignorieren oder Benutzern erlauben, deren Wert zu ändern, wenn sie die Web-App dem Startbildschirm ihres Geräts hinzufügen oder sie als Lesezeichen speichern.

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest)
- [Progressive Web-Apps (PWA)](/de/docs/Web/Progressive_web_apps)
