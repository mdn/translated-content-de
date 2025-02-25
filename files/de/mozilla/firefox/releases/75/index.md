---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Beitrag auf Hacks — [Firefox 75: Ambitionen für den April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie nun [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zur bisherigen Möglichkeit, Elemente mit CSS-Selektoren zu finden ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten zusätzlich zur normalen Textsuche auch mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, indem Sie das reguläre Ausdruck-Muster in Schrägstriche schreiben ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde nun implementiert. Dieser Zeichenkettenwert kann verwendet werden, um anzugeben, dass das Bild [lazy-loaded](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist gemäß der Spezifikation nun auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der Eigenschaft {{cssxref("text-decoration-skip-ink")}} wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und Attribute sind nun in Firefox unter Windows und Linux verfügbar (beachten Sie, dass diese erst verwendet werden können, wenn Screenreader sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs bei `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Safari-Attribute als Apple-Dialekte für VoiceOver dargestellt werden, und werden uns dann entsprechend anpassen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden nun unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird nun unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um sie mit dem neuesten [ECMAScript-Spezifikationvorschlag](https://github.com/claudepache/es-legacy-function-reflection) abzugleichen. Anstatt `TypeError` auszulösen, gibt sie jetzt `null` zurück, wenn der aufrufende Code eine strikte, asynchrone oder Generator-Funktion ist ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface verfügt über eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) agiert `requestSubmit()` so, als ob ein angegebenes Sende-Button geklickt worden wäre, anstatt einfach die Formulardaten an den Empfänger zu senden. Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird daher ausgelöst und das Formular auf Gültigkeit überprüft, bevor die Daten übermittelt werden ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird nun durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) repräsentiert, anstatt durch ein einfaches [`Event`](/de/docs/Web/API/Event). `SubmitEvent` beinhaltet eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, welche das [`Element`](/de/docs/Web/API/Element) ist, das ausgelöst wurde, um das Formular abzusenden. Mit diesem Ereignis können Sie einen einzelnen Handler für Absendeereignisse haben, der feststellen kann, welcher von mehreren Absende-Buttons oder Links verwendet wurde, um das Formular abzusenden ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode bei einem losgelösten Element (einem Element, das nicht Teil eines DOM-Baums ist) funktioniert jetzt normal, wodurch ein `click`-Ereignis an dieses Element gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Webanimations-API

Firefox 75 führt zahlreiche Ergänzungen zur [Webanimations-API](/de/docs/Web/API/Web_Animations_API) ein:

- [Implizite von/bis Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von füllenden Animationen, die durch andere unbefristet füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies schließt die Unterstützung für folgende Funktionen ein:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Die Funktionen [`Animation.timeline`](/de/docs/Web/API/Animation/timeline), [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann nun ohne Argumente aufgerufen werden, wobei der WebRTC-Runtime versucht, selbst die neue lokale Sitzungsbeschreibung zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/CSP)-Nonces von Nicht-Skript-Quellen wie CSS-Selektoren und `.getAttribute("nonce")`-Aufrufen sind jetzt verborgen. Stattdessen sollten Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft verwenden, um auf Nonces von Skripten zuzugreifen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Kompatibilität (Marionette)

- Ein Fehler wurde behoben, der immer dazu führte, dass Marionette beim Start von Firefox initialisiert wurde. Jetzt ist es auf das Kommandozeilen-Argument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde korrigiert, um keine zusätzlichen Ränder mehr zum Dokument hinzuzufügen ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Voreinstellungswert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zwangsweise zu deaktivieren ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} zur Steuerung, ob das Zoomen auf einer pro-Website- oder pro-Tab-Basis erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} zur Steuerung, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

- Der Dateiname, der beim Speichern einer PDF mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann durch die Angabe von `toFileName` im Typ `tabs.PageSettings` spezifiziert werden ([Firefox-Bug 1483590](https://bugzil.la/1483590)).

### Manifest-Änderungen

- Die "privacy"-Berechtigung ist jetzt optional ([Firefox-Bug 1618399](https://bugzil.la/1618399)).

## Ältere Versionen

{{Firefox_for_developers}}
