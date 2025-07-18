---
title: BrowserSetting.onChange
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das `BrowserSetting.onChange`-Ereignis wird ausgelöst, wenn die Einstellung geändert wird.

In Firefox wird es nicht ausgelöst, wenn die Änderung über `about:config` vorgenommen wurde.

## Syntax

```js-nolint
BrowserSetting.onChange.addListener(listener)
BrowserSetting.onChange.removeListener(listener)
BrowserSetting.onChange.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:
    - `details`
      - : Ein `object`, das Details der aufgetretenen Änderung enthält. Seine Eigenschaften sind wie folgt:
        - `value`
          - : Der neue Wert der Einstellung. Der Typ dieser Eigenschaft wird durch die jeweilige Einstellung bestimmt.
        - `levelOfControl`
          - : `string`. Dies stellt dar, wie die Einstellung derzeit kontrolliert wird. Sie können es verwenden, um zu prüfen, ob Sie die Einstellung ändern können. Siehe [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details. Sein Wert kann einer der folgenden sein:<table class="fullwidth-table standard-table">
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
                  <td><code>controlled_by_this_extension"</code></td>
                  <td>Diese Erweiterung hat die Einstellung bereits geändert.</td>
                </tr>
              </tbody>
            </table>

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
