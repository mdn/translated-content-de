---
title: <frame>
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

Das **`<frame>`** [HTML](/de/docs/Web/HTML)-Element definiert einen bestimmten Bereich, in dem ein anderes HTML-Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}} verwendet werden.

Die Verwendung des `<frame>`-Elements wird nicht empfohlen, da es bestimmte Nachteile wie Leistungsprobleme und mangelnde Zugänglichkeit für Benutzer mit Screenreadern mit sich bringt. Anstelle des `<frame>`-Elements kann das {{HTMLElement("iframe")}} bevorzugt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : Dieses Attribut gibt das Dokument an, das vom Rahmen angezeigt wird.
- `name` {{Deprecated_Inline}}
  - : Dieses Attribut wird zur Benennung von Frames verwendet. Ohne Benennung öffnet jeder Link in dem Frame, in dem er sich befindet – dem nächsten übergeordneten Frame. Weitere Informationen finden Sie im [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut.
- `noresize` {{Deprecated_Inline}}
  - : Dieses Attribut verhindert, dass Benutzer Frames anpassen können.
- `scrolling` {{Deprecated_Inline}}
  - : Dieses Attribut definiert das Vorhandensein einer Scrollleiste. Wenn dieses Attribut nicht verwendet wird, fügt der Browser bei Bedarf eine Scrollleiste hinzu. Es gibt zwei Optionen: "yes" für eine erzwungene Scrollleiste, auch wenn sie nicht erforderlich ist, und "no" für keine Scrollleiste, selbst wenn sie erforderlich ist.
- `marginheight` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Höhe des Randes zwischen den Frames.
- `marginwidth` {{Deprecated_Inline}}
  - : Dieses Attribut definiert die Breite des Randes zwischen den Frames.
- `frameborder` {{Deprecated_Inline}}
  - : Dieses Attribut erlaubt es Ihnen, den Rahmen des Frames festzulegen.

## Beispiel

### Ein Frameset-Dokument

Ein Frameset-Dokument enthält ein {{HTMLElement("frameset")}}-Element anstelle eines {{HTMLElement("body")}}-Elements. Die `<frame>`-Elemente werden innerhalb des `<frameset>` platziert.

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
