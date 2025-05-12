---
title: "ARIA: link-Rolle"
short-title: link
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d.h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wo möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element anstelle der `link`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen auch standardmäßig Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource in der Anwendung oder extern erstellt.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel, wenn `role="link"` zu einem Element hinzugefügt wird, sollte die <kbd>Tab</kbd>-Taste es ermöglichen, dem Link den Fokus zu geben, und die <kbd>Enter</kbd>-Taste sollte den Link ausführen, wenn er fokussiert ist.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der richtigen Tab-Reihenfolge fokussiert wird.

> [!WARNING]
> Die Anwendung der `link`-Rolle auf ein Element wird keine Browser dazu veranlassen, das Element mit standardmäßigem Link-Aussehen oder -Verhalten wie Unterstreichungen, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen zu unterstützen. Das ist die Verantwortung des Entwicklers.

## Beispiele

Um einen zugänglichen Link mit der `link`-Rolle auf einem Element, das kein {{HTMLElement('a')}} ist, zu erstellen, müssen Sie sicherstellen, dass der Link in der richtigen Tab-Reihenfolge fokussiert wird, dass das Element wie ein Link aussieht und dass der "Link" sich wie ein Link verhält.

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

// handles click and keydown events on the link
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}
```

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Tastenevent erhält, wird der Link ausgeführt, indem zur verlinkten Seite gewechselt oder der Fokus auf das Ziel innerhalb der Seite verschoben wird.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie die Dokumentstruktur-Rollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von nativen HTML-Elementen, die gut unterstützt werden und nicht verwendet werden sollten.

Vermeiden Sie die Verwendung von `link`, die wir der Vollständigkeit halber aufgenommen haben. Das {{HTMLElement('a')}}-Semantik-Äquivalent mit zugänglicher Interaktivität ist verfügbar und unterstützt.

### HTML bevorzugen

Verwenden Sie das {{HTMLElement('a')}} stattdessen.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` in einen HTML-Link aufzunehmen, da das `<a>` standardmäßig diese Rolle bereits hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
