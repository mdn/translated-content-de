---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser die Anzeige eines Menüs beendet: zum Beispiel, weil der Benutzer außerhalb des Menüs geklickt hat oder ein Element ausgewählt hat.

Es wird nur für Menüs ausgelöst, die mithilfe der {{WebExtAPIRef("menus")}}-API selbst bearbeitet werden können: Dazu gehören das Kontextmenü, das Werkzeugmenü des Browsers und das Lesezeichen-Menü.

Dies wird höchstwahrscheinlich in Kombination mit den {{WebExtAPIRef("menus.onShown")}}- und {{WebExtAPIRef("menus.refresh()")}}-APIs verwendet: Eine Erweiterung kann das Menü aktualisieren, wenn es angezeigt wird, und die Änderungen rückgängig machen, wenn es ausgeblendet wird.

Firefox stellt dieses Ereignis sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace zur Verfügung.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Parameter übergeben.

## Beispiele

Dieses Beispiel protokolliert einfach eine Nachricht, wann immer ein Menü ausgeblendet wird:

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
