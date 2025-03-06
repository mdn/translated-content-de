---
title: Ein Überblick über zugängliche Webanwendungen und Widgets
short-title: Zugängliche Webanwendungen und Widgets
slug: Web/Accessibility/Guides/Accessible_web_applications_and_widgets
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die meisten JavaScript-Bibliotheken bieten eine Bibliothek von Client-seitigen Widgets an, die das Verhalten von vertrauten Desktop-Oberflächen nachahmen. Schieberegler, Menüleisten, Dateilistenansichten und mehr können mit einer Kombination aus JavaScript, CSS und HTML erstellt werden. Da die HTML4-Spezifikation keine integrierten Tags bietet, die diese Arten von Widgets semantisch beschreiben, greifen Entwickler typischerweise auf generische Elemente wie {{HTMLElement('div')}} und {{HTMLElement('span')}} zurück. Obwohl dies zu einem Widget führt, das aussieht wie sein Desktop-Gegenstück, fehlt es normalerweise an ausreichenden semantischen Informationen im Markup, um von unterstützender Technologie verwendet werden zu können.

## Das Problem

Dynamischer Inhalt auf einer Webseite kann besonders problematisch für Benutzer sein, die aus irgendeinem Grund den Bildschirm nicht sehen können. Börsenticker, Live-Twitter-Feed-Updates, Fortschrittsanzeigen und ähnlicher Inhalt verändern das DOM auf Weisen, die einer unterstützenden Technologie (AT) möglicherweise nicht bewusst sind. Hier kommt [ARIA](/de/docs/Web/Accessibility/ARIA) ins Spiel.

_Beispiel 1: Markup für ein Tabs-Widget, das ohne ARIA-Kennzeichnung erstellt wurde. Es gibt keine Informationen im Markup, die die Form und Funktion des Widgets beschreiben._

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

_Beispiel 2: Wie das Tabs-Widget visuell gestaltet werden könnte. Benutzer könnten es visuell erkennen, aber es gibt keine maschinenlesbaren Semantiken für unterstützende Technologie._ ![Screenshot des Tabs-Widgets](tabs_widget.png)

## ARIA

**ARIA** ermöglicht es Entwicklern, ihre Widgets detaillierter zu beschreiben, indem spezielle Attribute zum Markup hinzugefügt werden. Entwickelt, um die Lücke zwischen standardmäßigen HTML-Tags und den Desktop-ähnlichen Steuerelementen in dynamischen Webanwendungen zu schließen, bietet ARIA Rollen und Zustände, die das Verhalten der meisten vertrauten UI-Widgets beschreiben.

> [!WARNING]
> Viele dieser wurden hinzugefügt, als Browser moderne HTML-Funktionen nicht vollständig unterstützten. **Entwickler sollten immer das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen**.

Die ARIA-Spezifikation ist in drei verschiedene Arten von Attributen unterteilt: Rollen, Zustände und Eigenschaften. Rollen beschreiben Widgets, die in HTML 4 nicht anderweitig verfügbar sind, wie Schieberegler, Menüleisten, Tabs und Dialoge. Eigenschaften beschreiben Merkmale dieser Widgets, wie ob sie gezogen werden können, ein erforderliches Element haben oder ein Popup mit ihnen verbunden ist. Zustände beschreiben den aktuellen Interaktionszustand eines Elements und informieren die unterstützende Technologie darüber, ob es beschäftigt, deaktiviert, ausgewählt oder versteckt ist.

ARIA-Attribute werden vom Browser automatisch interpretiert und in die nativen Barrierefreiheits-APIs des Betriebssystems übersetzt. So wird ein Element mit role="slider" genauso gesteuert wie ein nativer Schieberegler auf dem Betriebssystem.

Dies bietet ein wesentlich konsistenteres Benutzererlebnis als in der vorherigen Generation von Webanwendungen, da Benutzer unterstützender Technologie all ihr Wissen darüber, wie Desktop-Anwendungen funktionieren, anwenden können, wenn sie webbasierte Anwendungen nutzen.

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

ARIA wird [gut unterstützt](https://caniuse.com/#feat=wai-aria) von allen wichtigen Browsern und vielen unterstützenden Technologien.

### Präsentationsänderungen

Dynamische Präsentationsänderungen umfassen die Verwendung von CSS, um das Erscheinungsbild von Inhalten zu ändern (wie ein roter Rand um ungültige Daten oder das Ändern der Hintergrundfarbe eines ausgewählten Kontrollkästchens) sowie das Ein- oder Ausblenden von Inhalten.

#### Zustandsänderungen

ARIA bietet Attribute zur Deklaration des aktuellen Zustands eines UI-Widgets. Beispiele umfassen (aber beschränken sich sicherlich nicht darauf):

- `aria-checked`
  - : Gibt den Zustand eines Kontrollkästchens oder Radiobuttons an.
- `aria-disabled`
  - : Gibt an, dass ein Element sichtbar, aber nicht bearbeitbar oder anderweitig bedienbar ist.
- `aria-grabbed`
  - : Gibt den 'gegriffenen' Zustand eines Objekts in einem Drag-and-Drop-Vorgang an.

(Für eine vollständige Liste der ARIA-Zustände konsultieren Sie die [ARIA-Liste von Zuständen und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#introstates).)

Entwickler sollten ARIA-Zustände verwenden, um den Zustand von UI-Widget-Elementen anzuzeigen und CSS-Attribut-Selektoren verwenden, um das visuelle Erscheinungsbild basierend auf den Zustandsänderungen zu ändern (anstatt ein Skript zu verwenden, um einen Klassennamen am Element zu ändern).

#### Sichtbarkeitsänderungen

Wenn sich die Sichtbarkeit von Inhalten ändert (d.h. ein Element versteckt oder angezeigt wird), sollten Entwickler den Wert der **`aria-hidden`** Eigenschaft ändern. Die oben beschriebenen Techniken sollten verwendet werden, um CSS zu deklarieren, um ein Element visuell zu verstecken, indem `display:none` verwendet wird.

Hier ist ein Beispiel für ein Tooltip, das **`aria-hidden`** verwendet, um die Sichtbarkeit des Tooltips zu steuern. Das Beispiel zeigt ein einfaches Webformular mit Tooltips, die Anweisungen enthalten, die den Eingabefeldern zugeordnet sind.

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

Das CSS für dieses Markup wird im folgenden Code angezeigt. Beachten Sie, dass kein benutzerdefinierter Klassenname verwendet wird, nur der Status des **`aria-hidden`** Attributs.

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

Das JavaScript zum Aktualisieren der **`aria-hidden`** Eigenschaft hat die Form, die im folgenden Code gezeigt wird. Beachten Sie, dass das Skript nur das **`aria-hidden`** Attribut aktualisiert; es muss nicht auch einen benutzerdefinierten Klassennamen hinzufügen oder entfernen.

```js
function showTip(el) {
  el.setAttribute("aria-hidden", "false");
}
```

### Rollenänderungen

ARIA ermöglicht es Entwicklern, eine semantische Rolle für ein Element zu deklarieren, das ansonsten falsche oder keine Semantiken bietet. Die **`role`** eines Elements sollte sich nicht ändern. Stattdessen entfernen Sie das ursprüngliche Element und ersetzen es durch ein Element mit der neuen **`role`**.

Betrachten Sie zum Beispiel ein "Inline-Edit"-Widget: eine Komponente, die es Benutzern ermöglicht, ein Stück Text direkt zu bearbeiten, ohne den Kontext zu wechseln. Diese Komponente hat einen "Ansichts"-Modus, in dem der Text nicht bearbeitbar, aber aktivierbar ist, und einen "Bearbeitungs"-Modus, in dem der Text bearbeitet werden kann. Ein Entwickler könnte versucht sein, den "Ansichts"-Modus mit einem schreibgeschützten Text {{ HTMLElement("input") }}-Element zu implementieren und dessen ARIA **`role`** auf `button` zu setzen, dann zum "Bearbeitungs"-Modus zu wechseln, indem das Element beschreibbar gemacht und das **`role`** Attribut im "Bearbeitungs"-Modus entfernt wird (da {{ HTMLElement("input") }}-Elemente ihre eigenen Rollensemantiken haben).

Tun Sie dies nicht. Stattdessen implementieren Sie den "Ansichts"-Modus, indem Sie ein anderes Element verwenden, wie ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} mit einer **`role`** von `button`, und den "Bearbeitungs"-Modus unter Verwendung eines Text {{ HTMLElement("input") }}-Elements.

### Asynchrone Inhaltsänderungen

> [!NOTE]
> Im Aufbau. Siehe auch [Live-Regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Tastaturnavigation

Entwickler übersehen oft die Unterstützung für die Tastatur, wenn sie benutzerdefinierte Widgets erstellen. Um für eine Vielzahl von Benutzern zugänglich zu sein, sollten alle Funktionen einer Webanwendung oder eines Widgets auch mit der Tastatur steuerbar sein, ohne dass eine Maus erforderlich ist. In der Praxis bedeutet dies normalerweise, dass die Konventionen ähnlicher Widgets auf dem Desktop befolgt werden und die volle Ausnutzung der Tab-, Eingabe-, Leertaste- und Pfeiltasten erfolgt.

Traditionell war die Tastaturnavigation im Web auf die Tabulatortaste beschränkt. Ein Benutzer drückt die Tab-Taste, um jedes Link, Button oder Formular auf der Seite in linearer Reihenfolge zu fokussieren, und verwendet Shift-Tab, um rückwärts zu navigieren. Es ist eine eindimensionale Form der Navigation – vorwärts und rückwärts, ein Element nach dem anderen. Auf ziemlich dichten Seiten muss ein Benutzer, der nur die Tastatur verwendet, oft dutzende Male die Tabulatortaste drücken, bevor er den benötigten Abschnitt erreicht. Die Implementierung von Desktop-ähnlichen Tastaturkonventionen im Web hat das Potenzial, die Navigation für viele Benutzer erheblich zu beschleunigen.

Hier ist eine Zusammenfassung, wie die Tastaturnavigation in einer ARIA-fähigen Webanwendung funktionieren sollte:

- Die Tab-Taste sollte das Widget als Ganzes fokussieren. Zum Beispiel sollte man beim Tabben zu einer Menüleiste **NICHT** auf das erste Element des Menüs fokussieren.
- Die Pfeiltasten sollten die Auswahl oder Navigation innerhalb des Widgets ermöglichen. Zum Beispiel sollte man mit den linken und rechten Pfeiltasten den Fokus auf die vorherigen und nächsten Menüelemente verschieben können.
- Wenn sich das Widget nicht in einem Formular befindet, sollten sowohl die Eingabe- als auch die Leertaste die Steuerung auswählen oder aktivieren.
- Innerhalb eines Formulars sollte die Leertaste die Steuerung auswählen oder aktivieren, während die Eingabetaste die Standardaktion des Formulars abschicken sollte.
- Im Zweifelsfall sollten Sie das standardmäßige Desktop-Verhalten der Steuerung, die Sie erstellen, nachahmen.

Für das Tabs-Widget-Beispiel oben sollte der Benutzer in der Lage sein, in und aus dem Container des Widgets (das {{HTMLElement('ol')}} in unserem Markup) mit den Tasten Tab und Shift-Tab zu navigieren. Sobald der Tastaturfokus im Container ist, sollten die Pfeiltasten es dem Benutzer ermöglichen, zwischen den einzelnen Registerkarten (den {{HTMLElement('li')}}-Elementen) zu navigieren. Von hier aus variieren die Konventionen von Plattform zu Plattform. Unter Windows sollte die nächste Registerkarte automatisch aktiviert werden, wenn der Benutzer die Pfeiltasten drückt. Unter macOS kann der Benutzer entweder die Eingabe- oder die Leertaste drücken, um die nächste Registerkarte zu aktivieren. Eine ausführliche Anleitung zur Erstellung von [Tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets) beschreibt, wie dieses Verhalten mit JavaScript implementiert wird.

## Siehe auch

- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Schreiben von tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/)
