---
title: Firefox 75 für Entwickler
slug: Mozilla/Firefox/Releases/75
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 75, die Entwickler betreffen werden. Firefox 75 wurde am 7. April 2020 veröffentlicht.

**Siehe auch den begleitenden Hacks-Beitrag — [Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Es ist jetzt möglich, das Rechteck des [Measuring Tools](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) zu ändern ([Firefox Bug 1152321](https://bugzil.la/1152321)).
- Im [Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) können Sie nun [XPath](/de/docs/Web/XML/XPath)-Ausdrücke verwenden, um Elemente zu finden, zusätzlich zu der bisherigen Möglichkeit, Elemente mit CSS-Selektoren zu finden ([Firefox Bug 963933](https://bugzil.la/963933)).
- Sie können nun [WebSocket](/de/docs/Web/API/WebSockets_API)-Nachrichten mit [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) filtern, zusätzlich zur einfachen Textsuche, indem Sie den regulären Ausdruck in Schrägstriche setzen ([Firefox Bug 1593837](https://bugzil.la/1593837)).

### HTML

- Das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut des {{HTMLElement("img")}}-Elements wurde nun implementiert. Dieser Zeichenfolgenwert kann verwendet werden, um anzugeben, dass das Bild [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading) werden soll, indem sein Wert auf `lazy` gesetzt wird ([Firefox Bug 1542784](https://bugzil.la/1542784)).
- Der Wert des `type`-Attributs des [`<style>`](/de/docs/Web/HTML/Reference/Elements/style)-Elements ist nun gemäß der Spezifikation ausschließlich auf `text/css` beschränkt ([Firefox Bug 1614329](https://bugzil.la/1614329)).

### CSS

- Unterstützung für die {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}}, und {{cssxref("clamp", "clamp()")}} Funktionen wurde implementiert ([Firefox Bug 1519519](https://bugzil.la/1519519)).
- Der `all`-Wert der {{cssxref("text-decoration-skip-ink")}}-Eigenschaft wurde hinzugefügt ([Firefox Bug 1611965](https://bugzil.la/1611965)).

### Barrierefreiheit

Neue [ARIA](/de/docs/Web/Accessibility/ARIA)-Rollen und -Attribute werden nun in Firefox, auf Windows und Linux verfügbar gemacht (beachten Sie, dass diese solange nicht nutzbar sind, bis Screenreader sie unterstützen):

- `aria-description` ([Firefox Bug 1608961](https://bugzil.la/1608961)).
- [`role="mark"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role) und [`role="suggestion"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role) ([Firefox Bug 1608965](https://bugzil.la/1608965)).
- [`role="comment"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) ([Firefox Bug 1608969](https://bugzil.la/1608969)).
- Mehrere IDs auf `aria-details` ([Firefox Bug 1608883](https://bugzil.la/1608883)).

> [!NOTE]
> Auf macOS warten wir zunächst darauf, dass Apple definiert, welche Attribute Safari als Apple-Dialekt an VoiceOver weitergeben wird, und werden dann nachziehen.

### JavaScript

- [Öffentliche statische Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/static) werden nun unterstützt ([Firefox Bug 1535804](https://bugzil.la/1535804)).
- Die [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Klasse wird nun unterstützt ([Firefox Bug 1613713](https://bugzil.la/1613713)).
- Die [`Function.caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft wurde aktualisiert, um sich an dem neuesten [ECMAScript-Spezifikationsvorschlag](https://github.com/claudepache/es-legacy-function-reflection) auszurichten. Zuvor wurde ein `TypeError` geworfen, nun gibt es `null` zurück, wenn der Aufrufer eine strikte, asynchrone oder Generatorfunktion ist ([Firefox Bug 1610206](https://bugzil.la/1610206)).

### APIs

#### DOM

- Das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface hat eine neue Methode, [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit). Anders als die alte (und weiterhin verfügbare) [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode, agiert `requestSubmit()`, als wäre ein spezifizierter Absenden-Button geklickt worden, anstatt nur die Formulardaten an den Empfänger zu senden. Dadurch wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis ausgelöst und das Formular vor dem Absenden der Daten auf Gültigkeit geprüft ([Firefox Bug 1613360](https://bugzil.la/1613360)).
- Das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis wird nun durch ein Objekt des Typs [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) repräsentiert, anstatt durch ein einfaches [`Event`](/de/docs/Web/API/Event). Das `SubmitEvent` enthält eine neue [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft, die das [`Element`](/de/docs/Web/API/Element) ist, das ausgelöst wurde, um das Formular abzuschicken. Mit diesem Ereignis können Sie einen einzelnen Handler für Submit-Ereignisse haben, der unterscheiden kann, welcher von mehreren Absenden-Buttons oder Links verwendet wurde, um das Formular abzuschicken ([Firefox Bug 1588715](https://bugzil.la/1588715)).
- Der Aufruf der [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf einem losgelösten Element (einem nicht Teil eines DOM-Baums) funktioniert nun normal, wodurch ein `click`-Ereignis an es gesendet wird ([Firefox Bug 1610821](https://bugzil.la/1610821)).

#### Web-Animationen API

Firefox 75 bringt zahlreiche Ergänzungen der [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- [Implizite to/from Keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) werden nun unterstützt, genauso wie das automatische Entfernen von Füllanimationen, die durch andere Animationen mit unbestimmter Füllung ersetzt wurden ([Firefox Bug 1618773](https://bugzil.la/1618773)). Dies beinhaltet die Aktivierung der Unterstützung für:

  - [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/de/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)

- Der [`Animation.timeline`](/de/docs/Web/API/Animation/timeline) Getter, [`Document.timeline`](/de/docs/Web/API/Document/timeline), [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) sind nun standardmäßig aktiviert ([Firefox Bug 1619178](https://bugzil.la/1619178)).
- Die Methoden [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) und [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) sind nun standardmäßig aktiviert ([Firefox Bug 1619821](https://bugzil.la/1619821)).

#### Medien, Web Audio und WebRTC

- Die Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) kann nun ohne Argumente aufgerufen werden, wobei die WebRTC-Laufzeitumgebung versucht, die neue lokale Sitzungsbeschreibung selbst zu erstellen ([Firefox Bug 1568292](https://bugzil.la/1568292)).

### HTTP

_Keine Änderungen._

### Sicherheit

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces von Nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe, sind nun versteckt. Stattdessen prüfen Sie die [`.nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft, um Nonces aus Skripten zuzugreifen ([Firefox Bug 1374612](https://bugzil.la/1374612)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der immer dazu führte, dass Marionette bei jedem Firefox-Start initialisiert wurde. Es ist nun auf das Kommandozeilenargument und die Umgebungsvariable beschränkt ([Firefox Bug 1622012](https://bugzil.la/1622012)).
- `WebDriver:Print` wurde behoben, sodass dem Dokument keine zusätzlichen Ränder mehr hinzugefügt werden ([Firefox Bug 1616932](https://bugzil.la/1616932)).
- Der Präferenzwert für `network.http.speculative-parallel-limit` wurde auf `0` geändert, um spekulative Verbindungen nicht mehr erzwungenermaßen zu deaktivieren ([Firefox Bug 1617869](https://bugzil.la/1617869)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Wir haben einige neue Einstellungen in {{WebExtAPIRef("browserSettings")}} hinzugefügt ([Firefox Bug 1286953](https://bugzil.la/1286953)):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} um zu steuern, ob das Zoomen auf einer pro-Website- oder pro-Tab-Basis erfolgt
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} um zu steuern, ob das Zoom auf die gesamte Seite oder nur auf Text angewendet wird.

- Der Name der Datei, die beim Speichern eines PDFs mit {{WebExtAPIRef("tabs.saveAsPDF")}} verwendet wird, kann mit `toFileName` im Typ `tabs.PageSettings` angegeben werden.([Firefox Bug 1483590](https://bugzil.la/1483590))

### Manifest-Änderungen

- Die Berechtigung "privacy" ist nun optional. ([Firefox Bug 1618399](https://bugzil.la/1618399))

## Ältere Versionen

{{Firefox_for_developers}}
