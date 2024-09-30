---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: f03f446e23a3f84a0b06579781c0600cde53ee28
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) ausgeliefert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft `inset-area` wurde umbenannt in {{CSSXRef("position-area")}} zur Vorbereitung für die weitere Implementierung der [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning). Derzeit wird diese Eigenschaft nur intern für das Parsen von Werten verwendet. Die Funktionen der Ankerpositionierung werden schrittweise hinter einer Voreinstellung freigegeben. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS-Ankerpositionierung](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Fehler 1909358](https://bugzil.la/1909358) und [Firefox Fehler 1838746](https://bugzil.la/1838746)).

#### Entfernungen

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsfunktionen, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese erlauben `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischen-`Array`-Objekte erstellt werden müssen, und können auch mit sehr großen Datenmengen verwendet werden, bei denen die Erstellung eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsfunktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) in der `Iterator`-Schnittstelle. ([Firefox Fehler 1896390](https://bugzil.la/1896390)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut umfassen. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt wurden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht angegebenen `SameSite`-Wert als `SameSite=None` interpretiert, haben Cookies, die `SameSite` nicht spezifizieren, die gleiche Einschränkung. ([Firefox Fehler 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden nun unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie mithilfe der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in eine partitionierte Speicherung zu integrieren. Bei Aktivierung haben Cookies einen separaten Speicher für jede Top-Level-Website und können nur innerhalb der gleichen Top-Level-Website, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert das Cross-Site-Tracking und ermöglicht gleichzeitig legitime Verwendungen von Drittanbieter-Cookies wie das Persistieren des Zustands von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox Fehler 1908160](https://bugzil.la/1908160)).

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden unterstützt und liefern den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Rotation des Stifts über den Bildschirm relativ zur x-Achse. ([Firefox Fehler 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt, wodurch Benutzer Links zu bestimmten Textabschnitten auf einer Webseite erstellen und diese hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Website-Entwickler können auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) nutzen, um auf die Unterstützung von Textfragmenten zu prüfen, und das {{CSSxRef("::target-text")}} Pseudo-Element, um Text zu markieren und zu stylen, der durch einen Textfragment-Link ausgewählt wurde. ([Firefox Fehler 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, sodass sie den Textknoten und den Offset für eine Caret-Position innerhalb eines Shadow DOM zurückgeben kann, vorausgesetzt, dass der zum Punkt gehörende Shadow-Wurzel dem Verfahren übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können dem Verfahren mit der `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments übergeben werden. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Sowohl für WebDriver Classic als auch BiDi akzeptieren die Aktionen `keyUp` und `keyDown` keine mehreren Zeichen mehr für den `value` ([Firefox Fehler 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Cookies- und Header-Argumente ([Firefox Fehler 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified") ([Firefox Fehler 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird jetzt zurückgegeben, wenn das Argument `wait` auf `none` gesetzt ist und ein beforeunload-Prompt ausgelöst wird ([Firefox Fehler 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` gibt einen `unknown error` in allen Fällen zurück, in denen ein Navigationsfehler auftritt, wie es die Spezifikation verlangt ([Firefox Fehler 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort einschließen, wenn sie nicht explizit vom Client als Argument angegeben wurde ([Firefox Fehler 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Fehler 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` mit dem Wert `-1`, um `openerTabId` zu löschen ([Firefox Fehler 1409262](https://bugzil.la/1409262)).

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 131 integriert, jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Voreinstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck-Modifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdruck-Modifikatoren ermöglichen es Ihnen, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden zu lassen. ([Firefox Fehler 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`

  Die [Berechtigungen](/de/docs/Web/API/Permissions_API) `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu überprüfen, ob der Zugriff auf die entsprechenden Geräte gewährt, verweigert wurde oder noch eine Benutzerzustimmung erforderlich ist ([Firefox Fehler 1609427](https://bugzil.la/1609427), [Firefox Fehler 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
