---
title: Firefox 147-Release-Hinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 618d480ec934c834d8a37796dc691061c401ed5d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 147, die Entwickler betreffen. Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Release-Hinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bedeutenden Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit wertlosen Einheiten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [View-Transitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den verschiedene **Typen** für aktive View-Transitions angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn ihr Inhalt aktualisiert wird, abhängig vom angegebenen Transitionstyp. Firefox 147 unterstützt nur View-Transitionstypen für Single-Page-Apps (SPA), nicht jedoch für dokumentübergreifende View-Transitionstypen.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}}-Pseudo-Element unterstützt.
  ([Firefox-Bug 2000404](https://bugzil.la/2000404)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bedeutenden Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)-Eigenschaft wird jetzt unterstützt und gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die derzeit aktive [View-Transition](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf eine aktive View-Transition in jedem Kontext zuzugreifen, ohne sie manuell für eine spätere Verwendung speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Die Unterstützung für das [WebGPU API](/de/docs/Web/API/WebGPU_API) ist nun für alle macOS-Versionen auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur die Unterstützung für macOS Tahoe aktiviert). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).

- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt. Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie die Historieneinträge einer Anwendung zu prüfen. Dies ist ein Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist. ([Firefox-Bug 1997962](https://bugzil.la/1997962)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-On-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 147 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
