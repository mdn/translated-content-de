---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** bietet die Möglichkeit, auf Befehle der Zwischenablage (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie asynchron von und in die Systemzwischenablage zu lesen und zu schreiben.

> [!NOTE]
> Verwenden Sie diese API anstelle der veralteten [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode, um auf die Zwischenablage zuzugreifen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer, der zum Betriebssystem gehört, auf dem der Browser läuft, und der für die kurzfristige Datenspeicherung und/oder den Datentransfer zwischen Dokumenten oder Anwendungen genutzt wird. Sie ist meist als anonymer, temporärer [Datenpuffer](https://de.wikipedia.org/wiki/Datenpuffer) implementiert, der manchmal auch _Einfügepuffer_ genannt wird und auf den von den meisten oder allen Programmen innerhalb der Umgebung über definierte Programmierschnittstellen zugegriffen werden kann.

Die Clipboard API ermöglicht es Nutzern, programmatisch Text und andere Arten von Daten von und in die Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben, vorausgesetzt, der Nutzer hat die im Abschnitt [Sicherheitsüberlegungen](#sicherheitsüberlegungen) genannten Kriterien erfüllt.

Ereignisse werden als Ergebnis von [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event)-Operationen ausgelöst, die die Zwischenablage ändern. Die Ereignisse haben eine Standardaktion, zum Beispiel kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage. Die Standardaktion kann vom Ereignishandler überschrieben werden – siehe die einzelnen Ereignisse für weitere Informationen.

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Bietet eine Schnittstelle zum Lesen und Schreiben von Text und Daten von oder in die Systemzwischenablage. Die Spezifikation bezieht sich auf diese als die 'Async Clipboard API'.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Stellt Ereignisse bereit, die Informationen im Zusammenhang mit der Änderung der Zwischenablage bereitstellen, also [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event), und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse. Die Spezifikation bezieht sich darauf als die 'Clipboard Event API'.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Stellt ein einzelnes Artikel-Format dar, das beim Lesen oder Schreiben von Daten verwendet wird.

### Erweiterungen zu anderen Schnittstellen

Die Clipboard API erweitert die folgenden APIs durch Hinzufügen der aufgeführten Funktionen.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element` [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Kopieraktion initiiert.
- `Element` [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Ausschneideaktion initiiert.
- `Element` [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wann immer der Benutzer eine Einfügeaktion initiiert.

<!-- Hinweis: Das `Window: clipboardchange`-Ereignis ist in der Spezifikation, jedoch nicht implementiert -->

## Sicherheitsüberlegungen

Die Clipboard API ermöglicht es Nutzern, programmatisch Text und andere Arten von Daten von und in die Systemzwischenablage in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zu lesen und zu schreiben.

Die Spezifikation verlangt, dass ein Nutzer kürzlich mit der Seite interagiert hat, um von der Zwischenablage zu lesen ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich). Wenn die Leseoperation durch Benutzerinteraktion mit einem "Einfüge-Element" des Browsers oder Betriebssystems (wie z. B. einem Kontextmenü) verursacht wird, soll der Browser den Nutzer um Bestätigung bitten. Zum Schreiben in die Zwischenablage erwartet die Spezifikation, dass die Seite die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `clipboard-write` erhalten hat und der Browser möglicherweise auch [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) erfordert. Browser können zusätzliche Einschränkungen bei der Nutzung der Methoden zum Zugriff auf die Zwischenablage anbringen.

Browserimplementierungen haben von der Spezifikation abgewichen. Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) festgehalten und der aktuelle Stand wird unten zusammengefasst:

Browser auf Chromium-Basis:

- Lesen erfordert die [Permissions API](/de/docs/Web/API/Permissions_API)-Berechtigung `clipboard-read` gewährt wurde. Transiente Aktivierung ist nicht erforderlich.
- Schreiben erfordert entweder die `clipboard-read`-Berechtigung oder transiente Aktivierung. Wenn die Berechtigung gewährt wird, bleibt sie bestehen und es ist keine weitere transiente Aktivierung erforderlich.
- Die HTTP [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Berechtigungen `clipboard-read` und `clipboard-write` müssen für {{HTMLElement("iframe")}}-Elemente, die auf die Zwischenablage zugreifen, erlaubt sein.
- Kein dauerhaftes Einfüge-Bestätigungsfenster wird angezeigt, wenn eine Leseoperation durch ein "Einfüge-Element" von Browser oder Betriebssystem verursacht wird.

Firefox & Safari:

- Lesen und Schreiben erfordern transiente Aktivierung.
- Die Einfüge-Bestätigung ist unterdrückt, wenn der gleiche Ursprungsinhalt der Zwischenablage gelesen wird, jedoch nicht bei ursprungsübergreifendem Inhalt.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox oder Safari nicht unterstützt (und sollen auch nicht unterstützt werden).

Firefox [Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Lesen von Text ist nur für Erweiterungen mit der Web-Erweiterungs-Berechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) verfügbar. Mit dieser Berechtigung erfordert die Erweiterung keine transiente Aktivierung oder Einfüge-Bestätigungsfenster.
- Schreiben von Text ist in einem sicheren Kontext und mit transiente Aktivierung verfügbar. Mit der Web-Erweiterungs-Berechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist transiente Aktivierung nicht erforderlich.

## Beispiele

### Zugriff auf die Zwischenablage

Auf die Systemzwischenablage wird über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) zugegriffen.

Dieses Snippet ruft den Text von der Zwischenablage ab und fügt ihn zum ersten gefundenen Element mit der Klasse `editor` hinzu. Da [`readText()`](/de/docs/Web/API/Clipboard/readText) (und auch [`read()`](/de/docs/Web/API/Clipboard/read)) einen leeren String zurückgibt, wenn die Zwischenablage kein Text ist, ist dieser Code sicher.

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

- [Artikel zum Unterstützen von Bildern für die Async Clipboard](https://web.dev/articles/async-clipboard)
