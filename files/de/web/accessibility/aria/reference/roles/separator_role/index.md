---
title: "ARIA: separator Rolle"
short-title: separator
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `separator`-Rolle zeigt an, dass das Element ein Trenner ist, der Abschnitte von Inhalten oder Gruppen von Menüelementen trennt und unterscheidet. Die implizite ARIA-Rolle des nativen thematischen Trennstrichs {{HTMLElement('hr')}} ist `separator`.

## Beschreibung

Ein Separator ist ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen trennt und unterscheidet. Es gibt zwei Arten von Separatoren: eine statische Struktur, die eine sichtbare Grenze bietet, identisch mit dem HTML-Element {{HTMLElement('hr')}}, und ein fokussierbares, bewegliches Widget.

Elemente mit der Rolle `separator` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Nicht-fokussierbarer Separator

Ein nicht-fokussierbarer Separator ist ein statisches Strukturelement, das verwendet werden kann, um visuell zwei Gruppen von Menüelementen in einem Menü zu trennen oder eine horizontale Linie zwischen zwei Abschnitten einer Seite bereitzustellen. Thematische Trennungen, die nicht fokussierbar sind, können dennoch von einem Bildschirmleser-Benutzer wahrgenommen werden, wenn ein Lesecursor verwendet wird, der nicht von der Fokussierung abhängt.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel erstellt ein Bild einen visuellen Trenner zwischen zwei Blogbeiträgen. Der Autor hätte ein semantisches thematisches Trennelement {{HTMLElement('hr')}} verwenden und es mit CSS stilisieren können, um es blau darzustellen (und muss das Bild nicht ändern, wenn das Thema des Blogs geändert wird), oder der Autor hätte jeden Beitrag in das semantische {{HTMLElement('article')}} -Element einbetten können oder beides.

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

Die Separator-Rolle kann verwendet werden, um das Element als visuellen Trenner zwischen Gruppen von Elementen innerhalb eines Menüs zu identifizieren, z. B. Gruppen von `menuitemradio`- oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist und eine sichtbare Grenze zwischen zwei Inhaltsabschnitten bietet und es dem Benutzer ermöglicht, die relative Größe der Abschnitte, die er trennt, durch Ändern seiner Position zu verändern, muss der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators widerspiegelt, und der Wert muss aktualisiert werden, wenn er sich ändert. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls aufgenommen werden, wenn sie nicht auf die Standardwerte 0 bzw. 100 gesetzt sind.

Ein zugänglicher Name, mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), sollte einbezogen werden, wenn es mehr als einen fokussierbaren Separator gibt.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattform-Zugänglichkeits-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `separator` darzustellen. Um dieses Problem zu umgehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `separator`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus der Sicht eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standard ist horizontal für Separator)

  - : Standardmäßig wird angenommen, dass der Trenner für `separator`-Rollen horizontal ist. Der Wert kann eingeschlossen und auf horizontal, undefiniert (der Standard für andere Rollen, sofern nicht anders angegeben) oder vertikal gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)

  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, definiert `aria-valuenow` den aktuellen Wert. Wenn nicht fokussierbar oder der Wert unbekannt ist, schließen Sie dieses Attribut nicht ein.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standard ist 0)

  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 ist, schließen Sie den Mindestwert mit `aria-valuemin` ein. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standard ist 100)

  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 ist, schließen Sie `aria-valuemax` mit einem Wert ein, der gleich oder größer als `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` nicht optimal ist, um dem Benutzer nützliche Informationen bereitzustellen, wird der Inhalt von `aria-valuetext` anstelle des `aria-valuenow`-Wertes vorgelesen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Thematischer Trennstrich HTML {{HTMLElement('hr')}} Element
- [Beispiel für Separator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
