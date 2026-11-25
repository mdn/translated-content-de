---
title: Versionshinweise für Entwickler zu Firefox 162 (Beta)
short-title: Firefox 162 (Beta)
slug: Mozilla/Firefox/Releases/162
l10n:
  sourceCommit: 6f16e81ce58f6cf9235f7121550221d4e5ca0c41
---

Dieser Artikel informiert über die Änderungen in Firefox 162, die für Entwickler relevant sind.
Firefox 162 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [8. Dezember 2026](https://whattrainisitnow.com/release/?version=162).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentierung bei allen Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Die ARIA-Rollen `sectionheader` und `sectionfooter` werden jetzt unterstützt. Sie kennzeichnen den Kopf- und Fußbereich eines Abschnitts und unterscheiden sich damit von den seitenweiten Landmark-Rollen [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) und [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role). ([Firefox-Bug 1893684](https://bugzil.la/1893684))
- Das Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) ist jetzt standardmäßig aktiviert. Damit lässt sich die berechnete Überschriftenebene von Überschriften innerhalb eines Teilbaums um einen angegebenen Wert verschieben. ([Firefox-Bug 2044348](https://bugzil.la/2044348))

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die API [CSS Typed Object Model (CSS Typed OM)](/de/docs/Web/API/CSS_Typed_OM_API) ist jetzt auf allen Kanälen standardmäßig aktiviert. Sie stellt CSS-Eigenschaftswerte als typisierte JavaScript-Objekte bereit, auf die über [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) und [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zugegriffen werden kann. Außerdem bietet sie [numerische CSS-Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) wie `CSS.px()` und `CSS.em()`. ([Firefox-Bug 2089681](https://bugzil.la/2089681))
- Der Wert `border-area` für die Eigenschaft {{cssxref("background-clip")}} wird jetzt unterstützt. Er beschneidet den Hintergrund auf den Bereich innerhalb des Rahmens des Elements, einschließlich der Bereiche unter transparenten Teilen des Rahmens. ([Firefox-Bug 2093287](https://bugzil.la/2093287))

<!-- #### Entfernungen -->

### JavaScript

- Zusicherungen für die Grenzen der Eingabezeichenfolge in regulären Ausdrücken (`\A` und `\z`) werden jetzt unterstützt. `\A` stimmt nur mit dem Anfang der Eingabezeichenfolge überein, `\z` nur mit deren Ende – unabhängig vom Flag `m` (multiline). Das unterscheidet sie von `^` und `$`, die von `m` beeinflusst werden. ([Firefox-Bug 2059792](https://bugzil.la/2059792))
- Mehrere Elemente vom Typ [`<script type="importmap">`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) werden jetzt auf allen Kanälen standardmäßig unterstützt. Import-Maps werden in Dokumentreihenfolge zusammengeführt. Bei gleichem Spezifizierer überschreiben spätere Einträge die früheren. ([Firefox-Bug 2093267](https://bugzil.la/2093267))

<!-- #### Entfernungen -->

### HTTP

- Streaming-Anfragekörper werden jetzt auf allen Kanälen standardmäßig unterstützt. Sie können einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als `body` eines [`Request`](/de/docs/Web/API/Request) übergeben. Dadurch lassen sich Daten schrittweise hochladen, ohne zuvor die gesamte Nutzlast zwischenzuspeichern. ([Firefox-Bug 2089458](https://bugzil.la/2089458))

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Die Eigenschaften `document.parsed`, `document.contentLoaded` und `document.loaded` werden jetzt unterstützt. Jede gibt eine {{jsxref("Promise")}} zurück, die jeweils erfüllt wird, wenn das Parsen des Dokuments abgeschlossen ist, `DOMContentLoaded` ausgelöst wurde beziehungsweise `load` ausgelöst wurde. ([Firefox-Bug 2091511](https://bugzil.la/2091511))
- Dokumentübergreifende [View-Transitions](/de/docs/Web/API/View_Transition_API) sind jetzt auf allen Kanälen standardmäßig aktiviert. Wenn zwei Seiten in ihrem CSS mit {{cssxref("@view-transition")}} `{ navigation: auto; }` ihre Teilnahme festlegen, wird beim Navigieren zwischen ihnen eine View-Transition-Animation abgespielt. ([Firefox-Bug 2088945](https://bugzil.la/2088945))
- [Declarative Web Push](/de/docs/Web/API/Push_API) wird jetzt unterstützt. Damit können Seiten Push-Benachrichtigungen über ein HTML-Element `<link rel="push">` abonnieren, ohne dass ein Service Worker in JavaScript registriert werden muss. ([Firefox-Bug 1935325](https://bugzil.la/1935325))
- Die Maustasten 4 und 5 – die auf vielen Mäusen vorhandenen Zurück- und Vorwärts-Tasten des Browsers – lösen auf Webseiten jetzt korrekt die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`click`](/de/docs/Web/API/Element/click_event) aus. In Mausereignisobjekten werden sie als [`button`](/de/docs/Web/API/MouseEvent/button)-Werte `3` und `4` gemeldet. ([Firefox-Bug 2073171](https://bugzil.la/2073171))
- Die Schlüsselformat-Aliase `raw-secret` und `raw-public` werden jetzt in der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt. Sie können als Argument `format` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) verwendet werden. ([Firefox-Bug 2086697](https://bugzil.la/2086697))
- Die Konfigurationsoption `iceCandidatePoolSize` von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wird jetzt unterstützt. Wird sie auf einen Wert ungleich null gesetzt, werden ICE-Kandidaten bereits vor dem Aufbau der Peer-Verbindung gesammelt. Das verkürzt die Zeit bis zum Verbindungsaufbau. ([Firefox-Bug 1529398](https://bugzil.la/1529398))

#### Medien, WebRTC und Web Audio

- [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) wird jetzt unterstützt und stellt Statistiken über eine lokale Audiospur bereit, die mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden ist. Die Statistiken sind über [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) zugänglich. ([Firefox-Bug 1728364](https://bugzil.la/1728364))
- MP3-Audiostreams werden jetzt in [Media Source Extensions (MSE)](/de/docs/Web/API/Media_Source_Extensions_API) unterstützt. Sie können MP3-Daten an einen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) anhängen, um sie mit [`MediaSource`](/de/docs/Web/API/MediaSource) zu verwenden. ([Firefox-Bug 1169485](https://bugzil.la/1169485))

#### Entfernungen

- Einige nicht standardisierte Attribute der Schnittstelle [`Gamepad`](/de/docs/Web/API/Gamepad), die nur in Firefox verfügbar waren, sind jetzt veraltet und führen zu einer Warnung in der Konsole. ([Firefox-Bug 2089662](https://bugzil.la/2089662))

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("omnibox.setDefaultSuggestion")}} gibt jetzt eine {{jsxref("Promise")}} zurück. Zuvor gab die Methode `undefined` zurück. Diese Änderung stellt die Kompatibilität mit Chrome her. ([Firefox-Bug 2090052](https://bugzil.la/2090052))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 162 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Funktion `ident()`** (`layout.css.ident-function.enabled`): Die CSS-Funktion `ident()` nimmt eine Zeichenfolge als Argument entgegen und gibt sie als CSS-Bezeichner zurück. So können Bezeichner in CSS dynamisch erstellt werden. ([Firefox-Bug 2088337](https://bugzil.la/2088337))
- **CSS-Funktion `inherit()`** (`layout.css.inherit-function.enabled`): Die CSS-Funktion `inherit()` übernimmt den geerbten Wert einer CSS-Eigenschaft und ermöglicht optionale Änderungen daran. So lassen sich berechnete Werte aus dem geerbten Wert ableiten. ([Firefox-Bug 2091710](https://bugzil.la/2091710))
- **CSS-Funktion `random-item()`** (`layout.css.random-item.enabled`): Die CSS-Funktion `random-item()` wählt einen zufälligen Wert aus einer angegebenen Liste aus. Ein optionaler Parameter `<random-key>` synchronisiert die Auswahl zwischen Elementen oder Eigenschaften, die denselben Schlüssel verwenden. ([Firefox-Bug 2092915](https://bugzil.la/2092915))
- **Blockieren von Cookies für `file:`-URLs** (nur Nightly): Eine neue Einstellung blockiert Cookies für `file:`-URLs und verhindert so, dass lokale HTML-Dateien Cookies setzen oder lesen. ([Firefox-Bug 2094146](https://bugzil.la/2094146))
