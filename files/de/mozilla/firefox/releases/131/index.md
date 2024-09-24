---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: b75ee70ffff37f149d3e9c2ccb1050909e3fdbe4
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für synchrone Iterator-Helfer, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne zwischendurch `Array`-Objekte erstellen zu müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie in [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) in der `Iterator`-Schnittstelle. ([Firefox Fehler 1896390](https://bugzil.la/1896390)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Ein {{HTTPHeader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt wurden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, unterliegen auch Cookies, die `SameSite` nicht angeben, dieser Einschränkung. ([Firefox Fehler 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), auch "partitionierte Cookies" genannt, werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie in einen partitionierten Speicher mit der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Anweisung des {{HTTPHeader("Set-Cookie")}} HTTP-Headers aufzunehmen. Wenn dies gesetzt ist, haben Cookies separaten Speicherplatz für jede oberste Site und können nur innerhalb derselben obersten Site gelesen werden, auf der sie gesetzt wurden, sowie deren Subdomains. Dies blockiert das Cross-Site-Tracking, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, wie das Beibehalten des Status von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg. ([Firefox Fehler 1908160](https://bugzil.la/1908160)).

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die {{domxref('PointerEvent.altitudeAngle','altitudeAngle')}} und {{domxref('PointerEvent.azimuthAngle','azimuthAngle')}} Eigenschaften der {{domxref('PointerEvent')}}-Schnittstelle werden unterstützt und geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) bzw. die Drehung des Stifts relativ zur x-Achse über dem Bildschirm an. ([Firefox Fehler 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt, sodass Benutzer zu spezifischen Textabschnitten auf einer Webseite verlinken und diese hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel anhand von Mustern im gerenderten Text identifiziert.
  Website-Entwickler können auch die Existenz der {{domxref("Document.fragmentDirective")}} Eigenschaft (eine Instanz der {{domxref("FragmentDirective")}}-Schnittstelle) nutzen, um die Unterstützung von Textfragmenten zu prüfen, und das {{CSSxRef("::target-text")}} Pseudo-Element verwenden, um Text auszuwählen und zu gestalten, der über einen Textfragment-Link ausgewählt wurde. ([Firefox Fehler 1914877](https://bugzil.la/1914877))
- Die {{domxref('Document/caretPositionFromPoint','caretPositionFromPoint()')}} Methode der {{domxref("Document")}}-Schnittstelle wurde aktualisiert, sodass sie den Textknoten und den Offset für eine Cursorposition innerhalb eines Shadow DOM zurückgeben kann, vorausgesetzt die dem Punkt entsprechende Schattenwurzel wurde der Methode übergeben. {{domxref("ShadowRoot")}} Objekte können der Methode über die `shadowRoots` Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.onUpdated")}} wird nun ausgelöst, wenn `openerTabId` über `tabs.update()` geändert wird ([Firefox Fehler 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` gesetzt auf `-1`, um `openerTabId` zu löschen ([Firefox Fehler 1409262](https://bugzil.la/1409262)).

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 131 eingeführt, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren regulärer Ausdrücke ermöglichen es Ihnen, Änderungen nur auf einen bestimmten Teil eines Regex-Musters anzuwenden. ([Firefox Fehler 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`

  Die `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der {{domxref("Permissions.query()")}} Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert wurde oder noch Benutzerzustimmung erfordert ([Firefox Fehler 1609427](https://bugzil.la/1609427), [Firefox Fehler 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
