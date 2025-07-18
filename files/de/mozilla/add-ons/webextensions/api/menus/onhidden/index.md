---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Browser aufhört, ein Menü anzuzeigen: zum Beispiel, weil der Benutzer außerhalb des Menüs geklickt oder ein Element ausgewählt hat.

Es wird nur für Menüs ausgelöst, die über die {{WebExtAPIRef("menus")}} API selbst manipuliert werden können: Dazu gehören das Kontextmenü, das Werkzeugmenü des Browsers und das Lesezeichenmenü.

Dies wird höchstwahrscheinlich in Kombination mit den {{WebExtAPIRef("menus.onShown")}} und {{WebExtAPIRef("menus.refresh()")}} APIs verwendet: Eine Erweiterung kann das Menü aktualisieren, wenn es angezeigt wird, und die Änderungen rückgängig machen, wenn es ausgeblendet wird.

Firefox stellt dieses Ereignis sowohl über den `contextMenus`-Namespace als auch den `menus`-Namespace zur Verfügung.

## Syntax

```js-nolint
browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Parameter übergeben.

## Beispiele

Dieses Beispiel protokolliert einfach eine Nachricht, wenn ein Menü ausgeblendet wird:

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
