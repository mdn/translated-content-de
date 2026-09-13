---
title: Firefox 8 Versionshinweise für Entwickler
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Firefox 8 wurde am 8. November 2011 veröffentlicht. Dieser Artikel bietet Informationen sowohl für [Webentwickler](#änderungen_für_webentwickler) als auch für Entwickler von Add-ons und [Mozilla-Projekten](#änderungen_für_mozilla-_und_add-on-entwickler), um die Funktionen dieser Version vollständig zu nutzen.

## Änderungen für Webentwickler

### HTML

- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) `crossOrigin`-Eigenschaft wurde hinzugefügt und das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut wurde dem {{ HTMLElement("img") }}-Element hinzugefügt. (siehe [Firefox Bug 664299](https://bugzil.la/664299))
- Die [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add)-Methode unterstützt nun entweder ein Element oder den Index eines Elements, vor dem das neue Element eingefügt werden soll. Zuvor unterstützte es nur ein Element. (siehe [Firefox Bug 666200](https://bugzil.la/666200))
- Der `HTMLIsIndexElement`-Konstruktor wurde entfernt. Kein Element hat dieses Interface seit Firefox 4 implementiert.
- Die HTML5-"Kontextmenü"-Funktion (`contextmenu`-Attribut), die es ermöglicht, spezifische benutzerdefinierte Elemente zum nativen Kontextmenü hinzuzufügen, wird nun unterstützt (die Implementierung ist noch experimentell und wartet auf Änderungen in der Spezifikation; siehe [Firefox Bug 617528](https://bugzil.la/617528)).
- Unterstützung für das [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel)-Attribut wurde für alle Elemente hinzugefügt.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente unterstützen nun das `selectionDirection`-Attribut, und ihre `setSelectionRange()`-Methoden wurden aktualisiert, um optional eine Richtung anzugeben.
- Die meisten Elemente erhalten nun einen Fokusring, wenn sie durch das `tabindex`-Attribut fokussierbar gemacht wurden und der Benutzer das Element dann fokussiert.
- In einem Satz verschachtelter {{ HTMLElement("label") }}-Elemente lösen Klickereignisse nicht mehr mehrere `<label>`-Elemente aus, was in der Vergangenheit dazu führte, dass Firefox nicht mehr reagierte (siehe [Firefox Bug 646157](https://bugzil.la/646157)).

### DOM

- Die [`insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML)-Methode wurde implementiert.
- `BlobBuilder` hat nun eine `getFile()`-Methode, die den Inhalt des Blob als Datei zurückgibt.
- Das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interface (Teil des FileAPI) wurde implementiert.
- Die Ereignisverarbeitung in verschachtelten {{ HTMLElement("label") }}s wurde behoben.
- Sie können nun [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwenden, um [`File`](/de/docs/Web/API/File)- und [`FileList`](/de/docs/Web/API/FileList)-Objekte zwischen Fenstern zu übergeben.
- Beim Bearbeiten von [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichen führen das Verlassen einer Überschrift durch Drücken der Eingabetaste oder das Verlassen des Listenbearbeitungsmodus durch zweimaliges Drücken der Eingabetaste nun zur Rückkehr in den Texteingabemodus (d.h. Absätze innerhalb von {{ HTMLElement("p") }}-Blöcken) anstatt Linien durch {{ HTMLElement("br") }}-Elemente zu trennen.
- Ein Fehler, der verhinderte, dass die Rechtfertigung ordnungsgemäß wirksam wird, wenn sie auf die erste Zeile in einem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereich angewendet wird, wurde behoben.
- Ein Fehler, der dazu führte, dass das Drücken von Löschen oder Rücktaste am Anfang eines [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Bereichs den vorherigen `contenteditable`-Block beeinflusste, wenn einer vorhanden ist, wurde behoben.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) gibt nun dasselbe `Selection`-Objekt zurück wie [`window.getSelection()`](/de/docs/Web/API/Window/getSelection), anstatt es zu _stringifizieren_.
- Die HTML5-Eigenschaft `selectionDirection` ermöglicht es, die Richtung der Auswahl in einem editierbaren Text zu definieren.
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) hat nun eine `seekable`-Eigenschaft, die ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurückgibt.
- Das [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)-Attribut spiegelt nun korrekt als _enumerierter Wert_ wider.
- [`crossOrigin` property](/de/docs/Web/HTML/Reference/Attributes/crossorigin) standardmäßig auf "Anonymous" gesetzt, wenn ein ungültiger Wert verwendet wird.
- [`navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled) gibt nun korrekte Informationen zurück, wenn die Standardeinstellung für Cookies standortbezogen überschrieben wird.

### JavaScript

- [`RegExp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und [`RegExp.test()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), die ohne Argumente aufgerufen werden, stimmen nun mit dem String "undefined" überein.
- [`String.search()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/search) und [`String.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match), die ohne Argumente oder mit `undefined` aufgerufen werden, stimmen nun mit dem leeren String überein und passen somit zu jedem String.
- Unterstützung für Beobachtungslisten wurde mit den neuen (nicht standardmäßigen) `watch()`- und `unwatch()`-Methoden implementiert.

### CSS

- {{ cssxref("resolution") }} akzeptiert nun {{cssxref("&lt;number&gt;")}}, nicht nur {{cssxref("&lt;integer&gt;")}}-Werte gemäß der Spezifikation.
- Silbentrennungsregeln wurden für viele neue Sprachen beim Verwenden von {{ cssxref("hyphens") }} hinzugefügt.
- Die Handhabung von {{ cssxref("background-size") }} wurde überarbeitet, um der Spezifikation näher zu kommen.
- In der Vergangenheit wurden in Quirks-Modus bei {{ cssxref("text-decoration") }} Linienstärke und -position auf textuelle Nachkommen angepasst. Jetzt sind die Darstellungen im Standards- und Quirks-Modus sich ähnlicher.
- Die horizontale Positionierung von Elementen wurde in vielen Fällen mehr an die Spezifikation angepasst. Eine Dokumentation dazu folgt, vorerst siehe [Firefox Bug 682780](https://bugzil.la/682780), Kommentar 23 für Details.
- [SVG-Bilder werden nun korrekt skaliert](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds), wenn sie als Hintergrundbilder verwendet werden.

### Netzwerk

- Doppelte Anführungszeichen werden nicht mehr als Trennzeichen für {{ RFC("2231") }} oder {{ RFC("5987") }}-Codierung akzeptiert, gemäß diesen RFCs.
- MIME-Headerfeld-Parser (`Content-Disposition`) erfordert jetzt "=" in Parametern.
- Skripte werden nicht mehr heruntergeladen, wenn JavaScript deaktiviert ist.
- SSL 2.0 wird nicht mehr unterstützt.

### WebSockets

- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt [`send()`](/de/docs/Web/API/WebSocket/send)-Methode gibt nicht mehr fälschlicherweise einen Boolean-Wert zurück.
- Die [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt [`close()`](/de/docs/Web/API/WebSocket/close)-Methode entspricht nun dem aktuellen Entwurf des Standards, und Schließereignisse verwenden nun korrekt das [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interface.
- Das [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt `extensions`-Attribut wird nun unterstützt.
- Der WebSocket-Konstruktor unterstützt nun eine Reihe von Protokollen sowie eine einzelne Protokollzeichenfolge.
- Gemischte Inhalte sind mit WebSockets nicht erlaubt; das heißt, Sie können keine Verbindung zu einem nicht sicheren WebSocket-Server von sicherem Inhalt öffnen.
- Verbindungsfehler mit WebSockets lösen nun den `onerror`-Handler aus.
- [WebSocket](/de/docs/Web/API/WebSockets_API)-API wurde auf den neuesten Entwurf der Spezifikation aktualisiert (siehe [Firefox Bug 674890](https://bugzil.la/674890), [Firefox Bug 674527](https://bugzil.la/674527) und [Firefox Bug 674716](https://bugzil.la/674716)).
- Die deflate-stream-Erweiterung für WebSockets wurde deaktiviert; sie wurde als veraltet eingestuft und verursachte Kompatibilitätsprobleme mit einigen Websites.

### WebGL

- [Cross-Domain-Texturen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) können nun mit CORS-Zustimmung erlaubt werden.
- Cross-Prozess-Rendering mit Direct2D/Direct3D 10.

### MathML

- Unterstützung für das `displaystyle`-Attribut auf dem obersten {{ MathMLElement("math") }}-Element wurde hinzugefügt.
- Die Interpretation von negativen Zeilennummern für das `align`-Attribut auf {{ MathMLElement("mtable") }} wurde korrigiert.

### Entwicklerwerkzeuge

- Das [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) Objekt hat eine neue `dir()`-Methode, die eine interaktive Liste der Eigenschaften eines angegebenen Objekts anzeigt.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 8](/de/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) für einen Leitfaden zu den Änderungen, die Sie vornehmen müssen, um Ihre Add-ons mit Firefox 8 kompatibel zu machen.

> [!NOTE]
> Firefox 8 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox.

### XPCOM

- `Components.utils`
  - : Die neuen Methoden `Components.utils.createObjectIn()` und `Components.utils.makeObjectPropsNormal()` wurden erstellt, um das Erstellen von Objekten in spezifischen Umgebungen zu erleichtern.

#### Weitere XPCOM-bezogene Änderungen

- Sie können nun DOM [`File`](/de/docs/Web/API/File)-Objekte aus dem Komponenten-Code instanziieren, indem Sie new File verwenden, anstatt ein `nsIDOMFile` direkt instanziieren zu müssen.
- Der `nsTPtrArray`-Arraytyp wurde entfernt. Seine Funktionalität ist nun vollständig auf `nsTArray` verfügbar, das nun die `SafeElementAt()`-Methode bietet, wenn es mit einem Zeigertyp instanziiert wird.

### Arbeiter

Es ist nicht mehr möglich, auf XPCOM-Objekte von ChromeWorkers aus zuzugreifen. XPConnect wurde in den Kontexten von Arbeitern gemäß [Firefox Bug 649537](https://bugzil.la/649537) deaktiviert.

### XUL

- Ein Fehler in [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), der auftrat, wenn er auf dem Wert von `contentDocument` aufgerufen wurde, wurde behoben. Seit Firefox 3 hatte dies zu Fehlern geführt, anstatt korrekt zu funktionieren.
- Bootstrap-Add-ons können nun Chrome mit einer `chrome.manifest`-Datei laden.
- XUL-Bilder schrumpfen nun in beide Richtungen mit dem gleichen Verhältnis, wenn maximale Größen angegeben werden.

### Änderungen im Buildsystem

- Die folgenden Build-Konfigurationsoptionen wurden entfernt:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Beim Kompilieren von IDL-Dateien zu Headern wird die Headerdatei `jspubtd.h` automatisch eingeschlossen, wenn nötig. Manuelle Inklusionen von `jspubtd.h` und/oder `jsapi.h` in IDL-Dateien, die jsval oder \[implicit_jscontext] verwenden, sind nicht mehr notwendig.

### Chrome-Registrierung

- Das `platformversion`-Flag kann im chrome.manifest verwendet werden, um die Kompatibilität der Gecko-Version anzugeben.

### Schnittstellenänderungen

- Die `mozIJSSubScriptLoader.loadSubScript()`-Methode lädt nun Skripte aus dem Startcache, wenn möglich.
- Das `ownerWindow`-Attribut wurde aus dem `nsIAccessNode`-Interface entfernt.
- Das `nsIDOMStorageWindow`-Interface wurde in das `nsIDOMWindow`-Interface integriert.
- Alle Mitglieder des `nsIDOMWindowInternal`-Interface wurden in das `nsIDOMWindow`-Interface verschoben. Das Interface selbst (ohne Mitglieder) bleibt bis Firefox 9 zur Kompatibilität verfügbar.
- Um die Leistung zu verbessern, wurde die Rückrufbehandlung für asynchrone Aktualisierungen der Places-Datenbank geändert. Siehe die neuen `mozIVisitInfoCallback.handleResult()`- und `mozIVisitInfoCallback.handleError()`-Methoden, die die alte einheitliche Methode für die Behandlung von Fehler- und Erfolgsbedingungen ersetzen.
- Das `KIND_MAPPED`-Attribut von `nsIMemoryReporter` wurde zugunsten von `KIND_NONHEAP` veraltet, neue Einheitentypen `UNITS_COUNT_CUMULATIVE` und `UNITS_PERCENTAGE` wurden hinzugefügt.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `explicit`-Attribut, das die Gesamtgröße der expliziten Speicherzuweisungen meldet.
- Die `nsIMemoryReporterManager`-Schnittstelle hat ein neues `resident`-Attribut, das die Menge des verwendeten physischen Speichers meldet.
- Die `nsINetworkLinkService`-Schnittstelle hat ein neues Attribut, `linkType`. Dieses Attribut gibt den verwendeten Verbindungstyp an. Alle Betriebssysteme geben derzeit `LINK_TYPE_UNKNOWN` zurück. Die Android-Unterstützung wurde aufgrund wahrgenommener Sicherheitsbedenken zurückgezogen.
- Das `nsISelection2`-Interface wurde in das `nsISelectionPrivate`-Interface integriert.
- Das `nsISelection3`-Interface wurde in das `nsISelection`-Interface integriert.
- Das `nsISessionStartup`-Attribut status ist nun ein `jsval` anstelle eines Strings, aus Leistungsgründen.
- Das `nsIDocShell`-Attribut `isActive` ist nun `false` für minimierte Fenster.
- Die `nsIDownloadHistory.addDownload()`-Methode speichert nun das Ziel, an dem der Download im lokalen Dateisystem gespeichert wird.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

Die `nsIWorkerFactory`-Schnittstelle wurde ebenfalls entfernt. Arbeiter können weiterhin mit den Konstruktoren `Worker` und `ChromeWorker` erstellt werden.

### Weitere Änderungen

- Wenn ein Fenster minimiert, wiederhergestellt oder zwischen Vollbild- und Fenstermodus wechselt, erhält es ein `sizemodechange`-Ereignis.
- Sie können nun [die Einstellung `extensions.autoDisableScopes` verwenden](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations), um die automatische Installation von Add-ons von bestimmten Add-on-Installationsorten zu deaktivieren.
- Die neue `mozSyntheticDocument`-Eigenschaft auf [`Document`](/de/docs/Web/API/Document)-Objekten ermöglicht es Ihnen zu bestimmen, ob ein Dokument synthetisch ist (d.h. etwas wie eine eigenständige Bild-, Video- oder Audiodatei) anstelle eines vollständigen, standardmäßigen DOM-Dokuments. Dies kann nützlich sein, wenn Sie beispielsweise eine andere Benutzeroberfläche in dieser Situation präsentieren möchten (wie das Hinzufügen kontextueller Elemente je nach diesem Fall unterschiedlich).
- Sie können nun bei der Öffnung von `about:config` einen Filter angeben; zum Beispiel zeigt `about:config?filter=sessionstore` nur sitzungsbezogene Einstellungen an.

<!-- cSpell:ignore sessionstore -->
