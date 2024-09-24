---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis verwenden, um ihre Menüpunkte mit Informationen zu aktualisieren, die erst verfügbar sind, wenn das Menü angezeigt wird. Typischerweise wird eine Erweiterung das Update in ihrem `onShown`-Handler ermitteln und dann {{WebExtAPIRef("menus.refresh()")}} aufrufen, um das Menü selbst zu aktualisieren.

Der Handler kann Menüeinträge hinzufügen, entfernen oder aktualisieren.

Zum Beispiel fügt die Beispielerweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) ein Menüelement hinzu, das angezeigt wird, wenn der Benutzer auf einen Link klickt, und das beim Klicken einfach den Link öffnet. Sie verwendet `onShown` und `refresh()`, um das Menüelement mit dem Hostnamen des Links zu annotieren, damit der Benutzer leicht sehen kann, wohin er gelangen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor `refresh()` aufgerufen wird, da das Update für den Benutzer sichtbar wird.

Dem Handler werden einige Informationen über das Menü und dessen Inhalt sowie einige Informationen von der Seite übergeben (wie der Link und/oder der Auswahltext). Um auf die Informationen von der Seite zuzugreifen, muss Ihre Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür verfügen.

Wenn der `onShown`-Handler asynchrone APIs aufruft, kann es sein, dass das Menü bereits wieder geschlossen wurde, bevor der Handler die Ausführung wieder aufnimmt. Aus diesem Grund sollte ein Handler, der asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es das Menü aktualisiert. Zum Beispiel:

```js
let lastMenuInstanceId = 0;
let nextMenuInstanceId = 1;

browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  // Asynchrone Funktion aufrufen
  await /* die Funktion, die aufgerufen werden soll */ ;

  // Nach Abschluss der asynchronen Operation überprüfen, ob das Menü noch angezeigt wird.
  if (menuInstanceId !== lastMenuInstanceId) {
    return; // Menü wurde geschlossen und erneut angezeigt.
  }
  // Jetzt menus.create/update + menus.refresh verwenden.
});

browser.menus.onHidden.addListener(() => {
  lastMenuInstanceId = 0;
});
```

Beachten Sie, dass es möglich ist, Menüs-API-Funktionen synchron aufzurufen, und in diesem Fall müssen Sie diese Überprüfung nicht durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  browser.menus.update(menuId /*, …*/);
  // Hinweis: Warte nicht auf das zurückgegebene Versprechen.
  browser.menus.refresh();
});
```

Wenn Sie diese APIs jedoch asynchron aufrufen, müssen Sie die Überprüfung durchführen:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  await browser.menus.update(menuId /*, …*/);
  // Jetzt muss die Überprüfung durchgeführt werden
  if (menuInstanceId !== lastMenuInstanceId) {
    return;
  }
  browser.menus.refresh();
});
```

Firefox macht dieses Ereignis über den `contextMenus`-Namespace sowie den `menus`-Namespace verfügbar.

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
  - : Stoppt das Lauschen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `info`

      - : `Object`. Dies ist genau wie das {{WebExtAPIRef('menus.OnClickData')}} Objekt, mit Ausnahme von zwei zusätzlichen Eigenschaften:

        - `contexts`: ein Array von allen {{WebExtAPIRef("menus.ContextType", "contexts")}}, die für dieses Menü gelten.
        - `menuIds`: ein Array mit den IDs aller Menüeinträge, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` lässt das `info`-Objekt auch die Eigenschaften `menuItemId` und `modifiers` weg, da diese natürlich erst verfügbar sind, wenn ein Menüeintrag ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattgefunden hat. Wenn der Klick nicht in oder auf einem Tab stattgefunden hat, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel wartet darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das `openLabelledId`-Menüelement mit dem Hostnamen des Links:

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
