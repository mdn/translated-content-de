---
title: "Element: ariaErrorMessageElements-Eigenschaft"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaErrorMessageElements`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist ein Array, das das Element (oder die Elemente) enthält, welche die Fehlermeldung für das angewendete Element bereitstellen.

Das Thema [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die Fehlermeldung zu erhalten.

Beim Auslesen wird das zurückgegebene Array statisch und schreibgeschützt sein.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attributs, um die Fehlermeldung für ein Element festzulegen.
Im Gegensatz zu `aria-errormessage` müssen die dieser Eigenschaft zugewiesenen Elemente keine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribute haben.

Die Eigenschaft spiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die gültigen in-Bereich-Elementen entsprechen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Weitere Informationen über reflektierte Elementreferenzen und den Bereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### E-Mail-Eingabe mit Fehlermeldung

Dieses Beispiel zeigt, wie wir `aria-errormessage` verwenden, um die Fehlermeldung für die Eingabe einer ungültigen E-Mail-Adresse zu setzen, und demonstriert, wie wir die Nachricht mit `ariaErrorMessageElements` abrufen und setzen können.

#### HTML

Zuerst definieren wir eine HTML-E-Mail-Eingabe und setzen das `aria-errormessage`-Attribut, um auf ein Element mit der `id` von `err1` zu verweisen.
Dann definieren wir ein `<span>`-Element, das diese id hat und eine Fehlermeldung enthält.

```html
<p>
  <label for="email">Email address:</label>
  <input type="email" name="email" id="email" aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

#### CSS

Wir erstellen einige Stile, um die Fehlermeldung standardmäßig auszublenden, sie jedoch sichtbar zu machen und als Fehler zu kennzeichnen, wenn `aria-invalid` auf das Element gesetzt ist.

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

#### JavaScript

Wir überprüfen dann die Eingabe und setzen [`ariaInvalid`](/de/docs/Web/API/AriaInvalid) auf `true` oder `false` basierend auf der [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Constraint-Verletzung.
`ariaInvalid` wird wiederum im `aria-invalid`-Attribut widergespiegelt, das den Fehler bei Bedarf ausblendet oder anzeigt.

```js
const email = document.querySelector("#email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.ariaInvalid = true;
  } else {
    email.ariaInvalid = false;
  }
});
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wir protokollieren dann den Wert des `aria-errormessage`-Attributs, die `ariaErrorMessageElements` und den inneren Text der `ariaErrorMessageElements`.

```js
log(`aria-errormessage: ${email.getAttribute("aria-errormessage")}`);
// Feature test for ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  // Get ariaErrorMessageElements
  const propElements = email.ariaErrorMessageElements;
  log(`ariaErrorMessageElements: ${propElements}`);

  // Accessible text from element inner text
  const text = propElements.map((e) => e.textContent.trim).join(" ");
  log(`Error message details: ${text.trim()}`);
} else {
  log("element.ariaErrorMessageElements: not supported by browser");
}
```

#### Ergebnis

Während Sie eine E-Mail-Adresse eingeben, wird der Fehlertest angezeigt, bis die E-Mail-Adresse gültig ist.
Beachten Sie, dass das Log die von dem Attribut gelesene Fehlermeldungsreferenz, das Element aus `ariaErrorMessageElements` und den inneren Text des Elements zeigt, welcher seine Fehlermeldung ist.

{{EmbedLiveSample("Email input with error message","100%","180px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflection_-Leitfaden.
