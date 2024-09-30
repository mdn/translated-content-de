---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM-Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder dessen Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt nun eine Überlagerung auf der Seite, wenn er pausiert, mit grundlegenden Schritttasten, damit Sie einzelne Schritte durchführen und die Ausführung fortsetzen können ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt Quellen an, die bereits vom Browser-Engine verworfen wurden (normalerweise Skripte, die einmal während des Seitenladevorgangs ausgeführt werden), sodass Sie ordnungsgemäß Breakpoints setzen können, um zu debuggen, wenn sie das nächste Mal ausgeführt werden ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, sodass zusätzliche Scopes, die zuvor über der obersten Funktionsebene angezeigt wurden (z. B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), konsolidiert wurden ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält nun die aktuell ausgewählten und erweiterten Variablen im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) bei, während Sie Schritte durchführen ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt das Überspringen von `async`-Funktionen jetzt korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debugging in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen unterschiedlicher Logins) werden die Quellen im Debugger nun korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können nun im Debugger deaktiviert werden, indem Sie einen Breakpoint darauf setzen und den Breakpoint auf "Never pause here" umschalten ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` aus dem Punkt "Extension Storage" unter dem Storage-Tab inspizieren ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Im [Rules View](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wird neben inaktiven CSS-Eigenschaften ein Icon angezeigt, das Sie überfahren können, um Informationen darüber zu erhalten, warum es inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- Im [CSS-Eigenschaftsregel-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) informiert Sie der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) für Vordergrundfarben nun darüber, ob sein Kontrast mit der Hintergrundfarbe die Konformitätskriterien für Barrierefreiheit erfüllt ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü im [Barrierefreiheit Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) zur Überprüfung auf Barrierefreiheitsprobleme enthält nun auch Tastaturzugänglichkeitsprüfungen ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann nun sicher generierte Passwörter dem Benutzer in den folgenden Situationen vorschlagen:

  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem Passworteingabeelement, selbst wenn es nicht für neue Passwörter gedacht ist.

### CSS

- Deckkraftwerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können nun Prozentwerte sein ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren nun mehrere Werte für die Spaltengrößen ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften sind jetzt standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unterstreichen und Überstreichen jetzt standardmäßig unterbrochen werden, wo sie sonst über ein [Glyph](/de/docs/Glossary/glyph) laufen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [Webkit-Bug 1105868](https://bugzil.la/1105868) und [Webkit-Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse passt aus logischen und Leistungsgründen nicht mehr zu {{htmlelement("link")}}-Elementen ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Begründungen).
- Wir unterstützen nun einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets in {{htmlelement("style")}}-Elementen werden nun zur Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets einschließt, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert nun `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-wertige \<position> (außer Hintergrund) eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist nun in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die die Level-3-Spezifikation mit CSS 2.1 in Einklang bringt ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Schneid-, Kopier- und Einfügeereignisse werden jetzt an SVG-Graphikelemente gesendet ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut auf {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Längewerte ohne Einheit ungleich null, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längewerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt auch nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden nun unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Entsprechend der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) nun nie erlaubt, was `08n` und `09n` ungültig macht, ähnlich dem bestehenden Fehler, wenn veraltete oktale Zahlen wie `07n` verwendet werden. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein oder groß) für oktale `BigInt`-Zahlen (z. B. `0o755n` anstelle von `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird nun für den Konstruktor {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt nun ebenfalls `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind nun asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um eine Benachrichtigung zu erhalten, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben die Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Workern hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) auf [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clearEvents`](/de/docs/Web/API/Document/clearEvents) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die Benachrichtigungsberechtigung [Notification](/de/docs/Web/API/Notifications_API) kann nicht mehr innerhalb eines Cross-Origin-{{HTMLelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die nötig sind, um den neuen "Perfect Negotiation"-Mechanismus zu implementieren; die restlichen werden in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "Perfect Negotiation"-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird nun unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nun unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue WebAudio-API-Funktionen wurden implementiert/aktualisiert:

  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrix-Objekt als Parameter akzeptiert, anstatt mehrerer Parameter, die die einzelnen Komponenten der Matrix repräsentieren ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die standardmäßige Referrer-Policy für Drittanbieter-Tracking-Ressourcen ist jetzt `strict-origin-when-cross-origin`, wenn [Enhanced Tracking Protection](/de/docs/Web/Privacy/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referrer das definierte Limit überschreitet, wird nur der Origin-Teil gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching) ist jetzt nach dem Origin des Top-Level-Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}} `allow-from uri`-Direktive wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der `WebDriver:TakeScreenshot`-Befehl wurde aktualisiert, um Fission-kompatibel zu sein. Das bedeutet, dass der Inhalt von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy)-Iframes jetzt in einem Seiten-Screenshot enthalten ist. Oder bei Verwendung aus dem Chrome-Bereich, dass der aktive Tab-Inhalt nun im Browserfenster sichtbar ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr, wie sie zum Markieren verwendet wurden ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr in einer Weise, die im Web sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Der Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) wurde ein neuer Parameter hinzugefügt, der die Methode veranlasst, die Liste der Seiten zurückzugeben, die erscheinen, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der `WebRTCIPHandlingPolicy`-Untereigenschaft der [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network)-Eigenschaft wurden in [Firefox-Bug 1452713](https://bugzil.la/1452713) geändert, um das Verhalten zu berücksichtigen, das in Chrome gesehen wird, wie folgt:

  - `disable_non_proxied_udp` verhinderte ursprünglich die Nutzung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, sofern einer konfiguriert ist, aber ansonsten ist eine nicht proxisierte Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies bewirkt, dass ICE-Verhandlungen nur über TURN über TCP mit einem Proxy erlaubt sind; keine anderen Verbindungen sind erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften, die Aliase für in Chromium-basierte Browser verwendete Theme-Schlüssel bereitstellen, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themes sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:

  - `accentcolor`, Themes sollten jetzt `frame` verwenden.
  - `textcolor`, Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks Release-Post: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
