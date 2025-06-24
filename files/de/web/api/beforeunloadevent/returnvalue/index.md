---
title: "BeforeUnloadEvent: returnValue-Eigenschaft"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`returnValue`**-Eigenschaft des
[`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Interfaces löst, wenn sie auf einen wahrhaftigen Wert gesetzt wird, einen vom Browser erzeugten Bestätigungsdialog aus, der Benutzer fragt, ob sie die Seite _wirklich_ verlassen möchten, wenn sie versuchen, diese zu schließen oder neu zu laden oder zu einer anderen Seite zu navigieren. Dies soll helfen, den Verlust ungespeicherter Daten zu verhindern.

> [!NOTE] > `returnValue` ist ein veraltetes Feature. Es ist Best Practice, den Dialog auszulösen, indem [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) bei dem `BeforeUnloadEvent`-Objekt aufgerufen wird, während `returnValue` gesetzt wird, um veraltete Fälle zu unterstützen. Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenz für detaillierte aktuelle Anleitungen.

## Wert

`returnValue` wird mit einem leeren String (`""`) initialisiert.

Das Setzen auf einen beliebigen [wahrhaften](/de/docs/Glossary/Truthy) Wert führt dazu, dass der Dialog beim Schließen/Neuladen der Seite ausgelöst wird. Beachten Sie jedoch, dass dies auch eine {{Glossary("Sticky_activation", "sticky activation")}} erfordert. In anderen Worten: Der Browser zeigt den Dialog nur an, wenn das Frame oder ein eingebettetes Frame eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern und daher keinen legitimen Anwendungsfall für den Dialog.

> [!NOTE]
> Es wird ein generischer, vom Browser vorgegebener String im Dialog angezeigt. Dieser kann nicht durch Code der Webseite gesteuert werden.

## Beispiele

Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenzseite für ein Best-Practice-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
