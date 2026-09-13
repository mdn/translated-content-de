---
title: "BeforeUnloadEvent: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`returnValue`**-Eigenschaft des
[`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Interfaces, wenn auf einen gültigen (`truthy`) Wert gesetzt, löst einen browsergenerierten Bestätigungsdialog aus, der Benutzer fragt, ob sie _wirklich_ die Seite verlassen wollen, wenn sie versuchen, diese zu schließen oder neu zu laden oder woanders hin zu navigieren. Dies soll helfen, den Verlust ungespeicherter Daten zu verhindern.

> [!NOTE]
> `returnValue` ist ein veraltetes Feature, und die beste Praxis ist, den Dialog auszulösen, indem [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `BeforeUnloadEvent`-Objekt aufgerufen wird, während `returnValue` gesetzt wird, um ältere Fälle zu unterstützen. Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenz für detaillierte, aktuelle Anleitungen.

## Wert

`returnValue` ist initial auf einen leeren String (`""`) gesetzt.

Das Setzen auf jeden {{Glossary("Truthy", "truthy")}} Wert wird dazu führen, dass der Dialog beim Schließen/Neuladen der Seite ausgelöst wird. Beachten Sie jedoch, dass dies auch eine {{Glossary("Sticky_activation", "sticky activation")}} erfordert. Mit anderen Worten, der Browser zeigt den Dialog nur an, wenn der Frame oder ein eingebetteter Frame eine Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern und somit keinen legitimen Anwendungsfall für den Dialog.

> [!NOTE]
> Im Dialog wird eine generische, vom Browser festgelegte Zeichenkette angezeigt. Diese kann nicht durch den Webseiten-Code gesteuert werden.

## Beispiele

Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenzseite für ein Beispiel zur besten Praxis.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
