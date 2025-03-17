---
title: "ARIA: link-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d.h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element anstelle der `link`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützenden Technologien besser unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen standardmäßig Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource im Anwendungsbereich oder extern erstellt.

Wenn semantisches HTML nicht für den beabsichtigten Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Wenn beispielsweise `role="link"` zu einem Element hinzugefügt wird, sollte die <kbd>Tabulator</kbd>-Taste die Möglichkeit bieten, den Fokus auf den Link zu setzen, und die <kbd>Eingabetaste</kbd> sollte den Link ausführen, wenn er im Fokus steht.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut mit dem Wert `0`, um sicherzustellen, dass der Link in der richtigen Tab-Fokusreihenfolge steht.

> [!WARNING]
> Das Anwenden der `link`-Rolle auf ein Element führt nicht dazu, dass Browser die standardmäßige Link-Darstellung oder -Verhaltensweisen wie Unterstreichen, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen verbessern. Dies ist die Verantwortung des Entwicklers.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element zu erstellen, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link in der richtigen Tab-Reihenfolge den Fokus erhält, das Element wie ein Link aussieht und sich der "Link" wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Tastenevent erhält, wird der Link ausgeführt, indem zur verlinkten Seite gesprungen oder der Fokus auf das Ziel auf der Seite gesetzt wird.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Best Practices

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie die Dokumentstruktur-Rollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von gut unterstützten nativen HTML-Elementen und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir der Vollständigkeit halber aufgenommen haben. Das semantische Äquivalent {{HTMLElement('a')}} mit zugänglicher Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es ist nicht notwendig, `role="link"` in einem HTML-Link zu verwenden, da `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
