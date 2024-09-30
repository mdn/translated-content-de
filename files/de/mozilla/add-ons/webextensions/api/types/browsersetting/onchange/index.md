---
title: BrowserSetting.onChange
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das `BrowserSetting.onChange` Ereignis wird ausgelöst, wenn die Einstellung geändert wird.

In Firefox wird es nicht ausgelöst, wenn die Änderung über `about:config` erfolgt ist.

## Syntax

```js-nolint
BrowserSetting.onChange.addListener(listener)
BrowserSetting.onChange.removeListener(listener)
BrowserSetting.onChange.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `details`

      - : Ein `object`, das Details über die aufgetretene Änderung enthält. Seine Eigenschaften sind wie folgt:

        - `value`
          - : Der neue Wert der Einstellung. Der Typ dieser Eigenschaft wird durch die spezielle Einstellung bestimmt.
        - `levelOfControl`
          - : `string`. Dies gibt an, wie die Einstellung derzeit gesteuert wird. Sie können es verwenden, um zu überprüfen, ob Sie die Einstellung ändern können. Siehe [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details. Sein Wert kann einer der folgenden sein:<table class="fullwidth-table standard-table">
              <tbody>
                <tr>
                  <td><code>"not_controllable"</code></td>
                  <td>Erweiterungen dürfen diese Einstellung nicht ändern.</td>
                </tr>
                <tr>
                  <td><code>"controlled_by_other_extensions"</code></td>
                  <td>
                    Eine andere Erweiterung, die nach dieser installiert wurde, hat diese
                    Einstellung geändert.
                  </td>
                </tr>
                <tr>
                  <td><code>"controllable_by_this_extension"</code></td>
                  <td>Diese Erweiterung darf die Einstellung ändern.</td>
                </tr>
                <tr>
                  <td><code>"controlled_by_this_extension"</code></td>
                  <td>Diese Erweiterung hat die Einstellung bereits geändert.</td>
                </tr>
              </tbody>
            </table>

## Browser-Kompatibilität

{{Compat}}

## Beispiele

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.

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
