---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-On- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Veröffentlichung optimal nutzen zu können.

## Änderungen für Webentwickler

### HTML

- Die `crossOrigin`-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }} Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement) unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Früher wurde nur ein Element unterstützt. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der Konstruktor `HTMLIsIndexElement` wurde entfernt. Keine Elemente haben dieses Interface seit vor Firefox 4 implementiert.
- Die HTML5 "Kontextmenü"-Funktion (`contextmenu`-Attribut), die es ermöglicht, benutzerdefinierte elementspezifische Einträge zum nativen Kontextmenü hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde zu allen Elementen hinzugefügt.
- Die Elemente {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} unterstützen jetzt das `selectionDirection`-Attribut, und ihre Methoden `setSelectionRange()` wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten nun einen Fokusring, wenn sie durch Verwendung des `tabindex`-Attributs fokussierbar gemacht werden und der Benutzer dann das Element fokussiert.
- Bei einer Reihe verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht mehr mehrere `<label>`-Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` verfügt nun über eine Methode `getFile()`, die den Inhalt des Blobs als Datei zurückgibt.
- Das Interface [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil des FileAPI) wurde implementiert.
- Die Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichen wird beim Verlassen einer Überschrift durch Drücken der Eingabetaste oder beim Verlassen des Listeneditor-Modus durch zweimaliges Drücken der Eingabetaste nun in den Absatzmodus zurückgekehrt (d.h. Absätze innerhalb von {{ HTMLElement("p") }} Blöcken), anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, durch den die Ausrichtung nicht richtig wirkte, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken der Entf- oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLelement/contenteditable)-Bereichs den vorherigen `contenteditable`-Block betraf, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt nun dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection`-Eigenschaft ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verfügt jetzt über eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)`.preload`-Attribut wird nun korrekt als _enumerated value_ reflektiert.
- Die [`crossOrigin` property](/de/docs/Web/HTML/Attributes/crossorigin) hat einen Standardwert "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standard-Cookie-Einstellung standortweise überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) rufen jetzt ohne Argumente auf den String "undefined" ab.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) rufen ohne Argumente oder `undefined` jetzt den leeren String ab und treffen daher auf jeden String.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardmäßigen) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Für viele neue Sprachen sind Silbentrennungsregeln hinzugefügt worden, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Handhabung von {{ cssxref("background-size") }} wurde überarbeitet, um die Spezifikation genauer zu entsprechen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus Linienstärke und -position auf nachfolgender Text angepasst, um mit dem Nachfolger übereinzustimmen. Jetzt ähneln sich die Renderings im Standardmodus und Quirks-Modus mehr.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen mehr an die Spezifikation angepasst. Dokumentation darüber wird folgen, aber vorerst siehe [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht länger als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierung akzeptiert, wie in diesen RFCs angegeben.
- Der MIME-Header-Feld-Parser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht länger heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht länger unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts gibt nicht länger fälschlicherweise einen booleschen Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts stimmt nun mit dem aktuellen Entwurf des Standards überein, und Schließeereignisse verwenden jetzt korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interface.
- Das `extensions`-Attribut des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt sowohl ein Array von Protokollen als auch einen einzelnen Protokollstring.
- Gemischte Inhalte sind bei WebSockets nicht erlaubt; es kann also keine Verbindung zu einem unsicheren WebSocket-Server von sicheren Inhalten aus geöffnet werden.
- Verbindungsfehler mit WebSockets lösen nun den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527), und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und führte zu Kompatibilitätsproblemen mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit Genehmigung durch CORS zugelassen werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation von negativen Zeilennummern für das `align`-Attribut bei {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-On-Entwickler

Siehe [Aktualisierung von Add-Ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu Änderungen, die Sie vornehmen müssen, um Ihre Add-Ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Bereichen zu erleichtern.

#### Weitere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File)-Objekte von Komponentencode instanziieren, indem Sie `new File` verwenden, anstatt direkt ein `nsIDOMFile` zu instanziieren.
- Der Array-Typ `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig in `nsTArray` verfügbar, das jetzt die `SafeElementAt()`-Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Workers

Es ist nicht länger möglich, von ChromeWorkers aus auf XPCOM-Objekte zuzugreifen. XPConnect wurde in Worker-Kontexten seit [Firefox Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn es auf den Wert von `contentDocument` aufgerufen wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Gebootstrappte Add-Ons können jetzt Chrome mithilfe einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt mit demselben Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Headerdatei `jspubtd.h` automatisch eingebunden, wenn erforderlich. Manuelle Einbindungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht länger nötig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest verwendet werden, um die Kompatibilität mit Gecko-Versionen anzugeben.

### Interface-Änderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Startcache, wenn möglich.
- Das `ownerWindow`-Attribut wurde aus dem `nsIAccessNode` Interface entfernt.
- Das `nsIDOMStorageWindow` Interface wurde in das `nsIDOMWindow` Interface integriert.
- Alle Mitglieder des `nsIDOMWindowInternal` Interface wurden in das `nsIDOMWindow` Interface verschoben. Das Interface selbst (ohne Mitglieder) bleibt für die Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Rückrufbehandlung für asynchrone Aktualisierungen der Places-Datenbank geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für sowohl Fehler- als auch Erfolgszustandsbehandlung ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Das `nsIMemoryReporterManager` Interface hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen meldet.
- Das `nsIMemoryReporterManager` Interface hat ein neues `resident`-Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Das `nsINetworkLinkService` Interface hat ein neues Attribut, `linkType`. Dieses Attribut liefert die Art der verwendeten Netzwerkverbindung. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Android-Unterstützung wurde aufgrund von wahrgenommenen Sicherheitsbedenken zurückgenommen.
- Das `nsISelection2` Interface wurde in das `nsISelectionPrivate` Interface integriert.
- Das `nsISelection3` Interface wurde in das `nsISelection` Interface integriert.
- Das Attribut `state` von `nsISessionStartup` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das Attribut `isActive` von `nsIDocShell` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert nun das Ziel, wo der Download auf das lokale Dateisystem gespeichert wird.

#### Entfernte Interfaces

Die folgenden Interfaces waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Das Interface `nsIWorkerFactory` wurde ebenfalls entfernt. Worker können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Weitere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus umgeschaltet wird, empfängt es ein `sizemodechange`-Ereignis.
- Sie können jetzt [das `extensions.autoDisableScopes`-Preference verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-Ons aus bestimmten Add-On-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d. h. etwas wie eine eigenständige Bild-, Video- oder Audiodatei) anstatt eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann nützlich sein, wenn Sie in diesem Fall zum Beispiel ein anderes Benutzerinterface präsentieren möchten (wie das Hinzufügen kontextueller Elemente unterschiedlich je nach Fall).
- Sie können jetzt einen Filter beim Öffnen von `about:config` angeben; zum Beispiel zeigt "about:config?filter=sessionstore" nur auf die Sitzungspeicherung bezogene Einstellungen.

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
