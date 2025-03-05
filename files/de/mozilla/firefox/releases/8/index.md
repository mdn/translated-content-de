---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: f6497ec3b1a28d7b0a99f5d13e81027204293fa3
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Entwickler von Add-ons und [Mozilla-Projekten](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version optimal zu nutzen.

## Änderungen für Webentwickler

### HTML

- Die Eigenschaft [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin` wurde hinzugefügt und das Attribut [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin) wurde zum {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Keine Elemente haben diese Schnittstelle seit vor Firefox 4 implementiert.
- Das HTML5-Feature "Kontextmenü" (Attribut `contextmenu`), das es ermöglicht, spezifische Elemente zu einem nativen Kontextmenü hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das Attribut [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen jetzt das Attribut `selectionDirection`, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten nun einen Fokusrahmen, wenn sie durch das Attribut `tabindex` fokussierbar gemacht wurden und der Benutzer dann das Element fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht mehr mehrere \<label>-Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil der FileAPI) wurde implementiert.
- Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichen kehrt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste nun in den Paragrafeingabemodus zurück (d. h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Ausrichtung beim ersten Zeileninhalt in einem [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereich korrekt wirksam wird.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken von Löschen oder Zurück im Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichs den vorherigen `contenteditable`-Block beeinflusste, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt das gleiche `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu "stringifizieren".
- Die HTML5-Eigenschaft `selectionDirection` ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das Attribut [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)`.preload` reflektiert jetzt korrekt als _enumerierter Wert_.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Attributes/crossorigin) hat als Standardwert "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt korrekte Informationen zurück, wenn die Standardeinstellung für Cookies für einzelne Seiten überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, stimmen jetzt mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder mit `undefined` aufgerufen werden, stimmen jetzt mit dem leeren String überein und stimmen somit mit jedem String überein.
- Unterstützung für Überwachungslisten wurde mit den neuen (nicht-standardisierten) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation näher zu kommen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Dicke und Position der Linie an nachgeordneten Text angepasst. Jetzt sind die Darstellungen im Standards- und Quirks-Modus ähnlicher.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen mehr an die Spezifikation angepasst. Dokumentation dazu folgt noch, aber für den Moment siehe [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Anführungszeichen werden jetzt nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Kodierungen akzeptiert, gemäß diesen RFCs.
- Der MIME-Headerfeldparser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des Objekts [`WebSocket`](/de/docs/Web/API/WebSocket) gibt nicht mehr fälschlicherweise einen Boolean-Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des Objekts [`WebSocket`](/de/docs/Web/API/WebSocket) entspricht jetzt dem aktuellen Entwurf des Standards, und Schließereignisse verwenden nun korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Das Attribut `extensions` des Objekts [`WebSocket`](/de/docs/Web/API/WebSocket) wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie eine einzelne Protokollzeichenfolge.
- Gemischter Inhalt ist bei WebSockets nicht erlaubt; das bedeutet, dass Sie keine Verbindung zu einem unsicheren WebSocket-Server von sicherem Inhalt aus öffnen können.
- Verbindungsfehler bei WebSockets lösen jetzt den `onerror`-Handler aus.
- [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527), und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die Erweiterung "deflate-stream" für WebSockets wurde deaktiviert; sie wurde als veraltet angesehen und führte zu Kompatibilitätsproblemen mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Genehmigung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines bestimmten Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu Änderungen, die vorgenommen werden müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, wie bei allen Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um es einfacher zu machen, Objekte in spezifischen Compartments zu erstellen.

#### Weitere XPCOM-bezogene Änderungen

- Sie können nun DOM [`File`](/de/docs/Web/API/File)-Objekte aus Komponentencode durch `new File` instanziieren, anstatt `nsIDOMFile` direkt zu instanziieren.
- Der Arraytyp `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig in `nsTArray` verfügbar, das jetzt die Methode `SafeElementAt()` bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Workers

Es ist nicht mehr möglich, XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde im Worker-Kontext deaktiviert mit [Firefox Bug 649537](https://bugzil.la/649537).

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn er auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 hat dies zu Fehlern geführt anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder verkleinern jetzt im gleichen Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Buildsystem

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch bei Bedarf eingeschlossen. Manuelles Einschließen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, ist nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Gecko-Kompatibilität zu spezifizieren.

### Schnittstellenänderungen

- Die `mozIJSSubScriptLoader.loadSubScript()`-Methode lädt Skripte nun aus dem Startcache, wenn möglich.
- Das Attribut `ownerWindow` wurde von der `nsIAccessNode`-Schnittstelle entfernt.
- Die Schnittstelle `nsIDOMStorageWindow` wurde in die Schnittstelle `nsIDOMWindow` integriert.
- Alle Mitglieder der Schnittstelle `nsIDOMWindowInternal` wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Zur Verbesserung der Leistung wurde die Rückrufbehandlung für asynchrone Aktualisierungen der Places-Datenbank geändert. Siehe die neuen `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`-Methoden, die die alte Einzelmethode für Fehler- und Erfolgskonditionsbehandlung ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` abgeschafft, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die Schnittstelle `nsIMemoryReporterManager` hat ein neues Attribut `explicit`, das die gesamte Größe expliziter Speicherzuweisungen meldet.
- Die Schnittstelle `nsIMemoryReporterManager` hat ein neues Attribut `resident`, das die Menge des verwendeten physischen Speichers meldet.
- Die Schnittstelle `nsINetworkLinkService` hat ein neues Attribut `linkType`. Dieses Attribut gibt den Verbindungstyp der Netzverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Unterstützung für Android wurde wegen wahrgenommener Sicherheitsbedenken zurückgenommen.
- Die Schnittstelle `nsISelection2` wurde in die Schnittstelle `nsISelectionPrivate` integriert.
- Die Schnittstelle `nsISelection3` wurde in die Schnittstelle `nsISelection` integriert.
- Das Attribut `state` von `nsISessionStartup` ist jetzt ein `jsval` statt eines Strings, aus Leistungsgründen.
- Das Attribut `isActive` von `nsIDocShell` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die Schnittstelle `nsIWorkerFactory` wurde ebenfalls entfernt. Workers können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Weitere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenster-Modus umgeschaltet wird, erhält es ein `sizemodechange`-Ereignis.
- Sie können nun [die Einstellung `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu verhindern.
- Das neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten lässt Sie bestimmen, ob ein Dokument synthetisch ist (das heißt, wie ein eigenständiges Bild-, Video- oder Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, zum Beispiel, wenn Sie eine andere Benutzeroberfläche in dieser Situation präsentieren möchten (wie das Hinzufügen kontextbezogener Elemente unterschiedlich, je nach diesem Fall).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel "about:config?filter=sessionstore" wird nur Einstellungen im Zusammenhang mit dem Sitzungsstorage anzeigen.

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
