---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser ein Menü nicht mehr anzeigt: z.B. weil der Benutzer außerhalb des Menüs geklickt hat oder einen Menüpunkt ausgewählt hat.

Es wird nur für Menüs ausgelöst, die mit der {{WebExtAPIRef("menus")}} API selbst manipuliert werden können: Dazu gehören das Kontextmenü, das Werkzeuge-Menü des Browsers und das Lesezeichenmenü.

Dies wird höchstwahrscheinlich in Kombination mit den APIs {{WebExtAPIRef("menus.onShown")}} und {{WebExtAPIRef("menus.refresh()")}} verwendet: Eine Erweiterung kann das Menü aktualisieren, wenn es angezeigt wird, und die Änderungen rückgängig machen, wenn es ausgeblendet wird.

Firefox bietet dieses Ereignis sowohl über den `contextMenus`-Namensraum als auch über den `menus`-Namensraum an.

## Syntax

```js-nolint
browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## addListener-Syntax

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
