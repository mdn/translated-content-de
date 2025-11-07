---
title: "ARIA: scrollbar Rolle"
short-title: scrollbar
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil der Inhalte eines Ansichtsfensters aktuell im Rahmen des Ansichtsfensters sichtbar ist; sei es das gesamte Browserfenster, ein `iframe` oder ein beliebiges Element im [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

### Was ist eine Scrollleiste

Viele Anwendungen bieten native Scrollleisten an, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen normalerweise rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Bereiche mit einer Länge entsprechend des von ihnen gesteuerten Ansichtsfensters, mit einem UI-Element namens Daumen oder Schieber, das entlang eines Tracks gezogen werden kann, um den zugehörigen Inhalt im Ansichtsfenster zu bewegen. Einige Scrollleisten haben Pfeile an jedem Ende des Tracks, die, wenn sie aktiviert werden, das Ansichtsfenster um eine kleine Entfernung scrollen.

Nehmen Sie dieses Dokument als Beispiel: Wenn das Ansichtsfenster das volle Browserfenster ist und der Inhalt höher als das Ansichtsfenster ist, stellt in den meisten Browsern die Scrollleiste am rechten Rand des Fensters die Gesamtlänge der Seite dar und der Scroll-Daumen repräsentiert den Teil der Seiteninhalte, der aktuell im Ansichtsfenster ist.

Scrollleisten können auch in Anzeigebereichen auftauchen, die Unterabschnitte des gesamten Browserfensters sind. Bleiben wir bei diesem Inhalt als unser Beispiel: Wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollleiste die Höhe des Frames haben. Eine Scrollleiste ist im Allgemeinen so lang wie das Ansichtsfenster, muss es aber nicht sein.

Wenn Sie derzeit keine Scrollleiste sehen, kann dies daran liegen, dass Ihr Browser die Scrollleiste nur anzeigt, wenn gescrollt wird, oder nur wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten auch sichtbar gemacht werden, selbst wenn der Inhalt in das Ansichtsfenster passt und kein Scrollen notwendig oder möglich ist.

### ARIA `scrollbar`

Es ist stets am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} nutzen, um das Erscheinen nativer Scrollleisten sicherzustellen. Eine [CSS-Scrollleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird derzeit entwickelt. Einige Browser erlauben das [Stylen von Scrollleisten durch präfixierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar).

Da das Styling nativer Scrollleisten historisch begrenzt war, könnten Sie auf eine in JavaScript implementierte Scrollleiste stoßen, die Sie unterstützen und vollständig zugänglich machen müssen. Dazu können Sie die `scrollbar`-Rolle verwenden, um unterstützende Technologien darüber zu informieren, dass ein UI-Steuerelement eine interaktive Scrollleiste ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollleiste ist. Das am ähnlichsten HTML-Element ist der `range`-{{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das Attribut `aria-controls` referenziert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des gesteuerten scrollbaren Bereichs. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur dann für die `scrollbar`-Rolle gesetzt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den minimalen und maximalen einschließenden Werten liegen oder zwischen `0` und `100` liegen, wenn die Minimal- und Maximalwerte standardmäßig `0` und `100` sind. `aria-valuenow` gibt an, wie nah das Ansichtsfenster am Ende des Dokuments ist. Es ist wie ein Fortschrittsbalken, bei dem der Anfang des Dokuments den Mindestwert darstellt und das Ende des Dokuments den Höchstwert.

Eine `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte über die Größe der Scrollleiste und die Position des Daumens in Bezug auf den sichtbaren Bereich der Orientation (horizontal oder vertikal), die sie steuert. Mit anderen Worten, die Länge der `scrollbar` (Höhe oder Breite) repräsentiert alle Inhalte innerhalb eines Ansichtsfensters. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den Inhalt, der aktuell im Ansichtsfenster sichtbar ist, und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentwert zwischen `aria-valuemin` und `aria-valuemax`, berechnet durch unterstützende Technologien, dargestellt.

> [!NOTE]
> Unterstützende Technologien geben den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax` wieder, es sei denn, `aria-valuetext` ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so festzulegen, dass sie für diese Berechnung geeignet sind.

Wie bei einer nativen Scrollleiste können Benutzer mit `scrollbar`-Elementen direkt oder indirekt über Maus, Touchpad, Tastatur und Spracheingabe interagieren. Implementierungen der `scrollbar`-Rolle müssen auch alle diese Interaktionsmethoden unterstützen.

Bei der Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er auf die Rollpfeile an jedem Ende der Scrollleiste (falls vorhanden), auf einen leeren Bereich des Scroll-Tracks und durch Klicken und Ziehen des Scroll-Daumens klickt.

Das Scrollen mit der Tastatur muss ebenfalls unterstützt werden. Wenn der Fokus im von einer `scrollbar` gesteuerten Ansichtsfenster liegt, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scroll-Daumen proportional bewegen. Darüber hinaus müssen die Tasten <kbd>Bild nach oben</kbd>, <kbd>Bild nach unten</kbd>, <kbd>Leertaste</kbd> und <kbd>Shift + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Ansichtsfensters für jeden Tastendruck bewegen, bis das untere oder obere Ende (oder das linke oder rechte Ende) des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Rückmeldungen zu geben, indem:

1. Das `scrollbar`-Element visuell aktualisiert wird,
2. Der Inhalt des Ansichtsfensters gescrollt wird, und
3. Der Wert der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Eigenschaft aktualisiert wird.

Die Standardorientierung der `scrollbar`-Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung repräsentiert die Ausrichtung der Scrollleiste und den Scroll-Effekt auf den vom Scrollbalken gesteuerten Anzeigebereich. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` auf dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsent

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einer `scrollbar` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `scrollbar`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie folgendes `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsent sind, ist der folgende Code gleichwertig:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive des Benutzers einer unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert das Ansichtsfenster, über die `id`, deren Inhalte durch die Scrollleiste gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0` oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Scrollleistenwert für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn Sie kein natives Form-Steuerelement verwenden und die Scrollleiste daher nicht mit einem {{HTMLElement('label')}} assoziieren können, setzen Sie, falls verfügbar, sichtbarer Text, der den erforderlichen zugänglichen Namen bereitstellen kann, auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements, das als Label dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der von `aria-labelledby` referenziert werden kann, liefert den String-Wert, der das `scrollbar`-Element etikettiert und den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertikal`. Die Eigenschaft kann hinzugefügt und auf `horizontal`, `undefined` (der Standardwert für alle Rollen, sofern nicht anders spezifiziert) oder `vertikal` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um eine Zeile nach oben, wobei sich der Daumen proportional nach oben auf der Scrollleistenrutsche bewegt, bis das obere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um eine Zeile nach unten, wobei sich der Daumen proportional nach unten auf der Scrollleistenrutsche bewegt, bis das untere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Ansichtsfenster um die Breite eines Zeichens nach links, während sich der Daumen proportional nach links über die Scrollleistenrutsche bewegt, bis der linke Rand des Inhalts an den linken Rand des Ansichtsfensters stößt und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Beim horizontalen Scrollen bewegt sich der Inhalt im Ansichtsfenster um die Breite eines Zeichens nach rechts, während sich der Daumen proportional nach rechts über die Scrollleistenrutsche bewegt, bis der rechte Rand des Inhalts an den rechten Rand des Ansichtsfensters stößt und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild nach oben</kbd> und <kbd>Shift + Leertaste</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um die Höhe eines Ansichtsfensters nach oben, wobei sich der Daumen proportional nach oben auf der Scrollleistenrutsche bewegt, bis das obere Ende des Inhalts und der Scrollleiste erreicht ist.
- <kbd>Bild nach unten</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Ansichtsfenster bewegt sich um die Höhe eines Ansichtsfensters nach unten, wobei sich der Daumen proportional nach unten auf der Scrollleistenrutsche bewegt, bis das untere Ende des Inhalts und der Scrollleiste erreicht ist.

## Beispiele

Das folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für einen übergeordneten Container ist.

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

Beim Verwenden der ARIA-Rollen anstelle nativer UI-Funktionen müssen CSS eingesetzt werden, um die Scrollleiste und den Daumen zu stylen, und JavaScript, um alle Tastatur- und Zeigereignisse zu handhaben.

CSS hätte verwendet werden können, um sicherzustellen, dass der überlaufende Wert von PI eine native Scrollleiste hat:

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

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Ansichtsfenster eines Absatzes interagiert, wenn die Länge des längsten Wortes im Absatz breiter ist als das enthaltende Element des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um es Menschen, die eine Tastatur verwenden, zu ermöglichen, zu navigieren und den überfließenden Inhalt zu scrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}} Element
- HTML {{HTMLElement('meter')}} Element
- Andere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Dokument `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
