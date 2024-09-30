---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Ein Popup ist ein Dialogfenster, das mit einem [Symbolleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verbunden ist. Diese Seite beschreibt Popups im Allgemeinen, einschließlich ihrer Spezifikation, Debugging, Größenanpassung und Gestaltung sowie Anwendungsbeispielen.

![Beispiel eines Seitenaktions-Popups mit drei Optionen: Kätzchen, Welpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer den Button anklickt, wird das Popup angezeigt. Wenn der Benutzer außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmatisch durch einen Aufruf von [`window.close()`](/de/docs/Web/API/Window/close) aus einem Skript, das im Popup ausgeführt wird, geschlossen werden. Allerdings kann das Popup nicht programmatisch aus dem JavaScript einer Erweiterung geöffnet werden; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination definieren, die das Popup öffnet, indem Sie die Shortcuts `"_execute_browser_action"` und `"_execute_page_action"` in Manifest V2 und die Shortcuts `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` in Manifest V3 verwenden. Siehe die Dokumentation für die speziellen Shortcuts im Manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Spezifische Angabe eines Popups

Das Popup wird als HTML-Datei angegeben, die CSS und JavaScript-Dateien enthalten kann, wie dies bei einer normalen Webseite der Fall ist. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und entladen, wenn es geschlossen wird.

Die HTML-Datei ist in die Erweiterung eingebunden und wird als Teil des Schlüssels [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) durch `"default_popup"` im Manifest.json angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups haben eine Content-Security-Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Details dazu finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Debugging von Popups

Sie können das Markup und JavaScript eines Popups mit dem Add-On-Debugger debuggen, müssen jedoch die Funktion Automatisches Ausblenden von Popups deaktivieren, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb davon klicken. [Lesen Sie mehr über das Debugging von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Popup-Größenanpassung

Popups passen ihre Größe automatisch an ihren Inhalt an. Der Algorithmus dafür kann je nach Browser unterschiedlich sein.

In Firefox wird die Größe berechnet, kurz bevor das Popup angezeigt wird, und höchstens 10 Mal pro Sekunde nach DOM-Änderungen. Für Dokumente im Strict Mode wird die Größe basierend auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Element/body)-Elements berechnet. Im Quirks Mode ist es das [`<html>`](/de/docs/Web/HTML/Element/html)-Element. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, ordnet ihn dieser Breite neu an und passt die Größe so an, dass kein vertikales Scrollen benötigt wird. Es wird auf eine Größe von maximal **800x600 Pixeln** wachsen, wenn das auf den Bildschirm des Benutzers passt. (Vor Firefox 60 [waren es nur 680px](https://bugzil.la/1434177).) Wenn der Benutzer [den Button der Erweiterung ins Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder er in der Symbolleistenüberlauf angezeigt wird, erscheint das Popup im Panel des Menüs und erhält eine feste Breite.

Wenn Sie die `width` des Popups in CSS setzen, sollten Sie es im [`<body>`](/de/docs/Web/HTML/Element/body) und nicht in `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Popup-Gestaltung

Für Details dazu, wie Sie die Webseite Ihres Popups im Stil von Firefox gestalten können, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)-Beispiel, das eine Browseraktion mit einem Popup implementiert.
