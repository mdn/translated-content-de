---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ursache der Navigation: Zum Beispiel, der Benutzer hat auf einen Link geklickt, eine Adresse eingetippt oder ein Lesezeichen ausgewählt.

Beachten Sie, dass viele Werte hier derzeit in Firefox nicht unterstützt werden: Details finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- "link"
  - : Der Benutzer hat auf einen Link in einer anderen Seite geklickt.
- "typed"
  - : Der Benutzer hat die URL in die Adressleiste eingetippt. Dies wird auch verwendet, wenn der Benutzer anfing, in die Adressleiste zu tippen und dann eine URL aus den angebotenen Vorschlägen auswählte. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer hat auf ein Lesezeichen oder einen Eintrag im Browserverlauf geklickt.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrem übergeordneten Element geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die als explizite Benutzeraktion geladen werden. Das Laden eines solchen iframes erstellt einen Eintrag in der Liste der Vor-/Zurück-Navigation.
- "generated"
  - : Der Benutzer begann, in die Adressleiste zu tippen, und klickte dann auf einen vorgeschlagenen Eintrag, der keine URL enthielt.
- "start_page"
  - : Die Seite wurde an die Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer hat ein Formular abgeschickt. Beachten Sie, dass in einigen Situationen, z. B. wenn ein Formular einen Skript verwendet, um seine Inhalte abzuschicken, das Abschicken eines Formulars nicht zu diesem Übergangstyp führt.
- "reload"
  - : Der Benutzer hat die Seite neu geladen, indem er die Neuladetaste verwendet oder die Eingabetaste in der Adressleiste gedrückt hat. Dies wird auch für die Wiederherstellung von Sitzungen und das erneute Öffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde mit einer vom Benutzer konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) generiert.
- "keyword_generated"
  - : Entspricht einem durch ein Schlüsselwort generierten Besuch.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionType). Diese Dokumentation ist aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.

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
