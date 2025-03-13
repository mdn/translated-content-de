---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** ermöglicht die Reaktion auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) sowie das asynchrone Lesen und Schreiben in die Systemzwischenablage.

> [!NOTE]
> Verwenden Sie diese API gegenüber der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand) zum Zugriff auf die Zwischenablage.

> [!NOTE]
> Diese API ist in [Web Workern](/de/docs/Web/API/Web_Workers_API) nicht verfügbar (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Nutzung

Die _Systemzwischenablage_ ist ein Datenpuffer, der dem Betriebssystem gehört, das den Browser hostet. Sie wird für die kurzfristige Datenspeicherung und/oder den Datentransfer zwischen Dokumenten oder Anwendungen verwendet.
Sie ist üblicherweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal auch als _Einfüge-Puffer_ bezeichnet, und kann von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugegriffen werden.

Die Clipboard API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in die und aus der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben, vorausgesetzt, der Benutzer hat die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) aufgeführten Kriterien erfüllt.

Ereignisse werden als Ergebnis von [Ausschneiden](/de/docs/Web/API/Element/cut_event), [Kopieren](/de/docs/Web/API/Element/copy_event) und [Einfügen](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage verändern.
Die Ereignisse haben eine Standardaktion, beispielsweise kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage.
Die Standardaktion kann durch den Ereignishandler überschrieben werden – siehe für weitere Informationen die jeweiligen Ereignisse.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in die oder aus der Systemzwischenablage.
    Die Spezifikation bezeichnet dies als die 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, das heißt [Ausschneiden](/de/docs/Web/API/Element/cut_event), [Kopieren](/de/docs/Web/API/Element/copy_event) und [Einfügen](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als die 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Datenformat, das zum Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Benutzern, programmatisch Text und andere Arten von Daten in die und aus der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben.

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage zu lesen ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).
Wenn die Leseoperation durch Benutzerinteraktion mit einem Browser- oder Betriebssystem-"Einfügeelement" ausgelöst wird (zum Beispiel durch ein Kontextmenü), wird erwartet, dass der Browser den Benutzer um Bestätigung bittet.
Zum Schreiben in die Zwischenablage wird erwartet, dass die Seite die [Permissions API](/de/docs/Web/API/Permissions_API) `clipboard-write`-Berechtigung hat, und der Browser kann auch [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) verlangen.
Browser können zusätzliche Einschränkungen bei der Verwendung der Methoden zum Zugriff auf die Zwischenablage auferlegen.

Die Implementierungen der Browser haben sich von der Spezifikation entfernt.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst, und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Lesen erfordert die [Permissions API](/de/docs/Web/API/Permissions_API) `clipboard-read`-Berechtigung.
  Vorübergehende Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die `clipboard-write`-Berechtigung oder eine vorübergehende Aktivierung.
  Wenn die Berechtigung erteilt wird, bleibt sie bestehen, und weitere vorübergehende Aktivierung ist nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.
- Keine dauerhafte Einfügeaufforderung wird angezeigt, wenn eine Leseoperation durch ein Browser- oder Betriebssystem-"Einfügeelement" ausgelöst wird.

Firefox & Safari:

- Lesen und Schreiben erfordern eine vorübergehende Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn derselbe Ursprung Zwischenablageinhalte liest, jedoch nicht bei Inhalten fremder Herkunft.
- Die `clipboard-read` und `clipboard-write` Berechtigungen werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, sie zu unterstützen).

Firefox [Web Extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen von Text ist nur für Erweiterungen verfügbar, die die Web Extension [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread)-Berechtigung haben.
  Mit dieser Berechtigung erfordert die Erweiterung keine vorübergehende Aktivierung oder eine Einfügeaufforderung.
- Schreiben von Text ist im sicheren Kontext und mit vorübergehender Aktivierung verfügbar.
  Mit der Web Extension [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite)-Berechtigung ist keine vorübergehende Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über den globalen [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet ruft den Text aus der Zwischenablage ab und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird.
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

- [Artikel zur Unterstützung von Bildern für die Async Clipboard](https://web.dev/articles/async-clipboard)
