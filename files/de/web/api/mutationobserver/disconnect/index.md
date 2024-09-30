---
title: "MutationObserver: disconnect() Methode"
short-title: disconnect()
slug: Web/API/MutationObserver/disconnect
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die [`MutationObserver`](/de/docs/Web/API/MutationObserver) Methode
**`disconnect()`** weist den Beobachter an, das Überwachen von
Mutationen zu stoppen.

Der Beobachter kann wiederverwendet werden, indem seine
[`observe()`](/de/docs/Web/API/MutationObserver/observe) Methode erneut aufgerufen wird.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

> [!NOTE]
> Alle Benachrichtigungen über bereits _erfasste_, aber _noch nicht gemeldete_
> Mutationen werden verworfen.
> Um die erfassten, aber nicht gemeldeten Mutationen zu behalten und zu verarbeiten, verwenden Sie
> die [`takeRecords()`](/de/docs/Web/API/MutationObserver/takeRecords) Methode.

## Anwendungsnotizen

Wenn das beobachtete Element aus dem DOM entfernt und dann anschließend vom
Garbage-Collection-Mechanismus des Browsers freigegeben wird, wird der `MutationObserver` aufhören,
das entfernte Element zu beobachten. Der `MutationObserver` selbst kann jedoch weiterhin existieren,
um andere vorhandene Elemente zu beobachten.

## Beispiele

Dieses Beispiel erstellt einen Beobachter und trennt dann die Verbindung von ihm, wodurch er für eine
mögliche Wiederverwendung verfügbar bleibt.

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
