---
title: "ARIA: Rolle separator"
short-title: separator
slug: Web/Accessibility/ARIA/Reference/Roles/separator_role
l10n:
  sourceCommit: 9a211854aefbe716aabfcebb0b2f0de2c1a52b23
---

Die Rolle `separator` kennzeichnet ein Element als Trennlinie, die Inhaltsabschnitte oder Gruppen von Menüeinträgen voneinander abgrenzt. Die implizite ARIA-Rolle des nativen HTML-Elements {{HTMLElement('hr')}} für einen thematischen Umbruch ist `separator`.

## Beschreibung

Ein Separator grenzt Inhaltsabschnitte oder Gruppen von Menüeinträgen voneinander ab. Es gibt zwei Arten von Separatoren: ein statisches Strukturelement, das eine sichtbare Grenze bildet und dem HTML-Element {{HTMLElement('hr')}} entspricht, sowie ein fokussierbares, verschiebbares Widget.

Elemente mit der Rolle `separator` haben für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) implizit den Wert `horizontal`.

### Nicht fokussierbarer Separator

Ein nicht fokussierbarer Separator ist ein statisches Strukturelement. Er kann zwei Gruppen von Menüeinträgen optisch voneinander trennen oder eine horizontale Trennlinie zwischen zwei Abschnitten einer Seite bilden. Thematische Umbrüche, die nicht fokussierbar sind, können für Personen, die einen Screenreader verwenden, dennoch wahrnehmbar sein, wenn sie einen Lesecursor nutzen, der nicht vom Fokus abhängt.

```html
<h2>My first blog post</h2>
…
<img src="blueline.gif" role="separator" alt="" />
<h2>Two years later, my second post</h2>
…
```

Im Beispiel bildet ein Bild eine sichtbare Trennlinie zwischen zwei Blogbeiträgen. Stattdessen hätte der Autor das semantische HTML-Element {{HTMLElement('hr')}} verwenden und mit CSS blau gestalten können. Dann müsste er das Bild nicht ändern, wenn er das Design des Blogs ändert. Er hätte auch jeden Beitrag in ein semantisches {{HTMLElement('article')}}-Element einschließen oder beides tun können.

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

Ein barrierefrei zugänglicher Name ist nicht erforderlich.

### Fokussierbarer Separator

Die Rolle `separator` kann ein Element als sichtbare Trennlinie zwischen Gruppen von Einträgen innerhalb eines Menüs kennzeichnen, beispielsweise zwischen Gruppen von `menuitemradio`- oder `menuitemcheckbox`-Elementen.

Wenn der Separator fokussierbar ist, eine sichtbare Grenze zwischen zwei Inhaltsabschnitten bildet und es ermöglicht, durch Verschieben seiner Position die relative Größe der Abschnitte zu ändern, muss [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) auf eine Zahl gesetzt werden, die die aktuelle Position des Separators angibt. Dieser Wert muss bei einer Positionsänderung aktualisiert werden. [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) sollten ebenfalls angegeben werden, wenn sie nicht auf ihren jeweiligen Standardwert von 0 beziehungsweise 100 gesetzt sind.

Wenn es mehr als einen fokussierbaren Separator gibt, sollte mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ein barrierefrei zugänglicher Name angegeben werden.

### Alle Nachkommen sind rein präsentativ

Einige Arten von Benutzeroberflächenkomponenten können in einer Barrierefreiheits-API der Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb eines `separator` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachkommen eines `separator`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `separator`-Element, das eine Überschrift enthält.

```html
<div role="separator"><h3>Title of my separator</h3></div>
```

Da Nachkommen von `separator` rein präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="separator"><h3 role="presentation">Title of my separator</h3></div>
```

Aus Sicht einer Person, die assistive Technologie verwendet, existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem Folgenden entsprechen:

```html
<div role="separator">Title of my separator</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) (Standardwert für Separatoren: `horizontal`)
  - : Standardmäßig wird angenommen, dass die Trennlinie bei Elementen mit der Rolle `separator` horizontal verläuft. Der Wert kann ausdrücklich auf `horizontal`, `undefined` (der Standardwert für andere Rollen, sofern nicht anders angegeben) oder `vertical` gesetzt werden.

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wenn der Separator fokussierbar ist und einen bekannten Wert hat, gibt `aria-valuenow` den aktuellen Wert an. Ist der Separator nicht fokussierbar oder ist der Wert unbekannt, darf dieses Attribut nicht angegeben werden.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) (Standardwert: 0)
  - : Wenn der Separator fokussierbar ist und der Mindestwert nicht 0 beträgt, geben Sie den Mindestwert mit `aria-valuemin` an. Wenn der

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) (Standardwert: 100)
  - : Wenn der Separator fokussierbar ist und der Höchstwert nicht 100 beträgt, geben Sie `aria-valuemax` mit einem Wert an, der größer oder gleich `aria-valuemin` ist.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Wenn der Separator fokussierbar ist und `aria-valuenow` der nutzenden Person keine gut verständliche Information liefert, wird stattdessen der Inhalt von `aria-valuetext` vorgelesen.

<!--
### Keyboard interactions

### Required JavaScript features

## Accessibility concerns

## Best Practices

### Prefer HTML

## Examples
-->

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('hr')}} für einen thematischen Umbruch
- [Beispiel für einen Separator in einer Menüleiste](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)
