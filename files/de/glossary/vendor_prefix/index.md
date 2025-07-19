---
title: Vendor-Präfix
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Browser-Anbieter verwendeten früher Präfixe für experimentelle oder nicht standardisierte CSS-Eigenschaften und JavaScript-APIs, damit Entwickler neue Ideen ausprobieren konnten. Dies sollte theoretisch verhindern, dass ihre Experimente unverhältnismäßig genutzt werden und dann den Code von Webentwicklern während des Standardisierungsprozesses beeinträchtigen.

Webentwickler haben Präfix-Features trotz ihres experimentellen Charakters in Produktionswebsites eingebaut. Dies machte es für Browser-Anbieter schwieriger, die Kompatibilität sicherzustellen, während sie an neuen Features arbeiteten. Die Einbeziehung von Präfix-Features schadete auch kleineren Browser-Anbietern, die gezwungen waren, Präfixe anderer Browser hinzuzufügen, um beliebte Websites korrekt darzustellen.

Jetzt werden experimentelle Features in Browsern "hinter einem Flag platziert". Dies ermöglicht es Entwicklern, die Browser-Konfigurationen zu ändern, um bevorstehende Features zu testen. Browser fügen nun experimentelle Funktionen hinter benutzerkontrollierten Flags oder Einstellungen hinzu. Flags können für kleinere Spezifikationen hinzugefügt werden, was eine schnellere Erreichung eines stabilen Zustands ermöglicht.

## CSS-Präfixe

Die gebräuchlichsten CSS-Präfixe, die Sie in älteren Code-Basen sehen werden, sind:

- `-webkit-` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser einschließlich Firefox für iOS; im Grunde jeder auf WebKit oder Chromium basierte Browser)
- `-moz-` (Firefox)
- `-o-` (alte Vor-WebKit-Versionen von Opera)
- `-ms-` (Internet Explorer und Microsoft Edge, vor Chromium)

Beispielverwendung:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Wenn Sie den obigen Code in einer Code-Basis finden, können Sie sicher alles außer der letzten Zeile entfernen. Alle Browser unterstützen [Transitions](/de/docs/Web/CSS/transition#browser_compatibility) ohne Vendor-Präfixe:

```css
transition: all 4s ease;
```

## API-Präfixe

Historisch gesehen verwendeten Browser-Anbieter auch Präfixe für experimentelle APIs. Wenn eine gesamte Schnittstelle experimentell war, wurde der Name der Schnittstelle mit einem Präfix versehen (aber nicht die Eigenschaften oder Methoden innerhalb). Wenn eine experimentelle Eigenschaft oder Methode zu einer standardisierten Schnittstelle hinzugefügt wurde, dann wurde die einzelne Methode oder Eigenschaft mit einem Präfix versehen.

### Schnittstellen-Präfixe

Präfixe für die Schnittstellennamen sind in Großbuchstaben:

- `WebKit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder auf WebKit und Chromium basierte Browser)
- `Moz` (Firefox)
- `O` (Ältere, Vor-WebKit-Versionen von Opera)
- `MS` (Internet Explorer und Microsoft Edge, vor Chromium)

### Eigenschaften- und Methoden-Präfixe

Die Präfixe für Eigenschaften und Methoden sind in Kleinbuchstaben:

- `webkit` (Chrome, Safari, neuere Versionen von Opera und Edge, fast alle iOS-Browser (einschließlich Firefox für iOS); im Grunde jeder auf WebKit und Chromium basierte Browser)
- `moz` (Firefox)
- `o` (Alte, Vor-WebKit-Versionen von Opera)
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

Wenn Sie den obigen Code in einer Code-Basis finden, können Sie sicher alles außer der ersten Zeile entfernen. Alle Browser unterstützen [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) ohne Vendor-Präfixe und ohne `window`:

```js
requestAnimationFrame(callback);
```

## Siehe auch

- [`-moz-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/de/docs/Web/CSS/WebKit_Extensions)
- [Browser-Prefixe](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) auf Wikipedia
