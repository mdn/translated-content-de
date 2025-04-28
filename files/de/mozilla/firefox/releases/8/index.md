---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um alle Vorteile dieser Version nutzen zu können.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox-Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Bisher wurde nur ein Element unterstützt. (siehe [Firefox-Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Keine Elemente haben diese Schnittstelle seit vor Firefox 4 implementiert.
- Das HTML5-"Kontextmenü"-Feature (Attribut `contextmenu`), das es ermöglicht, benutzerspezifische Elemente zu nativen Kontextmenüs hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen nun das `selectionDirection`-Attribut und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten nun einen Fokusring, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht mehr mehrere \<label>-Elemente aus, was dazu führte, dass Firefox in der Vergangenheit nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat nun eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil des FileAPI) wurde implementiert.
- Das Ereignis-Handling in verschachtelten {{ HTMLElement("label") }}-Elementen wurde behoben.
- Sie können nun [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übertragen.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen kehrt das Drücken der Eingabetaste beim Verlassen einer Überschrift oder das zweimalige Drücken der Eingabetaste beim Verlassen des Listenbearbeitungsmodus nun zum Absatzmodus (also Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) zurück, anstatt Linien durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Es wurde ein Fehler behoben, der verhinderte, dass die Blocksatzformatierung korrekt wirkte, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wurde.
- Es wurde ein Fehler behoben, der dazu führte, dass das Drücken der Löschen- oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs den vorherigen `contenteditable`-Block beeinflusste, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt nun dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection`-Eigenschaft ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text festzulegen.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) haben nun eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)-Attribut spiegelt sich nun korrekt als _enumerierter Wert_ wider.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) hat als Standardwert "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies pro Seite überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, passen nun zu dem String "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, passen nun zu dem leeren String und passen somit zu jedem String.
- Unterstützung für Watchlists wurde mit den neuen (nicht standardisierten) `watch()` und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert nun {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Handhabung von {{ cssxref("background-size") }} wurde überarbeitet, um näher an der Spezifikation zu liegen.
- In der Vergangenheit hatten {{ cssxref("text-decoration") }} im Quirks-Modus eine Linienstärke und -position, die an abgeleiteten Text angepasst war. Jetzt sind der Standardmodus und der Quirks-Modus ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen näher an die Spezifikation gebracht. Die Dokumentation dazu ist noch ausstehend, aber vorerst siehe [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden nun korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Kodierungen akzeptiert, wie in den entsprechenden RFCs beschrieben.
- Der MIME-Headerfeldparser (`Content-Disposition`) erfordert nun "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts gibt nicht länger fälschlicherweise einen booleschen Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts entspricht nun dem aktuellen Entwurf des Standards und Close-Events verwenden nun korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Die `extensions`-Eigenschaft des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird nun unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie einen einzelnen Protokollstring.
- Gemischte Inhalte sind mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicheren Inhalten aus öffnen.
- Verbindungsfehler bei WebSockets lösen nun den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527) und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Kompatibilitätsprobleme mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun mit CORS-Zulassung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklertools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass Binärkomponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Kompartimenten zu erleichtern.

#### Andere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File)-Objekte von Komponentencode aus instanziieren, indem Sie new File verwenden, anstatt direkt ein `nsIDOMFile` zu instanziieren.
- Der Array-Typ `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig in `nsTArray` verfügbar, das nun die Methode `SafeElementAt()` bietet, wenn es einen Zeigertyp verwendet.

### Workers

Es ist nicht länger möglich, von ChromeWorkers auf XPCOM-Objekte zuzugreifen. XPConnect wurde in Worker-Kontexten gemäß [Firefox-Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn er auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern anstatt zu korrekter Funktion.
- Bootstrapped-Add-ons können nun Chrome über eine `chrome.manifest`-Datei laden.
- XUL-Bilder verkleinern sich nun im gleichen Verhältnis in beide Richtungen, wenn Sie maximale Größen angeben.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch bei Bedarf eingeschlossen. Manuelle Inklusionen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Start-Cache, wenn möglich.
- Die `ownerWindow`-Eigenschaft wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt bis Firefox 9 zur Kompatibilität verfügbar.
- Um die Leistung zu verbessern, wurde das Callback-Handling für asynchrone Places-Datenbank-Updates geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für sowohl Fehler- als auch Erfolgshandling ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Das `nsIMemoryReporterManager`-Interface hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speichervorgänge meldet.
- Das `nsIMemoryReporterManager`-Interface hat ein neues `resident`-Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Das `nsINetworkLinkService`-Interface hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Das `nsISelection2`-Interface wurde in das `nsISelectionPrivate`-Interface integriert.
- Das `nsISelection3`-Interface wurde in das `nsISelection`-Interface integriert.
- Das `nsISessionStartup`-Attribut `state` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wohin der Download auf dem lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Workers können weiterhin mit den `Worker`- und `ChromeWorker`-Konstruktoren erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus umgeschaltet wird, empfängt es ein `sizemodechange`-Ereignis.
- Sie können jetzt [die Einstellung `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen festzustellen, ob ein Dokument synthetisch ist (das heißt, etwas wie eine eigenständige Bild-, Video- oder Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie beispielsweise in dieser Situation eine andere Benutzeroberfläche präsentieren möchten (wie das Hinzufügen von kontextbezogenen Elementen je nach Fall).
- Sie können jetzt einen Filter verwenden, wenn Sie `about:config` öffnen; zum Beispiel zeigt `about:config?filter=sessionstore` nur Einstellungen zu Sitzungsdateien an.

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
