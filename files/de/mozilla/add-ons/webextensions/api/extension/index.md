---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hilfsmittel in Bezug auf Ihre Erweiterung. Erhalten Sie URLs zu Ressourcen, die mit Ihrer Erweiterung geliefert werden. Erhalten Sie das [`Window`](/de/docs/Web/API/Window)-Objekt für die Seiten Ihrer Erweiterung. Holen Sie sich die Werte für verschiedene Einstellungen.

> **Note:** **Die Messaging-APIs in diesem Modul sind veraltet** zugunsten der entsprechenden APIs im [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)-Modul.

## Typen

- {{WebExtAPIRef("extension.ViewType")}}
  - : Der Typ der Erweiterungsansicht.

## Eigenschaften

- {{WebExtAPIRef("extension.lastError")}} {{deprecated_inline}}
  - : Wird während der Lebensdauer eines Rückrufs gesetzt, wenn eine asynchrone Erweiterungs-API zu einem Fehler geführt hat. Wenn kein Fehler aufgetreten ist, ist `lastError` {{jsxref("undefined")}}.
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : `True` für Inhalts-Skripte, die in Inkognito-Tabs ausgeführt werden, und für Erweiterungsseiten, die in einem Inkognito-Prozess ausgeführt werden. (Letzteres gilt nur für Erweiterungen mit dem '`split`' `incognito_behavior`.)

## Funktionen

- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : Gibt das [`Window`](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite zurück, die innerhalb der aktuellen Erweiterung ausgeführt wird. Gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück, wenn die Erweiterung keine Hintergrundseite hat.
- {{WebExtAPIRef("extension.getExtensionTabs()")}} {{deprecated_inline}}
  - : Gibt ein Array der JavaScript [Window](/de/docs/Web/API/Window)-Objekte für jede der Tabs zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden.
- {{WebExtAPIRef("extension.getURL()")}} {{deprecated_inline}}
  - : Wandelt einen relativen Pfad innerhalb eines Installationsverzeichnisses der Erweiterung in eine vollqualifizierte URL um.
- {{WebExtAPIRef("extension.getViews()")}}
  - : Gibt ein Array der [`Window`](/de/docs/Web/API/Window)-Objekte für jede der Seiten zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden.
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : Ruft den Status des Zugriffs der Erweiterung auf den Inkognito-Modus ab (wie durch das benutzerkontrollierte '_Allowed in Incognito_'-Kontrollkästchen bestimmt).
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : Ruft den Status des Zugriffs der Erweiterung auf das `file://`-Schema ab (wie durch das benutzerkontrollierte '_Allow access to File URLs_'-Kontrollkästchen bestimmt).
- {{WebExtAPIRef("extension.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anforderung an andere Listener innerhalb der Erweiterung.
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : Legt den Wert des `ap`-CGI-Parameters fest, der in der Update-URL der Erweiterung verwendet wird. Dieser Wert wird für Erweiterungen ignoriert, die im Store des Browseranbieters gehostet werden.

## Ereignisse

- {{WebExtAPIRef("extension.onRequest")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn eine Anforderung entweder von einem Erweiterungsprozess oder einem Inhalts-Skript gesendet wird.
- {{WebExtAPIRef("extension.onRequestExternal")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn eine Anforderung von einer anderen Erweiterung gesendet wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension) von Chromium. Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
