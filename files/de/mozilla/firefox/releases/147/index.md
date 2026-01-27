---
title: Firefox 147 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 147 (Stabil)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: bdb21cdfa9a7dc7c65222d2219aa2d96543d8a2e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 147, die Entwickler betreffen. Firefox 147 wurde am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspektors auswählen, können Sie nun den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten. ([Firefox-Bug 1998704](https://bugzil.la/1998704)).
- Während eines Übergangs erscheinen {{cssxref("::view-transition")}} Pseudoelemente jetzt in der Elementansicht. ([Firefox-Bug 1996608](https://bugzil.la/1996608)).
- Während eines Übergangs erscheinen die zugehörigen Animationen jetzt im Animationsbereich. ([Firefox-Bug 1995296](https://bugzil.la/1995296)).
- Elemente mit einem gültigen {{cssxref("anchor-name")}} erhalten ein "anchor"-Symbol in der Elementansicht. ([Firefox-Bug 1895196](https://bugzil.la/1895196)).
- Die zu einem hervorgehobenen Element gehörenden {{cssxref("@position-try")}} Regeln werden nun im CSS-Regelbereich angezeigt. ([Firefox-Bug 1895176](https://bugzil.la/1895176)).
- JSON-Nutzdaten können mit einer neuen Schaltfläche aus dem JSON-Viewer in den Firefox Profiler importiert werden. Dies bietet einen Überblick über die Größe der Ressource. ([Firefox-Bug 1997209](https://bugzil.la/1997209)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel, wenn sie über ein {{htmlelement("img")}}-Element eingebettet wird oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL nun [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox-Bug 1999989](https://bugzil.la/1999989)). Das bedeutet:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [temporären Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, danach pausiert die Animation.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert. ([Firefox-Bug 1988225](https://bugzil.la/1988225)).
  - Der [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist auf den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verfügbar. ([Firefox-Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt, was es ermöglicht, eine implizite oder explizite Verbindung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element zu entfernen. ([Firefox-Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit einheitenlosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität. ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [Übergangstypen für Ansichten](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanismus bereitstellen, mit dem verschiedene **Typen** für aktive Übergänge von Ansichten spezifiziert werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom angegebenen Übergangstyp. Firefox 147 unterstützt nur Übergangstypen für Single-Page-Apps (SPA), nicht für Übergangstypen zwischen Dokumenten. ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt. ([Firefox-Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Wurzelelements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden nun unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length\> Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren. ([Firefox-Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS-Modulscripte werden nun unterstützt, was es ermöglicht, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und dem `type` [Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf [`type="css"`](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) in ein Script zu laden. ([Firefox-Bug 1986681](https://bugzil.la/1986681)).
- Die {{jsxref("Iterator.concat()")}} Methode wird nun unterstützt. Diese Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der mehrere Eingabeiterables in eine einzelne Sequenz kombiniert. ([Firefox-Bug 1986672](https://bugzil.la/1986672)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird nun unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die den gerade auf dem Dokument aktiven [Ansichtstransition](/de/docs/Web/API/View_Transition_API) darstellt. Dies bietet eine konsistente Möglichkeit, auf einen aktiven Ansichtstransition aus jedem Kontext zuzugreifen, ohne ihn manuell für die spätere Verwendung speichern zu müssen. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- [WebGPU API](/de/docs/Web/API/WebGPU_API) Unterstützung ist nun für alle Versionen von macOS auf Geräten mit Apple Silicon-Prozessoren aktiviert (zuvor war nur macOS Tahoe Unterstützung aktiviert). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird nun unterstützt. Dies bietet die Möglichkeit, Browsereingriffe zu initiieren, abzufangen und zu verwalten und die Einträge des Anwendungsverlaufs zu überprüfen. Dies ist ein Nachfolger vorheriger Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist. ([Firefox-Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Komprimierung wird nun sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt. ([Firefox-Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können nun ECMAScript [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein. Um ein Service Worker Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen. ([Firefox-Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das neue Sitzungsantwort-Format wurde korrigiert, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox-Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened` Ereignis wurde implementiert, das immer dann ausgelöst wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabefeld mit `type="file"`. ([Firefox-Bug 1855045](https://bugzil.la/1855045)).
- Der `emulation.setScreenSettingsOverride` Befehl wurde implementiert, um Clients zu ermöglichen, die Bildschirmabmessungen für eine Liste von Browsing-Kontexten oder Benutzerkontexten zu emulieren. ([Firefox-Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox-Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Content Security Policy (CSP) zu umgehen. ([Firefox-Bug 1941780](https://bugzil.la/1941780)).
- Fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox-Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language`-Header zu überschreiben. ([Firefox-Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler zu werfen, wenn es mit dem Argument `locale` gleich `undefined` aufgerufen wird. ([Firefox-Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- JSON-Serialisierung von Chrome Windows wurde behoben. ([Firefox-Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Bei Verwendung von [navigator.clipboard.readText()](/de/docs/Web/API/Clipboard/readText) oder [navigator.clipboard.read()](/de/docs/Web/API/Clipboard/read) ohne die Berechtigung `clipboardRead` wird eine Schaltfläche zum Einfügen aus der Zwischenablage angezeigt, um die Bestätigung des Benutzers zu erhalten. Wenn die Erweiterung die Berechtigung `clipboardRead` hat, wird die Zwischenablagedaten weiterhin wie zuvor ohne Benutzerbestätigung gelesen. Für weitere Informationen zur Arbeit mit der Zwischenablage in Erweiterungen siehe [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard). ([Firefox-Bug 1773681](https://bugzil.la/1773681))
- Temporär geladene Manifest-Version 3 Erweiterungen können jetzt Skripte von localhost laden, wie im Artikel zur Inhaltssicherheitsrichtlinie unter [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) erläutert. ([Firefox-Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Web-Features

Keine experimentellen Features wurden in dieser Version hinzugefügt. Überprüfen Sie die Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) für Features aus anderen Versionen.
