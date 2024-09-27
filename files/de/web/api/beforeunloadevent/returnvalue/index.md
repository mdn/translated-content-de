---
title: "BeforeUnloadEvent: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`returnValue`**-Eigenschaft des
[`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Interfaces, wenn auf einen "truthy"-Wert gesetzt, löst einen vom Browser generierten Bestätigungsdialog aus, der die Nutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder an eine andere Stelle zu navigieren. Dies soll helfen, den Verlust nicht gespeicherter Daten zu verhindern.

> **Hinweis:** `returnValue` ist ein veraltetes Merkmal, und die beste Praxis ist es, den Dialog auszulösen, indem Sie [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `BeforeUnloadEvent`-Objekt aufrufen, während Sie auch `returnValue` setzen, um veraltete Fälle zu unterstützen. Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenz für ausführliche aktuelle Richtlinien.

## Wert

`returnValue` wird initial auf einen leeren String (`""`) gesetzt.

Das Setzen auf einen beliebigen [truthy](/de/docs/Glossary/Truthy) Wert wird den Dialog beim Schließen/Neuladen der Seite auslösen, jedoch beachten Sie, dass es auch [sticky activation](/de/docs/Glossary/Sticky_activation) erfordert. Mit anderen Worten, der Browser zeigt den Dialog nur an, wenn der Frame oder ein eingebetteter Frame eine Nutzeraktion oder Nutzerinteraktion erhält. Wenn der Nutzer nie mit der Seite interagiert hat, gibt es keine Nutzerdaten zu speichern, und somit keinen legitimen Anwendungsfall für den Dialog.

> [!NOTE]
> Ein generischer, vom Browser bestimmter String wird im Dialog angezeigt. Dieser kann nicht durch den Webseiten-Code gesteuert werden.

## Beispiele

Sehen Sie die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenzseite für ein Best-Practice-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
