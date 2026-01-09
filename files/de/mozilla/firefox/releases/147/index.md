---
title: Firefox 147 Veröffentlichungsnotizen für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: fbe2cf456ae1eb39d0386dd1d7e836f84d84518d
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Veröffentlichungsnotizen für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspektors auswählen, können Sie jetzt den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten.
  ([Firefox Bug 1998704](https://bugzil.la/1998704)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel eingebettet in eine Seite über ein {{htmlelement("img")}}-Element oder als CSS-{{cssxref("background-image")}}), unterstützt die SVG-URL nun [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Das bedeutet, dass:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [Zeitdimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, nach der die Animation pausiert.
  - Sie können die Syntax der [Raumdimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

<!-- #### Entfernungen -->

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist in den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verfügbar.
    ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der Wert `none` von {{cssxref("position-anchor")}} wurde in Version 147 hinzugefügt, welcher eine implizite oder explizite Zuordnung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element entfernt.
    ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit einheitenlosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den verschiedene **Typen** für aktive Ansichtübergänge spezifiziert werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn sich deren Inhalt ändert, abhängig vom angegebenen Übergangstyp. Firefox 147 unterstützt nur Ansichtübergangstypen für Einzelanwendungen (SPA), nicht jedoch für dokumentübergreifende Ansichtübergangstypen.
  ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}}-Pseudo-Element unterstützt.
  ([Firefox Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schrift des Wurzelelements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length>-Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzelelements](/de/docs/Web/CSS/Reference/Selectors/:root) zu definieren.
  ([Firefox Bug 1740584](https://bugzil.la/1740584)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modulscripts werden jetzt unterstützt, wodurch ein Stylesheet geladen werden kann in ein Script als Instanz eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) unter Verwendung des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Schlüsselworts und des mit `type="css"` festgelegten [`type`-Importattributs](/de/docs/Web/JavaScript/Reference/Statements/import/with).
  ([Firefox Bug 1986681](https://bugzil.la/1986681)).
- Die Methode {{jsxref("Iterator.concat()")}} wird jetzt unterstützt. Diese Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der mehrere Eingabe-Iterables zu einer einzigen Sequenz kombiniert.
  ([Firefox Bug 1986672](https://bugzil.la/1986672)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurückgibt, die den aktuell aktiven [Ansichtübergang](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf einen aktiven Ansichtübergang in jedem Kontext zuzugreifen, ohne manuell eine Referenz darauf für die spätere Verwendung speichern zu müssen. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- Die Unterstützung für [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies ermöglicht die Initiierung, Abfangen und Verwaltung von Browser-Navigationsaktionen und das Überprüfen von Einträgen im Verlauf einer Anwendung. Dies ist ein Nachfolger der vorherigen Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Einzelanwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Komprimierung wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript-[Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox Bug 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der neue Sitzungsantwortmechanismus wurde korrigiert, um die erforderliche `setWindowRect`-Eigenschaft einzuschließen. ([Firefox Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened`-Ereignis wurde implementiert, das immer dann ausgelöst wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabefeld mit `type="file"`. ([Firefox Bug 1855045](https://bugzil.la/1855045)).
- Der Befehl `emulation.setScreenSettingsOverride` wurde implementiert, um Clients zu ermöglichen, die Bildschirmabmessungen für eine Liste von Browsing-Kontexten oder Benutzereinstellungen zu emulieren. ([Firefox Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die echte Ziel-URL enthielt. ([Firefox Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Content Security Policy (CSP) zu umgehen. ([Firefox Bug 1941780](https://bugzil.la/1941780)).
- Fehlendes `script.realmCreated`-Ereignis für neue Browsing-Kontexte wurde behoben, die über `window.open` erstellt wurden. ([Firefox Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language`-Header zu überschreiben. ([Firefox Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler auszulösen, wenn es mit dem `locale`-Argument gleich `undefined` aufgerufen wird. ([Firefox Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Die JSON-Serialisierung von Chrome-Fenstern wurde korrigiert. ([Firefox Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Erweiterungen der Manifest-Version 3 können jetzt Skripte von localhost laden, wie unter [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel zur Content Security Policy erklärt wird. ([Firefox Bug 1864284](https://bugzil.la/1864284))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features werden in Firefox 147 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie in der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
