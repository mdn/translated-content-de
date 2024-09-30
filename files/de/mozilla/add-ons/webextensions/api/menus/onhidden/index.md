---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser aufhört, ein Menü anzuzeigen: zum Beispiel, weil der Benutzer außerhalb des Menüs geklickt hat oder einen Eintrag ausgewählt hat.

Es wird nur für Menüs ausgelöst, die mit der {{WebExtAPIRef("menus")}}-API selbst manipuliert werden können: Dazu gehören das Kontextmenü, das Menü „Tools“ des Browsers und das Lesezeichen-Menü.

Dies wird höchstwahrscheinlich in Kombination mit den {{WebExtAPIRef("menus.onShown")}}- und {{WebExtAPIRef("menus.refresh()")}}-APIs verwendet: Eine Erweiterung kann das Menü aktualisieren, wenn es angezeigt wird, und dann die Änderungen rückgängig machen, wenn es ausgeblendet wird.

In Firefox ist dieses Ereignis sowohl über den `contextMenus`-Namensraum als auch über den `menus`-Namensraum verfügbar.

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
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax für addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Parameter übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert einfach eine Nachricht, wenn ein Menü ausgeblendet wird:

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}
