---
title: Firefox 8 für Entwickler
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-on- und [Mozilla-Projektenentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version voll auszunutzen.

## Änderungen für Webentwickler

### HTML

- Die {{ domxref("HTMLImageElement") }}-Eigenschaft `crossOrigin` wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut wurde zum {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox-Bug 664299](https://bugzil.la/664299))
- Die {{ domxref("HTMLSelectElement","","add()") }}-Methode unterstützt jetzt entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor wurde nur ein Element unterstützt. (siehe [Firefox-Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Kein Element hat diese Schnittstelle seit vor Firefox 4 implementiert.
- Die HTML5-"Kontextmenü"-Funktion (`contextmenu`-Attribut), mit der Sie benutzerspezifische Elemente zum nativen Kontextmenü hinzufügen können, wird jetzt unterstützt (die Implementierung ist immer noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das {{ domxref("HTMLElement.accessKeyLabel") }}-Attribut wurde zu allen Elementen hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen nun das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten jetzt einen Fokusring, wenn sie mit dem `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht mehr mehrere `<label>`-Elemente aus, was früher dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die {{ domxref("Element.insertAdjacentHTML","insertAdjacentHTML") }}-Methode wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die {{ domxref("FileReaderSync") }}-Schnittstelle (Teil der FileAPI) wurde implementiert.
- Die Ereignisbehandlung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können nun {{ domxref("window.postMessage()") }} verwenden, um {{ domxref("File") }}- und {{ domxref("FileList") }}-Objekte zwischen Fenstern zu übertragen.
- Beim Bearbeiten von {{ domxref("HTMLelement.contenteditable", "contenteditable") }}-Bereichen wird beim Verlassen einer Überschrift durch Drücken der Eingabetaste oder beim Verlassen des Listeneditiemodus durch zweimaliges Drücken der Eingabetaste nun in den Absatz-Eingabemodus zurückgekehrt (d. h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) anstelle von Zeilentrennenden {{ HTMLElement("br") }}-Elementen.
- Ein Fehler wurde behoben, der verhinderte, dass die Rechtfertigung richtig angewendet wurde, wenn sie auf die erste Zeile in einem {{ domxref("HTMLelement.contenteditable", "contenteditable") }}-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der dazu führte, dass das Drücken der Löschtaste oder der Rücktaste am Anfang eines {{ domxref("HTMLelement.contenteditable", "contenteditable") }}-Bereichs den vorherigen `contenteditable`-Block beeinflusste, falls vorhanden.
- {{ domxref("Document.getSelection()") }} gibt nun dasselbe `Selection`-Objekt zurück wie {{ domxref("window.getSelection()") }}, statt es zu einem String umzuwandeln.
- Die HTML5-Eigenschaft `selectionDirection` ermöglicht es, die Richtung der Auswahl in einem bearbeitbaren Text festzulegen.
- {{ domxref("HTMLMediaElement") }} hat nun eine `seekable`-Eigenschaft, die ein {{ domxref("TimeRanges") }}-Objekt zurückgibt.
- Das {{ domxref("HTMLMediaElement") }}-`preload`-Attribut widerspiegelt nun korrekt als ein _enumerated value_.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Attributes/crossorigin) hat den Standardwert "Anonymous", wenn ein ungültiger Wert verwendet wird.
- {{ domxref("navigator.cookieEnabled") }} gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies standortbezogen überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, prüfen nun die Zeichenfolge "undefined".
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder mit `undefined` aufgerufen werden, durchsuchen nun die leere Zeichenfolge und matchen daher jede Zeichenfolge.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardmäßigen) `watch()`- und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert nun {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen beim Verwenden von {{ cssxref("hyphens") }} hinzugefügt.
- Die Behandlung von {{ cssxref("background-size") }} wurde überarbeitet, um die Spezifikation genauer zu erfüllen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus die Linienstärke und -position an den Nachkommenden Text angepasst, um diesen anzupassen. Jetzt sind die Rendering-Modi Standard und Quirks ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen besser mit der Spezifikation in Einklang gebracht. Die Dokumentation hierzu ist in Vorbereitung, aber vorerst finden Sie Details in [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23.
- [SVG-Bilder werden jetzt korrekt skaliert](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden, wie in den {{ RFC("2231") }} oder {{ RFC("5987") }} Kodierungen vorgesehen, nicht mehr als Trennzeichen akzeptiert.
- Der MIME-Headerfeldparser (`Content-Disposition`) erfordert nun "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`send()`](/de/docs/Web/API/WebSocket/send) gibt fälschlicherweise keinen Booleschen Wert mehr zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`close()`](/de/docs/Web/API/WebSocket/close) entspricht nun dem aktuellen Entwurf des Standards, und Schlussevents verwenden nun korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Das Attribut `extensions` des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts wird jetzt unterstützt.
- Der WebSocket-Konstruktor unterstützt jetzt ein Array von Protokollen sowie eine einzelne Protokollzeichenkette.
- Gemischte Inhalte sind mit WebSockets nicht erlaubt, das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicherem Inhalt aus öffnen.
- Verbindungsfehler mit WebSockets lösen jetzt den `onerror`-Handler aus.
- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527) und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die "deflate-stream"-Erweiterung für WebSockets wurde deaktiviert; sie wurde veraltet und führte zu Inkompatibilitäten mit einigen Seiten.

### WebGL

- [CORS genehmigte bereichsübergreifende Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun zugelassen werden.
- Kreuzprozesstechnisches Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut im Top-Level-{{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation negativer Zeilennummerierungen für das `align`-Attribut in {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwickler-Tools

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, welche eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Lesen Sie [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons), um eine Anleitung zu den Änderungen zu erhalten, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass Binärkomponenten neu kompiliert werden, wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in bestimmten Bereichen zu erleichtern.

#### Andere XPCOM-bezogene Änderungen

- Sie können nun DOM-{{ domxref("File") }}-Objekte aus Komponentencode instanziieren, indem Sie new File verwenden, anstatt ein `nsIDOMFile` direkt zu instanziieren.
- Der Arraytyp `nsTPtrArray` wurde entfernt. Seine Funktionalität ist jetzt vollständig auf `nsTArray` verfügbar, das nun die `SafeElementAt()`-Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte aus ChromeWorkers zuzugreifen. XPConnect wurde in Worker-Kontexten ab [Firefox-Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in {{ domxref("document.execCommand()") }}, der beim Aufrufen auf den Wert von `contentDocument` auftrat, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können nun Chrome über eine `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt mit demselben Verhältnis in beide Richtungen, wenn maximale Größen angegeben werden.

### Änderungen am Buildsystem

- Die folgenden Buildkonfigurationsoptionen wurden entfernt:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Headerdatei `jspubtd.h` automatisch eingefügt, wenn nötig. Manuelle Einfügungen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr erforderlich.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt nun Skripte aus dem Start-Cache, wenn möglich.
- Das Attribut `ownerWindow` wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde die Rückrufbehandlung für asynchrone Places-Datenbankaktualisierungen geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für die Fehler- und Erfolgsgeschichtenbehandlung ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitenarten `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Verbindungstyp des verwendeten Netzwerks an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Unterstützung für Android wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2`-Schnittstelle wurde in die `nsISelectionPrivate`-Schnittstelle integriert.
- Die `nsISelection3`-Schnittstelle wurde in die `nsISelection`-Schnittstelle integriert.
- Der `state`-Attribut `nsISessionStartup` ist jetzt ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `isActive`-Attribut von `nsIDocShell` ist jetzt `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert jetzt das Ziel, wo der Download im lokalen Dateisystem gespeichert ist.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Workers können weiterhin mit den `Worker`- und `ChromeWorker`-Konstruktoren erstellt werden.

### Sonstige Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild und Fenstermodus wechselt, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt die [Präferenz `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons aus bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft auf {{ domxref("Document") }}-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d. h. etwas wie ein eigenständiges Bild, Video oder eine Audiodatei) anstelle eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann beispielsweise nützlich sein, wenn Sie in dieser Situation eine andere Benutzeroberfläche präsentieren möchten (wie z. B. das Hinzufügen kontextueller Elemente unterschiedlich je nach diesem Fall).
- Sie können jetzt einen Filter beim Öffnen von `about:config` angeben; zum Beispiel zeigt "about:config?filter=sessionstore" nur Sitzungsspeicherung-bezogene Einstellungen an.

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
