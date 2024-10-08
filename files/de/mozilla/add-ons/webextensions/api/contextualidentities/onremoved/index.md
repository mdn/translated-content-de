---
title: contextualIdentities.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine neue kontextuelle Identität entfernt wird. Kontextuelle Identitäten können von Erweiterungen mithilfe der `contextualIdentities`-API oder direkt vom Benutzer über die Benutzeroberfläche des Browsers entfernt werden.

## Syntax

```js-nolint
browser.contextualIdentities.onRemoved.addListener(listener)
browser.contextualIdentities.onRemoved.removeListener(listener)
browser.contextualIdentities.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stellt das Zuhören für dieses Ereignis ein. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn dieser zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `changeInfo`
      - : `object`. Ein Objekt, das eine einzelne Eigenschaft `contextualIdentity` enthält, welche ein {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}-Objekt ist, das die entfernte Identität darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleRemoved(changeInfo) {
  console.log(`Removed: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

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
