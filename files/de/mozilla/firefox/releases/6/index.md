---
title: Firefox 6 Versionshinweise für Entwickler
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird nun unterstützt.
- Die Analyse des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente spezifiziert, wird nun unterstützt. Dieses Element sollte nun im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mithilfe der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Die Texteingabefelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Property/maxWidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite der Eingabefelder festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }}-Objekts [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) haben früher Müll ignoriert, der nach einer gültigen Farbbeschreibung vorhanden war; jetzt wird dies korrekt als Fehler behandelt. Beispielsweise wurde "red blue" als Farbe früher als "red" behandelt, sollte aber ignoriert werden.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt ordnungsgemäß auf 0px eingestellt werden; vorher wurden diese willkürlich auf 300px festgelegt, wenn Sie dies versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff auf sie.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt nun standardmäßig an den Anfang des Textes statt an das Ende gesetzt. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es, die von Textdekorationen verwendete Farbe wie Unterstreichungen, Überstreichungen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es, die Art der dem Element hinzugefügten Textdekorationen festzulegen.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es, den Stil von Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen festzulegen. Die Stile umfassen einstrichige, doppelte Striche, Wellenlinien, Punktlinien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es, die Silbentrennung von Wörtern beim Zeilenumbruch zu steuern.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu stylen, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die Eigenschaft `@-moz-document` hat eine neue `regexp()`-Funktion, die es ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da wir den geringen Code, den wir für die `aural` Mediengruppe hatten, entfernt haben. Sie wurde nie signifikant implementiert, daher machte es mehr Sinn, die veraltete Implementierung vorübergehend zu entfernen, als zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }} Pseudoklasse nicht auf Klassenselektoren angewendet, wenn der Quirks-Modus aktiviert war; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Eigenheit wurde entfernt.
- Die {{ cssxref(":indeterminate") }} Pseudoklasse kann auf {{ HTMLElement("progress") }} Elemente angewendet werden. Dies ist nicht standardmäßig, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der Wert `-moz-win-exclude-glass` wurde zur `-moz-appearance` CSS-Eigenschaft hinzugefügt, um opake Bereiche in Aero Glass-Effekten auf Windows-Systemen auszuschließen.
- [Firefox-Fehler 658949](https://bugzil.la/658949) hat geändert, wie das Hash (#)-Symbol in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, beeinträchtigen kann, wenn es nicht maskiert wird.

### DOM

- [Verwendung von Medienabfragen aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Medienabfragezeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C Standard-Touch-Ereignisse hinzu; diese machen es einfach, ein oder mehrere Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads zu interpretieren.
- [Vom Server gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Vom Server gesendete Ereignisse machen es möglich, dass eine Webanwendung den Server anweist, Ereignisse zu senden, genau wie lokal erstellte DOM-Ereignisse.

<!---->

- `navigator.securityPolicy`, das schon lange einen leeren String zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es vorerst mit einem Präfix (daher müssen Sie `MozBlobBuilder` verwenden) versehen ist.
- `Document.height` und `Document.width` wurden entfernt. [Firefox-Fehler 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert und immer `null` zurückgegeben wurden, wurden entfernt, da sie auch aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration` Schnittstelle und die sie verwendende Eigenschaft `document.domConfig` wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode `abort()` der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle löst jetzt eine Ausnahme aus, wenn sie verwendet wird, während kein Dateilesevorgang im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstelle von nur Zeichenfolgen von einem Fenster zu einem anderen zu übertragen.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Grafen von Referenzen enthalten).
- Sie können jetzt [erkunden, wann Druckanforderungen initiiert und abgeschlossen werden](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; Sie sollten diese anstelle der nicht standardmäßigen Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt korrekt schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein wenig Implementierungsdetail, das die Dinge unnötig verkomplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des `EventTarget`-Ziels hat jetzt einen optionalen Parameter `useCapture`, wie es bei WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, was den Zugriff auf die [globalen Attribute `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements ermöglicht.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox-Fehler 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet beispielsweise, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden haben. Diese URLs funktionieren jedoch nach wie vor wie bisher, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator bei mehreren eingebauten Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) zu verwenden, die dies gemäß der Spezifikation nicht hätten erlauben sollen. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, so dass es unwahrscheinlich ist, dass Sie von dieser Änderung betroffen sind.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie aus [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerke

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Außerdem wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit nicht präfixierter WebSockets verwendet wird.

<!---->

- Das Parsing des `Content-Disposition`-Headers wurde korrigiert, um ASCII-Zeichen, die durch Rückwärtsschrägstriche maskiert sind, korrekt als genau dieses Zeichen zu interpretieren. Bisher wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes in `Set-Cookie`-Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge behandelt, anstatt als Begrenzungszeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) Anforderungs-Header wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Unterstützung für Mikrozusammenfassungen wurde entfernt; diese wurden nie umfangreich genutzt, waren nicht sehr auffindbar und die weitere Unterstützung machte Verbesserungen an der Architektur von Places (Lesezeichen und Historie) schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad_ Tool ist ein praktischer Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Konsolen-API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Fehler 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen wichtigen Firefox-Versionen der Fall ist. Siehe [Binäre Schnittstellen](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet Dateien jetzt mit dem `DEFER_OPEN` [Verhaltens-Flag](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es, ein JavaScript-Code-Modul aus einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls zu laden. Dadurch wird es einfacher, Module zu erstellen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) hat jetzt eine Methode [`RemoveObjectsAt()`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects) zum Entfernen mehrerer Objekte auf einmal aus dem Array.

### Verwendung des DOM von Chrome

- [Verwendung der DOM-Datei-API in Chrome-Code](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-Datei-API immer schon aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor nun die Angabe eines lokalen Pfadnamen-Strings, wenn er aus dem Chrome verwendet wird. Darüber hinaus können Sie die Datei, auf die zugegriffen werden soll, auch mit einem `nsIFile`-Objekt unter Verwendung der DOM-Datei-API angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt das Sortieren in Häufigkeitsreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, mit dem Sie angeben können, dass die ausgewählte Datei zur Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden sollte, sofern eine solche Liste vorhanden ist. Dieses Attribut hat keine Wirkung im privaten Modus.
- Methoden von `nsINavBookmarkObserver` mit Artikel-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Voreinstellung nicht existiert oder keinen vom Benutzer festgelegten Wert hat. Stattdessen passiert nichts.
- Die Schnittstelle `nsIMemoryReporter` unterstützt jetzt die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder anderes).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref` Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es gibt auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das ref-Mitglied klont und `nsIURI.equalsExceptRef()`, die es ermöglicht, mit einer anderen `nsIURI` ohne Beachtung des ref-Mitgliedes zu vergleichen.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zur Bearbeitung von HTTP-Upgrade-Anforderungen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen für Leistungszwecke verwendet werden. Siehe [Firefox-Fehler 649502](https://bugzil.la/649502) und [Firefox-Fehler 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox-Fehler 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox-Fehler 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox-Fehler 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox-Fehler 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox-Fehler 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox-Fehler 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox-Fehler 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox-Fehler 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox-Fehler 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox-Fehler 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox-Fehler 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox-Fehler 649534](https://bugzil.la/649534))

### Weitere Änderungen

- [Verwendung von Voreinstellungen aus Anwendungscode](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um leicht auf Voreinstellungen zuzugreifen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.
