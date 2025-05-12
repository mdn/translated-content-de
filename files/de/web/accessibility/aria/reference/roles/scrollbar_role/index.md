---
title: "ARIA: Rolle `scrollbar`"
short-title: scrollbar
slug: Web/Accessibility/ARIA/Reference/Roles/scrollbar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert.

## Beschreibung

Ein `scrollbar` ist ein Bereich, der steuert, welcher Teil des Inhalts eines Viewports derzeit im Rahmen des Viewports sichtbar ist; ob der Viewport die volle Browsergröße hat, ein iframe ist oder ein beliebiges Element im [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

### Was ist ein Scrollbar

Viele Anwendungen bieten native Scrollbars, wenn der Inhaltsbereich größer als das Anwendungsfenster ist. Scrollbars erscheinen normalerweise rechts oder unten im Anzeigebereich. Native Scrollbars erscheinen als dünne rechteckige Schienen, die die Länge des gesteuerten Viewports abdecken, mit einem UI-Element, das als Daumen oder Schieber bezeichnet wird und entlang der Schiene gezogen werden kann, um den zugehörigen Inhalt im Viewport zu bewegen. Einige Scrollbars haben Pfeile an jedem Ende der Schiene, mit denen der Viewport bei Aktivierung um eine kurze Distanz verschoben werden kann.

Nehmen Sie dieses Dokument als Beispiel: Wenn der Viewport das gesamte Browserfenster ist und der Inhalt höher als der Viewport ist, repräsentiert in den meisten Browsern die Scrollbar am rechten Rand des Fensters die Gesamtlänge der Seite und der Scroll-Daumen stellt den Teil des Seiteninhalts dar, der derzeit im Viewport sichtbar ist.

Scrollbars können auch in Viewports erscheinen, die Unterabschnitte des gesamten Browserfensters sind. Bleiben wir bei diesem Inhalt als Beispiel, wenn dieser Inhalt in einem {{HTMLElement('iframe')}} oder {{HTMLElement('object')}} eingebettet ist, wird die native vertikale Scrollbar die Höhe des Rahmens haben. Eine Scrollbar hat in der Regel die Länge des Viewports, muss es aber nicht sein.

Wenn Sie derzeit keine Scrollbar sehen, kann es daran liegen, dass Ihr Browser die Scrollbar nur beim Scrollen anzeigt oder nur wenn der Inhalt eines Elements zu groß ist, um in seinen Block-Formatierungskontext zu passen. Abhängig vom Browser und Betriebssystem können Scrollbars so eingestellt werden, dass sie auch dann sichtbar sind, wenn der Inhalt in den Viewport passt und kein Scrollen notwendig oder möglich ist.

### ARIA `scrollbar`

Es ist immer am besten, native Scrollbars zu verwenden. Sie können die CSS-Eigenschaft {{CSSXref('overflow')}} verwenden, um das Erscheinungsbild nativer Scrollbars sicherzustellen. Eine [CSS-Scrollbar-Spezifikation](https://drafts.csswg.org/css-scrollbars/) wird derzeit entwickelt. Einige Browser erlauben das [Styling von Scrollbars über vorangestellte Pseudo-Elemente](/de/docs/Web/CSS/::-webkit-scrollbar).

Da die native Scrollbar-Gestaltung historisch begrenzt war, stoßen Sie möglicherweise auf eine in JavaScript implementierte Scrollbar, die Sie unterstützen und vollständig zugänglich machen müssen. Zu diesem Zweck können Sie die `scrollbar`-Rolle verwenden, um unterstützende Technologien darüber zu informieren, dass ein UI-Steuerelement eine interaktive Scrollbar ist.

Ein Element mit der Rolle `scrollbar` ist ein grafisches Objekt, das das Scrollen von Inhalten innerhalb eines Anzeigebereichs steuert; es ist die ARIA-Rolle, die anzeigt, dass ein Element eine Scrollbar ist. Das HTML-Element, das dem am ähnlichsten ist, ist der `range`-{{HTMLElement('input')}}-Typ, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range).

Das `scrollbar`-Element hat zwei erforderliche Attribute: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow). Das `aria-controls`-Attribut verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des gesteuerten Scrollbereichs. Die `aria-valuenow`-Eigenschaft definiert den aktuellen Wert der Scrollbar.

Während `aria-valuenow` immer erforderlich ist, müssen die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) nur für die Rolle der Scrollbar festgelegt werden, wenn der Mindestwert der `scrollbar` nicht 0 oder der Höchstwert nicht 100 ist. Der Wert von `aria-valuenow` muss immer zwischen den Mindest- und Höchstwerten einschließlich liegen, oder zwischen `0` und `100` einschließlich, wenn die Mindest- und Höchstwerte standardmäßig auf `0` und `100` gesetzt sind. `aria-valuenow` kommuniziert, wie nah der Viewport am unteren Ende des Dokuments ist. Denken Sie daran wie an eine Fortschrittsanzeige, bei der der Anfang des Dokuments der Mindestwert ist und das Ende des Dokuments der Höchstwert.

Ein `scrollbar` stellt den aktuellen Wert und den Bereich der möglichen Werte durch die Größe der Scrollbar und die Position des Daumens im Verhältnis zum sichtbaren Bereich der von ihm gesteuerten Ausrichtung (horizontal oder vertikal) dar. Mit anderen Worten, die Länge (Höhe oder Breite) des `scrollbar` repräsentiert den gesamten Inhalt innerhalb eines Viewports. Der `aria-valuemin`-Wert repräsentiert den Anfang des Inhalts und der Scrollbar, der `aria-valuemax`-Wert repräsentiert das Ende des Inhalts und das Ende der Scrollbar. Der `aria-valuenow` repräsentiert den derzeit sichtbaren Inhalt im Viewport und die aktuelle Position oder den aktuellen Wert des beweglichen Daumens. Der `aria-valuenow`-Wert wird im Allgemeinen als Prozentsatz zwischen `aria-valuemin` und `aria-valuemax` dargestellt, der von unterstützenden Technologien berechnet wird.

> [!NOTE]
> Unterstützende Technologien stellen den Wert von `aria-valuenow` im Allgemeinen als Prozentsatz eines Bereichs zwischen dem Wert von `aria-valuemin` und `aria-valuemax` dar, es sei denn, [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist gesetzt. Es wird empfohlen, die Werte für `aria-valuemin`, `aria-valuemax` und `aria-valuenow` so festzulegen, dass sie für diese Berechnung geeignet sind.

Wie bei einer nativen Scrollbar interagieren Nutzer direkt oder indirekt mit `scrollbar`-Elementen über Maus, Touchpad, Tastatur und Spracheingabe. Implementierungen der `scrollbar`-Rolle müssen auch alle diese Interaktionsmethoden unterstützen.

Beim Gebrauch der Maus muss der Benutzer die `scrollbar` aktivieren können, indem er auf die Scrollpfeile an jedem Ende der Scrollbar klickt, sofern vorhanden, auf einen leeren Abschnitt der Scrollschiene klickt sowie den Schieber (Daumen) anklickt und zieht.

Die Tastaturunterstützung muss ebenfalls gegeben sein. Wenn der Fokus innerhalb des Viewports ist, der von einer `scrollbar` gesteuert wird, sollten die Tasten <kbd>Pfeil nach oben</kbd> und <kbd>Pfeil nach unten</kbd> (oder <kbd>Pfeil nach links</kbd> und <kbd>Pfeil nach rechts</kbd> für eine horizontale Scrollbar) den Scrollbarthum proportional bewegen. Zusätzlich müssen die Tasten <kbd>Bild nach oben</kbd>, <kbd>Bild nach unten</kbd>, <kbd>Leertaste</kbd> und <kbd>Umschalt + Leertaste</kbd> den Inhalt und den Scrollbarthum um die Höhe (oder Breite) des Viewports verschieben, für jeden Tastendruck bis der Inhalt oben oder unten (oder links oder rechts) im Blick ist.

JavaScript muss verwendet werden, um die `scrollbar`-Aktion in Scrollbefehle zu übersetzen und dem Benutzer Feedback zu geben durch:

1. Visuelles Aktualisieren des `scrollbar`-Elements,
2. Scrollen des Inhalts im Viewport und
3. Aktualisieren des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Eigenschaftswerts.

Die Standardausrichtung der `scrollbar`-Rolle ist vertikal. Das Einschließen von [`aria-orientation="vertical"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) in diesem Fall ist optional. Die Ausrichtung repräsentiert die Ausrichtung der Scrollbar und den Scrolleffekt auf den Anzeigebereich, der von der Scrollbar gesteuert wird. Wenn das Scrollen von links nach rechts oder von rechts nach links und nicht von oben nach unten erfolgt, fügen Sie `aria-orientation="horizontal"` zu dem mit der `scrollbar`-Rolle versehenen Element hinzu.

> [!NOTE]
> Ein zugänglicher Name ist **erforderlich**. Wenn die `scrollbar`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Etikett vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Etikett vorhanden ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einer `scrollbar` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `scrollbar`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `scrollbar`-Element, das eine Überschrift enthält.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Da Nachkommen von `scrollbar` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Baum")}} entsprechen:

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) (Erforderlich)
  - : Identifiziert den Viewport über die `id`, dessen Inhalt von der Scrollbar gesteuert wird.
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (Erforderlich)
  - : Auf einen Dezimalwert zwischen `0` oder `aria-valuemin` (falls vorhanden) und `aria-valuemax` eingestellt, der den aktuellen Wert der Scrollbar angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren den Wert von `aria-valuenow` oft als Prozentsatz. Wenn dies nicht hilfreich wäre, verwenden Sie diese Eigenschaft, um den Scrollbar-Wert für Benutzer verständlicher zu machen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Einstellen auf einen Dezimalwert, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert `0`.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Einstellen auf einen Dezimalwert, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert `100`.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Wenn kein nativer Formularsteuerelement verwendet wird und daher die Scrollbar nicht mit einem {{HTMLElement('label')}} verknüpft werden kann, und sichtbarer Text verfügbar ist, der den erforderlichen zugänglichen Namen bereitstellen kann, dann wird dieser auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements gesetzt, das Text enthält, der als Etikett dient. Andernfalls verwenden Sie `aria-label`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein {{htmlelement('label')}} verwendet werden kann und kein sichtbarer Text vorhanden ist, der von `aria-labelledby` referenziert werden kann, bietet den Zeichenfolgenwert, der das `scrollbar`-Element beschriftet und den erforderlichen zugänglichen Namen bereitstellt.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Standardmäßig ist die Ausrichtung `vertical`. Die Eigenschaft kann einbezogen und auf `horizontal`, `undefined` (der Standard für alle Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

### Tastaturinteraktionen

- <kbd>Pfeil nach oben</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach oben, wobei sich der Daumen proportional nach oben entlang der Scrollbarschiene bewegt, bis das obere Ende des Inhalts und der Scrollbar erreicht sind.
- <kbd>Pfeil nach unten</kbd>
  - : Der Inhalt im Viewport bewegt sich um eine Zeile nach unten, wobei sich der Daumen proportional nach unten entlang der Scrollbarschiene bewegt, bis das untere Ende des Inhalts und der Scrollbar erreicht sind.
- <kbd>Pfeil nach links</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach links, wobei sich der Daumen proportional nach links entlang der Scrollbarschiene bewegt, bis der linke Rand des Inhalts das linke Ende des Viewports berührt und der Daumen am linken Ende der Scrollbar ausgerichtet ist.
- <kbd>Pfeil nach rechts</kbd>
  - : Bei horizontalem Scrollen bewegt sich der Inhalt im Viewport um die Breite eines Zeichens nach rechts, wobei sich der Daumen proportional nach rechts entlang der Scrollbarschiene bewegt, bis der rechte Rand des Inhalts das rechte Ende des Viewports berührt und der Daumen am rechten Ende der Scrollbar ausgerichtet ist.
- <kbd>Bild nach oben</kbd> und <kbd>Umschalt + Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach oben, wobei sich der Daumen proportional nach oben entlang der Scrollbarschiene bewegt, bis das obere Ende des Inhalts und der Scrollbar erreicht sind.
- <kbd>Bild nach unten</kbd> und <kbd>Leertaste</kbd>
  - : Der Inhalt im Viewport bewegt sich um die Höhe eines Viewports nach unten, wobei sich der Daumen proportional nach unten entlang der Scrollbarschiene bewegt, bis das untere Ende des Inhalts und der Scrollbar erreicht sind.

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

Wenn anstelle von nativen UI-Features die ARIA-Rollen verwendet werden, muss CSS verwendet werden, um die Scrollbar und den Daumen zu gestalten und JavaScript muss verwendet werden, um alle Tastatur- und Zeigerereignisse zu handhaben.

CSS hätte verwendet werden können, um sicherzustellen, dass der überlaufende Wert von PI eine native Scrollbar hat:

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

Das obige CSS bedeutet, dass eine native Scrollbar angezeigt wird, wenn der Benutzer mit dem Viewport des Absatzes interagiert, falls die Länge des längsten Wortes im Absatz breiter ist als die Box, die den Absatz enthält. Das `tabindex`-Attribut wurde hinzugefügt, um Personen, die eine Tastatur verwenden, zu ermöglichen, zu navigieren und überschüssigen Inhalt zu scrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML-Element {{HTMLElement('progress')}}
- HTML-Element {{HTMLElement('meter')}}
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [Scroll-Ereignis des Dokuments](/de/docs/Web/API/Document/scroll_event)
