---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 48d5355da68a986ba2434d275b7d1ddcc0d5d207
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen die Möglichkeit, die Silbentrennung im Text fein abzustimmen. Sie wird verwendet, um die Mindestlänge von Wörtern für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Trennstrich festzulegen. ([Firefox Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert nun die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden die Browser-Stilregeln für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften im {{cssxref("text-decoration")}} Kurzschreibweise. ([Firefox Bug 1950844](https://bugzil.la/1950844)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese Methode nimmt ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie den Verlust von Gleitkommapräzision in Zwischenresultaten vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird jetzt unterstützt. Diese Methode gibt der CPU einen Hinweis, dass der aktuelle Thread in einer Spinlock ist, während er auf den Zugriff auf eine geteilte Ressource wartet. Das System kann dann die Ressourcen, die dem Kern (z. B. Energie) oder dem Thread zugewiesen sind, reduzieren, ohne den aktuellen Thread freizugeben. ([Firefox Bug 1937805](https://bugzil.la/1937805)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit der entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Das Element erlaubt es Entwicklern, eine Auslösezeit oder ein Ereignis zu spezifizieren, bei dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Informationen nutzen, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. abgeschlossene animierte Elemente.
  ([Firefox Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt auf Android hardwarebeschleunigt und sowohl hardware- als auch softwaremäßig auf Linux aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind jetzt veraltet und werden zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen des Typs `mouse` und `touch` unterstützen jetzt Bruchzahlen für x- und y-Positionen für die `pointerMove`-Aktion ([Firefox Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue `webExtension.install` ([Firefox Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox Bug 1934553](https://bugzil.la/1934553)) Befehle wurden implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das `userContexts` Argument zum `sessions.subscribe` Befehl hinzugefügt, welches es Clients ermöglicht, sich in eine Liste von Benutzerkontexten (auch bekannt als Firefox-Container) einzuschreiben ([Firefox Bug 1938604](https://bugzil.la/1938604)).
- Der `script.addPreloadScript` Befehl wurde aktualisiert, um einen `invalid argument` Fehler auszulösen, wenn sowohl `contexts` als auch `userContexts` Argumente angegeben sind ([Firefox Bug 1945554](https://bugzil.la/1945554)).
- Der `browsingContext.navigate` Befehl kehrt jetzt nicht mehr sofort zurück, wenn das `wait` Argument `none` entspricht und das beforeunload-Eingabeaufforderung öffnet. Das ist der erste Schritt zur Aktualisierung der Logik hinter dem `wait` Argument gleich `none` ([Firefox Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Ab sofort enthält ein `javascript error` bei einem Syntaxfehler, der durch die Skriptauswertung auftritt, Zeilen- und Spaltennummer ([Firefox Bug 1865146](https://bugzil.la/1865146)).
- Aktionen, die mit asynchronen Ereignissen ausgeführt werden, schlagen nicht mehr mit der Fehlermeldung `Cyclic object value` fehl ([Firefox Bug 1947112](https://bugzil.la/1947112)).
  Asynchrone Ereignisse wurden seit Firefox 135 aktiviert. Weitere Details finden Sie in den [Release Notes](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, das die Seite "Verwalten Sie Ihre Erweiterungen" (`about:addons`) öffnet und, wenn die Erweiterung Tastenkombinationen hat, zu den Tastenkombinationen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Die 10 MB-Quote für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Release): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
