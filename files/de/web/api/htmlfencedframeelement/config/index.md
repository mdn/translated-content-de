---
title: "HTMLFencedFrameElement: Eigenschaft config"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) enthält ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, also den Inhalt, der darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.

## Wert

Der Wert von `config` ist anfänglich `null`.

Wenn der Wert auf eine Instanz eines [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekts gesetzt wird, bestimmen die internen Eigenschaften des `FencedFrameConfig` (z. B. `mappedURL`), was innerhalb des zugehörigen `<fencedframe>` geladen wird. Zusätzlich gilt:

- Der Navigationstyp wird `"replace"` sein (siehe [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType)), was bedeutet, dass der aktuelle Verlaufseintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufseintrag dafür hinzuzufügen.
- Die Navigation hat die {{httpheader("Referrer-Policy")}} auf `"no-referrer"` gesetzt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API erhalten, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn dies nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
