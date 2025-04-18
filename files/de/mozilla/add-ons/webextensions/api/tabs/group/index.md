---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
l10n:
  sourceCommit: da342187abedb56612c08b166eb5594552b670e4
---

{{AddonSidebar}}

Fügt eine oder mehrere Tabs zu einer Gruppe hinzu oder fügt die Tabs zu einer neuen Gruppe hinzu, wenn keine Gruppe angegeben ist. Alle Tabs in einer Tab-Gruppe müssen nebeneinander liegen, und Tabs werden bei Bedarf verschoben. Alle angehefteten Tabs werden vor dem Gruppieren gelöst.

Wenn ein Aufruf Tabs aus Tab-Gruppen entfernt und eine dieser Tab-Gruppen leer wird, werden die leeren Tab-Gruppen entfernt.

> [!NOTE]
> Die Methode `tabs.group()` ist nicht der einzige Weg, um Tabs zu gruppieren. Ein Tab tritt auch einer Tab-Gruppe bei, wenn {{WebExtAPIRef("tabs.move")}} es zwischen Tabs platziert, die Teil einer Tab-Gruppe sind.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameter

- `options`

  - : Ein Objekt, das Details über das Tab-Gruppieren enthält.

    - `createProperties` {{optional_inline}}

      - : `object`. Konfigurationsdetails für eine neue Gruppe. Kann nicht verwendet werden, wenn `groupId` angegeben ist.

        - `windowId` {{optional_inline}}
          - : `integer`. Das Fenster der neuen Gruppe. Standardmäßig das [aktuelle Fenster](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Gruppe, zu der die Tabs hinzugefügt werden sollen. Wenn nicht angegeben, wird eine neue Gruppe erstellt.
    - `tabIds`
      - : `integer` oder `array` von `integer`. Die Tab-ID oder Liste von Tab-IDs, die zur Gruppe hinzugefügt werden sollen. Muss mindestens eine Tab-ID enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer erfüllt wird, der die `groupId` der Tab-Gruppe enthält, zu der die Tabs hinzugefügt wurden. Wenn die `groupId` nicht gefunden wird, eine der `tabIds` ungültig ist, die `windowId` ungültig ist oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Wenn ein Validierungsfehler auftritt, werden die Tabs nicht geändert.

## Beispiele

Erstellen Sie zwei Tabs und fügen Sie sie in eine neue Gruppe ein, dann erstellen Sie ein weiteres Tab und fügen es der Gruppe hinzu.

```js
//Create two tabs and put them in a new group.
const tab1 = await browser.tabs.create({});
const tab2 = await browser.tabs.create({});
const groupId = await browser.tabs.group({
  tabIds: [tab1.id, tab2.id],
});

//Create another tab and add it to the group.
const tab3 = await browser.tabs.create({});
await browser.tabs.group({
  tabIds: tab3.id,
  groupId: groupId,
});
```

Erstellen Sie ein Tab und passen Sie seine Gruppierung an die des aktuellen Tabs an.

```js
let [oldTab] = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

let newTab = await browser.tabs.create({
  url: "https://example.com/",
  index: oldTab.index + 1,
});
// Feature detection: tab grouping is a relatively new feature.
// All tabs are ungrouped if the API does not exist.
if (browser.tabs.group) {
  if (oldTab.groupId !== -1) {
    // oldTab is in a group, add newTab to the same group
    await browser.tabs.group({ groupId: oldTab.groupId, tabIds: [newTab.id] });
  } else {
    // oldTab isn't in a group
    // Although a new tab positioned next to an ungrouped tab is
    // already ungrouped, we call ungroup() in case this example is
    // adopted for use with tabs that aren't adjacent. When oldTab
    // is not in a tab group, the only way to ensure that newTab isn't
    // in a tab group is by using ungroup().
    await browser.tabs.ungroup(newTab.id);
  }
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
