---
title: "ARIA: Rolle separator"
slug: Web/Accessibility/ARIA/Roles/separator_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `separator` kennzeichnet das Element als einen Trennstrich, der Abschnitte von Inhalten oder Gruppen von Menüelementen voneinander abgrenzt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennstrichs {{HTMLElement('hr')}} ist `separator`.

## Beschreibung

Ein Separator ist ein Trennstrich, der Abschnitte von Inhalten oder Gruppen von Menüelementen voneinander abgrenzt und unterscheidet. Es gibt zwei Arten von Separators: eine statische Struktur, die eine sichtbare Grenze bietet, identisch mit dem HTML-{{HTMLElement('hr')}}-Element, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches strukturelles Element, das verwendet werden kann, um zwei Gruppen von Menüelementen in einem Menü visuell zu trennen oder um eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Trennstriche, die nicht fokussierbar sind, können von einem Benutzer eines Screenreaders dennoch wahrgenommen werden, wenn er einen Lesecursor verwendet, der nicht vom Fokus abhängig ist.

```html
<h2>Mein erster Blogbeitrag</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Zwei Jahre später, mein zweiter Beitrag</h2>
…
```

Im Beispiel erzeugt ein Bild einen visuellen Separator zwischen zwei Blogbeiträgen. Der Autor hätte einen semantischen thematischen Trennstrich {{HTMLElement('hr')}} verwenden und ihn mit CSS blau stylen können (und müsste das Bild nicht ändern, wenn er das Thema des Blogs ändert), oder der Autor hätte jeden Beitrag in das semantische {{HTMLElement('article')}}-Element einfügen können, oder beides.

```html
<section role="feed">
  <article>
    <h2>Mein erster Blogbeitrag</h2>
    …
  </article>
  <hr />
  <article>
    <h2>Zwei Jahre später, mein zweiter Beitrag</h2>
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

Die Rolle separator kann verwendet werden, um das Element als visuellen Trenner zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, wie z. B. Gruppen von `menuitemradio`- oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist und eine sichtbare Grenze zwischen zwei Inhaltabschnitten bietet und es dem Benutzer ermöglicht, die relative Größe der Abschnitte, die er trennt, durch Ändern seiner Position zu ändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) sollten ebenfalls enthalten sein, wenn sie nicht auf die Standardwerte 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) sollte enthalten sein, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente in einem `separator` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommelemente eines `separator`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im [Accessibility-Tree](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) (Standard ist horizontal für separator)

  - : Standardmäßig wird angenommen, dass der Trenner für `separator` horizontal ist. Der Wert kann enthalten sein und auf horizontal, undefiniert (der Standard für andere Rollen, sofern nicht anders angegeben), oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert das `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, schließen Sie dieses Attribut nicht ein.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, fügen Sie den Mindestwert mit `aria-valuemin` hinzu. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, fügen Sie `aria-valuemax` mit einem Wert hinzu, der gleich oder größer als `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und das `aria-valuenow` nicht optimal ist, um dem Benutzer nützliche Informationen zu liefern, wird der enthaltene `aria-valuetext`-Inhalt anstelle des `aria-valuenow`-Werts vorgelesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematischer Trennstrich HTML {{HTMLElement('hr')}}-Element
- [Beispielseparator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
