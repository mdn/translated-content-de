---
title: "HTMLElement: dir-Eigenschaft"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{ApiRef("HTML DOM")}}

Die **`HTMLElement.dir`**-Eigenschaft gibt die Schreibrichtung des Inhalts des aktuellen Elements an. Sie spiegelt das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements wider.

Beachten Sie, dass, wenn das `dir`-Attribut nicht angegeben ist, das Element selbst die Richtung möglicherweise von seinem Elternteil erbt. Diese vererbte Richtung wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

Die Schreibrichtung eines Elements bestimmt, in welche Richtung der Text verläuft (zur Unterstützung unterschiedlicher Sprachsysteme). Arabische und hebräische Sprachen sind typische Beispiele für Sprachen mit RTL-Schreibrichtung.

## Wert

Einer der folgenden:

- `"ltr"`
  - : Schreibstil von links nach rechts.
- `"rtl"`
  - : Schreibstil von rechts nach links.
- `"auto"`
  - : Die Richtung des Elements muss basierend auf dem Inhalt des Elements bestimmt werden.
- `""`
  - : Der Standardwert; die Richtung wird vom Elternelement geerbt.

## Beispiele

```js
const parg = document.getElementById("para1");
parg.dir = "rtl";
// change the text direction on a paragraph identified as "para1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.dir`](/de/docs/Web/API/Document/dir)
- HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
  Global-Attribut
- CSS {{cssxref("direction")}} Eigenschaft
- CSS {{cssxref(":dir")}} Pseudo-Klasse
