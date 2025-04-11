---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Ein Popup ist ein Dialog, der mit einem [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verknüpft ist. Diese Seite beschreibt Popups im Allgemeinen, ihre Spezifikation, das Debuggen, die Größenanpassung und das Design von Popups sowie Beispiele für ihre Verwendung.

![Beispiel eines Page-Action-Popups mit drei Optionen: Katzenbabys, Hundewelpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer auf den Button klickt, wird das Popup angezeigt. Wenn der Benutzer irgendwo außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmatisch durch Aufruf von [`window.close()`](/de/docs/Web/API/Window/close) aus einem Skript, das im Popup läuft, geschlossen werden. Es ist jedoch nicht möglich, das Popup programmatisch aus dem JavaScript einer Erweiterung zu öffnen; es kann nur als Antwort auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination definieren, die das Popup über die `"_execute_browser_action"` und `"_execute_page_action"` Shortcuts in Manifest V2 sowie `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` Shortcuts in Manifest V3 öffnet. Siehe die Dokumentation zu den speziellen Shortcuts im manifest.json Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Spezifizieren eines Popups

Das Popup wird als HTML-Datei spezifiziert, die CSS- und JavaScript-Dateien enthalten kann, wie es bei einer normalen Webseite der Fall ist. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzt.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und jedes Mal entladen, wenn das Popup geschlossen wird.

Die HTML-Datei ist in der Erweiterung enthalten und wird als Teil des [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels mit `"default_popup"` in der manifest.json angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details dazu.

## Debuggen von Popups

Sie können das Markup und JavaScript eines Popups mit dem Add-on Debugger debuggen, aber Sie müssen die Funktion "Popup-Auto-Verbergen deaktivieren" einschalten, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb davon klicken. [Lesen Sie über das Debuggen von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Größenanpassung von Popups

Popups passen ihre Größe automatisch an ihren Inhalt an. Der Algorithmus hierfür kann von Browser zu Browser unterschiedlich sein.

In Firefox wird die Größe unmittelbar bevor das Popup angezeigt wird berechnet und maximal 10 Mal pro Sekunde nach DOM-Änderungen. Für Dokumente im Strict Mode wird die Größe basierend auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elements berechnet. Für Quirks Mode ist es das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element. Firefox errechnet die bevorzugte Breite der Inhalte dieses Elements, passt es auf diese Breite an und ändert dann die Größe so, dass kein vertikales Scrollen erforderlich ist. Es wird maximal auf eine Größe von **800x600 Pixel** wachsen, wenn das auf den Bildschirm des Benutzers passt. (Vor Firefox 60 waren es nur [680px](https://bugzil.la/1434177).) Wenn der Benutzer [den Button der Erweiterung in das Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder er im Überlauf der Symbolleiste erscheint, dann erscheint das Popup im Menüfenster und erhält eine feste Breite.

Wenn Sie die `width` des Popups in CSS setzen, sollten Sie dies im [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) und nicht im `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Popup-Design

Für Details, wie Sie die Webseite Ihres Popups gestalten können, um den Stil von Firefox zu erreichen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) Beispiel, welches eine Browser-Aktion mit einem Popup implementiert.
