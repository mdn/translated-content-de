---
title: "ARIA: separator-Rolle"
short-title: separator
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `separator`-Rolle gibt an, dass das Element ein Teiler ist, der Abschnitte von Inhalten oder Gruppen von Menüelementen trennt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennstrichs {{HTMLElement('hr')}}-Element ist `separator`.

## Beschreibung

Ein Separator ist ein Teiler, der Abschnitte von Inhalten oder Gruppen von Menüelementen trennt und unterscheidet. Es gibt zwei Arten von Separatoren: Eine statische Struktur, die eine sichtbare Begrenzung bietet, identisch mit dem HTML {{HTMLElement('hr')}}-Element, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um zwei Gruppen von Menüelementen in einem Menü visuell zu trennen oder um eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Trennstriche, die nicht fokussierbar sind, können immer noch von einem Screenreader-Benutzer wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht von Fokus abhängt.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erstellt ein Bild einen visuellen Separator zwischen zwei Blogbeiträgen. Der Autor hätte einen semantischen thematischen Trennstrich {{HTMLElement('hr')}}-Element verwenden und ihn mit CSS so gestalten können, dass er blau ist (und das Bild nicht ändern muss, wenn das Blog-Thema geändert wird), oder der Autor hätte jeden Beitrag in das semantische {{HTMLElement('article')}}-Element einbinden können, oder beides.

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

Die `separator`-Rolle kann verwendet werden, um das Element als visuellen Separator zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, wie z.B. Gruppen von `menuitemradio` oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist und eine sichtbare Begrenzung zwischen zwei Inhaltsabschnitten bietet und es dem Benutzer ermöglicht, die relative Größe der Abschnitte, die er trennt, durch Ändern seiner Position zu ändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls angegeben werden, wenn sie nicht auf die Standardwerte von 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name, mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sollte angegeben werden, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `separator` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `separator`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachte man das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentational sind, entspricht der folgende Code:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} entsprechen:

```html
<div role="separator">Title of my separator</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standard ist horizontal für Separator)
  - : Standardmäßig wird davon ausgegangen, dass der Teiler für `separator`-Rollen horizontal ist. Der Wert kann angegeben und auf horizontal, undefiniert (der Standard für andere Rollen, sofern nicht anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, dieses Attribut nicht einbeziehen.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standard ist 0)
  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, geben Sie den Mindestwert mit `aria-valuemin` an. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standard ist 100)
  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, geben Sie `aria-valuemax` mit einem Wert an, der gleich oder größer als `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` nicht optimal ist, um dem Benutzer verwertbare Informationen bereitzustellen, wird der enthaltene `aria-valuetext`-Inhalt anstelle des `aria-valuenow`-Werts gelesen.

<!--
### Tastaturinteraktionen

### Erforderliche JavaScript-Funktionen

## Beispiele

## Barrierefreiheitsbedenken

## Bewährte Praktiken

### Bevorzugen Sie HTML -->

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematischer Trennstrich HTML {{HTMLElement('hr')}}-Element
- [Beispiel für einen Separator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
