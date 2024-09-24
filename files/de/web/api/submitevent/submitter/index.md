---
title: "SubmitEvent: submitter-Eigenschaft"
short-title: submitter
slug: Web/API/SubmitEvent/submitter
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`submitter`**-Eigenschaft, die auf der
{{domxref("SubmitEvent")}}-Schnittstelle zu finden ist, gibt das Absende-Button oder ein anderes Element an,
das aufgerufen wurde, um das Formular abzuschicken.

## Wert

Ein Element, das das Element angibt, welches das
{{domxref("HTMLFormElement.submit_event", "submit")}}-Ereignis an das Formular gesendet hat. Während dies
oft ein {{HTMLElement("input")}}-Element ist, dessen [`type`](/de/docs/Web/HTML/Element/input#type) `submit` ist, oder ein {{HTMLElement("button")}}-Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type) `submit` ist, könnte es ein anderes Element sein, das einen
Absendevorgang initiiert hat.

Wenn das Abschicken nicht durch eine Art Button ausgelöst wurde, ist der Wert von `submitter` `null`.

## Beispiele

Siehe [`SubmitEvent`](/de/docs/Web/API/SubmitEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
