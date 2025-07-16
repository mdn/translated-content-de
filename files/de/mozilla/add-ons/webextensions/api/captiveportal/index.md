---
title: captivePortal
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermitteln Sie den Captive-Portal-Zustand der Verbindung des Benutzers. Ein Captive Portal ist eine Webseite, die angezeigt wird, wenn ein Benutzer erstmals eine Verbindung zu einem Wi-Fi-Netzwerk herstellt. Der Benutzer stellt Informationen bereit oder führt eine Aktion auf der Captive-Portal-Webseite durch, um einen umfassenderen Zugriff auf Netzwerkressourcen zu erhalten, wie zum Beispiel das Akzeptieren von Bedingungen oder das Tätigen einer Zahlung.

Um diese API zu verwenden, benötigen Sie die "captivePortal"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Eigenschaften

- {{WebExtAPIRef("captivePortal.canonicalURL")}}
  - : Gibt die kanonische URL der Captive-Portal-Erkennungsseite zurück. Nur lesbar.

## Funktionen

- {{WebExtAPIRef("captivePortal.getLastChecked()")}}
  - : Gibt die Zeit in Millisekunden zurück, seit die letzte Anforderung abgeschlossen wurde.
- {{WebExtAPIRef("captivePortal.getState()")}}
  - : Gibt den Portalzustand als eines von `unknown`, `not_captive`, `unlocked_portal` oder `locked_portal` zurück.

## Ereignisse

- {{WebExtAPIRef("captivePortal.onConnectivityAvailable")}}
  - : Wird ausgelöst, wenn der Captive-Portal-Dienst feststellt, dass der Benutzer eine Verbindung zum Internet herstellen kann.
- {{WebExtAPIRef("captivePortal.onStateChanged")}}
  - : Wird ausgelöst, wenn sich der Captive-Portal-Zustand ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

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
