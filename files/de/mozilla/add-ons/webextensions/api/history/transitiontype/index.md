---
title: history.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/history/TransitionType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dies beschreibt, wie der Browser zu einer bestimmten Seite navigiert hat. Zum Beispiel bedeutet "link", dass der Browser zur Seite navigierte, weil der Benutzer auf einen Link geklickt hat.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "link"
  - : Der Benutzer hat auf einen Link auf einer anderen Seite geklickt.
- "typed"
  - : Der Benutzer hat die URL in die Adressleiste eingegeben. Dies wird auch verwendet, wenn der Benutzer anfängt, in die Adressleiste zu tippen und dann eine URL aus den angebotenen Vorschlägen auswählt. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer hat auf ein Lesezeichen oder einen Eintrag im Browserverlauf geklickt.
- "auto_subframe"
  - : Beliebige verschachtelte iframes, die automatisch von ihrem übergeordneten Element geladen werden.
- "manual_subframe"
  - : Beliebige verschachtelte iframes, die als explizite Benutzeraktion geladen werden. Beim Laden eines solchen iframes wird ein Eintrag in der Vorwärts-/Rückwärtsnavigation-Liste erstellt.
- "generated"
  - : Der Benutzer hat angefangen, in die Adressleiste zu tippen und dann auf einen vorgeschlagenen Eintrag geklickt, der keine URL enthielt.
- "auto_toplevel"
  - : Die Seite wurde an die Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer hat ein Formular abgesendet. Beachten Sie, dass in einigen Situationen, wie wenn ein Formular mittels Skript seine Inhalte absendet, das Absenden eines Formulars nicht zu diesem Transition-Typ führt.
- "reload"
  - : Der Benutzer hat die Seite neu geladen, entweder mit der Neu-laden-Taste oder durch Drücken der Eingabetaste in der Adressleiste. Dies wird auch für die Sitzungswiederherstellung und das erneute Öffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde mithilfe einer vom Benutzer konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) erzeugt.
- "keyword_generated"
  - : Entspricht einem Besuch, der für ein Schlüsselwort generiert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#type-TransitionType) API von Chromium. Diese Dokumentation leitet sich von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code ab.

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
