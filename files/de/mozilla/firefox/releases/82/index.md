---
title: Firefox 82 für Entwickler
slug: Mozilla/Firefox/Releases/82
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 82, die Entwickler betreffen. Firefox 82 wurde am 20. Oktober 2020 veröffentlicht.

> [!NOTE]
> Siehe auch [Coming through with Firefox 82](https://hacks.mozilla.org/2020/10/coming-through-with-firefox-82/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Sie können nun [Server-sent Events inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_server-sent_events/index.html) mit dem [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ([Firefox-Bug 1640857](https://bugzil.la/1640857)).
- Das _Nachrichten_-Panel des Netzwerk-Monitors wurde nun mit dem _Antwort_-Panel zusammengeführt — Nachrichten (z.B. von WebSockets oder Server-sent Events) können jetzt direkt unter der Antwortliste angezeigt werden ([Firefox-Bug 1636421](https://bugzil.la/1636421)).

### HTML

- Der Farbwähler, der für [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) verwendet wird, ist nun auf Windows per Tastatur zugänglich ([Firefox-Bug 1526820](https://bugzil.la/1526820)).
- Das `allow-downloads`-Flag für das [`<iframe sandbox>`](/de/docs/Web/HTML/Element/iframe)-Attribut wird jetzt unterstützt ([Firefox-Bug 1656212](https://bugzil.la/1656212)).

### CSS

- Unterstützung für das neue {{CSSxRef("::file-selector-button", "::file-selector-button")}} Pseudo-Element wurde hinzugefügt. Dieses Pseudo-Element repräsentiert die Dateiauswahl-Schaltfläche innerhalb eines [`<input type="file">`](/de/docs/Web/HTML/Element/input/file)-Elements ([Firefox-Bug 1635675](https://bugzil.la/1635675), [Firefox-Bug 1662478](https://bugzil.la/1662478)).
- Wir haben die Fehlererkennung für die {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen verbessert. Diese Pseudoklassen akzeptieren jetzt eine tolerante Selektorliste, wobei ein ungültiger Selektor in der Liste nicht die gesamte Liste ungültig macht ([Firefox-Bug 1664718](https://bugzil.la/1664718)).
- `appearance: button` gilt jetzt nur noch für Schaltflächen; der `button`-Wert von {{CSSxRef("appearance")}} verhält sich ansonsten wie `auto` ([Firefox-Bug 1662703](https://bugzil.la/1662703)).

#### Entfernt

- Wir haben die proprietäre [`:-moz-user-disabled`](/de/docs/Web/CSS/:-moz-user-disabled) Pseudoklasse entfernt ([Firefox-Bug 1664432](https://bugzil.la/1664432)).

### HTTP

- Die `inline`-Direktive des [`Content-Disposition`](/de/docs/Web/HTTP/Headers/Content-Disposition) Headers wird jetzt ignoriert, wenn das `download`-Attribut des HTML [`<a>`](/de/docs/Web/HTML/Element/a) Elements angegeben ist (für [gleichherkunftsbezogene URLs](/de/docs/Web/Security/Same-origin_policy)). Beachten Sie, dass, falls angegeben, der `Content-Disposition`-Header `filename` gegenüber einem im `download`-Attribut angegebenen Dateinamen bevorzugt wird ([Firefox-Bug 1658877](https://bugzil.la/1658877)).

### APIs

#### Neue APIs

- Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1665496](https://bugzil.la/1665496)).

#### DOM

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) wird nicht mehr für verschachtelte/rekursive Aufrufe unterstützt, die jetzt `false` zurückgeben werden ([Firefox-Bug 1634262](https://bugzil.la/1634262)).
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) löst die Ausnahme `NotFoundError` aus, wenn die Pointer-`id` ungültig ist, gemäß der [Spezifikation](https://w3c.github.io/pointerevents/#setting-pointer-capture) ([Firefox-Bug 1662124](https://bugzil.la/1662124)). Zuvor wurde fälschlicherweise eine `InvalidPointerId`-Ausnahme ausgelöst.
- Die [`window.name`](/de/docs/Web/API/Window/name) Eigenschaft wird auf einen leeren String zurückgesetzt, wenn ein Tab eine Seite aus einer anderen Domäne lädt, und wiederhergestellt, wenn die ursprüngliche Seite neu geladen wird (z.B. über die "Zurück"-Schaltfläche). Dies verhindert, dass eine nicht vertrauenswürdige Seite auf Informationen zugreift, die die vorherige Seite möglicherweise in der Variablen gespeichert hat. Diese Änderung könnte sich auf Frameworks auswirken, die `window.name` für domänenübergreifende Nachrichten verwenden ([Firefox-Bug 444222](https://bugzil.la/444222)).

### WebDriver-Konformität (Marionette)

- Um eine realistischere Benutzer-Navigation zu simulieren, wurden alle unterstützten Navigationsbefehle in den übergeordneten Prozess verschoben ([Firefox-Bug 1612831](https://bugzil.la/1612831)).
- Wir haben die Prüfungen für den aktuellen oder obersten Surfumgebungskontext für alle Befehle aktualisiert, um die Konformität mit der WebDriver-Spezifikation zu verbessern ([Firefox-Bug 1493108](https://bugzil.la/1493108)).
- Ein Fehler im `WebDriver:ElementClick` wurde behoben, der manchmal dazu führte, dass der Befehl vor der tatsächlichen Erzeugung des Klick-Ereignisses zurückkehrte ([Firefox-Bug 1394354](https://bugzil.la/1394354)).

## Änderungen für Add-on-Entwickler

- Die Methoden [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab) und [`tabs.captureVisibleTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab) erfassen jetzt einen Bereich des Inhalts des relevanten Tabs, der durch die `rect`-Eigenschaft des bereitgestellten [`options`](/de/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails)-Objekts angegeben wird, oder den sichtbaren Bereich des Tabs, wenn diese Eigenschaft nicht angegeben ist ([Firefox-Bug 1636508](https://bugzil.la/1636508)). Zuvor war die `rect`-Eigenschaft nicht verfügbar und diese Methoden erfassten immer den sichtbaren Bereich des relevanten Tabs.
- Der schreibgeschützte Zugriff auf `cookieStoreId` erfordert nicht mehr die Berechtigung `"cookies"` ([Firefox-Bug 1662329](https://bugzil.la/1662329)).

## Ältere Versionen

{{Firefox_for_developers}}
