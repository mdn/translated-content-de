---
title: "MutationObserver: Methode disconnect()"
short-title: disconnect()
slug: Web/API/MutationObserver/disconnect
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die Methode **`disconnect()`** des {{domxref("MutationObserver")}} teilt dem Beobachter mit, dass er aufhören soll, nach Mutationen zu suchen.

Der Beobachter kann wiederverwendet werden, indem seine Methode {{domxref("MutationObserver.observe", "observe()")}} erneut aufgerufen wird.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

> [!NOTE]
> Alle Benachrichtigungen über bereits _erfasste_, aber _noch nicht gemeldete_ Mutationen werden verworfen. Um die erfassten, aber nicht gemeldeten Mutationen zu behalten und zu handhaben, verwenden Sie die Methode {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}.

## Nutzungshinweise

Wenn das beobachtete Element aus dem DOM entfernt und anschließend vom Müllentsorgungsmechanismus des Browsers freigegeben wird, wird der `MutationObserver` aufhören, das entfernte Element zu beobachten. Der `MutationObserver` selbst kann jedoch weiterhin bestehen, um andere vorhandene Elemente zu beobachten.

## Beispiele

Dieses Beispiel erstellt einen Beobachter und trennt sich dann von ihm, sodass er für eine mögliche Wiederverwendung verfügbar bleibt.

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
