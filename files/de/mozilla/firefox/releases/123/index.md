---
title: Firefox 123 Versionshinweise für Entwickler
short-title: Firefox 123
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow-DOM-Teilbaums ermöglicht. Das Attribut kann entweder auf `open` oder `closed` gesetzt werden, was JavaScript im Shadow-DOM von externem Code entweder offenlegt oder verbirgt. Dies sind die gleichen Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. ([Firefox-Bug 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Das {{jsxref("Date.parse()")}}-globale Objekt hat eine Reihe von Bugfixes erhalten, um es mit der Art und Weise in Einklang zu bringen, wie andere Browser die übergebenen Werte analysieren.
  - Ein falscher Tag des Monats (z.B. "31. April") springt jetzt in den Folgemonat (z.B. "1. Mai"). ([Firefox-Bug 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzone (z.B. "1/1/70 gm") oder AM/PM-Angaben (z.B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox-Bug 1870570](https://bugzil.la/1870570)).
  - Einzelne Datumszahlen werden jetzt akzeptiert (z.B. `Date.parse("0")` gibt jetzt `946684800000` zurück - Sa 01.01.2000 00:00:00). ([Firefox-Bug 1870434](https://bugzil.la/1870434)).

### SVG

- Die {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} SVG-Elemente unterstützen nun das Ändern des Farbraums in `linearRGB` oder `sRGB` über das {{SVGAttr("color-interpolation")}}-Attribut. Dies kann auch auf die SVG-Elemente über die {{CSSXref("color-interpolation")}} CSS-Eigenschaft angewendet werden.

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses)-Statuscode ist jetzt für das [Preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigen wird, während der Server noch die vollständige Antwort vorbereitet.
  Dies kann die Ladezeit der Seite erheblich verkürzen.
  Beachten Sie, dass die Unterstützung zur Verwendung des `103 Early Hints`-Headers für [Preconnecting](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde.
  Weitere Details finden Sie in [Firefox-Bug 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt jetzt die Erstellung von bereichsübergreifenden Anmeldeinformationen.
  Insbesondere kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) jetzt in eingebetteten Browsing-Kontexten aufgerufen werden, die von einem anderen Ursprung als das oberste Dokument geladen werden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) auf der obersten Verschachtelungsebene [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) erlaubt ist.
  ([Firefox-Bug 1870863](https://bugzil.la/1870863)).

#### DOM

- Die Unterstützung von benutzerdefinierten Gebietsschemas für die [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) wurde eingestellt, einschließlich des [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale)-Parameters zu `IDBObjectStore.createIndex()` und der `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale).
  ([Firefox-Bug 1872675](https://bugzil.la/1872675) und [Firefox-Bug 1730706](https://bugzil.la/1730706)).

#### Media, WebRTC und Web Audio

#### Entfernungen

Das `IDBLocaleAwareKeyRange`-Interface wurde entfernt ([Firefox-Bug 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Netzwerkabfrage mit einem Fehler endet ([Firefox-Bug 1790375](https://bugzil.la/1790375)).
- Unterstützung für den [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes)-Befehl wurde eingeführt, um Elemente auf der gegebenen Seite zu finden. Unterstützte Lokatoren sind derzeit `CssLocator` ([Firefox-Bug 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox-Bug 1869536](https://bugzil.la/1869536)).
- Der [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)-Befehl auf Android wurde verbessert, um nahtlos auf das Öffnen eines neuen Tabs zu wechseln, wenn das `type`-Argument als `window` angegeben ist ([Firefox-Bug 1875086](https://bugzil.la/1875086)).
- Ein Problem mit dem Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein einer nicht standardmäßigen (ISO 8601) Datumszeichenkette wie `200009` keinen Fehler auslöste ([Firefox-Bug 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-, [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction)- und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown)-Befehlen wurde behoben, bei dem die Angabe der `context`- und `realm`-Argumente zu einem `invalid argument`-Fehler führte, anstatt einfach das `realm`-Argument zu ignorieren, wie beabsichtigt ([Firefox-Bug 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler bei [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) wurde behoben, bei dem das Senden von Text mit Surrogatpaaren fehlschlug ([Firefox-Bug 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-on-Entwickler

- Die Hinzufügung der {{WebExtAPIRef("contextualIdentities.move")}}-Funktion ermöglicht es, Elemente in der Liste der kontextuellen Identitäten zu verschieben. Diese Funktion ermöglicht Erweiterungen, die Reihenfolge anzupassen, in der kontextuelle Identitäten in der Benutzeroberfläche angezeigt werden ([Firefox-Bug 1333395](https://bugzil.la/1333395)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 123 neu ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden auf Linux-Desktops unter Nightly unterstützt.
  Dazu gehören: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace).
  ([Firefox-Bug 1874445](https://bugzil.la/1874445)).
