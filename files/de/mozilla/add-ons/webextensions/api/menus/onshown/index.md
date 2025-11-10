---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis verwenden, um ihre Menüpunkte mit Informationen zu aktualisieren, die erst verfügbar sind, sobald das Menü angezeigt wird. Typischerweise ermittelt eine Erweiterung das Update in ihrem `onShown`-Handler und ruft dann {{WebExtAPIRef("menus.refresh()")}} auf, um das Menü selbst zu aktualisieren.

Der Handler kann Menüpunkte hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispielerweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) einen Menüpunkt hinzu, der angezeigt wird, wenn der Benutzer auf einen Link klickt und der beim Anklicken einfach den Link öffnet. Sie verwendet `onShown` und `refresh()`, um den Menüpunkt mit dem Hostnamen des Links zu annotieren, damit der Benutzer leicht sehen kann, wohin er gelangt, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit vergehen lassen sollte, bevor sie `refresh()` aufruft, da das Update für den Benutzer sonst spürbar wird.

Dem Handler werden einige Informationen über das Menü und dessen Inhalt sowie einige Informationen von der Seite (wie der Link und/oder der ausgewählte Text) übergeben. Um Zugriff auf die Informationen von der Seite zu erhalten, muss Ihre Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür haben.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü wieder geschlossen wurde, bevor der Handler die Ausführung wieder aufnimmt. Aus diesem Grund sollte ein Handler, der asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es das Menü aktualisiert. Zum Beispiel:

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

Beachten Sie, dass es möglich ist, Menü-API-Funktionen synchron aufzurufen, in welchem Fall Sie diese Überprüfung nicht durchführen müssen:

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `info`
      - : `Object`. Dies ist ähnlich wie das {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:
        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "contexts")}}, die für dieses Menü anwendbar sind.
        - `menuIds`: ein Array von IDs aller Menüpunkte, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` lässt das `info`-Objekt auch die Eigenschaften `menuItemId` und `modifiers` weg, da diese natürlich erst verfügbar sind, wenn ein Menüpunkt ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` sind immer vorhanden. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite besitzt.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattgefunden hat. Wenn der Klick nicht in oder auf einem Tab stattfand, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel lauscht darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den Menüpunkt `openLabelledId` mit dem Hostnamen des Links:

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
