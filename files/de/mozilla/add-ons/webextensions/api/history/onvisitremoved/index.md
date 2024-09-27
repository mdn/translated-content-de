---
title: history.onVisitRemoved
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisitRemoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Seite vollständig aus dem Browser-Verlauf entfernt wird.

- Wenn alle Besuche einer einzelnen Seite entfernt werden (zum Beispiel unter Verwendung von {{WebExtAPIRef("history.deleteUrl")}}), wird dieses Ereignis einmal ausgelöst.
- Wenn ein Bereich von Besuchen entfernt wird (zum Beispiel unter Verwendung von {{WebExtAPIRef("history.deleteRange")}} oder einer Browserfunktion wie "Jüngsten Verlauf löschen"), wird es einmal für jede Seite ausgelöst, _deren Besuche alle in den gelöschten Bereich fallen_.
- Wenn der gesamte Verlauf des Browsers gelöscht wird (zum Beispiel unter Verwendung von {{WebExtAPIRef("history.deleteAll")}}), wird es nur einmal ausgelöst.

## Syntax

```js-nolint
browser.history.onVisitRemoved.addListener(listener)
browser.history.onVisitRemoved.removeListener(listener)
browser.history.onVisitRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `removed`

      - : `object`. Details der Entfernung. Dies ist ein Objekt mit zwei Eigenschaften: ein boolesches `allHistory` und ein Array `urls`.

        - Wenn dieses Ereignis ausgelöst wird, weil der gesamte Verlauf gelöscht wurde, ist `allHistory` `true` und `urls` ist ein leeres Array.
        - Andernfalls ist `allHistory` `false` und `urls` enthält ein Element, welches die URL der entfernten Seite ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onRemoved(removed) {
  if (removed.allHistory) {
    console.log("All history removed");
  } else if (removed.urls.length) {
    console.log(`URL removed: ${removed.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisitRemoved) API von Chromium. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
