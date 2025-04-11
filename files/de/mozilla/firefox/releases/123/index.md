---
title: Firefox 123 für Entwickler
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow-DOM-Unterbaums ermöglicht. Das Attribut kann auf `open` oder `closed` gesetzt werden, wobei jeweils das JavaScript im Shadow-DOM für externen Code zugänglich oder verborgen wird. Dies sind die gleichen Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. ([Firefox Fehler 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Beim globalen Objekt {{jsxref("Date.parse()")}} wurden eine Reihe von Fehlerkorrekturen vorgenommen, um es mit der Art und Weise, wie andere Browser die übergebenen Werte parsen, in Einklang zu bringen.
  - Ein falscher Tag des Monats (z.B. "31. April") wird jetzt auf den folgenden Monat übersprungen (z.B. "1. Mai"). ([Firefox Fehler 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzone (z.B. "1/1/70 gm") oder AM/PM (z.B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox Fehler 1870570](https://bugzil.la/1870570)).
  - Einzelne Zahldaten werden jetzt akzeptiert (z.B. `Date.parse("0")` gibt jetzt `946684800000` zurück - Samstag, 01. Jan. 2000 00:00:00). ([Firefox Fehler 1870434](https://bugzil.la/1870434)).

### SVG

- Die {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} SVG-Elemente unterstützen jetzt die Änderung des Farbraums zu `linearRGB` oder `sRGB` über das {{SVGAttr("color-interpolation")}}-Attribut. Dies kann auch auf die SVG-Elemente über die {{CSSXref("color-interpolation")}} CSS-Eigenschaft angewendet werden.

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode ist jetzt für das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigen wird, während der Server noch die vollständige Antwort vorbereitet.
  Dies kann die Ladezeit der Seite erheblich reduzieren.
  Beachten Sie, dass die Unterstützung für die Verwendung des `103 Early Hints` Headers für das [Vorkonfigurieren](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde.
  Weitere Details finden Sie in [Firefox Fehler 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt jetzt die Erstellung von bereichsübergreifenden Anmeldeinformationen.
  Insbesondere kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) jetzt in verschachtelten Browsing-Kontexten aufgerufen werden, die von einem anderen Ursprung als dem obersten Dokument geladen werden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) auf der Top-Level-Verschachtelung [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) erlaubt ist.
  ([Firefox Fehler 1870863](https://bugzil.la/1870863)).

#### DOM

- Die benutzerdefinierte Gebietsschema-Unterstützung für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wurde veraltet, einschließlich des [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale)-Parameters für `IDBObjectStore.createIndex()`, sowie die `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale).
  ([Firefox Fehler 1872675](https://bugzil.la/1872675) und [Firefox Fehler 1730706](https://bugzil.la/1730706)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

Das `IDBLocaleAwareKeyRange` Interface wurde entfernt ([Firefox Fehler 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Netzwerk-Anfrage mit einem Fehler endet ([Firefox Fehler 1790375](https://bugzil.la/1790375)).
- Unterstützung für den [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes)-Befehl wurde eingeführt, um Elemente auf der angegebenen Seite zu finden. Unterstützte Locator sind derzeit `CssLocator` ([Firefox Fehler 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox Fehler 1869536](https://bugzil.la/1869536)).
- Der [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl auf Android wurde verbessert, um nahtlos zu einer neuen Tab-Eröffnung zu wechseln, wenn das `type`-Argument als `window` angegeben ist ([Firefox Fehler 1875086](https://bugzil.la/1875086)).
- Ein Problem mit dem Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein eines nicht standardmäßigen (ISO 8601) Datumsstrings wie `200009` keinen Fehler auslöste ([Firefox Fehler 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den Befehlen [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate), [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) wurde behoben, bei dem die Angabe sowohl der `context`- als auch der `realm`-Argumente zu einem `invalid argument` Fehler führte, anstatt einfach das `realm`-Argument wie vorgesehen zu ignorieren ([Firefox Fehler 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler bei [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) wurde behoben, bei dem das Senden von Text, der Surrogatpaare enthält, fehlschlagen würde ([Firefox Fehler 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-on-Entwickler

- Die Ergänzung der {{WebExtAPIRef("contextualIdentities.move")}}-Funktion ermöglicht es, Elemente in der Liste der kontextuellen Identitäten zu verschieben. Diese Funktion ermöglicht es Erweiterungen, die Reihenfolge, in der kontextuelle Identitäten in der Benutzeroberfläche angezeigt werden, anzupassen ([Firefox Fehler 1333395](https://bugzil.la/1333395)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 123 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Mehr solcher Funktionen finden Sie auf der [Seite über experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden unter Linux Desktop in Nightly unterstützt.
  Dazu gehören: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace).
  ([Firefox Fehler 1874445](https://bugzil.la/1874445)).

## Ältere Versionen

{{Firefox_for_developers}}
