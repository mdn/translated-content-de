---
title: Vendor-Präfix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Browser-Anbieter fügten experimentellen oder nicht standardmäßigen CSS-Eigenschaften und JavaScript-APIs früher Präfixe hinzu, damit Entwickler mit neuen Ideen experimentieren konnten. Dies sollte theoretisch dazu beitragen, dass ihre Experimente nicht versehentlich in Standardanwendungen einfließen und während des Standardisierungsprozesses Webentwickler-Code beschädigen.

Webentwickler verwendeten trotz ihres experimentellen Charakters Präfix-Funktionen auf Produktionswebsites. Dies erschwerte es den Browser-Anbietern, die Kompatibilität zu gewährleisten, während sie an neuen Funktionen arbeiteten. Das Einschließen von Präfix-Funktionen schadete auch kleineren Browser-Anbietern, die gezwungen waren, die Präfixe anderer Browser zu übernehmen, um beliebte Websites korrekt darzustellen.

Heutzutage werden experimentelle Funktionen in Browsern „hinter einem Flag platziert“. Dies ermöglicht es Entwicklern, Browser-Konfigurationen zu ändern, um kommende Funktionen zu testen. Browser fügen nun experimentelle Funktionen hinter von Benutzern gesteuerten Flags oder Einstellungen hinzu. Flags können zu kleineren Spezifikationen hinzugefügt werden, was es ermöglicht, viel schneller einen stabilen Zustand zu erreichen.

## CSS-Präfixe

Die am häufigsten verwendeten CSS-Präfixe, die Sie in älteren Codebasen sehen werden, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser, einschließlich Firefox für iOS; grundsätzlich jeder WebKit- oder Chromium-basierte Browser)
- `-moz-` (Firefox)
- `-o-` (alte, pre-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielnutzung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle bis auf die letzte Zeile entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/transition#browser_compatibility) ohne Vendor-Präfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen haben Browser-Anbieter auch Präfixe für experimentelle APIs verwendet. Wenn ein ganzes Interface experimentell war, dann wurde der Name des Interfaces (aber nicht die Eigenschaften oder Methoden innerhalb) mit einem Präfix versehen. Wenn eine experimentelle Eigenschaft oder Methode zu einem standardisierten Interface hinzugefügt wurde, dann wurde die einzelne Methode oder Eigenschaft mit einem Präfix versehen.

### Interface-Präfixe

Präfixe für Interface-Namen werden in Großbuchstaben geschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); grundsätzlich jeder WebKit- und Chromium-basierte Browser)
- `Moz` (Firefox)
- `O` (ältere, pre-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Eigenschafts- und Methodenpräfixe

Die Präfixe für Eigenschaften und Methoden sind in Kleinbuchstaben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); grundsätzlich jeder WebKit- und Chromium-basierte Browser)
- `moz` (Firefox)
- `o` (alte, pre-WebKit-Versionen von Opera)
- `ms` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielnutzung:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle bis auf die erste Zeile entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Vendor-Präfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` vendor-präfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-präfixierte CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions)
- [Browser-Präfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
