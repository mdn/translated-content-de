---
title: "ARIA: separator-Rolle"
slug: Web/Accessibility/ARIA/Roles/separator_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `separator`-Rolle zeigt an, dass das Element ein Trenner ist, der Abschnitte von Inhalten oder Gruppen von Menüelementen separiert und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennelements `<hr>` ist `separator`.

## Beschreibung

Ein Separator ist ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen separiert und unterscheidet. Es gibt zwei Arten von Separatoren: eine statische Struktur, die eine sichtbare Grenze bietet, identisch mit dem HTML-Element `<hr>`, und ein fokussierbares, verschiebbares Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um zwei Gruppen von Menüelementen in einem Menü visuell zu trennen oder eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Themenbezogene Trennlinien, die nicht fokussierbar sind, können für einen Screenreader-Benutzer immer noch wahrnehmbar sein, wenn ein Lesecursor verwendet wird, der nicht von Fokus abhängt.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erzeugt ein Bild einen visuellen Separator zwischen zwei Blogbeiträgen. Der Autor hätte ein semantisches thematisches Trennelement `<hr>` verwenden und es mit CSS stylen können, um es blau zu machen (und nicht das Bild ändern zu müssen, wenn das Thema des Blogs geändert wird), oder der Autor hätte jeden Beitrag in das semantische `<article>`-Element fassen können oder beides.

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

Die `separator`-Rolle kann verwendet werden, um das Element als visuellen Separator zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, wie z. B. Gruppen von `menuitemradio` oder `menuitemcheckbox` Elementen.

Wenn der Separator fokussierbar ist, eine sichtbare Grenze zwischen zwei Inhaltsabschnitten bietet und es dem Benutzer ermöglicht, die relative Größe der Abschnitte, die er trennt, durch Ändern seiner Position zu verändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) sollten auch eingeschlossen werden, wenn sie nicht auf die Standardwerte von 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) sollte eingeschlossen werden, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `separator` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `separator`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu dem Folgenden im [Zugriffsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) (Standard ist horizontal für Separatoren)

  - : Standardmäßig wird der Teiler für `separator`-Rollen als horizontal angenommen. Der Wert kann einbezogen und auf horizontal, undefiniert (der Standard für andere Rollen, sofern nicht anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, sollte dieses Attribut nicht eingeschlossen werden.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Minimalwert nicht 0 ist, schließen Sie den Minimalwert mit `aria-valuemin` ein. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Maximalwert nicht 100 ist, schließen Sie `aria-valuemax` mit einem Wert ein, der gleich oder größer als `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` nicht ausreicht, um dem Benutzer verwertbare Informationen bereitzustellen, wird der Inhalt in `aria-valuetext` anstelle des `aria-valuenow`-Werts vorgelesen.

<!--
### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

## Beispiele

## Zugänglichkeitsprobleme

## Beste Praktiken

### Bevorzugen Sie HTML -->

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematisches Trennelement HTML `<hr>`-Element
- [Beispielseparator in einem Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
