---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: f958f0183bccea955c8e0b27aca542d98c3c40f5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine feinkörnige Steuerung über die Silbentrennung im Text. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert jetzt die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der {{cssxref("text-decoration")}} Kurzform. ([Firefox Bug 1950844](https://bugzil.la/1950844)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird nun unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Addieren der Zahlen in einer Schleife, da sie den Verlust der Gleitkommapräzision in Zwischenwerten vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird nun unterstützt. Diese Methode gibt der CPU einen Hinweis, dass der aktuelle Thread in einem Spinlock ist, während er auf den Zugriff auf eine gemeinsame Ressource wartet. Das System kann dann die zugewiesenen Ressourcen für den Kern (wie Strom) oder den Thread reduzieren, ohne den aktuellen Thread abzugeben. ([Firefox Bug 1937805](https://bugzil.la/1937805)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird nun unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle. Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, zu dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen. Ein SVG-Betrachter kann diese Informationen nutzen, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. abgeschlossene animierte Elemente. ([Firefox Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathSegment/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathSegment/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathSegment/getPathSegmentAtLength) der Schnittstelle [`SVGPathSegment`](/de/docs/Web/API/SVGPathSegment) werden nun unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwaremäßig auf Android aktiviert und sowohl hardware- als auch softwaremäßig auf Linux aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardmäßigen Ereignisse sind jetzt veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen des Typs `mouse` und `touch` unterstützen jetzt Bruchzahlen für x- und y-Positionen bei der `pointerMove`-Aktion ([Firefox Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue Befehle `webExtension.install` ([Firefox Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox Bug 1934553](https://bugzil.la/1934553)) wurden implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das Argument `userContexts` zum `sessions.subscribe`-Befehl hinzugefügt, das es Clients erlaubt, sich auf eine Liste von Benutzerkontexten (auch bekannt als Firefox-Container) zu abonnieren ([Firefox Bug 1938604](https://bugzil.la/1938604)).
- Der `script.addPreloadScript`-Befehl wurde so aktualisiert, dass er einen `invalid argument`-Fehler auslöst, wenn sowohl `contexts` als auch `userContexts`-Argumente angegeben sind ([Firefox Bug 1945554](https://bugzil.la/1945554)).
- Der `browsingContext.navigate`-Befehl wird nicht mehr sofort zurückkehren, wenn das `wait`-Argument gleich `none` ist und ein `beforeunload`-Prompt geöffnet wird. Das ist der erste Schritt zur Aktualisierung der Logik hinter `wait`-Argument gleich `none` ([Firefox Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Ab sofort wird ein `javascript error` bei einem Syntaxfehler, der durch die Skriptausführung hervorgerufen wird, Zeilen- und Spaltennummern enthalten ([Firefox Bug 1865146](https://bugzil.la/1865146)).
- Aktionen mit aktivierten asynchronen Ereignissen führen nicht mehr zu einem Fehler mit der Meldung `Cyclic object value` ([Firefox Bug 1947112](https://bugzil.la/1947112)). Asynchrone Ereignisse sind seit Firefox 135 aktiviert. Weitere Details finden Sie in [den Versionshinweisen](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite "Erweiterungen verwalten" von `about:addons` öffnet und, falls die Erweiterung Shortcuts hat, zu den Shortcut-Tastenoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10-MB-Kontingent für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 implementiert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite für [experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
