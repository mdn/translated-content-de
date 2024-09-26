---
title: "ARIA: Link-Rolle"
slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein `link`-Widget bietet eine interaktive Referenz zu einer Ressource. Die Ziellösung kann entweder extern oder lokal sein, das heißt, entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wann immer möglich, wird empfohlen, anstelle der `link`-Rolle ein natives {{HTMLElement("a")}}-Element zu verwenden, da native Elemente von Benutzeragenten und unterstützenden Technologien breiter unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen auch standardmäßig Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource erstellt, die in der Anwendung oder extern ist.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Beispielsweise sollte bei hinzugefügter `role="link"` zu einem Element die <kbd>Tab</kbd>-Taste das Fokussieren des Links ermöglichen und die <kbd>Eingabetaste</kbd> soll den Link ausführen, wenn er fokussiert ist.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut mit dem Wert `0`, um sicherzustellen, dass der Link in der richtigen Tabulatorfokus-Reihenfolge ist.

> [!WARNING]
> Durch das Anwenden der `link`-Rolle auf ein Element wird der Browser das Element nicht mit dem standardmäßigen Link-Erscheinungsbild oder -Verhalten verbessern, wie z.B. Unterstreichung, Fokusrahmen, Navigation zum Linkziel oder Kontextmenüaktionen. Das ist die Verantwortung des Entwicklers.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element, das kein {{HTMLElement('a')}} ist, zu erstellen, müssen Sie sicherstellen, dass der Link im richtigen Tabulatorfokus-Fokusreihenfolge empfangen wird, dass das Element wie ein Link aussieht und dass der "Link" sich wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein <kbd>Eingabetaste</kbd>-Tastenereignis erhält, wird der Link ausgeführt, indem zur verlinkten Seite navigiert oder der Fokus auf das Ziel innerhalb der Seite verschoben wird.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Best Practices

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie die Dokumentstruktur-Rollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik nativer HTML-Elemente, die gut unterstützt werden und nicht verwendet werden sollten.

Vermeiden Sie die Verwendung von `link`, das wir der Vollständigkeit halber aufgenommen haben. Das semantische Äquivalent {{HTMLElement('a')}} mit barrierefreier Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es ist nicht nötig, `role="link"` in einen HTML-Link einzufügen, da das `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)