---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: c21892e04180097d893cd8bc2db74a328214b069
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

### Entwickler-Tools

- Wenn Sie ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspektors auswählen, können Sie jetzt den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten.
  ([Firefox Bug 1998704](https://bugzil.la/1998704)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel eingebettet in eine Seite über ein {{htmlelement("img")}} Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Das bedeutet, dass:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [temporalen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, wonach die Animation pausiert.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

<!-- #### Entfernungen -->

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Es ist auf den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verfügbar.
    ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt, wodurch eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element entfernt werden kann.
    ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-` prefixed Version der {{cssxref("perspective")}} Eigenschaft wird jetzt mit wertlosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität.
  ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanismus bieten, bei dem verschiedene **Typen** für aktive Ansichtstransitionen angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig von dem angegebenen Transitionstyp. Firefox 147 unterstützt nur Typen von Ansichtstransitionen für Single-Page-Anwendungen (SPAs), nicht für dokumentübergreifende Ansichtstransitionen.
  ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt.
  ([Firefox Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Root-Elements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length> Werte basierend auf der Größe eines bestimmten Zeichens oder eines Schriftattributs des [Root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox Bug 1740584](https://bugzil.la/1740584)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modul-Skripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mittels des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselworts und des [`type` import attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` zu laden.
  ([Firefox Bug 1986681](https://bugzil.la/1986681)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt und gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurück, die die derzeit aktive [Ansichtstransition](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne manuell einen Verweis darauf speichern zu müssen. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- Unterstützung für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur macOS Tahoe Unterstützung aktiviert). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese ermöglicht es, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie die Historieneinträge einer Anwendung zu untersuchen. Sie ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgelegt ist.
  ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt. ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) sein. Um ein Service Worker-Modul zu laden, geben Sie beim Aufruf von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an. ([Firefox Bug 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das neue Sitzungsantwortformat wurde korrigiert, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened` Event wurde implementiert, das jedes Mal ausgelöst wird, wenn ein Dateiauswahldialog durch die Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabeelement mit `type="file"`. ([Firefox Bug 1855045](https://bugzil.la/1855045)).
- Der Befehl `emulation.setScreenSettingsOverride` wurde implementiert, um es den Clients zu ermöglichen, die Bildschirmabmessungen für eine Liste von Browsing-Kontexten oder Benutzerkontexten zu emulieren. ([Firefox Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die echte Ziel-URL enthielt. ([Firefox Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurde aktualisiert, um die Content-Security-Policy (CSP) zu umgehen. ([Firefox Bug 1941780](https://bugzil.la/1941780)).
- Fehlendes `script.realmCreated` Event für neue Browsing-Kontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language` Header zu überschreiben. ([Firefox Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler zu werfen, wenn es mit dem `locale` Argument gleich `undefined` aufgerufen wird. ([Firefox Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- JSON-Serialisierung von Chrome-Fenstern wurde korrigiert. ([Firefox Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Manifest Version 3 Erweiterungen können jetzt Skripte von lokalem Host laden, wie in [Skripte vom lokalen Host](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel über Content Security Policy erklärt wird. ([Firefox Bug 1864284](https://bugzil.la/1864284))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 147 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
