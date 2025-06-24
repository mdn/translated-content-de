---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüelement erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenketten. Das Element wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihr Browser-Action-Element in einer Manifest-V3-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Browser-Action-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [audio](/de/docs/Web/HTML/Reference/Elements/audio)-Element klickt.
- bookmark

  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Lesezeichen-Element in der Lesezeichen-Symbolleiste, dem Lesezeichen-Menü, der Lesezeichen-Sidebar (<kbd>Strg</kbd>+<kbd>B</kbd>) und dem Bibliotheksfenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) klickt. Die letzten beiden werden seit Firefox 66 unterstützt. Erfordert die "bookmarks"-[API-Genehmigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihr Browser-Action-Element in einer Manifest-V2-Erweiterung klickt. Die maximale Anzahl von Elementen, die dem obersten Browser-Action-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein bearbeitbares Element klickt, wie z.B. ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea).
- frame
  - : Gilt, wenn der Benutzer mit der rechten Maustaste in einem verschachtelten [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) klickt.
- image
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein Bild klickt.
- link
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf einen Link klickt.
- page
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf die Seite klickt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel der Klick erfolgt nicht auf ein Bild oder ein verschachteltes iframe oder einen Link).
- page_action
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf Ihre Seiten-Aktion klickt. Die maximale Anzahl von Elementen, die dem obersten Seiten-Aktions-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [Passwort-Eingabeelement](/de/docs/Web/HTML/Reference/Elements/input/password) klickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab

  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf einen Tab klickt (dies bezieht sich speziell auf die Tab-Leiste oder anderes Benutzeroberflächenelement, das es dem Benutzer ermöglicht, zwischen den Browser-Tabs zu wechseln, nicht auf die Seite selbst).

    Ab Firefox 63 gewährt das Klicken des Menüpunkts auf einem Tab die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für den angeklickten Tab, auch wenn dies nicht der aktuell aktive Tab ist.

- tools_menu
  - : Das Element wird dem Werkzeug-Menü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus`-Namensraum aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus`-Namensraum aufrufen.
- video
  - : Gilt, wenn der Benutzer mit der rechten Maustaste auf ein [video](/de/docs/Web/HTML/Reference/Elements/video)-Element klickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType)-API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
