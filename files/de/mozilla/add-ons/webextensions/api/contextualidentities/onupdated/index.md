---
title: contextualIdentities.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn die Eigenschaften einer kontextuellen Identität, wie ihr Name, Symbol oder ihre Farbe, geändert werden. Kontextuelle Identitäten können von Erweiterungen mithilfe der `contextualIdentities` API oder direkt durch den Benutzer über die Benutzeroberfläche des Browsers aktualisiert werden.

## Syntax

```js-nolint
browser.contextualIdentities.onUpdated.addListener(listener)
browser.contextualIdentities.onUpdated.removeListener(listener)
browser.contextualIdentities.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `changeInfo`
      - : `object`. Ein Objekt, das eine einzelne Eigenschaft enthält, `contextualIdentity`, welches ein {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} Objekt darstellt, das die Identität repräsentiert, deren Eigenschaften aktualisiert wurden.

## Beispiele

```js
function handleUpdated(changeInfo) {
  console.log(`Updated: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
