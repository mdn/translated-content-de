---
title: "ARIA: separator-Rolle"
short-title: separator
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `separator`-Rolle zeigt an, dass das Element ein Trennzeichen ist, das Abschnitte von Inhalten oder Gruppen von Menüeinträgen trennt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Unterbrechungs-{{HTMLElement('hr')}}-Elementes ist `separator`.

## Beschreibung

Ein Separator ist ein Trennzeichen, das Abschnitte von Inhalten oder Gruppen von Menüeinträgen trennt und unterscheidet. Es gibt zwei Arten von Separatoren: Eine statische Struktur, die eine sichtbare Grenze bietet, identisch mit dem HTML-{{HTMLElement('hr')}}-Element, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um optisch zwei Gruppen von Menüeinträgen in einem Menü zu trennen oder eine horizontale Linie zwischen zwei Abschnitten einer Seite zu schaffen. Thematische Unterbrechungen, die nicht fokussierbar sind, können von einem Screenreader-Nutzer immer noch wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht auf Fokus angewiesen ist.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erstellt ein Bild einen visuellen Separator zwischen zwei Blogbeiträgen. Der Autor hätte ein thematisches Unterbrechungs-{{HTMLElement('hr')}}-Element und CSS verwenden können, um es blau zu gestalten (und das Bild nicht ändern zu müssen, wenn sie das Blog-Thema ändern). Alternativ hätte der Autor jeden Beitrag in ein semantisches {{HTMLElement('article')}}-Element einbetten können, oder beides.

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

Die separator-Rolle kann verwendet werden, um das Element als visuellen Separator zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, wie z.B. Gruppen von `menuitemradio`- oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist und eine sichtbare Grenze zwischen zwei Inhaltsabschnitten bietet, sodass der Benutzer die relative Größe der getrennten Abschnitte verändern kann, indem er die Position des Separators ändert, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die Werte von [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls angegeben werden, wenn sie nicht auf die Standardwerte 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name, mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), sollte enthalten sein, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente, die in einem `separator` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen eines `separator`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichbedeutend mit dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} sind:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standard ist horizontal für Separatoren)
  - : Standardmäßig wird angenommen, dass der Separator für `separator`-Rollen horizontal ist. Der Wert kann eingeschlossen und auf horizontal, undefiniert (der Standardwert für andere Rollen, sofern nicht anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn er nicht fokussierbar ist oder der Wert unbekannt ist, sollte dieses Attribut nicht enthalten sein.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standard ist 0)
  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, fügen Sie den Mindestwert mit `aria-valuemin` ein. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standard ist 100)
  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, fügen Sie `aria-valuemax` mit einem Wert gleich oder größer als `aria-valuemin` ein.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` nicht optimal ist, um dem Benutzer brauchbare Informationen bereitzustellen, wird der Inhalt von `aria-valuetext` anstelle des `aria-valuenow`-Wertes gelesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematische Unterbrechung HTML {{HTMLElement('hr')}}-Element
- [Beispielseparator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
