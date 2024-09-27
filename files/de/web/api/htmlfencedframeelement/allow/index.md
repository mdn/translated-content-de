---
title: "HTMLFencedFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) erhält und setzt den Wert des entsprechenden {{htmlelement("fencedframe")}} `allow`-Attributs, das eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in Fenced Frames erlaubt. Die erlaubten Berechtigungen sind unter [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet – diese sind erforderlich, damit Inhalte von Fenced Frames, die von den angegebenen APIs stammen, geladen werden können. Wenn Sie das `allow`-Attribut nicht setzen, werden diese Berechtigungen standardmäßig erlaubt. Wenn Sie den Berechtigungsumfang einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die verwendeten APIs im `allow`-Attribut festgelegt sind.

## Wert

Ein String, der eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) darstellt.

## Beispiele

```js
const frame = document.createElement("fencedframe");
console.log(frame.allow);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
