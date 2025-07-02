---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Die Analyse des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Media-Elemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt von seinem Container ausgeschnitten, wenn die Ecken des Containers durch die Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Die Texteingabefelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) haben früher enthaltenen Müll nach einer gültigen Farbangabe ignoriert; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "rot blau" als Farbe früher als "rot" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt ordnungsgemäß auf 0px gesetzt werden; zuvor wurden sie willkürlich auf 300px gesetzt, wenn Sie versuchten, dies zu tun.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt jetzt standardmäßig an den Anfang des Textes und nicht ans Ende gesetzt. Dies macht das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe zu setzen, die für Textdekorationen wie Unterstriche, Oberstriche und Durchstreichungen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textdekorationen wie Unterstrichen, Oberstrichen und Durchstreichungen festzulegen. Die Stile umfassen Einzelstriche, Doppelschläge, wellige Linien, gepunktete Linien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu steuern, wie die Silbentrennung von Wörtern beim Umbruch gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, mit der Sie die vertikale oder horizontale Ausrichtung bestimmter Elemente steuern können (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudo-Element, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Weitere Änderungen

- Die Eigenschaft `@-moz-document` hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu vergleichen.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da wir den wenig vorhandenen Code für die `aural` Mediengruppe entfernt haben. Es war nie signifikant implementiert, daher ergab es mehr Sinn, die unvollständige Implementierung vorerst zu entfernen, anstatt sie auszubessern.
- In der Vergangenheit wurde die Pseudoklasse {{ cssxref(":hover") }} nicht auf Klassenselektoren angewendet, wenn der Quirks-Modus aktiv war; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Eigenheit wurde entfernt.
- Die Pseudoklasse {{ cssxref(":indeterminate") }} kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardmäßig, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der Wert `-moz-win-exclude-glass` wurde zur CSS-Eigenschaft `-moz-appearance` hinzugefügt, um opake Bereiche in Aero Glass-Effekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash (#)-Symbol in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, brechen kann, wenn es nicht entkommen ist.

### DOM

- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Media Query-Zeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern das Interpretieren eines oder mehrerer Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-sent events](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server aufzufordern, Ereignisse zu senden, genau wie bei einem lokal erstellten DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es derzeit noch ein Präfix hat (deshalb müssen Sie `MozBlobBuilder` verwenden).
- Document.height und Document.width wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die `entities` und `notations` Eigenschaften des `DocumentType`-Objekts, die nie implementiert waren und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und wurden inzwischen aus der DOM-Spezifikation entfernt.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der Schnittstelle [`FileReader`](/de/docs/Web/API/FileReader) wirft jetzt eine Ausnahme, wenn sie verwendet wird, und kein Datei-Lesevorgang in Arbeit ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt [den strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte statt nur Zeichenketten von einem Fenster an ein anderes zu übergeben.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht Ihnen die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Referenzgrafen enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang eingeleitet und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie den neuen `beforeprint`- und `afterprint`-Ereignissen lauschen.
- Die `document.strictErrorChecking`-Eigenschaft wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft wird jetzt unterstützt; Sie sollten diese anstelle der nicht standardmäßigen `getPreventDefault()`-Methode verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis aufgerufen wurde.
- Die [`window.top`](/de/docs/Web/API/Window/top) Eigenschaft ist jetzt ordentlich nur lesbar.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein kleines Implementierungsdetail, das die Dinge unnötig komplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) des `EventTarget` hat jetzt einen optionalen `useCapture`-Parameter, wie es in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`]-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft wurde zur [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinzugefügt, um den Zugriff auf die [globalen Attribute `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements zu ermöglichen.
- Die [`CustomEvent`](/de/docs/Web/API/CustomEvent) Schnittstelle wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:` und `javascript:` URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in der Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch Eingabe von `javascript:` URLs in die Adressleiste geladen werden, beispielsweise keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie bisher, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die dies nicht erlauben sollten, gemäß der Spezifikation. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators in dieser Weise wurde nie offiziell unterstützt und wurde nicht weit verbreitet angewendet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototypimplementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt ausgelöst, wenn der Wert von `aria-busy` sich ändert.
- Ein Attributänderungsereignis wird jetzt korrekt ausgelöst, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf die Protokollversion 07 aktualisiert. Darüber hinaus wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von nicht-präfixierten WebSockets verwendet wird.

<!---->

- Die Interpretation des `Content-Disposition` Headers wurde korrigiert, um ASCII-Zeichen mit Rückwärtsschrägstrichen korrekt als genau dieses Zeichen zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes in `Set-Cookie` Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge behandelt, anstatt als Begrenzungszeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) request header wird jetzt unterstützt; Sie können eine Aktualisierung eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Mikrozusammenfassungen wurde entfernt; diese waren nie weit verbreitet genutzt, waren nicht sehr auffindbar, und ihre fortgesetzte Unterstützung machte Verbesserungen an der Places-Architektur (Lesezeichen und Verlauf) schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um JavaScript-Code auszuprobieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Weitere Informationen finden Sie unter [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls zu laden. Dies erleichtert den Aufbau von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects) Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM File API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie schon immer die DOM File API aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File) Konstruktor jetzt auch die Angabe eines lokalen Pfadnamen-Strings, wenn er aus Chrome verwendet wird. Zusätzlich können Sie die Datei, auf die zugegriffen werden soll, mit der DOM File API unter Verwendung eines `nsIFile` Objekts spezifizieren.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge unter Verwendung der neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das es Ihnen ermöglicht anzugeben, dass die ausgewählte Datei der Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden soll, falls eine vorhanden ist. Dieses Attribut hat keine Wirkung im privaten Browsing-Modus.
- `nsINavBookmarkObserver`-Methoden mit Element-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut sie nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet jetzt Unterstützung für die Angabe der Art des beschriebenen Speichers (zugeordnet, Heap oder andere).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, das die `nsIURI` ohne das ref-Mitglied klont, und `nsIURI.equalsExceptRef()`, das mit einer anderen `nsIURI` vergleicht, wobei das ref-Mitglied ignoriert wird.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details kommen noch._
- `nsIGSettingsCollection`
  - : _Details kommen noch._
- `nsIGSettingsService`
  - : _Details kommen noch._
- `nsIHttpUpgradeListener`
  - : Die Rückruf-Schnittstelle zum Bearbeiten von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klonalgorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen zur Leistungskontrolle verwendet werden. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox-Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox-Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox-Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox-Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox-Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox-Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox-Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox-Bug 649534](https://bugzil.la/649534))

### Weitere Änderungen

- [Verwendung von Voreinstellungen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um einfach auf Voreinstellungen zuzugreifen; dies steht nur Anwendungscode zur Verfügung und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
