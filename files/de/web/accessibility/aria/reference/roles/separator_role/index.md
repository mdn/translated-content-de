---
title: "ARIA: `separator`-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `separator`-Rolle kennzeichnet das Element als Trennelement, das Sektionen von Inhalten oder Gruppen von Menüeinträgen voneinander trennt und unterscheidet. Die implizite ARIA-Rolle für das native thematische Unterbrechungselement {{HTMLElement('hr')}} ist `separator`.

## Beschreibung

Ein Separator ist ein Trennelement, das Sektionen von Inhalten oder Gruppen von Menüeinträgen voneinander trennt und unterscheidet. Es gibt zwei Arten von Separatoren: Eine statische Struktur, die eine sichtbare Abgrenzung bietet, identisch mit dem HTML-Element {{HTMLElement('hr')}}, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um visuell zwei Gruppen von Menüelementen in einem Menü zu teilen oder um eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Unterbrechungen, die nicht fokussierbar sind, können von einem Bildschirmleser-Benutzer wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht von der Fokussierung abhängt.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

In dem Beispiel erzeugt ein Bild einen visuellen Trennelement zwischen zwei Blogeinträgen. Der Autor hätte ein semantisches thematisches Unterbrechungselement {{HTMLElement('hr')}} verwenden und es mit CSS stylen können, um es blau zu machen (und das Bild nicht ändern zu müssen, wenn er das Blog-Thema ändert), oder der Autor hätte jeden Beitrag im semantischen {{HTMLElement('article')}}-Element umschließen können, oder beides.

```html
<section role="feed">
  <article>
    <h2>My first blog post</h2>
    …
  </article>
  <hr />
  <article>
    <h2>Two years later, my second post</h2>
    …
  </article>
</section>
```

```css
[role="feed"] > hr {
  height: 3px;
  background-color: blue;
}
```

Ein zugänglicher Name ist nicht erforderlich.

### Fokussierbarer Separator

Die `separator`-Rolle kann verwendet werden, um das Element als visuellen Trennelement zwischen Gruppen von Elementen innerhalb eines Menüs zu kennzeichnen, wie zum Beispiel Gruppen von `menuitemradio` oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist, indem er eine sichtbare Abgrenzung zwischen zwei Inhaltsabschnitten bietet und dem Benutzer ermöglicht, die relative Größe der getrennten Abschnitte zu ändern, indem er seine Position ändert, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls enthalten sein, wenn sie nicht auf die Standardwerte von 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sollte enthalten sein, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibilitäts-API dargestellt werden, nur Text enthalten können. Accessibilitäts-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `separator` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die `presentation`-Rolle auf alle Nachfahren eines `separator`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachfahren von `separator` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus Sicht der assistiven Technologie-Benutzer existiert die Überschrift nicht, da die vorherigen Codeausschnitte gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} sind:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standard ist horizontal für Separator)

  - : Standardmäßig wird angenommen, dass der Trennelement für `separator`-Rollen horizontal ist. Der Wert kann enthalten und auf horizontal, undefiniert (der Standard für andere Rollen, es sei denn, anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, diesen Attribut nicht einschließen.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Minimalwert nicht 0 beträgt, den Minimalwert mit `aria-valuemin` einschließen.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Maximalwert nicht 100 beträgt, `aria-valuemax` mit einem Wert gleich oder größer als `aria-valuemin` einschließen.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und der `aria-valuenow` nicht optimal darin ist, dem Benutzer verwertbare Informationen bereitzustellen, wird der Inhalt von `aria-valuetext` stattdessen vorgelesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Der thematische Unterbrechungs-HMTL-{{HTMLElement('hr')}}-Element
- [Beispiel-Separator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
