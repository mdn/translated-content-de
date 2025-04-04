---
title: "Fenster: Fence-Eigenschaft"
short-title: fence
slug: Web/API/Window/fence
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die schreibgeschützte `fence`-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück.

`Fence`-Objekte sind nur für Dokumente verfügbar, die innerhalb von {{htmlelement("fencedframe")}}s (geladen über [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s) oder {{htmlelement("iframe")}}s (geladen über undurchsichtige URNs) eingebettet sind.

> [!NOTE]
> Sehen Sie sich [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) an für eine Beschreibung zu `FencedFrameConfig`s und undurchsichtigen URNs.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
