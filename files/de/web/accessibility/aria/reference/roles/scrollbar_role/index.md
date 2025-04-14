---
title: "ARIA: scrollbar-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Ansichtsfensters derzeit im Rahmen des Ansichtsfensters sichtbar ist; unabhängig davon, ob das Ansichtsfenster die volle Browsergröße hat, ein iframe oder ein beliebiges Element im [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) ist.

### Was ist eine Scrollleiste?

Viele Anwendungen bieten native Scrollleisten, wenn der Inhaltsbereich größer als das Anwendungsfenster ist. Scrollleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Bereichsmarkierungen in der Länge des von ihnen gesteuerten Ansichtsfensters mit einem UI-Element namens Daumen oder Scroller, das entlang einer Spur gezogen werden kann, um den zugehörigen Inhalt innerhalb des Ansichtsfensters zu bewegen. Einige Scrollleisten haben Pfeile an jedem Ende der Spur, die das Scrollen des Ansichtsfensters um eine kurze Distanz ermöglichen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn das Ansichtsfenster das vollständige Browserfenster ist und der Inhalt höher ist als das Ansichtsfenster, repräsentiert die Scrollleiste am rechten Rand des Fensters in den meisten Browsern die Gesamtlänge der Seite und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Ansichtsfenster ist.

Scrollleisten können auch in Ansichtsfenstern erscheinen, die Unterabschnitte des gesamten Browserfensters sind. Setzen wir dieses Dokument als Beispiel fort: Wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder einem {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollleiste die Höhe des Rahmens haben. Eine Scrollleiste hat in der Regel die Länge des Ansichtsfensters, muss dies jedoch nicht zwingend haben.

Wenn Sie derzeit keine Scrollleiste sehen, könnte das daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in dessen Block-Formatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten sichtbar gemacht werden, selbst wenn der Inhalt in das Ansichtsfenster passt und kein Scrollen notwendig oder möglich ist.

### ARIA-`scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen von nativen Scrollleisten sicherzustellen. Eine [CSS-Spezifikation für Scrollleisten](https://drafts.csswg.org/css-scrollbars/) wird entwickelt. Einige Browser erlauben [die Gestaltung von Scrollleisten über prefixierte Pseudoelemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da die Gestaltung von nativen Scrollleisten historisch begrenzt war, könnte Ihnen eine in JavaScript implementierte Scrollleiste begegnen, die Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die Rolle `scrollbar` verwenden, um Hilfstechnologien mitzuteilen, dass ein UI-Element eine interaktive Scrollleiste ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das am ähnlichsten ist, ist der `range` {{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des gesteuerten, scrollbaren Bereichs. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur für die Rolle der Scrollleiste gesetzt werden, wenn der minimale Wert der `scrollbar` nicht 0 oder der maximale Wert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen dem minimalen und maximalen Wert liegen, oder zwischen `0` und `100`, wenn die minimalen und maximalen Werte standardmäßig `0` und `100` sind. `aria-valuenow` kommuniziert, wie nah das Ansichtsfenster am unteren Ende des Dokuments ist. Denken Sie daran wie an eine Fortschrittsanzeige, bei der der Anfang des Dokuments der minimale Wert ist und das Ende des Dokuments der maximale Wert.

Eine `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte über die Größe der Scrollleiste und die Position des Daumens im Hinblick auf den sichtbaren Bereich der Orientierung (horizontal oder vertikal), die sie steuert. Mit anderen Worten: Die Länge (Höhe oder Breite) der `scrollbar` repräsentiert den gesamten Inhalt innerhalb eines Ansichtsfensters. Der Wert `aria-valuemin` repräsentiert den Anfang des Inhalts und der Scrollleiste, der Wert `aria-valuemax` repräsentiert das Ende des Inhalts und der Scrollleiste. Der Wert `aria-valuenow` repräsentiert den Inhalt, der derzeit im Ansichtsfenster sichtbar ist und die aktuelle Position oder den Wert des beweglichen Daumens. Der Wert `aria-valuenow` wird in der Regel als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` angegeben, berechnet von Hilfstechnologien.

> [!NOTE]
> Hilfstechnologien stellen den Wert von `aria-valuenow` normalerweise als Prozentsatz eines Bereichs zwischen den Werten von `aria-valuemin` und `aria-valuemax` dar, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so zu setzen, dass sie für diese Berechnung geeignet sind.

Wie bei einer nativen Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen über Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der Rolle `scrollbar` müssen all diese Interaktionsmethoden unterstützen.

Wenn Sie eine Maus verwenden, muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er auf die Bildlauffelder an beiden Enden der Scrollleiste klickt, falls vorhanden, auf einen leeren Teil der Spur klickt sowie den Scroll-Daumen klickt und zieht.

Die Tastaturnavigation muss ebenfalls unterstützt werden. Wenn sich der Fokus innerhalb des durch eine `scrollbar` gesteuerten Ansichtsfensters befindet, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scrollleiste-Daumen proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild auf</kbd>, <kbd>Bild ab</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scrollleiste-Daumen um die Höhe (oder Breite) des Ansichtsfensters für jeden Tastendruck verschieben, bis das Ende oder der Anfang (oder links oder rechts) des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die Aktion der `scrollbar` in Scroll-Befehle zu übersetzen, und Sie sollten dem Benutzer Feedback geben, indem Sie:

1. Das `scrollbar`-Element visuell aktualisieren,
2. Den Inhalt des Ansichtsfensters verschieben und
3. Den Wert der Eigenschaft [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) aktualisieren.

Die Standardausrichtung der `scrollbar`-Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung repräsentiert die Ausrichtung der Scrollleiste und den Scrolling-Effekt auf den Anzeigebereich, der durch die Scrollbar gesteuert wird. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML {{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Beschriftung vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Beschriftung vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente, die in einer `scrollbar` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive des Benutzers von assistiven Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Zugangsbaum")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert das Ansichtsfenster über die `id`, dessen Inhalt durch die Scrollbar gesteuert wird.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Wird auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt und zeigt den aktuellen Wert der Scrollbar an.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Hilfstechnologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Scrollleistenwert für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt, und ist kleiner als `aria-valuemax`. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt, und ist größer als `aria-valuemin`. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein nativer Form-Kontroll verwendet wird und daher keine Möglichkeit besteht, die Scrollbar mit einem {{HTMLElement('label')}} zu assoziieren, falls sichtbarer Text vorhanden ist, der den erforderlichen zugänglichen Namen bereitstellen kann, setzen Sie ihn auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements, das als Beschriftung dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der mit `aria-labelledby` referenziert werden kann, liefert das String-Wert, das das `scrollbar`-Element etikettiert, den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertical`. Die Eigenschaft kann hinzugefügt und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastatur-Interaktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um eine Zeile nach oben, und der Daumen bewegt sich proportional nach oben entlang der Scrollleistenführung, bis das obere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um eine Zeile nach unten, und der Daumen bewegt sich proportional nach unten entlang der Scrollleistenführung, bis das untere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Ansichtsfenster um die Breite eines Zeichens nach links, und der Daumen bewegt sich proportional nach links entlang der Scrollleistenführung, bis der linke Rand des Inhalts an das linke Ende des Ansichtsfensters stößt und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Ansichtsfenster um die Breite eines Zeichens nach rechts, und der Daumen bewegt sich proportional nach rechts entlang der Scrollleistenführung, bis der rechte Rand des Inhalts an das rechte Ende des Ansichtsfensters stößt und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild auf</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um die Höhe eines Ansichtsfensters nach oben, und der Daumen bewegt sich proportional nach oben entlang der Scrollleistenführung, bis das obere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Bild ab</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um die Höhe eines Ansichtsfensters nach unten, und der Daumen bewegt sich proportional nach unten entlang der Scrollleistenführung, bis das untere Ende des Inhalts und der Scrollleiste erreicht ist. Das untere oder obere Ende des Inhalts ist sichtbar.

## Beispiele

Das Folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für einen übergeordneten Container ist.

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

Wenn Sie die ARIA-Rollen anstelle von nativen UI-Funktionen verwenden, muss CSS verwendet werden, um die Scrollleiste und den Daumen zu gestalten, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigereignisse zu verwalten.

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

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Ansichtsfenster des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als der enthaltene Kasten des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um Benutzern, die eine Tastatur verwenden, zu ermöglichen, den überfließenden Inhalt zu navigieren und darzustellen.

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
- [Dokument-`scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
