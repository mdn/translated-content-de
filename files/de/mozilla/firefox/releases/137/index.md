---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 24df08617c877ca0254f2bb23c5a0e0eb190c0aa
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen.
Firefox 137 wurde am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine feingranulare Kontrolle über die Silbentrennung im Text. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich zu spezifizieren. ([Firefox Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert jetzt die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der Kurzschrift {{cssxref("text-decoration")}}. ([Firefox Bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist genauer als das Summieren der Zahlen in einer Schleife, da sie den Verlust von Gleitpunktgenauigkeit in Zwischenergebnissen vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird jetzt unterstützt. Diese Methode gibt einen Hinweis an die CPU, dass der aktuelle Thread sich in einer Spinlock befindet, während er auf den Zugriff auf eine freigegebene Ressource wartet. Das System kann dann die Ressourcen, die dem Kern (wie Energie) oder dem Thread zugewiesen sind, reduzieren, ohne den aktuellen Thread aufzugeben. ([Firefox Bug 1937805](https://bugzil.la/1937805)).

### SVG

- Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle. Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, zu dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen. Ein SVG-Viewer kann diese Information nutzen, um Speicher zu sparen, indem Elemente, die nicht mehr benötigt werden, wie z.B. abgeschlossene Animationselemente, verworfen werden. ([Firefox Bug 1945330](https://bugzil.la/1945330)).

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgen-Daten zu analysieren. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist nun hardwareseitig auf Android aktiviert und sowohl hardware- als auch softwareseitig auf Linux. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernte Funktionen

- Die folgenden nicht standardmäßigen Ereignisse sind jetzt veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Eingangsquellen vom Typ `mouse` und `touch` unterstützen jetzt Bruchzahlen für x- und y-Positionen für die `pointerMove`-Aktion ([Firefox Bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Neue Befehle `webExtension.install` ([Firefox Bug 1934551](https://bugzil.la/1934551)) und `webExtension.uninstall` ([Firefox Bug 1934553](https://bugzil.la/1934553)) implementiert, die es Clients ermöglichen, Web-Erweiterungen im Browser zu installieren und zu deinstallieren.
- Unterstützung für das Argument `userContexts` zum Befehl `sessions.subscribe` hinzugefügt, das es Clients erlaubt, sich bei einer Liste von Benutzerkontexten (auch als Firefox-Container bekannt) anzumelden ([Firefox Bug 1938604](https://bugzil.la/1938604)).
- Der Befehl `script.addPreloadScript` wurde aktualisiert, um einen `invalid argument` Fehler auszulösen, wenn sowohl `contexts` als auch `userContexts` Argumente bereitgestellt werden ([Firefox Bug 1945554](https://bugzil.la/1945554)).
- Der Befehl `browsingContext.navigate` wird nicht mehr sofort zurückkehren, wenn das Argument `wait` gleich `none` ist und das `beforeunload`-Prompt geöffnet wird. Das ist der erste Schritt, um die Logik hinter dem Argument `wait` gleich `none` zu aktualisieren ([Firefox Bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- Von jetzt an enthält ein `javascript error` durch einen Syntaxfehler, der durch Skriptbewertung ausgelöst wird, Zeilen- und Spaltennummer ([Firefox Bug 1865146](https://bugzil.la/1865146)).
- Aktionen mit aktivierten asynchronen Ereignissen durchzuführen, wird nicht mehr mit der Fehlermeldung `Cyclic object value` fehlschlagen ([Firefox Bug 1947112](https://bugzil.la/1947112)). Asynchrone Ereignisse sind seit Firefox 135 aktiviert. Weitere Details finden Sie in den [Versionshinweisen](/de/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite "Verknüpfungen für Erweiterungen verwalten" in "Erweiterungen verwalten" (`about:addons`) öffnet und, wenn die Erweiterung Verknüpfungen hat, zu den Verknüpfungseinstellungen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB-Kontingent für Daten, die über die {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 137 aktiviert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
