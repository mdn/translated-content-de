---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Vorteile dieser Version vollständig nutzen zu können.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement)-Methode unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Früher wurde nur ein Element unterstützt. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Kein Element hat diese Schnittstelle seit Firefox 4 implementiert.
- Das HTML5-"Kontextmenü"-Feature (`contextmenu`-Attribut), welches ermöglicht, benutzerdefinierte Elemente zu nativen Kontextmenüs hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen jetzt das `selectionDirection`-Attribut, und deren `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten jetzt einen Fokusring, wenn sie durch Verwendung des `tabindex`-Attributs fokussierbar gemacht wurden und der Benutzer dann das Element fokussiert.
- In einem Set verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klick-Ereignisse keine Mehrfachaktivierung von \<label>-Elementen mehr aus, was zuvor dazu geführt hatte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML)-Methode wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interface (Teil der FileAPI) wurde implementiert.
- Die Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichen kehrt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenmodus durch zweimaliges Drücken der Eingabetaste nun zur Absatzbearbeitung (d.h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) zurück, anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Justierung korrekt greift, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der dazu führte, dass Drücken der Löschtaste oder der Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichs den vorherigen `contenteditable`-Block betraf, wenn einer vorhanden ist.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection`-Eigenschaft ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)`.preload`-Attribut wird jetzt korrekt als _enumerierter Wert_ widergespiegelt.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Attributes/crossorigin) wird standardmäßig auf "Anonymous" gesetzt, wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt korrekte Informationen zurück, wenn die Standardeinstellung für Cookies site-spezifisch überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) die ohne Argumente aufgerufen werden, stimmen jetzt mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, stimmen jetzt mit dem leeren String überein und somit mit jedem String.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht-standardisierten) `watch()` und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert nun {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}} Werte gemäß der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen beim Verwenden von {{ cssxref("hyphens") }} hinzugefügt.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um näher an die Spezifikation heranzukommen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus angepasste Linienstärke und Position auf nachfolgendem Text, um diesem zu entsprechen. Jetzt sind Rendering im Standardmodus und Quirks-Modus ähnlicher.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen mehr in Einklang mit der Spezifikation gebracht. Eine Dokumentation dazu steht noch aus, aber siehe für jetzt [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden nun korrekt skaliert](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Kodierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feldparser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`send()`](/de/docs/Web/API/WebSocket/send) gibt nicht mehr fälschlicherweise einen booleschen Wert zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`close()`](/de/docs/Web/API/WebSocket/close) entspricht jetzt dem aktuellen Entwurf der Spezifikation, und Schließereignisse nutzen jetzt korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interface.
- Das `extensions`-Attribut des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie eine einzelne Protokollzeichenfolge.
- Gemischter Inhalt ist mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicherem Inhalt aus öffnen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527) und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die deflate-stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Kompatibilitätsprobleme mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Zulassung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklertools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften auf einem angegebenen Objekt anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisierung von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu Änderungen, die notwendig sind, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, so wie alle großen Veröffentlichungen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Compartments zu erleichtern.

#### Sonstige XPCOM-bezogene Änderungen

- Sie können jetzt DOM-`File`-Objekte aus Komponentencode mit `new File` anstatt `nsIDOMFile` direkt zu instanziieren.
- Der `nsTPtrArray`-Arraytyp wurde entfernt. Seine Funktionalität ist jetzt vollständig in `nsTArray` verfügbar, das jetzt die Methode `SafeElementAt()` bietet, wenn es mit einem Pointers-Typ instanziiert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers zuzugreifen. XPConnect wurde in Worker-Kontexten gemäß [Firefox Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Bug in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der beim Aufrufen auf den Wert von `contentDocument` auftrat, wurde behoben. Seit Firefox 3 führte dies zu Fehlern anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt im gleichen Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen im Buildsystem

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch eingebunden, wenn nötig. Manuelle Einbindungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Kompatibilität mit der Gecko-Version anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Startcache, wenn möglich.
- Das `ownerWindow`-Attribut wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt für die Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Rückrufbehandlung für asynchrone Places-Datenbankaktualisierungen geändert. Siehe die neuen `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`-Methoden, die die alte einzige Methode für sowohl Fehler als auch Erfolg ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße expliziter Speicherzuweisungen berichtet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge an verwendetem physikalischem Speicher angibt.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Android-Unterstützung wurde aufgrund von wahrgenommenen Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2`-Schnittstelle wurde in die `nsISelectionPrivate`-Schnittstelle integriert.
- Die `nsISelection3`-Schnittstelle wurde in die `nsISelection`-Schnittstelle integriert.
- Das `nsISessionStartup`-Attribut state ist jetzt ein `jsval` anstatt eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Auch die `nsIWorkerFactory`-Schnittstelle wurde entfernt. Worker können weiterhin mit den `Worker`- und `ChromeWorker`-Konstruktoren erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenster-Modus gewechselt wird, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt [die `extensions.autoDisableScopes`-Einstellung verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Installationsorten zu verhindern.
- Die neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenständiges Bild, Video oder eine Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie beispielsweise in diesem Fall eine andere Benutzeroberfläche präsentieren möchten (wie das Hinzufügen von Kontext-Items unterschiedlich je nach diesem Fall).
- Sie können jetzt einen Filter beim Öffnen von `about:config` spezifizieren; zum Beispiel zeigt "about:config?filter=sessionstore" nur session storage-bezogene Präferenzen an.

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
