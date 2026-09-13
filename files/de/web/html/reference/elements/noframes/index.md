---
title: "`<noframes>` HTML-Frame-Fallback-Element"
short-title: <noframes>
slug: Web/HTML/Reference/Elements/noframes
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element stellt Inhalte für Browser bereit, die das {{HTMLElement("frame")}}-Element nicht unterstützen oder bei denen die Unterstützung deaktiviert ist. Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, darunter bestimmte Spezial-Browser, einschließlich einiger mobiler Browser und Textmodus-Browser.

Ein `<noframes>`-Element kann beliebige HTML-Elemente enthalten, die innerhalb des Body eines HTML-Dokuments erlaubt sind, mit Ausnahme der {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elemente, da die Verwendung von Frames, wenn sie nicht unterstützt werden, keinen Sinn ergibt.

`<noframes>` kann verwendet werden, um eine Nachricht anzuzeigen, die erklärt, dass der Browser des Benutzers keine Frames unterstützt. Ideal ist jedoch, es zu verwenden, um eine alternative Version der Website bereitzustellen, die keine Frames verwendet, aber dennoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da die {{HTMLElement("frame")}}- und {{HTMLElement("frameset")}}-Elemente ebenfalls veraltet sind. Wenn Frames überhaupt benötigt werden, sollten sie mit dem {{HTMLElement("iframe")}}-Element dargestellt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Es hat keine weiteren verfügbaren Attribute.

## Beispiel

In diesem Beispiel sehen wir ein frameset mit zwei Frames. Zusätzlich wird `<noframes>` verwendet, um eine erklärende Nachricht anzuzeigen, falls der {{Glossary("user_agent", "User-Agent")}} keine Frames unterstützt.

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
