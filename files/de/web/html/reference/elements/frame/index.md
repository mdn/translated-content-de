---
title: "`<frame>` HTML-Frame-Element"
short-title: <frame>
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_Header}}

Das **`<frame>`** [HTML](/de/docs/Web/HTML) Element definiert einen bestimmten Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>`-Elements wird nicht empfohlen, da es bestimmte Nachteile wie Leistungsprobleme und mangelnde Zugänglichkeit für Benutzer mit Screenreadern hat. Statt des `<frame>`-Elements wird möglicherweise das {{HTMLElement("iframe")}} bevorzugt.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt das Dokument an, das vom Frame angezeigt wird.
- `name` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut wird verwendet, um Frames zu beschriften. Ohne Beschriftung wird jeder Link im Frame geöffnet, in dem er sich befindet – im nächstgelegenen übergeordneten Frame. Weitere Informationen finden Sie im [`target`](/de/docs/Web/HTML/Reference/Elements/a#target) Attribut.
- `noresize` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut verhindert, dass Benutzer die Frames verändern können.
- `scrolling` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert die Existenz einer Bildlaufleiste. Wenn dieses Attribut nicht verwendet wird, fügt der Browser bei Bedarf eine Bildlaufleiste hinzu. Es gibt zwei Optionen: "yes", um immer eine Bildlaufleiste zu erzwingen, auch wenn sie nicht erforderlich ist, und "no", um eine Bildlaufleiste selbst dann zu verhindern, wenn sie _notwendig_ ist.
- `marginheight` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert die Höhe des Rands zwischen den Frames.
- `marginwidth` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut definiert die Breite des Rands zwischen den Frames.
- `frameborder` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Mit diesem Attribut können Sie den Rahmen eines Frames angeben.

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

Wenn Sie eine andere HTML-Seite in den {{HTMLElement("body")}} eines Dokuments einbetten möchten, verwenden Sie ein {{HTMLElement("iframe")}}-Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
