---
title: "HTML-Attribut: readonly"
short-title: readonly
slug: Web/HTML/Attributes/readonly
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das boolesche **`readonly`**-Attribut sorgt dafür, dass das Element nicht veränderbar ist, was bedeutet, dass der Benutzer das Steuerungselement nicht bearbeiten kann.

{{EmbedInteractiveExample("pages/tabbed/attribute-readonly.html", "tabbed-shorter")}}

## Überblick

Wenn das `readonly`-Attribut bei einem Eingabeelement angegeben ist, nimmt das Element nicht an der Constraints-Validierung teil, da der Benutzer die Eingabe nicht bearbeiten kann.

Das `readonly`-Attribut wird von den `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}` und `{{HTMLElement("input/number","number")}}` {{HTMLElement("input")}}-Typen und den Formularsteuerelementen {{HTMLElement("textarea")}} unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':read-only')}} Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':read-write')}} Pseudoklasse übereinstimmen.

Das Attribut wird bei {{HTMLElement("select")}} oder Eingabetypen, die bereits unveränderlich sind, wie `{{HTMLElement("input/checkbox","checkbox")}}` und `{{HTMLElement("input/radio","radio")}}`, oder die definitionsgemäß nicht mit einem Wert beginnen können, wie der `{{HTMLElement("input/file","file")}}` Eingabetyp, nicht unterstützt oder ist nicht relevant. `{{HTMLElement("input/range","range")}}` und `{{HTMLElement("input/color","color")}}` haben beide Standardwerte. Es wird auch nicht bei `{{HTMLElement("input/hidden","hidden")}}` unterstützt, da es nicht erwartet werden kann, dass Benutzer ein verstecktes Formular ausfüllen. Ebenso wird es bei keinem der Button-Typen, einschließlich `image`, unterstützt.

> [!NOTE]
> Nur Textsteuerungen können schreibgeschützt gemacht werden, da bei anderen Steuerungen (wie Kontrollkästchen und Schaltflächen) keine sinnvolle Unterscheidung zwischen schreibgeschützt und deaktiviert besteht. Das `readonly`-Attribut gilt daher nicht.

Wenn eine Eingabe das `readonly`-Attribut hat, gilt auch die {{cssxref(":read-only")}} Pseudoklasse dafür. Umgekehrt werden Eingaben, die das `readonly`-Attribut unterstützen, aber nicht gesetzt haben, mit der {{cssxref(":read-write")}} Pseudoklasse übereinstimmen.

### Attribut-Interaktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Attributes/disabled) und `readonly` besteht darin, dass schreibgeschützte Steuerungen weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerungen keinen Fokus erhalten können, nicht mit dem Formular gesendet werden und im Allgemeinen nicht als Steuerungen funktionieren, bis sie aktiviert werden.

Da ein schreibgeschütztes Feld seinen Wert nicht durch eine Benutzerinteraktion ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben, bei denen das `readonly`-Attribut auch angegeben ist.

Der einzige Weg, den Wert des readonly-Attributs dynamisch zu ändern, ist über ein Skript.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben, die das `readonly`-Attribut spezifiziert haben, nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen das `readonly`-Attribut an.

### Constraints-Validierung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements nicht vom Benutzer aktualisiert werden und nimmt nicht an der Constraints-Validierung teil.

## Beispiel

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(':read-only')}} und {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
