---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 22e14749bb928385b10b287b380c2db36177110f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

### CSS

- Das {{cssxref("::details-content")}} Pseudoelement ist jetzt standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen.
  ([Firefox Bug 1941406](https://bugzil.la/1941406)).

<!-- #### Entfernen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### SVG -->

<!-- #### Entfernen -->

<!-- ### HTTP -->

<!-- #### Entfernen -->

<!-- ### Sicherheit -->

<!-- #### Entfernen -->

### APIs

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

#### Entfernen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) Eigenschaft wird nicht mehr unterstützt.
  ([Firefox Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))
- Die Nutzer-Auswahl eines Erweiterungsvorschlags in der Adressleiste (Omnibox), eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird jetzt als [Nutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Neben der Aktivierung der APIs, die eine Nutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die `"activeTab"` Berechtigung.

<!-- ### Entfernen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  Die **`text-autospace`** CSS-Eigenschaft ermöglicht es Ihnen, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen festzulegen. Derzeit werden diese Werte nur geparst und haben keinen Effekt auf die Ausgabe. ([Firefox Bug 1869577](https://bugzil.la/1869577)).

Diese Funktionen werden in Firefox 143 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.
