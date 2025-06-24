---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt ein oder mehrere Tabs zu einer Gruppe hinzu oder, wenn keine Gruppe angegeben ist, fügt die Tabs zu einer neuen Gruppe hinzu. Alle Tabs in einer Tab-Gruppe müssen nebeneinander liegen, und die Tabs werden bei Bedarf verschoben. Alle angepinnten Tabs werden vor der Gruppierung nicht mehr angepinnt.

Wenn ein Aufruf Tabs aus Tab-Gruppen entfernt und eine dieser Tab-Gruppen leer wird, werden die leeren Tab-Gruppen entfernt.

> [!NOTE]
> Die Methode `tabs.group()` ist nicht die einzige Möglichkeit, Tabs zu gruppieren. Ein Tab tritt auch dann einer Tab-Gruppe bei, wenn {{WebExtAPIRef("tabs.move")}} ihn zwischen andere Tabs verschiebt, die Teil einer Tab-Gruppe sind.

Für weitere Informationen zu Tab-Gruppen siehe {{WebExtAPIRef("tabGroups")}}.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameter

- `options`

  - : Ein Objekt, das Details über die Tab-Gruppierung enthält.

    - `createProperties` {{optional_inline}}

      - : `object`. Konfigurationsdetails für eine neue Gruppe. Kann nicht verwendet werden, wenn `groupId` angegeben ist.
        - `windowId` {{optional_inline}}
          - : `integer`. Das Fenster der neuen Gruppe. Standardmäßig das [aktuelle Fenster](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Gruppe, in die die Tabs hinzugefügt werden sollen. Wenn nicht angegeben, wird eine Gruppe erstellt.
    - `tabIds`
      - : `integer` oder `array` von `integer`. Die Tab-ID oder Liste von Tab-IDs, die zur Gruppe hinzugefügt werden sollen. Muss mindestens eine Tab-ID enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer ganzen Zahl erfüllt wird, die die `groupId` der Tab-Gruppe enthält, zu der die Tabs hinzugefügt wurden. Wenn die `groupId` nicht gefunden wird, eine der `tabIds` ungültig ist, die `windowId` ungültig ist oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Bei einem Validierungsfehler werden die Tabs nicht geändert.

## Beispiele

Erstellen Sie zwei Tabs und fügen Sie sie einer neuen Gruppe hinzu, dann erstellen Sie einen weiteren Tab und fügen ihn der Gruppe hinzu.

```js
// Create two tabs and put them in a new group.
const tab1 = await browser.tabs.create({});
const tab2 = await browser.tabs.create({});
const groupId = await browser.tabs.group({
  tabIds: [tab1.id, tab2.id],
});

// Create another tab and add it to the group.
const tab3 = await browser.tabs.create({});
await browser.tabs.group({
  tabIds: tab3.id,
  groupId,
});
```

Erstellen Sie einen Tab und stimmen Sie seine Gruppierung mit der des aktuellen Tabs ab.

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
