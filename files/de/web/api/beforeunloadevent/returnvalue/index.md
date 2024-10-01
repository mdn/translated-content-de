---
title: "BeforeUnloadEvent: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`returnValue`**-Eigenschaft des [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Interfaces, löst, wenn auf einen wahrheitsgemäßen Wert gesetzt, einen vom Browser generierten Bestätigungsdialog aus. Dieser fragt die Benutzer, ob sie die Seite _wirklich_ verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder woanders hin zu navigieren. Dies soll helfen, den Verlust nicht gespeicherter Daten zu verhindern.

> **Hinweis:** `returnValue` ist ein veraltetes Feature und die beste Praxis ist es, den Dialog durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `BeforeUnloadEvent`-Objekt auszulösen, während `returnValue` gesetzt bleibt, um ältere Fälle zu unterstützen. Siehe die Referenz zum [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis für detaillierte aktuelle Anleitungen.

## Wert

`returnValue` wird auf einen leeren String (`""`) initialisiert.

Das Setzen auf nahezu jeden {{Glossary("Truthy", "wahrheitsgemäßen")}} Wert wird dazu führen, dass der Dialog beim Schließen/Neuladen der Seite ausgelöst wird. Beachten Sie jedoch, dass es auch {{Glossary("Sticky_activation", "sticky activation")}} erfordert. Mit anderen Worten: Der Browser zeigt den Dialog nur an, wenn der Frame oder ein eingebetteter Frame eine Benutzeraktion oder Interaktion erhält. Wenn der Benutzer niemals mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern und damit keinen legitimen Anwendungsfall für den Dialog.

> [!NOTE]
> Im Dialog wird ein vom Browser festgelegter generischer String angezeigt. Dieser kann nicht durch den Webseiten-Code kontrolliert werden.

## Beispiele

Siehe die Referenzseite zum [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis für ein Best-Practice-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
