---
title: Firefox 92 für Entwickler
slug: Mozilla/Firefox/Releases/92
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 92, die Entwickler betreffen. Firefox 92 wurde am 7. September 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Zeit für eine Überprüfung von Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Die Schlüsselwörter `avoid-page` und `avoid-column` werden jetzt für die Eigenschaft {{cssxref("break-inside")}} unterstützt ([Firefox Bug 1722945](https://bugzil.la/1722945)).
- Die Zwei-Werte-Syntax für die Eigenschaft {{cssxref("font-size-adjust")}} wird jetzt unterstützt ([Firefox Bug 1720131](https://bugzil.la/1720131)).
- Der Deskriptor {{cssxref("@font-face/size-adjust")}} wird jetzt unterstützt ([Firefox Bug 1720131](https://bugzil.la/1720131)).
- Die CSS-Eigenschaft {{cssxref("accent-color")}} wurde implementiert ([Firefox Bug 1722031](https://bugzil.la/1722031)).
- Der Wert `system-ui` wird jetzt für die Eigenschaft {{cssxref("font-family")}} unterstützt ([Firefox Bug 1226042](https://bugzil.la/1226042)).

### JavaScript

- {{jsxref("Object.hasOwn()")}} kann verwendet werden, um zu testen, ob eine Eigenschaft auf einem Objekt definiert oder vererbt wurde ([Firefox Bug 1721149](https://bugzil.la/1721149)).
- Das standardmäßige 5 MB große Speicherkontingent ist nun für jeden Ursprung verfügbar. Das Kontingent galt zuvor für eine gesamte Domänengruppe (auch bekannt als {{Glossary("eTLD", "eTLD+1")}}-Domäne; z. B. `*.wikipedia.org`). ([Firefox Bug 1064466](https://bugzil.la/1064466)).
- Speicherkontingente für {{domxref("Window.localStorage")}} werden jetzt mit der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und {{domxref("Cache")}} geteilt ([Firefox Bug 742822](https://bugzil.la/742822)).

### HTTP

- Firefox wird eine HTTP-Anfrage automatisch auf HTTPS aufrüsten, wenn ein nutzbares {{Glossary("HTTPS RR")}} verfügbar ist.
  Es wird auch die im _HTTPS RR_ bereitgestellten Informationen verwenden, um den Prozess der Herstellung von HTTPS-Verbindungen zu optimieren – dies ist konzeptionell ähnlich wie die Verwendung des {{HTTPHeader("Alt-Svc")}} Headers.
  ([Firefox Bug 1721132](https://bugzil.la/1721132)).

### APIs

- Die statische Eigenschaft `disabledFeatures` wurde für benutzerdefinierte Elemente implementiert ([Firefox Bug 1723396](https://bugzil.la/1723396)).

#### DOM

- Die [Imperative Slotting API](/de/docs/Web/API/HTMLSlotElement) (Teil der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM)) wurde implementiert. ([Firefox Bug 1705141](https://bugzil.la/1705141))
- Sie können jetzt Änderungen an Textauswahlen in {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} überwachen, indem Sie auf `selectionchange`-Ereignisse in {{domxref("HTMLInputElement.selectionchange_event", "HTMLInputElement")}} und {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}} lauschen ([Firefox Bug 1648944](https://bugzil.la/1648944)).

#### Media, WebRTC und Web Audio

- Der Zugriff auf Audioausgabegeräte, wie Lautsprecher und Kopfhörer, ist jetzt durch die [speaker-selection](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) Feature-Policy geschützt ([Firefox Bug 1577199](https://bugzil.la/1577199)).

### WebDriver-Kompatibilität (Marionette)

- Verbesserte Unterstützung für die `webSocketUrl`-Fähigkeit, die jetzt die WebDriver BiDi-Websocket-URL zurückgibt, wenn `true` übergeben wurde und wenn BiDi unterstützt wird. ([Firefox Bug 1692984](https://bugzil.la/1692984)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `cookieStoreId` wurde zu {{WebExtAPIRef('downloads.download')}}, {{WebExtAPIRef('downloads.DownloadQuery')}}, und {{WebExtAPIRef('downloads.DownloadItem')}} hinzugefügt. Die Ergänzung zu den Typen {{WebExtAPIRef('downloads.DownloadQuery')}} und {{WebExtAPIRef('downloads.DownloadItem')}} bietet Unterstützung in {{WebExtAPIRef('downloads.search')}} und {{WebExtAPIRef('downloads.erase')}}. Web-Erweiterungen können jetzt Downloads mit bestimmten Cookie-Stores, wie z.B. Container-Tabs ([kontextbezogene Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)), verknüpfen. ([Firefox Bug 1669566](https://bugzil.la/1669566))

## Ältere Versionen

{{Firefox_for_developers}}
