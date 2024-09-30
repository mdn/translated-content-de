---
title: "ARIA: link Rolle"
slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d. h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("a")}} Element zu verwenden, anstatt die `link`-Rolle, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen auch standardmäßig Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource erstellt, die sich in der Anwendung oder extern befindet.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel sollte, wenn `role="link"` zu einem Element hinzugefügt wird, die <kbd>tab</kbd>-Taste es ermöglichen, den Fokus auf den Link zu legen, und die <kbd>enter</kbd>-Taste sollte den Link ausführen, wenn der Fokus darauf liegt.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der richtigen Tab-Fokus-Reihenfolge ist.

> [!WARNING]
> Das Anwenden der `link`-Rolle auf ein Element führt nicht dazu, dass Browser das Element mit Standard-Link-Erscheinungsbild oder -Verhalten, wie Unterstreichen, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen, verbessern. Das ist die Verantwortung des Entwicklers.

## Beispiele

Um einen zugänglichen Link unter Verwendung der `link`-Rolle auf einem Element zu erstellen, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link im richtigen Tab-Fokus empfangen wird, das Element wie ein Link aussieht und dass der „Link“ sich wie ein Link verhält.

```html
<span data-href="https://mozilla.org" tabindex="0" role="link">
  Fake accessible link created using a span
</span>
```

### CSS

```css
span[role="link"] {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
span[role="link"]:hover,
span[role="link"]:active,
span[role="link"]:focus {
  color: purple;
}

span[role="link"]:focus {
  background-color: palegoldenrod;
  outline: 1px dotted;
}
```

### JavaScript

```js
const fakeLinks = document.querySelectorAll('[role="link"]');

for (let i = 0; i < fakeLinks.length; i++) {
  fakeLinks[i].addEventListener("click", navigateLink);
  fakeLinks[i].addEventListener("keydown", navigateLink);
}

//handles clicks and keydowns on the link
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}
```

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Taste-Ereignis empfängt, wird der Link ausgeführt, indem zur verlinkten Seite navigiert oder der Fokus zum Ziel auf der Seite verschoben wird.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich den Dokumentstrukturrollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik nativer HTML-Elemente, die gut unterstützt werden, und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir für die Vollständigkeit aufgenommen haben. Das semantische Äquivalent {{HTMLElement('a')}} mit barrierefreier Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` auf einem HTML-Link einzuschließen, da das `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA practices `link` role examples](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
