---
title: Firefox 153 Release Notes für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 43af35616ae2abe1b414bb91caf22e61003f5650
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 153, die Entwickler betreffen. Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### HTML

- Die HTML-Parsingregeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, damit alle verschachtelten Elemente in den DOM geparst werden können, nicht nur `<option>`, `<optgroup>` und `<hr>`. Dies ermöglicht zukünftige Unterstützung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). ([Firefox-Bug 2019977](https://bugzil.la/2019977)).
- Das `muted`-Attribut wurde nun für die {{htmlelement("audio", "", "#muted")}}- und {{htmlelement("video", "", "#muted")}}-Elemente aktualisiert, um widerzuspiegeln, wann es dem DOM hinzugefügt oder davon entfernt wird. Dieses Attribut stimmt nun auch mit dem Status der CSS-Pseudo-Klasse {{cssxref(":muted")}} überein. ([Firefox-Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der {{cssxref("::-webkit-scrollbar")}} Pseudoelement-Selektor wird jetzt erkannt, sodass die `@supports selector(::-webkit-scrollbar)`-Prüfung `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, auch wenn die Scrollbalken-Stilsetzung via `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem sich die Scrollbalken verschachtelter scrollbarer Bereiche überlappen könnten. Zum Beispiel, wenn ein Scrollbalken auf `display: none` oder `width: 0` gesetzt ist, was dazu führen kann, dass einige Inhalte nicht erreichbar sind. ([Firefox-Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird nun unterstützt. Dies umfasst alle Instanzmethoden von `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}. ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl der erfassten Stapelrahmen in einem Fehler-Stack-Trace festzulegen oder abzurufen. Das Setzen des Wertes unter den Standardwert kann die Leistung verbessern. ([Firefox-Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als Zeichenfolge mit [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) importiert werden. Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält. ([Firefox-Bug 2039881](https://bugzil.la/2039881)).
- Der [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)-Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt. Es ist ähnlich der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration, aber anstatt ein Modul zu laden und auszuführen, wird ein Objekt produziert, das den Quellcode des Moduls darstellt, das später ausgewertet werden kann. Beachten Sie, dass diese Funktion für Entwickler noch nicht nützlich ist, da derzeit nur die Syntax unterstützt wird: Die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar. ([Firefox-Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt. Diese rufen alle Datensätze (oder eine angegebene Teilmenge von Datensätzen) aus einem Objekt-Store und einem Index ab. ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt. Dies bietet eine praktische Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem immer im Vordergrund schwebenden Videofenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren. ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover-API](/de/docs/Web/API/Popover_API) zeigt jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules). Dies folgt dem Spezifikationsupdate in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345). ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die vom entfernten Peer verwendeten Zertifikate, um die DTLS-Kommunikation zu sichern. Diese können für die Authentifizierung eines entfernten Peers auf Anwendungsebene verwendet werden. ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle akzeptieren jetzt den `"webrtc"`-Konfigurationstyp. Dadurch kann eine Webseite abfragen, ob eine gegebene Audio- oder Videokonfiguration mit WebRTC dekodiert oder enkodiert werden kann und ob dies reibungslos oder energieeffizient ist oder beides. Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt. ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle verpflichtenden und einige optionale WebRTC-"Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden. Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type). Zusätzlich ist die `transportId`-Eigenschaft jetzt verfügbar auf [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId). ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die JavaScript-Promise-Integration (JS-PI) ist jetzt aktiviert, sodass [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interagieren können. Dies ermöglicht es WebAssembly-Code, zu pausieren, während auf ein JavaScript-Promise gewartet wird, und fortzufahren, wenn das Promise abgeschlossen ist. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Fenster-Manipulationsbefehle in Marionette und WebDriver BiDi wurden verbessert, um individuelle Fenstergeometrie-Eigenschaften wie x, y, Breite und Höhe unabhängig anzupassen. ([Firefox-Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klick- und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste DOMRect des Elements (z. B. Inline-Elemente, die sich über mehrere Zeilen erstrecken) null Größe hatte. ([Firefox-Bug 2038932](https://bugzil.la/2038932)).
- Die Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs) wurde eingeschränkt, wenn im Inhaltsbereich operiert wird. ([Firefox-Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Der Befehl `emulation.setLocaleOverride` wurde erweitert, um auch eine Locale-Emulation auf spezialisierte und gemeinsame Worker anzuwenden. ([Firefox-Bug 2015655](https://bugzil.la/2015655)).
- Der Befehl `emulation.setTimezoneOverride` wurde erweitert, um auch eine Zeitzonensimulation auf spezialisierte und gemeinsame Worker anzuwenden. ([Firefox-Bug 2015657](https://bugzil.la/2015657)).
- Der Befehl `browsingContext.create` wurde aktualisiert, um nicht mehr `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse für die initiale `about:blank` Seite auszulösen, wenn neue Top-Level-Browsing-Kontexte erstellt werden, und jetzt das Ereignis `browsingContext.contextCreated` am Ende des Erstellungsprozesses auszulösen. ([Firefox-Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch den Befehl `script.addPreloadScript` erstellt wurden, nach mehreren Navigationen möglicherweise aufgehört haben zu funktionieren. ([Firefox-Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Der `Take Element Screenshot`-Befehl aus WebDriver Classic wurde behoben, um Screenshots von Elementen zuzuschneiden, die den Ansichtsbereich überschreiten. ([Firefox-Bug 2013176](https://bugzil.la/2013176)).
- Der Befehl `Perform Actions` wurde behoben, um ordnungsgemäß auf die abschließende internen Aktionen zu warten und potenzielle Rennbedingungen zu verhindern. ([Firefox-Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine explizite Benutzerberechtigung, um auf `file://` URLs zuzugreifen. Bisher war der Zugriff auf lokale Dateien durch die Host-Berechtigung "Access your data for all websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur für Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen deaktiviert, einschließlich bestehender. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer Dateischemazugriff gewährt hat; zuvor gab Firefox immer `false` zurück. Darüber hinaus erfordert das Aufrufen von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte bei Bedarf in einen Tab oder Frame zu injizieren. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domäne (eTLD+1) und die öffentliche Endung eines Hostnamens mithilfe der im Browser integrierten [Public Suffix List](https://publicsuffix.org/) zu bestimmen. Die API stellt drei synchrone Methoden bereit: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- Erweiterungsinhaltskripte können jetzt konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}}-Methode, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skriptinjektionszielen und Messaging-APIs. Siehe [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Für kontextbezogene Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen und die Notwendigkeit zu vermeiden, diese Werte fest zu codieren. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Abwärtskompatibilität akzeptiert. Um das Festlegen von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 153 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Unterstützung für JPEG XL-Bilder** (Nightly): `image.jxl.enabled`

  Der auf Rust basierende [JPEG XL](https://jpeg.org/jpegxl/)-Bilddecoder ist nun standardmäßig in Nightly aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Tree counting CSS functions**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück, beginnend mit `1` und nicht `0`. ([Firefox-Bug 2042063](https://bugzil.la/2042063)).
