---
title: Firefox 9 Versionshinweise für Entwickler
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Mac- und Linux-Version 9.0.1, die einen in letzter Minute entdeckten Absturzfehler behebt, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenfolgenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell geschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Zuvor wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [den Start- und Stoppzeitpunkt von Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) in der URI der Medien angeben, wenn Sie {{ HTMLElement("audio") }}- und {{ HTMLElement("video") }}-Elemente verwenden.
- {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente berücksichtigen jetzt den Wert des `lang`-Attributs, wenn die Rechtschreibprüfung aufgerufen wird.
- Firefox auf Android ermöglicht es Nutzern jetzt, Fotos mit der Kamera ihres Telefons zu machen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista-style PNG-ICO-Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut verwenden, um CORS-Zugriff anzufordern, verfärbt die Zeichenfläche nicht mehr fälschlicherweise [wenn CORS gewährt wurde](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan)-Attributs kann jetzt so groß wie 65.534 sein, gegenüber zuvor 8190.

### CSS

- Die {{ cssxref("font-stretch") }}-Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt mit dem `-moz`-Präfix unterstützt. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }}-Element eingebunden wurde, vollständig geladen und geparst ist (aber noch nicht auf das Dokument angewendet wurde), wird jetzt ein [`load`-Event](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Wenn ein Fehler beim Verarbeiten eines Stylesheets auftritt, wird jetzt auch ein `error`-Event ausgelöst.
- Sie können jetzt Überlauf-Einstellungen für sowohl die linke als auch die rechte Kante von Inhalten mit einer neuen Zwei-Wert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen-API bietet eine Möglichkeit, Inhalte bildschirmfüllend darzustellen, ohne dass eine Browser-Schnittstelle angezeigt wird. Das ist großartig für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains)-Methode ist jetzt implementiert; diese ermöglicht es Ihnen zu bestimmen, ob ein gegebenes Knoten ein Nachfahre eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement)-Attribut wurde implementiert; dies gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM-Level-3-[Kompositionsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut wurde implementiert; dies gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen {{ HTMLElement("script") }}-Elementen im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)-Methode wurde implementiert.
- Das Set von Ereignissen, die für {{ HTMLElement("body") }}-Elemente gehörig registriert werden können, wurde überarbeitet, um dem neuesten Entwurf der HTML5-Spezifikation zu entsprechen. Die Liste der Ereignisse im [DOM-Ereignisse-Leitfaden](/de/docs/Web/API/Document_Object_Model/Events#event_index) zeigt, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie beabsichtigt.
- Ereignis-Handler sind jetzt als Standard-IDL-Interfaces implementiert. Für die meisten Fälle hat dies keine Auswirkungen auf den Inhalt, aber es gibt Ausnahmen.
- Ein neuer Rückgabetyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, sodass `XMLHttpRequest` automatisch {{Glossary("JSON", "JSON")}}-Zeichenfolgen für Sie parst; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge geparst, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Events](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jeden empfangenen Datenabschnitt gesendet; in der Vergangenheit war es möglich, dass der letzte empfangene Datenabschnitt kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch das Verfolgen von "progress"-Ereignissen verfolgen, anstatt auch "load"-Ereignisse zu überwachen, um den Empfang des letzten Datenabschnitts zu erkennen.
- In der Vergangenheit warf das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener eine Ausnahme. Jetzt kehrt es ohne Fehler und ohne Effekt zurück.
- Das neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft lässt Ihre Inhalte leicht feststellen, ob der Benutzer seine Nicht-Verfolgen-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range)- und [`Selection`](/de/docs/Web/API/Selection)-Objekte verhalten sich jetzt gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstelle von `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- Workers, die in Blob-URLs implementiert sind, waren in Firefox 8 defekt und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Kontext-Attribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht-standardmäßige `restyle`-Wert für das `actiontype`-Attribut auf {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Obwohl er noch nicht unterstützt wird, führt die Verwendung des `mlabeledtr`-Elements nicht mehr zu einem vollständigen Rendering-Fehler. Siehe [Firefox-Fehler 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt die Inhalte von [JavaScript-gegetippten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (das heißt, die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [unter Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) senden.
- WebSocket-Verbindungen erlauben jetzt Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP-`Accept`-Header für XSLT-Anfragen wurde der Einfachheit halber in `*/*` geändert. Da das Abrufen von XSLT sowieso immer auf `*/*` zurückgefallen ist, war es sinnvoll, die ursprüngliche Anfrage zu vereinfachen.
- Versuche eines Servers, die `301 Moved Permanently`- oder `307 Temporary Redirect`-Antwortcodes zu verwenden, um den Benutzer zu einer `javascript:`-URI umzuleiten, führen jetzt zu einem "bad connection"-Fehler anstelle der tatsächlichen Umleitung. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} serviert wurden, wurden zuvor behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die standardmäßige maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisierung von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die möglicherweise vorgenommen werden müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>`-Element verfügt jetzt über ein `pending`-Attribut, dessen Wert `true` ist, wenn das Tab im Prozess der Wiederherstellung durch den Sitzungsspeicherdienst ist. Dies kann verwendet werden, um das Tab in Themen zu stylen. Das Attribut ist bei Tabs, die nicht pendent sind, nicht vorhanden.
- Das `<xul:tab>`-Element verfügt jetzt über ein `unread`-Attribut, dessen Wert `true` ist, wenn das Tab sich seit dem letzten Mal geändert hat, als es das aktive Tab war, oder wenn es seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Ziehbild für DOM-Drag-&-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die [Standard-Drag-&-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für Drag & Drop von XUL-Inhalten zu verwenden.
- Die `appendNotification`-Methode des `<xul:notificationbox>`-Elements lässt Sie jetzt einen Callback angeben, der für interessante Ereignisse in Bezug auf die Benachrichtigungsbox aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen an JavaScript-Code-Modulen

- `FileUtils.jsm` verfügt jetzt über einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine Datei darstellt, die durch ihren Pfadnamen angegeben ist.

### Änderungen der Dienste

- Der Inhaltspräferenzdienst bearbeitet jetzt das private Modus-Browsen (siehe [Firefox-Fehler 679784](https://bugzil.la/679784)).

### NSPR

- NSPR verfügt jetzt über ein "append"-Modul, das es ermöglicht, neue Daten am Ende eines vorhandenen Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Straffung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound`-Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht das Abspielen des Systemtons, wenn mehr Zeichen als die maximal zulässige Länge in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2`-Schnittstelle hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; außerdem nimmt die `initWithWindowID()`-Methode jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards`-Attribut wurde hinzugefügt; dies lässt Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable`-Attribut lässt Sie feststellen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem man sehen kann, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt liegt.
- Die `nsIBrowserHistory.registerOpenPage()`- und `nsIBrowserHistory.unregisterOpenPage()`-Methoden wurden als Teil einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die `nsIDOMWindowUtils.wrapDOMFile()`-Methode wurde hinzugefügt; dies gibt ein DOM-[`File`](/de/docs/Web/API/File)-Objekt für eine gegebene `nsIFile` zurück.
- Die `nsIChromeFrameMessageManager.removeDelayedFrameScript()`-Methode wurde hinzugefügt, um das Entfernen von verzögert geladenen Skripten zu unterstützen. Bootstrapped-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die sie mit `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögerten Ladeflag geladen haben. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` zur Verfügung gestellt.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das Ihnen sagt, ob der Startvorgang zu irgendeinem Zeitpunkt durch ein interaktives Eingabeaufforderung unterbrochen wurde. Dies kann nützlich sein, um bei Leistungsbewertungen Starts zu erfassen, um Zahlen von Sitzungen zu vermeiden, die unterbrochen wurden.
- Die `nsIEditorSpellCheck`-Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Standort zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr die nie vollständig implementierte Vorstellung von eindeutigen Zeigern.

### Änderungen am Build-System

- Die Option `--enable-application=standalone` zum Erstellen von standalone XPConnect wurde entfernt; sie funktionierte seit 2007 sowieso nicht mehr.
- Die Unterstützung zum eigenständigen Bauen von Necko und Transformiix XSLT wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht jetzt nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig`-Pfad mit der `MOZCONFIG`-Umgebungsvariable.
- Das `xpidl`-Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Der Rechtschreibprüfer hat keine willkürlich 130 Zeichen lange Wortlängenbeschränkung mehr für die Länge der Wörter, die er zu überprüfen versucht. Dieses Limit war ursprünglich vorhanden, um Abstürze im Rechtschreibprüfer zu verhindern, aber die zugrunde liegenden Fehler wurden seitdem behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.
