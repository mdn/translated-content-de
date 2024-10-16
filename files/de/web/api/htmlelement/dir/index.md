---
title: "HTMLElement: dir-Eigenschaft"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ApiRef("HTML DOM")}}

Die **`HTMLElement.dir`**-Eigenschaft gibt die Schreibrichtung des Textes des aktuellen Elements an. Sie spiegelt das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements wider.

Beachten Sie, dass wenn das `dir`-Attribut nicht angegeben ist, das Element selbst die Richtung möglicherweise immer noch von seinem übergeordneten Element erbt. Diese geerbte Richtung wird jedoch nicht durch den Wert dieser Eigenschaft widergespiegelt.

Die Schreibrichtung eines Elements bezieht sich darauf, in welche Richtung der Text läuft (für die Unterstützung unterschiedlicher Sprachsysteme). Arabische Sprachen und Hebräisch sind typische Sprachen, die die RTL-Richtung verwenden.

## Wert

Einer der folgenden:

- `"ltr"`
  - : Schreibrichtung von links nach rechts.
- `"rtl"`
  - : Schreibrichtung von rechts nach links.
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
- HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
  globales Attribut
- CSS {{cssxref("direction")}}-Eigenschaft
- CSS {{cssxref(":dir")}}-Pseudoklasse
