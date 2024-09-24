---
title: "ARIA: scrollbar-Rolle"
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil eines Inhalts in einem Viewport aktuell im Rahmen des Viewports sichtbar ist; unabhängig davon, ob der Viewport die volle Browsergröße, ein Iframe oder ein Element im [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) ist.

### Was ist ein Scrollbalken

Viele Anwendungen bieten native Scrollbalken, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollbalken erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollbalken erscheinen als schmale rechteckige Bahnen in der Länge des zu steuernden Viewports mit einem UI-Stück, das als Daumen oder Scroller bezeichnet wird und entlang einer Bahn gezogen werden kann, um den zugehörigen Inhalt innerhalb des Viewports zu bewegen. Einige Scrollbalken haben an jedem Ende der Bahn Pfeile, die es ermöglichen, den Viewport um eine kurze Distanz zu scrollen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das gesamte Browserfenster ist und der Inhalt höher als der Viewport ist, repräsentiert der Scrollbalken am rechten Rand des Fensters in den meisten Browsern die gesamte Länge der Seite und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Viewport ist.

Scrollbalken können auch in Viewports erscheinen, die Teilabschnitte des gesamten Browserfensters sind. In Bezug auf diesen Inhalt als unser Beispiel, wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird der native vertikale Scrollbalken die Höhe des Rahmens haben. Ein Scrollbalken hat im Allgemeinen die Länge des Viewports, muss dies aber nicht sein.

Wenn Sie derzeit keinen Scrollbalken sehen, kann es daran liegen, dass Ihr Browser den Scrollbalken nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in seinen Block-Formatierungskontext zu passen. Je nach Browser und Betriebssystem können Scrollbalken so eingestellt werden, dass sie auch dann sichtbar sind, wenn der Inhalt im Viewport passt und kein Scrollen erforderlich oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollbalken zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen nativer Scrollbalken sicherzustellen. Eine [CSS-Scrollbar-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird derzeit entwickelt. Einige Browser ermöglichen das [Styling von Scrollbalken über prefixed pseudo-elements](/de/docs/Web/CSS/::-webkit-scrollbar).

Da das Styling nativer Scrollbalken historisch begrenzt war, könnte Ihnen ein in JavaScript implementierter Scrollbalken begegnen, den Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die Rolle `scrollbar` verwenden, um assistive Technologien darauf hinzuweisen, dass ein UI-Element ein interaktiver Scrollbalken ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element ein Scrollbalken ist. Das HTML-Element, das diesem am ähnlichsten ist, ist das `range` {{HTMLElement('input')}}-Element, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). Das Attribut `aria-controls` verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des steuerbaren Bereichs. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert des Scrollbalkens.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) nur dann für die Rolle `scrollbar` festgelegt werden, wenn der Mindestwert des Scrollbalkens nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den minimalen und maximalen Einschlusswerten liegen, oder zwischen `0` und `100`, wenn die minimalen und maximalen Werte standardmäßig `0` und `100` sind. `aria-valuenow` kommuniziert, wie nahe der Viewport am Ende des Dokuments ist. Es ist vergleichbar mit einem Fortschrittsbalken, bei dem der Beginn des Dokuments den Mindestwert und das Ende des Dokuments den Höchstwert darstellt.

Ein `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte durch die Größe des Scrollbalkens und die Position des Daumens in Bezug auf den sichtbaren Bereich der Orientierung (horizontal oder vertikal), die er steuert. Mit anderen Worten, die Länge des `scrollbar` (Höhe oder Breite) repräsentiert alle Inhalte innerhalb eines Viewports. Der `aria-valuemin`-Wert steht für den Beginn des Inhalts und des Scrollbalkens, der `aria-valuemax`-Wert steht für das Ende des Inhalts und das Ende des Scrollbalkens. Der `aria-valuenow`-Wert repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` berechnet und wird von unterstützenden Technologien bereitgestellt.

> [!NOTE]
> Unterstützende Technologien rendern im Allgemeinen den Wert von `aria-valuenow` als Prozentsatz eines Bereichs zwischen den Werten von `aria-valuemin` und `aria-valuemax`, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` auf eine Weise festzulegen, die für diese Berechnung sinnvoll ist.

Wie ein nativer Scrollbalken interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen mittels Maus, Touchpad, Tastatur und Stimmeingabe. Implementierungen der `scrollbar`-Rolle müssen alle diese Interaktionsmethoden berücksichtigen.

Beim Gebrauch einer Maus muss der Benutzer in der Lage sein, den `scrollbar` durch Klicken auf die Scrollpfeile an jedem Ende des Scrollbalkens zu aktivieren, falls vorhanden, durch Klicken auf einen leeren Teil der Scrollbahn sowie durch Klicken und Ziehen des Scroll-Daumens.

Tastaturscrollen muss ebenfalls unterstützt werden. Wenn der Fokus auf den vom `scrollbar` gesteuerten Viewport gerichtet ist, sollten die Tasten <kbd>Nach oben</kbd> und <kbd>Nach unten</kbd> (oder <kbd>Nach links</kbd> und <kbd>Nach rechts</kbd> für einen horizontalen Scrollbalken) den Scroll-Daumen proportional bewegen. Außerdem müssen die Tasten <kbd>Bild nach oben</kbd>, <kbd>Bild nach unten</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports für jeden Tastendruck verschieben, bis das Ende oder der Beginn (oder die linke oder rechte Seite) des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die Aktion des `scrollbar` in Scrollbefehle zu übersetzen, indem dem Benutzer Rückmeldungen gegeben werden durch:

1. Visuelles Aktualisieren des `scrollbar`-Elements,
2. Scrollen des Inhalts im Viewport, und
3. Aktualisieren des Wertes der Eigenschaft [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow).

Die Standardausrichtung der `scrollbar`-Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) ist in diesem Fall optional. Die Ausrichtung repräsentiert die Ausrichtung des Scrollbalkens und die Scrollwirkung auf den Anzeigebereich, der vom Scrollbalken kontrolliert wird. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` auf dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML {{HTMLElement('input')}} Element angewendet wird (oder ein `<meter>` oder `<progress>` Element), kann der zugängliche Name von der zugehörigen {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `scrollbar` darzustellen. Um mit dieser Beschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `scrollbar`-Elements an, da es sich um eine Rolle handelt, die semantische Kinder nicht unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Barrierefreiheits-Baum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugeordnete WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert, über die `id`, den Viewport, dessen Inhalt vom Scrollbalken gesteuert wird.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Erforderlich)
  - : Wird auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert des Scrollbalkens angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren den Wert von `aria-valuenow` häufig als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Wert des Scrollbalkens für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Wenn kein natives Formularelement verwendet wird und daher keine Verknüpfung des Scrollbalkens mit einem {{HTMLElement('label')}} möglich ist, wenn sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen liefern kann, auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines Elements einstellen, das Text enthält, der als Label dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Falls kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der über `aria-labelledby` referenziert werden kann, liefert den Zeichenfolgenwert, der das `scrollbar`-Element mit dem erforderlichen zugänglichen Namen beschriftet.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertical`. Die Eigenschaft kann eingeschlossen und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei sich der Daumen proportional nach oben auf dem Scrollbalkenschieber bewegt, bis der obere Rand des Inhalts und des Scrollbalkens erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei sich der Daumen proportional nach unten auf dem Scrollbalkenschieber bewegt, bis der untere Rand des Inhalts und des Scrollbalkens erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei sich der Daumen proportional nach links über den Scrollbalkenschieber bewegt, bis die linke Kante des Inhalts an das linke Ende des Viewports anstößt und der Daumen am linken Ende des Scrollbalkens ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei sich der Daumen proportional nach rechts über den Scrollbalkenschieber bewegt, bis die rechte Kante des Inhalts an das rechte Ende des Viewports anstößt und der Daumen am rechten Ende des Scrollbalkens ausgerichtet ist.
- <kbd>Bild nach oben</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei sich der Daumen proportional nach oben auf dem Scrollbalkenschieber bewegt, bis der obere Rand des Inhalts und des Scrollbalkens erreicht ist.
- <kbd>Bild nach unten</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei sich der Daumen proportional nach unten auf dem Scrollbalkenschieber bewegt, bis der untere Rand des Inhalts und des Scrollbalkens erreicht ist und das Ende oder der Beginn des Inhalts sichtbar ist.

## Beispiele

Das Folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für einen übergeordneten Container ist.

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

Beim Einsatz der ARIA-Rollen anstelle nativer UI-Features muss CSS verwendet werden, um den Scrollbalken und den Daumen zu gestalten, und JavaScript, um alle Tastatur- und Zeigereignisse zu behandeln.

CSS hätte verwendet werden können, um sicherzustellen, dass der überlaufende Wert von PI einen nativen Scrollbalken hatte:

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

Das obige CSS bedeutet, dass ein nativer Scrollbalken erscheint, wenn der Benutzer mit dem Viewport des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als das umschließende Feld des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um Personen, die eine Tastatur verwenden, zu ermöglichen, zum überfließenden Inhalt zu navigieren und ihn zu scrollen.

## Spezifikationen

{{Specifications}}

## Weitere Informationen

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} Element
- HTML {{HTMLElement('meter')}} Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [Dokument-`scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
