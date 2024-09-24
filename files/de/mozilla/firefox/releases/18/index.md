---
title: Firefox 18 für Entwickler
slug: Mozilla/Firefox/Releases/18
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 18 wurde am 8. Januar 2013 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed)-Attribut des {{HTMLElement("ol")}}-Elements wird jetzt unterstützt ([Firefox Bug 601912](https://bugzil.la/601912)).
- Das [`crossorigin`](/de/docs/Web/HTML/Element/link#crossorigin)-Attribut des {{HTMLElement("link")}}-Elements wird jetzt unterstützt ([Firefox Bug 786564](https://bugzil.la/786564)).
- Das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut des {{HTMLElement("iframe")}} wurde implementiert und sein vorheriges Präfix [`mozallowfullscreen`](/de/docs/Web/HTML/Element/iframe#mozallowfullscreen) ist nun veraltet.

### CSS

- Die {{cssxref("min-width")}} und {{cssxref("min-height")}} verwenden jetzt das `auto` Schlüsselwort als _Initialwert_ (Dies hat nur Auswirkungen auf Flex-Elemente, da es sich für andere Elemente auf `0`, den vorherigen Initialwert, auflöst). ([Firefox Bug 763689](https://bugzil.la/763689))
- Die Kaskade wurde aktualisiert: Jetzt überschreiben `!important` Regeln von Autoren [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox Bug 783714](https://bugzil.la/783714))
- Die {{cssxref("background")}}-Kurzschreibweise erkennt jetzt die CSS3 {{cssxref("background-size")}}-Eigenschaft, die darin angegeben ist. ([Firefox Bug 570326](https://bugzil.la/570326))
- Erste Unterstützung für das CSS Flexbox Modul wurde eingepflegt. Es ist standardmäßig deaktiviert, kann aber durch Setzen von `layout.css.flexbox.enabled` auf true aktiviert werden ([Firefox Bug 666041](https://bugzil.la/666041)).

### DOM/APIs

- `navigator.mozPay` wurde eingepflegt. ([Firefox Bug 767818](https://bugzil.la/767818))
- `window.devicePixelRatio` wurde eingepflegt. ([Firefox Bug 564815](https://bugzil.la/564815))
- Das MacOS X-Backend für `window.navigator.battery` wurde implementiert. ([Firefox Bug 696045](https://bugzil.la/696045))
- `MozBlobBuilder` wurde entfernt. Entwickler müssen den {{domxref("Blob")}}-Konstruktor verwenden, um ein `Blob`-Objekt zu erstellen. ([Firefox Bug 744907](https://bugzil.la/744907))
- Das {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis und die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurden ohne Präfix bereitgestellt ([Firefox Bug 812086](https://bugzil.la/812086)).
- {{domxref("TextDecoder")}} und {{domxref("TextEncoder")}} wurden hinzugefügt. Beachten Sie, dass sich die Implementierung und Spezifikation dieser in Firefox 19 weiterentwickelt und verändert haben ([Firefox Bug 764234](https://bugzil.la/764234)).
- `HTMLMediaElement.src` wurde in zwei Eigenschaften aufgeteilt: die Standard-`src`-Eigenschaft, die mit Zeichenketten arbeitet, und die Präfix-`mozSrcObject`-Eigenschaft, die mit [Medienströmen](/de/docs/Web/API/Media_Capture_and_Streams_API) arbeitet ([Firefox Bug 792665](https://bugzil.la/792665)).
- Unterstützung für [transferable objects.](/de/docs/Web/API/Web_Workers_API/Using_web_workers#passing_data_by_transferring_.c2.a0ownership_%28transferable_objects%29)
- Die {{domxref("Screen.lockOrientation()")}}-Methode unterstützt jetzt ein `Array` von Zeichenfolgen als Argument ([Firefox Bug 784549](https://bugzil.la/784549)).

### JavaScript

- Harmony's (ECMAScript 2015) [Direct Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) wurden eingepflegt ([Firefox Bug 703537](https://bugzil.la/703537)). Warnung: Die Implementierung enthält einige bekannte Fehler, fehlende Funktionen und Diskrepanzen mit dem aktuellen Stand der Spezifikation. Verlassen Sie sich nicht darauf für Produktivcode.
- Die ECMAScript 2015 `contains()`-Methode ist jetzt für Zeichenketten implementiert. Leider ist dies nicht mit Mootools 1.2 kompatibel, das ein anderes Verhalten von `contains()` bei Zeichenketten erwartet, dies jedoch nicht sicherstellt. Neuere Versionen von Mootools beheben dieses Problem; Seiten sollten ihre Mootools-Version auf eine neuere als 1.2 aktualisieren.

### WebGL

- Die präfixe Version der {{domxref("EXT_texture_filter_anisotropic")}} WebGL-Erweiterung, "MOZ_EXT_texture_filter_anisotropic", wurde entfernt ([Firefox Bug 790946](https://bugzil.la/790946)).

### SVG

### MathML

### XUL

### Netzwerk

- Qualitätsfaktoren ("q-Werte") werden jetzt auf 2 Dezimalstellen gekürzt (z. B. in HTTP {{HTTPHeader("Accept-Language")}}-Headern) ([Firefox Bug 672448](https://bugzil.la/672448)).
- Die `ALLOW-FROM` Syntax des [`X-FRAME-OPTIONS`](/de/docs/Web/HTTP/Headers/X-Frame-Options) HTTP-Antwort-Headers wird jetzt unterstützt ([Firefox Bug 690168](https://bugzil.la/690168)).

### Entwicklerwerkzeuge

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIStreamListener`
  - : Der 4. Parameter (aOffset) der `onDataAvailable()`-Methode ändert sich zu `unsigned long long`. ([Firefox Bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` unterstützt eine Inhaltslänge von über 2 GB ([Firefox Bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : `addEditorObserver()` wurde entfernt, verwenden Sie stattdessen `setEditorObserver()`, `removeEditorObserver()` nimmt keinen `nsIEditorObserver`-Parameter mehr an ([Firefox Bug 785091](https://bugzil.la/785091))
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request`-Beobachter werden während `nsIChannel.asyncOpen()` nicht mehr garantiert synchron aufgerufen.
    Für Beobachter, die während `asyncOpen()` aufgerufen werden müssen, wurde das neue `http-on-opening-request`-Beobachterthema hinzugefügt. `Siehe` ([Firefox Bug 800799](https://bugzil.la/800799))
- `nsIProtocolProxyService`
  - : Die `resolve`-Methode wurde entfernt. Nun kann nur die `asyncResolve`-Methode verwendet werden. Siehe ([Firefox Bug 769764](https://bugzil.la/769764))

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
