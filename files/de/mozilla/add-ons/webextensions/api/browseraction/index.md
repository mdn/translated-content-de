---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Lesen und Ändern von Attributen sowie Reagieren auf Klicks auf die Browser-Symbolleistenschaltfläche, die mit dem [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel definiert ist.

Eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Browser-Symbolleiste.

Sie können ein Popup mit der Schaltfläche verknüpfen. Wie eine Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie mit ihnen über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt geladen — wenn der Benutzer das Symbol anklickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer das Symbol anklickt.

Die Schaltfläche hat auch ein Kontextmenü, zu dem Sie mit der {{WebExtAPIRef("menus")}} API Elemente hinzufügen können, indem Sie den `browser_action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `browserAction` API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um auf Klicks auf das Symbol zu reagieren.
- Die Eigenschaften des Symbols global über alle Tabs oder für einen Tab festlegen und abrufen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Setzt das HTML-Dokument, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Ruft das HTML-Dokument ab, das als Popup der Browser-Aktion festgelegt ist.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Setzt den Text des Badges der Browser-Aktion. Das Badge wird über dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Ruft den Text des Badges der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Badges.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Badges ab.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Badges.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Badges ab.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Holt die benutzerspezifizierten Einstellungen für die Browser-Aktion.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, sodass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn auf ein Browseraktionssymbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) API. Diese Dokumentation ist von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
