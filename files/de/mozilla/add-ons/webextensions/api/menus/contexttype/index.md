---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüelement angezeigt werden kann.

## Typ

Werte dieses Typs sind Strings. Das Element wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte, mit Ausnahme von 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer in einer Manifest V3-Erweiterung auf Ihre Browser-Aktion einen Rechtsklick ausführt. Die maximale Anzahl von Elementen, die zum obersten Browser-Aktions-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer auf ein [audio](/de/docs/Web/HTML/Element/audio) Element einen Rechtsklick ausführt.
- bookmark

  - : Gilt, wenn der Benutzer auf ein Lesezeichen-Element in der Lesezeichen-Symbolleiste, dem Lesezeichen-Menü, der Lesezeichen-Seitenleiste (<kbd>Ctrl</kbd>+<kbd>B</kbd>) und dem Bibliotheksfenster (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>) einen Rechtsklick ausführt. Die letzten beiden werden seit Firefox 66 unterstützt. Erfordert die "bookmarks" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer in einer Manifest V2-Erweiterung auf Ihre Browser-Aktion einen Rechtsklick ausführt. Die maximale Anzahl von Elementen, die zum obersten Browser-Aktions-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer auf ein bearbeitbares Element wie ein [textarea](/de/docs/Web/HTML/Element/textarea) einen Rechtsklick ausführt.
- frame
  - : Gilt, wenn der Benutzer in einem verschachtelten [iframe](/de/docs/Web/HTML/Element/iframe) einen Rechtsklick ausführt.
- image
  - : Gilt, wenn der Benutzer auf ein Bild einen Rechtsklick ausführt.
- link
  - : Gilt, wenn der Benutzer auf einen Link einen Rechtsklick ausführt.
- page
  - : Gilt, wenn der Benutzer auf der Seite einen Rechtsklick ausführt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel befindet sich der Klick nicht auf einem Bild, einem verschachtelten iframe oder einem Link).
- page_action
  - : Gilt, wenn der Benutzer auf Ihre Seitenaktion einen Rechtsklick ausführt. Die maximale Anzahl von Elementen, die zum obersten Seitenaktions-Kontextmenü hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer auf ein [Passwort-Eingabeelement](/de/docs/Web/HTML/Element/input/password) einen Rechtsklick ausführt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab

  - : Gilt, wenn der Benutzer auf einen Tab einen Rechtsklick ausführt (dies bezieht sich speziell auf die Tab-Leiste oder ein anderes Benutzeroberflächenelement, das es dem Benutzer ermöglicht, von einem Browser-Tab zu einem anderen zu wechseln, nicht auf die Seite selbst).

    Ab Firefox 63 gewährt das Klicken auf das Menüelement in einem Tab die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) Berechtigung für den angeklickten Tab, auch wenn dieser nicht der aktuell aktive Tab ist.

- tools_menu
  - : Das Element wird zum Werkzeug-Menü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus`-Namespace aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus`-Namespace aufrufen.
- video
  - : Gilt, wenn der Benutzer auf ein [video](/de/docs/Web/HTML/Element/video) Element einen Rechtsklick ausführt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType) API von Chromium. Diese Dokumentation wird aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.
