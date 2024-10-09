---
title: "ARIA: scrollbar role"
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist, unabhängig davon, ob der Viewport die gesamte Browsergröße, ein `<iframe>` oder irgendein Element ist, das einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) darstellt.

### Was ist eine Scrollleiste?

Viele Anwendungen bieten native Scrollleisten, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Bahnbereiche entlang der Länge des gesteuerten Viewports mit einem UI-Element namens Daumen oder Schieber, das entlang einer Bahn gezogen werden kann, um den zugehörigen Inhalt innerhalb des Viewports zu verschieben. Einige Scrollleisten haben Pfeile an jedem Ende der Bahn, die das Scrollen des Viewports um eine kurze Strecke ermöglichen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das gesamte Browserfenster ist und der Inhalt höher ist als der Viewport, repräsentiert im meisten Browsern die Scrollleiste am rechten Rand des Fensters die Gesamtlänge der Seite, und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Viewport ist.

Scrollleisten können auch in Viewports erscheinen, die Unterabschnitte des vollständigen Browserfensters sind. Bleiben wir bei diesem Inhalt als Beispiel: Wenn dieser Inhalt in ein {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, ist die native vertikale Scrollleiste die Höhe des Rahmens. Eine Scrollleiste ist im Allgemeinen die Länge des Viewports, muss jedoch nicht sein.

Wenn Sie derzeit keine Scrollleiste sehen, könnte es daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen oder nur dann anzeigt, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten auch dann sichtbar gemacht werden, wenn der Inhalt in den Viewport passt, selbst wenn kein Scrollen nötig oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen nativer Scrollleisten zu gewährleisten. Eine [CSS-Scrollleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird entwickelt. Einige Browser erlauben das [Styling von Scrollleisten über geprefixte Pseudo-Elemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da das Styling nativer Scrollleisten historisch begrenzt war, stoßen Sie möglicherweise auf eine in JavaScript implementierte Scrollleiste, die Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die `scrollbar`-Rolle verwenden, um unterstützende Technologien darauf hinzuweisen, dass ein UI-Steuerelement eine interaktive Scrollleiste ist.

Ein Element mit der `scrollbar`-Rolle ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die angibt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das dem am ähnlichsten ist, ist der `range`-{{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des scrollbaren Bereichs, den es steuert. Die `aria-valuenow`-Eigenschaft definiert den aktuellen Wert der Scrollleiste.

Obwohl die `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) für die Scrollleiste nur dann festgelegt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den minimalen und maximalen Werten einschließlich liegen oder zwischen `0` und `100` einschließlich, wenn die minimalen und maximalen Werte standardmäßig `0` und `100` sind. `aria-valuenow` teilt mit, wie nah der Viewport am unteren Ende des Dokuments ist. Denken Sie an ihn wie an eine Fortschrittsanzeige, bei der der Beginn des Dokuments der Minimalwert und das Ende des Dokuments der Maximalwert ist.

Ein `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte über die Größe der Scrollleiste und die Position des Daumens in Bezug auf den sichtbaren Bereich der Ausrichtung (horizontal oder vertikal), die er steuert. Anders ausgedrückt, die Länge (Höhe oder Breite) des `scrollbar` repräsentiert alle Inhalte innerhalb eines Viewports. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow`-Wert repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist, und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentwert zwischen `aria-valuemin` und `aria-valuemax` dargestellt, berechnet von unterstützenden Technologien.

> [!NOTE]
> Unterstützende Technologien zeigen den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax` an, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so festzulegen, dass sie für diese Berechnung geeignet sind.

Wie eine native Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen, indem sie Maus, Touchpad, Tastatur und Spracheingabe verwenden. `scrollbar`-Rollenumsetzungen müssen auch alle diese Interaktionsmethoden unterstützen.

Bei Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` durch Klicken auf die Scrollpfeile an beiden Enden der Scrollleiste, sofern vorhanden, durch Klicken auf einen leeren Teil der Scrollbahn sowie durch Klicken und Ziehen des Scroll-Daumen zu aktivieren.

Die Tastaturnavigation muss ebenfalls unterstützt werden. Wenn der Fokus innerhalb des von einer `scrollbar` gesteuerten Viewports liegt, sollten der <kbd>Pfeil nach oben</kbd> und der <kbd>Pfeil nach unten</kbd> (oder der <kbd>Pfeil nach links</kbd> und der <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scroll-Daumen proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild hoch</kbd>, <kbd>Bild runter</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports für jeden Tastendruck bewegen, bis der untere oder obere (oder linke oder rechte) Teil des Inhalts im Blickfeld ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Feedback zu geben durch:

1. Visuelle Aktualisierung des `scrollbar`-Elements,
2. Scrollen des Inhalts des Viewports, und
3. Aktualisierung des Wertes der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Eigenschaft.

Die Standardausrichtung der `scrollbar`-Rolle ist vertikal. Das Einfügen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) in diesem Fall ist optional. Die Ausrichtung repräsentiert die Ausrichtung der Scrollleiste und den Scrolling-Effekt auf den vom Scrollbalken gesteuerten Anzeigebereich. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` auf dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name aus dem zugeordneten {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachfahren sind repräsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-API zur Barrierefreiheit dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `scrollbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle untergeordneten Elemente eines `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachfahren von `scrollbar` darstellend sind, ist der folgende Code gleichwertig:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Sicht eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorhergehenden Codebeispiele im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} gleichwertig sind mit dem folgenden:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport, über die `id`, dessen Inhalte von der Scrollleiste gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, wenn vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien stellen den Wert von `aria-valuenow` häufig als Prozentsatz dar. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Wert der Scrollleiste für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer ist als `aria-valuemin`. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Wenn kein nativer Formsteuerelement verwendet wird und daher die Möglichkeit fehlt, die Scrollleiste mit einem {{HTMLElement('label')}} zu verknüpfen, setzen Sie, wenn sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen bereitstellen kann, auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines Elements, das Text als Label enthält. Ansonsten verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn kein {{HTMLElement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, bietet den Zeichenkettenwert, der das `scrollbar`-Element mit dem erforderlichen zugänglichen Namen beschriftet.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertikal`. Die Eigenschaft kann eingeschlossen und auf `horizontal`, `undefined` (die Standardeinstellung für alle Rollen, sofern nicht anders angegeben) oder `vertikal` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei der Daumen proportional nach oben auf dem Scrollbalken-Schieber bewegt wird, bis der obere Rand des Inhalts und des Scrollbalkens erreicht sind.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei der Daumen proportional nach unten auf dem Scrollbalken-Schieber bewegt wird, bis der untere Rand des Inhalts und des Scrollbalkens erreicht sind.
- <kbd>Pfeil nach links</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei der Daumen proportional nach links über den Scrollbalken-Schieber bewegt wird, bis der linke Rand des Inhalts an das linke Ende des Viewports stößt und der Daumen am linken Ende des Scrollbalkens ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei der Daumen proportional nach rechts über den Scrollbalken-Schieber bewegt wird, bis der rechte Rand des Inhalts an das rechte Ende des Viewports stößt und der Daumen am rechten Ende des Scrollbalkens ausgerichtet ist.
- <kbd>Bild hoch</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei der Daumen proportional nach oben auf dem Scrollbalken-Schieber bewegt wird, bis der obere Rand des Inhalts und des Scrollbalkens erreicht sind.
- <kbd>Bild runter</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei der Daumen proportional nach unten auf dem Scrollbalken-Schieber bewegt wird, bis der untere Rand des Inhalts und des Scrollbalkens erreicht sind.

## Beispiele

Das Folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für ein übergeordnetes Container ist.

```html
<span id="pi-label">Pi</div>
<div id="pi">
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</div>
<div
  role="scrollbar"
  aria-labelledby="pi-label"
  aria-controls="pi"
  aria-orientation="horizontal"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100">
  <div id="thumb"></div>
</div>
```

Wenn die ARIA-Rollen anstelle nativer UI-Funktionen verwendet werden, muss CSS verwendet werden, um die Scrollleiste und den Daumen zu gestalten, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigegeräte-Ereignisse zu verarbeiten.

CSS hätte verwendet werden können, um sicherzustellen, dass der überlaufende Wert von PI eine native Scrollleiste hatte:

```html
<h3 id="PI">Pi</h3>
<p class="pi" tabindex="0" aria-labelledby="PI">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</p>
```

```css
.pi {
  overflow: auto;
  max-width: 100%;
}
```

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Viewport des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als der Kasten, der den Absatz enthält. Das `tabindex`-Attribut wurde hinzugefügt, um es Menschen mit einer Tastatur zu ermöglichen, zu navigieren und den überlaufenen Inhalt zu scrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML-{{HTMLElement('progress')}}-Element
- HTML-{{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [Dokument `scroll` Ereignis](/de/docs/Web/API/Document/scroll_event)
