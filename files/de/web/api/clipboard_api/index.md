---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** bietet die Möglichkeit, auf Zwischenablagebefehle (ausschneiden, kopieren und einfügen) zu reagieren sowie asynchron von und in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API bevorzugt gegenüber der veralteten [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workern](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, auf dem der Browser läuft. Sie wird für die kurzfristige Datenspeicherung und/oder den Datentransfer zwischen Dokumenten oder Anwendungen verwendet. Sie ist in der Regel als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal als _Paste-Puffer_ bezeichnet wird und von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugänglich ist.

Die Clipboard API ermöglicht es Nutzern, programmgesteuert Text und andere Arten von Daten zu und von der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen und zu schreiben, vorausgesetzt, der Nutzer hat die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) aufgeführten Kriterien erfüllt.

Ereignisse werden infolge von [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage modifizieren. Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage. Die Standardaktion kann vom Ereignishandler überschrieben werden — siehe die jeweiligen Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten zu oder von der Systemzwischenablage. Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Stellt Ereignisse bereit, die Informationen zur Modifikation der Zwischenablage enthalten, nämlich [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse. Die Spezifikation bezeichnet dies als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Stellt ein einzelnes Item-Format dar, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Hinweis: `Window: clipboardchange`-Ereignis ist in der Spezifikation, aber nicht implementiert -->

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Nutzern, programmgesteuert Text und andere Arten von Daten zu und von der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) zu lesen und zu schreiben.

Beim Lesen von der Zwischenablage verlangt die Spezifikation, dass ein Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf als Ergebnis der Interaktion des Benutzers mit einem "Paste-Element" des Browsers oder Betriebssystems erfolgt (z. B. durch Auswahl von "Einfügen" in einem nativen Kontextmenü). In der Praxis erlauben Browser oft Leseoperationen, die diese Anforderungen nicht erfüllen, während stattdessen andere Anforderungen gestellt werden (wie z.B. eine Erlaubnis oder ein pro-Operation-Prompt). Beim Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Permissions API](/de/docs/Web/API/Permissions_API) `clipboard-write`-Berechtigung erteilt wurde, und der Browser kann auch [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) verlangen. Browser können zusätzliche Einschränkungen bei der Nutzung der Methoden zum Zugriff auf die Zwischenablage festlegen.

Browserimplementierungen haben sich von der Spezifikation entfernt. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Wenn ein Lesen laut Spezifikation nicht erlaubt ist und das Dokument den Fokus hat, wird eine Anfrage zur Nutzung der Berechtigung `clipboard-read` ausgelöst und ist erfolgreich, wenn die Berechtigung erteilt wurde (entweder weil der Benutzer die Aufforderung akzeptiert hat oder weil die Berechtigung bereits erteilt wurde).
- Schreiben erfordert entweder die `clipboard-write`-Berechtigung oder transiente Aktivierung. Wenn die Berechtigung erteilt wird, bleibt sie bestehen und eine weitere transiente Aktivierung ist nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}} Elemente erlaubt sein, die auf die Zwischenablage zugreifen.

Firefox & Safari:

- Wenn ein Lesen nicht laut Spezifikation erlaubt ist, aber eine transiente Benutzeraktivierung trotzdem erfüllt ist, wird eine Benutzeraufforderung in Form eines flüchtigen Kontextmenüs mit einer einzigen "Einfügen"-Option ausgelöst (die nach 1 Sekunde aktiviert wird) und ist erfolgreich, wenn der Benutzer die Option wählt.
- Schreiben erfordert transiente Aktivierung.
- Die Paste-Aufforderung wird unterdrückt, wenn gleiche Ursprungs-Zwischenablageinhalte gelesen werden, aber nicht bei fremden Ursprungsinhalten.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, sie zu unterstützen).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web Extension [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread)-Berechtigung verfügbar. Mit dieser Berechtigung erfordert die Erweiterung keine transiente Aktivierung oder eine Paste-Aufforderung.
- Das Schreiben von Text ist im sicheren Kontext und mit transiente Aktivierung verfügbar. Mit der Web Extension [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite)-Berechtigung ist keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet holt den Text aus der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

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

- [Artikel zu Bildunterstützung für Async Clipboard](https://web.dev/articles/async-clipboard)
