---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um Ihnen zu helfen, die Funktionen dieser Version optimal zu nutzen.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin` Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut wurde dem {{ HTMLElement("img") }} Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) Methode unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Bisher wurde nur ein Element unterstützt. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement` Konstruktor wurde entfernt. Keine Elemente haben dieses Interface seit vor Firefox 4 implementiert.
- Die HTML5 "Kontextmenü"-Funktion (`contextmenu` Attribut), die es ermöglicht, spezifische Elementeinträge zum nativen Kontextmenü hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) Attribut wurde allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente unterstützen jetzt das `selectionDirection` Attribut, und ihre `setSelectionRange()` Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Den meisten Elementen wird jetzt ein Fokusring gezeichnet, wenn sie durch das `tabindex` Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- Bei einer Menge verschachtelter {{ HTMLElement("label") }} Elemente lösen Klickereignisse nicht mehr mehrere \<label> Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) Methode wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()` Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Interface (Teil der FileAPI) wurde implementiert.
- Event-Handling in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können nun [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList) Objekte zwischen Fenstern zu übertragen.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichen, führt das Verlassen einer Überschrift durch Drücken der Enter-Taste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Enter-Taste, jetzt in den Absatzmodus zurück (das heißt, Absätze innerhalb von {{ HTMLElement("p") }} Blöcken) anstatt Zeilen durch {{ HTMLElement("br") }} Elemente zu trennen.
- Ein Bug wurde behoben, der verhinderte, dass die Ausrichtung korrekt angewendet wurde, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereich angewendet wurde.
- Ein Bug, der dazu führte, dass das Drücken der Löschen- oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichs den vorherigen `contenteditable` Block beeinträchtigte, wurde behoben.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection` Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection` Eigenschaft ermöglicht es, die Richtung der Auswahl in einem editierbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) haben jetzt eine `seekable` Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload) Attribut wird nun korrekt als _enumerierter Wert_ reflektiert.
- Die [`crossOrigin` Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) standardisiert auf "Anonym", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies auf einer seitenweise Basis überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, stimmen jetzt mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, stimmen jetzt mit dem leeren String überein und stimmen somit mit jedem String überein.
- Unterstützung für Watchlisten wurde mit den neuen (nicht standardisierten) `watch()` und `unwatch()` Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}} Werte gemäß der Spezifikation.
- Trennungsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Der Umgang mit {{ cssxref("background-size") }} wurde überarbeitet, um die Spezifikation genauer einzuhalten.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Linienstärke und Position angepasst, um das Nachkommen-Textobjekt zu entsprechen. Jetzt sind Standards- und Quirks-Modus-Rendering ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen mehr an die Spezifikation angepasst. Die Dokumentation dazu steht noch aus, aber für den Moment siehe [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt richtig skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierung nicht mehr akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feldparser (`Content-Disposition`) erfordert jetzt "=" in den Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt-[`send()`](/de/docs/Web/API/WebSocket/send) Methode gibt keinen Booleschen Wert mehr falsch zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt-[`close()`](/de/docs/Web/API/WebSocket/close) Methode stimmt jetzt mit dem aktuellen Entwurf des Standards überein, und Schließereignisse verwenden jetzt korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent) Interface.
- Das [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt unterstützt jetzt das `extensions` Attribut.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie eine einzelne Protokollzeichenfolge.
- Gemischte Inhalte sind bei WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server aus gesicherten Inhalten herstellen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror` Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527), und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie ist veraltet und hat die Kompatibilität mit einigen Websites beeinträchtigt.

### WebGL

- [Cross-Domain Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Zulassung erlaubt werden.
- Cross-Prozess Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle` Attribut auf dem obersten {{ MathMLElement("math") }} Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align` Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklertools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue `dir()` Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie vornehmen müssen, damit Ihre Add-ons mit Firefox 8 kompatibel sind.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen großen Firefox-Versionen der Fall ist.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Compartments zu erleichtern.

#### Andere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File) Objekte aus Komponentencode instanziieren, indem Sie new File verwenden, anstatt eine `nsIDOMFile` direkt instanziieren zu müssen.
- Der `nsTPtrArray` Array-Typ wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das nun die `SafeElementAt()` Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Worker

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in Worker-Kontexten ab [Firefox Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der beim Aufruf auf den Wert von `contentDocument` auftrat, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mit einer `chrome.manifest` Datei laden.
- XUL-Bilder schrumpfen jetzt in beiden Richtungen mit dem gleichen Verhältnis, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien in Header wird die Header-Datei `jspubtd.h` automatisch bei Bedarf eingefügt. Manuelle Einfügungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion` Flag kann in der chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität zu spezifizieren.

### Schnittstellenänderungen

- Die `mozIJSSubScriptLoader.loadSubScript()` Methode lädt jetzt Skripte aus dem Startcache, wenn möglich.
- Das `ownerWindow` Attribut wurde aus der `nsIAccessNode` Schnittstelle entfernt.
- Die `nsIDOMStorageWindow` Schnittstelle wurde in die `nsIDOMWindow` Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal` Schnittstelle wurden in die `nsIDOMWindow` Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt für die Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Rückrufbehandlung für asynchrone Datenbankaktualisierungen von Places geändert. Siehe die neuen `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()` Methoden, die die alte Einzelmethode für die Behandlung von Fehler- und Erfolgsbedingungen ersetzen.
- Das `KIND_MAPPED` Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` abgelehnt, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `explicit` Attribut, das die Gesamtgröße expliziter Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `resident` Attribut, das die Menge des physisch genutzten Speichers meldet.
- Die `nsINetworkLinkService` Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2` Schnittstelle wurde in die `nsISelectionPrivate` Schnittstelle integriert.
- Die `nsISelection3` Schnittstelle wurde in die `nsISelection` Schnittstelle integriert.
- Das `nsISessionStartup` Attribut `state` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `nsIDocShell` Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die `nsIDownloadHistory.addDownload()` Methode speichert jetzt das Ziel, an dem der Download auf dem lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory` Schnittstelle wurde ebenfalls entfernt. Worker können weiterhin mit den `Worker` und `ChromeWorker` Konstruktoren erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus gewechselt wird, wird ein `sizemodechange` Ereignis ausgelöst.
- Sie können jetzt [die `extensions.autoDisableScopes` Präferenz verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons von bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument` Eigenschaft bei [`Document`](/de/docs/Web/API/Document) Objekten ermöglicht es Ihnen festzustellen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenständiges Bild, Video oder Audiodatei) anstelle eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann nützlich sein, beispielsweise wenn Sie in diesem Fall eine andere Benutzeroberfläche präsentieren möchten (wie das Hinzufügen von kontextbezogenen Elementen je nach Situation unterschiedlich).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel wird `about:config?filter=sessionstore` nur Einstellungen im Zusammenhang mit Sitzungsverwaltung anzeigen.

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
