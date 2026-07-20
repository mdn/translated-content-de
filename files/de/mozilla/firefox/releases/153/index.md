---
title: Firefox 153 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 153 (Stabil)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: cb5a9829f49b8ef7a28311ca419538194fd6525e
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 153, die Entwickler betreffen. Firefox 153 wurde am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Entwickler-Tools zeigen jetzt die Überschriftsebene für ein Überschriftselement im Zugänglichkeits-Highlighter und im Zugänglichkeitsbaum an (zuvor wurde nur angezeigt, dass es sich um eine Überschrift handelte). Diese Information finden Sie im [Zugänglichkeitsinspektor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html). ([Firefox Bug 1588784](https://bugzil.la/1588784) und [Firefox Bug 2044904](https://bugzil.la/2044904)).

### HTML

- Die HTML-Parsing-Regeln für {{htmlelement("select")}}-Elemente wurden aktualisiert, um alle verschachtelten Elemente in den DOM zu parsen und nicht mehr nur `<option>`, `<optgroup>`, und `<hr>`. Dies ermöglicht eine mögliche zukünftige Unterstützung von [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). ([Firefox Bug 2019977](https://bugzil.la/2019977)).
- Das `muted`-Attribut wurde für die {{htmlelement("audio", "", "#muted")}}- und {{htmlelement("video", "", "#muted")}}-Elemente aktualisiert, um anzuzeigen, wann es zum DOM hinzugefügt oder von diesem entfernt wird. Dieses Attribut entspricht jetzt auch dem Zustand der {{cssxref(":muted")}} CSS-Pseudoklasse. ([Firefox Bug 2037015](https://bugzil.la/2037015)).

### CSS

- Der {{cssxref("::-webkit-scrollbar")}}-Pseudoelement-Selektor wird jetzt erkannt, sodass die `@supports selector(::-webkit-scrollbar)`-Prüfung `true` zurückgibt. Beachten Sie, dass dies den Selektor als unterstützt meldet, obwohl das Scrollbalken-Styling über `::-webkit-scrollbar` nicht wirklich implementiert ist. Dies wurde hinzugefügt, um ein Problem zu beheben, bei dem Scrollbalken von verschachtelten scrollenden Bereichen übereinander gestapelt werden konnten. Zum Beispiel, wenn ein Scrollbalken auf `display: none` oder `width: 0` gesetzt wird, wodurch ein Teil des Inhalts unerreichbar bleibt. ([Firefox Bug 2038877](https://bugzil.la/2038877)).

### JavaScript

- Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}. ([Firefox Bug 2037069](https://bugzil.la/2037069)).
- Die statische Dateneigenschaft {{jsxref("Error.stackTraceLimit")}} wird jetzt unterstützt, um die maximale Anzahl der in einem Fehlerstack-Trace erfassten Stack-Frames festzulegen oder abzurufen. Das Setzen eines kleineren Werts als der Standardwert kann die Leistung verbessern. ([Firefox Bug 2037856](https://bugzil.la/2037856)).
- Textmodule können jetzt als Zeichenfolge importiert werden, indem [`with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) verwendet wird. Im Gegensatz zu JavaScript- oder CSS-Modulen wird der Medientyp der Antwort ignoriert, und der Inhalt wird als Text geparst, auch wenn die Datei Skripte oder anderen ausführbaren Code enthält. ([Firefox Bug 2039881](https://bugzil.la/2039881)).
- Die [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) Syntax (Teil des [TC39 source phase imports](https://github.com/tc39/proposal-source-phase-imports) Vorschlags) wird jetzt unterstützt. Sie ähnelt der normalen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Deklaration, aber anstatt ein Modul zu laden und auszuführen, erzeugt sie ein Objekt, das den Quellcode des Moduls repräsentiert und später bewertet werden kann. Beachten Sie, dass diese Funktion für Entwickler noch nicht nützlich ist, da nur die Syntax derzeit unterstützt wird: Die Quellenrepräsentation von WebAssembly-Modulen wird separat implementiert und ist noch nicht verfügbar. ([Firefox Bug 2043242](https://bugzil.la/2043242)).

### APIs

- Die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) werden jetzt unterstützt. Diese rufen alle Datensätze (oder eine angegebene Teilmenge von Datensätzen) aus einem Objektspeicher bzw. Index ab. ([Firefox Bug 1927945](https://bugzil.la/1927945)).
- Die [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt. Dies bietet eine bequeme Möglichkeit für Websites, die Darstellung eines {{htmlelement("video")}}-Elements zwischen einer Seite und einem schwebenden, immer im Vordergrund befindlichen Videofenster umzuschalten, sodass Benutzer weiterhin zuschauen können, während sie mit anderen Websites oder Anwendungen interagieren. ([Firefox Bug 1463402](https://bugzil.la/1463402)).

#### DOM

- Die [Popover API](/de/docs/Web/API/Popover_API) verhält sich jetzt konsistenter, wenn [`hint` und `auto` Popover geöffnet und geschlossen](/de/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) werden. Dies folgt dem Spezifikationsupdate in [whatwg/html#12345](https://github.com/whatwg/html/pull/12345). ([Firefox Bug 2029974](https://bugzil.la/2029974)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCDtlsTransport.getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates) erfasst die Zertifikate, die der Remote-Peer verwendet, um die DTLS-Kommunikation zu sichern. Diese können für die Authentifizierung auf Anwendungsebene eines Remote-Peers verwendet werden. ([Firefox Bug 1805446](https://bugzil.la/1805446)).
- Die Methoden [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) und [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle akzeptieren nun den `"webrtc"` Konfigurationstyp. Dies ermöglicht es einer Website abzufragen, ob eine bestimmte Audio- oder Videokonfiguration mittels WebRTC dekodiert oder kodiert werden kann und ob dies reibungslos, energieeffizient oder beides sein wird. Die Unterstützung für den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt. ([Firefox Bug 2037610](https://bugzil.la/2037610) und [Firefox Bug 2032075](https://bugzil.la/2032075)).
- Alle obligatorischen und einige optionale WebRTC-"Transport"-Statistiken können nun in einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gemeldet werden. Das zurückgegebene Objekt ist ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) mit den folgenden Eigenschaften: [`dtlsCipher`](/de/docs/Web/API/RTCTransportStats/dtlsCipher), [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole), [`dtlsState`](/de/docs/Web/API/RTCTransportStats/dtlsState), [`iceLocalUsernameFragment`](/de/docs/Web/API/RTCTransportStats/iceLocalUsernameFragment), [`iceRole`](/de/docs/Web/API/RTCTransportStats/iceRole), [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState), [`id`](/de/docs/Web/API/RTCTransportStats/id), [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId), [`srtpCipher`](/de/docs/Web/API/RTCTransportStats/srtpCipher), [`timestamp`](/de/docs/Web/API/RTCTransportStats/timestamp), [`tlsVersion`](/de/docs/Web/API/RTCTransportStats/tlsVersion) und [`type`](/de/docs/Web/API/RTCTransportStats/type). Zusätzlich ist die `transportId`-Eigenschaft nun verfügbar in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats/transportId), [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/transportId), [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) und [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats/transportId). ([Firefox Bug 1225723](https://bugzil.la/1225723) und [Firefox Bug 2019389](https://bugzil.la/2019389)).

### WebAssembly

- Die JavaScript-Promise-Integration (JS-PI) ist jetzt aktiviert, was es [WebAssembly](/de/docs/WebAssembly)-Modulen ermöglicht, mit asynchronen, auf {{jsxref("Promise")}}-basierenden JavaScript-APIs zusammenzuarbeiten. Dies erlaubt es WebAssembly-Code, zu pausieren, während er auf ein JavaScript-Promise wartet, und fortzusetzen, wenn das Promise erfüllt wird. Siehe [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) für eine Erklärung und ein funktionierendes Beispiel. ([Firefox Bug 2044809](https://bugzil.la/2044809)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Fenstersteuerungen in Marionette und WebDriver BiDi, um es zu ermöglichen, die individuellen Fenstereigenschaften, wie x, y, Breite und Höhe, unabhängig voneinander anzupassen. ([Firefox Bug 1941404](https://bugzil.la/1941404)).
- Ein Fehler wurde behoben, bei dem Klick- und Zeigeraktionsbefehle fehlschlagen konnten, wenn das erste `DOMRect` eines Elements (z.B. Inline-Elemente, die sich über mehrere Zeilen erstrecken) eine Nullgröße hatte. ([Firefox Bug 2038932](https://bugzil.la/2038932)).
- Die Navigation auf privilegierte Seiten (bestimmte `about:*` Seiten, `chrome://` und `resource://` URLs) wurde eingeschränkt, wenn im Inhaltsbereich gearbeitet wird. ([Firefox Bug 1579790](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Der `emulation.setLocaleOverride`-Befehl wurde erweitert, um auch eine Locale-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015655](https://bugzil.la/2015655)).
- Der `emulation.setTimezoneOverride`-Befehl wurde erweitert, um auch eine Zeitzonen-Emulation auf dedizierte und geteilte Worker anzuwenden. ([Firefox Bug 2015657](https://bugzil.la/2015657)).
- Der `browsingContext.create`-Befehl wurde aktualisiert, um keine `browsingContext.domContentLoaded` und `browsingContext.load` Events mehr für die anfängliche `about:blank` Seite auszugeben, wenn neue oberste Browsing-Kontexte erstellt werden, und jetzt das `browsingContext.contextCreated` Event am Ende des Erstellungsprozesses auszugeben. ([Firefox Bug 1930594](https://bugzil.la/1930594)).
- Ein Fehler wurde behoben, bei dem Funktionen, die durch den `script.addPreloadScript`-Befehl erstellt wurden, nach mehreren Navigationsvorgängen möglicherweise nicht mehr funktionierten. ([Firefox Bug 2046390](https://bugzil.la/2046390)).

#### Marionette

- Der `Take Element Screenshot`-Befehl aus dem klassischen WebDriver wurde behoben, um Screenshots von Elementen, die über den Ansichtsbereich hinausgehen, zuzuschneiden. ([Firefox Bug 2013176](https://bugzil.la/2013176)).
- Der `Perform Actions`-Befehl wurde behoben, um die interne Aktionsfinalisierung korrekt zu erwarten, wodurch potenzielle Race-Bedingungen verhindert werden. ([Firefox Bug 2031596](https://bugzil.la/2031596)).

## Änderungen für Erweiterungsentwickler

- Erweiterungen erfordern jetzt eine explizite Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Bisher wurde der Zugriff auf lokale Dateien durch die Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen, einschließlich der vorhandenen, deaktiviert. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt jetzt korrekt `true` zurück, wenn der Benutzer dem Zugriff auf das Dateischema zugestimmt hat; zuvor gab Firefox immer `false` zurück. Zudem erfordert der Aufruf von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs nun diese Berechtigung. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, Benutzerskripte bei Bedarf in einen Tab oder Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Einfügung mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und die öffentliche Endung eines Hostnamens mithilfe der im Browser eingebauten [Public Suffix List](https://publicsuffix.org/) zu bestimmen. Die API bietet drei synchrone Methoden: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Erweiterungs-Inhalts-Skripte können jetzt auf erstellte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) zugreifen und diese ändern, ohne `.wrappedJSObject`. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Fügt `documentId` zu einer Reihe von WebExtension-APIs hinzu, einschließlich einer neuen {{WebExtAPIRef("runtime.getDocumentId()")}} Methode, {{WebExtAPIRef("webNavigation")}}-Ereignissen und -Methoden, {{WebExtAPIRef("webRequest")}}-Ereignissen, Skriptinjektionszielen und Messaging-APIs. Siehe [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für die vollständige Liste der unterstützten Ereignisse und Methoden sowie Leitfäden zur Verwendung von `documentId`. ([Firefox Bug 1891478](https://bugzil.la/1891478))
- Für kontextbezogene Identitäten (Container):
  - Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die unterstützten Farben und Symbole abzurufen und so das Hardcodieren dieser Werte zu vermeiden. ([Firefox Bug 2044712](https://bugzil.la/2044712))
  - Aktualisiert die verfügbaren Farben. `"turquoise"` wird in `"cyan"` umbenannt, `"toolbar"` wird in `"gray"` umbenannt, und `"violet"` wird hinzugefügt. Die veralteten Namen `"turquoise"` und `"toolbar"` werden zur Abwärtskompatibilität akzeptiert. Um das Hardcodieren von Farbnamen zu vermeiden, verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}, um die verfügbaren Farben abzurufen. ([Firefox Bug 2044354](https://bugzil.la/2044354))

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 153 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **JPEG XL Bildunterstützung** (Nightly): `image.jxl.enabled`

  Der auf Rust basierende [JPEG XL](https://jpeg.org/jpegxl/)-Bilddecoder ist jetzt standardmäßig in Nightly aktiviert. ([Firefox Bug 2040074](https://bugzil.la/2040074)).

- **Tree counting CSS-Funktionen**: `layout.css.tree-counting-functions.enabled`

  Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend bei `1` und nicht `0`. ([Firefox Bug 2042063](https://bugzil.la/2042063)).

- **Aktualisieren von Attributen externer Ressourcen**: `layout.css.link-parameters.enabled`

  Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Dies ermöglicht es dem Benutzer, Attribute externer Ressourcen, wie z.B. SVGs, die ihre Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt haben, zu aktualisieren. Dies bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden. ([Firefox Bug 2046153](https://bugzil.la/2046153)).

- **CSS-Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter** (Nightly): `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radienwerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben. ([Firefox Bug 2037673](https://bugzil.la/2037673)).
