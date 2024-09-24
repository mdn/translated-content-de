---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`HTMLEmbedElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären {{domxref("HTMLElement")}}-Eigenschaften, die es durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation von {{HTMLElement("embed")}}-Elementen.

> [!NOTE]
> Dieses Thema beschreibt das `HTMLEmbedElement`-Interface, wie es im Standard definiert ist. Es behandelt nicht die früheren, nicht standardisierten Versionen des Interfaces.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Objekt, {{domxref("HTMLElement")}}._

- {{domxref("HTMLEmbedElement.align")}} {{deprecated_inline}}
  - : Ein String, der eine aufzählende Eigenschaft darstellt und die Ausrichtung der Inhalte des Elements in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"center"` und `"justify"`.
- {{domxref("HTMLEmbedElement.height")}}
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/embed#height)-HTML-Attribut widerspiegelt und die dargestellte Höhe der Ressource enthält.
- {{domxref("HTMLEmbedElement.name")}} {{deprecated_inline}}
  - : Ein String, der den Namen des eingebetteten Objekts darstellt.
- {{domxref("HTMLEmbedElement.src")}}
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/embed#src)-HTML-Attribut widerspiegelt und die Adresse der Ressource enthält.
- {{domxref("HTMLEmbedElement.type")}}
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/embed#type)-HTML-Attribut widerspiegelt und den Typ der Ressource enthält.
- {{domxref("HTMLEmbedElement.width")}}
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/embed#width)-HTML-Attribut widerspiegelt und die dargestellte Breite der Ressource enthält.

## Methoden von Instanzen

_Keine spezifische Methode; erbt Methoden von seinem übergeordneten Objekt, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("embed") }}
