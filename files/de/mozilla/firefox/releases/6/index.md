---
title: Firefox 6 Versionshinweise für Entwickler
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsleiste erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt durch seinen Container abgeschnitten, wenn die Ecken des Containers mit der {{ cssxref("border-radius") }}-Eigenschaft abgerundet wurden.
- Textfelder von {{ HTMLElement("form") }}-Elementen mit {{ HTMLElement("input") }} unterstützen nicht mehr das XUL-Attribut [`maxwidth`](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Property/maxWidth); dies war nie beabsichtigt und steht im Widerspruch zur HTML-Spezifikation. Sie sollten stattdessen das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }}-Elements [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) ignorierten bisher Müll nach einer gültigen Farbdefinition; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "rot blau" als Farbe früher als "rot" behandelt, wenn es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt korrekt auf 0px gesetzt werden; vorher wurden diese willkürlich auf 300px gesetzt, wenn Sie dies versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Daten-Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht Ihnen den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt jetzt standardmäßig am Anfang des Textes anstatt am Ende platziert. Dies macht das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe zu setzen, die von Textdekorationen verwendet wird, wie z. B. Unterstreichungen, Überstreichungen und Durchstreichungen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die zu einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textdekorationen festzulegen, wie z. B. Unterstreichungen, Überstreichungen und Durchstreichungen. Stile umfassen einfache Striche, doppelte Striche, wellenförmige Linien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft lässt Sie steuern, wie die Silbentrennung von Wörtern beim Zeilenumbruch gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente zu steuern (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu stylen, das den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die `azimuth`-CSS-Eigenschaft wird nicht mehr unterstützt, da wir den wenigen Code entfernt haben, den wir für die `aural`-Mediengruppe hatten. Sie war nie wesentlich implementiert, daher machte es mehr Sinn, die überholte Implementierung vorerst zu entfernen, statt zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse in der Quirks-Modus für Klassenselektoren nicht angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Unregelmäßigkeit wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde zur `-moz-appearance`-CSS-Eigenschaft hinzugefügt, um in Windows-Systemen undurchsichtige Regionen in Aero Glass-Effekten auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) änderte, wie das `#`-Symbol in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, beeinflussen könnte, wenn es nicht escaped ist.

### DOM

- [Verwendung von Media Queries aus dem Code heraus](/de/docs/Web/CSS/Guides/Media_queries/Testing)
  - : Sie können nun das Ergebnis einer Media Query-Zeichenfolge programmatisch mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern die Interpretation von einem oder mehreren Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse zu senden, genau wie ein lokal erstelltes DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde komplett entfernt.
- `BlobBuilder` wurde jetzt implementiert, momentan allerdings mit Prefix (also müssen Sie `MozBlobBuilder` verwenden).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die sie verwendeten, wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis umfasst jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode `abort()` der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft jetzt eine Ausnahme aus, wenn sie verwendet wird, ohne dass ein Dateilesen im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstatt nur Zeichenfolgen von einem Fenster zu einem anderen zu übergeben.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte, die Sie an die Methoden `pushState()` und `replaceState()` übergeben, zu serialisieren; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher mit zyklischen Verweisgraphen).
- Sie können jetzt [erkennen, wann ein Druckauftrag initiiert und abgeschlossen wurde](/de/docs/Web/CSS/Guides/Media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` lauschen.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft wird jetzt unterstützt; Sie sollten diese statt der nicht standardisierten Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt korrekt schreibgeschützt.
- DOM-Views, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Implementierungsdetail, das unnötig Dinge verkomplizierte, also wurden sie entfernt. Wenn Ihnen diese Änderung auffällt, machen Sie wahrscheinlich etwas falsch.
- Der Parameter `useCapture` der Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) von `EventTarget` ist jetzt optional, so wie in WebKit (und gemäß der neuesten Spezifikationsversion).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, wodurch der Zugriff auf die [globalen Attributen `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements ermöglicht wird.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs beim Eingeben in die Adressleiste nicht mehr den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, beispielsweise keinen Zugriff auf DOM-Methoden und Ähnliches mehr haben. Diese URLs funktionieren jedoch wie bisher, wenn sie vom Skript verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die dies laut Spezifikation eigentlich nicht erlauben sollten. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise war nie offiziell unterstützt und wurde nicht weit verbreitet praktiziert, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototypimplementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie aus [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von unpräfixierten WebSockets verwendet wird.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde korrigiert, um richtig interpretierte ASCII-Zeichen verfolgt von einem Backslash als genau dieses Zeichen selbst zu behandeln. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("_") ersetzt.
- Der Wert des Pfadfeldes von `Set-Cookie`-Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge und nicht als Begrenzungszeichen behandelt. **Diese Änderung kann die Kompatibilität mit einigen Websites betreffen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungs-Header wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Unterstützung für Mikrosummen wurde entfernt; diese wurden nie weit verbreitet verwendet, waren nicht sehr auffindbar, und die Weiterführung der Unterstützung machte Verbesserungen der Places-Architektur (Lesezeichen und Verlauf) schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisierung von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltensflag](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad zu laden, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert den Aufbau von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects)-Methode zum Entfernen mehrerer Objekte auf einmal aus dem Array.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM File API im Chrome-Code](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File API schon immer aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt das Angeben einer lokalen Dateipfad-Zeichenfolge, wenn er aus Chrome verwendet wird. Außerdem können Sie die Datei, auf die zugegriffen werden soll, unter Verwendung eines `nsIFile`-Objekts mit der DOM File API angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge unter Verwendung der neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das es Ihnen ermöglicht, anzugeben, dass die ausgewählte Datei zur Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden sollte, sofern vorhanden. Dieses Attribut hat keine Wirkung im Privaten Modus.
- Methoden von `nsINavBookmarkObserver` mit Item-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die spezifizierte Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut sie nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet jetzt Unterstützung für die Angabe der Art des beschriebenen Speichers (gemapped, Heap oder andere).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die das `nsIURI` ohne das ref-Mitglied klonen, und `nsIURI.equalsExceptRef()`, die es mit einem anderen `nsIURI` vergleicht und dabei das ref-Mitglied ignoriert.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zum Umgang mit HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrie-Unterstützung, um die Erfassung von Telemetriedaten zur Darstellung von Histogrammen für Leistungsüberwachungszwecke zu ermöglichen. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
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

### Andere Änderungen

- [Verwendung von Präferenzen aus Anwendungscode](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API steht zur Verfügung, um einfach auf Präferenzen zuzugreifen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.
