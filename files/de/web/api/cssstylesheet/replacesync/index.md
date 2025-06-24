---
title: "CSSStyleSheet: Methode replaceSync()"
short-title: replaceSync()
slug: Web/API/CSSStyleSheet/replaceSync
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Die **`replaceSync()`**-Methode der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Schnittstelle ersetzt synchron den Inhalt des Stylesheets mit dem übergebenen Inhalt.

Die Methoden `replaceSync()` und [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) können nur auf einem Stylesheet verwendet werden, das mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde.

## Syntax

```js-nolint
replaceSync(text)
```

### Parameter

- `text`

  - : Ein String, der die Stilregeln enthält, um den Inhalt des Stylesheets zu ersetzen. Wenn der String keine parsefähige Liste von Regeln enthält, wird der Wert auf einen leeren String gesetzt.

    > [!NOTE]
    > Wenn eine der in `text` übergebenen Regeln ein externes Stylesheet ist, das mit der {{cssxref("@import")}}-Regel importiert wird, werden diese Regeln entfernt, und eine Warnung wird in der Konsole ausgegeben.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Stylesheet nicht mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde oder wenn das Stylesheet als nicht änderbar gekennzeichnet ist.

## Beispiele

Im folgenden Beispiel wird ein neues Stylesheet erstellt und zwei CSS-Regeln mit `replaceSync` hinzugefügt.

```js
const stylesheet = new CSSStyleSheet();

stylesheet.replaceSync("body { font-size: 1.4em; } p { color: red; }");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktion von Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
