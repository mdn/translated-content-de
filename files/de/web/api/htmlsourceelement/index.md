---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Das **`HTMLSourceElement`**-Interface bietet spezielle Eigenschaften (jenseits der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektschnittstelle, die es ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation von {{htmlelement("source")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
  - : Eine Zahl, die das HTML-Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/source#height) widerspiegelt und die Höhe der Bildressource in CSS-Pixel angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
  - : Ein String, der das HTML-Attribut [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) widerspiegelt und den beabsichtigten Medientyp der Ressource enthält.
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
  - : Ein String, der Bildgrößen zwischen Breakpoints darstellt
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)

  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/source#src) widerspiegelt und die URL für die Medienressource enthält. Die [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)-Eigenschaft hat nur eine Bedeutung, wenn das zugehörige {{HTMLElement("source")}}-Element in einem Medienelement verschachtelt ist, das ein {{htmlelement("video")}} oder ein {{htmlelement("audio")}}-Element ist. Es hat keine Bedeutung und wird ignoriert, wenn es in einem {{HTMLElement("picture")}}-Element verschachtelt ist.

    > [!NOTE]
    > Wenn die `src`-Eigenschaft aktualisiert wird (zusammen mit allen Geschwistern), sollte die `load`-Methode des übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) aufgerufen werden, da `<source>`-Elemente nicht automatisch neu gescannt werden.

- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
  - : Ein String, der das HTML-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset) widerspiegelt und eine Liste von Kandidatenbildern enthält, getrennt durch ein Komma (`',', U+002C COMMA`). Ein Kandidatenbild ist eine URL, gefolgt von einem `'w'` mit der Breite der Bilder oder einem `'x'` gefolgt von der Pixeldichte.
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
  - : Ein String, der das HTML-Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) widerspiegelt und den Typ der Medienressource enthält.
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
  - : Eine Zahl, die das HTML-Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/source#width) widerspiegelt und die Breite der Bildressource in CSS-Pixeln angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("source") }}.
- Die HTML-DOM-APIs der Elemente, die ein {{HTMLElement("source")}}-Element enthalten können: [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), [`HTMLPictureElement`](/de/docs/Web/API/HTMLPictureElement).
