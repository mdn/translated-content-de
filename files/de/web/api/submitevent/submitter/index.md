---
title: "SubmitEvent: submitter Eigenschaft"
short-title: submitter
slug: Web/API/SubmitEvent/submitter
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`submitter`** Eigenschaft der [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Schnittstelle gibt das Sende-Button-Element oder ein anderes Element an, das ausgelöst wurde, um das Formular einzureichen.

## Wert

Ein Element, das das Element angibt, welches das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis an das Formular gesendet hat. Während dies oft ein {{HTMLElement("input")}} Element ist, dessen [`type`](/de/docs/Web/HTML/Element/input#type) `submit` ist oder ein {{HTMLElement("button")}} Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type) `submit` ist, könnte es auch ein anderes Element sein, das einen Übermittlungsprozess initiiert hat.

Falls die Übermittlung nicht durch eine Art Button ausgelöst wurde, ist der Wert von `submitter` `null`.

## Beispiele

Siehe [`SubmitEvent`](/de/docs/Web/API/SubmitEvent#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
