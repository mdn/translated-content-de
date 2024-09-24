---
title: Anbieterpräfix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{GlossarySidebar}}

Browseranbieter fügten experimentellen oder nicht standardisierten CSS-Eigenschaften und JavaScript-APIs Präfixe hinzu, damit Entwickler mit neuen Ideen experimentieren konnten. Dies sollte theoretisch verhindern, dass ihre Experimente übernommen und der Code von Webentwicklern während des Standardisierungsprozesses beschädigt wird.

Webentwickler haben dennoch Präfixe für experimentelle Funktionen auf Produktionswebseiten verwendet, trotz ihrer experimentellen Natur. Dies machte es für Browseranbieter schwieriger, die Kompatibilität sicherzustellen, während sie an neuen Funktionen arbeiteten. Die Einbeziehung von Präfixen beeinträchtigte auch kleinere Browseranbieter, die gezwungen waren, die Präfixe anderer Browser hinzuzufügen, um populäre Webseiten korrekt darzustellen.

Heutzutage werden experimentelle Funktionen in Browsern "hinter einem Flag" verborgen. Dies ermöglicht es Entwicklern, die Browserkonfigurationen zu ändern, um kommende Funktionen zu testen. Browser fügen nun experimentelle Funktionen hinter benutzerkontrollierten Flags oder Präferenzen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, wodurch ein stabiler Zustand viel schneller erreicht werden kann.

## CSS-Präfixe

Die häufigsten CSS-Präfixe, die Sie in älteren Code-Basen finden, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; im Grunde jeder WebKit- oder Chromium-basierte Browser)
- `-moz-` (Firefox)
- `-o-` (alte, vor-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielverwendung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Code-Basis finden, können Sie alle Zeilen außer der letzten gefahrlos entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/transition#browser_compatibility) ohne Anbieterpräfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen haben Browseranbieter auch Präfixe für experimentelle APIs verwendet. Wenn eine gesamte Schnittstelle experimentell war, wurde der Name der Schnittstelle mit einem Präfix versehen (jedoch nicht die Eigenschaften oder Methoden innerhalb). Wenn eine experimentelle Eigenschaft oder Methode zu einer standardisierten Schnittstelle hinzugefügt wurde, wurde die einzelne Methode oder Eigenschaft mit einem Präfix versehen.

### Schnittstellenpräfixe

Präfixe für Schnittstellennamen werden großgeschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder WebKit- und Chromium-basierte Browser)
- `Moz` (Firefox)
- `O` (Ältere, vor-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Eigenschaften- und Methodenpräfixe

Die Präfixe für Eigenschaften und Methoden werden kleingeschrieben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder WebKit- und Chromium-basierte Browser)
- `moz` (Firefox)
- `o` (Alte, vor-WebKit-Versionen von Opera)
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

Wenn Sie den obigen Code in einer Code-Basis finden, können Sie alle Zeilen außer der ersten gefahrlos entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Anbieterpräfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/WebKit_Extensions)
- [Browser-Präfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
