---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 6b19a13cc0dcc30e9cd55ba3a9b2722bfa0ce69c
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** bietet die Möglichkeit, auf Zwischenablage-Befehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von und in die System-Zwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar).

## Konzepte und Nutzung

Die _System-Zwischenablage_ ist ein Datenpuffer, der zum Betriebssystem des Browsers gehört. Sie dient zur kurzfristigen Datenspeicherung und/oder zum Datentransfer zwischen Dokumenten oder Anwendungen. Sie wird üblicherweise als ein anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal auch als _Paste Buffer_ bezeichnet, und kann von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmier-Schnittstellen erreicht werden.

Die Clipboard API ermöglicht es Benutzern, textuelle und andere Arten von Daten programmgesteuert in und aus der System-Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen und zu schreiben, vorausgesetzt, der Benutzer erfüllt die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) dargelegten Kriterien.

Ereignisse werden als Folge von [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage verändern. Diese Ereignisse haben eine Standardaktion, beispielsweise kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die System-Zwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden — sehen Sie sich die jeweiligen Ereignisse für mehr Informationen an.

Es gibt auch ein [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event)-Ereignis, das direkt auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt ausgelöst wird, wann immer sich der Inhalt der System-Zwischenablage ändert. Dies ist nützlich, um Anwendungen über eine Änderung der System-Zwischenablage zu informieren, wenn sie beispielsweise ihre eigene Zwischenablage haben, die synchron gehalten werden muss.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in oder aus der System-Zwischenablage.
    Die Spezifikation nennt dies die 'Async Clipboard API'.
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
  - : Repräsentiert Ereignisse, die ausgelöst werden, wann immer sich der Inhalt der System-Zwischenablage ändert.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen in Bezug auf Änderungen an der Zwischenablage bereitstellen, also [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse. Die Spezifikation nennt dies die 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen anderer Schnittstellen

Die Clipboard API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Einfügeaktion initiiert.

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Benutzern, textuelle und andere Arten von Daten programmgesteuert in und aus der System-Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen und zu schreiben.

Beim Lesen von der Zwischenablage verlangt die Spezifikation, dass ein Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf als Ergebnis der Benutzerinteraktion mit einem "Paste Element" des Browsers oder Betriebssystems erfolgt (z.B. "Einfügen" in einem nativen Kontextmenü wählen). In der Praxis erlauben Browser oft Leseoperationen, die diese Anforderungen nicht erfüllen, während sie andere Anforderungen stellen (wie eine Erlaubnis oder Aufforderung pro Operation).
Für das Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Permissions API](/de/docs/Web/API/Permissions_API) `clipboard-write`-Erlaubnis erteilt wurde, und der Browser kann auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erfordern. Browser können zusätzliche Einschränkungen für die Verwendung der Methoden zum Zugriff auf die Zwischenablage auferlegen.

Browserimplementierungen weichen von der Spezifikation ab. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) festgehalten und der aktuelle Stand ist unten zusammengefasst:

Chromium-Browser:

- Wenn ein Lesevorgang nicht von der Spezifikation erlaubt ist und das Dokument den Fokus hat, wird eine Anfrage ausgelöst, um die Erlaubnis `clipboard-read` zu verwenden, und sie ist erfolgreich, wenn die Erlaubnis erteilt wird (entweder weil der Benutzer die Aufforderung akzeptiert hat oder weil die Erlaubnis bereits erteilt wurde).
- Schreiben erfordert entweder die `clipboard-write`-Erlaubnis oder transiente Aktivierung.
  Wenn die Erlaubnis erteilt wird, bleibt sie bestehen und eine weitere transiente Aktivierung ist nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Erlaubnisse `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.

Firefox & Safari:

- Wenn ein Lesevorgang nicht von der Spezifikation erlaubt ist, aber die transiente Benutzeraktivierung dennoch erfüllt ist, wird eine Benutzeraufforderung in Form eines flüchtigen Kontextmenüs mit einer einzigen "Einfügen"-Option ausgelöst (die nach 1 Sekunde aktiviert wird) und ist erfolgreich, wenn der Benutzer die Option wählt.
- Schreiben erfordert eine transiente Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn dasselbe Ursprungs-Zwischenablageinhalte gelesen werden, jedoch nicht bei Inhalten aus verschiedenen Ursprüngen.
- Die `clipboard-read` und `clipboard-write`-Erlaubnisse werden von Firefox oder Safari nicht unterstützt (und sind nicht geplant, unterstützt zu werden).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen steht Erweiterungen mit der Web-Erweiterung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Erlaubnis zur Verfügung. Mit dieser Erlaubnis benötigt die Erweiterung keine transiente Aktivierung oder verwendet die Einfügeaufforderung. Ab Firefox 147 ist das Lesen auch ohne Erlaubnis in einem sicheren Kontext, mit transienten Aktivierung und nachdem der Benutzer die Einfügeaufforderung in einem flüchtigen Kontextmenü angeklickt hat, möglich.
- Schreiben ist in einem sicheren Kontext und mit transienten Aktivierung verfügbar. Mit der Web-Erweiterung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Erlaubnis ist jedoch keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Die System-Zwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) abgerufen.

Dieses Snippet holt den Text aus der Zwischenablage und hängt ihn an das erste Element an, das mit der Klasse `editor` gefunden wird. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage keinen Text enthält, ist dieser Code sicher.

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
