---
title: Firefox 18 für Entwickler
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wird nun unterstützt ([Firefox-Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut des {{HTMLElement("link")}}-Elements wird nun unterstützt ([Firefox-Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut des {{HTMLElement("iframe")}} wurde implementiert und der vorherige, mit Präfix versehene Vorgänger [`mozallowfullscreen`](/de/docs/Web/HTML/Element/iframe#mozallowfullscreen) ist jetzt veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden nun das `auto`-Schlüsselwort als _Initialwert_ (dies hat nur Auswirkungen auf Flex-Elemente, da es für andere Elemente auf `0` zurückgesetzt wird, dem vorherigen Initialwert). ([Firefox-Bug 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: Jetzt übersteuern `!important` Regeln des Autors [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox-Bug 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}}-Kurzform-Eigenschaft erkennt nun die CSS3 {{cssxref("background-size")}}-Eigenschaft, die darin angegeben ist. ([Firefox-Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS Flexbox Module wurde integriert. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox-Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde integriert. ([Firefox-Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde integriert. ([Firefox-Bug 564815](https://bugzil.la/564815))
- Das MacOS X-Backend für `window.navigator.battery` wurde implementiert. ([Firefox-Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor verwenden, um ein `Blob`-Objekt zu erstellen. ([Firefox-Bug 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Event und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden ohne Präfix implementiert ([Firefox-Bug 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass die Implementierung und Spezifikation dieser sich entwickelt haben und in Firefox 19 geändert wurden ([Firefox-Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften unterteilt: die Standard-`src`-Eigenschaft, die mit Strings arbeitet, und die mit Präfix versehene `mozSrcObject`-Eigenschaft, die sich mit [Medien-Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) befasst ([Firefox-Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [transferable objects.](/de/docs/Web/API/Web_Workers_API/Using_web_workers#passing_data_by_transferring_.c2.a0ownership_%28transferable_objects%29)
- Die Methode [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation) unterstützt nun ein `Array` von Strings als Argument ([Firefox-Bug 784549](https://bugzil.la/784549)).

### JavaScript

- Harmonys (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden integriert ([Firefox-Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält ein paar bekannte Fehler, fehlende Features und Abweichungen vom aktuellen Stand der Spezifikation. Verlassen Sie sich nicht darauf für Produktionscode.
- Die ECMAScript 2015 `contains()`-Methode ist nun bei Strings implementiert. Dies ist leider nicht kompatibel mit Mootools 1.2, das ein anderes Verhalten von `contains()` bei Strings erwartet, es jedoch nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Webseiten sollten ihre Mootools-Version auf etwas Neueres als 1.2 aktualisieren.

### WebGL

- Die mit Präfix versehene Version der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox-Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden nun auf 2 Stellen begrenzt (z. B. in HTTP {{HTTPHeader("Accept-Language")}}-Headern) ([Firefox-Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM`-Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Headers/X-Frame-Options)-HTTP-Antwort-Headers wird jetzt unterstützt ([Firefox-Bug 690168](https://bugzil.la/690168)).

### Entwicklertools

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der vierte Parameter (aOffset) der Methode `onDataAvailable()` ändert sich in unsigned long long. ([Firefox-Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt über 2GB Inhaltslänge ([Firefox-Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt; verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` nimmt keinen `nsIEditorObserver`-Parameter mehr an ([Firefox-Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request`-Beobachter sind nicht mehr garantiert synchron während `nsIChannel.asyncOpen()` aufgerufen zu werden. Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request`-Beobachterthema hinzugefügt. `Siehe` ([Firefox-Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve`-Methode wurde entfernt. Jetzt kann nur die `asyncResolve`-Methode verwendet werden. Siehe ([Firefox-Bug 769764](https://bugzil.la/769764))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIEditorObserver`

## Siehe auch

- [Firefox 18 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
