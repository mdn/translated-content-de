---
title: Firefox 147 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 147 (Stabil)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: fa422ef89f5da5c7bc10a03f8e84b01b8132061c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 wurde am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspectors auswählen, können Sie nun den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten. ([Firefox Bug 1998704](https://bugzil.la/1998704)).
- Während eines Übergangs in der Ansicht erscheinen {{cssxref("::view-transition")}} Pseudoelemente nun in der Elementansicht. ([Firefox Bug 1996608](https://bugzil.la/1996608)).
- Während eines Übergangs in der Ansicht werden die zugehörigen Animationen nun im Animationen-Panel angezeigt. ([Firefox Bug 1995296](https://bugzil.la/1995296)).
- Elemente mit einem gültigen {{cssxref("anchor-name")}} erhalten ein 'Anker'-Abzeichen in der Elementansicht. ([Firefox Bug 1895196](https://bugzil.la/1895196)).
- Die zu einem hervorgehobenen Element gehörenden {{cssxref("@position-try")}} Regeln werden nun im CSS-Regel-Panel angezeigt. ([Firefox Bug 1895176](https://bugzil.la/1895176)).
- JSON-Payloads können über den JSON-Viewer mit einem neuen Button in den Firefox Profiler importiert werden. Dies bietet eine Aufschlüsselung der Ressourcengröße. ([Firefox Bug 1997209](https://bugzil.la/1997209)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel in eine Seite eingebettet über ein {{htmlelement("img")}} Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL nun [Media-Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Das bedeutet:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die [zeitliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Abschnitt der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, nach der die Animation pausiert.
  - Sie können die [räumliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert. ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar bei den Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}. ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der Wert {{cssxref("position-anchor")}} `none` wurde in Version 147 hinzugefügt, der ermöglicht, eine implizite oder explizite Zuordnung zwischen einem [CSS Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element zu entfernen. ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-` Präfixversion der {{cssxref("perspective")}} Eigenschaft wird jetzt mit wertlosen Einheiten unterstützt — zum Beispiel `-webkit-perspective: 800` — für verbesserte Kompatibilität. ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Übergangstypen der Ansicht](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die eine Mechanismus bereitstellen, mit dem verschiedene **Typen** für aktive Übergänge angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn sich deren Inhalt aktualisiert, je nach angegebenem Übergangstyp. Firefox 147 fügt Unterstützung nur für Übergangstypen von Einzelseitenanwendungen (SPA) hinzu, nicht für dokumentübergreifende Übergangstypen. ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} Eigenschaften werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt. ([Firefox Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schrift des Wurzelelements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden nun unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten erlauben es Ihnen, \<length> Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Wurzel](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren. ([Firefox Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS-Modulscripte werden nun unterstützt, was ermöglicht, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz über das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und das [`type` Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` zu laden. ([Firefox Bug 1986681](https://bugzil.la/1986681)).
- Die Methode {{jsxref("Iterator.concat()")}} wird nun unterstützt. Diese Methode ermöglicht es, einen neuen Iterator zu erstellen, der mehrere Eingabeiterables zu einer einzigen Sequenz kombiniert. ([Firefox Bug 1986672](https://bugzil.la/1986672)).

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird nun unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die den gerade aktiven [Übergang der Ansicht](/de/docs/Web/API/View_Transition_API) des Dokuments repräsentiert. Dies bietet eine konsistente Möglichkeit, einen aktiven Übergang der Ansicht in jedem Kontext zuzugreifen, ohne einen Verweis darauf manuell für eine spätere Verwendung speichern zu müssen. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- Die Unterstützung für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur Support für macOS Tahoe aktiviert). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird nun unterstützt. Dies bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten und die Historieneinträge einer Anwendung zu untersuchen. Dies ist der Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Einzelseitenanwendungen (SPAs)")}} abzielt. ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Komprimierung wird nun sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt. ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service-Worker können nun ECMAScript [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein. Um ein Service-Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen. ([Firefox Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die neue Sitzungsantwort wurde behoben, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened` Ereignis wurde implementiert, das jedes Mal ausgelöst wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgelöst wird, zum Beispiel nach einem Klick auf ein Eingabefeld mit `type="file"`. ([Firefox Bug 1855045](https://bugzil.la/1855045)).
- Der Befehl `emulation.setScreenSettingsOverride` wurde implementiert, um Kunden zu ermöglichen, die Bildschirmeinstellungen für eine Liste von Browsing-Kontexten oder Benutzerkontexten zu emulieren. ([Firefox Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Content-Sicherheitsrichtlinie (CSP) zu umgehen. ([Firefox Bug 1941780](https://bugzil.la/1941780)).
- Ein fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language` Header zu überschreiben. ([Firefox Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler zu werfen, wenn es mit dem Argument `locale` gleich `undefined` aufgerufen wird. ([Firefox Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Die JSON-Serialisierung von Chrome-Fenstern wurde behoben. ([Firefox Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Manifest-Version 3-Erweiterungen können nun Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Content Security Policy-Artikel erläutert. ([Firefox Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 147 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
