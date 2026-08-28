---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis nutzen, um ihre Menüelemente mit Informationen zu aktualisieren, die erst verfügbar sind, wenn das Menü angezeigt wird. Typischerweise ermittelt eine Erweiterung das Update in ihrem `onShown`-Handler und ruft dann {{WebExtAPIRef("menus.refresh()")}} auf, um das Menü selbst zu aktualisieren.

Der Handler kann Menüeinträge hinzufügen, entfernen oder aktualisieren.

<!-- cSpell:ignore labelled -->

Das Beispiel der Erweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) fügt einen Menüpunkt hinzu, der angezeigt wird, wenn der Benutzer auf einen Link klickt, und der, wenn angeklickt, einfach den Link öffnet. Es verwendet `onShown` und `refresh()`, um den Menüpunkt mit dem Hostnamen des Links zu versehen, damit der Benutzer leicht sehen kann, wohin er gelangen wird, bevor er klickt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor sie `refresh()` aufruft, da das Update für den Benutzer erkennbar wird.

Der Handler erhält einige Informationen über das Menü und dessen Inhalte sowie einige Informationen von der Seite (wie den Link und/oder den ausgewählten Text). Um auf die Informationen von der Seite zugreifen zu können, muss Ihre Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür haben.

Wenn der `onShown`-Handler asynchrone APIs aufruft, kann es passieren, dass das Menü wieder geschlossen ist, bevor der Handler die Ausführung wieder aufnimmt. Aus diesem Grund sollte ein Handler, wenn er asynchrone APIs aufruft, überprüfen, ob das Menü noch angezeigt wird, bevor es aktualisiert wird. Zum Beispiel:

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

Beachten Sie, dass es möglich ist, menus API-Funktionen synchron aufzurufen, und in diesem Fall müssen Sie diese Überprüfung nicht durchführen:

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

Firefox stellt dieses Ereignis sowohl über den `contextMenus`-Namensraum als auch über den `menus`-Namensraum zur Verfügung.

## Syntax

```js-nolint
browser.menus.onShown.addListener(listener)
browser.menus.onShown.removeListener(listener)
browser.menus.onShown.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, sonst `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `info`
      - : `Object`. Dies ist ähnlich wie das Objekt {{WebExtAPIRef('menus.OnClickData')}}, enthält jedoch zwei zusätzliche Eigenschaften:
        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "Kontexte")}}, die für dieses Menü zutreffen.
        - `menuIds`: ein Array von IDs aller Menüelemente, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` lässt das `info`-Objekt auch die Eigenschaften `menuItemId` und `modifiers` aus, da diese natürlich erst verfügbar sind, wenn ein Menüelement ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite hat.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattfand. Wenn der Klick nicht in oder auf einem Tab stattfand, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel hört darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das Menüelement `openLabelledId` mit dem Hostnamen des Links:

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
