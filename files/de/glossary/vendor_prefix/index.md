---
title: Vendor Prefix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{GlossarySidebar}}

Browser-Anbieter fügten früher Präfixe zu experimentellen oder nicht standardisierten CSS-Eigenschaften und JavaScript-APIs hinzu, damit Entwickler neue Ideen ausprobieren konnten. Dies sollte theoretisch verhindern, dass ihre Experimente verwendet werden und dann während des Standardisierungsprozesses der Code von Webentwicklern beeinträchtigt wird.

Webentwickler haben präfixierte Funktionen auf Produktionswebsites eingebunden, trotz ihres experimentellen Charakters. Dies erschwerte es den Browser-Anbietern, die Kompatibilität zu gewährleisten, während sie an neuen Funktionen arbeiteten. Das Einbeziehen präfixierter Funktionen schadete auch kleineren Browser-Anbietern, die gezwungen waren, Präfixe anderer Browser hinzuzufügen, um beliebte Websites korrekt anzuzeigen.

Heute werden experimentelle Funktionen in Browsern "hinter eine Flagge" gesetzt. Dies ermöglicht es Entwicklern, die Konfiguration von Browsern zu ändern, um kommende Funktionen zu testen. Browser fügen experimentelle Funktionen hinter von Benutzern gesteuerten Flags oder Einstellungen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, was es ermöglicht, einen stabilen Zustand viel schneller zu erreichen.

## CSS-Präfixe

Die häufigsten CSS-Präfixe von Browsern, die Sie in älteren Codebasen sehen werden, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; im Grunde jeder WebKit- oder Chromium-basierte Browser)
- `-moz-` (Firefox)
- `-o-` (alte pre-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielverwendung:

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

Historisch gesehen haben Browser-Anbieter auch Präfixe für experimentelle APIs verwendet. Wenn eine gesamte Schnittstelle experimentell war, wurde der Name der Schnittstelle präfixiert (aber nicht die Eigenschaften oder Methoden innerhalb). Wenn eine experimentelle Eigenschaft oder Methode zu einer standardisierten Schnittstelle hinzugefügt wurde, wurde die einzelne Methode oder Eigenschaft präfixiert.

### Schnittstellen-Präfixe

Präfixe für Schnittstellennamen sind großgeschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder WebKit- und Chromium-basierte Browser)
- `Moz` (Firefox)
- `O` (ältere, pre-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Eigenschaften- und Methoden-Präfixe

Die Präfixe für Eigenschaften und Methoden sind kleingeschrieben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder WebKit- und Chromium-basierte Browser)
- `moz` (Firefox)
- `o` (alte, pre-WebKit-Versionen von Opera)
- `ms` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielverwendung:

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

- [`-moz-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/WebKit_Extensions)
- [Browser-Präfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
