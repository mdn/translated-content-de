---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{AddonSidebar}}

Fügt einen oder mehrere Tabs zu einer Gruppe hinzu oder, falls keine Gruppe angegeben ist, erstellt eine neue Gruppe und fügt die Tabs dieser hinzu. Alle Tabs in einer Tabgruppe müssen aneinandergrenzen, und Tabs werden bei Bedarf verschoben. Alle angehefteten Tabs werden vor dem Gruppieren gelöst.

Wenn ein Aufruf Tabs aus Tabgruppen entfernt und diese Tabgruppen leer werden, werden die leeren Tabgruppen entfernt.

> [!NOTE]
> Die `tabs.group()`-Methode ist nicht der einzige Weg, Tabs zu gruppieren. Ein Tab tritt auch einer Tabgruppe bei, wenn {{WebExtAPIRef("tabs.move")}} es zwischen Tabs platziert, die Teil einer Tabgruppe sind.

Weitere Informationen zu Tabgruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameter

- `options`

  - : Ein Objekt, das Details über die Tabgruppierung enthält.

    - `createProperties` {{optional_inline}}

      - : `object`. Konfigurationsdetails für eine neue Gruppe. Kann nicht verwendet werden, wenn `groupId` angegeben ist.

        - `windowId` {{optional_inline}}
          - : `integer`. Das Fenster der neuen Gruppe. Standardmäßig das [aktuelle Fenster](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Gruppe, der die Tabs hinzugefügt werden sollen. Wenn nicht angegeben, wird eine Gruppe erstellt.
    - `tabIds`
      - : `integer` oder `array` von `integer`. Die Tab-ID oder Liste von Tab-IDs, die zur Gruppe hinzugefügt werden sollen. Muss mindestens eine Tab-ID enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Ganzzahl erfüllt wird, die die `groupId` der Tabgruppe enthält, zu der die Tabs hinzugefügt wurden. Wenn die `groupId` nicht gefunden wird, eine der `tabIds` ungültig ist, die `windowId` ungültig ist oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt. Bei einem Validierungsfehler werden die Tabs nicht geändert.

## Beispiele

Erstellen Sie zwei Tabs und fügen Sie sie in eine neue Gruppe ein, dann erstellen Sie einen weiteren Tab und fügen ihn der Gruppe hinzu.

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

Erstellen Sie einen Tab und passen Sie dessen Gruppierung an die des aktuellen Tabs an.

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
