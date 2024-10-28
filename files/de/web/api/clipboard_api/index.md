---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** ermöglicht es, auf Zwischenablagebefehle (ausschneiden, kopieren und einfügen) zu reagieren sowie asynchron von und in die systemweite Zwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Nutzen Sie diese API anstelle der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Nutzung

Die _System-Zwischenablage_ ist ein Datenpuffer, der dem Betriebssystem gehört, auf dem der Browser läuft, und wird für die kurzfristige Datenspeicherung und/oder den Datentransfer zwischen Dokumenten oder Anwendungen verwendet. Sie wird normalerweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal als _Einfügepuffer_ bezeichnet wird und von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard-API erlaubt es Benutzern, programmatisch Text und andere Arten von Daten in die System-Zwischenablage zu lesen und zu schreiben, sofern der Benutzer die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) genannten Kriterien erfüllt hat.

Ereignisse werden als Ergebnis von [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage verändern. Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die System-Zwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden — siehe jedes der Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in die oder aus der System-Zwischenablage. Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, das heißt [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Ereignisse. Die Spezifikation bezeichnet dies als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Artikel-Format, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Beachten Sie: Ereignis `Window: clipboardchange` ist in der Spezifikation, aber nicht implementiert -->

## Sicherheitsüberlegungen

Die Clipboard-API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in die oder aus der System-Zwischenablage zu lesen und zu schreiben, in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts).

Die Spezifikation verlangt, dass ein Benutzer kürzlich mit der Seite interagiert hat, um aus der Zwischenablage zu lesen ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich). Wenn die Leseoperation durch Benutzerinteraktion mit einem Browser- oder OS-"Einfügetagn" (wie einem Kontextmenü) verursacht wird, erwartet der Browser, dass er den Benutzer um Bestätigung fragt. Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) `clipboard-write` erteilt wurde und der Browser möglicherweise auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordert. Browser können zusätzliche Einschränkungen für die Verwendung der Methoden zum Zugriff auf die Zwischenablage festlegen.

Browser-Implementierungen haben sich von der Spezifikation entfernt. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand wird nachfolgend zusammengefasst:

Chromium-Browser:

- Für das Lesen ist die Berechtigung `clipboard-read` der [Berechtigungs-API](/de/docs/Web/API/Permissions_API) erforderlich. Transiente Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die Berechtigung `clipboard-read` oder transiente Aktivierung. Wenn die Berechtigung erteilt wird, bleibt sie bestehen und weitere transiente Aktivierung ist nicht erforderlich.
- Die HTTP-Berechtigungen `clipboard-read` und `clipboard-write` der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Headers/Permissions-Policy) müssen für {{HTMLElement("iframe")}} Elemente erlaubt sein, die auf die Zwischenablage zugreifen.
- Kein dauerhaftes Einfüge-Aufforderungsfenster wird angezeigt, wenn eine Leseoperation durch ein Browser- oder OS-"Einfügetagn" verursacht wird.

Firefox & Safari:

- Lesen und Schreiben erfordern transiente Aktivierung.
- Die Einfüge-Aufforderung wird unterdrückt, wenn Inhalte der selben Herkunft aus der Zwischenablage gelesen werden, aber nicht bei Inhalten aus anderer Herkunft.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, diese zu unterstützen).

Firefox [Weberweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen von Text ist nur für Erweiterungen verfügbar, die die Web-Erweiterungsberechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) besitzen. Mit dieser Berechtigung benötigt die Erweiterung keine transiente Aktivierung oder eine Einfüge-Aufforderung.
- Schreiben von Text ist in einem sicheren Kontext und mit transiente Aktivierung möglich. Mit der Web-Erweiterungsberechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die systemweite Zwischenablage wird über die globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet holt den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) (und auch [`read()`](/de/docs/Web/API/Clipboard/read), falls vorhanden) einen leeren String zurückgibt, wenn die Zwischenablage keinen Text enthält, ist dieser Code sicher.

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

- [Unterstützung von Bildern für den Async Clipboard-Artikel](https://web.dev/articles/async-clipboard)
