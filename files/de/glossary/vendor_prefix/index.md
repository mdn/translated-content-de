---
title: Vendorpräfix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Browseranbieter verwendeten früher Präfixe für experimentelle oder nicht standardisierte CSS-Eigenschaften und JavaScript-APIs, damit Entwickler mit neuen Ideen experimentieren konnten. Dies half theoretisch, zu verhindern, dass diese Experimente als zuverlässig angesehen wurden und während des Standardisierungsprozesses den Code von Webentwicklern beeinträchtigten.

Webentwickler integrierten trotz ihrer experimentellen Natur präfix-behaftete Funktionen in Produktionswebsites. Dies erschwerte es den Browseranbietern, die Kompatibilität zu gewährleisten, während sie an neuen Funktionen arbeiteten. Das Einbeziehen solcher Funktionen schadete auch kleineren Browseranbietern, die gezwungen waren, die Präfixe anderer Browser hinzuzufügen, um beliebte Websites korrekt darzustellen.

Heute werden experimentelle Funktionen in Browsern "hinter einem Flag" versteckt. Dies ermöglicht es Entwicklern, die Browserkonfiguration zu ändern, um kommende Funktionen zu testen. Browser fügen experimentelle Funktionen jetzt hinter von Benutzern kontrollierten Flags oder Einstellungen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, was es ermöglicht, schneller einen stabilen Zustand zu erreichen.

## CSS-Präfixe

Die häufigsten CSS-Präfixe, die Sie in älteren Codebasen sehen werden, umfassen:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; im Wesentlichen alle WebKit- oder Chromium-basierten Browser)
- `-moz-` (Firefox)
- `-o-` (alte, vor-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge vor Chromium)

Beispielhafte Verwendung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie alle bis auf die letzte Zeile sicher entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/Reference/Properties/transition#browser_compatibility) ohne Vendorpräfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen haben Browseranbieter auch Präfixe für experimentelle APIs verwendet. Wenn eine gesamte Schnittstelle experimentell war, wurde der Name der Schnittstelle mit einem Präfix versehen (aber nicht die darin enthaltenen Eigenschaften oder Methoden). Wenn eine experimentelle Eigenschaft oder Methode zu einer standardisierten Schnittstelle hinzugefügt wurde, wurde die einzelne Methode oder Eigenschaft mit einem Präfix versehen.

### Schnittstellen-Präfixe

Präfixe für Schnittstellennamen sind großgeschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Wesentlichen alle WebKit- und Chromium-basierten Browser)
- `Moz` (Firefox)
- `O` (ältere, vor-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge vor Chromium)

### Eigenschaften- und Methoden-Präfixe

Die Präfixe für Eigenschaften und Methoden sind kleingeschrieben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Wesentlichen alle WebKit- und Chromium-basierten Browser)
- `moz` (Firefox)
- `o` (alte, vor-WebKit-Versionen von Opera)
- `ms` (Internet Explorer und Microsoft Edge vor Chromium)

Beispielhafte Verwendung:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie alle bis auf die erste Zeile sicher entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Vendorpräfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [Browserpräfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
