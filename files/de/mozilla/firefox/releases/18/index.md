---
title: Firefox 18 für Entwickler
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut des {{HTMLElement("ol")}} Elements wird nun unterstützt ([Firefox Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) Attribut des {{HTMLElement("link")}} Elements wird nun unterstützt ([Firefox Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut des {{HTMLElement("iframe")}} wurde implementiert und sein vorangehendes, mit Präfix versehenes Attribut [`mozallowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#mozallowfullscreen) ist nun veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden nun das `auto` Schlüsselwort als _initialen Wert_ (Dies hat nur eine Auswirkung auf Flex-Elemente, da es für andere Elemente zu `0`, dem vorherigen initialen Wert, aufgelöst wird). ([Firefox Bug 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: jetzt überschreiben Autor `!important` Regeln [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox Bug 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}} Kurzschreibweise erkennt nun die CSS3 {{cssxref("background-size")}} Eigenschaft, die darin angegeben ist. ([Firefox Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS Flexbox-Modul wurde hinzugefügt. Es ist standardmäßig deaktiviert, kann aber aktiviert werden, indem `layout.css.flexbox.enabled` auf true gesetzt wird ([Firefox Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde hinzugefügt. ([Firefox Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde hinzugefügt. ([Firefox Bug 564815](https://bugzil.la/564815))
- Das macOS X Backend für `window.navigator.battery` wurde implementiert. ([Firefox Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob) Konstruktor verwenden, um ein `Blob` Objekt zu erstellen. ([Firefox Bug 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden unprefixed ([Firefox Bug 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass sich die Implementierung und das Spezifikum dieser in Firefox 19 geändert haben ([Firefox Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften aufgeteilt: die standardmäßige `src` Eigenschaft, die sich mit Strings befasst, und die mit Präfix versehene `mozSrcObject` Eigenschaft, die sich mit [Medienströmen](/de/docs/Web/API/Media_Capture_and_Streams_API) befasst ([Firefox Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [transferable objects.](/de/docs/Web/API/Web_Workers_API/Using_web_workers#passing_data_by_transferring_.c2.a0ownership_%28transferable_objects%29)
- Die [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation) Methode unterstützt nun ein `Array` von Strings als Argument ([Firefox Bug 784549](https://bugzil.la/784549).

### JavaScript

- Harmonie (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden hinzugefügt ([Firefox Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Fehler, fehlende Funktionen und Abweichungen vom aktuellen Stand der Spezifikationen. Verlassen Sie sich nicht darauf für Produktivcode.
- Die ECMAScript 2015 Methode `contains()` ist jetzt für Strings implementiert. Diese ist leider nicht kompatibel mit Mootools 1.2, das ein anderes Verhalten von `contains()` auf Strings erwartet, es aber nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Websites sollten ihre Mootools-Version auf eine über 1.2 hinaus aktualisieren.

### WebGL

- Die versionierte Version der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden nun auf 2 Ziffern begrenzt (z. B. in HTTP {{HTTPHeader("Accept-Language")}} Headern) ([Firefox Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM` Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options) HTTP-Antwort-Headers wird nun unterstützt ([Firefox Bug 690168](https://bugzil.la/690168)).

### Entwickler-Tools

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der 4. Parameter (aOffset) der Methode `onDataAvailable()` ändert sich zu unsigned long long. ([Firefox Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt über 2GB Content-Length ([Firefox Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` benötigt keinen `nsIEditorObserver` Parameter mehr ([Firefox Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` Beobachter werden nicht mehr garantiert synchron während `nsIChannel.asyncOpen()` aufgerufen.
    Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request` Beobachterthema hinzugefügt. `Siehe` ([Firefox Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve` Methode wurde entfernt. Jetzt kann nur noch die `asyncResolve` Methode verwendet werden. Siehe ([Firefox Bug 769764](https://bugzil.la/769764))

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
