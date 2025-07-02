---
title: Firefox 70 für Entwickler
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 70, die Entwickler betreffen. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger-Aktualisierungen

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Haltepunkte für [DOM-Mutationen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen, sodass die Ausführung pausiert, wenn ein Knoten oder seine Attribute geändert werden oder ein Knoten aus dem DOM entfernt wird ([Firefox-Fehler 1576219](https://bugzil.la/1576219)).
- Der Debugger zeigt jetzt eine Überlagerung auf der Seite an, wenn er pausiert ist, mit grundlegenden Schritttasten, die es Ihnen ermöglichen, Schritt und Fortfahren zu wählen ([Firefox-Fehler 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt Quellen an, die bereits von der Engine verworfen wurden (normalerweise Skripte, die einmal während des Seitenladens ausgeführt werden), sodass Sie ordnungsgemäß Haltepunkte setzen können, um zu debuggen, wann sie das nächste Mal ausgeführt werden ([Firefox-Fehler 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im Debugger-[Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) wurde vereinfacht, indem zusätzliche Scopes, die zuvor über der obersten Funktion angezeigt wurden (z. B. Blöcke, die durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erstellt wurden) konsolidiert wurden ([Firefox-Fehler 1448166](https://bugzil.la/1448166)).
- Der Debugger behält die aktuell ausgewählten und erweiterten Variablen im [Scopes-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) während des Schrittdurchlaufs bei ([Firefox-Fehler 1405402](https://bugzil.la/1405402)).
- Der Debugger verarbeitet das Übergehen asynchroner Funktionen jetzt korrekt, wodurch das Debuggen von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert wird ([Firefox-Fehler 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Logins) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox-Fehler 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem ein Haltepunkt darauf gesetzt und der Haltepunkt auf "Hier nie pausieren" geschaltet wird ([Firefox-Fehler 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` über das "Extension Storage"-Element unter dem Tab "Storage" inspizieren ([Firefox-Fehler 1585499](https://bugzil.la/1585499)).

#### Weitere Aktualisierungen

- Ein Symbol wird neben inaktiven CSS-Eigenschaften in der [Rules-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Page Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) angezeigt, das Sie überfahren können, um Informationen darüber zu erhalten, warum es inaktiv ist ([Firefox-Fehler 1306054](https://bugzil.la/1306054)).
- In der [CSS-Rules-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) bei Vordergrundfarben jetzt an, ob der Kontrast mit der Hintergrundfarbe die Barrierefreiheits-Anforderungen erfüllt ([Firefox-Fehler 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü [Check for issues](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) des [Barrierefreiheitsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt Überprüfungen zur Tastaturbarrierefreiheit ([Firefox-Fehler 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann dem Benutzer jetzt sicher generierte Passwörter in den folgenden Situationen vorschlagen:
  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Der Benutzer öffnet das Kontextmenü auf einem Passwort-Eingabefeld, auch wenn es nicht für neue Passwörter gedacht ist.

### CSS

- Opazitätswerte, wie für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}}, können jetzt Prozentsätze sein ([Firefox-Fehler 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Größenwerte für Spuren ([Firefox-Fehler 1339672](https://bugzil.la/1339672)).
- Eine Anzahl von textbezogenen CSS-Eigenschaften wurde standardmäßig aktiviert ([Firefox-Fehler 1573631](https://bugzil.la/1573631)):
  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`, was bedeutet, dass standardmäßig Unterstriche und Überstriche jetzt unterbrochen werden, wo sie sonst über ein {{Glossary("glyph", "Glyph")}} kreuzen würden.

- Die {{cssxref("display")}}-Eigenschaft akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und äußeren Anzeigetyp darstellen ([Firefox-Fehler 1038294](https://bugzil.la/1038294), [WebKit-Fehler 1105868](https://bugzil.la/1105868) und [WebKit-Fehler 1557825](https://bugzil.la/1557825)).
- Die {{cssxref("font-size")}}-Eigenschaft akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Fehler 1553545](https://bugzil.la/1553545)).
- Die {{cssxref(":visited")}}-Pseudoklasse stimmt aus logischen und Leistungsgründen nicht mehr mit {{htmlelement("link")}}-Elementen überein ([Firefox-Fehler 1572246](https://bugzil.la/1572246); siehe auch [Intent to ship: Make `<link>` elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and `<link>`](https://github.com/w3c/csswg-drafts/issues/3817) für weitere Begründungen).
- Wir unterstützen jetzt einen `auto`-Wert für die {{cssxref("quotes")}}-Eigenschaft ([Firefox-Fehler 1421938](https://bugzil.la/1421938)).
- Stylesheets, die in {{htmlelement("style")}}-Elementen enthalten sind, werden jetzt zwischengespeichert, um die Leistung zu verbessern ([Firefox-Fehler 1480146](https://bugzil.la/1480146)). Beachten Sie, dass dies derzeit keine Stylesheets umfasst, die `@import`-Regeln enthalten.
- Der `<ratio>`-Typ akzeptiert jetzt `<number>/<number>` oder eine einzelne `<number>` als Wert ([Firefox-Fehler 1565562](https://bugzil.la/1565562)).

#### Entfernungen

- Die Unterstützung für 3-wertige \<position> (außer Hintergrund) wurde eingestellt ([Firefox-Fehler 1559276](https://bugzil.la/1559276)).
- Der Wert `none` ist jetzt in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} ungültig — eine Änderung, die die Level-3-Spezifikation mit CSS 2.1 in Übereinstimmung bringt ([Firefox-Fehler 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneide-, Kopier- und Einfüge-Ereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox-Fehler 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete Attribut `mode` auf {{MathMLElement("math")}}-Elementen wurde entfernt ([Firefox-Fehler 1573438](https://bugzil.la/1573438)).
- Nicht-nullwertige Einheitenlose Längenwerte, wie `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, wie `2.` oder `34.px`, werden jetzt ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Fehler 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Fehler 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, um mit den Parametern `locales` und `options` gemäß der ECMAScript 402 Intl API zu arbeiten. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Fehler 1543677](https://bugzil.la/1543677)).
- Nach der neuesten ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) jetzt nie erlaubt, was `08n` und `09n` ungültig macht, ähnlich dem bestehenden Fehler bei der Verwendung von Legacy-Oktalzahlen wie `07n`. Verwenden Sie immer eine führende Null mit dem Buchstaben "o" (in Klein- oder Großbuchstaben) für oktale `BigInt`-Zahlen (d.h. `0o755n` anstelle von `0755n`). Siehe [Firefox-Fehler 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel "nu" wird jetzt für den Konstruktor {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} unterstützt und die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt auch `numberingSystem` zurück ([Firefox-Fehler 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener zum [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um eine Benachrichtigung über den Abschluss der Navigation zu erhalten ([Firefox-Fehler 1563587](https://bugzil.la/1563587)).
- Wir haben Unterstützung für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) usw. in Web-Workern hinzugefügt ([Firefox-Fehler 1420580](https://bugzil.la/1420580)).
- Einige weitere Mitglieder wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zu [`Document`](/de/docs/Web/API/Document) verschoben, einschließlich [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), [`Document.captureEvents`](/de/docs/Web/API/Document/captureEvents) und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Fehler 1558570](https://bugzil.la/1558570), [Firefox-Fehler 1558571](https://bugzil.la/1558571)).
- Eine Benachrichtigungsberechtigung kann nicht mehr von einem vergleichsübergreifenden {{htmlelement("iframe")}} angefordert werden ([Firefox-Fehler 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine von vier Änderungen, die erforderlich sind, um den neuen "perfekten Verhandlungs"-Mechanismus zu implementieren; der Rest wird in zukünftigen Firefox-Updates kommen ([Firefox-Fehler 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist eine weitere "perfekte Verhandlungs"-Aktualisierung ([Firefox-Fehler 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Fehler 1561254](https://bugzil.la/1561254)).
- Mehrere neue Web-Audio-API-Funktionen wurden implementiert/aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) implementiert ([Firefox-Fehler 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) implementiert ([Firefox-Fehler 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) implementiert ([Firefox-Fehler 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) gibt jetzt Fehler aus, wenn Sie versuchen, `channelCount` und `channelCountMode` auf ungültige Werte zu setzen ([Firefox-Fehler 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- Wir unterstützen jetzt [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) und die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die ein Matrix-Objekt als Parameter akzeptiert, anstatt mehrere Parameter, die die einzelnen Komponenten der Matrix darstellen ([Firefox-Fehler 928150](https://bugzil.la/928150)).

### HTTP

- Die Standardrichtlinie für Referrer für Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn der [erweiterte Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Fehler 1569996](https://bugzil.la/1569996)).
- Die Größe des {{httpheader("Referer")}}-Request-Headers ist jetzt auf 4 KB (4.096 Bytes) begrenzt. Wenn ein übermäßig langer Referrer das festgelegte Limit überschreitet, wird nur der origin-Teil gesendet ([Firefox-Fehler 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt pro Herkunft des obersten Dokuments partitioniert ([Firefox-Fehler 1536058](https://bugzil.la/1536058)).

#### Entfernungen

- Die Direktive `allow-from uri` des {{HTTPHeader("X-Frame-Options")}}-Headers wurde entfernt. Verwenden Sie den {{HTTPHeader("Content-Security-Policy")}}-Header mit der {{CSP("frame-ancestors")}}-Direktive stattdessen ([Firefox-Fehler 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde aktualisiert, um mit [Fission](https://wiki.mozilla.org/Project_Fission) kompatibel zu sein. Das bedeutet, dass Inhalte von [vergleichsübergreifenden](/de/docs/Web/Security/Same-origin_policy) iframes jetzt in einem Seiten-Screenshot enthalten sind. Oder wenn es aus dem Chrome-Bereich verwendet wird, dass der aktive Tab-Inhalt jetzt im Browserfenster sichtbar ist ([Firefox-Fehler 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert nicht mehr eine Liste von DOM-Elementen, wie sie für Hervorhebungen verwendet wird ([Firefox-Fehler 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr in einer Weise, die im Web sichtbar ist ([Firefox-Fehler 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Ein neuer Parameter wurde zur Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hinzugefügt, der bewirkt, dass die Methode die Liste der Seiten zurückgibt, die angezeigt werden, wenn der Benutzer einen neuen Tab öffnet ([Firefox-Fehler 1568617](https://bugzil.la/1568617)).
- Die erlaubten Werte für die Sub-Eigenschaft `webRTCIPHandlingPolicy` der Eigenschaft [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) wurden angepasst (im [Firefox-Fehler 1452713](https://bugzil.la/1452713)), um dem Verhalten zu entsprechen, das in Chrome zu sehen ist:
  - `disable_non_proxied_udp` verhinderte bisher die Nutzung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird immer ein Proxy verwendet, wenn einer konfiguriert ist, andernfalls ist eine nicht über einen Proxy laufende Verbindung erlaubt.
  - `proxy_only` kann verwendet werden, um das alte Verhalten bereitzustellen; dies hat die Wirkung, dass nur ICE-Verhandlungen über TURN über TCP mit einem Proxy erlaubt sind; keine anderen Verbindungen sind erlaubt.

### Manifest-Änderungen

#### Entfernungen

Die folgenden [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften, die Aliase für Chrom-basierten Browser genutzte Themaschlüssel bereitstellten, wurden entfernt:

- `images`-Eigenschaft `headerURL`, Themen sollten jetzt `theme_frame` verwenden.
- `colors`-Eigenschaften:
  - `accentcolor`, Themen sollten jetzt `frame` verwenden.
  - `textcolor`, Themen sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Ältere Versionen

{{Firefox_for_developers}}
