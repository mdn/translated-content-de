---
title: "ARIA: Rolle scrollbar"
short-title: scrollbar
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Eine `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Eine `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Ansichtsbereichs derzeit im Rahmen des Ansichtsbereichs sichtbar ist; unabhängig davon, ob der Ansichtsbereich die volle Browsergröße, ein `iframe` oder ein beliebiges Element im [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) ist.

### Was ist eine Scrollleiste?

Viele Anwendungen bieten native Scrollleisten, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Bahnflächen in der Länge des gesteuerten Ansichtsbereichs mit einem UI-Element, das als Daumen oder Schieber bezeichnet wird und entlang einer Bahn gezogen werden kann, um den zugehörigen Inhalt innerhalb des Ansichtsbereichs zu bewegen. Einige Scrollleisten haben Pfeile an jedem Ende der Bahn, die beim Aktivieren den Ansichtsbereich über eine kurze Distanz scrollen lassen.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Ansichtsbereich das gesamte Browserfenster ist und der Inhalt höher als der Ansichtsbereich ist, repräsentiert in den meisten Browsern die Scrollleiste am rechten Rand des Fensters die Gesamtlänge der Seite und der Bildlauf-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Ansichtsbereich ist.

Scrollleisten können auch in Ansichtsbereichen erscheinen, die Unterabschnitte des gesamten Browserfensters sind. In Fortführung dieses Inhalts als Beispiel, wenn dieser Inhalt in ein {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollleiste die Höhe des Rahmens haben. Eine Scrollleiste ist in der Regel die Länge des Ansichtsbereichs, muss es jedoch nicht zwingend sein.

Wenn Sie derzeit keine Scrollleiste sehen, kann dies daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen oder nur dann anzeigt, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. Abhängig von Browser und Betriebssystem können Scrollleisten so eingestellt werden, dass sie auch dann sichtbar sind, wenn der Inhalt in den Ansichtsbereich passt und kein Scrollen erforderlich oder gar möglich ist.

### ARIA-`scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinungsbild der nativen Scrollleisten sicherzustellen. Eine [CSS-Spezifikation für Scrollleisten](https://drafts.csswg.org/css-scrollbars/) wird entwickelt. Einige Browser erlauben das [Styling von Scrollleisten über vorangestellte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar).

Da das Styling nativer Scrollleisten historisch begrenzt war, stoßen Sie möglicherweise auf eine in JavaScript implementierte Scrollleiste, die Sie unterstützen und vollständig zugänglich machen müssen. Für diesen Zweck können Sie die Rolle `scrollbar` verwenden, um unterstützende Technologien darüber zu informieren, dass ein UI-Steuerelement eine interaktive Scrollleiste ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das dem am ähnlichsten ist, ist der `range`-{{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des steuerbaren Scrollbereichs. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur für die Rolle `scrollbar` gesetzt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Maximalwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den eingeschlossenen Mindest- und Maximalwerten liegen oder zwischen `0` und `100` eingeschlossen, wenn die Mindest- und Maximalwerte standardmäßig auf `0` und `100` gesetzt sind. `aria-valuenow` kommuniziert, wie nah der Ansichtsbereich dem Ende des Dokuments ist. Man kann es sich wie eine Fortschrittsleiste vorstellen, bei der der Anfang des Dokuments der Mindestwert und das Ende des Dokuments der Maximalwert ist.

Eine `scrollbar` stellt den aktuellen Wert und die Bandbreite der möglichen Werte durch die Größe der Scrollleiste und die Position des Daumens in Bezug auf den sichtbaren Bereich der gesteuerten Orientierung (horizontal oder vertikal) dar. Mit anderen Worten, die Länge der `scrollbar` (Höhe oder Breite) repräsentiert alle Inhalte innerhalb eines Ansichtsbereichs. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den derzeit im Ansichtsbereich sichtbaren Inhalt und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` durch unterstützende Technologien berechnet.

> [!NOTE]
> Unterstützende Technologien geben den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax` an, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` in einer Weise festzulegen, die für diese Berechnung geeignet ist.

Wie bei einer nativen Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen über Maus, Touchpad, Tastatur und Spracheingaben. Implementierungen der Rolle `scrollbar` müssen auch all diese Interaktionsmethoden unterstützen.

Wenn eine Maus verwendet wird, muss der Benutzer die `scrollbar` aktivieren können, indem er die Bildlaufpfeile an jedem Ende der Bildlaufleiste anklickt, wenn vorhanden, einen leeren Teil der Bildlaufspur anklickt sowie den Scroll-Daumen klickt und zieht.

Auch das Scrollen mit der Tastatur muss unterstützt werden. Wenn der Fokus innerhalb des vom `scrollbar` gesteuerten Ansichtsbereichs liegt, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scrollleisten-Daumen proportional bewegen. Darüber hinaus müssen die Tasten <kbd>Bild aufwärts</kbd>, <kbd>Bild abwärts</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scroll-Daumen der Höhe (oder Breite) des Ansichtsbereichs für jeden Tastendruck bewegen, bis der untere oder obere (oder linke oder rechte) Rand des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die Aktion der `scrollbar` in Scrollbefehle zu übersetzen und dem Benutzer Rückmeldungen zu geben durch:

1. Das visuelle Aktualisieren des `scrollbar`-Elements,
2. Das Scrollen des Inhalts des Ansichtsbereichs, und
3. Das Aktualisieren des `aria-valuenow`-Eigenschaftswerts.

Die Standardorientierung der Rolle `scrollbar` ist vertikal. Die Einbeziehung von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung stellt die Ausrichtung der Scrollleiste und den durch die Scrollleiste gesteuerten Scrolleffekt im Anzeigebereich dar. Wenn das Scrollen von links nach rechts oder von rechts nach links, und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` bei dem Element mit der Rolle `scrollbar` hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle `scrollbar` auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugangs-API dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente in einer `scrollbar` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines jeden `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen der `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codefragmente dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Ansichtsbereich über die `id`, dessen Inhalt von der Scrollleiste gesteuert wird.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Wird auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Wert der Scrollleiste für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein natives Formularsteuerungselement verwendet wird und daher die Scrollleiste nicht mit einem {{HTMLElement('label')}} verknüpft werden kann, setzen Sie, falls sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen bereitstellen kann, diesen auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements, das als Label dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, geben Sie den Zeichenfolgenwert an, der das `scrollbar`-Element benennt und den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Orientierung `vertical`. Die Eigenschaft kann enthalten und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Ansichtsbereich bewegt sich um eine Zeile nach oben, wobei der Daumen proportional nach oben über den Bildlaufleisten-Schieber bewegt wird, bis das obere Ende des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Ansichtsbereich bewegt sich um eine Zeile nach unten, wobei der Daumen proportional nach unten über den Bildlaufleisten-Schieber bewegt wird, bis das untere Ende des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Ansichtsbereich um die Breite eines Zeichens nach links, wobei der Daumen proportional nach links über den Bildlaufleisten-Schieber bewegt wird, bis die linke Kante des Inhalts auf das linke Ende des Ansichtsbereichs trifft und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Ansichtsbereich um die Breite eines Zeichens nach rechts, wobei der Daumen proportional nach rechts über den Bildlaufleisten-Schieber bewegt wird, bis die rechte Kante des Inhalts auf das rechte Ende des Ansichtsbereichs trifft und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild aufwärts</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Ansichtsbereich bewegt sich nach oben um die Höhe eines Ansichtsbereichs, wobei der Daumen proportional nach oben über den Bildlaufleisten-Schieber bewegt wird, bis das obere Ende des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Bild abwärts</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Ansichtsbereich bewegt sich nach unten um die Höhe eines Ansichtsbereichs, wobei der Daumen proportional nach unten über den Bildlaufleisten-Schieber bewegt wird, bis das untere Ende des Inhalts und der Bildlaufleiste erreicht ist.

## Beispiele

Das folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für ein übergeordnetes Container-Element ist.

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

Wenn anstelle von nativen UI-Funktionen ARIA-Rollen verwendet werden, muss CSS verwendet werden, um die Scrollleiste und den Daumen zu gestalten, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigerereignisse zu behandeln.

CSS könnte verwendet werden, um sicherzustellen, dass der überlaufende Wert von PI eine native Scrollleiste hat:

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

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Ansichtsbereich des Absatzes interagiert, wenn die Länge des längsten Wortes im Absatz breiter als das umgebende Box des Absatzes ist. Das Attribut `tabindex` wurde hinzugefügt, um es Menschen, die eine Tastatur benutzen, zu ermöglichen, zum überfüllten Inhalt zu navigieren und ihn zu scrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (falls fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Scroll-Ereignis des Dokuments](/de/docs/Web/API/Document/scroll_event)
