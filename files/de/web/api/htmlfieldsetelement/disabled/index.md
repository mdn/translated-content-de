---
title: "HTMLFieldSetElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
l10n:
  sourceCommit: c32a37ea5fdec8bd961573bdc7cb9c3625c237aa
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der {{domxref("HTMLFieldSetElement")}}-Schnittstelle ist ein boolean-Wert, der das `fieldset`-Element-Attribut [`disabled`](/de/docs/Web/HTML/Element/fieldset#disabled) widerspiegelt. Dieses Attribut zeigt an, ob das Steuerelement deaktiviert ist.

Wenn deaktiviert, sind alle Nachkommen des `<fieldset>`-Element-Formularsteuerungen, ausgenommen Elemente, die Nachkommen des {{htmlelement("legend")}}-Kindes des `<fieldset>` sind, falls vorhanden, deaktiviert. Ein deaktiviertes Element ist unbenutzbar und nicht anklickbar und entspricht dem {{cssxref(":disabled")}}-Selektor, selbst wenn ihr `disabled`-Eigenschaftswert false ist.

## Wert

Ein boolean-Wert.

## Beispiele

```js
const fs = document.getElementById("billing-address");
console.log(fs.disabled);
fs.disabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
- CSS {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
