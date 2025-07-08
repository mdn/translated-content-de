---
title: Firefox 18 für Entwickler
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wird nun unterstützt ([Firefox Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin)-Attribut des {{HTMLElement("link")}}-Elements wird nun unterstützt ([Firefox Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut des {{HTMLElement("iframe")}} wurde implementiert, und der präfixierte Vorgänger `mozallowfullscreen` ist nun veraltet.

### CSS

- Die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden nun das `auto`-Schlüsselwort als _Anfangswert_ (dies hat nur einen Effekt auf Flex-Elemente, da es auf `0` aufgelöst wird, den vorherigen Anfangswert für andere Elemente). ([Firefox Bug 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: nun überschreiben `!important`-Regeln des Autors [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox Bug 783714](https://bugzil.la/783714))
- Die Kurzform-Eigenschaft {{cssxref("background")}} erkennt nun die CSS3-Eigenschaft {{cssxref("background-size")}} an, wenn sie darin angegeben ist. ([Firefox Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS Flexbox-Modul wurde hinzugefügt. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde eingeführt. ([Firefox Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde eingeführt. ([Firefox Bug 564815](https://bugzil.la/564815))
- Das macOS X-Backend für `window.navigator.battery` wurde implementiert. ([Firefox Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor verwenden, um ein `Blob`-Objekt zu erstellen. ([Firefox Bug 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden entprefigiert ([Firefox Bug 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass die Implementierung und Spezifikation dieser in Firefox 19 weiterentwickelt und geändert wurde ([Firefox Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften getrennt: die Standard-`src`-Eigenschaft, die mit Strings umgeht, und die präfixierte `mozSrcObject`-Eigenschaft, die mit [Medienstreams](/de/docs/Web/API/Media_Capture_and_Streams_API) umgeht ([Firefox Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde hinzugefügt.
- Die Methode [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation) unterstützt nun ein `Array` von Strings als Argument ([Firefox Bug 784549](https://bugzil.la/784549)).

### JavaScript

- Harmonys (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden eingeführt ([Firefox Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Fehler, fehlende Funktionen und Abweichungen vom aktuellen Stand der Spezifikation. Verlassen Sie sich nicht darauf für Produktionscode.
- Die ECMAScript 2015-Methode `contains()` ist nun für Strings implementiert. Dies ist leider nicht kompatibel mit Mootools 1.2, das ein anderes Verhalten von `contains()` bei Strings erwartet, aber dies nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Websites sollten ihre Mootools-Version auf eine neuere als 1.2 aktualisieren.

### WebGL

- Die präfixierte Version der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-values") werden nun auf 2 Stellen gerundet (z.B. in HTTP-{{HTTPHeader("Accept-Language")}}-Headern) ([Firefox Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM`-Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options) HTTP-Response-Headers wird nun unterstützt ([Firefox Bug 690168](https://bugzil.la/690168)).

### Entwickler-Tools

## Änderungen für Add-On und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der 4. Parameter (`aOffset`) der Methode `onDataAvailable()` ändert sich zu `unsigned long long`. ([Firefox Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt über 2GB Datenlänge ([Firefox Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` erfordert keinen `nsIEditorObserver` Parameter mehr ([Firefox Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request`-Beobachter werden nicht mehr garantiert synchron während `nsIChannel.asyncOpen()` aufgerufen.
    Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request`-Beobachterthema hinzugefügt. Siehe ([Firefox Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve`-Methode wurde entfernt. Jetzt kann nur noch die `asyncResolve`-Methode verwendet werden. Siehe ([Firefox Bug 769764](https://bugzil.la/769764))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIEditorObserver`

## Siehe auch

- [Firefox 18 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)

### Ältere Versionen

{{Firefox_for_developers}}
