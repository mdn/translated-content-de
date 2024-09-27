---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** bietet die Möglichkeit, auf Zwischenablage-Befehle (ausschneiden, kopieren und einfügen) zu reagieren sowie asynchron von und in die System-Zwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar).

## Konzepte und Nutzung

Die _System-Zwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, welches den Browser hostet und für die kurzfristige Datenspeicherung und/oder den Datentransfer zwischen Dokumenten oder Anwendungen verwendet wird. Normalerweise wird sie als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal als _Einfügepuffer_ bezeichnet wird und über definierte Programmierschnittstellen von den meisten oder allen Programmen innerhalb der Umgebung zugreifbar ist.

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Datentypen von und zur System-Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben, vorausgesetzt, der Benutzer hat die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) beschriebenen Kriterien erfüllt.

Ereignisse werden durch [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) ausgelöst, die die Zwischenablage ändern. Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die System-Zwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden — siehe jedes der Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten von oder zur System-Zwischenablage.
    Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen über Änderungen der Zwischenablage bereitstellen, d.h. [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) Ereignisse.
    Die Spezifikation bezeichnet dies als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard) Objekt zurück, das Lese- und Schreibzugriff auf die System-Zwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Kopieraktion startet.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Ausschneideaktion startet.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das jedes Mal ausgelöst wird, wenn der Benutzer eine Einfügeaktion startet.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Sicherheitsüberlegungen

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Datentypen von und zur System-Zwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben.

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage lesen zu können ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich). Wenn die Leseoperation durch Benutzerinteraktion mit einem Browser- oder OS-"Einfügeelement" (wie einem Kontextmenü) verursacht wird, wird erwartet, dass der Browser den Benutzer um Bestätigung bittet. Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Permissions API](/de/docs/Web/API/Permissions_API) Berechtigung `clipboard-write` erteilt wurde, und der Browser kann ebenfalls [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) verlangen. Browser können zusätzliche Einschränkungen für die Nutzung der Methoden zum Zugriff auf die Zwischenablage auferlegen.

Browser-Implementierungen sind von der Spezifikation abgewichen. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Lesen erfordert, dass die [Permissions API](/de/docs/Web/API/Permissions_API) Berechtigung `clipboard-read` erteilt wird.
  Transiente Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die `clipboard-read` Berechtigung oder transiente Aktivierung.
  Wenn die Berechtigung erteilt ist, bleibt sie bestehen, und weitere transiente Aktivierung ist nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}} Elemente erlaubt sein, die auf die Zwischenablage zugreifen.
- Es wird kein dauerhaftes Einfügeaufforderungsfenster angezeigt, wenn eine Leseoperation durch ein Browser- oder OS-"Einfügeelement" ausgelöst wird.

Firefox & Safari:

- Lesen und Schreiben erfordert transiente Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn gleichherzige Zwischenablageinhalte gelesen werden, jedoch nicht bei unterschiedlichen Ursprüngen.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und sind auch nicht geplant zu unterstützen).

Firefox [Web Extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web Extension [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Berechtigung verfügbar.
  Mit dieser Berechtigung erfordert die Erweiterung keine transiente Aktivierung oder Einfügeaufforderung.
- Das Schreiben von Text ist in einem sicheren Kontext und mit transiente Aktivierung verfügbar.
  Mit der Web Extension [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Berechtigung ist transiente Aktivierung nicht erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die System-Zwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet liest den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) (und [`read()`](/de/docs/Web/API/Clipboard/read), falls relevant) einen leeren String zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

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

- [Bildunterstützung für Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
