---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM-Mutationen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder dessen Attribute geändert werden oder ein Knoten aus dem DOM entfernt wird ([Firefox Fehler 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite, wenn er pausiert ist, mit grundlegenden Schritt-Tasten, um das Springen und Fortfahren zu ermöglichen ([Firefox Fehler 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt Quellen an, die bereits vom Engine verworfen wurden (normalerweise Skripte, die einmal beim Laden der Seite ausgeführt werden), damit Sie Breakpoints richtig setzen können, um zu debuggen, wenn sie das nächste Mal ausgeführt werden ([Firefox Fehler 1572280](https://bugzil.la/1572280)).
- Die Gruppierung des [Scope-Panels](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, indem zusätzliche Scopes, die zuvor über der obersten Funktion angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), konsolidiert wurden ([Firefox Fehler 1448166](https://bugzil.la/1448166)).
- Der Debugger behält jetzt die aktuell ausgewählten und erweiterten Variablen im [Scope-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) beim Schrittweise-Durchlaufen bei ([Firefox Fehler 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt jetzt das Übergehen von asynchronen Funktionen korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox Fehler 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich für das Testen unterschiedlicher Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox Fehler 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem ein Breakpoint darauf gesetzt und der Breakpoint auf „Hier nie pausieren“ umgeschaltet wird ([Firefox Fehler 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` im Extension Storage-Element unter dem Speichern-Tab einsehen ([Firefox Fehler 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Icon wird neben inaktiven CSS-Eigenschaften in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie schweben können, um Informationen darüber zu erhalten, warum es inaktiv ist ([Firefox Fehler 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt der [Farbauswähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben nun an, ob der Kontrast zur Hintergrundfarbe die Konformitätskriterien für Barrierefreiheit erfüllt ([Firefox Fehler 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü „Auf Probleme prüfen“ des [Barrierefreiheitsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) umfasst jetzt Prüfungen zur Tastaturzugänglichkeit ([Firefox Fehler 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann dem Benutzer jetzt sicher generierte Passwörter vorschlagen in den folgenden Situationen:
  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passwort-Eingabeelement, selbst wenn es nicht für neue Passwörter vorgesehen ist.

### CSS

- Opacity-Werte wie bei {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt Prozentsätze sein ([Firefox Fehler 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Track-Size-Werte ([Firefox Fehler 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox Fehler 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass standardmäßig Unterstreichungen und Überstreichungen jetzt unterbrochen werden, wo sie sonst über ein {{Glossary("glyph", "Glyph")}} kreuzen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp repräsentieren ([Firefox Fehler 1038294](https://bugzil.la/1038294), [WebKit Fehler 1105868](https://bugzil.la/1105868) und [WebKit Fehler 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox Fehler 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse stimmt aus logischen und leistungsbezogenen Gründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox Fehler 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Begründungen).
- Wir unterstützen jetzt einen Wert `auto` für die {{cssxref("quotes")}}-Eigenschaft ([Firefox Fehler 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt zwischengespeichert, um die Leistung zu verbessern ([Firefox Fehler 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets umfasst, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert. ([Firefox Fehler 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-Werte-\<position> (mit Ausnahme des Hintergrundes) eingestellt ([Firefox Fehler 1559276](https://bugzil.la/1559276)).
- Der Wert `none` ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die den Level-3-Spezifikationen mit CSS 2.1 in Einklang bringt ([Firefox Fehler 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfügeereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox Fehler 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut bei {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox Fehler 1573438](https://bugzil.la/1573438)).
- Nicht-nullwertige Einheitswerte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt ebenfalls nicht mehr unterstützt.

### JavaScript

- [Zahlen-Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox Fehler 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox Fehler 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox Fehler 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null bei [BigInt-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt niemals erlaubt, wodurch `08n` und `09n` ungültig sind, ähnlich dem bereits bestehenden Fehler, wenn alte Oktalzahlen wie `07n` verwendet werden. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein oder groß) für oktale `BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox Fehler 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox Fehler 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um Benachrichtigungen darüber zu erhalten, dass die Navigation abgeschlossen ist ([Firefox Fehler 1563587](https://bugzil.la/1563587)).
- Wir haben die Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Arbeitern hinzugefügt ([Firefox Fehler 1420580](https://bugzil.la/1420580)).
- Ein paar weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox Fehler 1558570](https://bugzil.la/1558570), [Firefox Fehler 1558571](https://bugzil.la/1558571)).
- Die [Benachrichtigungsberechtigung](/de/docs/Web/API/Notifications_API) kann nicht länger aus einem {{htmlelement("iframe")}} fremder Herkunft angefordert werden ([Firefox Fehler 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die erforderlich sind, um den neuen "perfect negotiation"-Mechanismus zu implementieren; die übrigen werden in zukünftigen Firefox-Updates kommen ([Firefox Fehler 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres Update für die "perfect negotiation" ([Firefox Fehler 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Eigenschaft jetzt unterstützt wird ([Firefox Fehler 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web Audio API-Features wurden implementiert/aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox Fehler 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox Fehler 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox Fehler 1350973](https://bugzil.la/1350973)).
  - Der [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)-Konstruktor wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox Fehler 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrix-Objekt als Parameter akzeptiert, anstatt mehrerer Parameter, die die einzelnen Komponenten der Matrix repräsentieren ([Firefox Fehler 928150](https://bugzil.la/928150)).

### HTTP

- Die Standardeinstellung der Referrer-Policy für Tracking-Ressourcen von Dritten ist jetzt `strict-origin-when-cross-origin`, wenn der [Erweiterte Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox Fehler 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referer die definierte Grenze überschreitet, wird nur der Ursprungsteil gesendet ([Firefox Fehler 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt für den Ursprung des obersten Dokuments partitioniert ([Firefox Fehler 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}} `allow-from uri`-Direktive wurde entfernt. Verwenden Sie den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive stattdessen ([Firefox Fehler 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der `WebDriver:TakeScreenshot`-Befehl wurde aktualisiert, um [Fission](https://wiki.mozilla.org/Project_Fission)-kompatibel zu sein. Das bedeutet, dass Inhalt von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy)-iframes jetzt in einem Screenshot einer Seite enthalten ist. Oder wenn der Befehl aus dem Chrome-Bereich verwendet wird, dass der aktive Tab-Inhalt jetzt im Browserfenster sichtbar ist ([Firefox Fehler 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr, wie sie zum Hervorheben verwendet wurde ([Firefox Fehler 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf Weisen, die im Web sichtbar sind ([Firefox Fehler 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der bewirkt, dass die Methode die Liste der Seiten zurückgibt, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet ([Firefox Fehler 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der Untereigenschaft `webRTCIPHandlingPolicy` der [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network)-Eigenschaft wurden geändert (in [Firefox Fehler 1452713](https://bugzil.la/1452713)), um dem Verhalten in Chrome zu entsprechen, wie folgt:
  - `disable_non_proxied_udp` verhinderte zuvor die Nutzung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, aber ansonsten ist eine Verbindung ohne Proxy erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat den Effekt, dass nur ICE-Verhandlungen über TURN auf TCP unter Verwendung eines Proxies zugelassen werden; andere Verbindungen sind nicht erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsselinhalts-Eigenschaften, die Aliase für Themes-Schlüssel, die in Chrome-basierten Browsern verwendet wurden, bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themes sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:
  - `accentcolor`, Themes sollten jetzt `frame` verwenden.
  - `textcolor`, Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
