---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 63cac9936f06f3eb8d4ef52fd8ef1e507f1123fa
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 wurde am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine feingranulierte Kontrolle über die Silbentrennung in Texten. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert jetzt die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften im {{cssxref("text-decoration")}} Kurzschreibweise. ([Firefox Bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese akzeptiert ein [iterables Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie den Verlust der Gleitkommapräzision bei Zwischenresultaten vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird jetzt unterstützt. Diese Methode gibt der CPU einen Hinweis, dass der aktuelle Thread in einer Spinlock ist, während darauf gewartet wird, auf eine gemeinsam genutzte Ressource zuzugreifen. Das System kann dann die für den Kern (wie Energie) oder Thread zugewiesenen Ressourcen reduzieren, ohne den aktuellen Thread aufzugeben. ([Firefox Bug 1937805](https://bugzil.la/1937805)).

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwarebeschleunigt auf Android und sowohl hardware- als auch softwarebeschleunigt auf Linux. Dies ergänzt die vorhandene Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind nun veraltet und für die Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen vom Typ `mouse` und `touch` unterstützen jetzt Bruchzahlen für x- und y-Positionen für die `pointerMove` Aktion ([Firefox Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue `webExtension.install` ([Firefox Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox Bug 1934553](https://bugzil.la/1934553)) Befehle implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das `userContexts` Argument zum `sessions.subscribe` Befehl hinzugefügt, wodurch es Clients ermöglicht wird, sich auf eine Liste von Benutzerkontexten (auch bekannt als Firefox Container) zu abonnieren ([Firefox Bug 1938604](https://bugzil.la/1938604)).
- Der `script.addPreloadScript` Befehl wurde aktualisiert, um einen `invalid argument` Fehler auszulösen, wenn sowohl `contexts` als auch `userContexts` Argumente bereitgestellt werden ([Firefox Bug 1945554](https://bugzil.la/1945554)).
- Der `browsingContext.navigate` Befehl wird nicht mehr sofort zurückkehren, wenn das `wait` Argument gleich `none` ist und sich die vor dem Schließen prompt öffnet. Dies ist der erste Schritt zur Aktualisierung der Logik hinter dem `wait` Argument gleich `none` ([Firefox Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Von nun an wird ein `javascript error` bei einem Syntaxfehler, der durch eine Skriptauswertung ausgelöst wird, eine Zeilen- und Spaltennummer enthalten ([Firefox Bug 1865146](https://bugzil.la/1865146)).
- Aktionen mit aktivierten asynchronen Ereignissen führen nicht mehr zu einem `Cyclic object value` Fehler ([Firefox Bug 1947112](https://bugzil.la/1947112)).
  Asynchrone Ereignisse sind seit Firefox 135 aktiviert. Weitere Details finden Sie in den [Release Notes](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, welche die Seite „Erweiterungskurzbefehle verwalten“ von „Ihre Erweiterungen verwalten“ (`about:addons`) öffnet und, falls die Erweiterung Kurzbefehle hat, zu den Kurzbefehlsoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB Limit für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 137, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
