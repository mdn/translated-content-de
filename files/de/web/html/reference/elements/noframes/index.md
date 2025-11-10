---
title: "<noframes>: Das Frame-Fallback-Element"
slug: Web/HTML/Reference/Elements/noframes
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element bietet Inhalte, die in Browsern präsentiert werden sollen, die das {{HTMLElement("frame")}}-Element nicht unterstützen oder die Unterstützung dafür deaktiviert haben. Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, einschließlich bestimmter Spezial-Browser, wie einige mobile Browser, sowie Textmodus-Browser.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die im `<body>` eines HTML-Dokuments erlaubt sind, außer den {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elementen, da die Verwendung von Frames, wenn sie nicht unterstützt werden, keinen Sinn ergibt.

`<noframes>` kann verwendet werden, um eine Nachricht zu präsentieren, die erklärt, dass der Browser des Nutzers keine Frames unterstützt. Idealerweise sollte es jedoch verwendet werden, um eine alternative Form der Website zu bieten, die keine Frames verwendet, aber dennoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da die {{HTMLElement("frame")}}- und {{HTMLElement("frameset")}}-Elemente ebenfalls veraltet sind. Falls Frames benötigt werden, sollten sie mit dem {{HTMLElement("iframe")}}-Element präsentiert werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Es stehen keine weiteren Attribute zur Verfügung.

## Beispiel

In diesem Beispiel sehen wir ein Frameset mit zwei Frames. Zusätzlich wird `<noframes>` verwendet, um eine erläuternde Nachricht zu präsentieren, wenn der {{Glossary("user_agent", "User-Agent")}} keine Frames unterstützt.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset rows="45%, 55%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    <noframes>
      <p>
        It seems your browser does not support frames or is configured to not
        allow them.
      </p>
    </noframes>
  </frameset>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}
