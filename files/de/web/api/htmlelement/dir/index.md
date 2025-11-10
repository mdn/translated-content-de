---
title: "HTMLElement: dir-Eigenschaft"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`HTMLElement.dir`**-Eigenschaft gibt die Schreibrichtung des Textes des aktuellen Elements an. Sie spiegelt das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut des Elements wider.

Beachten Sie, dass, wenn das `dir`-Attribut nicht angegeben ist, das Element selbst möglicherweise dennoch die Schreibrichtung von seinem übergeordneten Element erben kann. Diese vererbte Schreibrichtung wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

Die Schreibrichtung eines Elements bestimmt, in welche Richtung der Text verläuft (zur Unterstützung verschiedener Sprachsysteme). Arabische Sprachen und Hebräisch sind typische Sprachen, die die RTL-Richtung verwenden.

## Wert

Einer der folgenden:

- `"ltr"`
  - : Links-nach-rechts Schreibrichtung.
- `"rtl"`
  - : Rechts-nach-links Schreibrichtung.
- `"auto"`
  - : Die Schreibrichtung des Elements muss basierend auf dem Inhalt des Elements bestimmt werden.
- `""`
  - : Der Standardwert; die Schreibrichtung wird vom übergeordneten Element geerbt.

## Beispiele

```js
const para = document.getElementById("para1");
para.dir = "rtl";
// change the text direction on a paragraph identified as "para1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.dir`](/de/docs/Web/API/Document/dir)
- HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  globales Attribut
- CSS {{cssxref("direction")}}-Eigenschaft
- CSS {{cssxref(":dir")}}-Pseudoklasse
