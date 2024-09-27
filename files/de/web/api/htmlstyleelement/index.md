---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: e651c702e7a16093ca5a615f74fde1d9ef234508
---

{{APIRef("HTML DOM")}}

Die **`HTMLStyleElement`** Schnittstelle repräsentiert ein {{HTMLElement("style")}}-Element. Sie erbt Eigenschaften und Methoden von ihrer Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Diese Schnittstelle erlaubt es nicht, das enthaltene CSS zu manipulieren (in den meisten Fällen). Um CSS zu manipulieren, lesen Sie den [Leitfaden zur Nutzung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), um einen Überblick über die Objekte zu erhalten, die verwendet werden, um spezifizierte CSS-Eigenschaften über den DOM zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking) {{Experimental_Inline}}
  - : Ein String, der angibt, dass bestimmte Operationen beim Laden kritischer Subressourcen blockiert werden sollten. Er spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.
- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
  - : Ein String, der das HTML-Attribut widerspiegelt, das das beabsichtigte Zielmedium für Stilinformationen darstellt.
- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut widerspiegelt, das den Typ des durch diese Anweisung angewendeten Stils darstellt.
- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
  - : Ein boolescher Wert, der anzeigt, ob das zugehörige Stylesheet deaktiviert ist.
- [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem gegebenen Element assoziiert ist, oder `null`, falls keines vorhanden ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von der Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("style")}}.
- [Leitfaden zur Nutzung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), um zu sehen, wie CSS manipuliert wird.
