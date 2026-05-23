---
title: "HTMLTemplateElement: shadowRootSlotAssignment-Eigenschaft"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{APIRef("Web Components")}}{{SeeCompatTable}}

Die **`shadowRootSlotAssignment`**-Eigenschaft der [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle gibt an, ob das Element so konfiguriert wurde, dass es [benannte oder unbenannte Slot-Zuweisung](/de/docs/Web/API/Web_components/Using_templates_and_slots#named_and_manual_slot_assignment) verwendet.

Diese Eigenschaft kann verwendet werden, um [die Unterstützung des deklarativen Attributs zu erkennen](#feature_detection_for_shadowrootslotassignment) auf dem {{htmlelement("template")}}-Element.

Die Eigenschaft kann nicht gelesen werden, um die Slot-Zuweisungsmethode eines Schattenwurzel-Elements zu bestimmen.
Dies liegt daran, dass eine `<template>`-Element-Deklaration entweder ein `HTMLTemplateElement` oder ein `ShadowRoot` erzeugt.
Wenn eine Schattenwurzel erzeugt wird, dann nicht das `HTMLTemplateElement`, daher können Sie es nicht verwenden, um die Slot-Zuweisung zu überprüfen.
Wenn ein `HTMLTemplateElement` erzeugt wird, ist es keine Schattenwurzel, und es kann nicht einfach in eine umgewandelt werden - daher ist der Wert irrelevant.

Wenn definiert, spiegelt es den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen {{htmlelement("template")}}-Elements wider.

## Wert

Ein String, der den Wert des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs des zugehörigen [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements widerspiegelt.
Mögliche Werte sind `"named"` und `"manual"`.

## Beispiele

### Erkennung der Funktion `shadowrootslotassignment`

Wenn Sie Schattenwurzeln deklarativ erstellen, die auf unbenannte Slot-Zuweisung angewiesen sind und {{htmlelement("template")}}-Elemente verwenden, können Sie das Vorhandensein dieser Eigenschaft auf dem `HTMLTemplateElement` nutzen, um die Unterstützung zu überprüfen.
Dies funktioniert, da die Eigenschaft gleichzeitig mit der unbenannten Zuweisung unter Verwendung des Werts `"manual"` hinzugefügt wurde.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);
```

Der Wert von `isShadowRootSlotAssignmentSupported` könnte dann verwendet werden, um als Fallback die Schattenwurzel mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) anzuhängen oder um den Benutzer darüber zu informieren, welche Browserversionen erforderlich sind.

Beachten Sie, dass es bei der Verwendung von benannter Slot-Zuweisung nicht notwendig ist, die Unterstützung für `shadowrootslotassignment` zu überprüfen, da die benannte Zuweisung standardmäßig unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attribut des `<template>`-Elements
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
