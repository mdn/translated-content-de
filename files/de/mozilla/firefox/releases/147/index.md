---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 64969748897516212b7585b8dbc8f9f1a9bbb242
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie die Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel, eingebettet auf einer Seite über ein {{htmlelement("img")}}-Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Fehler 1999989](https://bugzil.la/1999989)). Dies bedeutet, dass:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [zeitlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, nach der die Animation pausiert.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

<!-- #### Entfernungen -->

### CSS

- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Fehler 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar in den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
    ([Firefox Fehler 1909339](https://bugzil.la/1909339))
  - Der Wert {{cssxref("position-anchor")}} `none` wurde in Version 147 hinzugefügt, welcher eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element aufhebt.
    ([Firefox Fehler 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der Eigenschaft {{cssxref("perspective")}} wird jetzt mit wertlosen Einheiten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität.
  ([Firefox Fehler 1362499](https://bugzil.la/1362499)).
- [View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, bei dem verschiedene **Typen** für aktive View-Transitions angegeben werden können. CSS kann dann verwendet werden, um DOM-Elementen beim Aktualisieren ihres Inhalts je nach angegebenem Transition-Typ Animationen hinzuzufügen. Firefox 147 fügt Unterstützung für View-Transition-Typen von Single-Page-Apps (SPA) hinzu, nicht jedoch für Dokument-übergreifende View-Transition-Typen.
  ([Firefox Fehler 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem Pseudoelement {{cssxref("::marker")}} unterstützt.
  ([Firefox Fehler 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Root-Elements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length\>-Werte basierend auf der Größe eines bestimmten Zeichens oder einer Schriftartattribute des [Root-](/de/docs/Web/CSS/Reference/Selectors/:root)-Elements zu definieren.
  ([Firefox Fehler 1740584](https://bugzil.la/1740584)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modulscripte werden jetzt unterstützt und ermöglichen das Laden eines Stylesheets in ein Skript als Instanz eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) mit dem Schlüsselwort [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und dem Importattribut [`type`](/de/docs/Web/JavaScript/Reference/Statements/import/with) gesetzt auf `type="css"`.
  ([Firefox Fehler 1986681](https://bugzil.la/1986681)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird jetzt unterstützt und gibt eine Instanz von [`ViewTransition`](/de/docs/Web/API/ViewTransition) zurück, die die aktuell aktive [View-Transition](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf eine aktive View-Transition in jedem Kontext zuzugreifen, ohne sie manuell für eine spätere Verwendung speichern zu müssen. ([Firefox Fehler 2001836](https://bugzil.la/2001836)).
- Die Unterstützung der [WebGPU-API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur die Unterstützung für macOS Tahoe aktiviert). ([Firefox Fehler 1993341](https://bugzil.la/1993341)).
- Die [Navigation-API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie die Verlaufseinträge einer Anwendung zu untersuchen. Dies ist der Nachfolger früherer Webplattform-Funktionen wie der [History-API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgelegt ist.
  ([Firefox Fehler 1997962](https://bugzil.la/1997962)).
- Brotli-Komprimierung wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Fehler 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript-[Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service-Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox Fehler 1360870](https://bugzil.la/1360870)).

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

- Temporär geladene Manifest Version 3-Erweiterungen können jetzt Skripte von localhost laden, wie im Artikel Inhaltssicherheitsrichtlinie unter [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) beschrieben. ([Firefox Fehler 1864284](https://bugzil.la/1864284))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 147 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
