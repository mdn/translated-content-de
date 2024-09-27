---
title: "CSSStyleSheet: replaceSync()-Methode"
short-title: replaceSync()
slug: Web/API/CSSStyleSheet/replaceSync
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}

Die **`replaceSync()`**-Methode des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interfaces ersetzt synchron den Inhalt des Stylesheets durch den übergebenen Inhalt.

Die Methoden `replaceSync()` und [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) können nur auf Stylesheets angewendet werden, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurden.

## Syntax

```js-nolint
replaceSync(text)
```

### Parameter

- `text`

  - : Ein String, der die Stilregeln enthält, um den Inhalt des Stylesheets zu ersetzen. Wenn der String keine parsfähige Liste von Regeln enthält, wird der Wert auf einen leeren String gesetzt.

    > [!NOTE]
    > Wenn eine der Regeln in `text` ein externes Stylesheet ist, das mit der {{cssxref("@import")}}-Regel importiert wurde, werden diese Regeln entfernt und eine Warnung in die Konsole ausgegeben.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Stylesheet nicht mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor erstellt wurde oder wenn das Stylesheet als unveränderbar markiert ist.

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

- [Konstruierbare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
