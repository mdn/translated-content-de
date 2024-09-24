---
title: "<noframes>: Das Frame-Fallback-Element"
slug: Web/HTML/Element/noframes
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element stellt Inhalte bereit, die in Browsern angezeigt werden sollen, die das {{HTMLElement("frame")}}-Element nicht unterstützen (oder die Unterstützung dafür deaktiviert haben). Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, einschließlich bestimmter Spezial-Browser, zu denen einige mobile Browser sowie Textmodus-Browser gehören.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die im Body eines HTML-Dokuments zulässig sind, mit Ausnahme der {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elemente, da die Verwendung von Frames keinen Sinn macht, wenn sie nicht unterstützt werden.

`<noframes>` kann verwendet werden, um eine Nachricht zu präsentieren, die erklärt, dass der Browser des Benutzers keine Frames unterstützt. Idealerweise sollte dies jedoch genutzt werden, um eine alternative Version der Website anzubieten, die keine Frames verwendet, aber dennoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da die {{HTMLElement("frame")}}- und {{HTMLElement("frameset")}}-Elemente ebenfalls veraltet sind. Wenn Frames überhaupt benötigt werden, sollten sie mit dem {{HTMLElement("iframe")}}-Element dargestellt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Es stehen keine weiteren Attribute zur Verfügung.

## Beispiel

In diesem Beispiel sehen wir ein Frameset mit zwei Frames. Zusätzlich wird `<noframes>` verwendet, um eine erklärende Nachricht anzuzeigen, falls der {{Glossary("user agent")}} keine Frames unterstützt.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Dokument-Metadaten kommen hier hin -->
  </head>
  <frameset rows="45%, 55%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    <noframes>
      <p>
        Es scheint, dass Ihr Browser keine Frames unterstützt oder so konfiguriert ist, dass diese nicht erlaubt sind.
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
