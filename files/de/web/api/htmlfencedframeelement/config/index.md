---
title: "HTMLFencedFrameElement: config-Eigenschaft"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`config`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) enthält ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} repräsentiert, also den Inhalt, der darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.

## Wert

Der Wert von `config` ist zunächst `null`.

Wenn sein Wert auf eine Instanz eines [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekts gesetzt ist, bestimmen die internen Eigenschaften des `FencedFrameConfig` (zum Beispiel `mappedURL`), was innerhalb des zugehörigen `<fencedframe>` geladen wird. Zusätzlich:

- Der Navigationstyp wird `"replace"` sein (siehe [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType)), was bedeutet, dass der aktuelle Verlaufseintrag durch den neuen Eintrag ersetzt wird, anstatt einen neuen Verlaufseintrag hinzuzufügen.
- Die {{httpheader("Referrer-Policy")}} der Navigation ist auf `"no-referrer"` gesetzt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, erzeugt eine API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die Gewinneranzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE] > `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn dies nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} in einen URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingezäunte Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
