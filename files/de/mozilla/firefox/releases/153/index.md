---
title: Firefox 153 Versionshinweise für Entwickler
short-title: Firefox 153
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 wurde am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

## Änderungen für Web-Entwickler

### Entwickler-Tools

- Die Entwickler-Tools zeigen jetzt die Überschriftsebene für ein Überschrifts-Element im Zugänglichkeits-Highlighter und im Zugänglichkeitsbaum an (zuvor wurde nur angezeigt, dass es sich um eine Überschrift handelt).
  Die Informationen finden Sie im [Barrierefreiheits-Inspektor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html).
  ([Firefox-Bug 1588784](https://bugzil.la/1588784) und [Firefox-Bug 2044904](https://bugzil.la/2044904)).

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle geschachtelten Elemente in den DOM zu parsen, anstatt nur `<option>`, `<optgroup>` und `<hr>`.
  Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([Firefox-Bug 2019977](https://bugzil.la/2019977)).
- Das `muted`-Attribut wurde für die {{htmlelement("audio", "", "#muted")}}- und {{htmlelement("video", "", "#muted")}}-Elemente aktualisiert, um widerzuspiegeln, wann es dem DOM hinzugefügt oder daraus entfernt wird. Dieses Attribut entspricht jetzt auch dem Zustand der {{cssxref(":muted")}} CSS-Pseudoklasse.
  ([Firefox-Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der {{cssxref("::-webkit-scrollbar")}} Pseudo-Element-Selektor wird jetzt erkannt, sodass die `@supports selector(::-webkit-scrollbar)`-Überprüfung `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, auch wenn die Scrollleistenformatierung über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem sich Scrollleisten verschachtelter scrollbarer Bereiche überlappen könnten. Zum Beispiel, wenn eine Scrollleiste auf `display: none` oder `width: 0` eingestellt ist, wodurch einige Inhalte unerreichbar bleiben. ([Firefox-Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale Info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
  Dies umfasst alle Instanzmethoden von `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([Firefox-Bug 2037069](https://bugzil.la/2037069)).
- Die {{jsxref("Error.stackTraceLimit")}} statische Dateneigenschaft wird unterstützt, um die maximale Anzahl der in einem Fehler-Stack-Trace erfassten Stack-Frames festzulegen oder abzurufen.
  Das Setzen eines kleineren Wertes als der Standardwert kann die Leistung verbessern.
  ([Firefox-Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als String importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird.
  Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert und der Inhalt wird als Text geparst, selbst wenn die Datei Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)-Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports)-Vorschlags) wird jetzt unterstützt.
  Sie ist der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration ähnlich, lädt und evaluiert jedoch kein Modul, sondern erzeugt ein Objekt, das den Quellcode des Moduls darstellt, das später evaluiert werden kann.
  Beachten Sie, dass dieses Feature für Entwickler noch nicht nützlich ist, da derzeit nur die Syntax unterstützt wird: Die Quellrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar.
  ([Firefox-Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt.
  Diese rufen alle Datensätze (oder eine bestimmte Teilmenge von Datensätzen) aus einem Objektspeicher bzw. einem Index ab.
  ([Firefox-Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Diese bietet eine bequeme Möglichkeit für Websites, ein {{htmlelement("video")}}-Element zwischen einer Seite und einem immer im Vordergrund schwebenden Video-Fenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren.
  ([Firefox-Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) zeigt nun ein konsistenteres Verhalten, wenn [`hint` und `auto` Popovers geöffnet und geschlossen werden](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules).
  Dies folgt dem Spezifikations-Update in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345).
  ([Firefox-Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) ruft die Zertifikate ab, die vom Remote-Peer verwendet werden, um die DTLS-Kommunikation abzusichern.
  Diese können für die Authentifizierung auf Anwendungsebene eines Remote-Peers verwendet werden.
  ([Firefox-Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren jetzt den `"webrtc"` Konfigurationstyp.
  Dies erlaubt es einer Website zu ermitteln, ob eine bestimmte Audio- oder Videokonfiguration unter Verwendung von WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides ist.
  Die Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wurde entfernt.
  ([Firefox-Bug 2037610](https://bugzil.la/2037610) und [Firefox-Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können nun in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden.
  Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion), und [`type`](/de/docs/Web/API/RTCTransportStats/type).
  Darüber hinaus ist die `transportId`-Eigenschaft jetzt verfügbar auf [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId).
  ([Firefox-Bug 1225723](https://bugzil.la/1225723) und [Firefox-Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die Integration von JavaScript-Promises (JS-PI) ist jetzt aktiviert, wodurch [WebAssembly](/de/docs/WebAssembly)-Module mit asynchronen, auf {{jsxref("Promise")}} basierenden JavaScript-APIs zusammenarbeiten können. Dadurch kann WebAssembly-Code ausgesetzt werden, während auf ein JavaScript-Promise gewartet wird, und fortgesetzt werden, wenn das Promise erfüllt ist. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox-Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Fenstermanipulationsbefehle in Marionette und WebDriver BiDi, um die einzelnen Fenstergeometrieeigenschaften wie x, y, Breite und Höhe unabhängig voneinander anzupassen. ([Firefox-Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klick- und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste DOMRect eines Elements (z.B. Inline-Elemente, die über mehrere Zeilen reichen) nullgröße hatte. ([Firefox-Bug 2038932](https://bugzil.la/2038932)).
- Die Navigation zu privilegierten Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs) wurde eingeschränkt, wenn im Content-Bereich operiert wird. ([Firefox-Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Der `emulation.setLocaleOverride` Befehl wurde erweitert, um auch eine Locale-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox-Bug 2015655](https://bugzil.la/2015655)).
- Der `emulation.setTimezoneOverride` Befehl wurde erweitert, um auch eine Zeitzonen-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox-Bug 2015657](https://bugzil.la/2015657)).
- Der `browsingContext.create` Befehl wurde aktualisiert, um keine `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse mehr für die anfängliche `about:blank` Seite auszulösen, wenn neue Top-Level-Browsing-Kontexte erstellt werden, und um jetzt das `browsingContext.contextCreated` Ereignis am Ende des Erstellungsprozesses auszulösen. ([Firefox-Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch den `script.addPreloadScript` Befehl erstellt wurden, möglicherweise nach mehreren Navigationsvorgängen nicht mehr funktionierten. ([Firefox-Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Der Befehl `Take Element Screenshot` aus WebDriver Classic wurde behoben, um Screenshots von Elementen zuzuschneiden, die das Viewport überschreiten. ([Firefox-Bug 2013176](https://bugzil.la/2013176)).
- Der Befehl `Perform Actions` wurde behoben, um intern auf die Finalisierung von Aktionen zu warten und mögliche Rennbedingungen zu verhindern. ([Firefox-Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Add-on-Entwickler

- Erweiterungen erfordern jetzt eine ausdrückliche Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Zuvor war der Zugriff auf lokale Dateien durch die Host-Erlaubnis "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Erlaubniseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen ausgeschaltet, einschließlich bestehender. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer den Dateischemazugriff gewährt hat; zuvor gab Firefox immer `false` zurück. Außerdem erfordert das Aufrufen von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs jetzt diese Erlaubnis. ([Firefox-Bug 2034168](https://bugzil.la/2034168))
- Die Methode {{WebExtAPIRef("userScripts.execute()")}} wird unterstützt, sodass Erweiterungen Benutzerskripte bei Bedarf in einen Tab oder Frame einfügen können. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Einfügung von mehreren Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox-Bug 1930776](https://bugzil.la/1930776))
- Die {{WebExtAPIRef("publicSuffix")}} API wurde hinzugefügt, wodurch Erweiterungen den registrierbaren Domain (eTLD+1) und öffentlichen Suffix eines Hostnamens anhand der im Browser integrierten [Public Suffix List](https://publicsuffix.org/) bestimmen können. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox-Bug 1315558](https://bugzil.la/1315558))
- `documentId` wurde zu einer Reihe von WebExtension-APIs hinzugefügt, einschließlich einer neuen Methode {{WebExtAPIRef("runtime.getDocumentId()")}}, {{WebExtAPIRef("webNavigation")}} Ereignissen und Methoden, {{WebExtAPIRef("webRequest")}} Ereignissen, Skriptinjektionsziel und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Anleitungen zur Verwendung von `documentId`. ([Firefox-Bug 1891478](https://bugzil.la/1891478))
- Erweiterungsinhalte können jetzt konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und ändern, ohne `.wrappedJSObject`. ([Firefox-Bug 1751346](https://bugzil.la/1751346))
- Der [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssel `images.additional_backgrounds` unterstützt jetzt CSS-Verläufe zusätzlich zu Bild-URLs. Eine neue `properties.additional_backgrounds_size` Eigenschaft steuert die Größe jedes zusätzlichen Hintergrundelements. ([Firefox-Bug 2036647](https://bugzil.la/2036647))
- Für kontextuelle Identitäten (Container):
  - Die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} wurden hinzugefügt, um die unterstützten Farben und Symbole abzurufen und zu vermeiden, dass diese Werte fest codiert werden. ([Firefox-Bug 2044712](https://bugzil.la/2044712))
  - Die verfügbaren Farben wurden aktualisiert. `"turquoise"` wurde in `"cyan"` umbenannt, `"toolbar"` wurde in `"gray"` umbenannt und `"violet"` wurde hinzugefügt. Die Legacy-Namen `"turquoise"` und `"toolbar"` werden aus Gründen der Rückwärtskompatibilität akzeptiert. Um die Farben nicht fest zu codieren, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox-Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 153 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der in Rust basierte [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox-Bug 2040074](https://bugzil.la/2040074)).

- **Baumzähler-CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die `sibling-count()`-Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()`-Funktion gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück, beginnend an `1` und nicht `0`.
  ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

- **Aktualisieren von Attributen externer Ressourcen**: `layout.css.link-parameters.enabled`

  Die {{cssxref("link-parameters")}} CSS-Eigenschaft und die {{cssxref("param")}} CSS-Funktion werden jetzt unterstützt. Dies ermöglicht dem Benutzer, Attribute externer Ressourcen zu aktualisieren, wie z.B. SVGs, die ihre Attribute mit der {{cssxref("env")}} CSS-Funktion festgelegt haben. Dies bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

- **CSS-Basische Arten erlauben `farthest-corner` und `closest-corner` Schlüsselwörter** (Nightly): `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt zur Spezifikation der Radii-Werte der [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS-Grundformen verwendet werden.
  ([Firefox-Bug 2037673](https://bugzil.la/2037673)).
