---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektentwickler](#änderungen_für_entwickler_von_mozilla_und_add-ons), um die Funktionen dieser Version optimal nutzen zu können.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin` Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut wurde dem {{ HTMLElement("img") }} Element hinzugefügt. (siehe [Firefox Fehler 664299](https://bugzil.la/664299))
- Die [`HTMLSelectElement.add()`](</de/docs/Web/API/HTMLSelectElement#add()>) Methode unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor unterstützte sie nur ein Element. (siehe [Firefox Fehler 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement` Konstruktor wurde entfernt. Kein Element hat diese Schnittstelle seit vor Firefox 4 implementiert.
- Die HTML5 „Kontextmenü“-Funktion (`contextmenu` Attribut), die es ermöglicht, benutzerdefinierte, element-spezifische Elemente zu einem nativen Kontextmenü hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Fehler 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) Attribut wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente unterstützen nun das `selectionDirection` Attribut, und ihre `setSelectionRange()` Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Den meisten Elementen wird nun ein Fokus-Ring gezeichnet, wenn sie durch das `tabindex` Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz von verschachtelten {{ HTMLElement("label") }} Elementen lösen Klickereignisse keine mehrfachen \<label> Elemente mehr aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Fehler 646157](https://bugzil.la/646157)).

### DOM

- Die [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) Methode wurde implementiert.
- `BlobBuilder` hat nun eine `getFile()` Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Interface (Teil der FileAPI) wurde implementiert.
- Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde repariert.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList) Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichen kehrt das Drücken der Eingabetaste beim Verlassen einer Überschrift oder das Drücken der Eingabetaste zweimal beim Verlassen des Listenbearbeitungsmodus nun in den Absatz-Eingabemodus zurück (d.h. Absätze innerhalb von {{ HTMLElement("p") }} Blöcken) anstatt Zeilen durch {{ HTMLElement("br") }} Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass die Justierung korrekt wirksam wird, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereich angewendet wird.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken der Löschen- oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) Bereichs den vorherigen `contenteditable` Block beeinflusste, wenn einer vorhanden ist.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt nun dasselbe `Selection` Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5 `selectionDirection` Eigenschaft ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Textfeld zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable` Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload) Attribut spiegelt nun korrekt als _enumerierter Wert_ wider.
- Die [`crossOrigin` Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) standardmäßig "Anonymous" zurück, wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies auf einer Webseite überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, stimmen jetzt mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, stimmen jetzt mit dem leeren String überein und treffen daher auf jeden String zu.
- Unterstützung für Watchlists wurde mit den neuen (nicht-standardmäßigen) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert jetzt {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}} Werte gemäß der Spezifikation.
- Hyphenationsregeln wurden für viele neue Sprachen hinzugefügt, wenn {{ cssxref("hyphens") }} verwendet wird.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation näher zu kommen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Dicke und Position der Linie an den Nachkommen-Text angepasst, um den Nachkommen abzustimmen. Jetzt sind die Darstellungen im Standards- und Quirks-Modus ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen mehr an die Spezifikation angeglichen. Dokumentation darüber folgt noch, aber für jetzt siehe [Firefox Fehler 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden nun korrekt skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Header-Feld-Parser (`Content-Disposition`) erfordert nun "=" in den Parametern.
- Skripts werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt Methode [`send()`](/de/docs/Web/API/WebSocket/send) gibt nicht mehr fälschlicherweise einen Booleschen Wert zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt Methode [`close()`](/de/docs/Web/API/WebSocket/close) stimmt jetzt mit dem aktuellen Entwurf des Standards überein und Schließe-Ereignisse verwenden jetzt korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent) Schnittstelle.
- Das [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt Attribut `extensions` wird nun unterstützt.
- Der WebSocket-Konstruktor unterstützt nun ein Array von Protokollen sowie einen einzelnen Protokoll-String.
- Gemischte Inhalte sind bei WebSockets nicht erlaubt; das bedeutet, dass Sie keine Verbindung zu einem unsicheren WebSocket-Server von sicheren Inhalten aus öffnen können.
- Verbindungsfehler bei WebSockets lösen jetzt den `onerror` Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Fehler 674890](https://bugzil.la/674890), [Firefox Fehler 674527](https://bugzil.la/674527) und [Firefox Fehler 674716](https://bugzil.la/674716)).
- Die Deflate-Stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und verursachte Kompatibilitätsprobleme mit einigen Seiten.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun mit CORS-Zustimmung erlaubt werden.
- Cross-Process-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle` Attribut auf dem obersten {{ MathMLElement("math") }} Element wurde hinzugefügt.
- Die Interpretation von negativen Zeilennummern für das `align` Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwickler-Tools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue `dir()` Methode, die eine interaktive Liste der Eigenschaften auf einem angegebenen Objekt anzeigt.

## Änderungen für Entwickler von Mozilla und Add-ons

Siehe [Aktualisierung von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu Änderungen, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass Binärkomponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um es einfacher zu machen, Objekte in spezifischen Compartments zu erstellen.

#### Weitere XPCOM-bezogene Änderungen

- Sie können jetzt DOM [`File`](/de/docs/Web/API/File) Objekte aus Komponentencode instanziieren, indem Sie new File verwenden, anstatt ein `nsIDOMFile` direkt instanziieren zu müssen.
- Der `nsTPtrArray` Array-Typ wurde entfernt. Seine Funktionalität ist nun vollständig in `nsTArray` verfügbar, das nun die `SafeElementAt()` Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Worker

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers zuzugreifen. XPConnect wurde in Worker-Kontexten deaktiviert seit [Firefox Fehler 649537](https://bugzil.la/649537).

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn es auf den Wert von `contentDocument` angewendet wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrapped Add-ons können jetzt Chrome mit einer `chrome.manifest` Datei laden.
- XUL-Bilder schrumpfen jetzt in beiden Richtungen im gleichen Verhältnis, wenn maximale Größen angegeben werden.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Header-Datei `jspubtd.h` automatisch hinzugefügt, wenn nötig. Manuelle Inklusionen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion` Flag kann im chrome.manifest verwendet werden, um die Gecko-Kompatibilitätsversion anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt nun Skripte aus dem Startup-Cache, sofern möglich.
- Das Attribut `ownerWindow` wurde aus der `nsIAccessNode` Schnittstelle entfernt.
- Die `nsIDOMStorageWindow` Schnittstelle wurde in die `nsIDOMWindow` Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal` Schnittstelle wurden in die `nsIDOMWindow` Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt bis Firefox 9 für die Kompatibilität verfügbar.
- Um die Leistung zu verbessern, wurde die Callback-Behandlung für asynchrone Places-Datenbank-Updates geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für sowohl Fehler- als auch Erfolg-Zustandbehandlungen ersetzen.
- Das `KIND_MAPPED` Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `explicit` Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager` Schnittstelle hat ein neues `resident` Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Die `nsINetworkLinkService` Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der Netzwerkverbindung an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgesetzt.
- Die `nsISelection2` Schnittstelle wurde in die `nsISelectionPrivate` Schnittstelle integriert.
- Die `nsISelection3` Schnittstelle wurde in die `nsISelection` Schnittstelle integriert.
- Das `nsISessionStartup` Attribut state ist jetzt ein `jsval` anstatt eines Strings, aus Leistungsgründen.
- Das `nsIDocShell` Attribut `isActive` ist jetzt `false` für minimierte Fenster.
- Die `nsIDownloadHistory.addDownload()` Methode speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory` Schnittstelle wurde ebenfalls entfernt. Worker können weiterhin mit den `Worker` und `ChromeWorker` Konstruktoren erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus gewechselt wird, erhält es ein `sizemodechange` Ereignis.
- Sie können jetzt [die `extensions.autoDisableScopes` Präferenz verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons von bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument` Eigenschaft auf [`Document`](/de/docs/Web/API/Document) Objekten erlaubt Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenständiges Bild, Video oder Audiodatei), anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie beispielsweise eine andere Benutzeroberfläche in dieser Situation präsentieren möchten (wie z. B. das Hinzufügen von kontextuellen Elementen je nach diesem Fall anders zu handhaben).
- Sie können jetzt einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel zeigt "about:config?filter=sessionstore" nur sitzungsspeicherbezogene Präferenzen an.

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
