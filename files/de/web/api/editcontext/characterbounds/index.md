---
title: "EditContext: characterBounds()-Methode"
short-title: characterBounds()
slug: Web/API/EditContext/characterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`characterBounds()`**-Methode der {{domxref("EditContext")}}-Schnittstelle gibt ein {{jsxref("Array")}} zurück, das die Liste der Begrenzungsrechtecke für die Zeichen im `EditContext`-Objekt enthält.

Die Position und Größe der Zeichen in einem `EditContext`-Objekt wird vom Betriebssystem verwendet, um plattformbezogene, bearbeitungsbezogene UI-Oberflächen wie ein Fenster des {{glossary("Input Method Editor")}} (IME) bei Bedarf korrekt zu positionieren. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie beispielsweise beim Rendern von Text in einem `<canvas>`-Element.

Webentwickler werden höchstwahrscheinlich daran interessiert sein, das {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}}-Ereignis zusammen mit der {{domxref("EditContext.updateCharacterBounds()")}}-Methode zu verwenden, um die Zeichenbegrenzungen zu aktualisieren, wenn das Betriebssystem angibt, dass es Informationen über die Position und Größe der Zeichen benötigt.

Die `characterBounds()`-Methode gibt die Liste der zuletzt mit `updateCharacterBounds()` aktualisierten Zeichenbegrenzungen zurück. Die Liste enthält keinen Eintrag für jedes Zeichen im `EditContext`-Objekt, sondern nur für die Zeichen, die mit `updateCharacterBounds()` aktualisiert wurden. Um zu wissen, wo sich die Zeichen im `EditContext`-Objekt befinden, verwenden Sie die {{domxref("EditContext.characterBoundsRangeStart")}}-Eigenschaft.

## Syntax

```js-nolint
characterBounds()
```

### Rückgabewert

Ein {{jsxref("Array")}} mit {{domxref("DOMRect")}}-Objekten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("EditContext")}}-Schnittstelle, zu der es gehört.
