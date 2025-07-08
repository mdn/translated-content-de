---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszuschöpfen.

## Änderungen für Webentwickler

### HTML

- Die Eigenschaft [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin` wurde hinzugefügt und das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add) unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der Konstruktor `HTMLIsIndexElement` wurde entfernt. Kein Element hat diese Schnittstelle seit Firefox 4 implementiert.
- Das HTML5-Feature "context menu" (`contextmenu`-Attribut), das es Ihnen ermöglicht, benutzerspezifische Elemente zu nativen Kontextmenüs hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das Attribut [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) wurde allen Elementen hinzugefügt.
- Die Elemente {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} unterstützen jetzt das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten jetzt einen Fokusring gezeichnet, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht länger mehrere \<label>-Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil von FileAPI) wurde implementiert.
- Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }} wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList) Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen kehrt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste jetzt zum Absatzmodus zurück (d.h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken), anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass Rechtfertigung richtig wirksam wird, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wird.
- Ein Fehler wurde behoben, der das Drücken von Löschen oder Zurück auf den Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereiches auf den vorherigen `contenteditable`-Block anwenden ließ, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 Eigenschaft `selectionDirection` ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verfügt jetzt über eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das Attribut [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload) spiegelt jetzt korrekt einen _aufgezählten Wert_ wider.
- Bei einer ungültigen Verwendung des [`crossOrigin`]-Attributs (/de/docs/Web/HTML/Reference/Attributes/crossorigin) wird zu "Anonymous" zurückgekehrt.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt korrekte Informationen zurück, wenn die Standardeinstellung für Cookies für einzelne Websites überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, vergleichen jetzt mit dem String "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, vergleichen jetzt mit dem leeren String und treffen somit auf jeden String zu.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardisierten) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}, gemäß der Spezifikation.
- Trennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Handhabung von {{ cssxref("background-size") }} wurde überarbeitet, um die Spezifikation besser zu erfüllen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Linienstärke und -position auf absteigendem Text angepasst, um den Abstieg anzupassen. Jetzt sind das Rendering im Standard- und Quirks-Modus einander ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen näher an die Spezifikation gebracht. Die Dokumentation dazu ist in Arbeit, aber vorerst siehe [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Kodierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feldparser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts gibt nicht mehr fälschlicherweise einen Boolean-Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts entspricht jetzt dem aktuellen Entwurf des Standards, und Schließungsereignisse verwenden jetzt korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Das Attribut `extensions` des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie einen einzelnen Protokollstring.
- Gemischte Inhalte sind mit WebSockets nicht erlaubt; das bedeutet, dass Sie von gesicherten Inhalten aus keine Verbindung zu einem nicht gesicherten WebSocket-Server herstellen können.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527) und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die deflate-stream-Erweiterung zu WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Probleme mit der Kompatibilität auf einigen Websites.

### WebGL

- [Domainübergreifende Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Zulassung erlaubt werden.
- Prozessübergreifendes Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das Objekt [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften auf einem angegebenen Objekt anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass Binärkomponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um die Erstellung von Objekten in bestimmten Kompartments zu erleichtern.

#### Andere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File)-Objekte aus Komponentencode instanziieren, indem Sie ein neues File erstellen, anstatt ein `nsIDOMFile` direkt instanzieren zu müssen.
- Der Array-Typ `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das nun die Methode `SafeElementAt()` bietet, wenn es mit einem Zeigertyp instanziert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in Worker-Kontexten ab [Firefox Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn er auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt mit demselben Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` bei Bedarf automatisch eingeschlossen. Manuelle Einschließungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Start-Cache, wenn möglich.
- Das Attribut `ownerWindow` wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die Schnittstelle `nsIDOMStorageWindow` wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der Schnittstelle `nsIDOMWindowInternal` wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt für die Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde das Callback-Handling für asynchrone Places-Datenbankaktualisierungen geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte einzelne Methode für beide Ereignisarten von Fehlern und Erfolgen ersetzen.
- Das Attribut `KIND_MAPPED` von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die Schnittstelle `nsIMemoryReporterManager` hat ein neues Attribut `explicit`, das die Gesamtgröße der expliziten Speicherzuweisungen berichtet.
- Die Schnittstelle `nsIMemoryReporterManager` hat ein neues Attribut `resident`, das die Menge des verwendeten physischen Speichers berichtet.
- Die Schnittstelle `nsINetworkLinkService` verfügt über ein neues Attribut `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die Schnittstelle `nsISelection2` wurde in die Schnittstelle `nsISelectionPrivate` integriert.
- Die Schnittstelle `nsISelection3` wurde in die Schnittstelle `nsISelection` integriert.
- Das Attribut `state` von `nsISessionStartup` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das Attribut `isActive` der `nsIDocShell` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, an dem der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die Schnittstelle `nsIWorkerFactory` wurde ebenfalls entfernt. Worker können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Andere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenster-Modus gewechselt wird, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt [die Einstellung `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu verhindern.
- Die neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenständiges Bild, Video oder eine Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie beispielsweise in dieser Situation eine andere Benutzeroberfläche präsentieren möchten (z. B. das Hinzufügen kontextbezogener Elemente je nach Fall unterschiedlich).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel zeigt `about:config?filter=sessionstore` nur einstellungen zu Sitzungs-Speicher-bezogenen Präferenzen.

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
