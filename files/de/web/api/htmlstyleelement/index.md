---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Das **`HTMLStyleElement`**-Interface repräsentiert ein {{HTMLElement("style")}}-Element. Es erbt Eigenschaften und Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Dieses Interface erlaubt es nicht, das darin enthaltene CSS zu manipulieren (in den meisten Fällen). Um CSS zu manipulieren, siehe [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für einen Überblick über die Objekte, die verwendet werden, um festgelegte CSS-Eigenschaften mittels DOM zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen von kritischen Subressourcen blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.
- [`HTMLStyleElement.media`](/de/docs/Web/API/HTMLStyleElement/media)
  - : Ein String, der das HTML-Attribut widerspiegelt, das das vorgesehene Zielmedium für Stilinformationen darstellt.
- [`HTMLStyleElement.type`](/de/docs/Web/API/HTMLStyleElement/type) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut widerspiegelt, das den Typ des angewendeten Stils durch diese Anweisung darstellt.
- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.
- [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem gegebenen Element assoziiert ist, oder `null`, wenn keines vorhanden ist.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("style")}}.
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) um zu sehen, wie CSS manipuliert werden kann.
