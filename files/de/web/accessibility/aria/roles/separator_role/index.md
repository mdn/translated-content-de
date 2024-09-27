---
title: "ARIA: separator Rolle"
slug: Web/Accessibility/ARIA/Roles/separator_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `separator` Rolle kennzeichnet das Element als einen Trenner, der Abschnitte von Inhalten oder Gruppen von Menüpunkten voneinander trennt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennungs-`<hr/>` Elements ist `separator`.

## Beschreibung

Ein Separator ist ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüpunkten voneinander trennt und unterscheidet. Es gibt zwei Arten von Separatoren: eine statische Struktur, die eine sichtbare Abgrenzung bietet, identisch mit dem HTML-`<hr/>`-Element, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `horizontal`.

### Nicht fokussierbarer Separator

Ein nicht fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um visuell zwei Gruppen von Menüpunkten in einem Menü zu unterteilen oder eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Trennungen, die nicht fokussierbar sind, können immer noch von einem Screenreader-Benutzer wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht vom Fokus abhängig ist.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erzeugt ein Bild einen visuellen Trenner zwischen zwei Blogbeiträgen. Der Autor hätte ein semantisches thematisches Trennungs-`<hr/>`-Element verwenden und es mit CSS so gestalten können, dass es blau ist (und müsste das Bild nicht ändern, wenn er das Thema des Blogs wechselt), oder der Autor hätte jeden Beitrag im semantischen `<article>`-Element umfassen können, oder beides.

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

Die `separator`-Rolle kann verwendet werden, um das Element als visuellen Trenner zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, wie beispielsweise Gruppen von `menuitemradio` oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist, eine sichtbare Abgrenzung zwischen zwei Inhaltsabschnitten bietet und dem Benutzer ermöglicht, die relative Größe der getrennten Abschnitte durch Änderung seiner Position zu verändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und dieser Wert muss aktualisiert werden, wenn er sich ändert. Die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) sollten ebenfalls angegeben werden, wenn sie nicht die Standardwerte von 0 bzw. 100 haben.

Ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) sollte enthalten sein, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `separator` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `separator`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus Sicht der unterstützenden Technologiebenutzer existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) (Standard ist horizontal für separator)

  - : Standardmäßig wird der Trenner für `separator`-Rollen als horizontal angenommen. Der Wert kann eingeschlossen werden und auf horizontal, undefiniert (der Standard für andere Rollen, sofern nicht anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, schließen Sie dieses Attribut nicht ein.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, fügen Sie den Mindestwert mit `aria-valuemin` ein.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, fügen Sie `aria-valuemax` mit einem Wert ein, der gleich oder größer als `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` nicht optimal ist, um dem Benutzer brauchbare Informationen zu liefern, wird der enthaltene `aria-valuetext` statt des `aria-valuenow`-Werts vorgelesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematisches Trennungs-HTML-`<hr/>`-Element
- [Beispiel für einen Separator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
