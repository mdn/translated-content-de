---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 93eb85aec36d1a929ac8dfc7dbf1ed297992608f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (z.B. eingebettet in eine Seite über ein {{htmlelement("img")}} Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL nun [Media-Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Das bedeutet, dass:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die [temporäre Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) Syntax verwenden, um einen Teil der Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, danach wird die Animation pausiert.
  - Sie können die [räumliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) Syntax verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar für die Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
    ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt, was ermöglicht, eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element zu entfernen.
    ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}} Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Möglichkeit bieten, verschiedene **Typen** für aktive Ansichtstransitionen anzugeben. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn sich deren Inhalt aktualisiert, abhängig vom angegebenen Transitionstyp. Firefox 147 fügt Unterstützung nur für Single-Page-App (SPA) Ansichtstransitionstypen hinzu, nicht für Dokument-übergreifende Ansichtstransitionstypen.
  ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}} Pseudo-Element unterstützt.
  ([Firefox Bug 2000404](https://bugzil.la/2000404)).

### JavaScript

- CSS-Modulscripts werden jetzt unterstützt, was es ermöglicht, ein Stylesheet in ein Script als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und dem [`type` Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` zu laden.
  ([Firefox Bug 1986681](https://bugzil.la/1986681)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die die derzeit aktive [Ansichtstransition](/de/docs/Web/API/View_Transition_API) auf dem Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne manuell eine Referenz darauf für die spätere Verwendung speichern zu müssen. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- [WebGPU API](/de/docs/Web/API/WebGPU_API) Unterstützung ist jetzt für alle macOS-Versionen auf Geräten mit Apple-Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie die Historieneinträge einer Anwendung zu untersuchen. Sie ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applikationen (SPAs)")}} abzielt.
  ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service-Worker können jetzt ECMAScript [Modulscripts](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Serivce-Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox Bug 1360870](https://bugzil.la/1360870)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Features sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
