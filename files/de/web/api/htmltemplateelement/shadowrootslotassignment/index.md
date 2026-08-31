---
title: "HTMLTemplateElement: shadowRootSlotAssignment Eigenschaft"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

{{APIRef("Web Components")}}

Die **`shadowRootSlotAssignment`**-Eigenschaft des [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Interface zeigt an, ob das Element so konfiguriert wurde, dass es [benannte oder unbenannte Slot-Zuweisung](/de/docs/Web/API/Web_components/Using_templates_and_slots#named_and_manual_slot_assignment) verwendet.

Diese Eigenschaft kann verwendet werden, um [die Unterstützung für das deklarative Attribut zu erkennen](#feature_detection_for_shadowrootslotassignment) auf dem {{htmlelement("template")}}-Element.

Die Eigenschaft kann nicht ausgelesen werden, um die Methode der Slot-Zuweisung eines Schattenwurzel-Elementes zu bestimmen. Das liegt daran, dass eine `<template>`-Elementdeklaration entweder zu der Erstellung eines `HTMLTemplateElement` oder eines `ShadowRoot` führt. Wenn eine Schattenwurzel erstellt wird, dann gibt es kein `HTMLTemplateElement`, sodass Sie es nicht verwenden können, um die Slot-Zuweisung zu überprüfen. Wenn ein `HTMLTemplateElement` erstellt wird, dann ist es keine Schattenwurzel und kann nicht einfach in eine umgewandelt werden - daher ist der Wert irrelevant.

Wenn definiert, spiegelt es den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen {{htmlelement("template")}}-Elements wider.

## Wert

Ein String, der den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements widerspiegelt. Mögliche Werte sind `"named"` und `"manual"`.

## Beispiele

### Erkennung der Unterstützung für `shadowrootslotassignment`

Wenn Sie Schattenwurzeln deklarativ erstellen, die sich auf unbenannte Slot-Zuweisung stützen, und dabei {{htmlelement("template")}}-Elemente verwenden, können Sie das Vorhandensein dieser Eigenschaft auf dem `HTMLTemplateElement` nutzen, um die Unterstützung zu überprüfen. Dies funktioniert, weil die Eigenschaft gleichzeitig mit der unbenannten Zuweisung unter Verwendung des `"manual"`-Wertes hinzugefügt wurde.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);
```

Der Wert von `isShadowRootSlotAssignmentSupported` könnte dann verwendet werden, um auf das Anhängen der Schattenwurzel mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) zurückzufallen oder um den Benutzer darüber zu informieren, welche Browserversionen verwendet werden müssen.

Beachten Sie, dass es bei der Verwendung von benannter Slot-Zuweisung nicht notwendig ist, die Unterstützung für `shadowrootslotassignment` zu überprüfen, da benannte Zuweisung standardmäßig unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attribut des `<template>`-Elements
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
