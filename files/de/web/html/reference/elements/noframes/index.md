---
title: "<noframes>: Das Frame-Backup-Element"
slug: Web/HTML/Reference/Elements/noframes
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<noframes>`** [HTML](/de/docs/Web/HTML)-Element stellt Inhalt bereit, der in Browsern angezeigt wird, die das {{HTMLElement("frame")}}-Element nicht unterstützen (oder dessen Unterstützung deaktiviert haben). Obwohl die meisten gängigen Browser Frames unterstützen, gibt es Ausnahmen, darunter spezielle Browser einschließlich einiger mobiler Browser sowie Textbrowser.

Ein `<noframes>`-Element kann alle HTML-Elemente enthalten, die innerhalb des Body eines HTML-Dokuments erlaubt sind, ausgenommen die {{HTMLElement("frameset")}}- und {{HTMLElement("frame")}}-Elemente, da die Verwendung von Frames keinen Sinn macht, wenn sie nicht unterstützt werden.

`<noframes>` kann verwendet werden, um eine Nachricht anzuzeigen, die erklärt, dass der Browser des Benutzers keine Frames unterstützt. Idealerweise sollte es jedoch verwendet werden, um eine alternative Form der Website anzubieten, die keine Frames verwendet, aber dennoch die gleiche oder ähnliche Funktionalität bietet.

> [!NOTE]
> Dieses Element ist veraltet und sollte nicht verwendet werden, da auch die {{HTMLElement("frame")}}- und {{HTMLElement("frameset")}}-Elemente veraltet sind. Wenn überhaupt Frames benötigt werden, sollten sie mithilfe des {{HTMLElement("iframe")}}-Elements dargestellt werden.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Es hat keine weiteren verfügbaren Attribute.

## Beispiel

In diesem Beispiel sehen wir ein Frameset mit zwei Frames. Zudem wird `<noframes>` verwendet, um eine erklärende Nachricht anzuzeigen, falls der {{Glossary("user_agent", "User-Agent")}} keine Frames unterstützt.

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
