---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLSourceElement`** Schnittstelle bietet spezielle Eigenschaften (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt-Schnittstelle hinaus, die ihr auch durch Vererbung zur Verfügung steht) zum Manipulieren von {{htmlelement("source")}} Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
  - : Eine Zahl, die das [`height`](/de/docs/Web/HTML/Element/source#height) HTML-Attribut widerspiegelt und die Höhe der Bildressource in CSS-Pixeln angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}} Elements ein {{HTMLElement("picture")}} Element ist.
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
  - : Ein String, der das [`media`](/de/docs/Web/HTML/Element/source#media) HTML-Attribut widerspiegelt und den beabsichtigten Typ der Medienressource enthält.
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
  - : Ein String, der die Bildgrößen zwischen den Breitenangaben darstellt.
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/source#src) HTML-Attribut widerspiegelt und die URL der Medienressource enthält. Die [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src) Eigenschaft hat nur eine Bedeutung, wenn das zugehörige {{HTMLElement("source")}} Element in einem Medienelement verschachtelt ist, das ein {{htmlelement("video")}} oder ein {{htmlelement("audio")}} Element ist. Es hat keine Bedeutung und wird ignoriert, wenn es in einem {{HTMLElement("picture")}} Element verschachtelt ist.

    > [!NOTE]
    > Wenn die `src` Eigenschaft aktualisiert wird (zusammen mit Geschwistern), sollte die `load` Methode des übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) aufgerufen werden, da `<source>` Elemente nicht automatisch erneut gescannt werden.

- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Element/source#srcset) HTML-Attribut widerspiegelt und eine Liste von Bildkandidaten enthält, getrennt durch ein Komma (`',', U+002C COMMA`). Ein Bildkandidat ist eine URL, gefolgt von einem `'w'` mit der Breite der Bilder oder einem `'x'` gefolgt von der Pixeldichte.
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/source#type) HTML-Attribut widerspiegelt und den Typ der Medienressource enthält.
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
  - : Eine Zahl, die das [`width`](/de/docs/Web/HTML/Element/source#width) HTML-Attribut widerspiegelt und die Breite der Bildressource in CSS-Pixeln angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}} Elements ein {{HTMLElement("picture")}} Element ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternobjekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("source") }}.
- Die HTML DOM APIs der Elemente, die ein {{HTMLElement("source")}} Element enthalten können: [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), [`HTMLPictureElement`](/de/docs/Web/API/HTMLPictureElement).
