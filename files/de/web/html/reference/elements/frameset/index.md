---
title: <frameset>
slug: Web/HTML/Reference/Elements/frameset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_header}}

Das **`<frameset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um {{HTMLElement("frame")}}-Elemente zu enthalten.

> [!NOTE]
> Da die Verwendung von Frames zugunsten der Nutzung von {{HTMLElement("iframe")}} nun nicht mehr empfohlen wird, wird dieses Element von modernen Websites typischerweise nicht mehr verwendet.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cols` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Anzahl und Größe der horizontalen Bereiche in einem Frameset an.
- `rows` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Anzahl und Größe der vertikalen Bereiche in einem Frameset an.

## Beispiel

### Ein Frameset-Dokument

Ein Frameset-Dokument hat ein `<frameset>`-Element anstelle eines {{HTMLElement("body")}}-Elements. Die {{HTMLElement("frame")}}-Elemente werden innerhalb des `<frameset>`-Elements platziert.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="50%, 50%">
    <frame
      src="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe" />
    <frame
      src="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frame" />
  </frameset>
</html>
```

Wenn Sie eine andere HTML-Seite in den {{HTMLElement("body")}} eines Dokuments einbetten möchten, verwenden Sie ein {{HTMLElement("iframe")}}-Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
