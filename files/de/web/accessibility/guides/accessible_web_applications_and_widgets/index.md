---
title: Ein Überblick über zugängliche Webanwendungen und Widgets
short-title: Zugängliche Webanwendungen und Widgets
slug: Web/Accessibility/Guides/Accessible_web_applications_and_widgets
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von clientseitigen Widgets, die das Verhalten vertrauter Desktop-Oberflächen nachahmen. Schieberegler, Menüleisten, Datei-Listenansichten und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine eingebauten Tags bietet, die diese Art von Widgets semantisch beschreiben, verwenden Entwickler in der Regel generische Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}}. Während dies zu einem Widget führt, das wie sein Desktop-Gegenstück aussieht, gibt es normalerweise nicht genügend semantische Informationen im Markup, um von einer unterstützenden Technologie verwendet zu werden.

## Das Problem

Dynamische Inhalte auf einer Webseite können besonders problematisch für Nutzer sein, die aus welchen Gründen auch immer den Bildschirm nicht sehen können. Börsenticker, Live-Updates von Twitter-Feeds, Fortschrittsanzeigen und ähnliche Inhalte ändern das DOM auf eine Weise, die einer unterstützenden Technologie (AT) möglicherweise nicht bekannt ist. Hier kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Tabs-Widget, das ohne ARIA-Beschriftung erstellt wurde. Es gibt keine Informationen im Markup, die die Form und Funktion des Widgets beschreiben._

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

_Beispiel 2: Wie das Tabs-Widget visuell gestylt sein könnte. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für eine unterstützende Technologie._ ![Screenshot des Tabs-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem sie dem Markup besondere Attribute hinzufügen. ARIA wurde entwickelt, um die Lücke zwischen standardmäßigen HTML-Tags und den desktopähnlichen Steuerelementen, die in dynamischen Webanwendungen zu finden sind, zu schließen, indem es Rollen und Zustände bereitstellt, die das Verhalten der meisten vertrauten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser Funktionen wurden hinzugefügt, als Browser moderne HTML-Funktionen noch nicht vollständig unterstützten. **Entwickler sollten immer das richtige semantische HTML-Element der Verwendung von ARIA vorziehen**.

Die ARIA-Spezifikation ist in drei verschiedene Attributtypen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die in HTML4 nicht verfügbar sind, wie Schieberegler, Menüleisten, Tabs und Dialoge. Eigenschaften beschreiben Merkmale dieser Widgets, wie etwa, ob sie verschiebbar sind, ein erforderliches Element haben oder ein Popup damit verbunden ist. Zustände beschreiben den aktuellen Interaktionszustand eines Elements und informieren die unterstützende Technologie, ob es beschäftigt, deaktiviert, ausgewählt oder versteckt ist.

ARIA-Attribute werden automatisch vom Browser interpretiert und in die nativen Zugriffs-APIs des Betriebssystems übersetzt. Ein Element mit role="slider" wird also auf dieselbe Weise gesteuert wie ein nativer Schieberegler im Betriebssystem.

Dies bietet eine viel konsistentere Benutzererfahrung als in der vorherigen Generation von Webanwendungen möglich war, da Benutzer von unterstützender Technologie all ihr Wissen darüber anwenden können, wie Desktop-Anwendungen funktionieren, wenn sie webbasierte Anwendungen verwenden.

_Beispiel 3: Markup für das Tabs-Widget mit hinzugefügten ARIA-Attributen._

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

ARIA wird von allen großen Browsern und vielen unterstützenden Technologien [gut unterstützt](https://caniuse.com/#feat=wai-aria).

### Präsentationsänderungen

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS, um das Erscheinungsbild von Inhalten zu ändern (z.B. ein roter Rahmen um ungültige Daten oder das Ändern der Hintergrundfarbe eines aktivierten Kontrollkästchens) sowie das Ein- oder Ausblenden von Inhalten.

#### Zustandsänderungen

ARIA bietet Attribute zur Deklaration des aktuellen Zustands eines UI-Widgets. Beispiele umfassen (aber sind sicherlich nicht darauf beschränkt):

- `aria-checked`
  - : Gibt den Zustand eines Kontrollkästchens oder einer Optionsschaltfläche an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht bearbeitbar oder anderweitig bedienbar ist.
- `aria-grabbed`
  - : Gibt den 'gegriffenen' Zustand eines Objekts in einem Drag-and-Drop-Vorgang an.

(Für eine vollständige Liste der ARIA-Zustände, konsultieren Sie die [ARIA-Liste der Zustände und Eigenschaften](https://w3c.github.io/aria/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand von UI-Widget-Elementen anzugeben, und CSS-Attribut-Selektoren verwenden, um das visuelle Erscheinungsbild basierend auf den Zustandsänderungen zu ändern (anstatt Skripte zu verwenden, um den Klassennamen des Elements zu ändern).

#### Sichtbarkeitsänderungen

Wenn die Sichtbarkeit von Inhalten geändert wird (z.B. wenn ein Element ausgeblendet oder angezeigt wird), sollten Entwickler den Wert der **`aria-hidden`**-Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, um ein Element visuell mit `display:none` auszublenden.

Hier ist ein Beispiel für ein Tooltip, das **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein Webformular mit Tooltips, die Anweisungen enthalten, die mit den Eingabefeldern verbunden sind.

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

Das JavaScript zur Aktualisierung der **`aria-hidden`**-Eigenschaft hat die Form, die im folgenden Code gezeigt wird. Beachten Sie, dass das Skript nur das **`aria-hidden`**-Attribut aktualisiert; es muss nicht auch einen benutzerdefinierten Klassennamen hinzufügen oder entfernen.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA erlaubt Entwicklern, eine semantische Rolle für ein Element zu deklarieren, das ansonsten inkorrekte oder keine Semantiken bietet. Die **`role`** eines Elements sollte nicht geändert werden. Stattdessen sollte das ursprüngliche Element entfernt und durch ein Element mit der neuen **`role`** ersetzt werden.

Zum Beispiel, betrachten Sie ein "Inline-Bearbeitungs"-Widget: eine Komponente, die es Benutzern ermöglicht, ein Stück Text an Ort und Stelle zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen "Ansichts"-Modus, in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen "Bearbeitungs"-Modus, in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den "Ansichts"-Modus mit einem schreibgeschützten Text-{{ HTMLElement("input") }}-Element zu implementieren und seine ARIA-**`role`** auf `button` zu setzen, dann in den "Bearbeitungs"-Modus zu wechseln, indem das Element beschreibbar gemacht und das **`role`**-Attribut im "Bearbeitungs"-Modus entfernt wird (da {{ HTMLElement("input") }}-Elemente ihre eigenen Rollen-Semantiken haben).

Tun Sie dies nicht. Implementieren Sie stattdessen den "Ansichts"-Modus mit einem völlig anderen Element, wie einem {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} mit einer **`role`** von `button`, und den "Bearbeitungs"-Modus mit einem Text-{{ HTMLElement("input") }}-Element.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> In Arbeit. Siehe auch [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Tastaturnavigation

Oftmals übersehen Entwickler die Unterstützung der Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um für eine Vielzahl von Nutzern zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch über die Tastatur steuerbar sein, ohne eine Maus zu benötigen. In der Praxis bedeutet dies in der Regel, den von ähnlichen Widgets auf dem Desktop unterstützten Konventionen zu folgen und die Tabulator-, Eingabe-, Leertaste- und Pfeiltasten voll auszunutzen.

Traditionell war die Tastaturnavigation im Web auf die Tabulatortaste beschränkt. Ein Benutzer drückt Tab, um jeden Link, jede Schaltfläche oder jedes Formular auf der Seite in linearer Reihenfolge zu fokussieren, und verwendet Shift-Tab, um rückwärts zu navigieren. Es ist eine eindimensionale Form der Navigation - vorwärts und zurück, ein Element nach dem anderen. Auf recht dichten Seiten muss ein reiner Tastaturbenutzer oft dutzende Male die Tabulatortaste drücken, bevor er den gewünschten Abschnitt erreicht. Die Implementierung von Desktop-ähnlichen Tastaturkonventionen im Web hat das Potenzial, die Navigation für viele Nutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-fähigen Webanwendung funktionieren sollte:

- Die Tabulatortaste sollte den Fokus auf das Widget als Ganzes legen. Zum Beispiel sollte das Tabben zu einer Menüleiste **NICHT** den Fokus auf das erste Element des Menüs legen.
- Die Pfeiltasten sollten innerhalb des Widgets eine Auswahl oder Navigation ermöglichen. Zum Beispiel sollten die linke und rechte Pfeiltaste den Fokus auf die vorherigen und nächsten Menüpunkte verschieben.
- Wenn sich das Widget nicht innerhalb eines Formulars befindet, sollten sowohl die Eingabe- als auch die Leertaste die Steuerung auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste die Steuerung auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars absenden sollte.
- Bei Zweifel sollte das Standardverhalten der Desktop-Steuerung, die Sie erstellen, nachgeahmt werden.

Für das obige Tabs-Widget-Beispiel sollte der Benutzer mit den Tasten Tab und Shift-Tab in und aus dem Containerelement des Widgets (dem {{HTMLElement('ol')}} in unserem Markup) navigieren können. Sobald der Tastaturfokus innerhalb des Containers ist, sollten die Pfeiltasten dem Benutzer erlauben, zwischen den einzelnen Tabs (den {{HTMLElement('li')}}-Elementen) zu navigieren. Ab hier variieren die Konventionen von Plattform zu Plattform. Unter Windows sollte der nächste Tab beim Drücken der Pfeiltasten automatisch aktiviert werden. Unter macOS kann der Benutzer entweder die Eingabe- oder die Leertaste drücken, um den nächsten Tab zu aktivieren. Ein detailliertes Tutorial für die Erstellung von [Tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets) beschreibt, wie dieses Verhalten mit JavaScript implementiert wird.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Schreiben von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
- [WAI-ARIA-Autorisierungspraxis](https://www.w3.org/WAI/ARIA/apg/)
