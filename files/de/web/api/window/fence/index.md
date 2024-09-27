---
title: "Fenster: fence-Eigenschaft"
short-title: fence
slug: Web/API/Window/fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die schreibgeschützte `fence`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück.

`Fence`-Objekte sind nur für Dokumente verfügbar, die in {{htmlelement("fencedframe")}}s (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder in {{htmlelement("iframe")}}s (geladen über undurchsichtige URNs) eingebettet sind.

> [!NOTE]
> Siehe [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für eine Beschreibung zu `FencedFrameConfig`s und undurchsichtigen URNs.

## Wert

Eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz oder `null`, wenn der Dokumentkontext keinen Zugriff auf ein [`Fence`](/de/docs/Web/API/Fence)-Objekt hat.

## Beispiele

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
