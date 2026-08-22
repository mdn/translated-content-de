---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Das **`HTMLStyleElement`**-Interface repräsentiert ein {{HTMLElement("style")}}-Element. Es erbt Eigenschaften und Methoden von seinem Eltern-Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement).

In den meisten Fällen ermöglicht dieses Interface nicht, das enthaltene CSS zu manipulieren. Um CSS zu manipulieren, siehe [Verwendung dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für einen Überblick über die Objekte, die verwendet werden, um angegebene CSS-Eigenschaften über das DOM zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
  - : Ein Zeichenkette, die angibt, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollen. Es reflektiert das `blocking`-Attribut des {{HTMLElement("style")}}-Elements.
- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
  - : Ein Zeichenkette, die das HTML-Attribut reflektiert, das das beabsichtigte Zielmedium für Style-Informationen darstellt.
- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type) {{deprecated_inline}}
  - : Ein Zeichenkette, die das HTML-Attribut reflektiert, das den Typ des durch diese Anweisung angewendeten Styles darstellt.
- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.
- [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem angegebenen Element assoziiert ist, oder `null`, wenn keines vorhanden ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Eltern-Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("style")}}.
- [Verwendung dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information), um zu sehen, wie CSS manipuliert wird.
