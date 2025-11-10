---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Popup ist ein Dialogfenster, das entweder mit einem [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verknüpft ist. Diese Seite beschreibt Popups im Allgemeinen, einschließlich ihrer Spezifikation, des Debuggings, der Größenanpassung und Gestaltung sowie Anwendungsbeispiele.

![Beispiel für ein Seitenaktions-Popup mit drei Optionen: Kätzchen, Welpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer auf den Button klickt, wird das Popup angezeigt. Wenn der Benutzer irgendwo außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmatisch geschlossen werden, indem `window.close()` von einem im Popup laufenden Skript aufgerufen wird. Es ist jedoch nicht möglich, das Popup programmatisch von dem JavaScript einer Erweiterung zu öffnen; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination festlegen, die das Popup mithilfe der `"_execute_browser_action"` und `"_execute_page_action"` Kurzbefehle in Manifest V2 und `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` Kurzbefehle in Manifest V3 öffnet. Siehe die Dokumentation für die speziellen Kurzbefehle im manifest.json Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Spezifikation eines Popups

Das Popup wird als HTML-Datei angegeben, die CSS- und JavaScript-Dateien enthalten kann, wie es auch bei einer normalen Webseite der Fall ist. Anders als bei einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und jedes Mal entladen, wenn das Popup geschlossen wird.

Die HTML-Datei ist in die Erweiterung eingebunden und wird als Teil des [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels durch `"default_popup"` in der manifest.json angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups haben eine Content-Security-Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Debuggen von Popups

Sie können das Markup und JavaScript eines Popups mithilfe des Add-on-Debuggers debuggen. Dazu müssen Sie jedoch die Funktion "Popup-Autoverbergen deaktivieren" aktivieren, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb davon klicken. [Lesen Sie mehr über das Debuggen von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Größenanpassung von Popups

Popups passen ihre Größe automatisch an den Inhalt an. Der Algorithmus dafür kann je nach Browser unterschiedlich sein.

In Firefox wird die Größe unmittelbar bevor das Popup angezeigt wird berechnet und danach höchstens 10 Mal pro Sekunde nach DOM-Veränderungen. Bei Dokumenten im Strict-Modus wird die Größe basierend auf der Layout-Größe des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elements berechnet. Im Quirks-Modus ist es das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, lässt es in dieser Breite umfließen und passt dann die Größe an, sodass kein vertikales Scrollen erforderlich ist. Es vergrößert sich maximal bis zu einer Größe von **800 x 600 Pixeln**, wenn das auf den Bildschirm des Benutzers passt. (Vor Firefox 60 waren es nur [680px](https://bugzil.la/1434177).) Wenn der Benutzer [den Button der Erweiterung ins Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder dieser im Überlauf der Toolbar erscheint, dann wird das Popup im Menüpanel angezeigt und erhält eine feste Breite.

Beim Festlegen der `width` des Popups in CSS sollten Sie dies im [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) und nicht im `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Pop-up-Design

Einzelheiten dazu, wie Sie die Webseite Ihres Popups gestalten, um dem Stil von Firefox zu entsprechen, finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)-Beispiel, das eine Browser-Aktion mit einem Popup implementiert.
