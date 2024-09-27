---
title: Baseline (Kompatibilität)
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: 70aa041ebd7e31df76818bc8459f60659fe94c0c
---

{{GlossarySidebar}}

**Baseline** identifiziert die Verfügbarkeit von Webplattform-Funktionen in gängigen Browsern, einschließlich APIs, CSS-Eigenschaften und JavaScript-Syntax. Baseline beschreibt Webfunktionen als entweder weit verbreitet oder neu verfügbar. Funktionen, die nicht den Baseline-Kriterien entsprechen, gelten als eingeschränkt verfügbar.

Baseline berücksichtigt die Unterstützung in den folgenden Browsern:

- Apple Safari (iOS)
- Apple Safari (macOS)
- Google Chrome (Android)
- Google Chrome (Desktop)
- Microsoft Edge (Desktop)
- Mozilla Firefox (Android)
- Mozilla Firefox (Desktop)

Baseline ist eine Zusammenfassung der Browser-Kompatibilität. Es ist kein Ersatz für Tests bezüglich Zugänglichkeit, Benutzerfreundlichkeit, Leistung, Sicherheit oder andere Testkategorien. Baseline weist möglicherweise nicht darauf hin, ob eine Funktion funktioniert mit:

- Älteren Geräten und Browserversionen
- Browsern, die nicht von der Baseline-Definition abgedeckt sind, wie z.B. Webansichten des Betriebssystems
- Unterstützungstechnologien, wie Bildschirmlesegeräte.

## Baseline-Abzeichen

![Grünes Widget mit Häkchen: Baseline, weit verbreitet. Vier Browserlogos, alle mit Häkchen.](high.png)

Funktionen, die als **weit verbreitet** gelistet sind, haben eine konsistente Geschichte der Unterstützung in jedem der Baseline-Browser für mindestens 2,5 Jahre.

![Blaues Widget mit Häkchen: Baseline 2022, neu verfügbar. Vier Browserlogos, alle mit Häkchen.](limited.png)

Funktionen, die als **neu verfügbar** gelistet sind, funktionieren in mindestens der neuesten stabilen Version jedes der Baseline-Browser, können jedoch mit älteren Browsern und Geräten möglicherweise nicht arbeiten.

![Graues Widget mit Kreuz: eingeschränkte Verfügbarkeit. Vier Browserlogos, zwei mit Häkchen, zwei mit Kreuzen.](low.png)

Funktionen, die mit **eingeschränkter Verfügbarkeit** gelistet sind, sind _noch_ nicht in allen Browsern verfügbar.

## Siehe auch

- [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features repository](https://github.com/web-platform-dx/web-features)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data repository](https://github.com/mdn/browser-compat-data)
- [caniuse.com](https://caniuse.com/)
- [a11ysupport.io](https://a11ysupport.io/)
