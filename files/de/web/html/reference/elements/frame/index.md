---
title: "`<frame>` HTML-Frame-Element"
short-title: <frame>
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<frame>`**-[HTML](/de/docs/Web/HTML)-Element definiert einen Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>`-Elements wird nicht empfohlen, da es bestimmte Nachteile wie Leistungsprobleme und fehlende Barrierefreiheit für Benutzer mit Screenreadern aufweist. Anstelle des `<frame>`-Elements wird möglicherweise das {{HTMLElement("iframe")}} bevorzugt.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt das Dokument an, das im Frame angezeigt wird.
- `name` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut wird zum Beschriften von Frames verwendet. Ohne Beschriftung öffnet sich jeder Link im Frame, in dem er sich befindet – im nächstgelegenen übergeordneten Frame. Weitere Informationen finden Sie im [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut.
- `noresize` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut verhindert das Größenänderung von Frames durch Benutzer.
- `scrolling` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert das Vorhandensein einer Bildlaufleiste. Wenn dieses Attribut nicht verwendet wird, fügt der Browser, wenn nötig, eine Bildlaufleiste hinzu. Es gibt zwei Möglichkeiten: "yes", um eine Bildlaufleiste zu erzwingen, auch wenn sie nicht erforderlich ist, und "no", um keine Bildlaufleiste zu erzwingen, auch wenn sie erforderlich ist.
- `marginheight` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert die Höhe des Rahmens zwischen den Frames.
- `marginwidth` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert die Breite des Rahmens zwischen den Frames.
- `frameborder` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut erlaubt es Ihnen, einen Rahmen für das Frame anzugeben.

## Beispiel

### Ein Frameset-Dokument

Ein Frameset-Dokument hat ein {{HTMLElement("frameset")}}-Element anstelle eines {{HTMLElement("body")}}-Elements. Die `<frame>`-Elemente werden innerhalb des `<frameset>` platziert.

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

Wenn Sie eine andere HTML-Seite in das {{HTMLElement("body")}} eines Dokuments einbetten möchten, verwenden Sie ein {{HTMLElement("iframe")}}-Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
