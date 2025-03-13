---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Haltepunkte für [DOM-Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder dessen Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite an, wenn er pausiert ist, mit grundlegenden Schritt-Schaltflächen, um weiterzuschreiten und fortzufahren ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt nun Quellen an, die bereits vom Motor verworfen wurden (normalerweise Skripte, die einmal beim Laden der Seite ausgeführt werden), sodass Sie korrekt Haltepunkte setzen können, um sie beim nächsten Ausführen zu debuggen ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, wobei zusätzliche Scopes konsolidiert wurden, die zuvor oberhalb der obersten Funktion angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden) ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält nun die aktuell ausgewählten und erweiterten Variablen im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html), während Sie weitergehen ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt das Übergehen von asynchronen Funktionen jetzt korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Logins) werden die Quellen im Debugger nun korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem ein Haltepunkt darauf gesetzt wird und die Haltepunkte auf "Nie hier anhalten" umgeschaltet werden ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` über den Extension Storage-Eintrag unter dem Speicher-Tab inspizieren ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Icon wird neben inaktiven CSS-Eigenschaften in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Page Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, das Sie überfahren können, um Informationen darüber zu erhalten, warum es inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) informiert jetzt der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben darüber, ob deren Kontrast zur Hintergrundfarbe die Anforderungen der Barrierefreiheit erfüllt ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü [Auf Probleme prüfen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) des [Barrierefreiheitsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) umfasst nun auch Tastaturbarrierefreiheitsprüfungen ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann dem Nutzer jetzt sicher generierte Passwörter in den folgenden Situationen vorschlagen:

  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passworteingabefeld, auch wenn es nicht für neue Passwörter vorgesehen ist.

### CSS

- Opazitätswerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können nun in Prozentangaben erfolgen ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren nun mehrere Werte für die Spuren-Größe ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurden standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass standardmäßig Unter- und Überstriche jetzt unterbrochen werden, wo sie sonst über ein {{Glossary("glyph", "Glyph")}} kreuzen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert nun zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [WebKit-Bug 1105868](https://bugzil.la/1105868) und [WebKit-Bug 1557825](https://bugzil.la/1557825)).
- Die Eigenschaft {{cssxref("font-size")}} akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse passt aus logischen und Leistungsgründen nicht mehr zu {{htmlelement("link")}}-Elementen ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Begründungen).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt für die Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets umfasst, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert nun `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben den Support für 3-Wert-\<position> (ausgenommen Hintergrund) entfernt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die die Level-3-Spezifikation an CSS 2.1 anpasst ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfügeereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut auf {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Nicht nullwertige längenlose Werte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt nie erlaubt, wodurch `08n` und `09n` ungültig werden, ähnlich wie der bestehende Fehler beim Verwenden von traditionellen Oktalzahlen wie `07n`. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (Klein- oder Großbuchstabe) für Oktal-`BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird nun für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt ebenfalls `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um Benachrichtigungen zu erhalten, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Workern hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die Berechtigung für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) kann nicht mehr von innerhalb eines Cross-Origin-{{htmlelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die zur Implementierung des neuen "perfect negotiation"-Mechanismus notwendig sind; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "perfect negotiation"-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web-Audio-API-Funktionen wurden implementiert/aktualisiert:

  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrix-Objekt als Parameter akzeptiert, anstatt mehrere Parameter, die die einzelnen Komponenten der Matrix darstellen ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Referrer-Richtlinie für Tracking-Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn der [Erweiterte Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein übermäßig langer Referer das definierte Limit überschreitet, wird nur der Ursprungs-Teil gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) ist jetzt nach dem Ursprung des obersten Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}}-Direktive `allow-from uri` wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der `WebDriver:TakeScreenshot`-Befehl wurde aktualisiert, um [Fission](https://wiki.mozilla.org/Project_Fission)-kompatibel zu sein. Das bedeutet, dass Inhalte aus [Cross-Origin](/de/docs/Web/Security/Same-origin_policy)-Iframes jetzt in einem Screenshot einer Seite enthalten sind. Oder wenn Sie es aus dem Chrome-Kontext verwenden, dass nun der Inhalt des aktiven Tabs im Browserfenster sichtbar ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr, wie sie für die Hervorhebung verwendet wurden ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf eine Art und Weise, die im Web sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der die Methode veranlasst, die Liste der Seiten zurückzugeben, die erscheinen, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die zulässigen Werte der Untereigenschaft `webRTCIPHandlingPolicy` der Eigenschaft [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) wurden geändert (in [Firefox-Bug 1452713](https://bugzil.la/1452713)), um das Verhalten in Chrome wie folgt anzupassen:

  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, aber andernfalls ist eine nicht durch einen Proxy geleitete Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat zur Folge, dass ICE-Verhandlungen nur über TURN über TCP mit einem Proxy zulässig sind; keine anderen Verbindungen sind erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel-Eigenschaften, die Aliase für Schlüsselnamen in Chromium-basierten Browsern bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themen sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:

  - `accentcolor`, Themen sollten jetzt `frame` verwenden.
  - `textcolor`, Themen sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
