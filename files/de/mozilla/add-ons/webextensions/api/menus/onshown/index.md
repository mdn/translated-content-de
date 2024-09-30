---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis nutzen, um ihre Menüelemente mit Informationen zu aktualisieren, die erst verfügbar sind, wenn das Menü angezeigt wird. Typischerweise ermittelt eine Erweiterung das Update in ihrem `onShown`-Handler und ruft dann {{WebExtAPIRef("menus.refresh()")}} auf, um das Menü selbst zu aktualisieren.

Der Handler kann Menüelemente hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispiel-Erweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) ein Menüelement hinzu, das angezeigt wird, wenn der Benutzer auf einen Link klickt, und das beim Klicken einfach den Link öffnet. Sie verwendet `onShown` und `refresh()`, um das Menüelement mit dem Hostnamen des Links zu versehen, sodass der Benutzer leicht sehen kann, wohin er gehen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit vergehen lassen sollte, bevor sie `refresh()` aufruft, da das Update sonst für den Benutzer spürbar wird.

Dem Handler werden einige Informationen über das Menü und seine Inhalte sowie einige Informationen von der Seite übergeben (wie der Link und/oder der ausgewählte Text). Um auf die Informationen von der Seite zuzugreifen, muss Ihre Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür haben.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü schon wieder geschlossen wurde, bevor der Handler die Ausführung fortsetzt. Deshalb sollte ein Handler, der asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es das Menü aktualisiert. Zum Beispiel:

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

Beachten Sie, dass es möglich ist, Menüs-API-Funktionen synchron aufzurufen. In diesem Fall müssen Sie diese Überprüfung nicht durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  browser.menus.update(menuId /*, …*/);
  // Note: Not waiting for returned promise.
  browser.menus.refresh();
});
```

Wenn Sie jedoch diese APIs asynchron aufrufen, müssen Sie die Überprüfung durchführen:

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
  - : Dieses Ereignis nicht mehr abhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er hört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `info`

      - : `Object`. Dies ist ähnlich wie das {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:

        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "Kontexte")}}, die auf dieses Menü zutreffen.
        - `menuIds`: ein Array von IDs aller Menüelemente, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` werden die Eigenschaften `menuItemId` und `modifiers` im `info`-Objekt weggelassen, da diese natürlich erst verfügbar sind, wenn ein Menüelement ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattgefunden hat. Wenn der Klick nicht in oder auf einem Tab stattgefunden hat, wird dieser Parameter fehlen.

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
