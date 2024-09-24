---
title: "HTMLFencedFrameElement: Eigenschaft config"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des {{domxref("HTMLFencedFrameElement")}} enthält ein {{domxref("FencedFrameConfig")}}-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welchen Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.

## Wert

Der Wert von `config` ist anfänglich `null`.

Wenn sein Wert auf eine Instanz eines {{domxref("FencedFrameConfig")}}-Objekts gesetzt wird, bestimmen die internen Eigenschaften des `FencedFrameConfig` (zum Beispiel `mappedURL`), was innerhalb des zugehörigen `<fencedframe>` geladen wird. Zusätzlich:

- Der Navigationstyp wird `"replace"` sein (siehe {{domxref("NavigateEvent.navigationType")}}), was bedeutet, dass der aktuelle Verlaufseintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufseintrag dafür hinzuzufügen.
- Die {{httpheader("Referrer-Policy")}} der Navigation wird auf `"no-referrer"` gesetzt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein {{domxref("FencedFrameConfig")}}-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss dem `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN auflösen, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
