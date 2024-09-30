---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.set()`, um die Browser-Einstellung auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen Einstellungen ändern dürfen:

- Einige Einstellungen sind gesperrt und können von Erweiterungen überhaupt nicht geändert werden.
- Wenn mehrere Erweiterungen versuchen, dieselbe Einstellung zu ändern, wird den Erweiterungen eine Vorrangordnung zugewiesen, basierend darauf, wann sie installiert wurden. Neuere Erweiterungen haben Vorrang vor älteren.

Das bedeutet, wenn Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. X's Änderung wird jedoch gespeichert und in einer Warteschlange gespeichert, die nach X's Vorrang relativ zu anderen Erweiterungen, die versucht haben, die Einstellung zu ändern, geordnet ist. Wenn die Einstellung später entriegelt wird, darf die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Andernfalls, wenn keine andere Erweiterung bereits die Einstellung geändert hat, ändert X die Einstellung erfolgreich und wird dann als "kontrollierend" für die Einstellung betrachtet.
3. Andernfalls, wenn eine Erweiterung Y mit niedrigerem Vorrang bereits die Einstellung geändert hat, ändert X die Einstellung erfolgreich und kontrolliert nun die Einstellung. Die Änderung von Y wird jedoch gespeichert und in einer Vorrang-Warteschlange gespeichert. Wenn X seinen Wert später löscht oder wenn X deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.
4. Andernfalls, wenn eine Erweiterung Z mit höherem Vorrang bereits die Einstellung geändert hat, dann gelingt es X nicht, die Einstellung zu ändern, aber seine Änderung wird in die Warteschlange gestellt. Wenn Z seinen Wert später löscht oder wenn Z deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.

Eine Erweiterung kann herausfinden, welches dieser Szenarien zutrifft, indem sie die "`levelOfControl`"-Eigenschaft überprüft, die von einem Aufruf von [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die Methode `BrowserSetting.set()` gibt ein Promise zurück, das auf einen Boolean aufgelöst wird: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich dazu führt, dass die Einstellung geändert wird (Szenarien 2 und 3 oben), ist der Boolean `true`: andernfalls ist er `false`.

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

Ändern Sie die Einstellung `hyperlinkAuditingEnabled` (dies erfordert die Berechtigung "privacy"):

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
> Diese API basiert auf Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
