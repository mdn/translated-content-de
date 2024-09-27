---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das `Session`-Objekt repräsentiert einen Tab oder ein Fenster, das der Benutzer in der aktuellen Browsersitzung geschlossen hat.

Sitzungen werden als {{WebExtAPIRef("tabs.Tab", "Tab")}}-Objekte dargestellt, wenn der Tab geschlossen wurde, aber sein Fenster nicht geschlossen wurde: beispielsweise, weil der Benutzer auf die Schaltfläche "Tab schließen" geklickt hat und dieser Tab nicht der einzige im Fenster war.

Sitzungen werden als {{WebExtAPIRef("windows.Window", "Window")}}-Objekte dargestellt, wenn das Fenster geschlossen wurde: zum Beispiel, weil der Benutzer auf die Schaltfläche "Fenster schließen" geklickt hat oder den einzigen offenen Tab in einem Fenster geschlossen hat.

Beachten Sie, dass verschiedene Browser eine unterschiedliche Vorstellung davon haben können, wann eine Sitzung ein Tab und wann ein Fenster ist. Zum Beispiel:

- In Chrome wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster schließt, das mehr als einen Tab enthielt. Wenn der Benutzer ein Fenster schließt, das nur einen Tab enthält, wird dies als Tab aufgezeichnet.
- In Firefox wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster (oder einen Tab, der der letzte Tab im Fenster war) schließt, und als Tab, wenn der Benutzer einen Tab schließt, der nicht der letzte im Fenster war.

Das Tab-Objekt für einen geöffneten Tab hat keine `sessionId`. Wenn der Tab geschlossen wird, erhält er eine `sessionId`, hat jedoch keine Tab-`id`. Wenn der Tab wiederhergestellt wird, erhält er eine neue Tab-`id` und verliert die `sessionId`.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `lastModified`
  - : `number`. Die Zeit, zu der der Tab oder das Fenster geschlossen wurde, in [Millisekunden seit dem Ursprung](https://en.wikipedia.org/wiki/Unix_time).
- `tab` {{optional_inline}}
  - : `object`. Wenn das Objekt einen geschlossenen Tab darstellt, dann ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("tabs.Tab")}}-Objekt sein. Diese Eigenschaft wird `url`, `title` und `favIconUrl` nur enthalten, wenn die Erweiterung über die "Tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) zum Zugriff auf die URL des Tabs verfügt.
- `window` {{optional_inline}}
  - : `object`. Wenn das Objekt ein geschlossenes Fenster darstellt, dann ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("windows.Window")}}-Objekt sein.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions)-API von Chromium.
