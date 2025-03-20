---
title: "ARIA: Rolle separator"
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: b0736177eff7772fd771174d7f76adc0b94c0d5e
---

Die Rolle `separator` zeigt an, dass das Element ein Trenner ist, der Abschnitte von Inhalten oder Gruppen von Menüpunkten trennt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennzeichens {{HTMLElement('hr')}} ist `separator`.

## Beschreibung

Ein Separator ist ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüpunkten trennt und unterscheidet. Es gibt zwei Arten von Separatoren: eine statische Struktur, die eine sichtbare Grenze darstellt, identisch mit dem HTML {{HTMLElement('hr')}} Element, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben implizit den [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert `horizontal`.

### Nicht fokussierbarer Separator

Ein nicht fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um visuell zwei Gruppen von Menüpunkten in einem Menü zu trennen oder um eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Trennzeichen, die nicht fokussierbar sind, können dennoch von einem Bildschirmleser wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht auf den Fokus angewiesen ist.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erstellt ein Bild einen visuellen Trenner zwischen zwei Blogposts. Der Autor hätte auch ein semantisches thematisches Trennzeichen {{HTMLElement('hr')}} verwenden und es mit CSS blau gestalten können (und das Bild nicht ändern müssen, wenn er das Thema des Blogs ändert), oder der Autor hätte jeden Beitrag im semantischen {{HTMLElement('article')}} Element einschließen können oder beides.

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

Die Rolle separator kann verwendet werden, um das Element als visuellen Trenner zwischen Gruppen von Elementen in einem Menü zu identifizieren, beispielsweise Gruppen von `menuitemradio` oder `menuitemcheckbox` Elementen.

Wenn der Separator fokussierbar ist und eine sichtbare Grenze zwischen zwei Inhaltsabschnitten bietet und dem Benutzer ermöglicht, die relative Größe der Abschnitte durch Ändern seiner Position zu ändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls enthalten sein, wenn sie nicht auf die Standardwerte 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sollte enthalten sein, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `separator` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `separator` an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `separator` Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachfahren von `separator` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu folgendem sind im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standard ist horizontal für separator)

  - : Standardmäßig wird der Trenner für die `separator` Rolle als horizontal angenommen. Der Wert kann eingeschlossen und auf horizontal, undefiniert (der Standard für andere Rollen, es sei denn, anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, schließen Sie dieses Attribut nicht ein.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, schließen Sie den Mindestwert mit `aria-valuemin` ein.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, schließen Sie `aria-valuemax` mit einem Wert gleich oder größer als `aria-valuemin` ein.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` dem Benutzer keine nützlichen Informationen bietet, wird der Inhalt von `aria-valuetext` anstelle des `aria-valuenow` Wertes vorgelesen.

<!--
### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

## Beispiele

## Bedenken zur Barrierefreiheit

## Beste Praktiken

### Bevorzugen Sie HTML -->

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematische Trennlinie HTML {{HTMLElement('hr')}}
- [Beispiel eines Separators in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
