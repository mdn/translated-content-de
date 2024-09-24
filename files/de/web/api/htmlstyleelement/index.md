---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement`**-Schnittstelle repräsentiert ein {{HTMLElement("style")}}-Element. Sie erbt Eigenschaften und Methoden von ihrem Elternteil, dem {{domxref("HTMLElement")}}.

Diese Schnittstelle erlaubt es nicht, das enthaltene CSS zu bearbeiten (in den meisten Fällen). Um CSS zu bearbeiten, siehe [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für einen Überblick über die Objekte, die verwendet werden, um spezifizierte CSS-Eigenschaften über das DOM zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, dem {{domxref("HTMLElement")}}._

- {{domxref("HTMLStyleElement.blocking")}} {{Experimental_Inline}}
  - : Ein String, der angibt, dass bestimmte Operationen blockiert werden sollten, während kritische Unterressourcen geladen werden. Er spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.
- {{domxref("HTMLStyleElement.media")}}
  - : Ein String, der das HTML-Attribut reflektiert, das das beabsichtigte Zielmedium für die Stilinformation darstellt.
- {{domxref("HTMLStyleElement.type")}} {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut reflektiert, das den Typ des von dieser Anweisung angewendeten Stils darstellt.
- {{domxref("HTMLStyleElement.disabled")}}
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist.
- {{domxref("HTMLStyleElement.sheet")}} {{ReadOnlyInline}}
  - : Gibt das mit dem gegebenen Element verknüpfte {{domxref("CSSStyleSheet")}}-Objekt zurück oder `null`, wenn keines vorhanden ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, dem {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("style")}}.
- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) um zu sehen, wie Sie CSS manipulieren können.
