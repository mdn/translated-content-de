---
title: "HTMLFencedFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}} `allow`-Attributs ab und setzt diesen. Dieses Attribut repräsentiert eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den Inhalt angewendet wird, wenn er zuerst eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in "fenced frames" erlaubt. Die erlaubten Berechtigungen sind unter [Permissions policies available to fenced frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet — diese sind erforderlich, damit Inhalte aus den angegebenen APIs geladen werden können. Wenn Sie das `allow`-Attribut nicht setzen, werden diese Berechtigungen standardmäßig erlaubt. Wenn Sie die Berechtigungen einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die von Ihnen verwendeten APIs im `allow`-Attribut festgelegt sind.

## Wert

Ein String, der eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) darstellt.

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

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
