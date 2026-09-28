---
title: Versionshinweise zu Firefox 70 für Entwickler
short-title: Firefox 70
slug: Mozilla/Firefox/Releases/70
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

Dieser Artikel beschreibt die Änderungen in Firefox 70, die für Entwickler relevant sind. Firefox 70 wurde am 22. Oktober 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Aktualisierungen des Debuggers

- Im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) können Sie jetzt Breakpoints für [DOM-Mutationen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) setzen. Die Ausführung wird dadurch angehalten, wenn ein Knoten oder seine Attribute geändert werden oder wenn ein Knoten aus dem DOM entfernt wird ([Firefox-Bug 1576219](https://bugzil.la/1576219)).
- Wenn die Ausführung angehalten ist, zeigt der Debugger jetzt ein Overlay auf der Seite mit grundlegenden Schaltflächen zum schrittweisen Ausführen und Fortsetzen an ([Firefox-Bug 1574646](https://bugzil.la/1574646)).
- Der Debugger zeigt jetzt auch Quellen an, die von der Engine bereits verworfen wurden (üblicherweise Skripte, die beim Laden der Seite einmalig ausgeführt werden). So können Sie Breakpoints setzen, um ihre nächste Ausführung zu untersuchen ([Firefox-Bug 1572280](https://bugzil.la/1572280)).
- Die Gruppierung im [Bereich für Gültigkeitsbereiche](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) des Debuggers wurde vereinfacht. Zusätzliche Gültigkeitsbereiche, die zuvor oberhalb der Funktion auf oberster Ebene angezeigt wurden (z. B. durch [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) oder [`if`/`else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) erzeugte Blöcke), werden nun zusammengefasst ([Firefox-Bug 1448166](https://bugzil.la/1448166)).
- Der Debugger behält beim schrittweisen Ausführen die aktuell ausgewählten und aufgeklappten Variablen im [Bereich für Gültigkeitsbereiche](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) bei ([Firefox-Bug 1405402](https://bugzil.la/1405402)).
- Der Debugger verarbeitet das schrittweise Überspringen asynchroner Funktionen jetzt korrekt, was das Debuggen [asynchroner Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) erleichtert ([Firefox-Bug 1570178](https://bugzil.la/1570178)).
- Beim Debuggen in [Container-Sitzungen](https://support.mozilla.org/en-US/kb/containers) (nützlich zum Testen verschiedener Anmeldungen) werden die Quellen im Debugger jetzt korrekt angezeigt ([Firefox-Bug 1375036](https://bugzil.la/1375036)).
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)-Anweisungen können jetzt im Debugger deaktiviert werden, indem Sie einen Breakpoint darauf setzen und für diesen „Never pause here“ auswählen ([Firefox-Bug 925269](https://bugzil.la/925269)).
- WebExtensions-Entwickler können `browser.storage.local` über den Eintrag „Extension Storage“ im Tab „Storage“ untersuchen ([Firefox-Bug 1585499](https://bugzil.la/1585499)).

#### Weitere Aktualisierungen

- Neben inaktiven CSS-Eigenschaften wird in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) jetzt ein Symbol angezeigt. Wenn Sie den Mauszeiger darüber bewegen, erfahren Sie, warum die Eigenschaft inaktiv ist ([Firefox-Bug 1306054](https://bugzil.la/1306054)).
- In der [CSS-Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) zeigt Ihnen der [Farbwähler](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html) für Vordergrundfarben jetzt an, ob deren Kontrast zur Hintergrundfarbe die Konformitätskriterien für Barrierefreiheit erfüllt ([Firefox-Bug 1478156](https://bugzil.la/1478156)).
- Das Dropdown-Menü [„Check for issues“](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#check-for-accessibility-issues) im [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt auch Prüfungen der Tastaturbedienbarkeit ([Firefox-Bug 1564968](https://bugzil.la/1564968)).

### HTML

- Firefox kann Nutzern jetzt in folgenden Situationen sicher generierte Passwörter vorschlagen:
  - Ein {{HTMLelement("input")}}-Element hat den Attributwert `autocomplete="new-password"`.
  - Ein Nutzer öffnet das Kontextmenü eines beliebigen Passworteingabeelements, auch wenn es nicht für neue Passwörter vorgesehen ist.

### CSS

- Deckkraftwerte, etwa für {{cssxref("opacity")}} oder {{SVGAttr("stop-opacity")}}, können jetzt als Prozentwerte angegeben werden ([Firefox-Bug 1562086](https://bugzil.la/1562086)).
- {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-rows")}} akzeptieren jetzt mehrere Werte für die Größe von Rasterspuren ([Firefox-Bug 1339672](https://bugzil.la/1339672)).
- Mehrere textbezogene CSS-Eigenschaften sind jetzt standardmäßig aktiviert ([Firefox-Bug 1573631](https://bugzil.la/1573631)):
  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. Der Standardwert ist `auto`. Das bedeutet, dass Unter- und Überstreichungen standardmäßig dort unterbrochen werden, wo sie andernfalls eine {{Glossary("glyph", "Glyphe")}} kreuzen würden.

- Die Eigenschaft {{cssxref("display")}} akzeptiert jetzt zwei Schlüsselwortwerte, die den inneren und den äußeren Anzeigetyp festlegen ([Firefox-Bug 1038294](https://bugzil.la/1038294), [WebKit-Bug 1105868](https://bugzil.la/1105868) und [WebKit-Bug 1557825](https://bugzil.la/1557825)).
- Die Eigenschaft {{cssxref("font-size")}} akzeptiert jetzt den neuen Schlüsselwortwert `xxx-large` ([Firefox-Bug 1553545](https://bugzil.la/1553545)).
- Die Pseudoklasse {{cssxref(":visited")}} trifft aus Gründen der Logik und Leistung nicht mehr auf {{htmlelement("link")}}-Elemente zu ([Firefox-Bug 1572246](https://bugzil.la/1572246); weitere Hintergründe finden Sie unter [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) und [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817)).
- Für die Eigenschaft {{cssxref("quotes")}} wird jetzt der Wert `auto` unterstützt ([Firefox-Bug 1421938](https://bugzil.la/1421938)).
- Stylesheets in {{htmlelement("style")}}-Elementen werden jetzt zur Wiederverwendung zwischengespeichert, um die Leistung zu verbessern ([Firefox-Bug 1480146](https://bugzil.la/1480146)). Stylesheets mit `@import`-Regeln sind davon derzeit ausgenommen.
- Der Typ `<ratio>` akzeptiert jetzt `<number>/<number>` oder einen einzelnen Wert vom Typ `<number>` ([Firefox-Bug 1565562](https://bugzil.la/1565562)).

#### Entfernte Funktionen

- Die Unterstützung für \<position> mit drei Werten (außer bei Hintergründen) wurde eingestellt ([Firefox-Bug 1559276](https://bugzil.la/1559276)).
- Der Wert `none` ist in {{cssxref("counter", "counter()")}} / {{cssxref("counters", "counters()")}} jetzt ungültig. Durch diese Änderung stimmt die Spezifikation der Stufe 3 mit CSS 2.1 überein ([Firefox-Bug 1576821](https://bugzil.la/1576821)).

### SVG

- Ausschneiden-, Kopieren- und Einfügen-Ereignisse werden jetzt an SVG-Grafikelemente gesendet ([Firefox-Bug 1569474](https://bugzil.la/1569474)).

### MathML

- Das veraltete Attribut `mode` für {{MathMLElement("math")}}-Elemente wurde entfernt ([Firefox-Bug 1573438](https://bugzil.la/1573438)).
- Von null verschiedene Längenwerte ohne Einheit, beispielsweise `5` für `500%`, werden nicht mehr unterstützt.
- Längenwerte, die mit einem Punkt enden, beispielsweise `2.` oder `34.px`, werden jetzt ebenfalls nicht mehr unterstützt.

### JavaScript

- [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) werden jetzt unterstützt ([Firefox-Bug 1435818](https://bugzil.la/1435818)).
- Die Methode {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} wurde implementiert ([Firefox-Bug 1473229](https://bugzil.la/1473229)).
- Die Methode {{jsxref("BigInt.prototype.toLocaleString()")}} wurde aktualisiert, sodass sie die Parameter `locales` und `options` gemäß der ECMAScript 402 Intl API verarbeitet. Außerdem akzeptieren {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} und {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} jetzt {{jsxref("BigInt")}}-Werte ([Firefox-Bug 1543677](https://bugzil.la/1543677)).
- Gemäß der aktuellen ECMAScript-Spezifikation ist eine führende Null für [BigInt-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal) nicht mehr zulässig. Dadurch sind `08n` und `09n` ebenso ungültig wie bisher schon veraltete Oktalzahlen wie `07n`. Verwenden Sie für oktale `BigInt`-Zahlen nach der führenden Null immer den Buchstaben „o“ (klein- oder großgeschrieben), also beispielsweise `0o755n` statt `0755n`. Siehe [Firefox-Bug 1568619](https://bugzil.la/1568619).
- Der Unicode-Erweiterungsschlüssel „nu“ wird jetzt vom Konstruktor {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} unterstützt. Die Methode {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} gibt jetzt außerdem `numberingSystem` zurück ([Firefox-Bug 1521819](https://bugzil.la/1521819)).

### APIs

#### DOM

- Die Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go) sind jetzt asynchron. Fügen Sie einen Listener für das Ereignis [`popstate`](/de/docs/Web/API/Window/popstate_event) hinzu, um benachrichtigt zu werden, wenn die Navigation abgeschlossen ist ([Firefox-Bug 1563587](https://bugzil.la/1563587)).
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und weitere APIs werden jetzt in Web Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Einige weitere Member wurden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) nach [`Document`](/de/docs/Web/API/Document) verschoben, darunter [`Document.all`](/de/docs/Web/API/Document/all), [`Document.clear`](/de/docs/Web/API/Document/clear), `Document.captureEvents` und [`Document.clear`](/de/docs/Web/API/Document/clear) ([Firefox-Bug 1558570](https://bugzil.la/1558570), [Firefox-Bug 1558571](https://bugzil.la/1558571)).
- Die Berechtigung für [Benachrichtigungen](/de/docs/Web/API/Notifications_API) kann nicht mehr innerhalb eines ursprungsübergreifenden {{htmlelement("iframe")}} angefordert werden ([Firefox-Bug 1560741](https://bugzil.la/1560741)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) wurde hinzugefügt. Dies ist eine von vier Änderungen, die für die Implementierung des neuen Mechanismus „Perfect Negotiation“ erforderlich sind. Die übrigen folgen in künftigen Firefox-Versionen ([Firefox-Bug 1551316](https://bugzil.la/1551316)).
- Die Methode [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) kann jetzt ohne Parameter aufgerufen werden. Dies ist eine weitere Aktualisierung für „Perfect Negotiation“ ([Firefox-Bug 1568292](https://bugzil.la/1568292)).
- [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) wird jetzt unterstützt und gibt `true` zurück, da die Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) jetzt unterstützt wird ([Firefox-Bug 1561254](https://bugzil.la/1561254)).
- Mehrere neue Funktionen der Web Audio API wurden implementiert oder aktualisiert:
  - [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp) wurde implementiert ([Firefox-Bug 1324545](https://bugzil.la/1324545)).
  - [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) und [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) wurden implementiert ([Firefox-Bug 1324552](https://bugzil.la/1324552)).
  - [`MediaElementAudioSourceNode.mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) und [`MediaStreamAudioSourceNode.mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) wurden implementiert ([Firefox-Bug 1350973](https://bugzil.la/1350973)).
  - Der Konstruktor [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode) löst jetzt Fehler aus, wenn Sie `channelCount` oder `channelCountMode` auf ungültige Werte setzen ([Firefox-Bug 1456263](https://bugzil.la/1456263)).

#### Canvas und WebGL

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) wird jetzt unterstützt. Das gilt auch für die neuere Variante von [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform), die statt mehrerer Parameter für die einzelnen Komponenten der Matrix ein Matrixobjekt als Parameter akzeptiert ([Firefox-Bug 928150](https://bugzil.la/928150)).

### HTTP

- Die standardmäßige Referrer-Richtlinie für Tracking-Ressourcen von Drittanbietern ist jetzt `strict-origin-when-cross-origin`, wenn der [verbesserte Schutz vor Aktivitätenverfolgung](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) aktiviert ist ([Firefox-Bug 1569996](https://bugzil.la/1569996)).
- Die Größe des Anfrage-Headers {{httpheader("Referer")}} ist jetzt auf 4 KB (4.096 Byte) begrenzt. Überschreitet ein zu langer Referer diese Grenze, wird nur der Origin-Teil gesendet ([Firefox-Bug 1557346](https://bugzil.la/1557346)).
- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching) wird jetzt nach dem Origin des Dokuments auf oberster Ebene partitioniert ([Firefox-Bug 1536058](https://bugzil.la/1536058)).

#### Entfernte Funktionen

- Die Direktive `allow-from uri` für {{HTTPHeader("X-Frame-Options")}} wurde entfernt. Verwenden Sie stattdessen den Header {{HTTPHeader("Content-Security-Policy")}} mit der Direktive {{CSP("frame-ancestors")}} ([Firefox-Bug 1301529](https://bugzil.la/1301529)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:TakeScreenshot` wurde für die Kompatibilität mit [Fission](https://wiki.mozilla.org/Project_Fission) aktualisiert. Dadurch werden Inhalte aus [ursprungsübergreifenden](/de/docs/Web/Security/Defenses/Same-origin_policy) iframes jetzt in Screenshots einer Seite erfasst. Wird der Befehl im Chrome-Scope verwendet, ist außerdem der Inhalt des aktiven Tabs im Browserfenster sichtbar ([Firefox-Bug 1559592](https://bugzil.la/1559592)).
- `WebDriver:TakeScreenshot` akzeptiert keine Liste von DOM-Elementen zur Hervorhebung mehr ([Firefox-Bug 1575511](https://bugzil.la/1575511)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` setzen `window.onunload` nicht mehr auf eine Weise, die für Webinhalte sichtbar ist ([Firefox-Bug 1568991](https://bugzil.la/1568991)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Der Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) wurde ein neuer Parameter hinzugefügt. Er bewirkt, dass die Methode die Liste der Seiten zurückgibt, die beim Öffnen eines neuen Tabs angezeigt werden ([Firefox-Bug 1568617](https://bugzil.la/1568617)).
- Die zulässigen Werte der Untereigenschaft `webRTCIPHandlingPolicy` von [`privacy.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) wurden angepasst (in [Firefox-Bug 1452713](https://bugzil.la/1452713), um dem Verhalten in Chrome zu entsprechen:
  - `disable_non_proxied_udp` verhinderte bisher die Verwendung von WebRTC, wenn kein Proxy konfiguriert war. Jetzt wird ein konfigurierter Proxy immer verwendet; andernfalls ist eine Verbindung ohne Proxy zulässig.
  - Mit `proxy_only` lässt sich das frühere Verhalten herstellen: Die ICE-Aushandlung ist dann nur über TURN auf TCP unter Verwendung eines Proxys zulässig. Andere Verbindungen sind nicht erlaubt.

### Manifest-Änderungen

#### Entfernte Funktionen

Die folgenden Eigenschaften des [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssels, die Aliase für Theme-Schlüssel in Chromium-basierten Browsern bereitstellten, wurden entfernt:

- Die Eigenschaft `headerURL` unter `images`; Themes sollten jetzt `theme_frame` verwenden.
- Die Eigenschaften unter `colors`:
  - `accentcolor`; Themes sollten jetzt `frame` verwenden.
  - `textcolor`; Themes sollten jetzt `tab_background_text` verwenden.

## Siehe auch

- Veröffentlichungsbeitrag auf Hacks: [Firefox 70 – eine umfangreiche Version für alle](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)
