---
title: <frame>
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<frame>`** [HTML](/de/docs/Web/HTML)-Element definiert einen speziellen Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>`-Elements wird aufgrund bestimmter Nachteile wie Leistungsprobleme und mangelnde Zugänglichkeit für Benutzer mit Screenreadern nicht empfohlen. Anstelle des `<frame>`-Elements kann das {{HTMLElement("iframe")}} bevorzugt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : Dieses Attribut gibt das Dokument an, das im Frame angezeigt wird.
- `name` {{Deprecated_Inline}}
  - : Dieses Attribut wird zur Beschriftung von Frames verwendet. Ohne Beschriftung wird jeder Link im eigenen Frame geöffnet – im nächstgelegenen übergeordneten Frame. Siehe das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut für weitere Informationen.
- `noresize` {{Deprecated_Inline}}
  - : Dieses Attribut verhindert die Größenänderung von Frames durch Benutzer.
- `scrolling` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Existenz einer Scrollbar. Wenn dieses Attribut nicht verwendet wird, fügt der Browser bei Bedarf eine Scrollbar hinzu. Es gibt zwei Auswahlmöglichkeiten: "yes" um eine Scrollbar zu erzwingen, selbst wenn sie nicht notwendig ist, und "no" um keine Scrollbar zu erzwingen, selbst wenn sie _notwendig_ ist.
- `marginheight` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Höhe des Abstands zwischen Frames.
- `marginwidth` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Breite des Abstands zwischen Frames.
- `frameborder` {{Deprecated_Inline}}
  - : Dieses Attribut erlaubt Ihnen, den Rahmen eines Frames zu spezifizieren.

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
