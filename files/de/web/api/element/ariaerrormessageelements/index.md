---
title: "Element: ariaErrorMessageElements-Eigenschaft"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{APIRef("DOM")}}

Die **`ariaErrorMessageElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das oder die Elemente enthält, die eine Fehlermeldung für das Element bereitstellen, auf das sie angewendet wird.

Das Thema [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die Fehlermeldung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array wirken sich nicht auf den Wert der Eigenschaft aus.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attributs, um die Fehlermeldung für ein Element festzulegen.
Im Gegensatz zu `aria-errormessage` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Referenz/Globale_Attribute/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete `id`-Referenzwerte, die mit gültigen Elementen im Geltungsbereich übereinstimmen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu gespiegelten Elementreferenzen und Geltungsbereichen finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Reflected attributes_.

## Beispiele

### E-Mail-Eingabe mit Fehlermeldung

Dieses Beispiel zeigt, wie wir `aria-errormessage` verwenden, um die Fehlermeldung für die Meldung der Eingabe einer ungültigen E-Mail-Adresse festzulegen, und demonstriert, wie wir die Nachricht mit `ariaErrorMessageElements` abrufen und setzen können.

#### HTML

Zuerst definieren wir ein HTML-Eingabeelement für E-Mails und setzen sein `aria-errormessage`-Attribut, um ein Element mit der `id` von `err1` zu referenzieren.
Wir definieren dann ein `<span>`-Element, das diese ID hat und eine Fehlermeldung enthält.

```html
<p>
  <label for="email">Email address:</label>
  <input type="email" name="email" id="email" aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

#### CSS

Wir erstellen einige Stile, um die Fehlermeldung standardmäßig auszublenden, sie jedoch sichtbar und als Fehler gestylt zu machen, wenn `aria-invalid` auf das Element gesetzt wird.

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

Dann prüfen wir die Eingabe und setzen [`ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid) auf `true` oder `false` basierend auf der [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Einschränkungsverletzung.
`ariaInvalid` wird wiederum im `aria-invalid`-Attribut widergespiegelt, das den Fehler je nach Bedarf ausblendet und anzeigt.

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

Wir loggen dann den Wert des `aria-errormessage`-Attributs, die `ariaErrorMessageElements` und den inneren Text der `ariaErrorMessageElements`

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

Wenn Sie eine E-Mail-Adresse eingeben, wird der Fehlertext angezeigt, bis die E-Mail-Adresse gültig ist.
Beachten Sie, dass das Log die Fehlermeldungsreferenz zeigt, die aus dem Attribut gelesen wurde, das Element aus `ariaErrorMessageElements` und den inneren Text des Elements, der seine Fehlermeldung ist.

{{EmbedLiveSample("E-Mail-Eingabe mit Fehlermeldung","100%","180px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Attribute reflection_.
