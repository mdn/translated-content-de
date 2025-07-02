---
title: Firefox 123 für Entwickler
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow-DOM-Unterbaums ermöglicht. Das Attribut kann entweder auf `open` oder `closed` gesetzt werden, was JavaScript im Shadow-DOM entweder von externem Code sichtbar macht oder verbirgt. Diese Werte entsprechen den `mode`-Optionen der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. ([Firefox-Bug 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Das globale Objekt {{jsxref("Date.parse()")}} wurde um eine Reihe von Bugfixes erweitert, um die Parsergebnisse an andere Browser anzugleichen.
  - Falsche Tagesangaben im Monat (z.B. "31. April") werden nun auf den folgenden Monat (z.B. "1. Mai") überschrieben. ([Firefox-Bug 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzonenangaben (z.B. "1/1/70 gm") oder AM/PM-Angaben (z.B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox-Bug 1870570](https://bugzil.la/1870570)).
  - Einzelne Zahl-Angaben bei Daten werden jetzt akzeptiert (z.B. `Date.parse("0")` gibt jetzt `946684800000` - Sa, 01. Jan. 2000 00:00:00 zurück). ([Firefox-Bug 1870434](https://bugzil.la/1870434)).

### SVG

- Die {{SVGElement("linearGradient")}}- und {{SVGElement("radialGradient")}}-SVG-Elemente unterstützen jetzt die Änderung des Farbraums auf `linearRGB` oder `sRGB` über das {{SVGAttr("color-interpolation")}}-Attribut. Dies kann auch auf die SVG-Elemente über die {{CSSXref("color-interpolation")}}-CSS-Eigenschaft angewendet werden.

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) für [vorbereitende Antworten](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist jetzt für das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigt, während der Server die vollständige Antwort noch vorbereitet.
  Dies kann die Ladezeit der Seite erheblich verkürzen.
  Beachten Sie, dass die Unterstützung für die Verwendung des Headers `103 Early Hints` zum [Preconnecting](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde.
  Für weitere Details siehe [Firefox-Bug 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt jetzt die Erstellung von Anmeldedaten über verschiedene Ursprünge hinweg.
  Insbesondere kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) in eingebetteten Browsing-Kontexten aufgerufen werden, die von einem anderen Ursprung als das oberste Dokument geladen werden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) auf dem obersten Nesting-[`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) erlaubt ist.
  ([Firefox-Bug 1870863](https://bugzil.la/1870863)).

#### DOM

- Die benutzerdefinierte Lokalisierungsunterstützung für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wurde veraltet, einschließlich des [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale)-Parameters für `IDBObjectStore.createIndex()`, sowie der `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale).
  ([Firefox-Bug 1872675](https://bugzil.la/1872675) und [Firefox-Bug 1730706](https://bugzil.la/1730706)).

#### Medien, WebRTC und Web Audio

#### Entfernung

Das `IDBLocaleAwareKeyRange`-Interface wurde entfernt ([Firefox-Bug 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Netzwerk-Anfrage fehlerhaft endet ([Firefox-Bug 1790375](https://bugzil.la/1790375)).
- Unterstützung für den [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes)-Befehl wurde eingeführt, um Elemente auf der gegebenen Seite zu finden. Unterstützte Locator sind derzeit `CssLocator` ([Firefox-Bug 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox-Bug 1869536](https://bugzil.la/1869536)).
- Der [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl auf Android wurde verbessert, um nahtlos zu einem neuen Tab zu wechseln, wenn das `type`-Argument als `window` angegeben ist ([Firefox-Bug 1875086](https://bugzil.la/1875086)).
- Ein Problem im Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein eines nicht standardmäßigen (ISO 8601) Datumsstrings wie `200009` keinen Fehler auslöste ([Firefox-Bug 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-, [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction)- und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown)-Befehlen wurde behoben, bei dem die Angabe sowohl des `context`- als auch des `realm`-Arguments zu einem `invalid argument`-Fehler führte, anstatt das `realm`-Argument einfach zu ignorieren, wie beabsichtigt ([Firefox-Bug 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler mit [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) wurde behoben, bei dem das Senden von Texten, die Surrogatpaare enthalten, fehlschlug ([Firefox-Bug 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("contextualIdentities.move")}}-Funktion ermöglicht es, Elemente in der Liste der kontextuellen Identitäten zu verschieben. Diese Funktion ermöglicht Erweiterungen, die Reihenfolge anzupassen, in der kontextuelle Identitäten in der Benutzeroberfläche angezeigt werden ([Firefox-Bug 1333395](https://bugzil.la/1333395)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 123 und standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden auf Linux-Desktops unter Nightly unterstützt.
  Dazu gehören: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace).
  ([Firefox-Bug 1874445](https://bugzil.la/1874445)).

## Ältere Versionen

{{Firefox_for_developers}}
