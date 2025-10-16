---
title: Firefox 8 Versionshinweise für Entwickler
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Add-On- und [Mozilla-Projektentwickler](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Veröffentlichung voll auszuschöpfen.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox-Bug 664299](https://bugzil.la/664299))
- Die Methode [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add) unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor unterstützte es nur ein Element. (siehe [Firefox-Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Keine Elemente haben diese Schnittstelle seit vor Firefox 4 implementiert.
- Die HTML5-"Kontextmenü"-Funktion (`contextmenu`-Attribut), die es ermöglicht, spezifische benutzerdefinierte Elemente zum nativen Kontextmenü hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox-Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde für alle Elemente hinzugefügt.
- Die {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente unterstützen nun das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung zu spezifizieren.
- Bei den meisten Elementen wird nun ein Focus-Ring darum gezeichnet, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer dann das Element fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht länger mehrere \<label>-Elemente aus, was dazu führte, dass Firefox in der Vergangenheit nicht mehr reagierte (siehe [Firefox-Bug 646157](https://bugzil.la/646157)).

### DOM

- Die Methode [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML) wurde implementiert.
- `BlobBuilder` hat jetzt eine `getFile()`-Methode, die den Inhalt des Blobs als Datei zurückgibt.
- Die Schnittstelle [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) (Teil der FileAPI) wurde implementiert.
- Das Ereignishandling in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können jetzt [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File) und [`FileList`](/de/docs/Web/API/FileList) Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen kehren Sie beim Verlassen einer Überschrift durch Drücken der Eingabetaste oder beim Verlassen des Listeneditiervorgangs durch zweimaliges Drücken der Eingabetaste zu einem Absatzbearbeitungsmodus zurück (d.h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken), anstatt Zeilen durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler wurde behoben, der verhinderte, dass Justierung ordnungsgemäß wirksam wird, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wurde.
- Ein Fehler wurde behoben, der das Drücken der Entfernen- oder Rückschritttaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs auf den vorherigen `contenteditable`-Block wirken ließ, falls vorhanden.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt nun dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringify_.
- Die HTML5-Eigenschaft `selectionDirection` ermöglicht es, die Richtung der Auswahl in einem editierbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat jetzt eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)-Attribut spiegelt nun korrekt als _enumerierten Wert_ wider.
- Die [`crossOrigin`-Eigenschaft](/de/docs/Web/HTML/Reference/Attributes/crossorigin) standardmäßig auf "Anonymous", wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies auf Basis einzelner Seiten überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, stimmen jetzt mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder `undefined` aufgerufen werden, passen nun mit dem leeren String und somit zu allen Strings.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardisierten) Methoden `watch()` und `unwatch()` implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert nun {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}} Werte gemäß der Spezifikation.
- Silbentrennungregeln für viele neue Sprachen wurden beim Einsatz von {{ cssxref("hyphens") }} hinzugefügt.
- Die Handhabung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation näher zu kommen.
- In der Vergangenheit hatte {{ cssxref("text-decoration") }} im Quirks-Modus eine angepasste Linienstärke und Position auf untergeordnetem Text, um dem untergeordneten Element zu entsprechen. Jetzt ist die Darstellung im Standardmodus und im Quirksmodus ähnlicher.
- Die horizontale Positionierung für Elemente wurde in vielen Fällen näher an die Spezifikation gebracht. Dokumentation dazu folgt noch, aber vorerst siehe [Firefox-Bug 682780](https://bugzil.la/682780), Kommentar 23 für Einzelheiten.
- [SVG-Bilder werden jetzt richtig skaliert](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds) wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Kodierung akzeptiert, gemäß diesen RFCs.
- Der MIME-Headerfeld-Parser (`Content-Disposition`) erfordert nun "=" in den Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`send()`](/de/docs/Web/API/WebSocket/send) gibt nun nicht mehr fälschlicherweise einen Booleschen Wert zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objektmethode [`close()`](/de/docs/Web/API/WebSocket/close) stimmt jetzt mit dem aktuellen Entwurf des Standards überein, und Schließungsereignisse verwenden nun korrekt die [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle.
- Das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt `extensions`-Attribut wird nun unterstützt.
- Der WebSocket-Konstruktor unterstützt nun ein Array von Protokollen sowie einen einzelnen Protokollstring.
- Gemischter Inhalt ist mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicherem Inhalt aus herstellen.
- Verbindungsfehler mit WebSockets lösen nun den `onerror`-Handler aus.
- [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox-Bug 674890](https://bugzil.la/674890), [Firefox-Bug 674527](https://bugzil.la/674527) und [Firefox-Bug 674716](https://bugzil.la/674716)).
- Die deflate-stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde abgelehnt und brach die Kompatibilität mit einigen Seiten.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun mit CORS-Zustimmung erlaubt sein.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Auslegung negativer Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object)-Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-On-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie wahrscheinlich vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in speziellen Kompartimenten zu erleichtern.

#### Andere XPCOM-bezogene Änderungen

- Sie können nun DOM [`File`](/de/docs/Web/API/File)-Objekte aus Komponentencode instanziieren, indem Sie new File verwenden, anstatt ein `nsIDOMFile` direkt zu instanziieren.
- Der `nsTPtrArray`-Arraytyp wurde entfernt. Seine Funktionalität ist nun vollständig auf `nsTArray` verfügbar, das nun die `SafeElementAt()`-Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Workers

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in Worker-Kontexten deaktiviert seit [Firefox-Bug 649537](https://bugzil.la/649537).

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn er auf den Wert von `contentDocument` aufgerufen wurde, wurde behoben. Seit Firefox 3 führte dies zu Fehlern, anstatt korrekt zu funktionieren.
- Bootstrapped-Addons können nun Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen jetzt mit dem gleichen Verhältnis in beiden Richtungen, wenn maximale Größen angegeben sind.

### Änderungen am Build-System

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Headerdatei `jspubtd.h` bei Bedarf automatisch inkludiert. Manuelle Inklusionen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Gecko-Version-Kompatibilität anzugeben.

### Schnittstellenänderungen

- Die Methode `mozIJSSubScriptLoader.loadSubScript()` lädt nun Skripte aus dem Startcache, wenn möglich.
- Das `ownerWindow`-Attribut wurde aus der `nsIAccessNode`-Schnittstelle entfernt.
- Die `nsIDOMStorageWindow`-Schnittstelle wurde in die `nsIDOMWindow`-Schnittstelle integriert.
- Alle Mitglieder der `nsIDOMWindowInternal`-Schnittstelle wurden in die `nsIDOMWindow`-Schnittstelle verschoben. Die Schnittstelle selbst (ohne Mitglieder) bleibt zur Kompatibilität bis Firefox 9 verfügbar.
- Um die Leistung zu verbessern, wurde das Callback-Handling für asynchrone Places-Datenbank-Updates geändert. Siehe die neuen Methoden `mozIVisitInfoCallback.handleResult()` und `mozIVisitInfoCallback.handleError()`, die die alte Einzelmethode für sowohl Fehler- als auch Erfolgskonditionshandhabung ersetzen.
- Das `KIND_MAPPED`-Attribut des `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße expliziter Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge an genutztem physikalischem Speicher meldet.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den Typ der Netzwerkverbindung an, die verwendet wird. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Android-Unterstützung wurde wegen wahrgenommener Sicherheitsbedenken zurückgezogen.
- Die `nsISelection2`-Schnittstelle wurde in die `nsISelectionPrivate`-Schnittstelle integriert.
- Die `nsISelection3`-Schnittstelle wurde in die `nsISelection`-Schnittstelle integriert.
- Das `nsISessionStartup`-Attribut `state` ist nun ein `jsval` statt eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist nun `false` für minimierte Fenster.
- Die Methode `nsIDownloadHistory.addDownload()` speichert nun das Ziel, wo der Download auf dem lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Workers können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Andere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus umschaltet, erhält es ein `sizemodechange`-Ereignis.
- Sie können jetzt [die `extensions.autoDisableScopes`-Einstellung verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons von bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft bei [`Document`](/de/docs/Web/API/Document)-Objekten lässt Sie bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie ein eigenständiges Bild, Video oder Audio-Datei) anstatt ein vollständiges, standardmäßiges DOM-Dokument. Dies kann nützlich sein, wenn Sie beispielsweise in dieser Situation eine andere Benutzeroberfläche präsentieren möchten (wie etwa das Hinzufügen kontextueller Elemente je nach Fall unterschiedlich).
- Sie können nun einen Filter angeben, wenn Sie `about:config` öffnen; zum Beispiel zeigt `about:config?filter=sessionstore` nur sitzungsbezogene Präferenzen an.

<!-- cSpell:ignore sessionstore -->
