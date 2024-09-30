---
title: "EditContext: characterBounds()-Methode"
short-title: characterBounds()
slug: Web/API/EditContext/characterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`characterBounds()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle gibt ein {{jsxref("Array")}} zurück, das die Liste der Begrenzungsrechtecke für die Zeichen im `EditContext`-Objekt enthält.

Die Position und Größe der Zeichen in einem `EditContext`-Objekt wird vom Betriebssystem verwendet, um plattformspezifische, mit der Bearbeitung zusammenhängende Benutzeroberflächen wie ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster korrekt zu positionieren, wenn dies erforderlich ist. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie z. B. beim Rendern von Text in einem `<canvas>`-Element.

Webentwickler werden höchstwahrscheinlich daran interessiert sein, das [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis zusammen mit der [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds)-Methode zu verwenden, um die Zeichenbegrenzungen zu aktualisieren, wenn das Betriebssystem angibt, dass es Informationen über die Position und Größe der Zeichen benötigt.

Die `characterBounds()`-Methode gibt die Liste der Zeichenbegrenzungen zurück, die zuletzt mit `updateCharacterBounds()` aktualisiert wurden. Die Liste enthält nicht für jedes Zeichen im `EditContext`-Objekt ein Element, sondern nur für die Zeichen, die mit `updateCharacterBounds()` aktualisiert wurden. Um zu wissen, wo sich die Zeichen im `EditContext`-Objekt befinden, verwenden Sie die [`EditContext.characterBoundsRangeStart`](/de/docs/Web/API/EditContext/characterBoundsRangeStart)-Eigenschaft.

## Syntax

```js-nolint
characterBounds()
```

### Rückgabewert

Ein {{jsxref("Array")}}, das [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der sie gehört.
