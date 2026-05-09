---
title: "`<frameset>` HTML-Frameset-Element"
short-title: <frameset>
slug: Web/HTML/Reference/Elements/frameset
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_header}}

Das **`<frameset>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um {{HTMLElement("frame")}}-Elemente zu enthalten.

> [!NOTE]
> Da die Verwendung von Frames zugunsten von {{HTMLElement("iframe")}} nun nicht mehr empfohlen wird, wird dieses Element normalerweise nicht von modernen Websites verwendet.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cols` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt die Anzahl und Größe der horizontalen Bereiche in einem Frameset an.
- `rows` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt die Anzahl und Größe der vertikalen Bereiche in einem Frameset an.

## Beispiel

### Ein Frameset-Dokument

Ein Frameset-Dokument besitzt ein `<frameset>`-Element anstelle eines {{HTMLElement("body")}}-Elements. Die {{HTMLElement("frame")}}-Elemente werden innerhalb des `<frameset>` platziert.

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

Wenn Sie eine andere HTML-Seite in die {{HTMLElement("body")}} eines Dokuments einbetten möchten, verwenden Sie ein {{HTMLElement("iframe")}}-Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
