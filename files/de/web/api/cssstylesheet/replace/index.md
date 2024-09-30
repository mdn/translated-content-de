---
title: "CSSStyleSheet: replace()-Methode"
short-title: replace()
slug: Web/API/CSSStyleSheet/replace
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}

Die **`replace()`**-Methode des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interfaces ersetzt asynchron den Inhalt des Stylesheets mit dem übergebenen Inhalt. Die Methode gibt ein Promise zurück, das mit dem `CSSStyleSheet`-Objekt erfüllt wird.

Die `replace()`- und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)-Methoden können nur auf ein Stylesheet angewendet werden, das mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde.

## Syntax

```js-nolint
replace(text)
```

### Parameter

- `text`

  - : Ein String, der die Stilregeln enthält, um den Inhalt des Stylesheets zu ersetzen. Wenn der String keine analysierbare Liste von Regeln enthält, wird der Wert auf einen leeren String gesetzt.

    > [!NOTE]
    > Wenn eine der in `text` übergebenen Regeln ein externes Stylesheet ist, das mit der {{cssxref("@import")}}-Regel importiert wird, werden diese Regeln entfernt und eine Warnung wird in der Konsole ausgegeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn eine der beiden Bedingungen erfüllt ist:
    - Das Stylesheet wurde nicht mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt.
    - Das Stylesheet ist als nicht modifizierbar gekennzeichnet.

## Beispiele

Im folgenden Beispiel wird ein neues Stylesheet erstellt und zwei CSS-Regeln werden mit `replace()` hinzugefügt. Die erste Regel wird dann in der Konsole ausgegeben, was zurückgibt: `body { font-size: 1.4em; }`

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

- [Konstruktorfähige Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
