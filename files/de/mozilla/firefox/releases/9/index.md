---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Mac- und Linux-Version 9.0.1, die einen kurz vor Release entdeckten Absturzfehler behoben hat, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut des {{ HTMLElement("li") }} kann jetzt negativ sein. Bisher wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [die Start- und Stoppzeit von Medien angeben](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#specifying_playback_range) in der URI der Medien, wenn Sie die {{ HTMLElement("audio") }} und {{ HTMLElement("video") }}-Elemente verwenden.
- Elemente {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} [respektieren jetzt den Wert des `lang`-Attributs](/de/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language) beim Aufrufen der Rechtschreibprüfung.
- Firefox auf Android ermöglicht es jetzt Nutzern, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista Style PNG ICO-Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff zu beantragen, färbt die Leinwand nicht mehr fälschlicherweise [wenn CORS gewährt wird](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attributs kann jetzt bis zu 65.534 betragen, gegenüber 8190 vorher.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt unterstützt, mit dem `-moz` Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }}-Element eingebunden wird, vollständig geladen und geparst wurde (aber noch nicht auf das Dokument angewendet wurde), wird jetzt ein [`load`-Ereignis](/de/docs/Web/HTML/Element/link#stylesheet_load_events) ausgelöst. Auch wenn ein Fehler beim Verarbeiten eines Stylesheets auftritt, wird ein `error`-Ereignis ausgelöst.
- Sie können jetzt Überlaufeinstellungen für sowohl den linken als auch rechten Rand von Inhalten mit einer neuen Zweiwert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte im Vollbildmodus ohne Browser-Oberfläche zu präsentieren. Dies ist großartig für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains)-Methode ist jetzt implementiert; diese lässt Sie feststellen, ob ein bestimmter Knoten ein Nachkomme eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement)-Attribut wurde implementiert; dies gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Zusammensetzungsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts)-Attribut wurde implementiert; dies gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)-Methode wurde implementiert.
- Die Liste der Ereignisse, die auf {{ HTMLElement("body") }}-Elementen überwacht werden können, wurde überarbeitet, um den neuesten Entwurf der HTML5-Spezifikation widerzuspiegeln. Die Ereignisliste im [DOM-Ereignis-Referenz](/de/docs/Web/Events) zeigt, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie vorgesehen.
- Ereignishandler sind jetzt als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen betrifft dies Inhalte nicht, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, "`moz-json`", wurde zu `XMLHttpRequest` hinzugefügt, der es `XMLHttpRequest` ermöglicht, [JSON](/de/docs/Glossary/JSON)-Zeichenfolgen automatisch zu parsen; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge geparst, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "Fortschritts"-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jeden Datenblock gesendet, der empfangen wird; in der Vergangenheit war es möglich, dass der letzte empfangene Datenblock kein "Fortschritts"-Ereignis ausgelöst hat. Jetzt können Sie den Fortschritt nur durch Verfolgen von "Fortschritts"-Ereignissen verfolgen, anstatt auch "Lade"-Ereignisse überwachen zu müssen, um den Erhalt des letzten Datenblocks zu erkennen.
- In der Vergangenheit führte der Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener zu einer Ausnahme. Jetzt kehrt er ohne Fehler zurück und ohne Effekt.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft ermöglicht es Ihren Inhalten, einfach festzustellen, ob der Benutzer seine Do-Not-Track-Einstellung aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich nun gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Dokumenttyp-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In URL-Blobs implementierte Workers waren in Firefox 8 defekt und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht standardisierte `restyle`-Wert für das `actiontype`-Attribut auf {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Während weiterhin nicht unterstützt, führt die Verwendung des `mlabeledtr`-Elements nicht mehr zum vollständigen Absturz der Darstellung. Sehen Sie sich [Firefox Bug 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements an.

### Netzwerk

- Sie können jetzt die Inhalte von [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (das heißt, den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mithilfe von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data) senden.
- WebSocket-Verbindungen erlauben nun nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP-Header `Accept` für XSLT-Anfragen wurde aus Gründen der Einfachheit auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückgefallen ist, schien es sinnvoll, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Benutzer zu einer `javascript:` URI umzuleiten, [führen jetzt zu einem "bad connection" Fehler](/de/docs/Web/HTTP#more_on_redirection_responses) anstelle einer tatsächlichen Umleitung. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} geliefert wurden, wurden bisher so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die standardmäßige maximale Größe eines Elements im Datenträger-Cache wurde auf 50 MB erhöht; vorher wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwickler-Tools

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenfolgen-Substitutionen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokolliermethoden.
- Sie können jetzt [visuell geschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

## Änderungen für Mozilla und Add-on-Entwickler

Siehe [Add-ons für Firefox 9 aktualisieren](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>`-Element hat jetzt ein `pending`-Attribut, dessen Wert `true` ist, wenn die Registerkarte gerade vom Sitzungsverwaltungsdienst wiederhergestellt wird. Dies kann verwendet werden, um die Registerkarte in Themen zu stylen. Das Attribut ist auf nicht anstehenden Registerkarten nicht vorhanden.
- Das `<xul:tab>`-Element hat jetzt ein `unread`-Attribut, dessen Wert `true` ist, wenn sich die Registerkarte seit dem letzten Mal, als sie die aktive Registerkarte war, geändert hat oder wenn sie seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist auf nicht ungelesenen Registerkarten nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Ziehbild für DOM-Zieh- und Abwurfoperationen verwenden. Dies ermöglicht die Verwendung der Standard-Zieh-und-Abwurf-API für [Zieh- und Abwurf von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images).
- Die `appendNotification`-Methode des `<xul:notificationbox>`-Elements ermöglicht es Ihnen jetzt, einen Rückruf anzugeben, der für interessante Ereignisse im Zusammenhang mit dem Benachrichtigungskasten aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass der Kasten aus seinem Fenster entfernt wurde.

### Änderungen im JavaScript-Code-Modul

- `FileUtils.jsm` hat jetzt einen `Datei`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine durch ihren Pfadnamen angegebene Datei darstellt.

### Dienständerungen

- Der Inhaltspräferenzdienst behandelt jetzt das private Browsing (siehe [Firefox-Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "Append"-Modul, das es ermöglicht, neue Daten am Ende eines bestehenden Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde im Zuge der Verschlankung des Places und DocShell Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Das `nsISound`-Interface hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht das Abspielen des Systemsounds, wenn mehr Zeichen als das maximal erlaubte in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Das `nsIScriptError2`-Interface hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; darüber hinaus nimmt die `initWithWindowID()`-Methode jetzt eine innere Fenster-ID anstelle einer äußeren an.
- Das `nsIBidiKeyboard.haveBidiKeyboards`-Attribut wurde hinzugefügt; dieses lässt Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable`-Attribut lässt Sie feststellen, ob der aktuelle Auswahl-Anker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie feststellen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt liegt.
- Die `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()`-Methoden wurden im Rahmen eines Leistungsüberholens des Places-Systems entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die `nsIDOMWindowUtils.wrapDOMFile()`-Methode wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File)-Objekt für eine gegebene `nsIFile` zurück.
- Die `nsIChromeFrameMessageManager.removeDelayedFrameScript()`-Methode wurde hinzugefügt, um die Entfernung von verzögerten Ladeskripten zu unterstützen. Bootstrapped-Erweiterungen sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die sie mithilfe von `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögerten Ladeflag geladen haben. Dies wird den Erweiterungen als `browser.messageManager.removeDelayedFrameScript()` bereitgestellt.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das Ihnen mitteilt, ob der Startvorgang an irgendeinem Punkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann hilfreich sein, beispielsweise um Startzeiten bei der Leistungsmessung zu kennen, um Zahlen aus Sitzungen, die unterbrochen wurden, auszuschließen.
- Die `nsIEditorSpellCheck`-Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Seite zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr die nie vollständig implementierte Vorstellung von einzigartigen Zeigern.

### Build-System-Änderungen

- Die Option `--enable-application=standalone` für den Bau eines eigenständigen XPConnect wurde entfernt; sie funktioniert seit 2007 ohnehin nicht mehr.
- Die Unterstützung für den Bau von Necko und Transformiix XSLT als eigenständig wurde entfernt; Sie können nicht mehr `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Build-System sucht jetzt `mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig`-Pfad mit der `MOZCONFIG`-Umgebungsvariable.
- Das Dienstprogramm `xpidl` wurde im SDK durch `pyxpidl` ersetzt.

### Sonstige Änderungen

- Der Rechtschreibprüfer hat keine willkürliche Wortlängenbeschränkung von 130 Zeichen mehr für die Länge von Wörtern, die er versuchen wird zu prüfen. Diese Beschränkung war zuvor vorhanden, um Abstürze zu verhindern, die im Rechtschreibprüfer auftraten, aber die zugrunde liegenden Fehler wurden mittlerweile behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt hinzuzufügen, indem Sie die "JavaScript-navigator-property"-Kategorie verwenden.

## Siehe auch

{{Firefox_for_developers}}
