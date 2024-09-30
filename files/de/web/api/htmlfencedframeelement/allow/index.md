---
title: "HTMLFencedFrameElement: allow Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) erhält und setzt den Wert des entsprechenden {{htmlelement("fencedframe")}}-`allow`-Attributs, das eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn dieser erstmals eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in "fenced frames" erlaubt. Die erlaubten Berechtigungen sind unter [Permissions policies available to fenced frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet — diese sind erforderlich, damit Inhalte aus den angegebenen APIs in einem "fenced frame" geladen werden. Wenn Sie das `allow`-Attribut nicht setzen, werden diese Berechtigungen standardmäßig erlaubt. Wenn Sie die berechtigten Berechtigungen einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die von Ihnen verwendeten APIs im `allow`-Attribut gesetzt sind.

## Wert

Ein String, der eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) repräsentiert.

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
