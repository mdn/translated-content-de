---
title: get()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Methode `BrowserSetting.get()` ruft den aktuellen Wert der Browsereinstellung und eine Enumeration ab, die angibt, wie der Wert der Einstellung momentan gesteuert wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = setting.get(
  details     // object
)
```

### Parameter

- `details`
  - : Ein leeres Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `value`
  - : Der Wert der Einstellung. Der Typ dieser Eigenschaft wird von der jeweiligen Einstellung bestimmt.
- `levelOfControl`
  - : `string`. Dies stellt dar, wie die Einstellung momentan gesteuert wird. Sie können es verwenden, um zu überprüfen, ob Sie die Einstellung ändern können. Siehe [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details. Sein Wert kann einer der folgenden sein:<table class="fullwidth-table standard-table">
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

## Beispiel

Protokollieren Sie den Wert und das Steuerungsniveau der `networkPredictionEnabled`-Eigenschaft des {{WebExtAPIRef("privacy.network")}}-Objekts für Fenster mit privatem Browsen. Beachten Sie, dass hierfür die "privacy"-Berechtigung des Browsers erforderlich ist.

```js
let getting = browser.privacy.network.networkPredictionEnabled.get({});

getting.then((got) => {
  console.log(`Value: ${got.value}`);
  console.log(`Control: ${got.levelOfControl}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

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
