---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5 {{ HTMLElement("progress") }} Element, das Ihnen erlaubt, eine Fortschrittsanzeige zu erstellen, wird nun unterstützt.
- Das Parsen des HTML5 {{ HTMLElement("track") }} Elements, das Textspuren für Media-Elemente spezifiziert, wird nun unterstützt. Dieses Element sollte nun im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }} Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der {{ cssxref("border-radius") }} Eigenschaft abgerundet wurden.
- Textfelder der {{ HTMLElement("form") }} Elemente mit dem {{ HTMLElement("input") }} Feldtyp unterstützen nicht mehr die XUL [`maxwidth`](/de/docs/XUL/Property/maxwidth) Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2d) Eigenschaften `fillStyle` und `strokeStyle` ignorierten früher beliebigen Müll nach einer gültigen Farbdefinition; jetzt wird dies korrekt als Fehler behandelt. Beispielsweise wurde "red blue" als "red" behandelt, wenn es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }} Elementen kann nun korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie das versuchten.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }} Element den Fokus erhält, wird der Texteinfügepunkt nun standardmäßig am Anfang des Textes platziert, anstatt am Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe zu setzen, die für Textdekorationen wie Unterstreichungen, Überstreichen und Durchstreichen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil der Textdekorationen festzulegen, wie Unterstreichungen, Überstreichen und Durchstreichen. Zu den Stilen gehören Einzelstriche, Doppelstriche, gewellte Linien, gepunktete Linien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu kontrollieren, wie die Trennung von Wörtern während des Zeilenumbruchs gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen erlaubt, die vertikale oder horizontale Orientierung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu kontrollieren.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudo-Element, das es Ihnen erlaubt, den Bereich eines {{ HTMLElement("progress") }} Elements zu stylen, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Weitere Änderungen

- Die `@-moz-document` Eigenschaft hat eine neue `regexp()` Funktion, die es Ihnen erlaubt, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die `azimuth` CSS-Eigenschaft wird nicht mehr unterstützt, da wir den wenigen Code, den wir für die `aural` Mediengruppe hatten, entfernt haben. Es war nie signifikant implementiert, daher war es sinnvoller, die unordentliche Implementierung vorübergehend zu entfernen, anstatt sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }} Pseudoklasse nicht auf Klassenselektoren angewendet, wenn sich der Browser im Quirks-Modus befand; beispielsweise funktionierte `.some-class:hover` nicht. Dieser Fehler wurde behoben.
- Die {{ cssxref(":indeterminate") }} Pseudoklasse kann auf {{ HTMLElement("progress") }} Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass` Wert wurde zur `-moz-appearance` CSS-Eigenschaft hinzugefügt, um opake Bereiche in Aero Glass Glanzeffekten auf Windows-Systemen auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) änderte die Behandlung des Hash-Zeichens (#) in Daten-URLs, was CSS Stylesheets brechen könnte, die ein solches Symbol enthalten, ohne dass es entkommen ist.

### DOM

- [Medienabfragen im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Medienabfragezeichenfolge programmatisch mit der [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) Methode und der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern es, ein oder mehrere Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads zu interpretieren.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse genauso wie lokal erstellte DOM-Ereignisse zu senden.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde endgültig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl er derzeit mit einem Präfix versehen ist (Sie müssen also `MozBlobBuilder` verwenden).
- Das `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die [`DocumentType`](/de/docs/Web/API/DocumentType) Objekteigenschaften `entities` und `notations`, die nie implementiert wurden und immer `null` zurückgegeben haben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration` Schnittstelle und die `document.domConfig` Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange` Ereignis enthält jetzt korrekt [die `newURL` und `oldURL` Felder](/de/docs/Web/API/Window/hashchange_event).
- Die [`FileReader`](/de/docs/Web/API/FileReader) Schnittstelle `abort()` Methode wirft jetzt eine Ausnahme, wenn sie verwendet wird, ohne dass ein Dateilesen im Gange ist.
- Die [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) Methode verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um Ihnen zu ermöglichen, JavaScript-Objekte anstelle von nur Zeichenfolgen von einem Fenster zu einem anderen zu übergeben.
- Die [`window.history`](/de/docs/Web/API/Window/history) API verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die `pushState()` und `replaceState()` Methoden übergeben; dies ermöglicht es Ihnen, komplexere Objekte (einschließlich solcher, die zykliche Referenzgrafen enthalten) zu verwenden.
- Sie können jetzt [erkennen, wann ein Druckvorgang initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie die neuen `beforeprint` und `afterprint` Ereignisse überwachen.
- Die `document.strictErrorChecking` Eigenschaft wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft wird jetzt unterstützt; Sie sollten diese verwenden, anstelle der nicht standardisierten `getPreventDefault()` Methode, um festzustellen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die [`window.top`](/de/docs/Web/API/Window/top) Eigenschaft ist jetzt korrekt schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein wenig Implementierungsdetail, das die Dinge unnötig verkomplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die `EventTarget` Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) Parameter `useCapture` ist jetzt optional, wie es in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer` Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekts wurde durch die `responseType` und `response` Eigenschaften ersetzt.
- Die [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft wurde zur [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinzugefügt, die den Zugriff auf die [`data-*` global attributes](/de/docs/Web/HTML/Global_attributes/data-*) eines Elements ermöglicht.
- Die [`CustomEvent`](/de/docs/Web/API/CustomEvent) Schnittstelle wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:` und `javascript:` URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Dies bedeutet, dass Skript geladen durch Eingabe von `javascript:` URLs in die Adressleiste keinen Zugang mehr zu DOM-Methoden und dergleichen hat, zum Beispiel. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie durch Skript verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new` Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die das nicht erlaubt haben sollten, gemäß der Spezifikation. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new` Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird nun unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` eintritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Außerdem wurde das globale `WebSocket` Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von nicht-prefixed WebSockets verwendet wird.

<!---->

- Das Parsen des `Content-Disposition` Headers wurde korrigiert, um ASCII-Zeichen mit umgekehrtem Schrägstrich als genau dieses Zeichen selbst zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes auf `Set-Cookie` Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge behandelt, anstatt als Trenner. **Diese Änderung könnte die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) Anfrage-Header wird nun unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Mikrosummaries wurde entfernt; diese wurden nie weit verbreitet verwendet, waren nicht sehr auffindbar, und ihre fortlaufende Unterstützung erschwerte Verbesserungen der Places (Lesezeichen- und Verlauf) Architektur.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad_ Tool bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die `console.trace()` Methode wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die `openSafeFileOutputStream()` Methode öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Mit der neuen `importRelative()` Methode können Sie ein JavaScript-Code-Modul von einem Pfad aus laden, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert den Aufbau von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects) Methode zum Entfernen mehrerer Objekte gleichzeitig aus dem Array.

### Verwendung des DOM aus dem Chrome

- [Verwendung der DOM-File-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie schon immer die DOM-File-API aus Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File) Konstruktor jetzt die Angabe einer lokalen Pfadnamen-Zeichenfolge, wenn er aus Chrome verwendet wird. Außerdem können Sie mit einem `nsIFile` Objekt die Datei spezifizieren, auf die mit der DOM-File-API zugegriffen werden soll.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge mit den neuen `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING` Konstanten.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs` Attribut, das ermöglicht anzugeben, dass die ausgewählte Datei zur "recent documents" Liste des Benutzers hinzugefügt werden sollte, falls eine vorhanden ist. Dieses Attribut hat keine Auswirkung im privaten Modus.
- `nsINavBookmarkObserver` Methoden mit Element-ID Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die spezifizierte Einstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut es nichts.
- Die `nsIMemoryReporter` Schnittstelle bietet jetzt Unterstützung für die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder andere).
- Das `stateData` Attribut von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref` Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, welche die `nsIURI` ohne das ref-Mitglied klont, und `nsIURI.equalsExceptRef()`, welche sie mit einer anderen `nsIURI` vergleicht, indem das ref-Mitglied ignoriert wird.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zur Behandlung von HTTP-Upgrade-Anfragen über die `nsIHttpChannelInternal.HTTPUpgrade()` Methode.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Unterstützung für Telemetriedaten, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die verwendet werden können, um Histogramme für Leistungstracking-Zwecke zu präsentieren. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox Bug 649534](https://bugzil.la/649534))

### Weitere Änderungen

- [Verwendung von Präferenzen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um Präferenzen leicht zugänglich zu machen; dies steht nur Anwendungscode zur Verfügung und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
