---
title: "HTMLFencedFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`allow`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}} `allow`-Attributs ab und setzt ihn. Dieses Attribut repräsentiert eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.

Nicht alle Berechtigungsrichtlinien sind in eingeschlossenen Frames erlaubt. Die erlaubten Berechtigungen sind unter [Berechtigungsrichtlinien, die für eingeschlossene Frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) aufgelistet – diese sind erforderlich, damit Inhalte aus den angegebenen APIs in eingeschlossenen Frames geladen werden können. Wenn Sie das `allow`-Attribut nicht setzen, sind diese Berechtigungen standardmäßig erlaubt. Wenn Sie den Berechtigungsumfang einschränken möchten, müssen Sie sicherstellen, dass alle erforderlichen Berechtigungen für die von Ihnen verwendeten APIs im `allow`-Attribut gesetzt sind.

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

- [Eingeschlossene Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
