---
title: "ARIA: `scrollbar` Rolle"
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports aktuell im Rahmen des Viewports sichtbar ist; egal ob der Viewport die volle Browsergröße, ein `<iframe>` oder jegliches Element des [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context) darstellt.

### Was ist eine Scrollleiste

Viele Anwendungen bieten native Scrollleisten, wenn der Inhaltsbereich größer als das Anwendungsfenster ist. Scrollleisten erscheinen generell rechts oder unten im Anzeigebereich. Native Scrollleisten erscheinen als dünne rechteckige Schienenbereiche entlang des Viewports, den sie steuern, mit einem UI-Element namens Daumen oder Scroller, das entlang einer Schiene gezogen werden kann, um den zugehörigen Inhalt im Viewport zu bewegen. Einige Scrollleisten haben Pfeile an jedem Ende der Schiene, die es erlauben, den Viewport über eine kurze Entfernung zu scrollen, wenn sie aktiviert werden.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das gesamte Browserfenster ist und der Inhalt höher als der Viewport ist, repräsentiert die Scrollleiste am rechten Rand des Fensters in den meisten Browsern die Gesamtlänge der Seite, und der Scroll-Daumen repräsentiert den Teil des Seiteninhalts, der sich aktuell im Viewport befindet.

Scrollleisten können auch in Viewports erscheinen, die Unterabschnitte des gesamten Browserfensters sind. Wenn dieser Inhalt beispielsweise in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, ist die native vertikale Scrollleiste die Höhe des Rahmens. Eine Scrollleiste ist im Allgemeinen entsprechend der Länge des Viewports, muss aber nicht zwingend so sein.

Wenn Sie aktuell keine Scrollleiste sehen, kann das daran liegen, dass Ihr Browser die Scrollleiste nur beim Scrollen anzeigt oder nur, wenn der Inhalt eines Elements zu groß ist, um in dessen Block-Formatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollleisten so eingestellt werden, dass sie sichtbar sind, auch wenn der Inhalt im Viewport passt und kein Scrollen notwendig oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollleisten zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinen nativer Scrollleisten sicherzustellen. Eine [CSS-Spezifikation für Scrollleisten](https://drafts.csswg.org/css-scrollbars/) wird derzeit entwickelt. Einige Browser erlauben [das Styling von Scrollleisten über prefixed Pseudoelemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da das Styling nativer Scrollleisten historisch begrenzt war, kann es vorkommen, dass Sie auf eine in JavaScript implementierte Scrollleiste treffen, die Sie unterstützen und vollständig zugänglich machen müssen. Dazu können Sie die `scrollbar` Rolle verwenden, um assistiven Technologien mitzuteilen, dass ein UI-Control eine interaktive Scrollleiste ist.

Ein Element mit der `scrollbar` Rolle ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollleiste ist. Das HTML-Element, das am ehesten ähnlich ist, ist der `range` {{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). Das `aria-controls` Attribut verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des steuerbaren Bereichs. Die Eigenschaft `aria-valuenow` definiert den aktuellen Wert der Scrollleiste.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) nur für die `scrollbar`-Rolle festgelegt werden, wenn der minimale Wert der `scrollbar` nicht 0 ist oder der maximale Wert nicht 100. Der Wert von `aria-valuenow` muss immer zwischen den minimalen und maximalen Werten einschließlich liegen, oder zwischen `0` und `100` einschließlich, wenn die minimalen und maximalen Werte standardmäßig auf `0` und `100` gesetzt sind. `aria-valuenow` kommuniziert, wie nah der Viewport am Ende des Dokuments ist. Es ist ähnlich wie eine Fortschrittsanzeige, bei der der Anfang des Dokuments der minimalen Wert ist und das Ende des Dokuments der maximale Wert ist.

Ein `scrollbar` repräsentiert den aktuellen Wert und die Bandbreite möglicher Werte über die Größe der Scrollleiste und die Position des Daumens in Bezug auf den sichtbaren Bereich der Orientierung (horizontal oder vertikal), den es steuert. Mit anderen Worten, die Länge (Höhe oder Breite) der `scrollbar` repräsentiert den gesamten Inhalt innerhalb eines Viewports. Der `aria-valuemin`-Wert repräsentiert den Beginn des Inhalts und der Scrollleiste, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollleiste. Der `aria-valuenow` repräsentiert den Inhalt, der aktuell im Viewport sichtbar ist und die aktuelle Position oder den Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen von assistiven Technologien als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` angezeigt.

> [!NOTE]
> Assistive Technologien rendern den Wert von `aria-valuenow` in der Regel als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax`, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` in einer Weise festzulegen, die für diese Berechnung geeignet ist.

Wie bei einer nativen Scrollleiste interagieren Benutzer direkt oder indirekt mit `scrollbar` Elementen durch Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der `scrollbar` Rolle müssen auch alle diese Interaktionsmethoden unterstützen.

Bei der Verwendung einer Maus muss der Benutzer in der Lage sein, die `scrollbar` zu aktivieren, indem er die Scrollpfeile an jedem Ende der Scrollleiste anklickt, falls vorhanden, einen leeren Teil der Scrollspur anklickt sowie den Scroll-Daumen klickt und zieht.

Auch das Scrollen per Tastatur muss unterstützt werden. Wenn sich der Fokus im durch eine `scrollbar` gesteuerten Viewport befindet, sollten die <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollleiste) den Scrollleiste-Daumen proportional verschieben. Zusätzlich müssen die Tasten <kbd>Bilder nach oben</kbd>, <kbd>Bilder nach unten</kbd>, <kbd>Leertaste</kbd> und <kbd>Shift + Leertaste</kbd> den Inhalt und den Scroll-Daumen um die Höhe (oder Breite) des Viewports pro Tastendruck bewegen, bis das untere oder obere (oder linke oder rechte) Ende des Inhalts sichtbar ist.

JavaScript muss verwendet werden, um die Aktion der `scrollbar` in Scrollbefehle zu übersetzen und den Benutzer zu informieren durch:

1. Visuelles Aktualisieren des `scrollbar`-Elements,
2. Scrollen des Inhalts des Viewports und
3. Aktualisieren des `aria-valuenow`-Eigenschaftswerts.

Die Standardorientierung der `scrollbar` Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) ist in diesem Fall optional. Die Orientierung repräsentiert die Orientierung der Scrollleiste und den Scrolleffekt auf den Anzeigebereich, der von der Scrollleiste gesteuert wird. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` dem Element mit der `scrollbar` Rolle hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar` Rolle auf ein HTML {{HTMLElement('input')}} Element (oder `<meter>` oder `<progress>` Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die in einer Plattform-Zugriffs-API dargestellt, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente zu vertreten, die in einer `scrollbar` enthalten sind. Um mit dieser Einschränkung umzugehen, verwenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `scrollbar` Elements, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar` Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive eines Benutzers von assistiver Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Zugriffstree](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport, über die `id`, deren Inhalte von der Scrollleiste gesteuert werden.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0`, oder `aria-valuemin` falls vorhanden, und `aria-valuemax` eingestellt, der den aktuellen Wert der Scrollleiste angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Scrollleistenwert für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert eingestellt, der den minimalen Wert repräsentiert, und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert eingestellt, der den maximalen Wert repräsentiert, und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Wenn keine native Form-Control verwendet wird und daher die Scrollleiste nicht mit einem {{HTMLElement('label')}} verbunden werden kann, aber sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen liefern kann, auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines Elements eingestellt, das Text enthält, der als Label dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der durch `aria-labelledby` referenziert werden kann, liefert den Zeichenfolgenwert, der das `scrollbar` Element mit dem erforderlichen zugänglichen Namen bezeichnet.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Standardmäßig ist die Orientierung `vertical`. Die Eigenschaft kann eingeschlossen werden und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben mit dem sich proportionell bewegenden Daumen bis zum oberen Ende des Inhalts und der Scrollleiste.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten mit dem sich proportionell bewegenden Daumen bis zum unteren Ende des Inhalts und der Scrollleiste.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links mit dem sich proportionell nach links bewegenden Daumen bis die linke Kante des Inhalts die linke Kante des Viewports erreicht und der Daumen links ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts mit dem sich proportionell nach rechts bewegenden Daumen bis die rechte Kante des Inhalts die rechte Kante des Viewports erreicht und der Daumen rechts ausgerichtet ist.
- <kbd>Bilder nach oben</kbd> und <kbd>Shift + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben mit dem sich proportionell bewegenden Daumen, bis das obere Ende des Inhalts und der Scrollleiste erreicht sind.
- <kbd>Bilder nach unten</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten mit dem sich proportionell bewegenden Daumen, bis das untere Ende des Inhalts und der Scrollleiste erreicht ist das untere oder obere Ende des Inhalts sichtbar ist.

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

Wenn die ARIA-Rollen anstelle von nativen UI-Features verwendet werden, müssen CSS verwendet werden, um die Scrollleiste und den Daumen zu stylen, und JavaScript muss verwendet werden, um alle Tastatur- und Zeigerereignisse zu handhaben.

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

Das obige CSS bedeutet, dass eine native Scrollleiste angezeigt wird, wenn der Benutzer mit dem Viewport des Absatzes interagiert, wenn die Länge des längsten Wortes im Absatz breiter ist als der das Absatz enthaltende Kasten. Das `tabindex` Attribut wurde hinzugefügt, um Menschen, die die Tastatur verwenden, zu ermöglichen, zum überfließenden Inhalt zu navigieren und dort herumzuscrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} Element
- HTML {{HTMLElement('meter')}} Element
- Andere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (falls fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [Dokument `scroll` Ereignis](/de/docs/Web/API/Document/scroll_event)
