---
title: Event.removeRules()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/removeRules
l10n:
  sourceCommit: 8bcd10489059539a341f82985eac9f1115e87483
---

{{AddonSidebar}}

Entfernt Regeln, die bei einem deklarativen Ereignis mithilfe von {{WebExtAPIRef("events.Event.addRules()")}} registriert wurden.

## Syntax

```js-nolint
events.Event.removeRules(ruleIdentifiers, callback)
```

### Parameter

- `ruleIdentifiers` {{optional_inline}}

  - : `array` von `string`. Identifikatoren für die zu entfernenden Regeln. Wenn kein Array übergeben wird, werden alle Regeln entfernt.

- `callback` {{optional_inline}}

  - : `function`. Wird aufgerufen, ohne Argumente zu übergeben, wenn die Regeln entfernt wurden.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-removeRules) API von Chromium. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

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
