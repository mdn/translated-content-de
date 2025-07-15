---
title: Firefox 70 für Entwickler
short-title: Firefox 70
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die sich auf Entwickler auswirken werden. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger-Updates

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Haltepunkte für [DOM-Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder seine Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite an, wenn er pausiert ist, mit grundlegenden Tasten, um fortzufahren oder zu schrittweise durch den Code zu gehen ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt auch Quellen an, die bereits vom Engine verworfen wurden (normalerweise Skripte, die einmal während des Seitenladens ausgeführt werden), sodass Sie ordnungsgemäß Haltepunkte setzen können, um die nächste Ausführung zu debuggen ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung des [Scope-Panels](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) im Debugger wurde vereinfacht, sodass zusätzliche Scopes, die vorher über der obersten Funktionsstufe angezeigt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden), konsolidiert wurden ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält jetzt die derzeit ausgewählten und erweiterten Variablen im [Scope-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) während des Schrittdurchlaufs bei ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger handhabt jetzt das Schrittdurchlaufen über asynchrone Funktionen korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich für das Testen unterschiedlicher Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können im Debugger jetzt deaktiviert werden, indem ein Haltepunkt darauf gesetzt und der Haltepunkt auf "Hier nie pausieren" umgeschaltet wird ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` im Abschnitt Erweiterungsspeicher unter dem Speichertabellenpunkt inspizieren ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Updates

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie Informationen erhalten können, warum die Eigenschaft inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben jetzt an, ob der Kontrast mit der Hintergrundfarbe den Barrierefreiheitskriterien entspricht ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)-Dropdown „Auf Probleme prüfen” enthält jetzt Überprüfungen der Tastaturzugänglichkeit ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann jetzt dem Benutzer sicher generierte Passwörter vorschlagen in folgenden Situationen:
  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem beliebigen Passwort-Eingabeelement, auch wenn es nicht für neue Passwörter gedacht ist.

### CSS

- Opazitätswerte wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt Prozentsätze sein ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Werte für die Spurengröße ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurden standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):
  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unter- und Überstriche nun standardmäßig unterbrochen werden, wo sie sonst ein {{Glossary("glyph", "Glyph")}} überqueren würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert nun zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp repräsentieren ([Firefox-Bug 1038294](https://bugzil.la/1038294), [WebKit-Bug 1105868](https://bugzil.la/1105868) und [WebKit-Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert nun den neuen Schlüsselwortwert `xxx-large`. ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse stimmt aus logischen und Performance-Gründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox-Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Gründe).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets in {{htmlelement("style")}}-Elementen werden jetzt zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets umfasst, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert. ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-Werte-\<position> (außer Hintergrund) eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der Wert `none` ist jetzt ungültig in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} — eine Änderung, die die Level 3-Spezifikation mit CSS 2.1 in Einklang bringt ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfügeereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut auf {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Nicht-nullwertige unitles Länge Werte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenangaben, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt auch nicht mehr unterstützt.

### JavaScript

- [Numerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}}-Methode wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die {{jsxref("BigInt.prototype.toLocaleString()")}}-Methode wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402-Intl-API zu arbeiten. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt nie erlaubt, was `08n` und `09n` ähnlich den bestehenden Fehlern bei der Verwendung von Legacy-Oktalzahlen wie `07n` ungültig macht. Verwenden Sie immer eine führende Null mit dem Buchstaben „o“ (klein oder groß) für oktopale `BigInt`-Zahlen (d.h. `0o755n` statt `0755n`). Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um eine Benachrichtigung zu erhalten, dass die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- Wir haben die Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Worker hinzugefügt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), `Document.captureEvents` und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die [Benachrichtigung](/de/docs/Web/API/Notifications_API)-Erlaubnis kann nicht mehr innerhalb eines cross-origin {{htmlelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Media, Web Audio, und WebRTC

- Die [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)-Methode wurde hinzugefügt. Dies ist eine der vier Änderungen, die erforderlich sind, um den neuen „perfekten Verhandlungs“-Mechanismus zu implementieren; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)-Methode kann jetzt ohne Parameter aufgerufen werden. Dies ist ein weiteres „perfektes Verhandlungs“-Update ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Eigenschaft jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web-Audio-API-Features wurden implementiert/aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)-Konstruktor wirft jetzt Fehler, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrixobjekt als Parameter anstelle von mehreren Parametern akzeptiert, die die einzelnen Komponenten der Matrix darstellen ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die standardmäßige Referrer-Richtlinie für Drittanbieter-Tracking-Ressourcen ist jetzt `strict-origin-when-cross-origin`, wenn [Verbesserter Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Anforderungs-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referrer die definierte Grenze überschreitet, wird nur der Ursprungsteil gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt pro Ursprung des obersten Dokuments partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}} `allow-from uri`-Direktive wurde entfernt. Verwenden Sie den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive stattdessen ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um [Fission](https://wiki.mozilla.org/Project_Fission)-kompatibel zu sein. Das bedeutet, dass Inhalte von [cross-origin](/de/docs/Web/Security/Same-origin_policy)-Iframes jetzt in einem Screenshot einer Seite enthalten sind. Oder bei der Verwendung aus dem Chrome-Kontext, dass der Inhalt des aktiven Tabs jetzt im Browserfenster sichtbar ist ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr für das Hervorheben ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf eine Weise, die im Web sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der dazu führt, dass die Methode die Liste der Seiten zurückgibt, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die zulässigen Werte der Untereigenschaft `webRTCIPHandlingPolicy` der [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) Eigenschaft wurden angepasst (in [Firefox-Bug 1452713](https://bugzil.la/1452713)), um dem Verhalten zu entsprechen, das in Chrome zu sehen ist, wie folgt:
  - `disable_non_proxied_udp` verhinderte bisher die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, aber andernfalls ist eine nicht-Proxy-Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies führt dazu, dass nur ICE-Verhandlungen über TURN über TCP unter Verwendung eines Proxys erlaubt sind; keine anderen Verbindungen sind erlaubt.

### Manifeständerungen

#### Entfernungen

Die folgenden [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel-Eigenschaften, die Aliase für Theme-Schlüssel in Chromium-basierten Browsern bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themes sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:
  - `accentcolor`, Themes sollten jetzt `frame` verwenden.
  - `textcolor`, Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks Veröffentlichungsbeitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)
