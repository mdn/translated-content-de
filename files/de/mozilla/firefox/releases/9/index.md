---
title: Firefox 9 für Entwickler
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Versionen 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler beheben, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann nun negativ sein. Zuvor wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [die Start- und Stoppzeit von Medien angeben](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) in der URI der Medien, wenn Sie die {{ HTMLElement("audio") }}- und {{ HTMLElement("video") }}-Elemente verwenden.
- {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente beachten nun den Wert des `lang`-Attributs, wenn die Rechtschreibprüfung aktiviert wird.
- Firefox auf Android erlaubt es Benutzern jetzt, Fotos mit der Kamera ihres Telefons zu machen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- PNG ICO-Bilder im Windows Vista-Stil werden jetzt unterstützt.
- Bilder, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, beeinträchtigen den Canvas [nicht mehr fälschlicherweise](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attributs kann jetzt bis zu 65.534 betragen, statt vorher 8190.

### CSS

- Die {{ cssxref("font-stretch") }}-Eigenschaft wird nun unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt unterstützt, mit dem `-moz` Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }}-Element eingebunden wurde, vollständig geladen und geparst (aber noch nicht auf das Dokument angewendet) wurde, wird nun ein [`load`-Ereignis](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Außerdem wird bei einem Fehler beim Verarbeiten eines Stylesheets ein `error`-Ereignis ausgelöst.
- Sie können jetzt Überlauf-Einstellungen für beide Randseiten von Inhalten mit einer neuen Zweiwert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen-API bietet eine Möglichkeit, Inhalte ohne Browser-Oberfläche im Vollbildformat darzustellen. Dies ist ideal für Videos und Spiele. Diese API ist derzeit experimentell und mit einem Präfix versehen.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains)-Methode ist nun implementiert; damit können Sie feststellen, ob ein bestimmter Knoten ein Nachfolger eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement)-Attribut wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Zusammensetzungsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)-Methode wurde implementiert.
- Die Reihe von Ereignissen, die auf {{ HTMLElement("body") }}-Elementen abgehört werden können, wurde überarbeitet, um mit dem neuesten Entwurf der HTML5-Spezifikation übereinzustimmen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) zeigt, welche Ereignisse auf {{ HTMLElement("body") }} abgehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie vorgesehen.
- Ereignishandler werden jetzt als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen wird dies den Inhalt nicht beeinflussen, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, wodurch `XMLHttpRequest` automatisch {{Glossary("JSON", "JSON")}}-Strings für Sie parsen kann; wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String geparst, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress"-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenpaket gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenpaket kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch Verfolgen von "progress"-Ereignissen überwachen, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenpakets zu erkennen.
- In der Vergangenheit würde ein Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener eine Ausnahme werfen. Jetzt wird es ohne Fehler und ohne Effekt zurückgegeben.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft ermöglicht es Ihrem Inhalt, leicht festzustellen, ob der Nutzer seine Do-not-Track-Einstellung aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Nutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range)- und [`Selection`](/de/docs/Web/API/Selection)-Objekte verhalten sich jetzt gemäß ihrer Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, für das [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- Workers, die in Blob-URLs implementiert sind, waren in Firefox 8 defekt und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht-standardmäßige `restyle`-Wert für das `actiontype`-Attribut auf {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Obwohl noch nicht unterstützt, führt die Verwendung des `mlabeledtr`-Elements nicht mehr zu einem vollständigen Darstellungsfehler. Siehe [Firefox Bug 689641](https://bugzil.la/689641) für den Fortschritt bei der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt die Inhalte von [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).
- WebSocket-Verbindungen erlauben jetzt Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP `Accept`-Header für XSLT-Anfragen wurde aus Gründen der Einfachheit auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückfiel, war es sinnvoll, die ursprüngliche Anfrage zu vereinfachen.
- Versuche eines Servers, den Benutzer mit den Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu einer `javascript:`-URI umzuleiten, führen jetzt zu einem Fehler "schlechte Verbindung" anstelle einer tatsächlichen Umleitung. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }}-Header bereitgestellt wurden, wurden zuvor so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als wäre die {{ HTTPHeader("Content-Disposition") }} "inline".
- Die standardmäßige maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwicklerwerkzeuge

- Die Webkonsole unterstützt jetzt grundlegende [String-Ersatzmethoden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell geschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

## Änderungen für Mozilla- und Add-On-Entwickler

Siehe [Aktualisierung von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 funktionsfähig zu machen.

### XUL

- Das `<xul:tab>`-Element hat jetzt ein `pending`-Attribut, dessen Wert `true` ist, wenn der Tab gerade vom Sitzungswiederherstellungsdienst wiederhergestellt wird. Dies kann verwendet werden, um den Tab in Themes zu stylen. Das Attribut ist bei Tabs, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>`-Element hat jetzt ein `unread`-Attribut, dessen Wert `true` ist, wenn sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Drag-Bild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die [Standard-Drag-&-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für Drag-and-Drop von XUL-Inhalten zu verwenden.
- Die `appendNotification`-Methode des `<xul:notificationbox>`-Elements ermöglicht es jetzt, einen Rückruf anzugeben, der bei interessanten Ereignissen, die die Benachrichtigungsbox betreffen, aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen an JavaScript-Code-Modulen

- `FileUtils.jsm` hat jetzt einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine durch ihren Pfadnamen angegebene Datei darstellt.

### Dienständerungen

- Der Inhaltspräferenzdienst behandelt jetzt das private Surfen (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append"-Modul, das es Ihnen ermöglicht, neue Daten an das Ende eines vorhandenen Protokolls anzufügen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Straffung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound`-Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Diese ermöglicht es, den Systemton abzuspielen, wenn mehr Zeichen als die maximal erlaubten in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2`-Schnittstelle hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; außerdem nimmt die `initWithWindowID()`-Methode jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards`-Attribut wurde hinzugefügt; damit können Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable`-Attribut ermöglicht es Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft bei der Unterstützung von Fällen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt liegt.
- Die `nsIBrowserHistory.registerOpenPage()`- und `nsIBrowserHistory.unregisterOpenPage()`-Methoden wurden im Rahmen einer Leistungsüberarbeitung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die `nsIDOMWindowUtils.wrapDOMFile()`-Methode wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File)-Objekt für eine gegebene `nsIFile` zurück.
- Die `nsIChromeFrameMessageManager.removeDelayedFrameScript()`-Methode wurde hinzugefügt, um das Entfernen von verzögert geladenen Skripten zu unterstützen. Bootstrapped-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte, die es mit der verzögerten Lade-Flagge mit `nsIChromeFrameMessageManager.loadFrameScript()` geladen hat, zu entfernen. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` bereitgestellt.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das es Ihnen ermöglicht zu wissen, ob der Startvorgang zu irgendeinem Zeitpunkt durch eine interaktive Aufforderung unterbrochen wurde. Dies kann beispielsweise hilfreich sein, wenn Sie beim Performance-Testen Startzeiten messen, um Zahlen aus Sitzungen fallen zu lassen, die unterbrochen wurden.
- Die `nsIEditorSpellCheck`-Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibwörterbüchern pro Webseite zu unterstützen.

### IDL-Parser

Der IDL-Parser enthält keine Unterstützung mehr für das nie vollständig implementierte Konzept von einzigartigen Zeigern.

### Änderungen am Builds-System

- Die `--enable-application=standalone`-Option für den Bau von eigenständigem XPConnect wurde entfernt; sie hat seit 2007 ohnehin nicht mehr funktioniert.
- Die Unterstützung für den Bau von Necko und Transformiix XSLT als eigenständig wurde entfernt; Sie können nicht mehr `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Builds-System sucht nun nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig`, und sonst nirgends, es sei denn, Sie überschreiben den `.mozconfig`-Pfad mithilfe der `MOZCONFIG`-Umgebungsvariable.
- Das `xpidl`-Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Sonstige Änderungen

- Die Rechtschreibprüfung hat keine willkürliche Grenze von 130 Zeichen für die Länge der Wörter mehr, die sie auf Rechtschreibfehler überprüfen wird. Diese Grenze war zuvor vorhanden, um Abstürzen in der Rechtschreibprüfung vorzubeugen, die aufgrund von zugrundeliegenden Fehlern auftraten, die inzwischen behoben wurden.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.
