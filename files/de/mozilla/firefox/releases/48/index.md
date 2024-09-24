---
title: Firefox 48 für Entwickler
slug: Mozilla/Firefox/Releases/48
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 48 wurde am 2. August 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Position von Elementen kann jetzt innerhalb des Inhalts verändert werden ([Firefox-Bug 1139187](https://bugzil.la/1139187)).
- {{domxref("console/clear_static", "console.clear()")}} wurde implementiert, um die Konsolenausgabe zu löschen ([Firefox-Bug 659625](https://bugzil.la/659625)).
- [HTTP-Log-Überprüfung zur Webkonsole hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details) ([Firefox-Bug 1211525](https://bugzil.la/1211525)).
- Ein [Firebug-Theme hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#choose-devtools-theme) ([Firefox-Bug 1244054](https://bugzil.la/1244054)).
- Der [DOM-Inspektor hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html) ([Firefox-Bug 1201475](https://bugzil.la/1201475)).
- [Schriftinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) ist wieder standardmäßig aktiviert ([Firefox-Bug 1280121](https://bugzil.la/1280121)).
- [Verbesserte Vorschläge](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#edit-rules) für CSS-Eigenschaften ([Firefox-Bug 1168246](https://bugzil.la/1168246)).
- Cookies, localstorage und sessionstorage Einträge sind durch Doppelklick bearbeitbar ([Firefox-Bug 1231154](https://bugzil.la/1231154), [Firefox-Bug 1231179](https://bugzil.la/1231179), [Firefox-Bug 1231155](https://bugzil.la/1231155)).

### HTML

- Die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente sind jetzt standardmäßig in Nightly und Aurora (DevTools) aktiviert, jedoch nicht in Beta oder Release:

  - Der Standardstil für diese Elemente wurde angepasst, um der Spezifikation zu entsprechen ([Firefox-Bug 1258657](https://bugzil.la/1258657)).
  - Das {{domxref("HTMLDetailsElement/toggle_event", "toggle")}}-Event wird jetzt an das {{HTMLElement("details")}}-Element gesendet, wenn es geöffnet oder geschlossen wird ([Firefox-Bug 1225412](https://bugzil.la/1225412)).

- Die [`meta`](/de/docs/Web/HTML/Element/meta) Attribute unterstützen jetzt auch die Werte `no-referrer-when-downgrade` und `origin-when-cross-origin` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).

### CSS

- Die {{cssxref("calc", "calc()")}} Funktion wurde verbessert, um der Spezifikation näher zu kommen:

  - {{cssxref("calc", "calc()")}} wird jetzt auf der {{cssxref("line-height")}}-Eigenschaft unterstützt ([Firefox-Bug 594933](https://bugzil.la/594933)).
  - Unterstützung für verschachtelte CSS {{cssxref("calc", "calc()")}} hinzugefügt ([Firefox-Bug 968761](https://bugzil.la/968761)).

- Unsere experimentelle Implementierung von CSS-Grids wurde aktualisiert:

  - Fragmentierung für Grid-Layout wurde implementiert ([Firefox-Bug 1144096](https://bugzil.la/1144096)).
  - \[css-grid] Prozentuale Spuren werden jetzt als `auto` behandelt, wenn die Größe des Grid-Containers undefiniert ist ([Firefox-Bug 1264607](https://bugzil.la/1264607)).
  - {{HTMLElement("fieldset")}} unterstützt jetzt Grid- und Flex-Layouts ([Firefox-Bug 1230207](https://bugzil.la/1230207)).

- Der `luminance` Wert für {{cssxref("mask-mode")}} wurde hinzugefügt; der `auto` Wert wurde auf `match-source` umbenannt, um der Spezifikation zu entsprechen ([Firefox-Bug 1228354](https://bugzil.la/1228354)).
- Interpolation von {{cssxref("clip-path")}} Grundformen in CSS-Animationen und -Übergängen wird jetzt unterstützt ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Unterstützung für horizontal-in-vertical (_tate-chu-yoko_) Text wurde hinzugefügt über den `all` Wert der {{cssxref("text-combine-upright")}} Eigenschaft ([Firefox-Bug 1097499](https://bugzil.la/1097499)).
- Unterstützung für die experimentelle {{cssxref("print-color-adjust", "color-adjust")}} Eigenschaft wurde hinzugefügt, was den Seiten ermöglicht zu spezifizieren, dass Hintergrundfarben und -bilder gedruckt werden sollen ([Firefox-Bug 1209273](https://bugzil.la/1209273)).
- Das {{cssxref("::first-letter")}} Pseudo-Element stimmt jetzt auch mit Satzzeichen vom Typ Pd überein, die dem tatsächlichen ersten Buchstaben vorausgehen oder unmittelbar folgen; dies ist eine neue Anforderung des CSS Pseudo-Element-Moduls Stufe 4 ([Firefox-Bug 1260366](https://bugzil.la/1260366)).
- Mehrere `-webkit`-geprefixten Eigenschaften und Werte wurden für die Web-Kompatibilität hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, standardmäßig `false`:

  - {{cssxref("-webkit-text-fill-color")}} ([Firefox-Bug 1247777](https://bugzil.la/1247777)).
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ([Firefox-Bug 1248708](https://bugzil.la/1248708)).
  - `-webkit-background-clip` (als Hintergrund-Clip) Textwert ([Firefox-Bug 759568](https://bugzil.la/759568)).
  - `-webkit-box-direction`, `-webkit-box-orient` ([Firefox-Bug 1262049](https://bugzil.la/1262049)).
  - Der Wert `-webkit-inline-box` ist jetzt ein Alias von `inline-flex` auf der {{cssxref("display")}} Eigenschaft ([Firefox-Bug 1257661](https://bugzil.la/1257661)).
  - `-webkit-flex-direction`, `-webkit-flex-wrap`, `-webkit-flex-flow`, `-webkit-order`, `-webkit-flex`, `-webkit-flex-grow`, `-webkit-flex-shrink`, `-webkit-flex-basis`, `-webkit-justify-content`, `-webkit-align-items`, `-webkit-align-self` und `-webkit-align-content` wurden als Aliase für die nicht-prefixed Eigenschaften hinzugefügt, und die Werte `-webkit-flex` und `-webkit-inline-flex` für die {{cssxref("display")}} Eigenschaft als Aliase für die unpräfixierten Werte ([Firefox-Bug 1274096](https://bugzil.la/1274096)).
  - Hinzugefügt wurden `-webkit-box-flex`, `-webkit-box-ordinal-group`, `-webkit-box-align` und `-webkit-box-pack` Eigenschaften und `-webkit-box` Wert zu {{cssxref("display")}} als Aliase für moderne [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ([Firefox-Bug 1208635](https://bugzil.la/1208635)).

- Der `text`-Wert von {{cssxref("background-clip")}} ist jetzt in allen Firefox-Versionen verfügbar (und nicht nur in Nicht-Release-Versionen) ([Firefox-Bug 1263516](https://bugzil.la/1263516)).
- Der `absolute` Wert der {{cssxref("position")}} Eigenschaften auf dem obersten Element ([Firefox-Bug 1236828](https://bugzil.la/1236828)).
- Eine interne Syntax für {{domxref("@supports")}} wurde hinzugefügt, um Prefs zu erkennen ([Firefox-Bug 1259889](https://bugzil.la/1259889)).

### JavaScript

#### Neue APIs

- Die {{jsxref("String.prototype.padStart()")}} und {{jsxref("String.prototype.padEnd()")}} Methoden wurden implementiert ([Firefox-Bug 1260509](https://bugzil.la/1260509)).
- Die ES2015 {{jsxref("Symbol.unscopables")}} und {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} Eigenschaften wurden implementiert ([Firefox-Bug 1054759](https://bugzil.la/1054759) und [Firefox-Bug 1258163](https://bugzil.la/1258163)).
- Das ES2015 {{jsxref("Symbol.isConcatSpreadable")}} Symbol wurde implementiert ([Firefox-Bug 1041586](https://bugzil.la/1041586)).
- Der ES2015 {{jsxref("Array.@@species", "Array[@@species]")}} Getter wurde implementiert ([Firefox-Bug 1165052](https://bugzil.la/1165052)).
- Der ES2015 {{jsxref("ArrayBuffer.@@species", "ArrayBuffer[@@species]")}} Getter und der {{jsxref("TypedArray.@@species", "%TypedArray%[@@species]")}} Getter wurden implementiert ([Firefox-Bug 1165053](https://bugzil.la/1165053)).
- Die {{jsxref("Intl.getCanonicalLocales()")}} Methode des ECMAScript Internationalization API Entwurfs wurde implementiert ([Firefox-Bug 1263040](https://bugzil.la/1263040)).

#### Veraltungen und Entfernungen

- Die veraltete [alte Proxy-API](/de/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` und `Proxy.createFunction()`) wurde entfernt. Verwenden Sie stattdessen das standardmäßige {{jsxref("Proxy")}} Objekt ([Firefox-Bug 892903](https://bugzil.la/892903)).
- Die `String.prototype.contains()` Methode wurde entfernt (sie war seit Version 40 veraltet). Verwenden Sie stattdessen die {{jsxref("String.prototype.includes()")}} Methode ([Firefox-Bug 1103588](https://bugzil.la/1103588)).
- Die nicht-standardisierte `RegExp.multiline` Eigenschaft (nicht {{jsxref("RegExp.prototype.multiline")}}) wurde entfernt. Verwenden Sie stattdessen das Standard- [m-Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) ([Firefox-Bug 1219757](https://bugzil.la/1219757)).
- Die [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) Methoden können nicht mehr global ohne ein Objekt aufgerufen werden ([Firefox-Bug 1253016](https://bugzil.la/1253016)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Das "Moz" Präfix wurde von den {{domxref("CSSKeyframeRule")}} und {{domxref("CSSKeyframesRule")}} Schnittstellen entfernt ([Firefox-Bug 1256178](https://bugzil.la/1256178)).
- Das `NavigatorConcurrentHardware` {{Glossary("mixin")}} wurde implementiert, das die {{domxref("Navigator.hardwareConcurrency")}} Eigenschaft zur {{domxref("Navigator")}} Schnittstelle hinzufügt. Dies ermöglicht es Websites und Apps, mindestens eine Annäherung der verfügbaren Prozessorkerne für die Ausführung von {{domxref("Worker")}}s zu erhalten ([Firefox-Bug 1008453](https://bugzil.la/1008453)).
- Die {{domxref("Node.isSameNode()")}} Methode, die in Firefox 10 entfernt wurde, ist nach langer Abwesenheit, nachdem sie zurück in die Spezifikation aufgenommen wurde, zurückgekehrt ([Firefox-Bug 1256299](https://bugzil.la/1256299)).
- Firefox gibt nun ordnungsgemäße Ausnahmen statt Zahlen zurück, wenn bei einem Aufruf von {{domxref("Navigator.registerProtocolHandler()")}} etwas schiefgeht.
- {{domxref("Element.animate()")}} ist jetzt standardmäßig aktiviert ([Firefox-Bug 1245000](https://bugzil.la/1245000)).
- Die zwei Methoden {{domxref("Element.insertAdjacentText()")}} und {{domxref("Element.insertAdjacentElement()")}} wurden implementiert ([Firefox-Bug 811259](https://bugzil.la/811259)).
- {{domxref("Document.scrollingElement")}} wurde standardmäßig aktiviert ([Firefox-Bug 1265032](https://bugzil.la/1265032)).
- `Node.localName`, `Node.namespaceURI` und `Node.prefix` wurden zu den {{domxref("Element")}} und {{domxref("Attr")}} APIs verschoben ([Firefox-Bug 1055776](https://bugzil.la/1055776)).
- Laut der neuesten Spezifikation wurden die Werte von {{domxref("KeyboardEvent.code")}}, die für die folgenden Tasten zurückgegeben werden, geändert ([Firefox-Bug 1264150](https://bugzil.la/1264150)):

  - `"OSLeft"` und `"OSRight"` sind jetzt `"MetaLeft"` und `"MetaRight"`.
  - `"VolumeDown"`, `"VolumeUp"`, und `"VolumeMute"` sind jetzt `"AudioVolumeDown"`, `"AudioVolumeUp"`, und `"AudioVolumeMute"`.
  - `"IntlHash"` wurde entfernt.
  - Alle Tasten, deren `code`-Werte in früheren Versionen von Firefox als "" gemeldet wurden, werden jetzt als "Unidentified" gemeldet.

#### Canvas 2D

- Die {{domxref("CanvasRenderingContext2D.ellipse()")}} Methode wurde implementiert ([Firefox-Bug 910138](https://bugzil.la/910138)).

#### WebRTC

- Die zwei Methoden {{domxref("MediaStream.clone()")}} und {{domxref("MediaStreamTrack.clone()")}} wurden implementiert ([Firefox-Bug 1208371](https://bugzil.la/1208371)).
- Der `iceRestart` Eintrag wird jetzt im `RTCOfferOptions` Codewörterbuch unterstützt, wodurch {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} verwendet werden kann, um ICE-Neustarts anzufordern ([Firefox-Bug 906986](https://bugzil.la/906986)).
- Die {{domxref("RTCPeerConnection.createOffer()")}} Methode bevorzugt jetzt standardmäßig den VP9-Video-Codec; vorher wurde VP8 bevorzugt ([Firefox-Bug 1242324](https://bugzil.la/1242324)).
- WebM/VP8 Video mit Auflösungsänderungen, das mit {{domxref("MediaRecorder")}} aufgenommen wurde, kann jetzt erfolgreich abgespielt werden.

#### Andere

- Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 842818](https://bugzil.la/842818)).
- Die {{domxref("CustomEvent")}} Schnittstelle ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1003432](https://bugzil.la/1003432)).
- Die `DOMApplicationsManager.getNotInstalled()` Methode wurde entfernt ([Firefox-Bug 1255036](https://bugzil.la/1255036)).
- Mehrere Firefox OS APIs, die fälschlicherweise dem Web ausgesetzt waren, wurden nun wie beabsichtigt verborgen — {{domxref("mozContact")}}, {{domxref("MozContactChangeEvent")}}, {{domxref("navigator.mozContacts")}}, {{domxref("MozPowerManager")}}, {{domxref("MozSettingsEvent")}} (siehe [Firefox-Bug 1043562](https://bugzil.la/1043562), [Firefox-Bug 1256414](https://bugzil.la/1256414), und [Firefox-Bug 1256046](https://bugzil.la/1256046)).
- Unterstützung für UTF-16 wurde aus {{domxref("TextEncoder")}} entfernt ([Firefox-Bug 1257877](https://bugzil.la/1257877)).
- {{domxref("RTCStatsReport")}} ist jetzt eine echte `maplike` Schnittstelle: zusätzlich zu {{domxref("RTCStatsReport.forEach()", "forEach()")}}, {{domxref("RTCStatsReport.get()", "get()")}}, und {{domxref("RTCStatsReport.has()", "has()")}}, wurden die Methoden {{domxref("RTCStatsReport.entries", "entries()")}}, {{domxref("RTCStatsReport.values", "values()")}}, {{domxref("RTCStatsReport.keys()", "keys()")}}, sowie der {{domxref("RTCStatsReport.size", "size")}} Getter implementiert ([Firefox-Bug 906986](https://bugzil.la/906986)).
- Die {{domxref("Request.cache")}} Eigenschaft wurde hinzugefügt, um das Cache-Verhalten zu kontrollieren ([Firefox-Bug 1120715](https://bugzil.la/1120715)).
- Das Verhalten toter Tasten auf Mac OS X wurde geändert, um auf allen Plattformen gleich zu arbeiten; sie lösen nicht mehr ein {{domxref("Element/keypress_event", "keypress")}} Ereignis aus, wenn kein Text generiert wird, wenn das fokussierte Element nicht bearbeitbar ist (wenn das fokussierte Element bearbeitbar ist, verursacht die tote Taste anstelle von Keyboard-Ereignissen Kompositionsereignisse auf Mac OS X). Außerdem ist wie auf anderen Plattformen der Wert von {{domxref("KeyboardEvent.key")}} jetzt `"Dead"` für tote Tastendrücke, die in anderen Situationen keinen Text erzeugen.

## HTTP

- Unterstützung für den {{HTTPHeader("Upgrade-Insecure-Requests")}} Header wurde hinzugefügt ([Firefox-Bug 1243586](https://bugzil.la/1243586)).
- Die {{CSP("block-all-mixed-content")}} CSP-Direktive wurde implementiert ([Firefox-Bug 1122236](https://bugzil.la/1122236))

## Änderungen für Add-on- und Mozilla-Entwickler

- Die [Social Worker API](/de/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) wurde entfernt.
- Die [`-moz-bool-pref()`](/de/docs/Mozilla/Gecko/Chrome/CSS/-moz-bool-pref) [CSS](/de/docs/Web/CSS) {{CSSxRef("@supports")}} Funktion wurde hinzugefügt, um Teile von Chrome-Stylesheets hinter Booleschen Präferenzen zu verbergen. ([Firefox-Bug 1259889](https://bugzil.la/1259889))

## Ältere Versionen

{{Firefox_for_developers}}
