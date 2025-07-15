---
title: Firefox 45 für Entwickler
short-title: Firefox 45
slug: Mozilla/Firefox/Releases/45
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Um die neuesten Entwickler-Features von Firefox zu testen, installieren Sie Firefox Developer Edition. Firefox 45 wurde am 8. März 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Web-Entwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [Volltextsuche im Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Heap-Schnappschussvergleich im Speicherwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/memory/basic_operations/index.html#comparing-snapshots)
- [DomContentLoaded und Ladeereignisse im Netzwerk-Monitor anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timeline)
- [Verbesserungen des Animationsinspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)

[Alle devtools Bugs, die zwischen Firefox 43 und Firefox 44 behoben wurden.](https://bugzilla.mozilla.org/buglist.cgi?bug_status=RESOLVED&bug_status=VERIFIED&chfield=resolution&chfieldfrom=2015-10-29&chfieldto=2015-12-14&chfieldvalue=FIXED&classification=Client%20Software&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&resolution=FIXED&list_id=12753878)

### HTML

- Die Inhaltsicherheitsrichtlinie kann jetzt direkt auf das {{HTMLElement("meta")}}-Element gesetzt werden ([Firefox Bug 663570](https://bugzil.la/663570)).
- Das Attribut `referrer` wurde in `referrerpolicy` umbenannt auf {{HTMLElement("img")}}, {{HTMLElement("area")}}, {{HTMLElement("a")}} und {{HTMLElement("iframe")}} ([Firefox Bug 1187357](https://bugzil.la/1187357)).
- Änderungen im Viewport oder eine Größenänderung lösen jetzt eine erneute Auswahl von responsiven Bildern für `<img srcset>` aus ([Firefox Bug 1166138](https://bugzil.la/1166138)).

### CSS

- {{cssxref("word-spacing")}} erlaubt jetzt Prozentwerte ([Firefox Bug 1038663](https://bugzil.la/1038663)).
- Unsere Implementierung von CSS-Grids wurde verbessert und wird nicht mehr als experimentell betrachtet; es ist jetzt standardmäßig in der Nightly und Developer Edition aktiviert, aber nicht für Beta und Release ([Firefox Bug 1000592](https://bugzil.la/1000592)):
  - Abstände, das sind die Eigenschaften `grid-column-gap`, `grid-row-gap` und `grid-gap` werden jetzt unterstützt ([Firefox Bug 1176792](https://bugzil.la/1176792)).
  - Die implizierte Mindestgröße von Grid-Elementen, das spezielle {{cssxref("min-width")}} und {{cssxref("min-height")}} `auto` Verhalten, wurde implementiert ([Firefox Bug 1176775](https://bugzil.la/1176775)).
  - {{cssxref("align-self")}} und {{cssxref("justify-self")}} werden jetzt in Grid-Layouts unterstützt ([Firefox Bug 1151213](https://bugzil.la/1151213)).
  - {{cssxref("align-content")}} und {{cssxref("justify-content")}} werden jetzt in Grid-Layouts unterstützt ([Firefox Bug 1151214](https://bugzil.la/1151214)).
  - Aufgelöster Wert von grid-template-columns, grid-template-rows in px-Einheiten ([Firefox Bug 978212](https://bugzil.la/978212)).
  - Die zugehörige Funktion {{cssxref("display")}}: Inhalte wurde seit [Firefox 37](/de/docs/Mozilla/Firefox/Releases/37) unterstützt.

- Vollständige Unterstützung für CSS Box Alignment in CSS Grid implementieren; unterstützen Sie die fehlenden Werte: `start`, `end`, `self-start`, `self-end`, `left`, `right`, `last-baseline`, `space-evenly` ([Firefox Bug 1176782](https://bugzil.la/1176782)). CSS Box Alignment gilt derzeit nur für CSS Flexbox und CSS Grid.
- \[css-grid]\[css-flexbox] Grid/Flex-Layout für `<fieldset>` implementieren ([Firefox Bug 1230207](https://bugzil.la/1230207)).
- Die Werte `inline-start` und `inline-end` wurden zu {{cssxref("float")}} und {{cssxref("clear")}} hinzugefügt ([Firefox Bug 1122918](https://bugzil.la/1122918)). Sie sind standardmäßig in Nightly und Aurora (Dev Edition) sowie auf Firefox OS aktiviert; um es in einer Release- oder Betaversion zu aktivieren, müssen Sie `layout.css.float-logical-values.enabled` auf `true` setzen.
- Die {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, und {{cssxref("text-emphasis-position")}} wurden implementiert; sie sind standardmäßig deaktiviert (setzen Sie `layout.css.text-emphasis.enabled` auf true, um sie zu aktivieren ([Firefox Bug 1040668](https://bugzil.la/1040668))).
- Mehrere `-webkit`-präfixierte Eigenschaften und Werte wurden aus Webkompatibilitätsgründen, hinter der Präferenz `layout.css.prefixes.webkit`, hinzugefügt, die standardmäßig auf `false` gesetzt ist:
  - `-webkit-backface-visibility`, `-webkit-perspective` und `-webkit-perspective-origin` wurden aus Webkompatibilitätsgründen hinzugefügt, hinter der Präferenz `layout.css.prefixes.webkit`, die standardmäßig auf `false` gesetzt ist ([Firefox Bug 1179444](https://bugzil.la/1179444)).

### JavaScript

- ES2015 [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind jetzt standardmäßig aktiviert ([Firefox Bug 1197932](https://bugzil.la/1197932)).
- [Expression Closures](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) sind veraltet und erzeugen jetzt eine Warnung in der Konsole ([Firefox Bug 995610](https://bugzil.la/995610)).
- {{jsxref("String.prototype.replace")}} stellt nach Ausführung des Funktionsparameters nicht mehr {{jsxref("Global_Objects/RegExp/n", "RegExp static properties", "", 1)}} wieder her ([Firefox Bug 1226936](https://bugzil.la/1226936)).
- {{jsxref("Math.random()")}} wurde auf den besseren XorShift128+-Algorithmus aktualisiert ([Firefox Bug 322529](https://bugzil.la/322529)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Zur Kompatibilität wurde die nicht-standardmäßige Eigenschaft [`Node.innerText`](/de/docs/Web/API/HTMLElement/innerText) implementiert ([Firefox Bug 264412](https://bugzil.la/264412)).
- Das [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset) Attribut reagiert jetzt auf Größenänderungen/Viewport-Änderungen ([Firefox Bug 1166138](https://bugzil.la/1166138)).
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames) wurde implementiert ([Firefox Bug 1228634](https://bugzil.la/1228634)).

#### WebGL

Unsere Implementierung von WebGL 2 wurde erweitert:

- Unterstützung von Programmen und Shadern wurde hinzugefügt ([Firefox Bug 1048743](https://bugzil.la/1048743)).
- Unterstützung für Uniforms und Attribute wurde hinzugefügt ([Firefox Bug 1048745](https://bugzil.la/1048745)).
- Framebuffer-Objekte wurden implementiert ([Firefox Bug 1048732](https://bugzil.la/1048732)).
- Renderbuffer-Objekte wurden implementiert ([Firefox Bug 1048733](https://bugzil.la/1048733)).

#### IndexedDB

_Keine Änderung._

#### Service Workers

- [`Clients.get()`](/de/docs/Web/API/Clients/get) und [`FetchEvent.clientId`](/de/docs/Web/API/FetchEvent/clientId) wurden implementiert ([Firefox Bug 1222464](https://bugzil.la/1222464).)
- [`Clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) wurde implementiert ([Firefox Bug 1172870](https://bugzil.la/1172870).)
- Das Optionsobjekt, das beim Aufruf von [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) als Parameter übergeben werden kann, kann jetzt eine `includeUncontrolled`-Eigenschaft enthalten. Dies ist ein boolescher Wert - wenn auf `true` gesetzt, gibt die Übereinstimmungsoperation alle Service-Worker-Clients zurück, die denselben Ursprung wie der aktuelle Service-Worker teilen. Andernfalls gibt es nur die vom aktuellen Service-Worker kontrollierten Service-Worker-Clients zurück. Der Standardwert ist `false`.

#### WebRTC

_Keine Änderung._

#### Neue APIs

_Keine Änderung._

#### Sonstiges

- Die [Web Speech Synthesis API](/de/docs/Web/API/Web_Speech_API) wurde auf Firefox Desktop implementiert ([Firefox Bug 1003439](https://bugzil.la/1003439)).
- Das [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignis wurde hinzugefügt.
- Die Schnittstelle `ComputedTiming` wurde zu unserer experimentellen Implementierung der [Web Animations API](/de/docs/Web/API/Web_Animations_API) hinzugefügt ([Firefox Bug 1108055](https://bugzil.la/1108055)).
- Die [`Document.onselectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignishandlereigenschaft wurde hinzugefügt ([Firefox Bug 1231193](https://bugzil.la/1231193)).
- Nach dem Entfernen einer Videospur aus einem Medienstream durch Aufruf von [`MediaStream.removeTrack()`](/de/docs/Web/API/MediaStream/removeTrack) können Sie jetzt später eine andere Videospur hinzufügen, indem Sie [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack) verwenden, und diese wird abgespielt ([Firefox Bug 1223696](https://bugzil.la/1223696)).

### MathML

_Keine Änderung._

### SVG

- Das SVG-Strich-Hit-Testing ist fehlerhaft, wenn cairo das Moz2D-Backend ist ([Firefox Bug 676001](https://bugzil.la/676001)).
- Es ist nicht möglich, mit Elementen zu interagieren, die große Transformations-/Übersetzungswerte haben ([Firefox Bug 1217012](https://bugzil.la/1217012)).

### Audio/Video

- Behoben: Regression (seit Firefox 41), bei der die Audiowiedergabe aufgrund von Rundungsfehlern bei der Dauerzeit stockte ([Firefox Bug 1222866](https://bugzil.la/1222866).)

## HTTP

- Das `jar:`-Protokoll wurde standardmäßig deaktiviert, wenn auf Webinhalte zugegriffen wird; Sie können dies bei Bedarf aktivieren, indem Sie die Einstellung `network.jar.block-remote-files` auf `false` setzen ([Firefox Bug 1215235](https://bugzil.la/1215235)).

## Sicherheit

- Eine {{HTTPHeader("Content-Security-Policy")}} kann jetzt mit einem {{HTMLElement("meta")}}-Element angegeben werden ([Firefox Bug 663570](https://bugzil.la/663570)).
- Unterstützung der {{CSP("child-src")}} CSP-Richtliniendirektive wurde implementiert ([Firefox Bug 1045891](https://bugzil.la/1045891)).
- EV-Zertifikate mit einer Gültigkeit von mehr als 27 Monaten gelten jetzt als DV-Zertifikate und werden entsprechend behandelt ([Firefox Bug 1222903](https://bugzil.la/1222903)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

_Keine Änderung._

### XUL

- Tab-Gruppen [wurden entfernt](https://support.mozilla.org/en-US/kb/tab-groups-removal).

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Suchplugins

Ab Firefox 45 werden Suchplugins, die sich im Verzeichnis `searchplugins` des Benutzerprofils befinden, nicht mehr automatisch beim Start geladen. Stattdessen wird eine Liste der benutzerinstallierten Plugins verwaltet und nur diese Plugins werden geladen. Im Effekt bedeutet dies, dass die einzigen Möglichkeiten, um neue Suchplugins zu installieren, darin bestehen, dass der Benutzer dies in der Firefox-UX tut (z.B. über die [OpenSearch-Entdeckung](/de/docs/Web/XML/Guides/OpenSearch)) oder dass ein Add-on es installiert. Außerdem wird bei der Installation eines neuen Suchplugins mehr Informationen darüber aufgezeichnet, woher es stammt, zur späteren Verwendung durch Profil-Debugging- und Bereinigungs-Tools.

### Sonstiges

- WebIDL-Konstruktoren konnten im Chrome-Kontext ohne den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator aufgerufen werden. Jetzt wird ein solcher Code, wie im Webinhalt seit Firefox 30, ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) auslösen. Zum Beispiel muss `var req = XMLHttpRequest();` zu `var req = new XMLHttpRequest();` geändert werden.
