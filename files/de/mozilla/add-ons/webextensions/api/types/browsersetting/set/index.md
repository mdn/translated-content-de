---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.set()`, um die Browsereinstellung auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen in der Lage sind, Einstellungen zu ändern:

- Einige Einstellungen sind gesperrt, sodass sie überhaupt nicht von Erweiterungen geändert werden können.
- Wenn mehrere Erweiterungen versuchen, die gleiche Einstellung zu ändern, wird den Erweiterungen eine Vorrangordnung basierend auf ihrem Installationsdatum zugewiesen. Jüngere Erweiterungen haben Vorrang vor älteren.

Das bedeutet, wenn Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. Allerdings wird die Änderung von X gespeichert und in einer Warteschlange gespeichert, geordnet nach der Vorrangstellung von X im Verhältnis zu anderen Erweiterungen, die versucht haben, die Einstellung zu ändern. Wenn die Einstellung später entsperrt wird, darf die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Andernfalls, wenn keine andere Erweiterung die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und wird dann gesagt, sie "kontrolliere" die Einstellung.
3. Andernfalls, wenn eine Erweiterung Y mit niedrigerem Vorrang die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und kontrolliert sie nun. Allerdings wird die Änderung von Y gespeichert und in einer nach Vorrang geordneten Warteschlange gespeichert. Wenn X anschließend ihren Wert löscht oder X deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung der Einstellung vornehmen.
4. Andernfalls, wenn eine Erweiterung Z mit höherem Vorrang die Einstellung bereits geändert hat, gelingt es X nicht, die Einstellung zu ändern, aber die Änderung wird in die Warteschlange gestellt. Wenn Z anschließend ihren Wert löscht oder Z deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung der Einstellung vornehmen.

Eine Erweiterung kann herausfinden, welches dieser Szenarien zutrifft, indem sie die Eigenschaft "`levelOfControl`" untersucht, die von einem Aufruf von [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die Methode `BrowserSetting.set()` gibt ein Promise zurück, das sich in ein Boolean auflöst: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich dazu führt, dass die Einstellung geändert wird (Szenarien 2 und 3 oben), ist das Boolean `true`, andernfalls ist es `false`.

## Syntax

```js-nolint
let setting = setting.set(
  details     // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das die folgende Eigenschaft enthalten muss:

    - `value`
      - : `any`. Der Wert, auf den Sie die Einstellung ändern möchten. Sein Typ hängt von der jeweiligen Einstellung ab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung geändert wurde, `false` andernfalls (zum Beispiel, weil die Erweiterung die Einstellung nicht kontrollierte).

## Browser-Kompatibilität

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

## Beispiel

Ändern der Einstellung `hyperlinkAuditingEnabled` (dies erfordert die Berechtigung "privacy"):

```js
function onSet(result) {
  if (result) {
    console.log("Value was updated");
  } else {
    console.log("Value was not updated");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
    value: false,
  });
  setting.then(onSet);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.
