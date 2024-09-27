---
title: Ein Überblick über barrierefreie Webanwendungen und Widgets
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von clientseitigen Widgets an, die das Verhalten vertrauter Desktop-Oberflächen nachahmen. Schieberegler, Menüleisten, Dateilisteansichten und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine eingebauten Tags bereitstellt, die diese Arten von Widgets semantisch beschreiben, greifen Entwickler in der Regel auf die Verwendung generischer Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}} zurück. Während dies zu einem Widget führt, das wie sein Desktop-Pendant aussieht, gibt es normalerweise nicht genügend semantische Informationen im Markup, damit es von unterstützender Technologie genutzt werden kann.

## Das Problem

Dynamische Inhalte auf einer Webseite können besonders problematisch für Benutzer sein, die aus welchen Gründen auch immer den Bildschirm nicht sehen können. Kursticker, Live-Updates von Twitter-Feeds, Fortschrittsanzeigen und ähnliche Inhalte modifizieren das DOM auf eine Weise, die einer unterstützenden Technologie (AT) möglicherweise nicht bewusst ist. Hier kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Registerkarten-Widget ohne ARIA-Beschriftung. Im Markup gibt es keine Informationen, die die Form und Funktion des Widgets beschreiben._

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

_Beispiel 2: Wie das Registerkarten-Widget visuell gestaltet wird. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für unterstützende Technologie._ ![Screenshot des Registerkarten-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem sie spezielle Attribute zum Markup hinzufügen. ARIA wurde entwickelt, um die Lücke zwischen standardmäßigen HTML-Tags und den Desktop-ähnlichen Steuerelementen in dynamischen Webanwendungen zu schließen, und bietet Rollen und Zustände, die das Verhalten der meisten vertrauten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser Funktionen wurden hinzugefügt, als Browser moderne HTML-Funktionen noch nicht vollständig unterstützten. **Entwickler sollten immer das richtige semantische HTML-Element über ARIA bevorzugen**.

Die ARIA-Spezifikation ist in drei verschiedene Attributtypen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die in HTML 4 nicht verfügbar sind, wie Schieberegler, Menüleisten, Registerkarten und Dialogfelder. Eigenschaften beschreiben Merkmale dieser Widgets, z.B. ob sie ziehbar sind, ein erforderliches Element haben oder ein Popup damit verbunden ist. Zustände beschreiben den aktuellen Interaktionszustand eines Elements und informieren die unterstützende Technologie darüber, ob es beschäftigt, deaktiviert, ausgewählt oder verborgen ist.

ARIA-Attribute werden automatisch vom Browser interpretiert und in die nativen Zugänglichkeits-APIs des Betriebssystems übersetzt. Ein Element mit role="slider" wird also genauso gesteuert wie ein natives Schieberegler-Element auf dem Betriebssystem.

Dies bietet ein wesentlich konsistenteres Benutzererlebnis als in der vorherigen Generation von Webanwendungen, da Benutzer von unterstützenden Technologien all ihr Wissen über die Funktionsweise von Desktop-Anwendungen anwenden können, wenn sie webbasierte Anwendungen verwenden.

_Beispiel 3: Markup für das Registerkarten-Widget mit hinzugefügten ARIA-Attributen._

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

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS, um das Erscheinungsbild von Inhalten zu ändern (wie z.B. einen roten Rand um ungültige Daten oder die Hintergrundfarbe eines ausgewählten Kontrollkästchens zu ändern), ebenso wie Inhalte zu verstecken oder anzuzeigen.

#### Zustandsänderungen

ARIA bietet Attribute zur Deklaration des aktuellen Zustands eines UI-Widgets. Beispiele umfassen (aber sind sicherlich nicht darauf beschränkt):

- `aria-checked`
  - : Gibt den Zustand eines Kontrollkästchens oder Optionsfelds an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht editierbar oder anderweitig bedienbar ist.
- `aria-grabbed`
  - : Gibt den 'gegriffenen' Zustand eines Objekts in einem Drag-and-Drop-Vorgang an.

(Für eine vollständige Liste der ARIA-Zustände konsultieren Sie die [ARIA-Liste der Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand von UI-Widget-Elementen anzugeben und CSS-Attributselektoren zu verwenden, um das visuelle Erscheinungsbild basierend auf den Zustandsänderungen zu ändern (anstatt ein Skript zu verwenden, um einen Klassennamen am Element zu ändern).

#### Sichtbarkeitsänderungen

Wenn sich die Sichtbarkeit von Inhalten ändert (d.h. ein Element versteckt oder angezeigt wird), sollten Entwickler den Wert der **`aria-hidden`** Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, um ein Element visuell zu verstecken, indem `display:none` verwendet wird.

Hier ist ein Beispiel eines Tooltips, der **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein einfaches Web-Formular mit Tooltips, die Anweisungen enthalten, die mit den Eingabefeldern verknüpft sind.

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

Das CSS für dieses Markup wird im folgenden Code angezeigt. Beachten Sie, dass kein benutzerdefinierter Klassenname verwendet wird, sondern nur der Status des **`aria-hidden`** Attributs.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Der JavaScript-Code zum Aktualisieren der **`aria-hidden`** Eigenschaft hat die im folgenden Code gezeigte Form. Beachten Sie, dass das Skript nur das **`aria-hidden`** Attribut aktualisiert; es muss keinen benutzerdefinierten Klassennamen hinzufügen oder entfernen.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA erlaubt es Entwicklern, eine semantische Rolle für ein Element zu deklarieren, das sonst falsche oder keine Semantiken bietet. Die **`role`** eines Elements sollte sich nicht ändern. Stattdessen sollte das ursprüngliche Element entfernt und durch ein Element mit der neuen **`role`** ersetzt werden.

Zum Beispiel, betrachten Sie ein "Inline-Bearbeitung"-Widget: eine Komponente, die es Benutzern ermöglicht, ein Stück Text an Ort und Stelle zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen "Ansichts"-Modus, in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen "Bearbeitungs"-Modus, in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den "Ansichts"-Modus mit einem schreibgeschützten Text {{ HTMLElement("input") }} Element zu implementieren und dessen ARIA **`role`** auf `button` zu setzen, dann in den "Bearbeitungs"-Modus zu wechseln, indem das Element beschreibbar gemacht und das **`role`** Attribut im "Bearbeitungs"-Modus entfernt wird (da {{ HTMLElement("input") }} Elemente ihre eigenen Rollen-Semantiken haben).

Machen Sie das nicht. Stattdessen implementieren Sie den "Ansichts"-Modus mit einem völlig anderen Element, z.B. einem {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} mit einer **`role`** von `button`, und den "Bearbeitungs"-Modus mit einem Text-{{ HTMLElement("input") }} Element.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> Im Aufbau. Siehe auch [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Tastaturnavigation

Oft übersehen Entwickler die Unterstützung für die Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um für eine Vielzahl von Benutzern zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch mit der Tastatur steuerbar sein, ohne dass eine Maus erforderlich ist. In der Praxis bedeutet dies normalerweise, den von ähnlichen Widgets auf dem Desktop unterstützten Konventionen zu folgen und die volle Nutzung der Tab-, Eingabe-, Leertaste- und Pfeiltasten auszuschöpfen.

Traditionell war die Tastaturnavigation im Internet auf die Tab-Taste beschränkt. Ein Benutzer drückt Tab, um jedes Link-, Button- oder Formularfeld auf der Seite in linearer Reihenfolge zu fokussieren, wobei Umschalt-Tab zur Navigation rückwärts verwendet wird. Es ist eine eindimensionale Form der Navigation—vorwärts und rückwärts, ein Element nach dem anderen. Auf ziemlich dichten Seiten muss ein Benutzer, der nur die Tastatur verwendet, oft Dutzende Male die Tab-Taste drücken, bevor er den benötigten Abschnitt erreicht. Die Implementierung von Desktop-ähnlichen Tastaturkonventionen im Internet hat das Potenzial, die Navigation für viele Benutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-unterstützten Webanwendung funktionieren sollte:

- Die Tab-Taste sollte das Widget als Ganzes fokussieren. Zum Beispiel sollte das Tabben zu einer Menüleiste **NICHT** den Fokus auf das erste Element des Menüs legen.
- Die Pfeiltasten sollten die Auswahl oder Navigation innerhalb des Widgets ermöglichen. Zum Beispiel sollte das Benutzen der linken und rechten Pfeiltasten den Fokus auf die vorherigen und nächsten Menüelemente verschieben.
- Wenn das Widget sich nicht innerhalb eines Formulars befindet, sollten sowohl die Eingabe- als auch die Leertaste die Steuerung auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste die Steuerung auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars absenden sollte.
- Im Zweifelsfall ahmen Sie das standardmäßige Desktop-Verhalten der Steuerung nach, die Sie erstellen.

Für das oben gezeigte Registerkarten-Widget sollte der Benutzer durch das Container-Widget (das {{HTMLElement('ol')}} in unserem Markup) mit den Tab- und Umschalt-Tab-Tasten navigieren können. Sobald der Tastaturfokus im Container ist, sollten die Pfeiltasten es dem Benutzer ermöglichen, zwischen den einzelnen Registerkarten (den {{HTMLElement('li')}} Elementen) zu navigieren. Von hier aus variieren die Konventionen von Plattform zu Plattform. Unter Windows sollte die nächste Registerkarte automatisch aktiviert werden, wenn der Benutzer die Pfeiltasten drückt. Unter macOS kann der Benutzer entweder die Eingabe- oder die Leertaste drücken, um die nächste Registerkarte zu aktivieren. Ein umfassendes Tutorial zur Erstellung von [Tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets) beschreibt, wie man dieses Verhalten mit JavaScript implementiert.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Verfassen von Tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA Spezifikation](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
