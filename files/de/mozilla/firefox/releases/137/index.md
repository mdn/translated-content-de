---
title: Firefox 137 Versionshinweise für Entwickler
short-title: Firefox 137
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 137, die Entwickler betreffen.
Firefox 137 wurde am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft bietet Ihnen eine detaillierte Kontrolle über die Silbentrennung in Texten. Sie wird verwendet, um die minimale Wortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).
- Die {{cssxref("text-decoration-line")}} CSS-Eigenschaft akzeptiert jetzt die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden die Formatierungen des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der {{cssxref("text-decoration")}} Kurzform. ([Firefox-Bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- Die {{jsxref("Math.sumPrecise()")}} statische Methode wird nun unterstützt. Diese nimmt ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie z.B. ein {{jsxref("Array")}}) von Zahlen an und gibt deren Summe zurück. Sie ist präziser als die Summe der Zahlen in einer Schleife, da sie einen Verlust der Gleitkomma-Genauigkeit in den Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).
- Die {{jsxref("Atomics.pause()")}} statische Methode wird nun unterstützt. Diese Methode gibt der CPU einen Hinweis, dass der aktuelle Thread in einer Spinlock-Schleife auf den Zugriff auf eine gemeinsame Ressource wartet. Das System kann dann die den Kern (wie Strom) oder den Thread zugewiesenen Ressourcen reduzieren, ohne den aktuellen Thread freizugeben. ([Firefox-Bug 1937805](https://bugzil.la/1937805)).

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox-Bug 1945312](https://bugzil.la/1945312)).

#### Media, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist nun hardwareunterstützt auf Android und sowohl hardware- als auch softwareunterstützt auf Linux. Dies kommt zur bestehenden Hardware- und Softwareunterstützung auf Windows und macOS hinzu. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht-standardmäßigen Ereignisse sind nun veraltet und zur Entfernung vorgesehen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingabequellen des Typs `mouse` und `touch` unterstützen jetzt gebrochene Zahlen für x- und y-Positionen bei der `pointerMove` Aktion ([Firefox-Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue `webExtension.install` ([Firefox-Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox-Bug 1934553](https://bugzil.la/1934553)) Befehle wurden implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das `userContexts` Argument zum `sessions.subscribe` Befehl hinzugefügt, das es Clients erlaubt, eine Liste von Benutzerkontexten (auch bekannt als Firefox-Container) zu abonnieren ([Firefox-Bug 1938604](https://bugzil.la/1938604)).
- Der Befehl `script.addPreloadScript` wurde aktualisiert, um einen `invalid argument` Fehler auszulösen, wenn sowohl `contexts` als auch `userContexts` Argumente bereitgestellt werden ([Firefox-Bug 1945554](https://bugzil.la/1945554)).
- Der Befehl `browsingContext.navigate` wird nicht mehr sofort zurückkehren, wenn das `wait` Argument gleich `none` ist und ein `beforeunload` Hinweis geöffnet wird. Dies ist der erste Schritt zur Aktualisierung der Logik hinter dem `wait` Argument gleich `none` ([Firefox-Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Zukünftig wird ein `javascript error` aufgrund eines Syntaxfehlers, der durch die Skriptauswertung auftritt, die Zeilen- und Spaltennummer enthalten ([Firefox-Bug 1865146](https://bugzil.la/1865146)).
- Das Ausführen von Aktionen mit aktivierten asynchronen Ereignissen wird nicht mehr mit einer `Cyclic object value` Fehlermeldung fehlschlagen ([Firefox-Bug 1947112](https://bugzil.la/1947112)).
  Asynchrone Ereignisse sind seit Firefox 135 aktiviert. Weitere Details finden Sie in [den Versionshinweisen](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, das die Seite "Erweiterungstastenkombinationen verwalten" von "Erweiterungen verwalten" (`about:addons`) öffnet und, wenn die Erweiterung Tastenkombinationen hat, zu den Tastenkombinationsoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB Limit für Daten, die durch die {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 137 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie unter der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1946823](https://bugzil.la/1946823)).
