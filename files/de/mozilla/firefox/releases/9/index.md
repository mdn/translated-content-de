---
title: Firefox 9 für Entwickler
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Version 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler behebt, wurde am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann nun negativ sein. Zuvor wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [die Start- und Stoppzeit von Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) in der URI der Medien angeben, wenn Sie {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente verwenden.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente berücksichtigen nun den Wert des `lang`-Attributs, wenn der Rechtschreibprüfer aufgerufen wird.
- Firefox auf Android ermöglicht es Benutzern jetzt, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista-stilische PNG ICO-Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, beeinflusst nicht mehr fälschlicherweise [die Canvas-Sicherheit](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attributs kann nun bis zu 65.534 betragen, vorher war er auf 8190 begrenzt.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird mit dem `-moz` Präfix unterstützt. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }} Element eingebunden wurde, vollständig geladen und analysiert, aber noch nicht auf das Dokument angewendet wurde, wird nun ein [`load` Event](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Außerdem wird ein `error`-Event ausgelöst, wenn beim Verarbeiten eines Stylesheets ein Fehler auftritt.
- Sie können jetzt Überlauffunktionen für beide Seitenkanten von Inhalten mit einer neuen Zwei-Wert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte über den gesamten Bildschirm ohne Browser-Oberfläche darzustellen. Dies ist ideal für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains) Methode ist jetzt implementiert; damit können Sie feststellen, ob ein gegebener Knoten ein Nachkomme eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) Attribut wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Kompositions-Ereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts) Attribut ist implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen {{ HTMLElement("script") }} Elementen im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) Methode wurde implementiert.
- Das Set von Ereignissen, die auf {{ HTMLElement("body") }} Elementen gehört werden können, wurde überarbeitet, um dem neuesten Entwurf der HTML5-Spezifikation zu entsprechen. Die Liste der Ereignisse im [DOM Events](/de/docs/Web/API/Document_Object_Model/Events#event_index) Leitfaden zeigt, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird nun nur auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie beabsichtigt.
- Ereignishandler sind jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen hat dies keine Auswirkungen auf Inhalte, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, der es ermöglicht, JSON-Zeichenfolgen automatisch zu analysieren; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge analysiert, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenstück gesendet; früher war es möglich, dass das letzte empfangene Datenstück kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch Verfolgen der "progress"-Ereignisse überwachen, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Erhalt des letzten Datenstücks zu erkennen.
- In der Vergangenheit wurde beim Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null` Listener eine Ausnahme ausgelöst. Jetzt wird es fehlerfrei und ohne Effekt zurückgegeben.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihren Inhalten, einfach zu erkennen, ob der Benutzer seine "nicht verfolgen"-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich jetzt entsprechend ihrer Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, bei dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- Workers, die in Blob-URLs implementiert sind, waren in Firefox 8 defekt und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht standardisierte Wert `restyle` für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Obwohl weiterhin nicht unterstützt, führt die Verwendung des `mlabeledtr` Elements nicht mehr vollständig zu Renderfehlern. Siehe [Firefox Fehler 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements.

### Netzwerktechnik

- Sie können jetzt die Inhalte von [JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mit XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) senden.
- WebSocket-Verbindungen erlauben jetzt, dass nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen empfangen werden, anstatt zu scheitern.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde aus Gründen der Einfachheit auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückfiel, ergab es Sinn, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, die `301 Moved Permanently` oder `307 Temporary Redirect` Antwortcodes zu verwenden, um den Benutzer zu einer `javascript:` URI umzuleiten, führen nun zu einem "bad connection"-Fehler, anstatt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} Header bedient werden, wurden zuvor behandelt, als ob der {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt gehandhabt, als ob der {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die Standardgröße für einen Eintrag im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Einträge bis zu 5 MB zwischengespeichert.

### Entwickler-Tools

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenfolgen-Ersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell verschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>` Element hat jetzt ein `pending` Attribut, dessen Wert `true` ist, wenn das Tabulat im Begriff ist, vom Sitzungsdienst wiederhergestellt zu werden. Dies kann verwendet werden, um das Tabulat in Themes zu stylen. Das Attribut ist bei Tabs, die nicht ausstehen, nicht vorhanden.
- Das `<xul:tab>` Element hat jetzt ein `unread` Attribut, dessen Wert `true` ist, wenn das Tabulat seit dem letzten Mal, als es das aktive Tabulat war, geändert wurde oder wenn es seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Drag-Bild für DOM-Drag-and-Drop-Operationen verwenden. Auf diese Weise können Sie die [Standard-Drag & Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für das Drag-and-Drop von XUL-Inhalten verwenden.
- Die `appendNotification` Methode des `<xul:notificationbox>` Elements ermöglicht es Ihnen jetzt, einen Callback anzugeben, der für interessante Ereignisse im Zusammenhang mit der Benachrichtigungsbox aufgerufen wird. Derzeit ist das einzige Ereignis "removed", was Ihnen mitteilt, dass die Box von ihrem Fenster entfernt wurde.

### Änderungen am JavaScript-Code-Modul

- `FileUtils.jsm` hat jetzt einen `File`-Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine Datei darstellt, die durch ihren Dateipfad angegeben ist.

### Dienständerungen

- Der Dienst für Inhaltspräferenzen behandelt nun das private Browsing (siehe [Firefox Fehler 679784](https://bugzil.la/679784)).

### NSPR

- NSPR verfügt jetzt über ein "append"-Modul, mit dem Sie neue Daten an das Ende eines bestehenden Protokolls anhängen können.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Rationalisierung der Places- und DocShell-Codes entfernt.

#### Sonstige Schnittstellenänderungen

- Das `nsISound` Interface hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Damit kann der Systemton abgespielt werden, wenn mehr Zeichen als zulässig in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Das `nsIScriptError2` Interface hat neue `timeStamp` und `innerWindowID` Eigenschaften; zudem nimmt die Methode `initWithWindowID()` jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID an.
- Das `nsIBidiKeyboard.haveBidiKeyboards` Attribut wurde hinzugefügt; dies ermöglicht es Ihnen festzustellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable` Attribut erlaubt es Ihnen festzustellen, ob der aktuelle Auswahlanker editierbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments editierbar sind, indem Sie erkennen können, ob die aktuelle Auswahl in einem editierbaren Abschnitt liegt.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für eine gegebene `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen von verzögerten Ladeskripten zu unterstützen. Bootstrap-Add-ons sollten diese Methode beim Herunterfahren verwenden, um alle Skripte zu entfernen, die es mit `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögerten Ladeflag geladen hat. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` bereitgestellt.
- Das `nsIAppStartup` Interface hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startvorgang zu irgendeinem Zeitpunkt durch eine interaktive Aufforderung unterbrochen wurde. Dies kann zum Beispiel hilfreich sein, wenn Sie Startzeiten während der Leistungsevaluation messen, um Zahlen von Sitzungen ausschließen zu können, die unterbrochen wurden.
- Das `nsIEditorSpellCheck` Interface wurde überarbeitet, um die Auswahl von Rechtschreibprüfer-Lexika pro Website zu unterstützen.

### IDL-Parser

Der IDL-Parser enthält keine Unterstützung mehr für das nie vollständig implementierte Konzept von eindeutigen Zeigern.

### Änderungen im Build-System

- Die `--enable-application=standalone` Option zum Erstellen von eigenständigem XPConnect wurde entfernt; seit 2007 funktioniert sie ohnehin nicht mehr.
- Die Unterstützung für den eigenständigen Build von Necko und Transformiix XSLT wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht jetzt nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo anders, es sei denn, Sie überschreiben den `.mozconfig` Pfad mit der `MOZCONFIG` Umgebungsvariable.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Sonstige Änderungen

- Der Rechtschreibprüfer hat keine willkürliche 130-Zeichen Begrenzung mehr für die Länge der Wörter, die er versuchen wird, zu überprüfen. Diese Begrenzung wurde zuvor eingeführt, um Abstürze zu verhindern, die in der Rechtschreibprüfung auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt Funktionen hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.
