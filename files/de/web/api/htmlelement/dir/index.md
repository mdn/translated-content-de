---
title: "HTMLElement: dir-Eigenschaft"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{ApiRef("HTML DOM")}}

Die **`HTMLElement.dir`**-Eigenschaft gibt die Schreibrichtung des Textes des aktuellen Elements an. Sie spiegelt das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements wider.

Beachten Sie, dass, wenn das `dir`-Attribut nicht angegeben ist, das Element selbst die Richtung möglicherweise trotzdem vom übergeordneten Element erbt. Diese vererbte Richtung wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

Die Schreibrichtung eines Elements bestimmt, in welche Richtung der Text fließt (zur Unterstützung verschiedener Sprachsysteme). Arabische Sprachen und Hebräisch sind typische Sprachen, die die RTL-Richtung verwenden.

## Wert

Einer der folgenden:

- `"ltr"`
  - : Schreibrichtung von links nach rechts.
- `"rtl"`
  - : Schreibrichtung von rechts nach links.
- `"auto"`
  - : Die Richtung des Elements muss anhand des Inhalts des Elements bestimmt werden.
- `""`
  - : Der Standardwert; die Schreibrichtung wird vom übergeordneten Element geerbt.

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
  globales Attribut
- CSS {{cssxref("direction")}}-Eigenschaft
- CSS {{cssxref(":dir")}}-Pseudoklasse
