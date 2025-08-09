---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: 0bbc83440e89ae434a8d798453511e82de79a356
---

Lesen und Ändern von Attributen und Anhören von Klicks auf die im [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key definierte Schaltfläche der Browser-Symbolleiste.

Eine [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können ein Popup mit der Schaltfläche verknüpfen. Wie eine Webseite wird das Popup unter Verwendung von HTML, CSS und JavaScript angegeben. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt wird geladen —, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche verfügt auch über ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}} API und dem `browser_action` {{WebExtAPIRef("menus.ContextType")}} Elemente hinzufügen.

Mit der `browserAction` API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um auf Klicks auf das Symbol zu hören.
- Die Eigenschaften des Symbols – Symbol, Titel, Popup usw. – abrufen und festlegen. Sie können diese global für alle Tabs oder für einen Tab festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich von 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Legt den Titel der Browseraktion fest. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Ruft den Titel der Browseraktion ab.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Legt das Symbol der Browseraktion fest.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Legt das HTML-Dokument fest, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browseraktion klickt.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Ruft das als Popup festgelegte HTML-Dokument ab.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browseraktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Legt den Text des Browseraktionsabzeichens fest. Das Abzeichen wird über dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Ruft den Text des Browseraktionsabzeichens ab.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Legt die Hintergrundfarbe des Abzeichens fest.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Legt die Textfarbe des Abzeichens fest.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Ruft die benutzerspezifischen Einstellungen für die Browseraktion ab.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviere die Browseraktion für einen Tab. Standardmäßig sind Browseraktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browseraktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Überprüft, ob die Browseraktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Browseraktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browseraktion ein Popup hat.
- {{WebExtAPIRef("browserAction.onUserSettingsChanged")}}
  - : Wird ausgelöst, wenn eine Änderung in den benutzerspezifischen Einstellungen erfolgt, die eine Erweiterung der Browseraktion beeinflusst.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) API. Diese Dokumentation stammt von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
