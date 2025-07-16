---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.set()`, um die Browsereinstellung auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen die Einstellungen ändern dürfen:

- Einige Einstellungen sind gesperrt, sodass sie von Erweiterungen überhaupt nicht geändert werden können.
- Wenn mehrere Erweiterungen versuchen, dieselbe Einstellung zu ändern, erhalten die Erweiterungen eine Rangfolge basierend auf dem Installationsdatum. Neuere Erweiterungen haben Vorrang vor älteren Erweiterungen.

Das bedeutet, wenn Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. X's Änderung wird jedoch gespeichert und in einer Warteschlange abgelegt, sortiert nach der Rangfolge von X im Vergleich zu anderen Erweiterungen, die versucht haben, die Einstellung zu ändern. Wenn die Einstellung später entsperrt wird, kann die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Ansonsten, wenn keine andere Erweiterung die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und dann heißt es, dass sie die Einstellung "kontrolliert".
3. Ansonsten, wenn eine niedriger priorisierte Erweiterung Y die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern und kontrolliert nun die Einstellung. Jedoch wird Y's Änderung gespeichert und in einer Rangfolge-Warteschlange abgelegt. Falls X anschließend seinen Wert löscht, deaktiviert oder deinstalliert wird, kann die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.
4. Ansonsten, wenn eine höher priorisierte Erweiterung Z die Einstellung bereits geändert hat, gelingt es X nicht, die Einstellung zu ändern, aber seine Änderung wird in die Warteschlange gestellt. Falls Z anschließend seinen Wert löscht, deaktiviert oder deinstalliert wird, kann die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.

Eine Erweiterung kann feststellen, welches dieser Szenarien zutrifft, indem sie die `levelOfControl`-Eigenschaft untersucht, die von einem Aufruf an [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die Methode `BrowserSetting.set()` gibt ein Promise zurück, das zu einem Boolean aufgelöst wird: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich dazu führt, dass die Einstellung geändert wird (Szenarien 2 und 3 oben), ist der Boolean `true`; andernfalls ist er `false`.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung geändert wurde, andernfalls `false` (zum Beispiel, weil die Erweiterung die Einstellung nicht kontrollierte).

## Beispiel

Ändern Sie die Einstellung `hyperlinkAuditingEnabled` (dies erfordert die "privacy"-Berechtigung):

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

## Browser-Kompatibilität

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
