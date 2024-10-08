---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler beeinflussen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Post — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwickler-Tools

- Es ist nun möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zur bisherigen Methode mit CSS-Selektoren ([Firefox Bug 963933](https://bugzil.la/963933)).
- Sie können nun [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur normalen Textsuche, indem Sie den regulären Ausdruck in Schrägstrichen schreiben ([Firefox Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde implementiert. Dieser Zeichenkettenwert kann verwendet werden, um anzugeben, dass das Bild [verzögert geladen](/de/docs/Web/Performance/Lazy_loading) werden sollte, indem sein Wert auf `lazy` gesetzt wird ([Firefox Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist nun gemäß der Spezifikation auf `text/css` beschränkt ([Firefox Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox Bug 1519519](https://bugzil.la/1519519)).
- Der `all` Wert der {{cssxref("text-decoration-skip-ink")}} Eigenschaft wurde hinzugefügt ([Firefox Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA) Rollen und Attribute sind nun in Firefox verfügbar, auf Windows und Linux (beachten Sie, dass diese erst nutzbar werden, wenn Screenreader sie unterstützen):

- `aria-description` ([Firefox Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role) ([Firefox Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Roles/comment_role) ([Firefox Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Unter macOS warten wir zunächst darauf, dass Apple definiert, was Safari als Apple-eigene Attribute für VoiceOver bereitstellen wird, und werden dann folgen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox Bug 1535804](https://bugzil.la/1535804)).
- Die Klasse [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) wird jetzt unterstützt ([Firefox Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft wurde aktualisiert, um dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) zu entsprechen. Statt einen `TypeError` auszulösen, wird nun `null` zurückgegeben, wenn der Anrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und immer noch verfügbaren) Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) handelt `requestSubmit()` so, als ob ein angegebenes Submit-Button geklickt wurde, statt einfach die Formulardaten an den Empfänger zu senden. Dadurch wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis ausgelöst, und das Formular wird vor dem Absenden der Daten auf Gültigkeit überprüft ([Firefox Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis wird nun von einem Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) und nicht mehr von einem einfachen [`Event`](/de/docs/Web/API/Event) repräsentiert. `SubmitEvent` beinhaltet eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) darstellt, das ausgelöst wurde, um die Formularübertragung zu initiieren. Mit diesem Ereignis können Sie einen einzigen Handler für Submit-Ereignisse haben, der erkennen kann, welcher von mehreren Submit-Buttons oder Links verwendet wurde, um das Formular abzusenden ([Firefox Bug 1588715](https://bugzil.la/1588715)).
- Das Aufrufen der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf ein abgetrenntes Element (eines, das nicht Teil eines DOM-Baums ist) funktioniert nun normal und führt dazu, dass ein `click` Ereignis an es gesendet wird ([Firefox Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 umfasst zahlreiche Ergänzungen zur [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite zu/von Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von auffüllenden Animationen, die durch andere unbegrenzt auffüllende Animationen ersetzt wurden ([Firefox Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Die Features [`Animation.timeline`](/de/docs/Web/API/Animation/timeline) getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann nun ohne Argumente aufgerufen werden, wobei das WebRTC-Laufzeitsystem versucht, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/CSP) Nonces aus Nicht-Skriptquellen, wie z. B. CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe, sind nun verborgen. Stattdessen überprüfen Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft, um Nonces aus Skripten zuzugreifen ([Firefox Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Es wurde ein Fehler behoben, der dazu führte, dass Marionette immer beim Start von Firefox initialisiert wurde. Dies wurde nun auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde so korrigiert, dass es dem Dokument keine zusätzlichen Ränder mehr hinzufügt ([Firefox Bug 1616932](https://bugzil.la/1616932)).
- Der Standardwert für die Einstellung `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr zu erzwingen ([Firefox Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} zur Steuerung, ob das Zoomen pro Seite oder pro Tab erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} zur Steuerung, ob das Zoom auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mit `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die "privacy" Berechtigung ist jetzt optional. ([Firefox Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
