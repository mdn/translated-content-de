---
title: Baseline (Kompatibilität)
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: 70aa041ebd7e31df76818bc8459f60659fe94c0c
---

{{GlossarySidebar}}

**Baseline** identifiziert die Verfügbarkeit von Webplattform-Features über gängige Browser hinweg, einschließlich APIs, CSS-Eigenschaften und JavaScript-Syntax. Baseline beschreibt Web-Features als entweder weit verbreitet oder neu verfügbar. Features, die die Baseline-Kriterien nicht erfüllen, gelten als eingeschränkt verfügbar.

Baseline berücksichtigt die Unterstützung in den folgenden Browsern:

- Apple Safari (iOS)
- Apple Safari (macOS)
- Google Chrome (Android)
- Google Chrome (Desktop)
- Microsoft Edge (Desktop)
- Mozilla Firefox (Android)
- Mozilla Firefox (Desktop)

Baseline ist eine Zusammenfassung der Browserunterstützung. Es ist kein Ersatz für Tests bezüglich Barrierefreiheit, Benutzerfreundlichkeit, Leistung, Sicherheit oder andere Tests. Baseline kann nicht bestimmen, ob ein Feature funktioniert mit:

- Älteren Geräten und Browserversionen
- Browsern, die nicht von der Baseline-Definition abgedeckt werden, wie z.B. Webansichten von Betriebssystemen
- Assistiven Technologien, wie Bildschirmlesegeräten.

## Baseline Abzeichen

![Grünes Widget mit dem Häkchen: Baseline, weit verbreitet. Vier Browser-Logos, alle mit Häkchen.](high.png)

Als **weit verbreitet** aufgelistete Features haben eine konsistente Unterstützungsgeschichte in jedem der Baseline-Browser für mindestens 2,5 Jahre.

![Blaues Widget mit dem Häkchen: Baseline 2022, neu verfügbar. Vier Browser-Logos, alle mit Häkchen.](limited.png)

Als **neu verfügbar** aufgelistete Features funktionieren mindestens in der neuesten stabilen Version jedes der Baseline-Browser, funktionieren jedoch möglicherweise nicht mit älteren Browsern und Geräten.

![Graues Widget mit dem Kreuz: Eingeschränkte Verfügbarkeit. Vier Browser-Logos, zwei mit Häkchen, zwei mit Kreuzen.](low.png)

Features mit **eingeschränkter Verfügbarkeit** sind _noch_ nicht in allen Browsern verfügbar.

## Siehe auch

- [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features repository](https://github.com/web-platform-dx/web-features)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data repository](https://github.com/mdn/browser-compat-data)
- [caniuse.com](https://caniuse.com/)
- [a11ysupport.io](https://a11ysupport.io/)
