---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis nutzen, um ihre Menüeinträge mit Informationen zu aktualisieren, die erst verfügbar sind, wenn das Menü angezeigt wird. Typischerweise wird eine Erweiterung die Aktualisierung in ihrem `onShown`-Handler ermitteln und dann {{WebExtAPIRef("menus.refresh()")}} aufrufen, um das Menü selbst zu aktualisieren.

Der Handler kann Menüeinträge hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispielerweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) einen Menüeintrag hinzu, der angezeigt wird, wenn der Benutzer auf einen Link klickt und der beim Klick den Link einfach öffnet. Sie verwendet `onShown` und `refresh()`, um den Menüeintrag mit dem Hostnamen für den Link zu versehen, sodass der Benutzer leicht erkennen kann, wohin er gelangen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor `refresh()` aufgerufen wird, da die Aktualisierung sonst für den Benutzer sichtbar wird.

Dem Handler werden einige Informationen über das Menü und dessen Inhalt sowie einige Informationen von der Seite (wie etwa der Link und/oder der ausgewählte Text) übergeben. Um Zugriff auf die Informationen von der Seite zu erhalten, muss Ihre Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür haben.

Wenn der `onShown`-Handler irgendwelche asynchronen APIs aufruft, ist es möglich, dass das Menü bereits wieder geschlossen wurde, bevor der Handler die Ausführung fortsetzt. Aus diesem Grund sollte ein Handler, der asynchrone APIs aufruft, prüfen, ob das Menü noch angezeigt wird, bevor es aktualisiert wird. Zum Beispiel:

```js
let lastMenuInstanceId = 0;
let nextMenuInstanceId = 1;

browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  // Call an async function
  await /* the function to call */ ;

  // After completing the async operation, check whether the menu is still shown.
  if (menuInstanceId !== lastMenuInstanceId) {
    return; // Menu was closed and shown again.
  }
  // Now use menus.create/update + menus.refresh.
});

browser.menus.onHidden.addListener(() => {
  lastMenuInstanceId = 0;
});
```

Beachten Sie, dass es möglich ist, Funktionen der Menüs-API synchron aufzurufen, und in diesem Fall müssen Sie diese Überprüfung nicht durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  browser.menus.update(menuId /*, …*/);
  // Note: Not waiting for returned promise.
  browser.menus.refresh();
});
```

Wenn Sie diese APIs jedoch asynchron aufrufen, müssen Sie die Überprüfung durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  await browser.menus.update(menuId /*, …*/);
  // must now perform the check
  if (menuInstanceId !== lastMenuInstanceId) {
    return;
  }
  browser.menus.refresh();
});
```

Firefox macht dieses Ereignis sowohl über den `contextMenus`-Namensraum als auch den `menus`-Namensraum verfügbar.

## Syntax

```js-nolint
browser.menus.onShown.addListener(listener)
browser.menus.onShown.removeListener(listener)
browser.menus.onShown.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, sonst `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgende Argumente:

    - `info`

      - : `Object`. Dies ähnelt dem {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:

        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "contexts")}}, die für dieses Menü zutreffen.
        - `menuIds`: ein Array der IDs aller zu dieser Erweiterung gehörenden Menüeinträge, die in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` lässt das `info`-Objekt die Eigenschaften `menuItemId` und `modifiers` weg, da diese natürlich erst verfügbar sind, wenn ein Menüpunkt ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick erfolgt ist. Wenn der Klick nicht in oder auf einem Tab erfolgt ist, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel wartet darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den `openLabelledId`-Menüpunkt mit dem Hostnamen des Links:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`,
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener((info) => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
