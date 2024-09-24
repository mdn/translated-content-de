---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird nun unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente angibt, wird nun unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt durch seinen Container abgeschnitten, wenn die Ecken des Containers mit der {{ cssxref("border-radius") }}-Eigenschaft abgerundet wurden.
- Textfelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL [`maxwidth`](/de/docs/XUL/Property/maxwidth)-Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die {{ domxref("CanvasRenderingContext2d") }}-Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} ignorieren nicht länger ungültige Daten nach einer gültigen Farbdefinition; dies wird jetzt korrekt als Fehler behandelt. Beispielsweise wurde "rot blau" als Farbe früher als "rot" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt ordnungsgemäß auf 0px gesetzt werden; bisher wurden diese willkürlich auf 300px gesetzt, wenn Sie das versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes#data-) (`data-*`) wurde hinzugefügt. Die DOM-{{ domxref("element.dataset") }}-Eigenschaft ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt jetzt standardmäßig an den Anfang des Textes und nicht ans Ende gesetzt. Dies macht das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, die Farbe zu setzen, die von Textdekorationen wie Unterstreichungen, Oberlinien und Durchstreichungen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen zu setzen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft lässt Sie den Stil von Textdekorationen wie Unterstreichungen, Oberlinien und Durchstreichungen festlegen. Zu den Stilen gehören einfache Striche, Doppellinien, wellenförmige Linien, gepunktete Linien und dergleichen.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu kontrollieren, wie die Silbentrennung von Wörtern während des Zeilenumbruchs gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, mit dem Sie den Bereich eines {{ HTMLElement("progress") }}-Elements, das den abgeschlossenen Teil einer Aufgabe darstellt, stylen können.

#### Weitere Änderungen

- Die `@-moz-document` Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu vergleichen.
- Die {{ cssxref("azimuth") }}-CSS-Eigenschaft wird nicht mehr unterstützt, da der Code für die `aural` Mediengruppe entfernt wurde. Da sie nie signifikant implementiert wurde, machte es mehr Sinn, die veraltete Implementierung vorerst zu entfernen, anstatt sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }} Pseudoklasse nicht auf Klassenselektoren im Quirks-Modus angewendet; beispielsweise funktionierte `.someclass:hover` nicht. Dieses Verhalten wurde entfernt.
- Die {{ cssxref(":indeterminate") }} Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass` Wert wurde zur `-moz-appearance` CSS-Eigenschaft hinzugefügt, um opake Bereiche in Aero-Glas-Effekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) änderte, wie das Hash-Symbol (#) in Data-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, wenn es nicht escaped ist, brechen kann.

### DOM

- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können das Ergebnis eines Media-Query-Strings nun programmatisch mit der Methode {{ domxref("window.matchMedia()") }} und der Schnittstelle {{ domxref("MediaQueryList") }} testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für die W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern das Interpretieren eines oder mehrerer Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse machen es möglich, dass eine Webanwendung einen Server bittet, Ereignisse zu senden, genau wie lokal erstellte DOM-Ereignisse.

<!---->

- `navigator.securityPolicy`, die schon lange einen leeren String zurückgibt, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl sie vorerst mit einem Präfix versehen ist (Sie müssen `MozBlobBuilder` verwenden).
- Das `Document.height` und `Document.width` wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die `entities` und `notations` Eigenschaften des {{ domxref("DocumentType") }} Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und sind inzwischen aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die `newURL`- und `oldURL`-Felder](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der {{ domxref("FileReader") }}-Schnittstelle wirft jetzt eine Ausnahme, wenn sie verwendet wird, während kein Datei-Leseprozess läuft.
- Die {{ domxref("window.postMessage()") }}-Methode verwendet jetzt [den strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um es Ihnen zu ermöglichen, JavaScript-Objekte statt nur Strings von einem Fenster zu einem anderen zu übergeben.
- Die {{ domxref("window.history") }}-API verwendet jetzt [den strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Graphen von Referenzen enthalten).
- Sie können jetzt [Detektieren, wann das Drucken initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen `beforeprint`- und `afterprint`-Ereignisse horchen.
- Die `document.strictErrorChecking`-Eigenschaft wurde entfernt, da sie nie implementiert und aus der DOM-Spezifikation entfernt wurde.
- Die standardisierte {{ domxref("event.defaultPrevented") }}-Eigenschaft wird jetzt unterstützt; Sie sollten diese statt der nicht standardisierten `getPreventDefault()`-Methode verwenden, um zu erkennen, ob {{ domxref("event.preventDefault()") }} auf das Ereignis angewendet wurde.
- Die {{ domxref("window.top") }}-Eigenschaft ist jetzt korrekt schreibgeschützt.
- DOM-Views, die wir nie dokumentiert hatten, wurden entfernt. Dies war ein Implementierungsdetail, das unnötigerweise die Dinge verkomplizierte, daher haben wir es entfernt. Wenn Ihnen diese Änderung auffällt, machen Sie wahrscheinlich etwas falsch.
- Die Funktion[`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) des `EventTarget` hat jetzt den optionalen `useCapture`-Parameter, wie in WebKit (und nach der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die {{ domxref("element.dataset") }}-Eigenschaft wurde zur [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinzugefügt, die den Zugriff auf die [globalen Datenattribute](/de/docs/Web/HTML/Global_attributes#data-) eines Elements ermöglicht.
- Die {{ domxref("CustomEvent") }}-Schnittstelle wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:` und `javascript:` URLs beim Eingeben in die Adressleiste nicht mehr den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer, leerer, Sicherheitskontext erstellt. Dies bedeutet, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator bei mehreren eingebauten Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) zu verwenden, die dies laut Spezifikation nicht erlauben sollten. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, sodass es unwahrscheinlich ist, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototypimplementierung hinzugefügt.

### SVG

- Das {{ SVGAttr("pathLength") }} Attribut wird nun unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerktechnik

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Darüber hinaus wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von unpräfixierten WebSockets verwendet wird.

<!---->

- Das Parsen der `Content-Disposition`-Header wurde korrigiert, um richtig interpretierte ASCII-Zeichen mit Backslash-Escapes als genau jenes Zeichen selbst zu behandeln. Bisher wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes in `Set-Cookie`-Headdern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; vorher wurden sie als Teil der Pfadzeichenfolge behandelt statt als Begrenzungszeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, deshalb sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungs-Header wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Mikrosummaries wurde entfernt; diese wurden nie weit verbreitet genutzt, waren nicht sehr sichtbar und die Unterstützung machte es schwierig, Verbesserungen an der Places-(Lesezeichen- und Verlauf-)Architektur vorzunehmen.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue _Scratchpad_-Werkzeug bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die `console.trace()`-Methode wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltens-Flag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` erlaubt es, ein JavaScript-Code-Modul aus einem Pfad relativ zu einem anderen JavaScript-Code-Modul zu laden. Dies erleichtert den Aufbau von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine Methode [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects), um mehrere Objekte auf einmal aus dem Array zu entfernen.

### Verwendung des DOM aus dem Chrome

- [Verwendung der DOM-Datei-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-Datei-API immer aus dem Chrome-Code verwenden konnten, unterstützt der {{ domxref("File") }}-Konstruktor jetzt die Angabe eines lokalen Pfadnamen-Strings, wenn er aus dem Chrome verwendet wird. Zusätzlich können Sie die Datei, auf die zugegriffen werden soll, mit einem `nsIFile`-Objekt spezifizieren.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs`-Attribut, mit dem Sie angeben können, dass die ausgewählte Datei zur Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden soll, falls vorhanden. Dieses Attribut hat keine Wirkung im privaten Browsing-Modus.
- `nsINavBookmarkObserver`-Methoden mit Objekt-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Einstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen unternimmt sie nichts.
- Die `nsIMemoryReporter`-Schnittstelle unterstützt jetzt die Angabe der Art des beschriebenen Speichers (zugeordnet, Heap oder andere).
- Das `stateData`-Attribut von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref`-Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das ref-Mitglied klont, und `nsIURI.equalsExceptRef()`, die mit einer anderen `nsIURI` vergleicht und das ref-Mitglied ignoriert.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen ermöglicht, auf den Favicon-Dienst asynchron zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückrufschnittstelle zur Behandlung von HTTP-Upgradearanforderungen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klonalgorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Unterstützung für die Telemetrie, um die Erfassung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen zur Leistungserfassung verwendet werden. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
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

- [Verwendung von Präferenzen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um Präferenzen leicht zugänglich zu machen; diese ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
