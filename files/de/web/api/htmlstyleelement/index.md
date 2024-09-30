---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement`**-Schnittstelle repräsentiert ein {{HTMLElement("style")}}-Element. Sie erbt Eigenschaften und Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Diese Schnittstelle erlaubt es nicht, das darin enthaltene CSS zu manipulieren (in den meisten Fällen). Um CSS zu manipulieren, lesen Sie [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für einen Überblick über die Objekte, die verwendet werden, um spezifizierte CSS-Eigenschaften mithilfe des DOM zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking) {{Experimental_Inline}}
  - : Ein String, der anzeigt, dass bestimmte Operationen beim Abrufen von kritischen Subressourcen blockiert werden sollen. Er spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.
- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
  - : Ein String, der das HTML-Attribut widerspiegelt, das das vorgesehene Zielmedium für Stilinformationen darstellt.
- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut widerspiegelt, das den Typ des durch diese Erklärung angewendeten Stils darstellt.
- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.
- [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem angegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("style")}}.
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), um zu sehen, wie CSS manipuliert werden kann.
