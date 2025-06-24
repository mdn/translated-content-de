---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`HTMLFencedFrameElement`**-Schnittstelle repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `allow`-Attributs ab und setzt diesen, das eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{experimental_inline}}
  - : ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `height`-Attributs ab und setzt diesen, der die Höhe des Elements angibt.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `width`-Attributs ab und setzt diesen, der die Breite des Elements angibt.

## Beispiele

Um den Inhalt festzulegen, der in einem `<fencedframe>` angezeigt wird, erzeugt eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE] > `resolveToConfig: true` muss beim `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
