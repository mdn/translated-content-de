---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: e8b852479c9166f9d0dfeb1977964ce213da301e
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** bietet die Möglichkeit, auf Zwischenablagebefehle (ausschneiden, kopieren und einfügen) zu reagieren sowie asynchron von und in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) zum Zugriff auf die Zwischenablage.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der dem Betriebssystem gehört, auf dem der Browser läuft, und der für die kurzfristige Datenspeicherung und/oder Datenübertragung zwischen Dokumenten oder Anwendungen verwendet wird.
Sie wird normalerweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal auch _Paste-Puffer_ genannt, der von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard API ermöglicht es Benutzern, textuelle und andere Arten von Daten programmgesteuert von und in die Systemzwischenablage zu lesen und zu schreiben, sofern sichere Kontexte verwendet werden und der Benutzer die in den [Sicherheitsüberlegungen](#sicherheitsüberlegungen) dargelegten Kriterien erfüllt hat.

Ereignisse werden als Ergebnis von [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage ändern.
Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage.
Die Standardaktion kann vom Ereignis-Handler überschrieben werden – sehen Sie sich jedes der Ereignisse für weitere Informationen an.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in die bzw. aus der Systemzwischenablage.
    Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen zur Änderung der Zwischenablage bereitstellen, d.h. [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Elementformat, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Kopieraktion einleitet.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Ausschneideaktion einleitet.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Einfügeaktion einleitet.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Benutzern, textuelle und andere Arten von Daten programmgesteuert von und in die Systemzwischenablage zu lesen und zu schreiben, sofern sichere Kontexte verwendet werden.

Die Spezifikation erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage zu lesen ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).
Wenn die Leseoperation durch Benutzerinteraktion mit einem Browser- oder OS-"Paste-Element" (wie z.B. einem Kontextmenü) verursacht wird, sollte der Browser den Benutzer um Bestätigung bitten.
Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die Berechtigung `clipboard-write` der [Permissions API](/de/docs/Web/API/Permissions_API) erteilt wurde, und der Browser kann auch [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordern.
Browser können zusätzliche Einschränkungen für die Verwendung der Methoden zum Zugriff auf die Zwischenablage erlassen.

Die Implementierungen der Browser weichen von der Spezifikation ab.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst, und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Lesen erfordert das Erteilen der Berechtigung `clipboard-read` der [Permissions API](/de/docs/Web/API/Permissions_API).
  Eine vorübergehende Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die Berechtigung `clipboard-write` oder eine vorübergehende Aktivierung.
  Wenn die Berechtigung erteilt wird, bleibt sie bestehen, und eine erneute vorübergehende Aktivierung ist nicht erforderlich.
- Die HTTP-[Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.
- Beim Lesen durch ein Browser- oder OS-"Paste-Element" wird kein dauerhaftes Einfüge-Dialogfeld angezeigt.

Firefox & Safari:

- Lesen und Schreiben erfordert eine vorübergehende Aktivierung.
- Der Einfüge-Dialog wird unterdrückt, wenn Inhalte derselben Herkunft von der Zwischenablage gelesen werden, jedoch nicht bei Inhalten verschiedener Herkunft.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und sind auch nicht zur Unterstützung geplant).

Firefox [Web Extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web Extension-Berechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) verfügbar.
  Mit dieser Berechtigung benötigt die Erweiterung keine vorübergehende Aktivierung oder eine Einfügeaufforderung.
- Das Schreiben von Text ist in einem sicheren Kontext und mit vorübergehender Aktivierung verfügbar.
  Mit der Web Extension-Berechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist keine vorübergehende Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Die Systemzwischenablage wird über den globalen [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugänglich gemacht.

Dieses Snippet holt den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird.
Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage keinen Text enthält, ist dieser Code sicher.

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

- [Bildunterstützung für Async Clipboard-Artikel](https://web.dev/articles/async-clipboard)
