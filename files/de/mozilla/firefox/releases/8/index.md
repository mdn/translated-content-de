---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszuschöpfen.

## Änderungen für Webentwickler

### HTML

- Die `crossOrigin`-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox-Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox-Bug 666200](https://bugzil.la/666200))
- Der Konstruktor `HTMLIsIndexElement` wurde entfernt. Keine Elemente haben diese Schnittstelle seit vor Firefox 4 implementiert.
- Das "Kontextmenü"-Feature von HTML5 (`contextmenu`-Attribut), das es Ihnen ermöglicht, benutzerdefinierte, elementspezifische Einträge zum nativen Kontextmenü hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) Attribut wurde für alle Elemente hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente unterstützen jetzt das `selectionDirection` Attribut, und ihre `setSelectionRange()` Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente haben jetzt einen Fokusring um sich herum, wenn sie mithilfe des `tabindex` Attributs fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }} Elemente lösen Klickereignisse nicht mehr mehrere \<label>-Elemente aus, was in der Vergangenheit dazu geführt hat, dass Firefox nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Schnittstelle (Teil von FileAPI) wurde implementiert.
- Die Ereignisbehandlung von verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList) Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichen wird beim Verlassen einer Überschrift durch Drücken der Eingabetaste oder beim zweimaligen Drücken der Eingabetaste zum Verlassen des Listenbearbeitungsmodus jetzt wieder in den Absatzmodus (also Absätze innerhalb von {{ HTMLElement("p") }} Blöcken) zurückgekehrt, anstatt Zeilen durch {{ HTMLElement("br") }} Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Ausrichtung beim ersten Zeilenumbruch in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereich richtig wirksam wurde.
- Ein Fehler wurde behoben, der das Löschen oder Zurücksetzen am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichs auf den vorhergehenden `contenteditable` Block auswirkte, falls einer vorhanden ist.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection`-Eigenschaft ermöglicht es, die Richtung der Auswahl in einem editierbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable` Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload) Attribut spiegelt jetzt korrekt als _enumerierter Wert_ wider.
- Die [`crossOrigin` Eigenschaft](/de/docs/Web/HTML/Attributes/crossorigin) stellt standardmäßig auf "Anonymous" ein, wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt die korrekten Informationen zurück, wenn die Standardeinstellung für Cookies auf einer pro-Website-Basis überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, prüfen jetzt den String "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, prüfen jetzt den leeren String und passen somit auf jeden String.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardmäßigen) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{ cssxref("&lt;number&gt;")}}, nicht nur {{ cssxref("&lt;integer&gt;")}} Werte gemäß Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um die Spezifikation besser zu erfüllen.
- In der Vergangenheit wurde {{ cssxref("text-decoration") }} im Quirks-Modus angepasst, um die Linienstärke und -position an darunter liegende Texte anzupassen. Jetzt sind Standardmodus und Quirks-Modus im Rendering ähnlicher.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen mehr an die Spezifikation angepasst. Die Dokumentation hierfür steht noch aus, siehe jedoch für Details [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Headerfeldparser (`Content-Disposition`) erfordert nun "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des [`WebSocket`](/de/docs/Web/API/WebSocket) Objekts liefert nicht mehr fälschlicherweise einen booleschen Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket) Objekts entspricht jetzt dem aktuellen Entwurf des Standards, und Schließereignisse verwenden jetzt korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent) Interface.
- Das `extensions` Attribut des [`WebSocket`](/de/docs/Web/API/WebSocket) Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt sowohl ein Array von Protokollen als auch einen einzelnen Protokoll-String.
- Mixed Content ist bei WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicherem Inhalt aus herstellen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527) und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Kompatibilitätsprobleme mit einigen Websites.

### WebGL

- [CORS genehmigte Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt zugelassen werden.
- Cross-Process-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle` Attribut auf dem oberen {{ MathMLElement("math") }} Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align` Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklertools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue `dir()` Methode, die eine interaktive Liste der Eigenschaften eines bestimmten Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Sehen Sie sich [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) an, um eine Anleitung zu Änderungen zu finden, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert das erneute Kompilieren von Binärkomponenten, wie bei allen größeren Releases von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Bereichen zu erleichtern.

#### Weitere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File) Objekte aus Komponentencode instanziieren, indem Sie new File verwenden, anstatt direkt ein `nsIDOMFile` zu instanziieren.
- Der Array-Typ `nsTPtrArray` wurde entfernt. Dessen Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das jetzt die Methode `SafeElementAt()` bietet, wenn es unter Verwendung eines Zeigertyps instanziiert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte aus ChromeWorkers zuzugreifen. XPConnect wurde in Worker-Kontexten deaktiviert gemäß [Firefox-Bug 649537](https://bugzil.la/649537).

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der beim Aufruf auf den Wert von `contentDocument` auftrat, wurde behoben. Seit Firefox 3 führte dies zu Fehlern anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mithilfe einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt im gleichen Verhältnis in beide Richtungen bei der Angabe maximaler Größen.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch einbezogen, wenn erforderlich. Manuelle Einfügungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest verwendet werden, um die Gecko-Versionskompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Scripts aus dem Startcache, wenn möglich.
- Das `ownerWindow` Attribut wurde aus der `nsIAccessNode` Schnittstelle entfernt.
- Die `nsIDOMStorageWindow` Schnittstelle wurde in die `nsIDOMWindow` Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal` Schnittstelle wurden in die `nsIDOMWindow` Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Callback-Verarbeitung für asynchrone Places-Datenbank-Updates geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für beide Fehler- und Erfolgsbedingungen ersetzen.
- Das `KIND_MAPPED` Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `explicit` Attribut, das die Gesamtgröße expliziter Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `resident` Attribut, das die Menge des genutzten physischen Speichers meldet.
- Die `nsINetworkLinkService` Schnittstelle hat ein neues Attribut `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2` Schnittstelle wurde in die `nsISelectionPrivate` Schnittstelle integriert.
- Die `nsISelection3` Schnittstelle wurde in die `nsISelection` Schnittstelle integriert.
- Das `nsISessionStartup` Attribut state ist jetzt ein `jsval` anstatt eines Strings, aus Leistungsgründen.
- Das `nsIDocShell` Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory` Schnittstelle wurde ebenfalls entfernt. Workers können weiterhin mit den `Worker` und `ChromeWorker` Konstruktoren erstellt werden.

### Weitere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus umschaltet, erhält es ein `sizemodechange` Ereignis.
- Sie können jetzt [die Präferenz `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument` Eigenschaft auf [`Document`](/de/docs/Web/API/Document) Objekten lässt Sie bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenes Bild, Video oder Audiodatei) anstatt eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann nützlich sein, wenn Sie beispielsweise in dieser Situation eine andere Benutzeroberfläche präsentieren möchten (z.B. kontextabhängige Elemente anders hinzugefügt werden je nach Fall).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; z.B. zeigt "about:config?filter=sessionstore" nur Sitzungsspeicher-bezogene Präferenzen an.

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
