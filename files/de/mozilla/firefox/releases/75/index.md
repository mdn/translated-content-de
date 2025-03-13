---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Beitrag auf Hacks — [Firefox 75: Ambitionen für April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Messwerkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu skalieren ([Firefox-Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie jetzt [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu lokalisieren, zusätzlich zur Lokalisierung von Elementen mit CSS-Selektoren wie zuvor ([Firefox-Bug 963933](https://bugzil.la/963933)).
- Sie können jetzt [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur Suche im Klartext, indem Sie das reguläre Ausdrucksmuster in Schrägstriche einschließen ([Firefox-Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde implementiert. Dieser Zeichenwert kann verwendet werden, um anzugeben, dass das Bild [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox-Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Element/style)-Elements ist gemäß der Spezifikation jetzt auf `text/css` beschränkt ([Firefox-Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die Funktionen {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}} und {{cssxref("clamp", "clamp()")}} wurde implementiert ([Firefox-Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und Attribute sind jetzt in Firefox unter Windows und Linux verfügbar (beachten Sie, dass diese erst benutzbar sind, wenn Screenreader sie unterstützen):

- `aria-description` ([Firefox-Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox-Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox-Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox-Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Unter macOS warten wir zunächst auf Apple, um zu definieren, was Safari als Apple-Dialektattribute an VoiceOver übermittelt, und werden dann entsprechend handeln.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jetzt unterstützt ([Firefox-Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Klasse wird jetzt unterstützt ([Firefox-Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um mit dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) übereinzustimmen. Sie gibt nun `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist, anstatt vorher einen `TypeError` auszulösen ([Firefox-Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle hat eine neue Methode namens [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Im Gegensatz zur alten (und weiterhin verfügbaren) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode agiert `requestSubmit()`, als ob ein angegebenes Übermittlungselement betätigt wurde, anstatt einfach die Formulardaten an den Empfänger zu senden. Somit wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular vor dem Übermitteln der Daten auf Gültigkeit geprüft ([Firefox-Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird nun durch ein Objekt vom Typ [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) dargestellt, anstatt durch ein einfaches [`Event`](/de/docs/Web/API/Event). `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das ausgelöst wurde, um das Formular abzusenden. Mit diesem Ereignis können Sie einen einzigen Handler für Übermittlungsereignisse haben, der erkennen kann, welcher von mehreren Übermittlungselementen oder Links zum Absenden des Formulars verwendet wurde ([Firefox-Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode bei einem losgelösten Element (einem, das nicht Teil des DOM-Baums ist) funktioniert nun normal, wodurch ein `click`-Ereignis an es gesendet wird ([Firefox-Bug 1610821](https://bugzil.la/1610821)).

#### Web Animations API

Firefox 75 enthält zahlreiche Erweiterungen der [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite von/bis Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden jetzt unterstützt, ebenso wie das automatische Entfernen von Füllanimationen, die durch andere unbegrenzt füllende Animationen ersetzt wurden ([Firefox-Bug 1618773](https://bugzil.la/1618773)). Dies umfasst die Aktivierung der Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der Getter [`Animation.timeline`](/de/docs/Web/API/Animation/timeline), [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1619821](https://bugzil.la/1619821)).

#### Media, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann jetzt ohne Argumente aufgerufen werden, in welchem Fall die WebRTC-Laufzeit versuchen wird, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox-Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonce-Werte aus Nicht-Skript-Quellen, wie z.B. CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe sind jetzt versteckt. Stattdessen verwenden Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft, um Nonce-Werte aus Skripten zuzugreifen ([Firefox-Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler, der Marionette immer bei jedem Start von Firefox initialisierte, wurde behoben. Es ist jetzt auf das Befehlszeilenargument und die Umgebungsvariable beschränkt ([Firefox-Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde so behoben, dass keine zusätzlichen Ränder mehr zum Dokument hinzugefügt werden ([Firefox-Bug 1616932](https://bugzil.la/1616932)).
- Der Einstellungswert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht länger zu unterbinden ([Firefox-Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox-Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} zur Steuerung, ob die Vergrößerung auf einer pro-Seite- oder pro-Tab-Basis erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} zur Steuerung, ob die Vergrößerung auf die gesamte Seite oder nur auf den Text angewandt wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann unter Verwendung von `toFileName` in den Typ `tabs.PageSettings` spezifiziert werden. ([Firefox-Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die Berechtigung "privacy" ist jetzt optional. ([Firefox-Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
