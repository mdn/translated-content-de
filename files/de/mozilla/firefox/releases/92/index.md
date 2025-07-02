---
title: Firefox 92 für Entwickler
slug: Mozilla/Firefox/Releases/92
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 92, die Entwickler betreffen werden. Firefox 92 wurde am 7. September 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Zeit für eine Überprüfung von Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Die Schlüsselwörter `avoid-page` und `avoid-column` werden nun für die {{cssxref("break-inside")}}-Eigenschaft unterstützt ([Firefox-Bug 1722945](https://bugzil.la/1722945)).
- Die Zweiwert-Syntax für die {{cssxref("font-size-adjust")}}-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Der {{cssxref("@font-face/size-adjust")}}-Deskriptor wird jetzt unterstützt ([Firefox-Bug 1720131](https://bugzil.la/1720131)).
- Die CSS-{{cssxref("accent-color")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1722031](https://bugzil.la/1722031)).
- Der `system-ui`-Wert wird nun für die {{cssxref("font-family")}}-Eigenschaft unterstützt ([Firefox-Bug 1226042](https://bugzil.la/1226042)).

### JavaScript

- {{jsxref("Object.hasOwn()")}} kann verwendet werden, um zu testen, ob eine Eigenschaft auf einem Objekt definiert oder geerbt wurde ([Firefox-Bug 1721149](https://bugzil.la/1721149)).
- Das standardmäßige 5MB-Speicherkontingent ist nun für jede Origin verfügbar. Zuvor galt das Kontingent für eine gesamte Domain-Gruppe (auch bekannt als {{Glossary("eTLD", "eTLD+1")}} Domain; z.B. `*.wikipedia.org`). ([Firefox-Bug 1064466](https://bugzil.la/1064466)).
- Speicherkontingente für [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) werden jetzt mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dem [`Cache`](/de/docs/Web/API/Cache) geteilt ([Firefox-Bug 742822](https://bugzil.la/742822)).

### HTTP

- Firefox wird eine HTTP-Anfrage automatisch auf HTTPS aufwerten, wenn ein nutzbarer {{Glossary("HTTPS_RR", "HTTPS RR")}} verfügbar ist.
  Außerdem werden Informationen, die in einem _HTTPS RR_ bereitgestellt werden, verwendet, um den Prozess der Herstellung von HTTPS-Verbindungen zu optimieren — dies ist konzeptionell ähnlich wie die Verwendung des {{HTTPHeader("Alt-Svc")}}-Headers.
  ([Firefox-Bug 1721132](https://bugzil.la/1721132)).

### APIs

- Die `disabledFeatures`-statische Eigenschaft wurde für benutzerdefinierte Elemente implementiert ([Firefox-Bug 1723396](https://bugzil.la/1723396)).

#### DOM

- Die [Imperative Slotting API](/de/docs/Web/API/HTMLSlotElement) (Teil der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM)) wurde implementiert. ([Firefox-Bug 1705141](https://bugzil.la/1705141))
- Sie können jetzt Änderungen an Textauswahlen in {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} überwachen, indem Sie `selectionchange`-Ereignisse in [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) abhören ([Firefox-Bug 1648944](https://bugzil.la/1648944)).

#### Medien, WebRTC und Web Audio

- Der Zugriff auf Audioausgabegeräte, wie Lautsprecher und Kopfhörer, wird nun durch die [speaker-selection](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection)-Feature-Policy geschützt ([Firefox-Bug 1577199](https://bugzil.la/1577199)).

### WebDriver-Konformität (Marionette)

- Verbesserter Support für die `webSocketUrl`-Fähigkeit, die nun die WebDriver-BiDi-Websocket-URL zurückgibt, wenn `true` übergeben wurde und BiDi unterstützt wird. ([Firefox-Bug 1692984](https://bugzil.la/1692984)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `cookieStoreId` wurde zu {{WebExtAPIRef('downloads.download')}}, {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} hinzugefügt. Die Ergänzung zu den Typen {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} bietet Unterstützung in {{WebExtAPIRef('downloads.search')}} und {{WebExtAPIRef('downloads.erase')}}. Web-Erweiterungen können jetzt Downloads mit bestimmten Cookie-Stores, wie Containertabs, verknüpfen ([kontextuelle Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)). ([Firefox-Bug 1669566](https://bugzil.la/1669566))

## Ältere Versionen

{{Firefox_for_developers}}
