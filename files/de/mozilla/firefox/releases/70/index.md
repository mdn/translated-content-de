---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen werden. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Aktualisierungen

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder dessen Attribute geändert werden oder wenn ein Knoten vom DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite, wenn diese pausiert ist, mit grundlegenden Steuerschaltflächen, die Ihnen das Weitergehen und Fortfahren ermöglichen ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt nun Quellen an, die bereits vom Engine verworfen wurden (normalerweise Skripte, die einmal während des Seitenladens ausgeführt werden), sodass Sie richtig Breakpoints setzen können, um zu debuggen, wann sie das nächste Mal ausgeführt werden ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Das Gruppieren im [Bereiche-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, indem zusätzliche Bereiche, die vorher über der obersten Funktionsebene angezeigt wurden (z.B. durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erzeugte Blöcke), konsolidiert wurden ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält nun die aktuell ausgewählten und erweiterten Variablen im [Bereiche-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) beim Weitergehen bei ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt das Überspringen über asynchrone Funktionen nun korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger durch Setzen eines Breakpoints auf sie deaktiviert werden und die Breakpoints können auf "Hier nie anhalten" umgeschaltet werden ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` im Extension Storage-Element unter dem Storage-Tab inspizieren ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Aktualisierungen

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Rules View](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie schweben können, um Informationen zu erhalten, warum es inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- Im [CSS Rules View](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) informiert Sie der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben nun, ob deren Kontrast zur Hintergrundfarbe die Kriterien der Barrierefreiheit erfüllt ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü [Check for issues](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) des [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält nun Prüfungen zur Tastaturzugänglichkeit ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann jetzt dem Benutzer sicher generierte Passwörter in folgenden Situationen vorschlagen:

  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passwort-Eingabeelement, selbst wenn es nicht für neue Passwörter gedacht ist.

### CSS

- Opazitätswerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt prozentual angegeben werden ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Track-Größenwerte ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Anzahl von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unter- und Überstriche jetzt standardmäßig dort unterbrochen werden, wo sie andernfalls ein {{Glossary("glyph", "Glyph")}} überqueren würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [WebKit-Bug 1105868](https://bugzil.la/1105868) und [WebKit-Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse passt aus logischen und Leistungsgründen nicht mehr zu {{htmlelement("link")}}-Elementen ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für mehr Gründe).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt für die Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets einschließt, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert nun `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-wertige \<position> (außer Hintergrund) eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die Level 3 Spec an CSS 2.1 anpasst ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneiden, Kopieren und Einfügen-Ereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut an {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Nicht-null Einheitswerte ohne Längenangabe, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden nun ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Auch {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} akzeptieren jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Entsprechend der neuesten ECMAScript-Spezifikation ist eine führende Null nun für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) nie erlaubt, wodurch `08n` und `09n` ungültig sind, ähnlich wie bei der bestehenden Fehlermeldung bei der Verwendung von alten Oktalzahlen wie `07n`. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein- oder großgeschrieben) für Oktal-BigInt-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den Konstruktor {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um zu erfahren, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint), etc. in Web-Workern hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) nach [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die Erlaubnis für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) kann nicht mehr von innerhalb eines Cross-Origin-{{htmlelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die zur Implementierung des neuen "perfekten Verhandlungsmechanismus" benötigt werden; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "perfektes Verhandlungs"-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web Audio API-Funktionen wurden implementiert/aktualisiert:

  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrixobjekt als Parameter akzeptiert, anstatt mehrerer Parameter, die die einzelnen Komponenten der Matrix darstellen ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Richtlinie für Referrer für Tracking-Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn [Erweiterten Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Anforderungs-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein überlanger Referer das festgelegte Limit überschreitet, wird nur der Ursprungsanteil gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching) ist nun nach dem Ursprung des Top-Level-Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}}-Richtlinie `allow-from uri` wurde entfernt. Verwenden Sie stattdessen die {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Richtlinie ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um [Fission](https://wiki.mozilla.org/Project_Fission) kompatibel zu sein. Das bedeutet, dass jetzt Inhalte von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy) iframes in einem Seiten-Screenshot enthalten sind. Oder wenn er aus dem Chrome-Bereich verwendet wird, dass jetzt der Inhalt des aktiven Tabs im Browserfenster sichtbar ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert nicht mehr eine Liste von DOM-Elementen, die für das Hervorheben genutzt wurde ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr in einer Weise, die im Web sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Der Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) wurde ein neuer Parameter hinzugefügt, der bewirkt, dass die Methode die Liste der Seiten zurückgibt, die erscheinen, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der `webRTCIPHandlingPolicy`-Untereigenschaft der [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network)-Eigenschaft wurden (in [Firefox-Bug 1452713](https://bugzil.la/1452713)) angepasst, um das Verhalten, das in Chrome zu sehen ist, wie folgt zu entsprechen:

  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, aber ansonsten ist eine nicht-proxied Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat zur Folge, dass nur ICE-Verhandlungen über TURN über TCP mit einem Proxy erlaubt sind; andere Verbindungen sind nicht erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel, die Aliase für Themeschlüssel, die in Chromium-basierten Browsern verwendet werden, bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themes sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:

  - `accentcolor`, Themes sollten jetzt `frame` verwenden.
  - `textcolor`, Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks Release-Beitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
