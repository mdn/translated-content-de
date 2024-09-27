---
title: "ARIA: link Rolle"
slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d. h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wo möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element anstelle der `link` Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen auch standardmäßig Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link` Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource innerhalb der Anwendung oder extern erstellt.

Wenn semantisches HTML nicht für den beabsichtigten Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel, wenn `role="link"` zu einem Element hinzugefügt wird, sollte die <kbd>Tab</kbd>-Taste es ermöglichen, den Fokus auf den Link zu legen, und die <kbd>Eingabetaste</kbd> sollte den Link ausführen, wenn er fokussiert ist.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der richtigen Tab-Reihenfolge fokussiert wird.

> [!WARNING]
> Das Anwenden der `link` Rolle auf ein Element führt nicht dazu, dass Browser das Element mit dem Standardlink-Aussehen oder -Verhalten versehen, wie z. B. Unterstreichungen, Fokusrahmen, Navigation zum Linkziel oder Aktionen im Kontextmenü. Das liegt in der Verantwortung des Entwicklers.

## Beispiele

Um einen zugänglichen Link mit der `link` Rolle auf einem Element zu erstellen, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link im richtigen Tab-Fokus aufgenommen wird, dass das Element wie ein Link aussieht und dass der "Link" sich wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein <kbd>Eingabetaste</kbd>-Tastenereignis erhält, wird der Link ausgeführt, indem zur verlinkten Seite navigiert oder der Fokus auf das In-Seiten-Ziel verschoben wird.

Optional öffnet <kbd>Umschalt</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie die Dokumentstruktur-Rollen duplizieren einige dieser Rollen, einschließlich der `link` Rolle, die Semantik von nativen HTML-Elementen, die gut unterstützt werden, und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir zur Vollständigkeit aufgenommen haben. Das {{HTMLElement('a')}} semantische Äquivalent mit zugänglicher Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` auf einen HTML-Link einzuschließen, da das `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}} Element
- Das {{HTMLElement('button')}} Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA-Praktiken `link` Rollen-Beispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
