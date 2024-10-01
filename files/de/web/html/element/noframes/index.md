---
title: "<noframes>: Das Frame-Fallback-Element"
slug: Web/HTML/Element/noframes
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element stellt Inhalte bereit, die in Browsern angezeigt werden, die das {{HTMLElement("frame")}}-Element nicht unterstützen (oder dessen Unterstützung deaktiviert haben). Obwohl die meisten häufig verwendeten Browser Frames unterstützen, gibt es Ausnahmen, einschließlich bestimmter Spezialbrowser, darunter einige mobile Browser sowie Textmodus-Browser.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die im Hauptteil eines HTML-Dokuments zulässig sind, mit Ausnahme der Elemente {{HTMLElement("frameset")}} und {{HTMLElement("frame")}}, da die Verwendung von Frames, wenn sie nicht unterstützt werden, keinen Sinn ergibt.

`<noframes>` kann verwendet werden, um eine Nachricht anzuzeigen, die erklärt, dass der Browser des Benutzers keine Frames unterstützt. Idealerweise sollte es jedoch dazu verwendet werden, eine alternative Form der Website bereitzustellen, die keine Frames verwendet, aber dennoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da die Elemente {{HTMLElement("frame")}} und {{HTMLElement("frameset")}} ebenfalls veraltet sind. Wenn Frames überhaupt benötigt werden, sollten sie mithilfe des {{HTMLElement("iframe")}}-Elements bereitgestellt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Es sind keine weiteren Attribute verfügbar.

## Beispiel

In diesem Beispiel sehen wir ein Frameset mit zwei Frames. Zusätzlich wird `<noframes>` verwendet, um eine erklärende Nachricht anzuzeigen, falls der {{Glossary("user_agent", "user agent")}} Frames nicht unterstützt.

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
