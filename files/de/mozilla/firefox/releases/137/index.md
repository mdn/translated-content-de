---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 137, die Entwickler betreffen.
Firefox 137 wurde am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft bietet Ihnen eine feinkörnige Steuerung der Silbentrennung im Text. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Trennstrich festzulegen. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).
- Die {{cssxref("text-decoration-line")}} CSS-Eigenschaft akzeptiert nun die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der {{cssxref("text-decoration")}} Kurzschreibweise. ([Firefox-Bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird nun unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie z.B. ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie einen Verlust an Gleitkommapräzision in Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird nun unterstützt. Diese Methode bietet der CPU einen Hinweis darauf, dass der aktuelle Thread in einer Spinlock-Schleife ist, während auf den Zugriff auf eine gemeinsam genutzte Ressource gewartet wird. Das System kann dann die zugewiesenen Ressourcen für den Kern (wie Strom) oder den Thread reduzieren, ohne den aktuellen Thread freizugeben. ([Firefox-Bug 1937805](https://bugzil.la/1937805)).

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Interfaces werden nun unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox-Bug 1945312](https://bugzil.la/1945312)).

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist nun hardwaremäßig auf Android aktiviert und auf Linux sowohl hardware- als auch softwaremäßig aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind nun veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) im [`Document`](/de/docs/Web/API/Document) sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen des Typs `mouse` und `touch` unterstützen nun gebrochene Zahlen für x- und y-Positionen bei der `pointerMove`-Aktion ([Firefox-Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue `webExtension.install` ([Firefox-Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox-Bug 1934553](https://bugzil.la/1934553)) Befehle implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das `userContexts`-Argument zum `sessions.subscribe`-Befehl hinzugefügt, das es Clients ermöglicht, sich für eine Liste von Benutzerkontexten (auch bekannt als Firefox-Container) zu registrieren
  ([Firefox-Bug 1938604](https://bugzil.la/1938604)).
- Der `script.addPreloadScript`-Befehl wurde aktualisiert, um einen `invalid argument`-Fehler zu werfen, wenn sowohl `contexts` als auch `userContexts` Argumente bereitgestellt werden ([Firefox-Bug 1945554](https://bugzil.la/1945554)).
- Der `browsingContext.navigate`-Befehl wird nicht mehr sofort zurückkehren, wenn das `wait` Argument `none` gleich ist und das beforeunload Prompt geöffnet wird. Das ist der erste Schritt zur Aktualisierung der Logik hinter dem Argument `wait` gleich `none` ([Firefox-Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Ab sofort wird ein `javascript error` von einem Syntaxfehler, der durch die Skriptauswertung auftritt, Zeilen- und Spaltennummern enthalten ([Firefox-Bug 1865146](https://bugzil.la/1865146)).
- Das Ausführen von Aktionen mit aktivierten asynchronen Ereignissen wird nicht mehr mit der Fehlermeldung `Cyclic object value` fehlschlagen ([Firefox-Bug 1947112](https://bugzil.la/1947112)).
  Asynchrone Ereignisse wurden seit Firefox 135 aktiviert. Weitere Details finden Sie in den [Release Notes](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, das die Seite "Erweiterungskurzbefehle verwalten" in "Verwalten Sie Ihre Erweiterungen" (`about:addons`) öffnet und, falls die Erweiterung Kurzbefehle hat, zu den Tastenkombinationsoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB Limit für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 137, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Veröffentlichung): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderrepräsentationen. ([Firefox-Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
