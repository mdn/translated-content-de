---
title: Firefox 18 für Entwickler
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wird jetzt unterstützt ([Firefox-Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut des {{HTMLElement("link")}}-Elements wird jetzt unterstützt ([Firefox-Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut des {{HTMLElement("iframe")}} wurde implementiert und der vorgängige, mit Präfix versehene [`mozallowfullscreen`](/de/docs/Web/HTML/Element/iframe#mozallowfullscreen) ist jetzt veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden jetzt das `auto`-Schlüsselwort als _Anfangswert_ (Dies hat nur Auswirkungen auf Flex-Items, da es bei anderen Elementen zu `0` aufgelöst wird, dem vorherigen Anfangswert). ([Firefox-Bug 763689](https://bugzil.la/763689))
- Der Cascade wurde aktualisiert: Jetzt überschreiben `!important`-Regeln des Autors die [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox-Bug 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}}-Kurzform erkennt nun die CSS3 {{cssxref("background-size")}}-Eigenschaft, die darin angegeben ist. ([Firefox-Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS Flexbox-Modul wurde implementiert. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox-Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde implementiert. ([Firefox-Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde implementiert. ([Firefox-Bug 564815](https://bugzil.la/564815))
- Das macOS X-Backend für `window.navigator.battery` wurde implementiert. ([Firefox-Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor verwenden, um ein `Blob`-Objekt zu erstellen. ([Firefox-Bug 744907](https://bugzil.la/744907))
- Das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden unpräfixiert ([Firefox-Bug 812086](https://bugzil.la/812086)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden hinzugefügt. Beachten Sie, dass sich die Implementierung und Spezifikation dieser in Firefox 19 weiterentwickelt und geändert haben ([Firefox-Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften aufgeteilt: die standardmäßige `src`-Eigenschaft, die mit Zeichenfolgen arbeitet, und die mit Präfix versehene `mozSrcObject`-Eigenschaft, die mit [Medienströmen](/de/docs/Web/API/Media_Capture_and_Streams_API) arbeitet ([Firefox-Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [übertragbare Objekte.](/de/docs/Web/API/Web_Workers_API/Using_web_workers#passing_data_by_transferring_.c2.a0ownership_%28transferable_objects%29)
- Die [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)-Methode unterstützt jetzt ein `Array` von Zeichenfolgen als Argument ([Firefox-Bug 784549](https://bugzil.la/784549)).

### JavaScript

- Harmony's (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden implementiert ([Firefox-Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Bugs, fehlende Funktionen und Abweichungen vom aktuellen Stand der Spezifikation. Verlassen Sie sich nicht auf sie für Produktionscode.
- Die ECMAScript 2015 `contains()`-Methode ist jetzt auf Zeichenfolgen implementiert. Dies ist leider nicht kompatibel mit Mootools 1.2, das anderes Verhalten von `contains()` auf Zeichenfolgen erwartet, dieses jedoch nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Websites sollten ihre Mootools-Version auf eine neuere als 1.2 aktualisieren.

### WebGL

- Die mit Präfix versehene Version der [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox-Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden jetzt auf zwei Stellen gerundet (z. B. in HTTP-{{HTTPHeader("Accept-Language")}}-Headern) ([Firefox-Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM`-Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)-HTTP-Antwortheaders wird jetzt unterstützt ([Firefox-Bug 690168](https://bugzil.la/690168)).

### Entwicklertools

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der 4. Parameter (aOffset) der `onDataAvailable()`-Methode ändert sich zu unsigned long long. ([Firefox-Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt Inhalte mit einer Länge von über 2 GB ([Firefox-Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` nimmt keinen `nsIEditorObserver`-Parameter mehr ([Firefox-Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request`-Beobachter werden während `nsIChannel.asyncOpen()` nicht mehr garantiert synchron aufgerufen. Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request`-Beobachterthema hinzugefügt. `Siehe` ([Firefox-Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve`-Methode wurde entfernt. Jetzt kann nur die `asyncResolve`-Methode verwendet werden. Siehe ([Firefox-Bug 769764](https://bugzil.la/769764))

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
