---
title: "SubmitEvent: submitter-Eigenschaft"
short-title: submitter
slug: Web/API/SubmitEvent/submitter
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`submitter`**-Eigenschaft, die in der Schnittstelle [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) gefunden wird, gibt das Absende-Button oder ein anderes Element an, das ausgelöst wurde, um das Formular abzuschicken.

## Wert

Ein Element, das das Element angibt, das das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis an das Formular gesendet hat. Während dies oft ein {{HTMLElement("input")}}-Element ist, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `submit` ist, oder ein {{HTMLElement("button")}}-Element, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `submit` ist, könnte es ein anderes Element sein, das einen Absendevorgang eingeleitet hat.

Wenn die Absendung nicht durch eine Art von Button ausgelöst wurde, ist der Wert von `submitter` `null`.

## Beispiele

Sehen Sie sich [`SubmitEvent`](/de/docs/Web/API/SubmitEvent#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
