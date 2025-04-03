---
title: Firefox 123 für Entwickler
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über Änderungen in Firefox 123, die Entwickler betreffen. Firefox 123 wurde am [20. Februar 2024](https://whattrainisitnow.com/release/?version=123) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

### HTML

- Das {{htmlelement("template")}}-Element unterstützt nun ein `shadowrootmode`-Attribut, das die deklarative Erstellung eines Shadow-DOM-Teilbaums ermöglicht. Das Attribut kann entweder auf `open` oder `closed` gesetzt werden, wodurch JavaScript im Shadow-DOM entweder offengelegt oder vor externem Code verborgen wird. Diese Werte entsprechen den Optionen des `mode`-Parameters der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). ([Firefox Fehler 1870052](https://bugzil.la/1870052))

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Das globale Objekt {{jsxref("Date.parse()")}} hat eine Reihe von Fehlerkorrekturen erhalten, um es mit der Art und Weise, wie andere Browser die übergebenen Werte parsen, in Einklang zu bringen.
  - Ein falscher Tag des Monats (z.B. "31. April") springt nun zum folgenden Monat (z.B. "1. Mai"). ([Firefox Fehler 1872333](https://bugzil.la/1872333)).
  - Unvollständige Zeitzonen (z.B. "1/1/70 gm") oder AM/PM (z.B. "1/1/70 10:00 a") werden nicht mehr akzeptiert. ([Firefox Fehler 1870570](https://bugzil.la/1870570)).
  - Einzelnummerierungsdaten werden nun akzeptiert (z.B. `Date.parse("0")` gibt jetzt `946684800000` zurück - Samstag, 01. Jan. 2000 00:00:00). ([Firefox Fehler 1870434](https://bugzil.la/1870434)).

### SVG

- Die SVG-Elemente {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} unterstützen jetzt die Änderung des Farbraums auf `linearRGB` oder `sRGB` über das Attribut {{SVGAttr("color-interpolation")}}. Dies kann auch auf die SVG-Elemente über die CSS-Eigenschaft {{CSSXref("color-interpolation")}} angewendet werden.

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) für [informative Antworten](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist jetzt für das [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen aktiviert, die die Seite wahrscheinlich benötigt, während der Server noch die vollständige Antwort vorbereitet.
  Dies kann die Ladezeit der Seite erheblich verkürzen.
  Beachten Sie, dass die Unterstützung für die Verwendung des Headers `103 Early Hints` zum [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) in [Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#http) hinzugefügt wurde.
  Weitere Details finden Sie unter [Firefox Fehler 1874445](https://bugzil.la/1874445).

### APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) unterstützt nun die plattformübergreifende Erstellung von Anmeldeinformationen.
  Konkret kann [`navigator.credentials.create({publicKey})`](/de/docs/Web/API/CredentialsContainer/create) jetzt in verschachtelten Browserkontexten aufgerufen werden, die von einem anderen Ursprung als das oberste Dokument geladen werden, wenn dies durch eine [`Feature-Policy: publickey-credentials-create`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create) auf dem obersten Verschachtelungs-`<iframe>` erlaubt ist.
  ([Firefox Fehler 1870863](https://bugzil.la/1870863)).

#### DOM

- Die benutzerdefinierte Locale-Unterstützung für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wurde veraltet, einschließlich des Parameters [`options.locale`](/de/docs/Web/API/IDBObjectStore/createIndex#locale) für `IDBObjectStore.createIndex()` und der `IDBIndex`-Eigenschaften [`isAutoLocale`](/de/docs/Web/API/IDBIndex/isAutoLocale) und [`locale`](/de/docs/Web/API/IDBIndex/locale).
  ([Firefox Fehler 1872675](https://bugzil.la/1872675) und [Firefox Fehler 1730706](https://bugzil.la/1730706)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

Das `IDBLocaleAwareKeyRange`-Interface wurde entfernt. ([Firefox Fehler 1730706](https://bugzil.la/1730706)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Event [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError), das ausgelöst wird, wenn eine Netzwerk-Anfrage mit einem Fehler endet, wurde hinzugefügt. ([Firefox Fehler 1790375](https://bugzil.la/1790375)).
- Unterstützung für den Befehl [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes) wurde eingeführt, um Elemente auf der gegebenen Seite zu finden. Unterstützte Locator sind derzeit `CssLocator` ([Firefox Fehler 1855023](https://bugzil.la/1855023)) und `XPathLocator` ([Firefox Fehler 1869536](https://bugzil.la/1869536)).
- Der Befehl [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) wurde auf Android verbessert, um nahtlos zu einem neuen Tab zu wechseln, wenn das `type`-Argument als `window` angegeben ist. ([Firefox Fehler 1875086](https://bugzil.la/1875086)).
- Ein Problem mit dem Deserialisierungsprozess eines `DateRemoteValue` wurde behoben, bei dem das Vorhandensein eines nicht standardmäßigen (ISO 8601) Datumsstrings wie `200009` keinen Fehler ausgelöst hat. ([Firefox Fehler 1872116](https://bugzil.la/1872116)).
- Ein Problem mit den Befehlen [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate), [script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction), und [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) wurde behoben, bei dem das Angeben sowohl der `context`- als auch der `realm`-Argumente zu einem `invalid argument`-Fehler führte, anstatt einfach das `realm`-Argument zu ignorieren, wie beabsichtigt. ([Firefox Fehler 1873688](https://bugzil.la/1873688)).

#### Marionette

- Ein Fehler mit [Element Send Keys](https://w3c.github.io/webdriver/#element-send-keys) wurde behoben, bei dem das Senden von Text, der Surrogat-Paare enthält, fehlschlug. ([Firefox Fehler 1866431](https://bugzil.la/1866431)).

## Änderungen für Add-on-Entwickler

- Die Funktion {{WebExtAPIRef("contextualIdentities.move")}} ermöglicht das Verschieben von Einträgen in der Liste der kontextuellen Identitäten. Diese Funktion ermöglicht es Erweiterungen, die Reihenfolge der Anzeige kontextueller Identitäten in der Benutzeroberfläche anzupassen. ([Firefox Fehler 1333395](https://bugzil.la/1333395)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 123 implementiert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Web Codecs API:** `dom.media.webcodecs.enabled`.

  Die Video-Schnittstellen der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) werden auf Linux-Desktops in Nightly unterstützt.
  Dazu gehören: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace).
  ([Firefox Fehler 1874445](https://bugzil.la/1874445)).

## Ältere Versionen

{{Firefox_for_developers}}
