---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 8452b3bfba185a471bc75f796f1b4f7f32cb453c
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von und in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API bevorzugt gegenüber der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand), um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein von dem Betriebssystem, das den Browser hostet, bereitgestellter Datenpuffer, der für die kurzfristige Datenspeicherung und/oder den Datenaustausch zwischen Dokumenten oder Anwendungen verwendet wird. Sie wird normalerweise als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, manchmal als _Paste-Buffer_ bezeichnet, der über definierte Programmierschnittstellen von den meisten oder allen Programmen innerhalb der Umgebung zugänglich ist.

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Datenarten in und aus der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben, sofern der Benutzer die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) beschriebenen Kriterien erfüllt hat.

Ereignisse werden als Ergebnis von [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage verändern. Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage. Die Standardaktion kann vom Ereignishandler überschrieben werden — siehe die einzelnen Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten in oder aus der Systemzwischenablage.
    Die Spezifikation bezeichnet dies als 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen über die Modifikation der Zwischenablage bereitstellen, das sind die [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Ausschneidaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Note `Window: clipboardchange` event is in spec but not implemented -->

## Sicherheitsüberlegungen

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Datenarten in und aus der Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben.

Beim Lesen von der Zwischenablage erfordert die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation)) und dass der Aufruf als Ergebnis der Interaktion des Benutzers mit einem Browser- oder OS-„Paste-Element“ (wie das Auswählen von „Einfügen“ in einem nativen Kontextmenü) erfolgt. In der Praxis erlauben Browser oft Lesevorgänge, die diese Anforderungen nicht erfüllen, während sie andere Anforderungen stellen (wie eine Berechtigung oder eine Abfrage pro Vorgang).
Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die [Permissions API](/de/docs/Web/API/Permissions_API) `clipboard-write` Berechtigung erteilt wurde, und der Browser kann auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordern.
Browser können zusätzliche Einschränkungen für die Nutzung der Methoden zur Zugriffssteuerung der Zwischenablage festlegen.

Die Implementierungen der Browser haben sich von der Spezifikation entfernt.
Die Unterschiede werden im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand wird unten zusammengefasst:

Chromium-Browser:

- Wenn ein Lesen laut Spezifikation nicht erlaubt ist und das Dokument den Fokus hat, wird eine Anfrage zur Nutzung der Berechtigung `clipboard-read` ausgelöst und erfolgreich, wenn die Berechtigung erteilt wird (entweder weil der Benutzer die Aufforderung akzeptiert hat oder weil die Berechtigung bereits erteilt wurde).
- Schreiben erfordert entweder die Berechtigung `clipboard-write` oder eine transiente Aktivierung.
  Ist die Berechtigung erteilt, bleibt sie bestehen, und weitere transiente Aktivierungen sind nicht erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}} Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.

Firefox & Safari:

- Wird ein Lesen von der Spezifikation nicht erlaubt, aber die transiente Benutzeraktivierung wird immer noch erfüllt, wird eine Benutzeraufforderung in Form eines flüchtigen Kontextmenüs mit einer einzigen Option „Einfügen“ ausgelöst (die nach 1 Sekunde aktiviert wird) und ist erfolgreich, wenn der Benutzer die Option wählt.
- Schreiben erfordert eine transiente Aktivierung.
- Die Einfügeaufforderung wird unterdrückt, wenn auf Inhalte der selben Herkunft in der Zwischenablage zugegriffen wird, jedoch nicht bei fremden Inhalten.
- Die `clipboard-read` und `clipboard-write` Berechtigungen werden von Firefox oder Safari nicht unterstützt (und es ist nicht geplant, sie zu unterstützen).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Das Lesen von Text ist nur für Erweiterungen mit der Web-Erweiterung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) Berechtigung verfügbar.
  Mit dieser Berechtigung erfordert die Erweiterung keine transiente Aktivierung oder Einfügeaufforderung.
- Das Schreiben von Text ist im sicheren Kontext und mit transiente Aktivierung verfügbar.
  Mit der Web-Erweiterung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) Berechtigung ist keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Beispiel holt den Text von der Zwischenablage und fügt ihn dem ersten Element hinzu, das mit der Klasse `editor` gefunden wird. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage keinen Text enthält, ist dieser Code sicher.

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

- [Unterstützung von Bildern für Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
