---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM-Mutationen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder seine Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt auf der Seite ein Overlay an, wenn er pausiert, mit grundlegenden Schritttasten, die es Ihnen ermöglichen, Schritte durchzuführen und fortzufahren ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt nun Quellen an, die bereits von der Engine verworfen wurden (meistens Skripte, die einmal während des Seitenladens ausgeführt werden), sodass Sie ordnungsgemäß Breakpoints setzen können, um sie bei der nächsten Ausführung zu debuggen ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scope-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, wobei zusätzliche Scopes, die zuvor oberhalb der obersten Funktion angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), konsolidiert wurden ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält nun die aktuell ausgewählten und erweiterten Variablen im [Scope-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) während der Schrittweise Debugging-Sitzungen bei ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger behandelt das Überspringen von async-Funktionen nun korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger nun korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger durch Setzen eines Breakpoints darauf deaktiviert werden, indem die Breakpoints auf "Hier nie pausieren" umgeschaltet werden ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` unter dem Punkt Erweiterungsspeicher im Speicher-Tab inspizieren ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt. Sie können darüber fahren, um Informationen darüber zu erhalten, warum die Eigenschaft inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) teilt Ihnen der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben nun mit, ob deren Kontrast zu den Hintergrundfarben den Barrierefreiheitskriterien entspricht ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown "Auf Probleme überprüfen" im [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt auch Tastaturzugänglichkeits-Checks ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann nun in folgenden Situationen sicher generierte Passwörter vorschlagen:

  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passworteingabeelement, auch wenn es nicht für neue Passwörter bestimmt ist.

### CSS

- Opazitätswerte, wie sie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} verwendet werden, können jetzt Prozentsätze sein ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} unterstützen jetzt mehrere Track-Size-Werte ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe textbezogener CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unterstreichungen und Überstreichungen nun standardmäßig dort unterbrochen werden, wo sie sonst über ein [Glyph](/de/docs/Glossary/glyph) verlaufen würden.

- Die Eigenschaft {{cssxref("display")}} akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [Webkit-Bug 1105868](https://bugzil.la/1105868) und [Webkit-Bug 1557825](https://bugzil.la/1557825)).
- Die Eigenschaft {{cssxref("font-size")}} akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die Pseudoklasse {{cssxref(":visited")}} stimmt aus logischen und Leistungsgründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Gründe).
- Wir unterstützen jetzt einen `auto`-Wert für die Eigenschaft {{cssxref("quotes")}} ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets in {{htmlelement("style")}}-Elementen werden jetzt zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies aktuell keine Stylesheets beinhaltet, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert nun `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernt

- Wir haben die Unterstützung für 3-wertige \<position> (außer bei Hintergrund) eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der Wert `none` ist jetzt ungültig in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} — eine Änderung, die die Level-3-Spezifikation an CSS 2.1 anpasst ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfügeereignisse werden nun an SVG-Grafikelemente übermittelt ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut an {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Nicht-nullwertige einheitslose Längenwerte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden nun unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Ebenso akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} nun {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null bei [BigInt-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt niemals erlaubt, was `08n` und `09n` ungültig macht, ähnlich wie der bestehende Fehler, wenn Legacy-Oktalzahlen wie `07n` verwendet werden. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein oder groß) für oktale `BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um benachrichtigt zu werden, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Workern hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clearEvents`](/de/docs/Web/API/Document/clearEvents) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Berechtigungen für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) können nicht mehr innerhalb eines Cross-Origin-{{htmlelement("iframe")}}-Rahmens angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine der vier Änderungen, die für die Implementierung des neuen "perfect negotiation"-Mechanismus erforderlich sind; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres "perfect negotiation"-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web Audio API-Funktionen wurden implementiert/aktualisiert:

  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) gibt jetzt Fehler aus, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrixobjekt als Parameter akzeptiert, anstatt mehrere Parameter, die die einzelnen Komponenten der Matrix darstellen ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Referrer-Politik für Ressourcen von Drittanbietern ist nun `strict-origin-when-cross-origin`, wenn [Erweiterter Schutz vor Aktivitätenverfolgung](/de/docs/Web/Privacy/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Anforderungsheaders ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referer die definierte Grenze überschreitet, wird nur der Ursprungsabschnitt gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching) wird jetzt nach dem Ursprung des obersten Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernt

- Die Direktive `allow-from uri` im {{HTTPHeader("X-Frame-Options")}}-Header wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der Direktive {{CSP("frame-ancestors")}} ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der `WebDriver:TakeScreenshot`-Befehl wurde so aktualisiert, dass er Fission-kompatibel ist. Das bedeutet, dass Inhalte von [Cross-Origin](/de/docs/Web/Security/Same-origin_policy)-Iframes nun in einem Screenshot einer Seite enthalten sind. Oder, wenn es vom Chrome-Bereich aus verwendet wird, dass der Inhalt des aktiven Tabs jetzt innerhalb des Browserfensters sichtbar ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr, die zur Hervorhebung verwendet werden ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr in einer Weise, die für das Web sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der die Methode dazu veranlasst, die Liste der Seiten zurückzugeben, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der Untereigenschaft `WebRTCIPHandlingPolicy` der Eigenschaft [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) wurden geändert (im [Firefox-Bug 1452713](https://bugzil.la/1452713)), um das in Chrome beobachtete Verhalten wie folgt anzupassen:

  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird, wenn ein Proxy konfiguriert ist, dieser immer verwendet, andernfalls ist eine nicht-proxyvermittelte Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat den Effekt, dass nur ICE-Aushandlung über TURN auf TCP unter Verwendung eines Proxys erlaubt ist; andere Verbindungen sind nicht erlaubt.

### Manifest-Änderungen

#### Entfernt

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften, die Aliasnamen für Theme-Schlüssel, die in Chromium-basierten Browsern verwendet werden, bereitstellten, wurden entfernt:

- Die `images`-Eigenschaft `headerURL`, Themes sollten jetzt `theme_frame` verwenden.
- Die `colors`-Eigenschaften:

  - `accentcolor`, Themes sollten jetzt `frame` verwenden.
  - `textcolor`, Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Release-Post: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
