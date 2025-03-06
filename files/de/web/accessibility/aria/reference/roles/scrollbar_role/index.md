---
title: "ARIA: scrollbar-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist; ob der Viewport die volle Browser-Größe hat, ein iframe ist oder ein beliebiges Element im [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) vorliegt.

### Was ist eine Scrollleiste

Viele Anwendungen bieten native Scrollleisten an, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Schienenflächen in der Länge des Viewports, die sie steuern, mit einem UI-Element namens Daumen oder Schieber, das entlang einer Schiene gezogen werden kann, um den zugehörigen Inhalt innerhalb des Viewports zu verschieben. Einige Scrollleisten besitzen Pfeile an jedem Ende der Schiene, die das Scrollen des Viewports um eine kurze Strecke ermöglichen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das volle Browserfenster ist und der Inhalt höher als der Viewport ist, stellt die Scrollleiste am rechten Rand des Fensters in den meisten Browsern die Gesamtlänge der Seite dar, und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Viewport ist.

Scrollleisten können auch auf Viewports erscheinen, die Teilbereiche des gesamten Browserfensters sind. Wenn dieser Inhalt z.B. in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollleiste die Höhe des Rahmens haben. Eine Scrollleiste hat im Allgemeinen die Länge des Viewports, muss es aber nicht zwingend.

Wenn Sie derzeit keine Scrollleiste sehen, kann es daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in seinen Block-Formatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten auch sichtbar gemacht werden, wenn der Inhalt im Viewport passt und kein Scrollen notwendig oder sogar möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinungsbild nativer Scrollleisten sicherzustellen. Eine [CSS-Scrollleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird entwickelt. Einige Browser erlauben [das Stylen von Scrollleisten über präfixierte Pseudoelemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da das Styling von nativen Scrollleisten historisch begrenzt war, stoßen Sie möglicherweise auf eine Scrollleiste, die in JavaScript implementiert ist, die Sie unterstützen und vollständig zugänglich machen müssen. Dazu können Sie die `scrollbar`-Rolle verwenden, um Hilfstechnologien darüber zu informieren, dass ein UI-Steuerelement eine interaktive Scrollleiste ist.

Ein Element mit der `scrollbar`-Rolle ist ein Grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das dem am ähnlichsten ist, ist der `range` {{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das Attribut `aria-controls` referenziert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Steuerungsbereichs, den es steuert. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur dann für die Scrollleisten-Rolle gesetzt werden, wenn der Mindestwert des `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen dem Minimum und Maximum der eingeschlossenen Werte oder zwischen `0` und `100` eingeschlossen sein, wenn die Minimal- und Maximalwerte standardmäßig `0` und `100` sind. `aria-valuenow` kommuniziert, wie nah der Viewport am unteren Ende des Dokuments ist. Denken Sie daran wie an einen Fortschrittsbalken, bei dem der Beginn des Dokuments der Mindestwert ist und das Ende des Dokuments der Höchstwert.

Ein `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte durch die Größe der Scrollleiste und die Position des Daumens im Verhältnis zum sichtbaren Bereich der Orientierung (horizontal oder vertikal), die es steuert. Mit anderen Worten, die Länge (Höhe oder Breite) der `scrollbar` repräsentiert den gesamten Inhalt innerhalb eines Viewports. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist, und die aktuelle Position oder den aktuellen Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird normalerweise als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` von Hilfstechnologien berechnet.

> [!NOTE]
> Hilfstechnologien geben den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax` wieder, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` in einer Weise festzulegen, die für diese Berechnung geeignet ist.

Wie bei einer nativen Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen durch Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der `scrollbar`-Rolle müssen auch all diese Interaktionsmethoden unterstützen.

Bei der Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er auf die Scrollpfeile am Ende der Scrollleiste klickt (falls vorhanden), auf einen leeren Teil des Scrollschienenbereichs klickt oder den Scroll-Daumen anklickt und zieht.

Auch die Tastatur-Scrollfunktion muss unterstützt werden. Wenn der Fokus im vom `scrollbar` gesteuerten Viewport liegt, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scroll-Daumen proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild hoch</kbd>, <kbd>Bild runter</kbd>, <kbd>Leertaste</kbd> und <kbd>Shift + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports pro Tastendruck bewegen, bis der untere oder obere Rand (oder links oder rechts) des Inhalts im Blick ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktionen in Scrollbefehle zu übersetzen und dem Benutzer durch folgende Maßnahmen Rückmeldungen zu geben:

1. Visuelle Aktualisierung des `scrollbar`-Elements,
2. Scrollen des Inhalts des Viewports und
3. Aktualisierung des Wertes der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Eigenschaft.

Die Standardorientierung der `scrollbar`-Rolle ist vertikal. Das Hinzufügen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung repräsentiert die Ausrichtung der Scrollleiste und den Scroll-Effekt auf den vom Scrollbalken gesteuerten Anzeigebereich. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` zum Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentabel

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `scrollbar`-Elements darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentabel sind, ist der folgende Code gleichbedeutend:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Sicht eines Benutzers einer assistiven Technologie existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugriffstransparenz-Baum")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport über die `id`, dessen Inhalte von der Scrollleiste gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin` wenn vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Hilfstechnologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Wert der Scrollleiste für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein natives Formularsteuerungselement verwendet wird und die Scrollleiste daher nicht mit einem {{HTMLElement('label')}} verbunden werden kann, und sichtbarer Text verfügbar ist, der den nötigen zugänglichen Namen bereitstellen kann, wird es auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines Elements gesetzt, das Text als Label enthält. Andernfalls benutzen Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, stellt den String-Wert bereit, der das `scrollbar`-Element bezeichnet und den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Orientierung `vertical`. Die Eigenschaft kann hinzugefügt werden und auf `horizontal`, `undefiniert` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertikal` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei sich der Daumen proportional entlang der Scrollleisten-Schiene nach oben bewegt, bis der obere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei sich der Daumen proportional entlang der Scrollleisten-Schiene nach unten bewegt, bis der untere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei sich der Daumen proportional entlang der Scrollleiste nach links bewegt, bis der linke Rand des Inhalts an den linken Rand des Viewports stößt und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei sich der Daumen proportional entlang der Scrollleiste nach rechts bewegt, bis der rechte Rand des Inhalts an den rechten Rand des Viewports stößt und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild hoch</kbd> und <kbd>Shift + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei sich der Daumen proportional entlang der Scrollleisten-Schiene nach oben bewegt, bis der obere Rand des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Bild runter</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei sich der Daumen proportional entlang der Scrollleisten-Schiene nach unten bewegt, bis der untere Rand des Inhalts und der Scrollleiste erreicht sind.

## Beispiele

Das folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für einen übergeordneten Container ist.

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

Wenn ARIA-Rollen anstelle von nativen UI-Features verwendet werden, muss CSS verwendet werden, um die Scrollleiste und den Daumen zu stylen, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigerereignisse zu bearbeiten.

CSS könnte verwendet worden sein, um sicherzustellen, dass der überlaufende Wert von PI eine native Scrollleiste hatte:

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

Das obige CSS bedeutet, dass eine native Scrollleiste angezeigt wird, wenn der Benutzer mit dem Viewport des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als der umgebende Block des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um Personen, die eine Tastatur verwenden, zu ermöglichen, den überfließenden Inhalt zu navigieren und zu scrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Document `scroll` event](/de/docs/Web/API/Document/scroll_event)
