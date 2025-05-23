---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Fügt eine oder mehrere Registerkarten zu einer Gruppe hinzu oder, falls keine Gruppe angegeben ist, fügt die Registerkarten einer neuen Gruppe hinzu. Alle Registerkarten in einer Gruppe müssen benachbart sein, und wenn nötig, werden Registerkarten verschoben. Alle angehefteten Registerkarten werden vor dem Gruppieren gelöst.

Wenn ein Aufruf Registerkarten aus Gruppen entfernt und eine dieser Gruppen dadurch leer wird, werden die leeren Registerkartengruppen entfernt.

> [!NOTE]
> Die Methode `tabs.group()` ist nicht der einzige Weg, um Registerkarten zu gruppieren. Eine Registerkarte tritt auch einer Gruppe bei, wenn {{WebExtAPIRef("tabs.move")}} sie zwischen Registerkarten platziert, die Teil einer Gruppe sind.

Für weitere Informationen zu Registerkartengruppen siehe {{WebExtAPIRef("tabGroups")}}.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameter

- `options`

  - : Ein Objekt, das Details zur Registerkartengruppierung enthält.

    - `createProperties` {{optional_inline}}

      - : `object`. Konfigurationsdetails für eine neue Gruppe. Kann nicht verwendet werden, wenn `groupId` angegeben ist.

        - `windowId` {{optional_inline}}
          - : `integer`. Das Fenster der neuen Gruppe. Standardmäßig das [aktuelle Fenster](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Gruppe, zu der die Registerkarten hinzugefügt werden sollen. Wenn nicht angegeben, wird eine Gruppe erstellt.
    - `tabIds`
      - : `integer` oder `array` von `integer`. Die Registerkarten-ID oder Liste der Registerkarten-IDs, die der Gruppe hinzugefügt werden sollen. Muss mindestens eine Registerkarten-ID enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Ganzzahl erfüllt wird, die die `groupId` der Gruppe enthält, zu der die Registerkarten hinzugefügt wurden. Wenn die `groupId` nicht gefunden wird, eine der `tabIds` ungültig ist, die `windowId` ungültig ist oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Bei einem Validierungsfehler werden die Registerkarten nicht verändert.

## Beispiele

Erstellen Sie zwei Registerkarten und fügen Sie sie in eine neue Gruppe ein, erstellen Sie dann eine weitere Registerkarte und fügen Sie diese der Gruppe hinzu.

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
  groupId: groupId,
});
```

Erstellen Sie eine Registerkarte und passen Sie ihre Gruppierung an die der aktuellen Registerkarte an.

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
