---
title: "HTML-Attribut: readonly"
short-title: readonly
slug: Web/HTML/Attributes/readonly
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das boolesche **`readonly`**-Attribut bewirkt, dass das Element unveränderbar ist, was bedeutet, dass der Benutzer die Kontrolle nicht bearbeiten kann.

{{EmbedInteractiveExample("pages/tabbed/attribute-readonly.html", "tabbed-shorter")}}

## Überblick

Wenn das `readonly`-Attribut bei einem Eingabeelement angegeben ist, kann der Benutzer die Eingabe nicht bearbeiten, wodurch das Element nicht an der Eingabefeldvalidierung teilnimmt.

Das `readonly`-Attribut wird von `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}` und `{{HTMLElement("input/number","number")}}` {{HTMLElement("input")}}-Typen sowie den {{HTMLElement("textarea")}}-Formularelementen unterstützt. Wenn es bei einem dieser Eingabetypen und Elemente vorhanden ist, wird die {{cssxref(':read-only')}} Pseudo-Klasse übereinstimmen. Ist das Attribut nicht enthalten, wird die {{cssxref(':read-write')}} Pseudo-Klasse übereinstimmen.

Das Attribut wird nicht unterstützt oder ist nicht relevant für {{HTMLElement("select")}} oder Eingabetypen, die bereits nicht veränderbar sind, wie `{{HTMLElement("input/checkbox","checkbox")}}` und `{{HTMLElement("input/radio","radio")}}` oder die definitionsgemäß keinen Startwert haben können, wie der Eingabetyp `{{HTMLElement("input/file","file")}}`. `{{HTMLElement("input/range","range")}}` und `{{HTMLElement("input/color","color")}}`, da beide Standardwerte haben. Es wird auch nicht bei `{{HTMLElement("input/hidden","hidden")}}` unterstützt, da nicht erwartet werden kann, dass ein Benutzer ein verstecktes Formularfeld ausfüllt. Ebenso wird es bei keinem der Buttentypen, einschließlich `image`, unterstützt.

> [!NOTE]
> Nur Texteingaben können schreibgeschützt gemacht werden, da es bei anderen Steuerelementen (wie Kontrollkästchen und Schaltflächen) keinen nützlichen Unterschied zwischen schreibgeschützt und deaktiviert gibt, sodass das `readonly`-Attribut nicht zutrifft.

Wenn eine Eingabe das `readonly`-Attribut hat, gilt auch die {{cssxref(":read-only")}}-Pseudo-Klasse. Im Gegensatz dazu stimmen Eingaben, die das `readonly`-Attribut unterstützen, aber nicht gesetzt haben, mit der {{cssxref(":read-write")}}-Pseudo-Klasse überein.

### Attribut-Interaktionen

Der Unterschied zwischen [`disabled`](/de/docs/Web/HTML/Attributes/disabled) und `readonly` besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten können und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht funktionieren, bis sie aktiviert werden.

Weil ein schreibgeschütztes Feld seinen Wert durch Benutzerinteraktion nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkung auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

Der einzige Weg, den Wert des `readonly`-Attributs dynamisch zu ändern, ist über ein Skript.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben, bei denen das `readonly`-Attribut angegeben ist, nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen das `readonly`-Attribut an.

### Eingabefeldvalidierung

Wenn das Element schreibgeschützt ist, kann der Wert des Elements vom Benutzer nicht aktualisiert werden und nimmt nicht an der Eingabefeldvalidierung teil.

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
