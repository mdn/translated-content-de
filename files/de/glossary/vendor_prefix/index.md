---
title: Anbieterpräfix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Browseranbieter fügten früher Präfixe zu experimentellen oder nicht standardisierten CSS-Eigenschaften und JavaScript-APIs hinzu, damit Entwickler neue Ideen ausprobieren konnten. Dies sollte theoretisch verhindern, dass ihre Experimente übernommen und dann während des Standardisierungsprozesses den Code der Webentwickler zerstören.

Webentwickler schlossen jedoch gepraffixte Funktionen in Produktionswebseiten ein, trotz ihrer experimentellen Natur. Dadurch wurde es für Browseranbieter schwieriger, Kompatibilität beim Arbeiten an neuen Funktionen zu gewährleisten. Das Einbeziehen gepraffixter Funktionen schadete auch kleineren Browseranbietern, die gezwungen waren, die Präfixe anderer Browser hinzuzufügen, um beliebte Webseiten korrekt darzustellen.

Heute werden experimentelle Funktionen in Browsern „hinter einer Flagge“ platziert. Dies ermöglicht es Entwicklern, die Browserkonfigurationen zu ändern, um kommende Funktionen zu testen. Browser fügen jetzt experimentelle Funktionen hinter benutzerkontrollierte Flags oder Präferenzen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, um einen stabilen Zustand viel schneller zu erreichen.

## CSS-Präfixe

Die häufigsten Browser-CSS-Präfixe, die Sie in älteren Codebasen sehen werden, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; im Wesentlichen jeder WebKit- oder Chromium-basierte Browser)
- `-moz-` (Firefox)
- `-o-` (alte vor-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielverwendung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle bis auf die letzte Zeile entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/transition#browser_compatibility) ohne Anbieterpräfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen haben Browseranbieter auch Präfixe für experimentelle APIs verwendet. Wenn eine gesamte Schnittstelle experimentell war, wurde der Name der Schnittstelle vorangestellt (aber nicht die Eigenschaften oder Methoden darin). Wenn eine experimentelle Eigenschaft oder Methode zu einer standardisierten Schnittstelle hinzugefügt wurde, wurde die einzelne Methode oder Eigenschaft vorangestellt.

### Schnittstellenpräfixe

Präfixe für Schnittstellennamen sind großgeschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Wesentlichen jeder WebKit- und Chromium-basierte Browser)
- `Moz` (Firefox)
- `O` (Ältere, vor-WebKit, Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Eigenschafts- und Methodenpräfixe

Die Präfixe für Eigenschaften und Methoden sind kleingeschrieben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Wesentlichen jeder WebKit- und Chromium-basierte Browser)
- `moz` (Firefox)
- `o` (Alte, vor-WebKit, Versionen von Opera)
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

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle bis auf die erste Zeile entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Anbieterpräfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` anbieterpräfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- [`-webkit-` anbieterpräfixierte CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- [Browser-Präfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
