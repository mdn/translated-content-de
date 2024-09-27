---
title: Firefox 87 für Entwickler
slug: Mozilla/Firefox/Releases/87
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 87, die Entwickler betreffen werden. Firefox 87 wurde am 23. März 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [In March, we see Firefox 87](https://hacks.mozilla.org/2021/03/in-march-we-see-firefox-87/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### Entwicklertools

- Entwickler können nun den [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) verwenden, um {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Queries zu simulieren, ohne das Betriebssystem in den hellen oder dunklen Modus umstellen zu müssen ([Firefox Fehler 1679408](https://bugzil.la/1679408) und [Firefox Fehler 1692272](https://bugzil.la/1692272)).
- Entwickler können nun den [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) verwenden, um die {{cssxref(":target")}} Pseudo-Klasse für das aktuell ausgewählte Element umzuschalten, zusätzlich zu den zuvor unterstützten Pseudo-Klassen: {{cssxref(":hover")}}, {{cssxref(":active")}} und {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, {{cssxref(":focus-visible")}}, und {{cssxref(":visited")}} ([Firefox Fehler 1689899](https://bugzil.la/1689899)).
- Firefox 87 bringt eine Reihe von Verbesserungen und Fehlerbehebungen im [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#rule-display) im Zusammenhang mit inaktiven CSS-Regeln:

  - Die Eigenschaft {{cssxref("table-layout")}} wird nun als inaktiv für Nicht-Tabellen-Elemente markiert ([Firefox Fehler 1551571](https://bugzil.la/1551571)).
  - Die Eigenschaften {{cssxref("scroll-padding")}} (Kurz- und Langform) werden nun als inaktiv für nicht-scrollbare Elemente markiert ([Firefox Fehler 1551577](https://bugzil.la/1551577)).
  - Die Eigenschaft {{cssxref("text-overflow")}} wurde zuvor fälschlicherweise als inaktiv für einige {{cssxref("overflow")}}-Werte markiert ([Firefox Fehler 1671457](https://bugzil.la/1671457)).

### HTML

_Keine Änderungen._

### CSS

- Einige Sprachen haben Digraphen, die immer zusammen großgeschrieben werden, zum Beispiel `IJ` im Niederländischen. Das {{cssxref("::first-letter")}} Pseudo-Element respektiert nun diese Digraphen und behandelt sie als eine Einheit ([Firefox Fehler 92176](https://bugzil.la/92176)).
- Das {{HTMLElement("link")}} Element wird nicht mehr von {{cssxref(":link")}}, {{cssxref(":visited")}}, oder {{cssxref(":any-link")}} erfasst. Dies bringt das Verhalten in Firefox in Einklang mit dem bestehenden Verhalten in Chrome und einer aktuellen Spezifikationsänderung ([Firefox Fehler 1687538](https://bugzil.la/1687538)).

#### Entfernungen

- Die folgenden Firefox-spezifischen, themenbezogenen Media-Features wurden für die Nutzung in Webseiten deaktiviert ([Firefox Fehler 787521](https://bugzil.la/787521)):

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

- Die nicht standardmäßigen Werte von {{cssxref("caption-side")}} (`left`, `right`, `top-outside`, und `bottom-outside`) wurden entfernt und hinter dem `layout.css.caption-side-non-standard.enabled` Flag platziert ([Firefox Fehler 1688695](https://bugzil.la/1688695)).

### JavaScript

_Keine Änderungen._

### HTTP

- Einige Unternehmens-Authentifizierungsdienste erfordern, dass TLS-Client-Zertifikate in [CORS-Preflight-Anfragen](/de/docs/Web/HTTP/CORS#preflight_requests_and_credentials) gesendet werden. Benutzer dieser Dienste können dieses (nicht spezifikationskonforme) Verhalten mit der Einstellung `network.cors_preflight.allow_client_cert` aktivieren ([Firefox Fehler 1511151](https://bugzil.la/1511151)).
- Die Standard-`Referrer-Policy` wurde zu `strict-origin-when-cross-origin` geändert (von `no-referrer-when-downgrade`), um das Risiko der Weitergabe von Referrer-Informationen bei Cross-Origin-Anfragen zu reduzieren ([Firefox Fehler 1589074](https://bugzil.la/1589074)).
- [`Content-Length`](/de/docs/Web/HTTP/Headers/Content-Length) wurde zur Liste der [CORS-safelisted Response Header](/de/docs/Glossary/CORS-safelisted_response_header) hinzugefügt ([Firefox Fehler 1460299](https://bugzil.la/1460299)).

### Sicherheit

_Keine Änderungen._

### APIs

#### DOM

- Das [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) Ereignis und die [`getTargetRanges()`](/de/docs/Web/API/InputEvent/getTargetRanges) Methode sind jetzt standardmäßig aktiviert. Sie ermöglichen es Web-Apps, das Verhalten der Texteingabe zu überschreiben, bevor der Browser den DOM-Baum ändert, und bieten mehr Kontrolle über Eingabeereignisse, um die Leistung zu verbessern. Das globale `beforeinput` Ereignis wird an ein {{HTMLElement("input")}} Element gesendet — oder an jedes Element, dessen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut auf `true` gesetzt ist — unmittelbar bevor sich der Wert des Elements ändert. Die `getTargetRanges()` Methode der [`InputEvent`](/de/docs/Web/API/InputEvent) Schnittstelle gibt ein Array von statischen Bereichen zurück, die von einer Änderung des DOMs betroffen sein werden, wenn das Eingabeereignis nicht abgebrochen wird.

### WebDriver-Konformität (Marionette)

- Die Arbeit an der Neufassung von Marionette zur Unterstützung von Fission (Site-Isolation) wurde abgeschlossen, sodass die alte Marionette-Implementierung entfernt wurde. Die Einstellung `marionette.actors.enabled`, die zwischen den neuen und alten Implementierungen umschaltete, wurde daher ebenfalls entfernt ([Firefox Fehler 1669172](https://bugzil.la/1669172)).
- WebDriver-Befehle nach einem Aufruf von `WebDriver:SwitchToFrame` schlagen nun nicht mehr mit einem "no such window" Fehler fehl, wenn der Inhalt des Rahmens noch nicht vollständig geladen ist ([Firefox Fehler 1691348](https://bugzil.la/1691348)).
- Nach einer [gruppenübergreifenden Seiten-Navigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) löst der Zugriff auf ein zuvor abgerufenes Element nun immer einen "stale element" Fehler aus; es gibt keine Möglichkeit mehr, dass diese Aktion zu einem "no such element" Fehler führt ([Firefox Fehler 1690308](https://bugzil.la/1690308)).
- `Addon:Uninstall` löst jetzt einen `unknown error` aus, wenn die ID des zu deinstallierenden Add-ons unbekannt ist ([Firefox Fehler 1693022](https://bugzil.la/1693022)).

## Änderungen für Add-on-Entwickler

- [nativeMessaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) ist jetzt eine [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) ([Firefox Fehler 1630415](https://bugzil.la/1630415)).
- Unterstützung für das Abfragen und Setzen von Farbmanagement-bezogenen Funktionen wurde hinzugefügt mit {{WebExtAPIRef("browserSettings.colorManagement")}} ([Firefox Fehler 1719688](https://bugzil.la/1719688)) und ([Firefox Fehler 1714428](https://bugzil.la/1714428)).

## Ältere Versionen

{{Firefox_for_developers}}
