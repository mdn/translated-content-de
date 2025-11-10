---
title: "ARIA: link Rolle"
short-title: link
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

Ein `link`-Widget bietet einen interaktiven Verweis auf eine Ressource. Die Zielressource kann entweder extern oder lokal sein, d.h. entweder außerhalb oder innerhalb der aktuellen Seite oder Anwendung.

> [!NOTE]
> Wenn möglich, wird empfohlen, dass Sie ein natives {{HTMLElement("a")}}-Element anstelle der `link`-Rolle verwenden, da native Elemente von Benutzeragenten und unterstützender Technologie breiter unterstützt werden. Native {{HTMLElement("a")}}-Elemente unterstützen Tastatur- und Fokusanforderungen standardmäßig, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die `link`-Rolle wird verwendet, um ein Element zu identifizieren, das einen Hyperlink zu einer Ressource im Anwendungskontext oder extern erstellt.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen neu implementiert werden. Zum Beispiel sollte, wenn `role="link"` einem Element hinzugefügt wird, die <kbd>Tab</kbd>-Taste das Fokussieren des Links ermöglichen und die <kbd>Enter</kbd>-Taste sollte den Link ausführen, wenn er fokussiert ist.

Verwenden Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut mit einem Wert von `0`, um sicherzustellen, dass der Link in der richtigen Tab-Fokus-Reihenfolge ist.

> [!WARNING]
> Das Anwenden der `link`-Rolle auf ein Element führt nicht dazu, dass Browser das Element mit dem Standardaussehen oder -verhalten von Links verbessern, wie z.B. Unterstreichungen, Fokusringe, Navigation zum Linkziel oder Kontextmenüaktionen. Dafür ist der Entwickler verantwortlich.

## Beispiele

Um einen barrierefreien Link mit der `link`-Rolle auf einem Element zu erstellen, das kein {{HTMLElement('a')}} ist, müssen Sie sicherstellen, dass der Link im korrekten Tabulatorfokus erreichbar ist, dass das Element wie ein Link aussieht und dass das "link" wie ein Link funktioniert.

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

for (const link of fakeLinks) {
  link.addEventListener("click", navigateLink);
  link.addEventListener("keydown", navigateLink);
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

Wenn das Element mit `role="link"` ein <kbd>Enter</kbd>-Ereignis erhält, wird der Link ausgeführt, es wird zur verlinkten Seite navigiert oder der Fokus auf das Ziel innerhalb der Seite verschoben.

Optional öffnet <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link.

## Beste Praktiken

Die verschiedenen Widget-Rollen werden verwendet, um gängige interaktive Muster zu definieren. Ähnlich wie bei den Dokumentstruktur-Rollen duplizieren einige dieser Rollen, einschließlich der `link`-Rolle, die Semantik von gut unterstützten nativen HTML-Elementen und sollten nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`, das wir der Vollständigkeit halber aufgenommen haben. Die semantische Entsprechung mit zugänglicher Interaktivität ist als {{HTMLElement('a')}}-Element verfügbar und unterstützt.

### Bevorzugen Sie HTML

Verwenden Sie stattdessen das {{HTMLElement('a')}}-Element.

> [!NOTE]
> Es ist nicht erforderlich, `role="link"` auf einem HTML-Link einzuschließen, da `<a>` standardmäßig bereits diese Rolle hat.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('a')}}-Element
- Das {{HTMLElement('button')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [ARIA-Praktiken `link`-Rollenbeispiele](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
