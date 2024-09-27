---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt. Nur für Erweiterungen verfügbar, die die Berechtigung `"declarativeNetRequestFeedback"` haben, da dies nur für Debugging-Zwecke vorgesehen ist. Siehe [Testen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details, wie das Testen in jedem Browser aktiviert wird.

## Syntax

```js-nolint
browser.declarativeNetRequest.onRuleMatchedDebug.addListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.removeListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Hören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `request`

      - : Ein Objekt, das Informationen über die Anfrage enthält, die mit der Regel übereinstimmt.
        - `documentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das Dokument des Frames, falls diese Anfrage für einen Frame erfolgt.
        - `documentLifecycle` {{optional_inline}}
          - : Ein `string`. Der Lebenszyklus des Dokuments des Frames, falls diese Anfrage für einen Frame erfolgt. Mögliche Werte sind: `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"`.
        - `frameId`
          - : Eine `number`. Der Wert `0` zeigt an, dass die Anfrage im Hauptframe erfolgt. Ein positiver Wert gibt die ID eines Unterrahmens an, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (Typ ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind innerhalb eines Tabs eindeutig.
        - `frameType` {{optional_inline}}
          - : Ein `string`. Der Typ des Rahmens, falls diese Anfrage für einen Rahmen erfolgt. Mögliche Werte sind: `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : Ein `string`. Der Ursprung, von dem die Anfrage initiiert wurde. Dies ändert sich nicht durch Umleitungen. Die Zeichenfolge 'null' wird verwendet, wenn dies ein nicht sichtbarer Ursprung ist.
        - `method`
          - : Ein `string`. Eine standardmäßige HTTP-Methode.
        - `parentDocumentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das übergeordnete Dokument des Frames, falls diese Anfrage für einen Frame mit übergeordnetem Dokument erfolgt.
        - `parentFrameId`
          - : Eine `number`. Die ID des Rahmens, der den Rahmen umschließt, der die Anfrage gesendet hat. Wird auf `-1` gesetzt, wenn es keinen übergeordneten Rahmen gibt.
        - `requestId`
          - : Ein `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig.
        - `tabId`
          - : Eine `number`. Die ID des Tabs, in dem die Anfrage stattfindet. Wird auf `-1` gesetzt, wenn die Anfrage nicht zu einem Tab gehört.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. Der Ressourcentyp der Anfrage.
        - `url`
          - : Ein `string`. Die URL der Anfrage.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details einer übereinstimmenden Regel.

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
