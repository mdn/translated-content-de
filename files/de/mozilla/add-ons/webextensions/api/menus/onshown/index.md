---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis verwenden, um ihre Menüpunkte mit Informationen zu aktualisieren, die erst verfügbar sind, sobald das Menü angezeigt wird. Typischerweise wird eine Erweiterung das Update in ihrem `onShown`-Handler ermitteln und dann {{WebExtAPIRef("menus.refresh()")}} aufrufen, um das Menü selbst zu aktualisieren.

Der Handler kann Menüeinträge hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispiel-Erweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) einen Menüpunkt hinzu, der angezeigt wird, wenn der Benutzer auf einen Link klickt und der, wenn er geklickt wird, einfach den Link öffnet. Sie verwendet `onShown` und `refresh()`, um den Menüpunkt mit dem Hostnamen des Links zu versehen, sodass der Benutzer leicht sehen kann, wohin er gelangen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor `refresh()` aufgerufen wird, da das Update ansonsten für den Benutzer spürbar sein wird.

Dem Handler werden einige Informationen über das Menü und seinen Inhalt sowie einige Informationen von der Seite (wie den Link und/oder den ausgewählten Text) übergeben. Um auf die Informationen von der Seite zugreifen zu können, muss Ihre Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite verfügen.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü bereits wieder geschlossen wurde, bevor der Handler die Ausführung wieder aufnimmt. Aus diesem Grund sollte ein Handler, der asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es aktualisiert wird. Zum Beispiel:

```js
let lastMenuInstanceId = 0;
let nextMenuInstanceId = 1;

browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  // Call an async function
  await doSomethingAsync();

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

Beachten Sie, dass es möglich ist, die APIs für Menüs synchron aufzurufen, und in diesem Fall müssen Sie diese Überprüfung nicht durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  browser.menus.update(menuId /*, … */);
  // Note: Not waiting for returned promise.
  browser.menus.refresh();
});
```

Wenn Sie diese APIs jedoch asynchron aufrufen, müssen Sie die Überprüfung durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  await browser.menus.update(menuId /*, … */);
  // must now perform the check
  if (menuInstanceId !== lastMenuInstanceId) {
    return;
  }
  browser.menus.refresh();
});
```

Firefox stellt dieses Ereignis sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

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
  - : Beendet das Abhören dieses Ereignisses. Das `listener`-Argument ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es abhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `info`

      - : `Object`. Dies ähnelt dem {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:

        - `contexts`: ein Array aller zutreffenden {{WebExtAPIRef("menus.ContextType", "Kontexte")}}, die auf dieses Menü anwendbar sind.
        - `menuIds`: ein Array von IDs aller Menüpunkte, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Verglichen mit `menus.OnClickData` fehlen die Eigenschaften `menuItemId` und `modifiers` im `info`-Objekt, da diese natürlich erst verfügbar sind, wenn ein Menüpunkt ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattfand. Wenn der Klick nicht in einem Tab stattfand, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den Menüpunkt `openLabelledId` mit dem Hostnamen des Links:

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
