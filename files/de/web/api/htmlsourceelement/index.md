---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLSourceElement`**-Interface bietet spezielle Eigenschaften (über das reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektinterface, das es durch Vererbung ebenfalls zur Verfügung hat, hinaus) zur Manipulation von {{htmlelement("source")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
  - : Eine Zahl, die das [`height`](/de/docs/Web/HTML/Reference/Elements/source#height)-HTML-Attribut widerspiegelt und die Höhe der Bildressource in CSS-Pixeln angibt. Die Eigenschaft hat nur dann eine Bedeutung, wenn das Elternteil des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
  - : Ein String, der das [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)-HTML-Attribut widerspiegelt und den vorgesehenen Typ der Medienressource enthält.
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
  - : Ein String, der Bildgrößen zwischen Haltepunkten darstellt.
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/source#src)-HTML-Attribut widerspiegelt und die URL für die Medienressource enthält. Die [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)-Eigenschaft hat nur dann eine Bedeutung, wenn das zugehörige {{HTMLElement("source")}}-Element in einem Medienelement eingebettet ist, das ein {{htmlelement("video")}}- oder ein {{htmlelement("audio")}}-Element ist. Sie hat keine Bedeutung und wird ignoriert, wenn sie in einem {{HTMLElement("picture")}}-Element eingebettet ist.

    > [!NOTE]
    > Wenn die `src`-Eigenschaft (zusammen mit Geschwisterelementen) aktualisiert wird, sollte die `load`-Methode des übergeordneten [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) aufgerufen werden, da `<source>`-Elemente nicht automatisch neu gescannt werden.

- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Reference/Elements/source#srcset)-HTML-Attribut widerspiegelt und eine Liste von potenziellen Bildern enthält, die durch ein Komma (`',', U+002C COMMA`) getrennt sind. Ein potenzielles Bild ist eine URL, gefolgt von einem `'w'` mit der Breite der Bilder, oder ein `'x'`, gefolgt von der Pixeldichte.
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-HTML-Attribut widerspiegelt und den Typ der Medienressource enthält.
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
  - : Eine Zahl, die das [`width`](/de/docs/Web/HTML/Reference/Elements/source#width)-HTML-Attribut widerspiegelt und die Breite der Bildressource in CSS-Pixeln angibt. Die Eigenschaft hat nur dann eine Bedeutung, wenn das Elternteil des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("source") }}.
- Die HTML-DOM-APIs der Elemente, die ein {{HTMLElement("source")}}-Element enthalten können: [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), [`HTMLPictureElement`](/de/docs/Web/API/HTMLPictureElement).
