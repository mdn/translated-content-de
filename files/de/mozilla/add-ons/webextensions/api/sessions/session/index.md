---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das `Session`-Objekt repräsentiert einen Tab oder ein Fenster, das der Benutzer in der aktuellen Browsersitzung geschlossen hat.

Sitzungen werden als {{WebExtAPIRef("tabs.Tab", "Tab")}} Objekte dargestellt, wenn der Tab geschlossen wurde, aber sein Fenster nicht geschlossen wurde: zum Beispiel, weil der Benutzer auf den "Tab schließen" Button geklickt hat und dieser Tab nicht der einzige Tab in diesem Fenster war.

Sitzungen werden als {{WebExtAPIRef("windows.Window", "Window")}} Objekte dargestellt, wenn das Fenster geschlossen wurde: zum Beispiel, weil der Benutzer auf den "Fenster schließen" Button geklickt hat oder den einzigen offenen Tab in einem Fenster geschlossen hat.

Beachten Sie, dass verschiedene Browser unterschiedliche Definitionen davon haben, wann eine Sitzung als Tab oder als Fenster gilt. Zum Beispiel:

- In Chrome wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster schließt, das mehr als einen Tab enthielt. Wenn der Benutzer ein Fenster schließt, das nur einen Tab enthielt, wird dies als Tab aufgezeichnet.
- In Firefox wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster (oder einen Tab, der der letzte Tab im Fenster war) schließt, und als Tab, wenn der Benutzer einen Tab schließt, der nicht der letzte Tab in seinem Fenster war.

Das Tab-Objekt für einen geöffneten Tab wird keine `sessionId` haben. Wenn der Tab geschlossen wird, wird es eine `sessionId` haben, aber keine Tab-`id`. Wenn der Tab wiederhergestellt wird, erhält es eine neue Tab-`id` und wird die `sessionId` verlieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `lastModified`
  - : `number`. Die Zeit, zu der der Tab oder das Fenster geschlossen wurde, in [Millisekunden seit dem Epoch](https://de.wikipedia.org/wiki/Unixzeit).
- `tab` {{optional_inline}}
  - : `object`. Wenn das Objekt einen geschlossenen Tab darstellt, dann ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("tabs.Tab")}} Objekt sein. Dieses wird `url`, `title` und `favIconUrl` nur dann enthalten, wenn die Erweiterung die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, um auf die URL des Tabs zuzugreifen.
- `window` {{optional_inline}}
  - : `object`. Wenn das Objekt ein geschlossenes Fenster darstellt, dann ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("windows.Window")}} Objekt sein.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromes [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.
