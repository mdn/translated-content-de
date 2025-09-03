---
title: get()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get
l10n:
  sourceCommit: 51aed03147472b3883200e4538ff0beec8ff948f
---

Die Methode `BrowserSetting.get()` erhält den aktuellen Wert der Browsereinstellung und eine Enumeration, die angibt, wie der Wert der Einstellung derzeit gesteuert wird.

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
  - : Der Wert der Einstellung. Der Typ dieser Eigenschaft wird durch die jeweilige Einstellung bestimmt.
- `levelOfControl`
  - : `string`. Dies gibt an, wie die Einstellung derzeit gesteuert wird. Sie können es verwenden, um zu prüfen, ob Sie die Einstellung ändern können. Details hierzu siehe [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set). Der Wert kann einer der folgenden sein:<table class="fullwidth-table standard-table">
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

Protokollieren Sie den Wert und das Kontrollniveau der `networkPredictionEnabled`-Eigenschaft des {{WebExtAPIRef("privacy.network")}} Objekts für private Browserfenster. Beachten Sie, dass hierfür die "privacy"-Berechtigung erforderlich ist.

```js
let getting = browser.privacy.network.networkPredictionEnabled.get({});

getting.then((got) => {
  console.log(`Value: ${got.value}`);
  console.log(`Control: ${got.levelOfControl}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
