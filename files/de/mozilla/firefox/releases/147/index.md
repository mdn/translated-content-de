---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 891ca0872fffab7dfec25bc56243e6f89d6089ab
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte heben Sie Kommentare zu Überschriften auf, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- [CSS Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox-Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein anchor-positioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar in den {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} Eigenschaften.
    ([Firefox-Bug 1909339](https://bugzil.la/1909339))
  - Der Wert {{cssxref("position-anchor")}} `none` wurde in Version 147 hinzugefügt, was eine implizite oder explizite Verbindung zwischen einem [CSS Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem anchor-positionierten Element ermöglicht, um entfernt zu werden.
    ([Firefox-Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-` vorangestellte Version der {{cssxref("perspective")}} Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [Sichtübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanik bieten, bei der verschiedene **Typen** für aktive Sichtübergänge spezifiziert werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom spezifizierten Übergangstyp. Firefox 147 unterstützt nur Sichtübergangstypen für Single-Page-Apps (SPA), nicht für dokumentübergreifende Übergangstypen.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}}, und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}} Pseudo-Element unterstützt.
  ([Firefox-Bug 2000404](https://bugzil.la/2000404)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modulscripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) unter Verwendung des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselworts und des [`type` Import-Attributs](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` zu laden.
  ([Firefox-Bug 1986681](https://bugzil.la/1986681)).

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die den [Sichtübergang](/de/docs/Web/API/View_Transition_API) repräsentiert, der aktuell auf dem Dokument aktiv ist. Dies bietet eine konsistente Möglichkeit, auf einen aktiven Sichtübergang in jedem Kontext zuzugreifen, ohne ihn manuell für eine spätere Verwendung speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Unterstützung für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple-Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies bietet die Möglichkeit, Browsenavigationen zu initiieren, abzufangen und zu verwalten, sowie die Verlaufseinträge einer Anwendung zu untersuchen. Dies ist ein Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), der deren Schwächen löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Einzelseitenanwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt für sowohl [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox-Bug 1921583](https://bugzil.la/1921583)).
- Service Workers können jetzt ECMAScript [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service Worker Modul zu laden, spezifizieren Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` beim Aufruf von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register).
  ([Firefox-Bug 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.
