---
title: BrowserSetting.onChange
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `details`

      - : Ein `object`, das Details zu der aufgetretenen Änderung enthält. Seine Eigenschaften sind wie folgt:

        - `value`
          - : Der neue Wert der Einstellung. Der Typ dieser Eigenschaft wird durch die jeweilige Einstellung bestimmt.
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
                  <td><code>controlled_by_this_extension"</code></td>
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
