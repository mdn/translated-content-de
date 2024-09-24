---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Das **`HTMLHtmlElement`**-Interface dient als Wurzelknoten für ein bestimmtes HTML-Dokument. Dieses Objekt erbt die Eigenschaften und Methoden, die im {{domxref("HTMLElement")}}-Interface beschrieben sind.

Sie können das `HTMLHtmlElement`-Objekt für ein bestimmtes Dokument abrufen, indem Sie den Wert der {{domxref("document.documentElement")}}-Eigenschaft lesen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLHtmlElement.version")}} {{deprecated_inline}}
  - : Ein String, der die Version der HTML Document Type Definition (DTD) repräsentiert, die dieses Dokument regelt. Diese Eigenschaft sollte nicht mehr verwendet werden, da sie nicht mehr konform ist. Lassen Sie sie weg.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("html")}}.
