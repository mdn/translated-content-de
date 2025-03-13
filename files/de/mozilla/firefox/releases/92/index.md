---
title: Firefox 92 für Entwickler
slug: Mozilla/Firefox/Releases/92
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 92, die Entwickler betreffen werden. Firefox 92 wurde am 7. September 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Time for a review of Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Die Schlüsselwörter `avoid-page` und `avoid-column` werden jetzt für die Eigenschaft {{cssxref("break-inside")}} unterstützt ([Firefox-Bug 1722945](https://bugzil.la/1722945)).
- Die Syntax mit zwei Werten für die Eigenschaft {{cssxref("font-size-adjust")}} wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Der Deskriptor {{cssxref("@font-face/size-adjust")}} wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Die CSS-Eigenschaft {{cssxref("accent-color")}} wurde implementiert ([Firefox-Bug 1722031](https://bugzil.la/1722031)).
- Der Wert `system-ui` wird jetzt für die Eigenschaft {{cssxref("font-family")}} unterstützt ([Firefox-Bug 1226042](https://bugzil.la/1226042)).

### JavaScript

- {{jsxref("Object.hasOwn()")}} kann verwendet werden, um zu testen, ob eine Eigenschaft an einem Objekt definiert oder geerbt wurde ([Firefox-Bug 1721149](https://bugzil.la/1721149)).
- Das standardmäßige 5-MB-Speicherkontingent ist jetzt für jede Herkunft verfügbar. Das Kontingent galt zuvor für eine gesamte Domänengruppe (auch bekannt als {{Glossary("eTLD", "eTLD+1")}}-Domäne; z. B. `*.wikipedia.org`). ([Firefox-Bug 1064466](https://bugzil.la/1064466)).
- Speicherbeschränkungen für [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) werden jetzt mit der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und [`Cache`](/de/docs/Web/API/Cache) geteilt ([Firefox-Bug 742822](https://bugzil.la/742822)).

### HTTP

- Firefox wird eine HTTP-Anfrage automatisch auf HTTPS upgraden, wenn ein nutzbarer {{Glossary("HTTPS_RR", "HTTPS RR")}} verfügbar ist.
  Es wird auch die in einem _HTTPS RR_ bereitgestellten Informationen verwenden, um den Prozess des Aufbaus von HTTPS-Verbindungen zu optimieren⁠—das ähnelt konzeptionell der Verwendung des {{HTTPHeader("Alt-Svc")}}-Headers.
  ([Firefox-Bug 1721132](https://bugzil.la/1721132)).

### APIs

- Die statische Eigenschaft `disabledFeatures` wurde für benutzerdefinierte Elemente implementiert ([Firefox-Bug 1723396](https://bugzil.la/1723396)).

#### DOM

- Die [Imperative Slotting API](/de/docs/Web/API/HTMLSlotElement) (Teil der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM)) wurde implementiert. ([Firefox-Bug 1705141](https://bugzil.la/1705141))
- Sie können jetzt Änderungen an Textauswahlen in {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} überwachen, indem Sie `selectionchange`-Ereignisse in [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) überwachen ([Firefox-Bug 1648944](https://bugzil.la/1648944)).

#### Medien, WebRTC und Web Audio

- Der Zugriff auf Audiowiedergabegeräte wie Lautsprecher und Kopfhörer wird jetzt durch die [speaker-selection](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection)-Feature-Policy geschützt ([Firefox-Bug 1577199](https://bugzil.la/1577199)).

### WebDriver-Konformität (Marionette)

- Verbesserte Unterstützung für die `webSocketUrl`-Fähigkeit, welche die WebDriver-BiDi-Websocket-URL zurückgibt, wenn `true` übergeben wurde und wenn BiDi unterstützt wird. ([Firefox-Bug 1692984](https://bugzil.la/1692984)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `cookieStoreId` wurde zu {{WebExtAPIRef('downloads.download')}}, {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} hinzugefügt. Die Erweiterung der Typen {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} bietet Unterstützung in {{WebExtAPIRef('downloads.search')}} und {{WebExtAPIRef('downloads.erase')}}. Web-Erweiterungen können jetzt Downloads mit spezifischen Cookie-Speichern verknüpfen, wie z. B. Containertabs ([kontextuelle Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)). ([Firefox-Bug 1669566](https://bugzil.la/1669566))

## Ältere Versionen

{{Firefox_for_developers}}
