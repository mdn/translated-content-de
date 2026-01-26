---
title: Firefox 147 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 147 (Stabil)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 9d0965b50926c74f95a68ef6c3add5498b079472
---

Dieser Artikel gibt Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 wurde am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspektors auswählen, können Sie jetzt den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten.
  ([Firefox Bug 1998704](https://bugzil.la/1998704)).
- Während eines Ansichtswechsels erscheinen nun {{cssxref("::view-transition")}} Pseudoelemente in der Elementansicht. ([Firefox Bug 1996608](https://bugzil.la/1996608)).
- Während eines Ansichtswechsels erscheinen die zugehörigen Animationen nun im Animationspanel. ([Firefox Bug 1995296](https://bugzil.la/1995296)).
- Elemente mit einem gültigen {{cssxref("anchor-name")}} erhalten ein 'anchor'-Badge in der Elementansicht. ([Firefox Bug 1895196](https://bugzil.la/1895196)).
- Die zu einem hervorgehobenen Element zugehörigen {{cssxref("@position-try")}} Regeln werden nun im CSS Regel-Panel angezeigt. ([Firefox Bug 1895176](https://bugzil.la/1895176)).
- JSON-Payloads können jetzt über einen neuen Button aus dem JSON-Viewer in den Firefox Profiler importiert werden. Dies bietet eine Aufschlüsselung der Größe der Ressource. ([Firefox Bug 1997209](https://bugzil.la/1997209)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel eingebettet in eine Seite über ein {{htmlelement("img")}}-Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL nun [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Das bedeutet, dass:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die [zeitliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) Syntax verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, nach der die Animation pausiert.
  - Sie können die [räumliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) Syntax verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element an seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar in den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}.
    ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt und erlaubt es, eine implizite oder explizite Assoziation zwischen einem [CSS Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element zu entfernen.
    ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-` präfixierte Version der {{cssxref("perspective")}} Eigenschaft wird jetzt mit einheitenlosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtstransitionsarten](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den verschiedene **Arten** für aktive Ansichtstransitionen spezifiziert werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn sich deren Inhalt aktualisiert, abhängig von der spezifizierten Transitionsart. Firefox 147 fügt Unterstützung für Transitionsarten von Single-Page-Apps (SPA) hinzu, nicht jedoch für dokumentübergreifende Transitionsarten.
  ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}}, und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt.
  ([Firefox Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Wurzelelements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex`, und `ric`. Diese Einheiten erlauben es, \<length\> Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzel](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS Modulscripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als eine [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz in ein Skript mittels des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselworts zu laden und das `type` [Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf [`type="css"`](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) zu setzen.
  ([Firefox Bug 1986681](https://bugzil.la/1986681)).
- Die {{jsxref("Iterator.concat()")}} Methode wird jetzt unterstützt. Diese Methode erlaubt es, einen neuen Iterator zu erstellen, der mehrere Eingabeiterable zu einer einzigen Sequenz zusammenfasst.
  ([Firefox Bug 1986672](https://bugzil.la/1986672)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz, die die [Ansichtstransition](/de/docs/Web/API/View_Transition_API) repräsentiert, die gerade im Dokument aktiv ist, zurückgibt. Dies bietet eine einheitliche Methode, auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne dass man manuell einen Verweis darauf für eine spätere Verwendung speichern muss. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) Unterstützung ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese API bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie die Einträge in der Verlaufshistorie einer Anwendung zu untersuchen. Sie ist der Nachfolger bisheriger Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Die Brotli-Kompression wird jetzt für sowohl [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` beim Aufruf von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) an.
  ([Firefox Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Antwort auf eine neue Session wurde korrigiert, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened` Ereignis wurde implementiert, das immer dann ausgegeben wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabeelement vom Typ `file`. ([Firefox Bug 1855045](https://bugzil.la/1855045)).
- Der `emulation.setScreenSettingsOverride` Befehl wurde implementiert, um es den Clients zu ermöglichen, für eine Liste von Browsing- oder Benutzerkontexten die Bildschirmeinstellungen zu emulieren. ([Firefox Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um Content-Security-Policies (CSP) zu umgehen. ([Firefox Bug 1941780](https://bugzil.la/1941780)).
- Fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte, die über `window.open` erstellt werden, wurde behoben. ([Firefox Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language` Header zu überschreiben. ([Firefox Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler auszulösen, wenn es mit dem `locale` Argument gleich `undefined` aufgerufen wird. ([Firefox Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- JSON-Serialisierung von Chrome Windows wurde behoben. ([Firefox Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Manifest Version 3 Erweiterungen können jetzt Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel zur Content-Security-Policy erläutert. ([Firefox Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Web-Funktionen

Keine experimentellen Funktionen wurden in dieser Version hinzugefügt.
Prüfen Sie die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) für Funktionen aus anderen Versionen.
