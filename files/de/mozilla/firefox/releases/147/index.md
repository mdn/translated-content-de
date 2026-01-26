---
title: Firefox 147 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 147 (Stabil)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: ac9837e832790fa4aa676dfef322ffa228599378
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 wurde am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Wenn Sie ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (wie {{cssxref("::before")}} oder {{cssxref("::after")}}) im HTML-Bereich des Inspektors auswählen, können Sie jetzt den Selektor der entsprechenden Regel im CSS-Bereich bearbeiten.
  ([Firefox Bug 1998704](https://bugzil.la/1998704)).
- Während eines Ansichtsübergangs erscheinen jetzt {{cssxref("::view-transition")}} Pseudoelemente in der Elementansicht. ([Firefox Bug 1996608](https://bugzil.la/1996608)).
- Während eines Ansichtsübergangs erscheinen die zugehörigen Animationen jetzt im Animationspanel. ([Firefox Bug 1995296](https://bugzil.la/1995296)).
- Elemente mit einem gültigen {{cssxref("anchor-name")}} erhalten ein "Anker"-Abzeichen in der Elementansicht. ([Firefox Bug 1895196](https://bugzil.la/1895196)).
- Die zu einem hervorgehobenen Element gehörenden {{cssxref("@position-try")}} Regeln werden jetzt im CSS-Regeln-Panel angezeigt. ([Firefox Bug 1895176](https://bugzil.la/1895176)).
- JSON-Payloads können aus dem JSON-Viewer in den Firefox Profiler über einen neuen Button importiert werden. Dies bietet eine Aufschlüsselung der Größe der Ressource. ([Firefox Bug 1997209](https://bugzil.la/1997209)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel eingebettet in eine Seite über ein {{htmlelement("img")}} Element oder als CSS {{cssxref("background-image")}}), unterstützt die SVG-URL jetzt [Media-Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox Bug 1999989](https://bugzil.la/1999989)). Dies bedeutet, dass:
  - Wenn die SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die [temporale Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) Syntax verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, nach der die Animation pausiert.
  - Sie können die [räumliche Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) Syntax verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

### CSS

- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox Bug 1988225](https://bugzil.la/1988225)).
  - Der [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) Wert, der eine bequeme Möglichkeit bietet, ein anker-positioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Es ist für die Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verfügbar.
    ([Firefox Bug 1909339](https://bugzil.la/1909339))
  - Der {{cssxref("position-anchor")}} Wert `none` wurde in Version 147 hinzugefügt, der ermöglicht, eine implizite oder explizite Zuordnung zwischen einem [CSS Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem anker-positionierten Element zu entfernen.
    ([Firefox Bug 1999972](https://bugzil.la/1999972)).
- Die mit `-webkit-` präfixierte Version der {{cssxref("perspective")}} Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für eine erhöhte Kompatibilität.
  ([Firefox Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtsübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bieten, durch den unterschiedliche **Typen** für aktive Ansichtsübergänge angegeben werden können. CSS kann dann verwendet werden, um DOM-Elementen je nach angegebenem Übergangstyp Animationen zuzuweisen, wenn sich ihr Inhalt aktualisiert. Firefox 147 unterstützt nur Ansichtsübergangstypen für Single-Page-Apps (SPA), nicht für dokumentübergreifende Ansichtsübergangstypen.
  ([Firefox Bug 2001878](https://bugzil.la/2001878)).
- Die {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}}, und {{cssxref("quotes")}} Eigenschaften werden jetzt auf dem {{cssxref("::marker")}} Pseudoelement unterstützt.
  ([Firefox Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf dem Schriftgrad des Root-Elements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex`, und `ric`. Diese Einheiten ermöglichen es Ihnen, \<length> Werte basierend auf der Größe eines bestimmten Zeichens oder Schriftattributs des [Root](/de/docs/Web/CSS/Reference/Selectors/:root) Elements zu definieren.
  ([Firefox Bug 1740584](https://bugzil.la/1740584)).

### JavaScript

- CSS-Modulscripts werden jetzt unterstützt, sodass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz geladen werden kann, indem das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und das [`type` Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` gesetzt wird.
  ([Firefox Bug 1986681](https://bugzil.la/1986681)).
- Die {{jsxref("Iterator.concat()")}} Methode wird jetzt unterstützt. Diese Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der mehrere Eingabeiterables zu einer einzigen Sequenz kombiniert.
  ([Firefox Bug 1986672](https://bugzil.la/1986672)).

### APIs

- Die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft wird jetzt unterstützt, die eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurückgibt, die den aktuell aktiven [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf einen aktiven Ansichtsübergang in jedem Kontext zuzugreifen, ohne dass eine Referenz darauf manuell für die spätere Verwendung gespeichert werden muss. ([Firefox Bug 2001836](https://bugzil.la/2001836)).
- [WebGPU API](/de/docs/Web/API/WebGPU_API) Unterstützung ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur macOS Tahoe unterstützt). ([Firefox Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Diese bietet die Möglichkeit, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten, und ermöglicht das Untersuchen der Einträge der Anwendungs-Historie. Diese ist ein Nachfolger zu früheren Web-Plattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Einzelseitenanwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox Bug 1997962](https://bugzil.la/1997962)).
- Brotli-Kompression wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox Bug 1921583](https://bugzil.la/1921583)).
- Service Worker können jetzt ECMAScript [Modulscripts](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service Worker Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox Bug 1360870](https://bugzil.la/1360870)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Behebung der neuen Sitzungsantwort, um die erforderliche `setWindowRect` Eigenschaft einzuschließen. ([Firefox Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Implementiert das `input.fileDialogOpened` Ereignis, das jedes Mal ausgelöst wird, wenn durch die Inhaltsseite ein Dateiauswahldialog geöffnet wird, beispielsweise nach dem Klicken auf ein Eingabeelement mit `type="file"`. ([Firefox Bug 1855045](https://bugzil.la/1855045)).
- Implementiert den `emulation.setScreenSettingsOverride` Befehl, um es Clients zu ermöglichen, die Bildschirmeinstellungen für eine Liste von Browsing-Kontexten oder Benutzerkontexten zu emulieren. ([Firefox Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden aktualisiert, um die Inhalts-Sicherheitsrichtlinie (CSP) zu umgehen. ([Firefox Bug 1941780](https://bugzil.la/1941780)).
- Ein fehlendes `script.realmCreated` Ereignis für neue Browsing-Kontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language` Header zu überschreiben. ([Firefox Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler auszulösen, wenn er mit dem Argument `locale` gleich `undefined` aufgerufen wird. ([Firefox Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Behebung der JSON-Serialisierung von Chrome-Fenstern. ([Firefox Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Manifest-Version 3-Erweiterungen können jetzt Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Content Security Policy Artikel erklärt wird. ([Firefox Bug 1864284](https://bugzil.la/1864284))

## Experimentelle Web-Features

In dieser Version wurden keine experimentellen Features hinzugefügt.
Überprüfen Sie die Seite für [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) für Features aus anderen Versionen.
