---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüpunkt erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenketten. Der Punkt wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer auf Ihre Browser-Aktion in einer Manifest V3-Erweiterung rechtsklickt. Die maximale Anzahl von Elementen, die dem übergeordneten Kontextmenü der Browser-Aktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer auf ein [audio](/de/docs/Web/HTML/Element/audio)-Element rechtsklickt.
- bookmark

  - : Gilt, wenn der Benutzer auf ein Lesezeichen-Element in der Lesezeichen-Symbolleiste, dem Lesezeichen-Menü, der Lesezeichen-Sidebar (<kbd>Strg</kbd>+<kbd>B</kbd>) und dem Bibliotheksfenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) rechtsklickt. Letztere zwei werden ab Firefox 66 unterstützt. Erfordert die "bookmarks"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer auf Ihre Browser-Aktion in einer Manifest V2-Erweiterung rechtsklickt. Die maximale Anzahl von Elementen, die dem übergeordneten Kontextmenü der Browser-Aktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer auf ein bearbeitbares Element wie ein [textarea](/de/docs/Web/HTML/Element/textarea) rechtsklickt.
- frame
  - : Gilt, wenn der Benutzer in einem verschachtelten [iframe](/de/docs/Web/HTML/Element/iframe) rechtsklickt.
- image
  - : Gilt, wenn der Benutzer auf ein Bild rechtsklickt.
- link
  - : Gilt, wenn der Benutzer auf einen Link rechtsklickt.
- page
  - : Gilt, wenn der Benutzer in die Seite rechtsklickt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel, der Klick erfolgt nicht auf ein Bild, ein verschachteltes iframe oder einen Link).
- page_action
  - : Gilt, wenn der Benutzer auf Ihre Seitenaktion rechtsklickt. Die maximale Anzahl von Elementen, die dem übergeordneten Kontextmenü der Seitenaktion hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer auf ein [Passworteingabeelement](/de/docs/Web/HTML/Element/input/password) rechtsklickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab

  - : Gilt, wenn der Benutzer auf einen Tab rechtsklickt (speziell bezieht sich dies auf den Tab-Streifen oder ein anderes Benutzeroberflächenelement, das den Benutzer ermöglicht, von einem Tab zum anderen zu wechseln, nicht auf die Seite selbst).

    Ab Firefox 63 gewährt das Klicken auf das Menüelement auf einem Tab die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für den angeklickten Tab, auch wenn dies nicht der derzeit aktive Tab ist.

- tools_menu
  - : Das Element wird dem Werkzeuge-Menü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus`-Namensraum aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus`-Namensraum aufrufen.
- video
  - : Gilt, wenn der Benutzer auf ein [video](/de/docs/Web/HTML/Element/video)-Element rechtsklickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType)-API. Diese Dokumentation stammt von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
