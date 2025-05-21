---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis nutzen, um ihre Menüelemente mit Informationen zu aktualisieren, die nur verfügbar sind, sobald das Menü angezeigt wird. Typischerweise wird eine Erweiterung die Aktualisierung in ihrem `onShown`-Handler vornehmen und dann {{WebExtAPIRef("menus.refresh()")}} aufrufen, um das Menü selbst zu aktualisieren.

Der Handler kann Menüelemente hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispielerweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) ein Menüelement hinzu, das angezeigt wird, wenn der Benutzer auf einen Link klickt und das, wenn angeklickt, einfach den Link öffnet. Sie verwendet `onShown` und `refresh()`, um das Menüelement mit dem Hostnamen des Links zu versehen, damit der Benutzer leicht erkennen kann, wohin er gelangt, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor sie `refresh()` aufruft, da die Aktualisierung sonst für den Benutzer offensichtlich sein wird.

Dem Handler werden Informationen über das Menü und seinen Inhalt sowie einige Informationen von der Seite übergeben (wie der Link und/oder ausgewählter Text). Um Zugriff auf die Informationen von der Seite zu erhalten, muss Ihre Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür verfügen.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü wieder geschlossen wurde, bevor der Handler die Ausführung fortsetzt. Daher sollte ein Handler, der asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es aktualisiert wird. Zum Beispiel:

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

Es ist möglich, Menüs-API-Funktionen synchron aufzurufen, und in diesem Fall müssen Sie diese Überprüfung nicht durchführen:

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

Firefox stellt dieses Ereignis sowohl im `contextMenus`-Namespace als auch im `menus`-Namespace zur Verfügung.

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
  - : Hört auf, dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `info`

      - : `Object`. Dies ist ähnlich wie das {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:

        - `contexts`: ein Array aller zutreffenden {{WebExtAPIRef("menus.ContextType", "Kontexte")}}, die auf dieses Menü anwendbar sind.
        - `menuIds`: ein Array von IDs aller Menüelemente, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` weicht das `info`-Objekt auch dadurch ab, dass die Eigenschaften `menuItemId` und `modifiers` weggelassen werden, da diese natürlich erst verfügbar sind, wenn ein Menüelement ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` sind immer vorhanden. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattgefunden hat. Falls der Klick nicht in oder auf einem Tab stattgefunden hat, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das `openLabelledId`-Menüelement mit dem Hostnamen des Links:

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
