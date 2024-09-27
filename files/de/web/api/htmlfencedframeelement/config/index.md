---
title: "HTMLFencedFrameElement: Eigenschaft config"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) enthält ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, also welchen Inhalt es anzeigen wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.

## Wert

Der Wert von `config` ist anfänglich `null`.

Wenn sein Wert auf eine Instanz eines [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekts gesetzt wird, bestimmen die internen Eigenschaften des `FencedFrameConfig` (zum Beispiel `mappedURL`), was in dem zugeordneten `<fencedframe>` geladen wird. Zusätzlich:

- Der Navigationstyp wird `"replace"` sein (siehe [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType)), was bedeutet, dass der aktuelle Verlaufs-Eintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufs-Eintrag hinzuzufügen.
- Die Navigations-{{httpheader("Referrer-Policy")}} wird auf `"no-referrer"` gesetzt.

## Beispiele

Um den Inhalt festzulegen, der in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Werbeauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} in einen URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
