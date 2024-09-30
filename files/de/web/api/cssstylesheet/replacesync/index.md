---
title: "CSSStyleSheet: Methode replaceSync()"
short-title: replaceSync()
slug: Web/API/CSSStyleSheet/replaceSync
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}

Die **`replaceSync()`**-Methode des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interfaces ersetzt synchron den Inhalt des Stylesheets mit dem übergebenen Inhalt.

Die Methoden `replaceSync()` und [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) können nur auf einem Stylesheet verwendet werden, das mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde.

## Syntax

```js-nolint
replaceSync(text)
```

### Parameter

- `text`

  - : Ein String, der die Stilregeln enthält, um den Inhalt des Stylesheets zu ersetzen. Wenn der String keine parsebare Liste von Regeln enthält, wird der Wert auf einen leeren String gesetzt.

    > [!NOTE]
    > Wenn einige der in `text` übergebenen Regeln ein externes Stylesheet sind, das mit der {{cssxref("@import")}}-Regel importiert wurde, werden diese Regeln entfernt und eine Warnung wird in der Konsole ausgegeben.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Stylesheet nicht mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde oder wenn das Stylesheet als unveränderlich gekennzeichnet ist.

## Beispiele

Im folgenden Beispiel wird ein neues Stylesheet erstellt und es werden zwei CSS-Regeln mit `replaceSync` hinzugefügt.

```js
const stylesheet = new CSSStyleSheet();

stylesheet.replaceSync("body { font-size: 1.4em; } p { color: red; }");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktible Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
