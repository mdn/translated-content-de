---
title: Vendor Prefix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{GlossarySidebar}}

Browserhersteller fügten früher Präfixe zu experimentellen oder nicht standardisierten CSS-Eigenschaften und JavaScript-APIs hinzu, damit Entwickler neue Ideen ausprobieren konnten. Dies half theoretisch zu verhindern, dass sich Entwickler auf ihre Experimente verlassen und dadurch der Code von Webentwicklern während des Standardisierungsprozesses beeinträchtigt wurde.

Webentwickler fügten präfixierte Funktionen auf Produktionswebsites ein, trotz ihrer experimentellen Natur. Dies erschwerte es den Browserherstellern, die Kompatibilität zu gewährleisten, während sie an neuen Funktionen arbeiteten. Die Einbeziehung präfixierter Funktionen schadete auch kleineren Browserherstellern, die gezwungen waren, die Präfixe anderer Browser hinzuzufügen, um beliebte Websites korrekt darzustellen.

Heutzutage werden experimentelle Funktionen in Browsern "hinter einer Flagge" versteckt. Dies ermöglicht es Entwicklern, Browserkonfigurationen zu ändern, um kommende Funktionen zu testen. Browser fügen nun experimentelle Funktionen hinter benutzerkontrollierten Flags oder Einstellungen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, was es ermöglicht, einen stabilen Zustand viel schneller zu erreichen.

## CSS-Präfixe

Die am häufigsten vorkommenden CSS-Präfixe, die Sie in älteren Codebasen sehen, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; grundsätzlich jeder auf WebKit oder Chromium basierende Browser)
- `-moz-` (Firefox)
- `-o-` (alte, vor-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispiel für die Nutzung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle Zeilen bis auf die letzte entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/transition#browser_compatibility) ohne Vendor-Präfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen haben Browserhersteller auch Präfixe für experimentelle APIs verwendet. Wenn ein ganzes Interface experimentell war, wurde der Name des Interfaces mit einem Präfix versehen (aber nicht die Eigenschaften oder Methoden darin). Wenn eine experimentelle Eigenschaft oder Methode zu einem standardisierten Interface hinzugefügt wurde, wurde die einzelne Methode oder Eigenschaft mit einem Präfix versehen.

### Interface-Präfixe

Präfixe für Interfacenamen sind großgeschrieben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); grundsätzlich jeder WebKit- und Chromium-basierte Browser)
- `Moz` (Firefox)
- `O` (Ältere, vor-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Präfixe für Eigenschaften und Methoden

Die Präfixe für Eigenschaften und Methoden sind kleingeschrieben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); grundsätzlich jeder WebKit- und Chromium-basierte Browser)
- `moz` (Firefox)
- `o` (Alte, vor-WebKit-Versionen von Opera)
- `ms` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispiel für die Nutzung:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

Wenn Sie den obigen Code in einer Codebasis finden, können Sie sicher alle Zeilen bis auf die erste entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Vendor-Präfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/WebKit_Extensions)
- [Browserpräfixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
