---
title: "Event: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/Event/returnValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die [`Event`](/de/docs/Web/API/Event)-Eigenschaft **`returnValue`** gibt an, ob die Standardaktion für dieses Ereignis verhindert wurde oder nicht.

Standardmäßig ist sie auf `true` gesetzt, was die Ausführung der Standardaktion erlaubt. Wenn Sie diese Eigenschaft auf `false` setzen, wird die Standardaktion verhindert.

> [!NOTE]
> Obwohl `returnValue` in den DOM-Standard aufgenommen wurde, ist es in erster Linie vorhanden, um bestehende Codes zu unterstützen. Verwenden Sie stattdessen [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) anstelle dieser historischen Eigenschaft.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis nicht abgebrochen wurde; andernfalls, wenn das Ereignis abgebrochen oder die Standardaktion verhindert wurde, ist der Wert `false`.

Der Wert von `returnValue` ist das Gegenteil des von [`defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) zurückgegebenen Wertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLDialogElement.returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue): der Rückgabewert für das {{HTMLElement("dialog")}}.
