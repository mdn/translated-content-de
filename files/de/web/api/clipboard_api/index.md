---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 6f8aa84681bf6f94fd93f5d3f999a4d4c0764344
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von und in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, auf dem der Browser ausgeführt wird, und wird zur kurzfristigen Datenspeicherung und/oder für Datentransfers zwischen Dokumenten oder Anwendungen verwendet. Sie wird üblicherweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal auch _Paste-Puffer_ genannt, der von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in die und aus der Systemzwischenablage zu lesen und zu schreiben, vorausgesetzt, der Benutzer hat die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) beschriebenen Kriterien erfüllt, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts).
Ereignisse werden ausgelöst infolge von [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen, die die Zwischenablage ändern.
Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion die aktuelle Auswahl standardmäßig in die Systemzwischenablage.
Die Standardaktion kann vom Ereignishandler überschrieben werden – sehen Sie sich die einzelnen Ereignisse für weitere Informationen an.

Es gibt auch ein [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event)-Ereignis, das direkt auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt ausgelöst wird, wann immer sich der Inhalt der Systemzwischenablage ändert. Dies ist nützlich, um Apps über eine Änderung der Systemzwischenablage zu informieren, beispielsweise wenn sie eine eigene Zwischenablage haben, die synchron gehalten werden muss.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in oder aus der Systemzwischenablage.
    Die Spezifikation bezeichnet dies als die 'Async Clipboard API'.
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
  - : Repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Inhalt der Systemzwischenablage ändert.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, das heißt [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als die 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Stellt ein einzelnes Elementformat dar, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen für andere Schnittstellen

Die Clipboard API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Einfügeaktion initiiert.

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in die und aus der Systemzwischenablage zu lesen und zu schreiben in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts).

Beim Lesen aus der Zwischenablage erfordert die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf als Ergebnis der Benutzerinteraktion mit einem Browser- oder OS-"Paste-Element" erfolgt (wie das Wählen von "Einfügen" in einem nativen Kontextmenü). In der Praxis erlauben Browser oft Leseoperationen, die diese Anforderungen nicht erfüllen, während sie andere Anforderungen statt dessen stellen (wie eine Berechtigung oder eine Eingabeaufforderung pro Operation).
Für das Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die Berechtigung `clipboard-write` der [Permissions API](/de/docs/Web/API/Permissions_API) erteilt wurde, und der Browser kann auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erfordern.
Browser können zusätzliche Einschränkungen für die Verwendung der Methoden zum Zugriff auf die Zwischenablage platzieren.

Das [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event)-Ereignis wird nur mit {{Glossary("Sticky_activation", "sticky activation")}} oder nach Erteilung der Berechtigung `clipboard-read` ausgelöst.

Browser-Implementierungen haben sich von der Spezifikation entfernt.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) festgehalten und der aktuelle Stand wird im Folgenden zusammengefasst:

Chromium-Browser:

- Wenn ein Lesen nicht durch die Spezifikation erlaubt ist und das Dokument den Fokus hat, löst es eine Anforderung zur Verwendung der Berechtigung `clipboard-read` aus und ist erfolgreich, wenn die Berechtigung erteilt wird (entweder weil der Benutzer die Eingabeaufforderung akzeptiert hat oder weil die Berechtigung bereits erteilt wurde).
- Schreiben erfordert entweder die Berechtigung `clipboard-write` oder transiente Aktivierung.
  Wenn die Berechtigung erteilt ist, bleibt sie bestehen, und weitere transiente Aktivierungen sind nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente erlaubt sein, die auf die Zwischenablage zugreifen.

Firefox & Safari:

- Wenn ein Lesen nicht durch die Spezifikation erlaubt ist, aber dennoch eine transiente Benutzeraktivierung vorliegt, löst es eine Benutzeraufforderung in Form eines temporären Kontextmenüs mit einer einzigen "Einfügen"-Option aus (die nach 1 Sekunde aktiviert wird) und ist erfolgreich, wenn der Benutzer die Option wählt.
- Schreiben erfordert transiente Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn der Inhalt der Zwischenablage desselben Ursprungs gelesen wird, nicht jedoch bei inhaltsübergreifendem Lesen.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und es ist auch nicht geplant, sie zu unterstützen).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen ist für Erweiterungen mit der Web-Erweiterungs-Berechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) verfügbar. Mit dieser Berechtigung benötigt die Erweiterung keine transiente Aktivierung oder die Einfügeaufforderung. Ab Firefox 147 ist das Lesen auch ohne die Berechtigung in einem sicheren Kontext mit transiente Aktivierung und nachdem der Benutzer die Einfügeaufforderung in einem temporären Kontextmenü bestätigt hat, möglich.
- Schreiben ist in einem sicheren Kontext und mit transiente Aktivierung verfügbar. Allerdings ist mit der Web-Erweiterungs-Berechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet ruft den Text aus der Zwischenablage ab und hängt ihn an das erste Element mit der Klasse `editor` an.
Da [`readText()`](/de/docs/Web/API/Clipboard/readText) eine leere Zeichenkette zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
