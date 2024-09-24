---
title: "ElementInternals: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/ElementInternals/ariaBusy
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaBusy`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attributs wider, welches angibt, ob ein Element bearbeitet wird. Assistive Technologien könnten warten möchten, bis die Bearbeitungen abgeschlossen sind, bevor sie diese dem Benutzer zugänglich machen.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es werden keine Updates für das Element erwartet.

## Beispiele

In diesem Beispiel wird der Wert von `ariaBusy` auf "true" gesetzt.

```js
this.internals_.ariaBusy = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
