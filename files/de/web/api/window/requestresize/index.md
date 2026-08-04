---
title: "Window: requestResize() Methode"
short-title: requestResize()
slug: Web/API/Window/requestResize
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef}}{{SeeCompatTable}}

Die **`requestResize()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces aktualisiert die Größeninformationen, die ein eingebettetes Dokument mit seinem übergeordneten eingebetteten Dokument teilt, jedoch nur, wenn das eingebettete Dokument sich entschieden hat, seine Größeninformationen über den [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Meta-Tag zu teilen.

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
    - Die `requestResize()` Methode von einem obersten (nicht eingebetteten) Dokument aufgerufen wurde.
    - Das eingebettete Element kein {{htmlelement("iframe")}} ist.
    - Das eingebettete Dokument sich nicht entschieden hat, seine Layoutgröße durch Einfügen eines [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Tags zu teilen.

> [!NOTE]
> Wenn das übergeordnete Dokument die CSS-Eigenschaft {{cssxref("frame-sizing")}} nicht auf das eingebettete `<iframe>` anwendet, wird keine Ausnahme ausgelöst, aber das `<iframe>` wird nicht angepasst.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen an das übergeordnete Dokument über die Größe des Inhalts des eingebetteten Dokuments weiter.

Um eine reaktionsfähige Größenanpassung von `<iframe>`-Elementen basierend auf ihrem Inhalt zu aktivieren, kann das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)-Tag in ein eingebettetes Dokument eingefügt werden, um zu ermöglichen, dass seine Größeninformationen mit dem übergeordneten Dokument geteilt werden. Die CSS-Eigenschaft {{cssxref("frame-sizing")}} kann dann auf das `<iframe>` angewendet werden, um es die gleiche horizontale oder vertikale Größe annehmen zu lassen wie die tatsächliche Layoutgröße des eingebetteten Dokuments (im Spezifikationsbegriff als **interne Layout-intrinsische Größe** bezeichnet). Dies sorgt dafür, dass der Dokumenteninhalt nahtlos in sein einbettendes `<iframe>` passt, wodurch unnötige Scrollleisten vermieden werden.

Die Layoutgröße des eingebetteten Dokuments wird automatisch einmal gemeldet, wenn das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird, und erneut, wenn das [`Window`](/de/docs/Web/API/Window)-Objekt das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis auslöst.

In anderen Fällen kann die `requestResize()` Methode aus dem eingebetteten Dokument aufgerufen werden, um eine aktualisierte Layoutgröße zu melden; dies geschieht typischerweise innerhalb des Ereignishandlers, der dazu führte, dass sich die eingebettete Größe des Inhalts ändert. Wenn das `<iframe>` mit `frame-sizing` dimensioniert wird, wird es dann automatisch seine Größe aktualisieren, um weiterhin den eingebetteten Inhalt ordentlich zu umfassen.

## Beispiele

### Verwendung von `requestResize()`

Dieses Beispiel zeigt, wie die `requestResize()` Methode verwendet werden kann, um ein `<iframe>` automatisch anzupassen, wenn sich die Layoutgröße des eingebetteten Dokumenteninhalts ändert.

Wir haben zwei Dokumente, das Hauptdokument `index.html` und das eingebettete Dokument `frame.html`.

#### Das Hauptdokument `index.html`

Das HTML des `index.html`-Dokuments enthält eine Überschrift und ein `<iframe>`, in das das Dokument `frame.html` eingebettet ist:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

Im CSS von `index.html` geben wir dem `<iframe>` einen `frame-sizing`-Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird seine `height` auf die Layout-Höhe des eingebetteten Dokuments gesetzt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete `frame.html`

Das `frame.html`-Dokument enthält ein {{htmlelement("div")}}-Element mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0`, damit es fokussierbar ist. Es enthält eine Überschrift und einige Absätze. Das Dokument enthält auch den `<meta name="responsive-embedded-sizing" />`-Tag, der es dazu befähigt, seine Inhalt-Layoutgröße mit dem übergeordneten Dokument zu teilen. Schließlich enthalten wir ein {{htmlelement("script")}}-Element, das JavaScript zur Steuerung der Demo enthält.

```html
<head>
  <!-- ... -->

  <meta name="responsive-embedded-sizing" />

  <!-- ... -->
</head>
<body>
  <div tabindex="0">
    <h1>This is my frame</h1>
    <p>This is the content of my discontent.</p>
    <p>This is some more content.</p>
  </div>
  <script>
    /* ... */
  </script>
</body>
```

Das Skript in `frame.html` beginnt mit dem Abrufen einer Referenz auf das `<div>`-Element. Danach werden `click`- und `keydown`-Ereignislistener auf das `<div>` gesetzt, die beide eine benutzerdefinierte Funktion namens `addParagraph()` ausführen, wenn das Ereignis ausgelöst wird.

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", addParagraph);
window.addEventListener("keydown", addParagraph);
```

Die Funktion `addParagraph()` generiert ein neues Absatzelement und fügt es am Ende des `<div>` als Kind hinzu, wodurch seine Höhe erhöht wird. Danach wird `requestResize()` aufgerufen, damit die neue Größe dem übergeordneten Dokument gemeldet wird.

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

Obwohl keine explizite `Höhe` auf dem `<iframe>` gesetzt wurde, wird es auf die richtige Höhe dimensioniert, um genau sein eingebettetes Dokument ohne Bildlaufleisten zu enthalten. Versuchen Sie, auf den Inhalt zu klicken oder ihn zu fokussieren und eine Taste auf der Tastatur zu drücken. Während ein neuer Absatz zum `<div>` hinzugefügt wird, wächst das `<div>` in der Höhe, und das `<iframe>` wächst auch in der Höhe, um es anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("frame-sizing")}} CSS-Eigenschaft
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
