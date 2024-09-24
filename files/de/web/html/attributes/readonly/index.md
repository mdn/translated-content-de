---
title: "HTML-Attribut: readonly"
short-title: readonly
slug: Web/HTML/Attributes/readonly
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das boolesche **`readonly`**-Attribut macht das Element unveränderlich, wenn es vorhanden ist, was bedeutet, dass der Benutzer die Steuerung nicht bearbeiten kann.

{{EmbedInteractiveExample("pages/tabbed/attribute-readonly.html", "tabbed-shorter")}}

## Übersicht

Wenn das `readonly`-Attribut auf einem Eingabeelement angegeben ist, nimmt das Element nicht an der Eingabekontrollvalidierung teil, da der Benutzer die Eingabe nicht bearbeiten kann.

Das `readonly`-Attribut wird von den Typen `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}` und `{{HTMLElement("input/number","number")}}` sowie von den Formularelementen des {{HTMLElement("textarea")}}-Elements unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':read-only')}}-Pseudo-Klasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':read-write')}}-Pseudo-Klasse übereinstimmen.

Das Attribut wird nicht unterstützt oder ist nicht relevant für {{HTMLElement("select")}} oder Eingabetypen, die bereits nicht veränderbar sind, wie `{{HTMLElement("input/checkbox","checkbox")}}` und `{{HTMLElement("input/radio","radio")}}`, oder die definitionsgemäß nicht mit einem Wert beginnen können, wie der Eingabetyp `{{HTMLElement("input/file","file")}}`. Auch `{{HTMLElement("input/range","range")}}` und `{{HTMLElement("input/color","color")}}`, da beide Standardwerte haben. Es wird auch nicht bei `{{HTMLElement("input/hidden","hidden")}}` unterstützt, da nicht erwartet werden kann, dass ein Benutzer ein verstecktes Formular ausfüllt. Auch bei keinem der Schaltflächentypen, einschließlich `image`, ist es unterstützt.

> [!NOTE]
> Nur Textelemente können schreibgeschützt gemacht werden, da es bei anderen Steuerelementen (wie Kontrollkästchen und Schaltflächen) keinen nützlichen Unterschied zwischen schreibgeschützt und deaktiviert gibt, sodass das `readonly`-Attribut nicht gilt.

Wenn ein Eingabefeld das `readonly`-Attribut hat, gilt auch die {{cssxref(":read-only")}}-Pseudo-Klasse darauf. Umgekehrt stimmen Eingaben, die das `readonly`-Attribut unterstützen, aber das Attribut nicht gesetzt haben, mit der {{cssxref(":read-write")}}-Pseudo-Klasse überein.

### Attribut-Interaktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Attributes/disabled) und `readonly` besteht darin, dass schreibgeschützte Steuerungen weiterhin funktionieren und fokussierbar bleiben, während deaktivierte Steuerungen keinen Fokus erhalten können, nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerungen funktionieren, bis sie aktiviert werden.

Da ein schreibgeschütztes Feld nicht durch eine Benutzerinteraktion geändert werden kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) bei Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut keine Wirkung.

Der einzige Weg, den Wert des readonly-Attributs dynamisch zu ändern, ist über ein Skript.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit angegebenem `readonly`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen das `readonly`-Attribut an.

### Eingabekontrollvalidierung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements nicht vom Benutzer aktualisiert werden und nimmt nicht an der Eingabekontrollvalidierung teil.

## Beispiel

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Textfeld</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Datum</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">E-Mail</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Passwort</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Nachricht</label>
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
