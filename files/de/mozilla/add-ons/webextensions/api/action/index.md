---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: 0bbc83440e89ae434a8d798453511e82de79a356
---

Lesen und Ändern von Attributen sowie das Überwachen von Klicks auf die Browser-Symbolleiste-Taste, die mit dem [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssel definiert wird.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar. Sie ersetzt die Manifest V2 APIs {{WebExtAPIRef("browserAction")}} und in Chrome und Safari, {{WebExtAPIRef("pageAction")}}.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können der Schaltfläche ein Popup zuordnen. Wie eine Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup läuft, hat Zugriff auf die gleichen WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie mit ihnen über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt - und der Inhalt geladen -, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche hat auch ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}} API Elemente hinzufügen, indem Sie den `action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `action` API können Sie:

- {{WebExtAPIRef("action.onClicked")}} verwenden, um auf Klicks auf das Symbol zu hören.
- die Eigenschaften des Symbols — Icon, Titel, Popup usw. — abrufen und festlegen. Diese können global über alle Tabs oder für einen Tab durch Übergeben der Tab-ID als zusätzliches Argument gesetzt werden.

## Typen

- {{WebExtAPIRef("action.ColorArray")}}
  - : Ein Array aus vier ganzen Zahlen im Bereich von 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixel-Daten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel aus einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("action.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Setzt das Icon der Browser-Aktion.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Legt das HTML-Dokument fest, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Ruft das HTML-Dokument ab, das als Popup der Browser-Aktion festgelegt wurde.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Setzt den Text des Badges der Browser-Aktion. Das Badge wird über dem Symbol angezeigt.
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : Ruft den Text des Badges der Browser-Aktion ab.
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Badges.
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Badges ab.
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Badges.
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Badges ab.
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : Ruft die vom Benutzer angegebenen Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("action.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("action.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("action.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("action.onClicked")}}
  - : Wird ausgelöst, wenn auf ein Browser-Aktionssymbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.
- {{WebExtAPIRef("action.onUserSettingsChanged")}}
  - : Wird ausgelöst, wenn eine Änderung in den benutzerdefinierten Einstellungen auftritt, die die Aktion einer Erweiterung beeinflussen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action) API von Chromium. Diese Dokumentation ist abgeleitet von [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) im Chromium-Code.
