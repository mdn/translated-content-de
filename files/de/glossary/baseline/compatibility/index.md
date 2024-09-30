---
title: Baseline (Kompatibilität)
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: 70aa041ebd7e31df76818bc8459f60659fe94c0c
---

{{GlossarySidebar}}

**Baseline** identifiziert die Verfügbarkeit von Webplattform-Funktionen in beliebten Browsern, einschließlich APIs, CSS-Eigenschaften und JavaScript-Syntax. Baseline beschreibt Web-Funktionen als entweder weit verbreitet oder neu verfügbar. Funktionen, die die Baseline-Kriterien nicht erfüllen, gelten als eingeschränkt verfügbar.

Baseline betrachtet die Unterstützung in den folgenden Browsern:

- Apple Safari (iOS)
- Apple Safari (macOS)
- Google Chrome (Android)
- Google Chrome (Desktop)
- Microsoft Edge (Desktop)
- Mozilla Firefox (Android)
- Mozilla Firefox (Desktop)

Baseline ist eine Zusammenfassung der Browser-Unterstützung. Sie ist kein Ersatz für Tests in Bezug auf Barrierefreiheit, Benutzerfreundlichkeit, Leistung, Sicherheit oder andere Aspekte. Baseline sagt Ihnen möglicherweise nicht, ob eine Funktion funktioniert mit:

- Älteren Geräten und Browserversionen
- Browsern, die nicht von der Baseline-Definition abgedeckt sind, wie z.B. Betriebssystem-Webansichten
- Unterstützungstechnologie, wie z.B. Bildschirmlesegeräten.

## Baseline-Abzeichen

![Grünes Widget mit Häkchen: Baseline, weit verbreitet. Vier Browser-Logos, alle mit Häkchen.](high.png)

Funktionen, die als **weit verbreitet** gelistet sind, haben eine konsistente Unterstützungsgeschichte in jedem der Baseline-Browser für mindestens 2,5 Jahre.

![Blaues Widget mit Häkchen: Baseline 2022, neu verfügbar. Vier Browser-Logos, alle mit Häkchen.](limited.png)

Funktionen, die als **neu verfügbar** gelistet sind, funktionieren in mindestens der aktuellsten stabilen Version jedes der Baseline-Browser, funktionieren jedoch möglicherweise nicht mit älteren Browsern und Geräten.

![Graues Widget mit Kreuz: eingeschränkte Verfügbarkeit. Vier Browser-Logos, zwei mit Häkchen, zwei mit Kreuzen.](low.png)

Funktionen mit **eingeschränkter Verfügbarkeit** sind _noch_ nicht in allen Browsern verfügbar.

## Siehe auch

- [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features Repository](https://github.com/web-platform-dx/web-features)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data Repository](https://github.com/mdn/browser-compat-data)
- [caniuse.com](https://caniuse.com/)
- [a11ysupport.io](https://a11ysupport.io/)
