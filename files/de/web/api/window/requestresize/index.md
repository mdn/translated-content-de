---
title: "Window: requestResize() Methode"
short-title: requestResize()
slug: Web/API/Window/requestResize
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{APIRef}}{{SeeCompatTable}}

Die **`requestResize()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces aktualisiert die Größeninformationen, die von einem eingebetteten Dokument mit seinem einbettenden Elternteil geteilt werden. Dies erfolgt jedoch nur, wenn das eingebettete Dokument zugestimmt hat, seine Größeninformationen über das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)-Meta-Tag zu teilen.

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
    - Die Methode `requestResize()` von einem Top-Level-Dokument (nicht eingebettet) aufgerufen wurde.
    - Das eingebettete Element kein {{htmlelement("iframe")}} ist.
    - Das eingebettete Dokument nicht zugestimmt hat, seine Layout-Größe durch Einfügen eines [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)-Tags zu teilen.

> [!NOTE]
> Wenn das Eltern-Dokument die {{cssxref("frame-sizing")}} CSS-Eigenschaft auf dem einbettenden `<iframe>` nicht setzt, wird keine Ausnahme ausgelöst, aber das `<iframe>` wird nicht in der Größe angepasst.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen offenbaren {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des Inhalts, den sie einbetten, an das übergeordnete Dokument.

Um eine responsive Größenanpassung von `<iframe>`-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)-Tag in ein eingebettetes Dokument aufgenommen werden, um es in die Freigabe seiner Größeninformationen mit dem übergeordneten Dokument einzubeziehen. Die {{cssxref("frame-sizing")}} CSS-Eigenschaft kann anschließend auf das `<iframe>` gesetzt werden, wodurch es die gleiche horizontale oder vertikale Größe wie die tatsächliche Layout-Größe des eingebetteten Dokuments annimmt (in der Spezifikation als **interne Layout-Intrinsic-Größe** bezeichnet). Dies stellt sicher, dass der Dokumentinhalt nahtlos in das einbettende `<iframe>` passt und unnötige Scrollleisten vermieden werden.

Die Layout-Größe des eingebetteten Dokuments wird automatisch einmal gemeldet, wenn sein [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird, und erneut, wenn das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des [`Window`](/de/docs/Web/API/Window)-Objekts ausgelöst wird.

In anderen Fällen kann die [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)-Methode aus dem eingebetteten Dokument aufgerufen werden, um eine aktualisierte Layout-Größe zu melden; dies wird typischerweise von einem Event-Handler aus gemacht, der das eingebettete Element veranlasst hat, die Größe zu ändern. Wenn das `<iframe>` mit `frame-sizing` dimensioniert ist, wird es seine Größe automatisch aktualisieren, sodass es weiterhin den eingebetteten Inhalt sauber enthält.

## Beispiele

### Verwendung von `requestResize()`

Dieses Beispiel zeigt, wie die `requestResize()`-Methode verwendet werden kann, um ein `<iframe>` automatisch in der Größe anzupassen, wenn sich die Layout-Größe seines eingebetteten Dokumentinhalts ändert.

Wir haben zwei Dokumente, das Hauptdokument `index.html` und das eingebettete Dokument `frame.html`.

#### Das Hauptdokument `index.html`

Das HTML des `index.html`-Dokuments enthält eine Überschrift und ein `<iframe>`, in das das `frame.html`-Dokument eingebettet ist:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

Im CSS von `index.html` geben wir dem `<iframe>` einen `frame-sizing`-Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird seine `Höhe` auf die Layout-Höhe des eingebetteten Dokuments gesetzt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete `frame.html`

Das `frame.html`-Dokument enthält ein {{htmlelement("div")}}-Element mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0`, damit es fokussierbar ist. Es enthält eine Überschrift und einige Absätze. Das Dokument enthält auch das `<meta name="responsive-embedded-sizing" />`-Tag, das es zur Teilung seiner Inhalts-Layout-Größe mit dem übergeordneten Dokument berechtigt. Schließlich fügen wir ein {{htmlelement("script")}}-Element mit etwas JavaScript zur Steuerung der Demo ein.

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

Das Skript innerhalb von `frame.html` beginnt mit dem Erfassen einer Referenz zum `<div>`-Element. Dann setzt es Event-Listener für `click` und `keydown` auf das `<div>`, die beide eine benutzerdefinierte Funktion namens `addParagraph()` ausführen, wenn das Ereignis ausgelöst wird.

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", addParagraph);
window.addEventListener("keydown", addParagraph);
```

Die Funktion `addParagraph()` erzeugt ein neues Absatz-Element und hängt es als Kind an das Ende des `<div>` an, wodurch seine Höhe erhöht wird. Dann ruft es `requestResize()` auf, damit die neue Größe dem übergeordneten Dokument gemeldet wird.

```js
function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "New content.";
  divElem.appendChild(para);
  window.requestResize();
}
```

#### Ergebnis

Öffnen Sie unsere [`requestResize()`-Demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/) in einem separaten Tab, um sie in Aktion zu sehen ([sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize)).

Obwohl keine explizite `Höhe` auf dem `<iframe>` gesetzt wurde, ist es so dimensioniert, dass es genau sein eingebettetes Dokument ohne Scrollleisten enthält. Versuchen Sie, auf den Inhalt zu klicken oder ihn zu fokussieren und eine Taste auf der Tastatur zu drücken. Wenn ein neuer Absatz zum `<div>` hinzugefügt wird, wächst das `<div>` in seiner Höhe, aber das `<iframe>` wächst auch in der Höhe, um es anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("frame-sizing")}} CSS-Eigenschaft
- [CSS Box Sizing](/de/docs/Web/CSS/Guides/Box_sizing)-Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
