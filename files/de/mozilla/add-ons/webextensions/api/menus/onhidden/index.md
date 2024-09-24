---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser aufhört, ein Menü anzuzeigen: zum Beispiel, weil der Benutzer außerhalb des Menüs geklickt oder ein Element ausgewählt hat.

Es wird nur für Menüs ausgelöst, die mithilfe der {{WebExtAPIRef("menus")}} API selbst manipuliert werden können: dies schließt das Kontextmenü, das Werkzeugmenü des Browsers und das Lesezeichenmenü ein.

Dies wird höchstwahrscheinlich in Kombination mit den APIs {{WebExtAPIRef("menus.onShown")}} und {{WebExtAPIRef("menus.refresh()")}} verwendet: Eine Erweiterung kann das Menü aktualisieren, wenn es angezeigt wird, und die Änderungen rückgängig machen, wenn es ausgeblendet wird.

Firefox stellt dieses Ereignis über den `contextMenus`-Namensraum sowie den `menus`-Namensraum zur Verfügung.

## Syntax

```js-nolint
browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören bei diesem Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden keine Parameter übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert einfach eine Nachricht, wann immer ein Menü ausgeblendet wird:

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}
