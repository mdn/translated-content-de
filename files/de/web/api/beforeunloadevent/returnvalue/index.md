---
title: "BeforeUnloadEvent: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`returnValue`**-Eigenschaft der {{domxref("BeforeUnloadEvent")}}-Schnittstelle löst, wenn sie auf einen „truthy“ Wert gesetzt wird, einen vom Browser generierten Bestätigungsdialog aus, der Benutzer fragt, ob sie die Seite wirklich verlassen wollen, wenn sie versuchen, sie zu schließen oder neu zu laden oder irgendwo anders hin zu navigieren. Dies soll helfen, den Verlust von nicht gespeicherten Daten zu verhindern.

> **Hinweis:** `returnValue` ist ein veraltetes Feature, und als beste Praxis gilt es, den Dialog auszulösen, indem {{domxref("Event.preventDefault()")}} für das `BeforeUnloadEvent`-Objekt aufgerufen wird, während `returnValue` ebenfalls gesetzt wird, um alte Fälle zu unterstützen. Siehe die {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignisreferenz für detaillierte aktuelle Anleitungen.

## Wert

`returnValue` wird mit einem leeren String (`""`) initialisiert.

Das Setzen auf einen beliebigen [truthy](/de/docs/Glossary/Truthy) Wert wird den Dialog beim Schließen/Neuladen der Seite auslösen, beachten Sie jedoch, dass es auch [sticky activation](/de/docs/Glossary/Sticky_activation) erfordert. Mit anderen Worten, der Browser zeigt den Dialog nur an, wenn das Frame oder ein eingebettetes Frame eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zum Speichern und somit keinen legitimen Anwendungsfall für den Dialog.

> [!NOTE]
> Im Dialog wird ein generischer, vom Browser festgelegter String angezeigt. Dieser kann nicht durch den Code der Webseite kontrolliert werden.

## Beispiele

Siehe die {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignisreferenzseite für ein Beispiel bewährter Praktiken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
