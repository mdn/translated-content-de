---
title: Firefox 48 für Entwickler
short-title: Firefox 48
slug: Mozilla/Firefox/Releases/48
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 48 wurde am 2. August 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Position von Elementen kann jetzt innerhalb des Inhalts geändert werden ([Firefox Bug 1139187](https://bugzil.la/1139187)).
- Implementiert [`console.clear()`](/de/docs/Web/API/console/clear_static), um die Konsolenausgabe zu löschen ([Firefox Bug 659625](https://bugzil.la/659625)).
- [HTTP-Protokollinspektion zur Webkonsole hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details) ([Firefox Bug 1211525](https://bugzil.la/1211525)).
- Ein [Firebug-Theme](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#choose-devtools-theme) hinzugefügt ([Firefox Bug 1244054](https://bugzil.la/1244054)).
- Den [DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html) hinzugefügt ([Firefox Bug 1201475](https://bugzil.la/1201475)).
- Der [Schriftinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) ist standardmäßig wieder aktiviert ([Firefox Bug 1280121](https://bugzil.la/1280121)).
- [Verbesserte Vorschläge](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#edit-rules) für CSS-Eigenschaften ([Firefox Bug 1168246](https://bugzil.la/1168246)).
- Cookies, localStorage und sessionStorage-Einträge sind durch Doppelklicken bearbeitbar ([Firefox Bug 1231154](https://bugzil.la/1231154), [Firefox Bug 1231179](https://bugzil.la/1231179), [Firefox Bug 1231155](https://bugzil.la/1231155)).

### HTML

- Die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente sind standardmäßig in Nightly und Aurora (DevTools) aktiviert, jedoch nicht in Beta oder Release:
  - Der Standardstil für diese Elemente wurde angepasst, um den Spezifikationen zu entsprechen ([Firefox Bug 1258657](https://bugzil.la/1258657)).
  - Das `toggle` Ereignis wird jetzt an das {{HTMLElement("details")}} Element gesendet, wenn dieses geöffnet oder geschlossen wird ([Firefox Bug 1225412](https://bugzil.la/1225412)).

- Die [`meta`](/de/docs/Web/HTML/Reference/Elements/meta) Attribute unterstützen jetzt auch die Werte `no-referrer-when-downgrade` und `origin-when-cross-origin` ([Firefox Bug 1178337](https://bugzil.la/1178337)).

### CSS

- Die {{cssxref("calc", "calc()")}} Funktion wurde verbessert, um näher an der Spezifikation zu sein:
  - {{cssxref("calc", "calc()")}} wird jetzt auf der {{cssxref("line-height")}} Eigenschaft unterstützt ([Firefox Bug 594933](https://bugzil.la/594933)).
  - Unterstützung für verschachtelte CSS {{cssxref("calc", "calc()")}} hinzugefügt ([Firefox Bug 968761](https://bugzil.la/968761)).

- Unsere experimentelle Implementierung der CSS-Grids wurde aktualisiert:
  - Die Fragmentierung für das Grid-Layout wurde implementiert ([Firefox Bug 1144096](https://bugzil.la/1144096)).
  - \[css-grid] Prozentuale Spuren werden jetzt als `auto` behandelt, wenn die Größe des Gitters unbestimmt ist ([Firefox Bug 1264607](https://bugzil.la/1264607)).
  - {{HTMLElement("fieldset")}} unterstützt jetzt Grid- und Flex-Layouts ([Firefox Bug 1230207](https://bugzil.la/1230207)).

- Der `luminance` Wert für {{cssxref("mask-mode")}} wurde hinzugefügt; der `auto` Wert wurde in `match-source` umbenannt, um den Spezifikationen zu entsprechen ([Firefox Bug 1228354](https://bugzil.la/1228354)).
- Interpolation von {{cssxref("clip-path")}} Basisformen in CSS-Animationen und -Übergängen wird jetzt unterstützt ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Unterstützung für horizontal-in-vertical (_tate-chu-yoko_) Text wurde über den `all` Wert der {{cssxref("text-combine-upright")}} Eigenschaft hinzugefügt ([Firefox Bug 1097499](https://bugzil.la/1097499)).
- Unterstützung für die experimentelle {{cssxref("print-color-adjust", "color-adjust")}} Eigenschaft wurde hinzugefügt, was es Seiten ermöglicht zu bestimmen, dass Hintergrundfarben und Bilder gedruckt werden sollen ([Firefox Bug 1209273](https://bugzil.la/1209273)).
- Das {{cssxref("::first-letter")}} Pseudoelement passt jetzt auch Satzzeichen des Typs Pd an, die dem tatsächlichen ersten Buchstaben vorausgehen oder unmittelbar darauf folgen; dies ist eine neue Anforderung des CSS Pseudo-element module level 4 ([Firefox Bug 1260366](https://bugzil.la/1260366)).
- Mehrere `-webkit`-präfixierte Eigenschaften und Werte wurden zur Webkompatibilität hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, die standardmäßig auf `false` steht:
  - {{cssxref("-webkit-text-fill-color")}} ([Firefox Bug 1247777](https://bugzil.la/1247777)).
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ([Firefox Bug 1248708](https://bugzil.la/1248708)).
  - `-webkit-background-clip` (als background-clip) Textwert ([Firefox Bug 759568](https://bugzil.la/759568)).
  - `-webkit-box-direction`, `-webkit-box-orient` ([Firefox Bug 1262049](https://bugzil.la/1262049)).
  - Der Wert `-webkit-inline-box` ist jetzt ein Alias für `inline-flex` auf der {{cssxref("display")}} Eigenschaft ([Firefox Bug 1257661](https://bugzil.la/1257661)).
  - `-webkit-flex-direction`, `-webkit-flex-wrap`, `-webkit-flex-flow`, `-webkit-order`, `-webkit-flex`, `-webkit-flex-grow`, `-webkit-flex-shrink`, `-webkit-flex-basis`, `-webkit-justify-content`, `-webkit-align-items`, `-webkit-align-self` und `-webkit-align-content` wurden als Aliase für die unpräfixierten Eigenschaften hinzugefügt und die Werte `-webkit-flex` und `-webkit-inline-flex` für die {{cssxref("display")}} Eigenschaft als Aliase für die unpräfixierten Werte ([Firefox Bug 1274096](https://bugzil.la/1274096)).
  - Hinzugefügt `-webkit-box-flex`, `-webkit-box-ordinal-group`, `-webkit-box-align` und `-webkit-box-pack` Eigenschaften und `-webkit-box` Wert zu {{cssxref("display")}} als Aliase für moderne [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ([Firefox Bug 1208635](https://bugzil.la/1208635)).

- Der `text` Wert von {{cssxref("background-clip")}} ist jetzt in allen Arten von Firefox verfügbar (und nicht nur in Nicht-Release-Builds) ([Firefox Bug 1263516](https://bugzil.la/1263516)).
- Der `absolute` Wert der {{cssxref("position")}} Eigenschaften auf dem obersten Layerelement ([Firefox Bug 1236828](https://bugzil.la/1236828)).
- Eine interne Syntax für {{cssxref("@supports")}} hinzugefügt, um Prefs zu erkennen ([Firefox Bug 1259889](https://bugzil.la/1259889)).

### JavaScript

#### Neue APIs

- Die Methoden {{jsxref("String.prototype.padStart()")}} und {{jsxref("String.prototype.padEnd()")}} wurden implementiert ([Firefox Bug 1260509](https://bugzil.la/1260509)).
- Die ES2015 {{jsxref("Symbol.unscopables")}} und [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) Eigenschaften wurden implementiert ([Firefox Bug 1054759](https://bugzil.la/1054759) und [Firefox Bug 1258163](https://bugzil.la/1258163)).
- Das ES2015 {{jsxref("Symbol.isConcatSpreadable")}} Symbol wurde implementiert ([Firefox Bug 1041586](https://bugzil.la/1041586)).
- Der ES2015 [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) Getter wurde implementiert ([Firefox Bug 1165052](https://bugzil.la/1165052)).
- Der ES2015 [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species) Getter und [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species) Getter wurden implementiert ([Firefox Bug 1165053](https://bugzil.la/1165053)).
- Die Methode {{jsxref("Intl.getCanonicalLocales()")}} der ECMAScript Internationalization API Draft wurde implementiert ([Firefox Bug 1263040](https://bugzil.la/1263040)).

#### Veraltungen und Entfernungen

- Die veraltete [alte Proxy-API](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#proxy) (`Proxy.create` und `Proxy.createFunction()`) wurde entfernt. Verwenden Sie stattdessen das standardmäßige {{jsxref("Proxy")}} Objekt ([Firefox Bug 892903](https://bugzil.la/892903)).
- Die `String.prototype.contains()` Methode wurde entfernt (sie war seit Version 40 veraltet). Verwenden Sie stattdessen die {{jsxref("String.prototype.includes()")}} Methode ([Firefox Bug 1103588](https://bugzil.la/1103588)).
- Die nicht standardisierte `RegExp.multiline` Eigenschaft (nicht {{jsxref("RegExp.prototype.multiline")}}) wurde entfernt. Verwenden Sie stattdessen das standardisierte [m-Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) ([Firefox Bug 1219757](https://bugzil.la/1219757)).
- Die Methoden [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) können nicht mehr ohne ein Objekt im globalen Geltungsbereich aufgerufen werden. ([Firefox Bug 1253016](https://bugzil.la/1253016)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Das "Moz"-Präfix wurde von den [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) und [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Schnittstellen entfernt ([Firefox Bug 1256178](https://bugzil.la/1256178)).
- Das `NavigatorConcurrentHardware` {{Glossary("mixin", "Mixin")}} wurde implementiert, das die [`Navigator.hardwareConcurrency`](/de/docs/Web/API/Navigator/hardwareConcurrency) Eigenschaft zur [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle hinzufügt. Dies ermöglicht es Websites und Apps, zumindest eine Annäherung an die Anzahl der verfügbaren Prozessorkerne zu erhalten, um [`Worker`](/de/docs/Web/API/Worker)s auszuführen ([Firefox Bug 1008453](https://bugzil.la/1008453)).
- Die [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode) Methode, die in Firefox 10 entfernt wurde, ist zurückgekehrt, nachdem sie nach einem langen Fehlen wieder in die Spezifikation aufgenommen wurde ([Firefox Bug 1256299](https://bugzil.la/1256299)).
- Firefox gibt jetzt richtige Ausnahmen statt Zahlen zurück, wenn bei einem Aufruf von [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) etwas schiefgeht.
- [`Element.animate()`](/de/docs/Web/API/Element/animate) ist jetzt standardmäßig aktiviert ([Firefox Bug 1245000](https://bugzil.la/1245000)).
- Die beiden Methoden [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) und [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement) wurden implementiert ([Firefox Bug 811259](https://bugzil.la/811259)).
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) wurde standardmäßig aktiviert ([Firefox Bug 1265032](https://bugzil.la/1265032)).
- `Node.localName`, `Node.namespaceURI` und `Node.prefix` wurden auf die [`Element`](/de/docs/Web/API/Element) und [`Attr`](/de/docs/Web/API/Attr) APIs verschoben ([Firefox Bug 1055776](https://bugzil.la/1055776)).
- Gemäß der neuesten Spezifikation wurden die Werte von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) für folgende Tasten geändert siehe ([Firefox Bug 1264150](https://bugzil.la/1264150)):
  - `"OSLeft"` und `"OSRight"` sind jetzt `"MetaLeft"` und `"MetaRight"`.
  - `"VolumeDown"`, `"VolumeUp"` und `"VolumeMute"` sind jetzt `"AudioVolumeDown"`, `"AudioVolumeUp"` und `"AudioVolumeMute"`.
  - `"IntlHash"` wurde entfernt.
  - Alle Tasten, deren `code`-Werte in früheren Versionen von Firefox als "" gemeldet wurden, werden jetzt als "Unidentified" gemeldet.

#### Canvas 2D

- Die Methode [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse) wurde implementiert ([Firefox Bug 910138](https://bugzil.la/910138)).

#### WebRTC

- Die beiden Methoden [`MediaStream.clone()`](/de/docs/Web/API/MediaStream/clone) und [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone) wurden implementiert ([Firefox Bug 1208371](https://bugzil.la/1208371)).
- Der `iceRestart` Eintrag wird jetzt im `RTCOfferOptions` Codewörterbuch unterstützt, was es ermöglicht, [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) für die Anforderung von ICE-Neustarts zu verwenden ([Firefox Bug 906986](https://bugzil.la/906986)).
- Die Methode [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) bevorzugt jetzt den VP9-Videocodec standardmäßig; vorher wurde VP8 bevorzugt ([Firefox Bug 1242324](https://bugzil.la/1242324).
- WebM/VP8-Videos, die Videoauflösungsänderungen enthalten und mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) aufgezeichnet wurden, können jetzt erfolgreich wiedergegeben werden.

#### Andere

- Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 842818](https://bugzil.la/842818)).
- Die [`CustomEvent`](/de/docs/Web/API/CustomEvent) Schnittstelle ist jetzt in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox Bug 1003432](https://bugzil.la/1003432)).
- Die `DOMApplicationsManager.getNotInstalled()` Methode wurde entfernt ([Firefox Bug 1255036](https://bugzil.la/1255036)).
- Mehrere Firefox OS APIs, die fälschlicherweise dem Web ausgesetzt waren, wurden jetzt wie beabsichtigt versteckt — `mozContact`, `MozContactChangeEvent`, `navigator.mozContacts`, `MozPowerManager`, `MozSettingsEvent` (siehe [Firefox Bug 1043562](https://bugzil.la/1043562), [Firefox Bug 1256414](https://bugzil.la/1256414) und [Firefox Bug 1256046](https://bugzil.la/1256046)).
- Unterstützung für UTF-16 wurde aus dem [`TextEncoder`](/de/docs/Web/API/TextEncoder) entfernt ([Firefox Bug 1257877](https://bugzil.la/1257877)).
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ist jetzt eine echte `maplike` Schnittstelle: neben [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach), [`get()`](/de/docs/Web/API/RTCStatsReport/get) und [`has()`](/de/docs/Web/API/RTCStatsReport/has) wurden die Methoden [`entries()`](/de/docs/Web/API/RTCStatsReport/entries), [`values()`](/de/docs/Web/API/RTCStatsReport/values), [`keys()`](/de/docs/Web/API/RTCStatsReport/keys) sowie der [`size`](/de/docs/Web/API/RTCStatsReport/size) Getter implementiert ([Firefox Bug 906986](https://bugzil.la/906986)).
- Die [`Request.cache`](/de/docs/Web/API/Request/cache) Eigenschaft wurde hinzugefügt, um das Cache-Verhalten zu steuern ([Firefox Bug 1120715](https://bugzil.la/1120715)).
- Die Behandlung von toten Tasten auf Mac OS X wurde geändert, um wie auf anderen Plattformen zu funktionieren; sie lösen keine [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignisse mehr aus, wenn kein Text generiert wird, wenn das fokussierte Element nicht editierbar ist (wenn das fokussierte Element editierbar ist, verursachen tote Tasten auf Mac OS X stattdessen Kompositionsereignisse anstelle von Tastaturereignissen). Ebenso wie auf anderen Plattformen ist der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt `"Dead"` für Tastenanschläge, die keinen Text in anderen Situationen generieren.

## HTTP

- Unterstützung für den {{HTTPHeader("Upgrade-Insecure-Requests")}} Header wurde hinzugefügt ([Firefox Bug 1243586](https://bugzil.la/1243586)).
- Die {{CSP("block-all-mixed-content")}} CSP-Direktive wurde implementiert ([Firefox Bug 1122236](https://bugzil.la/1122236))

## Änderungen für Add-On- und Mozilla-Entwickler

- Die Social Worker API wurde entfernt.
- Die Funktion `-moz-bool-pref()` [CSS](/de/docs/Web/CSS) {{CSSxRef("@supports")}} wurde hinzugefügt, um es zu ermöglichen, Teile von Chrome-Stylesheets hinter Booleschen Präferenzen zu verbergen. ([Firefox Bug 1259889](https://bugzil.la/1259889))
