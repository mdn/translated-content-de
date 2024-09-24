---
title: Aktion
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und Ändern von Attributen und Abhören von Klicks auf die Browser-Toolbar-Schaltfläche, die mit dem [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel definiert ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar. Sie ersetzt die Manifest V2 APIs {{WebExtAPIRef("browserAction")}} und, in Chrome und Safari, {{WebExtAPIRef("pageAction")}}.

Eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Toolbar des Browsers.

Sie können der Schaltfläche ein Popup zuordnen. Wie eine Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup läuft, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie mit ihnen über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt geladen —, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche hat ebenfalls ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}} API Elemente zu diesem Menü hinzufügen, indem Sie den `action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `action`-API können Sie:

- {{WebExtAPIRef("action.onClicked")}} verwenden, um Klicks auf das Symbol abzuhören.
- Die Eigenschaften des Symbols erhalten und setzen — Icon, Titel, Popup, und so weiter. Sie können diese global über alle Tabs oder für einen Tab setzen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("action.ColorArray")}}
  - : Ein Array von vier ganzen Zahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixel-Daten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel, aus einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("action.setTitle()")}}
  - : Setzt den Titel der Browseraktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Ruft den Titel der Browseraktion ab.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Setzt das Icon der Browseraktion.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Setzt das HTML-Dokument, das als Popup geöffnet wird, wenn der Benutzer auf das Icon der Browseraktion klickt.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Ruft das als Popup gesetzte HTML-Dokument der Browseraktion ab.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Öffnet das Popup der Browseraktion.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Setzt den Abzeichentext der Browseraktion. Das Abzeichen wird über dem Icon angezeigt.
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : Ruft den Abzeichentext der Browseraktion ab.
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Abzeichens.
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Abzeichens ab.
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Abzeichens.
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Abzeichens ab.
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : Ruft die vom Benutzer spezifizierten Einstellungen für die Browseraktion ab.
- {{WebExtAPIRef("action.enable()")}}
  - : Aktiviert die Browseraktion für einen Tab. Standardmäßig sind Browseraktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("action.disable()")}}
  - : Deaktiviert die Browseraktion für einen Tab, was bedeutet, dass sie nicht geklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("action.isEnabled()")}}
  - : Überprüft, ob die Browseraktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("action.onClicked")}}
  - : Wird ausgelöst, wenn ein Browseraktion-Symbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browseraktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action)-API von Chromium. Diese Dokumentation ist von [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) im Chromium-Code abgeleitet.
