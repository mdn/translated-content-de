---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.set()`, um die Browsereinstellung auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen Einstellungen ändern dürfen:

- Einige Einstellungen sind gesperrt, sodass sie von Erweiterungen überhaupt nicht geändert werden können.
- Wenn mehrere Erweiterungen versuchen, dieselbe Einstellung zu ändern, wird den Erweiterungen eine Prioritätsreihenfolge zugewiesen, basierend auf dem Zeitpunkt der Installation. Neuere Erweiterungen haben Vorrang vor älteren Erweiterungen.

Das bedeutet, dass, wenn die Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. X's Änderung wird jedoch gespeichert und in einer Warteschlange aufbewahrt, geordnet nach der Priorität von X im Vergleich zu anderen Erweiterungen, die versucht haben, die Einstellung zu ändern. Wenn die Einstellung später entsperrt wird, darf die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Andernfalls, wenn keine andere Erweiterung die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und es wird gesagt, dass sie die Einstellung "kontrolliert".
3. Andernfalls, wenn eine niedrigere Prioritätserweiterung Y die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und kontrolliert nun die Einstellung. Y's Änderung wird jedoch gespeichert und in einer Prioritäten-Warteschlange aufbewahrt. Wenn X anschließend seinen Wert löscht oder X deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.
4. Andernfalls, wenn eine höhere Prioritätserweiterung Z die Einstellung bereits geändert hat, gelingt es X nicht, die Einstellung zu ändern, aber seine Änderung wird in die Warteschlange gestellt. Wenn Z anschließend seinen Wert löscht oder Z deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung vornehmen.

Eine Erweiterung kann herausfinden, welches dieser Szenarien zutrifft, indem sie die "`levelOfControl`"-Eigenschaft untersucht, die von einem Aufruf von [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die Methode `BrowserSetting.set()` gibt ein Promise zurück, das zu einem boolean aufgelöst wird: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich zu einer Änderung der Einstellung führt (Szenarien 2 und 3 oben), ist der boolean `true`: andernfalls ist er `false`.

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
      - : `any`. Der Wert, den Sie für die Einstellung festlegen möchten. Sein Typ hängt von der jeweiligen Einstellung ab.

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
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.
