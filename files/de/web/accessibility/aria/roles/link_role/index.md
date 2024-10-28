---
title: "ARIA: link-Rolle"
slug: Web/Accessibility/ARIA/Roles/link_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d.h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wo immer möglich, wird empfohlen, ein natives {{HTMLElement("a")}}-Element statt der `link`-Rolle zu verwenden, da native Elemente breiter von Benutzeragenten und unterstützender Technologie unterstützt werden. Nativen {{HTMLElement("a")}}-Elementen sind auch standardmäßig Tastatur- und Fokusanforderungen zugewiesen, ohne dass eine zusätzliche Anpassung erforderlich ist.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource innerhalb der Anwendung oder extern erstellt.

Wenn semantisches HTML nicht für den beabsichtigten Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel sollte beim Hinzufügen von `role="link"` zu einem Element die <kbd>Tabulatortaste</kbd> es ermöglichen, den Fokus auf den Link zu setzen, und die <kbd>Eingabetaste</kbd> sollte den Link ausführen, wenn er fokussiert ist.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der korrekten Tab-Fokus-Reihenfolge ist.

> [!WARNING]
> Die Anwendung der `link`-Rolle auf ein Element führt nicht dazu, dass Browser das Element mit dem Standardlinkaussehen oder -verhalten verbessern, wie z.B. Unterstreichungen, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen. Dies liegt in der Verantwortung der Entwickler.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element zu erstellen, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link den Fokus in der korrekten Tab-Reihenfolge erhält, dass das Element wie ein Link aussieht, und dass der "Link" sich wie ein Link verhält.

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

Erhält das Element mit `role="link"` ein <kbd>Eingabetaste</kbd>-Ereignis, wird dieser Link ausgeführt, indem er zur verlinkten Seite wechselt oder den Fokus auf das Ziel in der Seite verlagert.

Optional öffnet <kbd>Umschalt</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich den Dokumentstrukturrollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von gut unterstützten nativen HTML-Elementen und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir der Vollständigkeit halber aufgenommen haben. Der semantische Äquivalent {{HTMLElement('a')}} mit zugänglicher Interaktivität ist verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}.

> [!NOTE]
> Es besteht keine Notwendigkeit, `role="link"` auf einem HTML-Link einzuschließen, da `<a>` diese Rolle bereits standardmäßig hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
