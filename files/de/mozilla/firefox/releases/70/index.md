---
title: Firefox 70 Versionshinweise für Entwickler
short-title: Firefox 70
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) festlegen, sodass die Ausführung pausiert, wenn ein Knoten oder seine Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt eine Überlagerung auf der Seite an, wenn er pausiert ist, mit grundlegenden Schaltflächen zum Durchlaufen und Fortsetzen ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt nun Quellen an, die bereits vom Engine verworfen wurden (normalerweise Skripte, die einmal beim Laden der Seite ausgeführt werden), sodass Sie ordnungsgemäß Breakpoints setzen können, um zu debuggen, wann sie das nächste Mal ausgeführt werden ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, indem zusätzliche Scopes, die zuvor über der obersten Functionsebene angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), zusammengefasst wurden ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält jetzt die aktuell ausgewählten und erweiterten Variablen im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) während des Durchlaufens bei ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger kann nun asynchrone Funktionen korrekt durchlaufen, wodurch das Debugging von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert wird ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem ein Breakpoint darauf gesetzt und der Breakpoint auf "Hier niemals pausieren" umgeschaltet wird ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` aus dem Element Erweiterungsspeicher unter der Registerkarte Speicher untersuchen ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie Informationen darüber erhalten, warum es inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) auf Vordergrundfarben nun an, ob sein Kontrast zur Hintergrundfarbe die Anforderungen an Barrierefreiheit erfüllt ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü "Auf Probleme prüfen" im [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) beinhaltet jetzt Tastaturzugänglichkeitsprüfungen ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann nun sicher generierte Passwörter in folgenden Situationen vorschlagen:
  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passworteingabeelement, selbst wenn es nicht für neue Passwörter vorgesehen ist.

### CSS

- Opacitätswerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt als Prozentsätze angegeben werden ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Werte für die Spurgröße ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):
  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unterstreichungen und Oberstreichungen standardmäßig dort unterbrochen werden, wo sie sonst über ein {{Glossary("glyph", "Glyphe")}} verlaufen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [WebKit-Bug 1105868](https://bugzil.la/1105868) und [WebKit-Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert nun den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse stimmt aus logischen und Leistungsgründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Gründe).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets in {{htmlelement("style")}}-Elementen werden jetzt zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets mit `@import`-Regeln umfasst.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Die Unterstützung für dreifachwertige \<position> (ohne Hintergrund) wurde eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die den Level-3-Spezifikationen mit CSS 2.1 in Einklang bringt ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ereignisse wie Ausschneiden, Kopieren und Einfügen werden jetzt an SVG-Grafikelemente übermittelt ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut von {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Nicht nullwertige Längenwerte ohne Einheit, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Separatoren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Außerdem akzeptieren nun {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt niemals erlaubt, was `08n` und `09n` ungültig macht, ähnlich wie der bestehende Fehler bei der Verwendung von alten Oktalzahlen wie `07n`. Verwenden Sie stets eine führende Null mit dem Buchstaben "o" (klein oder groß) für Oktal-`BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt nun auch `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um benachrichtigt zu werden, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Webworkern hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), `Document.captureEvents` und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die Erlaubnis für [Notification](/de/docs/Web/API/Notifications_API) kann nicht mehr innerhalb eines fremden Ursprungs {{htmlelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine von vier Änderungen, die zur Implementierung des neuen "perfekten Verhandlungs"-Mechanismus erforderlich sind; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "perfektes Verhandlungs"-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web Audio API-Features wurden implementiert/aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) löst jetzt Fehler aus, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrixobjekt als Parameter akzeptiert, anstatt mehrere Parameter, die die einzelnen Komponenten der Matrix repräsentieren ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Referrer-Policy für Drittanbieter-Tracking-Ressourcen ist jetzt `strict-origin-when-cross-origin`, wenn [Erweiterter Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Anforderungsheaders ist jetzt auf 4 KB (4.096 Bytes) beschränkt. Wenn ein zu langer Referer das definierte Limit überschreitet, wird nur der Ursprungsabschnitt gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt nach dem Ursprung des Top-Level-Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}}-Direktive `allow-from uri` wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um [Fission](https://wiki.mozilla.org/Project_Fission) kompatibel zu sein. Das bedeutet, dass Inhalt von [fremden Ursprungs](/de/docs/Web/Security/Defenses/Same-origin_policy)-Iframes jetzt in einem Screenshot der Seite enthalten ist. Oder wenn er im Chrome-Bereich verwendet wird, dass der Inhalt des aktiven Tabs jetzt sichtbar im Browserfenster ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert nicht mehr eine Liste von DOM-Elementen, die zum Hervorheben verwendet werden ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen nicht mehr `window.onunload` auf Arten, die im Web sichtbar sind ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der dazu führt, dass die Methode die Liste der Seiten zurückgibt, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der Untereigenschaft `webRTCIPHandlingPolicy` der Eigenschaft [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) wurden geändert (in [Firefox-Bug 1452713](https://bugzil.la/1452713)), um dem Verhalten in Chrome zu entsprechen, wie folgt:
  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, aber ansonsten ist eine nicht-proxied Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat zur Folge, dass nur ICE-Verhandlungen über TURN auf TCP mit einem Proxy erlaubt sind; andere Verbindungen sind nicht erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel-Eigenschaften, die Aliase für Thema-Schlüssel darstellten, die in Chromium-basierten Browsern verwendet werden, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themen sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:
  - `accentcolor`, Themen sollten jetzt `frame` verwenden.
  - `textcolor`, Themen sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)
