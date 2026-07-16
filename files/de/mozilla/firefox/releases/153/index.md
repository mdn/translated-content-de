---
title: Firefox 153 Versionshinweise für Entwickler (Beta)
short-title: Firefox 153 (Beta)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 2ae025a4bdf7b7cb901d13f6ebf727d4780e5462
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um zu ermöglichen, dass alle verschachtelten Elemente in den DOM geparst werden, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox Bug 2019977](https://bugzil.la/2019977)).

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- Der {{cssxref("::-webkit-scrollbar")}} Pseudoelement-Selektor wird nun erkannt, sodass die Prüfung `@supports selector(::-webkit-scrollbar)` `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, auch wenn das Styling von Scrollbars über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem Scrollbars von verschachtelten scrollbaren Bereichen übereinander gestapelt werden konnten. Zum Beispiel, wenn eine Scrollleiste auf `display: none` oder `width: 0` gesetzt ist und dadurch einige Inhalte nicht erreichbar sind. ([Firefox Bug 2038877](https://bugzil.la/2038877)).

<!-- #### Removals -->

### JavaScript

- Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dies schließt alle Instanzmethoden auf `Intl.Locale` ein, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox Bug 2037069](https://bugzil.la/2037069)).
- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird unterstützt, um die maximale Anzahl von Stack-Frames, die in einem Fehler-Stack-Trace erfasst werden, festzulegen oder abzurufen.
  Wird der Wert kleiner als der Standardwert gesetzt, kann dies die Leistung verbessern.
  ([Firefox Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als String importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird.
  Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert und der Inhalt als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt.
  Sie ist ähnlich der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, aber anstatt ein Modul zu laden und auszuführen, erzeugt sie ein Objekt, das den Quellcode des Moduls repräsentiert und später ausgeführt werden kann.
  Beachten Sie, dass diese Funktion derzeit noch nicht nützlich für Entwickler ist, da nur die Syntax derzeit unterstützt wird: Die Quellcoderepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox Bug 2043242](https://bugzil.la/2043242)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder einen bestimmten Teil der Datensätze) aus einem Objektstore bzw. Index ab.
  ([Firefox Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies bietet eine bequeme Möglichkeit für Websites, die Anzeige eines {{htmlelement("video")}}-Elementes zwischen einer Seite und einem immer im Vordergrund schwebenden Videofenster zu wechseln, sodass Benutzer das Video weiter ansehen können, während sie mit anderen Sites oder Anwendungen interagieren.
  ([Firefox Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) hat jetzt ein konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) werden.
  Dies folgt der Spezifikationsaktualisierung in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erhält die Zertifikate, die vom entfernten Peer zur Sicherung der DTLS-Kommunikation verwendet werden.
  Diese können für die Authentifizierung eines entfernten Peers auf Anwendungsebene verwendet werden.
  ([Firefox Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren jetzt den `"webrtc"`-Konfigurationstyp.
  Dies ermöglicht es einer Website festzustellen, ob eine bestimmte Audio- oder Videokonfiguration mit WebRTC dekodiert oder enkodiert werden kann und ob dies reibungslos, energieeffizient oder beides ist.
  Die Unterstützung des nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typs, der als Alias für `webrtc` verwendet wurde, wird entfernt.
  ([Firefox Bug 2037610](https://bugzil.la/2037610) und [Firefox Bug 2032075](https://bugzil.la/2032075)).
- Alle verpflichtenden und einige optionale WebRTC "Transport"-Statistiken können jetzt in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) berichtet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion), und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Zusätzlich ist die Eigenschaft `transportId` jetzt verfügbar bei [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox Bug 1225723](https://bugzil.la/1225723) und [Firefox Bug 2019389](https://bugzil.la/2019389)).

<!-- #### Removals -->

### WebAssembly

- Die Integration mit JavaScript-Promises (JS-PI) ist jetzt aktiviert, sodass [WebAssembly](/de/docs/WebAssembly) Module mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs interagieren können. Dies ermöglicht es, dass WebAssembly-Code während des Wartens auf ein JavaScript-Promise ausgesetzt wird und fortgesetzt wird, wenn das Promise erfüllt wird. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox Bug 2044809](https://bugzil.la/2044809)).

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserung der Fenster-Manipulationsbefehle in Marionette und WebDriver BiDi, um einzelne Fenstergeometrieeigenschaften wie x, y, Breite und Höhe unabhängig voneinander anzupassen. ([Firefox Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klick- und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste DOMRect des Elements (z.B. Inline-Elemente, die sich über mehrere Zeilen erstrecken) eine Nullgröße aufwies. ([Firefox Bug 2038932](https://bugzil.la/2038932)).
- Eingeschränkte Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs), wenn im Inhaltskontext gearbeitet wird. ([Firefox Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Der Befehl `emulation.setLocaleOverride` wurde erweitert, um auch eine Spracheinstellungsemulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015655](https://bugzil.la/2015655)).
- Der Befehl `emulation.setTimezoneOverride` wurde erweitert, um auch eine Zeitzoneneinstellungsemulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015657](https://bugzil.la/2015657)).
- Der Befehl `browsingContext.create` wurde aktualisiert, um bei der Erstellung neuer Top-Level-Browsing-Kontexte die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse für die initiale `about:blank` Seite nicht mehr auszulösen und nun das `browsingContext.contextCreated` Ereignis am Ende des Erstellungsprozesses auszulösen. ([Firefox Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch den `script.addPreloadScript` Befehl erstellt wurden, nach mehreren Navigationen möglicherweise nicht mehr funktionierten. ([Firefox Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Der Befehl `Take Element Screenshot` aus WebDriver Classic wurde korrigiert, um Screenshots von Elementen zuzuschneiden, die den Ansichtsbereich überschreiten. ([Firefox Bug 2013176](https://bugzil.la/2013176)).
- Der Befehl `Perform Actions` wurde so korrigiert, dass er ordnungsgemäß auf die interne Aktionsfinalisierung wartet, um mögliche Race-Conditions zu verhindern. ([Firefox Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien von der Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop) und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich bestehender, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Fileschema gewährt hat; zuvor gab Firefox immer `false` zurück. Zusätzlich erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Berechtigung. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte auf Abruf in einen Tab oder Frame zu injizieren. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode das einmalige Injizieren mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domäne (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Erweiterungsinhalts-Skripte können jetzt konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}} Methode, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skript-Injektionszielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox Bug 1891478](https://bugzil.la/1891478))
- Für kontextuelle Identitäten (Containers):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen, ohne diese Werte hartkodieren zu müssen. ([Firefox Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die alten Namen `"turquoise"` und `"toolbar"` werden zur Rückwärtskompatibilität akzeptiert. Um das Hardcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Bug 2044354](https://bugzil.la/2044354))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Unterstützung für JPEG XL-Bilder** (Nightly): `image.jxl.enabled`

  Der auf Rust basierende [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox Bug 2040074](https://bugzil.la/2040074)).

- **Baumzählende CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Ordnungszahl des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend bei `1` und nicht `0`.
  ([Firefox Bug 2042063](https://bugzil.la/2042063)).
