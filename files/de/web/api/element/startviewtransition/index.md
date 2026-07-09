---
title: "Element: startViewTransition() Methode"
short-title: startViewTransition()
slug: Web/API/Element/startViewTransition
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

Die **`startViewTransition()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle startet eine neue gleiche Dokument ({{Glossary("SPA", "SPA")}}) [element-bezogene](/de/docs/Web/API/View_Transition_API/Using_element-scoped) [Ansichtstransition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um sie darzustellen.

Die Abfolge der Schritte, die ausgeführt werden, wenn `startViewTransition()` aufgerufen wird, wird im Abschnitt [der Ansichtstransitionsprozess](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_process) erklärt.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameter

- `updateCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, um den DOM-Baum des Elements während des SPA-Ansichtstransitionsprozesses zu aktualisieren. Sie gibt ein {{jsxref("Promise")}} zurück. Der Callback wird aufgerufen, sobald die API einen Schnappschuss der aktuellen Seite gemacht hat. Wenn das durch den Callback zurückgegebene Versprechen erfüllt wird, beginnt die Ansichtstransition im nächsten Frame. Wenn das Versprechen abgelehnt wird, wird die Transition abgebrochen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration der Ansichtstransition enthält. Es kann die folgenden Eigenschaften beinhalten:
    - `update` {{optional_inline}}
      - : Die gleiche `updateCallback` Funktion, die oben beschrieben wurde. Standardwert ist `null`.
    - `types` {{optional_inline}}
      - : Ein Array von Zeichenketten, die die auf die Ansichtstransition angewendeten Typen repräsentieren. [Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types) ermöglichen die selektive Anwendung von CSS-Stilen oder JavaScript-Logik basierend auf dem Typ der auftretenden Transition. Standardwert ist ein leeres Array.

### Rückgabewert

Eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz.

## Beschreibung

Das Aufrufen von `Element.startViewTransition()` auf einem Element erzeugt eine Ansichtstransition, die auf den DOM-Teilbaum dieses Elements beschränkt ist. Alle DOM-Änderungen, die innerhalb des `startViewTransition()` Callbacks vorgenommen werden, werden nur übergehen, wenn diese Aktualisierungen innerhalb des DOM-Teilbaums des aufrufenden Elements stattfinden. Das Element wird als **Wurzel** der Ansichtstransition bezeichnet, und der DOM-Teilbaum wird als **Bereich** der Ansichtstransition bezeichnet.

Der [Pseudo-Elementbaum](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) einer element-bezogenen Ansichtstransition wird innerhalb des Wurzelelements der Transition platziert, wie im folgenden Beispiel gezeigt, in dem eine Ansichtstransition auf einem Link läuft:

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

Element-bezogene Ansichtstransitionen haben viele Vorteile gegenüber ihren dokumentenbezogenen Gegenstücken:

- Man kann mehrere gleichzeitig ausführen.
- Während der Ausführung wird nur der Bereich der Ansichtstransition nicht interaktiv, bis die Transition abgeschlossen ist; der Rest der Seite bleibt interaktiv. Dokumentenbezogene Ansichtstransitionen machen die gesamte Seite nicht interaktiv, bis die Transition abgeschlossen ist.
- Der Pseudo-Elementbaum der Transition überlagert nur den Bereich des Elements und nicht die gesamte Seite, was bedeutet, dass man nicht die gleichen Probleme mit überlagerten Elementen hat, die unter dem aktualisierenden Teil der Seite verschwinden, wenn eine dokumentenbezogene Transitionsanimation beginnt.
- Wenn der Inhalt des Bereichs mit {{cssxref("overflow")}} abgeschnitten wird, bleibt er während einer Ansichtstransition abgeschnitten. Dokumentenbezogene Ansichtstransitionen überschreiten die Grenzen klippender Container, da ihre Pseudo-Elementbäume über die gesamte Seite gezeichnet werden.

## Beispiele

Siehe [Verwendung von element-bezogenen Ansichtstransitionen](/de/docs/Web/API/View_Transition_API/Using_element-scoped) für mehr Beispiele.

### Animation einer Slideshow

Dies ist ein einfaches Beispiel für die Verwendung einer element-bezogenen Ansichtstransition, um DOM-Änderungen an einer Slideshow sanft zu animieren, wenn ein Button geklickt wird.

#### HTML

Das HTML beinhaltet ein {{htmlelement("section")}} Element, das die Slideshow darstellt, einen {{htmlelement("button")}}, der gedrückt wird, um den Folieninhalt zu ändern, und einige umgebende {{htmlelement("p")}}-Inhalte.

```html live-sample___basic_usage
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
</p>
<section>Slide 1</section>
<button>Update slide</button>
<p>
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

#### CSS

Das CSS verwendet [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um den Inhalt der Folie zu zentrieren, und setzt die {{cssxref("animation-duration")}} der Ansichtstransition auf `1s` über das {{CSSXRef("::view-transition-group")}} Pseudo-Element.

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

Das Script beginnt damit, Referenzen zu den `<section>` und `<button>` Elementen zu holen und einen `click`-Eventlistener zum Button hinzuzufügen.

```js live-sample___basic_usage
const slide = document.querySelector("section");
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
```

Als nächstes definieren wir eine Funktion namens `updateSlide()`, die den Inhalt und die Hintergrundfarbe der Folie zwischen zwei Wertesets umschaltet.

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

Schließlich definieren wir die Event-Handler Funktion, `handleClick()`. Wenn der Button geklickt wird, prüfen wir zuerst, ob `Element.startViewTransition()` existiert, und wenn nicht, führen wir einfach die Funktion `updateSlide()` aus und `return`. Dies stellt sicher, dass die Aktualisierung auch in nicht unterstützenden Browsern funktioniert, jedoch ohne die Animation. Wenn `Element.startViewTransition()` unterstützt wird, rufen wir sie auf das `<section>` Element auf und rufen `updateSlide()` innerhalb ihres Callbacks auf.

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

Klicken Sie den "Slide aktualisieren" Button, um das Slide-Element DOM zu aktualisieren und sehen Sie die Ansichtstransition.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition)
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
- {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} Pseudo-Klasse
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Verwendung von element-bezogenen Ansichtstransitionen](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
