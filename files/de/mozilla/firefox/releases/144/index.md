---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 3748a98051ec2fef25b4c525bf72f80d75a15cd9
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

### MathML

#### Entfernt

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Es wurde die Möglichkeit hinzugefügt, die Priorität von CSS festzulegen, das aus dem [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) eingefügt wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der Eigenschaft `cssOrigin` auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und die `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der Ursprung `"author"` Vorrang. ([Firefox Bug 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
