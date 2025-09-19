---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: ae801dd2331e159f1abc812b40ef0a57507596f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen. Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

### MathML

#### Removals

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde nun entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Fehler 1336058](https://bugzil.la/1336058)).

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC und Web Audio

- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind jetzt [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Fehler 1209163](https://bugzil.la/1209163)).
- Das [`closing` Ereignis](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignis-Handler werden nun auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox Fehler 1611953](https://bugzil.la/1611953)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, die Priorität von CSS zu bestimmen, das über den [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) eingefügt wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"` Ursprung Vorrang. ([Firefox Fehler 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Features werden in Firefox 144 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
