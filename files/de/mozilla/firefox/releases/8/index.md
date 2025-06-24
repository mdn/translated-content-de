---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Web-Entwickler](#änderungen_für_web-entwickler) als auch für Add-on- und [Mozilla-Projekt-Entwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszuschöpfen.

## Änderungen für Web-Entwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox Fehler 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox Fehler 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Keine Elemente haben diese Schnittstelle seit vor Firefox 4 implementiert.
- Die HTML5-"Kontextmenü"-Funktion (`contextmenu`-Attribut), mit der benutzerdefinierte, elementspezifische Einträge zum nativen Kontextmenü hinzugefügt werden können, wird jetzt unterstützt (die Implementierung ist noch experimentell, es werden Änderungen in der Spezifikation erwartet; siehe [Firefox Fehler 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde für alle Elemente hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}-Elemente unterstützen jetzt das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Den meisten Elementen wird jetzt ein Fokus-Ring gezeichnet, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz von verschachtelten {{ HTMLElement("label") }}-Elementen lösen Klickereignisse nicht mehr mehrere \<label>-Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Fehler 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil der FileAPI) wurde implementiert.
- Die Fehlerbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen führt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste jetzt zum Absatzbearbeitungsmodus (das heißt, Absätze innerhalb von {{ HTMLElement("p") }}-Elementen) anstatt Linien durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Ausrichtung korrekt wirkte, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken der Löschen- oder Rücktaste am Beginn eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs den vorherigen `contenteditable`-Block beeinflusste, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) zurück, anstatt es zu _stringifizieren_.
- Die HTML5-`selectionDirection`-Eigenschaft macht es möglich, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) haben jetzt eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)-Attribut wird jetzt korrekt als _enumerierter Wert_ dargestellt.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) standardmäßig auf "Anonymous" gesetzt, wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt korrekte Informationen zurück, wenn die Standard-Cookie-Einstellungen auf einer pro-Website-Basis überschrieben wurden.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, passen jetzt auf den String "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder mit `undefined` aufgerufen werden, passen jetzt auf den leeren String und passen somit auf jeden String.
- Unterstützung für Watchlists wurde mit den neuen (nicht standardisierten) `watch()`- und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte laut der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen beim Verwenden von {{ cssxref("hyphens") }} hinzugefügt.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation besser zu entsprechen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Dicke der Linie und die Position angepasst, um dem abgeleiteten Text zu entsprechen. Jetzt sind die Darstellungen im Standard- und Quirks-Modus ähnlicher.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen genauer an die Spezifikation angepasst. Dokumentation dafür steht noch aus, aber vorerst siehe [Firefox Fehler 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Codierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feldparser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`send()`](/de/docs/Web/API/WebSocket/send) gibt nicht mehr fälschlicherweise einen Booleschen Wert zurück.
- Die Methode [`WebSocket.close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts entspricht jetzt dem aktuellen Entwurf des Standards, und Schließereignisse verwenden jetzt korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Das Attribut `extensions` des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie einen einzelnen Protokoll-String.
- Gemischte Inhalte sind mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server aus sicheren Inhalten herstellen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Fehler 674890](https://bugzil.la/674890), [Firefox Fehler 674527](https://bugzil.la/674527), und [Firefox Fehler 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und beeinträchtigte die Kompatibilität mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Zulassung zugelassen werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das Attribut `displaystyle` auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklertools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Sehen Sie den [Aktualisierungsleitfaden für Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um die Erstellung von Objekten in spezifischen Bereichen zu erleichtern.

#### Weitere XPCOM-bezogene Änderungen

- Sie können jetzt DOM-`File`-Objekte aus Komponentencode instanziieren, indem Sie `new File` verwenden, anstatt ein `nsIDOMFile` direkt zu instanziieren.
- Der `nsTPtrArray`-Arraytyp wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das jetzt die Methode `SafeElementAt()` bietet, wenn es mit einem Zeigertyp instanziert wird.

### Worker

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in Worker-Kontexten ab [Firefox Fehler 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn es auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrapped-Add-ons können jetzt Chrome mithilfe einer `chrome.manifest`-Datei laden.
- XUL-Bilder verkleinern sich jetzt mit dem gleichen Verhältnis in beiden Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien in Header wird die Header-Datei `jspubtd.h` automatisch eingeschlossen, wenn nötig. Manuelle Einschlüsse von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Startcache, wann immer möglich.
- Das Attribut `ownerWindow` wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Callback-Verarbeitung für asynchrone Aktualisierungen der Places-Datenbank geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für die Bearbeitung von Fehler- und Erfolgssituationen ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge des physisch verwendeten Speichers meldet.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Der Android-Support wurde aufgrund vermeintlicher Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2`-Schnittstelle wurde in die `nsISelectionPrivate`-Schnittstelle integriert.
- Die `nsISelection3`-Schnittstelle wurde in die `nsISelection`-Schnittstelle integriert.
- Das `nsISessionStartup`-Attribut `state` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Worker können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, maximiert oder zwischen Vollbild- und Fenster-Modus umgeschaltet wird, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt die [Einstellung `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu verhindern.
- Die neue Eigenschaft `mozSyntheticDocument` auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen festzustellen, ob ein Dokument synthetisch ist (also etwas wie ein eigenständiges Bild-, Video- oder Audio-Datei) anstelle eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann nützlich sein, wenn Sie in dieser Situation beispielsweise eine andere Benutzeroberfläche präsentieren möchten (z. B. das Hinzufügen kontextbezogener Elemente je nach Fall unterschiedlich).
- Sie können beim Öffnen von `about:config` jetzt einen Filter angeben; beispielsweise zeigt `about:config?filter=sessionstore` nur Session-Speicher-bezogene Einstellungen an.

<!-- cSpell:ignore sessionstore -->

## Siehe auch

- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 für Entwickler](/de/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 für Entwickler](/de/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/1.5)
