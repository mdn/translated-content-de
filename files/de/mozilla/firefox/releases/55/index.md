---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- Hinzufügen der Filterung von Netzwerkanfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch Verwendung regulärer Ausdrücke ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Es ist jetzt möglich, Spalten innerhalb des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und festgelegten Cookie-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) zum Netzwerkmonitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) auf `true` gesetzt wurde, verwenden jetzt {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox mit anderen modernen Browsern in Einklang zu bringen ([Firefox Bug 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- Aktivieren von `dom.forms.datetime` standardmäßig in Nightly ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}}-Attribut ist jetzt standardmäßig verfügbar ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Implementierung der `frames()`-Timing-Funktion ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Implementierung der {{cssxref("text-justify")}}-Eigenschaft ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in Release-Kanälen abgeschaltet waren, sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass das Feature [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) jederzeit aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Implementierung des proprietären `-moz-context-properties` Attributs ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Der Null (0) Winkelwert ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht richtig interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudo-Element wird jetzt unterstützt; es wird auf Text-Cues angewandt, die innerhalb eines Media-Elements präsentiert werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}}-Attribut {{ SVGAttr("fr") }} wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die {{jsxref("SharedArrayBuffer")}}- und {{jsxref("Atomics")}}-Objekte sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf JavaScript's neue parallele Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in der [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt, und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt ein optionales `locale`-Parameter, um ein Sprach-Tag für locale-spezifische Fallzuordnungen anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}}-Objekt unterstützt jetzt die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun standardmäßig die Standardsprache des Browsers anstelle der des Betriebssystems, wenn keine Spracheinstellung bereitgestellt wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Vorlagenaufrufstellenobjekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realms basierend auf ihrer Liste von Rohstrings kanonisiert ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und ermöglichen Konstruktoren ohne Argumente, die typisierte Arrays mit null Länge zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [API zur kollaborativen Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback`-API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor der nächsten Neulackierung freie Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsprobleme zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und ist in Nightly auf macOS verfügbar). Diese API ermöglicht es, virtuelle Realitätsgeräte — wie z.B. Head-Mounted Displays wie Oculus Rift oder HTC Vive — für Web-Apps zugänglich zu machen, sodass Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen durch eine 3D-Szene umsetzen und Inhalte in solchen Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnittbereich eines Zielelements mit einem Vorfahrenelement oder mit dem Ansichtsfenster eines Dokuments asynchron zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften {{domxref("Window")}} {{domxref("Window.scrollX", "scrollX")}} und {{domxref("Window.scrollY", "scrollY")}} (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um Subpixel-Präzision zu bieten. Statt eines Integers geben sie jetzt einen Gleitkommawert zurück, der die Scrollposition auf subpixel-genauen Anzeigen genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Falls erforderlich, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen umzuwandeln.
- {{domxref("MediaQueryList")}} (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Standard zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441), sowie {{domxref("MediaQueryList")}} und {{domxref("MediaQueryListEvent")}}.
- Methoden des {{domxref("DOMTokenList")}}, die den Listenwert verändern, entfernen jetzt automatisch Leerzeichen und doppelte Tokens ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimmung von Leerzeichen und Entfernung von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des {{domxref("HTMLInputElement")}} kann jetzt nachträglich mit JavaScript dynamisch geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der {{domxref("URL.URL", "URL()")}}-Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch einen `USVString`. Er kann immer noch ein bestehendes {{domxref("URL")}}-Objekt als Basis verwenden, was sich zum `href`-Attribut des Objekts stringifiziert ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode {{domxref("Document.createEvent()")}} unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft {{domxref("MessageEvent.origin")}} ist jetzt vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft {{domxref("MessageEvent.source")}} nimmt jetzt einen `MessageEventSource`-Wert an (der ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}}-Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde jetzt auf das {{domxref("Element/wheel_event","wheel")}}-Ereignis plus die `Strg`-Taste abgebildet. Diese Abbildung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoomfunktionen mithilfe der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mausrad + `Strg` zoomt häufig) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Auswahl-API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf die Fokussierung von Bearbeitungshosts beim Verschieben der Auswahl mit anderen Browsern identisch ist ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Auswahl-API in Bezug auf Fokusänderungen bei Bearbeitungshosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die {{domxref("Selection")}}-API wurde aktualisiert, um einige neuere Spezifikationsänderungen zu übernehmen ([Firefox Bug 1359371](https://bugzil.la/1359371)):

  - Der `offset`-Parameter der Methoden {{domxref("Selection.collapse", "collapse()")}} und {{domxref("Selection.extend", "extend()")}} ist jetzt optional.
  - Der `node`-Parameter der Methode {{domxref("Selection.collapse", "collapse()")}} ist jetzt nullfähig.
  - Der `partialContainment`-Parameter der Methode {{domxref("Selection.containsNode", "containsNode()")}} ist jetzt optional.
  - Die Methode {{domxref("Selection.deleteFromDocument", "deleteFromDocument()")}} wurde hinzugefügt.

- Ebenfalls in der {{domxref("Selection")}}-API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von {{domxref("Selection.removeAllRanges()")}} und {{domxref("Selection.collapse()")}} hinzugefügt, aus Gründen der Web-Kompatibilität und zur Parität mit WebKit/Blink ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden {{domxref("StorageManager.persist()")}} und {{domxref("StorageManager.persisted()")}} der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten bereitgestellt ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Worker

- Worker und Shared Worker können jetzt mit einer Identifikationseigenschaft `name` erstellt werden. Siehe die Konstruktoren {{domxref("Worker.Worker", "Worker()")}} und {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}, sowie die Schnittstellen {{domxref("DedicatedWorkerGlobalScope")}} und {{domxref("SharedWorkerGlobalScope")}}. ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- {{domxref("setTimeout()")}} und {{domxref("setInterval()")}} unterliegen jetzt einer Mindestintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Timeout-Skripten](/de/docs/Web/API/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- An Service Worker-Kontexte gesendete Nachrichten (z.B. als Event-Objekt von {{domxref("ServiceWorkerGlobalScope.message_event","onmessage")}}) werden jetzt durch {{domxref("MessageEvent")}}-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu gewährleisten.
- Die Methode {{domxref("PushManager.subscribe()")}} akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-kodierte Strings als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardisierter Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck des Kontexts angibt) für die {{domxref("AudioContext")}}-Schnittstelle verursachte Fehler, wenn der `options`-Parameter angegeben wurde. Wir haben den nicht-standardisierten Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- {{domxref("mediaDevices.getUserMedia", "getUserMedia()")}} bietet jetzt standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereo-Sound liefert; die Unterstützung, um speziell Mono-Eingaben anzufordern, wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf Desktop; Mobile Firefox unterstützt derzeit keine Stereo-Audioeingabequellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, -einschränkungen und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; zuvor waren sie mit `moz`-Präfix versehen ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Einschränkungssatz aufgerufen wurde, gab es fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCInboundRTPStreamStats`-Wörterbuchsfeld, das früher `mozRtt` genannt wurde, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Double-Precision-Gleitkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Timestamps im RTCP-Rezeptionsbericht schätzt, gemessen in Sekunden (gemäß dem im {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _diese Eigenschaft bald_ zu einem anderen Wörterbuch (`RTCRemoteInboundRTPStreamStats`) wechselt ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Wörterbuch enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern niedrigstufige Informationen, die verwendet werden können, um festzustellen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Wörterbuch enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames angibt, die erfolgreich für den Stream codiert wurden; mit dieser Information können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Einstellung](https://bugzil.la/1265755#c36), um die Hardware-Videokodierung zu aktivieren, um die Leistung von Videotelefonaten zu verbessern und die Akkulaufzeit zu verlängern. Sie soll standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert werden ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox ermöglicht derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexte, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an {{domxref("Navigator.requestMediaKeySystemAccess()")}} übergeben wird, was die Spezifikation jedoch vorschreibt. Ab Firefox 55 wird ein Warnhinweis in der Web-Konsole angezeigt, wenn eine Audio- oder Videokonfiguration ohne Angabe unterstützter Codecs spezifiziert wird. Bald wird das Nicht-Beachten einer gültigen Konfiguration für eines oder beide Audio und Video eine Ausnahme auslösen [Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}-Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von Mixed Content ist jetzt auf localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde wieder deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "click-to-activate" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Benutzer von Nightly und 50% der Beta-Benutzer wirksam. Für die Freigabe-Version von Firefox 55 ist geplant, dies 2 Wochen nach der Veröffentlichung für 5% der Benutzer zu aktivieren, 4 Wochen nach der Veröffentlichung für 25% der Benutzer und 6 Wochen nach der Veröffentlichung für 100% der Benutzer ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr aus einer URL-Schein außer `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox auf Linux kann jetzt im Headless-Modus mit dem Flag `-headless` ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das Attribut [`scoped`](/de/docs/Web/HTML/Element/style#scoped) des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Einstellung (`layout.css.scoped-style.enabled`) versteckt, da keine anderen Browser es unterstützen.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Keine anderen modernen Browser unterstützen es, und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Der proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem Browser außer Firefox unterstützt und sie wurde nie vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu sein.
- Die proprietäre Firefox OS Device Storage API wurde von der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht-standardisierten {{domxref("Window.find()")}}-Methode (mit dem ein "Suchen"-Dialog im Browser geöffnet werden konnte) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe {{domxref("HTMLFormElement")}}) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht-standardisierten, Mozilla-spezifischen, WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Wörterbuch entfernt und werden von {{domxref("RTCPeerConnection.createOffer()")}} nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus {{domxref("HTMLMediaElement")}} und {{domxref("AudioContext")}} entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent`- und `SVGZoomEvents`-Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, ebenso wie das `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Entwickler von Add-ons und Mozilla

### WebExtensions

- [Die Command-Eigenschaft von contextMenus.create() ermöglicht es Ihnen, Browser-Aktions-Popups, Seitenaktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Der chrome_settings_overrides-Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style-Eigenschaft ermöglicht Ihnen eine browserähnliche Gestaltung für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
