---
title: "Element: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Element/startViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`startViewTransition()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle startet eine neue, auf dasselbe Dokument beschränkte ([SPA](/de/docs/Glossary/SPA)) [element-spezifische](/de/docs/Web/API/View_Transition_API/Using_element-scoped) [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um dieses zu repräsentieren.

Die Abfolge der Schritte, die beim Aufruf von `startViewTransition()` verfolgt werden, wird im Abschnitt [der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, um den DOM-Baum des Elements während des SPA-Ansichtsübergangsprozesses zu aktualisieren. Sie gibt ein {{jsxref("Promise")}} zurück. Der Callback wird aufgerufen, sobald die API eine Momentaufnahme der aktuellen Seite erstellt hat. Wenn das von dem Callback zurückgegebene Promise erfüllt wird, beginnt der Ansichtsübergang im nächsten Frame. Wenn das von dem Callback zurückgegebene Promise abgelehnt wird, wird der Übergang abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration des Ansichtsübergangs enthält. Es kann die folgenden Eigenschaften beinhalten:
    - `update` {{optional_inline}}
      - : Die gleiche `updateCallback` Funktion, wie oben beschrieben. Standardmäßig `null`.
    - `types` {{optional_inline}}
      - : Ein Array aus Strings, die die auf den Ansichtsübergang angewendeten Typen darstellen. [Ansichtsübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen die selektive Anwendung von CSS-Styles oder JavaScript-Logik basierend auf dem Typ des Übergangs, der stattfindet. Standardmäßig ein leeres Array.

### Rückgabewert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz.

## Beschreibung

Der Aufruf von `Element.startViewTransition()` auf einem Element erstellt einen Ansichtsübergang, der auf den DOM-Unterbaum dieses Elements beschränkt ist. Alle DOM-Änderungen, die im `startViewTransition()` Callback durchgeführt werden, werden nur dann überführt, wenn diese Updates innerhalb des DOM-Unterbaums des aufrufenden Elements stattfinden. Das Element wird als **Wurzel** des Ansichtsübergangs bezeichnet und der DOM-Unterbaum als **Bereich** des Ansichtsübergangs.

Der [Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) eines element-spezifischen Ansichtsübergangs wird im Übergangswurzelelement platziert, wie im folgenden Beispiel gezeigt, bei dem ein Ansichtsübergang auf einem Link ausgeführt wird:

```plain
<a href="#">
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  |
  |
  "Link text"
</a>
```

Element-spezifische Ansichtsübergänge haben viele Vorteile gegenüber ihren dokumentbezogenen Gegenstücken:

- Sie können mehr als einen gleichzeitig ausführen.
- Während der Ausführung ist nur der Bereich des Ansichtsübergangs nicht interaktiv, bis der Übergang abgeschlossen ist; der Rest der Seite bleibt interaktiv. Dokumentenbezogene Ansichtsübergänge machen die gesamte Seite bis zum Abschluss des Übergangs nicht interaktiv.
- Der Übergangs-Pseudoelement-Baum sitzt nur über dem Elementbereich, nicht über der gesamten Seite, was bedeutet, dass Sie nicht dieselben Probleme mit gestapelten Elementen haben, die unter dem aktualisierten Teil der Seite verschwinden, wenn eine dokumentbezogene Übergangsanimation startet.
- Wenn der Inhalt des Bereichs mit {{cssxref("overflow")}} abgeschnitten wird, bleibt er auch während eines Ansichtsübergangs abgeschnitten. Dokumentenbezogene Ansichtsübergänge breiten sich aus Schnittbehältern aus, da ihre Pseudoelement-Bäume über der gesamten Seite gezeichnet werden.

## Beispiele

Siehe [Verwendung von element-spezifischen Ansichtsübergängen](/de/docs/Web/API/View_Transition_API/Using_element-scoped) für weitere Beispiele.

### Animation einer Diashow

Dies ist ein einfaches Beispiel für die Verwendung eines element-spezifischen Ansichtsübergangs, um die DOM-Änderungen einer Diashow sanft zu animieren, wenn ein Button geklickt wird.

#### HTML

Das HTML enthält ein {{htmlelement("section")}} Element, um die Diashow darzustellen, einen {{htmlelement("button")}}, der gedrückt wird, um den Diainhalt zu ändern, und einige umgebende {{htmlelement("p")}} Inhalte.

```html live-sample___basic_usage
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>
<section>Slide 1</section>
<button>Update slide</button>
<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

#### CSS

Das CSS verwendet [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um den Inhalt der Folie zu zentrieren und legt die {{cssxref("animation-duration")}} des Ansichtsübergangs auf `1s` über das {{CSSXRef("::view-transition-group")}} Pseudoelement fest.

```css hidden live-sample___basic_usage
html {
  font-family: sans-serif;
}
section {
  height: 200px;
  font-size: 2rem;
  background-color: green;
}
button {
  position: absolute;
  top: 5px;
  right: 5px;
}
```

```css live-sample___basic_usage
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 1s;
}
```

#### JavaScript

Das Skript beginnt mit dem Abrufen von Referenzen zu den `<section>` und `<button>` Elementen und fügt einen `click`-Ereignislistener zu dem Button hinzu.

```js live-sample___basic_usage
const slide = document.querySelector("section");
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
```

Anschließend definieren wir eine Funktion namens `updateSlide()`, die den Inhalt und die Hintergrundfarbe der Folie zwischen zwei Wertemengen umschaltet.

```js live-sample___basic_usage
function updateSlide() {
  if (slide.textContent === "Slide 1") {
    slide.textContent = "Slide 2";
    slide.style.backgroundColor = "orange";
  } else {
    slide.textContent = "Slide 1";
    slide.style.backgroundColor = "green";
  }
}
```

Schließlich definieren wir die Ereignishandler-Funktion, `handleClick()`. Wenn der Button angeklickt wird, überprüfen wir zuerst, ob `Element.startViewTransition()` existiert, und falls nicht, führen wir einfach die `updateSlide()` Funktion aus und `return`. Dies stellt sicher, dass das Update auch in nicht unterstützenden Browsern funktioniert, wenn auch ohne die Animation. Wenn `Element.startViewTransition()` unterstützt wird, rufen wir es auf dem `<section>` Element auf und rufen `updateSlide()` innerhalb des Callbacks auf.

```js live-sample___basic_usage
function handleClick() {
  if (!slide.startViewTransition) {
    updateSlide();
    return;
  }

  const transition = slide.startViewTransition(() => {
    updateSlide();
  });
}
```

#### Ergebnis

{{EmbedLiveSample("basic_usage", "100%", "340")}}

Klicken Sie auf den "Update slide"-Button, um das Slide-Element DOM zu aktualisieren und den Ansichtsübergang zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition)
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudoklasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudoklasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtsübergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Verwendung von element-spezifischen Ansichtsübergängen](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
