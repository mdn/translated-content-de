---
title: "SubmitEvent: submitter-Eigenschaft"
short-title: submitter
slug: Web/API/SubmitEvent/submitter
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`submitter`**-Eigenschaft der [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Schnittstelle gibt das Absende-Button oder ein anderes Element an, das aufgerufen wurde, um das Formular abzusenden.

## Wert

Ein Element, das das Element angibt, welches das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis an das Formular gesendet hat. Dies ist oft ein {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type) auf `submit` gesetzt ist, oder ein {{HTMLElement("button")}}-Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type) auf `submit` gesetzt ist. Es könnte jedoch auch ein anderes Element sein, welches einen Übermittlungsvorgang eingeleitet hat.

Wenn die Übermittlung nicht durch einen Button ausgelöst wurde, ist der Wert von `submitter` `null`.

## Beispiele

Siehe [`SubmitEvent`](/de/docs/Web/API/SubmitEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
