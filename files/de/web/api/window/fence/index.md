---
title: "Fenster: fence-Eigenschaft"
short-title: fence
slug: Web/API/Window/fence
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die schreibgeschützte Eigenschaft `fence` der {{domxref("Window")}}-Schnittstelle gibt eine Instanz eines {{domxref("Fence")}}-Objekts für den aktuellen Dokumentkontext zurück.

`Fence`-Objekte sind nur für Dokumente verfügbar, die innerhalb von {{htmlelement("fencedframe")}}s (geladen über {{domxref("FencedFrameConfig")}}s) oder {{htmlelement("iframe")}}s (geladen über undurchsichtige URNs) eingebettet sind.

> [!NOTE]
> Weitere Informationen finden Sie unter [Wie funktionieren `<fencedframe>`s?](/de/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) für einige Beschreibungen zu `FencedFrameConfig`s und undurchsichtigen URNs.

## Wert

Eine Instanz eines {{domxref("Fence")}}-Objekts oder `null`, wenn der Dokumentkontext keinen Zugriff auf ein {{domxref("Fence")}}-Objekt hat.

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

- [Fenced Frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
