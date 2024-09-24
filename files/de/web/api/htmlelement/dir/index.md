---
title: "HTMLElement: dir-Eigenschaft"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{ApiRef("HTML DOM")}}

Die **`HTMLElement.dir`**-Eigenschaft gibt die Schreibrichtung des Textes innerhalb des aktuellen Elements an. Sie spiegelt das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements wider.

Beachten Sie, dass, wenn das `dir`-Attribut nicht angegeben ist, das Element selbst möglicherweise dennoch die Schreibrichtung von seinem übergeordneten Element erbt. Diese vererbte Schreibrichtung wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

Die Schreibrichtung eines Elements gibt an, in welche Richtung der Text geschrieben wird (zur Unterstützung verschiedener Sprachsysteme). Arabische Sprachen und Hebräisch sind typische Sprachen, die die RTL-Schreibrichtung verwenden.

## Wert

Einer der folgenden:

- `"ltr"`
  - : Schreibrichtung von links nach rechts.
- `"rtl"`
  - : Schreibrichtung von rechts nach links.
- `"auto"`
  - : Die Richtung des Elements muss auf Basis des Inhalts des Elements bestimmt werden.
- `""`
  - : Der Standardwert; die Schreibrichtung wird vom übergeordneten Element vererbt.

## Beispiele

```js
const parg = document.getElementById("para1");
parg.dir = "rtl";
// Ändern Sie die Schreibrichtung eines Absatzes, der als "para1" identifiziert ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.dir")}}
- HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir) globales Attribut
- CSS {{cssxref("direction")}}-Eigenschaft
- CSS {{cssxref(":dir")}}-Pseudoklasse
