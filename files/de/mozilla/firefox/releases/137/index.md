---
title: Firefox 137 für Entwickler
short-title: Firefox 137
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen.
Firefox 137 wurde am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft bietet Ihnen eine feine Kontrolle über die Silbentrennung im Text. Sie wird verwendet, um die minimale Wortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).
- Die {{cssxref("text-decoration-line")}} CSS-Eigenschaft akzeptiert jetzt die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften im {{cssxref("text-decoration")}}-Kurzform. ([Firefox-Bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie den Verlust der Genauigkeit von Gleitkommazahlen in Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird jetzt unterstützt. Diese Methode gibt dem CPU einen Hinweis, dass der aktuelle Thread in einer Spinlock wartet, während er auf den Zugriff auf eine gemeinsame Ressource wartet. Das System kann dann die dem Kern oder Thread zugewiesenen Ressourcen reduzieren, ohne den aktuellen Thread freizugeben. ([Firefox-Bug 1937805](https://bugzil.la/1937805)).

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Interfaces werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox-Bug 1945312](https://bugzil.la/1945312)).

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwareunterstützt auf Android sowie hardware- und softwareunterstützt auf Linux. Dies ergänzt die vorhandene Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind nun veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document) sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen vom Typ `mouse` und `touch` unterstützen jetzt Bruchzahlen für x- und y-Positionen für die `pointerMove`-Aktion ([Firefox-Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue Befehle `webExtension.install` ([Firefox-Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox-Bug 1934553](https://bugzil.la/1934553)) implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das Argument `userContexts` zum Befehl `sessions.subscribe` hinzugefügt, wodurch Clients sich bei einer Liste von Benutzerkontexten (auch bekannt als Firefox-Container) anmelden können ([Firefox-Bug 1938604](https://bugzil.la/1938604)).
- Der Befehl `script.addPreloadScript` wurde aktualisiert, um bei gleichzeitiger Angabe der Argumente `contexts` und `userContexts` einen `invalid argument`-Fehler auszulösen ([Firefox-Bug 1945554](https://bugzil.la/1945554)).
- Der Befehl `browsingContext.navigate` wird nicht mehr sofort zurückkehren, wenn das `wait`-Argument `none` entspricht und das `beforeunload`-Prompt geöffnet wird. Dies ist der erste Schritt zur Aktualisierung der Logik hinter `wait`-Argument gleich `none` ([Firefox-Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Ab jetzt enthält ein `javascript error` aus einem Syntaxfehler, der durch die Skriptauswertung ausgelöst wird, Zeilen- und Spaltennummern ([Firefox-Bug 1865146](https://bugzil.la/1865146)).
- Aktionen mit aktivierten asynchronen Ereignissen werden nicht mehr mit der Fehlermeldung `Cyclic object value` fehlschlagen ([Firefox-Bug 1947112](https://bugzil.la/1947112)).
  Asynchrone Ereignisse sind seit Firefox 135 aktiviert. Weitere Details finden Sie in [den Release-Notes](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite Verwalten von Erweiterungskurzbefehlen der Erweiterungen verwalten (`about:addons`) öffnet und, wenn die Erweiterung Kurzbefehle hat, zu den Optionen der Kurzbefehltasten der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB Kontingent für die von der {{WebExtAPIRef("storage.session")}} API gespeicherten Daten wird jetzt durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 137 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist nun standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien vereinfachen, mit integrierter Unterstützung für Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1946823](https://bugzil.la/1946823)).
