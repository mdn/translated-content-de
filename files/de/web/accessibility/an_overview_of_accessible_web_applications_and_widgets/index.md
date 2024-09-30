---
title: Ein Überblick über zugängliche Webanwendungen und Widgets
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von Client-seitigen Widgets, die das Verhalten vertrauter Desktop-Oberflächen nachahmen. Schieberegler, Menüleisten, Dateiansichtsfenster und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine eingebauten Tags bietet, die diese Arten von Widgets semantisch beschreiben, greifen Entwickler typischerweise auf die Verwendung generischer Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}} zurück. Während dies zu einem Widget führt, das wie sein Desktop-Gegenstück aussieht, gibt es normalerweise nicht genug semantische Informationen im Markup, um von einer unterstützenden Technologie nutzbar zu sein.

## Das Problem

Dynamische Inhalte auf einer Webseite können besonders problematisch für Nutzer sein, die aus welchem Grund auch immer nicht in der Lage sind, den Bildschirm zu sehen. Börsenticker, Live-Twitter-Feed-Updates, Fortschrittsanzeigen und ähnliche Inhalte ändern das DOM auf eine Weise, die einer unterstützenden Technologie (AT) möglicherweise nicht bewusst ist. Da kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Tab-Widget ohne ARIA-Kennzeichnung. Im Markup gibt es keine Informationen, die die Form und Funktion des Widgets beschreiben._

```html
<!-- This is a tabs widget. How would you know, looking only at the markup? -->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">Chapter 1 content goes here</div>
  <div id="ch2Panel">Chapter 2 content goes here</div>
  <div id="quizPanel">Quiz content goes here</div>
</div>
```

_Beispiel 2: Wie das Tab-Widget visuell gestaltet werden könnte. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für eine unterstützende Technologie._ ![Screenshot des Tab-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem spezielle Attribute dem Markup hinzugefügt werden. Entwickelt, um die Lücke zwischen standardmäßigen HTML-Tags und den in dynamischen Webanwendungen gefundenen Desktop-ähnlichen Steuerelementen zu schließen, bietet ARIA Rollen und Zustände, die das Verhalten der meisten bekannten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser Funktionalitäten wurden hinzugefügt, als Browser moderne HTML-Funktionen noch nicht vollständig unterstützten. **Entwickler sollten immer das richtige semantische HTML-Element der Verwendung von ARIA vorziehen**.

Die ARIA-Spezifikation ist in drei verschiedene Arten von Attributen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die in HTML 4 nicht anderweitig verfügbar sind, wie Schieberegler, Menüleisten, Tabs und Dialoge. Eigenschaften beschreiben Merkmale dieser Widgets, zum Beispiel, ob sie verschiebbar sind, ein erforderliches Element haben oder ein Popup mit ihnen verbunden ist. Zustände beschreiben den aktuellen Interaktionszustand eines Elements und informieren die unterstützende Technologie darüber, ob es beschäftigt, deaktiviert, ausgewählt oder versteckt ist.

ARIA-Attribute werden vom Browser automatisch interpretiert und in die nativen Zugänglichkeits-APIs des Betriebssystems übersetzt. So wird ein Element mit role="slider" genauso gesteuert wie ein natives Schiebeelement im Betriebssystem.

Dies bietet ein weitaus konsistenteres Benutzererlebnis als in der vorherigen Generation von Webanwendungen möglich war, da Nutzer von unterstützenden Technologien all ihr Wissen darüber anwenden können, wie Desktop-Anwendungen funktionieren, wenn sie webbasierte Anwendungen verwenden.

_Beispiel 3: Markup für das Tab-Widget mit hinzugefügten ARIA-Attributen._

```html
<!-- Now *these* are Tabs! -->
<!-- We've added role attributes to describe the tab list and each tab. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Notice the role and aria-labelledby attributes we've added to describe these panels. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">
    Chapter 1 content goes here
  </div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">
    Chapter 2 content goes here
  </div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">
    Quiz content goes here
  </div>
</div>
```

ARIA wird von allen gängigen Browsern und vielen unterstützenden Technologien [gut unterstützt](https://caniuse.com/#feat=wai-aria).

### Präsentationsänderungen

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS, um das Erscheinungsbild von Inhalten zu ändern (wie ein roter Rahmen um ungültige Daten oder das Ändern der Hintergrundfarbe eines ausgewählten Kontrollkästchens), sowie das Anzeigen oder Verbergen von Inhalten.

#### Zustandsänderungen

ARIA bietet Attribute zum Deklarieren des aktuellen Zustands eines UI-Widgets. Beispiele umfassen (sind aber sicherlich nicht darauf beschränkt):

- `aria-checked`
  - : Gibt den Zustand eines Kontrollkästchens oder Optionsfelds an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht bearbeitbar oder anderweitig operierbar ist.
- `aria-grabbed`
  - : Gibt den 'gegriffenen' Zustand eines Objekts in einem Drag-and-Drop-Vorgang an.

(Für eine vollständige Liste der ARIA-Zustände konsultieren Sie die [ARIA-Liste der Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand von UI-Widget-Elementen anzuzeigen und CSS-Attributselektoren verwenden, um basierend auf den Zustandsänderungen das visuelle Erscheinungsbild zu ändern (anstatt ein Skript zu verwenden, um einen Klassennamen auf dem Element zu ändern).

#### Sichtbarkeitsänderungen

Wenn sich die Sichtbarkeit von Inhalten ändert (d.h., ein Element wird ausgeblendet oder angezeigt), sollten Entwickler den Wert der **`aria-hidden`**-Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, um ein Element mit `display:none` visuell auszublenden.

Hier ist ein Beispiel für ein Tooltip, das **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein einfaches Webformular mit Tooltips, die Anweisungen enthalten, die mit den Eingabefeldern verbunden sind.

```html
<div class="text">
  <label id="tp1-label" for="first">First Name:</label>
  <input
    type="text"
    id="first"
    name="first"
    size="20"
    aria-labelledby="tp1-label"
    aria-describedby="tp1"
    aria-required="false" />
  <div id="tp1" class="tooltip" role="tooltip" aria-hidden="true">
    Your first name is optional
  </div>
</div>
```

Das CSS für dieses Markup wird im folgenden Code gezeigt. Beachten Sie, dass kein benutzerdefinierter Klassenname verwendet wird, sondern nur der Status des **`aria-hidden`**-Attributs.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Das JavaScript, um die **`aria-hidden`**-Eigenschaft zu aktualisieren, hat die im folgenden Code gezeigte Form. Beachten Sie, dass das Skript nur das **`aria-hidden`**-Attribut aktualisiert; es muss keinen benutzerdefinierten Klassennamen hinzufügen oder entfernen.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA ermöglicht es Entwicklern, für ein Element eine semantische Rolle zu deklarieren, das andernfalls falsche oder keine Semantiken bietet. Die **`role`** eines Elements sollte sich nicht ändern. Stattdessen entfernen Sie das ursprüngliche Element und ersetzen es durch ein Element mit der neuen **`role`**.

Betrachten Sie zum Beispiel ein "Inline-Bearbeiten"-Widget: eine Komponente, die es Benutzern ermöglicht, ein Stück Text direkt zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen "Ansichtsmodus", in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen "Bearbeitungsmodus", in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den "Ansichtsmodus" mit einem schreibgeschützten Text-{{ HTMLElement("input") }}-Element zu implementieren und dessen ARIA-**`role`** auf `button` zu setzen, und dann in den "Bearbeitungsmodus" umzuschalten, indem das Element beschreibbar gemacht und das **`role`**-Attribut im "Bearbeitungsmodus" entfernt wird (da {{ HTMLElement("input") }}-Elemente ihre eigenen Rollen-Semantiken haben).

Tun Sie dies nicht. Implementieren Sie stattdessen den "Ansichtsmodus" mit einem völlig anderen Element, wie einem {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} mit einer **`role`** von `button`, und den "Bearbeitungsmodus" mit einem Text-{{ HTMLElement("input") }}-Element.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> Im Aufbau. Siehe auch [Live Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Tastaturnavigation

Oft übersehen Entwickler die Unterstützung für die Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um für verschiedene Benutzer zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch mit der Tastatur steuerbar sein, ohne dass eine Maus erforderlich ist. In der Praxis bedeutet dies normalerweise, den Konventionen ähnlicher Widgets auf dem Desktop zu folgen und die Tab-, Eingabe-, Leertasten- und Pfeiltasten voll auszunutzen.

Traditionell war die Tastaturnavigation im Web auf die Tabulator-Taste beschränkt. Ein Benutzer drückt Tab, um jedes einzelne Link-, Button- oder Formularelement auf der Seite in linearer Reihenfolge zu fokussieren, und verwendet Umschalt-Tab, um rückwärts zu navigieren. Es ist eine eindimensionale Form der Navigation—vorwärts und rückwärts, ein Element nach dem anderen. Auf relativ dichten Seiten muss ein nur mit der Tastatur operierender Benutzer oft Dutzende von Malen die Tabulator-Taste drücken, bevor er den benötigten Abschnitt erreicht. Die Umsetzung von Tastaturkonventionen im Desktop-Stil im Web hat das Potenzial, die Navigation für viele Benutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-aktivierten Webanwendung funktionieren sollte:

- Die Tabulator-Taste sollte fokussiert das Widget als Ganzes darstellen. Zum Beispiel sollte das Tabben zu einer Menüleiste **NICHT** den Fokus auf das erste Element des Menüs setzen.
- Die Pfeiltasten sollten eine Auswahl oder Navigation innerhalb des Widgets ermöglichen. Zum Beispiel sollten die linke und rechte Pfeiltaste den Fokus auf die vorherigen und nächsten Menüelemente bewegen.
- Wenn das Widget sich nicht innerhalb eines Formulars befindet, sollten sowohl die Eingabe- als auch die Leertaste das Steuerelement auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste das Steuerelement auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars abschicken sollte.
- Im Zweifelsfall sollte das Standardverhalten des Desktop-Steuerelements nachgeahmt werden, das Sie erstellen.

Für das oben angeführte Tab-Widget-Beispiel sollte der Benutzer in der Lage sein, in das und aus dem Container des Widgets (dem {{HTMLElement('ol')}} in unserem Markup) unter Verwendung der Tabulator- und Umschalt-Tab-Tasten zu navigieren. Sobald sich der Tastaturfokus im Container befindet, sollten die Pfeiltasten dem Benutzer ermöglichen, zwischen jedem Tab (den {{HTMLElement('li')}}-Elementen) zu navigieren. Von hier aus variieren die Konventionen je nach Plattform. Unter Windows sollte der nächste Tab automatisch aktiviert werden, wenn der Benutzer die Pfeiltasten drückt. Unter macOS kann der Benutzer entweder durch Drücken der Eingabe- oder Leertaste den nächsten Tab aktivieren. Ein ausführliches Tutorial zur Erstellung von [Tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets) beschreibt, wie dieses Verhalten mit JavaScript implementiert wird.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Erstellung von Tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/)
