---
title: Firefox 87 für Entwickler
slug: Mozilla/Firefox/Releases/87
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 87, die Entwickler betreffen werden. Firefox 87 wurde am 23. März 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [In March, we see Firefox 87](https://hacks.mozilla.org/2021/03/in-march-we-see-firefox-87/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Entwickler können nun den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) verwenden, um {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfragen zu simulieren, ohne das Betriebssystem auf den Light- oder Dark-Mode ändern zu müssen ([Firefox Bug 1679408](https://bugzil.la/1679408) und [Firefox Bug 1692272](https://bugzil.la/1692272)).
- Entwickler können nun den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":target")}} Pseudoklasse für das aktuell ausgewählte Element umzuschalten, zusätzlich zu den zuvor unterstützten Pseudoklassen: {{cssxref(":hover")}}, {{cssxref(":active")}}, {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, {{cssxref(":focus-visible")}}, und {{cssxref(":visited")}} ([Firefox Bug 1689899](https://bugzil.la/1689899)).
- Firefox 87 bietet eine Reihe von Verbesserungen und Fehlerbehebungen im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#rule-display) in Bezug auf inaktive CSS-Regeln:
  - Die {{cssxref("table-layout")}} Eigenschaft wird nun als inaktiv für Nicht-Tabellenelemente markiert ([Firefox Bug 1551571](https://bugzil.la/1551571)).
  - Die {{cssxref("scroll-padding")}} Eigenschaften (Kurz- und Langform) werden nun als inaktiv für nicht scrollbare Elemente markiert ([Firefox Bug 1551577](https://bugzil.la/1551577)).
  - Die {{cssxref("text-overflow")}} Eigenschaft wurde zuvor fälschlicherweise für einige {{cssxref("overflow")}} Werte als inaktiv markiert ([Firefox Bug 1671457](https://bugzil.la/1671457)).

### HTML

_Keine Änderungen._

### CSS

- Einige Sprachen haben Digraphen, die immer zusammen großgeschrieben werden, zum Beispiel `IJ` im Niederländischen. Das {{cssxref("::first-letter")}} Pseudoelement respektiert nun diese Digraphen und behandelt sie als eine Einheit ([Firefox Bug 92176](https://bugzil.la/92176)).
- Das {{HTMLElement("link")}} Element wird nicht länger durch {{cssxref(":link")}}, {{cssxref(":visited")}} oder {{cssxref(":any-link")}} gematcht. Dies bringt das Verhalten in Firefox in Einklang mit dem bestehenden Verhalten in Chrome und einer kürzlichen Spezifikationsänderung ([Firefox Bug 1687538](https://bugzil.la/1687538)).

#### Entfernungen

- Die folgenden Firefox-spezifischen, thema-bezogenen Medienmerkmale wurden für die Verwendung auf Webseiten deaktiviert ([Firefox Bug 787521](https://bugzil.la/787521)):
  - `-moz-mac-graphite-theme`
  - `-moz-mac-lion-theme`
  - `-moz-maemo-classic`
  - `-moz-windows-classic`
  - `-moz-windows-compositor`
  - `-moz-windows-default-theme`
  - `-moz-windows-theme`
  - `-moz-scrollbar-end-backward`
  - `-moz-scrollbar-end-forward`
  - `-moz-scrollbar-start-backward`
  - `-moz-scrollbar-start-forward`
  - `-moz-scrollbar-thumb-proportional`
  - `-moz-menubar-drag`

- Die nicht standardisierten Werte von {{cssxref("caption-side")}} (`left`, `right`, `top-outside`, und `bottom-outside`) wurden entfernt und hinter die `layout.css.caption-side-non-standard.enabled`-Flag gesetzt ([Firefox Bug 1688695](https://bugzil.la/1688695)).

### JavaScript

_Keine Änderungen._

### HTTP

- Einige Unternehmens-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate [in CORS Preflight-Requests gesendet](/de/docs/Web/HTTP/Guides/CORS#preflight_requests_and_credentials) werden. Benutzer dieser Dienste können dieses (nicht standardkonforme) Verhalten mit der `network.cors_preflight.allow_client_cert`-Einstellung aktivieren ([Firefox Bug 1511151](https://bugzil.la/1511151)).
- Die Standard-[`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) wurde auf [`strict-origin-when-cross-origin`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#strict-origin-when-cross-origin) geändert (von `no-referrer-when-downgrade`), um das Risiko des Leakens von Referrer-Informationen bei Cross-Origin-Requests zu verringern ([Firefox Bug 1589074](https://bugzil.la/1589074)).
- [`Content-Length`](/de/docs/Web/HTTP/Reference/Headers/Content-Length) wurde zur Liste der {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} hinzugefügt ([Firefox Bug 1460299](https://bugzil.la/1460299)).

### Sicherheit

_Keine Änderungen._

### APIs

#### DOM

- Das [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) Ereignis und die [`getTargetRanges()`](/de/docs/Web/API/InputEvent/getTargetRanges)-Methode sind jetzt standardmäßig aktiviert. Sie erlauben Webanwendungen das Überschreiben von Textbearbeitungsverhalten, bevor der Browser den DOM-Baum ändert, und bieten mehr Kontrolle über Eingabeereignisse, um die Leistung zu verbessern. Das globale `beforeinput` Ereignis wird an ein {{HTMLElement("input")}} Element gesendet – oder jedes Element, dessen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut auf `true` gesetzt ist – unmittelbar bevor sich der Wert des Elements ändert. Die `getTargetRanges()` Methode des [`InputEvent`](/de/docs/Web/API/InputEvent)-Interfaces gibt ein Array von statischen Bereichen zurück, die von einer Änderung am DOM betroffen wären, falls das Eingabeereignis nicht abgebrochen wird.

### WebDriver-Konformität (Marionette)

- Die Umstellung von Marionette auf die Unterstützung von Fission (Site-Isolation) ist abgeschlossen, daher wurde die alte Marionette-Implementierung entfernt. Die `marionette.actors.enabled`-Einstellung, die zwischen den neuen und alten Implementierungen umschaltete, wurde daher ebenfalls entfernt ([Firefox Bug 1669172](https://bugzil.la/1669172)).
- WebDriver-Befehle, die einem Aufruf von `WebDriver:SwitchToFrame` folgen, werden nicht länger mit einem „no such window“-Fehler fehlschlagen, wenn der Inhalt des Frames noch nicht vollständig geladen ist ([Firefox Bug 1691348](https://bugzil.la/1691348)).
- Nach einer [Cross-Group-Seitennavigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) wird der Zugriff auf ein zuvor abgerufenes Element jetzt immer einen „stale element“-Fehler auslösen; es besteht keine Chance mehr, dass diese Aktion zu einem „no such element“-Fehler führt ([Firefox Bug 1690308](https://bugzil.la/1690308)).
- `Addon:Uninstall` löst nun einen `unknown error` aus, wenn die ID des zu deinstallierenden Add-ons unbekannt ist ([Firefox Bug 1693022](https://bugzil.la/1693022)).

## Änderungen für Add-on-Entwickler

- [nativeMessaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) ist jetzt eine [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) ([Firefox Bug 1630415](https://bugzil.la/1630415)).
- Unterstützung zum Abfragen und Festlegen von Farbmanagement-bezogenen Funktionen wurde hinzugefügt mit {{WebExtAPIRef("browserSettings.colorManagement")}} ([Firefox Bug 1719688](https://bugzil.la/1719688)) und ([Firefox Bug 1714428](https://bugzil.la/1714428)).

## Ältere Versionen

{{Firefox_for_developers}}
