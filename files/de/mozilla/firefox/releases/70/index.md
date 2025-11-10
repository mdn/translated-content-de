---
title: Firefox 70 Versionshinweise für Entwickler
short-title: Firefox 70
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen werden. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Haltepunkte für [DOM-Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Node oder seine Attribute geändert werden oder wenn ein Node aus dem DOM entfernt wird ([Firefox Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite an, wenn er pausiert ist, mit grundlegenden Schritttasten, die es Ihnen ermöglichen, Schritte auszuführen und die Ausführung fortzusetzen ([Firefox Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt Quellen an, die bereits von der Engine verworfen wurden (normalerweise Skripte, die einmal während des Seitenladens ausgeführt werden), sodass Sie ordnungsgemäß Haltepunkte setzen können, um zu debuggen, wann sie das nächste Mal ausgeführt werden ([Firefox Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scopes Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, indem zusätzliche Umgebungen, die bisher oberhalb der obersten Funktion angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), zusammengeführt wurden ([Firefox Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält jetzt die derzeit ausgewählten und ausgeklappten Variablen im [Scopes Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html), während Sie durch den Code schreiten ([Firefox Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt jetzt das Überprüfen von Async-Funktionen korrekt, was das Debugging von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox Bug 1570178](https://bugzil.la/1570178)).
- Beim Debugging in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem man einen Haltepunkt darauf setzt und die Haltepunkte auf "Nie hier pausieren" umschaltet ([Firefox Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` vom Extension Storage-Element unter dem Speicher-Tab inspizieren ([Firefox Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Icon wird neben inaktiven CSS-Eigenschaften in der [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie hover können, um Informationen darüber zu erhalten, warum es inaktiv ist ([Firefox Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) für Vordergrundfarben jetzt an, ob sein Kontrast mit der Hintergrundfarbe die Kriterien für Barrierefreiheit erfüllt ([Firefox Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü "Überprüfen auf Probleme" des [Zugänglichkeitsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt Checks zur Tastaturzugänglichkeit ([Firefox Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann jetzt sicher generierte Passwörter dem Benutzer in den folgenden Situationen vorschlagen:
  - Ein {{HTMLelement("input")}}-Element hat den `autocomplete="new-password"` Attributwert.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passwort-Eingabeelement, auch wenn es nicht für neue Passwörter gedacht ist.

### CSS

- Opazitätswerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt Prozentwerte sein ([Firefox Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Spurengrößenwerte ([Firefox Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox Bug 1573631](https://bugzil.la/1573631)):
  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unter- und Überstriche jetzt standardmäßig dort unterbrochen werden, wo sie sonst über ein {{Glossary("glyph", "Glyph")}} verlaufen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert nun zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp repräsentieren ([Firefox Bug 1038294](https://bugzil.la/1038294), [WebKit Bug 1105868](https://bugzil.la/1105868) und [WebKit Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert nun den neuen Schlüsselwortwert `xxx-large`. ([Firefox Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse passt aus logischen und Leistungsgründen nicht mehr auf {{htmlelement("link")}}-Elemente ([Firefox Bug 1572246](https://bugzil.la/1572246); siehe [Ship Intent: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für mehr Begründung).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt zur Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets einschließt, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert. ([Firefox Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-wertige \<position> (ausgenommen Hintergrund) eingestellt ([Firefox Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die die Level 3-Spezifikation mit CSS 2.1 in Einklang bringt ([Firefox Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Cut-, Copy- und Paste-Ereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut bei {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox Bug 1573438](https://bugzil.la/1573438)).
- Nicht-null unitless Längenwerte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden ebenfalls nicht mehr unterstützt.

### JavaScript

- [Nummerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Auch {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} akzeptieren jetzt {{jsxref("BigInt")}} Werte ([Firefox Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null bei [BigInt-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt niemals erlaubt, wodurch `08n` und `09n` ungültig werden, ähnlich zu dem bestehenden Fehler bei der Verwendung von alten Oktalzahlen wie `07n`. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein oder groß) für Oktal-`BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel „nu“ wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um benachrichtigt zu werden, dass die Navigation abgeschlossen ist ([Firefox Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Workern hinzugefügt ([Firefox Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear)`, `Document.captureEvents` und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox Bug 1558570](https://bugzil.la/1558570), [Firefox Bug 1558571](https://bugzil.la/1558571)).
- Die Genehmigung von [Benachrichtigungen](/de/docs/Web/API/Notifications_API) kann innerhalb eines Cross-Origin-{{htmlelement("iframe")}} nicht mehr angefordert werden ([Firefox Bug 1560741](https://bugzil.la/1560741)).

#### Media, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die erforderlich sind, um den neuen "Perfekte Verhandlung"-Mechanismus zu implementieren; der Rest wird in zukünftigen Firefox-Updates erfolgen ([Firefox Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "Perfekte Verhandlung"-Update ([Firefox Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web Audio API-Features wurden implementiert/aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox Bug 1350973](https://bugzil.la/1350973)).
  - Der [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)-Konstruktor wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrixobjekt als Parameter anstelle von mehreren Parametern akzeptiert, die die einzelnen Komponenten der Matrix repräsentieren ([Firefox Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Referrer-Policy für Tracking-Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn der [erweiterte Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) eingeschaltet ist ([Firefox Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referer das definierte Limit überschreitet, wird nur der Ursprungsanteil gesendet ([Firefox Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt nach dem Ursprung des obersten Dokuments partitioniert ([Firefox Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}} `allow-from uri`-Anweisung wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Anweisung ([Firefox Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um Fission-kompatibel zu sein. Das bedeutet, dass Inhalte von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy)-IFrames jetzt in einem Screenshot der Seite enthalten sind. Oder beim Verwenden aus dem Chrome-Kontext, dass der Inhalt des aktiven Tabs jetzt innerhalb des Browserfensters sichtbar ist ([Firefox Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr für Hervorhebungen ([Firefox Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf Arten, die Web-exponiert sind ([Firefox Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der dazu führt, dass die Methode die Liste der Seiten zurückgibt, die erscheinen, wenn der Benutzer einen neuen Tab öffnet ([Firefox Bug 1568617](https://bugzil.la/1568617)).
- Die gültigen Werte der Sub-Eigenschaft `webRTCIPHandlingPolicy` der `privacy.network`-Eigenschaft wurden geändert (im [Firefox Bug 1452713](https://bugzil.la/1452713)), um dem Verhalten in Chrome wie folgt zu entsprechen:
  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird ein Proxy immer verwendet, wenn einer konfiguriert ist, aber ansonsten ist eine nicht-proxied Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat den Effekt, dass nur ICE-Negotiation über TURN on TCP mit einem Proxy erlaubt ist; keine anderen Verbindungen sind erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften, die Aliase für Themen-Tasten, die in chromium-basierte Browsern verwendet werden, bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themen sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:
  - `accentcolor`, Themen sollten jetzt `frame` verwenden.
  - `textcolor`, Themen sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)
