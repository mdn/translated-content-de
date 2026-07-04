---
title: "HTMLTemplateElement: shadowRootSlotAssignment-Eigenschaft"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Web Components")}}

Die **`shadowRootSlotAssignment`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interfaces gibt an, ob das Element so konfiguriert wurde, dass es [benannte oder unbenannte Slot-Zuweisung](/de/docs/Web/API/Web_components/Using_templates_and_slots#named_and_manual_slot_assignment) verwendet.

Diese Eigenschaft kann verwendet werden, um [die Unterstützung für das deklarative Attribut zu erkennen](#feature_detection_for_shadowrootslotassignment) auf dem {{htmlelement("template")}}-Element.

Die Eigenschaft kann nicht gelesen werden, um die Slot-Zuweisungsmethode eines Shadow-Roots zu bestimmen.
Dies liegt daran, dass eine `<template>`-Elementdeklaration entweder zur Erstellung eines `HTMLTemplateElement` oder eines `ShadowRoot` führt.
Wenn ein Shadow-Root erstellt wird, dann nicht das `HTMLTemplateElement`, sodass Sie es nicht verwenden können, um die Slot-Zuweisung zu überprüfen.
Wenn ein `HTMLTemplateElement` erstellt wird, ist es kein Shadow-Root, und es kann nicht leicht in eines umgewandelt werden - daher ist der Wert irrelevant.

Wenn definiert, spiegelt es den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen {{htmlelement("template")}}-Elements wider.

## Wert

Ein String, der den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements widerspiegelt.
Mögliche Werte sind `"named"` und `"manual"`.

## Beispiele

### Funktionserkennung für `shadowrootslotassignment`

Wenn Sie Shadow-Roots deklarativ erstellen, die auf unbenannte Slot-Zuweisung angewiesen sind und {{htmlelement("template")}}-Elemente verwenden, können Sie die Existenz dieser Eigenschaft am `HTMLTemplateElement` verwenden, um die Unterstützung zu überprüfen.
Dies funktioniert, da die Eigenschaft gleichzeitig mit der unbenannten Zuweisung unter Verwendung des `"manual"` Wertes hinzugefügt wurde.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);
```

Der Wert von `isShadowRootSlotAssignmentSupported` könnte dann verwendet werden, um auf das Anhängen des Shadow-Roots mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zurückzugreifen oder um den Benutzer darüber zu informieren, welche Browserversionen zu verwenden sind.

Beachten Sie, dass keine Überprüfung der Unterstützung für `shadowrootslotassignment` erforderlich ist, wenn Sie benannte Slot-Zuweisung verwenden, da benannte Zuweisung standardmäßig unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attribut des `<template>` Elements
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
