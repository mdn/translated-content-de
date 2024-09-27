---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Ein Popup ist ein Dialog, der mit einem [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einer [Adressleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verbunden ist. Diese Seite beschreibt allgemein Popups, ihre Spezifikation, das Debugging, das Anpassen der Größe, ihr Design und gibt Beispiele für deren Verwendung.

![Beispiel eines Seitenaktions-Popups mit drei Optionen: Kätzchen, Welpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer auf die Schaltfläche klickt, wird das Popup angezeigt. Wenn der Benutzer irgendwo außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmatisch durch Aufruf von [`window.close()`](/de/docs/Web/API/Window/close) aus einem Skript, das im Popup läuft, geschlossen werden. Es ist jedoch nicht möglich, das Popup programmatisch aus dem JavaScript der Erweiterung zu öffnen; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination definieren, die das Popup mithilfe der Abkürzungen `"_execute_browser_action"` und `"_execute_page_action"` in Manifest V2 und `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` in Manifest V3 öffnet. Sehen Sie sich die Dokumentation zu den speziellen Abkürzungen im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) an.

## Spezifikation eines Popups

Das Popup wird als HTML-Datei spezifiziert, die CSS- und JavaScript-Dateien enthalten kann, wie es auch bei einer normalen Webseite der Fall ist. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und entladen, wenn das Popup geschlossen wird.

Die HTML-Datei wird in die Erweiterung einbezogen und als Teil des [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels durch `"default_popup"` in der manifest.json spezifiziert:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Details dazu finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Debugging von Popups

Sie können das Markup und JavaScript eines Popups mit dem Add-on Debugger debuggen, aber Sie müssen die Popup-Autoverbergungsfunktion deaktivieren, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb von ihnen klicken. [Lesen Sie mehr über das Debugging von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Ändern der Größe von Popups

Popups passen ihre Größe automatisch an den Inhalt an. Der Algorithmus dafür kann sich von einem Browser zum anderen unterscheiden.

In Firefox wird die Größe berechnet, kurz bevor das Popup angezeigt wird, und höchstens 10 Mal pro Sekunde nach DOM-Änderungen. Für Dokumente im Strict-Modus wird die Größe basierend auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Element/body)-Elements berechnet. Im Quirks-Modus ist es das [`<html>`](/de/docs/Web/HTML/Element/html)-Element. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, ordnet es in dieser Breite neu an und passt die Größe so an, dass kein vertikales Scrollen erforderlich ist. Es wird auf eine Größe von maximal **800x600 Pixel** wachsen, sofern dies auf den Bildschirm des Benutzers passt. (Vor Firefox 60 [waren es nur 680px](https://bugzil.la/1434177).) Wenn der Benutzer [die Schaltfläche der Erweiterung in das Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder sie im Überlauf der Symbolleiste erscheint, wird das Popup im Panel des Menüs angezeigt und erhält eine feste Breite.

Wenn Sie die Popup-`Breite` in CSS einstellen, sollten Sie dies im [`<body>`](/de/docs/Web/HTML/Element/body) und nicht im `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Pop-up Design

Für Details, wie Sie die Webseite Ihres Popups gestalten können, um dem Stil von Firefox zu entsprechen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)-Beispiel, das eine Browser-Aktion mit einem Popup implementiert.
