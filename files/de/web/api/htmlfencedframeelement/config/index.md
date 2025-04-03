---
title: "HTMLFencedFrameElement: config-Eigenschaft"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) enthält ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welche Inhalte darin angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.

## Wert

Der Wert von `config` ist zunächst `null`.

Wenn sein Wert auf eine Instanz eines [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekts gesetzt wird, bestimmen die internen Eigenschaften des `FencedFrameConfig` (zum Beispiel `mappedURL`), was im zugehörigen `<fencedframe>` geladen wird. Zusätzlich:

- Der Navigations-Typ wird `"replace"` sein (siehe [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType)), was bedeutet, dass der aktuelle Verlaufseintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufseintrag dafür hinzuzufügen.
- Die {{httpheader("Referrer-Policy")}} der Navigation ist auf `"no-referrer"` gesetzt.

## Beispiele

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird ein `FencedFrameConfig` von einer Anzeigenausschreibung der Protected Audience API abgerufen, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
