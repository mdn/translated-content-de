---
title: Firefox 18 für Entwickler
short-title: Firefox 18
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut des {{HTMLElement("ol")}} Elements wird nun unterstützt ([Firefox Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/link#crossorigin) Attribut des {{HTMLElement("link")}} Elements wird nun unterstützt ([Firefox Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut des {{HTMLElement("iframe")}} wurde implementiert und der vorgängige, mit Präfix versehene `mozallowfullscreen` ist nun veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden jetzt das `auto` Schlüsselwort als _initialen Wert_ (Dies hat nur eine Auswirkung auf Flex-Elemente, da es sich bei anderen Elementen auf `0`, den bisherigen Anfangswert, auflöst). ([Firefox Bug 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: jetzt überschreiben `!important` Regeln des Autors die [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox Bug 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}} Kurzschrift-Eigenschaft erkennt nun die in CSS3 spezifizierte {{cssxref("background-size")}} Eigenschaft an. ([Firefox Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS-Flexbox-Modul wurde eingeführt. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde eingeführt. ([Firefox Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde eingeführt. ([Firefox Bug 564815](https://bugzil.la/564815))
- Das macOS X Backend für `window.navigator.battery` wurde implementiert. ([Firefox Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob) Konstruktor verwenden, um ein `Blob`-Objekt zu erstellen. ([Firefox Bug 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden ohne Präfix übernommen ([Firefox Bug 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass sich die Implementierung und der Standard in Firefox 19 entwickelt und geändert haben ([Firefox Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften getrennt: die standardmäßige `src` Eigenschaft, die mit Zeichenfolgen arbeitet, und die mit Präfix versehene `mozSrcObject` Eigenschaft, die mit [Medienströmen](/de/docs/Web/API/Media_Capture_and_Streams_API) arbeitet ([Firefox Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde hinzugefügt.
- Die [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation) Methode unterstützt jetzt ein `Array` von Zeichenfolgen als Argument ([Firefox Bug 784549](https://bugzil.la/784549)).

### JavaScript

- Die Direct Proxies von Harmony (ECMAScript 2015) wurden eingeführt ([Firefox Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Fehler, fehlende Funktionen und Unstimmigkeiten mit dem aktuellen Stand des Standards. Verlassen Sie sich nicht auf sie für Produktionscode.
- Die ECMAScript 2015 `contains()` Methode ist nun für Zeichenfolgen implementiert. Leider ist dies nicht kompatibel mit Mootools 1.2, das ein anderes Verhalten von `contains()` bei Zeichenfolgen erwartet, dies jedoch nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Seiten sollten ihre Mootools-Version auf etwas Neueres als 1.2 aktualisieren.

### WebGL

- Die Version mit Präfix der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic" wurde entfernt ([Firefox Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden jetzt auf 2 Dezimalstellen gekürzt (z.B. in HTTP {{HTTPHeader("Accept-Language")}} Headern) ([Firefox Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM` Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options) HTTP-Antwort-Headers wird nun unterstützt ([Firefox Bug 690168](https://bugzil.la/690168)).

### Entwicklertools

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der vierte Parameter (`aOffset`) der `onDataAvailable()` Methode ändert sich zu `unsigned long long`. ([Firefox Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt über 2GB Inhalt-Länge ([Firefox Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, nutzen Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` nimmt keinen `nsIEditorObserver` Parameter mehr an ([Firefox Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` Beobachter werden nicht mehr garantiert synchron während `nsIChannel.asyncOpen()` aufgerufen.
    Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request` Beobachterthema hinzugefügt. Siehe ([Firefox Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve` Methode wurde entfernt. Nun kann nur die `asyncResolve` Methode verwendet werden. Siehe ([Firefox Bug 769764](https://bugzil.la/769764))

#### Neue Schnittstellen

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIEditorObserver`

## Siehe auch

- [Firefox 18 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Add-on-Kompatibilität für Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)
