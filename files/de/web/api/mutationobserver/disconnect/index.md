---
title: "MutationObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/MutationObserver/disconnect
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die Methode **`disconnect()`** von [`MutationObserver`](/de/docs/Web/API/MutationObserver)
teilt dem Beobachter mit, dass er aufhören soll, auf Mutationen zu achten.

Der Beobachter kann wiederverwendet werden, indem seine
[`observe()`](/de/docs/Web/API/MutationObserver/observe)-Methode erneut aufgerufen wird.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

> [!NOTE]
> Alle Benachrichtigungen über Mutationen, die bereits _erkannt_, aber _noch nicht an den Beobachter gemeldet_ wurden, werden verworfen.
> Um die erkannten, aber noch nicht gemeldeten Mutationen zu behalten und zu bearbeiten, verwenden Sie die Methode
> [`takeRecords()`](/de/docs/Web/API/MutationObserver/takeRecords).

## Verwendungshinweise

Wenn das beobachtete Element aus dem DOM entfernt und anschließend vom Garbage-Collection-Mechanismus des Browsers freigegeben wird, hört der `MutationObserver` auf, das entfernte Element zu beobachten. Der `MutationObserver` selbst kann jedoch weiter existieren, um andere vorhandene Elemente zu beobachten.

## Beispiele

Dieses Beispiel erstellt einen Beobachter und trennt die Verbindung zu ihm, wodurch er für eine mögliche Wiederverwendung verfügbar bleibt.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* some time later… */

observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
