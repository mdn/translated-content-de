---
title: Zwischenablage-API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Zwischenablage-API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von der und auf die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten Methode {{domxref("document.execCommand()")}}, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) _nicht verfügbar_ (nicht über {{domxref("WorkerNavigator")}} zugänglich).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, auf dem der Browser läuft, und dient zur kurzfristigen Datenspeicherung und/oder zum Datentransfer zwischen Dokumenten oder Anwendungen. Sie wird in der Regel als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal als _Einfüge-Puffer_ bezeichnet wird und über definierte Programmierschnittstellen von den meisten oder allen Programmen in der Umgebung zugänglich ist.

Die Zwischenablage-API ermöglicht es Nutzern, programmgesteuert Text und andere Arten von Daten in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) von und zur Systemzwischenablage zu lesen und zu schreiben, vorausgesetzt, der Nutzer hat die im Abschnitt [Sicherheitsaspekte](#sicherheitsaspekte) beschriebenen Kriterien erfüllt.

Ereignisse werden infolge von {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} und {{domxref("Element/paste_event", "paste")}} Vorgängen ausgelöst, die die Zwischenablage ändern. Diese Ereignisse haben eine Standardaktion, beispielsweise kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden – siehe die Beschreibung der jeweiligen Ereignisse für weitere Informationen.

## Schnittstellen

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten von oder auf die Systemzwischenablage. Die Spezifikation bezeichnet dies als die 'Async Clipboard API'.
- {{domxref("ClipboardEvent")}}
  - : Stellt Ereignisse dar, die Informationen im Zusammenhang mit Änderungen der Zwischenablage liefern, das heißt {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, und {{domxref("Element/paste_event", "paste")}} Ereignisse. Die Spezifikation bezeichnet dies als die 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Stellt ein einzelnes Datenformat dar, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen für andere Schnittstellen

Die Zwischenablage-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- {{domxref("Navigator.clipboard")}} {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein {{domxref("Clipboard")}}-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`Kopieren`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Nutzer eine Kopieraktion einleitet.
- `Element` [`Ausschneiden`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Nutzer eine Ausschneideaktion einleitet.
- `Element` [`Einfügen`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Nutzer eine Einfügeaktion einleitet.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Sicherheitsaspekte

Die Zwischenablage-API ermöglicht es Nutzern, programmgesteuert Text und andere Arten von Daten in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) von und zur Systemzwischenablage zu lesen und zu schreiben.

Die Spezifikation erfordert, dass ein Nutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage zu lesen ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich). Wenn die Leseoperation durch Nutzerinteraktion mit einem Browser- oder OS-"Paste-Element" (wie einem Kontextmenü) verursacht wird, sollte der Browser den Nutzer um Bestätigung bitten. Für das Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die Berechtigung `clipboard-write` der [Berechtigungs-API](/de/docs/Web/API/Permissions_API) erteilt wurde, und der Browser kann auch eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordern. Browser können zusätzliche Einschränkungen für die Verwendung von Methoden zum Zugriff auf die Zwischenablage anwenden.

Browserimplementierungen weichen von der Spezifikation ab. Die Unterschiede sind im Abschnitt [Browserkompatibilität](#browserkompatibilität) erfasst und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Das Lesen erfordert die erteilte Berechtigung `clipboard-read` der [Berechtigungs-API](/de/docs/Web/API/Permissions_API). Eine transiente Aktivierung ist nicht erforderlich.
- Das Schreiben erfordert entweder die `clipboard-read` Berechtigung oder eine transiente Aktivierung. Wenn die Berechtigung erteilt wird, bleibt sie bestehen und weitere transiente Aktivierungen sind nicht erforderlich.
- Die HTTP-[Berechtigungsrichtlinien](/de/docs/Web/HTTP/Headers/Permissions-Policy) müssen für {{HTMLElement("iframe")}}-Elemente erlaubt sein, die auf die Zwischenablage zugreifen.
- Kein dauerhaftes Einfüge-Prompt wird angezeigt, wenn eine Leseoperation durch ein Browser- oder OS-"Paste-Element" verursacht wird.

Firefox & Safari:

- Lesen und Schreiben erfordern eine transiente Aktivierung.
- Das Einfüge-Prompt wird unterdrückt, wenn Inhalte derselben Ursprungsseiten-Zwischenablage gelesen werden, aber nicht bei Inhalten von unterschiedlichen Ursprungsseiten.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, diese zu unterstützen).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web-Erweiterung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Berechtigung verfügbar. Mit dieser Berechtigung erfordert die Erweiterung keine transiente Aktivierung oder ein Einfüge-Prompt.
- Das Schreiben von Text ist in einem sicheren Kontext und mit transiente Aktivierung verfügbar. Mit der Web-Erweiterung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Berechtigung ist keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Die Systemzwischenablage wird über das globale {{domxref("Navigator.clipboard")}}-Objekt aufgerufen.

Dieser Schnipsel holt den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das die Klasse `editor` trägt. Da {{domxref("Clipboard.readText", "readText()")}} (und {{domxref("Clipboard.read", "read()")}} übrigens auch) einen leeren String zurückgibt, wenn die Zwischenablage keinen Text enthält, ist dieser Code sicher.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Artikel zur Unterstützung von Bildern für Async Clipboard](https://web.dev/articles/async-clipboard)
