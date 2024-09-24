---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLSourceElement`** Schnittstelle bietet spezielle Eigenschaften (über die reguläre {{domxref("HTMLElement")}}-Objektschnittstelle hinaus, die ihr ebenfalls durch Vererbung zur Verfügung steht) für die Manipulation von {{htmlelement("source")}}-Elementen.

{{InheritanceDiagram}}

## Instanz Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLSourceElement.height")}}
  - : Eine Zahl, die das [`height`](/de/docs/Web/HTML/Element/source#height) HTML-Attribut widerspiegelt und die Höhe der Bildquelle in CSS-Pixeln angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.
- {{domxref("HTMLSourceElement.media")}}
  - : Ein String, der das [`media`](/de/docs/Web/HTML/Element/source#media) HTML-Attribut widerspiegelt und den beabsichtigten Medientyp der Quelle enthält.
- {{domxref("HTMLSourceElement.sizes")}}
  - : Ein String, der die Bildgrößen zwischen den Haltepunkten darstellt.
- {{domxref("HTMLSourceElement.src")}}

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/source#src) HTML-Attribut widerspiegelt und die URL für die Medienquelle enthält. Die {{domxref("HTMLSourceElement.src")}}-Eigenschaft hat nur dann eine Bedeutung, wenn das zugehörige {{HTMLElement("source")}}-Element in ein Medienelement eingebettet ist, das ein {{htmlelement("video")}} oder ein {{htmlelement("audio")}}-Element ist. Es hat keine Bedeutung und wird ignoriert, wenn es in ein {{HTMLElement("picture")}}-Element eingebettet ist.

    > [!NOTE]
    > Wenn die `src`-Eigenschaft aktualisiert wird (gemeinsam mit allen Geschwistern), sollte die `load`-Methode des übergeordneten {{domxref("HTMLMediaElement")}} aufgerufen werden, wenn dies abgeschlossen ist, da `<source>`-Elemente nicht automatisch neu gescannt werden.

- {{domxref("HTMLSourceElement.srcset")}}
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Element/source#srcset) HTML-Attribut widerspiegelt und eine Liste von Kandidatenbildern enthält, die durch ein Komma (',' U+002C KOMMA) getrennt sind. Ein Kandidatenbild ist eine URL, gefolgt von einem `'w'` mit der Breite der Bilder oder einem `'x'`, gefolgt von der Pixeldichte.
- {{domxref("HTMLSourceElement.type")}}
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/source#type) HTML-Attribut widerspiegelt und den Typ der Medienquelle enthält.
- {{domxref("HTMLSourceElement.width")}}
  - : Eine Zahl, die das [`width`](/de/docs/Web/HTML/Element/source#width) HTML-Attribut widerspiegelt und die Breite der Bildquelle in CSS-Pixeln angibt. Die Eigenschaft hat nur eine Bedeutung, wenn das Elternteil des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("source") }}.
- Die HTML-DOM-APIs der Elemente, die ein {{HTMLElement("source")}}-Element enthalten können: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}.
