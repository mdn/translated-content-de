---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Lesen und Ändern von Attributen sowie das Lauschen auf Klicks auf die Schaltfläche in der Browser-Symbolleiste, die mit dem [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel definiert ist.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können der Schaltfläche ein Popup zuordnen. Wie bei einer Webseite wird das Popup mithilfe von HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrund-Skripte, aber der globale Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt – und der Inhalt geladen –, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche hat außerdem ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}} API Elemente zu diesem Menü hinzufügen, indem Sie den `browser_action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `browserAction` API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um Klicks auf das Symbol zu lauschen.
- Die Eigenschaften des Symbols abrufen und festlegen – Symbol, Titel, Popup usw. Sie können diese global für alle Tabs oder für einen Tab festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array mit vier Ganzzahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Legt den Titel der Browser-Aktion fest. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Legt das Symbol der Browser-Aktion fest.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Setzt das HTML-Dokument, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Ruft das HTML-Dokument ab, das als Popup der Browser-Aktion festgelegt ist.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Setzt den Abzeichentext der Browser-Aktion. Das Abzeichen wird oben auf dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Ruft den Abzeichentext der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Legt die Hintergrundfarbe des Abzeichens fest.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Legt die Textfarbe des Abzeichens fest.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Ruft die benutzerspezifischen Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht geklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn auf ein Browser-Aktionssymbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
