---
title: "`<frame>` HTML-Frame-Element"
short-title: <frame>
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{Deprecated_Header}}

Das **`<frame>`** [HTML](/de/docs/Web/HTML) Element definiert einen bestimmten Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>` Elements wird aufgrund bestimmter Nachteile, wie Leistungseinbußen und fehlender Barrierefreiheit für Nutzer mit Screenreadern, nicht empfohlen. Statt des `<frame>` Elements kann ein {{HTMLElement("iframe")}} vorzuziehen sein.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : Dieses Attribut gibt das Dokument an, das im Frame angezeigt wird.
- `name` {{Deprecated_Inline}}
  - : Dieses Attribut wird zur Bezeichnung von Frames verwendet. Ohne Bezeichnung öffnet sich jeder Link im Frame, in dem er sich befindet – dem nächsten übergeordneten Frame. Weitere Informationen finden Sie im [`target`](/de/docs/Web/HTML/Reference/Elements/a#target) Attribut.
- `noresize` {{Deprecated_Inline}}
  - : Dieses Attribut verhindert, dass Benutzer die Größe der Frames ändern.
- `scrolling` {{Deprecated_Inline}}
  - : Dieses Attribut definiert das Vorhandensein einer Bildlaufleiste. Ohne dieses Attribut fügt der Browser eine Bildlaufleiste hinzu, wenn es notwendig ist. Es gibt zwei Optionen: "yes", um eine Bildlaufleiste zu erzwingen, auch wenn sie nicht notwendig ist, und "no", um keine Bildlaufleiste zu erzwingen, auch wenn sie notwendig _ist_.
- `marginheight` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Höhe des Randes zwischen den Frames.
- `marginwidth` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Breite des Randes zwischen den Frames.
- `frameborder` {{Deprecated_Inline}}
  - : Dieses Attribut ermöglicht es Ihnen, den Rahmen eines Frames zu spezifizieren.

## Beispiel

### Ein Frameset-Dokument

Ein Frameset-Dokument hat ein {{HTMLElement("frameset")}} Element anstelle eines {{HTMLElement("body")}} Elements. Die `<frame>` Elemente werden innerhalb des `<frameset>` platziert.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="400, 500">
    <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  </frameset>
</html>
```

Wenn Sie eine andere HTML-Seite in den {{HTMLElement("body")}} eines Dokuments einbetten möchten, verwenden Sie ein {{HTMLElement("iframe")}} Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
