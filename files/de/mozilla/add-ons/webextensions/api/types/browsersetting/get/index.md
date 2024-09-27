---
title: get()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode `BrowserSetting.get()` erhält den aktuellen Wert der Browser-Einstellung und eine Aufzählung, die angibt, wie der Wert der Einstellung derzeit gesteuert wird.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften hat:

- `value`
  - : Der Wert der Einstellung. Der Typ dieser Eigenschaft wird durch die jeweilige Einstellung bestimmt.
- `levelOfControl`
  - : `string`. Dies stellt dar, wie die Einstellung derzeit gesteuert wird. Sie können es verwenden, um zu überprüfen, ob Sie die Einstellung ändern können. Einzelheiten finden Sie unter [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set). Sein Wert kann einer der folgenden sein:<table class="fullwidth-table standard-table">
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

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

## Beispiel

Protokollieren Sie den Wert und das Kontrollniveau der Eigenschaft `networkPredictionEnabled` des Objekts {{WebExtAPIRef("privacy.network")}}, für private Browsing-Fenster. Beachten Sie, dass dazu die "privacy" Browser-Berechtigung erforderlich ist.

```js
let getting = browser.privacy.network.networkPredictionEnabled.get({});

getting.then((got) => {
  console.log(`Value: ${got.value}`);
  console.log(`Control: ${got.levelOfControl}`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.
