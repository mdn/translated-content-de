---
title: "ARIA: link Rolle"
slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Ein `link`-Widget bietet eine interaktive Referenz zu einer Ressource. Die Zielressource kann entweder extern oder lokal sein, das heißt, entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wenn möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element anstelle der `link`-Rolle zu verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden. Natives {{HTMLElement("a")}}-Elemente unterstützen zudem von Haus aus Tastatur- und Fokusanforderungen, ohne dass zusätzliche Anpassungen nötig sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource innerhalb der Anwendung oder extern erstellt.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel sollte, wenn `role="link"` zu einem Element hinzugefügt wird, die <kbd>Tab</kbd>-Taste den Fokus auf den Link ermöglichen und die <kbd>Enter</kbd>-Taste den Link beim Fokussieren ausführen.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der richtigen Tabulator-Reihenfolge fokussiert wird.

> [!WARNING]
> Die Anwendung der `link`-Rolle auf ein Element wird nicht dazu führen, dass Browser das Element mit standardmäßiger Link-Darstellung oder -Verhalten verbessern, wie Unterstreichung, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen. Das liegt in der Verantwortung des Entwicklers.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element, das kein {{HTMLElement('a')}} ist, nachzubilden, müssen Sie sicherstellen, dass der Link in der richtigen Tab-Reihenfolge fokussiert wird, das Element wie ein Link aussieht und sich der "Link" wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Tastenevent erhält, wird der Link ausgeführt, indem zur verlinkten Seite navigiert oder der Fokus auf das Ziel innerhalb der Seite verschoben wird.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie bei den Dokumentstrukturrrollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von nativen HTML-Elementen, die gut unterstützt werden, und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir der Vollständigkeit halber eingeschlossen haben. Das semantische Äquivalent mit zugänglicher Interaktivität ist über das {{HTMLElement('a')}}-Element verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}-Element.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` in einem HTML-Link zu enthalten, da das `<a>` standardmäßig bereits diese Rolle besitzt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA-Praktiken `link` Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
