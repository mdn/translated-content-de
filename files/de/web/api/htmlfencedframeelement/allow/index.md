---
title: "HTMLFencedFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}}- Attributs `allow` ab und setzt ihn. Dieses Attribut stellt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) dar, die auf den Inhalt angewendet wird, wenn er zum ersten Mal eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in Fenced Frames erlaubt. Die erlaubten Berechtigungen sind unter [Verfügbare Berechtigungsrichtlinien für Fenced Frames](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet – diese sind erforderlich, damit der Inhalt von Fenced Frames, der von den angegebenen APIs stammt, geladen werden kann. Wenn Sie das `allow`-Attribut nicht setzen, werden diese Berechtigungen standardmäßig erlaubt. Wenn Sie die Berechtigungen einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die von Ihnen verwendeten APIs im `allow`-Attribut festgelegt sind.

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
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
