---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: e1cfb272beb4246d33c948008e5012dc85f013db
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) ausgeliefert.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben. -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (z. B. über ein {{htmlelement("img")}}-Element in eine Seite eingebettet oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Media-Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Fehler 1999989](https://bugzil.la/1999989)). Dies bedeutet, dass:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [zeitlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, nach dem die Animation angehalten wird.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

<!-- #### Entfernungen -->

### CSS

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Fehler 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar bei den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
    ([Firefox Fehler 1909339](https://bugzil.la/1909339))
  - Der Wert {{cssxref("position-anchor")}} `none` wurde in Version 147 hinzugefügt, wodurch eine implizite oder explizite Zuordnung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element entfernt werden kann.
    ([Firefox Fehler 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der Eigenschaft {{cssxref("perspective")}} wird jetzt mit wertlosen Einheiten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox Fehler 1362499](https://bugzil.la/1362499)).
- [View Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanismus bieten, um verschiedene **Typen** für aktive View-Transitions zu spezifizieren. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn ihr Inhalt aktualisiert wird, abhängig von dem spezifizierten Transition-Typ. Firefox 147 unterstützt nur View Transition-Typen für Single-Page-Anwendungen (SPAs), nicht für dokumentübergreifende View-Transitions.
  ([Firefox Fehler 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem Pseudoelement {{cssxref("::marker")}} unterstützt.
  ([Firefox Fehler 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des wurzelelements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, `<length>`-Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzel-](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox Fehler 1740584](https://bugzil.la/1740584)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modulscripts werden jetzt unterstützt, wodurch ein Stylesheet als Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) in ein Skript geladen werden kann, indem das Schlüsselwort [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und das [`type`](/de/docs/Web/JavaScript/Reference/Statements/import/with) Importattribut auf `type="css"` gesetzt wird.
  ([Firefox Fehler 1986681](https://bugzil.la/1986681)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird jetzt unterstützt, die eine Instanz von [`ViewTransition`](/de/docs/Web/API/ViewTransition) zurückgibt, die die [View Transition](/de/docs/Web/API/View_Transition_API) darstellt, die derzeit im Dokument aktiv ist. Dies bietet eine konsistente Möglichkeit, auf eine aktive View Transition in jedem Kontext zuzugreifen, ohne manuell eine Referenz dafür aufzubewahren. ([Firefox Fehler 2001836](https://bugzil.la/2001836)).
- Die Unterstützung der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur die macOS Tahoe Support aktiviert). ([Firefox Fehler 1993341](https://bugzil.la/1993341)).
- Die [Navigations-API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten, sowie die Verlaufseinträge einer Anwendung zu prüfen. Dies ist ein Nachfolger von vorherigen Web-Plattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox Fehler 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Fehler 1921583](https://bugzil.la/1921583)).
- Service-Worker können jetzt ECMAScript [Modulscripts](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service-Worker-Modul zu laden, geben Sie bei der Registrierung von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an.
  ([Firefox Fehler 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Features sind in Firefox 147 verfügbar, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
