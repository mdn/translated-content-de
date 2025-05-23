---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{AddonSidebar}}

Ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis verwenden, um ihre Menüpunkte basierend auf Informationen zu aktualisieren, die erst verfügbar sind, wenn das Menü angezeigt wird. Typischerweise ermittelt eine Erweiterung die Aktualisierung in ihrem `onShown`-Handler und ruft dann {{WebExtAPIRef("menus.refresh()")}} auf, um das Menü selbst zu aktualisieren.

Der Handler kann Menüpunkte hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) Beispielerweiterung einen Menüpunkt hinzu, der angezeigt wird, wenn der Benutzer auf einen Link klickt und der Link beim Klicken einfach geöffnet wird. Sie verwendet `onShown` und `refresh()`, um den Menüpunkt mit dem Hostnamen des Links zu versehen, damit der Benutzer leicht erkennen kann, wohin er gelangen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor sie `refresh()` aufruft, da die Aktualisierung sonst für den Benutzer bemerkbar sein kann.

Dem Handler werden einige Informationen über das Menü und dessen Inhalte sowie einige Informationen von der Seite (wie der Link und/oder der ausgewählte Text) übergeben. Um Zugriff auf die Informationen von der Seite zu erhalten, muss Ihre Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür verfügen.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü wieder geschlossen wurde, bevor der Handler die Ausführung wieder aufnimmt. Aus diesem Grund sollte ein Handler, der asynchrone APIs aufruft, prüfen, ob das Menü noch angezeigt wird, bevor es aktualisiert wird. Zum Beispiel:

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

Beachten Sie, dass es möglich ist, `menus` API-Funktionen synchron aufzurufen. In diesem Fall müssen Sie diese Überprüfung nicht durchführen:

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `info`

      - : `Object`. Dies ist ähnlich dem {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:

        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "contexts")}}, die für dieses Menü anwendbar sind.
        - `menuIds`: ein Array der IDs aller Menüeinträge dieser Erweiterung, die in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` enthält das `info` Objekt auch nicht die Eigenschaften `menuItemId` und `modifiers`, da diese natürlich erst verfügbar sind, wenn ein Menüpunkt ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite verfügt.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details der Registerkarte, in der der Klick stattfand. Wenn der Klick nicht in oder auf einer Registerkarte stattfand, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann den Menüeintrag `openLabelledId` mit dem Hostnamen des Links:

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
