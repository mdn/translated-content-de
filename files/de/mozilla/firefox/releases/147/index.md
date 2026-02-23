---
title: Firefox 147 Versionshinweise für Entwickler
short-title: Firefox 147
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 21638327a5baa7ecf918835c4a233a74f25b02ed
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 wurde am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie im HTML-Bereich des Inspectors ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) auswählen, können Sie jetzt den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten.
  ([Firefox-Bug 1998704](https://bugzil.la/1998704)).
- Während einer Ansichtstransition erscheinen {{cssxref("::view-transition")}} Pseudo-Elemente jetzt in der Elementansicht. ([Firefox-Bug 1996608](https://bugzil.la/1996608)).
- Während einer Ansichtstransition erscheinen die zugehörigen Animationen jetzt im Animationsbereich. ([Firefox-Bug 1995296](https://bugzil.la/1995296)).
- Elemente mit einem gültigen {{cssxref("anchor-name")}} erhalten ein "Anchor"-Abzeichen in der Elementansicht. ([Firefox-Bug 1895196](https://bugzil.la/1895196)).
- Die zugehörigen {{cssxref("@position-try")}} Regeln eines hervorgehobenen Elements werden jetzt im CSS-Regelbereich angezeigt. ([Firefox-Bug 1895176](https://bugzil.la/1895176)).
- JSON-Nutzdaten können über einen neuen Button aus dem JSON-Viewer in Firefox Profiler importiert werden. Dies ermöglicht eine Aufschlüsselung der Größe der Ressource. ([Firefox-Bug 1997209](https://bugzil.la/1997209)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel, eingebettet in eine Seite über ein {{htmlelement("img")}}-Element oder als CSS-{{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox-Bug 1999989](https://bugzil.la/1999989)). Das bedeutet:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [temporalen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, wonach die Animation pausiert.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist nun standardmäßig aktiviert.
  ([Firefox-Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein anker-positioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar für die Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
    ([Firefox-Bug 1909339](https://bugzil.la/1909339))
  - Der Wert {{cssxref("position-anchor")}} `none` wurde in Version 147 hinzugefügt, der es ermöglicht, eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem anker-positionierten Element zu entfernen.
    ([Firefox-Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}} Eigenschaft wird nun mit werten ohne Einheit unterstützt — zum Beispiel `-webkit-perspective: 800` — um die Kompatibilität zu erhöhen.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den verschiedene **Typen** für aktive Ansichtstransitionen angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig von dem angegebenen Übergangstyp. Firefox 147 fügt Unterstützung für Ansichtstransitionstypen von Single-Page-Apps (SPA) hinzu, jedoch nicht für Übergangstypen von dokumentübergreifenden Ansichten.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden nun auf dem {{cssxref("::marker")}} Pseudo-Element unterstützt.
  ([Firefox-Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Root-Elements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, `<length>`-Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Root-](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox-Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS-Modulskripte werden jetzt unterstützt, sodass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz in ein Skript geladen werden kann, indem das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und das `type` [Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf [`type="css"`](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) gesetzt wird.
  ([Firefox-Bug 1986681](https://bugzil.la/1986681)).
- Die Methode {{jsxref("Iterator.concat()")}} wird jetzt unterstützt. Diese Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der mehrere Eingabe-Iterables zu einer einzigen Sequenz kombiniert.
  ([Firefox-Bug 1986672](https://bugzil.la/1986672)).

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die die [Ansichtstransition](/de/docs/Web/API/View_Transition_API) repräsentiert, die derzeit auf dem Dokument aktiv ist. Dies bietet eine konsistente Möglichkeit, auf eine aktive Ansichtstransition in jedem Kontext zuzugreifen, ohne manuell eine Referenz darauf speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) Unterstützung ist nun für alle macOS-Versionen auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe-Unterstützung aktiviert). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten sowie auf Einträge im Anwendungsverlauf zuzugreifen. Sie ist ein Nachfolger der bisherigen Web-Plattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), löst deren Mängel und richtet sich speziell an die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}}.
  ([Firefox-Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Komprimierung wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox-Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service Worker Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox-Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das neue Sitzungs-Response wurde behoben, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox-Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened` Ereignis wurde implementiert, das immer dann ausgelöst wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabefeld mit `type="file"`. ([Firefox-Bug 1855045](https://bugzil.la/1855045)).
- Der Befehl `emulation.setScreenSettingsOverride` wurde implementiert, um Clients zu ermöglichen, die Bildschirmeinstellungen für eine Liste von Browsing-Kontexten oder Nutzerkontexten zu emulieren. ([Firefox-Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox-Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Content Security Policy (CSP) zu umgehen. ([Firefox-Bug 1941780](https://bugzil.la/1941780)).
- Fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox-Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language`-Header zu überschreiben. ([Firefox-Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler auszulösen, wenn er mit dem Argument `locale` gleich `undefined` aufgerufen wird. ([Firefox-Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Die JSON-Serialisierung von Chrome-Fenstern wurde behoben. ([Firefox-Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Bei der Verwendung von [navigator.clipboard.readText()](/de/docs/Web/API/Clipboard/readText) oder [navigator.clipboard.read()](/de/docs/Web/API/Clipboard/read) ohne die `clipboardRead` Berechtigung wird eine Schaltfläche zum Einfügen aus der Zwischenablage angezeigt, um die Benutzerbestätigung zu erhalten. Wenn die Erweiterung die `clipboardRead` Berechtigung hat, liest sie weiterhin die Daten aus der Zwischenablage ohne Benutzerbestätigung, wie zuvor. Für weitere Informationen über die Arbeit mit der Zwischenablage in Erweiterungen, siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard). ([Firefox-Bug 1773681](https://bugzil.la/1773681))
- Temporär geladene Manifest Version 3 Erweiterungen können jetzt Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel zur Content Security Policy erklärt. ([Firefox-Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Webfeatures

Keine experimentellen Funktionen wurden in dieser Version hinzugefügt.
Sehen Sie die Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) für Funktionen aus anderen Versionen.
