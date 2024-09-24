---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen werden. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger-Aktualisierungen

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Haltepunkte für [DOM-Mutation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen. Dadurch wird die Ausführung angehalten, wenn ein Knoten oder dessen Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox Bug 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt ein Overlay auf der Seite an, wenn er pausiert, mit grundlegenden Schritt-Schaltflächen, die es Ihnen ermöglichen, zu schrittweise zu navigieren und fortzufahren ([Firefox Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt nun Quellen an, die bereits vom Motor verworfen wurden (normalerweise Skripte, die einmal während des Seitenladens ausgeführt werden), so dass Sie Haltepunkte korrekt setzen können, um zu debuggen, wenn sie das nächste Mal ausgeführt werden ([Firefox Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht, indem zusätzliche Scopes, die zuvor über der Top-Level-Funktion angezeigt wurden, zusammengeführt wurden (z.B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden) ([Firefox Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält nun die aktuell ausgewählten und erweiterten Variablen im [Scope-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) beim Durchlaufen bei ([Firefox Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger verarbeitet das Durchlaufen von async-Funktionen jetzt korrekt, was das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem ein Haltepunkt darauf gesetzt wird und die Haltepunkte auf "Hier nie anhalten" umgeschaltet werden ([Firefox Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` über das Element "Erweiterungsspeicher" unter dem Speicher-Tab inspizieren ([Firefox Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Aktualisierungen

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiten-Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, über das Sie Informationen erhalten können, warum sie inaktiv sind ([Firefox Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) informiert der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben jetzt, ob deren Kontrast zum Hintergrundfarbton den barrierefreien Konformitätskriterien entspricht ([Firefox Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü [Fehler prüfen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) des [Barrierefreiheitsinspectors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält nun auch Tastaturbarrierefreiheitsüberprüfungen ([Firefox Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann dem Benutzer jetzt sicher generierte Passwörter vorschlagen in den folgenden Situationen:

  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem Passwort-Eingabeelement, auch wenn es nicht für neue Passwörter vorgesehen ist.

### CSS

- Opazitätswerte wie bei {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}} können jetzt Prozentsätze sein ([Firefox Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere track-size-Werte ([Firefox Bug 1339672](https://bugzil.la/1339672)).
- Eine Reihe von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox Bug 1573631](https://bugzil.la/1573631)):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass Unter- und Überstriche jetzt standardmäßig unterbrochen werden, wo sie sonst über ein {{Glossary("glyph")}} verlaufen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox Bug 1038294](https://bugzil.la/1038294), [Webkit Bug 1105868](https://bugzil.la/1105868) und [Webkit Bug 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox Bug 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse stimmt aus logischen und Leistungsgründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox Bug 1572246](https://bugzil.la/1572246); siehe [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Gründe).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt für die Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox Bug 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets umfasst, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox Bug 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Wir haben die Unterstützung für 3-wertige \<position> (mit Ausnahme von Hintergrund) eingestellt([Firefox Bug 1559276](https://bugzil.la/1559276)).
- Der `none`-Wert ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die den Level-3-Spezifikationen entspricht und der CSS 2.1 [Firefox Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfügevorgänge werden jetzt an SVG-Grafikelemente gesendet ([Firefox Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete `mode`-Attribut für {{MathMLElement("math")}}-Elemente wurde entfernt ([Firefox Bug 1573438](https://bugzil.la/1573438)).
- Nicht null-Einheitslose Längenwerte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Auch {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} akzeptieren jetzt {{jsxref("BigInt")}}-Werte ([Firefox Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt niemals zulässig, wodurch `08n` und `09n` ungültig sind, ähnlich dem bestehenden Fehler bei der Verwendung von Legacy-Oktalzahlen wie `07n`. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (klein- oder groß geschrieben) für Oktal-`BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}-Konstruktor unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt nun auch `numberingSystem` zurück ([Firefox Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden {{domxref("History.back","back()")}}, {{domxref("History.forward","forward()")}}, und {{domxref("History.go","go()")}} sind jetzt asynchron. Fügen Sie einen Listener für das {{domxref("Window/popstate_event", "popstate")}}-Ereignis hinzu, um eine Benachrichtigung zu erhalten, dass die Navigation abgeschlossen ist ([Firefox Bug 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für {{DOMxRef("DOMMatrix")}}, {{DOMxRef("DOMPoint")}}, usw. in Webworkern hinzugefügt ([Firefox Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von {{domxref("HTMLDocument")}} zu {{domxref("Document")}} verschoben, einschließlich {{domxref("Document.all")}}, {{domxref("Document.clear")}}, {{domxref("Document.captureEvents")}}, und {{domxref("Document.clearEvents")}} ([Firefox Bug 1558570](https://bugzil.la/1558570), [Firefox Bug 1558571](https://bugzil.la/1558571)).
- [Notification](/de/docs/Web/API/Notifications_API)-Berechtigung kann nicht mehr von innerhalb eines Cross-Origin-{{htmlelement("iframe")}} angefordert werden ([Firefox Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode {{domxref("RTCPeerConnection.restartIce()")}} wurde hinzugefügt. Dies ist eine der vier Änderungen, die erforderlich sind, um den neuen "perfect negotiation"-Mechanismus zu implementieren; der Rest wird in zukünftigen Firefox-Updates folgen ([Firefox Bug 1551316](https://bugzil.la/1551316)).
- Die Methode {{domxref("RTCPeerConnection.setRemoteDescription()")}} kann jetzt ohne Parameter aufgerufen werden. Dies ist eine weitere "perfect negotiation"-Aktualisierung ([Firefox Bug 1568292](https://bugzil.la/1568292)).
- {{domxref("MediaTrackSupportedConstraints.groupId")}} wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft {{domxref("MediaTrackConstraints.groupId")}} jetzt unterstützt wird ([Firefox Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web-Audio-API-Funktionen wurden implementiert/aktualisiert:

  - {{domxref("AudioContext.getOutputTimestamp()")}} implementiert ([Firefox Bug 1324545](https://bugzil.la/1324545)).
  - {{domxref("AudioContext.baseLatency")}} und {{domxref("AudioContext.outputLatency")}} implementiert ([Firefox Bug 1324552](https://bugzil.la/1324552)).
  - {{domxref("MediaElementAudioSourceNode.mediaElement")}} und {{domxref("MediaStreamAudioSourceNode.mediaStream")}} implementiert ([Firefox Bug 1350973](https://bugzil.la/1350973)).
  - Der {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}}-Konstruktor wirft jetzt Fehler, wenn versucht wird, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt {{domxref("CanvasRenderingContext2D.getTransform()")}}, und die neuere Variante von {{domxref("CanvasRenderingContext2D.setTransform()")}}, die ein Matrixobjekt als Parameter annimmt, anstatt mehrere Parameter, die die einzelnen Komponenten der Matrix darstellen ([Firefox Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die Standard-Referrer-Richtlinie für Tracking-Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn [Enhanced Tracking Protection](/de/docs/Web/Privacy/Firefox_tracking_protection) eingeschaltet ist ([Firefox Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein zu langer Referrer das definierte Limit überschreitet, wird nur der Ursprungsanteil gesendet ([Firefox Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching) wird jetzt nach dem Ursprung des übergeordneten Dokuments partitioniert ([Firefox Bug 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die {{HTTPHeader("X-Frame-Options")}} `allow-from uri`-Direktive wurde entfernt. Verwenden Sie stattdessen den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive ([Firefox Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um Fission-kompatibel zu sein. Das bedeutet, dass Inhalte aus [cross-origin](/de/docs/Web/Security/Same-origin_policy) iframes jetzt in einem Seiten-Screenshot enthalten sind. Oder wenn er vom Chrom-Scope aus benutzt wird, dass der Inhalt des aktiven Tabs jetzt im Browserfenster sichtbar ist ([Firefox Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen mehr, die zum Hervorheben verwendet wurden ([Firefox Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf eine Weise, die im Web sichtbar ist ([Firefox Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get)-Methode hinzugefügt, der die Methode veranlasst, die Liste der Seiten zurückzugeben, die beim Öffnen eines neuen Tabs angezeigt werden ([Firefox Bug 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte der Untereigenschaft `WebRTCIPHandlingPolicy` der [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network)-Eigenschaft wurden angepasst (in [Firefox Bug 1452713](https://bugzil.la/1452713)), um dem Verhalten zu entsprechen, das in Chrome gesehen wird, wie folgt:

  - `disable_non_proxied_udp` verhinderte zuvor die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, ansonsten ist jedoch eine nicht-proxygebundene Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat zur Folge, dass ICE-Negotiation nur über TURN auf TCP mit einem Proxy zulässig ist; keine anderen Verbindungen sind erlaubt.

### Manifeständerungen

#### Entfernungen

Die folgenden [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften, die Aliase für Themaschlüssel bereitstellten, die in chrombasierten Browsern verwendet werden, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themas sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:

  - `accentcolor`, Themas sollten jetzt `frame` verwenden.
  - `textcolor`, Themas sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
