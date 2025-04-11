---
title: "ARIA: link Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d.h. sich außerhalb oder innerhalb der aktuellen Seite oder Anwendung befinden.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element anstelle der `link`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützenden Technologien weiter verbreitet unterstützt werden. Native {{HTMLElement("a")}}-Elemente erfüllen standardmäßig die Anforderungen an Tastatursteuerung und Fokus, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource innerhalb der Anwendung oder extern erstellt.

Wenn semantisches HTML nicht für seinen beabsichtigten Zweck genutzt wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel, wenn `role="link"` zu einem Element hinzugefügt wird, sollte die <kbd>Tab</kbd>-Taste es ermöglichen, dem Link Fokus zu geben, und die <kbd>Enter</kbd>-Taste sollte den Link ausführen, wenn der Fokus darauf liegt.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass sich der Link in der richtigen Tabulatorfokus-Reihenfolge befindet.

> [!WARNING]
> Das Anwenden der `link`-Rolle auf ein Element führt nicht dazu, dass Browser das Element mit standardmäßiger Link-Darstellung oder -Verhalten verbessern, wie Unterstreichen, Fokusring, Navigation zum Linkziel oder Kontextmenüaktionen. Das ist die Verantwortung des Entwicklers.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element nachzubilden, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link in der richtigen Tabulatorreihenfolge den Fokus erhält, dass das Element wie ein Link aussieht und dass der "Link" sich wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Tastenevent empfängt, wird der Link ausgeführt, es wird zur verlinkten Seite gewechselt oder der Fokus auf das Ziel innerhalb der Seite bewegt.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Best Practices

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie bei den Dokumentstrukturrrollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von nativen HTML-Elementen, die gut unterstützt werden und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, die wir der Vollständigkeit halber aufgenommen haben. Das {HTMLElement('a')}}-semantische Äquivalent mit zugänglicher Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` zu einem HTML-Link hinzuzufügen, da das `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
