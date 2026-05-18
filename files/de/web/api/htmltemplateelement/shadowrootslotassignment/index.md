---
title: "HTMLTemplateElement: shadowRootSlotAssignment-Eigenschaft"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{APIRef("Web Components")}}

Die **`shadowRootSlotAssignment`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces zeigt an, ob das Element so konfiguriert wurde, dass es [benannte oder unbenannte Slot-Zuweisungen](/de/docs/Web/API/Web_components/Using_templates_and_slots#named_and_manual_slot_assignment) verwendet.

Diese Eigenschaft kann verwendet werden, um [die Unterstützung für das deklarative Attribut zu erkennen](#feature_detection_for_shadowrootslotassignment) auf dem {{htmlelement("template")}}-Element.

Die Eigenschaft kann nicht gelesen werden, um die Slot-Zuweisungsmethode eines Shadow-Roots zu bestimmen.
Dies liegt daran, dass eine `<template>`-Elementdeklaration entweder zur Erstellung eines `HTMLTemplateElement` oder eines `ShadowRoot` führt.
Wenn ein Shadow-Root erstellt wird, dann nicht das `HTMLTemplateElement`, sodass es nicht zur Überprüfung der Slot-Zuweisung verwendet werden kann.
Wenn ein `HTMLTemplateElement` erstellt wird, ist es kein Shadow-Root und kann nicht einfach in eines umgewandelt werden - daher ist der Wert irrelevant.

Wenn definiert, spiegelt es den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen {{htmlelement("template")}}-Elements wider.

## Wert

Ein String, der den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements widerspiegelt.
Mögliche Werte sind `"named"` und `"manual"`.

## Beispiele

### Feature-Erkennung für `shadowrootslotassignment`

Wenn Sie deklarativ Shadow-Roots erstellen, die sich auf unbenannte Slot-Zuweisung verlassen, indem Sie {{htmlelement("template")}}-Elemente verwenden, können Sie die Existenz dieser Eigenschaft auf dem `HTMLTemplateElement` verwenden, um die Unterstützung zu überprüfen.
Dies funktioniert, weil die Eigenschaft gleichzeitig mit der unbenannten Zuweisung mit dem `"manual"`-Wert hinzugefügt wurde.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);
```

Der Wert von `isShadowRootSlotAssignmentSupported` könnte dann verwendet werden, um auf das Anfügen des Shadow-Roots mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zurückzugreifen oder um den Benutzer darüber zu informieren, welche Browserversionen sie verwenden müssen.

Beachten Sie, dass, wenn Sie benannte Slot-Zuweisung verwenden, es nicht notwendig ist, die Unterstützung von `shadowrootslotassignment` zu überprüfen, da benannte Zuweisung standardmäßig unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attribut des `<template>`-Elements
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
