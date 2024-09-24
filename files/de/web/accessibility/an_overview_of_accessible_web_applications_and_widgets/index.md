---
title: Ein Überblick über barrierefreie Webanwendungen und Widgets
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von Client-seitigen Widgets, die das Verhalten von vertrauten Desktop-Oberflächen nachahmen. Schieberegler, Menüleisten, Dateilistenansichten und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine eingebauten Tags bereitstellt, die diese Arten von Widgets semantisch beschreiben, greifen Entwickler typischerweise auf generische Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}} zurück. Während dies zu einem Widget führt, das seinem Desktop-Gegenstück ähnlich sieht, gibt es in der Regel nicht genug semantische Informationen im Markup, damit es von unterstützenden Technologien nutzbar ist.

## Das Problem

Dynamische Inhalte auf einer Webseite können besonders problematisch für Benutzer sein, die aus welchen Gründen auch immer den Bildschirm nicht sehen können. Kursanzeigetafeln, Live-Updates von Twitter-Feeds, Fortschrittsanzeigen und ähnliche Inhalte ändern das DOM auf Weisen, die einer unterstützenden Technologie (AT) möglicherweise nicht bekannt sind. Hier kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Tabs-Widget, das ohne ARIA-Beschriftung erstellt wurde. Es gibt keine Informationen im Markup, die die Form und Funktion des Widgets beschreiben._

```html
<!-- Dies ist ein Tabs-Widget. Wie würden Sie es wissen, wenn Sie nur das Markup betrachten? -->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Kapitel 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Kapitel 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">Kapitel 1 Inhalt geht hier</div>
  <div id="ch2Panel">Kapitel 2 Inhalt geht hier</div>
  <div id="quizPanel">Quiz Inhalt geht hier</div>
</div>
```

_Beispiel 2: Wie das Tabs-Widget visuell gestaltet sein könnte. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für eine unterstützende Technologie._ ![Screenshot des Tabs-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem spezielle Attribute dem Markup hinzugefügt werden. Entwickelt, um die Lücke zwischen Standard-HTML-Tags und den Desktop-ähnlichen Steuerelementen in dynamischen Webanwendungen zu schließen, bietet ARIA Rollen und Zustände, die das Verhalten der meisten bekannten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser Elemente wurden hinzugefügt, als Browser keine vollwertige Unterstützung für moderne HTML-Funktionen hatten. **Entwickler sollten immer das richtige semantische HTML-Element verwenden, anstatt ARIA zu verwenden**.

Die ARIA-Spezifikation ist in drei verschiedene Arten von Attributen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die ansonsten in HTML 4 nicht verfügbar sind, wie Schieberegler, Menüleisten, Tabs und Dialoge. Eigenschaften beschreiben Merkmale dieser Widgets, z.B. ob sie ziehbar sind, ein erforderliches Element haben oder ein Popup mit ihnen verknüpft ist. Zustände beschreiben den aktuellen Interaktionsstatus eines Elements und informieren die unterstützende Technologie darüber, ob es beschäftigt, deaktiviert, ausgewählt oder verborgen ist.

ARIA-Attribute werden automatisch vom Browser interpretiert und in die nativen Barrierefreiheits-APIs des Betriebssystems übersetzt. Ein Element mit role="slider" wird also auf die gleiche Weise gesteuert wie ein natives Schieberegler auf dem Betriebssystem.

Dies bietet eine viel konsistentere Benutzererfahrung als es bei der vorherigen Generation von Webanwendungen möglich war, da Benutzer von unterstützenden Technologien all ihr Wissen darüber, wie Desktop-Anwendungen funktionieren, auch bei der Nutzung von webbasierten Anwendungen anwenden können.

_Beispiel 3: Markup für das Tabs-Widget mit hinzugefügten ARIA-Attributen._

```html
<!-- Jetzt *sind* dies Tabs! -->
<!-- Wir haben Rollenattribute hinzugefügt, um die Tab-Liste und jede Tab zu beschreiben. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Kapitel 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Kapitel 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Beachten Sie die Rolle und aria-labelledby-Attribute, die wir hinzugefügt haben, um diese Panels zu beschreiben. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">
    Kapitel 1 Inhalt geht hier
  </div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">
    Kapitel 2 Inhalt geht hier
  </div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">
    Quiz Inhalt geht hier
  </div>
</div>
```

ARIA wird [gut unterstützt](https://caniuse.com/#feat=wai-aria) von allen führenden Browsern und vielen unterstützenden Technologien.

### Präsentationsänderungen

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS, um das Erscheinungsbild von Inhalten zu ändern (wie ein roter Rahmen um ungültige Daten oder Ändern der Hintergrundfarbe eines markierten Kontrollkästchens), sowie das Anzeigen oder Verbergen von Inhalten.

#### Statusänderungen

ARIA bietet Attribute zum Deklarieren des aktuellen Zustands eines UI-Widgets. Beispiele (aber sicherlich nicht ausschließlich) sind:

- `aria-checked`
  - : Gibt den Status eines Kontrollkästchens oder Optionsfelds an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht bearbeitbar oder anderweitig bedienbar ist.
- `aria-grabbed`
  - : Gibt den 'gegriffenen' Status eines Objekts in einer Drag-and-Drop-Operation an.

(Für eine vollständige Liste der ARIA-Zustände konsultieren Sie die [ARIA-Liste der Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand von UI-Widget-Elementen anzuzeigen, und CSS-Attributselektoren verwenden, um das Erscheinungsbild basierend auf den Zustandsänderungen visuell zu ändern (anstatt Skripte zu verwenden, um einen Klassennamen am Element zu ändern).

#### Sichtbarkeitsänderungen

Wenn sich die Sichtbarkeit von Inhalten ändert (d.h. ein Element wird versteckt oder angezeigt), sollten Entwickler den Wert der **`aria-hidden`** Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, um ein Element mit `display:none` visuell zu verbergen.

Hier ist ein Beispiel für ein Tooltip, das **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein einfaches Webformular mit Tooltips, die Anweisungen zu den Eingabefeldern enthalten.

```html
<div class="text">
  <label id="tp1-label" for="first">Vorname:</label>
  <input
    type="text"
    id="first"
    name="first"
    size="20"
    aria-labelledby="tp1-label"
    aria-describedby="tp1"
    aria-required="false" />
  <div id="tp1" class="tooltip" role="tooltip" aria-hidden="true">
    Ihr Vorname ist optional
  </div>
</div>
```

Das zugehörige CSS für dieses Markup wird im folgenden Code gezeigt. Beachten Sie, dass hier keine benutzerdefinierte Klasse verwendet wird, sondern nur der Status des **`aria-hidden`** Attributs.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Das JavaScript zum Aktualisieren der **`aria-hidden`** Eigenschaft hat die im folgenden Code gezeigte Form. Beachten Sie, dass das Skript nur das **`aria-hidden`** Attribut aktualisiert; es muss keine benutzerdefinierte Klasse hinzugefügt oder entfernt werden.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA ermöglicht es Entwicklern, eine semantische Rolle für ein Element zu deklarieren, das ansonsten falsche oder keine Semantik bietet. Die **`role`** eines Elements sollte sich nicht ändern. Stattdessen entfernen Sie das ursprüngliche Element und ersetzen Sie es durch ein Element mit der neuen **`role`**.

Betrachten Sie zum Beispiel ein „Inline-Bearbeiten“-Widget: ein Komponenten, das es Benutzern ermöglicht, ein Stück Text direkt an Ort und Stelle zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen „Ansichts“-Modus, in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen „Bearbeitungs“-Modus, in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den „Ansichts“-Modus mit einem schreibgeschützten Text-{{HTMLElement("input")}} Element zu implementieren und seine ARIA **`role`** auf `button` zu setzen, dann in den „Bearbeitungs“-Modus zu wechseln, indem er das Element beschreibbar macht und das **`role`** Attribut im „Bearbeitungs“-Modus entfernt (da {{HTMLElement("input")}} Elemente ihre eigene Rollen-Semantik haben).

Tun Sie das nicht. Implementieren Sie stattdessen den „Ansichts“-Modus mit einem völlig anderen Element, z.B. einem {{HTMLElement("div")}} oder {{HTMLElement("span")}} mit einer **`role`** von `button` und den „Bearbeitungs“-Modus mit einem Text-{{HTMLElement("input")}} Element.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> Derzeit im Aufbau. Siehe auch [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Tastaturnavigation

Oft übersehen Entwickler die Unterstützung der Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um einer Vielzahl von Benutzern zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch mit der Tastatur steuerbar sein, ohne dass eine Maus erforderlich ist. In der Praxis bedeutet dies in der Regel, den von ähnlichen Widgets auf dem Desktop unterstützten Konventionen zu folgen und die volle Nutzung der Tab-, Eingabe-, Leertaste- und Pfeiltasten zu ermöglichen.

Traditionell war die Tastaturnavigation im Web auf die Tabulatortaste beschränkt. Ein Benutzer drückt Tab, um jeden Link, Knopf oder Formular auf der Seite in einer linearen Reihenfolge zu fokussieren, und verwendet Shift-Tab, um rückwärts zu navigieren. Es ist eine eindimensionale Form der Navigation – vorwärts und rückwärts, ein Element nach dem anderen. Auf ziemlich dicht bepackten Seiten muss ein Benutzer, der nur die Tastatur verwendet, oft Dutzende Male die Tabulatortaste drücken, bevor er den benötigten Abschnitt erreicht. Die Implementierung von Desktop-ähnlichen Tastaturkonventionen im Web hat das Potenzial, die Navigation für viele Benutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-fähigen Webanwendung funktionieren sollte:

- Die Tabulatortaste sollte den Fokus auf das Widget als Ganzes legen. Beispielsweise sollte das Tabben zu einer Menüleiste **NICHT** den Fokus auf das erste Element des Menüs legen.
- Die Pfeiltasten sollten eine Auswahl oder Navigation innerhalb des Widgets ermöglichen. Beispielsweise sollten sich die Fokus mit den Links- und Rechts-Pfeiltasten auf das vorherige und nächste Menüpunkte bewegen.
- Wenn das Widget sich nicht in einem Formular befindet, sollten sowohl die Eingabe- als auch die Leertaste die Steuerung auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste die Steuerung auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars absenden sollte.
- Im Zweifelsfall, ahmen Sie das Standard-Desktopverhalten der Steuerung nach, die Sie erstellen.

Für das obige Beispiel des Tabs-Widgets sollte der Benutzer mit den Tabulatormodussen in das und aus dem Container des Widgets (das {{HTMLElement('ol')}} in unserem Markup) navigieren können. Sobald der Tastaturfokus innerhalb des Containers ist, sollten die Pfeiltasten dem Benutzer ermöglichen, zwischen den einzelnen Tabs (den {{HTMLElement('li')}} Elementen) zu navigieren. Von hier aus variieren die Konventionen von Plattform zu Plattform. Unter Windows sollte der nächste Tab automatisch aktiviert werden, wenn der Benutzer die Pfeiltasten drückt. Unter macOS kann der Benutzer die Eingabe- oder die Leertaste drücken, um den nächsten Tab zu aktivieren. Ein detailliertes Tutorial zur Erstellung [Tastaturnavigierbarer JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets) beschreibt, wie man dieses Verhalten mit JavaScript implementiert.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Erstellen von Tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Autorenschaftspraktiken](https://www.w3.org/WAI/ARIA/apg/)
