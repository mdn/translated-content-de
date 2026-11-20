---
title: "ARIA: link-Rolle"
short-title: link
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein Widget mit der Rolle `link` stellt einen interaktiven Verweis auf eine Ressource bereit. Die Zielressource kann extern oder lokal sein, sich also außerhalb oder innerhalb der aktuellen Seite oder Anwendung befinden.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein natives {{HTMLElement("a")}}-Element statt der Rolle `link`. Native Elemente werden von User Agents und assistiven Technologien umfassender unterstützt. Außerdem erfüllen native {{HTMLElement("a")}}-Elemente die Anforderungen an Tastaturbedienung und Fokussierung standardmäßig, ohne dass zusätzliche Anpassungen erforderlich sind.

## Beschreibung

Die Rolle `link` kennzeichnet ein Element, das einen Hyperlink zu einer Ressource innerhalb oder außerhalb der Anwendung erstellt.

Wenn semantisches HTML nicht für den vorgesehenen Zweck verwendet wird, müssen interaktive Funktionen erneut implementiert werden. Wenn beispielsweise einem Element `role="link"` hinzugefügt wird, sollte es mit der <kbd>Tabulatortaste</kbd> fokussiert und der Link im fokussierten Zustand mit der <kbd>Eingabetaste</kbd> aktiviert werden können.

Verwenden Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) mit dem Wert `0`, damit der Link in der richtigen Tabulatorreihenfolge fokussiert wird.

> [!WARNING]
> Wenn Sie einem Element die Rolle `link` zuweisen, erhält es dadurch nicht automatisch das übliche Erscheinungsbild oder Verhalten eines Links. Dazu gehören etwa die Unterstreichung, ein sichtbarer Fokusindikator, die Navigation zum Linkziel und Aktionen im Kontextmenü. Dafür sind die Entwickler verantwortlich.

## Bewährte Vorgehensweisen

Die verschiedenen Widget-Rollen dienen dazu, gängige interaktive Muster zu definieren. Ähnlich wie die Rollen für die Dokumentstruktur bilden einige dieser Rollen, darunter `link`, die Semantik gut unterstützter nativer HTML-Elemente nach und sollten daher nicht verwendet werden.

Vermeiden Sie die Verwendung von `link`; die Rolle ist hier nur der Vollständigkeit halber aufgeführt. Mit {{HTMLElement('a')}} steht ein unterstütztes semantisches Äquivalent mit barrierefreier Interaktivität zur Verfügung.

### HTML bevorzugen

Verwenden Sie stattdessen {{HTMLElement('a')}}.

> [!NOTE]
> Sie müssen einem HTML-Link kein `role="link"` hinzufügen, da `<a>` diese Rolle bereits standardmäßig hat.

## Beispiele

Um mit der Rolle `link` auf einem Element, das kein {{HTMLElement('a')}}-Element ist, einen barrierefreien Link nachzubilden, müssen Sie sicherstellen, dass der Link an der richtigen Stelle in der Tabulatorreihenfolge fokussiert wird, wie ein Link aussieht und sich wie ein Link verhält.

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

Wenn das Element mit `role="link"` ein Tastaturereignis für <kbd>Enter</kbd> empfängt, wird der Link aktiviert: Die verlinkte Seite wird aufgerufen oder der Fokus zum Ziel innerhalb der Seite verschoben.

Optional kann <kbd>Shift</kbd> + <kbd>F10</kbd> ein Kontextmenü für den Link öffnen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('a')}}
- Das Element {{HTMLElement('button')}}
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [Beispiele für die Rolle `link` in den ARIA-Praktiken](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
