---
title: "`<noframes>` HTML Frame Fallback-Element"
short-title: <noframes>
slug: Web/HTML/Reference/Elements/noframes
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element stellt Inhalte bereit, die in Browsern präsentiert werden, die das {{HTMLElement("frame")}}-Element nicht unterstützen (oder bei denen die Unterstützung dafür deaktiviert ist). Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, einschließlich bestimmter spezieller Browser, darunter einige mobile Browser sowie Textmodus-Browser.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die im Body eines HTML-Dokuments erlaubt sind, mit Ausnahme der {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elemente, da die Verwendung von Frames, wenn sie nicht unterstützt werden, keinen Sinn ergibt.

`<noframes>` kann verwendet werden, um eine Nachricht anzuzeigen, die erklärt, dass der Browser des Nutzers keine Frames unterstützt, sollte idealerweise jedoch verwendet werden, um eine alternative Form der Website zu präsentieren, die keine Frames verwendet, jedoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da die Elemente {{HTMLElement("frame")}} und {{HTMLElement("frameset")}} ebenfalls veraltet sind. Wenn Frames überhaupt benötigt werden, sollten sie mit dem {{HTMLElement("iframe")}}-Element präsentiert werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Es hat keine anderen verfügbaren Attribute.

## Beispiel

In diesem Beispiel sehen wir ein `frameset` mit zwei `frames`. Zusätzlich wird `<noframes>` verwendet, um eine erläuternde Nachricht zu präsentieren, wenn der {{Glossary("user_agent", "User-Agent")}} keine Frames unterstützt.

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
