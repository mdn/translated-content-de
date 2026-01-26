---
title: "ARIA: scrollbar Rolle"
short-title: scrollbar
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Ansichtsbereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist; egal ob der Viewport die vollständige Browsergröße, ein `iframe` oder ein beliebiges Element des [Blockformatierungskontextes](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) ist.

### Was ist eine Scrollleiste?

Viele Anwendungen bieten native Scrollleisten an, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen im Allgemeinen auf der rechten oder unteren Seite des Ansichtsbereichs. Native Scrollleisten erscheinen als dünne rechteckige Bahnflächen in der Länge des von ihnen kontrollierten Viewports mit einem Stück Benutzeroberfläche, das als Daumen oder Schieber bezeichnet wird und entlang einer Bahn gezogen werden kann, um den zugehörigen Inhalt innerhalb des Viewports zu bewegen. Einige Scrollleisten haben Pfeile an jedem Ende der Bahn, die es ermöglichen, den Viewport um eine kurze Distanz zu scrollen, wenn sie aktiviert werden.

Nehmen wir dieses Dokument als Beispiel: Wenn der Viewport das vollständige Browserfenster ist und der Inhalt größer ist als der Viewport, repräsentiert in den meisten Browsern die Scrollleiste am rechten Rand des Fensters die gesamte Länge der Seite und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der sich gerade im Viewport befindet.

Scrollleisten können auch auf Viewports erscheinen, die Unterabschnitte des vollständigen Browserfensters sind. Wenn dieser Inhalt beispielsweise in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, ist die native vertikale Scrollleiste so hoch wie der Rahmen. Eine Scrollleiste ist im Allgemeinen so lang wie der Viewport, muss es aber nicht unbedingt sein.

Wenn Sie derzeit keine Scrollleiste sehen, kann das daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in den Block-Formatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten sichtbar gemacht werden, selbst wenn der Inhalt im Viewport passt und kein Scrollen erforderlich oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen nativer Scrollleisten sicherzustellen. Eine [CSS-Scrollleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird derzeit entwickelt. Einige Browser erlauben das [Styling von Scrollleisten über präfixierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar).

Da das Styling nativer Scrollleisten historisch begrenzt war, könnten Sie auf eine in JavaScript implementierte Scrollleiste stoßen, die Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die `scrollbar`-Rolle verwenden, um unterstützende Technologien darüber zu informieren, dass ein UI-Steuerelement eine interaktive Scrollleiste ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Ansichtsbereichs steuert; es ist die ARIA-Rolle, die angibt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das dem am ähnlichsten ist, ist der `range` {{HTMLElement('input')}} Typ, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des von ihm gesteuerten scrollbaren Bereichs. Die `aria-valuenow`-Eigenschaft definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur für die Rolle der Scrollleiste festgelegt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den minimalen und maximalen Werten einschließlich liegen, oder zwischen `0` und `100`, wenn die minimalen und maximalen Werte standardmäßig `0` und `100` sind. `aria-valuenow` kommuniziert, wie nah der Viewport am unteren Ende des Dokuments ist. Denken Sie daran wie an einen Fortschrittsbalken, bei dem der Anfang des Dokuments der Mindestwert und das Ende des Dokuments der Höchstwert ist.

Ein `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte durch die Größe der Scrollleiste und die Position des Daumens im Hinblick auf den sichtbaren Bereich der Orientierung (horizontal oder vertikal), die er steuert. Mit anderen Worten, die `scrollbar`-Länge (Höhe oder Breite) repräsentiert alle Inhalte innerhalb eines Viewports. Der `aria-valuemin`-Wert repräsentiert den Beginn des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` angezeigt, berechnet durch unterstützende Technologien.

> [!NOTE]
> Unterstützende Technologien geben im Allgemeinen den Wert von `aria-valuenow` als Prozentsatz eines Bereichs zwischen den Werten von `aria-valuemin` und `aria-valuemax` wieder, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist festgelegt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so einzurichten, dass sie für diese Berechnung geeignet sind.

Wie bei einer nativen Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen unter Verwendung von Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der Rolle `scrollbar` müssen auch alle diese Interaktionsmethoden unterstützen.

Bei der Verwendung der Maus muss der Benutzer in der Lage sein, die `scrollbar` durch Klicken auf die Scroll-Pfeile an jedem Ende der Scrollleiste, falls vorhanden, durch Klicken auf einen leeren Teil der Scrollbahn sowie durch Klicken und Ziehen des Scroll-Daumens zu aktivieren.

Die Tastaturnavigation muss ebenfalls unterstützt werden. Wenn sich der Fokus innerhalb des von einer `scrollbar` kontrollierten Viewports befindet, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scrollbalken-Daumen proportional verschieben. Darüber hinaus müssen die Tasten <kbd>Bild auf</kbd>, <kbd>Bild ab</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports bei jedem Tastendruck verschieben, bis der untere oder obere (oder linke oder rechte) Rand des Inhalts sichtbar wird.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Feedback zu geben durch:

1. Visuelles Aktualisieren des `scrollbar`-Elements,
2. Scrollen des Inhalts des Viewports und
3. Aktualisieren des Wertes der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Eigenschaft.

Die Standardausrichtung der Rolle `scrollbar` ist vertikal. Das Einfügen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung repräsentiert die Ausrichtung der Scrollleiste und den Bildlaufeffekt auf den durch die Scrollleiste kontrollierten Ansichtsbereich. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, verwenden Sie `aria-orientation="horizontal"` auf dem Element mit der Rolle `scrollbar`.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von der zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Etikett vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Etikett vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einer `scrollbar` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines jeden `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive des Benutzers mit unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport über die `id`, deren Inhalte durch die Scrollleiste gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin` gesetzt, wenn vorhanden, und `aria-valuemax` eingestellt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien geben den Wert von `aria-valuenow` oft als Prozentsatz wieder. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Scrollleistenwert den Benutzern verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert repräsentiert und geringer als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Maximalwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein nativer Formularsteuerelement verwendet wird und deshalb die Scrollleiste nicht mit einem {{HTMLElement('label')}} verbunden werden kann, wenn sichtbarer Text vorhanden ist, der den erforderlichen zugänglichen Namen liefern kann, auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements gesetzt, das Text enthält, der als Etikett dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{HTMLElement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, liefert den Zeichenfolgenwert, der das `scrollbar`-Element beschriftet und den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Orientierung `vertical`. Die Eigenschaft kann hinzugefügt und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` eingestellt werden.

### Tastatur-Interaktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach oben bewegt, bis der obere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach unten bewegt, bis der untere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach links bewegt, bis der linke Rand des Inhalts den linken Rand des Viewport anstößt und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach rechts bewegt, bis der rechte Rand des Inhalts den rechten Rand des Viewport anstößt und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild auf</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach oben bewegt, bis der obere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Bild ab</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei der Daumen proportional die Scrollbalken-Schiebevorrichtung nach unten bewegt, bis der untere Rand des Inhalts und der Scrollleiste erreicht sind.

## Beispiele

Das folgende Beispiel zeigt ein Wort, das wahrscheinlich zu lang für ein Elternelement ist.

```html
<div id="pi-label">Pi</div>
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

Wenn die ARIA-Rollen anstelle nativer UI-Funktionen verwendet werden, muss CSS verwendet werden, um die Scrollleiste und den Daumen zu gestalten, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigereignisse zu verarbeiten.

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

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Viewport des Absatzes interagiert, wenn die Länge des längsten Wortes im Absatz breiter ist als das umschließende Rechteck des Absatzes. Das Attribut `tabindex` wurde hinzugefügt, damit Personen, die eine Tastatur verwenden, zu dem überlaufenen Inhalt navigieren und darin scrollen können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Document `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
