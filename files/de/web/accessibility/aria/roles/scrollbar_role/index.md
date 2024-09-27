---
title: "ARIA: scrollbar Rolle"
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `scrollbar` ist ein grafisches Objekt, das die Bildlaufsteuerung von Inhalten innerhalb eines Anzeigebereichs ermöglicht.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist, unabhängig davon, ob der Viewport die volle Browsergröße, ein iframe oder ein Element des [Blockformatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context) ist.

### Was ist ein Bildlaufleiste

Viele Anwendungen bieten native Bildlaufleisten an, wenn der Inhaltsbereich größer als das Anwendungsfenster ist. Bildlaufleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Bildlaufleisten erscheinen als dünne rechteckige Schienen der Länge des Viewports, den sie steuern, mit einem UI-Element namens Daumen oder Schieber, das entlang einer Schiene gezogen werden kann, um die zugehörigen Inhalte innerhalb des Viewports zu bewegen. Einige Bildlaufleisten haben Pfeile an jedem Ende der Schiene, mit denen der Viewport über eine kurze Distanz verschoben werden kann, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das volle Browserfenster ist und der Inhalt höher als der Viewport ist, repräsentiert in den meisten Browsern die Bildlaufleiste am rechten Rand des Fensters die Gesamtlänge der Seite und der Bildlaufdaumen den Teil des Seiteninhalts, der sich derzeit im Viewport befindet.

Bildlaufleisten können auch auf Viewports erscheinen, die Unterabschnitte des gesamten Browserfensters sind. Wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Bildlaufleiste die Höhe des Rahmens haben. Eine Bildlaufleiste hat in der Regel die Länge des Viewports, muss dies jedoch nicht unbedingt sein.

Wenn Sie derzeit keine Bildlaufleiste sehen, kann dies daran liegen, dass Ihr Browser die Bildlaufleiste nur beim Scrollen oder nur dann anzeigt, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Bildlaufleisten so eingestellt werden, dass sie sichtbar sind, selbst wenn der Inhalt in den Viewport passt und kein Scrollen notwendig oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Bildlaufleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen nativer Bildlaufleisten zu gewährleisten. Eine [CSS-Bildlaufleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird entwickelt. Einige Browser lassen [das Styling von Bildlaufleisten über vorangestellte Pseudoelemente](/de/docs/Web/CSS/::-webkit-scrollbar) zu.

Da das Styling nativer Bildlaufleisten historisch begrenzt war, könnten Sie auf eine in JavaScript implementierte Bildlaufleiste stoßen, die Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die `scrollbar`-Rolle verwenden, um assistive Technologien zu informieren, dass ein UI-Steuerelement eine interaktive Bildlaufleiste ist.

Ein Element mit der `scrollbar`-Rolle ist ein grafisches Objekt, das die Bildlaufsteuerung von Inhalten innerhalb eines Anzeigebereichs ermöglicht; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Bildlaufleiste ist. Das HTML-Element, das am ähnlichsten ist, ist der `range`-{{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des scrollbaren Bereichs, den es steuert. Die `aria-valuenow`-Eigenschaft definiert den aktuellen Wert der Bildlaufleiste.

Obwohl `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) nur für die `scrollbar`-Rolle festgelegt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den einschließlich minimalen und maximalen Werten liegen, oder zwischen `0` und `100` inklusive, wenn die minimalen und maximalen Werte standardmäßig auf `0` bzw. `100` gesetzt sind. `aria-valuenow` gibt an, wie nah der Viewport dem unteren Rand des Dokuments ist. Denken Sie daran wie an eine Fortschrittsanzeige, bei der der Anfang des Dokuments der Mindestwert und das Ende des Dokuments der Höchstwert ist.

Ein `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte durch die Größe der Bildlaufleiste und die Position des Daumens in Bezug auf den sichtbaren Bereich der Orientierung (horizontal oder vertikal), den sie steuert. Mit anderen Worten, die Länge (Höhe oder Breite) der `scrollbar` repräsentiert alle Inhalte in einem Viewport. Der `aria-valuemin`-Wert stellt den Anfang des Inhalts und der Bildlaufleiste dar, der `aria-valuemax`-Wert das Ende des Inhalts und das Ende der Bildlaufleiste. Der `aria-valuenow`-Wert repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist, und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentwert zwischen `aria-valuemin` und `aria-valuemax` durch assistive Technologien dargestellt.

> [!NOTE]
> Assistive Technologien geben den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen den Werten von `aria-valuemin` und `aria-valuemax` aus, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` auf eine Weise festzulegen, die für diese Berechnung geeignet ist.

Wie bei einer nativen Bildlaufleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen mithilfe von Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der `scrollbar`-Rolle müssen all diese Interaktionsmethoden unterstützen.

Bei Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er auf die Bildlaufpfeile an jedem Ende der Bildlaufleiste klickt, sofern vorhanden, auf einen leeren Teil der Bildlaufschiene klickt sowie den Bildlaufdaumen klickt und zieht.

Auch das Scrollen über die Tastatur muss unterstützt werden. Wenn der Fokus sich im Viewport befindet, der durch eine `scrollbar` gesteuert wird, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Bildlaufleiste) den Daumen der Bildlaufleiste proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild nach oben</kbd>, <kbd>Bild nach unten</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports für jeden Tastendruck bewegen, bis der untere oder obere (oder linke oder rechte) Rand des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Feedback zu geben, indem es:

1. Das `scrollbar`-Element visuell aktualisiert,
2. Den Inhalt des Viewports scrollt, und
3. Den Wert der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Eigenschaft aktualisiert.

Die Standardausrichtung der `scrollbar`-Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) ist in diesem Fall optional. Die Ausrichtung repräsentiert die Ausrichtung der Bildlaufleiste und den Bildlaufeffekt auf den vom Bildlauf gesteuerten Anzeigebereich. Wenn das Scrollen links nach rechts oder rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzerschnittstellenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `scrollbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [%20 Präsentation](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachgeordneten Elemente eines `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` Präsentationselemente sind, ist der folgende Code gleichwertig:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive von Benutzern assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden im [Zugänglichkeit-Baum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport über die `id`, deren Inhalt durch die Bildlaufleiste gesteuert wird.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Erforderlich)
  - : Setzen Sie einen Dezimalwert zwischen `0`, oder `aria-valuemin`, falls vorhanden, und `aria-valuemax`, der den aktuellen Wert der Bildlaufleiste anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien geben den Wert von `aria-valuenow` oft als Prozentsatz an. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Bildlaufleistenwert für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Setzen Sie einen Dezimalwert, der den Mindestwert darstellt, und kleiner als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Setzen Sie einen Dezimalwert, der den Höchstwert darstellt, und größer als `aria-valuemin`. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Wenn kein natives Formularsteuerungselement verwendet wird und daher die Bildlaufleiste nicht mit einem {{HTMLElement('label')}} assoziiert werden kann, und sichtbarer Text vorhanden ist, der den erforderlichen zugänglichen Namen liefern kann, setzen Sie ihn auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines Elements mit Text, das als Beschriftung dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der von `aria-labelledby` referenziert werden kann, geben Sie den string-Wert an, der das `scrollbar`-Element beschriftet und den erforderlichen zugänglichen Namen liefert.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertical`. Die Eigenschaft kann eingefügt und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastatur-Interaktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei der Daumen proportional an der Bildlaufleiste nach oben verschoben wird, bis der Anfang des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei der Daumen proportional an der Bildlaufleiste nach unten verschoben wird, bis das Ende des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Pfeil nach links</kbd>
  - : Beim horizontalen Bildlauf bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei der Daumen proportional nach links über die Scrollleisten-Schiene verschoben wird, bis der linke Rand des Inhalts am linken Ende des Viewports anliegt und der Daumen am linken Ende der Bildlaufleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Beim horizontalen Bildlauf bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei der Daumen proportional nach rechts über die Scrollleisten-Schiene verschoben wird, bis der rechte Rand des Inhalts am rechten Ende des Viewports anliegt und der Daumen am rechten Ende der Bildlaufleiste ausgerichtet ist.
- <kbd>Bild nach oben</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei der Daumen proportional an der Bildlaufleiste nach oben verschoben wird, bis der Anfang des Inhalts und der Bildlaufleiste erreicht ist.
- <kbd>Bild nach unten</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei der Daumen proportional an der Bildlaufleiste nach unten verschoben wird, bis das Ende des Inhalts und der Bildlaufleiste erreicht ist.

## Beispiele

Das folgende Beispiel zeigt ein Wort, das wahrscheinlich zu lang für ein übergeordnetes Container ist.

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

Bei der Verwendung von ARIA-Rollen anstelle nativer UI-Funktionen müssen CSS verwendet werden, um die Bildlaufleiste und den Daumen zu gestalten, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigerereignisse zu verarbeiten.

CSS hätte verwendet werden können, um sicherzustellen, dass der überlaufende Wert von PI eine native Bildlaufleiste hat:

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

Das obige CSS bedeutet, dass eine native Bildlaufleiste erscheint, wenn der Benutzer mit dem Viewport des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als der umgebende Kasten des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um Personen, die eine Tastatur verwenden, die Navigation zu ermöglichen und sich im überlaufenden Inhalt zu bewegen.

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
- [Dokument `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
