---
title: Firefox 153 Versionshinweise für Entwickler (Nightly)
short-title: Firefox 153 (Nightly)
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: 20c11f6af0809fa827413acf968b56bf4650d8d4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 153, die Entwickler betreffen.
Firefox 153 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [21. Juli 2026](https://whattrainisitnow.com/release/?version=153) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise verfassen -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erweiterungen benötigen jetzt eine ausdrückliche Benutzererlaubnis, um auf `file://` URLs zuzugreifen. Vorher war der Zugriff auf lokale Dateien durch die Host-Berechtigung "Zugriff auf Ihre Daten für alle Websites" abgedeckt. Diese Änderung führt eine separate Option "Zugriff auf lokale Dateien auf Ihrem Computer" in den Berechtigungseinstellungen der Erweiterung ein (nur Desktop), und der Dateizugriff ist standardmäßig für alle Erweiterungen deaktiviert, einschließlich bestehender. Die Methode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} gibt nun korrekt `true` zurück, wenn der Benutzer den Zugriff auf das Dateischema gewährt hat; zuvor gab Firefox immer `false` zurück. Darüber hinaus erfordert das Aufrufen von {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} auf `file://` URLs nun diese Berechtigung. ([Firefox Bug 2034168](https://bugzil.la/2034168))
- Unterstützt die Methode {{WebExtAPIRef("userScripts.execute()")}}, die es Erweiterungen ermöglicht, nach Bedarf Benutzerskripte in ein Tab oder ein Frame einzufügen. Im Gegensatz zu {{WebExtAPIRef("userScripts.register()")}} unterstützt diese Methode die einmalige Injektion mehrerer Skriptquellen, die in einer definierten Reihenfolge ausgeführt werden. ([Firefox Bug 1930776](https://bugzil.la/1930776))
- Fügt die {{WebExtAPIRef("publicSuffix")}} API hinzu, die es Erweiterungen ermöglicht, die registrierbare Domain (eTLD+1) und das öffentliche Suffix eines Hostnamens unter Verwendung der eingebauten [Public Suffix List](https://publicsuffix.org/) des Browsers zu bestimmen. Die API stellt drei synchrone Methoden zur Verfügung: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} und {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox Bug 1315558](https://bugzil.la/1315558))
- Extensions-Inhaltsskripte können nun konstruierte Stylesheets in [`document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) lesen und modifizieren, ohne dass `.wrappedJSObject` erforderlich ist. ([Firefox Bug 1751346](https://bugzil.la/1751346))
- Fügt die Methoden {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} hinzu, um die für kontextuelle Identitäten (Container) verfügbaren Farben und Symbole zu erhalten. ([Firefox Bug 2044712](https://bugzil.la/2044712))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 153 enthalten, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie in der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features).
