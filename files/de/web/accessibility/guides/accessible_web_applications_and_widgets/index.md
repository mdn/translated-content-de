---
title: Ein Überblick über barrierefreie Webanwendungen und Widgets
short-title: Barrierefreie Webanwendungen und Widgets
slug: Web/Accessibility/Guides/Accessible_web_applications_and_widgets
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von clientseitigen Widgets, die das Verhalten vertrauter Desktop-Schnittstellen nachbilden. Schieberegler, Menüleisten, Dateilistenansichten und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine eingebauten Tags bietet, die diese Arten von Widgets semantisch beschreiben, weichen Entwickler in der Regel auf allgemeine Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}} aus. Während dies zu einem Widget führt, das seinem Desktop-Pendant ähnelt, gibt es normalerweise nicht genügend semantische Informationen im Markup, um für unterstützende Technologien nutzbar zu sein.

## Das Problem

Dynamische Inhalte auf einer Webseite können insbesondere für Benutzer problematisch sein, die aus welchen Gründen auch immer den Bildschirm nicht sehen können. Aktien-Ticker, Live-Twitter-Feed-Updates, Fortschrittsindikatoren und ähnliche Inhalte modifizieren das DOM auf Weise, die einer unterstützenden Technologie (AT) möglicherweise nicht bekannt ist. Hier kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Tab-Widget, das ohne ARIA-Kennzeichnung erstellt wurde. Es gibt keine Informationen im Markup, um die Form und Funktion des Widgets zu beschreiben._

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

_Beispiel 2: Wie das Tab-Widget visuell gestaltet sein könnte. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für eine unterstützende Technologie._ ![Screenshot des Tab-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem spezielle Attribute zum Markup hinzugefügt werden. Entwickelt, um die Lücke zwischen Standard-HTML-Tags und den desktopähnlichen Steuerelementen zu schließen, die in dynamischen Webanwendungen zu finden sind, bietet ARIA Rollen und Zustände, die das Verhalten der meisten vertrauten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser wurden hinzugefügt, als Browser moderne HTML-Funktionen noch nicht vollständig unterstützten. **Entwickler sollten immer das korrekte semantische HTML-Element dem Einsatz von ARIA vorziehen**.

Die ARIA-Spezifikation ist in drei verschiedene Attributtypen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die in HTML 4 nicht verfügbar sind, wie Schieberegler, Menüleisten, Tabs und Dialoge. Eigenschaften beschreiben Merkmale dieser Widgets, wie z.B. ob sie verschiebbar sind, ein erforderliches Element haben oder ein Popup mit ihnen verbunden ist. Zustände beschreiben den aktuellen Interaktionszustand eines Elements und informieren die unterstützende Technologie, ob es beschäftigt, deaktiviert, ausgewählt oder versteckt ist.

ARIA-Attribute werden automatisch vom Browser interpretiert und in die nativen Zugänglichkeits-APIs des Betriebssystems übersetzt. Ein Element mit `role="slider"` wird also genauso gesteuert wie ein nativer Slider im Betriebssystem.

Dies bietet ein viel konsistenteres Benutzererlebnis als es in der vorherigen Generation von Webanwendungen möglich war, da Benutzer unterstützender Technologien ihr gesamtes Wissen darüber, wie Desktop-Anwendungen funktionieren, anwenden können, wenn sie webbasierte Anwendungen verwenden.

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

ARIA wird von allen großen Browsern und vielen unterstützenden Technologien [gut unterstützt](https://caniuse.com/#feat=wai-aria).

### Präsentationsänderungen

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS zur Änderung des Erscheinungsbildes von Inhalten (wie ein roter Rahmen um ungültige Daten oder die Änderung der Hintergrundfarbe eines ausgewählten Kontrollkästchens) sowie das Anzeigen oder Verbergen von Inhalten.

#### Zustandsänderungen

ARIA bietet Attribute zur Deklaration des aktuellen Zustands eines UI-Widgets. Beispiele hierfür sind (aber sind sicherlich nicht darauf beschränkt):

- `aria-checked`
  - : Gibt den Zustand eines Kontrollkästchens oder Radioschalters an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht bearbeitbar oder anderweitig bedienbar ist.
- `aria-grabbed`
  - : Gibt den „gegriffenen“ Zustand eines Objekts in einer Drag-and-Drop-Operation an.

(Für eine vollständige Liste der ARIA-Zustände konsultieren Sie die [ARIA-Liste der Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand der UI-Widget-Elemente anzuzeigen und CSS-Attributselektoren verwenden, um das visuelle Erscheinungsbild basierend auf den Zustandsänderungen zu ändern (anstatt Skripte zu verwenden, um einen Klassennamen des Elements zu ändern).

#### Sichtbarkeitsänderungen

Wenn sich die Sichtbarkeit des Inhalts ändert (d.h. ein Element wird verborgen oder angezeigt), sollten Entwickler den Wert der **`aria-hidden`**-Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, das ein Element visuell mit `display:none` verbirgt.

Hier ist ein Beispiel für ein Tooltip, das **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein Webformular mit Tooltips, die Anweisungen enthalten, die mit den Eingabefeldern verknüpft sind.

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

Das CSS für dieses Markup wird im folgenden Code gezeigt. Beachten Sie, dass keine benutzerdefinierten Klassennamen verwendet werden, sondern nur der Status des **`aria-hidden`**-Attributs.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Das JavaScript zur Aktualisierung der **`aria-hidden`**-Eigenschaft hat die im folgenden Code gezeigte Form. Beachten Sie, dass das Skript nur das **`aria-hidden`**-Attribut aktualisiert; es muss nicht auch einen benutzerdefinierten Klassennamen hinzufügen oder entfernen.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA erlaubt es Entwicklern, eine semantische Rolle für ein Element zu deklarieren, das ansonsten falsche oder keine Semantiken bietet. Die **`role`** eines Elements sollte nicht geändert werden. Stattdessen entfernen Sie das Originalelement und ersetzen es durch ein Element mit der neuen **`role`**.

Betrachten Sie beispielsweise ein „Inline Edit“-Widget: eine Komponente, die es Benutzern ermöglicht, ein Textstück an Ort und Stelle zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen „Ansichts“-Modus, in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen „Bearbeitungs“-Modus, in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den „Ansichts“-Modus mit einem schreibgeschützten Text-{{HTMLElement("input")}}-Element zu implementieren und dessen ARIA-**`role`** auf `button` zu setzen, dann in den „Bearbeitungs“-Modus zu wechseln, indem das Element beschreibbar gemacht und das **`role`**-Attribut im „Bearbeitungs“-Modus entfernt wird (da {{HTMLElement("input")}}-Elemente ihre eigenen Rollensemantiken haben).

Tun Sie dies nicht. Stattdessen implementieren Sie den „Ansichts“-Modus mit einem völlig anderen Element, wie einem {{HTMLElement("div")}} oder {{HTMLElement("span")}} mit einer **`role`** von `button`, und den „Bearbeitungs“-Modus mit einem Text-{{HTMLElement("input")}}-Element.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> Im Aufbau. Siehe auch [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Tastaturnavigation

Entwickler übersehen oft die Unterstützung der Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um für eine Vielzahl von Benutzern zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch über die Tastatur steuerbar sein, ohne dass eine Maus erforderlich ist. In der Praxis bedeutet dies, in der Regel den Konventionen ähnlicher Widgets auf dem Desktop zu folgen und die volle Leistung von Tab, Eingabetaste, Leertaste und Pfeiltasten zu nutzen.

Traditionell war die Tastaturnavigation im Web auf die Tab-Taste beschränkt. Ein Benutzer drückt Tab, um jeden Link, jede Schaltfläche oder jedes Formular auf der Seite in linearer Reihenfolge zu fokussieren, und verwendet Shift-Tab, um zurück zu navigieren. Es ist eine eindimensionale Form der Navigation – vor und zurück, ein Element nach dem anderen. Auf relativ dichten Seiten muss ein Benutzer, der nur die Tastatur verwendet, oft Dutzende von Malen die Tabulatortaste drücken, bevor er den benötigten Abschnitt erreicht. Die Implementierung von Desktop-ähnlichen Tastaturkonventionen im Web hat das Potenzial, die Navigation für viele Benutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-fähigen Webanwendung funktionieren sollte:

- Die Tabulatortaste sollte den Fokus auf das Widget als Ganzes legen. Beispielsweise sollte das Tabben zu einer Menüleiste **NICHT** den Fokus auf das erste Element des Menüs legen.
- Mit den Pfeiltasten sollte innerhalb des Widgets eine Auswahl oder Navigation möglich sein. Zum Beispiel sollten die linke und rechte Pfeiltaste den Fokus auf die vorherigen und nächsten Menüelemente verschieben.
- Wenn sich das Widget nicht in einem Formular befindet, sollten sowohl die Eingabetaste als auch die Leertaste das Steuerelement auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste das Steuerelement auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars auslösen sollte.
- Im Zweifelsfall ahmen Sie das Standardverhalten des Desktop-Steuerelements nach, das Sie erstellen.

Für das oben genannte Tab-Widget-Beispiel sollte der Benutzer in der Lage sein, mit den Tab- und Shift-Tab-Tasten in das und aus dem Container des Widgets (dem {{HTMLElement('ol')}} in unserem Markup) zu navigieren. Sobald der Tastaturfokus im Container ist, sollten die Pfeiltasten es dem Benutzer ermöglichen, zwischen jedem Tab (den {{HTMLElement('li')}}-Elementen) zu navigieren. Ab hier variieren die Konventionen von Plattform zu Plattform. Auf Windows sollte der nächste Tab automatisch aktiviert werden, wenn der Benutzer die Pfeiltasten drückt. Auf macOS kann der Benutzer entweder die Eingabetaste oder die Leertaste drücken, um den nächsten Tab zu aktivieren. Ein detailliertes Tutorial zur Erstellung von [Tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets) beschreibt, wie dieses Verhalten mit JavaScript implementiert wird.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Schreiben von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA-Autorenschaftspraktiken](https://www.w3.org/WAI/ARIA/apg/)
