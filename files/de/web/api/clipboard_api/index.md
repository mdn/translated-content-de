---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren und asynchron Texte in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API bevorzugt gegenüber der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) für den Zugriff auf die Zwischenablage.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht zugänglich über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

## Konzepte und Verwendung

Die _Systemzwischenspeicher_ ist ein Datenpuffer, der zum Betriebssystem gehört, auf dem der Browser läuft. Er wird zur kurzfristigen Datenspeicherung und/oder zum Datentransfer zwischen Dokumenten oder Anwendungen verwendet.
Er wird üblicherweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal als _Einfüge-Puffer_ bezeichnet, der von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard-API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) in die Systemzwischenablage zu lesen und zu schreiben, sofern die Benutzer die im Abschnitt [Sicherheitsaspekte](#sicherheitsaspekte) aufgeführten Kriterien erfüllt haben.

Ereignisse werden infolge von [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Operationen, die die Zwischenablage ändern, ausgelöst.
Die Ereignisse haben eine Standardaktion, beispielsweise kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage.
Die Standardaktion kann vom Ereignishandler überschrieben werden – weitere Informationen finden Sie in den jeweiligen Ereignissen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in die oder aus der Systemzwischenablage.
    Die Spezifikation bezeichnet dies als die 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen in Bezug auf die Änderung der Zwischenablage bereitstellen, also [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Ereignisse.
    Die Spezifikation bezeichnet dies als die 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard) Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Hinweis: `Window: clipboardchange` Ereignis ist in der Spezifikation, aber nicht implementiert -->

## Sicherheitsaspekte

Die Clipboard-API erlaubt Benutzern, programmatisch Text und andere Datenarten in sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) in die oder aus der Systemzwischenablage zu lesen und zu schreiben.

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage zu lesen ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).
Wenn die Leseoperation durch Benutzerinteraktion mit einem Browser- oder Betriebssystem-"Einfügeelement" (wie ein Kontextmenü) verursacht wird, wird erwartet, dass der Browser den Benutzer um Bestätigung bittet.
Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) `clipboard-write` Berechtigung erteilt wurde, und der Browser kann auch [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordern.
Browser können zusätzliche Einschränkungen für die Verwendung der Methoden zum Zugriff auf die Zwischenablage auferlegen.

Browserimplementierungen haben von der Spezifikation abgewichen.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst, und der aktuelle Stand ist unten zusammengefasst:

Chromium-Browser:

- Lesen erfordert die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) `clipboard-read` Berechtigung. Vorübergehende Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die `clipboard-read` Berechtigung oder eine vorübergehende Aktivierung. Wenn die Berechtigung erteilt wird, bleibt sie erhalten, und weitere vorübergehende Aktivierung ist nicht erforderlich.
- Die HTTP [Berechtigungs-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}} Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.
- Kein persistentes Einfügeaufforderungsfenster wird angezeigt, wenn eine Leseoperation durch ein Browser- oder Betriebssystem-"Einfügeelement" verursacht wird.

Firefox & Safari:

- Lesen und Schreiben erfordern eine vorübergehende Aktivierung.
- Das Einfügeaufforderungsfenster wird unterdrückt, wenn Inhalte aus derselben Quelle gelesen werden, jedoch nicht für fremde Inhalte.
- Die `clipboard-read` und `clipboard-write` Berechtigungen werden von Firefox oder Safari nicht unterstützt (und sind nicht geplant, unterstützt zu werden).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web-Erweiterung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Berechtigung verfügbar. Mit dieser Berechtigung benötigt die Erweiterung weder eine vorübergehende Aktivierung noch eine Einfügeaufforderung.
- Schreiben von Text ist im sicheren Kontext und mit vorübergehender Aktivierung verfügbar. Mit der Web-Erweiterung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Berechtigung ist keine vorübergehende Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet holt den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird.
Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

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

## Siehe auch

- [Artikel Bildunterstützung für die Async-Zwischenablage](https://web.dev/articles/async-clipboard)
