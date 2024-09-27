---
title: <frame>
slug: Web/HTML/Element/frame
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<frame>`** [HTML](/de/docs/Web/HTML)-Element definiert einen bestimmten Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>`-Elements wird nicht empfohlen, da es einige Nachteile wie Leistungsprobleme und mangelnde Barrierefreiheit für Benutzer mit Screenreadern gibt. Statt des `<frame>`-Elements kann ein {{HTMLElement("iframe")}} bevorzugt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : Dieses Attribut gibt das Dokument an, das im Frame angezeigt wird.
- `name` {{Deprecated_Inline}}
  - : Dieses Attribut wird zur Kennzeichnung von Frames verwendet. Ohne Kennzeichnung öffnet sich jeder Link im Frame, in dem er sich befindet – dem nächstgelegenen übergeordneten Frame. Weitere Informationen finden Sie im [`target`](/de/docs/Web/HTML/Element/a#target)-Attribut.
- `noresize` {{Deprecated_Inline}}
  - : Dieses Attribut verhindert, dass Benutzer die Größe von Frames ändern können.
- `scrolling` {{Deprecated_Inline}}
  - : Dieses Attribut definiert das Vorhandensein einer Bildlaufleiste. Wenn dieses Attribut nicht verwendet wird, fügt der Browser bei Bedarf eine Bildlaufleiste hinzu. Es gibt zwei Optionen: "yes", um eine Bildlaufleiste zu erzwingen, auch wenn sie nicht erforderlich ist, und "no", um keine Bildlaufleiste zu erzwingen, selbst wenn sie _erforderlich_ ist.
- `marginheight` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Höhe des Abstands zwischen Frames.
- `marginwidth` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Breite des Abstands zwischen Frames.
- `frameborder` {{Deprecated_Inline}}
  - : Dieses Attribut erlaubt es Ihnen, einen Rahmen für den Frame festzulegen.

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
