---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 0f319396dcf87a9752a00beac03176230fabaa64
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel, eingebettet in eine Seite über ein {{htmlelement("img")}}-Element oder als CSS-{{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox-Bug 1999989](https://bugzil.la/1999989)). Das bedeutet, dass:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [zeitlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, wonach die Animation pausiert.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox-Bug 1988225](https://bugzil.la/1988225)).
  - Der [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar in den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}.
    ([Firefox-Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt, der es ermöglicht, eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element zu entfernen.
    ([Firefox-Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-` prefixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit wertlosen Einheiten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine verbesserte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanismus bieten, bei dem verschiedene **Typen** für aktive View-Übergänge spezifiziert werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig von dem spezifizierten Übergangstyp. Firefox 147 fügt nur Unterstützung für Single-Page-App (SPA) Transitionstypen hinzu, nicht für dokumentübergreifende Übergangstypen.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}}, und {{cssxref("quotes")}} Eigenschaften werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt.
  ([Firefox-Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Wurzelschreizzeichens](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex`, und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length\> Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox-Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS-Modulskripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet in ein Skript als Instanz eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zu laden, indem das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und das [`type` Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` festgelegt werden.
  ([Firefox-Bug 1986681](https://bugzil.la/1986681)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, welche die derzeit aktive [View-Übergang](/de/docs/Web/API/View_Transition_API) auf dem Dokument darstellt. Diese bietet eine konsistente Möglichkeit, auf einen aktiven View-Übergang in jedem Kontext zuzugreifen, ohne dass Sie manuell eine Referenz darauf speichern müssen, um ihn später zu verwenden. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Unterstützung der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple-Silicon-Prozessoren aktiviert (bisher war nur macOS Tahoe unterstützt). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigations-API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt. Diese ermöglicht es, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten und die Historieneinträge einer Anwendung zu untersuchen. Sie ist ein Nachfolger vorheriger Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location) und ist speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet.
  ([Firefox-Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox-Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) sein. Um ein Service Worker Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox-Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Behoben: Die neue Sitzungsantwort, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox-Bug 1916522](https://bugzil.la/1916522)).
- Behoben: JSON-Serialisierung von Chrome-Windows. ([Firefox-Bug 2000801](https://bugzil.la/2000801)).

#### WebDriver BiDi

- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox-Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Content Security Policy (CSP) zu umgehen. ([Firefox-Bug 1941780](https://bugzil.la/1941780)).
- Das `input.fileDialogOpened` Ereignis wurde implementiert. ([Firefox-Bug 1855045](https://bugzil.la/1855045)).
- Der `emulation.setLocaleOverride` Befehl wurde aktualisiert, um den `Accept-Language` Header zu überschreiben. ([Firefox-Bug 1995691](https://bugzil.la/1995691)).
- Der `emulation.setScreenSettingsOverride` Befehl wurde implementiert. ([Firefox-Bug 2000651](https://bugzil.la/2000651)).
- Fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte wurde behoben. ([Firefox-Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler auszulösen, wenn er mit dem `locale` Argument gleich `undefined` aufgerufen wird. ([Firefox-Bug 2003992](https://bugzil.la/2003992)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Manifest-Version 3 Erweiterungen können jetzt Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel zur Content Security Policy erklärt. ([Firefox-Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
