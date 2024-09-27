---
title: "HTMLScriptElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`fetchPriority`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein Hinweis, der dem Browser angibt, wie er das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisieren soll.

Sie spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Das externe Skript wird mit hoher Priorität im Verhältnis zu anderen externen Skripten abgerufen.
- `low`
  - : Das externe Skript wird mit niedriger Priorität im Verhältnis zu anderen externen Skripten abgerufen.
- `auto`
  - : Standardmodus, der keine Präferenz für die Abrufpriorität angibt.
    Der Browser entscheidet, was am besten für den Benutzer ist.

Wenn das `fetchpriority`-Attribut nicht angegeben ist oder mit einem anderen Wert angegeben wird, entspricht es der Angabe `auto`.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, externe Skriptabrufe mit hoher oder niedriger Priorität zu signalisieren. Dies kann nützlich sein, wenn es auf {{HTMLElement("script")}}-Elemente angewendet wird, um externe Skripte zu signalisieren, die früh im Ladeprozess "wichtig" für die Benutzererfahrung sind.

Die Auswirkungen des Hinweises auf das Ressourcen-Loading sind browserspezifisch, daher sollten Sie auf mehreren Browser-Engines testen.

Verwenden Sie es sparsam für Ausnahmefälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch zu bestimmen, wie das externe Skript am besten geladen werden soll. Übermäßige Verwendung kann zu Leistungseinbußen führen.

## Beispiele

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Output: "high"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
