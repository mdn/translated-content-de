---
title: Firefox 18 Versionshinweise für Entwickler
short-title: Firefox 18
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut des {{HTMLElement("ol")}} Elements wird jetzt unterstützt ([Firefox Fehler 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) Attribut des {{HTMLElement("link")}} Elements wird jetzt unterstützt ([Firefox Fehler 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut des {{HTMLElement("iframe")}} wurde implementiert und sein mit Präfix versehenes Vorgänger `mozallowfullscreen` ist jetzt veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden jetzt das `auto` Schlüsselwort als _Anfangswert_ (Dies hat nur Auswirkungen auf Flex-Elemente, da es sich für andere Elemente zu `0` auflöst, dem vorherigen Anfangswert). ([Firefox Fehler 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: Jetzt überlagern Autor-`!important`-Regeln [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using). ([Firefox Fehler 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}} Kurzschreibweise erkennt jetzt die CSS3 {{cssxref("background-size")}} Eigenschaft, die darin angegeben ist. ([Firefox Fehler 570326](https://bugzil.la/570326))
- Die erste Unterstützung für das CSS Flexbox Modul wurde hinzugefügt. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox Fehler 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde hinzugefügt. ([Firefox Fehler 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde hinzugefügt. ([Firefox Fehler 564815](https://bugzil.la/564815))
- Das OS X Backend für `window.navigator.battery` wurde implementiert. ([Firefox Fehler 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob) Konstruktor verwenden, um ein `Blob` Objekt zu erstellen. ([Firefox Fehler 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden entvorgeführt ([Firefox Fehler 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass Implementierung und Spezifikation davon in Firefox 19 weiterentwickelt und geändert wurden ([Firefox Fehler 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften aufgeteilt: die Standard-`src`-Eigenschaft, die mit Zeichenketten arbeitet, und die mit Präfix versehene `mozSrcObject`-Eigenschaft, die mit [Media Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) arbeitet ([Firefox Fehler 792665](https://bugzil.la/792665)).
- Unterstützung für [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde hinzugefügt.
- Die Methode [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation) unterstützt jetzt ein `Array` von Zeichenketten als Argument ([Firefox Fehler 784549](https://bugzil.la/784549)).

### JavaScript

- Harmony's (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden eingeführt ([Firefox Fehler 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Fehler, fehlende Funktionen und Abweichungen vom aktuellen Stand der Spezifikation. Verlassen Sie sich nicht für Produktionscode darauf.
- Die ECMAScript 2015 `contains()` Methode wurde nun für Strings implementiert. Dies ist leider nicht mit Mootools 1.2 kompatibel, das bei `contains()` auf Strings ein anderes Verhalten erwartet, ohne es zu gewährleisten. Neuere Versionen von Mootools beheben dieses Problem; Websites sollten ihre Mootools-Version auf etwas neueres als 1.2 aktualisieren.

### WebGL

- Die mit Präfix versehene Version der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox Fehler 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden jetzt auf 2 Stellen begrenzt (z.B. in HTTP {{HTTPHeader("Accept-Language")}} Headern) ([Firefox Fehler 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM` Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options) HTTP-Response-Headers wird jetzt unterstützt ([Firefox Fehler 690168](https://bugzil.la/690168)).

### Entwicklerwerkzeuge

## Änderungen für Add-on und Mozilla Entwickler

### Interface-Änderungen

- `nsIStreamListener`
  - : Der vierte Parameter (`aOffset`) der `onDataAvailable()` Methode ändert sich zu `unsigned long long`. ([Firefox Fehler 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt über 2GB Content-Length ([Firefox Fehler 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` nimmt keinen `nsIEditorObserver` Parameter mehr entgegen ([Firefox Fehler 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` Beobachter werden nicht mehr garantiert synchron während `nsIChannel.asyncOpen()` aufgerufen.
    Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request` Beobachter-Thema hinzugefügt. Siehe ([Firefox Fehler 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve` Methode wurde entfernt. Jetzt kann nur noch die `asyncResolve` Methode verwendet werden. Siehe ([Firefox Fehler 769764](https://bugzil.la/769764))

#### Neue Interfaces

#### Entfernte Interfaces

Die folgenden Interfaces wurden entfernt.

- `nsIEditorObserver`

## Siehe auch

- [Firefox 18 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)
