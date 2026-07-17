---
title: "Window: requestResize() Methode"
short-title: requestResize()
slug: Web/API/Window/requestResize
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

{{APIRef}}

Die **`requestResize()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle aktualisiert die Größeninformationen, die von einem eingebetteten Dokument mit seinem einbettenden Elternteil geteilt werden, aber nur, wenn das eingebettete Dokument sich entschieden hat, seine Größeninformationen über das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Meta-Tag zu teilen.

## Syntax

```js-nolint
requestResize()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `requestResize()` Methode von einem Top-Level-Dokument (nicht eingebettet) aufgerufen wurde.
    - Das einbettende Element kein {{htmlelement("iframe")}} ist.
    - Das eingebettete Dokument sich nicht für die Freigabe seiner Layoutgröße entschieden hat, indem ein [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Tag eingefügt wurde.

> [!NOTE]
> Wenn das übergeordnete Dokument die {{cssxref("frame-sizing")}} CSS-Eigenschaft nicht auf dem einbettenden `<iframe>` setzt, wird keine Ausnahme ausgelöst, aber das `<iframe>` wird nicht angepasst.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des Inhalts im eingebetteten Dokument an das übergeordnete Dokument weiter.

Um eine responsive Größenänderung von `<iframe>`-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Tag in einem eingebetteten Dokument enthalten sein, um es zur Freigabe seiner Größeninformationen mit dem übergeordneten Dokument zu veranlassen. Die {{cssxref("frame-sizing")}} CSS-Eigenschaft kann dann auf dem `<iframe>` gesetzt werden, um es die gleiche horizontale oder vertikale Größe wie die tatsächliche Layoutgröße des eingebetteten Dokuments (in der Spezifikation als **interne Layout-Intrinsikgröße** bezeichnet) annehmen zu lassen. Dies stellt sicher, dass der Dokumentinhalt nahtlos in sein einbettendes `<iframe>` passt und unnötige Scrollbalken vermieden werden.

Die Layoutgröße des eingebetteten Dokuments wird automatisch einmal gemeldet, wenn das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird, und erneut, wenn das [`load`](/de/docs/Web/API/Window/load_event) Ereignis des [`Window`](/de/docs/Web/API/Window) Objekts ausgelöst wird.

In anderen Fällen können Sie die [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) Methode aus dem eingebetteten Dokument aufrufen, um eine aktualisierte Layoutgröße zu melden; dies wird typischerweise innerhalb des Ereignis-Handlers durchgeführt, der die Größenänderung des eingebetteten Inhalts verursacht hat. Wenn das `<iframe>` mit `frame-sizing` dimensioniert ist, wird es seine Größe automatisch aktualisieren, sodass es den eingebetteten Inhalt immer noch passgenau enthält.

## Beispiele

### Verwendung von `requestResize()`

Dieses Beispiel zeigt, wie die `requestResize()` Methode verwendet werden kann, um ein `<iframe>` automatisch zu vergrößern, wenn sich die Layoutgröße des eingebetteten Dokumentinhalts ändert.

Wir haben zwei Dokumente: das Hauptdokument `index.html` und das eingebettete Dokument `frame.html`.

#### Das Hauptdokument `index.html`

Das HTML des `index.html` Dokuments enthält eine Überschrift und ein `<iframe>`, in das das `frame.html` Dokument eingebettet ist:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

Im CSS von `index.html` geben wir dem `<iframe>` einen `frame-sizing` Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird seine `height` auf die Layout-Höhe des eingebetteten Dokuments eingestellt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete Dokument `frame.html`

Das `frame.html`-Dokument enthält ein {{htmlelement("div")}}-Element mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0`, sodass es fokussierbar ist. Es enthält eine Überschrift und einige Absätze. Das Dokument enthält auch das `<meta name="responsive-embedded-sizing" />` Tag, das es zur Freigabe seiner Inhaltslayoutgröße mit dem übergeordneten Dokument veranlasst. Schließlich fügen wir ein {{htmlelement("script")}}-Element ein, das JavaScript zur Steuerung der Demo enthält.

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <div tabindex="0">
    <h1>This is my frame</h1>
    <p>This is the content of my discontent.</p>
    <p>This is some more content.</p>
  </div>
  <script>
    ...
  </script>
</body>
```

Das Skript innerhalb von `frame.html` beginnt mit dem Abrufen eines Verweises auf das `<div>`-Element. Es setzt dann `click`- und `keydown`-Ereignis-Listener auf das `<div>`, die beide eine benutzerdefinierte Funktion namens `addParagraph()` ausführen, wenn das Ereignis eintritt.

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", addParagraph);
window.addEventListener("keydown", addParagraph);
```

Die `addParagraph()` Funktion generiert ein neues Absatz-Element und fügt es am Ende des `<div>` als Kind hinzu, wodurch dessen Höhe erhöht wird. Anschließend ruft es `requestResize()` auf, sodass die neue Größe an das übergeordnete Dokument gemeldet wird.

```js
function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "New content.";
  divElem.appendChild(para);
  window.requestResize();
}
```

#### Ergebnis

Öffnen Sie unsere [`requestResize()` Demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/) in einem separaten Tab, um sie in Aktion zu sehen ([sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize)).

Obwohl keine explizite `height` für das `<iframe>` festgelegt wurde, wird es auf die richtige Höhe eingestellt, um genau sein eingebettetes Dokument zu enthalten, ohne Scrollbalken. Versuchen Sie, auf den Inhalt zu klicken oder ihn zu fokussieren und eine Taste auf der Tastatur zu drücken. Jedes Mal, wenn ein neuer Absatz zum `<div>` hinzugefügt wird, wächst das `<div>` in der Höhe, aber das `<iframe>` wächst ebenfalls in der Höhe, um es entsprechend anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("frame-sizing")}} CSS-Eigenschaft
- [CSS Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
