---
title: "HTMLFencedFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) liest und setzt den Wert des entsprechenden {{htmlelement("fencedframe")}}-`allow`-Attributs, das eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn er zum ersten Mal eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in Fenced Frames erlaubt. Die erlaubten Berechtigungen sind unter [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet — diese sind erforderlich, damit der Inhalt des Fenced Frames von den angegebenen APIs geladen werden kann. Wenn Sie das `allow`-Attribut nicht festlegen, werden diese Berechtigungen standardmäßig erlaubt. Wenn Sie die Berechtigungen einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die von Ihnen verwendeten APIs im `allow`-Attribut festgelegt sind.

## Wert

Ein String, der eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) darstellt.

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

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Das Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
