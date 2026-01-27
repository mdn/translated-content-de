---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: bdb21cdfa9a7dc7c65222d2219aa2d96543d8a2e
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard-API** bietet die Möglichkeit, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von der und zur Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, welches den Browser hostet. Sie wird für die kurzfristige Datenspeicherung und/oder den Datenaustausch zwischen Dokumenten oder Anwendungen verwendet. Sie wird üblicherweise als anonymer, temporärer [Datenspeicher](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal auch als _Paste-Puffer_ bezeichnet wird und der über definierte Programmierschnittstellen von den meisten oder allen Programmen innerhalb der Umgebung zugänglich ist.

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Arten von Daten in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) von und zur Systemzwischenablage zu lesen und zu schreiben, sofern der Benutzer die in den [Sicherheitsüberlegungen](#sicherheitsüberlegungen) dargelegten Kriterien erfüllt hat.

Ereignisse werden als Ergebnis der [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage ändern. Diese Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage. Die Standardaktion kann durch den Ereignishandler überschrieben werden – siehe jedes der Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten zur oder von der Systemzwischenablage.
    In der Spezifikation wird dies als 'Async Clipboard API' bezeichnet.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Stellt Ereignisse dar, die Informationen zur Änderung der Zwischenablage bereitstellen, das heißt [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    In der Spezifikation wird dies als 'Clipboard Event API' bezeichnet.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Stellt ein Einzelpositionformat dar, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen anderer Schnittstellen

Die Clipboard-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis
  - : Ein Ereignis, das immer dann ausgelöst wird, wenn der Benutzer eine Einfügeaktion initiiert.

<!-- Beachten Sie, dass das `Window: clipboardchange`-Ereignis in der Spezifikation steht, aber nicht implementiert ist -->

## Sicherheitsüberlegungen

Die Clipboard-API ermöglicht es Benutzern, programmgesteuert Text und andere Arten von Daten in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) von und zur Systemzwischenablage zu lesen und zu schreiben.

Beim Lesen aus der Zwischenablage verlangt die Spezifikation, dass ein Benutzer kürzlich mit der Seite interagiert hat ([transient user activation](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf als Ergebnis der Interaktion des Benutzers mit einem Browser- oder OS-"Paste-Element" erfolgt (wie z.B. die Auswahl "Einfügen" in einem nativen Kontextmenü). In der Praxis erlauben Browser oft Lesevorgänge, die diese Anforderungen nicht erfüllen, während sie andere Anforderungen stellen (wie z.B. eine Berechtigung oder pro-Operation Prompt). Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass der Seite die `clipboard-write`-Berechtigung der [Permissions-API](/de/docs/Web/API/Permissions_API) erteilt wurde, und der Browser kann auch eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) verlangen. Browser können zusätzliche Einschränkungen hinsichtlich der Verwendung der Methoden zum Zugriff auf die Zwischenablage auferlegen.

Browserimplementierungen haben sich von der Spezifikation entfernt. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst und der aktuelle Stand ist unten zusammengefasst:

Chromium-Browser:

- Wenn ein Lesevorgang von der Spezifikation nicht erlaubt ist und das Dokument den Fokus hat, wird eine Anfrage zur Verwendung der Berechtigung `clipboard-read` ausgelöst und erfolgreich, wenn die Berechtigung erteilt wurde (entweder weil der Benutzer das Prompt akzeptiert hat oder weil die Berechtigung bereits erteilt wurde).
- Schreiben erfordert entweder die `clipboard-write`-Berechtigung oder eine transiente Aktivierung.
  Wenn die Berechtigung erteilt wird, bleibt sie bestehen und weitere transiente Aktivierungen sind nicht erforderlich.
- Die HTTP-Berechtigungen [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente erlaubt sein, die auf die Zwischenablage zugreifen.

Firefox & Safari:

- Wenn ein Lesevorgang von der Spezifikation nicht erlaubt ist, aber die transiente Benutzeraktivierung dennoch erfüllt wird, wird ein Benutzer-Prompt in Form eines flüchtigen Kontextmenüs mit einer einzigen "Einfügen"-Option ausgelöst (die nach einer Sekunde aktiviert wird) und erfolgreich, wenn der Benutzer die Option auswählt.
- Schreiben erfordert eine transiente Aktivierung.
- Der Paste-Prompt wird unterdrückt, wenn gleichursprünglicher Zwischenablageinhalt gelesen wird, jedoch nicht bei ursprungsübergreifendem Inhalt.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und sind nicht für die Zukunft geplant).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen ist für Erweiterungen mit der Web-Erweiterungsberechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) verfügbar. Mit dieser Berechtigung benötigt die Erweiterung keine transiente Aktivierung oder die Verwendung des Paste-Prompts. Ab Firefox 147 ist Lesen auch ohne die Berechtigung in einem sicheren Kontext, mit transiente Aktivierung und nachdem der Benutzer auf das Paste-Prompt in einem flüchtigen Kontextmenü geklickt hat, verfügbar.
- Schreiben ist in einem sicheren Kontext und mit transiente Aktivierung verfügbar. Allerdings ist bei der Web-Erweiterungsberechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) keine transiente Aktivierung erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) angesprochen.

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

- [Artikel zur Bildunterstützung für Async Clipboard](https://web.dev/articles/async-clipboard)
