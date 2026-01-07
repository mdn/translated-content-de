---
title: Firefox 147 Versionshinweise für Entwickler (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 07abeaf1c59b9b2a8099b9781e053d44289c0f75
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 147, die Entwickler betreffen.
Firefox 147 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [13. Januar 2026](https://whattrainisitnow.com/release/?version=147) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie die Überschriften hervor, zu denen Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Wenn eine SVG-Datei als [Bildquelle](/de/docs/Web/SVG/Guides/SVG_as_an_image) verwendet wird (zum Beispiel, wenn sie über ein {{htmlelement("img")}}-Element auf einer Seite eingebettet oder als CSS {{cssxref("background-image")}} verwendet wird), unterstützt die SVG-URL jetzt [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox-Bug 1999989](https://bugzil.la/1999989)). Das bedeutet:
  - Wenn das SVG eine [SMIL-Animation](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) enthält, können Sie die Syntax der [temporalen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) verwenden, um einen Teil der Animation von einer bestimmten Startzeit bis zu einer bestimmten Endzeit abzuspielen, wonach die Animation pausiert.
  - Sie können die Syntax der [räumlichen Dimension](/de/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) verwenden, um einen bestimmten Bereich des SVG-Dokuments anzuzeigen.

<!-- #### Entfernungen -->

### CSS

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) ist jetzt standardmäßig aktiviert.
  ([Firefox-Bug 1988225](https://bugzil.la/1988225)).
  - Der Wert [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center), der eine bequeme Möglichkeit bietet, ein ankerpositioniertes Element auf seinem Anker zu zentrieren, wurde in Version 147 hinzugefügt. Er ist verfügbar für die Eigenschaften {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}.
    ([Firefox-Bug 1909339](https://bugzil.la/1909339))
  - Der `none`-Wert von {{cssxref("position-anchor")}} wurde in Version 147 hinzugefügt, wodurch eine implizite oder explizite Zuordnung zwischen einem [CSS-Anker](/de/docs/Web/CSS/Guides/Anchor_positioning) und einem ankerpositionierten Element entfernt werden kann.
    ([Firefox-Bug 1999972](https://bugzil.la/1999972)).
- Die `-webkit-`-präfixierte Version der {{cssxref("perspective")}}-Eigenschaft wird jetzt mit einheitslosen Werten unterstützt — zum Beispiel `-webkit-perspective: 800` — für erhöhte Kompatibilität.
  ([Firefox-Bug 1362499](https://bugzil.la/1362499)).
- [Ansichtsübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) werden jetzt unterstützt, die einen Mechanismus bereitstellen, durch den unterschiedliche **Typen** für aktive Ansichtsübergänge angegeben werden können. CSS kann dann verwendet werden, um Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom angegebenen Übergangstyp. Firefox 147 fügt Unterstützung für Ansichtsübergangstypen von Einzelseitenanwendungen (SPA) hinzu, nicht jedoch für Übergangstypen über Dokumente hinweg.
  ([Firefox-Bug 2001878](https://bugzil.la/2001878)).
- Die Eigenschaften {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} und {{cssxref("quotes")}} werden jetzt auf dem {{cssxref("::marker")}}-Pseudo-Element unterstützt.
  ([Firefox-Bug 2000404](https://bugzil.la/2000404)).
- Die folgenden [relativen Längeneinheiten basierend auf der Schriftart des Wurz,elements](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) werden jetzt unterstützt: `rcap`, `rch`, `rex` und `ric`. Diese Einheiten erlauben es Ihnen, \<length>-Werte basierend auf der Größe eines bestimmten Zeichens oder einer Schriftarteigenschaft des [Wurz](/de/docs/Web/CSS/Reference/Selectors/:root)-Elements zu definieren.
  ([Firefox-Bug 1740584](https://bugzil.la/1740584)).

<!-- #### Entfernungen -->

### JavaScript

- CSS-Modulscripte werden jetzt unterstützt, sodass ein Stylesheet in ein Script als eine Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) geladen werden kann, indem das Schlüsselwort [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und das [`type`-Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` verwendet werden.
  ([Firefox-Bug 1986681](https://bugzil.la/1986681)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) wird jetzt unterstützt, die eine Instanz von [`ViewTransition`](/de/docs/Web/API/ViewTransition) zurückgibt, die den derzeit aktiven [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) im Dokument darstellt. Dies bietet eine konsistente Möglichkeit, auf einen aktiven Ansichtsübergang in jedem Kontext zuzugreifen, ohne manuell eine Referenz darauf speichern zu müssen, um sie später zu verwenden. ([Firefox-Bug 2001836](https://bugzil.la/2001836)).
- Die Unterstützung der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist jetzt für alle macOS-Versionen auf Geräten mit Apple Silicon Prozessoren aktiviert (zuvor war nur die Unterstützung für macOS Tahoe aktiviert). ([Firefox-Bug 1993341](https://bugzil.la/1993341)).
- Die [Navigations-API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Dies bietet die Möglichkeit, Browser-Navigationsaktionen einzuleiten, abzufangen und zu verwalten sowie die Historieneinträge einer Anwendung zu untersuchen. Dies ist ein Nachfolger zu früheren Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Einzelseitenanwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1997962](https://bugzil.la/1997962)).
- Die Brotli-Komprimierung wird jetzt sowohl für [`CompressionStream`](/de/docs/Web/API/CompressionStream/CompressionStream#brotli) als auch für [`DecompressionStream`](/de/docs/Web/API/DecompressionStream/DecompressionStream#brotli) unterstützt.
  ([Firefox-Bug 1921583](https://bugzil.la/1921583)).
- Service-Worker können jetzt ECMAScript-[Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) sein.
  Um ein Service-Worker-Modul zu laden, geben Sie einen [`type`](/de/docs/Web/API/ServiceWorkerContainer/register#type) von `'module'` an, wenn Sie [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) aufrufen.
  ([Firefox-Bug 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Der neue Sitzungsantwort wurde behoben, um die erforderliche `setWindowRect`-Eigenschaft zu enthalten. ([Firefox-Bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Das `input.fileDialogOpened`-Ereignis wurde implementiert, das immer dann ausgelöst wird, wenn ein Dateiauswahldialog von der Inhaltsseite ausgestellt wird, zum Beispiel nach dem Klicken auf ein Eingabeelement mit `type="file"`. ([Firefox-Bug 1855045](https://bugzil.la/1855045)).
- Der Befehl `emulation.setScreenSettingsOverride` wurde implementiert, um es Clients zu ermöglichen, die Bildschirmabmessungen für eine Liste von Browser- oder Benutzerkontexten zu emulieren. ([Firefox-Bug 2000651](https://bugzil.la/2000651)).
- Ein Problem wurde behoben, bei dem `browsingContext.navigate` mit `wait=none` nicht immer die tatsächliche Ziel-URL enthielt. ([Firefox-Bug 2004191](https://bugzil.la/2004191)).
- `script.evaluate` und `script.callFunction` wurden so aktualisiert, dass sie die Content-Security-Policy (CSP) umgehen. ([Firefox-Bug 1941780](https://bugzil.la/1941780)).
- Ein fehlendes `script.realmCreated`-Ereignis für neue Browserkontexte, die über `window.open` erstellt wurden, wurde behoben. ([Firefox-Bug 2002721](https://bugzil.la/2002721)).
- `emulation.setLocaleOverride` wurde aktualisiert, um den `Accept-Language`-Header zu überschreiben. ([Firefox-Bug 1995691](https://bugzil.la/1995691)).
- `emulation.setLocaleOverride` wurde aktualisiert, um einen Fehler zu erzeugen, wenn es mit dem Argument `locale` gleich `undefined` aufgerufen wird. ([Firefox-Bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Die JSON-Serialisierung von Chrome-Fenstern wurde behoben. ([Firefox-Bug 2000801](https://bugzil.la/2000801)).

## Änderungen für Add-on-Entwickler

- Temporär geladene Erweiterungen der Manifest-Version 3 können jetzt Skripte von localhost laden, wie in [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) im Artikel zur Content-Security-Policy beschrieben. ([Firefox-Bug 1864284](https://bugzil.la/1864284))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 147 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
