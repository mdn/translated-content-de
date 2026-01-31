---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron aus der System-Zwischenablage zu lesen und in diese zu schreiben.

> [!NOTE]
> Verwenden Sie diese API bevorzugt gegenüber der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (sie wird nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

## Konzepte und Nutzung

Die _System-Zwischenablage_ ist ein Datenpuffer, der dem Betriebssystem gehört, auf dem der Browser gehostet wird. Sie wird zur kurzfristigen Datenspeicherung und/oder zum Datentransfer zwischen Dokumenten oder Anwendungen verwendet. Sie ist üblicherweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal auch _Paste-Puffer_ genannt wird und von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard-API erlaubt es, programmatisch Text und andere Arten von Daten in die System-Zwischenablage zu lesen und zu schreiben, vorausgesetzt, dass der Benutzer die in den [Sicherheitsüberlegungen](#sicherheitsüberlegungen) umrissenen Kriterien erfüllt hat, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts).

Ereignisse werden als Ergebnis von [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Operationen ausgelöst, die die Zwischenablage verändern. Diese Ereignisse haben eine Standardaktion, zum Beispiel kopiert die Aktion `copy` standardmäßig die aktuelle Auswahl in die System-Zwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden — siehe jedes der Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in oder aus der System-Zwischenablage. Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
  - : Repräsentiert Ereignisse, die ausgelöst werden, wann immer sich der Inhalt der System-Zwischenablage ändert.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen über die Veränderung der Zwischenablage bereitstellen, das heißt [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Ereignisse. Die Spezifikation bezieht sich darauf als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Item-Format, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Einfügeaktion initiiert.

## Sicherheitsüberlegungen

Die Clipboard-API ermöglicht es, programmatisch Text und andere Arten von Daten in die und aus der System-Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen und zu schreiben.

Beim Lesen von der Zwischenablage verlangt die Spezifikation, dass ein Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf als Ergebnis einer Benutzerinteraktion mit einem "Paste-Element" des Browsers oder Betriebssystems erfolgt (zum Beispiel durch Auswahl von "Einfügen" im nativen Kontextmenü). In der Praxis erlauben Browser oft Leseoperationen, die diese Anforderungen nicht erfüllen, während sie andere Anforderungen stellen (wie eine Berechtigung oder eine Aufforderung pro Operation). Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die Berechtigung `clipboard-write` der [Permissions-API](/de/docs/Web/API/Permissions_API) erteilt wurde, und der Browser kann auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) verlangen. Browser können zusätzliche Einschränkungen für die Methoden zur Zugriff auf die Zwischenablage auferlegen.

Die Implementierungen der Browser sind von der Spezifikation abgewichen. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Wenn eine Leseoperation durch die Spezifikation nicht erlaubt ist und das Dokument den Fokus hat, wird eine Anfrage zur Nutzung der Berechtigung `clipboard-read` ausgelöst, und sie ist erfolgreich, wenn die Berechtigung erteilt wurde (entweder weil der Benutzer die Aufforderung akzeptiert hat oder weil die Berechtigung bereits erteilt wurde).
- Zum Schreiben ist entweder die Berechtigung `clipboard-write` oder eine transiente Aktivierung erforderlich. Wenn die Berechtigung erteilt wird, bleibt sie bestehen und eine weitere transiente Aktivierung wird nicht benötigt.
- Die HTTP- [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente erlaubt werden, die auf die Zwischenablage zugreifen.

Firefox & Safari:

- Wenn eine Leseoperation durch die Spezifikation nicht erlaubt ist, aber dennoch transiente Benutzeraktivierung gegeben ist, wird eine Benutzeraufforderung in Form eines flüchtigen Kontextmenüs mit einer Einzeloption "Einfügen" ausgelöst (die nach einer Sekunde aktiviert wird) und ist erfolgreich, wenn der Benutzer die Option wählt.
- Schreiben erfordert transiente Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn dasselbe Ursprung-Zwischenablageinhalte gelesen werden, aber nicht bei fremden Ursprungsinhalten.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, sie zu unterstützen).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen ist für Erweiterungen mit der Web-Erweiterung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Berechtigung verfügbar. Mit dieser Berechtigung benötigt die Erweiterung keine transiente Aktivierung oder die Einfügeaufforderung zu verwenden. Ab Firefox 147 ist das Lesen auch ohne Berechtigung in einem sicheren Kontext, mit transienten Aktivierung und nachdem der Benutzer die Einfügeaufforderung im flüchtigen Kontextmenü angeklickt hat, verfügbar.
- Schreiben ist in einem sicheren Kontext und mit transienten Aktivierung verfügbar. Mit der Web-Erweiterung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Berechtigung ist transiente Aktivierung jedoch nicht erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die System-Zwischenablage wird über den globalen [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet holt den Text aus der Zwischenablage und fügt ihn an das erste gefundene Element mit der Klasse `editor` an. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

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
