---
title: "ARIA: scrollbar Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist; unabhängig davon, ob der Viewport die vollständige Größe des Browsers hat, ein iframe oder ein beliebiges Element im [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) ist.

### Was ist eine Scrollleiste

Viele Anwendungen bieten native Scrollleisten, wenn der Inhaltsbereich größer ist als das Anwendungsfenster. Scrollleisten erscheinen in der Regel rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als schmale rechteckige Bereiche in der Länge des vom Viewport gesteuerten Bereichs. Ein UI-Element, welches als Daumen oder Scroller bezeichnet wird, kann entlang einer Spur gezogen werden, um den zugehörigen Inhalt im Viewport zu bewegen. Einige Scrollleisten haben an beiden Enden der Spur Pfeile, die es ermöglichen, den Viewport um eine kurze Strecke zu scrollen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das vollständige Browserfenster ist und der Inhalt höher als der Viewport ist, repräsentiert in den meisten Browsern die Scrollleiste am rechten Rand des Fensters die Gesamtlänge der Seite und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der derzeit im Viewport sichtbar ist.

Scrollleisten können auch auf Viewports erscheinen, die Teilabschnitte des vollständigen Browserfensters sind. Wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollleiste die Höhe des Rahmens sein. Eine Scrollleiste entspricht normalerweise der Länge des Viewports, ist jedoch nicht verpflichtet, dies zu sein.

Wenn Sie derzeit keine Scrollleiste sehen, kann dies daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in dessen Blockformatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten sichtbar gemacht werden, selbst wenn der Inhalt in den Viewport passt, ohne dass ein Scrollen erforderlich oder überhaupt möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinungsbild von nativen Scrollleisten sicherzustellen. Eine [CSS-Scrollleisten-Spezifikation](https://drafts.csswg.org/css-scrollbars/) ist in Entwicklung. Einige Browser erlauben das [Styling von Scrollleisten über vorangestellte Pseudo-Elemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da das Styling von nativen Scrollleisten historisch begrenzt war, kann es vorkommen, dass Sie auf eine in JavaScript implementierte Scrollleiste stoßen, die Sie unterstützen und vollständig zugänglich machen müssen. Dafür können Sie die `scrollbar`-Rolle verwenden, um unterstützende Technologien darauf hinzuweisen, dass ein UI-Element eine interaktive Scrollleiste ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen des Inhalts innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die angibt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das am ähnlichsten ist, ist der `range`-Typ des {{HTMLElement('input')}}-Elements, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des steuerbaren Bereichs. Die `aria-valuenow`-Eigenschaft definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur dann für die `scrollbar`-Rolle festgelegt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den Mindest- und Höchstwerten inklusive liegen oder, falls die Mindest- und Höchstwerte standardmäßig auf 0 und 100 gesetzt sind, zwischen `0` und `100` inklusive sein. `aria-valuenow` kommuniziert, wie nah der Viewport am unteren Rand des Dokuments ist. Denken Sie daran, dass es wie eine Fortschrittsanzeige ist, bei der der Beginn des Dokuments der Mindestwert und das Ende des Dokuments der Höchstwert ist.

Eine `scrollbar` repräsentiert den aktuellen Wert und den Bereich möglicher Werte über die Größe der Scrollbar und die Position des Daumens in Bezug auf den sichtbaren Bereich der gesteuerten Orientierung (horizontal oder vertikal). Mit anderen Worten, die Länge (Höhe oder Breite) der `scrollbar` stellt den gesamten Inhalt innerhalb eines Viewports dar. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den Inhalt, der derzeit im Viewport sichtbar ist, und die aktuelle Position oder den aktuellen Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird in der Regel als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` dargestellt, berechnet von assistierenden Technologien.

> [!NOTE]
> Unterstützende Technologien stellen den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz im Bereich zwischen den Werten von `aria-valuemin` und `aria-valuemax` dar, es sei denn [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so zu setzen, dass diese Berechnung sinnvoll ist.

Wie eine native Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar`-Elementen über Maus, Trackpad, Tastatur und Spracheingabe. Implementierungen der `scrollbar`-Rolle müssen auch all diese Interaktionsmethoden unterstützen.

Bei der Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er auf die Bildlaufpfeile an beiden Enden der Bildlaufleiste, sofern vorhanden, klickt, auf einen leeren Teil der Bildlaufspur klickt sowie den Bildlaufdaumen anklickt und zieht.

Auch das Scrollen mit der Tastatur muss unterstützt werden. Wenn der Fokus auf dem vom `scrollbar` gesteuerten Viewport liegt, sollten die <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Bildlaufdaumen proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild auf</kbd>, <kbd>Bild ab</kbd>, <kbd>Leerzeichen</kbd> und <kbd>Umschalttaste + Leerzeichen</kbd> den Inhalt und den Bildlaufdaumen um die Höhe (oder Breite) des Viewports bei jedem Tastendruck bewegen, bis der untere oder obere (oder linke oder rechte) Rand des Inhalts im Blick ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Rückmeldungen zu geben durch:

1. Visuelles Aktualisieren des `scrollbar`-Elementes,
2. Scrollen des Inhalts des Viewports, und
3. Aktualisieren des Wertes der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Eigenschaft.

Die Standardorientierung der `scrollbar`-Rolle ist vertikal. In diesem Fall ist das Einfügen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) optional. Die Orientierung repräsentiert die Ausrichtung der Scrollleiste und den Bildlaufeffekt auf den vom `scrollbar` gesteuerten Anzeigebereich. Wenn der Bildlauf von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` zu dem Element mit der `scrollbar`-Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML {{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von der zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einer `scrollbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen von `scrollbar`-Elementen an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus Sicht der Benutzer unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu dem Folgenden im {{Glossary("Accessibility_tree", "Zugriffsumgebung-Baum")}} sind:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport, über die `id`, dessen Inhalte von der Scrollbar gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin`, falls vorhanden, und `aria-valuemax` gesetzt, der den aktuellen Wert der Scrollbar angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Wert der Scrollbar für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein natives Formularsteuerelement verwendet wird und daher nicht in der Lage ist, die Scrollleiste mit einem {{HTMLElement('label')}} zu verknüpfen, falls sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen bereitstellen kann, setzen Sie ihn auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements, das als Label dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, gibt den String-Wert an, der das `scrollbar`-Element beschriftet, um den erforderlichen zugänglichen Namen bereitzustellen.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertical`. Die Eigenschaft kann aufgenommen und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich eine Zeile nach oben, wobei der Daumen proportional nach oben entlang des Scrollleistenschiebers bewegt wird, bis der obere Rand des Inhalts und der Scrollleiste erreicht sind.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich eine Zeile nach unten, wobei der Daumen proportional nach unten entlang des Scrollleistenschiebers bewegt wird, bis der untere Rand des Inhalts und der Scrollleiste erreicht sind.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Bildlauf bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei der Daumen proportional nach links über den Scrollleistenschieber bewegt wird, bis der linke Rand des Inhalts an dem linken Ende des Viewports anliegt und der Daumen am linken Ende der Scrollleiste ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Bildlauf bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei der Daumen proportional nach rechts über den Scrollleistenschieber bewegt wird, bis der rechte Rand des Inhalts an dem rechten Ende des Viewports anliegt und der Daumen am rechten Ende der Scrollleiste ausgerichtet ist.
- <kbd>Bild auf</kbd> und <kbd>Umschalttaste + Leerzeichen</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei der Daumen proportional nach oben entlang des Scrollleistenschiebers bewegt wird, bis der obere Rand des Inhalts und der Scrollleiste erreicht sind.
- <kbd>Bild ab</kbd> und <kbd>Leerzeichen</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei der Daumen proportional nach unten entlang des Scrollleistenschiebers bewegt wird, bis der untere Rand des Inhalts und der Scrollleiste erreicht sind.

## Beispiele

Das folgende ist ein Beispiel für ein Wort, das wahrscheinlich zu lang für ein übergeordnetes Element ist.

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

Wenn Sie die ARIA-Rollen anstelle von nativen UI-Features verwenden, muss CSS zum Styling der Scrollleiste und des Daumens verwendet werden und JavaScript muss alle Tastatur- und Zeigegerätereignisse verarbeiten.

CSS könnte verwendet werden, um sicherzustellen, dass der überlaufende PI-Wert eine native Scrollleiste hat:

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

Das obige CSS bedeutet, dass eine native Scrollleiste erscheint, wenn der Benutzer mit dem Viewport des Absatzes interagiert, wenn die Länge des längsten Wortes im Absatz breiter ist als der enthaltende Kasten des Absatzes. Das `tabindex`-Attribut wurde hinzugefügt, um Tastaturbenutzern die Navigation zu und das Scrollen um den überlaufenen Inhalt zu ermöglichen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Steuerelemente umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Dokument `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
