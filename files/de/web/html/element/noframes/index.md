---
title: "<noframes>: Das Frame Fallback-Element"
slug: Web/HTML/Element/noframes
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element bietet Inhalte für Browser an, die das {{HTMLElement("frame")}}-Element nicht unterstützen oder die Unterstützung dafür deaktiviert haben. Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, darunter bestimmte Spezialbrowser, einige mobile Browser sowie Textmodus-Browser.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die im Body eines HTML-Dokuments erlaubt sind, mit Ausnahme der {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elemente, da die Verwendung von Frames, wenn diese nicht unterstützt werden, keinen Sinn ergibt.

`<noframes>` kann verwendet werden, um eine Nachricht anzuzeigen, die erklärt, dass der Browser des Nutzers keine Frames unterstützt. Idealerweise sollte es jedoch verwendet werden, um eine alternative Version der Website anzubieten, die keine Frames nutzt, aber dennoch die gleiche oder eine ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da auch die {{HTMLElement("frame")}}- und {{HTMLElement("frameset")}}-Elemente veraltet sind. Wenn Frames überhaupt benötigt werden, sollten sie mit dem {{HTMLElement("iframe")}}-Element präsentiert werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Es gibt keine weiteren verfügbaren Attribute.

## Beispiel

In diesem Beispiel sehen wir ein Frameset mit zwei Frames. Zusätzlich wird `<noframes>` verwendet, um eine erklärende Nachricht zu präsentieren, falls der [Benutzeragent](/de/docs/Glossary/user_agent) keine Frames unterstützt.

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
