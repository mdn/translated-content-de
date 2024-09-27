---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Das **`HTMLHtmlElement`**-Interface dient als Wurzelknoten für ein bestimmtes HTML-Dokument. Dieses Objekt erbt die Eigenschaften und Methoden, die in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle beschrieben sind.

Sie können das `HTMLHtmlElement`-Objekt für ein gegebenes Dokument abrufen, indem Sie den Wert der [`document.documentElement`](/de/docs/Web/API/Document/documentElement)-Eigenschaft lesen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLHtmlElement.version`](/de/docs/Web/API/HTMLHtmlElement/version) {{deprecated_inline}}
  - : Ein String, der die Version der HTML Document Type Definition (DTD) darstellt, die dieses Dokument steuert. Diese Eigenschaft sollte nicht mehr verwendet werden, da sie nicht konform ist. Bitte weglassen.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("html")}}.
