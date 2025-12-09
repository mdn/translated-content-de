---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 30487c754854c3f21157827914eefb94d0e5bd4d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### CSS

- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität. ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) werden nun unterstützt, was eine Mechanismus bietet, durch den verschiedene **Types** für aktive View-Transitionen angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom angegebenen Transition-Typ. Firefox 147 fügt nur Unterstützung für View-Transition-Typen für Single-Page-Apps (SPA) hinzu, nicht für Transitionen zwischen Dokumenten. ([Firefox Bug 2001878](https://bugzil.la/2001878)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft wird jetzt unterstützt. Sie gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die aktuell aktive [View-Transition](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf eine aktive View-Transition in jedem Kontext zuzugreifen, ohne manuell eine Referenz dafür speichern zu müssen. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)-Unterstützung ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox Bug 1993341](https://bugzil.la/1993341)).

- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten, sowie die Einträge der Anwendungsverlaufs zu überprüfen. Sie ist ein Nachfolger früherer Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} abzielt. ([Firefox Bug 1997962](https://bugzil.la/1997962)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Features sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
