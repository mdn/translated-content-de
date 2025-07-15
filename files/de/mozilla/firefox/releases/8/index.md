---
title: Firefox 8 für Entwickler
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszunutzen.

## Änderungen für Webentwickler

### HTML

- Die `crossOrigin`-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox-Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add) unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox-Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Kein Element hat diese Schnittstelle seit vor Firefox 4 implementiert.
- Das HTML5-Feature "Kontextmenü" (`contextmenu`-Attribut), das es Ihnen ermöglicht, benutzerdefinierte, elementspezifische Elemente zum nativen Kontextmenü hinzuzufügen, wird jetzt unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen jetzt das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung angeben zu können.
- Die meisten Elemente erhalten jetzt einen Fokus-Ring, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einer Gruppe von verschachtelten {{ HTMLElement("label") }}-Elementen lösen Klickereignisse nicht mehr mehrere \<label>-Elemente aus, was früher dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil der FileAPI) wurde implementiert.
- Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übertragen.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen kehrt das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste jetzt zum Absatzmodus (das heißt Absätze innerhalb von {{ HTMLElement("p") }} Blöcken) zurück, anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Ausrichtung korrekt wirkte, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken von Löschen oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs den vorherigen `contenteditable` Block betraf, wenn einer vorhanden ist.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt jetzt dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Das HTML5 `selectionDirection`-Attribut ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das Attribut [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload) spiegelt jetzt korrekt als _aufzählbarer Wert_ wider.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) hat standardmäßig den Wert "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt jetzt korrekte Informationen zurück, wenn die Standardeinstellung für Cookies standortbezogen überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) ohne Argumente aufgerufen, vergleichen sich jetzt mit dem String "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) ohne Argumente oder mit `undefined` rufen jetzt den leeren String ab und vergleichen somit jeden String.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardisierten) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Silbentrennregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um näher an der Spezifikation zu liegen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Linienstärke und -position für untergeordnete Texte angepasst, um dem Nachkommen zu entsprechen. Jetzt sind Render-Modus und Quirks-Modus ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen mehr an die Spezifikation angepasst. Die Dokumentation dazu folgt, aber bis dahin siehe [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds) wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht länger als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierungen akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feldparser (`Content-Disposition`) erfordert jetzt ein "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die Methode [`send()`](/de/docs/Web/API/WebSocket/send) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts gibt nicht mehr fälschlicherweise einen Boolean-Wert zurück.
- Die Methode [`close()`](/de/docs/Web/API/WebSocket/close) des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts entspricht jetzt dem aktuellen Entwurf des Standards und Abschlussereignisse verwenden jetzt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle korrekt.
- Das `extensions`-Attribut des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie einen einzelnen Protokollstring.
- Mischinhalte sind mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicheren Inhalten aus öffnen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527) und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und beeinträchtigte die Kompatibilität mit einigen Seiten.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können jetzt mit CORS-Zulassung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue Methode `dir()`, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die wahrscheinlich erforderlich sind, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert eine Neukompilierung von Binärkomponenten, wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Umgebungen zu erleichtern.

#### Weitere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File)-Objekte vom Komponentencode aus instanziieren, indem Sie "new File" verwenden, anstatt ein `nsIDOMFile` direkt zu instanziieren.
- Der Array-Typ `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das jetzt die Methode `SafeElementAt()` bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in Worker-Kontexten seit [Firefox-Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn es auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 hat dies zu Fehlern geführt, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können jetzt Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder verkleinern sich jetzt mit demselben Verhältniss in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Buildsystem

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien in Header wird die Header-Datei `jspubtd.h` automatisch inkludiert, wenn nötig. Manuelle Einbindungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion`-Flag kann in der chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt jetzt Skripte aus dem Start-Cache, wenn möglich.
- Das Attribut `ownerWindow` wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde mit der `nsIDOMWindow`-Schnittstelle zusammengeführt.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt für Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Callback-Behandlung für asynchrone Aktualisierungen der Places-Datenbank geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Methode für sowohl Fehler- als auch Erfolgskonditionen ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitstypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße expliziter Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der verwendeten Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2`-Schnittstelle wurde mit der `nsISelectionPrivate`-Schnittstelle zusammengeführt.
- Die `nsISelection3`-Schnittstelle wurde mit der `nsISelection`-Schnittstelle zusammengeführt.
- Das `nsISessionStartup`-Attribut state ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download auf dem lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Arbeiter können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Weitere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild und Fenstermodus gewechselt wird, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt die [Präferenz `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationspfaden zu deaktivieren.
- Die neue Eigenschaft `mozSyntheticDocument` auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (das heißt, etwas wie ein eigenständiges Bild, Video oder Audiodatei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, zum Beispiel wenn Sie in dieser Situation eine unterschiedliche Benutzeroberfläche präsentieren möchten (wie das Hinzufügen kontextabhängiger Elemente, abhängig von diesem Fall).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel zeigt `about:config?filter=sessionstore` nur Sitzungsbezogene Voreinstellungen an.

<!-- cSpell:ignore sessionstore -->
