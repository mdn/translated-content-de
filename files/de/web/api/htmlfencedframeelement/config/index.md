---
title: "HTMLFencedFrameElement: config-Eigenschaft"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) enthält ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, also welchen Inhalt es anzeigen wird. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.

## Wert

Der anfängliche Wert von `config` ist `null`.

Wenn sein Wert auf eine Instanz eines [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekts gesetzt wird, bestimmen die internen Eigenschaften des `FencedFrameConfig` (zum Beispiel `mappedURL`), was im zugehörigen `<fencedframe>` geladen wird. Zusätzlich:

- Der Navigationstyp wird `"replace"` sein (siehe [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType)), was bedeutet, dass der aktuelle Verlaufs-Eintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufs-Eintrag hinzuzufügen.
- Die Navigations-{{httpheader("Referrer-Policy")}} ist auf `"no-referrer"` gesetzt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenausschreibung der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> `resolveToConfig: true` muss in den Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, das nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
