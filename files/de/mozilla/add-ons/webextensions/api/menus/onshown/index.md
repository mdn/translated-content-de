---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

Wird ausgelöst, wenn der Browser ein Menü angezeigt hat.

Eine Erweiterung kann dieses Ereignis verwenden, um ihre Menüelemente anhand von Informationen zu aktualisieren, die erst verfügbar sind, sobald das Menü angezeigt wird. In der Regel ermittelt eine Erweiterung die Aktualisierung in ihrem `onShown`-Handler und ruft dann {{WebExtAPIRef("menus.refresh()")}} auf, um das Menü selbst zu aktualisieren.

Der Handler kann Menüelemente hinzufügen, entfernen oder aktualisieren.

<!-- cSpell:ignore labelled -->

Beispielsweise fügt die Beispielerweiterung [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/main/menu-labelled-open) ein Menüelement hinzu, das angezeigt wird, wenn der Benutzer auf einen Link klickt, und das beim Anklicken lediglich den Link öffnet. Sie verwendet `onShown` und `refresh()`, um das Menüelement mit dem Hostnamen für den Link zu versehen, sodass der Benutzer vor dem Klicken leicht sehen kann, wohin er gelangt.

Beachten Sie, dass eine Erweiterung nicht zu viel Zeit verstreichen lassen sollte, bevor sie `refresh()` aufruft, da die Aktualisierung andernfalls für den Benutzer sichtbar wird.

Dem Handler werden einige Informationen über das Menü und dessen Inhalte sowie einige Informationen von der Seite (etwa der Link und/oder der Auswahltext) übergeben. Um Zugriff auf die Informationen von der Seite zu erhalten, muss Ihre Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) dafür verfügen.

Wenn der `onShown`-Handler asynchrone APIs aufruft, ist es möglich, dass das Menü wieder geschlossen wurde, bevor der Handler die Ausführung fortsetzt. Wenn ein Handler asynchrone APIs aufruft, sollte er daher überprüfen, ob das Menü noch angezeigt wird, bevor er das Menü aktualisiert. Zum Beispiel:

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

Beachten Sie, dass Sie Funktionen der menus-API synchron aufrufen können und in diesem Fall diese Überprüfung nicht durchführen müssen:

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

Firefox stellt dieses Ereignis sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` bereit.

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
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `info`
      - : `Object`. Dies entspricht dem {{WebExtAPIRef('menus.OnClickData')}}-Objekt, enthält jedoch zwei zusätzliche Eigenschaften:
        - `contexts`: ein Array aller {{WebExtAPIRef("menus.ContextType", "contexts")}}, die auf dieses Menü anwendbar sind.
        - `menuIds`: ein Array der IDs aller Menüelemente, die zu dieser Erweiterung gehören und in diesem Menü angezeigt werden.

        Im Vergleich zu `menus.OnClickData` lässt das `info`-Objekt außerdem die Eigenschaften `menuItemId` und `modifiers` weg, da diese natürlich erst verfügbar sind, wenn ein Menüelement ausgewählt wurde.

        Die Eigenschaften `contexts`, `menuIds`, `frameId` und `editable` werden immer bereitgestellt. Alle anderen Eigenschaften in `info` werden nur bereitgestellt, wenn die Erweiterung über die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Seite verfügt.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick erfolgte. Wenn der Klick nicht in oder auf einem Tab erfolgte, fehlt dieser Parameter.

## Beispiele

Dieses Beispiel wartet darauf, dass das Kontextmenü über einem Link angezeigt wird, und aktualisiert dann das Menüelement `openLabeledId` mit dem Hostnamen des Links:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabeledId, {
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
