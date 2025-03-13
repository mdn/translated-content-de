---
title: Firefox 123 für Entwickler
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

### HTML

- Das {{htmlelement("template")}}-Element unterstützt nun ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow DOM-Teilbaums ermöglicht. Das Attribut kann auf `open` oder `closed` gesetzt werden, wodurch JavaScript im Shadow DOM entweder für externen Code sichtbar wird oder verborgen bleibt. Diese Werte entsprechen den `mode`-Optionen der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. ([Firefox-Bug 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Am globalen Objekt {{jsxref("Date.parse()")}} wurden mehrere Fehler behoben, um es mit der Art und Weise, wie andere Browser die übergebenen Werte analysieren, in Einklang zu bringen.
  - Ein falsches Datum (z. B. "31. April") springt nun zum folgenden Monat (z. B. "1. Mai"). ([Firefox-Bug 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzone (z. B. "1/1/70 gm") oder AM/PM (z. B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox-Bug 1870570](https://bugzil.la/1870570)).
  - Einzeln nummerierte Daten werden jetzt akzeptiert (z. B. `Date.parse("0")` gibt nun `946684800000` - Sa, 01. Jan 2000 00:00:00 zurück). ([Firefox-Bug 1870434](https://bugzil.la/1870434)).

### SVG

- Die {{SVGElement("linearGradient")}}- und {{SVGElement("radialGradient")}} SVG-Elemente unterstützen jetzt die Änderung des Farbraums auf `linearRGB` oder `sRGB` über das {{SVGAttr("color-interpolation")}}-Attribut. Dies kann auch auf die SVG-Elemente über die {{CSSXref("color-interpolation")}}-CSS-Eigenschaft angewendet werden.

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) für [informatorische Antworten](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist nun für das [Vorladen](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigt, während der Server noch die vollständige Antwort vorbereitet.
  Dies kann die Ladezeit der Seite erheblich reduzieren.
  Beachten Sie, dass die Unterstützung der Verwendung des `103 Early Hints`-Headers für das [Vorverbinden](/de/docs/Web/HTML/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde.
  Weitere Details finden Sie im [Firefox-Bug 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt nun die Erstellung von Anmeldeinformationen über verschiedene Ursprünge hinweg.
  Insbesondere kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) nun in verschachtelten Browserkontexten aufgerufen werden, die von einem anderen Ursprung als das oberste Dokument geladen wurden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) auf der obersten Verschachtelungsebene im [`<iframe>`](/de/docs/Web/HTML/Element/iframe#allow) erlaubt ist.
  ([Firefox-Bug 1870863](https://bugzil.la/1870863)).

#### DOM

- Die Unterstützung von benutzerdefinierten Gebietsschemas für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wurde eingestellt, einschließlich des [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale)-Parameters für `IDBObjectStore.createIndex()`, sowie der `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale).
  ([Firefox-Bug 1872675](https://bugzil.la/1872675) und [Firefox-Bug 1730706](https://bugzil.la/1730706)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

Das `IDBLocaleAwareKeyRange`-Interface wurde entfernt ([Firefox-Bug 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Netzwerkabfrage mit einem Fehler endet ([Firefox-Bug 1790375](https://bugzil.la/1790375)).
- Unterstützung für den [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes)-Befehl wurde eingeführt, um Elemente auf der gegebenen Seite zu finden. Unterstützte Locator sind derzeit `CssLocator` ([Firefox-Bug 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox-Bug 1869536](https://bugzil.la/1869536)).
- Der [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl wurde auf Android verbessert, um nahtlos zum Öffnen einer neuen Registerkarte zu wechseln, wenn das `type`-Argument als `window` angegeben ist ([Firefox-Bug 1875086](https://bugzil.la/1875086)).
- Ein Problem mit dem Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein eines nicht standardmäßigen (ISO 8601-)Datumsstring wie `200009` keinen Fehler auslöste ([Firefox-Bug 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den Befehlen [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate), [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) wurde behoben, bei dem das Angeben von sowohl `context` als auch `realm` Argumenten zu einem Fehler `invalid argument` führte, anstatt einfach das `realm`-Argument zu ignorieren, wie beabsichtigt ([Firefox-Bug 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler mit [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) wurde behoben, bei dem das Senden von Text mit Surrogatpaaren fehlschlug ([Firefox-Bug 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-On-Entwickler

- Die Hinzufügung der Funktion {{WebExtAPIRef("contextualIdentities.move")}} ermöglicht es, Elemente in der Liste der kontextuellen Identitäten zu verschieben. Diese Funktion ermöglicht es Erweiterungen, die Reihenfolge, in der kontextuelle Identitäten in der Benutzeroberfläche angezeigt werden, anzupassen ([Firefox-Bug 1333395](https://bugzil.la/1333395)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 123 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite den entsprechenden Vorzug und setzen Sie ihn auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden auf Linux-Desktop in Nightly unterstützt.
  Diese umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace).
  ([Firefox-Bug 1874445](https://bugzil.la/1874445)).

## Ältere Versionen

{{Firefox_for_developers}}
