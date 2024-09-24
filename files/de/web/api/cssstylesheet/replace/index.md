---
title: "CSSStyleSheet: replace()-Methode"
short-title: replace()
slug: Web/API/CSSStyleSheet/replace
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}

Die **`replace()`**-Methode der {{domxref("CSSStyleSheet")}}-Schnittstelle ersetzt asynchron den Inhalt des Stylesheets mit dem übergebenen Inhalt. Die Methode gibt ein Versprechen zurück, das mit dem `CSSStyleSheet`-Objekt erfüllt wird.

Die Methoden `replace()` und {{domxref("CSSStyleSheet.replaceSync()")}} können nur auf einem Stylesheet verwendet werden, das mit dem {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}}-Konstruktor erstellt wurde.

## Syntax

```js-nolint
replace(text)
```

### Parameter

- `text`

  - : Ein String, der die Stilregeln enthält, um den Inhalt des Stylesheets zu ersetzen. Wenn der String keine parsebare Liste von Regeln enthält, wird der Wert auf einen leeren String gesetzt.

    > [!NOTE]
    > Wenn eine der im `text` übergebenen Regeln ein externes Stylesheet ist, das mit der {{cssxref("@import")}}-Regel importiert wird, werden diese Regeln entfernt und eine Warnung wird in der Konsole ausgegeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem {{domxref("CSSStyleSheet")}} erfüllt wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Das Stylesheet wurde nicht mit dem {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}}-Konstruktor erstellt.
    - Das Stylesheet ist als nicht modifizierbar gekennzeichnet.

## Beispiele

Im folgenden Beispiel wird ein neues Stylesheet erstellt und zwei CSS-Regeln werden mit `replace()` hinzugefügt. Die erste Regel wird dann in der Konsole ausgegeben, was folgendes zurückgibt: `body { font-size: 1.4em; }`

```js
const stylesheet = new CSSStyleSheet();

stylesheet
  .replace("body { font-size: 1.4em; } p { color: red; }")
  .then(() => {
    console.log(stylesheet.cssRules[0].cssText);
  })
  .catch((err) => {
    console.error("Failed to replace styles:", err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktierbare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
