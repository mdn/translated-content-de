---
title: Firefox 123 für Entwickler
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow-DOM-Teilbaums ermöglicht. Das Attribut kann entweder auf `open` oder `closed` gesetzt werden, was JavaScript im Shadow DOM jeweils öffentlich macht oder vor externem Code verbirgt. Dies sind die gleichen Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. ([Firefox Bug 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Das {{jsxref("Date.parse()")}}-globale Objekt erhielt mehrere Fehlerbehebungen, um es in Einklang mit der Art und Weise zu bringen, wie andere Browser die übergebenen Werte parsen.
  - Ein falscher Monatstag (z. B. "31 April") wechselt jetzt zum folgenden Monat (z. B. "1. Mai"). ([Firefox Bug 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzone (z. B. "1/1/70 gm") oder AM/PM (z. B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox Bug 1870570](https://bugzil.la/1870570)).
  - Einzelne Zifferdaten werden jetzt akzeptiert (z. B. `Date.parse("0")` gibt nun `946684800000` zurück - Samstag, 1. Januar 2000, 00:00:00). ([Firefox Bug 1870434](https://bugzil.la/1870434)).

### SVG

- Die {{SVGElement("linearGradient")}}- und {{SVGElement("radialGradient")}}-SVG-Elemente unterstützen jetzt das Ändern des Farbraums zu `linearRGB` oder `sRGB` über das {{SVGAttr("color-interpolation")}}-Attribut. Dies kann auch auf die SVG-Elemente über die {{CSSXref("color-interpolation")}}-CSS-Eigenschaft angewendet werden.

### HTTP

- Der HTTP-[`103 Early Hints`](/de/docs/Web/HTTP/Status/103)-[Informationsantwort](/de/docs/Web/HTTP/Status#informational_responses)-Statuscode ist jetzt für das [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigt, während der Server noch die vollständige Antwort vorbereitet. Dies kann die Ladezeit der Seite erheblich verkürzen. Beachten Sie, dass die Unterstützung für die Verwendung des `103 Early Hints`-Headers zum [Preconnecten](/de/docs/Web/HTML/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde. Weitere Details finden Sie unter [Firefox Bug 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt jetzt die Erstellung von Anmeldeinformationen über verschiedene Ursprünge hinweg (Cross-Origin). Insbesondere kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) jetzt in verschachtelten Browsing-Kontexten aufgerufen werden, die von einem anderen Ursprung als das oberste Dokument geladen wurden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) auf der obersten Ebene eines verschachtelten [`<iframe>`](/de/docs/Web/HTML/Element/iframe#allow) erlaubt ist. ([Firefox Bug 1870863](https://bugzil.la/1870863)).

#### DOM

- Die Unterstützung von benutzerdefinierten Regionen für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wurde eingestellt, einschließlich des [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale)-Parameters für `IDBObjectStore.createIndex()`, und der `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale). ([Firefox Bug 1872675](https://bugzil.la/1872675) und [Firefox Bug 1730706](https://bugzil.la/1730706)).

#### Medien, WebRTC und Web Audio

#### Entfernung

Das `IDBLocaleAwareKeyRange`-Interface wurde entfernt ([Firefox Bug 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Ereignis [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError) wurde hinzugefügt, das ausgelöst wird, wenn eine Netzwerk-Anfrage mit einem Fehler endet ([Firefox Bug 1790375](https://bugzil.la/1790375)).
- Unterstützung für das [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes)-Kommando wurde eingeführt, um Elemente auf der gegebenen Seite zu finden. Unterstützte Locator sind vorläufig `CssLocator` ([Firefox Bug 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox Bug 1869536](https://bugzil.la/1869536)).
- Das [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Kommando auf Android wurde verbessert, um nahtlos zu einem neuen Tab zu wechseln, wenn das `type`-Argument als `window` angegeben ist ([Firefox Bug 1875086](https://bugzil.la/1875086)).
- Ein Problem mit dem Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein eines nicht-standardmäßigen (ISO 8601) Datumsstrings wie `200009` keinen Fehler ausgelöst hat ([Firefox Bug 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den Befehlen [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate), [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) wurde behoben, bei dem das Angeben beider Argumente `context` und `realm` zu einem `invalid argument` Fehler führte, anstatt das `realm`-Argument einfach zu ignorieren, wie beabsichtigt ([Firefox Bug 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler mit [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys), bei dem das Senden von Text mit Surrogatpaaren fehlschlug, wurde behoben ([Firefox Bug 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-on-Entwickler

- Die Hinzufügung der {{WebExtAPIRef("contextualIdentities.move")}}-Funktion ermöglicht es, Elemente in der Liste der kontextualen Identitäten zu verschieben. Diese Funktion ermöglicht es Erweiterungen, die Reihenfolge, in der kontextuale Identitäten in der Benutzeroberfläche angezeigt werden, anzupassen ([Firefox Bug 1333395](https://bugzil.la/1333395)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 123 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web-Codecs-API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden auf Linux-Desktops in der Nightly-Version unterstützt. Diese umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace). ([Firefox Bug 1874445](https://bugzil.la/1874445)).

## Ältere Versionen

{{Firefox_for_developers}}
