---
title: "Animation: ready Eigenschaft"
short-title: ready
slug: Web/API/Animation/ready
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`Animation.ready`** Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Animation bereit ist, abgespielt zu werden. Ein neues Promise wird jedes Mal erstellt, wenn die Animation in den `"pending"` [Spielzustand](/de/docs/Web/API/Animation/playState) eintritt, sowie wenn die Animation abgebrochen wird, da in beiden Szenarien die Animation bereit ist, erneut gestartet zu werden.

> [!NOTE]
> Da dasselbe {{jsxref("Promise")}} sowohl für ausstehende `play`- als auch `pause`-Anfragen verwendet wird, wird den Autoren geraten, den Zustand der Animation zu überprüfen, wenn das Promise aufgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Animation bereit ist, abgespielt zu werden. Normalerweise verwenden Sie eine ähnliche Struktur wie diese, wenn Sie das ready-Promise nutzen:

```js
animation.ready.then(() => {
  // Führen Sie die notwendigen Aktionen aus, wenn
  // die Animation bereit ist, zu laufen
});
```

## Beispiele

Im folgenden Beispiel wird der Zustand der Animation `running` sein, wenn das **aktuelle ready Promise** aufgelöst wird, da die Animation den `pending` Spielzustand nicht zwischen den Aufrufen von `pause` und `play` verlässt und somit das **aktuelle ready Promise** sich nicht ändert.

```js
animation.pause();
animation.ready.then(() => {
  // Zeigt 'running' an
  alert(animation.playState);
});
animation.play();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
