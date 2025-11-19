---
title: Firefox 8 Versionshinweise für Entwickler
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszuschöpfen.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt (siehe [Firefox-Bug 664299](https://bugzil.la/664299)).
- Die Methode [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add) unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt (siehe [Firefox-Bug 666200](https://bugzil.la/666200)).
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Keine Elemente haben dieses Interface seit Firefox 4 implementiert.
- Das HTML5 "Kontextmenü"-Feature (`contextmenu`-Attribut), das es ermöglicht, spezifische Einträge zum nativen Kontextmenü hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell, in Erwartung von Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}-Elemente unterstützen jetzt das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten jetzt einen Fokusring, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer dann das Element fokussiert.
- In einem Satz von verschachtelten {{ HTMLElement("label") }}-Elementen lösen Klickereignisse jetzt nicht mehr mehrere \<label>-Elemente aus, was in der Vergangenheit dazu geführt hat, dass Firefox nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat nun eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Das Interface [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil der FileAPI) wurde implementiert.
- Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }} wurde behoben.
- Sie können nun [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übertragen.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen kehrt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste nun zum Absatzeintrag-Modus zurück (das heißt, Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) anstatt von {{ HTMLElement("br") }}-Elementen, die Linien trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Rechtfertigung ordnungsgemäß wirksam wird, wenn sie auf die erste Zeile eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs angewendet wird.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken der Löschen- oder Rückwärtstaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs den vorherigen `contenteditable`-Block betraf, wenn einer vorhanden war.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection`-Eigenschaft ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat nun eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)-Attribut spiegelt nun korrekt als _aufgezählter Wert_ wieder.
- [`crossOrigin` property](/de/docs/Web/HTML/Reference/Attributes/crossorigin) setzt standardmäßig auf "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standard-Cookie-Einstellung standortweise überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, matchen nun gegen die Zeichenkette "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, matchen nun gegen die leere Zeichenkette und matchen somit jede Zeichenkette.
- Unterstützung für Überwachungsliste wurde mit den neuen (nicht standardisierten) `watch()` und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Trennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Verarbeitung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation näher zu entsprechen.
- In der Vergangenheit hatte die {{ cssxref("text-decoration") }} in der Quirks-Modus-Klasse die Linienstärke und -position auf Nachkommen-Text angepasst, um den Nachkommen zu entsprechen. Jetzt sind Rendering im Standards- und Quirks-Modus ähnlicher.
- Horizontale Positionierung für Elemente wurde in vielen Fällen mehr an die Spezifikation angepasst. Dokumentation hierzu folgt, vorerst siehe [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden nun korrekt skaliert](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Codierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Headerfeld-Parser (`Content-Disposition`) erfordert nun "=" in Parametern.
- Skripts werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die `send()`-Methode des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts gibt nicht mehr fälschlicherweise einen booleschen Wert zurück.
- Die `close()`-Methode des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts entspricht nun dem aktuellen Entwurf des Standards, und Close-Events verwenden nun korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interface.
- Das `extensions`-Attribut des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird nun unterstützt.
- Der WebSocket-Konstruktor unterstützt nun ein Array von Protokollen sowie eine einzelne Protokollzeichenkette.
- Mixed Content ist bei WebSockets nicht erlaubt; Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicheren Inhalten aus öffnen.
- Verbindungsfehler bei WebSockets lösen nun den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527), und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung zu WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Kompatibilitätsprobleme mit einigen Websites.

### WebGL

- [Cross-domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun mit CORS-Genehmigung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten Niveau des {{ MathMLElement("math") }}-Elements wurde hinzugefügt.
- Die Interpretation von negativen Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu Änderungen, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um es einfacher zu machen, Objekte in bestimmten Compartments zu erstellen.

#### Weitere XPCOM-bezogene Änderungen

- Sie können nun DOM [`File`](/de/docs/Web/API/File)-Objekte aus Komponentencode instanziieren, indem Sie ein neues File erstellen, anstatt ein `nsIDOMFile` direkt zu instanziieren.
- Der `nsTPtrArray` Array-Typ wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das jetzt die `SafeElementAt()`-Methode bietet, wenn mit einem Zeigertyp instanziiert.

### Workers

Es ist nicht mehr möglich, XPCOM-Objekte aus ChromeWorkers zuzugreifen. XPConnect wurde in Worker-Kontexten mit [Firefox-Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn es auf den Wert von `contentDocument` aufgerufen wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können nun Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen nun mit dem gleichen Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch bei Bedarf eingeschlossen. Manuelle Einfügungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest-Datei verwendet werden, um die Kompatibilität mit der Gecko-Version anzugeben.

### Interface-Änderungen

- Die `mozIJSSubScriptLoader.loadSubScript()`-Methode lädt nun Skripte aus dem Start-Cache, wenn möglich.
- Das `ownerWindow`-Attribut wurde aus dem `nsIAccessNode`-Interface entfernt.
- Das `nsIDOMStorageWindow`-Interface wurde in das `nsIDOMWindow`-Interface integriert.
- Alle Mitglieder des `nsIDOMWindowInternal`-Interface wurden in das `nsIDOMWindow`-Interface verschoben. Das Interface selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Callback-Verarbeitung für asynchrone Places-Datenbank-Updates geändert. Siehe die neuen `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`-Methoden, die die alte Einzelmethode für Fehler- und Erfolgskonditionsbehandlung ersetzen.
- Das `KIND_MAPPED`-Attribut des `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Das `nsIMemoryReporterManager`-Interface hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen berichtet.
- Das `nsIMemoryReporterManager`-Interface hat ein neues `resident`-Attribut, das die Menge des physikalischen Speichers berichtet, der verwendet wird.
- Das `nsINetworkLinkService`-Interface hat ein neues Attribut, `linkType`. Dieses Attribut liefert den Typ der verwendeten Netzwerkverbindung. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Unterstützung für Android wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Das `nsISelection2`-Interface wurde in das `nsISelectionPrivate`-Interface integriert.
- Das `nsISelection3`-Interface wurde in das `nsISelection`-Interface integriert.
- Das `nsISessionStartup`-Attribut staat ist nun ein `jsval` anstatt eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist nun `false` für minimierte Fenster.
- Die `nsIDownloadHistory.addDownload()`-Methode speichert nun das Ziel, wo der Download im lokalen Dateisystem gespeichert ist.

#### Entfernte Interfaces

Die folgenden Interfaces waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Das `nsIWorkerFactory`-Interface wurde ebenfalls entfernt. Worker können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus gewechselt wird, empfängt es ein `sizemodechange`-Ereignis.
- Sie können nun [die `extensions.autoDisableScopes`-Präferenz verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft an [`Document`](/de/docs/Web/API/Document)-Objekten erlaubt es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (das heißt, etwas wie ein eigenständiges Bild, Video oder Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie zum Beispiel unterschiedliche Benutzeroberflächen in dieser Situation präsentieren möchten (zum Beispiel anders kontextbezogene Einträge hinzufügen, je nach diesem Fall).
- Sie können nun einen Filter beim Öffnen von `about:config` angeben; zum Beispiel, `about:config?filter=sessionstore` zeigt nur Einstellungen im Zusammenhang mit Sitzungsverwaltung an.

<!-- cSpell:ignore sessionstore -->
